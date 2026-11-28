/* Sumi Koi: the board, drawn with three.js as painted layers.
 * A hanging rice-paper scroll is the playfield. Its landscape painting shows in ink only (grey) until wins wash colour
 * back into it. Ink drops (the balls) bounce off bamboo pegs and land in eleven tea cups; the red seal in the middle
 * holds the three brushed reels; a small ink koi lives on the scroll (phone) or in its own scroll beside it (wide).
 * Field units are the physics units of board.js: 100 wide, y grows down. World units: field / 10, y up.
 * Nothing here decides anything: game.js tells the scene what the round's book says, the scene only shows it. */
(function () {
  'use strict';
  const T = window.THREE, NB = window.NKBoard;
  const W2 = x => (x - 50) / 10, H2 = y => (70.5 - y) / 10;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x)), lerp = (a, b, t) => a + (b - a) * t, rand = (a, b) => a + Math.random() * (b - a);
  const eOut = t => 1 - Math.pow(1 - t, 3), eInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const eBack = t => { const c = 1.70158, c3 = c + 1; return 1 + c3 * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };

  // value of each pocket: which cup, which ink for its number
  // two inks (the player's choice): CALM (black) and WILD (vermilion), each with its own cups and values (math/game.mjs)
  const CUPS = { calm: ['gold', 'redgold', 'red', 'indigo', 'ink', 'clay', 'ink', 'indigo', 'red', 'redgold', 'gold'], wild: ['gold', 'redgold', 'red', 'ink', 'clay', 'clay', 'clay', 'ink', 'red', 'redgold', 'gold'] };
  let CUP = CUPS.calm;
  const CUP_COL = { gold: '#c9a24a', redgold: '#c8372d', red: '#c8372d', indigo: '#2d4a7a', ink: '#1b1a18', clay: '#8d8273' };
  const SEAL = { x0: 29, w: 42, top: 30.5 };                         // the seal frame on the field
  SEAL.h = SEAL.w * 1095 / 1024;
  const WIN = [[0.09, 0.321], [0.388, 0.611], [0.679, 0.908]], WIN_Y = [0.637, 0.868], DOME = { y0: 0.064, y1: 0.521, x0: 0.083, x1: 0.913 };

  const S = {
    R: null, scene: null, cam: null, el: null, W: 2, H: 2, s: 40, wide: false, ready: false,
    tex: {}, img: {}, mats: {}, balls: [], fx: [], cups: [], t: 0, shake: 0, fever: 0, feverOn: false, feverM: 2,
    rate: 1.8, lib: null, onFrame: null, idleT: 0
  };

  /* ---------- loading ---------- */
  const BASE = 'assets/';
  // opened from disk (file://) the pictures come from the offline pack as data: URLs, which WebGL may use
  function loadImg(src) { return new Promise(res => { const i = new Image(), k = src.replace(/.webp$/, ''); i.onload = () => res(i); i.onerror = () => res(null); i.src = window.SK_IMG && window.SK_IMG[k] ? window.SK_IMG[k] : BASE + src; }); }
  async function loadAll(list) {
    const out = {};
    await Promise.all(list.map(async k => { out[k] = await loadImg(k + '.webp'); }));
    return out;
  }
  function texOf(img, o = {}) {
    const t = new T.Texture(img); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 4;
    if (o.repeat) { t.wrapS = t.wrapT = T.RepeatWrapping; }
    t.needsUpdate = true; return t;
  }
  function sprite(key, w, h, o = {}) {
    const img = S.img[key];
    if (!S.tex[key]) S.tex[key] = texOf(img);
    const m = new T.MeshBasicMaterial({ map: S.tex[key], transparent: true, depthTest: false, depthWrite: false, toneMapped: false, color: o.color || 0xffffff, opacity: o.opacity == null ? 1 : o.opacity, blending: o.add ? T.AdditiveBlending : T.NormalBlending });
    if (h == null) h = w * img.height / img.width;
    const mesh = new T.Mesh(new T.PlaneGeometry(w, h), m);
    mesh.renderOrder = o.order || 0;
    return mesh;
  }

  /* ---------- digits on canvas (the brushed numerals) ---------- */
  const Dig = {
    sets: {},     // name -> { img(canvas), glyphs, h }
    make(name, img, meta, tint) {
      let src = img;
      if (tint) {
        const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const g = c.getContext('2d');
        g.drawImage(img, 0, 0); g.globalCompositeOperation = 'source-in'; g.fillStyle = tint; g.fillRect(0, 0, c.width, c.height);
        src = c;
      }
      this.sets[name] = { img: src, glyphs: meta.glyphs, h: meta.h };
    },
    width(str, set, h) { const S2 = this.sets[set]; let w = 0; for (const ch of str) { const gl = S2.glyphs[ch]; w += gl ? gl.w * h / S2.h * 0.92 : h * 0.3; } return w; },
    draw(g, str, x, y, h, set, align = 'center') {
      const S2 = this.sets[set]; if (!S2) return;
      const w = this.width(str, set, h); let cx = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
      for (const ch of str) {
        const gl = S2.glyphs[ch];
        if (!gl) { cx += h * 0.3; continue; }
        const gw = gl.w * h / S2.h;
        g.drawImage(S2.img, gl.x, 0, gl.w, S2.h, cx, y - h / 2, gw, h);
        cx += gw * 0.92;
      }
    }
  };
  const fmtV = v => v === 0 ? '0' : (v >= 1000 ? String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : v >= 100 ? String(Math.round(v)) : v >= 10 ? String(+v.toFixed(1)) : v >= 1 ? String(+v.toFixed(2)) : String(+v.toFixed(2)).replace(/^0/, '')) + 'x';

  /* ---------- the painting: grey ink until a win washes colour into it ---------- */
  const PAINT_V = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
  const PAINT_F = `
    uniform sampler2D map; uniform sampler2D mask; uniform sampler2D ink; uniform float fever; uniform float t;
    varying vec2 vUv;
    void main(){
      vec4 c = texture2D(map, vUv);
      float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      float k = smoothstep(0.12, 0.98, g);
      vec3 paper = vec3(0.949, 0.918, 0.847), sumi = vec3(0.13, 0.125, 0.118);
      vec3 mono = mix(sumi, paper, pow(k, 0.8));
      mono = mix(mono, paper, 0.42);                       // a pale ink wash: the pegs and drops stay the heroes
      float m = clamp(0.32 + texture2D(mask, vUv).r * 1.25 + fever * 0.55, 0.0, 1.0);   // a soft colour always, full colour where wins washed it
      vec3 col = mix(mono, mix(c.rgb, paper, 0.12), m);
      vec4 tr = texture2D(ink, vUv);
      col = mix(col, tr.rgb, tr.a);
      col = mix(col, col * vec3(1.06, 0.98, 0.86) + vec3(0.03, 0.02, 0.0), fever * 0.35);
      gl_FragColor = vec4(col, 1.0);
    }`;
  let mask, maskG, ink, inkG, washes = [], inkDirty = 0;
  function buildPaper() {
    const PW = 10.6, PH = 14.9;                 // the paper, slightly larger than the field
    mask = document.createElement('canvas'); mask.width = 256; mask.height = 360; maskG = mask.getContext('2d');
    maskG.fillStyle = '#000'; maskG.fillRect(0, 0, 256, 360);
    ink = document.createElement('canvas'); ink.width = 424; ink.height = 596; inkG = ink.getContext('2d');
    S.tex.mask = new T.CanvasTexture(mask); S.tex.ink = new T.CanvasTexture(ink); S.tex.ink.colorSpace = T.SRGBColorSpace;
    S.tex.painting = texOf(S.img['board/painting']);
    S.mats.paper = new T.ShaderMaterial({
      uniforms: { map: { value: S.tex.painting }, mask: { value: S.tex.mask }, ink: { value: S.tex.ink }, fever: { value: 0 }, t: { value: 0 } },
      vertexShader: PAINT_V, fragmentShader: PAINT_F, depthTest: false, depthWrite: false
    });
    const paper = new T.Mesh(new T.PlaneGeometry(PW, PH), S.mats.paper); paper.renderOrder = 10; paper.position.y = -0.05;
    S.board.add(paper);
    S.paperDim = { w: PW, h: PH, cx: 0, cy: -0.05 };
  }
  // field point -> canvas point on the paper (mask and ink canvases)
  const toPaper = (c, fx, fy) => [(W2(fx) + S.paperDim.w / 2) / S.paperDim.w * c.width, (S.paperDim.h / 2 - (H2(fy) - S.paperDim.cy)) / S.paperDim.h * c.height];
  function wash(fx, fy, size, dur = 0.8) {
    const keys = ['wash/a', 'wash/b', 'wash/c', 'wash/d', 'wash/e', 'wash/f'];
    washes.push({ fx, fy, size, img: S.img[keys[(Math.random() * keys.length) | 0]], t: 0, dur, rot: rand(0, 6.28) });
  }
  function stepPaper(dt) {
    let dirty = false;
    for (let i = washes.length - 1; i >= 0; i--) {
      const w = washes[i]; w.t += dt; const k = Math.min(1, w.t / w.dur);
      const [x, y] = toPaper(mask, w.fx, w.fy), r = w.size * mask.width / 100 * (0.35 + 0.65 * eOut(k));
      maskG.save(); maskG.globalCompositeOperation = 'lighter'; maskG.globalAlpha = 0.09 * (1 - k * 0.5);
      maskG.translate(x, y); maskG.rotate(w.rot); maskG.drawImage(w.img, -r, -r, r * 2, r * 2); maskG.restore();
      dirty = true; if (k >= 1) washes.splice(i, 1);
    }
    if (S.fade > 0) { maskG.fillStyle = `rgba(0,0,0,${S.fade})`; maskG.fillRect(0, 0, mask.width, mask.height); dirty = true; }
    if (dirty) S.tex.mask.needsUpdate = true;
    if (inkDirty > 0) {
      inkG.save(); inkG.globalCompositeOperation = 'destination-out'; inkG.fillStyle = `rgba(0,0,0,${Math.min(1, dt * 1.6)})`; inkG.fillRect(0, 0, ink.width, ink.height); inkG.restore();
      S.tex.ink.needsUpdate = true; inkDirty -= dt;
    }
  }
  function inkLine(fx0, fy0, fx1, fy1, gold, wgt) {
    const [x0, y0] = toPaper(ink, fx0, fy0), [x1, y1] = toPaper(ink, fx1, fy1);
    inkG.strokeStyle = gold ? 'rgba(201,162,74,.55)' : S.ink === 'wild' ? 'rgba(200,55,45,.42)' : 'rgba(27,26,24,.42)'; inkG.lineCap = 'round'; inkG.lineWidth = wgt;
    inkG.beginPath(); inkG.moveTo(x0, y0); inkG.lineTo(x1, y1); inkG.stroke(); inkDirty = 1.2;
  }

  /* ---------- the frame of the board: rods, rail, walls, pegs, cups, gate, seal ---------- */
  function stroke(len, thick, x, y, rot, order, color) {
    const m = sprite('icons/minus', len, thick, { order, color }); m.position.set(x, y, 0); m.rotation.z = rot; S.board.add(m); return m;
  }
  function buildFrame() {
    // the ink rail over the top: short dry-brush strokes laid along the arc (the drop rides it from the top right)
    const A = NB.ARC, R0 = (A.r + 1.6) / 10;
    for (let i = 0; i < 26; i++) {
      const a0 = (i / 26) * Math.PI, a1 = ((i + 1.25) / 26) * Math.PI, a = (a0 + a1) / 2, len = R0 * (a1 - a0) * 1.08;
      stroke(len, 0.2 + Math.sin(i * 1.7) * 0.03, Math.cos(a) * R0 + W2(A.cx), H2(A.cy) + Math.sin(a) * R0, a + Math.PI / 2, 20, 0x1b1a18);
    }
    // the side walls: long upright strokes, a little uneven
    for (const fx of [NB.WALL_L - 0.9, NB.WALL_R + 0.9]) for (let j = 0; j < 4; j++) {
      const y0 = 46 + j * 23.5, y1 = y0 + 25; stroke((y1 - y0) / 10, 0.2 + (j % 2) * 0.03, W2(fx) + (j % 2 ? 0.01 : -0.01), H2((y0 + y1) / 2), Math.PI / 2, 20, 0x1b1a18);
    }
    // pocket dividers
    for (let i = 1; i < NB.NP; i++) stroke(1.5, 0.14, W2(NB.WALL_L + i * NB.PW), H2(133.8), Math.PI / 2 + rand(-0.03, 0.03), 22, 0x1b1a18);
    // pegs: three painted variants, instanced
    const pegs = NB.pins.filter(p => !p.post && !p.tip);
    ['pins/a', 'pins/b', 'pins/c'].forEach((key, v) => {
      const list = pegs.filter((p, i) => i % 3 === v);
      if (!S.tex[key]) S.tex[key] = texOf(S.img[key]);
      const mat = new T.MeshBasicMaterial({ map: S.tex[key], transparent: true, depthTest: false, depthWrite: false });
      const im = new T.InstancedMesh(new T.PlaneGeometry(0.24, 0.24), mat, list.length); im.renderOrder = 30;
      const m4 = new T.Matrix4();
      list.forEach((p, i) => { m4.makeRotationZ(rand(0, 6.28)); m4.setPosition(W2(p.x), H2(p.y), 0); im.setMatrixAt(i, m4); });
      S.board.add(im);
    });
    // the gate: a red lacquer cup between two red posts
    const GT = NB.GATE;
    for (const [key, fx] of [['gate/postL', GT.x - GT.hw - 0.5], ['gate/postR', GT.x + GT.hw + 0.5]]) { const p = sprite(key, 0.19, 0.95, { order: 34 }); p.position.set(W2(fx), H2(GT.y + 3.8), 0); S.board.add(p); }
    S.gate = cupPair('gate/cup', W2(GT.x), H2(GT.y + 4.2), 1.0, 36);
    // cups
    for (let k = 0; k < NB.NP; k++) S.cups.push({ ...cupPair('cups/' + CUP[k], W2(NB.pocketX(k)), H2(137.2), NB.PW / 10 * 0.95, 40), k, pulse: 0 });
    // number strip above the cups
    const lc = document.createElement('canvas'); lc.width = 2048; lc.height = 340; S.labelG = lc.getContext('2d');
    S.tex.labels = new T.CanvasTexture(lc); S.tex.labels.colorSpace = T.SRGBColorSpace; S.tex.labels.anisotropy = 8;
    const lm = new T.Mesh(new T.PlaneGeometry(9.2, 9.2 * 340 / 2048 * 1.15), new T.MeshBasicMaterial({ map: S.tex.labels, transparent: true, depthTest: false, depthWrite: false }));
    lm.renderOrder = 24; lm.position.set(0, H2(124.4), 0); S.board.add(lm);
    // the seal: frame over a canvas with the reels and the dome
    const sc = document.createElement('canvas'); sc.width = 640; sc.height = Math.round(640 * 1095 / 1024); S.sealG = sc.getContext('2d');
    S.tex.seal = new T.CanvasTexture(sc); S.tex.seal.colorSpace = T.SRGBColorSpace;
    S.seal = new T.Group(); S.seal.position.set(W2(SEAL.x0 + SEAL.w / 2), H2(SEAL.top + SEAL.h / 2), 0); S.board.add(S.seal);
    const inner = new T.Mesh(new T.PlaneGeometry(SEAL.w / 10 * 0.96, SEAL.h / 10 * 0.96), new T.MeshBasicMaterial({ map: S.tex.seal, transparent: true, depthTest: false, depthWrite: false }));
    inner.renderOrder = 32; S.seal.add(inner);
    const frame = sprite('board/seal', SEAL.w / 10, SEAL.h / 10, { order: 33 }); S.seal.add(frame);
    S.sealFrame = frame;
    // rods
    const rw = 11.8;
    for (const y of [7.62, -7.62]) { const r = sprite('board/rod', rw, null, { order: 90 }); r.position.set(0, y, 0); S.board.add(r); }
  }
  // a cup as two layers: the whole cup behind the drops, and its front wall in front of them
  function cupPair(key, x, y, w, order) {
    const img = S.img[key], h = w * img.height / img.width;
    const back = sprite(key, w, h, { order }); back.position.set(x, y, 0); S.board.add(back);
    const FRONT = 0.62;                                   // the lower 62% of the picture is the cup's front wall
    if (!S.tex[key]) S.tex[key] = texOf(img);
    const g = new T.PlaneGeometry(w, h * FRONT), uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * FRONT);
    const front = new T.Mesh(g, new T.MeshBasicMaterial({ map: S.tex[key], transparent: true, depthTest: false, depthWrite: false }));
    front.renderOrder = 70; front.position.set(x, y - h * (1 - FRONT) / 2, 0); S.board.add(front);
    return { back, front, x, y, w, h, base: { x, y } };
  }

  /* ---------- the seal's canvas: dome + three reels ---------- */
  const Reels = {
    r: [0, 1, 2].map(i => ({ pos: i * 3, v: 0, tw: null })), reach: 0, fever: false, mult: 2, flash: 0, last: [7, 3, 5], marks: 0, pop: 0, open: 0,
    setMarks(n) { if (n !== this.marks) this.pop = n > this.marks ? 1 : 0; this.marks = n; },
    draw() {
      const g = S.sealG, w = g.canvas.width, h = g.canvas.height;
      g.clearRect(0, 0, w, h);
      // dome: the painting shows through it; a slow brushed enso turns inside
      const dx0 = DOME.x0 * w, dx1 = DOME.x1 * w, dy0 = DOME.y0 * h, dy1 = DOME.y1 * h;
      g.save();
      const cx = w / 2, cy = (dy0 + dy1) / 2 + h * 0.03, rr = (dx1 - dx0) * 0.33;
      g.translate(cx, cy); g.rotate(S.t * 0.3 + (this.reach ? S.t * 2.5 : 0));
      g.globalAlpha = this.fever ? 0.9 : this.reach ? 0.85 : 0.22;
      const en = this.reach || this.fever || S.ink === 'wild' ? S.img['enso/red'] : S.img['enso/ink'];
      g.drawImage(en, -rr, -rr, rr * 2, rr * 2); g.restore();
      if (this.fever) Dig.draw(g, 'x' + this.mult, cx, cy, rr * 0.95, 'gold');
      // the three marks: an empty brushed ring, or a stamped vermilion seal (the newest one pops in); gold in KOI FEVER
      const y0 = WIN_Y[0] * h, y1 = WIN_Y[1] * h, rh = y1 - y0;
      for (let i = 0; i < 3; i++) {
        const x0 = WIN[i][0] * w, x1 = WIN[i][1] * w, rw = x1 - x0, mx = x0 + rw / 2, my = y0 + rh / 2;
        g.save(); g.fillStyle = this.fever ? '#f6e7bf' : this.open ? '#fbe9d0' : '#f2ead8'; g.fillRect(x0 - 2, y0 - 2, rw + 4, rh + 4);
        const on = this.fever || i < this.marks, newest = !this.fever && i === this.marks - 1;
        const k = newest && this.pop > 0 ? 1 + Math.sin(this.pop * Math.PI) * 0.35 : 1, r = Math.min(rw, rh) * 0.36 * k;
        if (on) {
          // a painted stamp: the red enso brushed twice, a golden drop set in it
          g.globalAlpha = 1; g.drawImage(S.img['enso/red'], mx - r * 1.3, my - r * 1.3, r * 2.6, r * 2.6);
          g.save(); g.translate(mx, my); g.rotate(1.9); g.drawImage(S.img['enso/red'], -r * 1.05, -r * 1.05, r * 2.1, r * 2.1); g.restore();
          const dr = S.img['drops/gold']; if (dr) g.drawImage(dr, mx - r * 0.62, my - r * 0.62, r * 1.24, r * 1.24);
        } else {
          g.globalAlpha = this.reach && i === this.marks ? 0.55 + Math.sin(S.t * 9) * 0.25 : 0.28;
          g.drawImage(S.img['enso/ink'], mx - r * 1.1, my - r * 1.1, r * 2.2, r * 2.2);
        }
        g.restore();
      }
      if (this.flash > 0) { g.globalAlpha = this.flash * 0.6; g.fillStyle = '#fff6dc'; g.fillRect(0, 0, w, h); g.globalAlpha = 1; }
      S.tex.seal.needsUpdate = true;
    },
    step(dt) {
      let moving = false;
      for (const R of this.r) {
        if (R.tw) { const tw = R.tw; tw.t += dt / tw.d; const k = Math.min(1, tw.t); R.pos = lerp(tw.from, tw.to, eBack(k)); R.v = k < 0.85 ? 10 : 0; if (k >= 1) { R.tw = null; R.pos = tw.to; R.v = 0; tw.done && tw.done(); } moving = true; }
        else if (R.v) { R.pos += R.v * dt; moving = true; }
      }
      if (this.flash > 0) { this.flash = Math.max(0, this.flash - dt * 2.4); moving = true; }
      if (this.pop > 0) { this.pop = Math.max(0, this.pop - dt * 3); moving = true; }
      // the waiting mark and the open seal redraw on the 20 fps tick below, not every frame (the seal canvas is large)
      if (moving || (S.t - (this.lastDraw || 0)) > 0.05) { this.draw(); this.lastDraw = S.t; }
    },
    stopAt(i, d, dur) {
      const R = this.r[i];
      return new Promise(res => { const cur = R.pos, need = ((d - 1) - (Math.floor(cur) % 9) + 9) % 9; R.tw = { from: cur, to: Math.floor(cur) + need + 18, t: 0, d: dur, done: res }; });
    },
    spinAll(v) { this.r.forEach(R => { R.tw = null; R.v = v; }); }
  };

  /* ---------- labels ---------- */
  const VALS = {
    calm: { base: [34, 4.2, 0.8, 0.3, 0.2, 0, 0.2, 0.3, 0.8, 4.2, 34], fever: [140, 14, 3.5, 1.1, 0.4, 0.15, 0.4, 1.1, 3.5, 14, 140] },
    wild: { base: [76, 6.8, 0.9, 0.1, 0, 0, 0, 0.1, 0.9, 6.8, 76], fever: [240, 20, 3.2, 0.5, 0.08, 0, 0.08, 0.5, 3.2, 20, 240] }
  };
  function drawLabels() {
    const g = S.labelG, w = g.canvas.width, h = g.canvas.height, pw = w / 11;
    g.clearRect(0, 0, w, h);
    for (let k = 0; k < 11; k++) {
      const V = VALS[S.ink || 'calm'], gm = !S.feverOn && S.cupMult && S.cupMult.k === k ? S.cupMult.m : 1, v = (S.feverOn ? V.fever[k] * S.feverM : V.base[k]) * gm, txt = fmtV(v);
      const set = S.feverOn || gm > 1 ? 'gold' : CUP[k] === 'gold' ? 'gold' : CUP[k] === 'red' || CUP[k] === 'redgold' ? 'red' : CUP[k] === 'indigo' ? 'indigo' : CUP[k] === 'clay' ? 'clay' : 'ink';
      const up = k % 2 === 1, cy = up ? h * 0.27 : h * 0.73;
      const edge = k === 0 || k === 10, room = (edge ? 1.45 : 1.9) * pw;
      let size = h * 0.44; while (Dig.width(txt, set, size) + size * 0.5 > room && size > 20) size -= 4;
      if (up) { g.save(); g.strokeStyle = 'rgba(27,26,24,.35)'; g.lineWidth = 5; g.beginPath(); g.moveTo((k + 0.5) * pw, h * 0.47); g.lineTo((k + 0.5) * pw, h * 1.0); g.stroke(); g.restore(); }
      const tw = Dig.width(txt, set, size), cx = Math.min(w - tw / 2 - 6, Math.max(tw / 2 + 6, (k + 0.5) * pw));
      // a pill of paper behind each value: readable over the dividers and the painted pond
      g.save(); g.fillStyle = set === 'gold' ? 'rgba(27,26,24,0.72)' : 'rgba(242,234,216,0.82)'; const ph = size * 0.92, pw2 = tw + size * 0.5, x0 = cx - pw2 / 2, y0 = cy - ph / 2, rr = ph / 2; g.beginPath(); g.moveTo(x0 + rr, y0); g.arcTo(x0 + pw2, y0, x0 + pw2, y0 + ph, rr); g.arcTo(x0 + pw2, y0 + ph, x0, y0 + ph, rr); g.arcTo(x0, y0 + ph, x0, y0, rr); g.arcTo(x0, y0, x0 + pw2, y0, rr); g.closePath(); g.fill(); g.restore();
      Dig.draw(g, txt, cx, cy, size, set);
    }
    S.tex.labels.needsUpdate = true;
  }

  /* ---------- the koi ---------- */
  const KOI_V = `
    uniform float uT, uAmp, uFreq; varying vec2 vUv;
    void main(){ vUv = uv; vec3 p = position; float u = uv.x; float w = pow(1.0 - u, 1.5);
      p.y += sin(u * 5.0 - uT * uFreq) * uAmp * w + sin(uT * uFreq * 0.5) * uAmp * 0.15;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`;
  const KOI_F = `
    uniform sampler2D a; uniform sampler2D b; uniform float uMix, uAlpha; varying vec2 vUv;
    void main(){ vec4 c1 = texture2D(a, vUv), c2 = texture2D(b, vUv); vec4 c = mix(c1, c2, uMix); gl_FragColor = vec4(c.rgb, c.a * uAlpha); }`;
  const Koi = {
    mesh: null, grp: null, mat: null, x: 0, y: 0, dir: 1, face: 1, vis: 1, t: 0, speed: 0.5, target: null, mode: 'swim', modeT: 0, len: 2, mix: 0, mixTo: 0, jump: 0, area: null, rot: 0,
    build() {
      S.tex.koiA = texOf(S.img['koi/ink']); S.tex.koiB = texOf(S.img['koi/color']);
      this.mat = new T.ShaderMaterial({ uniforms: { a: { value: S.tex.koiA }, b: { value: S.tex.koiB }, uT: { value: 0 }, uAmp: { value: 0.05 }, uFreq: { value: 4 }, uMix: { value: 0 }, uAlpha: { value: 1 } },
        vertexShader: KOI_V, fragmentShader: KOI_F, transparent: true, depthTest: false, depthWrite: false });
      this.mesh = new T.Mesh(new T.PlaneGeometry(1, 356 / 1024, 32, 1), this.mat);
      this.grp = new T.Group(); this.grp.add(this.mesh); this.mesh.renderOrder = 28; S.scene.add(this.grp);
      // the hand-drawn flipbooks (4 x 2 cells each): the ink koi swimming, and the colour koi leaping
      this.flip = {};
      for (const k of ['swim', 'leap']) {
        const img = S.img['koi/' + k]; if (!img) continue;
        const tx = texOf(img); tx.repeat.set(0.25, 0.5);
        const cw = img.width / 4, ch = img.height / 2, w = 1 / 0.86, m = new T.MeshBasicMaterial({ map: tx, transparent: true, depthTest: false, depthWrite: false });
        const mesh = new T.Mesh(new T.PlaneGeometry(w, w * ch / cw), m); mesh.renderOrder = 28; mesh.visible = false;
        this.grp.add(mesh); this.flip[k] = { mesh, tx };
      }
      this.frameT = 0;
    },
    // a cell of a flipbook: frame 0..7, read left to right, top row first
    show(kind, frame, alpha) {
      for (const [k, f] of Object.entries(this.flip)) {
        f.mesh.visible = k === kind;
        if (k === kind) { const c = frame % 4, r = Math.floor(frame / 4) % 2; f.tx.offset.set(c * 0.25, r === 0 ? 0.5 : 0); f.mesh.material.opacity = alpha; }
      }
      this.mesh.visible = !kind;
    },
    // area: { x0, x1, y0, y1 } in world units, vertical: the koi swims up and down (the side scroll)
    place(area, len, vertical, order) {
      this.area = area; this.len = len; this.vertical = vertical; this.mesh.renderOrder = order;
      this.mesh.scale.set(len, len, 1); for (const f of Object.values(this.flip || {})) f.mesh.scale.set(len, len, 1);
      this.x = (area.x0 + area.x1) / 2; this.y = (area.y0 + area.y1) / 2; this.target = null;
    },
    pick() { const A = this.area; return { x: rand(A.x0, A.x1), y: rand(A.y0, A.y1) }; },
    react(kind, o) {
      Pond.react(kind, o);
      if (kind === 'big') { this.mode = 'leap'; this.modeT = 0; this.mixTo = 1; this.leapDur = (o && o.dur) || 2.2; }
      else if (kind === 'win') { this.jump = 1; this.mixHold = 0.8; this.jumpF = this.frameT; }
      else if (kind === 'lose') { if (this.mode === 'swim') { this.mode = 'dive'; this.modeT = 0; } }
      else if (kind === 'look' && o && this.mode === 'swim') { this.target = { x: clamp(o.x, this.area.x0, this.area.x1), y: clamp(o.y, this.area.y0, this.area.y1) }; }
      else if (kind === 'fever') { this.mixTo = o ? 1 : 0; this.speed = o ? 1.1 : 0.5; }
    },
    step(dt) {
      if (!this.mesh) return;
      this.grp.visible = !S.videoKoi;
      this.t += dt * (S.feverOn ? 1.6 : 1);
      const A = this.area; if (!A) return;
      if (!this.target || Math.hypot(this.target.x - this.x, this.target.y - this.y) < 0.15) this.target = this.pick();
      let sp = this.speed * (this.mode === 'swim' ? 1 : 0.3);
      const dx = this.target.x - this.x, dy = this.target.y - this.y, d = Math.hypot(dx, dy) || 1;
      this.x += dx / d * sp * dt; this.y += dy / d * sp * dt * 0.6;
      const want = this.vertical ? 1 : (dx >= 0 ? 1 : -1);          // in its own scroll the koi always faces up and drifts
      if (Math.abs(this.vertical ? dy : dx) > 0.2) this.dir = want;
      this.face = lerp(this.face, this.dir, Math.min(1, dt * 3));          // turning: the body flips through edge-on
      let scl = 1, alpha = 1, ox = 0, oy = 0;
      if (this.jump > 0) { this.jump = Math.max(0, this.jump - dt * 2); oy = Math.sin((1 - this.jump) * Math.PI) * this.len * (this.vertical ? 0.18 : 0.05); }
      if (this.mode === 'dive') { this.modeT += dt; const k = this.modeT / 0.9; alpha = 1 - Math.sin(clamp(k, 0, 1) * Math.PI) * 0.8; scl = 1 - Math.sin(clamp(k, 0, 1) * Math.PI) * 0.25; if (k >= 1) this.mode = 'swim'; }
      if (this.mode === 'leap') {
        this.modeT += dt; const k = clamp(this.modeT / this.leapDur, 0, 1), up = Math.sin(k * Math.PI);
        if (this.vertical) { scl = 1 + up * 0.28; ox = up * this.len * 0.22; } else { scl = 1 + up * 0.45; oy = up * this.len * 0.18; }
        if (k >= 1) { this.mode = 'swim'; this.mixTo = S.feverOn ? 1 : 0; }
      }
      if (this.mixHold > 0) this.mixHold -= dt;
      const mixGoal = Math.max(this.mixTo, this.mixHold > 0 ? 0.6 : 0, S.feverOn ? 1 : 0);
      this.mix = lerp(this.mix, mixGoal, Math.min(1, dt * 2.5));
      const swimAmp = (this.mode === 'leap' ? 0.09 : 0.05) * (S.feverOn ? 1.3 : 1);
      Object.assign(this.mat.uniforms.uT, { value: this.t }); this.mat.uniforms.uAmp.value = swimAmp; this.mat.uniforms.uFreq.value = this.mode === 'leap' ? 9 : S.feverOn ? 7 : 4.5;
      this.mat.uniforms.uMix.value = this.mix; this.mat.uniforms.uAlpha.value = alpha * this.vis;
      // frame by frame on a 24 fps clock, each drawing held for two ticks (12 drawings a second, "on twos")
      this.frameT += dt; const tick = Math.floor(this.frameT * 24), d2 = Math.floor(tick / 2);
      if (this.flip.leap && this.mode === 'leap') {
        const k = clamp(this.modeT / this.leapDur, 0, 1), el = this.modeT * 12;
        const fr = el < 4 ? Math.floor(el) : k < 0.86 ? [3, 4, 5, 4][Math.floor(el / 1.5) % 4] : 5 + Math.min(2, Math.floor((k - 0.86) / 0.14 * 3));
        this.show('leap', fr, alpha * this.vis);
      } else if (this.flip.leap && this.jumpF != null) {
        const fr = Math.floor((this.frameT - this.jumpF) * 16);
        if (fr > 7) { this.jumpF = null; } else this.show('leap', fr, alpha * this.vis);
      }
      if (this.mode !== 'leap' && this.jumpF == null) {
        if (this.flip.swim && this.mix < 0.35 && !S.feverOn) { this.show('swim', d2 % 8, alpha * this.vis * (1 - this.mix)); this.mat.uniforms.uAlpha.value = alpha * this.vis * this.mix; this.mesh.visible = this.mix > 0.02; }
        else this.show(null);
      }
      this.grp.position.set(this.x + ox, this.y + oy, 0);
      const f = Math.abs(this.face) < 0.08 ? 0.08 * Math.sign(this.face || 1) : this.face;
      if (this.vertical) {
        // up or down the scroll: a U-turn through "facing right", the belly kept on the same side
        this.rot = lerp(this.rot || Math.PI / 2, this.dir > 0 ? Math.PI / 2 : -Math.PI / 2, Math.min(1, dt * 2.2));
        this.grp.rotation.z = this.rot + Math.sin(this.t * 0.9) * 0.04;
        this.grp.scale.set(scl, scl * (this.rot >= 0 ? 1 : -1), 1);
      } else { this.grp.rotation.z = Math.sin(this.t * 0.9) * 0.05 + (dy / d) * 0.25 * Math.sign(f); this.grp.scale.set(scl * f, scl, 1); }
    },
    // where it is on screen (for the station's character check)
    rect() {
      if (!this.mesh) return null;
      const w = this.len * Math.abs(this.grp.scale.x) || 0.01, h = this.len * 356 / 1024 * Math.abs(this.grp.scale.y);
      const [cw, ch] = this.vertical ? [h, w] : [w, h];
      return { x: this.grp.position.x, y: this.grp.position.y, w: cw, h: ch };
    }
  };

  /* ---------- side scroll (wide screens): the koi's own hanging scroll ---------- */
  function buildSide() {
    S.side = new T.Group(); S.scene.add(S.side);
    if (!S.tex.paper) S.tex.paper = texOf(S.img['ui/paper'], { repeat: true });
    const pw = 6.2, ph = 13.6;
    const pm = new T.MeshBasicMaterial({ map: S.tex.paper, depthTest: false, depthWrite: false });
    const paper = new T.Mesh(new T.PlaneGeometry(pw, ph), pm); paper.renderOrder = 4; S.side.add(paper);
    S.tex.paper.repeat.set(1, 3);
    // a few soft grey washes so the paper is not empty
    ['wash/b', 'wash/e', 'wash/c'].forEach((k, i) => { const m = sprite(k, 3.2, null, { order: 5, opacity: 0.2, color: i === 1 ? 0x9fb3c9 : 0xb8b0a2 }); m.position.set(rand(-0.6, 0.6), -4 + i * 4, 0); m.rotation.z = rand(0, 6); S.side.add(m); });
    for (const y of [ph / 2 + 0.2, -ph / 2 - 0.2]) { const r = sprite('board/rod', pw + 0.9, null, { order: 6 }); r.position.set(0, y, 0); S.side.add(r); }
    S.sideDim = { w: pw, h: ph };
  }

  /* ---------- balls ---------- */
  let GEO_BALL = null;
  function launch(k, gold, cb) {
    const f = pickFlight(k);
    if (!GEO_BALL) GEO_BALL = new T.PlaneGeometry(NB.BR / 10 * 2.7, NB.BR / 10 * 2.7);
    const key = gold ? 'drops/gold' : 'drops/ink';
    if (!S.tex[key]) S.tex[key] = texOf(S.img[key]);
    const mesh = new T.Mesh(GEO_BALL, new T.MeshBasicMaterial({ map: S.tex[key], transparent: true, depthTest: false, depthWrite: false }));
    mesh.renderOrder = 60; mesh.position.set(W2(f.xy[0]), H2(f.xy[1]), 0); S.board.add(mesh);
    const b = { f, mesh, t: 0, hi: 0, k, gold, cb: cb || {}, passed: false, sinking: false, sink: 0, px: f.xy[0], py: f.xy[1] };
    S.balls.push(b);
    fx('splash/d', f.xy[0], f.xy[1], 1.2, { life: 0.35, color: gold ? 0xc9a24a : 0x1b1a18, opacity: 0.7, order: 62 });
    return b;
  }
  function pickFlight(k) {
    const key = k === -1 ? 'g' : k; let list = S.lib[key];
    if (!list || !list.length) for (let d = 1; d < 11 && (!list || !list.length); d++) list = S.lib[clamp(k + d, 0, 10)] && S.lib[clamp(k + d, 0, 10)].length ? S.lib[clamp(k + d, 0, 10)] : S.lib[clamp(k - d, 0, 10)];
    return list[(Math.random() * list.length) | 0];
  }
  function stepBalls(dt) {
    for (let i = S.balls.length - 1; i >= 0; i--) {
      const b = S.balls[i], xy = b.f.xy, n = xy.length / 2;
      if (!b.sinking) {
        b.t += dt * 60 * S.rate;
        while (b.hi < b.f.hits.length && b.f.hits[b.hi] <= b.t) {
          const p = NB.pins[b.f.hits[b.hi + 1]];
          if (!p.tip) fx('splash/f', p.x, p.y, 0.55, { life: 0.3, color: b.gold ? 0xc9a24a : 0x1b1a18, opacity: 0.45, grow: 0.8, order: 31 });
          b.cb.pin && b.cb.pin(p);
          b.hi += 2;
        }
        const fi = Math.min(n - 1, b.t), i0 = Math.floor(fi), i1 = Math.min(n - 1, i0 + 1), fr = fi - i0;
        const x = lerp(xy[i0 * 2], xy[i1 * 2], fr), y = lerp(xy[i0 * 2 + 1], xy[i1 * 2 + 1], fr);
        const vx = x - b.px, vy = y - b.py, v = Math.hypot(vx, vy);
        if (v > 0.05) inkLine(b.px, b.py, x, y, b.gold, b.gold ? 3.2 : 2.4);
        b.px = x; b.py = y;
        b.mesh.position.set(W2(x), H2(y), 0);
        const st = clamp(v * 0.08, 0, 0.35);                           // a drop stretches with speed
        b.mesh.rotation.z = Math.atan2(-vy, vx); b.mesh.scale.set(1 + st, 1 - st * 0.5, 1);
        if (!b.passed && y > NB.GATE.y + 4) b.passed = true;
        // anticipation: the last half second of a drop that the book sends into the seal
        if (b.k === -1 && !b.warned && n - 1 - b.t < 30 * S.rate) { b.warned = true; S.gate.pulse = 1; Reels.flash = Math.max(Reels.flash, 0.25); b.cb.near && b.cb.near(); }
        if (b.t >= n - 1) { b.sinking = true; b.passed = true; b.sx = x; b.sy = y; if (b.k === -1) b.cb.gate && b.cb.gate(b); else b.cb.land && b.cb.land(b); }
      } else {
        b.sink += dt * 4 * Math.max(1, S.rate / 1.8);
        const k = Math.min(1, b.sink), tx = b.k === -1 ? NB.GATE.x : NB.pocketX(b.k), ty = b.k === -1 ? NB.GATE.y + 4.5 : 137;
        b.mesh.position.set(W2(lerp(b.sx, tx, eOut(k))), H2(lerp(b.sy, ty, k * k)), 0); b.mesh.scale.setScalar(1 - k * 0.35); b.mesh.rotation.z = 0;
        if (k >= 1) { S.board.remove(b.mesh); b.mesh.material.dispose(); S.balls.splice(i, 1); }
      }
    }
  }

  /* ---------- effects: one pool of painted sprites ---------- */
  const Pond = {
    fish: [], boost: 0,
    build() {
      const geo = new T.PlaneGeometry(1, 356 / 1024, 32, 1);
      [{ mix: 0, alpha: 0.55, len: 1.9, per: 27, ph: 0, cy: 119.5, ax: 3.3, ay: 0.38 }, { mix: 1, alpha: 0.72, len: 1.6, per: 33, ph: 2.6, cy: 121, ax: 2.9, ay: 0.3 }].forEach(o => {
        const mat = new T.ShaderMaterial({ uniforms: { a: { value: S.tex.koiA }, b: { value: S.tex.koiB }, uT: { value: 0 }, uAmp: { value: 0.06 }, uFreq: { value: 4 }, uMix: { value: o.mix }, uAlpha: { value: o.alpha } },
          vertexShader: KOI_V, fragmentShader: KOI_F, transparent: true, depthTest: false, depthWrite: false });
        const m = new T.Mesh(geo, mat); m.renderOrder = 12; S.board.add(m);
        this.fish.push(Object.assign({ m, mat, t: o.ph * o.per / 6.283, face: 1, sw: 0 }, o));
      });
    },
    react(kind, on) { if (kind === 'win' || kind === 'big') this.boost = kind === 'big' ? 2.2 : 1.4; },
    gold: [],
    addGold() {
      if (this.gold.length >= 5 || !this.fish.length) return;
      const i = this.gold.length, geo = this.fish[0].m.geometry;
      const mat = new T.ShaderMaterial({ uniforms: { a: { value: S.tex.koiA }, b: { value: S.tex.koiB }, uT: { value: 0 }, uAmp: { value: 0.06 }, uFreq: { value: 5 }, uMix: { value: 1 }, uAlpha: { value: 0 } },
        vertexShader: KOI_V, fragmentShader: KOI_F, transparent: true, depthTest: false, depthWrite: false });
      const m = new T.Mesh(geo, mat); m.renderOrder = 13; S.board.add(m);
      const f = { m, mat, mix: 1, alpha: 0.85, len: 1.15 + (i % 2) * 0.25, per: 14 + i * 3, ph: i * 1.7 + 0.8, cy: 112 + (i % 3) * 4.5, ax: 2.4 + (i % 2) * 0.9, ay: 0.5, t: 0, face: 1, sw: 0, fade: 0, gold: true };
      this.fish.push(f); this.gold.push(f);
      const x = W2(50) + Math.sin(f.ph) * f.ax;
      fx('splash/d', x, H2(f.cy), 1.6, { world: true, life: 1.1, color: 0xc9a24a, opacity: 0.8, grow: 1.6, order: 14 });
    },
    clearGold() { for (const f of this.gold) f.leave = true; },
    step(dt) {
      this.boost = Math.max(0, this.boost - dt * 0.8);
      const fast = (S.feverOn ? 1.7 : 1) + this.boost;
      for (let i = this.fish.length - 1; i >= 0; i--) {
        const f = this.fish[i];
        if (f.gold) {
          f.fade = Math.max(0, Math.min(1, f.fade + dt * (f.leave ? -1.2 : 1.5)));
          f.mat.uniforms.uAlpha.value = f.alpha * f.fade;
          if (f.leave && f.fade <= 0) { S.board.remove(f.m); f.mat.dispose(); this.fish.splice(i, 1); this.gold.splice(this.gold.indexOf(f), 1); continue; }
        }
        f.t += dt * fast; f.sw += dt * fast * (1 + this.boost);
        const w = 6.283 / f.per, a = f.t * w + f.ph;
        const x = W2(50) + Math.sin(a) * f.ax, y = H2(f.cy) + Math.sin(a * 2) * f.ay;
        const vx = Math.cos(a) * f.ax * w, vy = Math.cos(a * 2) * 2 * f.ay * w;
        f.face = lerp(f.face, vx >= 0 ? 1 : -1, Math.min(1, dt * 2.4));            // the turn: the body narrows through edge-on
        const fc = Math.abs(f.face) < 0.1 ? 0.1 * Math.sign(f.face || 1) : f.face;
        f.m.position.set(x, y, 0);
        f.m.rotation.z = Math.atan2(vy, Math.abs(vx) + 1e-4) * 0.8 * Math.sign(fc);
        f.m.scale.set(f.len * fc, f.len, 1);
        f.mat.uniforms.uT.value = f.sw; f.mat.uniforms.uFreq.value = 4.2; f.mat.uniforms.uAmp.value = 0.05 + this.boost * 0.02;
        if (!f.gold) f.mat.uniforms.uMix.value = lerp(f.mat.uniforms.uMix.value, S.feverOn ? 1 : f.mix, Math.min(1, dt * 2));
      }
    }
  };
  function fx(key, fxp, fyp, size, o = {}) {
    if (!S.img[key]) return;
    const m = sprite(key, size, null, { order: o.order || 64, color: o.color, opacity: 0, add: o.add });
    m.position.set(o.world ? fxp : W2(fxp), o.world ? fyp : H2(fyp), 0); m.rotation.z = o.rot == null ? rand(0, 6.28) : o.rot;
    (o.parent || S.board).add(m);
    S.fx.push({ m, t: 0, life: o.life || 0.6, op: o.opacity == null ? 1 : o.opacity, grow: o.grow == null ? 0.5 : o.grow, vx: o.vx || 0, vy: o.vy || 0, g: o.g || 0, parent: o.parent || S.board, delay: o.delay || 0 });
  }
  function stepFx(dt) {
    for (let i = S.fx.length - 1; i >= 0; i--) {
      const p = S.fx[i];
      if (p.delay > 0) { p.delay -= dt; continue; }
      p.t += dt; const k = p.t / p.life;
      p.m.material.opacity = p.op * (k < 0.15 ? k / 0.15 : 1 - eInOut((k - 0.15) / 0.85));
      const s = 0.6 + eOut(Math.min(1, k * 1.6)) * (0.4 + p.grow); p.m.scale.set(s, s, 1);
      p.vy -= p.g * dt; p.m.position.x += p.vx * dt; p.m.position.y += p.vy * dt;
      if (k >= 1) { p.parent.remove(p.m); p.m.material.dispose(); p.m.geometry.dispose(); S.fx.splice(i, 1); }
    }
    for (const c of [...S.cups, S.gate]) {
      if (!c || !c.pulse) continue;
      c.pulse = Math.max(0, c.pulse - dt * 3); const s = 1 + Math.sin(c.pulse * Math.PI) * 0.12;
      c.back.scale.set(s, s, 1); c.front.scale.set(s, s, 1);
    }
  }

  /* ---------- reactions the game asks for ---------- */
  function landFx(k, tier, gold) {
    const c = S.cups[k]; c.pulse = 1;
    const col = new T.Color(gold ? CUP_COL.gold : CUP_COL[CUP[k]]).getHex();
    fx('wash/' + 'abcdef'[(Math.random() * 6) | 0], NB.pocketX(k), 132, 1.2 + tier * 0.5, { life: 0.9, color: col, opacity: 0.55, grow: 0.7, order: 26 });
    if (tier >= 2 || gold) fx('splash/' + 'acf'[(Math.random() * 3) | 0], NB.pocketX(k), 133, 1.0 + tier * 0.35, { life: 0.7, color: tier >= 4 || gold ? 0xc9a24a : 0x1b1a18, opacity: 0.85, order: 66 });
    if (tier >= 1) wash(NB.pocketX(k), 116 - tier * 6, 12 + tier * 9, 0.6 + tier * 0.15);
    if (tier >= 4) S.shake = Math.max(S.shake, 0.8);
  }
  function gateFx(gold) {
    S.gate.pulse = 1; Reels.flash = 0.6;
    fx('splash/c', NB.GATE.x, NB.GATE.y + 2, 1.8, { life: 0.6, color: gold ? 0xc9a24a : 0xc8372d, opacity: 0.85, order: 66 });
    wash(NB.GATE.x, 82, 16, 0.7);
  }
  function setInk(ink) {
    if (!CUPS[ink] || S.ink === ink) return;
    S.ink = ink; CUP = CUPS[ink];
    S.cups.forEach((c, k) => { const key = 'cups/' + CUP[k]; if (!S.tex[key]) S.tex[key] = texOf(S.img[key]); c.back.material.map = S.tex[key]; c.front.material.map = S.tex[key]; c.back.material.needsUpdate = c.front.material.needsUpdate = true; c.pulse = 1; });
    if (S.labelG) drawLabels();
    for (let i = 0; i < 6; i++) fx('splash/' + 'acf'[i % 3], rand(10, 90), 133, 1.1, { life: 0.8, color: ink === 'wild' ? 0xc8372d : 0x1b1a18, opacity: 0.6, order: 66, delay: i * 0.05 });
  }
  function setFever(on, m) {
    const changed = on !== S.feverOn || m !== S.feverM;
    S.feverOn = on; S.feverM = m; Reels.fever = on; Reels.mult = m;
    if (changed && S.labelG) drawLabels();
    Koi.react('fever', on);
  }

  /* ---------- layout ---------- */
  function layout(W, H, pad = 0) {
    S.W = W; S.H = H;
    const wide = W / H > 1.02, BW = 12.0, BH = 16.0, He = Math.max(40, H - pad);
    S.wide = wide;
    let s, top;
    if (wide) {
      const need = BW + 2 * 5.4;                       // the board, the koi's scroll on the left, the buy and counters on the right
      s = Math.min(He * 0.975 / BH, W * 0.985 / need);
      if (W / s < BW + 2 * 4.6) s = W * 0.985 / (BW + 2 * 4.6);
      top = He / 2 / s;                                 // the board's centre sits in the middle of the stage above the spin button
    } else {
      // tall: the board sits low, just over the bar; the space above it is the koi's (and the stamp's) strip
      s = Math.min(W * 0.995 / BW, He * 0.99 / BH);
      top = (He - 4) / s - BH / 2;
      S.koiStrip = top - BH / 2;
    }
    S.s = s;
    const vw = W / s, vh = H / s;
    S.cam.left = -vw / 2; S.cam.right = vw / 2; S.cam.top = top; S.cam.bottom = top - vh; S.cam.updateProjectionMatrix();
    S.R.setSize(W, H, false);
    S.side.visible = wide;
    if (wide) {
      const sx = -(BW / 2 + Math.max(2.7, Math.min(4.4, (vw / 2 - BW / 2) * 0.5)) + 0.3);
      S.side.position.set(sx, 0.1, 0); S.sideDim.x = sx;
      const scl = Math.min(1, ((vw / 2 - BW / 2) - 0.3) / (S.sideDim.w + 0.9));
      S.side.scale.setScalar(scl);
      const len = S.sideDim.h * 0.7 * scl;
      Koi.place({ x0: sx - 0.25 * scl, x1: sx + 0.25 * scl, y0: -S.sideDim.h * 0.17 * scl, y1: S.sideDim.h * 0.17 * scl }, len, true, 7);
    } else if (S.koiStrip > 2.2) {
      // the koi swims in the strip above the scroll, as big as the strip allows
      const top = S.cam.top, bot = BH / 2, hh = top - bot, len = Math.min(5.2, hh * 1.9, vw * 0.5);
      const yc = bot + hh * 0.52;
      Koi.place({ x0: -vw / 2 + len * 0.55, x1: vw / 2 - len * 0.55 - 1.2, y0: yc - hh * 0.08, y1: yc + hh * 0.08 }, len, false, 28);
    } else {
      Koi.place({ x0: W2(24), x1: W2(76), y0: H2(25), y1: H2(12) }, 2.3, false, 28);
    }
  }
  // world -> stage pixels
  function toPx(x, y) { return [(x - S.cam.left) * S.s, (S.cam.top - y) * S.s]; }

  /* ---------- frame loop ---------- */
  let last = performance.now(), raf = 0;
  function frame(now) {
    raf = 0;
    const raw = (now - last) / 1000, dt = Math.min(0.05, raw); last = now;
    // a weak device: after the first 150 frames, if it runs under ~40 fps, draw at 1x pixel ratio
    if (!S.tuned && raw < 0.5) { S.fr = (S.fr || 0) + 1; S.ft = (S.ft || 0) + raw; if (S.fr >= 150) { S.tuned = true; S.weak = S.ft / S.fr > 1 / 40; if (S.weak && S.R.getPixelRatio() > 1) { S.R.setPixelRatio(1); S.R.setSize(S.W, S.H, false); } } }
    step(dt);
    S.R.render(S.scene, S.cam);
    if (!document.hidden) raf = requestAnimationFrame(frame);
  }
  function step(dt) {
    S.t += dt;
    stepBalls(dt); stepFx(dt); stepPaper(dt); Reels.step(dt); Koi.step(dt); Pond.step(dt);
    S.fever = lerp(S.fever, S.feverOn ? 1 : 0, Math.min(1, dt * 1.5)); S.mats.paper.uniforms.fever.value = S.fever;
    // the seal breathes a little, and stamps on a gate hit
    const sp = 1 + Math.sin(S.t * 1.3) * 0.004 + (S.gate.pulse ? Math.sin(S.gate.pulse * Math.PI) * 0.03 : 0);
    S.seal.scale.set(sp, sp, 1);
    S.shake = Math.max(0, S.shake - dt * 2);
    const sh = S.shake && !S.reduced ? S.shake * 0.12 : 0;
    S.board.position.set((Math.random() - 0.5) * sh, (Math.random() - 0.5) * sh, 0);
    S.idleT += dt;
    if (S.idleT > 2.2 && !S.balls.length) {           // something always happens: a drip of ink lands somewhere on the paper
      S.idleT = rand(0, 1.2);
      const fxp = rand(12, 88), fyp = rand(20, 120);
      fx('splash/d', fxp, fyp, 0.9, { life: 1.8, color: 0x1b1a18, opacity: 0.3, grow: 1.4, order: 25 });
    }
    S.onFrame && S.onFrame(dt);
  }
  function kick() { if (!raf && !document.hidden && S.ready) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  document.addEventListener('visibilitychange', kick);
  // while the tab is hidden the round must still finish: the game calls this to move time forward
  function advance(dt) { step(dt); }

  /* ---------- build ---------- */
  const ART = ['board/painting', 'board/rod', 'board/seal', 'cups/clay', 'cups/ink', 'cups/indigo', 'cups/red', 'cups/redgold', 'cups/gold',
    'drops/ink', 'drops/gold', 'pins/a', 'pins/b', 'pins/c', 'gate/cup', 'gate/postL', 'gate/postR', 'enso/ink', 'enso/red', 'icons/minus',
    'koi/ink', 'koi/color', 'splash/a', 'splash/b', 'splash/c', 'splash/d', 'splash/e', 'splash/f',
    'wash/a', 'wash/b', 'wash/c', 'wash/d', 'wash/e', 'wash/f', 'digits/ink', 'digits/gold', 'ui/paper'];
  async function build(stage, artMeta, o = {}) {
    S.reduced = !!o.reduced;
    S.img = await loadAll(ART);
    Dig.make('ink', S.img['digits/ink'], artMeta.digits_ink);
    Dig.make('gold', S.img['digits/gold'], artMeta.digits_gold);
    Dig.make('red', S.img['digits/ink'], artMeta.digits_ink, '#c8372d');
    Dig.make('indigo', S.img['digits/ink'], artMeta.digits_ink, '#2d4a7a');
    Dig.make('clay', S.img['digits/ink'], artMeta.digits_ink, '#8d8273');
    S.R = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    S.R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    S.R.setClearColor(0x000000, 0);
    S.el = S.R.domElement; S.el.className = 'sk-canvas';
    stage.prepend(S.el);
    S.scene = new T.Scene();
    S.cam = new T.OrthographicCamera(-1, 1, 1, -1, -10, 10);
    S.board = new T.Group(); S.scene.add(S.board);
    buildSide(); buildPaper(); buildFrame(); Koi.build(); Pond.build();
    // decode every painted picture now (drawn once into a tiny canvas), so its first use in a round does not stall a frame
    { const c = document.createElement('canvas'); c.width = c.height = 2; const g = c.getContext('2d'); for (const im of Object.values(S.img)) { try { if (im && im.width) g.drawImage(im, 0, 0, 2, 2); } catch (e) { /* ignore */ } } }
    drawLabels(); Reels.draw();
    S.lib = NB.library(Math.random);
    S.ready = true;
    kick();
  }

  window.SK = {
    S, Dig, Reels, Koi, Pond, build, layout, toPx, kick, advance, launch, landFx, gateFx, setFever, setInk, wash, fx, drawLabels, fmtV, CUP_COL, W2, H2, get CUP() { return CUP; },
    clearRound() {
      for (const b of S.balls) { S.board.remove(b.mesh); b.mesh.material.dispose(); } S.balls.length = 0;
      S.fade = 0.06; setTimeout(() => { S.fade = 0; }, 900);       // last round's colour drains back to ink
    },
    // the gold cup of an ink event: its value shown x m in gold (k = -1 clears it)
    setCupMult(k, m) { S.cupMult = k >= 0 ? { k, m } : null; drawLabels(); },
    feverWash() { for (let i = 0; i < 8; i++) wash(rand(10, 90), rand(15, 125), 40, 1.2); },
    rect(name) {
      if (name === 'board') { const [x0, y0] = toPx(-6, 8.1), [x1, y1] = toPx(6, -8.1); return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; }
      if (name === 'koi') { const r = Koi.rect(); if (!r) return null; const [x0, y0] = toPx(r.x - r.w / 2, r.y + r.h / 2), [x1, y1] = toPx(r.x + r.w / 2, r.y - r.h / 2); return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; }
      if (name === 'sidepaper' && S.side.visible) { const s = S.side.scale.x, x = S.side.position.x, y = S.side.position.y, [x0, y0] = toPx(x - S.sideDim.w / 2 * s, y + S.sideDim.h / 2 * s), [x1, y1] = toPx(x + S.sideDim.w / 2 * s, y - S.sideDim.h / 2 * s); return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; }
      if (name === 'side') { const [x0, y0] = toPx(-6, 8.1); return { x: x0, y: y0 }; }
      if (name === 'right') { const [x1, y0] = toPx(6, 8.1); const [, y1] = toPx(0, -8.1); return { x: x1, y: y0, w: S.W - x1, h: y1 - y0 }; }
      if (name === 'launcher') { const th = 0.16, A = NB.ARC; const [x, y] = toPx(W2(A.cx + Math.cos(th) * A.r), H2(A.cy - Math.sin(th) * A.r)); return { x, y }; }
      if (name && name.field) { const [fx0, fy0, fx1, fy1] = name.field, [x0, y0] = toPx(W2(fx0), H2(fy0)), [x1, y1] = toPx(W2(fx1), H2(fy1)); return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; }
      if (name && name.cup != null) { const [x, y] = toPx(W2(NB.pocketX(name.cup)), H2(134)), d = Math.abs(toPx(W2(NB.pocketX(1)), H2(134))[0] - toPx(W2(NB.pocketX(0)), H2(134))[0]); return { x, y, w: d, h: d }; }
      if (name === 'seal') { const [x0, y0] = toPx(W2(SEAL.x0), H2(SEAL.top)), [x1, y1] = toPx(W2(SEAL.x0 + SEAL.w), H2(SEAL.top + SEAL.h)); return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; }
      return null;
    }
  };
})();
