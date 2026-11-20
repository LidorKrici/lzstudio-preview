/* Topple: the 3D stage (three.js). It draws one row of growing dominoes on a spiral, lets them fall with a small
 * deterministic physics model, and follows them with a camera that turns and pulls back as the stones grow.
 * Nothing here decides a result: game.js tells it which stone gets struck and which stones stay standing, exactly as the
 * round's events say, and listens to onCollect() to keep the pot in step with what the player sees.
 *
 * window.ToppleScene(canvas, opts) -> scene
 *   ready                     Promise, resolves when textures and light are loaded
 *   setRow(desc)              desc: { growth, bonus, slots:[{ kind, world, label, x, a, b, la, lb }] }; slot 0 is the play stone
 *   strike(slot, lane)        Promise: the brass ball swings in and knocks that stone over (resolves at the hit)
 *   run(stops, onCollect)     Promise: lets the chain go until everything is still. stops: [{ slot, lane }] stay standing
 *   project(slot, lane, up)   -> { x, y, scale, visible } in CSS pixels of the canvas, for DOM labels
 *   setRate(r), resize(), tick(dt) (manual stepping for tests), onWorld(world), onHit(info) hooks
 */
(function () {
  'use strict';
  const T = window.THREE;
  const TH = 0.3125, H0 = 0.048, GAP = 0.45, TURN = 14 * Math.PI / 180, LANE = 0.56, T0 = 0.19, TGROW = 1.03, REST = 0.5, THC = 0.47;

  // ---------- spiral geometry: self-similar, so one radius factor per growth rate ----------
  const radCache = {};
  function spiral(g) {
    if (radCache[g]) return radCache[g];
    const at = (R, s) => { const h = H0 * Math.pow(g, s); return { h, w: h / 2, t: h / 2 * TH, x: R * h * Math.cos(s * TURN), z: R * h * Math.sin(s * TURN) }; };
    const gapFor = R => {
      const a = at(R, 0), b = at(R, 1), c = at(R, 2), pa = Math.atan2(b.z - a.z, b.x - a.x), pb = Math.atan2(c.z - b.z, c.x - b.x);
      const Bx = b.x - b.t / 2 * Math.cos(pb) - (a.x + a.t / 2 * Math.cos(pa)), Bz = b.z - b.t / 2 * Math.sin(pb) - (a.z + a.t / 2 * Math.sin(pa));
      return { gap: ((Bx * Math.cos(pb) + Bz * Math.sin(pb)) - a.w / 2 * Math.abs(Math.sin(TURN))) / Math.cos(TURN), psi0: pa };
    };
    let lo = 0.3, hi = 9;
    for (let n = 0; n < 44; n++) { const R = (lo + hi) / 2; if (gapFor(R).gap > GAP * H0) hi = R; else lo = R; }
    const R = (lo + hi) / 2;
    return (radCache[g] = { R, psi0: gapFor(R).psi0 });
  }

  // ---------- looks ----------
  // Each world: ground texture id (from the asset pack, with a tinted-walnut fallback), size of one texture tile in
  // metres, light, fog. `tint` is only used by the fallback.
  const WORLDS = [null,
    { name: 'THE TABLE', ground: ['wood_table_001'], tile: 0.26, tint: 0xd2b190, env: ['lythwood_lounge'], rot: 2.2, key: 0xffdcae, keyI: 3.3, envI: 0.85, fog: 0x120b06, exp: 1.0 },
    { name: 'THE ROOM', ground: ['herringbone_parquet'], tile: 3.4, tint: 0xb8905e, env: ['lythwood_lounge'], rot: 2.2, key: 0xffe2bc, keyI: 3.1, envI: 0.9, fog: 0x140d07, exp: 1.0 },
    { name: 'THE STREET', ground: ['cobblestone_pavement', 'floor_pattern_02'], tile: 7, tint: 0x8a857c, env: ['neuer_zollhof', 'lythwood_lounge'], key: 0xffc890, keyI: 3.0, envI: 0.9, fog: 0x0d0d14, exp: 1.02 },
    { name: 'THE CITY', ground: ['asphalt_track'], tile: 60, tint: 0x47484f, env: ['shanghai_bund', 'lythwood_lounge'], key: 0xc8d4ff, keyI: 2.0, envI: 0.9, fog: 0x060810, exp: 1.1 },
    { name: 'ABOVE THE CLOUDS', ground: ['__clouds'], tile: 320, tint: 0xc6d4ea, env: ['qwantani_moonrise_puresky', 'lythwood_lounge'], key: 0xcfdcff, keyI: 2.2, envI: 0.55, fog: 0x0a1226, exp: 1.05 }
  ];
  const NOIR = { name: 'GOLDEN RUN', ground: ['leather_white'], tile: 0.22, tint: 0x1c1d22, env: ['studio_small_08', 'lythwood_lounge'], rot: 1.1, key: 0xfff4e6, keyI: 3.0, envI: 1.1, fog: 0x050608, exp: 1.0 };
  const MULT_COL = { 2: 0x0a9a5c, 3: 0x1c58e0, 5: 0x7a2fd6, 10: 0xd4183c, 20: 0x0b0b0d, 50: 0x0b0b0d };

  const PERF = () => window.__TP_PERF;
  const mark = (name, t0) => { const p = PERF(); if (p) p.ev.push([name, Math.round(t0), Math.round((performance.now() - t0) * 10) / 10]); };
  window.ToppleScene = function (canvas, opts) {
    opts = opts || {};
    const PACK = window.TOPPLE_PACK || (window.TOPPLE_ASSETS ? { ground: window.TOPPLE_ASSETS.tex, env: window.TOPPLE_ASSETS.hdr, props: {}, manifest: {} } : null);
    const base = opts.base || 'assets/';
    const mobile = Math.min(screen.width, screen.height) < 700 || /Android|iPhone|iPad/i.test(navigator.userAgent);
    const Q = { dpr: mobile ? 1.5 : 2, shadow: mobile ? 1024 : 2048, msaa: mobile ? 2 : 4, post: true, glass: !mobile };

    const renderer = new T.WebGLRenderer({ canvas, antialias: !!opts.hero, alpha: !!opts.hero, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q.dpr));
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    const scene = new T.Scene(), camera = new T.PerspectiveCamera(26, 16 / 9, 0.01, 100);
    scene.fog = new T.FogExp2(0x120b06, 1);
    const manager = new T.LoadingManager(), loader = new T.TextureLoader(manager), maxAniso = renderer.capabilities.getMaxAnisotropy();
    const api = { onWorld: null, onHit: null, world: 1 };

    // ---------- assets ----------
    const hasGround = id => !!(PACK ? PACK.ground && PACK.ground[id] : opts.grounds && opts.grounds.indexOf(id) >= 0);
    const hasEnv = id => !!(PACK ? PACK.env && PACK.env[id] : opts.envs && opts.envs.indexOf(id) >= 0);
    const firstOf = (ids, has) => ids.find(has) || null;
    const texCache = {};
    function tex(id, map, srgb) {
      const key = id + map; if (texCache[key]) return texCache[key];
      const t = loader.load(PACK ? PACK.ground[id][map] : base + 'ground/' + id + '/' + map + '.webp');
      t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = maxAniso; if (srgb) t.colorSpace = T.SRGBColorSpace;
      return (texCache[key] = t);
    }
    const envs = {}, pmrem = new T.PMREMGenerator(renderer);
    function loadEnv(id) {
      const buf = PACK ? Promise.resolve(Uint8Array.from(atob(PACK.env[id]), c => c.charCodeAt(0)).buffer) : fetch(base + 'env/' + id + '.hdr').then(r => r.arrayBuffer());
      return buf.then(b => {
        const r = new T.RGBELoader().parse(b), t = new T.DataTexture(r.data, r.width, r.height, T.RGBAFormat, r.type);
        t.mapping = T.EquirectangularReflectionMapping; t.colorSpace = T.LinearSRGBColorSpace; t.minFilter = t.magFilter = T.LinearFilter; t.flipY = true; t.needsUpdate = true;
        const t0 = performance.now(); envs[id] = pmrem.fromEquirectangular(t).texture; t.dispose(); mark('pmrem ' + id, t0);
      }).catch(() => {});
    }

    // ---------- materials ----------
    const M = {};
    const phys = o => new T.MeshPhysicalMaterial(o);
    const metal = (color, roughness) => phys({ color, metalness: 1, roughness, clearcoat: 0.3, clearcoatRoughness: 0.25 });
    const lacquer = (color, roughness, glow) => phys({ color, metalness: 0, roughness, clearcoat: 1, clearcoatRoughness: 0.05, emissive: glow ? color : 0x000000, emissiveIntensity: glow ? 0.35 : 0 });
    M.ivory = phys({ color: 0xf1e7d0, roughness: 0.4, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.18, sheen: 0.3, sheenColor: new T.Color(0xffe6c0) });
    M.bronze = metal(0xa9652c, 0.34); M.silver = metal(0xd9dde2, 0.2); M.gold = metal(0xffc35a, 0.15);
    // diamond: no see-through pass (it costs a second render of the scene); a bright, thin-film crystal that glows a little
    M.diamond = phys({ color: 0xbfdcff, metalness: 0.35, roughness: 0.05, iridescence: 1, iridescenceIOR: 1.8, iridescenceThicknessRange: [220, 620], clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 2.6, emissive: 0x2f6bff, emissiveIntensity: 0.22 });
    M.black = lacquer(0x09090b, 0.3); M.pearl = lacquer(0xf2eee4, 0.28); M.brass = metal(0xc9a253, 0.24);
    M.pin = new T.MeshStandardMaterial({ color: 0xc9a253, roughness: 0.26, metalness: 1 });
    M.string = new T.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.8, metalness: 0 });
    for (const x in MULT_COL) M['m' + x] = lacquer(MULT_COL[x], 0.22, +x < 20);
    const TIER = [null, 'ivory', 'bronze', 'silver', 'gold', 'diamond'], NOIR_TIER = [null, 'black', 'black', 'pearl', 'gold', 'diamond'];
    const INK = { ivory: '#15110c', bronze: '#1c130b', silver: '#101216', gold: '#1c1305', diamond: '#0b2233', black: '#ffc35a', pearl: '#b8862a', brass: '#1c1305' };
    function bodyOf(s, bonus) {
      if (s.kind === 'm') return ['m' + s.x, '#ffffff'];
      if (s.kind === 'g') return ['gold', INK.gold];
      if (s.kind === 'p') return ['brass', INK.brass];
      if (s.kind === 's') return [bonus ? 'pearl' : 'black', bonus ? INK.pearl : '#f1e7d0'];
      if (s.kind === 'bet') return [bonus ? 'gold' : 'ivory', bonus ? INK.gold : INK.ivory];
      const m = (bonus ? NOIR_TIER : TIER)[s.world || 1]; return [m, INK[m]];
    }

    // ---------- face art: one canvas per stone face (value on top, the stone's mark below) ----------
    const FONT = opts.font || 'Cinzel, Georgia, serif';
    function faceCanvas(s, ink) {
      const W = 256, H = 512, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
      const g = cv.getContext('2d'); g.fillStyle = g.strokeStyle = ink; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineCap = 'round'; g.lineJoin = 'round';
      g.fillRect(34, H / 2 - 5, W - 68, 10);                                   // the divider bar
      const text = (str, cy, max, weight) => { if (!str) return; let px = max; g.font = weight + ' ' + px + 'px ' + FONT; const w = g.measureText(str).width; if (w > W - 44) { px = Math.floor(px * (W - 44) / w); g.font = weight + ' ' + px + 'px ' + FONT; } g.fillText(str, W / 2, cy + px * 0.04); };
      const dot = (x, y, r) => { g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.fill(); };
      const cy = H * 0.75, big = s.kind === 'm';
      text(s.label, H * 0.26, big ? 150 : 104, '800');
      if (s.sub) text(s.sub, H * 0.44, 30, '700');
      if (s.kind === 'm') { g.lineWidth = 12; g.beginPath(); g.arc(W / 2, cy, 62, 0, 6.2832); g.stroke(); g.lineWidth = 16; g.beginPath(); g.moveTo(W / 2 - 28, cy - 28); g.lineTo(W / 2 + 28, cy + 28); g.moveTo(W / 2 + 28, cy - 28); g.lineTo(W / 2 - 28, cy + 28); g.stroke(); }
      else if (s.kind === 'g') { g.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 30 : 72, a = -Math.PI / 2 + i * Math.PI / 5; g[i ? 'lineTo' : 'moveTo'](W / 2 + Math.cos(a) * r, cy + Math.sin(a) * r); } g.closePath(); g.fill(); }
      else if (s.kind === 'p') { g.lineWidth = 9; g.beginPath(); g.moveTo(W / 2 + 46, cy - 92); g.lineTo(W / 2, cy + 6); g.stroke(); dot(W / 2, cy + 22, 44); }
      else if (s.kind === 's') { g.lineWidth = 20; g.beginPath(); g.moveTo(W / 2, cy + 78); g.lineTo(W / 2, cy + 6); g.lineTo(W / 2 - 58, cy - 66); g.moveTo(W / 2, cy + 6); g.lineTo(W / 2 + 58, cy - 66); g.stroke(); }
      else { const n = s.kind === 'bet' ? 1 : Math.max(1, Math.min(6, s.world || 1)), P = [[], [[0, 0]], [[-1, 1], [1, -1]], [[-1, 1], [0, 0], [1, -1]], [[-1, 1], [1, 1], [-1, -1], [1, -1]], [[-1, 1], [1, 1], [0, 0], [-1, -1], [1, -1]], [[-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1]]][n]; for (const [a, b] of P) dot(W / 2 + a * 66, cy - b * 66, 24); }
      const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.anisotropy = maxAniso; return t;
    }

    // ---------- shared geometry ----------
    const bodyGeo = new T.RoundedBoxGeometry(TH, 2, 1, 5, 0.045), faceGeo = new T.PlaneGeometry(1, 2);
    const pinGeo = new T.SphereGeometry(0.052, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), ballGeo = new T.SphereGeometry(1, 32, 20), strGeo = new T.CylinderGeometry(1, 1, 1, 8);

    // ---------- light ----------
    const key = new T.DirectionalLight(0xffdcae, 3.3); key.castShadow = true; key.shadow.mapSize.set(Q.shadow, Q.shadow); scene.add(key, key.target);

    // ---------- the row ----------
    const rowGroup = new T.Group(), groundGroup = new T.Group(); scene.add(groundGroup, rowGroup);
    let stones = [], slots = [], growth = 1.5, SP = spiral(1.5), bonus = false, betScale = 1, disposables = [];
    const bodyPool = {}, faceCache = {}; let bodyUse = {};
    const hAt = f => H0 * Math.pow(growth, f);
    // k sets how fast a stone tips; 2.9 / t gives about t seconds from one clack to the next (measured, includes the tipping hump)
    const kOf = s => { const t = T0 * Math.pow(TGROW, s.slot); return (2.9 / t) * (2.9 / t); };
    const omCrit = s => Math.sqrt(2 * s.k * (1 - Math.cos(s.tip)));
    const worldAt = f => { const s = slots[Math.max(0, Math.min(slots.length - 1, Math.round(f)))]; return s ? s.world : 1; };

    // a sea of cloud seen from above: layered soft blobs, tiled
    const cloudTex = (function () {
      const N = 256, cv = document.createElement('canvas'); cv.width = cv.height = N; const g = cv.getContext('2d'); g.fillStyle = '#5c6f96'; g.fillRect(0, 0, N, N); let r = 23; const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
      for (let i = 0; i < 260; i++) { const x = rnd() * N, y = rnd() * N, rad = 10 + rnd() * 34, a = 0.05 + rnd() * 0.12; for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) { const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, rad); gr.addColorStop(0, 'rgba(255,255,255,' + a + ')'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(x + ox - rad, y + oy - rad, rad * 2, rad * 2); } }
      const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.wrapS = t.wrapT = T.RepeatWrapping; return t;
    })();
    const groundCache = {};
    function groundMat(w) {
      if (w.ground[0] === '__clouds') return groundCache.clouds || (groundCache.clouds = new T.MeshStandardMaterial({ color: 0x8ea3cc, map: cloudTex, roughness: 1, metalness: 0 }));
      const id = firstOf(w.ground, hasGround) || 'wood_table_001', real = id === w.ground[0], color = real && id !== 'wood_table_001' ? 0xffffff : w.tint, key = id + '|' + color;
      if (groundCache[key]) return groundCache[key];
      const arm = tex(id, 'arm');
      const m = new T.MeshStandardMaterial({ map: tex(id, 'diff', true), normalMap: tex(id, 'nor'), aoMap: arm, roughnessMap: arm, metalnessMap: arm, roughness: 1, metalness: 1, color });
      // the camera crosses a wide range of scale on one surface: mix the texture with a 5x larger copy of itself
      m.onBeforeCompile = sh => { sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', ['#ifdef USE_MAP', ' diffuseColor *= mix(texture2D(map, vMapUv), texture2D(map, vMapUv * 0.213 + vec2(0.37, 0.11)), 0.45);', '#endif'].join('\n')); };
      return (groundCache[key] = m);
    }
    function buildGround() {
      while (groundGroup.children.length) { const c = groundGroup.children[0]; groundGroup.remove(c); c.geometry.dispose(); }
      // ring edges: half-way (in scale) between the last stone of a world and the first stone of the next
      const edges = []; let prev = slots[1] ? slots[1].world : 1;
      for (let s = 2; s < slots.length; s++) if (slots[s].world !== prev) { edges.push({ r: SP.R * hAt(s - 0.5), from: prev, to: slots[s].world }); prev = slots[s].world; }
      const outer = SP.R * hAt(slots.length + 6) * 4, worlds = bonus ? [NOIR] : null;
      let r0 = 0, w = slots[1] ? slots[1].world : 1;
      const ring = (a, b, world) => {
        const lookW = worlds ? NOIR : WORLDS[world], geo = a === 0 ? new T.CircleGeometry(b, 96) : new T.RingGeometry(a, b, 128, 1);
        const list = []; slots.forEach((s, i) => { if (i && s.world === world) list.push(i); });
        const k = worlds || world === 1 || !list.length ? 1 : hAt(list[(list.length / 2) | 0]) / REF[world];
        const tileM = lookW.ground[0] === '__clouds' ? hAt(slots.length - 2) * 5 : lookW.tile * k;          // metres one texture tile covers
        const p = geo.attributes.position, uv = geo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / tileM, p.getY(i) / tileM);
        const m = new T.Mesh(geo, groundMat(lookW)); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; groundGroup.add(m);
      };
      for (const e of edges) {
        ring(r0, e.r, w);
        const band = new T.Mesh(new T.RingGeometry(e.r * 0.992, e.r * 1.012, 160, 1), M.pin); band.rotation.x = -Math.PI / 2; band.position.y = e.r * 0.0006; band.receiveShadow = true; groundGroup.add(band);
        r0 = e.r * 1.004; w = e.to;
      }
      ring(r0, outer, w);
    }
    function addStone(slot, lane, s) {
      const k = s.kind === 'bet' ? betScale : 1, h = hAt(slot) * k, w = h / 2, t = w * TH, psi = SP.psi0 + slot * TURN, ux = Math.cos(psi), uz = Math.sin(psi);   // the play stone is a little bigger for a bigger play
      let cx = SP.R * hAt(slot) * Math.cos(slot * TURN), cz = SP.R * hAt(slot) * Math.sin(slot * TURN);
      if (lane >= 0) { const o = (lane ? 1 : -1) * LANE * w; cx += -uz * o; cz += ux * o; }
      const [mat, ink] = bodyOf(s, bonus), st = { slot, lane, kind: s.kind, world: s.world || 1, x: s.x, h, w, t, cx, cz, psi, gap: GAP * hAt(slot) - (t - hAt(slot) / 2 * TH) / 2, tip: Math.atan(t / h), th: 0, om: 0, state: 0, lim: 0, stopper: false, done: false, nexts: [], prevs: [], mat };
      st.k = kOf(st);
      const pivot = new T.Group(); pivot.position.set(cx + t / 2 * ux, 0, cz + t / 2 * uz); pivot.rotation.y = -psi;
      const tilt = new T.Group(), inner = new T.Group(); inner.scale.setScalar(w); inner.position.set(-t / 2, h / 2, 0); tilt.add(inner); pivot.add(tilt);
      // its own copy so it can glow on its own; copies are pooled and reused round after round
      const pool = bodyPool[mat] || (bodyPool[mat] = []), n = bodyUse[mat] = (bodyUse[mat] || 0) + 1;
      let bodyMat = pool[n - 1]; if (!bodyMat) { bodyMat = M[mat].clone(); pool.push(bodyMat); } else if (bodyMat.userData.em) { bodyMat.emissive.copy(bodyMat.userData.em.c); bodyMat.emissiveIntensity = bodyMat.userData.em.i; }
      st.bodyMat = bodyMat;
      const body = new T.Mesh(bodyGeo, bodyMat); body.castShadow = body.receiveShadow = true; inner.add(body);
      const fkey = [s.kind, s.label || '', s.sub || '', ink, s.world || 1, s.x || 0, mat].join('|');
      let fm = faceCache[fkey];
      if (!fm) fm = faceCache[fkey] = new T.MeshStandardMaterial({ map: faceCanvas(s, ink), transparent: true, roughness: 0.32, metalness: mat === 'black' || s.kind === 'm' ? 0.6 : 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, side: T.FrontSide });
      for (const side of [1, -1]) {
        const f = new T.Mesh(faceGeo, fm); f.rotation.y = side * Math.PI / 2; f.position.x = side * (TH / 2 + 0.004); inner.add(f);
        const pin = new T.Mesh(pinGeo, M.pin); pin.rotation.z = -side * Math.PI / 2; pin.position.x = side * (TH / 2 + 0.001); inner.add(pin);
      }
      rowGroup.add(pivot); st.tilt = tilt; st.pivot = pivot; stones.push(st); return st;
    }

    // ---------- scenery: real objects, towers, clouds and the Moon, so the eye can tell how big the stones have become ----------
    const PROPS = [null,
      ['chess_set', 'book_encyclopedia_set_01', 'mantel_clock_01', 'brass_vase_03', 'horse_statue_01', 'magnifying_glass_01'],
      ['vintage_grandfather_clock_01', 'mid_century_lounge_chair', 'potted_plant_02', 'Sofa_01', 'round_wooden_table_01', 'potted_plant_01'],
      ['street_lamp_01', 'tree_small_02', 'modular_street_seating', 'street_lamp_01', 'outdoor_table_chair_set_01', 'tree_small_02', 'fire_hydrant']];
    const REF = [0, 0.198, 1.845, 11.4, 58, 359];            // stone height in the middle of each world on the x1.5 track: there the props are true size
    const propSrc = {}, propWait = {}, sceneryGroup = new T.Group(); scene.add(sceneryGroup);
    const hasProp = id => !!(PACK ? PACK.props && PACK.props[id] : opts.props && opts.props.indexOf(id) >= 0);
    function loadProp(id) {
      if (propWait[id]) return propWait[id];
      return (propWait[id] = new Promise(res => {
        if (!hasProp(id) || !T.GLTFLoader) return res();
        const L = new T.GLTFLoader(); if (window.MeshoptDecoder) L.setMeshoptDecoder(window.MeshoptDecoder);
        const got = b => L.parse(b, '', g => {
          g.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
          const box = new T.Box3().setFromObject(g.scene); g.scene.userData.rad = Math.max(box.max.x - box.min.x, box.max.z - box.min.z) / 2; propSrc[id] = g.scene; res();
        }, () => res());
        if (PACK) { const s = PACK.props[id]; got(Uint8Array.from(atob(s.slice(s.indexOf(',') + 1)), c => c.charCodeAt(0)).buffer); }
        else fetch(base + 'props/' + id + '.glb').then(r => r.arrayBuffer()).then(got, () => res());
      }));
    }
    const winTex = (function () {
      const cv = document.createElement('canvas'); cv.width = 128; cv.height = 256; const g = cv.getContext('2d'); g.fillStyle = '#000'; g.fillRect(0, 0, 128, 256); let r = 11; const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
      for (let y = 0; y < 16; y++) { const dark = rnd() < 0.18; for (let x = 0; x < 6; x++) { const v = rnd(); if (dark || v < 0.5) continue; g.fillStyle = v > 0.94 ? '#cfe6ff' : v > 0.72 ? '#ffd9a0' : '#a57c3c'; g.fillRect(x * 21 + 5, y * 16 + 4, 13, 8); } }
      const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = maxAniso; return t;
    })();
    const towerGeo = new T.BoxGeometry(1, 1, 1); towerGeo.translate(0, 0.5, 0);
    const towerMat = new T.MeshStandardMaterial({ color: 0x14161d, roughness: 0.28, metalness: 0.8, emissive: 0xffffff, emissiveMap: winTex, emissiveIntensity: 2.2 });
    const cloudMat = new T.SpriteMaterial({ map: null, color: 0xaebfe2, transparent: true, opacity: 0.4, depthWrite: false });
    const stars = (function () {
      const n = 520, p = new Float32Array(n * 3); let r = 5; const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
      for (let i = 0; i < n; i++) { const a = rnd() * 6.2832, y = 0.06 + rnd() * 0.92, q = Math.sqrt(1 - y * y); p[i * 3] = Math.cos(a) * q; p[i * 3 + 1] = y; p[i * 3 + 2] = Math.sin(a) * q; }
      const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(p, 3));
      const pts = new T.Points(g, new T.PointsMaterial({ size: 2.2, sizeAttenuation: false, color: 0xdfe8ff, transparent: true, opacity: 0, fog: false, depthWrite: false })); pts.frustumCulled = false; pts.visible = false; scene.add(pts); return pts;
    })();
    let moon = null;
    if (PACK ? PACK.moon : opts.moon) { const t = loader.load(PACK ? PACK.moon : base + 'moon/moon.webp'); t.colorSpace = T.SRGBColorSpace; moon = new T.Mesh(new T.SphereGeometry(1, 48, 32), new T.MeshBasicMaterial({ map: t, color: 0xfff3dc, fog: false })); }
    function buildScenery() { const t0 = performance.now(); buildSceneryInner(); mark('buildScenery', t0); }
    function buildSceneryInner() {
      while (sceneryGroup.children.length) sceneryGroup.remove(sceneryGroup.children[0]);
      if (bonus) return;
      const NO = opts.no || '';
      let seed = 3 + slots.length; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      const byWorld = {}; slots.forEach((s, i) => { if (i) (byWorld[s.world] || (byWorld[s.world] = [])).push(i); });
      const fr = i => { const h = hAt(i), psi = SP.psi0 + i * TURN; return { h, x: SP.R * h * Math.cos(i * TURN), z: SP.R * h * Math.sin(i * TURN), ux: Math.cos(psi), uz: Math.sin(psi) }; };
      // out = metres to the far side of the row (the camera rides on the near side), along = metres forward
      const at = (f, out, along) => [f.x + f.uz * out + f.ux * along, f.z - f.ux * out + f.uz * along];
      for (const w of [1, 2, 3]) {
        const list = byWorld[w] || [], ids = PROPS[w].filter(id => propSrc[id]); if (!list.length || !ids.length || NO.indexOf('props') >= 0) continue;
        const k = hAt(list[(list.length / 2) | 0]) / REF[w]; let n = 0;
        for (const i of list) {
          const f = fr(i); let out = f.h * 0.85;
          for (let j = 0; j < 2; j++) {
            const src = propSrc[ids[n++ % ids.length]], o = src.clone(), rad = src.userData.rad * k;
            out += rad + f.h * (0.25 + rnd() * 0.7); const [x, z] = at(f, out, (rnd() - 0.5) * f.h * 1.4); out += rad;
            o.position.set(x, 0, z); o.rotation.y = rnd() * 6.2832; o.scale.setScalar(k); sceneryGroup.add(o);
          }
        }
      }
      const L4 = byWorld[4] || [];
      if (L4.length && NO.indexOf('towers') < 0) {
        const count = 84, im = new T.InstancedMesh(towerGeo, towerMat, count), m4 = new T.Matrix4(), q = new T.Quaternion(), s3 = new T.Vector3(), p3 = new T.Vector3(), eul = new T.Euler();
        for (let n = 0; n < count; n++) {
          const f = fr(L4[n % L4.length] + rnd() - 0.5), row = (n / L4.length) | 0, wd = f.h * (0.26 + rnd() * 0.3), [x, z] = at(f, f.h * (1.5 + row * 0.5 + rnd() * 0.8), (rnd() - 0.5) * f.h * 2.6);
          p3.set(x, 0, z); q.setFromEuler(eul.set(0, rnd() * 1.5708, 0)); s3.set(wd, f.h * (0.45 + rnd() * rnd() * 2.3), wd * (0.7 + rnd() * 0.6)); im.setMatrixAt(n, m4.compose(p3, q, s3));
        }
        im.castShadow = im.receiveShadow = true; sceneryGroup.add(im);
      }
      const L5 = byWorld[5] || [];
      if (L5.length && NO.indexOf('clouds') < 0) {
        cloudMat.map = puffTex;
        // the cloud deck stays outside the inner edge of its own ring, so it never drifts over the smaller worlds
        const rIn = SP.R * hAt(L5[0] - 0.5);
        for (let n = 0; n < 110; n++) {
          const f = fr(L5[n % L5.length] + rnd() - 0.5), s = f.h * (0.7 + rnd() * 1.5), [x, z] = at(f, f.h * (1.1 + rnd() * 8), (rnd() - 0.5) * f.h * 8);
          if (Math.hypot(x, z) < rIn + s * 1.6) continue;
          const sp = new T.Sprite(cloudMat); sp.position.set(x, s * 0.16, z); sp.scale.set(s * 3, s * 0.42, 1); sceneryGroup.add(sp);
        }
        if (moon) { const f = fr(L5[L5.length - 1]), [x, z] = at(f, f.h * 46, f.h * 14); moon.position.set(x, f.h * 20, z); moon.scale.setScalar(f.h * 8); moon.rotation.y = -1.2; sceneryGroup.add(moon); }
      }
    }
    const link = (a, b) => { a.nexts.push(b); b.prevs.push(a); };
    function setRow(desc) { const t0 = performance.now(); setRowInner(desc); mark('setRow', t0); }
    function setRowInner(desc) {
      for (const d of disposables) d.dispose(); disposables = []; bodyUse = {};
      while (rowGroup.children.length) rowGroup.remove(rowGroup.children[0]);
      if (cel) { for (const r of rainP) r.on = false; rain.count = 0; ring.visible = false; cel = null; celK = 0; }
      stones = []; slots = desc.slots; growth = desc.growth; SP = spiral(growth); bonus = !!desc.bonus; betScale = desc.betScale || 1;
      let prev = [];
      slots.forEach((s, i) => {
        const cur = s.kind === 'l' ? [addStone(i, 0, { kind: 'v', world: s.world, label: s.la }), addStone(i, 1, { kind: 'v', world: s.world, label: s.lb })] : [addStone(i, -1, s)];
        if (prev.length === 2 && cur.length === 2) { link(prev[0], cur[0]); link(prev[1], cur[1]); } else for (const a of prev) for (const b of cur) link(a, b);
        prev = cur;
      });
      for (const s of stones) s.lim = limit(s);
      buildGround(); buildScenery();
      events.length = 0; seen = 0; sF = 0; shake = 0; endT = -1; simT = 0; slow = 1; quiet = 0; stopSet = new Set();
      api.world = -1; applyLook(0, 1);
    }
    const find = (slot, lane) => (lane === 0 || lane === 1 ? stones.find(s => s.slot === slot && s.lane === lane) : null) || stones.find(s => s.slot === slot);

    // ---------- the fall ----------
    const events = []; let seen = 0, simT = 0, endT = -1, stopSet = new Set(), collectCb = null, quiet = 0, running = null, rate = 1;
    function rest(a, b) {
      const c = Math.cos(b.th), s = Math.sin(b.th), Qx = a.gap + b.t - b.t * c, Qy = b.t * s, f = th => (a.h * Math.sin(th) - Qx) * c - (a.h * Math.cos(th) - Qy) * s;
      let lo = 0, hi = Math.PI / 2; if (f(hi) <= 0) return hi;
      for (let n = 0; n < 24; n++) { const m = (lo + hi) / 2; if (f(m) > 0) hi = m; else lo = m; }
      return lo;
    }
    const limit = s => { let l = Math.PI / 2; for (const n of s.nexts) l = Math.min(l, rest(s, n)); return l; };
    function collect(s, kind) { if (s.done) return; s.done = true; events.push({ s, kind }); if (collectCb) collectCb(s); }
    function hit(a, b) {
      if (b.state !== 0) return;
      b.state = 1;
      if (stopSet.has(b)) { b.stopper = true; b.om = 0.955 * omCrit(b); events.push({ s: b, kind: 'wobble' }); }
      else b.om = Math.max(REST * a.om * Math.sqrt(b.k / a.k), 1.35 * omCrit(b));
    }
    function step(dt) {
      simT += dt;
      for (const d of stones) {
        if (d.state !== 1) continue;
        d.om += d.k * Math.sin(d.th - d.tip) * dt; d.th += d.om * dt;
        if (d.th < 0) { d.th = 0; d.om = -d.om * 0.55; if (d.om < 0.06 * omCrit(d)) { d.om = 0; d.state = 2; d.stopper = false; } else events.push({ s: d, kind: 'rock' }); }
      }
      for (let i = stones.length - 1; i >= 0; i--) {
        const d = stones[i]; if (d.state !== 1) continue;
        if (!d.nexts.length) {
          if (d.th >= Math.PI / 2) { d.th = Math.PI / 2; if (d.om > 0.35 * Math.sqrt(d.k)) { collect(d, 'slam'); d.om = -d.om * 0.2; } else { d.om = 0; collect(d, 'slam'); } }
          continue;
        }
        const lim = limit(d);
        if (d.th >= lim) { collect(d, 'hit'); for (const n of d.nexts) if (n.state === 0 && rest(d, n) <= lim + 1e-4) hit(d, n); d.om = (lim - d.lim) / dt; d.th = lim; }
        d.lim = lim;
      }
    }
    const moving = () => stones.some(s => s.state === 1 && (Math.abs(s.om) > 0.03 * Math.sqrt(s.k) || (s.th > 0.02 && s.th < limit(s) - 0.004)));
    function run(stops, onCollect) {
      stopSet = new Set((stops || []).map(p => find(p.slot, p.lane)).filter(Boolean)); collectCb = onCollect || null; quiet = 0;
      return new Promise(res => { running = res; });
    }

    // ---------- the brass ball ----------
    const ball = new T.Group(), ballMesh = new T.Mesh(ballGeo, M.brass), ballStr = new T.Mesh(strGeo, M.string); ballMesh.castShadow = true; ball.add(ballMesh, ballStr); ball.visible = false; scene.add(ball);
    let strikeJob = null;
    function strike(slot, lane) {
      const s = find(slot, lane); if (!s) return Promise.resolve();
      return new Promise(res => { strikeJob = { s, t: 0, res, hit: false }; ball.visible = true; });
    }
    function strikeStep(dt) {
      const j = strikeJob, s = j.s, D = 0.62, L = s.h * 2.6, r = s.h * 0.17; j.t += dt * rate;
      const p = j.t / D, ang = p < 1 ? -1.15 * (1 - p) * (1 - p) : -0.42 * Math.sin((p - 1) * 2.6) * Math.exp(-(p - 1) * 1.2), out = Math.max(0, Math.min(1, (p - 1.5) / 1.0));   // swing in, bounce back, shrink away
      const ux = Math.cos(s.psi), uz = Math.sin(s.psi), hy = s.h * 0.78, bx = s.cx - (s.t / 2 + r) * ux, bz = s.cz - (s.t / 2 + r) * uz;
      const px = bx, py = hy + L, pz = bz, x = px + Math.sin(ang) * L * ux, y = py - Math.cos(ang) * L, z = pz + Math.sin(ang) * L * uz;
      ballMesh.position.set(x, y, z); ballMesh.scale.setScalar(r * (1 - out * out)); ballStr.visible = out < 0.9;
      ballStr.position.set((x + px) / 2, (y + py) / 2, (z + pz) / 2); ballStr.scale.set(r * 0.035, L, r * 0.035); ballStr.lookAt(px, py, pz); ballStr.rotateX(Math.PI / 2);
      if (!j.hit && p >= 1) { j.hit = true; if (s.state !== 1 || s.stopper) { s.state = 1; s.stopper = false; s.om = 1.5 * omCrit(s); stopSet.delete(s); } events.push({ s, kind: 'strike' }); j.res(); }
      if (p > 2.5) { ball.visible = false; strikeJob = null; }
    }

    // ---------- dust: a few soft puffs where a heavy stone lands ----------
    const puffTex = (function () { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d'), rg = g.createRadialGradient(32, 32, 0, 32, 32, 32); rg.addColorStop(0, 'rgba(255,255,255,.9)'); rg.addColorStop(0.45, 'rgba(255,255,255,.28)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = rg; g.fillRect(0, 0, 64, 64); return new T.CanvasTexture(cv); })();
    const puffs = []; for (let i = 0; i < 36; i++) { const sp = new T.Sprite(new T.SpriteMaterial({ map: puffTex, transparent: true, depthWrite: false, opacity: 0 })); sp.visible = false; scene.add(sp); puffs.push({ sp, t: 1, d: 1 }); }
    let puffI = 0;
    function dust(s, amount) {
      if (opts.reduced) return;
      const n = Math.round(3 + amount * 5), ux = Math.cos(s.psi), uz = Math.sin(s.psi);
      for (let i = 0; i < n; i++) { const p = puffs[puffI++ % puffs.length], a = (i / n - 0.5) * 2.4, r = s.w * (0.5 + Math.abs(a) * 0.4); p.sp.visible = true; p.t = 0; p.d = 0.5 + 0.4 * amount; p.x = s.cx + ux * s.h * 0.9 + -uz * a * s.w * 0.6; p.z = s.cz + uz * s.h * 0.9 + ux * a * s.w * 0.6; p.vx = (ux * 0.3 - uz * a) * s.h * 0.5; p.vz = (uz * 0.3 + ux * a) * s.h * 0.5; p.r = r; }
    }

    // motes in the light: drift slowly, so nothing on screen is ever completely still
    const motes = (function () {
      const n = 240, pos = new Float32Array(n * 3), seed = []; let r = 7; const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
      for (let i = 0; i < n; i++) { pos[i * 3] = rnd() * 2 - 1; pos[i * 3 + 1] = rnd() * 1.4; pos[i * 3 + 2] = rnd() * 2 - 1; seed.push(rnd() * 6.28, 0.3 + rnd() * 0.7); }
      const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(pos, 3));
      const pts = new T.Points(geo, new T.PointsMaterial({ size: 0.03, map: puffTex, transparent: true, opacity: 0.5, depthWrite: false, blending: T.AdditiveBlending, color: 0xffdcae, fog: false })); pts.frustumCulled = false; scene.add(pts);
      const base0 = pos.slice();
      return { pts, update(t) { for (let i = 0; i < n; i++) { const a = seed[i * 2], s = seed[i * 2 + 1]; pos[i * 3] = base0[i * 3] + Math.sin(t * 0.11 * s + a) * 0.12; pos[i * 3 + 1] = (base0[i * 3 + 1] + t * 0.012 * s) % 1.4; pos[i * 3 + 2] = base0[i * 3 + 2] + Math.cos(t * 0.09 * s + a) * 0.12; } geo.attributes.position.needsUpdate = true; } };
    })();

    // ---------- post: scene -> depth of field (two soft passes) -> bloom -> vignette -> tone mapping ----------
    const sceneRT = new T.WebGLRenderTarget(4, 4, { type: T.HalfFloatType, samples: Q.msaa, depthTexture: new T.DepthTexture(4, 4) });
    const VS = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
    const dofShader = {
      uniforms: { tDiffuse: { value: null }, tDepth: { value: null }, dir: { value: new T.Vector2() }, near: { value: 0.1 }, far: { value: 10 }, focus: { value: 1 }, aperture: { value: 1 } },
      vertexShader: VS,
      fragmentShader: ['#include <packing>', 'uniform sampler2D tDiffuse, tDepth; uniform vec2 dir; uniform float near, far, focus, aperture; varying vec2 vUv;',
        'float coc(vec2 uv){ float z = -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); return clamp(abs(z - focus) * aperture - 0.06, 0.0, 1.0); }',
        'void main(){ float c0 = coc(vUv); vec4 sum = texture2D(tDiffuse, vUv); float ws = 1.0;',
        ' for (int i = 1; i <= 8; i++) { float o = float(i) / 8.0, g = exp(-2.2 * o * o);',
        '  for (int s = -1; s <= 1; s += 2) { vec2 uv = vUv + dir * (o * c0 * float(s)); float w = g * clamp((coc(uv) - o * c0) * 6.0 + 1.0, 0.0, 1.0); sum += texture2D(tDiffuse, uv) * w; ws += w; } }',
        ' gl_FragColor = sum / ws; }'].join('\n')
    };
    const vigShader = { uniforms: { tDiffuse: { value: null }, amount: { value: opts.vig == null ? 0.5 : opts.vig }, fade: { value: 1 } }, vertexShader: VS, fragmentShader: 'uniform sampler2D tDiffuse; uniform float amount, fade; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); float d = distance(vUv, vec2(0.5)); gl_FragColor = vec4(c.rgb * fade * mix(1.0, 1.0 - amount, smoothstep(0.32, 0.86, d)), c.a); }' };
    const composer = new T.EffectComposer(renderer, new T.WebGLRenderTarget(4, 4, { type: T.HalfFloatType }));
    const dofH = new T.ShaderPass(dofShader, 'tNone'), dofV = new T.ShaderPass(dofShader), bloom = new T.UnrealBloomPass(new T.Vector2(4, 4), 0.12, 0.7, 0.96), vig = new T.ShaderPass(vigShader);
    dofH.uniforms.tDiffuse.value = sceneRT.texture; dofH.uniforms.tDepth.value = dofV.uniforms.tDepth.value = sceneRT.depthTexture;
    composer.addPass(dofH); composer.addPass(dofV); composer.addPass(bloom); composer.addPass(vig); composer.addPass(new T.OutputPass());
    let portrait = false, vw = 1, vh = 1;
    function resize() {
      const w = canvas.clientWidth | 0, h = canvas.clientHeight | 0; if (!w || !h) return; const pr = renderer.getPixelRatio();
      vw = w; vh = h; renderer.setSize(w, h, false); composer.setSize(w, h); sceneRT.setSize(Math.round(w * pr), Math.round(h * pr));
      portrait = h > w * 1.05; camera.aspect = w / h; camera.fov = portrait ? 46 : w / h < 1.5 ? 31 : w / h > 2 ? 30 : 27; camera.updateProjectionMatrix();
      const B = 0.016; dofH.uniforms.dir.value.set(B * h / w, 0); dofV.uniforms.dir.value.set(0, B);
    }

    // ---------- camera and light: ride the inside of the spiral beside the chain ----------
    let sF = 0, shake = 0, slow = 1, wall = 0, fade = 1, fadeTo = 1, curEnv = null;
    const CAMG = opts.camG == null ? 1.5 : opts.camG;      // faster-growing rows need the camera further back
    // l = landscape, p = portrait; the g variants are for rows that double every stone
    const CAM = { l: { a: 1.95, b: 4.8, h: 3.3, ta: 0.65, tb: -0.3, th: 0.45 }, lg: { a: 1.0, b: 5, h: 5, ta: 0.6, tb: -0.2, th: 0.5 }, p: { a: 2.4, b: 5.6, h: 4.6, ta: 0.5, tb: -0.1, th: 0.75 }, pg: { a: 1.4, b: 6.6, h: 7, ta: 0.45, tb: -0.1, th: 0.7 } };
    const tgt = new T.Vector3(), U = new T.Vector3(), V = new T.Vector3(), UP = new T.Vector3(0, 1, 0), tmp = new T.Vector3(), cFog = new T.Color(), cKey = new T.Color();
    function front() {
      let F = 0, wob = null;
      for (const s of stones) { if (s.state === 0) continue; if (s.stopper && s.state === 1) { wob = s; continue; } if (s.state === 2) continue; F = Math.max(F, s.slot + Math.min(1, s.th / THC)); }
      if (strikeJob && !strikeJob.hit) F = Math.max(F, strikeJob.s.slot);
      if (wob && wob.slot >= Math.floor(F)) return { F: wob.slot - 0.3, wob };
      return { F: Math.min(slots.length - 1, F), wob: null };
    }
    function applyLook(dt, snap) {
      const w = worldAt(sF + 0.4), L = bonus ? NOIR : WORLDS[w] || WORLDS[1], a = snap ? 1 : 1 - Math.exp(-dt / 0.5);
      if (w !== api.world) { const first = api.world === -1; api.world = w; if (!first && api.onWorld) api.onWorld(w, L.name); }
      cFog.setHex(L.fog); scene.fog.color.lerp(cFog, a); cKey.setHex(L.key); key.color.lerp(cKey, a); key.intensity += (L.keyI - key.intensity) * a;
      scene.environmentIntensity += (L.envI - scene.environmentIntensity) * a; renderer.toneMappingExposure += (L.exp - renderer.toneMappingExposure) * a;
      motes.pts.material.color.copy(key.color);
      const id = firstOf(L.env, k => !!envs[k]); if (id && id !== curEnv) { curEnv = id; scene.environment = envs[id]; scene.environmentRotation.y = L.rot || 0; }
      scene.background = scene.fog.color;
      const night = !bonus && w >= 4 ? 0.9 : 0; stars.material.opacity += (night - stars.material.opacity) * a; stars.visible = stars.material.opacity > 0.02;
    }

    // ---------- the win moment: the camera rises over the whole fallen chain, a wave of gold light runs along it,
    // golden dominoes rain onto the table, and a shockwave closes it. celebrate({ big, dur }) / finale() / release() ----------
    let cel = null, celK = 0, celR = 1;
    const celC = new T.Vector3(), celPos = new T.Vector3(), celDir = new T.Vector3(), GOLDC = new T.Color(0xffc35a);
    const RAIN = 260, rainGeo = new T.BoxGeometry(TH, 2, 1), rain = new T.InstancedMesh(rainGeo, M.gold, RAIN), rainP = [];
    rain.castShadow = true; rain.frustumCulled = false; rain.count = 0; scene.add(rain);
    for (let i = 0; i < RAIN; i++) rainP.push({ on: false });
    const ringMat = new T.MeshBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, fog: false });
    const ring = new T.Mesh(new T.RingGeometry(0.92, 1, 96, 1), ringMat); ring.rotation.x = -Math.PI / 2; ring.visible = false; scene.add(ring);
    const m4 = new T.Matrix4(), q4 = new T.Quaternion(), e4 = new T.Euler(), s4 = new T.Vector3(), p4 = new T.Vector3();
    function fallen() { return stones.filter(s => s.state >= 1 && s.th > 0.35 && !s.stopper).sort((a, b) => a.slot - b.slot || a.lane - b.lane); }
    function celebrate(o) {
      const list = fallen(); if (!list.length) return;
      let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
      for (const s of list.concat(stones.filter(s => s.stopper || s.state === 2))) { x0 = Math.min(x0, s.cx - s.h); x1 = Math.max(x1, s.cx + s.h); z0 = Math.min(z0, s.cz - s.h); z1 = Math.max(z1, s.cz + s.h); }
      celC.set((x0 + x1) / 2, 0, (z0 + z1) / 2); celR = Math.max((x1 - x0) / 2, (z1 - z0) / 2, hAt(sF) * 1.4) * 1.12;
      celDir.copy(camera.position).sub(celC).setY(0); if (celDir.lengthSq() < 1e-9) celDir.set(1, 0, 0); celDir.normalize();
      cel = { big: !!o.big && !opts.reduced, t: 0, dur: o.dur || 1, list, out: false, outT: 0, spawn: 0 };
      for (const s of stones) if (!s.bodyMat.userData.em) s.bodyMat.userData.em = { c: s.bodyMat.emissive.clone(), i: s.bodyMat.emissiveIntensity };
    }
    function finale() {
      if (!cel) return;
      cel.t = Math.max(cel.t, cel.dur); shake = Math.max(shake, opts.reduced ? 0 : 1);
      if (cel.big) { ring.visible = true; ring.position.set(celC.x, celR * 0.004, celC.z); cel.ring = 0; }
    }
    function release() { if (cel) { cel.out = true; cel.outT = 0; } }
    function celFrame(dt, hc) {
      const c = cel; c.t += dt;
      const n = c.list.length, p = Math.min(1, c.t / (c.dur * 0.9));
      // the wave: each stone flares gold as the front passes it and keeps a soft glow after
      for (let i = 0; i < n; i++) {
        const s = c.list[i], d = p * (n + 1.5) - i - 0.5, g = d < 0 ? 0 : Math.exp(-d * d * 0.9) * 1.6 + Math.min(1, d) * 0.18, m = s.bodyMat, em = m.userData.em;
        m.emissive.copy(em.c).lerp(GOLDC, Math.min(1, g)); m.emissiveIntensity = em.i + g * (c.out ? Math.max(0, 1 - c.outT / 0.6) : 1);
        if (d > 0 && !s.waved) { s.waved = true; if (api.onWave) api.onWave(i, n); }
      }
      // camera: rise over the whole spiral, then drift slowly around it
      const kIn = c.big ? Math.min(1, c.t / 1.1) : 0, kOut = c.out ? Math.min(1, c.outT / 0.8) : 0;
      if (c.out) c.outT += dt;
      celK = (kIn * kIn * (3 - 2 * kIn)) * (1 - kOut * kOut * (3 - 2 * kOut));
      if (celK > 0) {
        const ang = c.t * 0.1, dx = celDir.x * Math.cos(ang) - celDir.z * Math.sin(ang), dz = celDir.x * Math.sin(ang) + celDir.z * Math.cos(ang), lift = portrait ? 2.6 : 1.9;
        celPos.set(celC.x + dx * celR * 1.3, celR * lift, celC.z + dz * celR * 1.3);
        camera.position.lerp(celPos, celK); tgt.lerp(celC, celK);
        camera.near = Math.min(camera.near, celR * 0.01 + camera.near * (1 - celK)); camera.far = Math.max(camera.far, celR * 80 * celK); camera.updateProjectionMatrix(); camera.lookAt(tgt);
      }
      // golden dominoes: falling faster and faster while the win counts, landing and staying until the moment ends
      if (c.big && !c.out) { const rate = 25 + 210 * Math.pow(p, 3); c.spawn += dt * rate; }
      let live = 0;
      while (c.spawn >= 1) {
        c.spawn -= 1; const r = rainP.find(x => !x.on); if (!r) { c.spawn = 0; break; }
        const a = Math.random() * 6.2832, rr = Math.sqrt(Math.random()) * celR * 0.95;
        Object.assign(r, { on: true, x: celC.x + Math.cos(a) * rr, z: celC.z + Math.sin(a) * rr, y: celR * (1.3 + Math.random() * 0.5), vx: (Math.random() - 0.5) * celR * 0.15, vz: (Math.random() - 0.5) * celR * 0.15, vy: -celR * 0.5, s: celR * 0.022 * (0.7 + Math.random() * 0.6), rx: Math.random() * 6, ry: Math.random() * 6, rz: Math.random() * 6, wx: (Math.random() - 0.5) * 9, wz: (Math.random() - 0.5) * 9, b: 0, rest: false });
      }
      for (let i = 0; i < RAIN; i++) {
        const r = rainP[i]; if (!r.on) continue;
        if (!r.rest) {
          r.vy -= celR * 2.4 * dt; r.x += r.vx * dt; r.y += r.vy * dt; r.z += r.vz * dt; r.rx += r.wx * dt; r.rz += r.wz * dt;
          if (r.y < r.s * 0.4) { if (r.b++ < 1) { r.y = r.s * 0.4; r.vy *= -0.28; r.vx *= 0.5; r.vz *= 0.5; r.wx *= 0.4; r.wz *= 0.4; } else { r.rest = true; r.y = r.s * TH * 0.5; r.rx = 0; r.rz = Math.PI / 2; } }
        }
        e4.set(r.rx, r.ry, r.rz); q4.setFromEuler(e4); p4.set(r.x, r.y, r.z); s4.setScalar(r.s * (c.out ? Math.max(0, 1 - c.outT / 0.8) : 1));
        rain.setMatrixAt(live++, m4.compose(p4, q4, s4));
      }
      rain.count = live; rain.instanceMatrix.needsUpdate = true;
      if (c.ring != null) { c.ring += dt / 0.85; const e = 1 - Math.pow(1 - Math.min(1, c.ring), 3); ring.scale.setScalar(celR * 2.4 * e + 1e-6); ringMat.opacity = 0.85 * (1 - Math.min(1, c.ring)); if (c.ring >= 1) { ring.visible = false; c.ring = null; } }
      if (c.out && c.outT >= 0.85) {
        for (const s of stones) { const em = s.bodyMat.userData.em; if (em) { s.bodyMat.emissive.copy(em.c); s.bodyMat.emissiveIntensity = em.i; } s.waved = false; }
        for (const r of rainP) r.on = false; rain.count = 0; ring.visible = false; cel = null; celK = 0;
      }
    }
    function frame(dt) {
      wall += dt;
      const f = front();
      slow += ((f.wob ? 0.4 : 1) - slow) * (1 - Math.exp(-dt / 0.12));
      if (strikeJob) strikeStep(dt);
      let left = dt * slow * rate; while (left > 1e-6) { const s = Math.min(left, 1 / 480); step(s); left -= s; }
      for (; seen < events.length; seen++) {
        const e = events[seen], rel = e.s.h / hAt(sF), big = e.s.world >= 3 ? 1 : 0.6;
        if (e.kind === 'slam') { shake = Math.max(shake, 1); dust(e.s, 1); } else if (e.kind === 'hit') { shake = Math.max(shake, Math.min(0.6, 0.3 * rel) * big); if (e.s.world >= 2) dust(e.s, Math.min(1, 0.25 * e.s.world)); } else if (e.kind === 'strike') shake = Math.max(shake, 0.3);
        if (api.onHit) api.onHit({ kind: e.kind, slot: e.s.slot, lane: e.s.lane, world: e.s.world, mat: e.s.mat, type: e.s.kind, pan: 0 });
      }
      shake *= Math.exp(-12 * dt);
      if (running) { if (moving() || strikeJob && !strikeJob.hit) quiet = 0; else if ((quiet += dt * rate) > 0.22) { const r = running; running = null; collectCb = null; r(); } }

      sF += (f.F - sF) * (1 - Math.exp(-dt * Math.max(1, rate * 0.8) / 0.32));
      // fast-growing rows: the next stones are huge, so the camera climbs and backs off (u = 0 at x1.5 and below, 1 at x2)
      const u = Math.max(0, Math.min(1, (growth - 1.5) / 0.5)), mixP = (p, q) => ({ a: p.a + (q.a - p.a) * u, b: p.b + (q.b - p.b) * u, h: p.h + (q.h - p.h) * u, ta: p.ta + (q.ta - p.ta) * u, tb: p.tb + (q.tb - p.tb) * u, th: p.th + (q.th - p.th) * u });
      const hc = hAt(sF), zoom = (f.wob ? 0.86 : 1) * (1 + (growth - 1.3) * (CAMG - 0.5 * u)), P = opts.cam || (portrait ? mixP(CAM.p, CAM.pg) : mixP(CAM.l, CAM.lg));
      const psi = SP.psi0 + sF * TURN + Math.sin(wall * 0.3) * 0.03;
      U.set(Math.cos(psi), 0, Math.sin(psi)); V.set(-Math.sin(psi), 0, Math.cos(psi));
      const cx = SP.R * hc * Math.cos(sF * TURN), cz = SP.R * hc * Math.sin(sF * TURN);
      tgt.set(cx, P.th * hc, cz).addScaledVector(U, P.ta * hc).addScaledVector(V, P.tb * hc);
      camera.position.set(cx, P.h * hc * zoom, cz).addScaledVector(U, P.a * hc * zoom).addScaledVector(V, P.b * hc * zoom);
      camera.near = 0.08 * hc; camera.far = 700 * hc; camera.updateProjectionMatrix(); camera.lookAt(tgt);
      if (cel) celFrame(dt, hc);
      const sh = hc + (celR - hc) * celK;
      if (shake > 0.002 && !opts.reduced) { const s = shake * 0.03 * sh; camera.position.x += Math.sin(wall * 113) * s; camera.position.y += Math.sin(wall * 144 + 1) * s; }

      applyLook(dt, false);
      const kh = Math.max(hc, sh * 0.55);
      key.target.position.copy(tgt); key.position.copy(tgt).addScaledVector(U, -3.2 * kh).addScaledVector(V, 4.2 * kh).addScaledVector(UP, 8 * kh);
      const sc = key.shadow.camera; sc.left = sc.bottom = -6 * kh; sc.right = sc.top = 6 * kh; sc.near = 0.5 * kh; sc.far = 26 * kh; sc.updateProjectionMatrix(); key.shadow.normalBias = 0.008 * hc; key.shadow.bias = -0.0004;
      scene.fog.density = (opts.fog == null ? (bonus ? 0.065 : 0.06) : opts.fog) / Math.max(hc, sh * 0.7);
      const focus = camera.position.distanceTo(tgt);
      for (const p of [dofH, dofV]) { p.uniforms.near.value = camera.near; p.uniforms.far.value = camera.far; p.uniforms.focus.value = focus; p.uniforms.aperture.value = 0.42 / (hc + (celR * 3 - hc) * celK); }
      if (stars.visible) { stars.position.copy(camera.position); stars.scale.setScalar(camera.far * 0.9); }
      motes.pts.position.set(tgt.x, 0, tgt.z); motes.pts.scale.setScalar(3.4 * hc); motes.pts.material.size = 0.035 * hc; motes.update(wall);
      for (const p of puffs) { if (!p.sp.visible) continue; p.t += dt / p.d; if (p.t >= 1) { p.sp.visible = false; continue; } const e = 1 - (1 - p.t) * (1 - p.t); p.sp.position.set(p.x + p.vx * e, p.r * (0.4 + e * 0.9), p.z + p.vz * e); p.sp.scale.setScalar(p.r * (1 + e * 2.2)); p.sp.material.opacity = 0.1 * (1 - p.t); p.sp.material.color.copy(key.color); }
      for (const s of stones) s.tilt.rotation.z = -s.th;
      fade += (fadeTo - fade) * (1 - Math.exp(-dt / 0.09)); vig.uniforms.fade.value = fade;
      if (opts.hero) { groundGroup.visible = sceneryGroup.visible = motes.pts.visible = false; scene.background = null; scene.fog.density = 0; renderer.setClearColor(0x000000, 0); renderer.render(scene, camera); return; }
      renderer.setRenderTarget(sceneRT); renderer.render(scene, camera); renderer.setRenderTarget(null);
      composer.render();
    }
    function project(slot, lane, up) {
      const s = find(slot, lane); if (!s) return { x: 0, y: 0, scale: 1, visible: false };
      tmp.set(s.cx, s.h * (up == null ? 1.08 : up), s.cz).project(camera);
      return { x: (tmp.x * 0.5 + 0.5) * vw, y: (-tmp.y * 0.5 + 0.5) * vh, scale: s.h / hAt(sF), visible: tmp.z < 1 && Math.abs(tmp.x) < 1.15 && Math.abs(tmp.y) < 1.15 };
    }

    // ---------- run ----------
    let last = 0, raf = 0, slowFrames = 0;
    function loop(now) {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.1, (now - last) / 1000 || 0.016); last = now;
      if (document.hidden) return;
      const pf = PERF(), t0 = pf ? performance.now() : 0;
      frame(dt);
      if (pf) pf.fr.push([Math.round(now), Math.round(dt * 10000) / 10, Math.round((performance.now() - t0) * 10) / 10]);
      // weak device: sustained frames over 40 ms -> lower resolution once, then drop glass
      if (dt > 0.04) { if (++slowFrames > 50 && renderer.getPixelRatio() > 1) { renderer.setPixelRatio(1); resize(); slowFrames = 0; } } else if (slowFrames > 0) slowFrames--;
    }
    api.ready = new Promise(res => {
      const want = [], later = []; for (const w of WORLDS.concat([NOIR])) if (w) { const e = firstOf(w.env, hasEnv), list = w === WORLDS[1] || w === WORLDS[2] ? want : later; if (e && want.indexOf(e) < 0 && later.indexOf(e) < 0) list.push(e); }
      let texDone = false, envDone = false; const done = () => { if (texDone && envDone) res(); };
      manager.onLoad = manager.onError = () => { texDone = true; done(); };
      for (const w of WORLDS.concat([NOIR])) if (w) { const id = firstOf(w.ground, hasGround) || 'wood_table_001'; tex(id, 'diff', true); tex(id, 'nor'); tex(id, 'arm'); }
      Promise.all(want.map(loadEnv).concat(PROPS[1].concat(PROPS[2], PROPS[3]).map(loadProp))).then(() => { envDone = true; done(); });
      Promise.resolve().then(() => api.ready).then(() => later.reduce((p, id) => p.then(() => loadEnv(id)), Promise.resolve()));
    });
    function warm() {
      const t0 = performance.now(), g = new T.Group(); let i = 0;
      const put = o => { o.position.set((i % 8) * 1.2, 0, Math.floor(i / 8) * 1.2); o.frustumCulled = false; o.traverse(c => { c.frustumCulled = false; }); g.add(o); i++; };
      for (const k in M) put(new T.Mesh(bodyGeo, M[k]));
      const sample = { kind: 'm', label: '×2', x: 2, world: 1 }; put(new T.Mesh(faceGeo, new T.MeshStandardMaterial({ map: faceCanvas(sample, '#fff'), transparent: true, roughness: 0.32, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })));
      for (const w of WORLDS.concat([NOIR])) if (w) put(new T.Mesh(new T.PlaneGeometry(1, 1), groundMat(w)));
      for (const id in propSrc) put(propSrc[id].clone());
      const tw = new T.InstancedMesh(towerGeo, towerMat, 1); tw.setMatrixAt(0, new T.Matrix4()); put(tw);
      cloudMat.map = puffTex; put(new T.Sprite(cloudMat)); put(new T.Sprite(puffs[0].sp.material)); if (moon) put(moon.clone());
      rain.count = 1; rain.setMatrixAt(0, new T.Matrix4()); ring.visible = true; stars.visible = true; ball.visible = true;
      const hc = hAt(sF); g.scale.setScalar(hc * 0.15); g.position.copy(tgt).addScaledVector(camera.getWorldDirection(new T.Vector3()), hc * 0.5);
      scene.add(g);
      renderer.compile(scene, camera); frame(0); frame(0);
      scene.remove(g); rain.count = 0; ring.visible = false; stars.visible = false; ball.visible = false;
      g.traverse(o => { if (o.geometry && o.geometry.type === 'PlaneGeometry') o.geometry.dispose(); });
      mark('warm', t0);
    }
    Object.assign(api, {
      setRow, strike, run, project, resize, warm,
      setRate(r) { rate = r; }, celebrate, finale, release, get celebrating() { return !!cel; }, fadeOut() { fadeTo = 0; }, fadeIn() { fadeTo = 1; },
      start() { if (!opts.manual && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); } },
      tick(dt) { frame(dt); },
      get front() { return sF; }, get stones() { return stones; }, worldName: w => (bonus ? NOIR : WORLDS[w] || WORLDS[1]).name,
      rendererInfo() { const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info'); return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown'; }
    });
    return api;
  };
})();
