/* Going Viral: character motion (PixiJS v8.23, trimmed build vendor/pixi-gv.min.js, see tools/pixi-bundle).
 * The characters on the board are drawn by one transparent WebGL layer over the grid instead of <img> clips.
 * Each character is an LZ Rig (vendor/lz-rig.js, data rigs.js from tools/make-rigs.mjs): a skinned mesh per pose,
 * soft-weighted bones for arms and props, a heartbeat bulge, a flame wave; it squashes, stretches and leans about its feet.
 * Particles, glow, rays and gloss are per character and stay in this file.
 * game.js keeps the old <img> path as the fallback (no WebGL, reduced motion, hidden tab).
 * API (window.GVMotion): init({ grid, speed }), show(i, key, cellEl, imgEl, celebrateMs), celebrate(i), hop(i),
 * hero(key), impact(cellEl, color, tier), clear(). `ready` is true once the layer is up. */
(() => {
  'use strict';
  const KEYS = ['heart', 'fire', 'rocket', 'crown', 'live'];
  const TEX_PX = 320;            // character art is 320 x 320
  const FIT = 0.9, LIFT = 0.03;  // a little smaller and higher than the old <img>, so the value tag under the tile stays readable

  /* ---------- helpers ---------- */
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ramp = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const outCubic = t => 1 - Math.pow(1 - t, 3);
  const inQuad = t => t * t;
  const outBack = t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
  const inBack = t => { const c1 = 1.70158, c3 = c1 + 1; return c3 * t * t * t - c1 * t * t; };
  const kick = (x, w = 60) => x <= 0 ? 0 : (x / w) * Math.exp(1 - x / w);     // 0 -> 1 at w ms -> 0: a muscle twitch
  function rng(seed) {
    let a = seed >>> 0;
    return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }

  /* ---------- the five characters ----------
     Used here: tier, glow, ray, anchor, burst, amb (and jewels / wifi / exhaust for the ambient life).
     NOT used at run time any more: rig / win / idle are the v2.7 hand-written motion, kept as the readable source of
     tools/make-rigs.mjs, which turns them into the LZ Rig data in rigs.js. Change motion there, then run it. */
  const SYM = {
    heart: {
      tier: 1, glow: '#ff3d9e', ray: 0xffd6ee, anchor: [0.5, 0.88], burst: 'hearts', amb: 'beatHeart', bulge: { c: [0.48, 0.5], r: 0.36 },
      rig: {
        base: { L: { p: [0.21, 0.60], box: [-0.2, 0.26, 0.55, 1.2], f: 0.05 }, R: { p: [0.78, 0.62], box: [0.795, 1.2, -0.2, 0.65], f: 0.035 } },
        win: { L: { p: [0.27, 0.47], box: [-0.2, 0.275, -0.2, 0.49], f: 0.055 }, R: { p: [0.73, 0.47], box: [0.725, 1.2, -0.2, 0.49], f: 0.055 } },
      },
      win(k, pump, o) { o.b.L = { rot: -0.15 * pump }; o.b.R = { rot: 0.15 * pump }; },
      idle(x, t, i, o) {
        const tb = (x + i * 97) % 1500; o.beat = kick(tb) + 0.7 * kick(tb - 190);
        o.bulge = 0.09 * o.beat; o.sx *= 1 + 0.025 * o.beat; o.sy *= 1 + 0.045 * o.beat;
        o.b.R = { rot: 0.08 * Math.sin(t / 430 + i) - 0.14 * kick(tb - 70) };
        o.b.L = { rot: 0.035 * Math.sin(t / 610 + i * 2) };
        o.lean = 0.03 * Math.sin(t / 1250 + i);
      },
    },
    fire: {
      tier: 2, glow: '#ff7a1a', ray: 0xffe2b0, anchor: [0.5, 0.93], burst: 'embers', amb: 'embers', bulge: { c: [0.48, 0.62], r: 0.4 }, wave: true,
      rig: {
        base: { L: { p: [0.24, 0.64], box: [-0.2, 0.27, 0.66, 1.2], f: 0.04 }, R: { p: [0.8, 0.5], box: [0.72, 1.2, -0.2, 0.47], f: 0.035 }, tip: { p: [0.5, 0.38], box: [0.3, 0.7, -0.2, 0.26], f: 0.08 } },
        win: { L: { p: [0.22, 0.55], box: [-0.2, 0.2, -0.2, 0.5], f: 0.04 }, R: { p: [0.78, 0.55], box: [0.8, 1.2, -0.2, 0.5], f: 0.04 }, tip: { p: [0.5, 0.36], box: [0.3, 0.7, -0.2, 0.24], f: 0.08 } },
      },
      win(k, pump, o) { o.b.L = { rot: -0.17 * pump }; o.b.R = { rot: 0.17 * pump }; o.b.tip = { rot: 0.16 * Math.sin(k / 90) }; o.wave = 6; },
      idle(x, t, i, o) {
        const fl = kick((x + i * 211) % 1800 - 300, 130);          // a bicep flex now and then
        o.b.R = { rot: -0.5 * fl, sc: 1 + 0.12 * fl }; o.lean += 0.05 * fl;
        o.b.L = { rot: 0.04 * Math.sin(t / 520 + i) };
        o.b.tip = { rot: 0.07 * Math.sin(t / 260 + i) + 0.04 * Math.sin(t / 170 + 1) };
        o.wave = 4.5; o.sy *= 1 + 0.02 * Math.sin(t / 80 + i) * Math.sin(t / 233); o.beat = 0.5 * fl + 0.15 * (1 + Math.sin(t / 97));
      },
    },
    rocket: {
      tier: 3, glow: '#3ff0ff', ray: 0xc8fbff, anchor: [0.5, 0.62], burst: 'smoke', amb: 'exhaust', launch: true, exhaust: [0.24, 0.88],
      rig: {
        base: { R: { p: [0.66, 0.47], box: [0.67, 1.2, -0.2, 0.45], f: 0.04 }, ex: { p: [0.3, 0.74], box: [-0.2, 0.42, 0.74, 1.2], f: 0.05 } },
        win: { L: { p: [0.33, 0.38], box: [-0.2, 0.36, -0.2, 0.3], f: 0.04 }, R: { p: [0.74, 0.45], box: [0.78, 1.2, -0.2, 0.42], f: 0.04 }, ex: { p: [0.5, 0.8], box: [0.1, 0.9, 0.81, 1.2], f: 0.05 } },
      },
      win(k, pump, o) { o.b.L = { rot: -0.2 * pump }; o.b.R = { rot: 0.18 * pump }; o.b.ex = { sc: 1.12 + 0.14 * Math.sin(k / 38) }; },
      idle(x, t, i, o) {
        o.ty += -0.035 * Math.sin(t / 600 + i); o.lean = 0.06 * Math.sin(t / 900 + i);
        o.b.ex = { sc: 1 + 0.14 * Math.sin(t / 40) * Math.sin(t / 67 + i) };
        o.b.R = { rot: 0.12 * Math.sin(t / 330 + i) };
        o.beat = 0.2 * (1 + Math.sin(t / 600 + i));
      },
    },
    crown: {
      tier: 4, glow: '#ffc21a', ray: 0xfff0b0, anchor: [0.5, 0.9], burst: 'coins', amb: 'twinkle',
      jewels: [[0.1, 0.33], [0.27, 0.21], [0.5, 0.1], [0.72, 0.21], [0.89, 0.33]],
      rig: {
        base: { L: { p: [0.15, 0.68], box: [-0.2, 0.16, 0.62, 0.95], f: 0.04 }, R: { p: [0.74, 0.66], box: [0.76, 1.2, 0.45, 0.78], f: 0.04 } },
        win: { L: { p: [0.2, 0.62], box: [-0.2, 0.18, 0.45, 0.75], f: 0.04 }, R: { p: [0.8, 0.62], box: [0.82, 1.2, 0.45, 0.75], f: 0.04 } },
      },
      win(k, pump, o) { o.b.L = { rot: 0.16 * pump }; o.b.R = { rot: -0.16 * pump }; },
      idle(x, t, i, o) {
        o.lean = 0.022 * Math.sin(t / 1100 + i);
        o.b.R = { rot: 0.1 * Math.sin(t / 700 + i) };
        o.b.L = { rot: 0.03 * Math.sin(t / 800 + i) };
        o.sy *= 1 + 0.012 * Math.sin(t / 700 + i); o.beat = 0.25 * (1 + Math.sin(t / 500 + i));
      },
    },
    live: {
      tier: 5, glow: '#ff2a4a', ray: 0xffd0d8, anchor: [0.5, 0.95], burst: 'confetti', amb: 'signal', wifi: [0.8, 0.25],
      rig: {
        base: { L: { p: [0.2, 0.75], box: [-0.2, 0.22, 0.74, 1.2], f: 0.04 }, R: { p: [0.72, 0.66], box: [0.71, 1.2, 0.28, 0.66], f: 0.03 }, wifi: { p: [0.75, 0.3], box: [0.74, 1.2, -0.2, 0.28], f: 0.03 }, sign: { p: [0.4, 0.22], box: [0.04, 0.74, -0.2, 0.23], f: 0.03 } },
        win: { L: { p: [0.21, 0.62], box: [-0.2, 0.19, 0.3, 0.58], f: 0.04 }, R: { p: [0.79, 0.55], box: [0.8, 1.2, 0.18, 0.52], f: 0.04 }, wifi: { p: [0.82, 0.2], box: [0.8, 1.2, -0.2, 0.18], f: 0.03 }, sign: { p: [0.5, 0.24], box: [0.18, 0.8, -0.2, 0.25], f: 0.03 } },
      },
      win(k, pump, o) { const a = Math.abs(pump); o.b.L = { rot: -0.2 * pump }; o.b.R = { rot: 0.14 * pump }; o.b.wifi = { sc: 1 + 0.18 * a }; o.b.sign = { sc: 1 + 0.07 * a }; },
      idle(x, t, i, o) {
        const tb = x % 1000; o.beat = kick(tb);
        o.b.sign = { sc: 1 + 0.07 * o.beat };
        o.b.wifi = { sc: 1 + 0.13 * kick(tb - 120) };
        o.b.R = { rot: 0.08 * Math.sin(t / 320 + i) };
        o.b.L = { rot: 0.03 * Math.sin(t / 700 + i) };
        o.lean = 0.02 * Math.sin(t / 900 + i);
      },
    },
  };

  const M = { ready: false };
  let PX = null, app = null, layer = null, fxLayer = null, gridEl = null, speedFn = () => 1, wall = 0, hero = null, layerTint = 0xffffff;
  const T = {}, chars = new Map();

  /* ---------- textures ---------- */
  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  async function loadImages() {
    const names = [['coin', 'assets/coin.webp']];
    KEYS.forEach(k => names.push([k, `assets/${k}.webp`], [k + 'Blink', `assets/${k}-blink.webp`], [k + 'Win', `assets/${k}-win.webp`]));
    // WebGL refuses images from file:// pages, so the offline demo reads the same art from data URIs.
    let art = null;
    // The data-URI copy lives beside the package (../offline), so it never ships to Stake.
    if (location.protocol === 'file:') { await loadScript('../offline/motion-art.js').catch(() => {}); art = window.GV_ART || null; }
    const list = await Promise.all(names.map(([k, url]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => res([k, i]); i.onerror = rej; i.src = art ? art[k] : url; })));
    return Object.fromEntries(list);
  }
  function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); return PX.Texture.from(c); }
  function makeTextures(imgs) {
    T.coin = PX.Texture.from(imgs.coin);
    for (const k of KEYS) {
      T[k] = { base: PX.Texture.from(imgs[k]), blink: PX.Texture.from(imgs[k + 'Blink']), win: PX.Texture.from(imgs[k + 'Win']) };
      T[k].glow = canvasTex(210, 210, g => { g.filter = 'blur(9px)'; g.drawImage(imgs[k], 25, 25, 160, 160); g.filter = 'none'; g.globalCompositeOperation = 'source-in'; g.fillStyle = SYM[k].glow; g.fillRect(0, 0, 210, 210); });
    }
    T.rays = canvasTex(256, 256, g => {
      g.translate(128, 128);
      const n = 14, grad = g.createRadialGradient(0, 0, 0, 0, 0, 128);
      grad.addColorStop(0, 'rgba(255,255,255,.95)'); grad.addColorStop(0.35, 'rgba(255,255,255,.45)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grad;
      for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, w = Math.PI / n * (i % 2 ? 0.35 : 0.6); g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, 128, a - w, a + w); g.closePath(); g.fill(); }
    });
    T.spark = canvasTex(48, 48, g => {
      g.translate(24, 24);
      const halo = g.createRadialGradient(0, 0, 0, 0, 0, 24);
      halo.addColorStop(0, 'rgba(255,255,255,1)'); halo.addColorStop(0.22, 'rgba(255,255,255,.55)'); halo.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = halo; g.fillRect(-24, -24, 48, 48);
      g.fillStyle = '#fff';
      for (const r of [0, Math.PI / 2]) { g.save(); g.rotate(r); g.beginPath(); g.moveTo(-23, 0); g.quadraticCurveTo(0, -2.4, 23, 0); g.quadraticCurveTo(0, 2.4, -23, 0); g.fill(); g.restore(); }
    });
    T.mini = canvasTex(48, 48, g => {
      const s = 18; g.translate(24, 22);
      const path = () => { g.beginPath(); g.moveTo(0, s * 0.95); g.bezierCurveTo(-s * 1.25, s * 0.1, -s * 0.62, -s * 1.0, 0, -s * 0.38); g.bezierCurveTo(s * 0.62, -s * 1.0, s * 1.25, s * 0.1, 0, s * 0.95); g.closePath(); };
      path(); g.lineWidth = 5; g.strokeStyle = '#ffe14d'; g.stroke();
      const f = g.createLinearGradient(0, -s, 0, s); f.addColorStop(0, '#ff8fcf'); f.addColorStop(1, '#e3127a');
      path(); g.fillStyle = f; g.fill();
      g.fillStyle = 'rgba(255,255,255,.75)'; g.beginPath(); g.ellipse(-s * 0.42, -s * 0.38, s * 0.2, s * 0.12, -0.6, 0, Math.PI * 2); g.fill();
    });
    T.dot = canvasTex(32, 32, g => { const r = g.createRadialGradient(16, 16, 0, 16, 16, 16); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 32, 32); });
    T.puff = canvasTex(64, 64, g => {
      const r = rng(5);
      for (let i = 0; i < 7; i++) { const x = 20 + r() * 24, y = 20 + r() * 24, s = 11 + r() * 11; const gr = g.createRadialGradient(x, y, 0, x, y, s); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }
    });
    T.confetti = canvasTex(12, 20, g => { g.fillStyle = '#fff'; g.beginPath(); g.roundRect(1, 1, 10, 18, 2); g.fill(); });
    T.sheen = canvasTex(64, 128, g => { const l = g.createLinearGradient(0, 0, 64, 0); l.addColorStop(0, 'rgba(255,255,255,0)'); l.addColorStop(0.5, 'rgba(255,255,255,.6)'); l.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = l; g.fillRect(0, 0, 64, 128); });
    // A soft shockwave ring and a stretched streak, for the impact when a tile opens.
    T.ring = canvasTex(128, 128, g => { const r = g.createRadialGradient(64, 64, 40, 64, 64, 63); r.addColorStop(0, 'rgba(255,255,255,0)'); r.addColorStop(0.55, 'rgba(255,255,255,1)'); r.addColorStop(0.75, 'rgba(255,255,255,.55)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128); });
    T.streak = canvasTex(64, 16, g => { const l = g.createLinearGradient(0, 0, 64, 0); l.addColorStop(0, 'rgba(255,255,255,0)'); l.addColorStop(0.75, 'rgba(255,255,255,.9)'); l.addColorStop(1, 'rgba(255,255,255,1)'); g.fillStyle = l; g.beginPath(); g.moveTo(0, 8); g.quadraticCurveTo(40, 1, 64, 8); g.quadraticCurveTo(40, 15, 0, 8); g.fill(); });
  }
  const BURST = () => ({ hearts: T.mini, embers: T.dot, smoke: T.puff, coins: T.coin, confetti: T.confetti });
  const BURST_BLEND = { hearts: 'normal', embers: 'add', smoke: 'normal', coins: 'normal', confetti: 'normal' };

  /* ---------- one character ----------
     The character itself is an LZ Rig (vendor/lz-rig.js, data in rigs.js built by tools/make-rigs.mjs): one skinned
     mesh per pose image, soft-weighted bones for arms and props, the heartbeat bulge, the flame wave.
     Tracks: 0 = body life (win pump, then idle), 1 = the pop (appear, settle), 2 = blink, 3 = hop.
     Glow, rays, gloss, particles and ambient life stay here and read the rig (pop/body bones, the 'glow' channel). */
  class Char {
    constructor(key, idx, big) {
      this.idx = idx; this.big = big; this.grid = big ? 24 : 10; this.key = null; this.rigs = {};   // 10 x 10 = 100 vertices: PixiJS batches the board into one draw
      const root = this.root = new PX.Container();
      this.rays = big ? new PX.Sprite(T.rays) : null;
      if (this.rays) { this.rays.anchor.set(0.5); this.rays.blendMode = 'add'; root.addChild(this.rays); }
      this.glow = new PX.Sprite(T.heart.glow); this.glow.anchor.set(0.5); this.glow.blendMode = 'add';
      this.back = new PX.Container();
      this.box = new PX.Container();
      if (big) {     // the big hero gets a gloss sweep, masked to the character
        this.shineBox = new PX.Container();
        this.shineMask = new PX.Sprite(T.heart.win); this.shineMask.width = this.shineMask.height = TEX_PX;
        this.shine = new PX.Sprite(T.sheen); this.shine.anchor.set(0.5); this.shine.width = TEX_PX * 0.32; this.shine.height = TEX_PX * 1.6; this.shine.rotation = 0.42; this.shine.blendMode = 'add';
        this.shineBox.addChild(this.shineMask, this.shine); this.shine.mask = this.shineMask;
        this.box.addChild(this.shineBox);
      }
      this.fx = new PX.Graphics();
      this.front = new PX.Container();
      root.addChild(this.glow, this.back, this.box, this.fx, this.front);
      this.pool = { burst: this.sprites(big ? 18 : 9, this.back), amb: this.sprites(3, this.back) };
      this.hopSeen = -1e9; this.hop0 = -1e9; this.last = wall; this.phase = 3;
      this.setKey(key);
      layer.addChild(root);
    }
    sprites(n, into) { return Array.from({ length: n }, () => { const s = new PX.Sprite(T.dot); s.anchor.set(0.5); s.visible = false; into.addChild(s); return s; }); }
    setKey(key) {
      if (key === this.key) return;
      this.key = key; const d = this.def = SYM[key];
      if (this.rig) this.box.removeChild(this.rig.view);
      if (!this.rigs[key]) this.rigs[key] = new LZRig(PX, window.GV_RIGS[key], T[key], { grid: this.grid, seed: this.idx * 7919 + 13 });
      this.rig = this.rigs[key];
      this.box.addChildAt(this.rig.view, 0);
      this.glow.texture = T[key].glow;
      if (this.rays) this.rays.tint = d.ray;
      const bt = BURST()[d.burst];
      for (const s of this.pool.burst) { s.texture = bt; s.blendMode = BURST_BLEND[d.burst]; }
      const at = { beatHeart: T.mini, embers: T.dot, exhaust: T.puff, twinkle: T.spark, signal: T.dot }[d.amb];
      for (const s of this.pool.amb) { s.texture = at; s.blendMode = d.amb === 'beatHeart' || d.amb === 'exhaust' ? 'normal' : 'add'; }
      if (this.shineMask) this.shineMask.position.set(-d.anchor[0] * TEX_PX, -d.anchor[1] * TEX_PX);
    }
    place(cx, cy, S) {
      this.S = S; this.cs = S / TEX_PX;
      this.root.position.set(cx, cy);
      this.box.scale.set(this.cs);
      this.box.y = (this.def.anchor[1] - 0.5) * S;
    }
    // A tile opened: pop in, celebrate for celebrateMs, settle into the idle life.
    start(k, celebrateMs) {
      this.t0 = wall; this.b0 = wall; this.k = k; this.hop0 = this.hopSeen = -1e9; this.last = wall;
      this.winEnd = 250 + clamp(celebrateMs * 1.4, 500, 1200);
      this.begin(0);
      this.reseed();
    }
    // Celebrate again (the round's win): the end of the pop, then the pump.
    celebrate(k) { this.t0 = wall - 200 / k; this.k = k; this.b0 = -1e9; this.winEnd = 1250; this.last = wall; this.begin(0.2); }
    begin(from) {
      const r = this.rig;
      r.timeScale = this.k; this.phase = 0; this.idle0 = -1;
      r.stop(0, 0); r.stop(2, 0); r.stop(3, 0);
      r.play('appear', { track: 1, mix: 0, start: from });
      r.update(0);
    }
    reseed() {
      const r = rng(Math.floor(wall) * 7 + this.idx * 104729 + 17), S = this.S;
      const kinds = {
        hearts: () => ({ a: -Math.PI / 2 + (r() - 0.5) * 3.0, v: S * (1.6 + r() * 1.8), g: S * 2.6, r0: S * 0.22, life: 950 + r() * 500, delay: r() * 70, size: S * (0.13 + r() * 0.1), spin: (r() - 0.5) * 7, rot0: (r() - 0.5) * 0.8 }),
        embers: () => ({ a: -Math.PI / 2 + (r() - 0.5) * 2.6, v: S * (0.9 + r() * 1.6), g: -S * 0.9, r0: S * 0.2, life: 800 + r() * 700, delay: r() * 120, size: S * (0.08 + r() * 0.08), ph: r() * 6.28, tint: [0xffd23f, 0xff8a1f, 0xff4a1a, 0xfff2a6][Math.floor(r() * 4)] }),
        smoke: () => ({ a: Math.PI / 2 + (r() - 0.5) * 2.4, v: S * (0.7 + r() * 1.0), g: -S * 0.35, r0: S * 0.05, y0: S * 0.32, life: 650 + r() * 450, delay: r() * 100, size: S * (0.16 + r() * 0.12), rot0: r() * 6.28, spin: (r() - 0.5) * 2, tint: [0xffffff, 0xffe6f5, 0xd9fbff][Math.floor(r() * 3)] }),
        coins: () => ({ a: -Math.PI / 2 + (r() - 0.5) * 2.2, v: S * (2.0 + r() * 1.6), g: S * 3.4, r0: S * 0.15, life: 1000 + r() * 400, delay: r() * 90, size: S * (0.16 + r() * 0.07), ph: r() * 6.28, spin: 14 + r() * 10, rot0: (r() - 0.5) * 0.6 }),
        confetti: () => ({ a: -Math.PI / 2 + (r() - 0.5) * 2.8, v: S * (1.9 + r() * 1.8), g: S * 1.5, r0: S * 0.2, life: 1300 + r() * 600, delay: r() * 80, size: S * (0.09 + r() * 0.04), ph: r() * 6.28, spin: (r() - 0.5) * 9, rot0: r() * 6.28, tint: [0xff4fa8, 0x3ff0ff, 0xffe14d, 0xffffff, 0x9b5cff][Math.floor(r() * 5)] }),
      };
      this.P = { burst: this.pool.burst.map(kinds[this.def.burst]), amb: Array.from({ length: 12 }, () => ({ x: r() - 0.5, y: r(), ph: r() * 6.28 })) };
    }
    pt(u, v) { const [ax, ay] = this.def.anchor; return [(u - ax) * this.S, this.box.y + (v - ay) * this.S]; }

    update() {
      const d = this.def, S = this.S, k = this.k, ct = (wall - this.t0) * k, W = this.winEnd, r = this.rig;
      const dt = Math.max(0, Math.min(0.1, (wall - this.last) / 1000)); this.last = wall;
      // The timeline: celebrate from 250 ms, settle (a squash) at the end, then the idle life.
      // The win drawing (arms up) and the base drawing crossfade over 70 ms centred on the squash peak (W+80),
      // so the arms change while the body is squashed instead of popping in one frame. Longer fades read as ghosting
      // (checked frame by frame with tools/motion-compare.mjs: 120 ms showed a double image for 7 frames).
      if (this.phase === 0 && ct >= 250) { this.phase = 1; r.play('win', { track: 0, mix: 0 }); }
      if (this.phase === 1 && ct >= W) { this.phase = 2; r.play('settle', { track: 1, mix: 0 }); }
      if (this.phase === 2 && ct >= W + 45) {
        this.phase = 3; this.idle0 = wall; r.timeScale = 1;
        r.play('idle', { track: 0, mix: 0.1, fadeSwap: 0.07, start: ((this.idx * 0.377) % 1) * r.anim('idle').duration });   // board characters do not breathe in step
      }
      if (this.hop0 > this.hopSeen) { this.hopSeen = this.hop0; r.play('hop', { track: 3, mix: 0 }); }
      r.update(dt);
      const shrink = this.endAt ? Math.max(0, 1 - inBack(clamp((wall - (this.endAt - 240)) / 240))) : 1;
      this.box.scale.set(this.cs * shrink);

      const pop = r.bone('pop'), body = r.bone('body');
      const o = { sx: body.scaleX * shrink, sy: body.scaleY * shrink, ty: pop.y / TEX_PX, lean: body.rotation * Math.PI / 180, beat: r.value('glow') };
      const x = this.phase === 3 ? wall - this.idle0 : -1;
      if (this.shineBox) {
        const tex = T[this.key][r.slotState[0].attachment] || T[this.key].win;
        if (this.shineMask.texture !== tex) this.shineMask.texture = tex;
        this.shineBox.scale.set(body.scaleX, body.scaleY); this.shineBox.rotation = o.lean; this.shineBox.y = pop.y;
      }

      let glowA = ct < 150 ? ct / 150 * 0.9 : lerp(0.9, 0.3, clamp((ct - 150) / 750));
      glowA += o.beat * 0.25;
      if (this.endAt) glowA *= 1 - clamp((wall - (this.endAt - 240)) / 240);
      const gs = Math.max(0, (o.sx + o.sy) / 2);
      this.glow.alpha = clamp(glowA);
      this.glow.scale.set(this.cs * 2 * gs * (1 + 0.05 * o.beat));          // glow texture is half the art's resolution
      this.glow.position.set(0, this.box.y + (0.5 - d.anchor[1]) * S * o.sy + o.ty * S);
      if (this.rays) {
        const ra = (ct < 200 ? ct / 200 : 1 - clamp((ct - 600) / 600)) * 0.6 * (this.endAt ? 1 - clamp((wall - (this.endAt - 300)) / 300) : 1);
        this.rays.visible = ra > 0.001; this.rays.alpha = clamp(ra); this.rays.rotation = wall * 0.0006;
        this.rays.width = this.rays.height = S * 2.1 * (0.6 + 0.4 * outCubic(clamp(ct / 300)));
      }
      if (this.shine) {
        const sx2 = x < 0 ? (ct - 300) / 650 : ((x + this.idx * 700) % 3000) / 650;
        this.shine.x = lerp(-0.75, 0.75, clamp(sx2)) * TEX_PX; this.shine.y = -TEX_PX * 0.45;
        this.shine.alpha = sx2 >= 0 && sx2 < 1 ? 0.75 * Math.sin(Math.PI * clamp(sx2)) : 0;
      }
      const bt = (wall - this.b0) * k;
      if (bt < 2100 || this.burstOn) this.burst(bt);
      this.ambient(x, o);
    }

    burst(ct) {
      const kind = this.def.burst, S = this.S;
      this.burstOn = ct < 2100;
      this.pool.burst.forEach((s, i) => {
        const p = this.P.burst[i], t = ct - p.delay;
        if (t < 0 || t > p.life) { s.visible = false; return; }
        const ts = t / 1000, life = t / p.life;
        const drag = kind === 'confetti' ? 3.2 : kind === 'smoke' ? 3 : 2.2, dr = (1 - Math.exp(-drag * ts)) / drag;
        s.visible = true;
        let px = Math.cos(p.a) * (p.r0 + p.v * dr);
        const py = (p.y0 !== undefined ? p.y0 : -S * 0.15) + Math.sin(p.a) * (p.r0 + p.v * dr) + 0.5 * p.g * ts * ts;
        if (kind === 'confetti') px += Math.sin(t / 160 + p.ph) * S * 0.05;
        s.position.set(px, py);
        const fade = 1 - ramp(0.7, 1, life);
        if (kind === 'hearts') { const sc = outBack(clamp(t / 110)) * (1 - ramp(0.65, 1, life)); s.width = s.height = p.size * sc; s.rotation = p.rot0 + p.spin * ts; s.alpha = fade; s.tint = 0xffffff; }
        else if (kind === 'embers') { s.tint = p.tint; s.width = s.height = p.size * (1 - 0.5 * life) * outCubic(clamp(t / 80)); s.alpha = fade * (0.65 + 0.35 * Math.sin(t * 0.06 + p.ph)); }
        else if (kind === 'smoke') { s.tint = p.tint; s.width = s.height = p.size * (0.5 + 1.3 * outCubic(life)); s.rotation = p.rot0 + p.spin * ts; s.alpha = 0.7 * (1 - outCubic(life)); }
        else if (kind === 'coins') { s.tint = 0xffffff; s.width = p.size * Math.max(0.12, Math.abs(Math.cos(p.ph + p.spin * ts))); s.height = p.size * outBack(clamp(t / 100)); s.rotation = p.rot0; s.alpha = fade; }
        else { s.tint = p.tint; s.width = p.size * 0.55; s.height = p.size * Math.max(0.15, Math.abs(Math.cos(p.ph + t / 120))); s.rotation = p.rot0 + p.spin * ts; s.alpha = fade; }
      });
    }

    // Life around a character after its celebration: a floating heart, embers, exhaust, a jewel glint, signal waves.
    ambient(x, o) {
      const pool = this.pool.amb, S = this.S, d = this.def, A2 = this.P.amb;
      pool.forEach(s => { s.visible = false; });
      if (this.fxUsed) { this.fx.clear(); this.fxUsed = false; }
      if (x < 0 || this.endAt) return;
      if (d.amb === 'beatHeart') {
        const s = pool[0], xx = x + this.idx * 97, k = Math.floor(xx / 1500), tt = xx % 1500;
        if (k % 2 || tt > 1400) return;
        const life = tt / 1400;
        s.visible = true; s.tint = 0xffffff;
        s.position.set(A2[k % 12].x * S * 0.5 + Math.sin(tt / 220) * S * 0.04, -S * 0.5 - S * 0.4 * outCubic(life));
        s.width = s.height = S * 0.14 * outBack(clamp(tt / 200)); s.alpha = 1 - ramp(0.55, 1, life); s.rotation = Math.sin(tt / 300) * 0.25;
      } else if (d.amb === 'embers') {
        pool.slice(0, 2).forEach((s, j) => {
          const per = 1100, xx = x + j * 550 + this.idx * 131, tt = xx % per, q = A2[(Math.floor(xx / per) * 2 + j) % 12], life = tt / per;
          s.visible = true; s.tint = j ? 0xffd23f : 0xff8a1f;
          s.position.set(q.x * S * 0.45 + Math.sin(tt / 180 + q.ph) * S * 0.05, -S * 0.38 - S * 0.45 * life);
          s.width = s.height = S * (0.07 + 0.04 * q.y) * (1 - life); s.alpha = (1 - life) * (0.6 + 0.4 * Math.sin(tt / 40 + q.ph));
        });
      } else if (d.amb === 'exhaust') {
        const [ex, ey] = this.pt(d.exhaust[0], d.exhaust[1]);
        pool.forEach((s, j) => {
          const per = 640, xx = x + j * 213, tt = xx % per, life = tt / per, q = A2[(Math.floor(xx / per) * 3 + j) % 12];
          s.visible = true; s.tint = j % 2 ? 0xffe6f5 : 0xffd0a0;
          s.position.set(ex - S * 0.2 * life + q.x * S * 0.06, ey + o.ty * S + S * 0.26 * life);
          s.width = s.height = S * (0.08 + 0.16 * outCubic(life)); s.alpha = 0.55 * (1 - life); s.rotation = q.ph + life;
        });
      } else if (d.amb === 'twinkle') {
        const s = pool[0], per = 520, k = Math.floor(x / per), tt = x % per, j = d.jewels[(k * 3 + this.idx) % d.jewels.length];
        const [px, py] = this.pt(j[0], j[1]);
        s.visible = true; s.tint = 0xffffff;
        s.position.set(px, py); s.width = s.height = S * 0.3 * Math.sin(Math.PI * tt / per); s.rotation = tt / 300; s.alpha = 1;
      } else if (d.amb === 'signal') {
        const [wx, wy] = this.pt(d.wifi[0], d.wifi[1]);
        for (let j = 0; j < 2; j++) {
          const tt = (x + j * 500) % 1000, life = tt / 1000, rr = S * (0.06 + 0.17 * outCubic(life));
          this.fxUsed = true;
          this.fx.arc(wx - S * 0.04, wy + S * 0.04, rr, -1.45, -0.05).stroke({ width: S * 0.03 * (1 - life) + 1, color: 0xffe14d, alpha: 0.8 * (1 - life), cap: 'round' });
        }
      }
    }
    // Free every rig this cell built (the ones for other characters are not in the scene, so the root does not own them).
    destroy() { for (const r of Object.values(this.rigs)) if (r !== this.rig) r.destroy(); this.rigs = {}; this.root.destroy({ children: true }); }
  }

  /* ---------- tile impact: the moment a tile opens ----------
     A white-hot flash, a shockwave ring in the tier colour and spark streaks that fly out and slow down.
     Bigger tiers get a wider ring, more streaks and a second ring. Drawn under the characters. */
  const impacts = [];
  class Impact {
    constructor(x, y, S, color, tier, k) {
      this.t0 = wall; this.k = k; this.S = S; this.tier = tier;
      const root = this.root = new PX.Container(); root.position.set(x, y);
      const add = (tex, tint, blend = 'add') => { const s = new PX.Sprite(tex); s.anchor.set(0.5); s.tint = tint; s.blendMode = blend; root.addChild(s); return s; };
      this.flash = add(T.dot, 0xffffff);
      this.glowS = add(T.dot, color);
      this.rings = [add(T.ring, color), ...(tier >= 2 ? [add(T.ring, 0xffffff)] : [])];
      const r = rng(Math.floor(wall) * 13 + Math.round(x) * 7 + Math.round(y));
      this.sparks = Array.from({ length: 8 + tier * 4 }, (_, i) => {
        const a = (i / (8 + tier * 4)) * Math.PI * 2 + (r() - 0.5) * 0.5;
        return { s: add(T.streak, i % 3 ? color : 0xffffff), a, v: S * (2.2 + r() * 1.6 + tier * 0.5), life: 420 + r() * 260, len: S * (0.4 + r() * 0.3), d: r() * 40 };
      });
      fxLayer.addChild(root);
    }
    // returns false once it is finished
    update() {
      const t = (wall - this.t0) * this.k, S = this.S;
      if (t > 900) { this.root.destroy({ children: true }); return false; }
      const fl = clamp(1 - t / 220);
      this.flash.alpha = fl * fl; this.flash.width = this.flash.height = S * (1.2 + 1.2 * outCubic(clamp(t / 160)));
      this.glowS.alpha = 0.9 * clamp(1 - t / 560); this.glowS.width = this.glowS.height = S * (1.8 + 0.8 * outCubic(clamp(t / 400)));
      this.rings.forEach((g, j) => {
        const tt = t - j * 90, e = outCubic(clamp(tt / 520));
        g.visible = tt >= 0;
        g.width = g.height = S * (0.6 + (2.1 + this.tier * 0.5) * e);
        g.alpha = (j ? 0.75 : 1) * (1 - e * e);
      });
      for (const p of this.sparks) {
        const tt = t - p.d, life = tt / p.life;
        if (tt < 0 || life >= 1) { p.s.visible = false; continue; }
        const ts = tt / 1000, dist = S * 0.28 + p.v * (1 - Math.exp(-4.5 * ts)) / 4.5;
        p.s.visible = true;
        p.s.position.set(Math.cos(p.a) * dist, Math.sin(p.a) * dist);
        p.s.rotation = p.a;
        p.s.width = p.len * (1 - life) * (0.4 + 0.6 * Math.exp(-3 * ts)); p.s.height = S * 0.1 * (1 - 0.5 * life);
        p.s.alpha = 1 - life * life;
      }
      return true;
    }
  }

  /* ---------- placement over the grid ---------- */
  // The character sits where the cell's <img> was laid out (CSS box, transforms ignored), a little smaller and higher.
  function placeFromCell(ch) {
    const cell = ch.cell, im = ch.img;
    const w = im.offsetWidth, h = im.offsetHeight;
    const S = Math.min(w, h) * FIT;
    ch.place(cell.offsetLeft + im.offsetLeft + w / 2, cell.offsetTop + im.offsetTop + h / 2 - cell.offsetHeight * LIFT, S);
  }
  function relayout() {
    chars.forEach(placeFromCell);
    if (hero) hero.place(gridEl.clientWidth / 2, gridEl.clientHeight / 2, gridEl.clientWidth * 0.52);
  }

  // Anything going wrong in the layer turns it off for good and gives the board back its still images.
  function fail(e) {
    console.warn('Character motion stopped, using still images.', e);
    M.ready = false;
    try { app.ticker.stop(); app.canvas.remove(); } catch (_) { /* already gone */ }
    document.querySelectorAll('.cell.px').forEach(c => c.classList.remove('px'));
  }
  function frame(tk) {
    try { step(tk); } catch (e) { fail(e); }
  }
  function step(tk) {
    wall += tk.deltaMS;
    for (let i = impacts.length - 1; i >= 0; i--) if (!impacts[i].update()) impacts.splice(i, 1);
    chars.forEach(c => c.update());
    if (hero) { if (wall >= hero.endAt) { hero.destroy(); hero = null; } else hero.update(); }
    const tint = gridEl.classList.contains('spot') ? 0x8f8f8f : 0xffffff;
    if (tint !== layerTint) { layer.tint = tint; layerTint = tint; }
  }

  M.init = async ({ grid, speed }) => {
    try {
      if (!window.PIXI || !window.LZRig || !window.GV_RIGS || !grid) return false;
      // WebGL only: without it (old devices, blocked GPU) the game keeps its still images.
      const probe = document.createElement('canvas');
      if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return false;
      PX = window.PIXI; gridEl = grid; if (speed) speedFn = speed;
      const imgs = await loadImages();
      app = new PX.Application();
      // No MSAA (the art carries its own soft edges) and at most 1.5x density: the board characters are small, and phones stay smooth.
      await app.init({ resizeTo: grid, backgroundAlpha: 0, antialias: false, preferWebGLVersion: 2, resolution: Math.min(1.5, window.devicePixelRatio || 1), autoDensity: true, preference: 'webgl', powerPreference: 'high-performance' });
      makeTextures(imgs);
      app.canvas.className = 'px-layer'; app.canvas.setAttribute('aria-hidden', 'true');
      grid.appendChild(app.canvas);
      fxLayer = new PX.Container(); layer = new PX.Container(); app.stage.addChild(fxLayer, layer);
      app.ticker.maxFPS = 60;   // 120 Hz phones draw the board at 60, which halves the cost and looks the same
      app.ticker.add(frame);
      app.renderer.on('resize', relayout);
      if ('ResizeObserver' in window) new ResizeObserver(() => requestAnimationFrame(relayout)).observe(grid);
      M.ready = true;
      return true;
    } catch (e) {
      console.warn('Character motion is off, using still images.', e);
      return false;
    }
  };
  M.show = (i, key, cellEl, imgEl, celebrateMs = 650) => {
    if (!M.ready || !SYM[key]) return false;
    try { return showChar(i, key, cellEl, imgEl, celebrateMs); } catch (e) { fail(e); return false; }
  };
  function showChar(i, key, cellEl, imgEl, celebrateMs) {
    let ch = chars.get(i);
    if (!ch) { ch = new Char(key, i, false); chars.set(i, ch); }
    ch.setKey(key); ch.cell = cellEl; ch.img = imgEl;
    placeFromCell(ch);
    ch.start(1 / speedFn(), celebrateMs);
    return true;
  }
  M.celebrate = i => { const ch = chars.get(i); if (ch) ch.celebrate(1 / speedFn()); };
  M.hop = i => { const ch = chars.get(i); if (ch) ch.hop0 = wall; };
  M.has = i => chars.has(i);
  // A top-tier character takes over the middle of the board for a beat.
  M.hero = key => {
    if (!M.ready || !SYM[key]) return false;
    try { return showHero(key); } catch (e) { fail(e); return false; }
  };
  function showHero(key) {
    if (hero) hero.destroy();
    hero = new Char(key, 99, true);
    hero.place(gridEl.clientWidth / 2, gridEl.clientHeight / 2, gridEl.clientWidth * 0.52);
    const sp = speedFn();
    hero.start(1 / sp, 700);
    hero.endAt = wall + 1250 * sp;
    return true;
  }
  // The impact when a tile opens, centred on the tile. tier 0 (heart) .. 4 (crown, LIVE).
  M.impact = (cellEl, color, tier = 0) => {
    if (!M.ready || !cellEl) return false;
    try {
      const S = cellEl.offsetWidth;
      impacts.push(new Impact(cellEl.offsetLeft + S / 2, cellEl.offsetTop + cellEl.offsetHeight / 2, S, color, clamp(tier, 0, 4), 1 / speedFn()));
      return true;
    } catch (e) { fail(e); return false; }
  };
  M.clear = () => { try { chars.forEach(c => c.destroy()); if (hero) hero.destroy(); impacts.forEach(m => m.root.destroy({ children: true })); } catch (e) { fail(e); } chars.clear(); hero = null; impacts.length = 0; };
  // QA only: stop the clock and step it by hand, so frame captures do not depend on how fast the machine is.
  M.qa = { stop: () => app.ticker.stop(), go: () => app.ticker.start(), step: ms => { step({ deltaMS: ms }); app.render(); }, stage: () => app.stage };
  window.GVMotion = M;
})();
