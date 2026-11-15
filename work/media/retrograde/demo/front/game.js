/* Retrograde front end. The shell (lz-core.js) owns the wallet, controls, rules sheet and settlement; this file
 * draws the orrery stage and plays back the events of a round. Nothing here decides a result: grids, clusters,
 * wins, multipliers, wild births and free spins all come from the book's events. Art lives in art.js. */
(() => {
  'use strict';
  const A = window.RetroArt;
  if (!window.LZ || !A) return;
  const TAU = Math.PI * 2, PI = Math.PI, clamp = A.clamp;
  const PLANETS = 'LTICQSG';
  // The win table shown in the rules (hundredths of the play amount). Same numbers as math/game.mjs.
  const TABLE = {
    L: [20, 25, 35, 50, 70, 100, 200, 500, 2000], T: [25, 35, 45, 65, 90, 140, 280, 700, 2500], I: [30, 45, 60, 85, 120, 180, 350, 900, 3500],
    C: [40, 60, 85, 120, 170, 260, 500, 1400, 5000], Q: [60, 90, 120, 180, 260, 400, 800, 2000, 8000], S: [100, 140, 200, 300, 420, 650, 1300, 3500, 12000],
    G: [150, 220, 320, 500, 750, 1200, 2500, 6000, 25000],
  };
  const BANDS = ['5', '6', '7', '8', '9', '10–11', '12–14', '15–19', '20+'];
  const RETRO_COST = 100, MAX_WIN = 10000;
  // Presentation only: a large cluster is greeted by the name of an invented constellation (by size).
  const FIGURES = [[20, 'The Grand Conjunction'], [15, 'The Crown of Night'], [12, 'The Great Wheel'], [10, 'The Navigator'], [9, 'The Compass'], [8, 'The Lantern']];
  // The sky's own celebrations, by the round's total win (only for wins of at least what the round was played for).
  const SKY = [null, { x: 10, kick: 'Star shower', title: 'GRAND WIN' }, { x: 50, kick: 'Grand conjunction', title: 'CELESTIAL WIN' }, { x: 250, kick: 'Total eclipse', title: 'COSMIC WIN' }, { kick: 'The heavens align', title: 'MAX WIN' }];

  const easeIn = p => p * p, linear = p => p, easeOut = p => 1 - Math.pow(1 - p, 3);
  const easeInOut = p => (p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
  const backOut = p => 1 + 2.70158 * Math.pow(p - 1, 3) + 1.70158 * Math.pow(p - 1, 2);

  let api = null, cfg = null;
  const el = {};                    // DOM nodes
  const S = {
    W: 0, H: 0, dpr: 1, G: 0, cs: 0, gx: 0, gy: 0, cx: 0, cy: 0, M: 0, b: 2, land: true, small: false, spPx: 0,
    sprites: {}, bodies: {}, grid: null, tok: new Array(49).fill(null), exiting: [], dying: [],
    lines: [], labels: [], rings: [], cellGlow: [], shocks: [], tweens: [], timers: new Set(), tw: [], motes: [],
    retro: false, retroMix: 0, ringA: 0, ringV: 1, ringTarget: 1, light: 0, t: 0, dirty: true, raf: 0, last: 0,
    playing: false, attract: false, started: false, hasScat: false, nextGlint: 0, glint: null, antic: null, shoot: null, nextShoot: 6,
    featOn: false, feat: 0, left: 0, spins: 0, peak: 1, totalShown: 0, totalTw: null, flash: 0, shake: null, bw: null, fxLive: false, level: 0,
  };
  const Dial = { D: 0, m: 1, mf: 1, g: 0, axis: -PI / 2, axisT: -PI / 2, pulse: 0, kick: 0, release: 0, sp: [], pl: [1.15, .9, .72, .56, .43, .31, .22].map((v, i) => ({ a: i * 2.4 + 1, v })) };
  const DIAL_ORDER = 'SQCGITL';     // Moon, Mercury, Venus, Sun, Mars, Jupiter, Saturn: nearest to farthest

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
  function shock(x, y, col, dur = 900, size = 1) { if (api.reduced) return; const s = { x, y, col, p: 0, size }; S.shocks.push(s); S.fxLive = true; tween(dur * api.speed(), q => { s.p = q; }, { done: () => { const i = S.shocks.indexOf(s); if (i >= 0) S.shocks.splice(i, 1); } }); }
  function shake(amp, ms = 260) { if (!api.reduced) S.shake = { amp, t0: performance.now(), dur: ms * Math.max(.4, api.speed()) }; }
  function flash(v = 1, ms = 500) { if (api.reduced) return; S.flash = v; tween(ms * api.speed(), q => { S.flash = v * (1 - q); }); }
  function hardStop() {
    for (const id of S.timers) clearTimeout(id);
    S.timers.clear(); flushTweens(); clearFx(); S.exiting.length = 0; S.shocks.length = 0; S.bw = null; S.shake = null; S.flash = 0;
    for (const p of POOL) p.on = false;
    for (const tk of S.tok) if (tk) { tk.ox = tk.oy = 0; tk.sc = 1; tk.al = 1; tk.glow = 0; tk.lift = 0; tk.sq = 0; tk.shine = 0; }
    el.card.classList.remove('on'); el.plus.classList.remove('on'); el.big.classList.remove('on', 'done'); el.grid.style.transform = '';
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
      skyStart(tier, sec) { if (tier >= 2) swell(sec); else [7, 11, 14].forEach((s, k) => pluck(note(s), { when: k * .06, g: .07 })); },
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

  /* ---------- Layout: the grid gets the largest square; the instrument lives in what is left ---------- */
  function place(node, x, y, w, h) { node.style.left = Math.round(x) + 'px'; node.style.top = Math.round(y) + 'px'; node.style.width = Math.round(w) + 'px'; node.style.height = Math.round(h) + 'px'; }
  function layout() {
    const W = el.root.clientWidth, H = el.root.clientHeight;
    if (W < 40 || H < 40) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (W === S.W && H === S.H && dpr === S.dpr) return;
    const land = W >= H * 1.12;
    let G, gx, gy, fr, strip = 0;
    if (land) {
      const pad = clamp(H * .028, 3, 14), small0 = H - pad * 2 < 240; fr = small0 ? .08 : .2;
      G = Math.floor(Math.min((H - pad * 2) / (1 + 2 * fr / 7), W * .57)); gx = Math.round((W - G) / 2); gy = Math.round((H - G) / 2);
    } else {
      fr = .1; strip = clamp(H * .2, 58, 136);
      G = Math.floor(Math.min((W - 8) / (1 + 2 * fr / 7), (H - strip - 8) / (1 + 2 * fr / 7))); gx = Math.round((W - G) / 2);
      gy = Math.round(strip + (H - strip - G) * .5);
    }
    const cs = G / 7, b = Math.max(2, Math.round(cs * fr)), M = Math.ceil(cs * .75) + b, small = G < 230;
    Object.assign(S, { W, H, dpr, G, gx, gy, cs, b, M, land, small, cx: gx + G / 2, cy: gy + G / 2 });
    const st = el.root.style;
    st.setProperty('--k', (G / 100).toFixed(3) + 'px'); st.setProperty('--m', (Math.min(W, H) / 100).toFixed(3) + 'px');
    st.setProperty('--vx', (S.cx / W * 100).toFixed(2) + '%'); st.setProperty('--vy', (S.cy / H * 100).toFixed(2) + '%');
    el.root.dataset.land = land ? '1' : '0'; el.root.dataset.small = small ? '1' : '0';
    // sky layers are a little larger than the stage so they can drift (parallax)
    const over = 1.08, SW = Math.round(W * over * dpr), SH = Math.round(H * over * dpr), geo = { cx: (S.cx + W * (over - 1) / 2) * dpr, cy: (S.cy + H * (over - 1) / 2) * dpr, G: G * dpr, k: dpr };
    for (const [cv, pal] of [[el.neb1, 'night'], [el.neb2, 'retro']]) { cv.width = SW; cv.height = SH; A.drawNebula(cv.getContext('2d'), SW, SH, pal, geo); }
    el.stars.width = SW; el.stars.height = SH; A.drawStars(el.stars.getContext('2d'), SW, SH, 'night', geo);
    el.orr.width = W * dpr; el.orr.height = H * dpr; el.fx.width = W * dpr; el.fx.height = H * dpr;
    el.grid.width = Math.round((G + M * 2) * dpr); el.grid.height = el.grid.width; place(el.grid, gx - M, gy - M, G + M * 2, G + M * 2);
    S.plateN = A.plate(G, b, dpr, 'night'); S.plateR = A.plate(G, b, dpr, 'retro'); S.glassN = A.plateGlass(G, b, dpr, 'night'); S.glassR = A.plateGlass(G, b, dpr, 'retro');
    const px = Math.round(clamp(cs * dpr * 1.08, 64, 280));
    if (px !== S.spPx) { S.spPx = px; for (const s of PLANETS + 'WA') S.sprites[s] = A.sprite(s, px); }
    if (!S.glowGold) { S.glowGold = A.glow(96, '#ffd978'); S.glowBlue = A.glow(96, '#9fd0ff'); S.glowRose = A.glow(96, '#ff7aa8'); S.glowWhite = A.glow(96, '#ffffff'); S.shadow = A.glow(96, '#000000'); S.spark = A.spark(64); for (const s of PLANETS) S.bodies[s] = A.body(48, s); }
    const rnd = A.seeded(91); S.tw = []; S.motes = [];
    for (let i = 0; i < (small ? 12 : 34); i++) { const x = rnd() * W, y = rnd() * H; if (x > gx - 4 && x < gx + G + 4 && y > gy - 4 && y < gy + G + 4) continue; S.tw.push({ x, y, ph: rnd() * TAU, sp: .5 + rnd() * 1.6, z: (small ? 3 : 5) + rnd() * (small ? 3 : 8) }); }
    for (let i = 0; i < (small ? 8 : 20); i++) S.motes.push({ x: rnd() * W, y: rnd() * H, z: (small ? 5 : 9) + rnd() * (small ? 8 : 22), a: .06 + rnd() * .14, v: .5 + rnd(), ph: rnd() * TAU });
    // the two instruments: ALIGNMENT dial and the plaque with the totals
    let D;
    if (land) {
      const gap = b + clamp(G * .03, 3, 14), colW = Math.min(gx - gap - 3, G * .78);
      D = Math.round(clamp(Math.min(colW * .86, H * .54), 34, 270));
      place(el.align, gx - gap - colW, 0, colW, H); place(el.plaque, gx + G + gap, 0, colW, H);
    } else {
      const sh = gy - b - 3;
      D = Math.round(clamp(sh - 24, 34, 124));
      place(el.align, 5, 0, D + 22, sh); place(el.plaque, D + 30, 0, W - D - 36, sh);
    }
    Dial.D = D; el.dial.style.width = el.dial.style.height = D + 'px'; el.dial.width = el.dial.height = Math.round(D * dpr);
    S.dialN = A.dialFace(el.dial.width, 'night'); S.dialR = A.dialFace(el.dial.width, 'retro'); S.dialG = A.dialGlass(el.dial.width);
    place(el.card, gx, gy, G, G); place(el.plus, gx, gy, G, G);
    S.dirty = true; S.fxLive = true;
  }

  /* ---------- Tokens ---------- */
  const newToken = (sym, col, row) => ({ sym, col, row, ox: 0, oy: 0, sc: 1, al: 1, glow: 0, lift: 0, sq: 0, shine: 0 });
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
      else { const u = (p - .72) / .28; tk.oy = hop * Math.sin(u * PI) * (1 - u * .4); tk.sq = (heavy ? .2 : .13) * Math.sin(Math.min(1, u * 2.2) * PI) * (1 - u); }
      if (p >= 1) { tk.oy = 0; tk.sq = 0; }
    }, { delay, ease: linear });
  }
  function pulseRing(k, col, dur = 700) { const [x, y] = cellXY(k), r = { x, y, p: 0, col }; S.rings.push(r); tween(dur * api.speed(), q => { r.p = q; }, { done: () => { const i = S.rings.indexOf(r); if (i >= 0) S.rings.splice(i, 1); } }); }
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
  function popTotal() { if (api.reduced) return; el.pl.classList.remove('pop'); void el.pl.offsetWidth; el.pl.classList.add('pop'); }
  function setTotal(units, animate) {
    const from = S.totalShown; S.totalShown = units;
    if (S.totalTw) S.totalTw.dead = true;
    el.total.classList.toggle('zero', units <= 0);
    if (!animate || units <= from || api.reduced) { el.total.textContent = api.winMoney(units); return; }
    S.totalTw = tween(440 * api.speed(), (q, p) => { el.total.textContent = p >= 1 ? api.winMoney(units) : api.money(Math.round(from + (units - from) * q)); });
    popTotal();
  }
  function showLeft() { el.left.textContent = String(S.left); el.leftLbl.textContent = S.left === 1 ? 'spin left' : 'spins left'; }
  function setMult(m, step) {
    if (m === Dial.m) return;
    const up = m > Dial.m, was = Dial.m; Dial.m = m; if (m > S.peak) S.peak = m;
    Dial.axisT = -PI / 2 + (S.retro ? -1 : 1) * (m - 1) * (PI / 6);
    if (step && up) {
      Dial.mf = m; Dial.pulse = 1; tween(560 * api.speed(), q => { Dial.pulse = 1 - q; }, { ease: linear });
      const n = api.reduced ? 0 : 9;
      for (let i = 0; i < n; i++) Dial.sp.push({ a: Dial.axisT + (Math.random() - .5) * 1.4, r: .4 + Math.random() * .4, v: .3 + Math.random() * .7, life: 0, max: .4 + Math.random() * .4 });
      Snd.step(m, S.retro);
    } else if (!up && was > 1) { Dial.release = 1; tween(700 * api.speed(), q => { Dial.release = 1 - q; }, { ease: linear }); if (was > 2) Snd.unwind(was); }   // the alignment lets go
    else Dial.mf = m;
  }
  function setRetro(on, instant) {
    S.retro = on;
    el.root.classList.toggle('snap', !!instant); el.root.classList.toggle('retro', on);
    S.ringTarget = on ? -2.1 : 1;
    if (instant) { S.retroMix = on ? 1 : 0; S.ringV = S.ringTarget; } else { const a = S.retroMix, b = on ? 1 : 0; tween(1300 * api.speed(), q => { S.retroMix = a + (b - a) * q; }, { ease: easeInOut }); }
    S.dirty = true;
  }
  function showCard(kick, title, sub, note, cls) {
    el.cardKick.textContent = kick; el.cardTitle.textContent = title; el.cardSub.innerHTML = sub; el.cardNote.textContent = note;
    el.card.className = 'rg-card ' + (cls || ''); void el.card.offsetWidth; el.card.classList.add('on');
  }
  function setLevel(l, now) { S.level = l; Music.set(l, S.retro, now); }

  /* ---------- Drawing: the orrery behind the grid ---------- */
  function drawOrrery(dt) {
    const c = el.orrC, dpr = S.dpr, W = S.W, H = S.H;
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, el.orr.width, el.orr.height);
    const geo = { cx: S.cx * dpr, cy: S.cy * dpr, G: S.G * dpr, k: dpr };
    A.drawRings(c, geo, S.small, S.ringA, S.light, S.retroMix);
    for (const o of A.ORBITS) {
      if (S.small && o.r > .8) continue;
      const a = o.a + S.ringA * o.v * 2.4, x = geo.cx + Math.cos(a) * o.r * geo.G, y = geo.cy + Math.sin(a) * o.r * geo.G, z = Math.max(3 * dpr, o.z * geo.G * 1.25);
      c.globalAlpha = .5; c.drawImage(S.retroMix > .5 ? S.glowRose : S.glowGold, x - z * 2.6, y - z * 2.6, z * 5.2, z * 5.2); c.globalAlpha = 1;
      c.drawImage(S.bodies[o.s], x - z, y - z, z * 2, z * 2);
    }
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
      const p = sh.p, x = (sh.x + sh.dx * p) * dpr, y = (sh.y + sh.dy * p) * dpr, tx = x - sh.dx * .16 * dpr, ty = y - sh.dy * .16 * dpr, g = c.createLinearGradient(x, y, tx, ty);
      g.addColorStop(0, `rgba(255,255,255,${(Math.sin(p * PI) * .9).toFixed(3)})`); g.addColorStop(1, 'rgba(255,255,255,0)');
      c.strokeStyle = g; c.lineWidth = 1.6 * dpr; c.lineCap = 'round'; c.beginPath(); c.moveTo(x, y); c.lineTo(tx, ty); c.stroke();
    }
  }

  /* ---------- Drawing: the grid ---------- */
  function drawToken(c, tk) {
    if (tk.al <= .01) return;
    const cs = S.cs, lift = tk.lift, x = (tk.col + .5 + tk.ox) * cs, y0 = (tk.row + .5 + tk.oy) * cs, y = y0 - lift * cs * .06, z = cs * 1.08 * tk.sc * (1 + lift * .1);
    if (y0 < -cs || y0 > S.G + cs) return;
    const special = tk.sym === 'A', beat = special ? .32 + .14 * Math.sin(S.t * (S.antic ? 9 : 3.2) + tk.col) : 0, gl = Math.max(tk.glow, beat);
    if (lift > .02) { c.globalAlpha = Math.min(1, .5 * lift) * tk.al; c.drawImage(S.shadow, x - z * .55 + cs * .07 * lift, y0 - z * .5 + cs * .12 * lift, z * 1.1, z * 1.1); }
    if (gl > .01) { c.globalAlpha = Math.min(1, gl) * tk.al * .85; const gz = cs * 1.8; c.drawImage(special ? S.glowRose : tk.sym === 'W' ? S.glowBlue : S.glowGold, x - gz / 2, y - gz / 2, gz, gz); }
    c.globalAlpha = tk.al;
    const sp = S.sprites[tk.sym] || S.sprites.L;
    if (tk.sq > .004) { const sy = 1 - tk.sq, sx = 1 + tk.sq * .55, d = (S.retro ? -1 : 1) * z * tk.sq * .5; c.drawImage(sp, x - z * sx / 2, y - z * sy / 2 + d, z * sx, z * sy); }
    else c.drawImage(sp, x - z / 2, y - z / 2, z, z);
    if (tk.shine > .01 && tk.shine < .99) { const s = tk.shine, gz = cs * .62; c.globalCompositeOperation = 'lighter'; c.globalAlpha = Math.sin(s * PI) * .8 * tk.al; c.drawImage(S.glowWhite, x + (s - .5) * cs * .7 - gz / 2, y + (s - .5) * cs * .5 - gz / 2, gz, gz); c.globalCompositeOperation = 'source-over'; }
  }
  function drawParticles(c, layer) {
    c.globalCompositeOperation = 'lighter';
    let n = 0;
    for (const p of POOL) {
      if (!p.on || p.layer !== layer) continue;
      n++;
      if (p.wait > 0) continue;
      const u = p.life / p.max, al = p.kind === 1 ? Math.min(1, u * 6) * (1 - Math.max(0, u - .85) / .15) : 1 - u;
      if (al <= 0) continue;
      c.globalAlpha = al * p.a;
      if (p.kind === 2) {
        const g = c.createLinearGradient(p.x, p.y, p.x - p.vx * .09, p.y - p.vy * .09); g.addColorStop(0, p.col); g.addColorStop(1, 'rgba(255,255,255,0)');
        c.strokeStyle = g; c.lineWidth = p.z; c.lineCap = 'round'; c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x - p.vx * .09, p.y - p.vy * .09); c.stroke();
        const z = p.z * 3.2; c.drawImage(S.spark, p.x - z, p.y - z, z * 2, z * 2);
      } else if (p.kind === 1) { const z = p.z * 2.6; c.drawImage(S.glowGold, p.x - z, p.y - z, z * 2, z * 2); c.fillStyle = '#fff'; c.beginPath(); c.arc(p.x, p.y, p.z * .5, 0, TAU); c.fill(); }
      else { c.fillStyle = p.col; c.beginPath(); c.arc(p.x, p.y, p.z * (.5 + al * .6), 0, TAU); c.fill(); }
    }
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    return n;
  }
  function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function drawGrid() {
    const c = el.gridC, dpr = S.dpr, M = S.M, G = S.G, cs = S.cs, b = S.b;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, G + M * 2, G + M * 2);
    c.imageSmoothingQuality = 'high';
    // a soft shadow lifts the whole instrument off the sky
    c.globalAlpha = .6; c.drawImage(S.shadow, M - b - cs * .55, M - b - cs * .35, G + b * 2 + cs * 1.1, G + b * 2 + cs * 1.2); c.globalAlpha = 1;
    c.drawImage(S.plateN, M - b, M - b, G + b * 2, G + b * 2);
    if (S.retroMix > .01) { c.globalAlpha = S.retroMix; c.drawImage(S.plateR, M - b, M - b, G + b * 2, G + b * 2); c.globalAlpha = 1; }
    c.save(); c.translate(M, M);
    if (S.antic) { const x = S.antic.col * cs, g = c.createLinearGradient(0, 0, 0, G), a = .13 + .09 * Math.sin(S.t * 14); g.addColorStop(0, `rgba(255,120,170,${a})`); g.addColorStop(.5, `rgba(255,214,120,${a * 1.6})`); g.addColorStop(1, `rgba(255,120,170,${a})`); c.fillStyle = g; c.fillRect(x, 0, cs, G); }
    for (const q of S.cellGlow) {
      if (q.al <= .01) continue;
      const x = (q.k % 7) * cs, y = ((q.k / 7) | 0) * cs, i = cs * .035;
      rr(c, x + i, y + i, cs - i * 2, cs - i * 2, cs * .18);
      c.fillStyle = `rgba(255,214,120,${(.2 * q.al).toFixed(3)})`; c.fill(); c.strokeStyle = `rgba(255,232,160,${(.7 * q.al).toFixed(3)})`; c.lineWidth = Math.max(1, cs * .022); c.stroke();
    }
    c.save(); c.beginPath(); c.rect(0, 0, G, G); c.clip();
    for (const tk of S.exiting) drawToken(c, tk);
    let lifted = false;
    for (const tk of S.tok) if (tk) { if (tk.lift > .02) lifted = true; else drawToken(c, tk); }
    if (lifted) for (const tk of S.tok) if (tk && tk.lift > .02) drawToken(c, tk);       // lifted medallions pass over their neighbours
    for (const tk of S.dying) drawToken(c, tk);
    c.globalAlpha = 1; c.restore();
    // glass over the plate
    c.drawImage(S.retroMix > .5 ? S.glassR : S.glassN, -b, -b, G + b * 2, G + b * 2);
    for (const r of S.rings) {
      const al = 1 - r.p;
      c.strokeStyle = A.rgba(r.col, al.toFixed(3)); c.lineWidth = cs * .09 * al + 1; c.beginPath(); c.arc(r.x, r.y, cs * (.42 + r.p * 1.25), 0, TAU); c.stroke();
      c.strokeStyle = A.rgba(r.col, (al * .5).toFixed(3)); c.lineWidth = 1; c.beginPath(); c.arc(r.x, r.y, cs * (.42 + r.p * 2), 0, TAU); c.stroke();
    }
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
      const fs = clamp(cs * .37, 9.5, 32);
      c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
      for (const l of S.labels) {
        if (l.al <= .01) continue;
        c.font = `800 ${fs}px Jost, system-ui, sans-serif`;
        const tw = c.measureText(l.text).width, bw = tw + fs * 1.25, bh = fs * 1.62, half = bw * l.sc / 2 + fs * (l.tag ? .7 : .2);
        const x = clamp(l.x, Math.min(half, G / 2), Math.max(G - half, G / 2)), y = clamp(l.y + l.oy * cs, bh, G - bh * .6);
        c.save(); c.globalAlpha = l.al; c.translate(x, y); c.scale(l.sc, l.sc);
        c.shadowColor = 'rgba(0,0,0,.7)'; c.shadowBlur = fs * .5; c.shadowOffsetY = fs * .14;
        let g = c.createLinearGradient(0, -bh / 2, 0, bh / 2); g.addColorStop(0, S.retro ? '#5c1240' : '#1c2a6e'); g.addColorStop(1, S.retro ? '#22061a' : '#080d2c');
        rr(c, -bw / 2, -bh / 2, bw, bh, bh / 2); c.fillStyle = g; c.fill(); c.shadowColor = 'transparent';
        g = c.createLinearGradient(0, -bh / 2, 0, bh / 2); g.addColorStop(0, '#fff3c4'); g.addColorStop(.5, '#c9963a'); g.addColorStop(1, '#f6dc93');
        c.strokeStyle = g; c.lineWidth = Math.max(1.2, fs * .1); c.stroke();
        g = c.createLinearGradient(0, -fs * .5, 0, fs * .5); g.addColorStop(0, '#fffbe0'); g.addColorStop(.55, '#ffd76a'); g.addColorStop(1, '#e79a1c');
        c.fillStyle = g; c.fillText(l.text, 0, fs * .05);
        if (l.tag) {
          const r = fs * .62, tx = bw / 2 - r * .15, ty = -bh / 2 + r * .1;
          g = c.createRadialGradient(tx - r * .3, ty - r * .35, 0, tx, ty, r); g.addColorStop(0, '#fff6cf'); g.addColorStop(.55, S.retro ? '#ff8fb0' : '#f0c865'); g.addColorStop(1, S.retro ? '#8a1440' : '#8a5f1c');
          c.beginPath(); c.arc(tx, ty, r, 0, TAU); c.fillStyle = g; c.fill(); c.strokeStyle = 'rgba(20,8,0,.85)'; c.lineWidth = Math.max(1, fs * .06); c.stroke();
          c.font = `800 ${fs * (l.tag.length > 3 ? .5 : .62)}px Jost, system-ui, sans-serif`; c.fillStyle = '#1c1103'; c.fillText(l.tag, tx, ty + fs * .03);
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
    c.drawImage(S.dialN, 0, 0);
    if (S.retroMix > .01) { c.globalAlpha = S.retroMix; c.drawImage(S.dialR, 0, 0); c.globalAlpha = 1; }
    c.translate(h, h);
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
    const g = c.createLinearGradient(ca * R * .3, sa * R * .3, ca * reach, sa * reach); g.addColorStop(0, 'rgba(255,236,170,0)'); g.addColorStop(.3, `rgba(255,226,150,${Math.min(1, power).toFixed(3)})`); g.addColorStop(1, `rgba(255,206,110,${Math.min(1, power * .8).toFixed(3)})`);
    c.strokeStyle = g; c.lineWidth = Math.max(1.5, px * (.016 + Math.min(.02, m * .0012))); c.lineCap = 'round'; c.beginPath(); c.moveTo(ca * R * .34, sa * R * .34); c.lineTo(ca * reach, sa * reach); c.stroke();
    c.strokeStyle = 'rgba(255,226,150,.16)'; c.lineWidth = Math.max(1, px * .006); c.beginPath(); c.moveTo(ca * R * .34, sa * R * .34); c.lineTo(ca * R * .84, sa * R * .84); c.stroke();
    // planets: the first `aligned` snap onto the line, the others keep orbiting (and scatter when the line lets go)
    for (let i = 0; i < 7; i++) {
      const p = Dial.pl[i], on = i < aligned;
      if (on) { let da = (ax - p.a) % TAU; if (da > PI) da -= TAU; if (da < -PI) da += TAU; p.a += da * Math.min(1, dt * 11); } else p.a += p.v * dt * dir * (.55 + Dial.release * 7);
      const r = R * A.DIAL_ORBIT(i), x = Math.cos(p.a) * r, y = Math.sin(p.a) * r, z = R * (DIAL_ORDER[i] === 'G' ? .062 : .048) * (on ? 1.15 + Dial.pulse * .5 : 1);
      if (!on) c.globalAlpha = .72;
      if (on) { c.globalAlpha = .85; const gz = z * 3.4; c.drawImage(S.glowGold, x - gz, y - gz, gz * 2, gz * 2); c.globalAlpha = 1; }
      c.drawImage(S.bodies[DIAL_ORDER[i]], x - z * 1.28, y - z * 1.28, z * 2.56, z * 2.56); c.globalAlpha = 1;
    }
    // sparks thrown off by a step
    if (Dial.sp.length) {
      c.globalCompositeOperation = 'lighter';
      for (const s of Dial.sp) { s.life += dt; s.r += s.v * dt; const al = 1 - s.life / s.max; if (al <= 0) continue; c.globalAlpha = al; const z = R * .07; c.drawImage(S.spark, Math.cos(s.a) * R * s.r - z, Math.sin(s.a) * R * s.r - z, z * 2, z * 2); }
      Dial.sp = Dial.sp.filter(s => s.life < s.max); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    if (Dial.pulse > .01) {
      const q = 1 - Dial.pulse;
      c.strokeStyle = `rgba(255,236,170,${(Dial.pulse * .95).toFixed(3)})`; c.lineWidth = px * .028 * Dial.pulse + 1; c.beginPath(); c.arc(0, 0, R * (.34 + q * .52), 0, TAU); c.stroke();
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = Dial.pulse * .5; c.drawImage(retro ? S.glowRose : S.glowGold, -R, -R, R * 2, R * 2); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    // hub with the multiplier: it runs hotter as the alignment climbs
    let hg = c.createLinearGradient(-R * .33, -R * .33, R * .33, R * .33); hg.addColorStop(0, '#fff0b8'); hg.addColorStop(.5, '#b8862e'); hg.addColorStop(1, '#5a3a0c');
    c.beginPath(); c.arc(0, 0, R * .325, 0, TAU); c.fillStyle = hg; c.fill();
    hg = c.createRadialGradient(0, -R * .1, 0, 0, 0, R * .29); hg.addColorStop(0, retro ? '#8a1c50' : '#2c46b8'); hg.addColorStop(1, retro ? '#22061a' : '#0a1034');
    c.beginPath(); c.arc(0, 0, R * .29, 0, TAU); c.fillStyle = hg; c.fill();
    if (hot > .02) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = hot * (.5 + .15 * Math.sin(S.t * 6)); c.drawImage(retro ? S.glowRose : S.glowGold, -R * .42, -R * .42, R * .84, R * .84); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; }
    const shown = Math.round(Dial.mf), txt = '×' + shown, fs = R * (shown < 10 ? .38 : shown < 100 ? .29 : .22), punch = Dial.pulse > .5 ? backOut((1 - Dial.pulse) * 2) : 1, sc = (Dial.pulse > .5 ? .55 + .75 * punch : 1 + Dial.pulse * .6) + Dial.kick * .2;
    c.save(); c.scale(sc, sc); c.font = `800 ${fs}px Jost, system-ui, sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    c.lineWidth = fs * .18; c.strokeStyle = 'rgba(4,6,20,.9)'; c.strokeText(txt, 0, fs * .04);
    const tg = c.createLinearGradient(0, -fs * .5, 0, fs * .5); tg.addColorStop(0, '#fffbe0'); tg.addColorStop(.55, Dial.pulse > .6 ? '#ffffff' : '#ffd76a'); tg.addColorStop(1, '#f0a626'); c.fillStyle = tg; c.fillText(txt, 0, fs * .04);
    c.restore();
    c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(S.dialG, 0, 0);
    // the whole dial jumps with a step and trembles when it is wound far up in RETROGRADE
    const wound = retro && !api.reduced ? Math.min(1, (m - 1) / 20) : 0, ks = 1 + Dial.pulse * .07 + Dial.kick * .03;
    el.dial.style.transform = ks !== 1 || wound ? `translate(${(wound * (Math.random() - .5) * 1.4).toFixed(2)}px,${(wound * (Math.random() - .5) * 1.4).toFixed(2)}px) scale(${ks.toFixed(4)})` : '';
  }

  /* ---------- Drawing: the stage layer (stardust on its way to the total, shock rings, the sky's celebrations) ---------- */
  // The round's big win, told by the sky. tier 1 star shower, 2 grand conjunction, 3 total eclipse, 4 both (max win).
  function drawCelebration(c, now, bw) {
    const W = S.W, H = S.H, m = Math.min(W, H), t = now - bw.t0, hit = bw.hitAt ? now - bw.hitAt : -1, out = bw.outAt ? clamp((now - bw.outAt) / bw.out, 0, 1) : 0;
    const vis = clamp(t / (280 * bw.sp), 0, 1) * (1 - out), cx = W / 2, ay = H / 2 - m * (bw.tier >= 2 ? .2 : .1), pre = clamp(t / bw.pre, 0, 1);
    c.fillStyle = `rgba(3,4,14,${(vis * (.6 + bw.tier * .06)).toFixed(3)})`; c.fillRect(0, 0, W, H);
    if (vis <= 0) return;
    // meteors
    if (!api.reduced && (bw.tier === 1 || hit >= 0) && !bw.outAt) {
      bw.acc += bw.dt * (8 + bw.tier * 7);
      while (bw.acc >= 1) { bw.acc -= 1; const top = Math.random() < .6, x = top ? Math.random() * W * 1.2 - W * .2 : -10, y = top ? -10 : Math.random() * H * .7, sp = m * (1.3 + Math.random() * 1.2); emit({ layer: 'f', kind: 2, x, y, vx: sp * .82, vy: sp * .57, max: .5 + Math.random() * .5, z: Math.max(1, m * (.003 + Math.random() * .004)), col: Math.random() < .3 ? '#ffe9a8' : '#ffffff', drag: 0 }); }
    }
    c.globalAlpha = vis; c.globalCompositeOperation = 'lighter';
    if (hit >= 0) { const gy = H / 2 + m * (bw.tier >= 2 ? .17 : .06), gr = m * .62, lg = c.createRadialGradient(cx, gy, 0, cx, gy, gr), la = .22 * clamp(hit / (400 * bw.sp), 0, 1); lg.addColorStop(0, `rgba(255,210,120,${la.toFixed(3)})`); lg.addColorStop(1, 'rgba(255,170,80,0)'); c.fillStyle = lg; c.save(); c.translate(cx, gy); c.scale(1.6, .55); c.translate(-cx, -gy); c.beginPath(); c.arc(cx, gy, gr, 0, TAU); c.fill(); c.restore(); }
    // the eclipse
    if (bw.tier >= 3) {
      const R = m * .105, e = easeInOut(pre), tot = hit >= 0 ? clamp(hit / (500 * bw.sp), 0, 1) : 0;
      if (tot > 0) {                                      // corona: long soft streamers once the Sun is covered
        const cg = c.createRadialGradient(cx, ay, R * .9, cx, ay, R * 4.2); cg.addColorStop(0, `rgba(255,236,190,${(.85 * tot).toFixed(3)})`); cg.addColorStop(.25, `rgba(255,170,120,${(.4 * tot).toFixed(3)})`); cg.addColorStop(1, 'rgba(255,120,160,0)');
        c.fillStyle = cg; c.beginPath(); c.arc(cx, ay, R * 4.2, 0, TAU); c.fill();
        c.fillStyle = `rgba(255,240,205,${(.3 * tot).toFixed(3)})`;
        for (let i = 0; i < 18; i++) { const a = i / 18 * TAU + Math.sin(now * .0004 + i) * .12, len = R * (1.6 + 1.5 * Math.abs(Math.sin(i * 2.3 + now * .0011))) * tot; c.beginPath(); c.moveTo(cx + Math.cos(a - .09) * R, ay + Math.sin(a - .09) * R); c.lineTo(cx + Math.cos(a) * (R + len), ay + Math.sin(a) * (R + len)); c.lineTo(cx + Math.cos(a + .09) * R, ay + Math.sin(a + .09) * R); c.closePath(); c.fill(); }
      }
      const sg = c.createRadialGradient(cx, ay, 0, cx, ay, R * 2.2); sg.addColorStop(0, `rgba(255,255,255,${(1 - tot * .7).toFixed(3)})`); sg.addColorStop(.42, `rgba(255,214,110,${(.95 - tot * .5).toFixed(3)})`); sg.addColorStop(.5, `rgba(255,170,60,${(.5 - tot * .2).toFixed(3)})`); sg.addColorStop(1, 'rgba(255,140,40,0)');
      c.fillStyle = sg; c.beginPath(); c.arc(cx, ay, R * 2.2, 0, TAU); c.fill();
      c.globalCompositeOperation = 'source-over';
      const mx = cx - (1 - e) * R * 2.6, mg = c.createRadialGradient(mx - R * .3, ay - R * .3, 0, mx, ay, R); mg.addColorStop(0, '#1a1c3a'); mg.addColorStop(1, '#04040c');
      c.fillStyle = mg; c.beginPath(); c.arc(mx, ay, R * 1.005, 0, TAU); c.fill();
      c.globalCompositeOperation = 'lighter';
      if (hit >= 0) {                                     // the diamond ring
        const d = Math.max(0, 1 - hit / (900 * bw.sp)), z = R * (1.2 + d * 2.4);
        c.globalAlpha = vis * (.55 + d * .45); c.drawImage(S.spark, cx + R * .72 - z, ay - R * .7 - z, z * 2, z * 2); c.globalAlpha = vis;
        c.strokeStyle = 'rgba(255,244,214,.9)'; c.lineWidth = Math.max(1, R * .05); c.beginPath(); c.arc(cx, ay, R * 1.03, 0, TAU); c.stroke();
      }
    }
    // the conjunction: planets sweep in and stop in one line
    if (bw.tier === 2 || bw.tier === 4) {
      const list = bw.tier === 4 ? 'LTICQS' : 'LTIGCQS', n = list.length, gap = m * (bw.tier === 4 ? .15 : .128), z = m * (bw.tier === 4 ? .12 : .135);
      if (hit >= 0) {
        const bp = clamp(hit / (350 * bw.sp), 0, 1), bl = m * .62 * bp, bg = c.createLinearGradient(cx - bl, 0, cx + bl, 0); bg.addColorStop(0, 'rgba(255,220,130,0)'); bg.addColorStop(.5, `rgba(255,244,205,${(.85 - .3 * Math.min(1, hit / (1500 * bw.sp))).toFixed(3)})`); bg.addColorStop(1, 'rgba(255,220,130,0)');
        c.fillStyle = bg; c.fillRect(cx - bl, ay - m * .012, bl * 2, m * .024); c.fillRect(cx - bl, ay - m * .003, bl * 2, m * .006);
      }
      c.globalCompositeOperation = 'source-over';
      for (let i = 0; i < n; i++) {
        const slot = bw.tier === 4 ? (i < 3 ? i - 3 : i - 2) : i - 3, e = backOut(clamp((pre - i * .06) / .58, 0, 1)), a0 = i * 2.1 + 1 + (1 - e) * 2.2, r0 = m * .7 * (1 - e);
        const x = cx + Math.cos(a0) * r0 + slot * gap * e, y = ay + Math.sin(a0) * r0 * .7 + (hit >= 0 ? Math.sin(now * .003 + i) * m * .004 : 0);
        if (hit >= 0) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = vis * .7; c.drawImage(S.glowGold, x - z * .95, y - z * .95, z * 1.9, z * 1.9); c.globalCompositeOperation = 'source-over'; c.globalAlpha = vis; }
        c.drawImage(S.sprites[list[i]], x - z / 2, y - z / 2, z, z);
      }
    }
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  function drawFx(now) {
    const c = el.fxC, dpr = S.dpr, W = S.W, H = S.H, bw = S.bw;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H);
    let live = 0;
    if (bw) { live = 1; drawCelebration(c, now, bw); }
    for (const s of S.shocks) {
      live++;
      const m = Math.max(W, H) * s.size, al = 1 - s.p, r = m * (.04 + s.p * .62);
      c.strokeStyle = A.rgba(s.col, (al * .9).toFixed(3)); c.lineWidth = m * .028 * al + 1; c.beginPath(); c.arc(s.x, s.y, r, 0, TAU); c.stroke();
      c.strokeStyle = A.rgba('#ffffff', (al * .5).toFixed(3)); c.lineWidth = 1.2; c.beginPath(); c.arc(s.x, s.y, r * 1.12, 0, TAU); c.stroke();
    }
    live += drawParticles(c, 'f');
    S.fxLive = live > 0;
  }

  /* ---------- Loop ---------- */
  function frame(now) {
    S.raf = requestAnimationFrame(frame);
    const dt = Math.min(.05, Math.max(0, (now - S.last) / 1000)); S.last = now; S.t += dt;
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
    if (S.shake) { const k = (now - S.shake.t0) / S.shake.dur; if (k >= 1) { S.shake = null; el.grid.style.transform = ''; } else { const a = S.shake.amp * (1 - k); el.grid.style.transform = `translate(${((Math.random() - .5) * 2 * a).toFixed(1)}px,${((Math.random() - .5) * 2 * a).toFixed(1)}px)`; } }
    drawOrrery(dt); drawDial(dt);
    if (S.dirty || S.antic || S.hasScat) { S.dirty = false; drawGrid(); }
    if (S.bw) S.bw.dt = dt;
    if (S.fxLive || S.bw || S.shocks.length) drawFx(now);
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
    clearFx();
    Snd.whoosh(up);
    const old = S.tok.filter(Boolean); S.tok = new Array(49).fill(null);
    for (const tk of old) {
      S.exiting.push(tk);
      tween(250 * sp, q => { tk.oy = (up ? -8.6 : 8.6) * q; }, { delay: (tk.col * 13 + (up ? tk.row : 6 - tk.row) * 7) * sp, ease: easeIn, done: () => { const i = S.exiting.indexOf(tk); if (i >= 0) S.exiting.splice(i, 1); } });
    }
    await ctx.sleep(old.length ? 120 : 30);
    S.grid = g; S.hasScat = g.includes('A');
    let seen = 0;
    for (let col = 0; col < 7; col++) {
      const antic = seen === 2, fall = antic ? 560 : 400;
      // two astrolabes are showing and columns are still to come: the instrument holds its breath
      if (antic) { S.antic = { col }; Snd.antic(col); for (let k = 0; k < 49; k++) if (S.tok[k] && S.tok[k].sym === 'A') pulseRing(k, '#ff9ec0', 520); }
      for (let row = 0; row < 7; row++) {
        const i = row * 7 + col, tk = newToken(g[i], col, row), order = up ? row : 6 - row, heavy = g[i] === 'A';
        S.tok[i] = tk;
        dropTween(tk, up ? 8.6 : -8.6, fall * sp, order * 22 * sp, heavy);
        if (heavy) {
          const n = ++seen;
          after(fall * .72 + order * 22, () => {                    // the astrolabe lands: weight, light, a low gong
            tk.glow = 1.3; pulseRing(i, '#ff9ec0', 900); after(110, () => pulseRing(i, '#ffe9a8', 800));
            burst(...cellXY(i), 16, { cols: ['#ffd0e0', '#ffe9a8', '#c9a0ff'], speed: .9 }); shake(S.cs * .05, 240);
            Snd.scatter(n); tween(1000 * api.speed(), q => { tk.glow = 1.3 * (1 - q); tk.sc = 1 + .18 * Math.sin(q * PI) * (1 - q * .5); tk.shine = q; }, { done: () => { tk.shine = 0; } });
          });
        }
      }
      Snd.land(col, up, fall * .72 * sp / 1000);
      await ctx.sleep(antic ? 360 : 62);
    }
    S.antic = null; S.dirty = true;
    await ctx.sleep(400 + 6 * 22 + 30);
    await ctx.sleep(next && next.type === 'cascade' ? 110 : 340);
  }

  async function doCascade(e, ctx) {
    const next = String(e.grid || '').split('');
    if (next.length !== 49) return;
    const sp = ctx.speed(), wins = Array.isArray(e.wins) ? e.wins : [], mult = Number(e.mult) || 1, up = S.retro;
    setMult(mult, false);
    setLevel(up ? 3 : 2);
    clearFx();
    // 1. gold lines link each cluster cell to cell behind a travelling spark; its medallions lift and catch the light
    const gone = new Uint8Array(49), lines = [];
    let biggest = 0;
    Snd.run(mult, wins.length, up);
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
      }, { delay: wi * 50 * sp, ease: easeInOut });
      for (const k of cells) {
        gone[k] = 1;
        const tk = S.tok[k], q0 = { k, al: 0 }; S.cellGlow.push(q0);
        tween(300 * sp, q => { q0.al = q; if (tk) { tk.glow = q; tk.lift = backOut(q); tk.shine = q; } }, { delay: (wi * 50 + L.depth[k] * 28) * sp, done: () => { if (tk) tk.shine = 0; } });
      }
    });
    await ctx.sleep(310 + Math.min(3, wins.length - 1) * 40 + Math.min(120, biggest * 6));
    // 2. the win appears on a banner at each cluster
    const worth = ctx.units(e.win), big = worth >= ctx.amount * ctx.cost, grand = biggest >= 12 || worth >= ctx.amount * ctx.cost * 10;
    for (const { L, w, n } of lines) {
      const [x, y] = cellXY(L.root), fig = FIGURES.find(f => n >= f[0]);
      const lab = { x, y, oy: 0, sc: .4, al: 0, text: ctx.winMoney(ctx.units((Number(w.pay) || 0) * mult)), tag: mult > 1 ? '×' + mult : '', name: fig && S.cs >= 30 ? fig[1].toUpperCase() : '' };
      for (const o of S.labels) if (Math.abs(o.x - lab.x) < S.cs * 2.3 && Math.abs(o.y - lab.y) < S.cs * .8) lab.y += (lab.y > S.G / 2 ? -1 : 1) * S.cs * .95;
      S.labels.push(lab);
      tween(280 * sp, q => { lab.sc = .4 + .6 * q; lab.al = Math.min(1, q * 1.6); }, { ease: backOut });
    }
    Dial.kick = 1; tween(380 * sp, q => { Dial.kick = 1 - q; }, { ease: linear });
    Snd.win(mult, big, up);
    if (grand) { flash(.8, 420); shake(S.cs * .07, 300); await ctx.sleep(110); }           // hit-stop on the biggest moments
    await ctx.sleep(330);
    // 3. the cluster dissolves into stardust that streams to the total; a cluster of 7+ leaves a comet behind
    const born = new Set((Array.isArray(e.wilds) ? e.wilds : []).filter(k => gone[k]));
    Snd.dust(up);
    for (const L of S.lines) tween(240 * sp, q => { L.al = 1 - q; });
    for (const q0 of S.cellGlow) tween(240 * sp, q => { q0.al = 1 - q; });
    for (const lab of S.labels) tween(560 * sp, q => { lab.oy = -.45 * q; lab.al = 1 - Math.max(0, q - .6) / .4; }, { delay: 160 * sp });
    let count = 0;
    for (let k = 0; k < 49; k++) if (gone[k] && !born.has(k)) count++;
    const per = api.reduced ? 0 : clamp(Math.round(70 / Math.max(1, count)), 1, 4);
    for (let k = 0; k < 49; k++) {
      const tk = S.tok[k];
      if (!gone[k] || !tk || born.has(k)) continue;
      S.tok[k] = null; S.dying.push(tk);
      burst(...cellXY(k), S.small ? 3 : 6, {}); stream(k, per);
      tween(260 * sp, q => { tk.sc = 1 + .22 * q; tk.al = 1 - q; tk.glow = 1 - q; tk.lift = 1 + q * .5; }, { done: () => { const i = S.dying.indexOf(tk); if (i >= 0) S.dying.splice(i, 1); } });
    }
    let bn = 0;
    for (const k of born) {
      const tk = S.tok[k]; if (!tk) continue;
      tk.sym = 'W'; tk.glow = 1; tk.sc = .2; tk.lift = 0; tk.shine = 0;
      tween(440 * sp, q => { tk.sc = .2 + .8 * q; }, { ease: backOut });
      tween(900 * sp, q => { tk.glow = 1 - q; }, { delay: 300 * sp });
      pulseRing(k, '#bfe0ff', 800); burst(...cellXY(k), 16, { cols: ['#ffffff', '#bfe0ff', '#ffe9a8'], speed: 1.2, grav: 0 });
      Snd.wild(bn++ * .06);
    }
    await ctx.sleep(260);
    // the stardust arrives: the totals move
    if (S.featOn) S.feat += Number(e.win) || 0;
    ctx.setWin(ctx.units(e.total), true);
    setTotal(ctx.units(S.featOn ? S.feat : e.total), true);
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
    Snd.land(3, up, .3 * sp);
    setMult(mult + 1, true);                                              // the alignment tightens by one
    await ctx.sleep(450);
  }

  /* RETROGRADE begins: the astrolabes answer, the instrument winds down to a dead stop, then everything reverses. */
  async function doTrigger(e, ctx) {
    const sp = ctx.speed(), n = Number(e.spins) || 0, mid = [S.gx + S.G / 2, S.gy + S.G / 2];
    S.featOn = true; S.feat = 0; S.left = n; S.spins = 0;
    Snd.trigger();
    for (let k = 0; k < 49; k++) { const tk = S.tok[k]; if (tk && tk.sym === 'A') { pulseRing(k, '#ff9ec0', 1000); tween(900 * sp, q => { tk.glow = Math.sin(q * PI) * 1.2 + .3; tk.lift = Math.sin(q * PI); tk.sc = 1 + .2 * Math.sin(q * PI); }); burst(...cellXY(k), 16, { cols: ['#ffd0e0', '#ffe9a8', '#c9a0ff'], speed: 1.1, grav: 0 }); } }
    await ctx.sleep(850);
    // wind down: rings, dust and the dial slow to a halt
    S.ringTarget = 0; Snd.windDown(.75 * sp); Snd.swell(.95 * sp);
    showCard('The planets turn', 'RETROGRADE', `<b>${n}</b> free spins`, 'Gravity reverses · ALIGNMENT never resets', 'start');
    await ctx.sleep(750);
    S.ringV = 0;
    await ctx.sleep(200);                                                 // a held breath
    // ... and reverse: a shock ring leaves the grid, the sky turns crimson, the rings snap backwards, the medallions float up and away
    Snd.flip();
    setRetro(true); setLevel(3, true);
    S.ringV = -7;
    flash(1, 700); shake(S.cs * .09, 380); shock(mid[0], mid[1], '#ff7aa8', 1100); after(140, () => shock(mid[0], mid[1], '#ffd08a', 1200));
    if (!api.reduced) burstF(mid[0], mid[1], S.small ? 20 : 50, { cols: ['#ff9ec0', '#ffd08a', '#ffffff'], speed: .7, grav: -.5, life: 1.4 });
    const old = S.tok.filter(Boolean); S.tok = new Array(49).fill(null); S.hasScat = false;
    for (const tk of old) { S.exiting.push(tk); tween((900 + Math.random() * 500) * sp, q => { tk.oy = -8.8 * q; tk.ox = Math.sin(q * 5 + tk.col) * .06; }, { delay: (250 + tk.row * 55 + Math.random() * 120) * sp, ease: easeIn, done: () => { const i = S.exiting.indexOf(tk); if (i >= 0) S.exiting.splice(i, 1); } }); }
    setMult(1, false); Dial.mf = 1; Dial.axisT = Dial.axis = -PI / 2;
    el.cap.textContent = 'FEATURE TOTAL'; setTotal(0, false); showLeft();
    await ctx.sleep(1900);
    el.card.classList.remove('on');
    await ctx.sleep(320);
  }

  async function doMore(e, ctx) {
    const add = Number(e.spins) || 0;
    S.left = Number(e.left) || S.left + add; showLeft();
    for (let k = 0; k < 49; k++) { const tk = S.tok[k]; if (tk && tk.sym === 'A') { pulseRing(k, '#ff9ec0', 900); burst(...cellXY(k), 10, { cols: ['#ffd0e0', '#ffe9a8'], grav: 0 }); } }
    el.plus.innerHTML = `<b>+${add}</b> free spins`; el.plus.classList.remove('on'); void el.plus.offsetWidth; el.plus.classList.add('on');
    el.spinsBox.classList.remove('pop'); void el.spinsBox.offsetWidth; el.spinsBox.classList.add('pop');
    Snd.more();
    await ctx.sleep(1050);
    el.plus.classList.remove('on');
  }

  /* RETROGRADE ends: the wound-up alignment is released, the sky returns, and the feature is summed up. */
  async function doRetroEnd(e, ctx) {
    const total = ctx.units(Number(e.total) || 0), good = total >= ctx.amount * ctx.cost, sp = ctx.speed(), mid = [S.gx + S.G / 2, S.gy + S.G / 2];
    await ctx.sleep(300);
    // release
    S.ringTarget = 0; Snd.release();
    setMult(1, false); Dial.axisT = -PI / 2;
    await ctx.sleep(420);
    setRetro(false); setLevel(1, true); S.ringV = 4;
    shock(mid[0], mid[1], '#bfe0ff', 1000); flash(.6, 500);
    S.featOn = false;
    await ctx.sleep(480);
    // summary
    showCard('RETROGRADE complete', ctx.winMoney(total), `${S.spins} free ${S.spins === 1 ? 'spin' : 'spins'} · ALIGNMENT reached <b>×${S.peak}</b>`, '', 'end' + (good ? ' good' : ''));
    if (total > 0 && !api.reduced) { tween(950 * sp, (q, p) => { el.cardTitle.textContent = p >= 1 ? ctx.winMoney(total) : ctx.money(Math.round(total * q)); }); Snd.count(.9 * sp, 1); }
    after(950, () => Snd.end(good));
    if (good && !api.reduced) for (let i = 0; i < 5; i++) after(i * 130, () => burst(S.G * (.2 + Math.random() * .6), S.G * (.25 + Math.random() * .5), 14, { speed: 1.4, grav: 1.5 }));
    await ctx.sleep(2000);
    el.card.classList.remove('on');
    el.cap.textContent = 'TOTAL WIN'; setTotal(ctx.winUnits, false);
    await ctx.sleep(300);
  }

  /* The sky celebrates a big win (only when the round won at least what it was played for, and at least 10x). */
  async function celebrate(ctx) {
    const tier = ctx.capped ? 4 : ctx.winX >= SKY[3].x ? 3 : ctx.winX >= SKY[2].x ? 2 : 1, sp = ctx.speed(), red = api.reduced;
    const T = [null, { pre: 350, count: 1500, hold: 1000 }, { pre: 1100, count: 2100, hold: 1100 }, { pre: 1500, count: 2900, hold: 1200 }, { pre: 1700, count: 3400, hold: 1600 }][tier];
    const mid = [S.W / 2, S.H / 2 - Math.min(S.W, S.H) * (tier >= 2 ? .2 : .1)];
    el.bigKick.textContent = SKY[tier].kick; el.bigTitle.textContent = SKY[tier].title; el.bigAmt.textContent = ctx.money(0); el.bigX.textContent = ctx.fmtX(ctx.winX);
    el.big.dataset.tier = String(tier);
    S.bw = { tier, t0: performance.now(), sp, pre: Math.max(1, T.pre * sp), out: Math.max(1, 380 * sp), acc: 0, dt: 0, hitAt: 0, outAt: 0 }; S.fxLive = true;
    setLevel(2, true);
    Snd.skyStart(tier, T.pre * sp / 1000);
    await ctx.sleep(red ? 200 : T.pre);
    // impact
    if (S.bw) S.bw.hitAt = performance.now();
    Snd.skyHit(tier);
    if (tier >= 2) { flash(1, 600); shake(S.cs * (.05 + tier * .025), 420); shock(mid[0], mid[1], '#ffe9a8', 1200, 1.2); if (tier >= 3) after(160, () => shock(mid[0], mid[1], '#ff9ec0', 1300, 1.2)); }
    if (!red) burstF(mid[0], mid[1], (S.small ? 14 : 36) + tier * 8, { speed: .8, grav: .4, life: 1.5 });
    el.big.classList.add('on');
    if (tier >= 2 && !red) await ctx.sleep(90);                           // hit-stop
    if (red) el.bigAmt.textContent = ctx.winMoney(ctx.winUnits);
    else { tween(T.count * sp, (q, p) => { el.bigAmt.textContent = p >= 1 ? ctx.winMoney(ctx.winUnits) : ctx.money(Math.round(ctx.winUnits * (1 - Math.pow(1 - p, 2.2)))); }, { ease: linear }); Snd.count(T.count * sp / 1000, tier); }
    await ctx.sleep(red ? 300 : T.count);
    Snd.skyEnd(tier);
    el.big.classList.add('done');
    if (!red) burstF(S.W / 2, S.H / 2 + Math.min(S.W, S.H) * .12, (S.small ? 16 : 40) + tier * 10, { speed: .9, grav: .6, life: 1.6 });
    await ctx.sleep(T.hold);
    el.big.classList.remove('on', 'done');
    if (S.bw) S.bw.outAt = performance.now();
    await ctx.sleep(380);
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
        else if (e.type === 'cascade') await doCascade(e, ctx);
        else if (e.type === 'trigger') { feature = true; await doTrigger(e, ctx); }
        else if (e.type === 'more') await doMore(e, ctx);
        else if (e.type === 'retroEnd') await doRetroEnd(e, ctx);
      }
      if (S.retro) setRetro(false);
      S.featOn = false;
      el.cap.textContent = 'TOTAL WIN'; setTotal(ctx.winUnits, false);
      // A win below what the round was played for is simply shown. From 10x (and never below the round's price) the sky answers.
      if (ctx.winX >= ctx.cost && (ctx.winX >= SKY[1].x || ctx.capped)) await celebrate(ctx);
      else if (ctx.winX >= ctx.cost && ctx.winUnits > 0) popTotal();
    } finally {
      if (S.retro) setRetro(false);
      S.featOn = false; S.playing = false;
    }
    return { feature };
  }
  function reset() {
    hardStop(); setRetro(false, true); S.playing = false; S.featOn = false;
    Dial.m = Dial.mf = 1; Dial.axisT = -PI / 2; setLevel(0);
    if (S.grid && S.grid.length === 49) buildTokens(S.grid);
    if (el.cap) el.cap.textContent = 'TOTAL WIN';
  }

  /* ---------- Rules text (every number here is enforced by math/game.mjs replay) ---------- */
  const ICON = {};
  for (const s of PLANETS + 'WA') ICON[s] = `<img alt="" src="${A.sprite(s, 112).toDataURL('image/png')}">`;
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
    <h3>Modes</h3>
    <p><b>Orrery</b> is the main game and is played for 1× the play amount. <b>RETROGRADE</b> is played for ${RETRO_COST}× the play amount: its spin always lands 3, 4 or 5 astrolabes, so the feature is instantly triggered once that spin's cascades are finished.</p>
    <h3>Win cap</h3>
    <p>A round can win at most ${group(MAX_WIN)}× the play amount. If the total reaches that amount, the round ends at once and wins exactly ${group(MAX_WIN)}×.</p>
    <p>The names shown over large clusters and big wins are decoration only and do not change any win.</p>`;

  // The logo is rendered twice by the shell (intro and top bar): the gold gradient sits in its own always-rendered <svg>.
  document.body.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs><linearGradient id="rgGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6cf"/><stop offset=".46" stop-color="#f0c865"/><stop offset=".56" stop-color="#c48f33"/><stop offset="1" stop-color="#f8e3a0"/></linearGradient></defs></svg>');
  const LOGO = `<svg class="rg-logo" viewBox="0 0 332 44" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retrograde">
    <g class="rg-logo-orb"><g fill="none" stroke="url(#rgGold)"><circle cx="22" cy="22" r="19.5" stroke-width="1.7"/><circle cx="22" cy="22" r="12.5" stroke-width="1"/><ellipse cx="22" cy="22" rx="19" ry="6.4" transform="rotate(-28 22 22)" stroke-width="1.1"/></g>
    <circle cx="22" cy="22" r="5.2" fill="url(#rgGold)"/><circle cx="38.7" cy="13.1" r="2.7" fill="#fff6cf"/><circle cx="9.2" cy="29" r="1.7" fill="#f0c865"/></g>
    <text class="rg-logo-word" x="54" y="33" font-family="Cinzel, Georgia, serif" font-weight="700" font-size="30" textLength="274" lengthAdjust="spacingAndGlyphs" fill="url(#rgGold)">RETROGRADE</text></svg>`;

  /* Intro cards: three small pictures drawn with the game's own art. */
  function cardArt(kind) {
    const N = 300, cv = A.mk(N), c = cv.getContext('2d'), put = (s, cx0, cy0, z) => c.drawImage(A.sprite(s, Math.round(z)), cx0 - z / 2, cy0 - z / 2, z, z);
    c.imageSmoothingQuality = 'high';
    if (kind === 'cluster') {
      c.drawImage(A.plate(264, 14, 1, 'night'), 4, 4, 292, 292);
      const cs = 264 / 3, at = (i, j) => [18 + (i + .5) * cs, 18 + (j + .5) * cs], lay = ['C', 'C', 'S', 'L', 'C', 'T', 'Q', 'C', 'C'];
      lay.forEach((s, k) => put(s, ...at(k % 3, (k / 3) | 0), cs * 1.04));
      const path = [at(0, 0), at(1, 0), at(1, 1), at(1, 2), at(2, 2)];
      c.lineCap = 'round'; c.lineJoin = 'round';
      for (const [lw, col] of [[16, 'rgba(255,194,74,.3)'], [7, 'rgba(255,224,138,.6)'], [3, '#fffbe6']]) { c.lineWidth = lw; c.strokeStyle = col; c.beginPath(); path.forEach((p, i) => c[i ? 'lineTo' : 'moveTo'](p[0], p[1])); c.stroke(); }
      const sp = A.spark(96); c.globalCompositeOperation = 'lighter'; path.forEach(p => c.drawImage(sp, p[0] - 30, p[1] - 30, 60, 60));
    } else if (kind === 'align') {
      c.drawImage(A.dialFace(N, 'night'), 0, 0);
      const R = N / 2 * .97, ax = -PI / 2 + .9, gl = A.glow(96, '#ffd978');
      c.translate(N / 2, N / 2);
      c.lineCap = 'round'; c.lineWidth = 5; c.strokeStyle = '#ffe9a8';
      for (let i = 0; i < 14; i++) { const a = -PI / 2 + (i + .5) / 60 * TAU; c.beginPath(); c.moveTo(Math.cos(a) * R * .895, Math.sin(a) * R * .895); c.lineTo(Math.cos(a) * R * .955, Math.sin(a) * R * .955); c.stroke(); }
      c.lineWidth = 7; c.strokeStyle = 'rgba(255,226,150,.9)'; c.beginPath(); c.moveTo(Math.cos(ax) * R * .34, Math.sin(ax) * R * .34); c.lineTo(Math.cos(ax) * R * .84, Math.sin(ax) * R * .84); c.stroke();
      [...DIAL_ORDER].forEach((s, i) => { const on = i < 5, a = on ? ax : i * 2.3 + 2.4, r = R * A.DIAL_ORBIT(i), z = R * (on ? .15 : .12); if (on) c.drawImage(gl, Math.cos(a) * r - z * 1.4, Math.sin(a) * r - z * 1.4, z * 2.8, z * 2.8); c.drawImage(A.body(64, s), Math.cos(a) * r - z, Math.sin(a) * r - z, z * 2, z * 2); });
      let g = c.createLinearGradient(-R * .33, -R * .33, R * .33, R * .33); g.addColorStop(0, '#fff0b8'); g.addColorStop(.5, '#b8862e'); g.addColorStop(1, '#5a3a0c'); c.beginPath(); c.arc(0, 0, R * .325, 0, TAU); c.fillStyle = g; c.fill();
      g = c.createRadialGradient(0, -R * .1, 0, 0, 0, R * .29); g.addColorStop(0, '#2c46b8'); g.addColorStop(1, '#0a1034'); c.beginPath(); c.arc(0, 0, R * .29, 0, TAU); c.fillStyle = g; c.fill();
      c.fillStyle = '#ffd76a'; A.starPath(c, 0, 0, R * .22, R * .1, R * .04); c.fill();
    } else {
      c.drawImage(A.plate(264, 14, 1, 'retro'), 4, 4, 292, 292);
      const gl = A.glow(128, '#ff7aa8');
      c.lineCap = 'round';
      for (const [s, px, py, z] of [['G', 70, 78, 74], ['S', 232, 96, 68], ['C', 150, 58, 62]]) {
        for (const dx of [-.22, 0, .22]) { const g = c.createLinearGradient(0, py + z * .4, 0, py + z * 1.5); g.addColorStop(0, 'rgba(255,208,138,.7)'); g.addColorStop(1, 'rgba(255,208,138,0)'); c.strokeStyle = g; c.lineWidth = 4; c.beginPath(); c.moveTo(px + dx * z, py + z * .4); c.lineTo(px + dx * z, py + z * (1.2 + Math.abs(dx))); c.stroke(); }
        put(s, px, py, z);
      }
      c.drawImage(gl, 150 - 110, 196 - 110, 220, 220); put('A', 150, 196, 150);
    }
    return `<img alt="" src="${cv.toDataURL('image/png')}">`;
  }

  cfg = {
    id: 'retrograde', title: 'Retrograde', tagline: 'Seven planets. One alignment. Then gravity turns.',
    rtp: '96.30', layout: 'bar', logo: LOGO, celebrate: false,
    modes: [
      { name: 'base', label: 'Orrery', cost: 1, maxWin: MAX_WIN },
      { name: 'retro', kind: 'feature', label: 'RETROGRADE', cost: RETRO_COST, maxWin: MAX_WIN, blurb: 'The spin lands 3 to 5 astrolabes and RETROGRADE begins.', confirmTitle: 'Enter RETROGRADE?', confirmLabel: 'Begin' },
    ],
    introCards: [
      { art: cardArt('cluster'), title: 'CLUSTERS', text: 'Link 5 or more of one planet. Winners dissolve and new medallions drop in.' },
      { art: cardArt('align'), title: 'ALIGNMENT', text: 'Every cascade lines up another planet and raises the multiplier by 1.' },
      { art: cardArt('retro'), title: 'RETROGRADE', text: '3 astrolabes reverse gravity for free spins where the multiplier never resets.' },
    ],
    featureName: 'RETROGRADE', statLabel: 'Retrogrades', playLabel: 'PLAY', busyLabel: 'TURNING',
    rules: RULES,
    mount(stage, a) {
      api = a;
      const h = a.h, img = s => { const i = document.createElement('span'); i.innerHTML = ICON[s]; return i.firstChild; };
      el.root = h('div', { class: 'rg-root' });
      el.neb1 = h('canvas', { class: 'rg-neb' }); el.neb2 = h('canvas', { class: 'rg-neb rg-neb2' }); el.stars = h('canvas', { class: 'rg-stars' });
      el.orr = h('canvas', { class: 'rg-orrery' }); el.vig = h('div', { class: 'rg-vig' }); el.grid = h('canvas', { class: 'rg-grid' });
      el.dial = h('canvas', { class: 'rg-dial' });
      el.align = h('div', { class: 'rg-align' }, el.dial, h('div', { class: 'rg-cap rg-acap', text: 'ALIGNMENT' }));
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
      el.fx = h('canvas', { class: 'rg-fx' });
      el.cardKick = h('div', { class: 'rg-card-kick' }); el.cardTitle = h('div', { class: 'rg-card-title' }); el.cardSub = h('div', { class: 'rg-card-sub' }); el.cardNote = h('div', { class: 'rg-card-note' });
      el.card = h('div', { class: 'rg-card' }, el.cardKick, el.cardTitle, el.cardSub, el.cardNote);
      el.plus = h('div', { class: 'rg-plus' });
      el.bigKick = h('div', { class: 'rg-big-kick' }); el.bigTitle = h('div', { class: 'rg-big-title' }); el.bigAmt = h('div', { class: 'rg-big-amt' }); el.bigX = h('div', { class: 'rg-big-x' });
      el.big = h('div', { class: 'rg-big', role: 'status' }, el.bigKick, el.bigTitle, el.bigAmt, el.bigX);
      el.root.append(el.neb1, el.neb2, el.stars, el.orr, el.vig, el.grid, el.align, el.plaque, el.fx, el.card, el.plus, el.big);
      stage.append(el.root);
      el.orrC = el.orr.getContext('2d'); el.gridC = el.grid.getContext('2d'); el.dialC = el.dial.getContext('2d'); el.fxC = el.fx.getContext('2d');
      layout();
      buildTokens(restingGrid());
      setTotal(0, false);
      if ('ResizeObserver' in window) new ResizeObserver(() => layout()).observe(el.root); else window.addEventListener('resize', layout);
      document.addEventListener('visibilitychange', () => { if (document.hidden) { stopLoop(); Music.stop(); } else { startLoop(); if (S.started && api.sound.on) Music.start(); } });
      if (document.fonts && document.fonts.load) Promise.all([document.fonts.load('800 20px Jost'), document.fonts.load('700 20px Cinzel')]).then(() => { S.dirty = true; }, () => {});
      S.attract = true;
      startLoop();
    },
    play, reset,
    idle() { S.attract = true; S.nextGlint = S.t + 1; el.root.classList.remove('live'); setLevel(0); },
    onStart() { S.attract = true; S.started = true; Snd.start(); Music.start(); },
    onSound(on) { if (!on) Music.stop(); else if (S.started) Music.start(); },
  };
  LZ.boot(cfg);
  // The intro also shows the seven medallions under the logo on frames too small for the cards.
  const logo = document.querySelector('.lz-intro-logo');
  if (logo) { const row = document.createElement('div'); row.className = 'rg-intro-row'; row.setAttribute('aria-hidden', 'true'); row.innerHTML = [...PLANETS].map(s => ICON[s]).join(''); logo.after(row); }
})();
