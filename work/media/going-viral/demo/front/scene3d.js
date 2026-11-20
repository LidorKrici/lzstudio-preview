/* Going Viral: the 3D layer (three.js r170, trimmed build vendor/three-gv.min.js, see tools/three-bundle).
 * One WebGL canvas behind the whole game draws the room, the board frame, the 36 tiles and the characters as one lit
 * scene. The DOM stays in charge of layout and of the game: every tile sits exactly behind its .cell element, so the
 * value tags, captions and the scratch coin still line up. The characters are AI-made 3D models (image -> Tripo ->
 * gltf-transform, see art-v2/יומן-יצירה.md); tiles, frame and effects are built in code.
 * It takes over the old motion layer's API, so game.js calls it the same way:
 *   window.GVMotion: init({ grid, speed }), show(i, key, cellEl, imgEl, celebrateMs), celebrate(i), hop(i),
 *   hero(key), impact(cellEl, color, tier), clear()
 * and adds the tile calls: close(i), open(i), scratch(i, t), dealIn(), ripple(i, tier), collapse(i).
 * v3.1: the bar's round PLAY button and the Hype Meter tube are objects of the same scene too (see "UI objects in the
 * room"), each drawn behind its DOM element; meterFx(kind) gives the meter its moments (gain, full, drain).
 * `ready` is true once the scene is up; `tiles3d` tells game.js the tiles are drawn here. If WebGL or the models
 * fail, init resolves false and the game keeps its 2D look. Tile states that are CSS classes in the DOM
 * (target, tense) and the room states on <body> (lights-out, room-pop, onair) are read every frame. */
(() => {
  'use strict';
  const T = window.THREE, PI = Math.PI;
  const M = { ready: false, tiles3d: false };
  window.GVMotion = M;
  if (!T) { M.init = () => Promise.resolve(false); return; }

  const COLS = 6, FOV = 26, TAN = Math.tan(FOV * PI / 360);
  const A3 = 'assets/3d/';
  // yaw turns a Tripo model's front to +Z; fit is its width on a tile (in tiles); lift raises it off the tag below.
  const SYM = {
    heart: { yaw: -PI / 2, fit: 1.3, lift: 0.06, tier: 0 }, fire: { yaw: -PI / 2, fit: 1.32, lift: 0.06, tier: 1 },
    rocket: { yaw: -PI / 2, fit: 1.4, lift: 0.06, tier: 2 }, crown: { yaw: -PI / 2, fit: 1.3, lift: 0.06, tier: 3 },
    live: { yaw: -PI / 2, fit: 1.36, lift: 0.08, tier: 4 }, cancel: { yaw: -PI / 2, fit: 1.34, lift: 0.06, tier: -1 },
  };
  const HI = ['heart', 'rocket', 'crown'];            // full-detail copies: the two mascots and the hero moments

  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const easeOutBack = k => { const c = 1.9; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
  const easeInOut = k => k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
  const easeOut = k => 1 - Math.pow(1 - k, 3);
  const hdr = (hex, k) => new T.Color(hex).multiplyScalar(k);

  let renderer, scene, cam, composer, bloom, cv, grid, cellEls = [], speed = () => 1;
  let boardG, frame, plate, strip, pill, led, halo, backdrop, dust, dustGeo, dustSpd, key, rimA, rimB, flash, targetRing, frameRatio = 0;
  let beams = [], neons = [], sparks = [];
  const tiles = [], templates = {}, tweens = [];
  let hero = null, flyer = null, heroFx = null, mascotFit = { hero: null, flyer: null };
  let time = 0, last = 0, ppu = 60, viewW = 1, viewH = 1, needLayout = true, quality = 0, slow = 0, bgTex = {}, frameBuilt = 0;
  let lightsOut = 0, pop = 0, onair = 0, heat = 0;

  const tween = (dur, fn, delay = 0) => new Promise(done => tweens.push({ t: -delay, dur: Math.max(0.001, dur), fn, done }));
  const canvasTex = (size, draw) => { const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size); const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; return t; };
  const rr = (w, h, r, Cls = T.Shape) => { const s = new Cls(), x = -w / 2, y = -h / 2; s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s; };
  const px2w = (x, y) => [(x - viewW / 2) / ppu, (viewH / 2 - y) / ppu];       // a screen pixel on the board plane (z = 0)

  /* ---------- build ---------- */
  function build() {
    cv = document.createElement('canvas'); cv.id = 'gv3d'; cv.setAttribute('aria-hidden', 'true');
    // no software WebGL: a full-screen lit scene on the CPU would crawl, and the 2D look is the better fallback there
    const gl = cv.getContext('webgl2', { antialias: false, alpha: false, depth: true, stencil: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: true });
    if (!gl) throw new Error('no WebGL2');       // asked for here, quietly, so a device without it logs no error
    renderer = new T.WebGLRenderer({ canvas: cv, context: gl });
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    M.gpu = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : 'unknown';
    if (/swiftshader|llvmpipe|software|basic render/i.test(M.gpu)) throw new Error('software renderer');
    renderer.toneMapping = T.NeutralToneMapping;
    renderer.localClippingEnabled = true;          // the Hype Meter's liquid is cut at its level by a clipping plane
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.info.autoReset = false;
    scene = new T.Scene(); scene.background = new T.Color(0x0d0418);
    scene.environment = new T.PMREMGenerator(renderer).fromScene(new T.RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.42;
    cam = new T.PerspectiveCamera(FOV, 1, 0.5, 400);
    composer = new T.EffectComposer(renderer, new T.WebGLRenderTarget(4, 4, { samples: 4, type: T.HalfFloatType }));
    composer.addPass(new T.RenderPass(scene, cam));
    bloom = new T.UnrealBloomPass(new T.Vector2(4, 4), 0.36, 0.5, 1.0); composer.addPass(bloom);
    composer.addPass(new T.OutputPass());

    const softDot = canvasTex(64, (g, s) => { const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, s, s); });
    M._dot = softDot;
    M._ring = canvasTex(128, (g, s) => { g.strokeStyle = '#fff'; g.lineWidth = 9; g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 12, 0, 7); g.stroke(); });

    // room: the game's own room art, blurred and far behind, drifting slowly; light beams, neon and dust in front of it
    backdrop = new T.Mesh(new T.PlaneGeometry(1, 1), new T.MeshBasicMaterial({ color: 0xc8c8c8 })); backdrop.position.z = -22; scene.add(backdrop);
    const beamTex = canvasTex(128, (g, s) => { const gr = g.createLinearGradient(0, 0, s, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, s, s); const fade = g.createLinearGradient(0, 0, 0, s); fade.addColorStop(0, 'rgba(0,0,0,1)'); fade.addColorStop(0.75, 'rgba(0,0,0,.25)'); fade.addColorStop(1, 'rgba(0,0,0,0)'); g.globalCompositeOperation = 'destination-in'; g.fillStyle = fade; g.fillRect(0, 0, s, s); });
    for (const [hex, ph] of [[0xff3fa4, 0], [0x22e6ff, 2.1], [0xffd23b, 4.2]]) {
      const geo = new T.PlaneGeometry(5, 34); geo.translate(0, -17, 0);
      const m = new T.Mesh(geo, new T.MeshBasicMaterial({ map: beamTex, color: hex, transparent: true, opacity: 0.16, depthWrite: false, blending: T.AdditiveBlending }));
      m.position.z = -12; scene.add(m); beams.push({ m, ph, base: new T.Color(hex) });
    }
    const neon = (pts, hex, closed) => {
      const curve = new T.CatmullRomCurve3(pts.map(p => new T.Vector3(p[0], p[1], 0)), closed, 'catmullrom', 0.5);
      const m = new T.Mesh(new T.TubeGeometry(curve, 140, 0.07, 8, closed), new T.MeshBasicMaterial({ color: hex }));
      m.position.z = -7; scene.add(m); neons.push({ m, base: new T.Color(hex), ph: Math.random() * 6, flick: 0 }); return m;
    };
    const heartPts = []; for (let i = 0; i < 40; i++) { const t = i / 40 * 2 * PI; heartPts.push([Math.pow(Math.sin(t), 3), (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 16]); }
    const starPts = []; for (let i = 0; i < 10; i++) { const a = i / 10 * 2 * PI + PI / 2, r = i % 2 ? 0.45 : 1; starPts.push([Math.cos(a) * r, Math.sin(a) * r]); }
    neon(heartPts, 0xff3fa4, true); neon(starPts, 0x22e6ff, true);
    const DUST = 130, pos = new Float32Array(DUST * 3), col = new Float32Array(DUST * 3); dustSpd = new Float32Array(DUST);
    const pal = [new T.Color(0xff5fb8), new T.Color(0x38e8ff), new T.Color(0xffd95a), new T.Color(0xffffff)];
    for (let i = 0; i < DUST; i++) { pos.set([(Math.random() - 0.5) * 2, Math.random() * 2 - 1, Math.random()], i * 3); const c = pal[i % 4]; col.set([c.r, c.g, c.b], i * 3); dustSpd[i] = 0.02 + Math.random() * 0.05; }
    dustGeo = new T.BufferGeometry(); dustGeo.setAttribute('position', new T.BufferAttribute(pos, 3)); dustGeo.setAttribute('color', new T.BufferAttribute(col, 3));
    dust = new T.Points(dustGeo, new T.PointsMaterial({ size: 0.34, map: softDot, vertexColors: true, transparent: true, opacity: 0.75, depthWrite: false, blending: T.AdditiveBlending }));
    dust.frustumCulled = false; scene.add(dust);

    // lights
    key = new T.DirectionalLight(0xfff4ea, 1.55); key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048); key.shadow.radius = 5; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
    Object.assign(key.shadow.camera, { left: -6.5, right: 6.5, top: 6.5, bottom: -6.5, near: 1, far: 50 });
    rimA = new T.PointLight(0xff3bd4, 30, 40, 1.7); rimB = new T.PointLight(0x22e6ff, 30, 40, 1.7);
    flash = new T.PointLight(0xfff0c0, 0, 4.5, 1.5);
    scene.add(key, key.target, rimA, rimB, flash);

    // board
    boardG = new T.Group(); scene.add(boardG);
    const MAT = M._mat = {
      frame: new T.MeshPhysicalMaterial({ color: 0xff2585, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.08 }),
      plate: new T.MeshStandardMaterial({ color: 0x1a0835, roughness: 0.55 }),
      tile: new T.MeshPhysicalMaterial({ color: 0x6a22d8, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }),
      rim: new T.MeshStandardMaterial({ color: 0xffc81a, roughness: 0.3, metalness: 0.25 }),
      btn: new T.MeshPhysicalMaterial({ color: 0x18d6c8, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 }),
      white: new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }),
      bolt: new T.MeshPhysicalMaterial({ color: 0x19c9d8, roughness: 0.2, clearcoat: 1 }),
      pill: new T.MeshPhysicalMaterial({ color: 0x5a0a3a, roughness: 0.25, clearcoat: 1 }),
      led: new T.MeshBasicMaterial({ color: hdr(0xff2233, 2.4) }),
      strip: new T.MeshBasicMaterial({ color: hdr(0xffe14a, 1.7) }),
      sock: new T.MeshStandardMaterial({ color: 0x120733, roughness: 0.4 }),
      ring: new T.MeshBasicMaterial({ color: hdr(0xffd23f, 2.2) }),
    };
    const G = {
      body: new T.RoundedBoxGeometry(1, 1, 0.26, 4, 0.2), rim: new T.RoundedBoxGeometry(1.075, 1.075, 0.16, 3, 0.22),
      btn: new T.SphereGeometry(0.3, 24, 12), glow: new T.CircleGeometry(0.4, 32), sock: new T.RoundedBoxGeometry(0.94, 0.94, 0.06, 2, 0.18),
      tri: (() => { const s = new T.Shape(); s.moveTo(-0.085, -0.13); s.lineTo(0.14, 0); s.lineTo(-0.085, 0.13); s.closePath(); return new T.ExtrudeGeometry(s, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.035, bevelSegments: 3 }); })(),
    };
    const glowTex = canvasTex(128, (g, s) => { const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); gr.addColorStop(0, '#ff8be0'); gr.addColorStop(0.45, '#7a5cff'); gr.addColorStop(0.8, '#1f6fd6'); gr.addColorStop(1, '#2a0a66'); g.fillStyle = gr; g.fillRect(0, 0, s, s); });
    const glowMat = new T.MeshBasicMaterial({ map: glowTex, color: hdr(0xffffff, 1.15) });
    halo = new T.Sprite(new T.SpriteMaterial({ map: softDot, color: hdr(0x8a3cff, 0.5), transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
    halo.position.z = -2.2; boardG.add(halo);
    for (let i = 0; i < cellEls.length; i++) {
      const g = new T.Group();
      const body = new T.Mesh(G.body, MAT.tile), rim = new T.Mesh(G.rim, MAT.rim), btn = new T.Mesh(G.btn, MAT.btn), tri = new T.Mesh(G.tri, MAT.white), glow = new T.Mesh(G.glow, glowMat), sock = new T.Mesh(G.sock, MAT.sock);
      btn.scale.z = 0.32; btn.position.z = 0.115; tri.position.z = 0.2; glow.rotation.y = PI; glow.position.z = -0.158; sock.position.z = -0.122;
      for (const m of [body, rim, btn]) { m.castShadow = true; m.receiveShadow = true; }
      g.add(rim, body, btn, tri, sock, glow); boardG.add(g);
      tiles.push({ i, g, col: i % COLS, row: Math.floor(i / COLS), x: 0, y: 0, s: 1, open: false, flip: 0, lift: 0, deal: 1, dealRot: 0, kick: null, fall: 0, fallTo: 0, fallRot: 0, scr: 0, sym: null, tgt: 0 });
    }
    const ringCurve = new T.CatmullRomCurve3(rr(1.2, 1.2, 0.28).getPoints(8).map(p => new T.Vector3(p.x, p.y, 0)), true, 'catmullrom', 0.2);
    targetRing = new T.Mesh(new T.TubeGeometry(ringCurve, 80, 0.035, 6, true), MAT.ring); targetRing.visible = false; boardG.add(targetRing);
  }

  // The frame is built once from the DOM's own proportions (frame box vs board box), then only scaled.
  function buildFrame(fw, fh, bw, bh, ox, oy) {
    const MAT = M._mat, t = (fw - bw) / 2;
    const shape = rr(fw, fh, Math.min(0.9, fw * 0.11)); const hole = rr(bw * 0.985, bh * 0.985, 0.5, T.Path);
    hole.curves.forEach(c => { for (const k of ['v0', 'v1', 'v2']) if (c[k]) { c[k].x += ox; c[k].y += oy; } }); shape.holes.push(hole);
    const geo = new T.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.14, bevelSize: Math.min(0.14, t * 0.28), bevelSegments: 5, curveSegments: 10 }); geo.translate(0, 0, -0.2);
    frame = new T.Group();
    const f = new T.Mesh(geo, MAT.frame); f.castShadow = f.receiveShadow = true; frame.add(f);
    plate = new T.Mesh(new T.RoundedBoxGeometry(bw + 0.2, bh + 0.2, 0.3, 3, 0.3), MAT.plate); plate.position.set(ox, oy, -0.32); plate.receiveShadow = true; frame.add(plate);
    const sc = new T.CatmullRomCurve3(rr(bw * 0.965, bh * 0.965, 0.46).getPoints(10).map(p => new T.Vector3(p.x + ox, p.y + oy, 0.3)), true, 'catmullrom', 0.2);
    strip = new T.Mesh(new T.TubeGeometry(sc, 200, 0.03, 6, true), MAT.strip); frame.add(strip);
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) { const b = new T.Mesh(new T.SphereGeometry(Math.min(0.17, t * 0.34), 20, 12), MAT.bolt); b.position.set(sx * (fw / 2 - t * 0.55), sy * (fh / 2 - t * 0.55), 0.42); b.castShadow = true; frame.add(b); }
    const top = fh / 2 - (fh / 2 - (oy + bh / 2)) / 2;
    pill = new T.Mesh(new T.CapsuleGeometry(Math.min(0.2, t * 0.3), 1.1, 6, 16), MAT.pill); pill.rotation.z = PI / 2; pill.position.set(0, top, 0.36); frame.add(pill);
    led = new T.Mesh(new T.SphereGeometry(0.09, 14, 10), MAT.led); led.position.set(-0.5, top, 0.54); frame.add(led);
    boardG.add(frame);
  }

  /* ---------- layout: every tile behind its DOM cell ---------- */
  function layout() {
    needLayout = false;
    const w = window.innerWidth, h = window.innerHeight; if (!w || !h || !cellEls.length) return;
    const r0 = cellEls[0].getBoundingClientRect(), r1 = cellEls[1].getBoundingClientRect(), gr = grid.getBoundingClientRect();
    const pitch = r1.left - r0.left; if (pitch <= 2 || r0.width <= 2) { needLayout = true; return; }   // not laid out yet (intro, hidden)
    viewW = w; viewH = h; ppu = pitch;
    const maxPr = [2, 1.5, 1][quality], pr = Math.min(window.devicePixelRatio || 1, maxPr);
    renderer.setPixelRatio(pr); renderer.setSize(w, h, false); composer.setPixelRatio(pr); composer.setSize(w, h);
    bloom.enabled = quality < 2; renderer.shadowMap.enabled = quality < 2; key.castShadow = quality < 2;
    const D = (h / 2) / (ppu * TAN);
    cam.aspect = w / h; cam.position.set(0, 0, D); cam.lookAt(0, 0, 0); cam.updateProjectionMatrix();
    const [bx, by] = px2w(gr.left + gr.width / 2, gr.top + gr.height / 2); boardG.position.set(bx, by, 0);
    const s = r0.width / ppu * 0.93;
    for (const t of tiles) { const r = cellEls[t.i].getBoundingClientRect(), [x, y] = px2w(r.left + r.width / 2, r.top + r.height / 2); t.x = x - bx; t.y = y - by; t.s = s; }
    const fb = document.getElementById('framebox'), bd = document.getElementById('board');
    if (fb && bd) {
      const f = fb.getBoundingClientRect(), b = bd.getBoundingClientRect(), fw = f.width / ppu, fh = f.height / ppu;
      // The frame is built from the DOM's proportions and then only scaled. The smallest popout drops the frame
      // (board = frame box), so when the proportion changes (a resize across that size) it is built again.
      const ratio = f.width > 0 ? b.width / f.width : 0;
      if (frameBuilt && Math.abs(ratio - frameRatio) > 0.01) { boardG.remove(frame); frame.traverse(o => { if (o.geometry) o.geometry.dispose(); }); frameBuilt = 0; }
      if (!frameBuilt) { const [fx, fy] = px2w(f.left + f.width / 2, f.top + f.height / 2), [cx, cy] = px2w(b.left + b.width / 2, b.top + b.height / 2); buildFrame(fw, fh, b.width / ppu, b.height / ppu, cx - fx, cy - fy); frameBuilt = fw; frameRatio = ratio; }
      const [fx, fy] = px2w(f.left + f.width / 2, f.top + f.height / 2), k = fw / frameBuilt;
      frame.position.set(fx - bx, fy - by, 0); frame.scale.set(k, k, 1);
      halo.scale.setScalar(fw * 2.1);
    }
    key.position.set(bx - 7, by + 11, 15); key.target.position.set(bx, by, 0); key.target.updateMatrixWorld();
    // backdrop covers the view at its depth, with room to drift
    const portrait = w / h < 0.8, tx = portrait ? bgTex.tall || bgTex.wide : bgTex.wide || bgTex.tall, halfH = h / 2 / ppu, halfW = w / 2 / ppu;
    if (tx) { const k = (D - backdrop.position.z) / D, bh = halfH * 2 * k * 1.1, bw = halfW * 2 * k * 1.1, ia = tx.image.width / tx.image.height; backdrop.material.map = tx; backdrop.material.needsUpdate = true; backdrop.scale.set(Math.max(bw, bh * ia), Math.max(bh, bw / ia), 1); }
    M._view = { halfW, halfH, D, portrait };
    beams.forEach((b, i) => b.m.position.set((i - 1) * halfW * 0.9, halfH * 1.9, -12));
    // neon signs and mascots only where the HUD leaves room: left of the board between the meter column and the frame,
    // right of the board between the post counter and the GO LIVE sign, never under the bar
    const byId = id => document.getElementById(id), hud = document.querySelector('.hud'), fbR = fb ? fb.getBoundingClientRect() : gr;
    const vis = el => { if (!el) return null; const r = el.getBoundingClientRect(); return r.width > 4 && r.height > 4 ? r : null; };
    const hr = vis(hud), mr = vis(byId('hm')), rk = vis(byId('riskDock')), lv = vis(byId('liveDock')), br = vis(byId('bar'));
    const leftOf = r => r && r.right < fbR.left + 2 ? r.right : 0;
    const bottom = br && br.top > h * 0.4 ? br.top : h, leftX0 = Math.max(leftOf(mr), leftOf(rk)), rightX1 = w;
    const fitBox = (x0, x1, y0, y1, minW) => { const bw = x1 - x0, bh = y1 - y0; if (bw < minW * pitch || bh < 2.4 * pitch) return null; const [cx, cy] = px2w((x0 + x1) / 2, (y0 + y1) / 2); return { x: cx, y: cy, s: Math.min(bw / ppu * 0.64, bh / ppu * 0.5, 3.4) }; };
    mascotFit.hero = fitBox(leftX0 + pitch * 0.12, fbR.left - pitch * 0.05, h * 0.36, bottom, 1.8);
    // the flyer starts under whatever shares the right column with the post counter (the compact meter, the risk chips)
    const rightOf = r => r && r.left > fbR.right - 2 ? r.bottom : 0, mini = vis(byId('hmMini'));
    const hudB = Math.max(hr && hr.left > fbR.right ? hr.bottom : h * 0.3, rightOf(mini), rightOf(rk)), flyB = lv && lv.left > fbR.right - 2 && lv.top > hudB ? lv.top - pitch * 0.15 : bottom;
    mascotFit.flyer = fitBox(fbR.right, rightX1, hudB, flyB, 2.2);
    layoutUI();
    const nShow = !portrait && halfW > 7;
    // one neon sign in the gap above the heart; the star stays off (the right side belongs to the multiplier)
    neons[0].m.visible = nShow && !!mascotFit.hero && fbR.left - leftX0 > 3.2 * pitch; neons[1].m.visible = false;
    const ns = clamp(halfH * 0.16, 0.6, 1.3) * 1.25;
    { const [nx, ny] = px2w((leftX0 + fbR.left) / 2, h * 0.2), k = (D + 7) / D; neons[0].m.position.set(nx * k, ny * k, -7); neons[0].m.scale.setScalar(ns * 0.8); }
    neons[1].m.position.set(halfW * 1.05, halfH * 0.2, -7); neons[1].m.scale.setScalar(ns * 0.85);
  }

  /* ---------- UI objects in the room: the PLAY button and the Hype Meter tube ----------
     Built from the board's own materials (pink clearcoat frame, teal play dome like the tiles', gold marks, teal bolts,
     plum plate). Each sits exactly behind its DOM element, the way every tile sits behind its cell: #action, and #hmTube
     (the tall meter) or #hmMiniBar (the compact one). The DOM keeps the clicks, the text and the 2D look. States are read
     from the DOM every frame (#action: busy, auto, skipping, disabled; #hm: --lv, full, charged; body: bigwin-on,
     cine-card, onair), and game.js calls meterFx(kind) for the moments (gain, full, drain). */
  const UI = { els: null, btn: null, meter: null, key: '', rect: null, base: null, px: null, down: false, over: false, press: 0, hover: 0, pulse: 0, sq: 0, fade: 0, wasBusy: false,
    lvV: 0, vel: 0, gain: 0, full: 0, drain: 0, tier: -1, rider: null, pop: 1, checkT: 0, grad: null, gradHot: null };
  const C_READY = new T.Color(0x18d6c8), C_BUSY = new T.Color(0x7a34e6), C_AUTO = new T.Color(0xffb21a), C_OFF = new T.Color(0x6e6888), C_RED = new T.Color(1.9, 0.18, 0.24);
  const RIDERS = ['heart', 'fire', 'rocket', 'crown', 'live'], uiSparks = [], tmpA = new T.Color(), tmpB = new T.Color();
  const GRAD = [[0, 0x33e4f0], [0.55, 0xffd23f], [1, 0xff2e88]], GRAD_HOT = [[0, 0xff3d4a], [0.6, 0xff2e88], [1, 0xffd23f]];
  const gradAt = (v, hot, out) => { const st = hot ? GRAD_HOT : GRAD; for (let i = 1; i < st.length; i++) if (v <= st[i][0]) return out.setHex(st[i - 1][1]).lerp(tmpB.setHex(st[i][1]), (v - st[i - 1][0]) / (st[i][0] - st[i - 1][0])); return out.setHex(st[st.length - 1][1]); };
  const gradTex = stops => canvasTex(64, (g, s) => { const gr = g.createLinearGradient(0, s, 0, 0); stops.forEach(([o, c]) => gr.addColorStop(o, '#' + c.toString(16).padStart(6, '0'))); g.fillStyle = gr; g.fillRect(0, 0, s, s); });
  // a capsule outline (round ends drawn as true arcs), w across and h along y
  const capShape = (w, h, Cls = T.Shape) => { const s = new Cls(), r = w / 2, hy = Math.max(0.0005, h / 2 - r); s.moveTo(r, -hy); s.lineTo(r, hy); s.absarc(0, hy, r, 0, PI, false); s.lineTo(-r, -hy); s.absarc(0, -hy, r, PI, 2 * PI, false); return s; };
  // UVs from the bottom (v = 0) to the top (v = 1) along y, so a gradient is fixed by height, not by the mesh's rings
  const uvByHeight = geo => { geo.computeBoundingBox(); const bb = geo.boundingBox, p = geo.attributes.position, uv = geo.attributes.uv, hh = bb.max.y - bb.min.y || 1; for (let i = 0; i < p.count; i++) uv.setY(i, (p.getY(i) - bb.min.y) / hh); uv.needsUpdate = true; return geo; };

  function buildButton() {
    const MAT = M._mat, g = new T.Group(), press = new T.Group();
    const mats = { dome: new T.MeshPhysicalMaterial({ color: C_READY.clone(), roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.06 }), led: new T.MeshBasicMaterial({ color: hdr(0xffe14a, 1.6) }),
      glow: new T.SpriteMaterial({ map: M._dot, color: hdr(0x22e6ff, 0.4), transparent: true, depthWrite: false, blending: T.AdditiveBlending }) };
    const bezel = new T.Mesh(new T.TorusGeometry(0.425, 0.072, 20, 80), MAT.frame);
    const sock = new T.Mesh(new T.CylinderGeometry(0.43, 0.43, 0.08, 64), MAT.sock); sock.rotation.x = PI / 2; sock.position.z = -0.05;
    const dome = new T.Mesh(new T.SphereGeometry(0.36, 48, 24), mats.dome); dome.scale.z = 0.5;
    const tri = new T.Shape(); tri.moveTo(-0.095, -0.15); tri.lineTo(0.165, 0); tri.lineTo(-0.095, 0.15); tri.closePath();
    const play = new T.Mesh(new T.ExtrudeGeometry(tri, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.028, bevelSegments: 3 }), MAT.white); play.position.z = 0.165;
    const stop = new T.Mesh(new T.RoundedBoxGeometry(0.25, 0.25, 0.05, 3, 0.045), MAT.white); stop.position.z = 0.19;
    const ring = new T.Mesh(new T.TorusGeometry(0.507, 0.013, 8, 120), mats.led); ring.position.z = 0.03;
    const glow = new T.Sprite(mats.glow); glow.scale.setScalar(1.9); glow.position.z = -0.15;
    press.add(dome, play, stop); g.add(glow, sock, bezel, ring, press); g.visible = false; scene.add(g);
    return { g, press, play, stop, mats };
  }

  // W across, H along the tube (world units); horiz = the compact meter, lying down and filling to the right
  function buildMeter(W, H, horiz) {
    const MAT = M._mat, g = new T.Group(), t = Math.min(W * 0.17, 0.2), iw = W - 2 * t, ih = H - 2 * t, own = [];
    const mat = m => { own.push(m); return m; };
    const outer = capShape(W, H); outer.holes.push(capShape(iw, ih, T.Path));
    const frameMat = mat(MAT.frame.clone()); frameMat.emissive = new T.Color(0x000000);
    const frm = new T.Mesh(new T.ExtrudeGeometry(outer, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.06, bevelSize: Math.min(0.06, t * 0.42), bevelSegments: 4, curveSegments: 20 }), frameMat); frm.position.z = -0.07;
    const back = new T.Mesh(new T.ShapeGeometry(capShape(iw * 1.02, ih * 1.01), 20), MAT.plate); back.position.z = -0.09;
    // the liquid: a glowing column coloured by height (cyan, gold, pink), cut at the level by a clipping plane
    const lr = iw * 0.36, len = Math.max(0.01, ih - 2 * lr - iw * 0.16), plane = new T.Plane(new T.Vector3(0, -1, 0), 0);
    const liqMat = mat(new T.MeshBasicMaterial({ map: UI.grad, color: new T.Color(1, 1, 1), clippingPlanes: [plane] }));
    const liquid = new T.Mesh(uvByHeight(new T.CapsuleGeometry(lr, len, 10, 28)), liqMat);
    const capMat = mat(new T.MeshBasicMaterial({ color: 0xffffff }));
    const cap = new T.Mesh(new T.CircleGeometry(lr * 0.97, 32), capMat); cap.rotation.x = -PI / 2 + 0.8;
    const NB = 12, bp = new Float32Array(NB * 3), bs = [];
    for (let i = 0; i < NB; i++) { bp.set([(Math.random() - 0.5) * lr * 1.1, 0, lr * 0.55], i * 3); bs.push({ u: Math.random(), v: 0.25 + Math.random() * 0.45, x: (Math.random() - 0.5) * lr * 1.1 }); }
    const bGeo = new T.BufferGeometry(); bGeo.setAttribute('position', new T.BufferAttribute(bp, 3));
    const bubbles = new T.Points(bGeo, mat(new T.PointsMaterial({ size: Math.max(0.04, lr * 0.5), map: M._dot, color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false, blending: T.AdditiveBlending, clippingPlanes: [plane] })));
    bubbles.frustumCulled = false;
    // the glass over it, with a painted highlight down one side
    const gr = iw * 0.47, glassLen = Math.max(0.01, ih - 2 * gr);
    const glass = new T.Mesh(new T.CapsuleGeometry(gr, glassLen, 10, 28), mat(new T.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.04, transparent: true, opacity: 0.14, depthWrite: false, envMapIntensity: 1.8 })));
    glass.scale.z = 0.7;
    const shine = new T.Mesh(new T.PlaneGeometry(gr * 0.22, glassLen * 0.92), mat(new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, depthWrite: false, blending: T.AdditiveBlending })));
    shine.position.set(-gr * 0.5, 0, gr * 0.72);
    // gold marks at 25, 50 and 75 %, teal bolts at both ends, like the board's frame
    const marks = new T.Group();
    for (const f of [0.25, 0.5, 0.75]) { const m = new T.Mesh(new T.CapsuleGeometry(t * 0.16, t * 0.5, 4, 8), MAT.rim); m.rotation.z = PI / 2; m.position.set((horiz ? 1 : -1) * (W / 2 - t * 0.5), -ih / 2 + f * ih, 0.1); marks.add(m); }
    const bolts = [-1, 1].map(sy => { const b = new T.Mesh(new T.SphereGeometry(t * 0.42, 16, 10), MAT.bolt); b.position.set(0, sy * (H / 2 - t * 0.5), 0.1); return b; });
    const haloMat = mat(new T.SpriteMaterial({ map: M._dot, color: 0xffffff, transparent: true, opacity: 0.5, depthWrite: false, blending: T.AdditiveBlending }));
    const halo = new T.Sprite(haloMat); halo.scale.setScalar(W * 2.4); halo.position.z = -0.05;
    g.add(halo, back, frm, liquid, cap, bubbles, glass, shine, marks, ...bolts);
    if (horiz) g.rotation.z = -PI / 2;
    g.visible = false; scene.add(g);
    return { g, plane, liquid, liqMat, cap, capMat, bubbles, bs, frameMat, halo, haloMat, own, W, H, iw, lr, len, horiz };
  }
  function dropMeter() {
    const m = UI.meter; if (!m) return;
    if (UI.rider) { m.g.remove(UI.rider); UI.rider = null; }        // a rider shares its geometry with the templates
    scene.remove(m.g); m.g.traverse(o => { if (o.geometry) o.geometry.dispose(); }); m.own.forEach(x => x.dispose());
    UI.meter = null; UI.key = ''; UI.tier = -1;
  }
  const uiRect = el => { const r = el && el.getBoundingClientRect(); return r && r.width > 4 && r.height > 4 ? r : null; };
  function layoutUI() {
    if (!UI.els) return;
    const { action, tube, mini } = UI.els, a = uiRect(action);
    let r = uiRect(tube), horiz = false; if (!r) { r = uiRect(mini); horiz = !!r; }
    UI.px = [a ? [a.left, a.top, a.width] : null, r ? [r.left, r.top, r.width, r.height] : null];
    if (a) { const [x, y] = px2w(a.left + a.width / 2, a.top + a.height / 2); UI.rect = { x, y, s: a.width / ppu }; } else UI.rect = null;
    if (r) {
      const W = (horiz ? r.height : r.width) / ppu, H = (horiz ? r.width : r.height) / ppu, key = (horiz ? 'h' : 'v') + W.toFixed(3) + 'x' + H.toFixed(3);
      if (key !== UI.key) { dropMeter(); UI.meter = buildMeter(W, H, horiz); UI.key = key; }
      const [x, y] = px2w(r.left + r.width / 2, r.top + r.height / 2); UI.base = { x, y };
    } else UI.base = null;
  }
  // elements can move without the board resizing (fonts, a state class): check now and then
  function uiMoved() {
    if (!UI.els || !UI.px) return false;
    const a = uiRect(UI.els.action), r = uiRect(UI.els.tube) || uiRect(UI.els.mini), [pa, pm] = UI.px, off = (p, q) => !p !== !q || (p && q.some((v, i) => Math.abs(v - p[i]) > 1.5));
    return off(pa, a && [a.left, a.top, a.width]) || off(pm, r && [r.left, r.top, r.width, r.height]);
  }
  function uiBurst(x, y, color, n) {
    const c = new T.Color(color);
    for (let k = 0; k < n; k++) {
      const s = new T.Sprite(new T.SpriteMaterial({ map: M._dot, color: (k % 3 ? c : new T.Color(0xffffff)).clone().multiplyScalar(1.8), transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
      const an = Math.random() * PI * 2, v = 1.4 + Math.random() * 2.4;
      s.position.set(x, y, 0.6); s.scale.setScalar(0.12 + Math.random() * 0.14); scene.add(s);
      uiSparks.push({ s, vx: Math.cos(an) * v, vy: Math.sin(an) * v + 1.4, life: 0, max: 0.5 + Math.random() * 0.4 });
    }
  }
  function tickButton(dt, bc) {
    const B = UI.btn, el = UI.els.action, r = UI.rect;
    if (!B) return;
    if (!r) { B.g.visible = false; return; }
    const cl = el.classList, busy = cl.contains('busy'), auto = cl.contains('auto'), dis = el.disabled, skip = cl.contains('skipping');
    const away = bc.contains('bigwin-on') || bc.contains('cine-card');
    UI.fade += ((away ? 0 : 1) - UI.fade) * Math.min(1, dt * (away ? 14 : 9));
    if (busy && !UI.wasBusy) UI.pulse = 1;
    UI.wasBusy = busy; UI.pulse = Math.max(0, UI.pulse - dt * 3.2);
    UI.press += ((UI.down && !dis ? 1 : 0) - UI.press) * Math.min(1, dt * 24);
    UI.hover += ((UI.over && !dis ? 1 : 0) - UI.hover) * Math.min(1, dt * 12);
    UI.sq += ((busy || auto ? 1 : 0) - UI.sq) * Math.min(1, dt * 14);
    const ready = !busy && !auto && !dis, breathe = ready ? Math.sin(time * 2.4) * 0.016 : 0, kick = UI.pulse > 0 ? Math.sin((1 - UI.pulse) * PI) : 0;
    const k = r.s * UI.fade * (1 + breathe + UI.hover * 0.035 - UI.press * 0.05 + kick * 0.04);
    B.g.visible = UI.fade > 0.02;
    B.g.position.set(r.x, r.y, 0); B.g.scale.setScalar(Math.max(0.001, k));
    B.press.scale.set(1 - kick * 0.04, 1 - kick * 0.04, Math.max(0.35, 1 - UI.press * 0.5 - kick * 0.35));
    B.press.position.z = -(UI.press * 0.035 + kick * 0.02);
    const q = UI.sq;
    B.play.scale.setScalar(Math.max(0.001, 1 - q)); B.play.rotation.z = q * PI * 0.5;
    B.stop.scale.setScalar(Math.max(0.001, easeOutBack(q))); B.stop.rotation.z = (1 - q) * -PI * 0.5;
    B.mats.dome.color.lerp(dis ? C_OFF : auto ? C_AUTO : busy ? C_BUSY : C_READY, Math.min(1, dt * 8));
    const air = bc.contains('onair') && bc.contains('in-round'), li = (ready ? 1.25 + Math.sin(time * 3) * 0.55 : auto ? 1.1 + Math.sin(time * 10) * 0.7 : skip ? 2.4 : 0.32) * (1 - lightsOut * 0.5);
    B.mats.led.color.setHex(air ? 0xff3a4a : 0xffe14a).multiplyScalar(Math.max(0.05, li));
    B.mats.glow.color.setHex(ready ? 0x22e6ff : auto ? 0xffc81a : air ? 0xff3a4a : 0x8a3cff).multiplyScalar(ready ? 0.4 + Math.sin(time * 2.4) * 0.12 : 0.28);
  }
  function tickMeter(dt) {
    const Mt = UI.meter, hm = UI.els.hm;
    if (!Mt) return;
    if (!UI.base) { Mt.g.visible = false; return; }
    Mt.g.visible = true;
    const lv = clamp(parseFloat(hm.style.getPropertyValue('--lv')) || 0), full = hm.classList.contains('full'), charged = hm.classList.contains('charged');
    // a springy fill, like the 2D tube's overshoot
    UI.vel += (lv - UI.lvV) * 130 * dt; UI.vel *= Math.exp(-15 * dt); UI.lvV = clamp(UI.lvV + UI.vel * dt, 0, 1.04);
    UI.gain = Math.max(0, UI.gain - dt * 2.2); UI.full = Math.max(0, UI.full - dt * 0.9); UI.drain = Math.max(0, UI.drain - dt * 1.3);
    const shake = (charged ? 0.012 : 0) + UI.drain * 0.03 + UI.full * 0.02;
    Mt.g.position.set(UI.base.x + Math.sin(time * 61) * shake, UI.base.y + Math.cos(time * 53) * shake * 0.6, 0);
    const bot = -(Mt.len / 2 + Mt.lr), top = -bot, f = Math.min(1, UI.lvV), y = bot + (top - bot) * f, p = Mt.g.position;
    if (Mt.horiz) Mt.plane.normal.set(-1, 0, 0), Mt.plane.constant = p.x + y; else Mt.plane.normal.set(0, -1, 0), Mt.plane.constant = p.y + y;
    const wet = UI.lvV > 0.004;
    Mt.liquid.visible = Mt.cap.visible = Mt.bubbles.visible = wet;
    Mt.cap.position.set(0, y, 0); Mt.cap.rotation.z = Math.sin(time * 2.2) * 0.12;      // the surface sloshes
    Mt.liqMat.map = full ? UI.gradHot : UI.grad;
    const glow = 1 + UI.gain * 0.35 + (charged ? 0.08 + Math.sin(time * 9) * 0.08 : 0) + (full ? 0.1 + Math.sin(time * 6) * 0.1 : 0) + UI.full * 0.4;
    Mt.liqMat.color.setRGB(glow, glow, glow).lerp(C_RED, UI.drain * 0.85);
    gradAt(f, full, Mt.capMat.color).multiplyScalar(1.25 + UI.gain * 0.5).lerp(C_RED, UI.drain * 0.85);
    // a soft light rises with the surface, stronger as the meter heats up
    Mt.halo.visible = wet; Mt.halo.position.set(0, y - Mt.lr, -0.05);
    gradAt(f, full, Mt.haloMat.color).multiplyScalar(0.35 + f * 0.45 + UI.gain * 0.6 + UI.full * 0.8 + (full ? 0.25 + Math.sin(time * 6) * 0.15 : 0));
    Mt.frameMat.emissive.setRGB(UI.full * 0.9 + UI.drain * 0.6, UI.full * 0.15, UI.full * 0.35);
    // bubbles rise through the liquid only
    const pos = Mt.bubbles.geometry.attributes.position;
    Mt.bs.forEach((b, i) => { b.u += b.v * dt * (1 + UI.gain * 2); if (b.u > 1) { b.u -= 1; b.x = (Math.random() - 0.5) * Mt.lr * 1.1; } pos.setXY(i, b.x + Math.sin(time * 3 + i) * Mt.lr * 0.08, bot + b.u * (y - bot)); });
    pos.needsUpdate = true;
    // the rider: the reaction of the meter's level surfs the liquid (heart, fire, rocket, crown, then LIVE at 100%)
    const tier = lv >= 1 ? 4 : lv >= 0.75 ? 3 : lv >= 0.5 ? 2 : lv >= 0.25 ? 1 : 0;
    if (tier !== UI.tier && templates[RIDERS[tier]]) { if (UI.rider) Mt.g.remove(UI.rider); UI.rider = spawn(RIDERS[tier]); Mt.g.add(UI.rider); UI.tier = tier; UI.pop = 0; }
    if (UI.rider) {
      UI.pop = Math.min(1, UI.pop + dt * 3.2);
      UI.rider.scale.setScalar(Mt.iw * 1.2 * Math.max(0.001, easeOutBack(UI.pop)));
      UI.rider.position.set(0, Math.min(top - Mt.iw * 0.2, y + Mt.iw * 0.42) + Math.sin(time * (charged ? 9 : 3)) * Mt.iw * (charged ? 0.07 : 0.035), 0.06);
      UI.rider.rotation.set(0, Math.sin(time * 1.3) * 0.5, Mt.horiz ? PI / 2 : 0);
    }
  }
  function tickUI(dt) {
    if (!UI.els) return;
    if ((UI.checkT -= dt) <= 0) { UI.checkT = 0.8; if (uiMoved()) needLayout = true; }
    tickButton(dt, document.body.classList); tickMeter(dt);
    for (let i = uiSparks.length - 1; i >= 0; i--) { const q = uiSparks[i]; q.life += dt; q.vy -= 5 * dt; q.s.position.x += q.vx * dt; q.s.position.y += q.vy * dt; q.s.material.opacity = 1 - q.life / q.max; if (q.life >= q.max) { scene.remove(q.s); q.s.material.dispose(); uiSparks.splice(i, 1); } }
  }
  M.meterFx = (kind, k) => {
    if (!UI.meter) return;
    if (kind === 'gain') UI.gain = Math.min(1, 0.45 + (k || 0) * 3);
    else if (kind === 'drain') UI.drain = 1;
    else if (kind === 'full') {
      UI.full = 1; const Mt = UI.meter, p = Mt.g.position, end = Mt.len / 2 + Mt.lr;
      uiBurst(Mt.horiz ? p.x + end : p.x, Mt.horiz ? p.y : p.y + end, 0xff3d4a, quality > 1 ? 10 : 26);
    }
  };

  /* ---------- models ---------- */
  const loader = new T.GLTFLoader(); loader.setMeshoptDecoder(T.MeshoptDecoder);
  const loadModel = (name, hi) => loader.loadAsync(A3 + (hi ? 'hi/' : '') + name + '.glb').then(gltf => {
    const src = gltf.scene, box = new T.Box3().setFromObject(src), size = box.getSize(new T.Vector3()), c = box.getCenter(new T.Vector3());
    src.traverse(o => { if (o.isMesh) { o.castShadow = true; o.material.envMapIntensity = 1; } });
    src.position.sub(c);
    const turn = new T.Group(); turn.add(src); turn.rotation.y = SYM[name].yaw; turn.scale.setScalar(1 / Math.max(size.x, size.y, size.z));
    const root = new T.Group(); root.add(turn); templates[hi ? name + '-hi' : name] = root;
  });
  const spawn = (name, hi) => (hi && templates[name + '-hi'] || templates[name]).clone(true);

  /* ---------- API ---------- */
  M.init = async opts => {
    try {
      grid = opts.grid; speed = opts.speed || speed; cellEls = [...grid.children];
      build();
      const tl = new T.TextureLoader(), tex = (k, f) => tl.loadAsync(A3 + f).then(t => { t.colorSpace = T.SRGBColorSpace; bgTex[k] = t; needLayout = true; }).catch(() => {});
      tex('wide', 'bg-wide.jpg'); tex('tall', 'bg-tall.jpg');
      await Promise.race([Promise.all(Object.keys(SYM).map(n => loadModel(n, false))), new Promise((_, rej) => setTimeout(() => rej(new Error('3D models timed out')), 12000))]);
      document.body.prepend(cv); document.body.classList.add('gv3d');
      // the PLAY button and the Hype Meter tube join the scene
      const byId = id => document.getElementById(id);
      UI.grad = gradTex(GRAD); UI.gradHot = gradTex(GRAD_HOT);
      UI.els = { action: byId('action'), tube: byId('hmTube'), mini: byId('hmMiniBar'), hm: byId('hm') };
      if (UI.els.action && UI.els.hm) {
        UI.btn = buildButton();
        const act = UI.els.action, up = () => { UI.down = false; };
        act.addEventListener('pointerenter', () => { UI.over = true; }); act.addEventListener('pointerleave', () => { UI.over = false; UI.down = false; });
        act.addEventListener('pointerdown', () => { UI.down = true; }); window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
        const ro = new ResizeObserver(() => { needLayout = true; }); [act, UI.els.tube, UI.els.mini, byId('bar')].forEach(e => e && ro.observe(e));
      } else UI.els = null;
      quality = (navigator.hardwareConcurrency || 8) <= 4 || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) ? 1 : 0;
      new ResizeObserver(() => { needLayout = true; }).observe(grid); window.addEventListener('resize', () => { needLayout = true; });
      M.ready = true; M.tiles3d = true;
      Promise.all(HI.map(n => loadModel(n, true))).then(() => { needLayout = true; }).catch(() => {});
      last = performance.now(); requestAnimationFrame(tick);
      return true;
    } catch (e) {
      console.info('3D layer off: ' + (e && e.message || e));
      if (cv) cv.remove(); document.body.classList.remove('gv3d'); M.ready = false; M.tiles3d = false;
      return false;
    }
  };
  const idx = el => cellEls.indexOf(el);
  M.close = i => { const t = tiles[i]; if (!t) return; t.open = false; t.flip = 0; t.lift = 0; t.scr = 0; t.fall = 0; t.fallTo = 0; t.kick = null; };
  M.open = (i, fast) => {
    const t = tiles[i]; if (!t || t.open) return; t.open = true; t.scr = 0;
    if (fast) { t.flip = 1; return; }
    tween(0.34 * speed(), k => { if (t.open) { t.flip = easeInOut(k); t.lift = Math.sin(k * PI) * 0.7; } });
  };
  M.scratch = i => { const t = tiles[i]; if (t && !t.open) t.scr = time + 0.14; };          // the tile rattles while the coin is on it
  M.dealIn = () => { const sp = speed(); tiles.forEach(t => { t.deal = 0; tween(0.34 * sp, k => { t.deal = k; }, (t.col + t.row) * 0.022 * sp); }); };
  M.ripple = (i, tier) => {
    const o = tiles[i]; if (!o) return; const sp = speed(), amp = 0.045 + tier * 0.03;
    tiles.forEach(t => { if (t === o || t.open) return; const dx = t.col - o.col, dy = t.row - o.row, d = Math.hypot(dx, dy), a = amp * Math.exp(-(d - 1) * 0.42); if (a < 0.01) return; t.kick = { x: dx / d * a, y: -dy / d * a, k: 0 }; const kk = t.kick; tween(0.46 * sp, k => { kk.k = k; }, d * 0.038 * sp).then(() => { if (t.kick === kk) t.kick = null; }); });
  };
  M.collapse = i => { const o = tiles[i]; if (!o) return; const sp = speed(); tiles.forEach(t => { if (t.open) return; const d = Math.hypot(t.col - o.col, t.row - o.row); t.fallRot = (Math.random() - 0.5) * 0.7; tween(0.5 * sp, k => { t.fallTo = k; }, d * 0.055 * sp); }); };
  M.clear = () => {
    tiles.forEach(t => { if (t.sym) { boardG.remove(t.sym.o); t.sym = null; } M.close(t.i); });
    if (heroFx) { boardG.remove(heroFx); heroFx = null; }
  };
  M.show = (i, key, cellEl, imgEl, celebrateMs = 650) => {
    const t = tiles[i]; if (!t || !templates[key]) return false;
    if (t.sym) boardG.remove(t.sym.o);
    const o = spawn(key); boardG.add(o);
    t.sym = { o, key, t0: time, cel: time + celebrateMs / 1000 * speed(), hop: 0, spin: 0, ph: Math.random() * 6, def: SYM[key] };
    M.open(i);
    return true;
  };
  M.celebrate = i => { const s = tiles[i] && tiles[i].sym; if (s && s.key !== 'cancel') { s.cel = time + 1.2 * speed(); s.spin = 1; } };
  M.hop = i => { const s = tiles[i] && tiles[i].sym; if (s) s.hop = 1; };
  M.hero = key => {
    if (!templates[key]) return false;
    if (heroFx) boardG.remove(heroFx);
    const o = heroFx = spawn(key, true), sp = speed(), size = Math.min(4.6, (M._view ? M._view.halfH : 5) * 0.9);
    o.position.set(0, 0, 2.4); o.scale.setScalar(0.001); boardG.add(o);
    tween(0.36 * sp, k => { o.scale.setScalar(size * Math.max(0.001, easeOutBack(k))); o.rotation.y = (1 - easeOut(k)) * -PI * 2; })
      .then(() => tween(0.5 * sp, k => { o.position.y = Math.abs(Math.sin(k * PI * 2)) * 0.35; o.rotation.z = Math.sin(k * PI * 4) * 0.08; }))
      .then(() => tween(0.26 * sp, k => { o.scale.setScalar(size * Math.max(0.001, 1 - easeInOut(k))); o.position.z = 2.4 - k; }))
      .then(() => { boardG.remove(o); if (heroFx === o) heroFx = null; });
    if (hero) heroHop = 1;
    return true;
  };
  let heroHop = 0;
  M.impact = (cellEl, color, tier) => {
    const t = tiles[idx(cellEl)]; if (!t) return false;
    const c = new T.Color(color || '#ffe9a0'), sp = speed();
    const ring = new T.Sprite(new T.SpriteMaterial({ map: M._ring, color: c.clone().multiplyScalar(2), transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
    ring.position.set(t.x, t.y, 0.75); boardG.add(ring);
    tween(0.5 * sp, k => { ring.scale.setScalar(0.5 + easeOut(k) * (2 + tier * 0.45)); ring.material.opacity = 1 - k; }).then(() => { boardG.remove(ring); ring.material.dispose(); });
    flash.color.copy(c).lerp(new T.Color(0xffffff), 0.5); flash.position.set(boardG.position.x + t.x, boardG.position.y + t.y, 1.3);
    tween(0.45 * sp, k => { flash.intensity = (1 - k) * (18 + tier * 6); });
    const n = quality > 1 ? 6 : 10 + Math.max(0, tier) * 4;
    for (let k = 0; k < n; k++) {
      const a = Math.random() * PI * 2, v = 2.2 + Math.random() * 2.6 + tier * 0.4;
      const s = new T.Sprite(new T.SpriteMaterial({ map: M._dot, color: (k % 3 ? c : new T.Color(0xffffff)).clone().multiplyScalar(1.8), transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
      s.position.set(t.x, t.y, 0.9); s.scale.setScalar(0.16 + Math.random() * 0.16); boardG.add(s);
      sparks.push({ s, vx: Math.cos(a) * v, vy: Math.sin(a) * v + 1.2, life: 0, max: 0.45 + Math.random() * 0.3 });
    }
    heroHop = 1;
    return true;
  };

  /* ---------- frame loop ---------- */
  function tick(now) {
    requestAnimationFrame(tick);
    const dt = Math.min((now - last) / 1000, 0.05); last = now; if (dt <= 0) return; time += dt;
    if (needLayout) layout();
    for (let i = tweens.length - 1; i >= 0; i--) { const w = tweens[i]; w.t += dt; if (w.t < 0) continue; const k = Math.min(1, w.t / w.dur); w.fn(k); if (k >= 1) { tweens.splice(i, 1); w.done(); } }

    // room state from the page: a cancel puts the lights out, a win pops them, the stream runs hot
    const bc = document.body.classList, brd = grid.parentNode.classList;
    lightsOut += ((bc.contains('lights-out') ? 1 : 0) - lightsOut) * Math.min(1, dt * 5);
    if (bc.contains('room-pop')) pop = 1; pop = Math.max(0, pop - dt * 1.3);
    onair += ((bc.contains('onair') ? 1 : 0) - onair) * Math.min(1, dt * 3);
    heat += ((brd.contains('blazing') ? 1 : brd.contains('hot') ? 0.5 : 0) - heat) * Math.min(1, dt * 2);
    const lum = (1 - lightsOut * 0.55) * (1 + pop * 0.5), live = 1 + heat * 0.6 + onair * 0.5;
    scene.environmentIntensity = 0.42 * lum; key.intensity = 1.55 * lum;
    backdrop.material.color.setScalar(0.78 * (1 - lightsOut * 0.7) * (1 + pop * 0.35));
    const v = M._view || { halfW: 9, halfH: 5 }, bp = boardG.position;
    backdrop.position.x = Math.sin(time * 0.11) * v.halfW * 0.035; backdrop.position.y = Math.sin(time * 0.083 + 1) * v.halfH * 0.03;
    rimA.position.set(bp.x - 9 + Math.sin(time * 0.5) * 3, bp.y + 3 + Math.cos(time * 0.4) * 3, 4.5);
    rimB.position.set(bp.x + 9 + Math.cos(time * 0.45) * 3, bp.y - 1 + Math.sin(time * 0.38) * 3.5, 4.5);
    rimA.color.setHex(0xff3bd4).lerp(new T.Color(0xff2a3a), onair * 0.7);
    rimA.intensity = (30 + Math.sin(time * 1.3 * live) * 12) * lum * live; rimB.intensity = (30 + Math.cos(time * 1.1 * live) * 12) * lum * live;
    for (const b of beams) { b.m.rotation.z = Math.sin(time * 0.27 + b.ph) * 0.42; b.m.material.opacity = (0.11 + Math.sin(time * 0.6 + b.ph) * 0.05 + pop * 0.2 + heat * 0.08) * (1 - lightsOut); }
    for (const n of neons) { if (n.flick <= 0 && Math.random() < dt * 0.25) n.flick = 0.18; n.flick -= dt; const k = (n.flick > 0 ? 0.45 + Math.random() * 0.5 : 1) * (1.55 + Math.sin(time * 1.7 + n.ph) * 0.3) * (1 - lightsOut * 0.9) * (1 + pop); n.m.material.color.copy(n.base).multiplyScalar(k); }
    neons[1].m.rotation.z = Math.sin(time * 0.6) * 0.18;
    const p = dustGeo.attributes.position, hw = v.halfW * 1.5, hh = v.halfH * 1.3;
    for (let i = 0; i < p.count; i++) { let y = p.getY(i) + dustSpd[i] * dt; if (y > 1) y = -1; p.setY(i, y); }
    p.needsUpdate = true; dust.scale.set(hw, hh, 12); dust.position.z = -11; dust.position.x = Math.sin(time * 0.2) * 0.4; dust.material.opacity = 0.75 * (1 - lightsOut * 0.6);
    if (led) { led.visible = (time % 1.4) < 0.9; M._mat.strip.color.copy(hdr(onair > 0.5 ? 0xff4455 : 0xffe14a, (1.5 + Math.sin(time * 2.6 * live) * 0.35) * (1 - lightsOut * 0.7))); }

    // tiles
    let tg = null;
    for (const t of tiles) {
      const cl = cellEls[t.i].classList, isT = !t.open && cl.contains('target'), tense = isT && cl.contains('tense');
      t.tgt += ((isT ? 1 : 0) - t.tgt) * Math.min(1, dt * 14); t.fall += (t.fallTo - t.fall) * Math.min(1, dt * 10);
      if (isT) tg = t;
      const g = t.g, d = t.deal, dk = d < 1 ? easeOutBack(d) : 1, shake = (t.scr > time || tense) ? 1 : 0;
      let x = t.x, y = t.y, z = t.lift + t.tgt * 0.38 - t.fall * 0.22;
      if (t.kick) { const k = t.kick.k, e = k < 0.3 ? k / 0.3 : k < 0.65 ? 1 - (k - 0.3) / 0.35 * 1.3 : -0.3 * (1 - (k - 0.65) / 0.35); x += t.kick.x * e; y += t.kick.y * e; }
      if (!t.open && !t.busy && d >= 1) z += Math.sin(time * 1.2 + t.col * 0.7 + t.row * 0.5) * 0.012;
      g.position.set(x + (shake ? Math.sin(time * 70 + t.i) * 0.018 : 0), y, z);
      g.rotation.set(Math.sin(time * 1.2 + t.col * 0.7 + t.row * 0.5) * 0.035 * (t.open ? 0 : 1) + t.fall * t.fallRot, t.flip * PI + (1 - d) * -1.65, shake ? Math.sin(time * 55 + t.i) * 0.05 : t.fall * t.fallRot * 0.5);
      g.scale.setScalar(t.s * (0.55 + 0.45 * Math.min(1, dk)) * (1 + t.tgt * 0.08) * (1 - t.fall * 0.14));
      g.visible = d > 0.01;
      const s = t.sym;
      if (s) {
        const age = time - s.t0, k = clamp(age / (0.42 * speed())), fit = s.def.fit * t.s, cel = time < s.cel ? 1 : 0;
        s.hop = Math.max(0, s.hop - dt * 2.6); s.spin = Math.max(0, s.spin - dt * 1.7);
        const hop = s.hop > 0 ? Math.sin((1 - s.hop) * PI) * 0.3 : 0, bounce = cel ? Math.abs(Math.sin(age * 9)) * 0.14 : 0;
        const dead = s.key === 'cancel';
        s.o.position.set(t.x + (dead ? Math.sin(time * 38) * 0.012 : 0), t.y + s.def.lift * t.s + Math.sin(time * 2.1 + s.ph) * 0.04 + hop + bounce, 0.62 * t.s);
        s.o.scale.setScalar(fit * Math.max(0.001, easeOutBack(k)) * (1 + (cel ? Math.sin(age * 9) * 0.04 : 0)));
        s.o.rotation.set(0, (1 - easeOut(k)) * -2.4 + (dead ? Math.sin(time * 1.1 + s.ph) * 0.18 : Math.sin(time * 1.3 + s.ph) * 0.36) + easeInOut(1 - s.spin) * PI * 2 * (s.spin > 0 ? 1 : 0), Math.sin(time * 1.7 + s.ph) * 0.05 + (cel ? Math.sin(age * 18) * 0.1 : 0));
      }
    }
    targetRing.visible = !!tg; if (tg) { targetRing.position.set(tg.g.position.x, tg.g.position.y, tg.g.position.z + 0.2); targetRing.scale.setScalar(tg.s * (1 + Math.sin(time * 9) * 0.03)); }

    // sparks
    for (let i = sparks.length - 1; i >= 0; i--) { const q = sparks[i]; q.life += dt; q.vy -= 6 * dt; q.s.position.x += q.vx * dt; q.s.position.y += q.vy * dt; q.s.material.opacity = 1 - q.life / q.max; if (q.life >= q.max) { boardG.remove(q.s); q.s.material.dispose(); sparks.splice(i, 1); } }

    // mascots: the heart cheers on the left, the rocket hovers on the right, wherever the HUD leaves room
    heroHop = Math.max(0, heroHop - dt * 2.6);
    const wantHero = mascotFit.hero && templates.heart, wantFly = mascotFit.flyer && templates.rocket;
    if (wantHero && !hero) { hero = spawn('heart', true); scene.add(hero); } if (hero) hero.visible = !!wantHero;
    if (wantFly && !flyer) { flyer = spawn('rocket', true); scene.add(flyer); } if (flyer) flyer.visible = !!wantFly;
    if (hero && wantHero) { const f = mascotFit.hero, sq = 1 + Math.sin(time * 2.4) * 0.025, hop = heroHop > 0 ? Math.sin((1 - heroHop) * PI) * 0.18 * f.s : 0; hero.position.set(f.x, f.y + Math.sin(time * 2.4) * 0.03 * f.s + hop - lightsOut * 0.1 * f.s, 0.9); hero.scale.set(f.s / sq, f.s * sq, f.s / sq); hero.rotation.set(lightsOut * 0.25, 0.42 + Math.sin(time * 0.9) * 0.3, Math.sin(time * 1.2) * 0.05 - lightsOut * 0.2); }
    if (flyer && wantFly) { const f = mascotFit.flyer; flyer.position.set(f.x + Math.sin(time * 0.8) * 0.16 * f.s, f.y + Math.sin(time * 1.6) * 0.1 * f.s, 0.9); flyer.scale.setScalar(f.s * 0.85); flyer.rotation.set(0, -0.45 + Math.sin(time * 0.7) * 0.35, Math.sin(time * 0.8) * 0.12); }

    tickUI(dt);
    renderer.info.reset(); composer.render();
    // drop the quality one step if the device cannot keep up
    if (dt > 0.026) slow++; else slow = Math.max(0, slow - 2);
    if (slow > 110 && quality < 2) { quality++; slow = 0; needLayout = true; }
    M.stats = { tris: renderer.info.render.triangles, quality, fps: Math.round(1 / dt) };
  }
})();
