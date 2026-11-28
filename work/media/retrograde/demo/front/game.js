/* Retrograde front end. The shell (lz-core.js) owns the wallet, controls, rules sheet and settlement; this file
 * draws the orrery stage and plays back the events of a round. Nothing here decides a result: grids, clusters,
 * wins, multipliers, wild births and free spins all come from the book's events. Art lives in art.js.
 * Boot waits for art.js to decode the baked 3D symbols (sym3d.js), so every sprite and icon is the 3D one. */
const RG_RUN = () => {
  'use strict';
  const A = window.RetroArt;
  if (!window.LZ || !A) return;
  const TAU = Math.PI * 2, PI = Math.PI, clamp = A.clamp;
  const PLANETS = 'LTICQSG';
  // each planet's own colour [glow, light] (glow, win dust); matches tools/tint-sym.mjs
  const SYMCOL = { L: ['#b48cff', '#e6d8ff'], T: ['#6fa8ff', '#dbe9ff'], I: ['#ff4a4a', '#ffd0c8'], C: ['#56d989', '#d4ffe2'], Q: ['#46e2f2', '#d4fbff'], S: ['#e8eefc', '#ffffff'], G: ['#ffd24a', '#fff2b8'], W: ['#bfe0ff', '#ffffff'], A: ['#ff9ec0', '#ffe9a8'] };
  // The win table shown in the rules (hundredths of the play amount). Same numbers as math/game.mjs.
  const TABLE = {
    L: [20, 25, 35, 50, 70, 100, 200, 500, 2000], T: [25, 35, 45, 65, 90, 140, 280, 700, 2500], I: [30, 45, 60, 85, 120, 180, 350, 900, 3500],
    C: [40, 60, 85, 120, 170, 260, 500, 1400, 5000], Q: [60, 90, 120, 180, 260, 400, 800, 2000, 8000], S: [100, 140, 200, 300, 420, 650, 1300, 3500, 12000],
    G: [150, 220, 320, 500, 750, 1200, 2500, 6000, 25000],
  };
  const BANDS = ['5', '6', '7', '8', '9', '10–11', '12–14', '15–19', '20+'];
  const RETRO_COST = 100, STARGAZE_COST = 3, MAX_WIN = 10000;
  const ECLIPSE_COST = 30, ECLIPSE_SPINS = 3, ECLIPSE_MULT = 3;   // ECLIPSE: the light buy (math/game.mjs ECLIPSE)
  // Presentation only: a large cluster is greeted by the name of an invented constellation (by size).
  const FIGURES = [[20, 'The Grand Conjunction'], [15, 'The Crown of Night'], [12, 'The Great Wheel'], [10, 'The Navigator'], [9, 'The Compass'], [8, 'The Lantern']];
  // The sky's own celebrations, by the round's total win as a multiple of what the round cost (so STARGAZE at 3x needs 3x
  // as much). A big win climbs through the tiers one after another while it counts up, each tier landing with its own hit.
  // painted lettering for the four tiers (art/titles -> tools/make-board.mjs); the text stays in the node for screen readers
  const TITLE_ART = { 'GRAND WIN': 'grand', 'CELESTIAL WIN': 'celestial', 'COSMIC WIN': 'cosmic', 'HEAVENLY WIN': 'heavenly' };
  function bigTitle(text) { el.bigTitle.textContent = text; const a = TITLE_ART[text]; if (a) el.bigTitle.dataset.art = a; else delete el.bigTitle.dataset.art; }
  const SKY = [null, { x: 5, kick: 'Star shower', title: 'GRAND WIN' }, { x: 15, kick: 'Great conjunction', title: 'CELESTIAL WIN' }, { x: 30, kick: 'Total eclipse', title: 'COSMIC WIN' }, { x: 60, kick: 'The heavens align', title: 'HEAVENLY WIN' }];

  /* Gold digits (art/digits, tools/make-digits.mjs -> assets/ui/digits.webp + digits.js): numbers in the logo's sculpted
   * gold for the ALIGNMENT pop, the dial, the win cartouche and the big win. A string with any other character (another
   * currency's letters) is written as text. The canvas carries the value as its accessible name. */
  const Gold = (() => {
    const d = window.RG_DIGITS, img = new Image(); let ok = false; const waiting = [];
    if (d) { img.onload = () => { ok = true; waiting.splice(0).forEach(f => f()); }; img.src = 'assets/ui/digits.webp'; }
    const can = str => ok && [...str].every(ch => d.g[ch] || ch === ' ');
    const SP = .9;
    function measure(str, h) { const k = h / d.h; let w = 0; for (const ch of str) { const g = d.g[ch]; w += g ? g[2] * k * SP : h * .3; } return w; }
    // baseline at y; align 'center' | 'left' | 'right'
    function draw(c, str, x, y, h, align = 'center') {
      const k = h / d.h, w = measure(str, h); let cx = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
      for (const ch of str) { const g = d.g[ch]; if (!g) { cx += h * .3; continue; } const gw = g[2] * k, gh = g[3] * k; c.drawImage(img, g[0], g[1], g[2], g[3], cx - gw * (1 - SP) / 2, y - gh + g[4] * k, gw, gh); cx += gw * SP; }
    }
    function into(node, str, fit) {
      if (!node) return;
      node.dataset.value = str;     // the value as text, for QA and assistive tools (the gold digits are a canvas)
      if (!can(str)) { if (node._gc) { node._gc.remove(); node._gc = null; } node.textContent = str; return; }
      let cv = node._gc;
      if (!cv || !cv.isConnected) { node.textContent = ''; cv = document.createElement('canvas'); cv.className = 'rg-gold'; cv.setAttribute('role', 'img'); node.append(cv); node._gc = cv; }
      cv.setAttribute('aria-label', str);
      const fsz = parseFloat(getComputedStyle(node).fontSize) || 24,  /* the box keeps its font size as the scale */ h = fsz * 1.1, dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = measure(str, h) + h * .16, hh = h * 1.22, maxW = fit && node.parentElement ? node.parentElement.clientWidth * .98 : 0, sc = maxW && w > maxW ? maxW / w : 1;
      const W = Math.ceil(w * sc * dpr), H = Math.ceil(hh * sc * dpr);
      if (cv.width !== W) cv.width = W; if (cv.height !== H) cv.height = H;
      cv.style.width = (w * sc).toFixed(1) + 'px'; cv.style.height = (hh * sc).toFixed(1) + 'px';
      const c = cv.getContext('2d'); c.setTransform(dpr * sc, 0, 0, dpr * sc, 0, 0); c.clearRect(0, 0, w, hh); draw(c, str, w / 2, h * 1.02, h);
    }
    return { get ok() { return ok; }, can, draw, into, measure, later(f) { if (ok) f(); else waiting.push(f); } };
  })();
  const easeIn = p => p * p, linear = p => p, easeOut = p => 1 - Math.pow(1 - p, 3);
  const easeInOut = p => (p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
  const backOut = p => 1 + 2.70158 * Math.pow(p - 1, 3) + 1.70158 * Math.pow(p - 1, 2);

  let api = null, cfg = null;
  const el = {};                    // DOM nodes
  const S = {
    W: 0, H: 0, dpr: 1, G: 0, cs: 0, gx: 0, gy: 0, cx: 0, cy: 0, M: 0, b: 2, land: true, small: false, spPx: 0,
    sprites: {}, grid: null, tok: new Array(49).fill(null), exiting: [], dying: [],
    lines: [], labels: [], rings: [], cellGlow: [], shocks: [], tweens: [], timers: new Set(), tw: [], motes: [],
    retro: false, retroMix: 0, ringA: 0, ringV: 1, ringTarget: 1, light: 0, t: 0, dirty: true, raf: 0, last: 0,
    playing: false, attract: false, started: false, hasScat: false, nextGlint: 0, glint: null, antic: null, shoot: null, nextShoot: 6,
    spells: [], beams: [], stars: [], flyers: [], spinCast: 0, wiz: false, wizBox: null, wizWorried: false,
    featOn: false, feat: 0, left: 0, spins: 0, peak: 1, totalShown: 0, totalTw: null, flash: 0, shake: null, bw: null, fxLive: false, level: 0,
  };
  const Dial = { D: 0, m: 1, mf: 1, g: 0, axis: -PI / 2, axisT: -PI / 2, pulse: 0, kick: 0, release: 0, sp: [], pl: [1.15, .9, .72, .56, .43, .31, .22].map((v, i) => ({ a: i * 2.4 + 1, v })) };
  const DIAL_ORDER = 'SQCGITL';
  const DIAL_K = .8;                // share of the dial canvas inside the illustrated ring's opening     // Moon, Mercury, Venus, Sun, Mars, Jupiter, Saturn: nearest to farthest

  /* ---------- Tweens and timers (visual only: the round's logic never waits on them) ---------- */
  function tween(dur, fn, o = {}) {
    const tw = { t0: performance.now() + (o.delay || 0), dur: Math.max(1, dur), fn, ease: o.ease || easeOut, done: o.done, dead: false };
    S.tweens.push(tw); S.dirty = true;
    return tw;
  }
  function stepTweens(now) {
    if (!S.tweens.length) return;
    const list = S.tweens; S.tweens = [];
    for (const tw of list) {
      if (tw.dead) continue;
      if (now < tw.t0) { S.tweens.push(tw); continue; }
      const p = Math.min(1, (now - tw.t0) / tw.dur);
      tw.fn(tw.ease(p), p);
      if (p >= 1) { if (tw.done) tw.done(); } else S.tweens.push(tw);
    }
    S.dirty = true;
  }
  function flushTweens() {
    let guard = 0;
    while (S.tweens.length && guard++ < 8) { const list = S.tweens; S.tweens = []; for (const tw of list) if (!tw.dead) { tw.fn(tw.ease(1), 1); if (tw.done) tw.done(); } }
    S.tweens = [];
  }
  function after(ms, fn) { const id = setTimeout(() => { S.timers.delete(id); fn(); }, Math.max(0, ms * api.speed())); S.timers.add(id); }
  function clearFx() { S.lines.length = 0; S.labels.length = 0; S.rings.length = 0; S.cellGlow.length = 0; S.dying.length = 0; S.glint = null; S.antic = null; }

  /* ---------- Particles: one fixed pool for the grid layer ('g', grid coordinates) and the stage layer ('f') ---------- */
  const POOL = Array.from({ length: 720 }, () => ({ on: false }));
  let poolAt = 0;
  // kind 0 = dust (ballistic)   1 = mote that homes in on (tx, ty)   2 = meteor (a streak)
  function emit(o) {
    if (S.lite && o.layer === 'f' && (S.liteN = (S.liteN || 0) + 1) % 2) return;    // light mode: every other effect particle
    for (let n = 0; n < POOL.length; n++) {
      poolAt = (poolAt + 1) % POOL.length;
      const p = POOL[poolAt];
      if (p.on) continue;
      p.on = true; p.layer = 'g'; p.kind = 0; p.x = 0; p.y = 0; p.vx = 0; p.vy = 0; p.g = 0; p.drag = 1.6; p.life = 0; p.max = .6; p.z = 2; p.col = '#fff'; p.wait = 0; p.a = 1;
      Object.assign(p, o);
      if (p.kind === 1) { p.sx = p.x; p.sy = p.y; }
      return p;
    }
    return null;
  }
  const DUST = ['#fff6d0', '#ffd76a', '#ffffff', '#f2b53a'];
  function burst(x, y, n, o = {}) {
    const cs = S.cs, cols = o.cols || DUST;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU, sp = cs * (o.speed || 1) * (.6 + Math.random() * 2.4);
      emit({ x: x + Math.cos(a) * cs * .18, y: y + Math.sin(a) * cs * .18, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, max: (.45 + Math.random() * .55) * (o.life || 1), z: Math.max(1, cs * (.014 + Math.random() * .03)), col: cols[i % cols.length], g: (S.retro ? -1 : 1) * cs * (o.grav == null ? 4 : o.grav) });
    }
  }
  // stage-layer burst (coordinates in stage px)
  function burstF(x, y, n, o = {}) {
    const m = Math.min(S.W, S.H), cols = o.cols || DUST;
    for (let i = 0; i < n; i++) { const a = Math.random() * TAU, sp = m * (o.speed || .5) * (.3 + Math.random()); emit({ layer: 'f', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, max: (.5 + Math.random() * .7) * (o.life || 1), z: Math.max(1, m * (.004 + Math.random() * .008)), col: cols[i % cols.length], g: m * (o.grav == null ? .5 : o.grav), drag: 1.2 }); }
    S.fxLive = true;
  }
  const cellXY = k => [((k % 7) + .5) * S.cs, (((k / 7) | 0) + .5) * S.cs];
  // where the total is shown, in stage px (stardust flies there)
  // a cluster's amount flies from its banner to TOTAL WIN along an arc, shedding gold sparks; done() when it lands
  const FLIGHT = 560;
  function flyWin(l, delay, done) {
    const sp = api.speed(), x0 = S.gx + l.px, y0 = S.gy + l.py, [tx, ty] = totalPoint(), h0 = l.fs * 1.05 * Math.max(.8, l.sc);
    const f = { text: l.text, x: x0, y: y0, h: h0 }, cx = (x0 + tx) / 2, cy = Math.min(y0, ty) - S.cs * 1.6;
    S.flyers.push(f); S.fxLive = true;
    tween(FLIGHT * sp, q => {
      const u = 1 - q; f.a = q > .7 ? 1 - (q - .7) / .3 : 1; f.x = u * u * x0 + 2 * u * q * cx + q * q * tx; f.y = u * u * y0 + 2 * u * q * cy + q * q * ty; f.h = h0 * (1 + .25 * Math.sin(q * PI)) * (1 - .4 * q); S.fxLive = true;
      if (Math.random() < .6) emit({ layer: 'f', x: f.x, y: f.y, vx: (Math.random() - .5) * S.cs * .5, vy: (Math.random() - .5) * S.cs * .5, max: .4, z: Math.max(1, S.cs * .025), col: DUST[(Math.random() * 4) | 0], g: 0 });
    }, { delay: delay * sp, ease: easeInOut, done: () => { const i = S.flyers.indexOf(f); if (i >= 0) S.flyers.splice(i, 1); if (!api.reduced) burstF(tx, ty, S.small ? 6 : 12, { speed: .22, grav: .15, life: .6 }); if (done) done(); } });
  }
  function totalPoint() { const r = el.total.getBoundingClientRect(), o = el.root.getBoundingClientRect(); return [r.left + r.width / 2 - o.left, r.top + r.height / 2 - o.top]; }
  function stream(k, n) {
    if (n <= 0) return;
    const [gx, gy] = cellXY(k), x = S.gx + gx, y = S.gy + gy, [tx, ty] = totalPoint(), cs = S.cs, sp = api.speed();
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU, d = cs * (.5 + Math.random() * 1.1);
      emit({ layer: 'f', kind: 1, x, y, cx: x + Math.cos(a) * d + (tx - x) * .18, cy: y + Math.sin(a) * d - cs * (S.retro ? 1.2 : -.4), tx: tx + (Math.random() - .5) * cs * .8, ty: ty + (Math.random() - .5) * cs * .3, max: (.5 + Math.random() * .35) * Math.max(.35, sp), wait: Math.random() * .12 * sp, z: Math.max(1.2, cs * (.03 + Math.random() * .03)), col: DUST[i % 4] });
    }
    S.fxLive = true;
  }
  /* Painted light bursts (art/fx -> tools/make-fx.mjs -> assets/fx): gold flare, pink-violet nebula, star dust, all on
   * black and drawn additively, so they read as light. They replace the stroked rings that looked drawn by code. */
  const FX = {};
  // Phones (2026-11-27): a picture the browser has not decoded yet is decoded the first time it is drawn, which froze the
  // screen for 50-250 ms right at the first win. Each one is baked into a canvas as soon as it loads (a canvas never
  // needs decoding), and keeps the Image fields the drawing code checks.
  function baked(src, set) {
    const im = new Image(); im.src = src;
    (im.decode ? im.decode() : new Promise(r => { im.onload = r; })).then(() => {
      const cv = document.createElement('canvas'); cv.width = im.naturalWidth; cv.height = im.naturalHeight; cv.getContext('2d').drawImage(im, 0, 0);
      cv.complete = true; cv.naturalWidth = im.naturalWidth; cv.naturalHeight = im.naturalHeight; set(cv);
    }, () => {});
    return im;
  }
  let MOON = baked('assets/ui/moon.webp', cv => { MOON = cv; });   // the eclipse disc of the big win (art/ui2)
  let KNOB = baked('assets/ui/knob.webp', cv => { KNOB = cv; const k = document.createElement('canvas'); k.width = cv.width; k.height = cv.height; const kc = k.getContext('2d'); kc.filter = 'sepia(.35) hue-rotate(-28deg) saturate(1.7)'; kc.drawImage(cv, 0, 0); k.complete = true; k.naturalWidth = cv.width; KNOBR = k; }), KNOBR = null;   // the RETROGRADE tint baked once (a canvas filter every frame is slow on phones)
  for (const n of ['gold', 'violet', 'dust']) FX[n] = baked('assets/fx/burst-' + n + '.webp', cv => { FX[n] = cv; });
  function fxKind(col) {
    const h = String(col || '').replace('#', ''), r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    if (b > g && r > 180) return 'violet'; if (b > r) return 'dust'; return 'gold';
  }
  function fxSprite(c, im, x, y, R, rot, a) {
    if (!im || !im.complete || !im.naturalWidth || a <= .005 || R < 1) return;
    c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha = Math.min(1, a); c.translate(x, y); c.rotate(rot); c.drawImage(im, -R, -R, R * 2, R * 2); c.restore();
  }
  // a burst: swells fast, turns slowly, fades; a second, larger dust layer turns the other way behind it
  function drawBurst(c, b, x, y, m) {
    const p = b.p, inn = Math.min(1, p / .1), out = Math.pow(1 - p, 1.4), grow = 1 - Math.pow(1 - p, 3);
    fxSprite(c, FX[b.kind], x, y, m * (.3 + .7 * grow), b.rot + p * b.turn, inn * out * 1.15);
    if (b.size > .2 && !S.lite) fxSprite(c, FX.dust, x, y, m * (.45 + .95 * grow), -b.rot - p * b.turn * .6, inn * out * .8);
  }
  function shock(x, y, col, dur = 900, size = 1) { if (api.reduced) return; const s = { x, y, col, p: 0, size, kind: fxKind(col), rot: Math.random() * TAU, turn: (Math.random() < .5 ? -1 : 1) * (.5 + Math.random() * .5) }; S.shocks.push(s); S.fxLive = true; tween(dur * api.speed(), q => { s.p = q; }, { done: () => { const i = S.shocks.indexOf(s); if (i >= 0) S.shocks.splice(i, 1); } }); }
  // camera punch: the whole scene jumps toward the player and settles (CSS 'scale', so it adds to the shake's translate)
  function camPunch(k = 1.05) { if (api.reduced || !el.root) return; el.root.style.setProperty('--cam', String(k)); el.root.classList.remove('cam'); void el.root.offsetWidth; el.root.classList.add('cam'); }
  function shake(amp, ms = 260) { if (!api.reduced) S.shake = { amp, t0: performance.now(), dur: ms * Math.max(.4, api.speed()) }; }
  function flash(v = 1, ms = 500) { if (api.reduced) return; S.flash = v; tween(ms * api.speed(), q => { S.flash = v * (1 - q); }); }
  function hardStop() {
    for (const id of S.timers) clearTimeout(id);
    S.timers.clear(); flushTweens(); clearFx(); S.exiting.length = 0; S.shocks.length = 0; S.bw = null; S.shake = null; S.flash = 0;
    for (const p of POOL) p.on = false;
    for (const tk of S.tok) if (tk) { tk.ox = tk.oy = 0; tk.sc = 1; tk.al = 1; tk.glow = 0; tk.lift = 0; tk.sq = 0; tk.shine = 0; tk.yaw = 0; tk.hue = false; }
    S.flyers.length = 0;
    el.card.classList.remove('on'); el.plus.classList.remove('on'); if (el.mpop) el.mpop.classList.remove('on'); el.root.classList.remove('tense'); el.big.classList.remove('on', 'done'); el.grid.style.transform = el.gbg.style.transform = el.gund.style.transform = el.b3d.style.transform = '';
    S.dirty = true; S.fxLive = true;
  }

  /* ---------- Sound: a celestial palette, all synthesized, through api.sound.out with a reverb send ---------- */
  const LYD = [0, 2, 4, 6, 7, 9, 11], PHR = [0, 1, 3, 5, 7, 8, 10];           // D Lydian; D Phrygian for RETROGRADE
  const Snd = (() => {
    let mix = null, mixOf = null;
    const ctx = () => (api && api.speed() > .12 ? api.sound.ctx() : null);      // silent during QA speed-up
    // dry bus plus a reverb send (impulse generated here: decaying, darkening noise)
    function bus(a) {
      if (mix && mixOf === a) return mix;
      mixOf = a; mix = a.createGain(); mix.connect(api.sound.out);
      try {
        const len = Math.floor(a.sampleRate * 2.9), buf = a.createBuffer(2, len, a.sampleRate);
        for (let ch = 0; ch < 2; ch++) { const d = buf.getChannelData(ch); let lp = 0; for (let i = 0; i < len; i++) { const t = i / len; lp += ((Math.random() * 2 - 1) - lp) * (.55 - .42 * t); d[i] = lp * Math.pow(1 - t, 2.8) * (i < 500 ? i / 500 : 1); } }
        const cv = a.createConvolver(), send = a.createGain(), wet = a.createGain();
        cv.buffer = buf; send.gain.value = .32; wet.gain.value = .5;
        mix.connect(send); send.connect(cv); cv.connect(wet); wet.connect(api.sound.out);
      } catch (e) { /* no reverb: the dry bus still works */ }
      return mix;
    }
    const env = (g, t, a, peak, d) => { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + d); };
    const note = (step, mode = LYD) => 293.66 * Math.pow(2, (Math.floor(step / 7) * 12 + mode[((step % 7) + 7) % 7]) / 12);
    const tone = o => { const a = ctx(); if (a) api.sound.tone({ ...o, out: bus(a) }); };
    const noise = o => { const a = ctx(); if (a) api.sound.noise({ ...o, out: bus(a) }); };
    // FM bell / celesta
    function bell(f, o = {}) {
      const a = o.ctx || ctx(); if (!a) return;
      const t = (o.at != null ? o.at : a.currentTime + (o.when || 0)), d = o.d || 1.1, peak = Math.min(.25, o.g || .08);
      while (f * (o.ratio || 3.5) > 14000 || f > 4200) f /= 2;
      const car = a.createOscillator(), mod = a.createOscillator(), mg = a.createGain(), g = a.createGain();
      car.frequency.value = f; mod.frequency.value = f * (o.ratio || 3.5);
      mg.gain.setValueAtTime(f * (o.index || 1.1), t); mg.gain.exponentialRampToValueAtTime(Math.max(.01, f * .03), t + d * .7);
      mod.connect(mg); mg.connect(car.frequency); env(g, t, .004, peak, d); car.connect(g); g.connect(o.out || bus(a));
      car.start(t); mod.start(t); car.stop(t + d + .1); mod.stop(t + d + .1);
      if (o.air !== false) { const p = a.createOscillator(), pg = a.createGain(); p.frequency.value = f * 2.005; env(pg, t, .004, peak * .28, d * .55); p.connect(pg); pg.connect(o.out || bus(a)); p.start(t); p.stop(t + d * .55 + .1); }
    }
    // harp-like pluck
    function pluck(f, o = {}) {
      const a = o.ctx || ctx(); if (!a) return;
      const t = (o.at != null ? o.at : a.currentTime + (o.when || 0)), d = o.d || .9, peak = Math.min(.25, o.g || .07);
      while (f > 3200) f /= 2;
      const o1 = a.createOscillator(), o2 = a.createOscillator(), fl = a.createBiquadFilter(), g = a.createGain();
      o1.type = 'triangle'; o1.frequency.value = f; o2.type = 'sine'; o2.frequency.value = f * 2;
      fl.type = 'lowpass'; fl.frequency.setValueAtTime(Math.min(9000, f * 7), t); fl.frequency.exponentialRampToValueAtTime(Math.max(200, f * 1.4), t + d * .6); fl.Q.value = .6;
      env(g, t, .003, peak, d); o1.connect(fl); o2.connect(fl); fl.connect(g); g.connect(o.out || bus(a));
      o1.start(t); o2.start(t); o1.stop(t + d + .1); o2.stop(t + d + .1);
    }
    function gong(o = {}) {
      const a = ctx(); if (!a) return;
      const t = a.currentTime + (o.when || 0), f0 = o.f || 62, k = o.g || 1;
      for (const [r, gv, d] of [[1, .2, 3.4], [1.004, .1, 3.4], [1.51, .1, 2.7], [2.02, .08, 2.2], [2.76, .05, 1.7], [3.8, .03, 1.1], [5.2, .014, .7]]) {
        const os = a.createOscillator(), g = a.createGain(); os.frequency.value = f0 * r; env(g, t, .014, gv * k, d); os.connect(g); g.connect(bus(a)); os.start(t); os.stop(t + d + .1);
      }
      noise({ d: .28, g: .05 * k, f: 300, q: .7, type: 'lowpass', when: o.when || 0 });
    }
    // a swell that grows and is cut off: reads as reversed. Peaks `d` seconds from now.
    function swell(d = 1.25) {
      const a = ctx(); if (!a) return;
      d = Math.max(.2, d);
      const t = a.currentTime, g = a.createGain(), fl = a.createBiquadFilter();
      fl.type = 'bandpass'; fl.Q.value = 1.1; fl.frequency.setValueAtTime(260, t); fl.frequency.exponentialRampToValueAtTime(3600, t + d);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.15, t + d); g.gain.exponentialRampToValueAtTime(.0001, t + d + .04);
      const len = Math.floor(a.sampleRate * (d + .1)), buf = a.createBuffer(1, len, a.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
      const src = a.createBufferSource(); src.buffer = buf; src.connect(fl); fl.connect(g); g.connect(bus(a)); src.start(t);
      for (const f of [146.83, 220, 293.66]) { const os = a.createOscillator(), og = a.createGain(); os.type = 'sawtooth'; os.frequency.setValueAtTime(f * .5, t); os.frequency.exponentialRampToValueAtTime(f, t + d); og.gain.setValueAtTime(.0001, t); og.gain.exponentialRampToValueAtTime(.04, t + d); og.gain.exponentialRampToValueAtTime(.0001, t + d + .04); os.connect(fl); os.connect(og); og.connect(bus(a)); os.start(t); os.stop(t + d + .1); }
      tone({ f: 82, to: 36, d: 1.2, g: .16, when: d, a: .01 });
    }
    return {
      ctx, bus, note, bell, pluck, gong, swell, tone, noise,
      whoosh(up) { noise({ d: .34, g: .03, f: up ? 500 : 1700, to: up ? 2100 : 420, q: .7 }); },
      // one soft celesta note per landing column over a low thud; the run goes up in the base game and down in RETROGRADE
      land(col, up, when) { const steps = [0, 2, 4, 7, 9, 11, 14]; bell(note(7 + steps[up ? 6 - col : col], up ? PHR : LYD), { when, d: .5, g: .028, ratio: 4, index: .6, air: false }); tone({ f: 120, to: 60, d: .09, g: .035, when, type: 'sine' }); },
      scatter(n) { gong({ f: 52 + n * 7, g: .75 }); bell(note(7 + n * 2), { d: 1.8, g: .08, ratio: 2.76, index: 1.6 }); tone({ f: 70, to: 30, d: .5, g: .15, a: .005 }); noise({ d: .2, g: .05, f: 180, q: .6, type: 'lowpass' }); },
      antic(col) { tone({ f: 420 + col * 55, to: 640 + col * 75, d: .34, type: 'sine', g: .035 }); noise({ d: .3, g: .012, f: 5200, q: 3 }); tone({ f: 55, d: .3, g: .06, type: 'sine' }); },
      // harp run that starts one scale step higher with every cascade
      run(mult, n, up) { const s = Math.min(mult - 1, 16), mode = up ? PHR : LYD; [0, 2, 4, 7].forEach((d, k) => pluck(note(s + d, mode), { when: k * .055, g: .07, d: .95 })); if (n > 1) pluck(note(s + 9, mode), { when: .24, g: .05 }); },
      win(mult, big, up) { const s = Math.min(mult - 1, 16), mode = up ? PHR : LYD; bell(note(s + 7, mode), { d: big ? 1.6 : .9, g: big ? .1 : .06 }); if (big) { bell(note(s + 11, mode), { when: .09, d: 1.5, g: .07 }); gong({ f: 73.4, g: .45 }); } },
      dust(up) { noise({ d: .34, g: .028, f: up ? 2400 : 5200, to: up ? 6400 : 1800, q: 1.4 }); },
      wild(when = 0) { [14, 16, 18, 21].forEach((s, k) => bell(note(s), { when: when + k * .045, d: .7, g: .06, ratio: 5.1, index: .8 })); noise({ d: .5, g: .02, f: 7000, q: 2, type: 'highpass', when }); },
      step(mult, up) { const s = Math.min(mult - 1, 16); bell(note(s + (up ? 6 : 8), up ? PHR : LYD), { d: .5, g: .05, ratio: 2, index: .5, air: false }); tone({ f: up ? 190 : 150, to: up ? 150 : 200, d: .1, g: .05, type: 'triangle' }); noise({ d: .05, g: .03, f: 2600, q: 4 }); },
      unwind(n) { const k = Math.min(10, n); for (let i = 0; i < k; i++) tone({ f: 900 - i * 60, d: .05, g: .03, type: 'triangle', when: i * .03 }); noise({ d: .3, g: .02, f: 3000, to: 600, q: 1 }); },
      trigger() { [0, 4, 7].forEach((s, k) => bell(note(s), { when: k * .16, d: 2.2, g: .09, ratio: 2.76, index: 1.8 })); gong({ f: 55, g: .8 }); },
      windDown(d) { d = Math.max(.1, d); tone({ f: 220, to: 55, d, g: .08, type: 'triangle' }); for (let i = 0; i < 9; i++) tone({ f: 1400, d: .03, g: .03, type: 'square', when: d * (1 - Math.pow(1 - i / 9, 2)) }); },
      flip() { [21, 18, 16, 14, 11, 9, 7].forEach((s, k) => bell(note(s, PHR), { when: .05 + k * .07, d: 1.3, g: .05 })); gong({ f: 46, g: .7 }); },
      more() { [7, 9, 11, 14].forEach((s, k) => bell(note(s, PHR), { when: k * .07, d: .8, g: .07 })); },
      release() { tone({ f: 60, to: 180, d: .7, g: .1, type: 'sine' }); [7, 9, 11, 14, 16, 18, 21].forEach((s, k) => bell(note(s), { when: .1 + k * .06, d: 1, g: .05 })); },
      end(good) { (good ? [0, 4, 7, 11, 14, 18] : [0, 4, 7]).forEach((s, k) => bell(note(s), { when: k * .1, d: 1.8, g: .08 })); gong({ f: 73.4, g: .6, when: good ? .5 : 0 }); },
      // count-up: bells that climb the scale for as long as the number runs
      count(sec, tier) { const n = Math.min(44, Math.max(6, Math.round(sec / .085))); for (let k = 0; k < n; k++) bell(note(7 + Math.floor(k * (10 + tier * 3) / n)), { when: k * sec / n, d: .28, g: .03 + .025 * k / n, ratio: 4, index: .5, air: false }); },
      skyStart(tier, sec) { swell(sec); if (tier < 2) [7, 11, 14].forEach((s, k) => pluck(note(s), { when: k * .06, g: .05 })); },
      // the intro book: a page lifts (a paper swish) and lands (a soft thump)
      page() { noise({ d: .34, g: .045, f: 1500, to: 4200, q: .7, type: 'bandpass' }); noise({ d: .14, g: .05, f: 420, q: .6, type: 'lowpass', when: .78 }); },
      skyHit(tier) { gong({ f: tier >= 3 ? 46 : 62, g: .65 + tier * .05 }); [0, 4, 7, 11, 14].slice(0, 2 + tier).forEach((s, k) => bell(note(s + 7), { when: k * .05, d: 2, g: .09 })); if (tier >= 3) tone({ f: 60, to: 28, d: 1.4, g: .16, a: .005 }); },
      skyEnd(tier) { [0, 2, 4, 7, 9, 11, 14, 16, 18, 21].slice(0, 5 + tier * 2).forEach((s, k) => { bell(note(s + 7), { when: k * .07, d: 1.8, g: .08 }); pluck(note(s), { when: k * .07, g: .05, d: 1.3 }); }); gong({ f: 73.4, g: .7, when: .1 }); },
      start() { [0, 4, 7, 11].forEach((s, k) => pluck(note(s), { when: k * .09, g: .06, d: 1.4 })); },
    };
  })();

  /* Music bed: a slow generative piece scheduled on the AudioContext clock. level 0 idle (pad, a rare bell),
   * 1 spinning (more bells), 2 cascades (a rising harp figure), 3 RETROGRADE (the harmony darkens to D Phrygian,
   * the figure runs downward, a low drone joins). Quiet by design; it sits under every effect. */
  const Music = (() => {
    let run = false, timer = 0, next = 0, half = 0, level = 0, dark = false, g = null;
    const HALF = 2.4;
    const CH = [[0, 4, 9, 11], [1, 5, 8, 12], [-2, 2, 7, 9], [-3, 4, 6, 11]], DK = [[0, 4, 7, 9], [-2, 2, 5, 9], [-4, 0, 3, 7], [-1, 3, 6, 8]];
    const hz = (step, mode) => 146.83 * Math.pow(2, (Math.floor(step / 7) * 12 + mode[((step % 7) + 7) % 7]) / 12);
    function pad(a, f, t, dur, peak, type, cut) {
      const fl = a.createBiquadFilter(), vg = a.createGain();
      fl.type = 'lowpass'; fl.frequency.value = cut; fl.Q.value = .5;
      vg.gain.setValueAtTime(.0001, t); vg.gain.linearRampToValueAtTime(peak, t + 1.7); vg.gain.setValueAtTime(peak, t + dur); vg.gain.linearRampToValueAtTime(.0001, t + dur + 2.3);
      for (const det of [-6, 7]) { const os = a.createOscillator(); os.type = type; os.frequency.value = f; os.detune.value = det; os.connect(fl); os.start(t); os.stop(t + dur + 2.4); }
      fl.connect(vg); vg.connect(g);
    }
    function schedule(a, t) {
      const mode = dark ? PHR : LYD, ch = (dark ? DK : CH)[(half >> 1) % 4], L = level;
      if (half % 2 === 0) {
        ch.forEach((s, i) => pad(a, hz(s + (i ? 7 : 0), mode), t, HALF * 2, (i ? .0085 : .013) * (1 + L * .15), i ? 'triangle' : 'sine', 480 + L * 170));
        if (L >= 3) pad(a, hz(ch[0] - 7, mode), t, HALF * 2, .026, 'sine', 260);
      }
      const bells = L === 0 ? (Math.random() < .35 ? 1 : 0) : L === 1 ? 1 + (Math.random() < .5 ? 1 : 0) : 2;
      for (let k = 0; k < bells; k++) Snd.bell(hz(ch[Math.floor(Math.random() * 4)] + 14 + (Math.random() < .3 ? 7 : 0), mode), { ctx: a, at: t + Math.random() * HALF, d: 2.2, g: .014 + L * .004, ratio: 3.5, index: .7, out: g });
      if (L >= 2) for (let k = 0; k < 4; k++) { const i = dark ? 3 - k : k, s = ch[i] + 7 + ((half % 2) ^ (dark ? 1 : 0)) * 7; Snd.pluck(hz(s, mode), { ctx: a, at: t + k * HALF / 4, d: 1.1, g: .017 + (L - 2) * .006, out: g }); }
    }
    function tick() {
      const a = api.sound.ctx();
      if (!run || !a || !g || document.hidden) return;
      if (next < a.currentTime) next = a.currentTime + .08;
      while (next < a.currentTime + .6) { schedule(a, next); next += HALF; half++; }
    }
    return {
      start() {
        const a = Snd.ctx();
        if (run || !a) return;
        run = true; g = a.createGain(); g.gain.setValueAtTime(.0001, a.currentTime); g.gain.linearRampToValueAtTime(1, a.currentTime + 1.5); g.connect(Snd.bus(a));
        next = 0; timer = setInterval(tick, 200); tick();
      },
      stop() {
        if (!run) return;
        run = false; clearInterval(timer);
        const old = g; g = null;
        try { const a = api.sound.ctx(), t = a ? a.currentTime : 0; old.gain.cancelScheduledValues(t); old.gain.setTargetAtTime(.0001, t, .08); setTimeout(() => { try { old.disconnect(); } catch (e) { /* gone */ } }, 3500); } catch (e) { /* context closed */ }
      },
      // now = true restarts the phrase at once (used when the mood changes sharply)
      set(l, isDark, now) { const ch = isDark !== undefined && !!isDark !== dark; level = l; if (isDark !== undefined) dark = !!isDark; if ((now || ch) && run) { next = 0; half += half % 2; tick(); } },
    };
  })();

  /* Recorded sound (front/sound.js + assets/snd, 107 real recordings, 2026-11-27; sound/WIRING.md). The synth above is
   * only the fallback when RGSound is missing. The game emits events; levels, pools, pitch and pan live in sound.js CFG. */
  const RGS = window.RGSound && window.RG_SND ? window.RGSound : null;
  let rgCascade = 0, rgCount = null;
  const rgSet = () => (S.retro ? (S.ecl ? 'eclipse' : 'retro') : 'base');
  // base: 0 idle, 1 spinning, 2 cascades, 3 a hot cascade (ALIGNMENT x4+) or a big win; features: by ALIGNMENT, never down
  const rgLevel = l => (S.retro ? (S.ecl ? (Dial.m >= 6 ? 1 : 0) : (Dial.m >= 6 ? 2 : Dial.m >= 3 ? 1 : 0)) : (l >= 2 && Dial.m >= 4 ? 3 : l));
  const Sfx = RGS ? {
    whoosh(up) { rgCascade = 0; RGS.emit('spin', { retro: !!up }); },
    land(col, up, when) { RGS.emit('land', { col, retro: !!up, when: when || 0 }); },
    scatter(n) { RGS.emit('scatter', { n }); },
    antic(col) { RGS.emit('antic', { col }); RGS.tension(true); },
    run(mult, n, up) { RGS.emit('run', { step: ++rgCascade, retro: !!up }); },
    win(mult, big, up) { RGS.emit('win', { big: !!big, retro: !!up }); },
    dust(up) { RGS.emit('dust', { retro: !!up }); },
    wild(when) { RGS.emit('wild', { when: when || 0 }); },
    step(mult, up) { RGS.emit('step', { mult, retro: !!up }); },
    unwind(n) { RGS.emit('unwind'); },
    trigger() { RGS.emit('trigger'); },
    windDown(d) { RGS.emit('windDown'); },
    swell(d) { RGS.emit('swell'); },
    flip() { RGS.emit(S.ecl ? 'eclipse' : 'flip'); },
    more() { RGS.emit('more'); },
    release() { RGS.emit('release'); },
    end(good) { RGS.emit('featureEnd', { good: !!good }); },
    count(sec, tier) { if (rgCount) rgCount(); rgCount = RGS.count(sec, tier); },
    skyStart(tier, sec) { RGS.emit('skyStart', { tier }); },
    skyHit(tier) { RGS.emit('skyHit', { tier }); },
    skyEnd(top) { if (rgCount) { rgCount(); rgCount = null; } RGS.emit('skyEnd', { tier: top }); },
    page() { RGS.emit('page'); },
    start() { RGS.start(); },
  } : Snd;

  /* ---------- Layout: the grid gets the largest square; the instrument lives in what is left ---------- */
  function place(node, x, y, w, h) { node.style.left = Math.round(x) + 'px'; node.style.top = Math.round(y) + 'px'; node.style.width = Math.round(w) + 'px'; node.style.height = Math.round(h) + 'px'; }
  function layout() {
    const W = el.root.clientWidth, H = el.root.clientHeight;
    if (W < 40 || H < 40) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (W === S.W && H === S.H && dpr === S.dpr) return;
    const land = W >= H * 1.12;
    let G, gx, gy, fr, strip = 0;
    const FB = A.boardFrame ? A.boardFrame() : 0;           // the painted frame needs its own width round the field
    // landscape (Lidor 2026-11-28): the bar floats over the room, raised off the bottom edge, with no black band; the
    // stage runs to the bottom of the screen and everything is laid out above the bar (Hb)
    const pnl = document.getElementById('lzPanel'), floatBar = land && pnl && getComputedStyle(pnl).position === 'absolute';
    const Hb = floatBar ? Math.max(120, H - pnl.offsetHeight - (parseFloat(getComputedStyle(pnl).bottom) || 0)) : H;
    if (land) {
      const pad = clamp(Hb * .028, 3, 14), small0 = Hb - pad * 2 < 240; fr = FB ? FB * 7 : small0 ? .08 : .2;
      // 20% smaller than the room allows (Lidor 2026-11-28): more room for the bar, the wizard and the right column
      G = Math.floor(Math.min((Hb - pad * 2) / (1 + 2 * fr / 7), W * .57) * .8); gx = Math.round((W - G) / 2);
      // the board stands on the same line as the wizard's feet (Lidor 2026-11-28): its frame's bottom edge just above the bar
      S.floorY = Math.round(Hb - pad); gy = Math.round(S.floorY - G - Math.max(2, G / 7 * fr));
    } else {
      // with bar B the mode knob and the RETROGRADE buy stand on the stage under the board: keep room for them
      const foot = document.querySelector('#lzApp.rg-barB') ? clamp(H * .2, 112, 150) : 0;   // two rows: mode knob, then the buys
      fr = FB ? FB * 7 : .1; strip = clamp(H * .2, 58, 136);
      G = Math.floor(Math.min((W - 8) / (1 + 2 * fr / 7), (H - strip - foot - 8) / (1 + 2 * fr / 7))); gx = Math.round((W - G) / 2);
      gy = Math.round(strip + (H - strip - foot - G) * .5);
    }
    const cs = G / 7, b = Math.max(2, Math.round(cs * fr)), M = Math.ceil(cs * .75) + b, small = G < 230;
    Object.assign(S, { W, H, dpr, G, gx, gy, cs, b, M, land, small, cx: gx + G / 2, cy: gy + G / 2 });
    const st = el.root.style;
    st.setProperty('--k', (G / 100).toFixed(3) + 'px'); st.setProperty('--m', (Math.min(W, H) / 100).toFixed(3) + 'px');
    st.setProperty('--vx', (S.cx / W * 100).toFixed(2) + '%'); st.setProperty('--vy', (S.cy / H * 100).toFixed(2) + '%');
    el.root.dataset.land = land ? '1' : '0'; el.root.dataset.small = small ? '1' : '0';
    // phone: the soft twinkle layer at 1x and the effects layer (painted light bursts, sparks) at 1.25x: 4x and 2.5x fewer
    // pixels to clear and fill every frame; the board's symbols stay at full sharpness
    S.odpr = land ? dpr : 1; S.fdpr = land ? dpr : Math.min(dpr, 1.25);
    el.orr.width = Math.round(W * S.odpr); el.orr.height = Math.round(H * S.odpr); el.fx.width = Math.round(W * S.fdpr); el.fx.height = Math.round(H * S.fdpr);
    el.grid.width = Math.round((G + M * 2) * dpr); el.grid.height = el.grid.width; place(el.grid, gx - M, gy - M, G + M * 2, G + M * 2);
    el.gbg.width = el.grid.width; el.gbg.height = el.grid.height; place(el.gbg, gx - M, gy - M, G + M * 2, G + M * 2); S.bgMix = -1;
    el.gund.width = el.grid.width; el.gund.height = el.grid.height; place(el.gund, gx - M, gy - M, G + M * 2, G + M * 2); place(el.b3d, gx - M, gy - M, G + M * 2, G + M * 2);
    S.plateN = A.plate(G, b, dpr, 'night'); S.plateR = A.plate(G, b, dpr, 'retro'); S.plateE = FB ? A.plate(G, b, dpr, 'ecl') : S.plateR;
    const px = Math.round(clamp(cs * dpr * 1.08, 64, 280));
    if (px !== S.spPx) { S.spPx = px; for (const s of PLANETS + 'WA') S.sprites[s] = A.sprite(s, px); }
    if (!S.glowGold) { S.glowGold = A.glow(96, '#ffd978'); S.glowBlue = A.glow(96, '#9fd0ff'); S.glowRose = A.glow(96, '#ff7aa8'); S.glowWhite = A.glow(96, '#ffffff'); S.shadow = A.glow(96, '#000000'); S.spark = A.spark(64); S.glowSym = {}; for (const s in SYMCOL) S.glowSym[s] = A.glow(96, SYMCOL[s][0]); }
    const rnd = A.seeded(91); S.tw = []; S.motes = [];
    for (let i = 0; i < (small ? 12 : 34); i++) { const x = rnd() * W, y = rnd() * H; if (x > gx - 4 && x < gx + G + 4 && y > gy - 4 && y < gy + G + 4) continue; S.tw.push({ x, y, ph: rnd() * TAU, sp: .5 + rnd() * 1.6, z: (small ? 3 : 5) + rnd() * (small ? 3 : 8) }); }
    for (let i = 0; i < (small ? 8 : 20); i++) S.motes.push({ x: rnd() * W, y: rnd() * H, z: (small ? 5 : 9) + rnd() * (small ? 8 : 22), a: .06 + rnd() * .14, v: .5 + rnd(), ph: rnd() * TAU });
    // the two instruments: ALIGNMENT dial and the plaque with the totals
    let D;
    if (land) {
      const gap = b + clamp(G * .03, 3, 14), colW = Math.min(gx - gap - 3, G * .78);
      D = Math.round(clamp(Math.min(colW * .86, H * .54), 34, 270));
      D = Math.round(clamp(Math.min(colW * .66, H * (H < 220 ? .34 : H < 420 ? .2 : .27)), 34, 210));   // (2026-11-28) a smaller dial: room for the knob and the buys at full size   // a short landscape phone: a smaller dial leaves room for the knob and the buys
      const top = Math.round(clamp(H * .03, 4, 22)), ah = Math.round(D * 1.12 + clamp(G * .06, 14, 34));
      // the right column carries the instruments (ALIGNMENT on top, the win cartouche under it); the whole left column is the wizard's
      place(el.align, gx + G + gap, top, colW, ah); place(el.plaque, gx + G + gap, top + ah, colW, Hb - top - ah);
      S.wizBox = { x: 0, y: Math.round(top * .5), w: gx - gap + Math.round(G * .04), h: S.floorY - Math.round(top * .5) }; S.wizBase = null;   // his feet on the board's line
    } else {
      const sh = gy - b - 3;
      D = Math.round(clamp(sh - 24, 34, 124));
      const wz = Math.round(clamp(sh * .78, 40, 120));
      D = Math.round(clamp(Math.min(sh - 24, (W - wz) * .24), 34, 124));   // a little smaller: the TOTAL WIN cartouche beside it gets the room
      const ic = document.querySelector('#lzApp.rg-barB') ? 58 : 0;   // bar B: the info/sound knobs stand at the right edge
      place(el.align, wz + 2, 0, D + 22, sh); place(el.plaque, wz + D + 28, 0, W - wz - D - 32 - ic, sh);
      // the logo stands at the top left: the wizard's bust starts under it (2026-11-28 review: the logo sat on his hat)
      const lg = clamp(Math.round(sh * .26), 22, 36);
      S.wizBox = { x: 0, y: lg, w: wz + 8, h: sh + Math.round(b * 2) - lg + Math.round(sh * .12), bust: true };
    }
    Dial.D = D; el.dial.style.width = el.dial.style.height = D + 'px'; el.dial.width = el.dial.height = Math.round(D * dpr);
    S.dialN = A.dialFace(el.dial.width, 'night'); S.dialR = A.dialFace(el.dial.width, 'retro');
    place(el.card, gx, gy, G, G); place(el.plus, gx, gy, G, G); place(el.mpop, gx, gy, G, G);
    placeWiz();
    S.dirty = true; S.fxLive = true;
    requestAnimationFrame(() => fitLine(el.align && el.align.querySelector('.rg-acap')));   // ALIGNMENT never wider than its column
  }

  /* ---------- Tokens ---------- */
  const newToken = (sym, col, row) => ({ sym, col, row, ox: 0, oy: 0, sc: 1, al: 1, glow: 0, lift: 0, sq: 0, shine: 0, yaw: 0 });
  /* 3D turntables: every symbol baked from its 3D model in FR frames around the vertical axis (tools/make-sprites-3d.mjs,
   * assets/sym/<code>.webp). A medallion sways on its own axis at rest and spins when it wins, lands or is born.
   * Until a strip has loaded (or without it) the front-on sprite is drawn. */
  // Two sets: a sharp sway set (256px, every 4 degrees between -24 and +24) for the board at rest, and the full turn
  // (160px, every 15 degrees) for spins, where the motion hides the lower detail.
  // tools/make-sprites-3d.mjs --frames=36 --fpx=192 --sa=10 --sstep=1.25 --spx=288: a full turn in 36 frames (10°), and the
  // resting sway in 17 frames 1.25° apart at 288 px, so the two frames blended between are almost the same picture (no ghost)
  const FR = 36, STRIP = {}, SWAY = {}, SA = 10, SSTEP = 1.25, SN = Math.round(SA * 2 / SSTEP) + 1;
  // The observatory (art/bg, tools/key-bg.mjs): a painted room whose open sky is cut out, over a separate sky that drifts.
  function loadRoom() {
    let n = 0; const done = () => { if (++n === 3) { S.room = true; el.root.classList.add('room'); S.dirty = true; } };
    for (const f of ['sky.jpg', 'room-wide.webp', 'room-tall.webp']) { const i = new Image(); i.onload = done; i.src = 'assets/bg/' + f; }
  }
  // the room answers the game: a cascade brightens the lamps for a beat
  function roomPulse(v = 1) { if (!el.room || api.reduced) return; el.room.style.setProperty('--pulse', String(v)); el.root.classList.remove('lit'); void el.room.offsetWidth; el.root.classList.add('lit'); }
  /* ---------- The Old Astronomer: when he acts, and the magic that leaves his hand ---------- */
  function placeWiz() {
    if (!S.wiz || !window.RGWiz) return;
    const b = S.wizBox; el.wiz.hidden = !b; el.wiz.classList.toggle('bust', !!(b && b.bust));
    // the contact shadow: drawn once per layout on its own small canvas under his feet (full figure only)
    if (!el.wizsh) { el.wizsh = document.createElement('canvas'); el.wizsh.className = 'rg-wizsh'; el.wizsh.setAttribute('aria-hidden', 'true'); el.wiz.before(el.wizsh); }
    el.wizsh.hidden = !b || b.bust;
    if (b && !b.bust && S.shadow) {
      const fh = b.h * .97, fw = Math.min(b.w * .98, fh * 2 / 3), w = fw * .78, h = Math.max(8, fh * .07), dpr = S.dpr;
      Object.assign(el.wizsh.style, { left: Math.round(b.x + b.w / 2 - w / 2) + 'px', top: Math.round(b.y + b.h - h * .62) + 'px', width: Math.round(w) + 'px', height: Math.round(h) + 'px' });
      el.wizsh.width = Math.round(w * dpr); el.wizsh.height = Math.round(h * dpr);
      const c = el.wizsh.getContext('2d'); c.globalAlpha = .7; c.drawImage(S.shadow, 0, 0, el.wizsh.width, el.wizsh.height);
    }
    if (b) RGWiz.frame(b.x, b.y, b.w, b.h, b.bust ? 'bust' : 'full');
  }
  let wizAt = 0;
  function wiz(name, o) { if (!S.wiz || api.reduced) return -1; const pk = RGWiz.act(name, o); if (pk >= 0) wizAt = performance.now(); return pk; }
  /* A spell: light gathers in his hands for the last 0.6 s before the gesture's peak (a glowing orb and a small turning
   * rune ring, sparks drawn in), then at the peak a comet with a long tail flies from his hands to the target and lands
   * with a burst, a shock ring and a flash on the board. power 1 = a win, 2 = a big spell, 3 = a summoning (crimson-gold). */
  function spellTo(tx, ty, power = 1, peakSec = .6) {
    if (!S.wiz || api.reduced) return;
    const now = performance.now(), rel = now + Math.max(.35, peakSec) * 1000 * api.speed();
    S.spells.push({ tx, ty, power, rel, fl: (420 + power * 90) * api.speed(), from: null, hit: false, trail: [] }); S.fxLive = true;
  }
  /* His magic on a win (the user: "his spells should run as a stream over the winning pieces"): the moment a cascade's
   * clusters light up, a glowing ribbon reaches from his hand to the cluster, and a current of light runs through the
   * cluster cell by cell, in the same order as the gold line (L.depth), with a spark where it arrives. Tied to the win and
   * only to it: no magic at any other time in the base game. */
  function streamWin(lines, power) {
    if (!S.wiz || api.reduced || !lines.length) return;
    const hd = RGWiz.hand('R'); if (!hd) return;
    RGWiz.glow(1);
    const col = SPELL_COL[Math.min(3, power)], sp = api.speed(), now = performance.now(), n = S.small ? 1 : 2;
    lines.forEach(({ L, w }, li) => {
      const cells = (Array.isArray(w.cells) ? w.cells : []).filter(k => k >= 0 && k < 49); if (!cells.length) return;
      const [rx, ry] = cellXY(L.root);
      S.beams.push({ tx: S.gx + rx, ty: S.gy + ry, t0: now + li * 60 * sp, dur: (700 + Math.min(500, L.maxD * 60)) * sp, power });
      for (const k of cells) {
        const [cx, cy] = cellXY(k), x = S.gx + cx, y = S.gy + cy, d = (L.depth[k] || 0), wait = (.12 + li * .06 + d * .055) * sp;
        for (let i = 0; i < n; i++) emit({ layer: 'f', kind: 1, x: hd.x, y: hd.y, cx: (hd.x + x) / 2 + (Math.random() - .5) * S.cs * 2, cy: Math.min(hd.y, y) - S.cs * (1.2 + Math.random() * 1.6), tx: x + (Math.random() - .5) * S.cs * .3, ty: y + (Math.random() - .5) * S.cs * .3, max: .42 + Math.random() * .2, wait: wait + i * .04, z: Math.max(1.3, S.cs * (.04 + Math.random() * .03)), col: col[(i + d) % 3] });
        // where the current arrives: the medallion flares, a gold ring opens on it and a star of light pops
        after((wait + .45) * 1000, () => { burstF(x, y, S.small ? 4 : 9, { cols: col, speed: .16, grav: 0, life: .6 }); shock(x, y, col[1], 480, .028); pulseRing(k, col[1], 560); S.stars.push({ x, y, t0: performance.now(), z: S.cs * (.9 + power * .15) }); S.fxLive = true; });
      }
    });
    S.fxLive = true;
  }
  // The ribbon from his hand to the cluster: three strands of light that twist around one another along a curve (a bright
  // white core, two coloured strands winding round it), a flare at his fingertips, a comet head running ahead. Drawn
  // with soft glow sprites (additive), not stroked lines, so it reads as light, not as a drawn line.
  function drawBeams(c, now) {
    let live = 0; const hd = S.wiz ? RGWiz.hand('R') : null;
    S.beams = S.beams.filter(b => now < b.t0 + b.dur);
    // the star that pops on each medallion as the current arrives (a turning four-point star that grows and fades)
    S.stars = S.stars.filter(o => now - o.t0 < 520);
    c.save(); c.globalCompositeOperation = 'lighter';
    for (const o of S.stars) { const p = (now - o.t0) / 520, z = o.z * (.4 + .9 * Math.sin(Math.min(1, p * 1.6) * PI / 2)), a = 1 - p; c.globalAlpha = a; c.save(); c.translate(o.x, o.y); c.rotate(p * 1.2); c.drawImage(S.spark, -z, -z, z * 2, z * 2); c.restore(); c.globalAlpha = a * .6; c.drawImage(S.glowGold, o.x - z * .8, o.y - z * .8, z * 1.6, z * 1.6); live++; }
    c.restore();
    if (!hd) return live;
    for (const b of S.beams) {
      if (now < b.t0) { live++; continue; }
      live++;
      const p = (now - b.t0) / b.dur, a = Math.min(1, p / .12) * (1 - Math.max(0, (p - .7) / .3)), reach = Math.min(1, p / .22);
      const cx = (hd.x + b.tx) / 2, cy = Math.min(hd.y, b.ty) - S.cs * 2.4, col = SPELL_COL[Math.min(3, b.power)], cs = S.cs;
      const at = q => { const v = 1 - q; return [v * v * hd.x + 2 * v * q * cx + q * q * b.tx, v * v * hd.y + 2 * v * q * cy + q * q * b.ty]; };
      const nrm = q => { const e = .01, [x0, y0] = at(Math.max(0, q - e)), [x1, y1] = at(Math.min(1, q + e)), dx = x1 - x0, dy = y1 - y0, l = Math.hypot(dx, dy) || 1; return [-dy / l, dx / l]; };
      const N = S.small ? 22 : 40, glowW = S.glowWhite, glowC = b.power >= 3 ? S.glowRose : S.glowGold, glowB = S.glowBlue;
      c.save(); c.globalCompositeOperation = 'lighter';
      for (let i = 0; i <= N; i++) {
        const t = i / N * reach, [x, y] = at(t), [nx, ny] = nrm(t), env = Math.sin(Math.min(1, t * 1.15) * PI) * .9 + .1, taper = 1 - t * .45;
        // the core
        let z = cs * .34 * taper; c.globalAlpha = a * .55; c.drawImage(glowW, x - z, y - z, z * 2, z * 2);
        // two strands winding around it
        for (const [ph, g, al] of [[0, glowC, .5], [PI, glowB, .38]]) {
          const off = cs * .42 * env * Math.sin(t * 13 - now * .011 + ph), sx = x + nx * off, sy = y + ny * off, zz = cs * .26 * taper;
          c.globalAlpha = a * al; c.drawImage(g, sx - zz, sy - zz, zz * 2, zz * 2);
        }
      }
      // light pulses flowing to the board
      for (let i = 0; i < 4; i++) { const q = ((now * .0021 + i / 4) % 1) * reach, [x, y] = at(q), z = cs * .42; c.globalAlpha = a; c.drawImage(S.spark, x - z, y - z, z * 2, z * 2); }
      // the comet head, while it is still travelling
      if (reach < 1) { const [x, y] = at(reach), z = cs * .9; c.globalAlpha = a; c.drawImage(glowW, x - z * .6, y - z * .6, z * 1.2, z * 1.2); c.drawImage(S.spark, x - z, y - z, z * 2, z * 2); }
      // the flare at his fingertips: a turning star in a soft halo
      { const z = cs * (1.1 + .15 * Math.sin(now * .02)); c.globalAlpha = a * .8; c.drawImage(glowC, hd.x - z, hd.y - z, z * 2, z * 2); c.save(); c.translate(hd.x, hd.y); c.rotate(now * .003); c.globalAlpha = a; c.drawImage(S.spark, -z * .7, -z * .7, z * 1.4, z * 1.4); c.restore(); }
      c.restore();
    }
    return live;
  }
  const SPELL_COL = [null, ['#fff6d0', '#ffd76a', '#bfe0ff'], ['#ffffff', '#ffe08a', '#9fd0ff'], ['#ffffff', '#ffd0e0', '#ff9ec0']];
  function drawSpells(c, now) {
    let live = 0;
    const m = Math.min(S.W, S.H);
    for (const sp of S.spells) {
      const t0 = sp.rel - 620 * api.speed(); if (now < t0) { live++; continue; }
      const col = SPELL_COL[sp.power], base = m * (.018 + sp.power * .008);
      c.save(); c.globalCompositeOperation = 'lighter';
      if (now < sp.rel) {                                            // charging in his hands
        const h = RGWiz.hand(sp.power >= 2 ? 'both' : 'R'); if (h) {
          const p = (now - t0) / (sp.rel - t0), r = base * (.4 + 1.6 * p) * (1 + .12 * Math.sin(now * .03));
          const gz = r * 2.6; c.globalAlpha = p; c.drawImage(sp.power >= 3 ? S.glowRose : S.glowGold, h.x - gz, h.y - gz, gz * 2, gz * 2); c.drawImage(S.glowWhite, h.x - gz * .5, h.y - gz * .5, gz, gz); c.globalAlpha = 1;
          fxSprite(c, FX[sp.power >= 3 ? 'violet' : 'gold'], h.x, h.y, r * 3.4, now * .0016, .35 + .75 * p);   // the painted flare gathering in his hand
          if (Math.random() < .8) { const a = Math.random() * TAU, d = r * (4 + Math.random() * 3); emit({ layer: 'f', kind: 1, x: h.x + Math.cos(a) * d, y: h.y + Math.sin(a) * d, cx: h.x + Math.cos(a + 1) * d * .5, cy: h.y + Math.sin(a + 1) * d * .5, tx: h.x, ty: h.y, max: .35, z: Math.max(1, base * .18), col: col[Math.floor(Math.random() * 3)] }); }
          sp.from = { x: h.x, y: h.y };
        }
      } else if (sp.from && now < sp.rel + sp.fl) {                   // the comet
        const p = (now - sp.rel) / sp.fl, e = easeInOut(p), f = sp.from, cx = (f.x + sp.tx) / 2, cy = Math.min(f.y, sp.ty) - m * (.12 + sp.power * .04);
        const at = q => { const v = 1 - q; return [v * v * f.x + 2 * v * q * cx + q * q * sp.tx, v * v * f.y + 2 * v * q * cy + q * q * sp.ty]; };
        for (let i = 16; i >= 0; i--) {                                 // tail: thinning, fading points behind the head
          const q = Math.max(0, e - i * .022), [x, y] = at(q), r = base * (1.4 - i * .07) , al = (1 - i / 17) * .85;
          const gz = r * 1.8; c.globalAlpha = al; c.drawImage(i < 2 ? S.glowWhite : sp.power >= 3 ? S.glowRose : S.glowGold, x - gz, y - gz, gz * 2, gz * 2); c.globalAlpha = 1;
        }
        const [hx, hy] = at(e), z = base * 3.2; c.drawImage(S.spark, hx - z, hy - z, z * 2, z * 2);
        if (Math.random() < .9) emit({ layer: 'f', x: hx, y: hy, vx: (Math.random() - .5) * m * .2, vy: (Math.random() - .5) * m * .2, max: .5, z: Math.max(1, base * .2), col: col[Math.floor(Math.random() * 3)], g: m * .3 });
      } else if (sp.from && !sp.hit) {                                // impact on the board
        sp.hit = true;
        burstF(sp.tx, sp.ty, (S.small ? 14 : 30) + sp.power * 16, { cols: col.concat(['#ffffff']), speed: .55 + sp.power * .12, grav: .3, life: 1.1 });
        shock(sp.tx, sp.ty, col[1], 800 + sp.power * 150, .45 + sp.power * .15); flash(.25 + sp.power * .15, 380); roomPulse(.8 + sp.power * .3);
        if (sp.power >= 2) shake(S.cs * (.03 + sp.power * .015), 260);
      }
      c.restore();
      if (!sp.hit || now < sp.rel + sp.fl + 200) live++;
    }
    S.spells = S.spells.filter(sp => !sp.hit || now < sp.rel + sp.fl + 200);
    return live;
  }
  // a stream of light from his casting hand to a point on the stage (stage px), with a flare at the hand
  function castTo(tx, ty, n = 26, cols) {
    if (!S.wiz || api.reduced) return;
    const hd = RGWiz.hand(); if (!hd) return;
    RGWiz.glow(1);
    const c = cols || ['#fff6d0', '#ffd76a', '#bfe0ff', '#ffffff'], cs = S.cs;
    burstF(hd.x, hd.y, S.small ? 6 : 14, { cols: c, speed: .25, grav: -.1, life: .9 });
    for (let i = 0; i < n; i++) emit({ layer: 'f', kind: 1, x: hd.x, y: hd.y, cx: (hd.x + tx) / 2 + (Math.random() - .5) * cs * 3, cy: Math.min(hd.y, ty) - cs * (1 + Math.random() * 2.5), tx: tx + (Math.random() - .5) * cs * 1.2, ty: ty + (Math.random() - .5) * cs * 1.2, max: .55 + Math.random() * .45, wait: i * .012, z: Math.max(1.4, cs * (.035 + Math.random() * .04)), col: c[i % c.length] });
    S.fxLive = true;
  }
  // the RETROGRADE buy: a click readies him; confirming it unleashes the summoning (rings round the board, streams, flash)
  function wizHooks() {
    document.addEventListener('click', e => {
      if (e.target.closest('.lz-feat')) { if (S.wiz) RGWiz.glow(1); }
      else if (e.target.closest('#lzBuyYes')) summonFx();
    }, true);
  }
  function summonFx() {
    S.wizPk = wiz('summon');
    if (api.reduced) return;
    const mx = S.gx + S.G / 2, my = S.gy + S.G / 2;
    spellTo(mx, my, 3, S.wizPk >= 0 ? S.wizPk : .6);
    flash(.9, 700); shake(S.cs * .08, 420); if (RGS) RGS.emit('buyConfirm'); else { Snd.swell(.9); Snd.trigger(); }
  }
  function amountPicker() {
    const sel = document.getElementById('lzAmtSel'), box = sel && sel.closest('.lz-amount'); if (!box) return;
    sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    box.setAttribute('role', 'button'); box.tabIndex = 0; box.setAttribute('aria-haspopup', 'listbox'); box.setAttribute('aria-label', 'Choose the play amount');
    const pop = document.createElement('div'); pop.className = 'rg-amt'; pop.hidden = true; pop.setAttribute('role', 'listbox'); pop.setAttribute('aria-label', 'Play amount');
    document.body.append(pop);
    const close = () => { pop.hidden = true; box.setAttribute('aria-expanded', 'false'); };
    const open = () => {
      if (sel.disabled || !sel.options.length) return;
      pop.replaceChildren(...[...sel.options].map(o => { const b = document.createElement('button'); b.type = 'button'; b.className = 'rg-amt-o'; b.textContent = o.textContent; b.dataset.v = o.value; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', String(o.value === sel.value)); return b; }));
      pop.hidden = false; box.setAttribute('aria-expanded', 'true');
      const r = box.getBoundingClientRect(), vw = document.documentElement.clientWidth, w = Math.min(320, vw - 16);
      pop.style.width = w + 'px'; pop.style.left = Math.max(8, Math.min(vw - 8 - w, r.left + r.width / 2 - w / 2)) + 'px';
      pop.style.bottom = Math.round(window.innerHeight - r.top + 10) + 'px'; pop.style.maxHeight = Math.max(80, Math.round(r.top - 20)) + 'px';
      const cur = pop.querySelector('[aria-selected="true"]'); if (cur) { cur.scrollIntoView({ block: 'center' }); cur.focus({ preventScroll: true }); }
    };
    box.addEventListener('click', e => { e.preventDefault(); if (pop.hidden) open(); else close(); });
    box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); if (pop.hidden) open(); else close(); } });
    pop.addEventListener('click', e => { const b = e.target.closest('.rg-amt-o'); if (!b) return; sel.value = b.dataset.v; sel.dispatchEvent(new Event('change', { bubbles: true })); close(); box.focus({ preventScroll: true }); });
    pop.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); close(); box.focus({ preventScroll: true }); } });
    document.addEventListener('pointerdown', e => { if (!pop.hidden && !pop.contains(e.target) && !box.contains(e.target)) close(); }, true);
    window.addEventListener('resize', close);
  }
  // the resting sway loads at once; the full-turn strips (only for wins and spins) after PLAY: until then a turn uses the
  // still sprite (first load, studio standard 8 MB)
  let turnsAsked = false;
  // GPU warm-up (2026-11-28, Lidor on a PC in Stake Engine: "still limping"). The first time each picture is drawn, or
  // drawn in a new way (additive light, rotated, scaled, faded), the graphics card uploads it, builds its smaller
  // copies and compiles the shader for it: on Windows that froze the screen for 100-330 ms in the middle of the first
  // win. Every picture a round uses is drawn once, almost invisible, on each game canvas while the intro is showing,
  // and again after the later pictures arrive.
  function warmGPU() {
    if (!el.fxC) return;
    const ims = [FX.gold, FX.violet, FX.dust, KNOB, KNOBR, S.spark, S.glowGold, S.glowBlue, S.glowRose, S.glowWhite, S.shadow, ...Object.values(S.glowSym || {}), ...Object.values(FCACHE).map(e => e.cv), ...Object.values(BM)]
      .filter(im => im && (im.width || im.naturalWidth));
    for (const c of [el.fxC, el.gridC, el.orrC, el.dialC]) {
      if (!c) continue;
      c.save();
      for (const mode of ['source-over', 'lighter']) {
        c.globalCompositeOperation = mode; c.globalAlpha = .004;
        for (const im of ims) {
          c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(im, 0, 0, 40, 40);
          c.setTransform(.7, .7, -.7, .7, 60, 20); c.drawImage(im, 0, 0, 90, 90);          // rotated and scaled
        }
        c.setTransform(1, 0, 0, 1, 0, 0); c.lineCap = 'round'; c.lineWidth = 3; c.strokeStyle = '#fff'; c.beginPath(); c.moveTo(2, 2); c.lineTo(30, 20); c.stroke();
        c.fillStyle = '#fff'; c.beginPath(); c.arc(20, 20, 10, 0, 6.3); c.fill();   // station:ok invisible GPU warm-up, never seen
      }
      c.restore(); c.save(); c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, 200, 200); c.restore();
    }
    S.dirty = true;
  }
  function loadLater() { if (window.RGWiz && RGWiz.loadRest) RGWiz.loadRest(); if (S.b3d === false) loadTurns(); setTimeout(warmGPU, 2500); if (window.RGSound && RGSound.loadRest) RGSound.loadRest(); }
  // each strip is decoded off the main thread (createImageBitmap) before it is cut into the small atlas, so neither the
  // load nor the cut ever decodes a 5000-7000 px picture in the middle of a frame
  const BM = {};
  function bitmap(img, key) { if (window.createImageBitmap) createImageBitmap(img).then(b => { BM[key] = b; }, () => { BM[key] = img; }); else BM[key] = img; }
  function loadTurns() { if (turnsAsked) return; turnsAsked = true; for (const s of PLANETS + 'WA') { const i = new Image(); i.onload = () => { STRIP[s] = i; bitmap(i, s + 't'); S.dirty = true; }; i.src = 'assets/sym/' + s + '.webp'; } }
  function loadStrips() {
    for (const s of PLANETS + 'WA') {
      const j = new Image(); j.onload = () => { SWAY[s] = j; bitmap(j, s + 's'); S.dirty = true; }; j.src = 'assets/sym/' + s + '-sway.webp';
    }
  }
  // yaw in degrees (0 = facing the player). Between two baked frames the nearer one leads and the other fades in.
  // Phones (2026-11-27, "the motion is not smooth"): the strips are 4896-6912 px wide, above many phones' GPU texture
  // limit, and every token scaled its 192-288 px frame down on every frame. Each strip is now re-cut once into a small
  // grid atlas at the board's own device size (FCACHE), built one strip per frame so the cut never stalls, and drawn
  // 1:1. At rest (frames 1.25 degrees apart) only the nearest frame is drawn; the blend stays for spins (10 degrees).
  const FCACHE = {}, fqueue = [];
  function fkey(sym, sway) { return sym + (sway ? 's' : 't'); }
  function fcache(sym, sway) {
    const src = sway ? SWAY[sym] : STRIP[sym]; if (!src || !src.width || !S.spPx) return null;
    const k = fkey(sym, sway), e = FCACHE[k];
    if (e && e.px === S.spPx && e.src === src) return e;
    if (!fqueue.includes(k)) fqueue.push(k);
    return null;
  }
  function fbuild() {                                       // called once per animation frame: cuts one strip
    const k = fqueue[0]; if (!k) return;
    const bm = BM[k]; if (!bm) return;            // still decoding in the background: try again next frame
    fqueue.shift();
    const sym = k[0], sway = k[1] === 's', img = sway ? SWAY[sym] : STRIP[sym]; if (!img || !img.width) return;
    const src = bm;
    const fp = src.height, n = Math.round(src.width / fp), P = S.spPx, cols = Math.min(n, 8), rows = Math.ceil(n / cols);
    const cv = document.createElement('canvas'); cv.width = cols * P; cv.height = rows * P;
    const c = cv.getContext('2d'); c.imageSmoothingQuality = 'high';
    for (let i = 0; i < n; i++) c.drawImage(src, i * fp, 0, fp, fp, (i % cols) * P, Math.floor(i / cols) * P, P, P);
    FCACHE[k] = { cv, px: P, n, cols, src: img };
  }
  function fdraw(c, e, i, x, y, w, h) { c.drawImage(e.cv, (i % e.cols) * e.px, Math.floor(i / e.cols) * e.px, e.px, e.px, x, y, w, h); }
  // Medallions off the board (intro orbit, the conjunction, planets flung out of a big win) are live 3D too: the batch
  // is rendered in one go into a small grid (RGBoard3D.atlas) and each one is copied where it belongs.
  function live(list, size) {
    if (!list.length || !window.RGBoard3D || !RGBoard3D.ready) return null;
    return RGBoard3D.atlas(list, Math.round(clamp(size, 40, 200)));
  }
  function atlasDraw(c, at, i, x, y, w, h) {
    const d = at.d, px = at.px * d;
    c.drawImage(at.cv, (i % at.cols) * px, Math.floor(i / at.cols) * px, px, px, x, y, w, h);
  }
  function drawSym(c, sym, yaw, x, y, w, h) {
    const sw = SWAY[sym], ry = ((yaw % 360) + 540) % 360 - 180;
    if (sw && sw.width && Math.abs(ry) <= SA) {
      const f = (ry + SA) / SSTEP, f0 = Math.min(SN - 1, Math.round(f)), e = w * S.dpr > S.spPx * 1.3 ? null : fcache(sym, true);   // big draws (intro, bursts) keep the full frame
      if (e) { fdraw(c, e, f0, x, y, w, h); return; }
      const b = BM[sym + 's'], fp = sw.height;
      if (b) c.drawImage(b, f0 * fp, 0, fp, fp, x, y, w, h); else { const sp = S.sprites[sym]; if (sp) c.drawImage(sp, x, y, w, h); }   // never draw the undecoded strip
      return;
    }
    const st = STRIP[sym];
    if (!st || !st.width) { const sp = S.sprites[sym] || S.sprites.L; if (sp) c.drawImage(sp, x, y, w, h); return; }
    const f = ((yaw / 360 * FR) % FR + FR) % FR, f0 = Math.floor(f), u = f - f0, a = c.globalAlpha, e = w * S.dpr > S.spPx * 1.3 ? null : fcache(sym, false), fp = st.height;
    const bt = BM[sym + 't'];
    if (!e && !bt) { const sp = S.sprites[sym] || S.sprites.L; if (sp) c.drawImage(sp, x, y, w, h); return; }   // the strip is still decoding
    if (e) fdraw(c, e, f0, x, y, w, h); else c.drawImage(bt, f0 * fp, 0, fp, fp, x, y, w, h);
    if (u > .04) { c.globalAlpha = a * u; if (e) fdraw(c, e, (f0 + 1) % FR, x, y, w, h); else c.drawImage(bt, ((f0 + 1) % FR) * fp, 0, fp, fp, x, y, w, h); c.globalAlpha = a; }
  }
  // the board breathes: a slow wave of sway runs across the orrery (none with reduced motion)
  const sway = tk => (api && api.reduced ? 0 : 9.5 * Math.sin(S.t * 1.05 + tk.col * .85 + tk.row * .55));
  function spin(tk, turns, ms, delay = 0) { if (api.reduced) return; tween(ms * api.speed(), q => { tk.yaw = 360 * turns * q; }, { delay: delay * api.speed(), ease: easeInOut, done: () => { tk.yaw = 0; } }); }
  function buildTokens(g) { S.grid = g.slice(); for (let i = 0; i < 49; i++) S.tok[i] = newToken(g[i], i % 7, (i / 7) | 0); S.hasScat = g.includes('A'); S.dirty = true; }
  // The grid shown before the first round: decoration only, with no cluster on it.
  function restingGrid() {
    const rnd = A.seeded(20261113), w = [20, 19, 17, 15, 12, 10, 7], tot = w.reduce((s, v) => s + v, 0), g = [];
    for (let i = 0; i < 49; i++) {
      for (let tries = 0; tries < 30; tries++) {
        let r = rnd() * tot, k = 0; while (k < 6 && (r -= w[k]) >= 0) k++;
        const s = PLANETS[k];
        if ((i % 7 && g[i - 1] === s) || (i >= 7 && g[i - 7] === s)) continue;
        g[i] = s; break;
      }
      if (!g[i]) g[i] = PLANETS[i % 7];
    }
    g[16] = 'A'; g[32] = 'W';
    return g;
  }
  // a fall with weight: accelerate, hit, squash against the floor (the ceiling in RETROGRADE), one small hop
  function dropTween(tk, start, dur, delay, heavy) {
    const hop = Math.sign(start) * (heavy ? .05 : .09);
    tk.oy = start;
    tween(dur, (q, p) => {
      if (p < .72) { const u = p / .72; tk.oy = start * (1 - u * u); tk.sq = 0; }
      else { const u = (p - .72) / .28; tk.oy = hop * Math.sin(u * PI) * (1 - u * .4); tk.sq = (heavy ? .2 : .13) * Math.sin(Math.min(1, u * 2.2) * PI) * (1 - u); tk.yaw = (tk.col % 2 ? 1 : -1) * 34 * Math.sin(u * PI) * (1 - u); }
      if (p >= 1) { tk.oy = 0; tk.sq = 0; tk.yaw = 0; }
    }, { delay, ease: linear });
  }
  function pulseRing(k, col, dur = 700) { const [x, y] = cellXY(k), r = { x, y, p: 0, col, size: 0, kind: fxKind(col), rot: Math.random() * TAU, turn: (Math.random() < .5 ? -1 : 1) * (.6 + Math.random() * .6) }; S.rings.push(r); tween(dur * api.speed(), q => { r.p = q; }, { done: () => { const i = S.rings.indexOf(r); if (i >= 0) S.rings.splice(i, 1); } }); }
  // the constellation that links a cluster: a breadth-first tree from the cell nearest its middle
  function buildLine(cells) {
    const set = new Set(cells); let mx = 0, my = 0;
    for (const k of cells) { mx += k % 7; my += (k / 7) | 0; }
    mx /= cells.length; my /= cells.length;
    let root = cells[0], best = 1e9;
    for (const k of cells) { const d = Math.abs(k % 7 - mx) + Math.abs(((k / 7) | 0) - my); if (d < best) { best = d; root = k; } }
    const depth = {}, segs = [], q = [root]; depth[root] = 0; let maxD = 0;
    while (q.length) {
      const k = q.shift(), c = k % 7;
      for (const j of [k - 7, k + 7, c > 0 ? k - 1 : -1, c < 6 ? k + 1 : -1]) { if (j < 0 || j > 48 || !set.has(j) || depth[j] !== undefined) continue; depth[j] = depth[k] + 1; maxD = Math.max(maxD, depth[j]); segs.push({ a: k, b: j, d: depth[k] }); q.push(j); }
    }
    return { cells, root, depth, segs, maxD, p: 0, al: 1 };
  }

  /* ---------- HUD ---------- */
  // a long amount (BTC with 8 decimals, the max win) shrinks to fit the cartouche instead of being cut (station item 12)
  function fitTotal(str) {
    const t = el.total, p = t && t.parentElement; if (!p) return;
    t.style.removeProperty('font-size'); Gold.into(t, str, true);    // gold digits fit themselves; plain text (BTC) is measured below
    if (t._gc && t._gc.isConnected) return;
    requestAnimationFrame(() => { const avail = p.clientWidth * .94, w = t.scrollWidth; if (w > avail && avail > 0) { const f = parseFloat(getComputedStyle(t).fontSize) || 16; t.style.setProperty('font-size', Math.max(7, f * avail / w).toFixed(1) + 'px', 'important'); } });
  }
  function popTotal() { if (api.reduced) return; el.pl.classList.remove('pop'); void el.pl.offsetWidth; el.pl.classList.add('pop'); }
  function setTotal(units, animate) {
    const from = S.totalShown; S.totalShown = units;
    if (S.totalTw) S.totalTw.dead = true;
    el.total.classList.toggle('zero', units <= 0);
    if (!animate || units <= from || api.reduced) { fitTotal(api.winMoney(units)); return; }
    S.totalTw = tween(440 * api.speed(), (q, p) => { if (p >= 1) fitTotal(api.winMoney(units)); else Gold.into(el.total, api.money(Math.round(from + (units - from) * q)), true); });
    popTotal();
  }
  function showLeft() { el.left.textContent = String(S.left); el.leftLbl.textContent = S.left === 1 ? 'spin left' : 'spins left'; }
  function setMult(m, step) {
    if (m === Dial.m) return;
    if (RGS && S.retro) setTimeout(() => RGS.level(rgLevel(S.level)), 0);   // the feature music climbs with ALIGNMENT
    const up = m > Dial.m, was = Dial.m; Dial.m = m; if (m > S.peak) S.peak = m;
    Dial.axisT = -PI / 2 + (S.retro ? -1 : 1) * (m - 1) * (PI / 6);
    if (step && up) {
      Dial.mf = m; Dial.pulse = 1; tween(560 * api.speed(), q => { Dial.pulse = 1 - q; }, { ease: linear });
      const n = api.reduced ? 0 : 9;
      for (let i = 0; i < n; i++) Dial.sp.push({ a: Dial.axisT + (Math.random() - .5) * 1.4, r: .4 + Math.random() * .4, v: .3 + Math.random() * .7, life: 0, max: .4 + Math.random() * .4 });
      Sfx.step(m, S.retro);
      // from x3 the alignment announces itself over the board, and the planets turn in a wave as the orrery tightens
      if (m >= 3 && !api.reduced && el.mpop) {
        el.mpop.innerHTML = '<small>ALIGNMENT</small><b></b>'; Gold.into(el.mpop.querySelector('b'), '×' + m); el.mpop.dataset.hot = String(Math.min(4, m - 2));
        el.mpop.classList.remove('on'); void el.mpop.offsetWidth; el.mpop.classList.add('on');
        for (const tk of S.tok) if (tk) spin(tk, 1, 560, (S.retro ? 6 - tk.row : tk.row) * 45 + tk.col * 12);
        if (m >= 5) shake(S.cs * Math.min(.08, .02 + m * .006), 260);
      }
    } else if (!up && was > 1) { Dial.release = 1; tween(700 * api.speed(), q => { Dial.release = 1 - q; }, { ease: linear }); if (was > 2) Sfx.unwind(was); }   // the alignment lets go
    else Dial.mf = m;
  }
  function setRetro(on, instant) {
    S.retro = on;
    el.root.classList.toggle('snap', !!instant); el.root.classList.toggle('retro', on);
    S.ringTarget = on ? -2.1 : 1;
    if (instant) { S.retroMix = on ? 1 : 0; S.ringV = S.ringTarget; } else { const a = S.retroMix, b = on ? 1 : 0; tween(1300 * api.speed(), q => { S.retroMix = a + (b - a) * q; }, { ease: easeInOut }); }
    S.dirty = true;
  }
  // one line of text shrunk until it fits its box (2026-11-28 review: card titles spilled a few px)
  function fitLine(t) {
    if (!t) return; t.style.removeProperty('font-size');
    const box = t.parentElement; if (!box || !box.clientWidth) return;
    let fs = parseFloat(getComputedStyle(t).fontSize) || 16; const max = box.clientWidth * .96;
    while (fs > 8 && t.scrollWidth > max) { fs -= 1; t.style.setProperty('font-size', fs + 'px', 'important'); }
  }
  function showCard(kick, title, sub, note, cls) {
    el.cardKick.textContent = kick; el.cardTitle.textContent = title; el.cardSub.innerHTML = sub; el.cardNote.textContent = note;
    el.card.className = 'rg-card ' + (cls || ''); void el.card.offsetWidth; el.card.classList.add('on');
    fitLine(el.cardTitle);
  }
  function setLevel(l, now) { S.level = l; if (RGS) RGS.music(rgSet(), rgLevel(l)); else Music.set(l, S.retro, now); }

  /* ---------- Drawing: the orrery behind the grid ---------- */
  function drawOrrery(dt) {
    const c = el.orrC, dpr = S.odpr || S.dpr, W = S.W, H = S.H;
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, el.orr.width, el.orr.height);
    c.globalCompositeOperation = 'lighter';
    for (const t of S.tw) { const al = Math.pow(Math.max(0, Math.sin(S.t * t.sp + t.ph)), 3); if (al < .04) continue; c.globalAlpha = al; const z = t.z * dpr; c.drawImage(S.spark, t.x * dpr - z, t.y * dpr - z, z * 2, z * 2); }
    // near dust: slow soft motes; they sink in the base game and rise in RETROGRADE
    const dir = S.ringV >= 0 ? 1 : -1, sp = Math.abs(S.ringV), glow = S.retroMix > .5 ? S.glowRose : S.glowBlue;
    for (const m of S.motes) {
      m.y += dir * m.v * dt * H * .012 * (.4 + sp); m.x += Math.sin(S.t * .3 + m.ph) * dt * W * .004;
      if (m.y > H + m.z) m.y = -m.z; else if (m.y < -m.z) m.y = H + m.z;
      c.globalAlpha = m.a * (.7 + .3 * Math.sin(S.t * .8 + m.ph)); const z = m.z * dpr; c.drawImage(glow, m.x * dpr - z, m.y * dpr - z, z * 2, z * 2);
    }
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    const sh = S.shoot;
    if (sh) {
      const p = sh.p, x = (sh.x + sh.dx * p) * dpr, y = (sh.y + sh.dy * p) * dpr, tx = x - sh.dx * .16 * dpr, ty = y - sh.dy * .16 * dpr, g = c.createLinearGradient(x, y, tx, ty); // station:ok the fading light trail of a shooting star in the painted sky
      g.addColorStop(0, `rgba(255,255,255,${(Math.sin(p * PI) * .9).toFixed(3)})`); g.addColorStop(1, 'rgba(255,255,255,0)');
      c.strokeStyle = g; c.lineWidth = 1.6 * dpr; c.lineCap = 'round'; c.beginPath(); c.moveTo(x, y); c.lineTo(tx, ty); c.stroke();
    }
  }

  /* ---------- Drawing: the grid ---------- */
  // a medallion on the board. With the 3D board (board3d.js) its body is a live model: under it (2D, el.gund) its lift
  // shadow and glow, then the model, then over it (2D, el.grid) the passing shine. Without 3D: the old baked sprites.
  function tokenGeo(tk) {
    const cs = S.cs, lift = tk.lift, x = (tk.col + .5 + tk.ox) * cs, y0 = (tk.row + .5 + tk.oy) * cs, y = y0 - lift * cs * .06, z = cs * 1.08 * tk.sc * (1 + lift * .1);
    return { cs, lift, x, y0, y, z };
  }
  function drawTokenUnder(c, tk) {
    if (tk.al <= .01) return;
    const { cs, lift, x, y0, y, z } = tokenGeo(tk);
    if (y0 < -cs || y0 > S.G + cs) return;
    const special = tk.sym === 'A', beat = special ? (S.antic ? .8 + .35 * Math.sin(S.t * 9 + tk.col) : .32 + .14 * Math.sin(S.t * 3.2 + tk.col)) : 0, gl = Math.max(tk.glow, beat);
    if (lift > .02) { c.globalAlpha = Math.min(1, .5 * lift) * tk.al; c.drawImage(S.shadow, x - z * .55 + cs * .07 * lift, y0 - z * .5 + cs * .12 * lift, z * 1.1, z * 1.1); }
    if (gl > .01) { c.globalAlpha = Math.min(1, gl) * tk.al * .85; const gz = cs * 1.8; c.drawImage(special ? S.glowRose : tk.hue && S.glowSym ? S.glowSym[tk.sym] || S.glowGold : tk.sym === 'W' ? S.glowBlue : S.glowGold, x - gz / 2, y - gz / 2, gz, gz); }
    c.globalAlpha = 1;
  }
  function tokenItem(tk, M) {
    if (tk.al <= .01) return null;
    const { cs, lift, x, y0, y, z } = tokenGeo(tk);
    if (y0 < -cs || y0 > S.G + cs) return null;
    const special = tk.sym === 'A', a = S.antic && !special && tk.col < S.antic.col && tk.oy === 0 ? tk.al * .42 : tk.al;
    const yaw = tk.yaw + sway(tk) + (special && S.antic ? S.t * 320 : 0), sq = tk.sq > .004 ? tk.sq : 0;
    const sx = 1 + sq * .55, sy = 1 - sq, d = sq ? (S.retro ? -1 : 1) * z * sq * .5 : 0;
    // a slow nod (pitch) on top of the sway, so the light rolls over the brass at rest
    const pitch = api && api.reduced ? 0 : 4 * Math.sin(S.t * .8 + tk.col * .6 - tk.row * .4);
    return { sym: tk.sym, x: x + M, y: y + d + M, z, sx, sy, yaw, pitch, a, lift };
  }
  function drawTokenOver(c, tk) {
    if (tk.al <= .01) return;
    const { cs, x, y0, y } = tokenGeo(tk);
    if (y0 < -cs || y0 > S.G + cs) return;
    if (tk.shine > .01 && tk.shine < .99) { const s = tk.shine, gz = cs * .62; c.globalCompositeOperation = 'lighter'; c.globalAlpha = Math.sin(s * PI) * .8 * tk.al; c.drawImage(S.glowWhite, x + (s - .5) * cs * .7 - gz / 2, y + (s - .5) * cs * .5 - gz / 2, gz, gz); c.globalCompositeOperation = 'source-over'; }
    c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
  }
  function drawToken(c, tk) {               // the 2D fallback (no WebGL): everything on one canvas, as before
    drawTokenUnder(c, tk);
    if (tk.al <= .01) return;
    const it = tokenItem(tk, 0); if (!it) return;
    c.globalAlpha = it.a;
    if (it.sx !== 1) drawSym(c, tk.sym, it.yaw, it.x - it.z * it.sx / 2, it.y - it.z * it.sy / 2, it.z * it.sx, it.z * it.sy);
    else drawSym(c, tk.sym, it.yaw, it.x - it.z / 2, it.y - it.z / 2, it.z, it.z);
    drawTokenOver(c, tk);
  }

  function drawParticles(c, layer) {
    c.globalCompositeOperation = 'lighter';
    const flung = [];
    for (const p of POOL) if (p.on && p.layer === layer && p.kind === 3 && p.wait <= 0 && p.life < p.max) flung.push(p);
    const fat = live(flung.map(p => ({ sym: p.sym, yaw: p.yaw + p.life * p.spin, pitch: p.life * p.spin * .35 })), Math.max(0, ...flung.map(p => p.z)));
    let n = 0;
    for (const p of POOL) {
      if (!p.on || p.layer !== layer) continue;
      n++;
      if (p.wait > 0) continue;
      const u = p.life / p.max, al = p.kind === 1 ? Math.min(1, u * 6) * (1 - Math.max(0, u - .85) / .15) : 1 - u;
      if (al <= 0) continue;
      c.globalAlpha = al * p.a;
      if (p.kind === 3) { const z = p.z; c.globalCompositeOperation = 'source-over'; c.globalAlpha = Math.min(1, (1 - u) * 3) * p.a; if (fat) atlasDraw(c, fat, flung.indexOf(p), p.x - z / 2, p.y - z / 2, z, z); else drawSym(c, p.sym, p.yaw + p.life * p.spin, p.x - z / 2, p.y - z / 2, z, z); c.globalCompositeOperation = 'lighter'; }
      else if (p.kind === 2) {
        const g = c.createLinearGradient(p.x, p.y, p.x - p.vx * .09, p.y - p.vy * .09); g.addColorStop(0, p.col); g.addColorStop(1, 'rgba(255,255,255,0)'); // station:ok the fading light trail of a meteor particle
        c.strokeStyle = g; c.lineWidth = p.z; c.lineCap = 'round'; c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x - p.vx * .09, p.y - p.vy * .09); c.stroke();
        const z = p.z * 3.2; c.drawImage(S.spark, p.x - z, p.y - z, z * 2, z * 2);
      } else if (p.kind === 1) { const z = p.z * 2.6; c.drawImage(S.glowGold, p.x - z, p.y - z, z * 2, z * 2); c.fillStyle = '#fff'; c.beginPath(); c.arc(p.x, p.y, p.z * .5, 0, TAU); c.fill(); }   // station:ok the 1-3 px white core of a light mote (a particle, not a ring)
      else { c.fillStyle = p.col; c.beginPath(); c.arc(p.x, p.y, p.z * (.5 + al * .6), 0, TAU); c.fill(); }   // station:ok a dust particle (a 1-4 px dot, not a ring)
    }
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    return n;
  }
  function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function drawGridBg() {
    const c = el.gbgC, dpr = S.dpr, M = S.M, G = S.G, cs = S.cs, b = S.b;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, G + M * 2, G + M * 2); c.imageSmoothingQuality = 'high';
    // a soft shadow lifts the whole instrument off the sky
    c.globalAlpha = .6; c.drawImage(S.shadow, M - b - cs * .55, M - b - cs * .35, G + b * 2 + cs * 1.1, G + b * 2 + cs * 1.2); c.globalAlpha = 1;
    c.drawImage(S.plateN, M - b, M - b, G + b * 2, G + b * 2);
    if (S.retroMix > .01) { c.globalAlpha = S.retroMix; c.drawImage(S.ecl && S.plateE ? S.plateE : S.plateR, M - b, M - b, G + b * 2, G + b * 2); c.globalAlpha = 1; }
  }
  function drawGrid() {
    const c = el.gridC, dpr = S.dpr, M = S.M, G = S.G, cs = S.cs, b = S.b;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, G + M * 2, G + M * 2);
    c.imageSmoothingQuality = 'high';
    // the painted plate is on its own canvas below (el.gbg, drawGridBg): phones no longer redraw it 60 times a second
    const mix = Math.round((S.retroMix || 0) * 64) / 64 + (S.ecl ? 2 : 0);
    if (mix !== S.bgMix) { S.bgMix = mix; drawGridBg(); }
    c.save(); c.translate(M, M);
    const B3 = window.RGBoard3D && RGBoard3D.ready && S.b3d !== false;
    const u = el.gundC;
    if (B3) { u.setTransform(dpr, 0, 0, dpr, 0, 0); u.clearRect(0, 0, G + M * 2, G + M * 2); u.save(); u.translate(M, M); }
    { const c = B3 ? u : el.gridC;                 // under the medallions
    if (S.antic) { const x = S.antic.col * cs, a = .16 + .1 * Math.sin(S.t * 14); c.fillStyle = `rgba(255,170,150,${a.toFixed(3)})`; c.fillRect(x, 0, cs, G); }
    for (const q of S.cellGlow) {
      if (q.al <= .01) continue;
      const x = (q.k % 7) * cs, y = ((q.k / 7) | 0) * cs, i = cs * .035;
      rr(c, x + i, y + i, cs - i * 2, cs - i * 2, cs * .18);
      c.fillStyle = `rgba(255,214,120,${(.2 * q.al).toFixed(3)})`; c.fill(); c.strokeStyle = `rgba(255,232,160,${(.7 * q.al).toFixed(3)})`; c.lineWidth = Math.max(1, cs * .022); c.stroke();
    }
    }
    if (B3) u.restore();
    const order = [...S.exiting], lifted = [];
    for (const tk of S.tok) if (tk) (tk.lift > .02 ? lifted : order).push(tk);
    order.push(...lifted, ...S.dying);                                    // lifted medallions pass over their neighbours
    if (B3) {
      u.save(); u.translate(M, M); u.beginPath(); u.rect(0, 0, G, G); u.clip();
      const items = [];
      for (const tk of order) { drawTokenUnder(u, tk); const it = tokenItem(tk, M); if (it) items.push(it); }
      u.restore();
      RGBoard3D.render(items, { w: G + M * 2, h: G + M * 2, dpr, clip: [M, M, G, G] });
      c.save(); c.beginPath(); c.rect(0, 0, G, G); c.clip();
      for (const tk of order) drawTokenOver(c, tk);
      c.globalAlpha = 1; c.restore();
    } else {
      c.save(); c.beginPath(); c.rect(0, 0, G, G); c.clip();
      for (const tk of order) drawToken(c, tk);
      c.globalAlpha = 1; c.restore();
    }
    for (const r of S.rings) drawBurst(c, r, r.x, r.y, cs * 1.25);            // a painted light burst on the cell
    // constellation lines, each drawn cell to cell behind a travelling spark
    c.lineCap = 'round';
    for (const L of S.lines) {
      if (L.al <= .01) continue;
      const head = L.p * (L.maxD + 1.001);
      for (const [lw, col, a] of [[cs * .22, '#ffc24a', .22], [cs * .1, '#ffe08a', .5], [cs * .045, '#fffbe6', 1]]) {
        c.lineWidth = Math.max(1, lw); c.strokeStyle = A.rgba(col, (a * L.al).toFixed(3)); c.beginPath();
        for (const s of L.segs) { const q = clamp(head - s.d, 0, 1); if (q <= 0) continue; const [ax, ay] = cellXY(s.a), [bx, by] = cellXY(s.b); c.moveTo(ax, ay); c.lineTo(ax + (bx - ax) * q, ay + (by - ay) * q); }
        c.stroke();
      }
      c.globalCompositeOperation = 'lighter';
      for (const k of L.cells) { const q = clamp(head - L.depth[k] + .15, 0, 1); if (q <= 0) continue; const [x, y] = cellXY(k), z = cs * .3 * (.4 + .6 * q) * (k === L.root ? 1.5 : 1) * (1 + .12 * Math.sin(S.t * 9 + k)); c.globalAlpha = L.al * q; c.drawImage(S.spark, x - z, y - z, z * 2, z * 2); }
      if (L.p < 1) for (const s of L.segs) { const q = head - s.d; if (q <= 0 || q >= 1) continue; const [ax, ay] = cellXY(s.a), [bx, by] = cellXY(s.b), z = cs * .42; c.globalAlpha = L.al; c.drawImage(S.spark, ax + (bx - ax) * q - z, ay + (by - ay) * q - z, z * 2, z * 2); c.drawImage(S.glowGold, ax + (bx - ax) * q - z, ay + (by - ay) * q - z, z * 2, z * 2); }
      c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    drawParticles(c, 'g');
    if (S.glint) { const gl = S.glint, tk = gl.tk, a = Math.sin(gl.p * PI), z = cs * .42 * a; c.globalAlpha = a; c.drawImage(S.spark, (tk.col + .5) * cs - cs * .17 - z, (tk.row + .5) * cs - cs * .2 - z, z * 2, z * 2); c.globalAlpha = 1; }
    // the win on a small enamel banner at each cluster, with its ALIGNMENT and (for large clusters) a constellation name
    if (S.labels.length) {
      const fs = clamp(cs * .5, 12, 44);
      c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
      for (const l of S.labels) {
        if (l.al <= .01) continue;
        c.font = `800 ${fs}px Jost, system-ui, sans-serif`;
        const gold = Gold.can(l.text), tw = gold ? Gold.measure(l.text, fs * 1.05) : c.measureText(l.text).width, bw = tw + fs * 1.25, bh = fs * 1.62, half = bw * l.sc / 2 + fs * (l.tag ? .7 : .2);
        const x = clamp(l.x, Math.min(half, G / 2), Math.max(G - half, G / 2)), y = clamp(l.y + l.oy * cs, bh, G - bh * .6);
        l.px = x; l.py = y; l.fs = fs;
        c.save(); c.globalAlpha = l.al; c.translate(x, y); c.scale(l.sc, l.sc);
        rr(c, -bw / 2, -bh / 2, bw, bh, bh / 2); c.fillStyle = S.retro ? '#3a0a2a' : '#101a4a'; c.fill();
        c.strokeStyle = '#d9ae52'; c.lineWidth = Math.max(1.2, fs * .1); c.stroke();
        if (gold) Gold.draw(c, l.text, 0, fs * .5, fs * 1.05); else { c.fillStyle = '#ffd76a'; c.fillText(l.text, 0, fs * .05); }
        if (l.tag) {
          const r = fs * .66, tx = bw / 2 - r * .15, ty = -bh / 2 + r * .1;
          if (KNOB.complete && KNOB.naturalWidth) c.drawImage(KNOB, tx - r, ty - r, r * 2, r * 2);
          c.font = `800 ${fs * (l.tag.length > 3 ? .46 : .56)}px Jost, system-ui, sans-serif`; c.fillStyle = '#ffe7a6'; c.fillText(l.tag, tx, ty + fs * .03);
        }
        if (l.name) {
          const ns = Math.max(7, fs * .46);
          c.font = `700 ${ns}px Cinzel, Georgia, serif`; if ('letterSpacing' in c) c.letterSpacing = (ns * .16).toFixed(1) + 'px';
          c.lineWidth = ns * .34; c.strokeStyle = 'rgba(5,7,22,.92)'; c.strokeText(l.name, 0, -bh / 2 - ns * .95); c.fillStyle = '#ffe9a8'; c.fillText(l.name, 0, -bh / 2 - ns * .95);
          if ('letterSpacing' in c) c.letterSpacing = '0px';
        }
        c.restore();
      }
    }
    if (S.flash > .01) { c.fillStyle = `rgba(255,236,190,${(S.flash * .35).toFixed(3)})`; rr(c, 0, 0, G, G, cs * .16); c.fill(); }
    c.restore();
  }

  /* ---------- Drawing: the ALIGNMENT dial ---------- */
  function drawDial(dt) {
    const c = el.dialC, px = el.dial.width;
    if (!px || !S.dialN) return;
    const R = px / 2 * .97, h = px / 2, m = Dial.m, aligned = Math.min(m, 7), dir = S.ringV >= 0 ? 1 : -1.5, hot = Math.min(1, (m - 1) / 24), retro = S.retroMix > .5;
    // the number unwinds when the alignment lets go; the gauge on the bezel follows the multiplier
    if (Dial.mf > m) Dial.mf = Math.max(m, Dial.mf - Math.max(1, Dial.mf - m) * dt * 9); else Dial.mf = m;
    const gT = m - 1; Dial.g += (gT - Dial.g) * Math.min(1, dt * (gT < Dial.g ? 7 : 16));
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, px, px);
    const K = DIAL_K, o = h * (1 - K), ps = px * K;                    // the face fills the opening of the brass ring
    c.drawImage(S.dialN, o, o, ps, ps);
    if (S.retroMix > .01) { c.globalAlpha = S.retroMix; c.drawImage(S.dialR, o, o, ps, ps); c.globalAlpha = 1; }
    c.translate(h, h); c.scale(K, K);
    // bezel gauge: one lit mark per step, clockwise in the base game, wound backwards in RETROGRADE
    if (Dial.g > .02) {
      const laps = Math.floor(Dial.g / 60), part = Dial.g - laps * 60, sgn = retro ? -1 : 1;
      c.lineCap = 'round'; c.lineWidth = Math.max(1.2, px * .016);
      for (let i = 0; i < 60; i++) {
        const lit = laps > 0 ? 1 : clamp(part - i, 0, 1), extra = laps > 0 ? clamp(part - i, 0, 1) : 0;
        if (lit <= 0) break;
        const a = -PI / 2 + sgn * (i + .5) / 60 * TAU, ca = Math.cos(a), sa = Math.sin(a);
        c.strokeStyle = retro ? `rgba(255,${Math.round(150 + extra * 90)},${Math.round(170 + extra * 70)},${lit.toFixed(3)})` : `rgba(255,${Math.round(236 + extra * 19)},${Math.round(170 + extra * 80)},${lit.toFixed(3)})`;
        c.beginPath(); c.moveTo(ca * R * .895, sa * R * .895); c.lineTo(ca * R * .955, sa * R * .955); c.stroke();
      }
      const a = -PI / 2 + sgn * Math.max(.5, part) / 60 * TAU, gz = R * .2;
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = .9; c.drawImage(retro ? S.glowRose : S.glowGold, Math.cos(a) * R * .925 - gz, Math.sin(a) * R * .925 - gz, gz * 2, gz * 2); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    Dial.axis += (Dial.axisT - Dial.axis) * Math.min(1, dt * 7);
    const ax = Dial.axis, ca = Math.cos(ax), sa = Math.sin(ax);
    // the alignment line
    const reach = R * (A.DIAL_ORBIT(Math.max(0, aligned - 1)) + .02), power = Math.min(1, .35 + m * .06) + Dial.pulse * .4;
    const g = c.createLinearGradient(ca * R * .3, sa * R * .3, ca * reach, sa * reach); // station:ok the alignment line is a ray of light that fades in from the hub g.addColorStop(0, 'rgba(255,236,170,0)'); g.addColorStop(.3, `rgba(255,226,150,${Math.min(1, power).toFixed(3)})`); g.addColorStop(1, `rgba(255,206,110,${Math.min(1, power * .8).toFixed(3)})`);
    c.strokeStyle = g; c.lineWidth = Math.max(1.5, px * (.016 + Math.min(.02, m * .0012))); c.lineCap = 'round'; c.beginPath(); c.moveTo(ca * R * .34, sa * R * .34); c.lineTo(ca * reach, sa * reach); c.stroke();
    c.strokeStyle = 'rgba(255,226,150,.16)'; c.lineWidth = Math.max(1, px * .006); c.beginPath(); c.moveTo(ca * R * .34, sa * R * .34); c.lineTo(ca * R * .84, sa * R * .84); c.stroke();
    // planets: the first `aligned` snap onto the line, the others keep orbiting (and scatter when the line lets go)
    for (let i = 0; i < 7; i++) {
      const p = Dial.pl[i], on = i < aligned;
      if (on) { let da = (ax - p.a) % TAU; if (da > PI) da -= TAU; if (da < -PI) da += TAU; p.a += da * Math.min(1, dt * 11); } else p.a += p.v * dt * dir * (.55 + Dial.release * 7);
      const r = R * A.DIAL_ORBIT(i), x = Math.cos(p.a) * r, y = Math.sin(p.a) * r, z = R * (DIAL_ORDER[i] === 'G' ? .062 : .048) * (on ? 1.15 + Dial.pulse * .5 : 1);
      if (!on) c.globalAlpha = .72;
      if (on) { c.globalAlpha = .85; const gz = z * 3.4; c.drawImage(S.glowGold, x - gz, y - gz, gz * 2, gz * 2); c.globalAlpha = 1; }
      const ps = S.sprites[DIAL_ORDER[i]]; if (ps) c.drawImage(ps, x - z * 1.4, y - z * 1.4, z * 2.8, z * 2.8); c.globalAlpha = 1;
    }
    // sparks thrown off by a step
    if (Dial.sp.length) {
      c.globalCompositeOperation = 'lighter';
      for (const s of Dial.sp) { s.life += dt; s.r += s.v * dt; const al = 1 - s.life / s.max; if (al <= 0) continue; c.globalAlpha = al; const z = R * .07; c.drawImage(S.spark, Math.cos(s.a) * R * s.r - z, Math.sin(s.a) * R * s.r - z, z * 2, z * 2); }
      Dial.sp = Dial.sp.filter(s => s.life < s.max); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    if (Dial.pulse > .01) {
      const q = 1 - Dial.pulse;
      fxSprite(c, FX[retro ? 'violet' : 'gold'], 0, 0, R * (.55 + q * .75), q * 1.1, Dial.pulse * 1.1);
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = Dial.pulse * .5; c.drawImage(retro ? S.glowRose : S.glowGold, -R, -R, R * 2, R * 2); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    // hub with the multiplier: it runs hotter as the alignment climbs
    if (KNOB.complete && KNOB.naturalWidth) { const hr = R * .36; c.drawImage(retro && KNOBR ? KNOBR : KNOB, -hr, -hr, hr * 2, hr * 2); }
    if (hot > .02) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = hot * (.5 + .15 * Math.sin(S.t * 6)); c.drawImage(retro ? S.glowRose : S.glowGold, -R * .42, -R * .42, R * .84, R * .84); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; }
    const shown = Math.round(Dial.mf), txt = '×' + shown, fs = R * (shown < 10 ? .38 : shown < 100 ? .29 : .22), punch = Dial.pulse > .5 ? backOut((1 - Dial.pulse) * 2) : 1, sc = (Dial.pulse > .5 ? .55 + .75 * punch : 1 + Dial.pulse * .6) + Dial.kick * .2;
    if (Gold.can(txt)) { c.save(); c.scale(sc, sc); Gold.draw(c, txt, 0, fs * .52, fs * 1.08); c.restore(); } else {
    c.save(); c.scale(sc, sc); c.font = `800 ${fs}px Jost, system-ui, sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    c.lineWidth = fs * .18; c.strokeStyle = 'rgba(4,6,20,.9)'; c.strokeText(txt, 0, fs * .04);
    c.fillStyle = Dial.pulse > .6 ? '#ffffff' : '#ffd76a'; c.fillText(txt, 0, fs * .04);
    c.restore(); }
    c.setTransform(1, 0, 0, 1, 0, 0);
    // the whole dial jumps with a step and trembles when it is wound far up in RETROGRADE
    const wound = retro && !api.reduced ? Math.min(1, (m - 1) / 20) : 0, ks = 1 + Dial.pulse * .07 + Dial.kick * .03;
    el.dial.style.transform = ks !== 1 || wound ? `translate(${(wound * (Math.random() - .5) * 1.4).toFixed(2)}px,${(wound * (Math.random() - .5) * 1.4).toFixed(2)}px) scale(${ks.toFixed(4)})` : '';
  }

  /* ---------- Drawing: the stage layer (stardust on its way to the total, shock rings, the sky's celebrations) ---------- */
  // The round's big win, told by the sky. tier 1 star shower, 2 grand conjunction, 3 total eclipse, 4 both (max win).
  function drawCelebration(c, now, bw) {
    const W = S.W, H = S.H, m = Math.min(W, H), t = now - bw.t0, hit = bw.hitAt ? now - bw.hitAt : -1, out = bw.outAt ? clamp((now - bw.outAt) / bw.out, 0, 1) : 0;
    const vis = clamp((now - (bw.start || bw.t0)) / (280 * bw.sp), 0, 1) * (1 - out), cx = W / 2, ay = H / 2 - m * (bw.tier >= 2 ? .2 : .1), pre = clamp(t / bw.pre, 0, 1);
    c.fillStyle = `rgba(3,4,14,${(vis * (.6 + bw.tier * .06)).toFixed(3)})`; c.fillRect(0, 0, W, H);
    if (vis <= 0) return;
    // meteors
    if (!api.reduced && (bw.tier === 1 || hit >= 0) && !bw.outAt) {
      bw.acc += bw.dt * (8 + bw.tier * 7);
      while (bw.acc >= 1) { bw.acc -= 1; const top = Math.random() < .6, x = top ? Math.random() * W * 1.2 - W * .2 : -10, y = top ? -10 : Math.random() * H * .7, sp = m * (1.3 + Math.random() * 1.2); emit({ layer: 'f', kind: 2, x, y, vx: sp * .82, vy: sp * .57, max: .5 + Math.random() * .5, z: Math.max(1, m * (.003 + Math.random() * .004)), col: Math.random() < .3 ? '#ffe9a8' : '#ffffff', drag: 0 }); }
    }
    // planet rain: 3D medallions tumble down the sky, more of them the higher the tier
    if (!api.reduced && hit >= 0 && !bw.outAt) {
      bw.rain += bw.dt * [0, 2.5, 6, 11, 18][bw.tier] * (S.small ? .5 : 1) * (S.lite ? .5 : 1);
      while (bw.rain >= 1) { bw.rain -= 1; const list = bw.tier >= 3 ? PLANETS + 'GGSS' : PLANETS; emit({ layer: 'f', kind: 3, sym: list[Math.floor(Math.random() * list.length)], x: Math.random() * W, y: -m * .08, vx: (Math.random() - .5) * m * .15, vy: m * (.25 + Math.random() * .35), g: m * .55, drag: .3, max: 2.6 + Math.random(), z: m * (.045 + Math.random() * .05), yaw: Math.random() * 360, spin: (Math.random() < .5 ? -1 : 1) * (150 + Math.random() * 300) }); }
    }
    c.globalAlpha = vis; c.globalCompositeOperation = 'lighter';
    if (hit >= 0) { const gy = H / 2 + m * (bw.tier >= 2 ? .17 : .06), gr = m * .62, la = .24 * clamp(hit / (400 * bw.sp), 0, 1); c.save(); c.globalAlpha = vis * la; c.translate(cx, gy); c.scale(1.6, .55); c.drawImage(S.glowGold, -gr, -gr, gr * 2, gr * 2); c.restore(); c.globalAlpha = vis; }
    // implosion: in the last part of a tier's build-up the light is sucked into one point, and sparks stream in from all
    // around, so the hit lands on a held breath
    if (hit < 0 && !bw.outAt && !api.reduced && pre > .55) {
      const q = (pre - .55) / .45, ty = H * .5;
      fxSprite(c, FX.gold, cx, ty, m * (.06 + 1.1 * Math.pow(1 - q, 2)), now * .006, vis * (.25 + .9 * q));
      fxSprite(c, FX.dust, cx, ty, m * (.1 + 1.4 * Math.pow(1 - q, 1.5)), -now * .004, vis * .7 * q);
      bw.suck = (bw.suck || 0) + bw.dt * (40 + bw.tier * 20) * (S.small ? .5 : 1);
      while (bw.suck >= 1) { bw.suck -= 1; const a = Math.random() * TAU, d = m * (.55 + Math.random() * .5), x = cx + Math.cos(a) * d, y = ty + Math.sin(a) * d * .8; emit({ layer: 'f', kind: 1, x, y, cx: cx + Math.cos(a + .9) * d * .45, cy: ty + Math.sin(a + .9) * d * .4, tx: cx, ty, max: .3 + Math.random() * .2, z: Math.max(1.2, m * (.004 + Math.random() * .006)), col: ['#fff6d0', '#ffd76a', '#ffffff', bw.tier >= 3 ? '#ff9ec0' : '#bfe0ff'][Math.floor(Math.random() * 4)] }); }
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = vis;
    }
    // painted light behind the title and the amount: huge slow-turning rays that punch in on every tier's hit and
    // keep breathing while the amount counts; higher tiers add the pink-violet nebula and the star dust turning the other way
    if ((hit >= 0 || bw.tier > 1) && !api.reduced) {
      const ty = H * .5, hp = hit >= 0 ? clamp(hit / (520 * bw.sp), 0, 1) : 1, punch = 1 + .35 * (1 - backOut(hp)), br = 1 + .04 * Math.sin(now * .0021);
      const R = m * (.5 + bw.tier * .08) * punch * br, a = vis * (.35 + .65 * (1 - hp) * (1 - hp) + .25) * .75 * (hit >= 0 ? 1 : .55), rot = now * .00012;
      fxSprite(c, FX.gold, cx, ty, R * 1.5, rot, a);
      if (!S.lite) fxSprite(c, FX.gold, cx, ty, R * 1.1, -rot * 1.6 + .5, a * .6);
      if (bw.tier >= 2 && !S.lite) fxSprite(c, FX.dust, cx, ty, R * 1.8, -rot * .8, a * .7);
      if (bw.tier >= 3) fxSprite(c, FX.violet, cx, ty, R * 1.35, rot * 2.2, a * .55);
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = vis;
    }
    // the eclipse
    if (bw.tier >= 3) {
      const R = m * .105, e = easeInOut(pre), tot = hit >= 0 ? clamp(hit / (500 * bw.sp), 0, 1) : 0;
      if (tot > 0) {                                      // corona: long soft streamers once the Sun is covered
        c.globalAlpha = vis * tot * .85; c.drawImage(S.glowGold, cx - R * 4.2, ay - R * 4.2, R * 8.4, R * 8.4); c.globalAlpha = vis * tot * .4; c.drawImage(S.glowRose, cx - R * 3.2, ay - R * 3.2, R * 6.4, R * 6.4); c.globalAlpha = vis;
        c.fillStyle = `rgba(255,240,205,${(.3 * tot).toFixed(3)})`;
        for (let i = 0; i < 18; i++) { const a = i / 18 * TAU + Math.sin(now * .0004 + i) * .12, len = R * (1.6 + 1.5 * Math.abs(Math.sin(i * 2.3 + now * .0011))) * tot; c.beginPath(); c.moveTo(cx + Math.cos(a - .09) * R, ay + Math.sin(a - .09) * R); c.lineTo(cx + Math.cos(a) * (R + len), ay + Math.sin(a) * (R + len)); c.lineTo(cx + Math.cos(a + .09) * R, ay + Math.sin(a + .09) * R); c.closePath(); c.fill(); }
      }
      c.globalAlpha = vis * (1 - tot * .5); c.drawImage(S.glowGold, cx - R * 2.2, ay - R * 2.2, R * 4.4, R * 4.4); c.globalAlpha = vis * (1 - tot * .7); c.drawImage(S.glowWhite, cx - R * 1.3, ay - R * 1.3, R * 2.6, R * 2.6); c.globalAlpha = vis;
      c.globalCompositeOperation = 'source-over';
      // the Moon slides over the Sun: the painted disc (art/ui2/moon, 2026-11-28); a flat dark disc until it has loaded
      const mx = cx - (1 - e) * R * 2.6;
      if (MOON.complete && MOON.naturalWidth) { const z = R * 1.005 * 2 / .82; c.drawImage(MOON, mx - z / 2, ay - z / 2, z, z); }
      else { c.fillStyle = '#080a1a'; c.beginPath(); c.arc(mx, ay, R * 1.005, 0, TAU); c.fill(); }   // station:ok fallback disc until the painting is in
      c.globalCompositeOperation = 'lighter';
      if (hit >= 0) {                                     // the diamond ring
        const d = Math.max(0, 1 - hit / (900 * bw.sp)), z = R * (1.2 + d * 2.4);
        c.globalAlpha = vis * (.55 + d * .45); c.drawImage(S.spark, cx + R * .72 - z, ay - R * .7 - z, z * 2, z * 2); c.globalAlpha = vis;
      }
    }
    // the conjunction: planets sweep in and stop in one line
    if (bw.tier === 2 || bw.tier === 4) {
      const list = bw.tier === 4 ? 'LTICQS' : 'LTIGCQS', n = list.length, gap = m * (bw.tier === 4 ? .15 : .128), z = m * (bw.tier === 4 ? .12 : .135);
      if (hit >= 0) {
        const bp = clamp(hit / (350 * bw.sp), 0, 1), bl = m * .62 * bp, bg = c.createLinearGradient(cx - bl, 0, cx + bl, 0); // station:ok the beam of light the planets line up on bg.addColorStop(0, 'rgba(255,220,130,0)'); bg.addColorStop(.5, `rgba(255,244,205,${(.85 - .3 * Math.min(1, hit / (1500 * bw.sp))).toFixed(3)})`); bg.addColorStop(1, 'rgba(255,220,130,0)');
        c.fillStyle = bg; c.fillRect(cx - bl, ay - m * .012, bl * 2, m * .024); c.fillRect(cx - bl, ay - m * .003, bl * 2, m * .006);
      }
      c.globalCompositeOperation = 'source-over';
      const cyaw = i => (1 - backOut(clamp((pre - i * .06) / .58, 0, 1))) * 540 + (hit >= 0 ? 18 * Math.sin(now * .002 + i) : 0);
      const cat = live([...list].map((sym, i) => ({ sym, yaw: cyaw(i) })), z);
      for (let i = 0; i < n; i++) {
        const slot = bw.tier === 4 ? (i < 3 ? i - 3 : i - 2) : i - 3, e = backOut(clamp((pre - i * .06) / .58, 0, 1)), a0 = i * 2.1 + 1 + (1 - e) * 2.2, r0 = m * .7 * (1 - e);
        const x = cx + Math.cos(a0) * r0 + slot * gap * e, y = ay + Math.sin(a0) * r0 * .7 + (hit >= 0 ? Math.sin(now * .003 + i) * m * .004 : 0);
        if (hit >= 0) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = vis * .7; c.drawImage(S.glowGold, x - z * .95, y - z * .95, z * 1.9, z * 1.9); c.globalCompositeOperation = 'source-over'; c.globalAlpha = vis; }
        if (cat) atlasDraw(c, cat, i, x - z / 2, y - z / 2, z, z); else drawSym(c, list[i], cyaw(i), x - z / 2, y - z / 2, z, z);   // they spin in and settle facing us
      }
    }
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  function drawFx(now) {
    const c = el.fxC, dpr = S.fdpr || S.dpr, W = S.W, H = S.H, bw = S.bw;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H);
    let live = 0;
    if (bw) { live = 1; drawCelebration(c, now, bw); }
    if (S.spells.length) live += drawSpells(c, now);
    if (S.beams.length || S.stars.length) live += drawBeams(c, now);
    for (const s of S.shocks) {
      live++;
      // size is a share of the stage; tiny ones (a cell's arrival) get at least a cell and a half
      const m = Math.max(S.cs * 1.5, Math.max(W, H) * s.size * .7);
      drawBurst(c, s, s.x, s.y, m);
    }
    for (const f of S.flyers) {
      live++;
      const fa = f.a == null ? 1 : f.a, gz = f.h * 2.6; c.globalCompositeOperation = 'lighter'; c.globalAlpha = .55 * fa; c.drawImage(S.glowGold, f.x - gz / 2, f.y - gz / 2, gz, gz);
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = fa; Gold.draw(c, f.text, f.x, f.y + f.h * .45, f.h); c.globalAlpha = 1;
    }
    live += drawParticles(c, 'f');
    S.fxLive = live > 0;
  }

  /* ---------- Loop ---------- */
  function frame(now) {
    S.raf = requestAnimationFrame(frame);
    const rawDt = now - S.last, dt = Math.min(.05, Math.max(0, rawDt / 1000)); S.last = now; S.t += dt;
    // low-end device detector (studio standard 11.2): slow frames while the game is animating -> light mode
    if (!S.lite) {
      if (window.RG_FORCE_LITE) { S.lite = true; window.RG_LITE = true; }
      else if (now > 6000 && !document.hidden && rawDt > 0 && rawDt < 250 && (S.fxLive || S.bw || (window.LZ && LZ.state && LZ.state.busy))) {
        S.ftSum = (S.ftSum || 0) + rawDt; S.ftN = (S.ftN || 0) + 1;
        if (S.ftN >= 90) { if (S.ftSum / S.ftN > 24) { S.lite = true; window.RG_LITE = true; } S.ftSum = 0; S.ftN = 0; }
      }
    }
    if (fqueue.length) fbuild();
    stepTweens(now);
    let live = false;
    for (const p of POOL) {
      if (!p.on) continue;
      if (p.layer === 'g') live = true;
      if (p.wait > 0) { p.wait -= dt; continue; }
      p.life += dt;
      if (p.life >= p.max) { p.on = false; continue; }
      if (p.kind === 1) { const u = p.life / p.max, e = u * u * (3 - 2 * u), v = 1 - e; p.x = v * v * p.sx + 2 * v * e * p.cx + e * e * p.tx; p.y = v * v * p.sy + 2 * v * e * p.cy + e * e * p.ty; }
      else { p.vy += p.g * dt; if (p.drag) p.vx *= 1 - dt * p.drag; p.x += p.vx * dt; p.y += p.vy * dt; }
    }
    if (live) S.dirty = true;
    S.ringV += (S.ringTarget - S.ringV) * Math.min(1, dt * 2.6);
    S.ringA += S.ringV * dt * .045; S.light += S.ringV * dt * .16;
    // embers rise through the grid while gravity is reversed
    if (S.retro && S.playing && !api.reduced && Math.random() < dt * (S.small ? 5 : 14)) emit({ x: Math.random() * S.G, y: S.G + 2, vx: (Math.random() - .5) * S.cs * .3, vy: -S.cs * (.8 + Math.random() * 1.4), g: -S.cs * .3, drag: .2, max: 1.6 + Math.random() * 1.4, z: Math.max(.8, S.cs * (.012 + Math.random() * .02)), col: Math.random() < .5 ? '#ff9ec0' : '#ffd08a', a: .7 });
    // idle life: light passes over a resting medallion, a shooting star now and then
    if (S.attract && !S.playing && !api.reduced && S.t > S.nextGlint && !S.glint) {
      const list = S.tok.filter(Boolean);
      if (list.length) { const tk = list[Math.floor(Math.random() * list.length)], gl = { tk, p: 0 }; S.glint = gl; tween(800, q => { gl.p = q; tk.shine = q; }, { ease: linear, done: () => { tk.shine = 0; if (S.glint === gl) S.glint = null; } }); }
      S.nextGlint = S.t + 1.2 + Math.random() * 2;
    }
    if (!api.reduced && S.t > S.nextShoot && !S.shoot) {
      const sh = { x: Math.random() * S.W * .8, y: Math.random() * S.H * .3, dx: S.W * (.25 + Math.random() * .2), dy: S.H * (.18 + Math.random() * .2), p: 0 }; S.shoot = sh;
      tween(900, q => { sh.p = q; }, { ease: linear, done: () => { S.shoot = null; } }); S.nextShoot = S.t + 7 + Math.random() * 9;
    }
    if (S.shake) { const k = (now - S.shake.t0) / S.shake.dur; if (k >= 1) { S.shake = null; el.grid.style.transform = el.gbg.style.transform = el.gund.style.transform = el.b3d.style.transform = ''; if (el.big) el.big.style.translate = ''; if (el.fx) el.fx.style.translate = ''; if (el.room) el.room.style.translate = ''; } else { const a = S.shake.amp * (1 - k); el.gund.style.transform = el.b3d.style.transform = el.gbg.style.transform = el.grid.style.transform = `translate(${((Math.random() - .5) * 2 * a).toFixed(1)}px,${((Math.random() - .5) * 2 * a).toFixed(1)}px)`; if (S.bw) { const dx = ((Math.random() - .5) * 1.6 * a).toFixed(1) + 'px', dy = ((Math.random() - .5) * 1.6 * a).toFixed(1) + 'px'; el.big.style.translate = dx + ' ' + dy; el.fx.style.translate = dx + ' ' + dy; el.room.style.translate = (parseFloat(dx) * .5).toFixed(1) + 'px ' + (parseFloat(dy) * .5).toFixed(1) + 'px'; } } }
    drawOrrery(dt); drawDial(dt);
    if (S.dirty || S.antic || S.hasScat || ((STRIP.L || (window.RGBoard3D && RGBoard3D.ready)) && !api.reduced)) { S.dirty = false; drawGrid(); }   // the sway keeps the board alive
    if (S.bw) S.bw.dt = dt;
    if (S.fxLive || S.bw || S.shocks.length || S.spells.length || S.beams.length || S.stars.length) drawFx(now);
  }
  function startLoop() { if (!S.raf && !document.hidden) { S.last = performance.now(); S.raf = requestAnimationFrame(frame); } }
  function stopLoop() { if (S.raf) cancelAnimationFrame(S.raf); S.raf = 0; }

  /* ---------- Playback ---------- */
  async function doSpin(e, ctx, next) {
    const g = String(e.grid || '').split('');
    if (g.length !== 49) return;
    const free = !!e.free, up = free, sp = ctx.speed();
    if (free !== S.retro) setRetro(free, true);
    if (free) { S.left = Math.max(0, S.left - 1); S.spins++; showLeft(); }
    setMult(Number(e.mult) || 1, false);              // a base spin lets the alignment go: the dial unwinds to ×1
    setLevel(free ? 3 : 1);
    clearFx(); S.spinCast = 0;
    Sfx.whoosh(up);
    // The old board leaves column by column, pushed out by the new column falling in right behind it, so the board is
    // never empty. Each column falls as one block; the first medallion down kicks up a little dust.
    const old = S.tok.filter(Boolean), oldCol = [[], [], [], [], [], [], []]; S.tok = new Array(49).fill(null);
    for (const tk of old) { S.exiting.push(tk); oldCol[tk.col].push(tk); }
    const gone = tk => { const i = S.exiting.indexOf(tk); if (i >= 0) S.exiting.splice(i, 1); };
    S.grid = g; S.hasScat = g.includes('A');
    const FALL = 360, DIST = 7.6;
    let seen = 0;
    for (let col = 0; col < 7; col++) {
      const antic = seen === 2, fall = antic ? 900 : FALL;
      // two astrolabes are showing and columns are still to come: the instrument holds its breath
      if (antic) { S.antic = { col }; Sfx.antic(col); el.root.classList.add('tense'); if (!S.wizWorried) { S.wizWorried = true; wiz('worried', { hold: true }); } for (let k = 0; k < 49; k++) if (S.tok[k] && S.tok[k].sym === 'A') pulseRing(k, '#ff9ec0', 520); }
      // in suspense every column still to come empties at once, so the slow columns fall into empty slots
      const outCols = antic && !S.anticOut ? [col, 1, 2, 3, 4, 5, 6].filter((c, i) => !i || c > col) : [col];
      if (antic) S.anticOut = true;
      for (const oc of outCols) { for (const tk of oldCol[oc]) { const order = up ? tk.row : 6 - tk.row; tween(FALL * .72 * sp, q => { tk.oy = (up ? -DIST : DIST) * q * q; }, { delay: order * 10 * sp, ease: linear, done: () => gone(tk) }); } oldCol[oc] = []; }
      for (let row = 0; row < 7; row++) {
        const i = row * 7 + col, tk = newToken(g[i], col, row), order = up ? row : 6 - row, heavy = g[i] === 'A';
        S.tok[i] = tk;
        dropTween(tk, up ? DIST : -DIST, fall * sp, order * 10 * sp, heavy);
        if (heavy) {
          const n = ++seen;
          after(fall * .72 + order * 10, () => {                    // the astrolabe lands: weight, light, a low gong
            tk.glow = 1.3; pulseRing(i, '#ff9ec0', 900); after(110, () => pulseRing(i, '#ffe9a8', 800));
            burst(...cellXY(i), 16, { cols: ['#ffd0e0', '#ffe9a8', '#c9a0ff'], speed: .9 }); shake(S.cs * .05, 240);
            spin(tk, 1, 760);
            Sfx.scatter(n); tween(1000 * api.speed(), q => { tk.glow = 1.3 * (1 - q); tk.sc = 1 + .18 * Math.sin(q * PI) * (1 - q * .5); tk.shine = q; }, { done: () => { tk.shine = 0; } });
          });
        } else if (order === 0 && !api.reduced) after(fall * .72, () => { const [x, y] = cellXY(i); burst(x, y + (up ? -1 : 1) * S.cs * .42, S.small ? 2 : 4, { cols: ['#e8ecff', '#ffe9a8', '#cfd8ff'], speed: .35, life: .55, grav: 1.2 }); });
      }
      Sfx.land(col, up, fall * .72 * sp / 1000);
      await ctx.sleep(antic ? 420 : 48);
    }
    S.antic = null; S.anticOut = false; S.dirty = true; el.root.classList.remove('tense'); if (RGS) RGS.tension(false); if (S.wizWorried) { S.wizWorried = false; wiz(g.filter(x => x === 'A').length >= 3 ? 'surprised' : 'idle'); }
    preCast(next);
    await ctx.sleep(FALL + 6 * 10 + 30);
    await ctx.sleep(next && next.type === 'cascade' ? 110 : 340);
  }

  // the hand starts up at the end of the step before a winning cascade (normal speed), so it is out when the win comes
  function preCast(nx) {
    if (!nx || nx.type !== 'cascade' || !S.wiz || api.reduced || api.speed() < .9) return;
    if (!(Array.isArray(nx.wins) && nx.wins.some(w => Array.isArray(w.cells) && w.cells.length))) return;
    RGWiz.cast(Number(nx.mult) >= 5 ? 'open' : 'reach', 1.1);
  }
  async function doCascade(e, ctx, nextEv) {
    const next = String(e.grid || '').split('');
    if (next.length !== 49) return;
    // A round that ends below its cost is shown quickly (catalog item 3: at most 0.6 s longer than a loss): the same
    // steps at about three times the pace, no wait for the wizard, the amount simply lands on TOTAL WIN.
    const quick = !S.featOn && ctx.winX < ctx.cost;
    if (quick) { const s0 = ctx.sleep, sp0 = ctx.speed; ctx = Object.assign(Object.create(ctx), { sleep: ms => s0.call(ctx, ms * .3), speed: () => sp0.call(ctx) * .3 }); }
    const sp = ctx.speed(), wins = Array.isArray(e.wins) ? e.wins : [], mult = Number(e.mult) || 1, up = S.retro;
    setMult(mult, false);
    setLevel(up ? 3 : 2);
    clearFx();
    // the winners answer at once (the spell comes after): a springy pop and a glow in the planet's own colour
    for (const w of wins) for (const k of (Array.isArray(w.cells) ? w.cells : [])) {
      const tk = k >= 0 && k < 49 ? S.tok[k] : null; if (!tk || tk.hue) continue;
      tk.hue = true;
      if (!api.reduced) tween(420 * sp, q => { tk.sc = 1 + .08 * q + .22 * Math.sin(q * PI * 1.5) * (1 - q); tk.glow = Math.max(tk.glow, .75 * Math.min(1, q * 3)); }, { ease: linear });
    }
    // 0. every win is his spell: the hand goes up for each one. If he is busy (suspense, a cheer, the last cast going
    //    down) that clip finishes faster and the cast follows; the win waits for it (at most 2.2 s), so the stream always
    //    leaves a raised hand. castAt = seconds from the lines starting to his hand being out.
    let castAt = -1, lead = 0;          // lead (ms): the lines wait for the stream to land on the cells
    if (S.wiz && !api.reduced && wins.some(w => Array.isArray(w.cells) && w.cells.length)) {
      // the clip runs in real seconds, while ctx.sleep and after() are scaled by the speed: convert. In fast mode the
      // win never waits for him: the stream leaves at once, and he raises his hand only if he is free right now.
      const sp = quick ? .3 : api.speed();
      if (sp < .9) { const ci = RGWiz.castIn(); if (ci >= 0 && ci <= 1.05) RGWiz.cast(mult >= 5 ? 'open' : 'reach', 1.1); castAt = 0; }
      else {
        const d = RGWiz.cast(mult >= 5 ? 'open' : 'reach', 1.1);
        if (d >= 0) { const wait = Math.min(.6, d); if (wait > .05) await ctx.sleep(wait * 1000 / sp); castAt = Math.max(0, d - wait) / sp; lead = 260; }
      }
    }
    // 1. gold lines link each cluster cell to cell behind a travelling spark; its medallions lift and catch the light
    const gone = new Uint8Array(49), lines = [];
    let biggest = 0;
    Sfx.run(mult, wins.length, up);
    wins.forEach((w, wi) => {
      const cells = (Array.isArray(w.cells) ? w.cells : []).filter(k => k >= 0 && k < 49);
      if (!cells.length) return;
      biggest = Math.max(biggest, cells.length);
      const L = buildLine(cells); S.lines.push(L); lines.push({ L, w, n: cells.length });
      tween((300 + Math.min(160, L.maxD * 22)) * sp, q => {
        L.p = q;
        if (api.reduced || Math.random() > .5 || !L.segs.length) return;
        const s = L.segs[Math.floor(Math.random() * L.segs.length)], hd = q * (L.maxD + 1) - s.d;
        if (hd > 0 && hd < 1) { const [ax, ay] = cellXY(s.a), [bx, by] = cellXY(s.b); burst(ax + (bx - ax) * hd, ay + (by - ay) * hd, 1, { speed: .25, life: .7, grav: 1 }); }
      }, { delay: (lead + wi * 50) * sp, ease: easeInOut });
      for (const k of cells) {
        gone[k] = 1;
        const tk = S.tok[k], q0 = { k, al: 0 }; S.cellGlow.push(q0);
        tween(300 * sp, q => { q0.al = q; if (tk) { tk.glow = Math.max(tk.glow, q); tk.lift = backOut(q); tk.shine = q; } }, { delay: (lead + wi * 50 + L.depth[k] * 28) * sp, done: () => { if (tk) tk.shine = 0; } });
        if (tk) spin(tk, 1, 620, lead + wi * 50 + L.depth[k] * 28);                 // the winners turn once on their axis as the line reaches them
      }
    });
    if (lines.length && castAt >= 0) after(castAt * 1000, () => streamWin(lines, mult >= 5 ? 2 : 1));
    await ctx.sleep(lead + 310 + Math.min(3, wins.length - 1) * 40 + Math.min(120, biggest * 6));
    // 2. the win appears on a banner at each cluster
    const worth = ctx.units(e.win), big = worth >= ctx.amount * ctx.cost, grand = biggest >= 12 || worth >= ctx.amount * ctx.cost * 10;

    for (const { L, w, n } of lines) {
      const [x, y] = cellXY(L.root), fig = FIGURES.find(f => n >= f[0]);
      const lab = { x, y, oy: 0, sc: .4, al: 0, text: ctx.winMoney(ctx.units((Number(w.pay) || 0) * mult)), tag: mult > 1 ? '×' + mult : '', name: fig && S.cs >= 30 ? fig[1].toUpperCase() : '' };
      for (const o of S.labels) if (Math.abs(o.x - lab.x) < S.cs * 2.3 && Math.abs(o.y - lab.y) < S.cs * .8) lab.y += (lab.y > S.G / 2 ? -1 : 1) * S.cs * .95;
      S.labels.push(lab);
      tween(280 * sp, q => { lab.sc = .4 + .6 * q; lab.al = Math.min(1, q * 1.6); }, { ease: backOut });
    }
    Dial.kick = 1; tween(380 * sp, q => { Dial.kick = 1 - q; }, { ease: linear }); roomPulse(Math.min(1.6, .7 + mult * .12));
    Sfx.win(mult, big, up);
    if (grand) { flash(.8, 420); shake(S.cs * .07, 300); await ctx.sleep(110); }           // hit-stop on the biggest moments
    await ctx.sleep(240);
    // 3. the cluster dissolves into stardust that streams to the total; a cluster of 7+ leaves a comet behind
    const born = new Set((Array.isArray(e.wilds) ? e.wilds : []).filter(k => gone[k]));
    Sfx.dust(up);
    for (const L of S.lines) tween(240 * sp, q => { L.al = 1 - q; });
    for (const q0 of S.cellGlow) tween(240 * sp, q => { q0.al = 1 - q; });
    const fl = api.reduced || quick ? [] : S.labels.filter(l => l.px !== undefined && Gold.can(l.text));
    for (const lab of S.labels) if (fl.includes(lab)) tween(160 * sp, q => { lab.al = 1 - q; }, { delay: 60 * sp }); else tween(560 * sp, q => { lab.oy = -.45 * q; lab.al = 1 - Math.max(0, q - .6) / .4; }, { delay: 160 * sp });
    let count = 0;
    for (let k = 0; k < 49; k++) if (gone[k] && !born.has(k)) count++;
    const per = api.reduced ? 0 : clamp(Math.round(70 / Math.max(1, count)), 1, 4);
    for (let k = 0; k < 49; k++) {
      const tk = S.tok[k];
      if (!gone[k] || !tk || born.has(k)) continue;
      S.tok[k] = null; S.dying.push(tk);
      const col = SYMCOL[tk.sym] || SYMCOL.G, s0 = tk.sc;
      burst(...cellXY(k), S.small ? 6 : 12, { cols: [col[0], col[1], '#ffffff', col[0]], speed: 1.15, grav: 1.5, life: .9 }); stream(k, per);
      tween(260 * sp, q => { tk.sc = s0 + (1.45 - s0) * q; tk.al = 1 - q * q; tk.glow = 1 - q; tk.lift = 1 + q * .5; }, { done: () => { const i = S.dying.indexOf(tk); if (i >= 0) S.dying.splice(i, 1); } });
    }
    let bn = 0;
    for (const k of born) {
      const tk = S.tok[k]; if (!tk) continue;
      tk.sym = 'W'; tk.hue = false; tk.glow = 1; tk.sc = .2; tk.lift = 0; tk.shine = 0;
      tween(440 * sp, q => { tk.sc = .2 + .8 * q; }, { ease: backOut }); spin(tk, 2, 900);
      tween(900 * sp, q => { tk.glow = 1 - q; }, { delay: 300 * sp });
      pulseRing(k, '#bfe0ff', 800); burst(...cellXY(k), 16, { cols: ['#ffffff', '#bfe0ff', '#ffe9a8'], speed: 1.2, grav: 0 });
      Sfx.wild(bn++ * .06);
    }
    await ctx.sleep(190);
    // the amount lands on TOTAL WIN: the totals move then
    if (S.featOn) S.feat += Number(e.win) || 0;
    const shownTotal = ctx.units(S.featOn ? S.feat : e.total), barTotal = ctx.units(e.total);
    const landed = () => { ctx.setWin(barTotal, true); setTotal(shownTotal, true); };
    let flightMs = 0;
    if (fl.length) { fl.forEach((l, i) => flyWin(l, i * 70, i === fl.length - 1 ? landed : null)); flightMs = FLIGHT + (fl.length - 1) * 70; } else landed();
    preCast(nextEv);
    // 4. gravity: survivors settle (down, or up in RETROGRADE) and new medallions fill the vacated end
    const tok = new Array(49).fill(null);
    let ok = true;
    for (let col = 0; col < 7; col++) {
      const keep = [];
      for (let row = 0; row < 7; row++) { const tk = S.tok[row * 7 + col]; if (tk) keep.push(tk); }
      const fresh = 7 - keep.length;
      for (let row = 0; row < 7; row++) {
        const i = row * 7 + col, old = up ? row < keep.length : row >= fresh;
        let tk, from;
        if (old) { tk = keep[up ? row : row - fresh]; from = tk.row - row; tk.row = row; tk.lift = 0; }
        else { tk = newToken(next[i], col, row); from = up ? fresh : -fresh; }
        if (tk.sym !== next[i]) ok = false;
        tok[i] = tk;
        if (from) dropTween(tk, from, (250 + 42 * Math.abs(from)) * sp, col * 26 * sp, false);
      }
    }
    if (ok) S.tok = tok; else { flushTweens(); buildTokens(next); }      // never trust the animation over the book
    S.grid = next;
    Sfx.land(3, up, .3 * sp);
    setMult(mult + 1, true);                                              // the alignment tightens by one
    await ctx.sleep(Math.max(450, flightMs - 190 + 60));
  }

  /* RETROGRADE begins: the astrolabes answer, the instrument winds down to a dead stop, then everything reverses. */
  async function doTrigger(e, ctx) {
    const sp = ctx.speed(), n = Number(e.spins) || 0, mid = [S.gx + S.G / 2, S.gy + S.G / 2];
    const ecl = !!e.eclipse, m0 = ecl ? (Number(e.mult) || ECLIPSE_MULT) : 1;
    S.featOn = true; S.feat = 0; S.left = n; S.spins = 0; S.ecl = ecl;
    Sfx.trigger();
    for (let k = 0; k < 49; k++) { const tk = S.tok[k]; if (tk && tk.sym === 'A') { pulseRing(k, '#ff9ec0', 1000); spin(tk, 2, 900); tween(900 * sp, q => { tk.glow = Math.sin(q * PI) * 1.2 + .3; tk.lift = Math.sin(q * PI); tk.sc = 1 + .2 * Math.sin(q * PI); }); burst(...cellXY(k), 16, { cols: ['#ffd0e0', '#ffe9a8', '#c9a0ff'], speed: 1.1, grav: 0 }); } }
    wiz('surprised');
    await ctx.sleep(850);
    { wiz('summon'); const sc = []; for (let k = 0; k < 49; k++) if (S.tok[k] && S.tok[k].sym === 'A') sc.push(k); if (sc.length) streamWin(sc.map(k => ({ L: { root: k, depth: { [k]: 0 }, maxD: 0 }, w: { cells: [k] } })), 3); }
    // wind down: rings, dust and the dial slow to a halt
    S.ringTarget = 0; Sfx.windDown(.75 * sp); Sfx.swell(.95 * sp);
    if (ecl) showCard('The sun goes dark', 'ECLIPSE', `<b>${n}</b> free spins`, `ALIGNMENT starts at ×${m0} · never resets`, 'start ecl');
    else showCard('The planets turn', 'RETROGRADE', `<b>${n}</b> free spins`, 'Gravity reverses · ALIGNMENT never resets', 'start');
    await ctx.sleep(750);
    S.ringV = 0;
    await ctx.sleep(200);                                                 // a held breath
    // ... and reverse: a shock ring leaves the grid, the sky turns crimson, the rings snap backwards, the medallions float up and away
    Sfx.flip();
    el.root.classList.toggle('ecl', ecl);
    { const em = el.spinsBox.querySelector('em'); if (em) em.textContent = ecl ? 'ECLIPSE' : 'RETROGRADE'; }
    setRetro(true); setLevel(3, true);
    S.ringV = -7;
    flash(1, 700); shake(S.cs * .09, 380); shock(mid[0], mid[1], '#ff7aa8', 1100); after(140, () => shock(mid[0], mid[1], '#ffd08a', 1200));
    if (!api.reduced) burstF(mid[0], mid[1], S.small ? 20 : 50, { cols: ['#ff9ec0', '#ffd08a', '#ffffff'], speed: .7, grav: -.5, life: 1.4 });
    const old = S.tok.filter(Boolean); S.tok = new Array(49).fill(null); S.hasScat = false;
    for (const tk of old) { S.exiting.push(tk); tween((900 + Math.random() * 500) * sp, q => { tk.oy = -8.8 * q; tk.ox = Math.sin(q * 5 + tk.col) * .06; }, { delay: (250 + tk.row * 55 + Math.random() * 120) * sp, ease: easeIn, done: () => { const i = S.exiting.indexOf(tk); if (i >= 0) S.exiting.splice(i, 1); } }); }
    setMult(1, false); Dial.mf = 1; Dial.axisT = Dial.axis = -PI / 2;
    el.cap.textContent = 'FEATURE TOTAL'; setTotal(0, false); showLeft();
    if (m0 > 1) { await ctx.sleep(700); for (let m = 2; m <= m0; m++) { setMult(m, true); await ctx.sleep(m < m0 ? 260 : 0); } await ctx.sleep(500); }   // ECLIPSE: the dial winds up to its start
    await ctx.sleep(1900);
    el.card.classList.remove('on');
    await ctx.sleep(320);
  }

  async function doMore(e, ctx) {
    const add = Number(e.spins) || 0;
    S.left = Number(e.left) || S.left + add; showLeft();
    for (let k = 0; k < 49; k++) { const tk = S.tok[k]; if (tk && tk.sym === 'A') { pulseRing(k, '#ff9ec0', 900); spin(tk, 1, 700); burst(...cellXY(k), 10, { cols: ['#ffd0e0', '#ffe9a8'], grav: 0 }); } }
    el.plus.innerHTML = `<b>+${add}</b> free spins`; el.plus.classList.remove('on'); void el.plus.offsetWidth; el.plus.classList.add('on');
    el.spinsBox.classList.remove('pop'); void el.spinsBox.offsetWidth; el.spinsBox.classList.add('pop');
    Sfx.more(); wiz('cheer');
    await ctx.sleep(1050);
    el.plus.classList.remove('on');
  }

  /* RETROGRADE ends: the wound-up alignment is released, the sky returns, and the feature is summed up. */
  async function doRetroEnd(e, ctx) {
    const total = ctx.units(Number(e.total) || 0), good = total >= ctx.amount * ctx.cost, sp = ctx.speed(), mid = [S.gx + S.G / 2, S.gy + S.G / 2];
    await ctx.sleep(300);
    // release
    S.ringTarget = 0; Sfx.release();
    setMult(1, false); Dial.axisT = -PI / 2;
    await ctx.sleep(420);
    setRetro(false); setLevel(1, true); S.ringV = 4; el.root.classList.remove('ecl');
    shock(mid[0], mid[1], '#bfe0ff', 1000); flash(.6, 500);
    S.featOn = false;
    await ctx.sleep(480);
    // summary
    showCard(S.ecl ? 'ECLIPSE complete' : 'RETROGRADE complete', ctx.winMoney(total), `${S.spins} free ${S.spins === 1 ? 'spin' : 'spins'} · ALIGNMENT reached <b>×${S.peak}</b>`, '', 'end' + (good ? ' good' : ''));
    if (total > 0 && !api.reduced) { tween(950 * sp, (q, p) => { el.cardTitle.textContent = p >= 1 ? ctx.winMoney(total) : ctx.money(Math.round(total * q)); }); Sfx.count(.9 * sp, 1); }
    after(950, () => Sfx.end(good)); if (good) wiz('cheer');
    if (good && !api.reduced) for (let i = 0; i < 5; i++) after(i * 130, () => burst(S.G * (.2 + Math.random() * .6), S.G * (.25 + Math.random() * .5), 14, { speed: 1.4, grav: 1.5 }));
    await ctx.sleep(2000);
    el.card.classList.remove('on');
    el.cap.textContent = 'TOTAL WIN'; setTotal(ctx.winUnits, false);
    await ctx.sleep(300);
  }

  /* The sky celebrates a big win (from 5x what the round cost). It CLIMBS: the count starts in the first tier and every
   * time it passes the next tier's line the sky stages that tier (star shower, the conjunction, the eclipse, the heavens
   * aligning), the title slams in again, the screen takes a hit and the planets themselves burst out and rain down.
   * A tap anywhere on the stage jumps to the end (the final amount and title), so the long climbs never trap a player. */
  function planetBurst(x, y, n, speed) {                // 3D medallions flung out of an impact, turning as they fly
    if (api.reduced) return;
    const m = Math.min(S.W, S.H), list = PLANETS + 'GGSW';
    for (let i = 0; i < n; i++) { const a = Math.random() * TAU, v = m * speed * (.5 + Math.random()); emit({ layer: 'f', kind: 3, sym: list[Math.floor(Math.random() * list.length)], x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - m * .3, g: m * .9, drag: .5, max: 1.6 + Math.random() * 1.2, z: m * (.05 + Math.random() * .06), yaw: Math.random() * 360, spin: (Math.random() < .5 ? -1 : 1) * (240 + Math.random() * 420) }); }
    S.fxLive = true;
  }
  /* A win from 2x to 5x the round's cost (standard 7.2, from 1.2): a short celebration of its own, about 1.8 s and
   * skippable with a tap. The wizard cheers, a painted burst of light opens over the board, a few planets spill out, and
   * the amount rises in gold in the middle, counts up, punches, and lands on TOTAL WIN. */
  async function glint(ctx) {
    const sp = ctx.speed(), red = api.reduced, mid = [S.W / 2, S.H / 2 - Math.min(S.W, S.H) * .06];
    let skipped = false, wake = null;
    S.skip = () => { skipped = true; if (wake) wake(); };
    const wait = ms => (skipped ? Promise.resolve() : new Promise(res => { const id = setTimeout(() => { wake = null; res(); }, Math.max(0, ms * sp)); wake = () => { clearTimeout(id); wake = null; res(); }; }));
    wiz('cheer');
    el.big.dataset.tier = '0'; el.bigKick.textContent = 'A fine alignment'; bigTitle('');
    Gold.into(el.bigAmt, ctx.money(0)); el.bigX.textContent = ctx.fmtX(ctx.winX);
    el.big.classList.add('on');
    if (!red) { shock(mid[0], mid[1], '#ffe9a8', 1000, .8); burstF(mid[0], mid[1], S.small ? 10 : 24, { speed: .6, grav: .5, life: 1.2 }); planetBurst(mid[0], mid[1], S.small ? 3 : 6, .8); roomPulse(1.1); }
    Sfx.skyStart(0, .2);
    if (red) Gold.into(el.bigAmt, ctx.winMoney(ctx.winUnits));
    else { tween(900 * sp, (q, p) => { el.bigAmt.style.scale = (.92 + .12 * p).toFixed(3); Gold.into(el.bigAmt, p >= 1 ? ctx.winMoney(ctx.winUnits) : ctx.money(Math.round(ctx.winUnits * (1 - Math.pow(1 - p, 2))))); }, { ease: linear }); Sfx.count(.9 * sp, 0); }
    await wait(red ? 300 : 950);
    flushTweens();
    Gold.into(el.bigAmt, ctx.winMoney(ctx.winUnits)); el.big.classList.add('done'); el.bigAmt.style.scale = '';
    if (!red) { flash(.5, 360); shake(S.cs * .05, 260); }
    popTotal(); Sfx.win(2, false, false);
    await wait(650);
    S.skip = null;
    el.big.classList.remove('on', 'done'); delete el.big.dataset.tier;
    await ctx.sleep(260);
  }
  async function celebrate(ctx) {
    const rel = ctx.winX / (ctx.cost || 1), top = ctx.capped || rel >= SKY[4].x ? 4 : rel >= SKY[3].x ? 3 : rel >= SKY[2].x ? 2 : 1, sp = ctx.speed(), red = api.reduced;
    const T = [null, { pre: 650, count: 2100, hold: 2100 }, { pre: 1300, count: 2300, hold: 2300 }, { pre: 1700, count: 2700, hold: 2600 }, { pre: 2000, count: 3700, hold: 3200 }];
    let skipped = false, wake = null;
    S.skip = () => { skipped = true; if (wake) wake(); };
    const wait = ms => (skipped ? Promise.resolve() : new Promise(res => { const id = setTimeout(() => { wake = null; res(); }, Math.max(0, ms * sp)); wake = () => { clearTimeout(id); wake = null; res(); }; }));
    const lineAt = k => (k > top ? ctx.winUnits : Math.min(ctx.winUnits, Math.round(ctx.amount * (ctx.cost || 1) * SKY[k].x)));
    const restart = node => { const n = node.cloneNode(true); node.replaceWith(n); return n; };   // re-runs the slam animation
    Gold.into(el.bigAmt, ctx.money(0)); el.bigX.textContent = ctx.fmtX(ctx.winX);
    if (RGS) RGS.hold(.05);
    S.bw = { tier: 1, t0: performance.now(), start: performance.now(), sp, pre: 1, out: Math.max(1, 380 * sp), acc: 0, rain: 0, dt: 0, hitAt: 0, outAt: 0 }; S.fxLive = true;
    setLevel(2, true);
    let shown = 0;
    for (let tier = 1; tier <= top && !skipped; tier++) {
      const t = T[tier], mid = [S.W / 2, S.H / 2 - Math.min(S.W, S.H) * (tier >= 2 ? .2 : .1)];
      // stage this tier's sky: the conjunction sweeps in, the Moon slides over the Sun ...
      Object.assign(S.bw, { tier, t0: performance.now(), pre: Math.max(1, t.pre * sp), hitAt: 0 });
      Sfx.skyStart(tier, t.pre * sp / 1000);
      await wait(red ? 150 : t.pre);
      if (skipped) break;
      // ... and the hit: title slams in, flash, shake, shock rings, planets burst out
      S.bw.hitAt = performance.now();
      Sfx.skyHit(tier);
      if (tier === 3) wiz('summon');
      el.big.dataset.tier = String(tier);
      el.bigKick.textContent = SKY[tier].kick; bigTitle(tier === 4 && ctx.capped ? 'MAX WIN' : SKY[tier].title);
      if (tier > 1) { el.bigTitle = restart(el.bigTitle); el.bigKick = restart(el.bigKick); }
      flash(1, 560 + tier * 80); shake(S.cs * (.1 + tier * .06), 520 + tier * 90); camPunch(1 + tier * .015);
      shock(mid[0], mid[1], '#ffe9a8', 1100, 1.1); if (tier >= 3) after(150, () => shock(mid[0], mid[1], '#ff9ec0', 1300, 1.2)); if (tier >= 4) after(300, () => shock(mid[0], mid[1], '#bfe0ff', 1500, 1.4));
      if (!red) { burstF(mid[0], mid[1], (S.small ? 14 : 36) + tier * 10, { speed: .8, grav: .4, life: 1.5 }); planetBurst(mid[0], mid[1], (S.small ? 4 : 8) + tier * 4, .9 + tier * .15); after(260, () => planetBurst(mid[0], mid[1], (S.small ? 3 : 6) + tier * 3, 1.2 + tier * .15)); }
      el.big.classList.add('on');
      await wait(red ? 0 : 260);                                           // hit-stop: let the slam land
      // count up to the next tier's line (or to the final amount on the last tier)
      const from = shown, to = lineAt(tier + 1), dur = tier < top ? t.count * .85 : t.count;
      if (red) Gold.into(el.bigAmt, ctx.money(to));
      else { tween(dur * sp, (q, p) => { el.bigAmt.style.scale = (1 + .05 * (tier - 1) + .14 * p).toFixed(3); shown = Math.round(from + (to - from) * (1 - Math.pow(1 - p, tier < top ? 1.4 : 2.2))); Gold.into(el.bigAmt, p >= 1 && tier === top ? ctx.winMoney(ctx.winUnits) : ctx.money(shown)); }, { ease: linear }); Sfx.count(dur * sp / 1000, tier); }
      await wait(red ? 200 : dur);
      shown = to;
    }
    // the end (or a tap): the final title and amount, one last punch
    flushTweens();
    el.big.dataset.tier = String(top); S.bw.tier = top; if (!S.bw.hitAt) S.bw.hitAt = performance.now();
    el.bigKick.textContent = SKY[top].kick; bigTitle(top === 4 && ctx.capped ? 'MAX WIN' : SKY[top].title);
    Gold.into(el.bigAmt, ctx.winMoney(ctx.winUnits)); el.big.classList.add('on');
    Sfx.skyEnd(top); wiz('cheer');
    el.big.classList.add('done'); el.bigAmt.style.scale = '';
    if (!red) { const fm = [S.W / 2, S.H / 2]; flash(1, 700); shake(S.cs * (.14 + top * .05), 700); camPunch(1.06); shock(fm[0], fm[1], '#ffe9a8', 1400, 1.3); after(120, () => shock(fm[0], fm[1], top >= 3 ? '#ff9ec0' : '#bfe0ff', 1600, 1.5)); S.bw.hitAt = performance.now(); }
    if (!red) { burstF(S.W / 2, S.H / 2 + Math.min(S.W, S.H) * .12, (S.small ? 16 : 40) + top * 10, { speed: .9, grav: .6, life: 1.6 }); planetBurst(S.W / 2, S.H / 2, (S.small ? 6 : 12) + top * 4, 1.1); }
    skipped = false; await wait(T[top].hold * (skipped ? .5 : 1));
    S.skip = null;
    el.big.classList.remove('on', 'done'); el.bigAmt.style.scale = '';
    if (S.bw) S.bw.outAt = performance.now();
    await ctx.sleep(380);
    if (RGS) RGS.hold(1);
    S.bw = null;
  }

  async function play(events, ctx) {
    hardStop();
    if (S.retro) setRetro(false, true);
    S.playing = true; S.attract = false; S.featOn = false; S.feat = 0; S.peak = 1; S.spins = 0;
    el.cap.textContent = 'TOTAL WIN'; setTotal(0, false);
    el.root.classList.add('live');
    let feature = false;
    try {
      for (let i = 0; i < events.length; i++) {
        const e = events[i];
        if (!e || typeof e !== 'object') continue;
        if (e.type === 'spin') await doSpin(e, ctx, events[i + 1]);
        else if (e.type === 'cascade') await doCascade(e, ctx, events[i + 1]);
        else if (e.type === 'trigger') { feature = true; await doTrigger(e, ctx); }
        else if (e.type === 'more') await doMore(e, ctx);
        else if (e.type === 'retroEnd') await doRetroEnd(e, ctx);
      }
      if (S.retro) setRetro(false);
      S.featOn = false;
      el.cap.textContent = 'TOTAL WIN'; setTotal(ctx.winUnits, false);
      // A win below what the round was played for is simply shown. From 5x the round's cost the sky answers.
      if (ctx.winX >= ctx.cost && (ctx.winX >= SKY[1].x * ctx.cost || ctx.capped)) await celebrate(ctx);
      else if (ctx.winX >= 2 * ctx.cost && ctx.winUnits > 0) await glint(ctx);
      else if (ctx.winX >= ctx.cost && ctx.winUnits > 0) { popTotal(); if (RGS) RGS.countEnd(ctx.winX / ctx.cost); }
      else if (ctx.winUnits > 0 && RGS) RGS.emit('lossSmall');
    } finally {
      if (S.retro) setRetro(false);
      S.featOn = false; S.playing = false;
      setTimeout(loadLater, 3000);   // a moment after the first round, when the player is reading the result
    }
    return { feature };
  }
  function reset() {
    hardStop(); setRetro(false, true); if (el.root) el.root.classList.remove('ecl'); S.ecl = false; S.playing = false; S.featOn = false;
    Dial.m = Dial.mf = 1; Dial.axisT = -PI / 2; setLevel(0);
    if (S.grid && S.grid.length === 49) buildTokens(S.grid);
    if (el.cap) el.cap.textContent = 'TOTAL WIN';
  }

  /* ---------- Rules text (every number here is enforced by math/game.mjs replay) ---------- */
  const ICON = {};
  for (const s of PLANETS + 'WA') ICON[s] = `<img alt="" src="${A.sym3d(s) || A.sprite(s, 112).toDataURL('image/png')}">`;
  const x = v => String(v / 100);
  const group = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const RULES = `
    <h3>How to play</h3>
    <p>Press PLAY. Forty-nine planet medallions drop into the 7×7 orrery. Five or more of the same planet that touch side to side or top to bottom form a cluster. Every cluster wins the value shown in the win table for its planet and its size, multiplied by your play amount and by the current ALIGNMENT.</p>
    <h3>Win table</h3>
    <p>Values are multiples of the play amount, for one cluster of that size, before ALIGNMENT. Comets in a cluster count towards its size.</p>
    <div class="rg-tablewrap"><table class="rg-table"><thead><tr><th>Planet</th>${BANDS.map(b => `<th>${b}</th>`).join('')}</tr></thead>
    <tbody>${[...PLANETS].reverse().map(s => `<tr><td>${ICON[s]}<span><b>${A.METAL[s].planet}</b><small>${A.METAL[s].metal}</small></span></td>${TABLE[s].map(v => `<td>${x(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <div class="rg-sym">${ICON.W}<div><b>Comet (wild)</b><p>Substitutes for every planet and can be part of more than one cluster at the same time. Comets do not drop in: every winning cluster of 7 or more leaves one comet behind in one of the positions where that cluster had a planet. The comet then moves with gravity like any medallion and stays until it is used in a win or the spin ends. Comets alone do not form a cluster.</p></div></div>
    <div class="rg-sym">${ICON.A}<div><b>Astrolabe (scatter)</b><p>Lands only on the first drop of a spin, never during a cascade, and a spin lands at most 5 of them. Astrolabes are not part of clusters and are not removed by cascades. When the cascades of a main game spin are finished, 3, 4 or 5 astrolabes on the grid start RETROGRADE with 8, 10 or 12 free spins.</p></div></div>
    <h3>Cascades and ALIGNMENT</h3>
    <p>All winning clusters are removed together. The remaining medallions fall, new medallions drop in from above, and the grid is checked again. This repeats until no cluster is left.</p>
    <p>ALIGNMENT starts at ×1 on every spin of the main game and goes up by 1 after each cascade. The wins of a cascade are multiplied by the ALIGNMENT shown when that cascade happens: ×1 for the first, ×2 for the second, ×3 for the third, and so on.</p>
    <h3>RETROGRADE</h3>
    <p>Gravity is reversed: medallions rise, and new ones enter from below. ALIGNMENT starts at ×1 when RETROGRADE begins, goes up by 1 after every cascade, and does not reset between free spins.</p>
    <p>A free spin that lands 3 or more astrolabes adds 4 free spins, up to 30 free spins in one RETROGRADE. The feature wins the sum of all its free spins, added to the win of the spin that started it. Free spins use the play amount of the round that started them.</p>
    <h3>ECLIPSE</h3>
    <p>ECLIPSE is a short RETROGRADE: ${ECLIPSE_SPINS} free spins with reversed gravity, where ALIGNMENT starts at ×${ECLIPSE_MULT} instead of ×1, goes up by 1 after every cascade and does not reset between free spins. A free spin that lands 3 or more astrolabes adds 4 free spins, as in RETROGRADE. It starts only from its own button; astrolabes in the main game start RETROGRADE, not ECLIPSE.</p>
    <h3>Modes</h3>
    <p>Choose Orrery or STARGAZE with the brass selector in the bar: tap either name, or tap the dial between them to turn it to the other side. The lit name is the mode of the next play.</p>
    <p><b>Orrery</b> is the main game and is played for 1× the play amount.</p>
    <p><b>STARGAZE</b> plays the main game for ${STARGAZE_COST}× the play amount. The rules and the win table are the same, but astrolabes land on the first drop about five times as often, so RETROGRADE starts about once in 41 plays instead of about once in 208. Wins are still multiples of the play amount, not of the ${STARGAZE_COST}× cost. STARGAZE stays on for every play, and autoplay, until you switch back to Orrery.</p>
    <p><b>ECLIPSE</b> is played for ${ECLIPSE_COST}× the play amount: its spin always lands exactly 3 astrolabes, and once that spin's cascades are finished ECLIPSE begins with ${ECLIPSE_SPINS} free spins from ×${ECLIPSE_MULT}.</p>
    <p><b>RETROGRADE</b> is played for ${RETRO_COST}× the play amount: its spin always lands 3, 4 or 5 astrolabes, so the feature is instantly triggered once that spin's cascades are finished.</p>
    <h3>Win cap</h3>
    <p>A round can win at most ${group(MAX_WIN)}× the play amount. If the total reaches that amount, the round ends at once and wins exactly ${group(MAX_WIN)}×.</p>
    <p>The names shown over large clusters and big wins are decoration only and do not change any win.</p>`;

  cfg = {
    id: 'retrograde', title: 'Retrograde', tagline: 'Seven planets. One alignment. Then gravity turns.',
    rtp: '96.30', layout: 'bar', logo: '<img class="rg-logo-img" src="assets/logo.webp" alt="Retrograde">', celebrate: false,   // illustrated logo (art/logo, job 1bb47daa); the shell's plain big-win banner is off: the game celebrates itself
    modes: [
      { name: 'base', label: 'ORRERY', note: '1x', cost: 1, maxWin: MAX_WIN },
      { name: 'stargaze', label: 'STARGAZE', note: '3x · bonus ×5', cost: STARGAZE_COST, maxWin: MAX_WIN },
      { name: 'eclipse', kind: 'feature', label: 'ECLIPSE', cost: ECLIPSE_COST, maxWin: MAX_WIN, blurb: `The spin lands 3 astrolabes: ${ECLIPSE_SPINS} free spins with ALIGNMENT starting at ×${ECLIPSE_MULT}.`, confirmTitle: 'Begin the ECLIPSE?', confirmLabel: 'Begin' },
      { name: 'retro', kind: 'feature', label: 'RETROGRADE', cost: RETRO_COST, maxWin: MAX_WIN, blurb: 'The spin lands 3 to 5 astrolabes and RETROGRADE begins.', confirmTitle: 'Enter RETROGRADE?', confirmLabel: 'Begin' },
    ],
    introCards: [
      { title: 'CLUSTERS', text: 'Link 5 or more of one planet. Winners dissolve and new medallions drop in.' },
      { title: 'ALIGNMENT', text: 'Every cascade lines up another planet and raises the multiplier by 1.' },
      { title: 'RETROGRADE', text: '3 astrolabes reverse gravity for free spins where the multiplier never resets.' },
    ],
    featureName: 'RETROGRADE', statLabel: 'Retrogrades', playLabel: 'PLAY', busyLabel: 'TURNING',
    rules: RULES,
    mount(stage, a) {
      api = a;
      const h = a.h, img = s => { const i = document.createElement('span'); i.innerHTML = ICON[s]; return i.firstChild; };
      el.root = h('div', { class: 'rg-root' });
      el.sky = h('div', { class: 'rg-sky', 'aria-hidden': 'true' }); el.room = h('div', { class: 'rg-room', 'aria-hidden': 'true' }); el.wiz = h('canvas', { class: 'rg-wiz', 'aria-hidden': 'true' });
      el.orr = h('canvas', { class: 'rg-orrery' }); el.vig = h('div', { class: 'rg-vig' }); el.grid = h('canvas', { class: 'rg-grid' }); el.gbg = h('canvas', { class: 'rg-grid rg-gbg', 'aria-hidden': 'true' }); el.gund = h('canvas', { class: 'rg-grid rg-gund', 'aria-hidden': 'true' }); el.b3d = h('canvas', { class: 'rg-grid rg-b3d', 'aria-hidden': 'true' });
      el.dial = h('canvas', { class: 'rg-dial' });
      el.dialBox = h('div', { class: 'rg-dialbox' }, el.dial, h('img', { class: 'rg-dialring', src: 'assets/ui/dial-ring.webp', alt: '' }));
      el.align = h('div', { class: 'rg-align' }, el.dialBox, h('div', { class: 'rg-cap rg-acap', text: 'ALIGNMENT' }));
      el.left = h('b', { text: '0' }); el.leftLbl = h('span', { text: 'spins left' });
      el.spinsBox = h('div', { class: 'rg-spins' }, h('em', { text: 'RETROGRADE' }), h('div', null, el.left, el.leftLbl));
      el.cap = h('div', { class: 'rg-cap rg-totcap', text: 'TOTAL WIN' });
      el.total = h('div', { class: 'rg-total zero', text: '' });
      el.pl = h('div', { class: 'rg-pl' }, h('div', { class: 'rg-pl-in' }, el.spinsBox, h('div', { class: 'rg-tot' }, el.cap, el.total)));
      el.legend = h('div', { class: 'rg-legend' },
        h('div', { class: 'rg-lg-base' }, img('G'), h('span', { text: '5 or more linked planets win' })),
        h('div', { class: 'rg-lg-base' }, img('W'), h('span', { text: 'Clusters of 7 or more leave a comet' })),
        h('div', { class: 'rg-lg-base' }, img('A'), h('span', { text: '3 astrolabes start RETROGRADE' })),
        h('div', { class: 'rg-lg-retro' }, img('G'), h('span', { text: 'Gravity is reversed' })),
        h('div', { class: 'rg-lg-retro' }, img('W'), h('span', { text: 'ALIGNMENT never resets' })),
        h('div', { class: 'rg-lg-retro' }, img('A'), h('span', { text: '3 astrolabes add 4 free spins' })));
      el.plaque = h('div', { class: 'rg-plaque' }, h('div', { class: 'rg-plq' }, el.pl), el.legend);
      el.plaque.prepend(el.spinsBox);   // the free spins sit on their own ribbon above the cartouche (game.css)
      el.fx = h('canvas', { class: 'rg-fx' });
      el.cardKick = h('div', { class: 'rg-card-kick' }); el.cardTitle = h('div', { class: 'rg-card-title' }); el.cardSub = h('div', { class: 'rg-card-sub' }); el.cardNote = h('div', { class: 'rg-card-note' });
      el.card = h('div', { class: 'rg-card' }, el.cardKick, el.cardTitle, el.cardSub, el.cardNote);
      el.plus = h('div', { class: 'rg-plus' });
      el.mpop = h('div', { class: 'rg-mpop', 'aria-hidden': 'true' });
      el.bigKick = h('div', { class: 'rg-big-kick' }); el.bigTitle = h('div', { class: 'rg-big-title' }); el.bigAmt = h('div', { class: 'rg-big-amt' }); el.bigX = h('div', { class: 'rg-big-x' });
      el.big = h('div', { class: 'rg-big', role: 'status' }, el.bigKick, el.bigTitle, el.bigAmt, el.bigX);
      el.root.append(el.sky, el.orr, el.room, el.vig, el.wiz, el.gbg, el.gund, el.b3d, el.grid, el.align, el.plaque, el.fx, el.card, el.plus, el.mpop, el.big);
      // the four painted big-win titles are painted once, almost transparent, under everything: the browser decodes them now
      // and not at the first big win, where the decode froze a phone for up to a quarter of a second (2026-11-27)
      { const warm = h('div', { class: 'rg-warm', 'aria-hidden': 'true' }); for (const t of ['grand', 'celestial', 'cosmic', 'heavenly']) { const i = h('i'); i.dataset.art = t; warm.append(i); } el.root.prepend(warm); }
      stage.append(el.root);
      el.orrC = el.orr.getContext('2d'); el.gridC = el.grid.getContext('2d'); el.gbgC = el.gbg.getContext('2d'); el.gundC = el.gund.getContext('2d'); el.dialC = el.dial.getContext('2d'); el.fxC = el.fx.getContext('2d');
      // the legend under the win cartouche shows only when all of it fits inside the stage; otherwise it is hidden
      // whole (never cut by the frame). Checked on every resize and when the retrograde rows swap in.
      const fitLegend = () => { const lg = el.legend; if (!lg || !lg.isConnected) return; lg.classList.remove('lg-off'); if (getComputedStyle(lg).display === 'none') return; const r = lg.getBoundingClientRect(), st = el.root.getBoundingClientRect(); if (r.height && (r.bottom > st.bottom - 4 || r.top < st.top || r.right > st.right)) lg.classList.add('lg-off'); };
      if (window.ResizeObserver) new ResizeObserver(() => requestAnimationFrame(fitLegend)).observe(el.root);
      new MutationObserver(() => requestAnimationFrame(fitLegend)).observe(el.root, { attributes: true, attributeFilter: ['class', 'data-land', 'data-small'] });
      setTimeout(fitLegend, 300); if (document.fonts) document.fonts.ready.then(fitLegend);
      layout();
      // the board in real 3D (board3d.js); the baked strips are the fallback only
      if (window.RGBoard3D) RGBoard3D.init(el.b3d).then(ok => { if (!ok) { S.b3d = false; loadStrips(); } S.dirty = true; }); else { S.b3d = false; loadStrips(); }
      loadRoom(); amountPicker();
      if (window.RGWiz) RGWiz.init(el.wiz).then(ok => { S.wiz = !!ok; if (ok) { el.root.classList.add('has-wiz'); placeWiz(); } });
      wizHooks();
      el.root.addEventListener('pointerdown', () => { if (S.skip) S.skip(); });   // a tap hurries a celebration to its end
      buildTokens(restingGrid());
      setTotal(0, false); Gold.later(() => { Gold.into(el.total, api.winMoney(S.totalShown), true); });
      if ('ResizeObserver' in window) new ResizeObserver(() => layout()).observe(el.root); else window.addEventListener('resize', layout);
      document.addEventListener('visibilitychange', () => { if (document.hidden) { stopLoop(); if (RGS) RGS.pause(true); else Music.stop(); } else { startLoop(); if (RGS) RGS.pause(false); else if (S.started && api.sound.on) Music.start(); } });
      if (document.fonts && document.fonts.load) Promise.all([document.fonts.load('800 20px Jost'), document.fonts.load('700 20px Cinzel')]).then(() => { S.dirty = true; }, () => {});
      S.attract = true;
      startLoop();
    },
    play, reset,
    // STARGAZE on: the telescope is open, the sky brightens and the astrolabes in the legend glow (game.css .gaze)
    onMode(name) { if (el.root) el.root.classList.toggle('gaze', name === 'stargaze'); },
    idle() { S.attract = true; S.nextGlint = S.t + 1; el.root.classList.remove('live'); setLevel(0); },
    onStart() { setTimeout(warmGPU, 300); S.attract = true; S.started = true; if (RGS) { RGS.init(api); RGS.wake(); RGS.start(); RGS.ambience(true); } else { Snd.start(); Music.start(); } },
    onSound(on) { if (RGS) { if (on && S.started) { RGS.wake(); RGS.music(rgSet(), rgLevel(S.level || 0)); RGS.ambience(true); } return; } if (!on) Music.stop(); else if (S.started) Music.start(); },
  };
  LZ.boot(cfg);
  // The intro also shows the seven medallions under the logo on frames too small for the cards.
  /* The intro's astronomer's book (art/book -> tools/make-book.mjs -> assets/book): the three feature cards become
   * three spreads of an open grimoire, an ink illustration on the left page and the rule, hand-lettered, on the right.
   * Every 5 s (or on a tap) the right page turns over: a leaf in 3D whose two faces are cut from the same book picture
   * (the right page in front, the left page behind), carrying the old text away and bringing the next illustration.
   * The shell's card list stays in the DOM (hidden) and the book's text is real text. */
  const cardBox = document.getElementById('lzIntroCards');
  if (cardBox && cfg.introCards) {
    const P = cfg.introCards.map((c, i) => ({ t: c.title, x: c.text, ill: 'assets/book/ill-' + ['clusters', 'alignment', 'retrograde'][i] + '.webp', n: ['I', 'II', 'III'][i] }));
    P.push({ t: 'ECLIPSE', x: 'Its own button starts 3 free spins with ALIGNMENT already at x3, and it never resets.', ill: 'assets/book/ill-eclipse.webp', n: 'IV' });
    const esc = t => String(t).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
    const left = p => '<div class="rg-pg rg-pg-l"><img class="rg-ill" src="' + p.ill + '" alt=""></div>';
    const right = p => '<div class="rg-pg rg-pg-r"><b class="rg-pg-t">' + esc(p.t) + '</b><p>' + esc(p.x) + '</p><i class="rg-pg-n">' + p.n + '</i></div>';
    const layer = inner => '<div class="rg-bk-layer"><img class="rg-bk-img" src="assets/book/book.webp" alt="">' + inner + '</div>';
    cardBox.classList.add('rg-bookwrap');
    cardBox.insertAdjacentHTML('beforeend', '<div class="rg-book" role="region" aria-label="How it plays" aria-live="polite"><div class="rg-bk-base">' + layer('<div class="rg-l"></div><div class="rg-r"></div>') + '</div><div class="rg-leaf" aria-hidden="true"><div class="rg-leaf-f"></div><div class="rg-leaf-b"></div></div><div class="rg-bk-glow" aria-hidden="true"></div></div>');
    const book = cardBox.querySelector('.rg-book'), L = book.querySelector('.rg-l'), R = book.querySelector('.rg-r'), leaf = book.querySelector('.rg-leaf'), lf = leaf.querySelector('.rg-leaf-f'), lb = leaf.querySelector('.rg-leaf-b');
    let cur = 0, busy = false, timer = 0;
    const show = i => { L.innerHTML = left(P[i]); R.innerHTML = right(P[i]); };
    show(0);
    const reduce = () => api && api.reduced || matchMedia('(prefers-reduced-motion: reduce)').matches;
    function turn() {
      if (busy || !book.isConnected) return;
      const next = (cur + 1) % P.length;
      if (reduce()) { cur = next; show(cur); return; }
      busy = true;
      lf.innerHTML = layer(right(P[cur])); lb.innerHTML = layer(left(P[next]));
      R.innerHTML = right(P[next]);                                   // the page under the leaf already holds the next rule
      leaf.classList.remove('go'); void leaf.offsetWidth; leaf.classList.add('on', 'go'); try { Sfx.page(); } catch (e) {}
      setTimeout(() => { L.innerHTML = left(P[next]); leaf.classList.remove('on', 'go'); cur = next; busy = false; }, 1000);
    }
    const loop = () => { clearInterval(timer); timer = setInterval(() => { if (document.getElementById('lzIntro').classList.contains('out')) { clearInterval(timer); return; } turn(); }, 5200); };
    book.addEventListener('click', () => { turn(); loop(); });
    setTimeout(loop, 600);
  }
  // the PLAY seal: its word is drawn in gold under the wax (CSS reads data-label), kept in step with the shell's text
  const playBtn = document.getElementById('lzIntroPlay');
  // the heavier extras (the wizard's cheer and suspense clips, the full-turn symbol strips) load once the first round is
  // over, so the first load (up to the end of the first round, standard: 8 MB) stays light; a fallback 30 s after PLAY
  if (playBtn) playBtn.addEventListener('click', () => setTimeout(loadLater, 30000));
  if (playBtn) { const sync = () => playBtn.setAttribute('data-label', LZ.params && LZ.params.replay && /^play$/i.test(playBtn.textContent.trim()) ? 'START REPLAY' : playBtn.textContent.trim()); sync(); new MutationObserver(sync).observe(playBtn, { childList: true, characterData: true, subtree: true }); }
  const actBtn = document.getElementById('lzAction');
  if (actBtn && window.LZ && LZ.state) {
    const hurry = document.createElement('button'); hurry.type = 'button'; hurry.className = 'rg-hurry'; hurry.hidden = true; hurry.setAttribute('aria-label', 'Speed up this round');
    document.body.append(hurry);
    let saved = null;
    const place = () => { const r = actBtn.getBoundingClientRect(); Object.assign(hurry.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' }); };
    const sync = () => {
      const busy = actBtn.classList.contains('busy');
      if (busy) { place(); hurry.hidden = false; }
      else { hurry.hidden = true; if (saved !== null) { LZ.state.fast = saved; saved = null; } }
    };
    new MutationObserver(sync).observe(actBtn, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', () => { if (!hurry.hidden) place(); });
    hurry.addEventListener('pointerdown', e => { e.preventDefault(); if (saved === null) saved = !!LZ.state.fast; LZ.state.fast = true; actBtn.classList.add('hurry'); setTimeout(() => actBtn.classList.remove('hurry'), 400); });
  }
  /* Replay card (Engine review of Clout Cat, 2026-11-23: a replay opens on a card like Engine's example, in Stake.us
   * wording, which we use everywhere): Mode, Base Play, Feature Multiplier, Total Play Worth, Final Multiplier, Total
   * Win, then START REPLAY. Filled from the shell's own replay facts (#lzRpMode...) once the round has loaded; the book
   * is not shown in a replay. */
  if (window.LZ && LZ.params && LZ.params.replay) {
    const intro = document.querySelector('.lz-intro-in'), seal = document.getElementById('lzIntroPlay');
    if (intro && seal) {
      document.getElementById('lzIntro').classList.add('rg-is-replay');
      const card = document.createElement('section'); card.className = 'rg-rpcard'; card.setAttribute('aria-label', 'Round replay');
      card.innerHTML = '<h2>Replay</h2><dl>' + [['Mode', 'm'], ['Base Play', 'a'], ['Feature Multiplier', 'x'], ['Total Play Worth', 'c'], ['Final Multiplier', 'p'], ['Total Win', 'w']].map(([t, k]) => '<dt>' + t + '</dt><dd data-k="' + k + '">–</dd>').join('') + '</dl><p>This is a replay of a previous round. Your balance is not affected.</p>';
      seal.before(card);
      const get = id => (document.getElementById(id) || {}).textContent || '–';
      const fill = () => {
        const set = (k, v) => { const d = card.querySelector('[data-k="' + k + '"]'); if (d) d.textContent = v; };
        set('m', get('lzRpMode')); set('a', get('lzRpAmount')); set('x', get('lzRpX').replace('×', 'x')); set('c', get('lzRpCost')); set('p', get('lzRpMult').replace('×', 'x'));
        const rd = LZ.state.replayData, amt = LZ.state.amount;
        if (rd && amt && api && api.winMoney) set('w', api.winMoney(Math.round(amt * (Number(rd.payoutMultiplier) || 0))));
        else if (rd && amt && LZ.api && LZ.api.winMoney) set('w', LZ.api.winMoney(Math.round(amt * (Number(rd.payoutMultiplier) || 0))));
        // the bar's replay facts end with Total Win too, as on Engine's example card
        const dl = document.querySelector('#lzReplay dl'), w = card.querySelector('[data-k="w"]').textContent;
        if (dl) {
          let dd = dl.querySelector('dd[data-rg="w"]');
          if (!dd) { const dt = document.createElement('dt'); dt.textContent = 'Total Win'; dd = document.createElement('dd'); dd.dataset.rg = 'w'; const box = dl.querySelector('.rg-fact') ? document.createElement('span') : null; if (box) { box.className = 'rg-fact'; box.append(dt, dd); dl.append(box); } else dl.append(dt, dd); }
          if (dd.textContent !== w) dd.textContent = w;
        }
      };
      // the bar's replay facts in the same wording
      const names = { Amount: 'Base Play', 'Cost multiplier': 'Feature Multiplier', 'Real cost': 'Total Play Worth', Result: 'Final Multiplier' };
      document.querySelectorAll('#lzReplay dt').forEach(dt => { const n = names[dt.textContent.trim()]; if (n) dt.textContent = n; });
      const rp = document.getElementById('lzReplay'); if (rp) new MutationObserver(fill).observe(rp, { childList: true, subtree: true, characterData: true });
      new MutationObserver(fill).observe(seal, { attributes: true, attributeFilter: ['disabled'] }); setTimeout(fill, 400);
    }
  }
  // the mode selector's brass knob (drawn by CSS between the two names): a tap on it turns it to the other side
  const modeBox = document.getElementById('lzModes');
  if (modeBox) modeBox.addEventListener('click', e => { if (e.target.closest('button')) return; const r = modeBox.getBoundingClientRect(), other = modeBox.querySelector('button[aria-pressed="false"]'); if (other && !other.disabled && Math.abs(e.clientX - (r.left + r.width / 2)) < r.height) other.click(); });
  const logo = document.querySelector('.lz-intro-logo');
  if (logo) { const row = document.createElement('div'); row.className = 'rg-intro-row'; row.setAttribute('aria-hidden', 'true'); row.innerHTML = [...PLANETS].map(s => ICON[s]).join(''); logo.after(row); }
  introStage();
  setTimeout(warmGPU, 1500); setTimeout(warmGPU, 5000);   // while the intro shows (see warmGPU)
  barB();
  // the floating bar changes the room above it: lay the stage out again once the bar's own style is in place
  for (const ms of [0, 300, 1200]) setTimeout(() => { if (el.root) { S.W = 0; layout(); } }, ms);
  // UI sounds (recorded): a click on every button (the bet arrows and the buys have their own), a soft hover on desktop,
  // the bet arrows' pitch climbs with the amount's place in the list (standard 6.6), the buy menu opening
  if (RGS) {
    document.addEventListener('click', e => { const b = e.target.closest('#lzApp button, .rg-amt [role=option], .rg-amt button'); if (!b || b.matches('#lzMinus, #lzPlus') || b.closest('.lz-feat')) return; RGS.emit('click'); }, true);
    if (window.matchMedia && matchMedia('(hover: hover)').matches) document.addEventListener('pointerover', e => { const b = e.target.closest('#lzApp button'); if (b && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('button') === b)) RGS.emit('hover'); });
    const lvl = () => { const sel = document.getElementById('lzAmtSel'); return sel && sel.options.length ? sel.selectedIndex / Math.max(1, sel.options.length - 1) : 0; };
    for (const [id, ev] of [['lzPlus', 'betUp'], ['lzMinus', 'betDown']]) { const b = document.getElementById(id); if (b) b.addEventListener('click', () => setTimeout(() => RGS.emit(ev, { level: lvl() }), 0), true); }
    document.addEventListener('click', e => { if (e.target.closest('.lz-feat')) RGS.emit('buyOpen'); }, true);
  }

  /* The bar, direction B (2026-11-26, after the Stake review tagged "Poor bet UI bar"): no header and no framed panel.
   * One low row on a dark floor fade: info, sound, balance on the left; the spin medallion in the CENTRE with the bet
   * arrows hugging it and the play amount as its badge; win, turbo, auto on the right. The logo moves onto the stage;
   * the mode knob and the RETROGRADE buy sit on the stage under the win cartouche (in the right column when landscape,
   * above the bar on a phone). The shell's own elements are moved, never rebuilt, so every id and handler stays. */
  function barB() {
    const $ = id => document.getElementById(id), app = $('lzApp'), panel = $('lzPanel'), stage = document.querySelector('.lz-stage');
    if (!app || !panel || !stage || app.classList.contains('rg-barB')) return;
    const box = (cls, kids) => { const d = document.createElement('div'); d.className = cls; kids.forEach(k => k && d.append(k)); return d; };
    const replay = !!(window.LZ && LZ.params && LZ.params.replay);
    const icons = box('rg-icons', [$('lzInfo'), $('lzSound')]);
    const L = box('rg-bl', [icons, $('lzWallet')]);   // #lzReplay (the replay facts) stays a direct child of the panel
    const R = box('rg-br', [$('lzWinBox'), $('lzQuick')]);
    const stepper = document.querySelector('#lzField .lz-stepper'), amount = document.querySelector('#lzField .lz-amount');
    // in a replay the shell hides the bet field, so the (replay) button must not live inside it
    let C;
    if (!replay && stepper && $('lzAction')) { stepper.insertBefore(box('rg-spinw', [$('lzAction')]), $('lzPlus')); C = box('rg-bc', [$('lzField')]); if (amount) L.append(amount); }
    else C = box('rg-bc', [$('lzField'), $('lzAction')]);
    // replay facts: each label + value kept together so the line wraps between facts, never inside one
    if (replay) document.querySelectorAll('#lzReplay dt').forEach(dt => { const dd = dt.nextElementSibling, s = document.createElement('span'); s.className = 'rg-fact'; dt.before(s); s.append(dt); if (dd && dd.tagName === 'DD') s.append(dd); });
    panel.prepend(L, C, R);
    const brand = document.querySelector('.lz-brand'), tags = document.querySelector('.lz-tags');
    stage.append(box('rg-brand', [brand, tags]));
    const modesw = box('rg-modesw', [$('lzModes')]), side = box('rg-side', [modesw, $('lzFeats')]), quick = $('lzQuick'), row1 = box('rg-row1', []);
    app.classList.add('rg-barB');
    // the play amount is the badge under the medallion; the medallion's own cost line only shows when it differs
    // (STARGAZE costs 3x the amount)
    const sub = $('lzActionSub'), amt = $('lzAmt');
    const same = () => app.classList.toggle('rg-same', !!(sub && amt && sub.textContent.trim() === amt.textContent.trim()));
    if (sub && amt) { for (const n of [sub, amt]) new MutationObserver(same).observe(n, { childList: true, characterData: true, subtree: true }); same(); }
    // landscape: modes + buy in the right column right under the cartouche (shrunk to the column if needed);
    // phone and tiny frames: on the stage just above the bar. On a phone the info/sound knobs go to the stage's top right.
    const put = () => {
      if (!el.root) return;
      const land = el.root.dataset.land === '1', plq = S.plqEl || (S.plqEl = el.plaque && el.plaque.querySelector('.rg-plq'));
      const col = land && el.root.dataset.small !== '1' && innerHeight > 330;
      // landscape (Lidor 2026-11-28, with a picture of the bar): the mode knob stands in the bar left of the minus, and
      // TOTAL WIN right of the plus; the right column keeps the ALIGNMENT dial and the buy plates. Elsewhere (phone,
      // Popout S) both stay where they were.
      const knobUp = !!(col && C);
      if (plq) {
        // TOTAL WIN fills the bar between the plus and turbo (Lidor: "take a good share of the width"); it keeps the
        // cartouche's proportions, so a wide one rises above the bar, standing on its bottom edge
        if (knobUp) {
          if (plq.parentNode !== R || plq.nextSibling !== quick) R.insertBefore(plq, quick && quick.parentNode === R ? quick : null);
          plq.classList.add('in-bar'); plq.style.width = '';
          requestAnimationFrame(() => {
            const plus = document.getElementById('lzPlus'), qk = quick && quick.parentNode === R ? quick : null; if (!plus) return;
            const room = (qk ? qk.getBoundingClientRect().left : R.getBoundingClientRect().right) - plus.getBoundingClientRect().right - 36;
            const w = Math.round(clamp(Math.min(room, panel.clientHeight * 1.35 * 900 / 490), 120, 460));   // at most a little taller than the bar
            plq.style.width = w + 'px'; if (S.totalShown != null) fitTotal(api.winMoney(S.totalShown));
          });
        }
        else { plq.classList.remove('in-bar'); plq.style.width = ''; if (plq.parentNode !== el.plaque) el.plaque.prepend(plq); }
      }
      if (col) { if (side.parentNode !== el.plaque) el.plaque.append(side); side.classList.add('in-col'); }
      else { if (side.parentNode !== stage) stage.append(side); side.classList.remove('in-col'); }
      if (knobUp) { if (modesw.parentNode !== C || C.firstChild !== modesw) C.prepend(modesw); modesw.classList.add('in-bar'); }
      else { modesw.classList.remove('in-bar'); if (land && modesw.parentNode !== side) side.prepend(modesw); }
      side.style.zoom = ''; side.classList.remove('stack');
      side.classList.toggle('narrow', !!(col && el.plaque && el.plaque.clientWidth < 230 && innerHeight >= 600));   // upright knob only in a tall narrow column (4:3)
      if (col) {
        // in the column under the cartouche (as wide as the column; each label fitted by fitSide). The two buy plates
        // side by side or one above the other: both are tried, each shrunk to the height left under the cartouche,
        // and the layout whose smallest label is larger wins (2026-11-28, Lidor: "the words come out, it is all cut")
        const trial = st => {
          side.classList.toggle('stack', st); side.style.zoom = '';
          const r0 = side.getBoundingClientRect(), p0 = el.plaque.getBoundingClientRect(), bar = panel.getBoundingClientRect().top, hh = Math.min(p0.bottom, bar) - r0.top - 8;   // never under the bar
          const z = Math.max(.4, Math.min(1, hh > 0 ? hh / (r0.height + 26) : 1));   // +26: the plates' moon hangs below their box
          if (z < 1) side.style.zoom = z.toFixed(3);
          fitSide();
          let least = 99;
          for (const t of side.querySelectorAll('.lz-feat span, .lz-feat small, .lz-modes b')) if (t.clientWidth) least = Math.min(least, parseFloat(getComputedStyle(t).fontSize) * z);
          return least;
        };
        const flat = trial(false), stacked = trial(true);
        if (flat >= stacked) trial(false);
      } else fitSide();
      // phone: turbo + auto stand beside the mode knob above the bar (the bar has no room for 44px buttons at 360px)
      // the play amount: right of the bar on a phone (mirrors the balance), next to the balance in landscape
      if (amount && !replay && el.root) { if (!land || innerHeight <= 330) { if (amount.parentNode !== R) R.prepend(amount); } else if (amount.parentNode !== L) L.append(amount); }
      if (!land && quick) { if (row1.parentNode !== side) side.prepend(row1); if (modesw.parentNode !== row1) row1.append(modesw); if (quick.parentNode !== row1) row1.append(quick); }
      else if (quick) { if (!knobUp && modesw.parentNode !== side) side.prepend(modesw); row1.remove(); if (quick.parentNode !== R) R.append(quick); }
      const tiny = land;     // landscape: info and sound go on the stage under the logo, so the bar keeps at most 7 controls
      if (!land || tiny) { if (icons.parentNode !== stage) stage.append(icons); icons.classList.add('on-stage'); icons.classList.toggle('tiny', tiny); }
      else { if (icons.parentNode !== L) L.prepend(icons); icons.classList.remove('on-stage', 'tiny'); }
      // landscape: the knobs sit right under the logo and its RTP line (measured, so they never cover it)
      // landscape: the knobs follow the RTP line in the logo's own column, so they can never cover it (2026-11-28 review)
      const brandBox = document.querySelector('.rg-brand');
      if (tiny && brandBox) { if (icons.parentNode !== brandBox) brandBox.append(icons); icons.classList.add('in-brand'); icons.style.top = ''; }
      else { icons.classList.remove('in-brand'); if (!land && icons.parentNode !== stage) stage.append(icons); icons.style.top = ''; }
      requestAnimationFrame(() => { if (S.totalShown != null) fitTotal(api.winMoney(S.totalShown)); });   // redraw the amount at the cartouche's new size
      // the knob in the bar: as tall as the bar allows
      if (knobUp) { modesw.style.zoom = ''; const kh = modesw.getBoundingClientRect().height, bh = panel.clientHeight * .86; if (kh > 0) modesw.style.zoom = clamp(bh / kh, .55, 1).toFixed(3); }
      else modesw.style.zoom = '';
    };
    // 2026-11-28 (Lidor: "the words come out of their place, everything is cut"): every label of the mode knob and the
    // buy plates is fitted to its own box: the largest size from the style sheet, then smaller until nothing overflows
    function fitSide() {
      for (const t of side.querySelectorAll('.lz-feat span, .lz-feat small, .lz-modes b, .lz-modes small')) {
        t.style.removeProperty('font-size');
        if (getComputedStyle(t).display === 'none' || !t.clientWidth) continue;
        let fs = parseFloat(getComputedStyle(t).fontSize) || 12;
        while (fs > 6 && t.scrollWidth > t.clientWidth + .5) { fs -= .5; t.style.setProperty('font-size', fs + 'px', 'important'); }
      }
    }
    new MutationObserver(() => requestAnimationFrame(fitSide)).observe(side, { childList: true, characterData: true, subtree: true });   // prices change with the amount
    put();
    if (el.root) new MutationObserver(() => requestAnimationFrame(put)).observe(el.root, { attributes: true, attributeFilter: ['data-land', 'data-small'] });
    window.addEventListener('resize', () => requestAnimationFrame(put));
    if (document.fonts) document.fonts.ready.then(put);
    // the column's size is set by layout() after the stage settles: measure again whenever it changes
    if (window.ResizeObserver && el.plaque) new ResizeObserver(() => requestAnimationFrame(put)).observe(el.plaque);
    setTimeout(put, 400); setTimeout(put, 1500);
  }

  /* The intro as a scene: the observatory behind it (slow camera push-in), and the seven 3D planets orbiting the logo on
   * a tilted ellipse: the far half passes behind the word, the near half in front of it, each planet turning on its axis.
   * It runs only while the intro is showing, and not at all with reduced motion. */
  function introStage() {
    const intro = document.getElementById('lzIntro'); if (!intro) return;
    const bg = document.createElement('div'); bg.className = 'rg-intro-bg'; bg.setAttribute('aria-hidden', 'true');
    bg.innerHTML = '<i class="rg-ib-sky"></i><i class="rg-ib-room"></i><i class="rg-ib-shade"></i>';
    intro.prepend(bg);
    if (api && api.reduced) return;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const back = document.createElement('canvas'), front = document.createElement('canvas');
    back.className = 'rg-orbit rg-orbit-back'; front.className = 'rg-orbit rg-orbit-front';
    bg.after(back); intro.append(front);
    const cb = back.getContext('2d'), cf = front.getContext('2d'), list = 'GSQCITL', t0 = performance.now();
    let raf = 0;
    const step = now => {
      if (intro.classList.contains('out') || !intro.isConnected) { cancelAnimationFrame(raf); back.remove(); front.remove(); return; }
      raf = requestAnimationFrame(step);
      const dpr = Math.min(2, window.devicePixelRatio || 1), W = intro.clientWidth, H = intro.clientHeight;
      for (const cv of [back, front]) if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
      const li = logo && (logo.querySelector('img') || logo), lg = li && li.getBoundingClientRect(), ir = intro.getBoundingClientRect();
      if (!lg || !lg.width) return;
      const t = (now - t0) / 1000, cx = lg.left - ir.left + lg.width / 2, cy = lg.top - ir.top + lg.height * .52;
      const rx = Math.min(W * .46, lg.width * .66), ry = rx * .26, tilt = -.1, base = Math.min(lg.height * .5, W * .085);
      const enter = Math.min(1, t / 1.6), ease = 1 - Math.pow(1 - enter, 3);
      for (const c of [cb, cf]) { c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H); }
      const items = [...list].map((s, i) => { const a = t * .26 + i / list.length * TAU + (1 - ease) * 2.2; return { s, a, d: Math.sin(a) }; }).sort((p, q) => p.d - q.d);
      const zmax = base * 1.15 * 1.06, iat = live(items.map(p => ({ sym: p.s, yaw: -Math.cos(p.a) * 26 + 6 * Math.sin(t * 1.3 + p.a), pitch: 6 })), zmax);   // a medallion is a disc: it turns to follow its path, never edge-on
      for (const p of items) {
        const r = rx * (.55 + .45 * ease), x0 = Math.cos(p.a) * r, y0 = Math.sin(p.a) * ry, x = cx + x0 * Math.cos(tilt) - y0 * Math.sin(tilt), y = cy + x0 * Math.sin(tilt) + y0 * Math.cos(tilt);
        const z = base * (p.s === 'G' ? 1.15 : 1) * (.72 + .34 * (p.d + 1) / 2), c = p.d > 0 ? cf : cb;
        c.globalAlpha = ease * (p.d > 0 ? 1 : .55 + .45 * (p.d + 1));
        if (iat) atlasDraw(c, iat, items.indexOf(p), x - z / 2, y - z / 2, z, z); else drawSym(c, p.s, -Math.cos(p.a) * 22, x - z / 2, y - z / 2, z, z);      // each turns as it follows its path
      }
      cb.globalAlpha = cf.globalAlpha = 1;
    };
    raf = requestAnimationFrame(step);
  }
};
((window.RetroArt && window.RetroArt.ready) || Promise.resolve()).then(RG_RUN);
