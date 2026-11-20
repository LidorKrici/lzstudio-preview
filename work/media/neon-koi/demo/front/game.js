/* Neon Koi: a midnight pachinko machine.
 * Black lacquer playfield with gold-leaf waves, brass pins, chrome balls, a lantern screen with three reels
 * in the middle, the KOI GATE under it and eleven pockets along the bottom. Two neon koi circle the screen.
 *
 * The round's result comes from the RGS book. This file only plays it back:
 *   drop   { n }                          ten silver balls are fired
 *   ball   { i, k, w, tot }               silver ball i ends in pocket k (0..10) or in the gate (k = -1)
 *   reels  { i, r: [a,b,c], fever }      the lantern reels after a gate ball
 *   fever  { n, m, src }                  KOI FEVER starts: n golden balls at multiplier m
 *   fball  { i, k, m, w, add, tot }       golden ball i; k = -1 is the gate (m goes up, +add balls)
 *   fend   { w, m, n }                    KOI FEVER summary
 *   final  { payout, capped }
 * Every ball on screen replays a flight recorded by real physics (board.js) that ended where the book says.
 * Which recorded flight is used, pin sparks and particles are decoration only. */
(() => {
  'use strict';
  const T = window.THREE, NB = window.NKBoard;
  let api;

  /* ---------- Numbers shared with the math (must match math/game.mjs) ---------- */
  const BASE_X = [80, 10, 2, 0.6, 0.2, 0, 0.2, 0.6, 2, 10, 80];           // × the silver ball (a tenth of the play)
  const FEVER_X = [140, 14, 3.5, 1.1, 0.4, 0.15, 0.4, 1.1, 3.5, 14, 140];  // × the play amount, before the multiplier
  const TIER = [4, 3, 2, 1, 1, 0, 1, 1, 2, 3, 4];

  /* ---------- Palette ---------- */
  const COL = {
    ink: '#07051a', lacquer: '#0d0828', gold: '#f2c35b', goldDeep: '#a8761f', pink: '#ff3d8b', koiOrange: '#ff8a2a',
    cyan: '#3ff2ff', violet: '#8b5bff', cream: '#fff4dc'
  };
  const TIER_COL = ['#6c6488', '#9fe8ff', '#7cf5c8', '#ffcf4a', '#ff3d8b'];

  /* ---------- Small helpers ---------- */
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const eOut = t => 1 - Math.pow(1 - t, 3);
  const eBack = t => { const c = 1.70158, c3 = c + 1; return 1 + c3 * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
  const rand = (a, b) => a + Math.random() * (b - a);
  const W2 = x => (x - 50) / 10, H2 = y => (70.5 - y) / 10;       // field units -> world units
  const fmtV = v => v >= 1000 ? Math.round(v).toLocaleString('en-US') : v >= 100 ? String(Math.round(v)) : v >= 10 ? String(+v.toFixed(1)) : String(+v.toFixed(2));

  /* ---------- State ---------- */
  let R, composer, bloom, scene, cam, stageEl, W = 2, H = 2, flat = false;
  let art = {}, pinMesh, pocketGlow = [], labelTex, labelCtx, screenTex, screenCtx, neon = [], koiMat, boardMat;
  let lib = null;
  const clock = { last: performance.now(), t: 0 };
  let rafOn = false, shake = 0, feverOn = false, feverM = 2, rate = 1.5;
  const balls = [], sparks = [], bursts = [];
  const $ = {};

  /* =====================================================================
   *  Playfield art (canvas): lacquer, gold-leaf waves, neon koi, pocket bays
   * ===================================================================== */
  const PX = 10.24;                         // canvas pixels per field unit (1024 px wide)
  function drawKoi(g, x, y, ang, s, col, glow) {
    g.save(); g.translate(x * PX, y * PX); g.rotate(ang); g.scale(s * PX, s * PX);
    g.lineJoin = 'round'; g.lineCap = 'round';
    const body = () => {
      g.beginPath();
      g.moveTo(0, -9);                                        // nose
      g.bezierCurveTo(3.6, -8.4, 4.4, -3, 3.2, 2.5);
      g.bezierCurveTo(2.4, 6.5, 1.1, 9.5, 0.5, 11.5);
      g.lineTo(-0.5, 11.5);
      g.bezierCurveTo(-1.1, 9.5, -2.4, 6.5, -3.2, 2.5);
      g.bezierCurveTo(-4.4, -3, -3.6, -8.4, 0, -9);
      g.closePath();
    };
    const tail = () => {
      g.beginPath();
      g.moveTo(0.4, 11); g.bezierCurveTo(3.5, 13, 5.2, 16.5, 3.4, 19.5); g.bezierCurveTo(2.2, 17, 1, 15.5, 0, 14.6);
      g.bezierCurveTo(-1, 15.5, -2.2, 17, -3.4, 19.5); g.bezierCurveTo(-5.2, 16.5, -3.5, 13, -0.4, 11); g.closePath();
    };
    const fins = () => {
      g.beginPath();
      g.moveTo(3, -2.5); g.bezierCurveTo(6.5, -2, 7.5, 1.5, 6.2, 3.4); g.bezierCurveTo(5, 1.6, 4, 0.6, 3, 0.4); g.closePath();
      g.moveTo(-3, -2.5); g.bezierCurveTo(-6.5, -2, -7.5, 1.5, -6.2, 3.4); g.bezierCurveTo(-5, 1.6, -4, 0.6, -3, 0.4); g.closePath();
    };
    if (glow) {
      g.strokeStyle = col; g.shadowColor = col; g.shadowBlur = 18 / s;
      g.lineWidth = 0.42; body(); g.stroke(); tail(); g.stroke(); fins(); g.stroke();
      g.lineWidth = 0.18; g.strokeStyle = '#fff'; g.shadowBlur = 0; body(); g.stroke();
    } else {
      // body fill: dark glass with the colour bleeding in from the edges, plus koi spots
      g.fillStyle = 'rgba(10,6,30,.65)'; body(); g.fill();
      g.save(); body(); g.clip();
      g.fillStyle = col; g.globalAlpha = 0.5;
      [[1.2, -5, 1.8], [-1.6, -1.5, 2.1], [1.4, 3, 1.5], [-0.6, 6.8, 1.1]].forEach(([a, b, r]) => { g.beginPath(); g.ellipse(a, b, r, r * 1.3, 0.4, 0, 6.3); g.fill(); });
      g.restore();
      g.globalAlpha = 0.35; g.fillStyle = col; tail(); g.fill(); fins(); g.fill(); g.globalAlpha = 1;
      g.fillStyle = COL.cream; g.beginPath(); g.arc(1.5, -6.2, 0.45, 0, 6.3); g.arc(-1.5, -6.2, 0.45, 0, 6.3); g.fill();
    }
    g.restore();
  }
  function seigaiha(g, x0, y0, x1, y1, r, alpha) {
    g.save(); g.beginPath(); g.rect(x0 * PX, y0 * PX, (x1 - x0) * PX, (y1 - y0) * PX); g.clip();
    g.strokeStyle = COL.gold; g.globalAlpha = alpha; g.lineWidth = 1.4;
    for (let row = 0, y = y0; y < y1 + r; row++, y += r * 0.5) {
      for (let x = x0 - r + (row % 2) * r; x < x1 + r; x += r * 2) {
        for (let k = 3; k >= 1; k--) {
          g.beginPath(); g.arc(x * PX, (y + r) * PX, k / 3 * r * PX * 0.98, Math.PI, 0); g.fillStyle = COL.lacquer;
          if (k === 3) g.fill(); g.stroke();
        }
      }
    }
    g.restore();
  }
  function drawField() {
    const w = 1024, h = Math.round(141 * PX);
    const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
    const gc = document.createElement('canvas'); gc.width = w; gc.height = h; const gg = gc.getContext('2d');
    gg.fillStyle = '#000'; gg.fillRect(0, 0, w, h);
    // lacquer: deep indigo, slightly lighter round the screen, with fine lacquer grain
    g.fillStyle = COL.lacquer; g.fillRect(0, 0, w, h);
    const rg = g.createRadialGradient(50 * PX, 60 * PX, 4 * PX, 50 * PX, 60 * PX, 80 * PX);
    rg.addColorStop(0, 'rgba(70,40,150,.55)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = rg; g.fillRect(0, 0, w, h);
    const img = g.getImageData(0, 0, w, h), d = img.data;
    for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * 9; d[i] += n; d[i + 1] += n; d[i + 2] += n * 1.4; }
    g.putImageData(img, 0, 0);
    // gold-leaf waves in the lower field, fading upward
    seigaiha(g, 4, 96, 96, 127, 5.2, 0.22);
    const fade = g.createLinearGradient(0, 94 * PX, 0, 108 * PX); fade.addColorStop(0, COL.lacquer); fade.addColorStop(1, 'rgba(13,8,40,0)');
    g.fillStyle = fade; g.fillRect(0, 94 * PX, w, 14 * PX);
    // gold leaf flakes
    for (let i = 0; i < 260; i++) {
      const x = rand(5, 95), y = rand(4, 125); if (Math.hypot(x - 50, y - 46) > 45) continue;
      g.fillStyle = `rgba(242,195,91,${rand(0.08, 0.4).toFixed(2)})`; g.save(); g.translate(x * PX, y * PX); g.rotate(rand(0, 6));
      g.fillRect(0, 0, rand(1, 4), rand(1, 3)); g.restore();
    }
    // rail line inside the arc, thin gold
    g.strokeStyle = 'rgba(242,195,91,.55)'; g.lineWidth = 2;
    g.beginPath(); g.arc(50 * PX, 46 * PX, 44.2 * PX, Math.PI, 0); g.lineTo(95.6 * PX, 127 * PX); g.moveTo(5.8 * PX, 46 * PX); g.lineTo(5.8 * PX, 127 * PX); g.stroke();
    // halo ring behind the lantern screen
    for (let k = 0; k < 3; k++) {
      g.strokeStyle = `rgba(242,195,91,${0.28 - k * 0.08})`; g.lineWidth = 2;
      g.beginPath(); g.arc(50 * PX, 58 * PX, (27 + k * 3.2) * PX, 0, Math.PI * 2); g.stroke();
    }
    // the two koi circling the screen (body art + neon on the glow map)
    const koi = [[18.5, 62, -0.25, 0.95, COL.pink], [81.5, 54, Math.PI + 0.25, 0.95, COL.koiOrange]];
    koi.forEach(k => drawKoi(g, ...k, false));
    koi.forEach(k => drawKoi(gg, ...k, true));
    // ripples under the koi
    [[18, 80], [82, 34]].forEach(([x, y]) => {
      for (let k = 1; k < 4; k++) { gg.strokeStyle = `rgba(63,242,255,${0.5 - k * 0.12})`; gg.lineWidth = 2; gg.beginPath(); gg.ellipse(x * PX, y * PX, k * 2.2 * PX, k * 0.8 * PX, 0, 0, 6.3); gg.stroke(); }
    });
    // pocket bays: a dark well under each pocket with a gold rim
    for (let k = 0; k < 11; k++) {
      const x = NB.WALL_L + k * NB.PW;
      g.fillStyle = '#05030f'; g.fillRect((x + 0.5) * PX, 127.5 * PX, (NB.PW - 1) * PX, 13 * PX);
      g.strokeStyle = 'rgba(242,195,91,.45)'; g.lineWidth = 1.5; g.strokeRect((x + 0.5) * PX, 127.5 * PX, (NB.PW - 1) * PX, 13 * PX);
    }
    // the gate's lotus: petals painted round the cup
    const GT = NB.GATE;
    g.save(); g.translate(GT.x * PX, (GT.y + 3) * PX);
    for (let i = 0; i < 7; i++) {
      const a = Math.PI + (i / 6) * Math.PI;
      g.save(); g.rotate(a + Math.PI / 2); g.fillStyle = 'rgba(255,61,139,.22)'; g.strokeStyle = 'rgba(242,195,91,.6)'; g.lineWidth = 1.5;
      g.beginPath(); g.ellipse(0, -9 * PX * 0.62, 2 * PX, 4.6 * PX, 0, 0, 6.3); g.fill(); g.stroke(); g.restore();
    }
    g.restore();
    gg.strokeStyle = 'rgba(255,61,139,.9)'; gg.lineWidth = 3; gg.shadowColor = COL.pink; gg.shadowBlur = 14;
    gg.beginPath(); gg.arc(GT.x * PX, (GT.y + 3) * PX, 8.6 * PX, Math.PI * 1.05, Math.PI * 1.95); gg.stroke();
    return { c, gc };
  }

  /* =====================================================================
   *  Pocket labels (canvas strip, redrawn when the values change)
   * ===================================================================== */
  function drawLabels() {
    const g = labelCtx, w = g.canvas.width, h = g.canvas.height;
    g.clearRect(0, 0, w, h);
    const pw = w / 11;
    for (let k = 0; k < 11; k++) {
      const v = feverOn ? FEVER_X[k] * feverM : BASE_X[k];
      const t = feverOn ? Math.min(4, TIER[k] + 1) : TIER[k];
      const txt = v === 0 ? '0' : fmtV(v) + '×';
      g.save(); g.translate((k + 0.5) * pw, h * 0.5);
      let size = h * 0.56; g.font = `800 ${size}px Unbounded, sans-serif`;
      while (g.measureText(txt).width > pw * 0.86 && size > 8) { size -= 2; g.font = `800 ${size}px Unbounded, sans-serif`; }
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = feverOn ? (t >= 3 ? '#ffe9a8' : COL.gold) : TIER_COL[t];
      g.lineJoin = 'round'; g.lineWidth = size * 0.22; g.strokeStyle = 'rgba(7,5,26,.92)'; g.strokeText(txt, 0, 0);
      g.shadowColor = g.fillStyle; g.shadowBlur = t >= 3 ? 14 : 6;
      g.fillText(txt, 0, 0); g.restore();
    }
    labelTex.needsUpdate = true;
  }

  /* =====================================================================
   *  The lantern screen: three reels (canvas texture)
   * ===================================================================== */
  const Screen = {
    reels: [0, 1, 2].map(i => ({ pos: i * 3 + 0.0, v: 0, tween: null })),
    banner: '', bannerT: 0, flash: 0, mode: 'idle', fever: false, last: [7, 3, 5], dirty: true,
    draw(t) {
      const g = screenCtx, w = g.canvas.width, h = g.canvas.height;
      g.fillStyle = '#080418'; g.fillRect(0, 0, w, h);
      // backdrop: slow neon water ripples
      g.save(); g.globalAlpha = 0.55;
      for (let i = 0; i < 6; i++) {
        const yy = h * (0.15 + i * 0.15) + Math.sin(t * 0.8 + i) * 6;
        g.strokeStyle = i % 2 ? 'rgba(63,242,255,.18)' : 'rgba(139,91,255,.18)'; g.lineWidth = 3;
        g.beginPath(); for (let x = 0; x <= w; x += 16) g.lineTo(x, yy + Math.sin(x * 0.02 + t * 1.6 + i) * 7); g.stroke();
      }
      g.restore();
      const fever = this.fever;
      // three reel windows
      const rw = w * 0.27, rh = h * 0.62, gap = w * 0.035, x0 = (w - rw * 3 - gap * 2) / 2, y0 = h * 0.24;
      for (let i = 0; i < 3; i++) {
        const r = this.reels[i], x = x0 + i * (rw + gap);
        g.save();
        g.fillStyle = fever ? '#2a1704' : '#120a30'; g.fillRect(x, y0, rw, rh);
        g.beginPath(); g.rect(x, y0, rw, rh); g.clip();
        const base = Math.floor(r.pos), frac = r.pos - base;
        for (let j = -1; j <= 1; j++) {
          const dgt = ((base + j) % 9 + 9) % 9 + 1;
          const cy = y0 + rh / 2 + (j - frac) * rh * 0.82;
          const seven = dgt === 7;
          g.font = `900 ${rh * 0.62}px Unbounded, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
          const col = seven ? '#ff3d8b' : fever ? COL.gold : COL.cream;
          g.shadowColor = seven ? COL.pink : fever ? COL.gold : COL.cyan; g.shadowBlur = Math.abs(r.v) > 4 ? 4 : 22;
          g.fillStyle = col; g.globalAlpha = Math.abs(r.v) > 4 ? 0.75 : 1;
          g.fillText(String(dgt), x + rw / 2, cy + rh * 0.04);
        }
        g.restore();
        g.strokeStyle = fever ? COL.gold : 'rgba(242,195,91,.8)'; g.lineWidth = 4; g.strokeRect(x, y0, rw, rh);
        // speed blur shading
        const sh = g.createLinearGradient(0, y0, 0, y0 + rh);
        sh.addColorStop(0, 'rgba(8,4,24,.85)'); sh.addColorStop(0.25, 'rgba(8,4,24,0)'); sh.addColorStop(0.75, 'rgba(8,4,24,0)'); sh.addColorStop(1, 'rgba(8,4,24,.85)');
        g.fillStyle = sh; g.fillRect(x, y0, rw, rh);
      }
      // top caption
      g.font = `700 ${h * 0.1}px "Space Grotesk", sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = fever ? COL.gold : 'rgba(255,244,220,.75)'; g.shadowBlur = 0;
      g.fillText(fever ? 'KOI FEVER  ×' + feverM : 'KOI GATE', w / 2, h * 0.12);
      // banner (REACH / FEVER)
      if (this.banner && t < this.bannerT) {
        const k = 1 - (this.bannerT - t);
        g.save(); g.translate(w / 2, h * 0.55); const s = 1 + Math.sin(t * 14) * 0.03; g.scale(s, s);
        g.font = `900 ${h * 0.26}px Unbounded, sans-serif`; g.lineWidth = 10; g.strokeStyle = '#1a0420';
        g.strokeText(this.banner, 0, 0);
        g.fillStyle = this.banner === 'REACH' ? COL.cyan : COL.gold; g.shadowColor = g.fillStyle; g.shadowBlur = 30;
        g.globalAlpha = clamp(k * 4, 0, 1); g.fillText(this.banner, 0, 0); g.restore();
      }
      if (this.flash > 0) { g.fillStyle = `rgba(255,236,190,${this.flash * 0.7})`; g.fillRect(0, 0, w, h); }
      screenTex.needsUpdate = true;
    },
    step(dt, t) {
      let moving = false;
      for (const r of this.reels) {
        if (r.tween) {
          const tw = r.tween; tw.t += dt / tw.d; const k = Math.min(1, tw.t);
          r.pos = lerp(tw.from, tw.to, eBack(k)); r.v = k < 0.85 ? 10 : 0;
          if (k >= 1) { r.tween = null; r.pos = tw.to; r.v = 0; if (tw.done) tw.done(); }
          moving = true;
        } else if (r.v) { r.pos += r.v * dt; moving = true; }
      }
      if (this.flash > 0) { this.flash = Math.max(0, this.flash - dt * 2.5); moving = true; }
      // the screen redraws every frame while anything moves, and a few times a second when idle (water ripples)
      if (moving || this.banner || (t - (this.lastDraw || 0)) > 0.08) { this.draw(t); this.lastDraw = t; }
    },
    stopAt(i, dgt, d) {
      const r = this.reels[i];
      return new Promise(res => {
        const cur = r.pos, need = ((dgt - 1) - (Math.floor(cur) % 9) + 9) % 9;
        const to = Math.floor(cur) + need + 9 * 2;
        r.tween = { from: cur, to, t: 0, d, done: res };
      });
    }
  };

  /* =====================================================================
   *  Scene
   * ===================================================================== */
  const MAT = {}, GEO = {};
  function radialTex(inner, outer, size = 128) {
    const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
    const rg = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    rg.addColorStop(0, inner); rg.addColorStop(0.35, outer); rg.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = rg; g.fillRect(0, 0, size, size);
    const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; return t;
  }
  function buildScene() {
    scene = new T.Scene();
    scene.background = null;
    const pm = new T.PMREMGenerator(R);
    const envTex = pm.fromScene(new T.RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    scene.environmentIntensity = 0.7;
    // three.js r163+ applies a material's envMapIntensity only when the material has its own envMap (otherwise the
    // scene-wide 0.7 wins, which turned the black lacquer grey-teal). Materials with their own strength get envTex directly.
    const env = o => Object.assign(o, { envMap: envTex });
    cam = new T.PerspectiveCamera(30, 1, 0.1, 200);

    const key = new T.DirectionalLight(0xfff1dc, 1.6); key.position.set(-3, 9, 12); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024); const sc = key.shadow.camera; sc.left = -6; sc.right = 6; sc.top = 8; sc.bottom = -8; sc.near = 1; sc.far = 40;
    key.shadow.bias = -0.0004; key.shadow.radius = 3; scene.add(key);
    const pinkL = new T.PointLight(0xff3d8b, 6, 14, 1.6); pinkL.position.set(-6, 2, 3); scene.add(pinkL);
    const cyanL = new T.PointLight(0x3ff2ff, 5, 14, 1.6); cyanL.position.set(6, -2, 3); scene.add(cyanL);
    art.lights = { key, pinkL, cyanL };
    scene.add(new T.AmbientLight(0x5a4a9a, 0.35));

    // playfield
    const f = drawField();
    const map = new T.CanvasTexture(f.c); map.colorSpace = T.SRGBColorSpace; map.anisotropy = 8;
    const glow = new T.CanvasTexture(f.gc); glow.colorSpace = T.SRGBColorSpace;
    // the playfield keeps the scene-wide light: at its own 0.12 it went dull and flat (compared side by side)
    boardMat = new T.MeshStandardMaterial({ map, emissiveMap: glow, emissive: 0xffffff, emissiveIntensity: 1.4, roughness: 0.55, metalness: 0.05 });
    const board = new T.Mesh(new T.PlaneGeometry(10, 14.1), boardMat); board.receiveShadow = true; scene.add(board);

    // cabinet: black lacquer body with a gold lip round the window
    const outer = new T.Shape(); const OW = 6.2, OH = 8.25, OR = 0.6;
    outer.moveTo(-OW + OR, -OH); outer.lineTo(OW - OR, -OH); outer.quadraticCurveTo(OW, -OH, OW, -OH + OR); outer.lineTo(OW, OH - OR); outer.quadraticCurveTo(OW, OH, OW - OR, OH);
    outer.lineTo(-OW + OR, OH); outer.quadraticCurveTo(-OW, OH, -OW, OH - OR); outer.lineTo(-OW, -OH + OR); outer.quadraticCurveTo(-OW, -OH, -OW + OR, -OH);
    const hole = new T.Path(); hole.moveTo(-5.05, -7.1); hole.lineTo(5.05, -7.1); hole.lineTo(5.05, H2(46)); hole.absarc(0, H2(46), 5.05, 0, Math.PI, false); hole.lineTo(-5.05, -7.1);
    outer.holes.push(hole);
    MAT.lacquer = new T.MeshStandardMaterial(env({ color: 0x07040f, roughness: 0.38, metalness: 0.2, envMapIntensity: 0.35 }));
    MAT.gold = new T.MeshStandardMaterial({ color: 0xe9b850, roughness: 0.24, metalness: 1 });
    MAT.brass = new T.MeshStandardMaterial({ color: 0xd8a24a, roughness: 0.3, metalness: 1 });
    MAT.chrome = new T.MeshStandardMaterial(env({ color: 0xe8ebf2, roughness: 0.12, metalness: 1, envMapIntensity: 0.8 }));
    MAT.rail = new T.MeshStandardMaterial(env({ color: 0x9aa0b4, roughness: 0.32, metalness: 1, envMapIntensity: 0.35 }));
    MAT.goldBall = new T.MeshStandardMaterial({ color: 0xffc54a, roughness: 0.1, metalness: 1, emissive: 0x3a2200, emissiveIntensity: 0.6 });
    const cab = new T.Mesh(new T.ExtrudeGeometry(outer, { depth: 0.55, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 2, curveSegments: 48 }), MAT.lacquer);
    cab.position.z = -0.05; cab.receiveShadow = true; scene.add(cab);
    // gold lip and the steel rail (a chrome tube following the window)
    const railPts = [];
    railPts.push(new T.Vector3(W2(NB.WALL_R) + 0.04, -7.05, 0.18));
    for (let i = 0; i <= 64; i++) { const a = (i / 64) * Math.PI; railPts.push(new T.Vector3(Math.cos(a) * (NB.ARC.r / 10 + 0.04), H2(46) + Math.sin(a) * (NB.ARC.r / 10 + 0.04), 0.18)); }
    railPts.push(new T.Vector3(W2(NB.WALL_L) - 0.04, -7.05, 0.18));
    const railCurve = new T.CatmullRomCurve3(railPts, false, 'centripetal');
    const rail = new T.Mesh(new T.TubeGeometry(railCurve, 220, 0.075, 10, false), MAT.rail); rail.castShadow = true; scene.add(rail);
    // neon tubes round the cabinet: cyan arc, pink sides
    const neonArc = [], neonL = [], neonR = [];
    for (let i = 0; i <= 64; i++) { const a = (i / 64) * Math.PI; neonArc.push(new T.Vector3(Math.cos(a) * 5.62, H2(46) + Math.sin(a) * 5.62, 0.62)); }
    for (let i = 0; i <= 8; i++) { const y = lerp(H2(48), -7.55, i / 8); neonL.push(new T.Vector3(-5.62, y, 0.62)); neonR.push(new T.Vector3(5.62, y, 0.62)); }
    const mkNeon = (pts, col) => {
      const m = new T.MeshBasicMaterial({ color: col, toneMapped: false });
      const o = new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts), pts.length * 3, 0.055, 8, false), m); scene.add(o);
      neon.push({ m, base: new T.Color(col) }); return o;
    };
    mkNeon(neonArc, 0x3ff2ff); mkNeon(neonL, 0xff3d8b); mkNeon(neonR, 0xff3d8b);
    const bottomBar = new T.Mesh(new T.BoxGeometry(11.2, 0.12, 0.12), MAT.gold); bottomBar.position.set(0, -7.25, 0.5); scene.add(bottomBar);

    // pins (instanced brass nails standing out of the board)
    GEO.pin = new T.CylinderGeometry(0.072, 0.072, 0.34, 12); GEO.pin.rotateX(Math.PI / 2); GEO.pin.translate(0, 0, 0.17);
    const pins = NB.pins.filter(p => !p.tip);
    pinMesh = new T.InstancedMesh(GEO.pin, MAT.brass, NB.pins.length);
    const m4 = new T.Matrix4();
    NB.pins.forEach((p, i) => {
      const s = p.post ? 1.4 : p.tip ? 0.8 : 1;
      m4.makeScale(s, s, p.post ? 1.3 : 1); m4.setPosition(W2(p.x), H2(p.y), 0); pinMesh.setMatrixAt(i, m4);
    });
    pinMesh.castShadow = true; scene.add(pinMesh);
    void pins;
    // pocket dividers and pocket floors
    for (let i = 0; i <= 11; i++) {
      const x = W2(NB.WALL_L + i * NB.PW);
      const d = new T.Mesh(new T.BoxGeometry(i === 0 || i === 11 ? 0.06 : 0.07, 1.4, 0.34), MAT.brass); d.position.set(x, H2(134), 0.17); d.castShadow = true; scene.add(d);
    }
    const glowTex = radialTex('rgba(255,255,255,1)', 'rgba(255,255,255,.35)');
    for (let k = 0; k < 11; k++) {
      const m = new T.MeshBasicMaterial({ map: glowTex, color: TIER_COL[TIER[k]], transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false });
      const p = new T.Mesh(new T.PlaneGeometry(NB.PW / 10 * 1.6, 1.9), m); p.position.set(W2(NB.pocketX(k)), H2(133), 0.05); scene.add(p);
      pocketGlow.push({ m, v: 0, breathe: rand(0, 6) });
    }
    // value labels across the pocket row
    const lc = document.createElement('canvas'); lc.width = 2048; lc.height = 200; labelCtx = lc.getContext('2d');
    labelTex = new T.CanvasTexture(lc); labelTex.colorSpace = T.SRGBColorSpace; labelTex.anisotropy = 8;
    const labels = new T.Mesh(new T.PlaneGeometry(9.2, 9.2 * 200 / 2048), new T.MeshBasicMaterial({ map: labelTex, transparent: true, toneMapped: false, depthWrite: false }));
    labels.position.set(0, H2(137.4), 0.36); scene.add(labels);

    // the lantern screen: a dome-topped gold frame with the reel display inside
    const S = NB.SCREEN;
    const lantern = new T.Shape();
    lantern.moveTo(W2(S.x0) - 0.25, H2(S.bot) - 0.25); lantern.lineTo(W2(S.x1) + 0.25, H2(S.bot) - 0.25); lantern.lineTo(W2(S.x1) + 0.25, H2(S.mid));
    lantern.absarc(0, H2(S.mid), S.r / 10 + 0.25, 0, Math.PI, false); lantern.lineTo(W2(S.x0) - 0.25, H2(S.bot) - 0.25);
    const win = new T.Path();
    win.moveTo(W2(S.x0) + 0.18, H2(S.bot) + 0.18); win.lineTo(W2(S.x1) - 0.18, H2(S.bot) + 0.18); win.lineTo(W2(S.x1) - 0.18, H2(S.mid));
    win.absarc(0, H2(S.mid), S.r / 10 - 0.18, 0, Math.PI, false); win.lineTo(W2(S.x0) + 0.18, H2(S.bot) + 0.18);
    lantern.holes.push(win);
    const frame = new T.Mesh(new T.ExtrudeGeometry(lantern, { depth: 0.3, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2, curveSegments: 64 }), MAT.gold);
    frame.castShadow = true; scene.add(frame);
    const scv = document.createElement('canvas'); scv.width = 1024; scv.height = 760; screenCtx = scv.getContext('2d');
    screenTex = new T.CanvasTexture(scv); screenTex.colorSpace = T.SRGBColorSpace;
    // the display fills the window shape (UVs mapped from the shape's bounding box)
    const disp = new T.ShapeGeometry(new T.Shape(win.getPoints(64)), 64);
    const bb = { x0: W2(S.x0) + 0.18, x1: W2(S.x1) - 0.18, y0: H2(S.bot) + 0.18, y1: H2(S.mid) + S.r / 10 - 0.18 };
    const uv = disp.attributes.uv, pos = disp.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) - bb.x0) / (bb.x1 - bb.x0), (pos.getY(i) - bb.y0) / (bb.y1 - bb.y0));
    const screenMesh = new T.Mesh(disp, new T.MeshBasicMaterial({ map: screenTex, toneMapped: false })); screenMesh.position.z = 0.08; scene.add(screenMesh);
    // the reel display sits in the lower box of the lantern; the dome above it shows the water and the caption
    // the KOI GATE: a gold cup with a pink neon lip
    const GT = NB.GATE, cupW = (GT.hw + 0.9) / 10, cupD = GT.depth / 10;
    const cup = new T.Shape(); cup.moveTo(-cupW, 0); cup.lineTo(-cupW, -cupD); cup.lineTo(cupW, -cupD); cup.lineTo(cupW, 0); cup.lineTo(cupW - 0.09, 0);
    cup.lineTo(cupW - 0.09, -cupD + 0.09); cup.lineTo(-cupW + 0.09, -cupD + 0.09); cup.lineTo(-cupW + 0.09, 0); cup.lineTo(-cupW, 0);
    const cupMesh = new T.Mesh(new T.ExtrudeGeometry(cup, { depth: 0.34, bevelEnabled: false }), MAT.gold); cupMesh.position.set(0, H2(GT.y), 0); cupMesh.castShadow = true; scene.add(cupMesh);
    const lipM = new T.MeshBasicMaterial({ color: 0xff3d8b, toneMapped: false });
    const lip = new T.Mesh(new T.BoxGeometry(cupW * 2 + 0.1, 0.05, 0.05), lipM); lip.position.set(0, H2(GT.y) + 0.02, 0.36); scene.add(lip);
    art.gateLip = lipM;
    const gateGlowM = new T.MeshBasicMaterial({ map: glowTex, color: 0xff3d8b, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false });
    const gateGlow = new T.Mesh(new T.PlaneGeometry(3.2, 3.2), gateGlowM); gateGlow.position.set(0, H2(GT.y + 3), 0.4); scene.add(gateGlow);
    art.gateGlow = { m: gateGlowM, v: 0 };
    // launcher at the top right of the rail
    const th = 0.16, lx = Math.cos(th) * 4.62, ly = H2(46) + Math.sin(th) * 4.62;
    const launcher = new T.Mesh(new T.CylinderGeometry(0.22, 0.26, 0.5, 20), MAT.chrome); launcher.rotation.z = th; launcher.position.set(lx + 0.18, ly - 0.32, 0.2); scene.add(launcher);
    const flashM = new T.MeshBasicMaterial({ map: glowTex, color: 0x9ff8ff, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false });
    const flash = new T.Mesh(new T.PlaneGeometry(1.4, 1.4), flashM); flash.position.set(lx, ly, 0.4); scene.add(flash);
    art.launchFlash = { m: flashM, v: 0 };
    // glass sheen
    const sheenC = document.createElement('canvas'); sheenC.width = 256; sheenC.height = 256; const sg = sheenC.getContext('2d');
    const lg = sg.createLinearGradient(0, 0, 256, 256); lg.addColorStop(0.35, 'rgba(255,255,255,0)'); lg.addColorStop(0.5, 'rgba(255,255,255,.022)'); lg.addColorStop(0.56, 'rgba(255,255,255,0)'); lg.addColorStop(0.62, 'rgba(255,255,255,.012)'); lg.addColorStop(0.7, 'rgba(255,255,255,0)');
    sg.fillStyle = lg; sg.fillRect(0, 0, 256, 256);
    const sheenT = new T.CanvasTexture(sheenC);
    const sheen = new T.Mesh(new T.PlaneGeometry(11, 15), new T.MeshBasicMaterial({ map: sheenT, transparent: true, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false }));
    sheen.position.z = 0.75; sheen.visible = false; art.sheen = sheen;     // glass sheen: off (it greyed the field)

    // balls, sparks
    GEO.ball = new T.SphereGeometry(NB.BR / 10, 28, 20);
    GEO.spark = new T.PlaneGeometry(0.42, 0.42);
    MAT.spark = new T.MeshBasicMaterial({ map: glowTex, color: 0xffe2a0, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false });
    for (let i = 0; i < 48; i++) { const s = new T.Mesh(GEO.spark, MAT.spark.clone()); s.visible = false; scene.add(s); sparks.push({ o: s, t: 1 }); }
    GEO.dot = new T.PlaneGeometry(0.14, 0.14);
    art.glowTex = glowTex;
  }

  /* ---------- Sparks and bursts ---------- */
  function spark(x, y, col, size = 1) {
    const s = sparks.find(s => s.t >= 1) || sparks[0];
    s.t = 0; s.o.visible = true; s.o.position.set(W2(x), H2(y), 0.42); s.size = size; s.o.material.color.set(col);
  }
  function burst(x, y, col, n = 18, power = 1) {
    for (let i = 0; i < n; i++) {
      const m = new T.Mesh(GEO.dot, new T.MeshBasicMaterial({ map: art.glowTex, color: col, transparent: true, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false }));
      m.position.set(W2(x), H2(y), 0.45); scene.add(m);
      const a = rand(0, Math.PI * 2), v = rand(1.2, 3.6) * power;
      bursts.push({ o: m, vx: Math.cos(a) * v, vy: Math.sin(a) * v + 1.5 * power, t: 0, life: rand(0.5, 1.1) });
    }
  }
  function stepFx(dt) {
    for (const s of sparks) if (s.t < 1) {
      s.t = Math.min(1, s.t + dt * 4); const k = s.t;
      s.o.material.opacity = (1 - k) * 0.95; const sc = (0.6 + k * 0.9) * s.size; s.o.scale.set(sc, sc, 1);
      if (s.t >= 1) s.o.visible = false;
    }
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i]; b.t += dt; b.vy -= 6 * dt;
      b.o.position.x += b.vx * dt; b.o.position.y += b.vy * dt;
      const k = b.t / b.life; b.o.material.opacity = Math.max(0, 1 - k); const sc = 1 + k; b.o.scale.set(sc, sc, 1);
      if (k >= 1) { scene.remove(b.o); b.o.material.dispose(); bursts.splice(i, 1); }
    }
    for (const p of pocketGlow) {
      p.v = Math.max(0, p.v - dt * 1.4);
      p.m.opacity = Math.min(1, p.v + (feverOn ? 0.12 : 0.06) + Math.sin(clock.t * 1.4 + p.breathe) * 0.03);
    }
    art.gateGlow.v = Math.max(0, art.gateGlow.v - dt * 1.2); art.gateGlow.m.opacity = art.gateGlow.v;
    art.launchFlash.v = Math.max(0, art.launchFlash.v - dt * 5); art.launchFlash.m.opacity = art.launchFlash.v;
  }

  /* =====================================================================
   *  Balls: playback of recorded flights
   * ===================================================================== */
  function pickFlight(k) {
    const key = k === -1 ? 'g' : k;
    let list = lib[key];
    if (!list || !list.length) {            // never expected; fall back to the nearest pocket that has flights
      for (let d = 1; d < 11 && (!list || !list.length); d++) list = lib[clamp(k + d, 0, 10)] && lib[clamp(k + d, 0, 10)].length ? lib[clamp(k + d, 0, 10)] : lib[clamp(k - d, 0, 10)];
    }
    return list[Math.floor(Math.random() * list.length)];
  }
  function launch(k, gold, onLand, onGate) {
    const f = pickFlight(k);
    const mesh = new T.Mesh(GEO.ball, gold ? MAT.goldBall : MAT.chrome); mesh.castShadow = true;
    mesh.position.set(W2(f.xy[0]), H2(f.xy[1]), NB.BR / 10 + 0.02); scene.add(mesh);
    const b = { f, mesh, t: 0, hi: 0, done: false, sink: 0, k, gold, onLand, onGate, passed: false, sinking: false };
    balls.push(b);
    art.launchFlash.v = 1;
    SFX.launch(gold);
    kick();
    return b;
  }
  function stepBalls(dt) {
    for (let i = balls.length - 1; i >= 0; i--) {
      const b = balls[i], xy = b.f.xy, n = xy.length / 2;
      if (!b.sinking) {
        b.t += dt * 60 * rate;
        while (b.hi < b.f.hits.length && b.f.hits[b.hi] <= b.t) {
          const p = NB.pins[b.f.hits[b.hi + 1]];
          spark(p.x, p.y, b.gold ? '#ffd27a' : '#bdf6ff', 0.8);
          SFX.pin(p.y);
          b.hi += 2;
        }
        const fi = Math.min(n - 1, b.t), i0 = Math.floor(fi), i1 = Math.min(n - 1, i0 + 1), fr = fi - i0;
        const x = lerp(xy[i0 * 2], xy[i1 * 2], fr), y = lerp(xy[i0 * 2 + 1], xy[i1 * 2 + 1], fr);
        b.mesh.position.x = W2(x); b.mesh.position.y = H2(y);
        b.mesh.rotation.z -= (xy[i1 * 2] - xy[i0 * 2]) * 0.6; b.mesh.rotation.x += 0.08;
        if (!b.passed && y > NB.GATE.y + 4) b.passed = true;
        if (b.t >= n - 1) {
          b.sinking = true; b.passed = true;
          if (b.k === -1) { b.onGate && b.onGate(b); } else { b.onLand && b.onLand(b); }
        }
      } else {
        b.sink += dt * 3.2 * Math.max(1, rate / 1.5);
        const k = Math.min(1, b.sink);
        b.mesh.scale.setScalar(1 - eOut(k) * 0.9); b.mesh.position.z = NB.BR / 10 + 0.02 - k * 0.12;
        if (b.k !== -1) b.mesh.position.y -= dt * 0.4;
        if (k >= 1) { scene.remove(b.mesh); b.done = true; balls.splice(i, 1); }
      }
    }
  }

  /* =====================================================================
   *  Sound: brass pins, chrome launches, bell pockets, lantern reels
   * ===================================================================== */
  let lastTick = 0;
  const SFX = {
    pin(y) {
      const now = performance.now(); if (now - lastTick < 28 || !api.sound.on) return; lastTick = now;
      api.sound.tone({ f: 2600 + (141 - y) * 6 + rand(-120, 120), d: 0.04, type: 'sine', g: 0.03, a: 0.002 });
    },
    launch(gold) {
      api.sound.noise({ d: 0.16, g: 0.05, f: 2800, to: 700, q: 0.8 });
      api.sound.tone({ f: gold ? 360 : 220, to: gold ? 720 : 440, d: 0.1, type: 'triangle', g: 0.05 });
    },
    land(tier, gold) {
      if (tier <= 0) { api.sound.noise({ d: 0.12, g: 0.05, f: 340, q: 1.2 }); return; }
      const base = gold ? 784 : 659;
      const runs = [[base], [base, base * 1.26], [base, base * 1.26, base * 1.5], [base, base * 1.26, base * 1.5, base * 2, base * 2.52]];
      api.sound.notes(runs[Math.min(3, tier - 1)], { step: 0.06, d: 0.28 + tier * 0.05, type: gold ? 'sine' : 'triangle', g: 0.07 + tier * 0.015 });
      if (tier >= 4) api.sound.noise({ d: 0.6, g: 0.05, f: 6000, to: 9000, q: 0.6, type: 'highpass' });
    },
    gate() {
      api.sound.tone({ f: 180, to: 90, d: 0.18, type: 'square', g: 0.05 });
      api.sound.notes([1046, 1318, 1568], { step: 0.07, d: 0.3, type: 'triangle', g: 0.08 });
    },
    reelTick() { api.sound.tone({ f: 1250 + rand(-60, 60), d: 0.025, type: 'square', g: 0.018 }); },
    reelStop(i) { api.sound.tone({ f: 420 + i * 90, d: 0.09, type: 'triangle', g: 0.1 }); api.sound.noise({ d: 0.05, g: 0.04, f: 1800 }); },
    reach() { api.sound.tone({ f: 300, to: 1200, d: 1.1, type: 'sawtooth', g: 0.035 }); api.sound.tone({ f: 302, to: 1210, d: 1.1, type: 'triangle', g: 0.05 }); },
    fever() {
      api.sound.notes([523, 659, 784, 1046, 1318, 1568], { step: 0.085, d: 0.5, type: 'triangle', g: 0.12 });
      api.sound.noise({ d: 1.2, g: 0.06, f: 600, to: 7000, q: 0.5 });
      api.sound.tone({ f: 65, to: 130, d: 0.9, type: 'sine', g: 0.2 });
    },
    mult(m) { api.sound.tone({ f: 500 + m * 60, to: 1000 + m * 120, d: 0.24, type: 'triangle', g: 0.11 }); api.sound.notes([1568, 2093], { step: 0.05, d: 0.2, g: 0.05 }); },
    summary() { api.sound.notes([784, 988, 1175, 1568], { step: 0.11, d: 0.6, type: 'sine', g: 0.1 }); }
  };

  /* =====================================================================
   *  HUD (DOM over the canvas)
   * ===================================================================== */
  function buildHud(stage) {
    const h = api.h;
    $.hud = h('div', { class: 'nk-hud' });
    $.win = h('div', { class: 'nk-win' }, h('span', { text: 'WIN' }), $.winAmt = h('b', { text: api.money(0) }));
    $.balls = h('div', { class: 'nk-balls' }, $.ballsLbl = h('span', { text: 'BALLS' }), $.pips = h('div', { class: 'nk-pips' }));
    $.fever = h('div', { class: 'nk-fever', hidden: true }, h('span', { text: 'KOI FEVER' }), $.mult = h('b', { text: '×2' }), $.fwin = h('i', { text: '' }));
    $.reel = h('div', { class: 'nk-reelpop', hidden: true });
    $.card = h('div', { class: 'nk-card', hidden: true }, $.cardT = h('strong'), $.cardS = h('span'));
    $.hud.append($.win, $.balls, $.fever, $.reel, $.card);
    stage.append($.hud);
  }
  function setPips(left, total, gold) {
    $.pips.innerHTML = '';
    const n = Math.min(total, 40);
    for (let i = 0; i < n; i++) $.pips.append(api.h('i', { class: (i < left ? 'on' : '') + (gold ? ' gold' : '') }));
    $.ballsLbl.textContent = gold ? 'GOLDEN BALLS' : 'BALLS';
  }
  function bump(el) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  async function card(title, sub, ms, ctx, cls = '') {
    $.cardT.textContent = title; $.cardS.textContent = sub; $.card.className = 'nk-card show ' + cls; $.card.hidden = false;
    await ctx.sleep(ms);
    $.card.classList.remove('show'); await ctx.sleep(260); $.card.hidden = true;
  }

  /* =====================================================================
   *  Render loop
   * ===================================================================== */
  function advance() {
    const now = performance.now(), dt = Math.min(0.05, (now - clock.last) / 1000); clock.last = now; clock.t += dt;
    stepBalls(dt); stepFx(dt); Screen.step(dt, clock.t);
    return dt;
  }
  function frame() {
    rafOn = false;
    if (document.hidden || flat) return;
    const dt = advance();
    const t = clock.t;
    // idle life: neon breathes, the koi glow, the glass sheen drifts
    const fe = feverOn ? 1 : 0;
    neon.forEach((n, i) => { const k = 0.75 + 0.25 * Math.sin(t * (fe ? 6 : 1.6) + i * 1.7); n.m.color.copy(feverOn ? GOLD_C : n.base).multiplyScalar(k * (fe ? 2.2 : 1.8)); });
    boardMat.emissiveIntensity = (feverOn ? 1.9 : 1.25) + Math.sin(t * 1.3) * 0.25;
    art.sheen.position.x = Math.sin(t * 0.13) * 1.2;
    art.gateLip.color.setHSL(feverOn ? 0.12 : 0.93, 1, 0.55 + 0.1 * Math.sin(t * 5));
    // camera with a little shake on big moments
    shake = Math.max(0, shake - dt * 2.2);
    const sx = shake && !api.reduced ? (Math.random() - 0.5) * shake * 0.12 : 0, sy = shake && !api.reduced ? (Math.random() - 0.5) * shake * 0.12 : 0;
    cam.position.set(camBase.x + sx, camBase.y + sy, camBase.z); cam.lookAt(camBase.lx + sx * 0.3, camBase.ly + sy * 0.3, 0);
    composer.render();
    kick();
  }
  const GOLD_C = new T.Color(0xffc14a);
  function kick() { if (!rafOn && !document.hidden && !flat) { rafOn = true; requestAnimationFrame(frame); } }
  document.addEventListener('visibilitychange', () => { clock.last = performance.now(); kick(); });

  /* ---------- Resize: fit the cabinet into the stage ---------- */
  const camBase = { x: 0, y: 0, z: 30, lx: 0, ly: 0 };
  function resize() {
    const r = stageEl.getBoundingClientRect(); W = Math.max(2, Math.floor(r.width)); H = Math.max(2, Math.floor(r.height));
    if (!flat) {
      R.setSize(W, H, false); composer.setSize(W, H); bloom.resolution.set(W / 2, H / 2);
      cam.aspect = W / H; cam.updateProjectionMatrix();
    }
    // The cabinet is 12.4 x 16.5 world units. Leave room for the HUD: at the sides when the stage is wide,
    // above when it is tall and narrow.
    const aspect = W / H, wide = aspect > 1.05;
    const boxW = 12.6, boxH = 16.7;
    const vfov = T.MathUtils.degToRad(30), tan = Math.tan(vfov / 2);
    const needH = Math.max(boxH, (boxW / aspect)) / 2 / tan;
    const top = wide ? 0 : 0.0;
    camBase.z = needH * 1.07; camBase.y = top; camBase.ly = top; camBase.x = 0; camBase.lx = 0;
    // where the board sits on screen, for the HUD
    const px = H / (2 * tan * camBase.z);        // pixels per world unit at the board plane
    const bw = 12.4 * px, bh = 16.5 * px;
    const side = (W - bw) / 2;
    $.hud.style.setProperty('--bw', bw.toFixed(0) + 'px');
    $.hud.style.setProperty('--bh', bh.toFixed(0) + 'px');
    $.hud.style.setProperty('--side', side.toFixed(0) + 'px');
    $.hud.style.setProperty('--u', (Math.min(W, H * 1.4) / 100).toFixed(3) + 'px');
    $.hud.dataset.layout = side > 150 ? 'side' : 'over';
    $.hud.dataset.size = W < 330 || H < 220 ? 'xs' : W < 560 ? 's' : 'l';
    kick();
  }

  /* =====================================================================
   *  Round playback
   * ===================================================================== */
  let C = null;
  async function until(cond, ctx) { while (!cond()) { if (document.hidden || flat) advance(); await ctx.sleep(30); } }
  function reset() {
    for (const b of balls) scene && scene.remove(b.mesh); balls.length = 0;
    setFever(false, 2);
    $.fever.hidden = true; $.card.hidden = true; $.reel.hidden = true;
    $.win.classList.remove('lit'); $.winAmt.textContent = api.money(0);
    setPips(10, 10, false);
    Screen.banner = ''; Screen.flash = 0; Screen.reels.forEach(r => { r.v = 0; r.tween = null; });
  }
  function setFever(on, m) {
    const changed = on !== feverOn || m !== feverM;
    feverOn = on; feverM = m; Screen.fever = on;
    if (pocketGlow.length) pocketGlow.forEach((p, k) => p.m.color.set(on ? (TIER[k] >= 2 ? '#ffd25a' : '#ffb03a') : TIER_COL[TIER[k]]));
    if (labelCtx && changed) drawLabels();
    $.hud.classList.toggle('fever', on);
    stageEl.classList.toggle('nk-on-fever', on);
    if (art.lights) { art.lights.pinkL.color.set(on ? 0xffb02a : 0xff3d8b); art.lights.cyanL.color.set(on ? 0xffe08a : 0x3ff2ff); }
    if (bloom) bloom.strength = on ? 1.0 : 0.8;
  }
  function showWin(ctx, total) { ctx.setWin(ctx.units(total), true); $.winAmt.textContent = ctx.winMoney(ctx.units(total)); bump($.win); }

  // The reel show after a gate ball. Runs while the other balls keep falling.
  async function spinReels(r, fever, ctx) {
    const sp = ctx.speed();
    Screen.banner = ''; Screen.reels.forEach(x => { x.tween = null; x.v = 26; });
    let ticking = true;
    (async () => { while (ticking) { SFX.reelTick(); await ctx.sleep(70); } })();
    await ctx.sleep(520);
    await Screen.stopAt(0, r[0], 0.42 * sp); SFX.reelStop(0);
    await ctx.sleep(160);
    await Screen.stopAt(1, r[1], 0.42 * sp); SFX.reelStop(1);
    const reach = r[0] === r[1];
    if (reach) {
      Screen.banner = 'REACH'; Screen.bannerT = clock.t + 1.6 * sp + 0.2; SFX.reach();
      $.reel.textContent = 'REACH'; $.reel.className = 'nk-reelpop reach'; $.reel.hidden = false;
      Screen.reels[2].v = 9;
      await ctx.sleep(1250);
      await Screen.stopAt(2, r[2], 0.8 * sp);
    } else {
      await ctx.sleep(120);
      await Screen.stopAt(2, r[2], 0.42 * sp);
    }
    ticking = false; SFX.reelStop(2);
    Screen.last = r;
    if (fever) {
      Screen.banner = 'FEVER'; Screen.bannerT = clock.t + 2.2 * sp + 0.2; Screen.flash = 1; shake = 1;
      $.reel.textContent = r.join(' '); $.reel.className = 'nk-reelpop win'; $.reel.hidden = false;
      SFX.fever(); burst(50, 58, '#ffd25a', 40, 1.4);
      await ctx.sleep(900);
    } else {
      Screen.banner = ''; $.reel.hidden = true;
      await ctx.sleep(260);
    }
    $.reel.hidden = true;
  }

  async function play(events, ctx) {
    reset();
    C = ctx; rate = 1.5 / ctx.speed();
    let total = 0, pending = 0;
    const reelsFor = {};
    for (const e of events) if (e.type === 'reels') reelsFor[e.i] = e;
    let reelChain = Promise.resolve();
    const drop = events.find(e => e.type === 'drop');
    if (drop) {
      setPips(drop.n, drop.n, false);
      let left = drop.n;
      for (const e of events) {
        if (e.type !== 'ball') continue;
        pending++;
        left--; setPips(left, drop.n, false);
        launch(e.k, false, b => {
          pending--;
          const k = e.k, tier = TIER[k];
          pocketGlow[k].v = tier >= 3 ? 1.6 : tier >= 1 ? 0.9 : 0.35;
          SFX.land(tier, false);
          if (tier >= 3) { burst(NB.pocketX(k), 128, TIER_COL[tier], tier >= 4 ? 40 : 18, tier >= 4 ? 1.4 : 1); shake = tier >= 4 ? 1 : 0.4; }
          if (e.w > 0) { total += e.w; showWin(ctx, total); }
        }, () => {
          pending--;
          art.gateGlow.v = 1; SFX.gate(); burst(NB.GATE.x, NB.GATE.y, '#ff3d8b', 16, 0.8);
          total += e.w; showWin(ctx, total);
          const re = reelsFor[e.i];
          if (re) reelChain = reelChain.then(() => spinReels(re.r, re.fever, ctx));
        });
        await ctx.sleep(rand(150, 210));
      }
      await until(() => pending === 0, ctx);
      await reelChain;
    }
    const fev = events.find(e => e.type === 'fever');
    let feature = false;
    if (fev) {
      feature = true;
      const startTotal = total;
      setFever(true, fev.m);
      $.fever.hidden = false; $.mult.textContent = '×' + fev.m; $.fwin.textContent = '';
      shake = 1; SFX.fever(); Screen.flash = 1;
      await card('KOI FEVER', `${fev.n} golden balls · ×${fev.m}` + (fev.src === '7' ? ' · lucky 7' : ''), 1500, ctx, 'fever');
      let n = fev.n, used = 0;
      setPips(n, n, true);
      for (const e of events) {
        if (e.type !== 'fball') continue;
        pending++; used++;
        setPips(n - used, n, true);
        const b = launch(e.k, true, () => {
          pending--;
          const k = e.k, tier = Math.min(4, TIER[k] + 1);
          pocketGlow[k].v = 1.6; SFX.land(tier, true);
          burst(NB.pocketX(k), 128, '#ffd25a', tier >= 3 ? 30 : 12, tier >= 3 ? 1.3 : 0.8);
          if (tier >= 4) shake = 1;
          total += e.w; showWin(ctx, total); $.fwin.textContent = ctx.winMoney(ctx.units(total - startTotal));
        }, () => {
          pending--;
          art.gateGlow.v = 1.4; SFX.mult(e.m); burst(NB.GATE.x, NB.GATE.y, '#ffd25a', 28, 1.2); shake = 0.6;
          n += e.add;
          setFever(true, e.m); $.mult.textContent = '×' + e.m; bump($.fever);
          setPips(n - used, n, true);
          Screen.flash = 0.6;
        });
        // the next golden ball waits until this one is past the gate, so every multiplier step is seen in order
        await until(() => b.passed, ctx);
        await ctx.sleep(140);
      }
      await until(() => pending === 0, ctx);
      const fe = events.find(e => e.type === 'fend');
      await ctx.sleep(300);
      SFX.summary();
      await card('FEVER WIN', ctx.winMoney(ctx.units(fe ? fe.w : total - startTotal)), 1700, ctx, 'sum');
    }
    if (total > 0 && ctx.units(total) >= ctx.amount) $.win.classList.add('lit');
    return { feature };
  }

  // Without WebGL the round still plays: the HUD walks through the events.
  async function playFlat(events, ctx) {
    reset();
    let total = 0, feature = false;
    for (const e of events) {
      if (e.type === 'ball' || e.type === 'fball') { if (e.w) { total += e.w; showWin(ctx, total); } await ctx.sleep(e.type === 'fball' ? 260 : 140); }
      else if (e.type === 'reels') { $.reel.textContent = e.r.join(' '); $.reel.className = 'nk-reelpop' + (e.fever ? ' win' : ''); $.reel.hidden = false; await ctx.sleep(700); $.reel.hidden = true; }
      else if (e.type === 'fever') { feature = true; $.fever.hidden = false; $.mult.textContent = '×' + e.m; await card('KOI FEVER', `${e.n} golden balls · ×${e.m}`, 1200, ctx, 'fever'); }
      else if (e.type === 'fend') await card('FEVER WIN', ctx.winMoney(ctx.units(e.w)), 1200, ctx, 'sum');
    }
    return { feature };
  }

  /* =====================================================================
   *  Intro art (inline SVG, ids unique per card)
   * ===================================================================== */
  const ballSvg = (id, c1, c2) => `<svg viewBox="0 0 100 100"><defs><radialGradient id="${id}" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="${c1}"/><stop offset=".8" stop-color="${c2}"/><stop offset="1" stop-color="#0d0828"/></radialGradient></defs>`;
  const INTRO = [
    { art: ballSvg('nkA', '#e9eef8', '#5a6380') + '<g stroke="#e9b850" stroke-width="5" stroke-linecap="round"><path d="M18 30v6M40 18v6M62 30v6M84 18v6M29 52v6M51 40v6M73 52v6"/></g><circle cx="47" cy="72" r="15" fill="url(#nkA)"/><path d="M10 92h80" stroke="#ff3d8b" stroke-width="4"/></svg>', title: 'PINS AND POCKETS', text: 'Ten silver balls fall through the pins into eleven pockets, from 0 to 80× a ball.' },
    { art: '<svg viewBox="0 0 100 100"><rect x="12" y="20" width="76" height="48" rx="6" fill="#120a30" stroke="#e9b850" stroke-width="4"/><g font-family="Unbounded,sans-serif" font-weight="900" font-size="26" text-anchor="middle"><text x="30" y="54" fill="#ff3d8b">7</text><text x="50" y="54" fill="#ff3d8b">7</text><text x="70" y="54" fill="#ff3d8b">7</text></g><path d="M38 78h24v12H38z" fill="#e9b850"/><path d="M34 78h32" stroke="#ff3d8b" stroke-width="4"/></svg>', title: 'KOI GATE', text: 'A ball in the gate spins the lantern reels. Three of a kind starts KOI FEVER.' },
    { art: ballSvg('nkC', '#ffe9a8', '#c47a10') + '<circle cx="50" cy="50" r="34" fill="url(#nkC)"/><text x="50" y="60" font-family="Unbounded,sans-serif" font-weight="900" font-size="26" text-anchor="middle" fill="#3a1c00">×2</text></svg>', title: 'KOI FEVER', text: 'Golden balls worth the whole play. Every gate ball adds +1 to the multiplier and one more ball.' }
  ];

  const RULES = `
    <h3>How to play</h3>
    <p>Press PLAY. The machine fires <b>10 silver balls</b>, each worth a tenth of the play amount. Every ball bounces down through the brass pins and lands in one of the 11 pockets along the bottom, or drops into the <b>KOI GATE</b> under the lantern screen. Each ball wins the value of its pocket × the ball. The round wins the total of all ten balls.</p>
    <table><thead><tr><th>Pocket (from the edge in)</th><th>Silver ball wins</th><th>× the play amount</th></tr></thead><tbody>
      <tr><td>Outer pockets</td><td>80× the ball</td><td>8×</td></tr>
      <tr><td>Second</td><td>10× the ball</td><td>1×</td></tr>
      <tr><td>Third</td><td>2× the ball</td><td>0.2×</td></tr>
      <tr><td>Fourth</td><td>0.6× the ball</td><td>0.06×</td></tr>
      <tr><td>Fifth</td><td>0.2× the ball</td><td>0.02×</td></tr>
      <tr><td>Centre pocket</td><td>0</td><td>0</td></tr>
      <tr><td>KOI GATE</td><td>1× the ball, and a reel spin</td><td>0.1×</td></tr>
    </tbody></table>
    <h3>KOI GATE and the lantern reels</h3>
    <p>A silver ball that drops into the KOI GATE wins 1× the ball and spins the three lantern reels (digits 1 to 9). When the first two reels match, the screen shows REACH while the third reel stops. <b>Three of a kind</b> starts <b>KOI FEVER</b> after the last silver ball has landed. <b>Three 7s</b> start it at ×3 instead of ×2. A second three of a kind in the same round adds 10 more golden balls to the same KOI FEVER. KOI FEVER starts about once in 280 rounds.</p>
    <h3>KOI FEVER</h3>
    <p>KOI FEVER fires <b>10 golden balls</b>, one after another. A golden ball is worth the whole play amount, and the pockets show their golden values × the current multiplier, which starts at ×2 (×3 after three 7s).</p>
    <table><thead><tr><th>Pocket (from the edge in)</th><th>Golden ball wins</th></tr></thead><tbody>
      <tr><td>Outer pockets</td><td>140× the play amount × multiplier</td></tr>
      <tr><td>Second</td><td>14× × multiplier</td></tr>
      <tr><td>Third</td><td>3.5× × multiplier</td></tr>
      <tr><td>Fourth</td><td>1.1× × multiplier</td></tr>
      <tr><td>Fifth</td><td>0.4× × multiplier</td></tr>
      <tr><td>Centre pocket</td><td>0.15× × multiplier</td></tr>
      <tr><td>KOI GATE</td><td>multiplier +1 and +1 golden ball</td></tr>
    </tbody></table>
    <p>A golden ball in the KOI GATE wins nothing by itself, but raises the multiplier by 1 for every golden ball after it and adds one more golden ball. A KOI FEVER holds at most 40 golden balls; at 40, the gate still raises the multiplier but adds no ball. The next golden ball is fired once the one before it has passed the gate, so every multiplier step happens in order.</p>
    <h3>KOI FEVER feature</h3>
    <p><b>KOI FEVER</b> instantly triggers KOI FEVER with 10 golden balls at ×2. It is played for 40× the play amount and asks you to confirm first.</p>
    <h3>Win cap</h3>
    <p>A round wins at most <b>5,000×</b> the play amount. A round that reaches the cap ends there and wins the cap.</p>
    <p>Each ball's flight is a real physics flight recorded by the machine, chosen so that it ends where the round's result says. The result of every round is decided before the first ball is fired; the flight, the pin sparks and the order in which balls land are decoration only.</p>`;

  LZ.boot({
    id: 'neon-koi', title: 'Neon Koi', tagline: 'Midnight pachinko. Find the KOI GATE, line up the lanterns.', rtp: '96.30',
    layout: 'side',
    logo: '<svg viewBox="0 0 262 60" aria-label="Neon Koi"><g font-family="Unbounded,sans-serif" font-weight="900"><text x="0" y="44" font-size="40" fill="none" stroke="#3ff2ff" stroke-width="2">NEON</text><text x="160" y="44" font-size="40" fill="#ff3d8b">KOI</text></g></svg>',
    modes: [
      { name: 'base', label: 'Classic', cost: 1, maxWin: 5000 },
      { name: 'fever', kind: 'feature', label: 'KOI FEVER', cost: 40, maxWin: 5000,
        blurb: 'Starts KOI FEVER straight away: 10 golden balls at ×2.', confirmTitle: 'Start KOI FEVER?', confirmLabel: 'Start' }
    ],
    introCards: INTRO,
    featureName: 'KOI FEVER', statLabel: 'Fevers',
    playLabel: 'PLAY', busyLabel: 'FIRING',
    winTiers: [{ x: 10, label: 'BIG WIN' }, { x: 50, label: 'MEGA WIN' }, { x: 250, label: 'EPIC WIN' }],
    rules: RULES,
    async mount(stage, a) {
      api = a; stageEl = stage;
      stage.classList.add('nk-stage');
      buildHud(stage);
      try {
        R = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
        R.toneMapping = T.ACESFilmicToneMapping; R.toneMappingExposure = 1.05;
        R.shadowMap.enabled = true; R.shadowMap.type = T.PCFSoftShadowMap;
        R.domElement.className = 'nk-canvas';
        stage.prepend(R.domElement);
      } catch (e) { flat = true; stage.classList.add('nk-flat'); }
      try { await Promise.all([document.fonts.load('900 60px Unbounded'), document.fonts.load('700 40px "Space Grotesk"')]); } catch (e) { /* fonts are optional for the canvas */ }
      if (!flat) {
        buildScene();
        composer = new T.EffectComposer(R);
        composer.addPass(new T.RenderPass(scene, cam));
        bloom = new T.UnrealBloomPass(new T.Vector2(256, 256), 0.8, 0.5, 0.82);
        composer.addPass(bloom);
        composer.addPass(new T.OutputPass());
        drawLabels();
        // the flight library: a few thousand practice balls, about a tenth of a second
        lib = NB.library(Math.random);
      }
      if ('ResizeObserver' in window) new ResizeObserver(resize).observe(stage); else window.addEventListener('resize', resize);
      resize();
      setPips(10, 10, false);
      if (!flat) Screen.draw(0);
      kick();
    },
    reset,
    async play(events, ctx) { return flat ? playFlat(events, ctx) : play(events, ctx); },
    idle() { kick(); },
    onStart() { kick(); }
  });
})();
