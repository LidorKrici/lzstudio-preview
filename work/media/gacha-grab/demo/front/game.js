/* Gacha Grab: the stage (a claw cabinet drawn on canvas), the playback of a round's events and the rules text.
 * The shell (lz-core.js) owns the wallet, the controls and the settlement. Nothing in this file decides a result:
 * every capsule, toy, value, multiplier and total shown during a round is read from the book's events. The pile
 * of capsules, its physics, the lights, the music and the lane the claw travels to are decoration. */
(() => {
  'use strict';
  const A = window.GG, TAU = Math.PI * 2, PI = Math.PI;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t, rand = (a, b) => a + Math.random() * (b - a);
  const E = {
    lin: t => t, io: t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2), out: t => 1 - Math.pow(1 - t, 3), in: t => t * t,
    back: t => 1 + 2.4 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2),
    over: t => 1 + 1.25 * Math.pow(t - 1, 3) + 0.25 * Math.pow(t - 1, 2),                 // arrives with a small overshoot
    bounce: t => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75; if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375; return n * (t -= 2.625 / d) * t + 0.984375; },
    elastic: t => (t <= 0 ? 0 : t >= 1 ? 1 : Math.pow(2, -9 * t) * Math.sin((t * 8 - 0.75) * TAU / 3) + 1),
  };

  /* ---------- The published rules, for the rules sheet (the stage itself only ever shows event values) ---------- */
  const VALUES = {
    pop: [20, 30, 50, 80, 100, 150, 200, 300, 500, 800, 1200, 2000, 3000, 5000, 10000],
    deluxe: [50, 80, 100, 150, 200, 300, 500, 800, 1200, 2500, 4000, 6000, 15000, 25000, 50000],
    legend: [100, 150, 200, 300, 500, 800, 1200, 2000, 3000, 6000, 10000, 20000, 50000, 100000, 250000],
  };
  const MAXWIN = { pop: 500, deluxe: 2500, legend: 10000, fever: 10000 };
  const FEVER_PRICE = 80;
  // Celebration tiers: 10x / 50x / 250x of the play amount on the machines; in the FEVER feature, which is played
  // for 80x, the same three steps sit at 2x / 5x / 20x of that price. Nothing below what the round was played for.
  const WIN_STEPS = [10, 50, 250], FEATURE_STEPS = [2, 5, 20].map(v => v * FEVER_PRICE), WIN_LABEL = ['BIG WIN', 'MEGA WIN', 'EPIC WIN', 'MAX WIN'];
  const fmtV = v => (v / 100).toLocaleString('en-US') + '×';

  /* ---------- Three cabinets ---------- */
  const SKINS = {
    pop: {
      name: 'POP', sign: 'pop', body: ['#c6f7e6', '#77dec0', '#3fa98a'], trim: '#ff8fc0', trim2: '#ffffff', ink: '#2c7a66',
      wall: ['#fff7ea', '#ffd3e6'], side: ['#f7c6dc', '#d99abb'], ceil: '#fff4f8', floor: ['#ffc4dc', '#f08fb8'], deco: 'pop', tube: ['#ff8fc0', '#8ff5d4'],
      shade: '#7a3f86', chute: ['#9478cc', '#51407f'], bay: ['#7a56b6', '#2f2153'], bayFloor: ['#a585e0', '#5c4196'], drape: '#ffffff', led: '#221739',
      ped: ['#fff6fb', '#ffc2dd', '#d57fae'], pedTop: '#ff8fc0',
      marq: ['#ffb0d6', '#ff6fae'], marqIn: '#d8468f', bulbOn: '#fffbe0', bulbGlow: '#fff3a6', bulbOff: '#f7a8cd',
      rail: ['#ffffff', '#d7b9cc'], railEdge: '#a9809a',
      claw: { metal: '#f4f5fa', edge: '#7f6088', tip: '#ff6fae', rubber: '#4a3460' }, cable: '#b89ac4', coil: '#ff8fc0', glass: 0.17,
      deck: '#3fa98a', music: 'pop',
    },
    deluxe: {
      name: 'DELUXE', sign: 'deluxe', body: ['#4a72f0', '#2242bd', '#101f6e'], trim: '#f5c451', trim2: '#fff1c2', ink: '#0b1a5c',
      wall: ['#22379a', '#0f1a55'], side: ['#172a7a', '#0a1240'], ceil: '#1a2a78', floor: ['#2b46ac', '#131f5c'], deco: 'deluxe', tube: ['#f5c451', '#ffe9a6'],
      shade: '#040828', chute: ['#0d1642', '#050920'], bay: ['#1b2c78', '#070c2c'], bayFloor: ['#3350bd', '#16246a'], drape: '#8fb0ff', led: '#050922',
      ped: ['#fff1c2', '#f5c451', '#a8760e'], pedTop: '#2a3fa0',
      marq: ['#2f55da', '#152c96'], marqIn: '#0b1856', bulbOn: '#fff6cc', bulbGlow: '#ffd96a', bulbOff: '#7a5c14',
      rail: ['#ffe39a', '#c9952a'], railEdge: '#6a4a08',
      claw: { metal: '#f1cf72', edge: '#4f3a08', tip: '#ffffff', rubber: '#1b1640' }, cable: '#b9993a', coil: '#fff1c2', glass: 0.12,
      deck: '#101f6e', music: 'deluxe',
    },
    legend: {
      name: 'LEGEND', sign: 'legend', body: ['#24223a', '#100f1c', '#050509'], trim: 'prism', trim2: '#6ff3ff', ink: '#000000',
      wall: ['#190d2e', '#050308'], side: ['#0e0820', '#020104'], ceil: '#0e0819', floor: ['#23133f', '#07040e'], deco: 'legend', tube: ['#ff4df0', '#6ff3ff'],
      shade: '#000000', chute: ['#0b0714', '#000000'], bay: ['#1a0d33', '#03020a'], bayFloor: ['#35196a', '#0e0620'], drape: '#b58bff', led: '#000000',
      ped: ['#3a3d55', '#1b1c2c', '#05050a'], pedTop: '#14101f',
      marq: ['#181022', '#07050c'], marqIn: '#000000', bulbOn: '#ffffff', bulbGlow: '#6ff3ff', bulbOff: '#2a2440',
      rail: ['#4a4e6c', '#1c1e2e'], railEdge: '#000000',
      claw: { metal: '#454a66', edge: '#05050a', tip: '#6ff3ff', rubber: '#0c0c14' }, cable: '#4a4e6c', coil: '#ff4df0', glass: 0.1,
      deck: '#050509', music: 'legend', neon: true,
    },
  };
  const ORDER = ['pop', 'deluxe', 'legend'];
  const LS = [1, 0.9, 0.81], SHADE = [0, 0.2, 0.38];            // the pile has three rows: scale and darkening per row

  /* ---------- State ---------- */
  let api, S, CFG, stage, root, layers, hud, card, strip, shelfPanel;
  const cv = {}, g = {};
  let L = null, dpr = 1, skin = 'pop', epoch = 0, walking = Promise.resolve(), started = false, replaySkin = null;
  const pile = [];                               // capsules lying in the tank (x, y in tank units; z = row, 0 = front)
  const PH = { r: 6, per: 14, lanes: 3, H: 60, floorY: 58, wallX: 70, wallTop: 30, railY: 3.6, homeX: 85, homeY: 12, asleep: false, still: 0, budget: 0, pileH: 20, lift: [0, 4, 8] };
  const claw = { x: 85, y: 12, open: 0.3, th: 0, om: 0, lx: 85, lv: 0, st: 0, sv: 0, load: 0, dig: false, held: [], wob: 0, wv: 0, lamp: '#ffd84d' };
  const drops = [];                              // capsules falling down the chute
  const tray = { items: [], ghost: null, total: 0, shown: 0, text: '', pulse: 0, win: false };
  const fever = { on: false, n: 0, of: 6, x: 1 };
  const flap = { a: 0, v: 0 };
  const shelf = new Array(15).fill(0);
  const LT = { mode: 'idle', k: 0, dir: 1, spot: 0.12, spotT: 0.12, amb: 0, ambCol: '#ffffff', sign: '', flash: 0 };   // cabinet lights
  const deck = { jx: 0, jy: 0, b: [0, 0, 0], beat: 0 };
  const win = { on: false, tier: 0, k: 0, amount: 0, text: '', label: '', bump: 0, dim: 0 };
  let shake = 0, freeze = 0, lastIdleKick = 0, walkX = '';

  /* ---------- Tweens: every animation in a round goes through here so TURBO and the QA speed-up apply ---------- */
  const tweens = new Set();
  function endTween(tw) { if (!tweens.has(tw)) return; tweens.delete(tw); clearTimeout(tw.timer); try { tw.fn(1); } catch (e) { /* stage was rebuilt */ } tw.res(); }
  function tween(ms, fn, ease = E.io) {
    return new Promise(res => {
      const d = Math.max(1, ms * api.speed());
      const tw = { t0: performance.now(), d, fn, ease, res };
      tweens.add(tw);
      tw.timer = setTimeout(() => endTween(tw), d + 400);      // keeps a round moving if frames stop (hidden tab)
    });
  }
  const wait = ms => api.sleep(ms);
  // hit-stop: everything holds its breath for a few frames on the biggest beats
  const hitStop = ms => { if (!api.reduced && api.speed() > 0.2) freeze = Math.max(freeze, ms * Math.min(1, api.speed() * 1.4)); };
  const kick = v => { if (!api.reduced) shake = Math.max(shake, v); };

  /* ---------- Sound. Everything is synthesized and goes through the shell's master gain (api.sound.out), so the
   * sound button silences it at once. A small feedback-delay send gives the arcade some room. ---------- */
  const audible = () => S && S.on && api.speed() > 0.2;
  const AU = { ctx: null, bus: null };
  function bus() {
    const a = S.ctx(); if (!a || !S.out) return null;
    if (AU.bus && AU.ctx === a) return AU.bus;
    const inp = a.createGain(), send = a.createGain(), d1 = a.createDelay(1), d2 = a.createDelay(1), fb = a.createGain(), lp = a.createBiquadFilter(), wet = a.createGain();
    send.gain.value = 0.3; d1.delayTime.value = 0.173; d2.delayTime.value = 0.291; fb.gain.value = 0.36; lp.type = 'lowpass'; lp.frequency.value = 2600; wet.gain.value = 0.42;
    inp.connect(S.out); inp.connect(send); send.connect(d1); send.connect(d2); d1.connect(lp); d2.connect(lp); lp.connect(fb); fb.connect(d1); lp.connect(wet); wet.connect(S.out);
    AU.ctx = a; AU.bus = inp;
    return inp;
  }
  // one enveloped oscillator voice; released (disconnected) when it ends
  function voice(o) {
    if (!audible()) return;
    const a = S.ctx(), out = o.dry ? S.out : bus(); if (!a || !out) return;
    const t = a.currentTime + (o.when || 0), d = Math.max(0.03, o.d || 0.2), osc = a.createOscillator(), gn = a.createGain();
    osc.type = o.type || 'sine'; osc.frequency.setValueAtTime(o.f, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.to), t + d);
    gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(o.g || 0.05, t + Math.min(d * 0.5, o.a || 0.012)); gn.gain.exponentialRampToValueAtTime(0.0001, t + d);
    let last = osc;
    if (o.lp) { const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.lp; f.Q.value = o.q || 0.7; osc.connect(f); last = f; }
    last.connect(gn); gn.connect(out); osc.start(t); osc.stop(t + d + 0.03);
    osc.onended = () => { try { gn.disconnect(); last.disconnect(); } catch (e) { /* already gone */ } };
  }
  const noise = o => { if (audible()) S.noise({ ...o, out: o.dry ? undefined : bus() || undefined }); };
  const notes = (fs, o = {}) => fs.forEach((f, k) => voice({ ...o, f, when: (o.when || 0) + k * (o.step || 0.07) }));
  const snd = {
    motor(ms) { const d = Math.max(0.05, ms / 1000); voice({ f: 78, to: 128, d, type: 'sawtooth', g: 0.05, lp: 460, a: 0.04, dry: true }); voice({ f: 39, to: 64, d, type: 'square', g: 0.022, lp: 280, a: 0.04, dry: true }); },
    ratchet(ms) { if (!audible()) return; const n = Math.max(2, Math.round(ms / 50)); for (let k = 0; k < n; k++) noise({ d: 0.022, g: 0.05, f: 2700 - k * 70, q: 4, when: k * 0.05, dry: true }); },
    clack() { noise({ d: 0.05, g: 0.17, f: 1900, q: 1.2 }); voice({ f: 190, to: 84, d: 0.1, type: 'square', g: 0.055, lp: 900 }); voice({ f: 1400, to: 900, d: 0.05, type: 'triangle', g: 0.03 }); },
    tension(ms) {                                // a tremolo that climbs while the claw lifts something
      if (!audible()) return;
      const a = S.ctx(), out = bus(); if (!a || !out) return;
      const t = a.currentTime, d = Math.max(0.08, ms / 1000), o = a.createOscillator(), l = a.createOscillator(), lg = a.createGain(), gn = a.createGain();
      o.type = 'triangle'; o.frequency.setValueAtTime(311, t); o.frequency.exponentialRampToValueAtTime(659, t + d);
      l.type = 'sine'; l.frequency.setValueAtTime(8, t); l.frequency.linearRampToValueAtTime(19, t + d); lg.gain.value = 0.03;
      gn.gain.setValueAtTime(0.0001, t); gn.gain.linearRampToValueAtTime(0.045, t + d * 0.3); gn.gain.linearRampToValueAtTime(0.0001, t + d);
      l.connect(lg); lg.connect(gn.gain); o.connect(gn); gn.connect(out); o.start(t); l.start(t); o.stop(t + d + 0.05); l.stop(t + d + 0.05);
      o.onended = () => { try { gn.disconnect(); lg.disconnect(); } catch (e) { /* already gone */ } };
      noise({ d, g: 0.012, f: 900, to: 2600, q: 6, dry: true });
    },
    bloop() { voice({ f: 300, to: 126, d: 0.26, type: 'sine', g: 0.13, a: 0.02 }); },
    thunk(k = 0) { voice({ f: 150, to: 50, d: 0.18, type: 'sine', g: 0.2, when: k * 0.07, dry: true }); noise({ d: 0.06, g: 0.07, f: 320, type: 'lowpass', when: k * 0.07 }); },
    roll() { noise({ d: 0.18, g: 0.035, f: 700, to: 300, q: 0.8, dry: true }); },
    land() { voice({ f: 220, to: 120, d: 0.08, type: 'sine', g: 0.08, dry: true }); },
    seen(tier) { if (tier >= 2) voice({ f: [0, 0, 660, 880, 1175, 1320][tier], d: 0.14, type: 'triangle', g: 0.05 }); },
    twist() { noise({ d: 0.07, g: 0.04, f: 1500, to: 2600, q: 5, dry: true }); noise({ d: 0.07, g: 0.04, f: 1700, to: 3000, q: 5, when: 0.09, dry: true }); },
    pop(tier) { noise({ d: 0.05, g: 0.1, f: 2600 + tier * 500, type: 'highpass' }); voice({ f: 480 + tier * 40, to: 880 + tier * 90, d: 0.07, type: 'triangle', g: 0.1 }); },
    jingle(tier, step = 0) {                     // longer and brighter with the tier
      const up = Math.pow(1.0595, Math.min(7, step));
      const seq = [[784], [784, 988], [784, 988, 1175, 1568], [659, 784, 988, 1175, 1568, 1976], [523, 659, 784, 1047, 1319, 1568, 2093, 2637, 3136]][Math.min(4, tier)];
      notes(seq.map(f => f * up), { step: tier >= 3 ? 0.062 : 0.075, d: tier >= 3 ? 0.32 : 0.2, type: 'triangle', g: 0.085, when: 0.05 });
      if (tier >= 3) notes(seq.map(f => f * up * 2), { step: 0.062, d: 0.18, type: 'sine', g: 0.03, when: 0.08 });
      if (tier >= 4) { noise({ d: 0.8, g: 0.03, f: 7000, to: 11000, type: 'highpass', when: 0.1 }); voice({ f: 131, d: 0.9, type: 'triangle', g: 0.09, when: 0.05 }); }
    },
    tag() { voice({ f: 1245, d: 0.06, type: 'sine', g: 0.035 }); },
    stamp(x) { voice({ f: 140, to: 70, d: 0.1, type: 'square', g: 0.06, lp: 700 }); voice({ f: 520 + x * 70, d: 0.16, type: 'triangle', g: 0.09, when: 0.03 }); },
    collect() { voice({ f: 1568, d: 0.09, type: 'sine', g: 0.04 }); voice({ f: 2093, d: 0.14, type: 'sine', g: 0.04, when: 0.07 }); },
    ticket() {
      notes([784, 988, 1175, 1568, 1976, 2349, 3136], { step: 0.055, d: 0.36, type: 'square', g: 0.045, lp: 5000 });
      notes([392, 494, 587], { step: 0.001, d: 1, type: 'triangle', g: 0.06, when: 0.36 });
      noise({ d: 0.9, g: 0.035, f: 6000, to: 12000, type: 'highpass', when: 0.05 });
    },
    feverIn() { voice({ f: 110, to: 440, d: 0.7, type: 'sawtooth', g: 0.06, lp: 1800 }); notes([523, 659, 784, 1047, 1319, 1568], { step: 0.07, d: 0.3, type: 'square', g: 0.045, lp: 5000, when: 0.55 }); noise({ d: 0.5, g: 0.05, f: 300, to: 6000, q: 0.8, when: 0.1 }); },
    feverOut() { notes([1568, 1319, 1047, 784, 1047, 1568], { step: 0.08, d: 0.36, type: 'triangle', g: 0.09 }); },
    more() { notes([988, 1319, 1976], { step: 0.07, d: 0.3, type: 'square', g: 0.05, lp: 5000 }); },
    walk() { noise({ d: 0.36, g: 0.05, f: 400, to: 1800, q: 0.7 }); voice({ f: 660, d: 0.14, type: 'triangle', g: 0.06, when: 0.3 }); voice({ f: 990, d: 0.22, type: 'triangle', g: 0.06, when: 0.38 }); },
    tick(k) { voice({ f: 700 * Math.pow(2, k * 1.4), d: 0.045, type: 'square', g: 0.022, lp: 3500, dry: true }); },
    winIn(tier) {                                // drum roll into the slam
      for (let i = 0; i < 9; i++) noise({ d: 0.04, g: 0.03 + i * 0.006, f: 220, type: 'lowpass', when: i * 0.028, dry: true });
      voice({ f: 98, to: 49, d: 0.5, type: 'sine', g: 0.15, when: 0.26, dry: true }); noise({ d: 0.5, g: 0.07, f: 5000, to: 9000, type: 'highpass', when: 0.26 });
      const run = [523, 659, 784, 1047, 1319, 1568, 2093, 2637, 3136].slice(0, 5 + tier);
      notes(run, { step: 0.075, d: 0.4, type: 'triangle', g: 0.1, when: 0.27 }); notes(run.map(f => f / 2), { step: 0.075, d: 0.32, type: 'square', g: 0.03, lp: 3000, when: 0.27 });
    },
    winEnd(tier) {
      const ch = [[523, 659, 784], [523, 659, 784, 1047], [392, 523, 659, 784, 1047], [262, 392, 523, 659, 784, 1047, 1319]][tier];
      ch.forEach(f => voice({ f, d: 1 + tier * 0.25, type: 'triangle', g: 0.07 })); voice({ f: 65, to: 49, d: 0.6, type: 'sine', g: 0.15, dry: true });
      noise({ d: 0.9 + tier * 0.2, g: 0.045, f: 6500, to: 11000, type: 'highpass' });
    },
    firework() { voice({ f: 300, to: 1500, d: 0.16, type: 'sine', g: 0.03 }); noise({ d: 0.3, g: 0.04, f: 3500, to: 900, q: 0.8, when: 0.16 }); },
  };

  /* ---------- Music bed: a quiet generative arcade loop, scheduled on the audio clock. One flavour per machine and
   * four intensity levels that follow the game: 0 idle (pad and a few bells), 1 a round is running (bass, pluck, hat),
   * 2 the lift (a climbing arpeggio on top), 3 FEVER (faster, kick, snare and a square lead). ---------- */
  const FLAV = {
    pop: { bpm: 112, roots: [130.81, 98.0, 110.0, 87.31], third: [1.26, 1.26, 1.189, 1.26], lead: 'triangle', lp: 4200 },
    deluxe: { bpm: 94, roots: [146.83, 98.0, 130.81, 110.0], third: [1.189, 1.26, 1.26, 1.26], seventh: [1.782, 1.782, 1.888, 1.782], lead: 'sine', lp: 2600, swing: 0.16 },
    legend: { bpm: 120, roots: [110.0, 87.31, 130.81, 98.0], third: [1.189, 1.26, 1.26, 1.26], lead: 'sawtooth', lp: 1500 },
  };
  const MUS = { timer: 0, next: 0, step: 0, level: 0 };
  function musicTick() {
    if (!audible() || document.hidden || !started) { MUS.next = 0; return; }
    const a = S.ctx(); if (!a) return;
    const F = FLAV[SKINS[skin].music], hot = MUS.level >= 3, dur = 60 / (F.bpm * (hot ? 1.34 : 1)) / 4;
    if (!MUS.next || MUS.next < a.currentTime) MUS.next = a.currentTime + 0.05;
    while (MUS.next < a.currentTime + 0.24) {
      const s = MUS.step++ % 64, bar = s >> 4, k = s & 15, R = F.roots[bar], lv = MUS.level;
      const when = MUS.next - a.currentTime + (F.swing && (k & 1) ? dur * F.swing : 0);
      const T = [R * 2, R * 2 * F.third[bar], R * 2 * 1.498, F.seventh ? R * 2 * F.seventh[bar] : R * 4];
      if (k === 0) { voice({ f: T[1], d: dur * 15, type: 'sine', g: 0.018, a: 0.5, when }); voice({ f: T[2], d: dur * 15, type: 'sine', g: 0.015, a: 0.5, when }); if (F.seventh) voice({ f: T[3], d: dur * 15, type: 'sine', g: 0.008, a: 0.5, when }); }
      if (lv === 0 && (k === 4 || k === 10) && Math.random() < 0.6) voice({ f: T[Math.floor(Math.random() * 4)] * 2, d: 0.7, type: 'triangle', g: 0.022, when });
      if (lv >= 1) {
        if (k % 4 === 0) voice({ f: R, d: dur * 3.2, type: skin === 'legend' ? 'sawtooth' : 'triangle', g: skin === 'legend' ? 0.04 : 0.055, lp: skin === 'legend' ? 420 : 900, when });
        if (k % 8 === 6) voice({ f: R * 1.498, d: dur * 1.6, type: 'triangle', g: 0.035, lp: 800, when });
        if (k % 2 === 0) voice({ f: T[(k >> 1) % 4] * 2, d: dur * 1.7, type: F.lead, g: F.lead === 'sawtooth' ? 0.012 : 0.02, lp: F.lp, when });
        if (k % 2 === 1) noise({ d: 0.025, g: 0.009, f: 8000, type: 'highpass', when, dry: true });
      }
      if (lv === 2) voice({ f: T[k % 4] * 4, d: dur * 0.9, type: 'triangle', g: 0.012, when });
      if (hot) {
        if (k % 4 === 0) { voice({ f: 150, to: 46, d: 0.13, type: 'sine', g: 0.13, when, dry: true }); deck.beat = 1; }
        if (k % 8 === 4) noise({ d: 0.07, g: 0.04, f: 1900, q: 0.9, when });
        voice({ f: T[[0, 2, 1, 3, 2, 1, 3, 2, 0, 1, 2, 3, 3, 2, 1, 2][k]] * 4, d: dur * 0.85, type: 'square', g: 0.016, lp: 5200, when });
      }
      MUS.next += dur;
    }
  }
  function music(on) { clearInterval(MUS.timer); MUS.timer = 0; MUS.next = 0; if (on) MUS.timer = setInterval(musicTick, 50); }

  /* ---------- Layout: the cabinet face fills the stage. Marquee, tank (glass), prize bay, base ---------- */
  const X = u => L.tank.x + u * L.s, Y = u => L.tank.y + u * L.s;
  const lx = (x, z) => X(50 + (x - 50) * LS[z]), ly = (y, z) => Y(PH.floorY - (PH.floorY - y) * LS[z] - PH.lift[z]);
  function stripWanted() { const ex = document.getElementById('lzExtra'); return !ex || getComputedStyle(ex).display === 'none'; }
  function computeLayout(W, H) {
    const tiny = H < 250 || W < 300, portrait = W < H * 1.02, strip = !tiny && stripWanted();
    const pad = clamp(Math.min(W, H) * 0.024, 3, 13), rad = clamp(Math.min(W, H) * 0.035, 5, 18);
    const mh = Math.round(tiny ? H * 0.1 : portrait ? H * 0.104 : H * 0.124);
    const bh = Math.round(strip ? clamp(H * 0.112, 40, 64) : tiny ? H * 0.045 : H * 0.095);
    const top = mh + (tiny ? 2 : pad * 0.6), bot = H - bh - (tiny ? 2 : pad * 0.6);
    let tank, bay;
    if (!portrait) {
      const tw = Math.round((W - pad * 3) * 0.57);
      tank = { x: pad, y: top, w: tw, h: bot - top };
      bay = { x: pad * 2 + tw, y: top, w: W - pad * 3 - tw, h: bot - top };
    } else {
      const th = Math.round((bot - top - pad) * 0.66);
      tank = { x: pad, y: top, w: W - pad * 2, h: th };
      bay = { x: pad, y: top + th + pad, w: W - pad * 2, h: bot - top - pad - th };
    }
    const wide = bay.w > bay.h * 2.1;
    const totalBox = wide ? { x: bay.x + bay.w * 0.025, y: bay.y + bay.h * 0.1, w: bay.w * 0.28, h: bay.h * 0.8 }
      : { x: bay.x + bay.w * 0.07, y: bay.y + bay.h * 0.04, w: bay.w * 0.86, h: bay.h * (tiny ? 0.2 : 0.155) };
    const zone = wide ? { x: bay.x + bay.w * 0.33, y: bay.y + bay.h * 0.04, w: bay.w * 0.65, h: bay.h * 0.93 }
      : { x: bay.x + bay.w * 0.03, y: totalBox.y + totalBox.h + bay.h * 0.035, w: bay.w * 0.94, h: bay.h - (totalBox.y - bay.y) - totalBox.h - bay.h * 0.06 };
    return { W, H, tiny, portrait, strip, pad, rad, mh, bh, tank, bay, wide, totalBox, zone, s: tank.w / 100,
      marq: { x: pad, y: tiny ? 2 : 3, w: W - pad * 2, h: mh - (tiny ? 3 : 5) }, base: { x: 0, y: H - bh, w: W, h: bh }, deck: !strip && !tiny };
  }
  function setupWorld() {
    PH.H = L.tank.h / L.s;
    PH.floorY = PH.H - 2.4;
    PH.lanes = L.tiny ? 2 : 3; PH.per = L.tiny || L.portrait ? 12 : 14;
    PH.pileH = PH.H * (L.portrait ? 0.25 : 0.44);
    PH.r = clamp(Math.sqrt((PH.wallX - 1.8) * PH.pileH * 0.72 / (PH.per * PI)), 3, 9.6);
    PH.lift = [0, PH.r * 0.8, PH.r * 1.5];
    PH.railY = 3.6;
    PH.homeY = PH.railY + 1.5 + PH.r * (A.CLAW_TOP + 0.4);
    PH.wallTop = Math.max(PH.homeY + PH.r * 4.2 + 0.6, PH.floorY - PH.pileH * 1.6 - PH.r);     // a cluster of three must clear the chute wall
  }
  /* Where toys stand in the prize bay for a grab of n capsules: a row of pedestals whenever there is room for it,
   * otherwise (the small popout) a list with the tag beside each toy. */
  function slotsFor(n) {
    const z = L.zone, out = [];
    if (n === 1 || z.w / n >= 58) {
      const tagH = clamp(z.h * (L.wide ? 0.2 : 0.13), 11, 40), sw = z.w / n;
      const s = Math.min(sw * (n === 1 ? 0.8 : 0.9), (z.h - tagH * 1.6) * 0.86), baseY = z.y + z.h - tagH * 1.6, pedH = s * 0.2, pw = Math.min(sw * 0.9, s * 0.92);
      for (let i = 0; i < n; i++) {
        const cx = z.x + sw * (i + 0.5), pedTop = baseY - pedH;
        out.push({ row: true, cx, cy: pedTop - s * 0.4, s, pw, pedH, pedTop, baseY, tx: cx, ty: baseY + tagH * 0.84, th: tagH, tw: Math.min(sw * 0.94, Math.max(s * 1.1, tagH * 3.6)) });
      }
    } else {
      const rh = z.h / n, s = Math.min(rh * 0.78, z.w * 0.44), th = clamp(rh * 0.38, 10, 30), tw = Math.min(z.w - s * 1.16, th * 4.4), x0 = z.x + (z.w - s * 1.16 - tw) / 2;
      for (let i = 0; i < n; i++) {
        const cyr = z.y + rh * (i + 0.5), cx = x0 + s * 0.5, pedH = s * 0.12, pedTop = cyr + s * 0.34;
        out.push({ row: false, cx, cy: pedTop - s * 0.4, s, pw: s * 0.9, pedH, pedTop, baseY: pedTop + pedH, tx: cx + s * 0.66, ty: cyr, th, tw });
      }
    }
    return out;
  }

  /* ---------- The pile: light 2D circle physics (verlet + relaxation) in three rows, asleep whenever nothing moves ---------- */
  const wake = (steps = 300) => { PH.asleep = false; PH.still = 0; PH.budget = Math.max(PH.budget, steps); };
  const tierMix = () => (PH.per >= 14 ? [4, 4, 3, 2, 1] : [4, 3, 2, 2, 1]);
  function newCap(x, y, tier, z) { return { x, y, px: x, py: y, tier, z, rot: rand(0, TAU), target: false, id: Math.random(), v: Math.floor(Math.random() * 3) }; }
  function newPile() {
    pile.length = 0; drops.length = 0;
    const r = PH.r, cols = Math.max(3, Math.floor((PH.wallX - 3) / (r * 2.06)));
    for (let z = 0; z < PH.lanes; z++) {
      const list = []; tierMix().forEach((k, t) => { for (let i = 0; i < k; i++) list.push(t); });
      for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
      for (let i = 0; i < PH.per; i++) {
        const row = Math.floor(i / cols), col = i % cols;
        pile.push(newCap(1.4 + r + col * r * 2.06 + (row % 2) * r * 0.9 + rand(-0.3, 0.3), PH.floorY - r - row * r * 1.85, list[i % list.length], z));
      }
    }
    wake(420);
    for (let k = 0; k < 340; k++) stepPhysics();
    sleepPile();
  }
  function stepPhysics() {
    const r = PH.r, n = pile.length, m = 2 * r, mm = m * m, wl = PH.wallX - 0.8 - r, wr = PH.wallX + 0.8 + r, cols = claw.dig ? clawColliders() : null;
    for (let i = 0; i < n; i++) {
      const c = pile[i];
      let vx = (c.x - c.px) * 0.985, vy = (c.y - c.py) * 0.985 + 0.036;
      const sp = Math.hypot(vx, vy), mv = r * 0.3;
      if (sp > mv) { vx *= mv / sp; vy *= mv / sp; }
      c.px = c.x; c.py = c.y; c.x += vx; c.y += vy;
    }
    for (let it = 0; it < 4; it++) {
      for (let i = 0; i < n; i++) {
        const a = pile[i];
        for (let j = i + 1; j < n; j++) {
          const b = pile[j];
          if (b.z !== a.z) continue;
          const dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy;
          if (d2 < mm && d2 > 1e-6) { const d = Math.sqrt(d2), o = (m - d) * 0.5 / d; a.x -= dx * o; a.y -= dy * o; b.x += dx * o; b.y += dy * o; }
        }
      }
      for (let i = 0; i < n; i++) {
        const c = pile[i];
        if (cols && c.z === 0 && !c.target) for (const k of cols) { const dx = c.x - k[0], dy = c.y - k[1], q = r + k[2], d2 = dx * dx + dy * dy; if (d2 < q * q && d2 > 1e-6) { const d = Math.sqrt(d2), o = (q - d) / d; c.x += dx * o; c.y += dy * o; c.px += dx * o * 0.85; c.py += dy * o * 0.85; } }
        if (c.x < r + 1) c.x = r + 1;
        if (c.x > 99 - r) c.x = 99 - r;
        if (c.y > PH.wallTop) { if (c.x > wl && c.x < wr) c.x = c.px <= PH.wallX ? wl : wr; }
        else { const dx = c.x - PH.wallX, dy = c.y - PH.wallTop, q = r + 0.8, d2 = dx * dx + dy * dy; if (d2 < q * q && d2 > 1e-6) { const d = Math.sqrt(d2), o = (q - d) / d; c.x += dx * o; c.y += dy * o; } }
        if (c.x < PH.wallX && c.y > PH.floorY - r) c.y = PH.floorY - r;
      }
    }
    let move = 0;
    for (let i = n - 1; i >= 0; i--) {
      const c = pile[i];
      if (c.y >= PH.floorY - r - 0.01) c.px = c.x - (c.x - c.px) * 0.8;          // floor friction
      if (c.y - c.py < -r * 0.07) c.py = c.y + r * 0.07;                          // nothing in here throws capsules upwards
      const jx = c.x - c.px, lim = r * 0.3; if (Math.abs(jx) > lim) c.px = c.x - Math.sign(jx) * lim;
      const dx = c.x - c.px;
      c.rot += dx / r;
      move = Math.max(move, Math.abs(dx) + Math.abs(c.y - c.py));
      if (c.x > PH.wallX && c.y > PH.floorY + r * 3) pile.splice(i, 1);          // rolled over the wall: down the chute it goes
    }
    if (move < 0.02) { if (++PH.still > 40) sleepPile(); } else PH.still = 0;
    if (--PH.budget <= 0) sleepPile();
  }
  function sleepPile() { PH.asleep = true; PH.budget = 0; for (const c of pile) { c.px = c.x; c.py = c.y; } }
  const resting = c => Math.abs(c.x - c.px) + Math.abs(c.y - c.py) < 0.09 && c.y > PH.wallTop - PH.r && c.x < PH.wallX;
  function exposed(c) { const r = PH.r; for (const k of pile) { if (k !== c && k.z === c.z && k.y < c.y - r * 0.4 && Math.abs(k.x - c.x) < r * 1.2) return false; } return true; }
  function surfaceY(x, half) { let y = PH.floorY; for (const c of pile) { if (c.z === 0 && Math.abs(c.x - x) < half + PH.r * 0.5 && c.x < PH.wallX) y = Math.min(y, c.y - PH.r); } return y; }
  function refill() {
    const want = tierMix();
    for (let z = 0; z < PH.lanes; z++) {
      const count = new Array(5).fill(0); let have = 0;
      for (const c of pile) if (c.z === z) { count[c.tier]++; have++; }
      for (let k = 0; have < PH.per && k < 4; k++, have++) {
        let t = 0, best = -99; for (let i = 0; i < 5; i++) { const d = want[i] - count[i] + Math.random() * 0.9; if (d > best) { best = d; t = i; } }
        count[t]++;
        const x = rand(8, PH.wallX - 8), y = -PH.r * (1.5 + k * 2.3 + z), c = newCap(x, y, t, z);
        c.px = x - rand(-0.25, 0.25); c.py = y - 0.4; pile.push(c);
      }
    }
    wake(460);
  }
  // the rows behind the front one feel the claw too: a small shove, nothing more
  function nudgeBack(x, amt) { for (const c of pile) { if (c.z > 0 && Math.abs(c.x - x) < PH.r * 3.2) { c.px += rand(-1, 1) * amt; c.py += rand(0, 1) * amt; } } wake(200); }

  /* ---------- The claw ---------- */
  const OFFS = { 1: [[0, 1.45]], 2: [[-0.98, 1.5], [0.98, 1.5]], 3: [[-0.98, 1.5], [0.98, 1.5], [0, 3.14]] };     // three hang as a cluster
  const CLOSED = { 1: 0, 2: 0.5, 3: 0.5 };
  function clawPose() {
    const len = Math.max(0.5, claw.y - PH.railY - 1.2 + claw.st), sn = Math.sin(claw.th), cs = Math.cos(claw.th);
    return { hx: claw.x + sn * len, hy: PH.railY + 1.2 + cs * len, sn, cs };
  }
  const clawPoint = (p, ox, oy) => [p.hx + (ox * p.cs + oy * p.sn) * PH.r, p.hy + (-ox * p.sn + oy * p.cs) * PH.r];
  function clawColliders() {
    const p = clawPose(), out = [[p.hx, p.hy, PH.r * 0.8]], hs = clawPoint(p, 0, -0.75);
    out.push([hs[0], hs[1], PH.r * 1.05]);
    for (const s of [-1, 1]) { const t = A.clawTip(claw.open, s), w = clawPoint(p, t[0], t[1]); out.push([w[0], w[1], PH.r * 0.3]); }
    return out;
  }
  function updateClaw(dt) {
    const v = (claw.x - claw.lx) / dt, acc = clamp((v - claw.lv) / dt, -900, 900);
    claw.lx = claw.x; claw.lv = v;
    const len = Math.max(4, claw.y - PH.railY);
    claw.om += (-claw.th * (40 + 260 / len) - claw.om * 3.1 - acc * 0.0062) * dt;
    claw.th = clamp(claw.th + claw.om * dt, -0.24, 0.24);
    const target = claw.load * PH.r * 0.14;                     // the cable gives a little under load
    claw.sv += ((target - claw.st) * 150 - claw.sv * 8) * dt; claw.st += claw.sv * dt;
    claw.wv += (-claw.wob * 260 - claw.wv * 13) * dt; claw.wob += claw.wv * dt;      // the housing rocks when the fingers snap shut
    flap.v += (-flap.a * 90 - flap.v * 9) * dt; flap.a = Math.max(0, flap.a + flap.v * dt);
    deck.jx += (clamp(v / 70, -1, 1) - deck.jx) * Math.min(1, dt * 14);
    deck.jy += ((claw.dig ? 1 : 0) - deck.jy) * Math.min(1, dt * 12);
    for (let i = 0; i < 3; i++) deck.b[i] = Math.max(0, deck.b[i] - dt * 2.2);
    deck.beat = Math.max(0, deck.beat - dt * 5);
    LT.spot += (LT.spotT - LT.spot) * Math.min(1, dt * 6); LT.amb = Math.max(0, LT.amb - dt * 1.5); LT.flash = Math.max(0, LT.flash - dt * 3);
  }
  /* Choose what the claw goes for. The grabbed capsules MUST show the tiers of the event: a matching capsule lying on
   * top of the front row is picked when there is one; failing that one from the row behind, or one comes up from
   * inside the pile. Which of these happens is decoration and never changes what the round wins. */
  function planGrab(lane, res, tiers) {
    const r = PH.r, n = clamp(tiers.length, 1, 3), half = n >= 2 ? 2.3 * r : 1.75 * r;
    const xMin = 1 + half, xMax = PH.wallX - 0.8 - half, laneX = clamp(8 + lane * 12, xMin, xMax);
    const offs = OFFS[n], order = [0, 1, 2];
    const plan = { n, x: laneX, hubY: 0, closed: CLOSED[n], held: [] };
    if (res === 'miss') { plan.closed = 0; plan.hubY = clamp(surfaceY(laneX, 1.4 * r) + 0.3 * r - 2.47 * r, PH.homeY + r * 0.5, PH.floorY - 2.6 * r); return plan; }
    const o0 = offs[order[0]];
    let prim = null, best = 1e9;
    if (tiers[0] < 5) for (const c of pile) {
      if (c.z !== 0 || c.tier !== tiers[0] || !resting(c) || !exposed(c)) continue;
      const hx = c.x - o0[0] * r; if (hx < xMin || hx > xMax) continue;
      const d = Math.abs(c.x - laneX); if (d < best) { best = d; prim = c; }
    }
    if (prim) { plan.x = prim.x - o0[0] * r; plan.hubY = prim.y - o0[1] * r; }
    else plan.hubY = surfaceY(laneX, half) + 0.9 * r - 1.45 * r;
    plan.hubY = clamp(plan.hubY, PH.homeY + r, PH.floorY - 2.6 * r);
    const used = new Set();
    tiers.forEach((t, i) => {
      const o = offs[order[i]], tx = plan.x + o[0] * r, ty = plan.hubY + o[1] * r;
      let c = i === 0 ? prim : null, back = false;
      if (!c && t < 5) {
        let bd = 3.8 * r;
        for (const k of pile) { if (k.z > 1 || k.tier !== t || used.has(k) || !resting(k) || (k.z === 1 && !exposed(k))) continue; const d = Math.hypot(lx(k.x, k.z) - X(tx), ly(k.y, k.z) - Y(ty)) / L.s + k.z * r; if (d < bd) { bd = d; c = k; } }
        back = !!c && c.z > 0;
      }
      if (c) { used.add(c); c.target = true; plan.held.push({ cap: c, tier: t, v: c.v, o, fsx: lx(c.x, c.z), fsy: ly(c.y, c.z), fsc: LS[c.z], sx: lx(c.x, c.z), sy: ly(c.y, c.z), sc: LS[c.z], rot: c.rot, emerg: back, a: 1 }); }
      else plan.held.push({ cap: null, tier: t, v: Math.floor(Math.random() * 3), o, fsx: X(tx), fsy: Y(ty + 1.1 * r), fsc: 0.86, sx: X(tx), sy: Y(ty + 1.1 * r), sc: 0.86, rot: rand(-0.6, 0.6), emerg: true, a: 0 });
    });
    return plan;
  }
  const TM = { travel: 500, descend: 450, close: 190, lift: 550, carry: 490, drop: 320, back: 400, arrive: 270 };
  // One full grab. k scales the durations (FEVER grabs are quicker). The staging never depends on the result:
  // a win and a slip are the same lift, lights and sound until the moment the event says the capsule goes.
  async function grabSeq(lane, res, capsList, k) {
    const my = epoch, tiers = res === 'miss' ? [] : capsList.map(c => (c.ticket ? 5 : c.t));
    const plan = planGrab(lane, res, tiers), x0 = claw.x, y0 = claw.y, o0 = claw.open;
    LT.mode = 'travel'; LT.dir = plan.x < x0 ? -1 : 1; LT.spotT = 0.3; if (MUS.level < 3) MUS.level = 1;
    snd.motor(TM.travel * k * api.speed());
    await tween(TM.travel * k, q => { claw.x = lerp(x0, plan.x, q); claw.open = lerp(o0, 1, Math.min(1, q * 2)); }, E.over);
    if (my !== epoch) return false;
    claw.dig = true; wake(240);
    snd.ratchet(TM.descend * k * api.speed());
    await tween(TM.descend * k, q => { claw.y = lerp(y0, plan.hubY, q); }, E.io);
    if (my !== epoch) return false;
    snd.clack(); claw.wv += 2.6; deck.b[0] = 1; nudgeBack(plan.x, PH.r * 0.12);
    // the claw closes; picked capsules leave the pile and belong to the claw from here on
    for (const h of plan.held) { if (h.cap) { const i = pile.indexOf(h.cap); if (i >= 0) pile.splice(i, 1); } }
    claw.held = plan.held; wake(300);
    await tween(TM.close * k, q => {
      claw.open = lerp(1, plan.closed, E.over(Math.min(1, q * 1.1)));
      const p = clawPose();
      for (const h of plan.held) { const w = clawPoint(p, h.o[0], h.o[1]); h.sx = lerp(h.fsx, X(w[0]), q); h.sy = lerp(h.fsy, Y(w[1]), q); h.sc = lerp(h.fsc, 1, q); if (!h.cap) h.a = q; }
    }, E.out);
    if (my !== epoch) return false;
    for (const h of plan.held) h.fixed = true;
    claw.dig = false; claw.load = plan.held.length; wake(300);
    const topTier = tiers.length ? Math.max(...tiers) : -1;
    if (plan.held.length) {
      claw.lamp = '#7dff9a'; LT.mode = 'lift'; LT.spotT = 0.62; if (MUS.level < 3) MUS.level = 2;
      snd.tension(TM.lift * k * api.speed()); snd.seen(topTier);
      if (topTier >= 2) { LT.amb = 0.55 + (topTier - 2) * 0.2; LT.ambCol = A.TIERS[topTier].glow; }
    } else { claw.lamp = '#ff5d73'; snd.bloop(); LT.mode = 'idle'; }
    let slipped = false;
    await tween(TM.lift * k, q => {
      claw.y = lerp(plan.hubY, PH.homeY, q); LT.k = q;
      if (q > 0.45) for (const h of claw.held) h.emerg = false;
      if (res === 'slip' && !slipped && q > 0.4) { slipped = true; letGo(); snd.bloop(); claw.lamp = '#ff5d73'; LT.mode = 'idle'; LT.spotT = 0.3; if (MUS.level < 3) MUS.level = 1; }
    }, E.io);
    if (my !== epoch) return false;
    if (res !== 'win') {
      const xb = claw.x;
      snd.motor(TM.back * k * api.speed());
      await tween(TM.back * k, q => { claw.x = lerp(xb, PH.homeX, q); claw.open = lerp(plan.closed, 0.3, q); }, E.over);
      refill(); claw.lamp = '#ffd84d'; LT.spotT = 0.12;
      return false;
    }
    const xc = claw.x;
    LT.mode = 'travel'; LT.dir = 1; LT.spotT = 0.45; if (MUS.level < 3) MUS.level = 1;
    snd.motor(TM.carry * k * api.speed());
    await tween(TM.carry * k, q => { claw.x = lerp(xc, PH.homeX, q); }, E.over);
    if (my !== epoch) return false;
    // open over the chute: the capsules fall through the flap and out of the tank
    const held = claw.held, p = clawPose(); claw.held = []; claw.load = 0; claw.lamp = '#ffd84d'; deck.b[1] = 1;
    held.forEach((h, i) => { const w = clawPoint(p, h.o[0], h.o[1]); drops.push({ tier: h.tier, v: h.v, x: w[0], y: w[1], x0: w[0], y0: w[1], rot: h.rot, x1: PH.homeX + (i - (held.length - 1) / 2) * PH.r * 0.6 }); });
    const od = claw.open;
    await tween(TM.drop * k, q => {
      claw.open = lerp(od, 1, Math.min(1, q * 3));
      for (const d of drops) { d.x = lerp(d.x0, d.x1, Math.min(1, q * 1.6)); d.y = lerp(d.y0, PH.floorY + PH.r * 2.8, q * q); d.rot += 0.12; }
      if (q > 0.5 && flap.a < 0.2) flap.v = 9;
    }, E.lin);
    drops.length = 0;
    held.forEach((h, i) => snd.thunk(i));
    refill(); LT.mode = 'idle'; LT.spotT = 0.12;
    tween(500, q => { claw.open = lerp(1, 0.3, q); });
    return true;
  }
  function letGo() {
    const p = clawPose();
    for (const h of claw.held) { const w = clawPoint(p, h.o[0], h.o[1]), c = newCap(w[0], w[1], h.tier, 0); c.px = w[0] - rand(-0.3, 0.3); c.py = w[1] - 0.1; c.rot = h.rot; c.v = h.v; pile.push(c); }
    claw.held = []; claw.load = 0; wake(360);
  }

  /* ---------- Prize bay: capsules hop onto their pedestals, twist open, the toy pops out with its hang-tag ---------- */
  const money = units => api.winMoney(units);
  function setTotal(units, winning, count = true) {
    const from = tray.total; tray.total = units; tray.win = winning;
    if (!count || api.reduced) { tray.shown = units; tray.text = money(units); return; }
    tray.pulse = winning ? 1 : 0.3;
    tween(380, q => { tray.shown = from + (units - from) * q; tray.text = q >= 1 ? money(units) : api.money(Math.round(tray.shown)); }, E.out);
  }
  function clearTray(ms = 220) {
    const old = tray.items; if (!old.length) return;
    tray.items = [];
    const ghost = { items: old, a: 1 }; tray.ghost = ghost;
    tween(ms, q => { ghost.a = 1 - q; }).then(() => { if (tray.ghost === ghost) tray.ghost = null; });
  }
  function placeItem(it, sl) { it.sl = sl; it.R = sl.s * 0.33; it.rx = sl.cx; it.ry = sl.pedTop - it.R * 0.9; }
  async function trayArrive(capsList, k) {
    const n = capsList.length, slots = slotsFor(n), b = L.bay;
    tray.items = capsList.map((c, i) => {
      const it = { tier: c.ticket ? 5 : c.t, toy: c.ticket ? 15 : c.toy, ticket: !!c.ticket, v: c.v || 0, x: 0, y: 0, rot: 0, a: 0, stage: 0, wob: 0, sq: 0, toyK: 0, raysK: 0, tagK: 0, tag: '', mult: 1, multK: 0, bump: 0, swing: 0, swingV: 0, lid: null, bowl: null, t0: 0, ph: Math.random() * 10, opened: false, var: i };
      placeItem(it, slots[i]);
      it.sx = L.portrait ? Math.min(b.x + b.w - it.R, X(PH.homeX)) : b.x - it.R; it.sy = L.portrait ? b.y - it.R : slots[i].baseY - it.R;
      it.x = it.sx; it.y = it.sy;
      return it;
    });
    snd.roll();
    await Promise.all(tray.items.map((it, i) => (async () => {
      await wait(i * 70 * k);
      const hop = Math.max(it.R * 1.2, Math.abs(it.sy - it.ry) * 0.5 + it.R);
      await tween(TM.arrive * k, q => {
        it.a = Math.min(1, q * 4);
        it.x = lerp(it.sx, it.rx, E.out(q));
        it.y = lerp(it.sy, it.ry, q) - Math.sin(q * PI) * hop;
        it.rot = (it.x - it.rx) / it.R;
      }, E.lin);
      it.rot = 0; it.x = it.rx; it.y = it.ry; snd.land();
      tween(190 * k, q => { it.sq = Math.sin(q * PI) * 0.2 * (1 - q); });        // squash on landing
    })()));
  }
  // Opens one capsule. x = FEVER multiplier applied to its tag (1 outside FEVER).
  async function openItem(it, ctx, x, k, step) {
    if (!it || it.opened) return;
    it.opened = true;
    snd.twist();
    await tween(190 * k, q => { it.wob = Math.sin(q * PI * 3) * (0.5 + q * 0.6); it.sq = -q * 0.1; }, E.lin);   // twist, winding up
    it.wob = 0; it.sq = 0; it.stage = 1; it.t0 = performance.now();
    snd.pop(it.tier); if (it.ticket) snd.ticket(); else snd.jingle(it.tier, step);
    burst(it.sl.cx, it.ry, it.tier, it.R);
    if (it.tier >= 4) { kick(1); hitStop(70); LT.flash = 1; }
    if (it.tier >= 2) { LT.amb = Math.max(LT.amb, 0.3 + (it.tier - 2) * 0.2); LT.ambCol = A.TIERS[it.tier].glow; }
    const sl = it.sl, R = it.R, side = sl.row ? sl.pw * 0.5 + R * 0.3 : sl.s * 0.5;
    it.lid = { x: it.x, y: it.y, rot: 0, a: 1, s: 1, x1: sl.cx + side, y1: sl.baseY - R * 0.36, r1: 2.5, x0: it.x, y0: it.y };
    it.bowl = { x: it.x, y: it.y, rot: 0, a: 1, s: 1, x1: sl.cx - side, y1: sl.baseY - R * 0.34, r1: -0.38, x0: it.x, y0: it.y };
    if (!it.ticket) { it.tag = money(ctx.units(it.v)); collect(it); }
    await tween(340 * k, q => {
      it.toyK = q; it.raysK = q;
      for (const [h, up] of [[it.lid, 2.4], [it.bowl, 0.9]]) { h.x = lerp(h.x0, h.x1, E.out(q)); h.y = lerp(h.y0, h.y1, q) - Math.sin(q * PI) * R * up; h.rot = h.r1 * E.out(q); h.s = lerp(1, sl.row ? 0.6 : 0.5, q); }
    }, E.lin);
    it.stage = 2;
    if (it.tag) { it.swingV = 4; snd.tag(); tween(200 * k, q => { it.tagK = q; }, E.out); }
    if (x > 1 && !it.ticket) {
      await wait(110 * k);
      it.mult = x; it.tag = money(ctx.units(it.v * x)); it.bump = 1; it.swingV += 3; snd.stamp(x);
      await tween(210 * k, q => { it.multK = q; it.bump = 1 - q; }, E.out);
    }
  }

  /* ---------- Particles (pooled) ---------- */
  const fx = [], fxPool = [];
  function spawn(o) { const p = fxPool.pop() || {}; p.kind = 0; p.g = 0; p.rot = 0; p.vr = 0; p.life = 0; p.star = false; p.w = 0; Object.assign(p, o); if (fx.length < 520) fx.push(p); else fxPool.push(p); return p; }
  function burst(x, y, tier, R) {
    if (api.reduced) return;
    const n = [6, 10, 16, 28, 46, 44][tier], cols = A.TIERS[tier].spark;
    for (let i = 0; i < n; i++) {
      const a = rand(0, TAU), sp = rand(0.6, 2.2) * R * (tier >= 3 ? 3.2 : 2.2);
      spawn({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - R * 1.5, g: R * 5, max: rand(0.45, 0.9) + tier * 0.08, s: rand(0.12, 0.3) * R * (tier >= 3 ? 1.25 : 1), col: cols[i % cols.length], star: tier >= 2 && i % 2 === 0 });
    }
    spawn({ kind: 1, x, y, max: 0.45 + tier * 0.05, s: R * (2.2 + tier * 0.7), col: cols[0] });
  }
  function confetti(n, fromTop = true) {
    if (api.reduced || !L) return;
    const sc = L.tiny ? 0.55 : 1;
    for (let i = 0; i < n; i++) {
      if (fromTop) spawn({ kind: 2, x: rand(0, L.W), y: rand(-L.H * 0.2, 0), vx: rand(-30, 30), vy: rand(60, 170), g: 120, max: rand(1.3, 2.4), s: rand(3, 7) * sc, col: A.PRISM[i % 6], vr: rand(-8, 8), rot: rand(0, TAU) });
      else { const left = i % 2 === 0, a = left ? rand(-1.2, -0.35) : rand(-PI + 0.35, -PI + 1.2), sp = rand(0.5, 1.15) * L.H * 1.25; spawn({ kind: 2, x: left ? L.marq.x + 6 : L.marq.x + L.marq.w - 6, y: L.marq.y + L.marq.h, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: L.H * 1.5, max: rand(1.2, 2.2), s: rand(3, 7) * sc, col: A.PRISM[i % 6], vr: rand(-9, 9), rot: rand(0, TAU) }); }
    }
  }
  // prize tickets streaming out of the cabinet's ticket slot
  function tickets(n, tier) {
    if (api.reduced || !L) return;
    const cols = [['#ff8fc0', '#ffd0e6'], ['#8fe9ff', '#b9a2ff'], ['#ffd257', '#fff3a8'], A.PRISM][tier] || A.PRISM, sx = L.W * 0.5, sy = L.base.y + L.base.h * 0.4, w = clamp(L.W * 0.034, 9, 26);
    for (let i = 0; i < n; i++) { const a = rand(-PI * 0.86, -PI * 0.14), sp = rand(0.55, 1.2) * L.H * 1.5; spawn({ kind: 3, x: sx + rand(-w, w), y: sy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: L.H * 1.9, max: rand(1.1, 2), w, col: cols[i % cols.length], vr: rand(-7, 7), rot: rand(-0.6, 0.6) }); }
  }
  function firework(x, y, col) {
    if (api.reduced) return;
    const n = L.tiny ? 14 : 30, R = Math.min(L.W, L.H) * 0.3;
    for (let i = 0; i < n; i++) { const a = i * TAU / n + rand(-0.1, 0.1), sp = rand(0.7, 1) * R * 2; spawn({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: R * 1.2, max: rand(0.6, 1), s: R * 0.035, col: i % 3 ? col : '#ffffff', star: i % 2 === 0, drag: 2.6 }); }
    spawn({ kind: 1, x, y, max: 0.5, s: R * 0.9, col });
    snd.firework();
  }

  /* ---------- Session shelf (decoration only: toys found since the game was opened) ---------- */
  function buildShelf(kind) {
    const box = api.h('div', { class: 'gg-shelf gg-shelf-' + kind, 'aria-label': 'Toys found since the game was opened' });
    for (let t = 0; t < 5; t++) for (let k = 0; k < 3; k++) {
      const id = t * 3 + k, cell = api.h('div', { class: 'gg-cell', 'data-toy': id, 'data-tier': t, title: A.TOYS[id] }), c = api.h('canvas', { width: 72, height: 72 });
      A.drawToy(c.getContext('2d'), id, 36, 36, 70);
      cell.append(c, api.h('i'), api.h('b', { text: '' })); box.append(cell);
    }
    return box;
  }
  function markShelf(id) {
    document.querySelectorAll('.gg-cell[data-toy="' + id + '"]').forEach(el => {
      el.classList.add('on'); el.querySelector('b').textContent = shelf[id] > 1 ? '×' + shelf[id] : '';
      el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
    });
    snd.collect();
  }
  // A found toy flies from the bay to its place on the shelf, which then fills in.
  function collect(it) {
    const id = it.toy; if (id < 0 || id > 14) return;
    shelf[id]++;
    const cell = [...document.querySelectorAll('.gg-cell[data-toy="' + id + '"]')].find(el => el.offsetParent !== null);
    if (!cell || api.reduced || api.speed() < 0.2 || !stage.animate) { markShelf(id); return; }
    const sr = stage.getBoundingClientRect(), cr = cell.getBoundingClientRect(), sz = clamp(it.sl.s * 0.7, 18, 90);
    const fly = api.h('canvas', { class: 'gg-fly', width: 96, height: 96 });
    A.drawToy(fly.getContext('2d'), id, 48, 48, 94);
    Object.assign(fly.style, { width: sz + 'px', height: sz + 'px', left: (sr.left + it.sl.cx - sz / 2) + 'px', top: (sr.top + it.sl.cy - sz / 2) + 'px' });
    document.body.append(fly);
    const dx = cr.left + cr.width / 2 - (sr.left + it.sl.cx), dy = cr.top + cr.height / 2 - (sr.top + it.sl.cy), sc = Math.max(0.2, cr.width / sz);
    const an = fly.animate([
      { transform: 'translate(0,0) scale(.4) rotate(0deg)', opacity: 0, offset: 0 }, { transform: `translate(${dx * 0.08}px,${-sz * 0.5}px) scale(1.05) rotate(-8deg)`, opacity: 1, offset: 0.3 },
      { transform: `translate(${dx}px,${dy}px) scale(${sc}) rotate(360deg)`, opacity: 1, offset: 1 }], { duration: Math.max(60, 720 * api.speed()), delay: Math.max(0, 330 * api.speed()), easing: 'cubic-bezier(.5,0,.3,1)', fill: 'both' });
    const done = () => { fly.remove(); markShelf(id); };
    an.onfinish = done; an.oncancel = done;
  }

  /* ---------- Static layers (redrawn on resize or when the cabinet changes) ---------- */
  const SK = () => SKINS[skin];
  function trimStyle(c, x0, x1, K) {
    if (K.trim !== 'prism') return K.trim;
    const gr = c.createLinearGradient(x0, 0, x1, 0); A.PRISM.forEach((p, i) => gr.addColorStop(i / (A.PRISM.length - 1), p)); return gr;
  }
  const vgrad = (c, y0, y1, cols) => { const gr = c.createLinearGradient(0, y0, 0, y1); cols.forEach((p, i) => gr.addColorStop(i / (cols.length - 1), p)); return gr; };
  const hgrad = (c, x0, x1, cols) => { const gr = c.createLinearGradient(x0, 0, x1, 0); cols.forEach((p, i) => gr.addColorStop(i / (cols.length - 1), p)); return gr; };
  // a lit tube: additive halo, then the hot core
  function tube(c, x0, y0, x1, y1, col, w) {
    c.save(); c.lineCap = 'round'; c.globalCompositeOperation = 'lighter';
    c.strokeStyle = A.rgba(col, 0.16); c.lineWidth = w * 7; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
    c.strokeStyle = A.rgba(col, 0.4); c.lineWidth = w * 3; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
    c.restore();
    c.lineCap = 'round'; c.strokeStyle = col; c.lineWidth = w * 1.3; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = w * 0.5; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
  }
  function tankGeom() {
    const t = L.tank, s = L.s, inL = X(50 - 50 * LS[2]) + s * 0.6, inR = X(50 + 50 * LS[2]) - s * 0.6, top = t.y + t.h * 0.06, bot = Y(PH.floorY - PH.lift[2]) + s * 0.4;
    return { t, s, bw: { x: inL, y: top, w: inR - inL, h: bot - top } };
  }
  function edgeShade(c, r, a) {
    const d = Math.max(4, Math.min(r.w, r.h) * 0.08);
    let gr = c.createLinearGradient(0, r.y, 0, r.y + d); gr.addColorStop(0, `rgba(0,0,0,${a})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = gr; c.fillRect(r.x, r.y, r.w, d);
    gr = c.createLinearGradient(r.x, 0, r.x + d, 0); gr.addColorStop(0, `rgba(0,0,0,${a * 0.8})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = gr; c.fillRect(r.x, r.y, d, r.h);
    gr = c.createLinearGradient(r.x + r.w, 0, r.x + r.w - d, 0); gr.addColorStop(0, `rgba(0,0,0,${a * 0.8})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = gr; c.fillRect(r.x + r.w - d, r.y, d, r.h);
  }
  function drawBack() {
    const c = g.back, K = SK(), b = L.bay, { t, s, bw } = tankGeom();
    c.clearRect(0, 0, L.W, L.H);
    /* ----- the tank: a box seen from the front, lit from its ceiling ----- */
    c.save(); A.rr(c, t.x, t.y, t.w, t.h, L.rad); c.clip();
    const P = (pts, fill) => { c.fillStyle = fill; A.poly(c, pts); c.fill(); };
    c.fillStyle = K.side[1]; c.fillRect(t.x, t.y, t.w, t.h);
    // back wall
    c.fillStyle = vgrad(c, bw.y, bw.y + bw.h, K.wall); c.fillRect(bw.x, bw.y, bw.w, bw.h);
    c.save(); c.beginPath(); c.rect(bw.x, bw.y, bw.w, bw.h); c.clip();
    const mx = bw.x + bw.w / 2, tw = Math.max(1.2, s * 0.55);
    if (K.deco === 'pop') {
      const sp = Math.max(8, bw.w / 15); c.fillStyle = 'rgba(255,143,192,.22)';
      for (let y = bw.y + sp * 0.6, row = 0; y < bw.y + bw.h; y += sp, row++) for (let x = bw.x + (row % 2 ? sp : sp / 2); x < bw.x + bw.w; x += sp) { A.ell(c, x, y, sp * 0.09, sp * 0.09); c.fill(); }
      // a round mirror that catches the room
      const mr = Math.min(bw.w * 0.3, bw.h * 0.36), my = bw.y + bw.h * 0.42;
      c.fillStyle = 'rgba(190,120,170,.3)'; A.ell(c, mx + mr * 0.06, my + mr * 0.08, mr * 1.08, mr * 1.08); c.fill();
      let gr = c.createLinearGradient(mx - mr, my - mr, mx + mr, my + mr); gr.addColorStop(0, '#f2fffb'); gr.addColorStop(0.5, '#bdeee0'); gr.addColorStop(1, '#e9d2f7');
      c.fillStyle = gr; A.ell(c, mx, my, mr, mr); c.fill();
      c.save(); A.ell(c, mx, my, mr, mr); c.clip();
      for (const [dx, dy, q, col] of [[-0.5, 0.62, 0.36, '#ff8fc0'], [0.1, 0.78, 0.4, '#8fd0ff'], [0.6, 0.6, 0.34, '#b98bff'], [-0.1, 0.5, 0.26, '#8ff0b8']]) { gr = c.createRadialGradient(mx + dx * mr, my + dy * mr, 0, mx + dx * mr, my + dy * mr, q * mr); gr.addColorStop(0, A.rgba(col, 0.55)); gr.addColorStop(1, A.rgba(col, 0)); c.fillStyle = gr; c.fillRect(mx - mr, my - mr, mr * 2, mr * 2); }
      c.fillStyle = 'rgba(255,255,255,.5)'; A.poly(c, [[mx - mr * 0.9, my - mr], [mx - mr * 0.45, my - mr], [mx - mr * 1.05, my + mr * 0.5], [mx - mr * 1.2, my + mr * 0.2]]); c.fill();
      c.fillStyle = 'rgba(255,255,255,.3)'; A.poly(c, [[mx - mr * 0.25, my - mr], [mx - mr * 0.1, my - mr], [mx - mr * 0.8, my + mr], [mx - mr * 0.95, my + mr]]); c.fill();
      c.restore();
      c.strokeStyle = '#ffffff'; c.lineWidth = mr * 0.11; A.ell(c, mx, my, mr, mr); c.stroke();
      c.strokeStyle = K.trim; c.lineWidth = mr * 0.045; A.ell(c, mx, my, mr * 1.07, mr * 1.07); c.stroke();
      tube(c, bw.x + bw.w * 0.09, bw.y + bw.h * 0.1, bw.x + bw.w * 0.09, bw.y + bw.h * 0.82, K.tube[0], tw);
      tube(c, bw.x + bw.w * 0.91, bw.y + bw.h * 0.1, bw.x + bw.w * 0.91, bw.y + bw.h * 0.82, K.tube[1], tw);
    } else if (K.deco === 'deluxe') {
      // three mirror panels in gold frames, a deco fan rising behind the pile
      const pw = bw.w * 0.24, ph = bw.h * 0.74, py = bw.y + bw.h * 0.08;
      for (let i = 0; i < 3; i++) {
        const px = bw.x + bw.w * (0.07 + i * 0.31);
        let gr = c.createLinearGradient(px, py, px + pw, py + ph); gr.addColorStop(0, '#3c58c8'); gr.addColorStop(0.5, '#182a82'); gr.addColorStop(1, '#2a44aa');
        c.fillStyle = gr; A.rr(c, px, py, pw, ph, pw * 0.5); c.fill();
        c.save(); A.rr(c, px, py, pw, ph, pw * 0.5); c.clip(); c.fillStyle = 'rgba(255,255,255,.14)'; A.poly(c, [[px + pw * 0.1, py], [px + pw * 0.42, py], [px - pw * 0.1, py + ph], [px - pw * 0.4, py + ph]]); c.fill(); c.restore();
        c.strokeStyle = K.trim; c.lineWidth = Math.max(1.2, s * 0.5); A.rr(c, px, py, pw, ph, pw * 0.5); c.stroke();
        c.strokeStyle = 'rgba(255,241,194,.5)'; c.lineWidth = Math.max(0.8, s * 0.2); A.rr(c, px + s, py + s, pw - s * 2, ph - s * 2, pw * 0.5); c.stroke();
      }
      c.strokeStyle = 'rgba(245,196,81,.4)'; c.lineWidth = Math.max(1, s * 0.3);
      for (let i = 1; i <= 6; i++) { c.beginPath(); c.arc(mx, bw.y + bw.h, bw.w * 0.085 * i, PI, TAU); c.stroke(); }
      for (let i = 0; i <= 8; i++) { const a = PI + i * PI / 8; c.beginPath(); c.moveTo(mx, bw.y + bw.h); c.lineTo(mx + Math.cos(a) * bw.w * 0.51, bw.y + bw.h + Math.sin(a) * bw.w * 0.51); c.stroke(); }
      tube(c, bw.x + bw.w * 0.035, bw.y + bw.h * 0.08, bw.x + bw.w * 0.035, bw.y + bw.h * 0.84, K.tube[0], tw);
      tube(c, bw.x + bw.w * 0.965, bw.y + bw.h * 0.08, bw.x + bw.w * 0.965, bw.y + bw.h * 0.84, K.tube[0], tw);
    } else {
      const hz = bw.y + bw.h * 0.56;
      let gr = c.createLinearGradient(0, hz - bw.h * 0.34, 0, hz + bw.h * 0.1); gr.addColorStop(0, 'rgba(255,77,240,0)'); gr.addColorStop(1, 'rgba(255,77,240,.42)');
      c.fillStyle = gr; c.fillRect(bw.x, bw.y, bw.w, hz - bw.y);
      gr = c.createRadialGradient(mx, hz, 0, mx, hz, bw.w * 0.33); gr.addColorStop(0, 'rgba(255,226,140,.95)'); gr.addColorStop(0.45, 'rgba(255,110,200,.55)'); gr.addColorStop(1, 'rgba(255,77,240,0)');
      c.fillStyle = gr; c.beginPath(); c.arc(mx, hz, bw.w * 0.33, PI, TAU); c.fill();
      c.fillStyle = K.wall[1]; for (let i = 0; i < 4; i++) c.fillRect(mx - bw.w * 0.34, hz - bw.w * (0.035 + i * 0.05), bw.w * 0.68, bw.w * (0.008 + i * 0.002));
      c.lineWidth = Math.max(1, s * 0.22);
      for (let i = -10; i <= 10; i++) { c.strokeStyle = 'rgba(111,243,255,.5)'; c.beginPath(); c.moveTo(mx + i * bw.w * 0.035, hz); c.lineTo(mx + i * bw.w * 0.22, bw.y + bw.h); c.stroke(); }
      for (let i = 0; i < 7; i++) { const y = hz + Math.pow(i / 7, 1.8) * (bw.y + bw.h - hz); c.strokeStyle = `rgba(255,77,240,${0.3 + i * 0.07})`; c.beginPath(); c.moveTo(bw.x, y); c.lineTo(bw.x + bw.w, y); c.stroke(); }
      tube(c, bw.x + bw.w * 0.06, bw.y + bw.h * 0.1, bw.x + bw.w * 0.94, bw.y + bw.h * 0.1, K.tube[1], tw);
      tube(c, bw.x + bw.w * 0.14, bw.y + bw.h * 0.2, bw.x + bw.w * 0.86, bw.y + bw.h * 0.2, K.tube[0], tw);
    }
    c.restore();
    // side walls in perspective, with panel seams
    for (const sd of [0, 1]) {
      const xo = sd ? t.x + t.w : t.x, xi = sd ? bw.x + bw.w : bw.x;
      P([[xo, t.y], [xi, bw.y], [xi, bw.y + bw.h], [xo, t.y + t.h]], hgrad(c, xo, xi, [K.side[1], K.side[0]]));
      c.strokeStyle = 'rgba(255,255,255,.14)'; c.lineWidth = Math.max(0.8, s * 0.2);
      for (const f of [0.34, 0.68]) { c.beginPath(); c.moveTo(lerp(xo, xi, f), lerp(t.y, bw.y, f)); c.lineTo(lerp(xo, xi, f), lerp(t.y + t.h, bw.y + bw.h, f)); c.stroke(); }
      c.strokeStyle = 'rgba(0,0,0,.28)'; c.lineWidth = Math.max(1, s * 0.3); c.beginPath(); c.moveTo(xi, bw.y); c.lineTo(xi, bw.y + bw.h); c.stroke();
    }
    // ceiling with its light bar
    P([[t.x, t.y], [t.x + t.w, t.y], [bw.x + bw.w, bw.y], [bw.x, bw.y]], K.ceil);
    c.fillStyle = 'rgba(0,0,0,.2)'; A.rr(c, t.x + t.w * 0.17, t.y + (bw.y - t.y) * 0.24, t.w * 0.66, (bw.y - t.y) * 0.5, 3); c.fill();
    c.fillStyle = '#ffffff'; A.rr(c, t.x + t.w * 0.19, t.y + (bw.y - t.y) * 0.32, t.w * 0.62, (bw.y - t.y) * 0.3, 3); c.fill();
    c.save(); c.globalCompositeOperation = 'lighter';
    let gr = c.createRadialGradient(t.x + t.w / 2, t.y, 0, t.x + t.w / 2, t.y, t.w * 0.75); gr.addColorStop(0, 'rgba(255,255,255,.3)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = gr; c.fillRect(t.x, t.y, t.w, t.h * 0.8); c.restore();
    // floor: receding boards and a contact shadow where it meets the back wall
    const fb = bw.y + bw.h, ff = t.y + t.h;
    P([[bw.x, fb], [bw.x + bw.w, fb], [t.x + t.w, ff], [t.x, ff]], vgrad(c, fb, ff, K.floor));
    c.strokeStyle = 'rgba(255,255,255,.16)'; c.lineWidth = Math.max(0.8, s * 0.2);
    for (let i = 1; i < 8; i++) { const f = i / 8; c.beginPath(); c.moveTo(lerp(bw.x, bw.x + bw.w, f), fb); c.lineTo(lerp(t.x, t.x + t.w, f), ff); c.stroke(); }
    gr = c.createLinearGradient(0, fb - t.h * 0.06, 0, fb + t.h * 0.03); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.7, 'rgba(0,0,0,.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = gr; c.fillRect(t.x, fb - t.h * 0.06, t.w, t.h * 0.09);
    // chute bin: back panel and its side seen in perspective
    const wxF = X(PH.wallX + 0.8), wyF = Y(PH.wallTop), wxB = lx(PH.wallX + 0.8, 2), wyB = ly(PH.wallTop, 2);
    P([[wxB, wyB], [t.x + t.w, wyB], [t.x + t.w, ff], [wxB, ff]], vgrad(c, wyB, ff, K.chute));
    P([[wxB, wyB], [wxF, wyF], [wxF, ff], [wxB, fb]], 'rgba(255,255,255,.1)');
    c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = Math.max(1, s * 0.3); c.beginPath(); c.moveTo(wxB, wyB); c.lineTo(wxF, wyF); c.moveTo(wxB, wyB); c.lineTo(wxB, fb); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,.3)'; c.lineWidth = Math.max(1.4, s * 0.6); c.lineCap = 'round'; c.lineJoin = 'round';
    const cmx = (wxF + t.x + t.w) / 2, cw = (t.x + t.w - wxF) * 0.22;
    for (let i = 0; i < 3; i++) { const yy = wyF + (ff - wyF) * (0.24 + i * 0.2); c.globalAlpha = 0.4 + i * 0.25; c.beginPath(); c.moveTo(cmx - cw, yy); c.lineTo(cmx, yy + cw * 0.8); c.lineTo(cmx + cw, yy); c.stroke(); }
    c.globalAlpha = 1;
    gr = c.createLinearGradient(0, ff - s * 10, 0, ff); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.8)');
    c.fillStyle = gr; c.fillRect(wxF, ff - s * 10, t.x + t.w - wxF, s * 10);
    // gantry rail with end brackets
    const ry = Y(PH.railY), rh = Math.max(3, s * 1.9);
    c.fillStyle = 'rgba(0,0,0,.22)'; c.fillRect(t.x, ry + rh * 0.5, t.w, rh * 0.7);
    c.fillStyle = K.railEdge; A.rr(c, t.x - 2, ry - rh / 2 - 1, t.w + 4, rh + 2, 2); c.fill();
    c.fillStyle = vgrad(c, ry - rh / 2, ry + rh / 2, [K.rail[0], K.rail[1]]); c.fillRect(t.x, ry - rh / 2, t.w, rh);
    c.fillStyle = 'rgba(255,255,255,.7)'; c.fillRect(t.x, ry - rh * 0.36, t.w, rh * 0.14);
    c.fillStyle = 'rgba(0,0,0,.28)'; for (let x = t.x + s * 3; x < t.x + t.w; x += s * 5) c.fillRect(x, ry + rh * 0.05, s * 2.4, rh * 0.22);
    for (const bx of [t.x + s * 1.2, t.x + t.w - s * 4.2]) { c.fillStyle = K.railEdge; A.rr(c, bx, ry - rh * 1.2, s * 3, rh * 2.4, s * 0.6); c.fill(); c.fillStyle = K.rail[0]; A.rr(c, bx + s * 0.5, ry - rh * 0.9, s * 2, rh * 1.8, s * 0.4); c.fill(); }
    c.restore();

    /* ----- the prize bay: a little stage with drapes, footlights and the round total above it ----- */
    c.save(); A.rr(c, b.x, b.y, b.w, b.h, L.rad); c.clip();
    c.fillStyle = vgrad(c, b.y, b.y + b.h, K.bay); c.fillRect(b.x, b.y, b.w, b.h);
    const sl0 = slotsFor(1)[0], fy = sl0.row ? sl0.baseY - sl0.pedH * 0.45 : b.y + b.h * 0.74;
    L.bayFloorY = fy;
    const folds = Math.max(6, Math.round(b.w / Math.max(14, L.s * 6)));
    for (let i = 0; i < folds; i++) {
      const x0 = b.x + b.w * i / folds, fw = b.w / folds;
      gr = c.createLinearGradient(x0, 0, x0 + fw, 0); gr.addColorStop(0, 'rgba(0,0,0,.2)'); gr.addColorStop(0.45, A.rgba(K.drape, 0.11)); gr.addColorStop(1, 'rgba(0,0,0,.2)');
      c.fillStyle = gr; c.fillRect(x0, b.y, fw, fy - b.y);
    }
    gr = c.createLinearGradient(0, fy - (fy - b.y) * 0.2, 0, fy); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.4)'); c.fillStyle = gr; c.fillRect(b.x, fy - (fy - b.y) * 0.2, b.w, (fy - b.y) * 0.2);
    c.fillStyle = vgrad(c, fy, b.y + b.h, K.bayFloor); c.fillRect(b.x, fy, b.w, b.y + b.h - fy);
    c.fillStyle = 'rgba(255,255,255,.3)'; c.fillRect(b.x, fy, b.w, Math.max(1, L.s * 0.3));
    c.strokeStyle = 'rgba(0,0,0,.14)'; c.lineWidth = Math.max(0.8, L.s * 0.2);
    for (let i = 1; i < 7; i++) { const f = i / 7, cxm = b.x + b.w / 2; c.beginPath(); c.moveTo(lerp(cxm - b.w * 0.42, cxm + b.w * 0.42, f), fy); c.lineTo(lerp(b.x - b.w * 0.2, b.x + b.w * 1.2, f), b.y + b.h); c.stroke(); }
    // footlights along the front of the stage
    if (!L.tiny) { const nf = Math.max(5, Math.round(b.w / (L.s * 7))); for (let i = 0; i < nf; i++) { const x = b.x + b.w * (i + 0.5) / nf, y = b.y + b.h - L.s * 1.4, q = L.s * 0.8; gr = c.createRadialGradient(x, y, 0, x, y, q * 5); gr.addColorStop(0, 'rgba(255,244,190,.5)'); gr.addColorStop(1, 'rgba(255,244,190,0)'); c.fillStyle = gr; c.fillRect(x - q * 5, y - q * 5, q * 10, q * 10); c.fillStyle = '#fff6cc'; A.ell(c, x, y, q, q); c.fill(); } }
    // where capsules come in
    if (L.portrait) { const px = Math.min(b.x + b.w - L.s * 9, X(PH.homeX)); c.fillStyle = 'rgba(0,0,0,.7)'; A.rr(c, px - L.s * 8, b.y - 4, L.s * 16, L.s * 3 + 4, L.s * 1.5); c.fill(); }
    else { c.fillStyle = 'rgba(0,0,0,.7)'; A.ell(c, b.x, fy + (b.y + b.h - fy) * 0.35, b.w * 0.045, (b.y + b.h - fy) * 0.3); c.fill(); c.strokeStyle = 'rgba(255,255,255,.25)'; c.lineWidth = Math.max(1, L.s * 0.3); c.stroke(); }
    // total display: a dark glass panel
    const tb = L.totalBox, tr = Math.min(tb.h * 0.28, 14);
    c.fillStyle = 'rgba(0,0,0,.35)'; A.rr(c, tb.x - 2, tb.y - 1, tb.w + 4, tb.h + 5, tr + 2); c.fill();
    c.fillStyle = K.led; A.rr(c, tb.x, tb.y, tb.w, tb.h, tr); c.fill();
    c.save(); A.rr(c, tb.x, tb.y, tb.w, tb.h, tr); c.clip();
    c.fillStyle = 'rgba(255,255,255,.035)'; for (let y = tb.y; y < tb.y + tb.h; y += 3) c.fillRect(tb.x, y, tb.w, 1);
    gr = c.createLinearGradient(0, tb.y, 0, tb.y + tb.h * 0.5); gr.addColorStop(0, 'rgba(255,255,255,.14)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(tb.x, tb.y, tb.w, tb.h * 0.5);
    c.restore();
    c.strokeStyle = trimStyle(c, tb.x, tb.x + tb.w, K); c.lineWidth = Math.max(1, L.s * 0.35); A.rr(c, tb.x, tb.y, tb.w, tb.h, tr); c.stroke();
    edgeShade(c, b, 0.3);
    c.restore();
  }
  function windowsPath(c) {
    c.beginPath(); c.rect(0, 0, L.W, L.H);
    for (const r of [L.tank, L.bay]) { const q = Math.min(L.rad, r.w / 2, r.h / 2); c.moveTo(r.x + q, r.y); c.arcTo(r.x, r.y, r.x, r.y + r.h, q); c.arcTo(r.x, r.y + r.h, r.x + r.w, r.y + r.h, q); c.arcTo(r.x + r.w, r.y + r.h, r.x + r.w, r.y, q); c.arcTo(r.x + r.w, r.y, r.x, r.y, q); c.closePath(); }
  }
  function drawFront() {
    const c = g.front, K = SK(), t = L.tank, b = L.bay, s = L.s, W = L.W, H = L.H;
    c.clearRect(0, 0, W, H);
    /* glass over the tank: front lip of the floor, the divider, reflections, smudges, inner shade */
    c.save(); A.rr(c, t.x, t.y, t.w, t.h, L.rad); c.clip();
    const lipY = Y(PH.floorY + 0.5), lipH = t.y + t.h - lipY;
    c.fillStyle = vgrad(c, lipY, t.y + t.h, [A.lite(K.floor[0], 0.35), K.floor[1]]); c.fillRect(t.x, lipY, X(PH.wallX - 0.8) - t.x, lipH);
    c.fillStyle = 'rgba(255,255,255,.65)'; c.fillRect(t.x, lipY, X(PH.wallX - 0.8) - t.x, Math.max(1, lipH * 0.16));
    c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(t.x, t.y + t.h - Math.max(1, lipH * 0.22), X(PH.wallX - 0.8) - t.x, lipH * 0.22);
    const wx = X(PH.wallX - 0.8), ww = s * 1.6, wy = Y(PH.wallTop);
    c.fillStyle = 'rgba(255,255,255,.32)'; A.rr(c, wx, wy, ww, t.h, ww / 2); c.fill();
    c.fillStyle = 'rgba(255,255,255,.8)'; c.fillRect(wx + ww * 0.18, wy + ww, Math.max(1, ww * 0.18), t.h);
    c.fillStyle = 'rgba(255,255,255,.1)'; c.fillRect(wx + ww, wy + ww * 0.5, t.x + t.w - wx - ww, Math.max(1, s * 0.5));
    edgeShade(c, t, 0.28);
    c.fillStyle = `rgba(255,255,255,${K.glass})`;
    A.poly(c, [[t.x + t.w * 0.05, t.y], [t.x + t.w * 0.26, t.y], [t.x + t.w * 0.02, t.y + t.h * 0.8], [t.x, t.y + t.h * 0.8], [t.x, t.y + t.h * 0.18]]); c.fill();
    c.fillStyle = `rgba(255,255,255,${K.glass * 0.5})`;
    A.poly(c, [[t.x + t.w * 0.31, t.y], [t.x + t.w * 0.37, t.y], [t.x + t.w * 0.08, t.y + t.h], [t.x + t.w * 0.02, t.y + t.h]]); c.fill();
    A.poly(c, [[t.x + t.w * 0.94, t.y + t.h * 0.3], [t.x + t.w, t.y + t.h * 0.14], [t.x + t.w, t.y + t.h * 0.5], [t.x + t.w * 0.82, t.y + t.h]]); c.fill();
    if (!L.tiny) {                               // the odd smudge and a few sparkles: this glass has been touched
      c.fillStyle = 'rgba(255,255,255,.045)';
      for (const [fx0, fy0, rx, ry, rot] of [[0.62, 0.3, 0.09, 0.03, -0.5], [0.2, 0.62, 0.07, 0.025, 0.4], [0.74, 0.7, 0.05, 0.02, -0.2]]) { A.ell(c, t.x + t.w * fx0, t.y + t.h * fy0, t.w * rx, t.w * ry, rot); c.fill(); }
      for (const [fx0, fy0, q] of [[0.9, 0.09, 1.6], [0.12, 0.14, 1.2], [0.56, 0.06, 1], [0.95, 0.62, 0.9]]) A.glint(c, t.x + t.w * fx0, t.y + t.h * fy0, s * q, '#ffffff', 0.7);
    }
    c.restore();
    c.save(); A.rr(c, b.x, b.y, b.w, b.h, L.rad); c.clip();
    c.fillStyle = `rgba(255,255,255,${K.glass * 0.4})`;
    A.poly(c, [[b.x + b.w * 0.74, b.y], [b.x + b.w * 0.88, b.y], [b.x + b.w * 0.64, b.y + b.h], [b.x + b.w * 0.5, b.y + b.h]]); c.fill();
    if (!L.tiny) A.glint(c, b.x + b.w * 0.93, b.y + b.h * 0.08, s * 1.3, '#ffffff', 0.7);
    c.restore();
    /* cabinet shell with the two windows cut out */
    windowsPath(c); c.fillStyle = vgrad(c, 0, H, K.body); c.fill('evenodd');
    c.save(); windowsPath(c); c.clip('evenodd');
    if (skin === 'pop') { c.strokeStyle = 'rgba(255,255,255,.17)'; c.lineWidth = Math.max(4, W * 0.02); for (let x = -H; x < W; x += Math.max(14, W * 0.07)) { c.beginPath(); c.moveTo(x, H); c.lineTo(x + H, 0); c.stroke(); } }
    else if (skin === 'deluxe') { c.fillStyle = 'rgba(255,255,255,.05)'; for (let x = 0; x < W; x += 3) c.fillRect(x, 0, 1, H); }
    else { c.fillStyle = 'rgba(255,255,255,.035)'; for (let y = 0; y < H; y += 4) c.fillRect(0, y, W, 1); }
    // soft shade under the marquee and a darker pillar between the windows
    let gr = c.createLinearGradient(0, L.mh, 0, L.mh + L.pad * 1.6); gr.addColorStop(0, 'rgba(0,0,0,.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = gr; c.fillRect(0, L.mh, W, L.pad * 1.6);
    c.restore();
    // window frames: a dark recess, the coloured trim, a highlight
    for (const r of [t, b]) {
      const lw = Math.max(1.6, L.pad * 0.36);
      c.strokeStyle = 'rgba(0,0,0,.45)'; c.lineWidth = lw * 2.4; A.rr(c, r.x, r.y, r.w, r.h, L.rad); c.stroke();
      c.strokeStyle = trimStyle(c, r.x, r.x + r.w, K); c.lineWidth = lw; A.rr(c, r.x - lw * 0.3, r.y - lw * 0.3, r.w + lw * 0.6, r.h + lw * 0.6, L.rad + lw * 0.3); c.stroke();
      c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = Math.max(0.8, lw * 0.3); c.beginPath(); c.moveTo(r.x + L.rad, r.y - lw * 0.55); c.lineTo(r.x + r.w - L.rad, r.y - lw * 0.55); c.stroke();
    }
    /* marquee: each machine has its own sign box */
    const m = L.marq, mr = Math.min(m.h * 0.42, 22), inx = m.h * 0.42, iny = m.h * 0.19;
    c.fillStyle = 'rgba(0,0,0,.4)'; A.rr(c, m.x - 1, m.y + 2, m.w + 2, m.h + 2, mr); c.fill();
    if (skin === 'deluxe') {
      c.fillStyle = vgrad(c, m.y, m.y + m.h, ['#ffe9a6', '#f5c451', '#a8760e']); A.rr(c, m.x, m.y, m.w, m.h, m.h * 0.2); c.fill();
      c.fillStyle = vgrad(c, m.y, m.y + m.h, K.marq); A.rr(c, m.x + m.h * 0.07, m.y + m.h * 0.07, m.w - m.h * 0.14, m.h * 0.86, m.h * 0.15); c.fill();
      if (!L.tiny) { const q = m.h * 0.2; c.fillStyle = K.marqIn; A.poly(c, [[m.x + inx + q, m.y + iny], [m.x + m.w - inx - q, m.y + iny], [m.x + m.w - inx, m.y + iny + q], [m.x + m.w - inx, m.y + m.h - iny - q], [m.x + m.w - inx - q, m.y + m.h - iny], [m.x + inx + q, m.y + m.h - iny], [m.x + inx, m.y + m.h - iny - q], [m.x + inx, m.y + iny + q]]); c.fill(); c.strokeStyle = 'rgba(245,196,81,.8)'; c.lineWidth = 1.2; c.stroke(); }
    } else if (skin === 'legend') {
      c.fillStyle = vgrad(c, m.y, m.y + m.h, K.marq); A.rr(c, m.x, m.y, m.w, m.h, m.h * 0.14); c.fill();
      c.fillStyle = 'rgba(255,255,255,.05)'; A.poly(c, [[m.x + m.w * 0.1, m.y], [m.x + m.w * 0.3, m.y], [m.x + m.w * 0.22, m.y + m.h], [m.x + m.w * 0.02, m.y + m.h]]); c.fill();
      c.strokeStyle = trimStyle(c, m.x, m.x + m.w, K); c.lineWidth = Math.max(1.4, L.pad * 0.28); A.rr(c, m.x, m.y, m.w, m.h, m.h * 0.14); c.stroke();
    } else {
      c.fillStyle = vgrad(c, m.y, m.y + m.h, K.marq); A.rr(c, m.x, m.y, m.w, m.h, mr); c.fill();
      c.fillStyle = 'rgba(255,255,255,.3)'; A.rr(c, m.x + mr * 0.5, m.y + m.h * 0.05, m.w - mr, m.h * 0.2, m.h * 0.1); c.fill();
      if (!L.tiny) { c.fillStyle = K.marqIn; A.rr(c, m.x + inx, m.y + iny, m.w - inx * 2, m.h - iny * 2, m.h * 0.31); c.fill(); c.strokeStyle = 'rgba(255,255,255,.4)'; c.lineWidth = 1.2; c.stroke(); }
      c.strokeStyle = '#ffffff'; c.lineWidth = Math.max(1.4, L.pad * 0.28); A.rr(c, m.x, m.y, m.w, m.h, mr); c.stroke();
    }
    /* base: the control deck, or the recess the shelf strip sits in */
    const bs = L.base;
    c.fillStyle = vgrad(c, bs.y, bs.y + bs.h, ['rgba(0,0,0,.08)', 'rgba(0,0,0,.34)']); c.fillRect(0, bs.y, W, bs.h);
    c.fillStyle = 'rgba(255,255,255,.4)'; c.fillRect(0, bs.y, W, Math.max(1, s * 0.3));
    if (L.strip) {
      c.fillStyle = skin === 'pop' ? 'rgba(60,30,90,.55)' : 'rgba(0,0,0,.55)'; A.rr(c, L.pad, bs.y + bs.h * 0.1, W - L.pad * 2, bs.h * 0.8, Math.min(12, bs.h * 0.3)); c.fill();
      c.strokeStyle = trimStyle(c, L.pad, W - L.pad, K); c.lineWidth = Math.max(1, L.pad * 0.2); A.rr(c, L.pad, bs.y + bs.h * 0.1, W - L.pad * 2, bs.h * 0.8, Math.min(12, bs.h * 0.3)); c.stroke();
    } else if (L.deck) {
      const u = bs.h, cy = bs.y + u * 0.56;
      // slanted deck plate
      c.fillStyle = 'rgba(0,0,0,.28)'; A.poly(c, [[W * 0.06, bs.y + u * 0.2], [W * 0.56, bs.y + u * 0.2], [W * 0.58, bs.y + u * 0.92], [W * 0.04, bs.y + u * 0.92]]); c.fill();
      c.fillStyle = 'rgba(255,255,255,.1)'; A.poly(c, [[W * 0.06, bs.y + u * 0.2], [W * 0.56, bs.y + u * 0.2], [W * 0.561, bs.y + u * 0.27], [W * 0.058, bs.y + u * 0.27]]); c.fill();
      // joystick gate and button wells (the moving parts are drawn live)
      c.fillStyle = 'rgba(0,0,0,.55)'; A.ell(c, W * 0.16, cy + u * 0.12, u * 0.46, u * 0.17); c.fill();
      c.strokeStyle = 'rgba(255,255,255,.25)'; c.lineWidth = Math.max(1, u * 0.03); A.ell(c, W * 0.16, cy + u * 0.12, u * 0.46, u * 0.17); c.stroke();
      for (const f of [0.3, 0.38, 0.46]) { c.fillStyle = 'rgba(0,0,0,.55)'; A.ell(c, W * f, cy + u * 0.1, u * 0.29, u * 0.17); c.fill(); c.strokeStyle = 'rgba(255,255,255,.22)'; A.ell(c, W * f, cy + u * 0.1, u * 0.29, u * 0.17); c.stroke(); }
      // ticket slot
      c.fillStyle = 'rgba(0,0,0,.3)'; A.rr(c, W * 0.5 - u * 0.75, cy - u * 0.2, u * 1.5, u * 0.5, u * 0.1); c.fill();
      c.fillStyle = '#05030c'; A.rr(c, W * 0.5 - u * 0.58, cy - u * 0.02, u * 1.16, u * 0.13, u * 0.06); c.fill();
      c.fillStyle = 'rgba(255,255,255,.35)'; A.rr(c, W * 0.5 - u * 0.58, cy + u * 0.12, u * 1.16, u * 0.03, u * 0.02); c.fill();
      // speaker
      const sx = W * 0.82;
      c.fillStyle = 'rgba(0,0,0,.4)'; A.rr(c, sx - u * 1.3, cy - u * 0.34, u * 2.6, u * 0.72, u * 0.16); c.fill();
      c.fillStyle = 'rgba(0,0,0,.55)'; for (let i = 0; i < 11; i++) for (let j = 0; j < 3; j++) { A.ell(c, sx - u * 1.1 + i * u * 0.22, cy - u * 0.2 + j * u * 0.21, u * 0.055, u * 0.055); c.fill(); }
    }
  }
  function drawStatic() { if (!L) return; signKey = ''; drawBack(); drawFront(); }

  /* ---------- The sign: POP is bubbly and bouncing, DELUXE is engraved gold, LEGEND is a neon tube ---------- */
  let signSprite = null, signKey = '';
  function letters(c, text, cx, cy, track, each) {
    let w = 0; const ws = [...text].map(ch => { const q = c.measureText(ch).width; w += q + track; return q; }); w -= track;
    let x = cx - w / 2;
    [...text].forEach((ch, i) => { each(ch, x + ws[i] / 2, cy, i); x += ws[i] + track; });
    return w;
  }
  function buildSign(text, style) {
    const m = L.marq, k = document.createElement('canvas');
    k.width = Math.ceil(m.w * dpr); k.height = Math.ceil(m.h * dpr);
    const c = k.getContext('2d'); c.scale(dpr, dpr);
    const cx = m.w / 2, cy = m.h * 0.53; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    if (style === 'pop') {
      const fs = m.h * 0.6; c.font = `700 ${fs}px Fredoka, "Nunito", sans-serif`;
      const pass = fn => letters(c, text, cx, cy, fs * 0.08, (ch, x, y, i) => { c.save(); c.translate(x, y + (i % 2 ? fs * 0.035 : -fs * 0.035)); c.rotate(i % 2 ? 0.07 : -0.07); fn(ch); c.restore(); });
      pass(ch => { c.strokeStyle = '#a8145c'; c.lineWidth = fs * 0.3; c.strokeText(ch, 0, fs * 0.05); });
      pass(ch => { c.strokeStyle = '#ff4f96'; c.lineWidth = fs * 0.18; c.strokeText(ch, 0, 0); });
      c.shadowColor = '#fff5a0'; c.shadowBlur = fs * 0.3;
      const w = pass(ch => { c.fillStyle = vgrad(c, -fs * 0.4, fs * 0.4, ['#ffffff', '#fff0b8']); c.fillText(ch, 0, 0); });
      c.shadowBlur = 0;
      pass(ch => { c.fillStyle = 'rgba(255,255,255,.55)'; c.save(); c.beginPath(); c.rect(-fs, -fs, fs * 2, fs * 0.86); c.clip(); c.fillText(ch, 0, 0); c.restore(); });
      for (const sgn of [-1, 1]) { A.glint(c, cx + sgn * (w / 2 + fs * 0.7), cy, fs * 0.3, '#fff5a0'); A.glint(c, cx + sgn * (w / 2 + fs * 1.3), cy - fs * 0.12, fs * 0.16, '#ffffff'); }
    } else if (style === 'deluxe') {
      const fs = m.h * 0.46; c.font = `900 ${fs}px "Nunito", Fredoka, sans-serif`;
      const pass = fn => letters(c, text, cx, cy, fs * 0.46, (ch, x, y) => fn(ch, x, y));
      pass((ch, x, y) => { c.strokeStyle = '#050a30'; c.lineWidth = fs * 0.26; c.strokeText(ch, x, y + fs * 0.04); });
      c.shadowColor = '#ffd96a'; c.shadowBlur = fs * 0.35;
      const w = pass((ch, x, y) => { c.fillStyle = vgrad(c, y - fs * 0.42, y + fs * 0.42, ['#fffbe6', '#f5c451', '#a56d00', '#ffe08a']); c.fillText(ch, x, y); });
      c.shadowBlur = 0;
      pass((ch, x, y) => { c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = fs * 0.025; c.strokeText(ch, x, y); });
      c.strokeStyle = '#f5c451'; c.lineWidth = Math.max(1, fs * 0.05); c.lineCap = 'round';
      for (const sgn of [-1, 1]) {                 // deco wings beside the name
        const x0 = cx + sgn * (w / 2 + fs * 0.7);
        for (let i = 0; i < 4; i++) { c.globalAlpha = 1 - i * 0.2; c.beginPath(); c.moveTo(x0 + sgn * i * fs * 0.3, cy - fs * (0.42 - i * 0.09)); c.lineTo(x0 + sgn * i * fs * 0.3, cy + fs * (0.42 - i * 0.09)); c.stroke(); }
        c.globalAlpha = 1; c.fillStyle = '#fff1c2'; A.poly(c, [[x0 - sgn * fs * 0.34, cy], [x0 - sgn * fs * 0.2, cy - fs * 0.14], [x0 - sgn * fs * 0.06, cy], [x0 - sgn * fs * 0.2, cy + fs * 0.14]]); c.fill();
      }
    } else if (style === 'legend') {
      const fs = m.h * 0.42; c.font = `800 ${fs}px "Unbounded", Fredoka, sans-serif`;
      const pass = (fn, dx = 0) => letters(c, text, cx + dx, cy, fs * 0.2, (ch, x, y) => fn(ch, x, y));
      c.save(); c.transform(1, 0, -0.16, 1, cy * 0.16, 0);
      c.globalCompositeOperation = 'lighter';
      c.shadowColor = '#ff4df0'; c.shadowBlur = fs * 0.6;
      pass((ch, x, y) => { c.strokeStyle = 'rgba(255,77,240,.9)'; c.lineWidth = fs * 0.13; c.strokeText(ch, x, y); });
      c.shadowColor = '#6ff3ff'; c.shadowBlur = fs * 0.3;
      pass((ch, x, y) => { c.strokeStyle = 'rgba(111,243,255,.8)'; c.lineWidth = fs * 0.05; c.strokeText(ch, x, y); }, -fs * 0.05);
      c.shadowBlur = 0; c.globalCompositeOperation = 'source-over';
      pass((ch, x, y) => { c.fillStyle = 'rgba(40,0,60,.55)'; c.fillText(ch, x, y); c.strokeStyle = '#ffffff'; c.lineWidth = fs * 0.035; c.strokeText(ch, x, y); });
      c.restore();
    } else {                                       // takeovers: FEVER and the win titles
      const fs = Math.min(m.h * 0.62, m.w / (text.length * 0.78)); c.font = `700 ${fs}px Fredoka, "Nunito", sans-serif`;
      const pass = fn => letters(c, text, cx, cy, fs * 0.12, (ch, x, y) => fn(ch, x, y));
      pass((ch, x, y) => { c.strokeStyle = 'rgba(20,6,50,.95)'; c.lineWidth = fs * 0.28; c.strokeText(ch, x, y + fs * 0.04); });
      const fill = c.createLinearGradient(m.w * 0.25, 0, m.w * 0.75, 0); A.PRISM.forEach((p, i) => fill.addColorStop(i / 6, style === 'gold' ? ['#fff3a8', '#ffc531', '#fff3a8', '#ffb11f', '#fff3a8', '#ffc531', '#fff3a8'][i] : p));
      c.shadowColor = '#ffd23f'; c.shadowBlur = fs * 0.45;
      pass((ch, x, y) => { c.fillStyle = fill; c.fillText(ch, x, y); });
      c.shadowBlur = 0;
      pass((ch, x, y) => { c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = fs * 0.035; c.strokeText(ch, x, y); });
    }
    return k;
  }
  function sign() {
    const K = SK(), text = LT.sign || (fever.on ? 'FEVER' : K.name), style = LT.sign ? (win.tier >= 2 ? 'gold' : 'take') : fever.on ? 'take' : K.sign;
    const key = skin + text + style + L.W + 'x' + L.H;
    if (key !== signKey) { signKey = key; signSprite = buildSign(text, style); }
    return signSprite;
  }
  // which bulbs burn right now: the pattern follows what the machine is doing
  function bulbOn(i, n, row, now) {
    const j = row ? n - 1 - i : i;
    switch (LT.mode) {
      case 'travel': return (((LT.dir > 0 ? i : n - 1 - i) - Math.floor(now / 60)) % 5 + 5) % 5 < 2;
      case 'lift': { const d = Math.abs(i - (n - 1) / 2) / ((n - 1) / 2); return d >= 1 - LT.k * 1.05 || (i + Math.floor(now / 90)) % 6 === 0; }
      case 'win': return (i + row + Math.floor(now / 130)) % 2 === 0;
      case 'big': return (i + row + Math.floor(now / 90)) % 2 === 0 || Math.sin(i * 12.9 + Math.floor(now / 70) * 4.1) > 0.6;
      case 'fever': return (i + row + Math.floor(now / 70)) % 2 === 0;
      default: return ((j + Math.floor(now / 150)) % 4 + 4) % 4 === 0;
    }
  }

  /* ---------- Dynamic layers ---------- */
  const capSprite = (tier, z, v) => A.capsuleSprites(tier, PH.r * LS[z] * L.s * dpr, v, SHADE[z], SK().shade);
  function putCapsule(c, sp, x, y, rot, alpha, scale) {
    const h = sp.half / dpr * (scale || 1);
    if (alpha !== undefined && alpha < 1) c.globalAlpha = alpha;
    c.translate(x, y); c.rotate(rot); c.drawImage(sp.base, -h, -h, h * 2, h * 2); c.rotate(-rot); c.drawImage(sp.gloss, -h, -h, h * 2, h * 2); c.translate(-x, -y);
    if (alpha !== undefined && alpha < 1) c.globalAlpha = 1;
  }
  function drawMid(now) {
    const c = g.mid, t = L.tank, s = L.s, K = SK(), r = PH.r * s;
    c.clearRect(t.x - 2, t.y - 2, t.w + 4, t.h + 4);
    c.save(); A.rr(c, t.x, t.y, t.w, t.h, L.rad); c.clip();
    const p = clawPose(), hx = X(p.hx), hy = Y(p.hy), cxp = X(claw.x), ry = Y(PH.railY);
    /* light inside the cabinet: FEVER overdrive, a wash from whatever glows, the spot that follows the claw */
    if (fever.on) {
      const ph = now / 900, gr = c.createLinearGradient(t.x + Math.sin(ph) * t.w, t.y, t.x + t.w + Math.sin(ph) * t.w, t.y + t.h);
      A.PRISM.forEach((q, i) => gr.addColorStop(i / 6, A.rgba(q, 0.3))); c.fillStyle = gr; c.fillRect(t.x, t.y, t.w, t.h);
      if (!api.reduced) for (let i = 0; i < 2; i++) {
        const a = Math.sin(now / 420 + i * 2.4) * 0.5, bx = t.x + t.w * (i ? 0.78 : 0.22);
        c.fillStyle = `rgba(255,255,255,${skin === 'pop' ? 0.3 : 0.14})`; c.beginPath(); c.moveTo(bx, t.y); c.lineTo(bx + Math.sin(a - 0.16) * t.h * 1.3, t.y + Math.cos(a - 0.16) * t.h * 1.3); c.lineTo(bx + Math.sin(a + 0.16) * t.h * 1.3, t.y + Math.cos(a + 0.16) * t.h * 1.3); c.fill();
      }
    }
    if (LT.amb > 0.01) { c.fillStyle = A.rgba(LT.ambCol, Math.min(0.42, LT.amb * 0.42)); c.fillRect(t.x, t.y, t.w, t.h); }
    if (LT.spot > 0.02) {
      const sy = t.y + t.h * 0.03, by = Math.min(Y(PH.floorY), hy + r * 4), sw = r * (2.2 + (by - sy) / (t.h) * 2.6);
      const gr = c.createLinearGradient(0, sy, 0, by); gr.addColorStop(0, `rgba(255,255,255,${LT.spot * 0.6})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
      c.save(); c.globalCompositeOperation = skin === 'pop' ? 'source-over' : 'lighter'; c.fillStyle = gr;
      c.beginPath(); c.moveTo(cxp - r * 0.7, sy); c.lineTo(cxp + r * 0.7, sy); c.lineTo(hx + sw, by); c.lineTo(hx - sw, by); c.closePath(); c.fill(); c.restore();
    }
    /* the pile, back row first; each row a little smaller and darker */
    for (let z = PH.lanes - 1; z >= 0; z--) {
      const rz = r * LS[z];
      if (z === 0) for (const h of claw.held) if (h.emerg) putCapsule(c, capSprite(h.tier, 0, h.v), h.sx, h.sy, h.rot, h.a, h.sc);
      c.fillStyle = skin === 'pop' ? 'rgba(110,50,100,.24)' : 'rgba(0,0,0,.36)';
      for (const q of pile) if (q.z === z) { A.ell(c, lx(q.x, z) + rz * 0.12, ly(q.y, z) + rz * 0.34, rz * 1.04, rz * 0.96); c.fill(); }
      for (const q of pile) {
        if (q.z !== z || q.tier < 2) continue;
        const sp = capSprite(q.tier, z, q.v), gh = sp.glowHalf / dpr;
        c.globalAlpha = (q.tier === 4 ? 0.55 + 0.3 * Math.sin(now / 380 + q.id * 30) : q.tier === 3 ? 0.42 : 0.2) * (1 - SHADE[z]);
        c.drawImage(sp.glow, lx(q.x, z) - gh, ly(q.y, z) - gh, gh * 2, gh * 2);
      }
      c.globalAlpha = 1;
      for (const q of pile) if (q.z === z) putCapsule(c, capSprite(q.tier, z, q.v), lx(q.x, z), ly(q.y, z), q.tier === 4 ? q.rot + now / 2600 : q.rot);
    }
    /* the claw's shadow on the pile: it tightens and darkens as the claw comes down */
    const surf = Y(surfaceY(p.hx, PH.r * 1.2)), tipY = hy + r * 2.5, near = clamp(1 - (surf - tipY) / (t.h * 0.5), 0, 1);
    if (surf > tipY - r) { c.fillStyle = `rgba(${skin === 'pop' ? '90,40,90' : '0,0,0'},${0.1 + near * 0.26})`; A.ell(c, hx, surf + r * 0.25, r * (2.3 - near * 0.7), r * (0.6 - near * 0.12)); c.fill(); }
    // chute flap
    const fx0 = X(PH.wallX + 0.8), fx1 = t.x + t.w, fy = Y(PH.floorY - 0.4), fl = (fx1 - fx0) * 0.5, fa = Math.min(1.35, flap.a);
    c.strokeStyle = K.railEdge; c.lineWidth = Math.max(2, s * 1.1); c.lineCap = 'round';
    c.beginPath(); c.moveTo(fx0, fy); c.lineTo(fx0 + Math.cos(fa) * fl, fy + Math.sin(fa) * fl); c.moveTo(fx1, fy); c.lineTo(fx1 - Math.cos(fa) * fl, fy + Math.sin(fa) * fl); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,.5)'; c.lineWidth = Math.max(1, s * 0.3);
    c.beginPath(); c.moveTo(fx0, fy - s * 0.3); c.lineTo(fx0 + Math.cos(fa) * fl, fy - s * 0.3 + Math.sin(fa) * fl); c.stroke();
    for (const d of drops) putCapsule(c, capSprite(d.tier, 0, d.v), X(d.x), Y(d.y), d.rot);
    /* tier glow of what the claw holds lights the cabinet */
    for (const h of claw.held) {
      if (h.tier < 2 || h.emerg) continue;
      const gr = c.createRadialGradient(h.sx, h.sy, r * 0.4, h.sx, h.sy, r * (3 + h.tier));
      gr.addColorStop(0, A.rgba(A.TIERS[h.tier].glow, 0.5)); gr.addColorStop(1, A.rgba(A.TIERS[h.tier].glow, 0));
      c.save(); c.globalCompositeOperation = skin === 'pop' ? 'source-over' : 'lighter'; c.fillStyle = gr; c.fillRect(t.x, t.y, t.w, t.h); c.restore();
    }
    /* cable: a steel line with a coiled lead that stretches with it; it shivers under load */
    const topX = hx - p.sn * r * A.CLAW_TOP, topY = hy - p.cs * r * A.CLAW_TOP, jit = claw.load ? Math.sin(now / 17) * r * 0.035 * claw.load : 0;
    c.lineCap = 'round';
    c.strokeStyle = 'rgba(0,0,0,.35)'; c.lineWidth = Math.max(1.8, s * 0.8); c.beginPath(); c.moveTo(cxp, ry); c.quadraticCurveTo((cxp + topX) / 2 + jit, (ry + topY) / 2, topX, topY); c.stroke();
    c.strokeStyle = K.cable; c.lineWidth = Math.max(1, s * 0.42); c.beginPath(); c.moveTo(cxp, ry); c.quadraticCurveTo((cxp + topX) / 2 + jit, (ry + topY) / 2, topX, topY); c.stroke();
    const cl = Math.hypot(topX - cxp, topY - ry), turns = 9, amp = Math.max(1.2, r * 0.17) * clamp(1.3 - cl / (t.h * 0.7), 0.45, 1);
    c.strokeStyle = K.coil; c.lineWidth = Math.max(1, s * 0.34); c.beginPath();
    for (let i = 0; i <= 54; i++) { const f = i / 54, a = f * turns * TAU, px = lerp(cxp, topX, f) + Math.sin(a) * amp + Math.sin(f * PI) * jit, py = lerp(ry, topY, f); c[i ? 'lineTo' : 'moveTo'](px, py); }
    c.stroke();
    // carriage
    const cw = r * 2.4, ch = Math.max(6, s * 4);
    c.fillStyle = K.claw.edge; A.rr(c, cxp - cw / 2, ry - ch / 2, cw, ch, ch * 0.3); c.fill();
    c.fillStyle = vgrad(c, ry - ch / 2, ry + ch / 2, [A.lite(K.claw.metal, 0.55), K.claw.metal, A.dark(K.claw.metal, 0.3)]); A.rr(c, cxp - cw / 2 + 1.5, ry - ch / 2 + 1.5, cw - 3, ch - 3, ch * 0.24); c.fill();
    for (const sg of [-1, 1]) { c.fillStyle = K.claw.edge; A.ell(c, cxp + sg * cw * 0.3, ry - ch * 0.42, ch * 0.24, ch * 0.24); c.fill(); c.fillStyle = K.claw.tip; A.ell(c, cxp + sg * cw * 0.3, ry + ch * 0.05, ch * 0.13, ch * 0.13); c.fill(); }
    const lamp = fever.on ? A.PRISM[Math.floor(now / 120) % 6] : claw.lamp, pal = { ...K.claw, lamp };
    c.save(); c.translate(hx, hy); c.rotate(-claw.th + claw.wob * 0.05); A.drawClaw(c, r, claw.open, 'back', pal); c.restore();
    for (const h of claw.held) {
      if (h.emerg) { if (h.fixed) { const w = clawPoint(p, h.o[0], h.o[1]); h.sx = X(w[0]); h.sy = Y(w[1]); } continue; }
      if (h.fixed) { const w = clawPoint(p, h.o[0], h.o[1]); h.sx = X(w[0]); h.sy = Y(w[1]); h.sc = 1; }
      putCapsule(c, capSprite(h.tier, 0, h.v), h.sx, h.sy, h.rot - claw.th, h.a, h.sc);
    }
    c.save(); c.translate(hx, hy); c.rotate(-claw.th + claw.wob * 0.05); A.drawClaw(c, r, claw.open, 'front', pal); c.restore();
    c.restore();
  }
  function fitFont(c, text, maxW, maxH, weight = 700) {
    let fs = maxH; c.font = `${weight} ${fs}px Fredoka, "Nunito", sans-serif`;
    const w = c.measureText(text).width; if (w > maxW) { fs *= maxW / w; c.font = `${weight} ${fs}px Fredoka, "Nunito", sans-serif`; }
    return fs;
  }
  function drawPedestal(c, sl, tier, lit) {
    const K = SK(), rx = sl.pw / 2, ry = rx * (sl.row ? 0.24 : 0.2), top = sl.pedTop, h = sl.pedH, cx = sl.cx;
    c.fillStyle = 'rgba(0,0,0,.35)'; A.ell(c, cx, top + h + ry * 0.4, rx * 1.12, ry * 1.2); c.fill();
    c.fillStyle = hgrad(c, cx - rx, cx + rx, [K.ped[1], K.ped[0], K.ped[1], K.ped[2]]);
    c.beginPath(); c.moveTo(cx - rx, top); c.lineTo(cx - rx, top + h); c.ellipse(cx, top + h, rx, ry, 0, PI, 0, true); c.lineTo(cx + rx, top); c.ellipse(cx, top, rx, ry, 0, 0, PI, false); c.closePath(); c.fill();
    c.fillStyle = K.pedTop; A.ell(c, cx, top, rx, ry); c.fill();
    c.fillStyle = 'rgba(255,255,255,.16)'; A.ell(c, cx - rx * 0.15, top - ry * 0.1, rx * 0.6, ry * 0.5); c.fill();
    const col = tier >= 0 ? (tier === 4 ? A.PRISM[Math.floor(performance.now() / 160) % 6] : A.TIERS[tier].top) : K.trim === 'prism' ? '#ff4df0' : K.trim;
    c.strokeStyle = col; c.lineWidth = Math.max(1.2, h * 0.16); c.beginPath(); c.ellipse(cx, top + Math.max(1, h * 0.1), rx, ry, 0, 0, PI); c.stroke();
    if (lit > 0 && tier >= 0) { c.save(); c.globalCompositeOperation = 'lighter'; c.strokeStyle = A.rgba(col, 0.35 * lit); c.lineWidth = Math.max(3, h * 0.5); c.beginPath(); c.ellipse(cx, top + h * 0.1, rx, ry, 0, 0, PI); c.stroke(); c.restore(); }
    c.strokeStyle = 'rgba(255,255,255,.5)'; c.lineWidth = Math.max(0.8, h * 0.05); A.ell(c, cx, top, rx, ry); c.stroke();
  }
  function drawRays(c, x, y, R, tier, a, now) {
    if (a <= 0.01) return;
    const n = 14, rot = now / 5200, k = [0.16, 0.22, 0.32, 0.44, 0.62, 0.62][tier] * a;
    c.save(); c.translate(x, y); c.rotate(rot);
    for (let i = 0; i < n; i++) {
      const a0 = i * TAU / n, col = tier === 4 ? A.PRISM[i % 6] : A.TIERS[tier].ray, gr = c.createRadialGradient(0, 0, R * 0.15, 0, 0, R);
      gr.addColorStop(0, A.rgba(col, k)); gr.addColorStop(1, A.rgba(col, 0));
      c.fillStyle = gr; c.beginPath(); c.moveTo(0, 0); c.arc(0, 0, R, a0, a0 + TAU / n * 0.5); c.closePath(); c.fill();
    }
    c.restore();
  }
  // the hang-tag: a little card on a string, swinging from where it is tied
  function drawTag(c, it, alpha, dt) {
    const sl = it.sl, th = sl.th * (1 + it.bump * 0.22);
    it.swingV += (-it.swing * 90 - it.swingV * 5) * dt; it.swing = clamp(it.swing + it.swingV * dt, -0.36, 0.36);
    c.globalAlpha = alpha * it.a * it.tagK;
    const hot = it.mult > 1 && it.multK > 0, room = sl.tw - (hot ? th * 0.5 : 0);
    fitFont(c, it.tag, room - th * 1.15, th * 0.64);
    const tw = Math.min(room, c.measureText(it.tag).width + th * 1.25);
    let ax, ay, ox, oy;                           // string anchor on the stand, and where the tag hangs from it
    if (sl.row) { ax = sl.cx; ay = sl.pedTop + sl.pedH * 0.55; ox = 0; oy = sl.ty - ay - th * 0.5 + (1 - it.tagK) * -th * 0.6; }
    else { ax = sl.cx + sl.s * 0.34; ay = sl.cy + sl.s * 0.1; ox = sl.tx - ax + tw * 0.5; oy = sl.ty - ay - th * 0.5; }
    c.save(); c.translate(ax, ay); c.rotate(it.swing * (sl.row ? 1 : 0.35));
    c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = Math.max(0.8, th * 0.05); c.beginPath(); c.moveTo(0, 0);
    if (sl.row) c.lineTo(0, oy + th * 0.16); else c.quadraticCurveTo(ox * 0.3, oy + th * 0.9, ox - tw * 0.5 + th * 0.3, oy + th * 0.5);
    c.stroke();
    const bx = ox - tw / 2, by = oy, cut = th * 0.3;
    const shape = () => { c.beginPath(); if (sl.row) { c.moveTo(bx + cut, by); c.lineTo(bx + tw - cut, by); c.lineTo(bx + tw, by + cut); c.lineTo(bx + tw, by + th - th * 0.2); c.quadraticCurveTo(bx + tw, by + th, bx + tw - th * 0.2, by + th); c.lineTo(bx + th * 0.2, by + th); c.quadraticCurveTo(bx, by + th, bx, by + th - th * 0.2); c.lineTo(bx, by + cut); } else { c.moveTo(bx + cut, by); c.lineTo(bx + tw - th * 0.2, by); c.quadraticCurveTo(bx + tw, by, bx + tw, by + th * 0.2); c.lineTo(bx + tw, by + th - th * 0.2); c.quadraticCurveTo(bx + tw, by + th, bx + tw - th * 0.2, by + th); c.lineTo(bx + cut, by + th); c.lineTo(bx, by + th - cut); c.lineTo(bx, by + cut); } c.closePath(); };
    c.save(); c.translate(th * 0.06, th * 0.1); c.fillStyle = 'rgba(0,0,0,.35)'; shape(); c.fill(); c.restore();
    c.fillStyle = hot ? vgrad(c, by, by + th, ['#fff3a8', '#ffd13f']) : vgrad(c, by, by + th, ['#ffffff', '#fff1dc']); shape(); c.fill();
    c.strokeStyle = A.rgba(A.TIERS[it.tier].top, 0.9); c.lineWidth = Math.max(1, th * 0.07); shape(); c.stroke();
    const hx0 = sl.row ? ox : bx + th * 0.32, hy0 = sl.row ? by + th * 0.17 : by + th * 0.5;
    c.fillStyle = 'rgba(43,33,69,.75)'; A.ell(c, hx0, hy0, th * 0.075, th * 0.075); c.fill();
    c.fillStyle = '#2b2145'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(it.tag, sl.row ? ox : ox + th * 0.16, by + th * (sl.row ? 0.6 : 0.54));
    if (hot) {                                    // the FEVER multiplier, stuck on like a price sticker
      const br = th * 0.5 * (0.6 + 0.4 * E.back(it.multK)), mx = bx + tw + br * 0.1, my = by + th * 0.12;
      c.fillStyle = '#ff3d77'; A.star(c, mx, my, br * 1.15, br * 0.9, 10, performance.now() / 1400); c.fill();
      c.strokeStyle = '#ffffff'; c.lineWidth = Math.max(1, br * 0.1); c.stroke();
      c.fillStyle = '#ffffff'; fitFont(c, '×' + it.mult, br * 1.36, br * 1.05); c.fillText('×' + it.mult, mx, my + br * 0.06);
    }
    c.restore();
  }
  function drawItem(c, it, alpha, now, dt) {
    const sl = it.sl, R = it.R, a = alpha * it.a;
    c.save(); c.globalAlpha = a;
    const lit = it.stage ? it.raysK : 0;
    // spotlight on the stand
    c.save(); c.globalCompositeOperation = 'lighter';
    const tint = it.stage ? A.TIERS[it.tier].ray : '#ffffff', top = L.bay.y, gr = c.createLinearGradient(0, top, 0, sl.pedTop);
    gr.addColorStop(0, A.rgba(tint, 0.2 * a)); gr.addColorStop(1, A.rgba(tint, 0.03 * a));
    c.fillStyle = gr; c.beginPath(); c.moveTo(sl.cx - sl.pw * 0.14, top); c.lineTo(sl.cx + sl.pw * 0.14, top); c.lineTo(sl.cx + sl.pw * 0.6, sl.pedTop); c.lineTo(sl.cx - sl.pw * 0.6, sl.pedTop); c.closePath(); c.fill();
    c.restore();
    if (it.stage) drawRays(c, sl.cx, sl.cy, sl.s * (sl.row ? 0.95 : 0.8), it.tier, it.raysK * a, now);
    // the opened shell lies beside the stand
    if (it.bowl) { A.drawCapsule(c, it.bowl.x, it.bowl.y, R * it.bowl.s, it.tier, it.bowl.rot, 'bottom', 1, it.var); }
    if (it.lid) { A.drawCapsule(c, it.lid.x, it.lid.y, R * it.lid.s, it.tier, it.lid.rot, 'top', 1, it.var); }
    drawPedestal(c, sl, it.stage ? it.tier : -1, lit);
    if (it.stage === 0) {
      const g2 = A.TIERS[it.tier].glow;
      if (g2) { const q = c.createRadialGradient(it.x, it.y, R * 0.5, it.x, it.y, R * 2.1); q.addColorStop(0, A.rgba(g2, 0.55)); q.addColorStop(1, A.rgba(g2, 0)); c.fillStyle = q; c.fillRect(it.x - R * 2.1, it.y - R * 2.1, R * 4.2, R * 4.2); }
      c.save(); c.translate(it.x + it.wob * R * 0.1, it.y + R); c.scale(1 + it.sq * 0.7, 1 - it.sq); A.drawCapsule(c, 0, -R, R, it.tier, it.rot + it.wob * 0.42, 'full', 1, it.var); c.restore();
    } else {
      const P = A.POSE[it.toy], tk = it.toyK, grow = tk < 1 ? E.elastic(Math.min(1, tk * 1.05)) : 1, age = (now - it.t0) / 1000, w = age * TAU / P.per + it.ph;
      let sn = Math.sin(w); if (P.step) sn = Math.round(sn * 2) / 2;
      const idle = tk >= 1 && !api.reduced ? 1 : 0, ts = sl.s * 0.94 * grow * (1 + it.bump * 0.16);
      const lift = (P.float || 0) * sl.s + idle * ((P.bob || 0) * sl.s * sn + (P.hop || 0) * sl.s * Math.pow(Math.max(0, sn), 2));
      const foot = sl.pedTop + sl.s * 0.01, baseY = lerp(it.ry + R, foot, E.out(Math.min(1, tk * 1.5))) - lift;
      const sq = idle * (P.squash || 0) * sn + (tk < 1 ? (1 - tk) * 0.25 : 0), rot = idle * ((P.sway || 0) * sn + (P.spin || 0) * Math.sin(w * 0.5));
      if (lift > 1) { c.fillStyle = 'rgba(0,0,0,.22)'; A.ell(c, sl.cx, sl.pedTop, sl.pw * 0.3, sl.pw * 0.07); c.fill(); }
      { const q = c.createRadialGradient(sl.cx, sl.cy, 0, sl.cx, sl.cy, sl.s * 0.6); q.addColorStop(0, 'rgba(255,255,255,' + (0.26 * Math.min(1, tk)).toFixed(3) + ')'); q.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = q; c.fillRect(sl.cx - sl.s, sl.cy - sl.s, sl.s * 2, sl.s * 2); }
      if (ts > 2) {
        const blink = idle && ((now + it.ph * 700) % 3300) < 130, sp = A.toySprite(it.toy, Math.min(360, sl.s * 0.94 * dpr), blink);
        c.save(); c.translate(sl.cx, baseY); c.rotate(rot); c.scale(1 - sq * 0.6, 1 + sq); c.drawImage(sp, -ts / 2, -ts * 0.915, ts, ts); c.restore();
      }
      if (it.tagK > 0 && it.tag) drawTag(c, it, alpha, dt);
    }
    c.restore();
  }
  function drawDeck(c, now) {
    const K = SK(), bs = L.base, u = bs.h, W = L.W, cy = bs.y + u * 0.56, jx = W * 0.16 + deck.jx * u * 0.24, jy = cy - u * (0.34 - deck.jy * 0.1);
    c.lineCap = 'round';
    c.strokeStyle = '#1a1326'; c.lineWidth = u * 0.17; c.beginPath(); c.moveTo(W * 0.16, cy + u * 0.1); c.lineTo(jx, jy); c.stroke();
    c.strokeStyle = '#8b8fa8'; c.lineWidth = u * 0.09; c.beginPath(); c.moveTo(W * 0.16, cy + u * 0.1); c.lineTo(jx, jy); c.stroke();
    const ball = K.trim === 'prism' ? '#ff4df0' : K.trim;
    c.fillStyle = 'rgba(0,0,0,.35)'; A.ell(c, jx + u * 0.03, jy + u * 0.04, u * 0.25, u * 0.25); c.fill();
    let gr = c.createRadialGradient(jx - u * 0.08, jy - u * 0.1, 0, jx, jy, u * 0.26); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.35, ball); gr.addColorStop(1, A.dark(ball, 0.45));
    c.fillStyle = gr; A.ell(c, jx, jy, u * 0.24, u * 0.24); c.fill();
    [['#ff5f7a', 0.3], ['#ffd23f', 0.38], ['#5fd0ff', 0.46]].forEach(([col, f], i) => {
      const on = Math.max(deck.b[i], fever.on ? 0.5 + 0.5 * Math.sin(now / 90 + i * 2) : 0, i === 2 ? deck.beat : 0), down = deck.b[i] > 0.6 ? u * 0.05 : 0, bx = W * f, by = cy - u * 0.02 + down;
      if (on > 0.02) { c.save(); c.globalCompositeOperation = 'lighter'; gr = c.createRadialGradient(bx, by, 0, bx, by, u * 0.75); gr.addColorStop(0, A.rgba(col, 0.7 * on)); gr.addColorStop(1, A.rgba(col, 0)); c.fillStyle = gr; c.fillRect(bx - u, by - u, u * 2, u * 2); c.restore(); }
      c.fillStyle = A.dark(col, 0.5); A.ell(c, bx, by + u * 0.07, u * 0.23, u * 0.15); c.fill();
      gr = c.createRadialGradient(bx - u * 0.07, by - u * 0.07, 0, bx, by, u * 0.24); gr.addColorStop(0, A.lite(col, 0.6 + on * 0.4)); gr.addColorStop(0.6, on > 0.3 ? A.lite(col, 0.25) : col); gr.addColorStop(1, A.dark(col, 0.3));
      c.fillStyle = gr; A.ell(c, bx, by, u * 0.22, u * 0.145); c.fill();
      c.fillStyle = 'rgba(255,255,255,.7)'; A.ell(c, bx - u * 0.07, by - u * 0.05, u * 0.07, u * 0.035, -0.3); c.fill();
    });
    if (deck.beat > 0.02) { const sx = W * 0.82; c.fillStyle = `rgba(255,255,255,${deck.beat * 0.12})`; A.rr(c, sx - u * 1.3, cy - u * 0.34, u * 2.6, u * 0.72, u * 0.16); c.fill(); }
  }
  const glowCache = new Map();
  function glowSprite(col) {
    let s = glowCache.get(col);
    if (!s) { s = document.createElement('canvas'); s.width = s.height = 48; const q = s.getContext('2d'), gr = q.createRadialGradient(24, 24, 0, 24, 24, 24); gr.addColorStop(0, A.rgba(col, 0.9)); gr.addColorStop(0.3, A.rgba(col, 0.45)); gr.addColorStop(1, A.rgba(col, 0)); q.fillStyle = gr; q.fillRect(0, 0, 48, 48); if (glowCache.size > 24) glowCache.clear(); glowCache.set(col, s); }
    return s;
  }
  function drawWin(c, now) {
    const W = L.W, H = L.H, k = win.k, cx = W / 2, cy = H * (L.portrait ? 0.4 : 0.5);
    c.fillStyle = `rgba(10,4,30,${0.6 * win.dim})`; c.fillRect(0, L.mh, W, H - L.mh);        // the room dims, the sign stays lit
    if (k <= 0.01) return;
    const bw = Math.min(W * 0.84, L.tiny ? 240 : 620), bh = bw * 0.44, sc = (0.3 + 0.7 * E.back(Math.min(1, k))) * (1 + win.bump * 0.12), tier = win.tier;
    const pal = [['#ffb3d7', '#ff4f96', '#a8145c'], ['#a8f0ff', '#7a5cff', '#2a1a8a'], ['#fff3a8', '#ffb11f', '#8f5a00'], ['#ffffff', '#ffd257', '#8f5a00']][tier];
    // rays behind
    c.save(); c.translate(cx, cy); c.globalCompositeOperation = 'lighter'; c.rotate(now / 3000);
    for (let i = 0; i < 16; i++) { const a0 = i * TAU / 16, col = tier === 3 ? A.PRISM[i % 6] : pal[i % 2], gr = c.createRadialGradient(0, 0, bh * 0.3, 0, 0, Math.max(W, H) * 0.7); gr.addColorStop(0, A.rgba(col, 0.34 * k)); gr.addColorStop(1, A.rgba(col, 0)); c.fillStyle = gr; c.beginPath(); c.moveTo(0, 0); c.arc(0, 0, Math.max(W, H) * 0.7, a0, a0 + TAU / 32); c.closePath(); c.fill(); }
    c.restore();
    c.save(); c.translate(cx, cy); c.rotate(Math.sin(now / 260) * 0.025 - 0.03); c.scale(sc, sc); c.globalAlpha = Math.min(1, k * 2);
    const n = bh * 0.13, tk = () => { c.beginPath(); c.moveTo(-bw / 2, -bh / 2); c.lineTo(bw / 2, -bh / 2); c.lineTo(bw / 2, -n); c.arc(bw / 2, 0, n, -PI / 2, PI / 2, true); c.lineTo(bw / 2, bh / 2); c.lineTo(-bw / 2, bh / 2); c.lineTo(-bw / 2, n); c.arc(-bw / 2, 0, n, PI / 2, -PI / 2, true); c.closePath(); };
    c.save(); c.translate(0, bh * 0.06); c.fillStyle = 'rgba(0,0,0,.45)'; tk(); c.fill(); c.restore();
    c.lineJoin = 'round'; c.strokeStyle = pal[2]; c.lineWidth = bh * 0.07; tk(); c.stroke();
    let gr;
    if (tier === 3) { gr = c.createLinearGradient(-bw / 2, 0, bw / 2, 0); A.PRISM.forEach((q, i) => gr.addColorStop(i / 6, A.mix(q, '#ffffff', 0.35))); } else gr = vgrad(c, -bh / 2, bh / 2, [pal[0], pal[1]]);
    c.fillStyle = gr; tk(); c.fill();
    c.save(); tk(); c.clip(); c.fillStyle = 'rgba(255,255,255,.28)'; const sw = ((now / 900) % 1.6 - 0.3) * bw; A.poly(c, [[-bw / 2 + sw, -bh / 2], [-bw / 2 + sw + bw * 0.14, -bh / 2], [-bw / 2 + sw - bw * 0.02, bh / 2], [-bw / 2 + sw - bw * 0.16, bh / 2]]); c.fill(); c.restore();
    c.strokeStyle = A.rgba(pal[2], 0.6); c.lineWidth = Math.max(1, bh * 0.012); c.setLineDash([bh * 0.04, bh * 0.035]); A.rr(c, -bw / 2 + bh * 0.2, -bh / 2 + bh * 0.09, bw - bh * 0.4, bh * 0.82, bh * 0.06); c.stroke(); c.setLineDash([]);
    for (const sg of [-1, 1]) { c.fillStyle = 'rgba(255,255,255,.85)'; A.star(c, sg * (bw / 2 - bh * 0.34), -bh * 0.2, bh * 0.1, bh * 0.045, 5, now / 900 * sg); c.fill(); }
    c.textAlign = 'center'; c.textBaseline = 'middle';
    const fs = Math.min(bh * 0.3, (bw - bh * 0.9) / (win.label.length * 0.62)); c.font = `700 ${fs}px Fredoka, "Nunito", sans-serif`;
    try { c.letterSpacing = (fs * 0.06).toFixed(1) + 'px'; } catch (e) { /* older engines */ }
    c.strokeStyle = pal[2]; c.lineWidth = fs * 0.24; c.strokeText(win.label, 0, -bh * 0.2 + fs * 0.04);
    c.fillStyle = '#ffffff'; c.fillText(win.label, 0, -bh * 0.2);
    try { c.letterSpacing = '0px'; } catch (e) { /* older engines */ }
    const ah = bh * 0.34, aw = bw * 0.7;
    c.fillStyle = 'rgba(20,8,44,.86)'; A.rr(c, -aw / 2, bh * 0.06, aw, ah, ah * 0.5); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.5)'; c.lineWidth = Math.max(1, bh * 0.012); A.rr(c, -aw / 2, bh * 0.06, aw, ah, ah * 0.5); c.stroke();
    fitFont(c, win.text, aw * 0.84, ah * 0.66);
    c.shadowColor = '#ffc531'; c.shadowBlur = ah * 0.3; c.fillStyle = '#ffe27a'; c.fillText(win.text, 0, bh * 0.06 + ah * 0.54); c.shadowBlur = 0;
    c.restore();
  }
  function drawTop(now, dt) {
    const c = g.top, K = SK(), m = L.marq, b = L.bay, t = L.tank;
    c.clearRect(0, 0, L.W, L.H);
    /* marquee: the sign, and bulbs that glow additively */
    if (!L.tiny) {
      const sp = sign(), flick = skin === 'legend' && !fever.on && !LT.sign ? (Math.sin(now / 90) > 0.96 || Math.sin(now / 1370) > 0.985 ? 0.45 : 1) : 1;
      c.globalAlpha = (fever.on || LT.sign ? 0.8 + 0.2 * Math.sin(now / 70) : 0.94 + 0.06 * Math.sin(now / 900)) * flick;
      c.drawImage(sp, m.x, m.y, m.w, m.h); c.globalAlpha = 1;
      if (skin === 'deluxe' && !fever.on && !LT.sign) {         // a slow shine across the gold
        const sx = m.x + ((now / 3800) % 1.5 - 0.25) * m.w;
        c.save(); c.globalCompositeOperation = 'lighter'; c.beginPath(); c.rect(m.x + m.h * 0.42, m.y + m.h * 0.19, m.w - m.h * 0.84, m.h * 0.62); c.clip();
        const gr = c.createLinearGradient(sx - m.h, 0, sx + m.h, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(255,240,190,.2)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
        c.fillStyle = gr; c.fillRect(sx - m.h, m.y, m.h * 2, m.h); c.restore();
      }
    }
    const gap = clamp(m.h * 0.3, 7, 20), br = L.tiny ? m.h * 0.2 : gap * 0.27, n = Math.max(6, Math.floor((m.w - m.h * 0.5) / gap));
    const rows = L.tiny ? [m.y + m.h * 0.5] : [m.y + m.h * 0.1, m.y + m.h * 0.9], rainbow = fever.on || K.neon || LT.mode === 'big';
    rows.forEach((y, ri) => {
      for (let i = 0; i < n; i++) {
        const x = m.x + m.h * 0.25 + (m.w - m.h * 0.5) * (i + 0.5) / n, on = bulbOn(i, n, ri, now), col = rainbow ? A.PRISM[(i + Math.floor(now / (fever.on ? 70 : 600))) % 6] : K.bulbOn;
        if (on) { c.globalCompositeOperation = 'lighter'; const gq = br * 3.4; c.drawImage(glowSprite(rainbow ? col : K.bulbGlow), x - gq, y - gq, gq * 2, gq * 2); c.globalCompositeOperation = 'source-over'; }
        c.fillStyle = on ? col : K.bulbOff; A.ell(c, x, y, br, br); c.fill();
        if (on) { c.fillStyle = 'rgba(255,255,255,.9)'; A.ell(c, x - br * 0.25, y - br * 0.25, br * 0.4, br * 0.4); c.fill(); }
        else { c.fillStyle = 'rgba(255,255,255,.35)'; A.ell(c, x - br * 0.3, y - br * 0.3, br * 0.25, br * 0.25); c.fill(); }
      }
    });
    /* neon edges on LEGEND, pulsing frames in FEVER and during a big win */
    if (K.neon || fever.on || LT.mode === 'big') {
      const off = (now / 14) % (L.W * 2);
      c.save(); c.globalCompositeOperation = 'lighter';
      for (const r of [t, b]) {
        const gr = c.createLinearGradient(r.x - L.W + off, 0, r.x + L.W + off, 0);
        for (let i = 0; i <= 12; i++) gr.addColorStop(i / 12, A.PRISM[i % 6]);
        c.strokeStyle = gr; c.globalAlpha = fever.on ? 0.5 + 0.4 * Math.sin(now / 90) : 0.7;
        c.lineWidth = Math.max(4, L.pad * 0.9); c.globalAlpha *= 0.35; A.rr(c, r.x, r.y, r.w, r.h, L.rad); c.stroke();
        c.lineWidth = Math.max(1.5, L.pad * 0.3); c.globalAlpha /= 0.35; A.rr(c, r.x, r.y, r.w, r.h, L.rad); c.stroke();
      }
      c.restore();
    }
    /* a reflection drifting across the glass */
    if (!api.reduced) for (const [r, per, ph] of [[t, 7400, 0], [b, 9100, 0.4]]) {
      const f = ((now / per + ph) % 1.5) - 0.25, x = r.x + f * r.w * 1.3, w = r.w * 0.13;
      c.save(); A.rr(c, r.x, r.y, r.w, r.h, L.rad); c.clip();
      const gr = c.createLinearGradient(x - w, 0, x + w, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, `rgba(255,255,255,${K.glass * 0.55})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = gr; c.transform(1, 0, -0.35, 1, (r.y + r.h) * 0.35, 0); c.fillRect(x - w, r.y, w * 2, r.h); c.restore();
    }
    if (LT.flash > 0.01) { c.fillStyle = `rgba(255,255,255,${LT.flash * 0.35})`; c.fillRect(0, 0, L.W, L.H); }
    if (L.deck) drawDeck(c, now);
    /* round total */
    const tb = L.totalBox, lab = !L.tiny && tb.h > 30;
    c.save();
    c.textAlign = 'center'; c.textBaseline = 'middle';
    if (lab) { c.font = `600 ${Math.max(8, tb.h * (L.wide ? 0.15 : 0.2))}px Fredoka, sans-serif`; try { c.letterSpacing = '2px'; } catch (e) { /* older engines */ } c.fillStyle = 'rgba(255,255,255,.55)'; c.fillText('TOTAL', tb.x + tb.w / 2, tb.y + tb.h * 0.21); try { c.letterSpacing = '0px'; } catch (e) { /* older engines */ } }
    const text = tray.text || api.money(0), zero = tray.total <= 0;
    const fs = fitFont(c, text, tb.w * 0.86, tb.h * (lab ? (L.wide ? 0.4 : 0.52) : 0.62));
    const ty = tb.y + tb.h * (lab ? (L.wide ? 0.58 : 0.63) : 0.54), sc = 1 + tray.pulse * 0.18;
    c.translate(tb.x + tb.w / 2, ty); c.scale(sc, sc);
    if (!zero && tray.win) { c.shadowColor = '#ffc531'; c.shadowBlur = fs * 0.45; }
    c.fillStyle = zero ? 'rgba(255,255,255,.34)' : tray.win ? '#ffe27a' : '#f4f1ff';
    c.fillText(text, 0, 0);
    c.restore();
    tray.pulse = Math.max(0, tray.pulse - dt * 2.6);
    /* the stage in the bay */
    c.save(); A.rr(c, b.x, b.y, b.w, b.h, L.rad); c.clip();
    if (tray.ghost) for (const it of tray.ghost.items) drawItem(c, it, tray.ghost.a, now, dt);
    if (!tray.items.length && !tray.ghost) {      // an empty stand waits under its spotlight
      const sl = slotsFor(1)[0];
      c.save(); c.globalCompositeOperation = 'lighter'; const gr = c.createLinearGradient(0, b.y, 0, sl.pedTop); gr.addColorStop(0, 'rgba(255,255,255,.16)'); gr.addColorStop(1, 'rgba(255,255,255,.02)');
      c.fillStyle = gr; c.beginPath(); c.moveTo(sl.cx - sl.pw * 0.14, b.y); c.lineTo(sl.cx + sl.pw * 0.14, b.y); c.lineTo(sl.cx + sl.pw * 0.6, sl.pedTop); c.lineTo(sl.cx - sl.pw * 0.6, sl.pedTop); c.closePath(); c.fill(); c.restore();
      drawPedestal(c, sl, -1, 0);
      if (!api.reduced) A.glint(c, sl.cx + Math.sin(now / 900) * sl.pw * 0.2, sl.pedTop - sl.s * (0.3 + 0.1 * Math.sin(now / 700)), sl.s * 0.05 * (1 + 0.5 * Math.sin(now / 300)), '#ffffff', 0.7);
    }
    for (const it of tray.items) drawItem(c, it, 1, now, dt);
    c.restore();
    /* the win ticket */
    if (win.on) drawWin(c, now);
    /* particles */
    for (let i = fx.length - 1; i >= 0; i--) {
      const q = fx[i]; q.life += dt;
      if (q.life >= q.max) { fx[i] = fx[fx.length - 1]; fx.pop(); fxPool.push(q); continue; }
      const f = q.life / q.max;
      if (q.kind === 1) { c.strokeStyle = A.rgba(q.col, (1 - f) * 0.8); c.lineWidth = Math.max(1, q.s * 0.08 * (1 - f)); A.ell(c, q.x, q.y, q.s * E.out(f), q.s * E.out(f)); c.stroke(); continue; }
      if (q.drag) { const d = Math.exp(-q.drag * dt); q.vx *= d; q.vy *= d; }
      q.vy += q.g * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.rot += q.vr * dt;
      c.globalAlpha = f < 0.7 ? 1 : (1 - f) / 0.3;
      if (q.kind === 3) { c.save(); c.translate(q.x, q.y); c.rotate(q.rot); c.scale(1, Math.cos(q.life * 9 + q.rot)); A.ticketChip(c, q.w * 2, q.w, q.col); c.restore(); }
      else if (q.kind === 2) { c.save(); c.translate(q.x, q.y); c.rotate(q.rot); c.fillStyle = q.col; c.fillRect(-q.s * 0.5, -q.s * 0.3 * Math.cos(q.life * 10), q.s, q.s * 0.6 * Math.cos(q.life * 10)); c.restore(); }
      else if (q.star) A.glint(c, q.x, q.y, q.s * 1.5, q.col); else { c.fillStyle = q.col; A.ell(c, q.x, q.y, q.s * 0.6, q.s * 0.6); c.fill(); }
    }
    c.globalAlpha = 1;
  }

  /* ---------- Frame loop ---------- */
  let lastT = 0, accT = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden || !L) { lastT = now; return; }
    const dt = clamp((now - lastT) / 1000 || 0.016, 0.001, 0.05); lastT = now;
    if (freeze > 0) { freeze -= dt * 1000; for (const tw of tweens) tw.t0 += dt * 1000; drawMid(now); drawTop(now, 0.0001); return; }
    for (const tw of [...tweens]) { const k = (now - tw.t0) / tw.d; if (k >= 1) endTween(tw); else if (k > 0) tw.fn(tw.ease(k)); }
    accT += dt; let n = 0;
    while (accT >= 1 / 60 && n < 3) { if (!PH.asleep) stepPhysics(); accT -= 1 / 60; n++; }
    if (n === 3) accT = 0;
    updateClaw(dt);
    // attract: a gentle sway, and now and then a capsule settles
    if (!api.busy && started && now - lastIdleKick > 5200) {
      lastIdleKick = now + rand(0, 3000);
      claw.om += rand(-0.5, 0.5);
      if (pile.length && !api.reduced) { const c = pile[Math.floor(Math.random() * pile.length)]; c.px += rand(-0.35, 0.35); c.py += 0.25; wake(110); }
    }
    if (shake > 0) { shake = Math.max(0, shake - dt * 3.5); layers.style.transform = walkX + (shake > 0 ? ` translate(${(Math.random() - 0.5) * shake * 8}px,${(Math.random() - 0.5) * shake * 8}px)` : ''); }
    drawMid(now); drawTop(now, dt);
  }

  /* ---------- Sizing ---------- */
  function relayout() {
    const r = stage.getBoundingClientRect(), W = Math.floor(r.width), H = Math.floor(r.height);
    if (W < 40 || H < 40) return;
    const nd = Math.min(2, window.devicePixelRatio || 1) * (W * H > 700000 ? 0.75 : 1);
    const was = L, nl = computeLayout(W, H);
    if (was && was.W === W && was.H === H && was.strip === nl.strip && nd === dpr) return;
    dpr = Math.max(1, nd); L = nl;
    for (const k of ['back', 'mid', 'front', 'top']) { cv[k].width = Math.round(W * dpr); cv[k].height = Math.round(H * dpr); g[k].setTransform(dpr, 0, 0, dpr, 0, 0); }
    root.style.setProperty('--u', (W / 100).toFixed(3) + 'px');
    root.dataset.tiny = String(L.tiny); root.dataset.portrait = String(L.portrait);
    const pr = PH.r, ph = PH.H, pl = PH.lanes;
    setupWorld();
    if (!pile.length || Math.abs(pr - PH.r) > 0.05 || Math.abs(ph - PH.H) > 0.5 || pl !== PH.lanes) { newPile(); claw.x = claw.lx = PH.homeX; claw.y = PH.homeY; }
    else claw.y = Math.min(claw.y, PH.floorY - PH.r * 2.6);
    strip.hidden = !L.strip;
    const bs = L.base;
    Object.assign(strip.style, { left: L.pad + 'px', top: (bs.y + bs.h * 0.1) + 'px', width: (W - L.pad * 2) + 'px', height: (bs.h * 0.8) + 'px' });
    Object.assign(hud.style, { left: (L.tank.x + L.s * 2.4) + 'px', top: (Y(PH.railY) + L.s * 3.6) + 'px' });
    if (tray.items.length) { const sl = slotsFor(tray.items.length); tray.items.forEach((it, i) => { placeItem(it, sl[i]); it.x = it.rx; it.y = it.ry; it.lid = it.bowl = null; }); }
    tray.ghost = null;
    drawStatic();
  }

  /* ---------- Changing cabinet: the carousel turns to the next machine ---------- */
  function applySkin(name) { skin = name; document.documentElement.dataset.machine = name; root.dataset.machine = name; MUS.step = 0; }
  async function walkTo(name, quiet) {
    if (!SKINS[name] || name === skin) return;
    if (!L || api.reduced || quiet) { applySkin(name); hardReset(); if (L) { newPile(); drawStatic(); } return; }
    const dir = ORDER.indexOf(name) > ORDER.indexOf(skin) ? 1 : -1;
    const snap = document.createElement('canvas'); snap.width = cv.back.width; snap.height = cv.back.height; snap.className = 'gg-snap';
    const sc = snap.getContext('2d'); for (const k of ['back', 'mid', 'front', 'top']) sc.drawImage(cv[k], 0, 0);
    root.append(snap);
    applySkin(name); hardReset(); newPile(); drawStatic();
    snd.walk();
    const tf = (x, q) => `perspective(1200px) translateX(${x}%) rotateY(${-dir * q * 38}deg) scale(${1 - Math.abs(q) * 0.16})`;
    walkX = tf(dir * 100, -1); layers.style.transform = walkX;
    await tween(520, q => { snap.style.transform = tf(-dir * q * 100, q); snap.style.filter = `brightness(${1 - q * 0.5})`; walkX = tf(dir * (1 - q) * 100, q - 1); layers.style.transform = walkX; layers.style.filter = `brightness(${0.5 + q * 0.5})`; }, E.io);
    snap.remove(); walkX = ''; layers.style.transform = ''; layers.style.filter = '';
    LT.flash = 0.5; claw.om += dir * 1.2;
  }

  /* ---------- FEVER presentation ---------- */
  function setHud() {
    hud.hidden = !fever.on;
    if (!fever.on) return;
    hud.querySelector('.gg-hud-n').textContent = fever.n + '/' + fever.of;
    hud.querySelector('.gg-hud-x').textContent = '×' + fever.x;
    const pips = hud.querySelector('.gg-hud-p');
    if (pips.children.length !== fever.of) pips.replaceChildren(...Array.from({ length: fever.of }, () => api.h('i')));
    [...pips.children].forEach((el, i) => { el.className = i < fever.n - 1 ? 'done' : i === fever.n - 1 ? 'now' : ''; });
    hud.classList.remove('bump'); void hud.offsetWidth; hud.classList.add('bump');
  }
  function showCard(kind, lines) {
    card.dataset.kind = kind;
    card.querySelector('small').textContent = lines[0] || '';
    card.querySelector('strong').textContent = lines[1] || '';
    card.querySelector('p').textContent = lines[2] || '';
    card.hidden = false; card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
  }
  const hideCard = () => { card.hidden = true; };
  function setFever(on) {
    fever.on = on; root.dataset.fever = String(on); document.documentElement.dataset.fever = String(on);
    MUS.level = on ? 3 : 1; LT.mode = on ? 'fever' : 'idle';
    if (!on) hud.hidden = true;
  }
  // The round total in money units, never shown above the mode's limit.
  const capOf = ctx => (MAXWIN[ctx.mode] || 10000) * 100;
  const shownTotal = (ctx, total) => ctx.units(Math.min(total, capOf(ctx)));

  /* ---------- The big-win moment: the cabinet prints a giant prize ticket. Only for wins of at least what the round
   * was played for; BIG / MEGA / EPIC / MAX, each longer and louder than the one before; quicker in TURBO. ---------- */
  function winTier(ctx) {
    if (!(ctx.winX >= ctx.cost) || ctx.winX <= 0) return -1;
    if (ctx.capped) return 3;
    const steps = ctx.cost > 1 ? FEATURE_STEPS : WIN_STEPS;
    return steps[2] <= ctx.winX ? 2 : steps[1] <= ctx.winX ? 1 : steps[0] <= ctx.winX ? 0 : -1;
  }
  async function celebrate(ctx, tier) {
    const my = epoch, units = ctx.winUnits, D = [1300, 1900, 2700, 3400][tier];
    Object.assign(win, { on: true, tier, k: 0, amount: 0, text: api.money(0), label: WIN_LABEL[tier], bump: 0, dim: 0 });
    LT.mode = 'big'; LT.sign = WIN_LABEL[tier]; LT.spotT = 0.5; if (MUS.level < 3) MUS.level = 2;
    snd.winIn(tier);
    await tween(250, q => { win.dim = q; }, E.out);                                // the room dims: anticipation
    if (my !== epoch) return;
    await tween(300, q => { win.k = q; }, E.lin);                                  // the ticket slams in
    kick(0.7 + tier * 0.25); hitStop(60 + tier * 30); LT.flash = 0.8;
    confetti((L.tiny ? 14 : 40) + tier * (L.tiny ? 8 : 26), false); tickets((L.tiny ? 8 : 18) + tier * 8, tier);
    let lastTick = -1, lastBurst = 0;
    await tween(D, q => {                                                          // the count, ticking up with the sound
      const e = 1 - Math.pow(1 - q, 2.2);
      win.amount = units * e; win.text = q >= 1 ? money(units) : api.money(Math.round(win.amount));
      const tk = Math.floor(q * D / 62);
      if (tk !== lastTick) { lastTick = tk; snd.tick(e); if (tk % 3 === 0) tickets(1 + tier, tier); win.bump = Math.max(win.bump, 0.12); }
      if (tier >= 1 && q - lastBurst > (tier >= 2 ? 0.14 : 0.3)) { lastBurst = q; if (tier >= 2) firework(rand(L.W * 0.12, L.W * 0.88), rand(L.H * 0.12, L.H * 0.5), A.PRISM[Math.floor(Math.random() * 6)]); else confetti(L.tiny ? 6 : 16, false); }
      win.bump = Math.max(0, win.bump - 0.02);
    }, E.lin);
    if (my !== epoch) return;
    win.text = money(units); win.bump = 1; snd.winEnd(tier); kick(0.5 + tier * 0.2); hitStop(50 + tier * 20); LT.flash = 0.6;
    confetti((L.tiny ? 16 : 50) + tier * 20, true); tickets((L.tiny ? 10 : 24) + tier * 10, tier);
    tween(380, q => { win.bump = 1 - q; }, E.out);
    await wait(900 + tier * 260);
    await tween(240, q => { win.k = 1 - q; win.dim = 1 - q; }, E.in);
    win.on = false; LT.sign = ''; LT.mode = 'idle'; LT.spotT = 0.12;
  }

  /* ---------- Playing one round's events ---------- */
  function hardReset() {
    for (const tw of [...tweens]) endTween(tw);
    tray.items = []; tray.ghost = null; tray.total = 0; tray.shown = 0; tray.text = ''; tray.win = false; tray.pulse = 0;
    for (const c of pile) c.target = false;
    claw.held = []; claw.load = 0; claw.dig = false; claw.x = PH.homeX; claw.y = PH.homeY; claw.open = 0.3; claw.lamp = '#ffd84d'; drops.length = 0;
    while (fx.length) fxPool.push(fx.pop());
    if (fever.on) setFever(false);
    win.on = false; LT.sign = ''; LT.mode = 'idle'; LT.spotT = 0.12; LT.amb = 0; freeze = 0;
    hud.hidden = true; hideCard(); shake = 0; walkX = ''; if (layers) { layers.style.transform = ''; layers.style.filter = ''; }
    document.querySelectorAll('.gg-fly').forEach(el => { const an = el.getAnimations ? el.getAnimations() : []; if (an.length) an.forEach(q => q.finish()); else el.remove(); });
  }
  async function play(events, ctx) {
    await walking;
    const my = ++epoch;
    hardReset();
    const want = ctx.mode === 'fever' ? 'legend' : ctx.mode;
    if (SKINS[want] && want !== skin) { walking = walkTo(want); await walking; }
    if (my !== epoch) return {};
    MUS.level = 1;
    let feature = false, step = 0, openK = 1;
    const openTicket = async k => { const it = tray.items.find(i => i.ticket && !i.opened); if (it) { await openItem(it, ctx, 1, k, 0); await wait(260 * k); } };
    for (const e of events) {
      if (my !== epoch) return {};
      if (!e || typeof e !== 'object') continue;
      if (e.type === 'grab') {
        const ok = await grabSeq(clamp(e.lane | 0, 0, 4), e.result, Array.isArray(e.caps) ? e.caps : [], 1);
        openK = [1, 1, 0.78, 0.6][Array.isArray(e.caps) ? e.caps.length : 1] || 1;       // combos open a little quicker
        if (ok && my === epoch) await trayArrive(e.caps, 1);
        else await wait(120);
      } else if (e.type === 'open') {
        await openItem(tray.items[e.i], ctx, 1, openK, step++);
        setTotal(shownTotal(ctx, e.total), e.total >= 100);
        ctx.setWin(shownTotal(ctx, e.total), true);
        await wait(100 * openK);
      } else if (e.type === 'fever') {
        feature = true;
        await openTicket(1);
        if (my !== epoch) return {};
        fever.n = 0; fever.of = e.grabs; fever.x = 1; setFever(true); hud.hidden = true;
        snd.feverIn(); confetti(L.tiny ? 20 : 60); kick(1); hitStop(80); LT.flash = 1;
        showCard('start', [ctx.mode === 'fever' ? 'OVERDRIVE' : 'GOLDEN TICKET', 'FEVER', e.grabs + ' grabs · never miss · ×1 to ×' + e.grabs]);
        await wait(1500);
        hideCard(); clearTray(260);
      } else if (e.type === 'fgrab') {
        const K = 0.52, tk = e.caps.some(c => c.ticket);
        fever.n = e.n; fever.of = tk ? Math.max(fever.of, e.n) : e.n + e.left; fever.x = e.x; setHud();
        clearTray(200);
        const ok = await grabSeq(clamp(e.lane | 0, 0, 4), 'win', e.caps, K);
        if (!ok || my !== epoch) continue;
        LT.mode = 'fever';
        await trayArrive(e.caps, K);
        let s2 = 0;
        await Promise.all(tray.items.filter(it => !it.ticket).map((it, i) => (async () => { await wait(i * 190 * K); await openItem(it, ctx, e.x, K, e.n - 1 + s2++); })()));
        setTotal(shownTotal(ctx, e.total), true);
        ctx.setWin(shownTotal(ctx, e.total), true);
        await wait(150);
      } else if (e.type === 'more') {
        await openTicket(0.7);
        fever.of = fever.n + e.left; setHud(); snd.more(); confetti(L.tiny ? 10 : 30);
        showCard('more', ['GOLDEN TICKET', '+' + e.grabs + ' GRABS', '']);
        await wait(800);
        hideCard();
      } else if (e.type === 'feverEnd') {
        await wait(350);
        setFever(false); snd.feverOut();
        showCard('end', ['FEVER OVER', money(ctx.units(Math.min(e.won, capOf(ctx)))), fever.n + (fever.n === 1 ? ' grab' : ' grabs')]);
        await wait(winTier(ctx) >= 0 ? 1100 : 1500);
        hideCard();
      }
    }
    if (my !== epoch) return {};
    const tier = winTier(ctx);
    if (tier >= 0) await celebrate(ctx, tier);
    else if (ctx.winX >= ctx.cost && ctx.winX > 0 && !api.reduced) { LT.mode = 'win'; tray.pulse = 1; setTimeout(() => { if (LT.mode === 'win') LT.mode = 'idle'; }, 900); }
    await wait(160);
    MUS.level = 0;
    return { feature };
  }

  /* ---------- Intro: toys peeking out of a pile of capsules, and three drawn feature cards ---------- */
  let introCv = null;
  function drawIntroArt() {
    if (!introCv || !introCv.isConnected) return;
    const w = window.innerWidth, h = Math.max(20, Math.round(introCv.clientHeight || window.innerHeight * 0.3)), d = Math.min(2, window.devicePixelRatio || 1);
    introCv.width = Math.round(w * d); introCv.height = Math.round(h * d);
    const c = introCv.getContext('2d'); c.scale(d, d);
    const R = clamp(h * 0.25, 12, 46), mixT = [0, 1, 2, 0, 3, 1, 0, 2, 4, 1, 0, 2, 3, 0, 1];
    let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const row = k => { for (let x = -R * (k ? 0.2 : 1.1); x < w + R; x += R * 1.92) { const xx = x + rnd() * R * 0.25, y = h - R * (0.45 + k * 1.2) + rnd() * R * 0.3; A.drawCapsule(c, xx, y, R, mixT[Math.floor(rnd() * 15)], rnd() * TAU, 'full', 1, Math.floor(rnd() * 3)); if (k) { c.fillStyle = 'rgba(26,12,56,.4)'; A.ell(c, xx, y, R, R); c.fill(); } } };
    row(1);
    const ids = [14, 7, 0, 11, 5, 9, 3, 12, 6, 10], n = clamp(Math.floor(w / (R * 3.6)), 3, ids.length);
    for (let i = 0; i < n; i++) A.drawToy(c, ids[i], w * (i + 0.5) / n + (rnd() - 0.5) * R, h - R * 2.45, R * 2.7, (rnd() - 0.5) * 0.24);
    row(0);
  }
  function drawCard(cvs, kind) {
    const c = cvs.getContext('2d'), w = cvs.width, h = cvs.height; c.clearRect(0, 0, w, h);
    if (kind === 'machines') {                      // three little cabinets
      ORDER.forEach((name, i) => {
        const K = SKINS[name], cw = w * 0.27, chh = h * 0.8, x = w * (0.045 + i * 0.315), y = h * 0.12 + (i === 1 ? -h * 0.04 : 0);
        c.fillStyle = 'rgba(0,0,0,.3)'; A.ell(c, x + cw / 2, y + chh, cw * 0.6, h * 0.04); c.fill();
        c.fillStyle = vgrad(c, y, y + chh, K.body); A.rr(c, x, y, cw, chh, cw * 0.14); c.fill();
        c.strokeStyle = K.trim === 'prism' ? '#ff4df0' : K.trim; c.lineWidth = w * 0.012; A.rr(c, x, y, cw, chh, cw * 0.14); c.stroke();
        c.fillStyle = vgrad(c, y, y + chh * 0.16, K.marq); A.rr(c, x + cw * 0.08, y + chh * 0.04, cw * 0.84, chh * 0.14, cw * 0.07); c.fill();
        for (let k = 0; k < 4; k++) { c.fillStyle = name === 'legend' ? A.PRISM[k + 1] : K.bulbOn; A.ell(c, x + cw * (0.2 + k * 0.2), y + chh * 0.11, cw * 0.035, cw * 0.035); c.fill(); }
        const gx = x + cw * 0.1, gy = y + chh * 0.23, gw = cw * 0.8, gh = chh * 0.5;
        c.fillStyle = vgrad(c, gy, gy + gh, K.wall); A.rr(c, gx, gy, gw, gh, cw * 0.07); c.fill();
        c.save(); A.rr(c, gx, gy, gw, gh, cw * 0.07); c.clip();
        [[0.2, 0.86, 0], [0.5, 0.88, 2], [0.8, 0.86, 1], [0.35, 0.68, 3], [0.66, 0.68, i === 2 ? 4 : 0]].forEach(([fx0, fy0, tt], q) => A.drawCapsule(c, gx + gw * fx0, gy + gh * fy0, gw * 0.17, tt, q, 'full', 1, q));
        c.strokeStyle = K.cable; c.lineWidth = w * 0.008; c.beginPath(); c.moveTo(gx + gw * 0.5, gy); c.lineTo(gx + gw * 0.5, gy + gh * 0.14); c.stroke();
        c.save(); c.translate(gx + gw * 0.5, gy + gh * 0.3); A.drawClaw(c, gw * 0.1, 0.8, 'back', K.claw); A.drawClaw(c, gw * 0.1, 0.8, 'front', K.claw); c.restore();
        c.fillStyle = 'rgba(255,255,255,.2)'; A.poly(c, [[gx, gy], [gx + gw * 0.3, gy], [gx, gy + gh * 0.7]]); c.fill();
        c.restore();
        c.fillStyle = 'rgba(0,0,0,.3)'; A.rr(c, x + cw * 0.1, y + chh * 0.78, cw * 0.8, chh * 0.14, cw * 0.05); c.fill();
        c.fillStyle = K.trim === 'prism' ? '#6ff3ff' : K.trim; A.ell(c, x + cw * 0.3, y + chh * 0.85, cw * 0.07, cw * 0.07); c.fill(); c.fillStyle = '#ffd23f'; A.ell(c, x + cw * 0.6, y + chh * 0.85, cw * 0.055, cw * 0.055); c.fill();
      });
    } else if (kind === 'toys') {                   // a capsule bursting open
      const cx = w * 0.5, R = w * 0.2;
      for (let i = 0; i < 12; i++) { const a = i * TAU / 12; c.fillStyle = A.rgba(A.PRISM[i % 6], 0.35); c.beginPath(); c.moveTo(cx, h * 0.5); c.arc(cx, h * 0.5, w * 0.48, a, a + TAU / 24); c.closePath(); c.fill(); }
      A.drawCapsule(c, cx - R * 1.5, h * 0.74, R * 0.62, 0, -0.4, 'full', 1, 0); A.drawCapsule(c, cx + R * 1.55, h * 0.72, R * 0.66, 3, 0.5, 'full', 1, 1);
      A.drawCapsule(c, cx, h * 0.72, R, 4, 0, 'bottom');
      A.drawToy(c, 14, cx, h * 0.46, w * 0.56, 0.04);
      A.drawCapsule(c, cx + R * 1.2, h * 0.2, R * 0.9, 4, 0.9, 'top');
      A.glint(c, w * 0.14, h * 0.26, w * 0.05, '#fff'); A.glint(c, w * 0.86, h * 0.48, w * 0.035, '#fff5a0');
    } else {                                        // the Golden Ticket and its climbing multipliers
      A.drawToy(c, 15, w * 0.42, h * 0.56, w * 0.82, -0.06);
      [[0.7, 0.2, 0.15, '6'], [0.86, 0.5, 0.11, '3'], [0.2, 0.2, 0.09, '2']].forEach(([fx0, fy0, q, n], i) => {
        c.fillStyle = ['#ff3d77', '#ff7a2e', '#b04dff'][i]; A.star(c, w * fx0, h * fy0, w * q, w * q * 0.78, 10, i); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = w * 0.012; c.stroke();
        c.fillStyle = '#fff'; c.font = `700 ${w * q * 0.95}px Fredoka, sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('×' + n, w * fx0, h * fy0 + w * q * 0.06);
      });
    }
  }
  const cardArt = kind => `<canvas data-gg-card="${kind}" width="260" height="200"></canvas>`;

  /* ---------- Rules ---------- */
  function rulesHTML() {
    const cap = t => `<canvas data-gg-cap="${t}" width="56" height="56"></canvas>`;
    const rows = A.TOYS.map((name, i) => { const t = Math.floor(i / 3); return `<tr><td><canvas data-gg-toy="${i}" width="72" height="72"></canvas>${name}</td><td>${cap(t)}<i class="gg-tier" data-tier="${t}">${A.TIERS[t].name}</i></td><td>${fmtV(VALUES.pop[i])}</td><td>${fmtV(VALUES.deluxe[i])}</td><td>${fmtV(VALUES.legend[i])}</td></tr>`; }).join('');
    const guide = A.TIERS.map((T, t) => `<figure>${cap(t)}<figcaption>${t === 5 ? 'Golden Ticket' : T.name}</figcaption></figure>`).join('');
    const ladder = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<i class="${n > 6 ? 'x' : ''}">×${n}</i>`).join('');
    return `<h3>How to play</h3>
      <p>Gacha Grab is a claw machine full of capsules. Choose a machine, choose your play amount and press GRAB (this game's PLAY button). The claw makes one grab per round. The whole round is decided the moment you press GRAB: the claw moves on its own and nothing you do afterwards changes the result.</p>
      <ul>
        <li><b>Miss</b>: the claw closes on nothing. The round wins nothing.</li>
        <li><b>Slip</b>: a capsule slips out of the claw on the way up. The round wins nothing.</li>
        <li><b>Catch</b>: the claw carries 1, 2 or 3 capsules to the chute. Each capsule opens in the prize bay and its toy wins its value × the play amount. The values of all capsules of the round are added together.</li>
      </ul>
      <p>The tier of a capsule shows on its shell as soon as the claw holds it. The lane the claw travels to, the capsules lying in the pile and the little figures you can glimpse inside them are decoration: only capsules that reach the chute count.</p>
      <h3>Capsules and toys</h3>
      <div class="gg-guide">${guide}</div>
      <p>There are five capsule tiers and each tier holds three toys. Every toy has one fixed value on each machine, as a multiple of the play amount:</p>
      <table class="gg-table"><thead><tr><th>Toy</th><th>Capsule</th><th>POP</th><th>DELUXE</th><th>LEGEND</th></tr></thead><tbody>${rows}</tbody></table>
      <p>A win can be smaller than the play amount (a single Common capsule on POP or DELUXE, for example).</p>
      <h3>The three machines</h3>
      <ul>
        <li><b>POP</b> (steady): the claw catches most often and the toys are worth the least. The largest win is ${api.group(MAXWIN.pop)}× the play amount.</li>
        <li><b>DELUXE</b> (balanced): fewer catches, higher values. The largest win is ${api.group(MAXWIN.deluxe)}× the play amount.</li>
        <li><b>LEGEND</b> (rare and huge): the fewest catches and by far the highest values. The largest win is ${api.group(MAXWIN.legend)}× the play amount.</li>
      </ul>
      <p>Each machine has its own mix of capsules. All three have the same RTP.</p>
      <h3>Golden Ticket and FEVER</h3>
      <p>On any machine a grab can bring up a Golden Ticket capsule, alone or together with one or two toy capsules (which win as usual). The Golden Ticket has no value of its own: it instantly triggers FEVER on that machine.</p>
      <ul>
        <li>FEVER starts with 6 grabs. FEVER grabs never miss: every grab brings 1, 2 or 3 capsules.</li>
        <li>The toys of each FEVER grab are multiplied by the number of that grab: ×1 on the first grab, ×2 on the second, and so on up to ×6 on the sixth.</li>
        <li>One more Golden Ticket can turn up during FEVER. It adds 3 grabs, which are multiplied ×7, ×8 and ×9. This can happen only once per FEVER, so a FEVER has at most 9 grabs.</li>
        <li>FEVER wins the sum of all its grabs, added to whatever the triggering grab won.</li>
      </ul>
      <div class="gg-ladder">${ladder}</div>
      <h3>FEVER feature</h3>
      <p>The FEVER button starts a round straight in FEVER, with no grab before it. That round is played for ${FEVER_PRICE}× the play amount. It always runs on the LEGEND machine with the LEGEND toy values and its own mix of capsules, and follows the FEVER rules above. Its largest win is ${api.group(MAXWIN.fever)}× the play amount.</p>
      <h3>Largest win</h3>
      <p>A round cannot win more than ${api.group(MAXWIN.pop)}× the play amount on POP, ${api.group(MAXWIN.deluxe)}× on DELUXE, ${api.group(MAXWIN.legend)}× on LEGEND and ${api.group(MAXWIN.fever)}× in the FEVER feature. If the total reaches that limit during FEVER, FEVER ends at once and the round wins exactly the limit.</p>
      <h3>Shelf</h3>
      <p>The shelf shows the toys you have found since the game was opened, with a count for each. It is a souvenir display only: it starts empty again whenever the game reloads and it never affects any result.</p>`;
  }

  const LOGO = `<svg class="gg-logo" viewBox="0 0 330 64" role="img" aria-label="Gacha Grab">
    <g class="gg-logo-cap"><g transform="translate(32 32) rotate(-18)"><circle r="25" fill="#fff6fb" stroke="#2b2145" stroke-width="4"/><path d="M-25 0a25 25 0 0 1 50 0z" fill="#ff6fae" stroke="#2b2145" stroke-width="4" stroke-linejoin="round"/><rect x="-25" y="-3" width="50" height="6" fill="#2b2145"/><ellipse cx="-10" cy="-13" rx="7" ry="3.6" fill="#fff" opacity=".85" transform="rotate(-32 -10 -13)"/></g></g>
    <text class="gg-logo-word" x="68" y="46" font-family="Fredoka, Nunito, sans-serif" font-weight="700" font-size="40" letter-spacing="1.5" fill="#ffffff" stroke="#2b2145" stroke-width="7" stroke-linejoin="round" paint-order="stroke">GACHA GRAB</text></svg>`;

  CFG = {
    id: 'gacha-grab', title: 'Gacha Grab', tagline: 'Three claw machines, fifteen toys and one Golden Ticket.', rtp: '96.30', layout: 'side', logo: LOGO,
    modes: [
      { name: 'pop', label: 'POP', note: 'steady', cost: 1, maxWin: MAXWIN.pop },
      { name: 'deluxe', label: 'DELUXE', note: 'balanced', cost: 1, maxWin: MAXWIN.deluxe },
      { name: 'legend', label: 'LEGEND', note: 'rare and huge', cost: 1, maxWin: MAXWIN.legend },
      { name: 'fever', kind: 'feature', label: 'FEVER', cost: FEVER_PRICE, maxWin: MAXWIN.fever,
        blurb: 'Starts the round straight in FEVER on the LEGEND machine: 6 grabs that never miss, multiplied ×1 to ×6.', confirmTitle: 'Start FEVER?', confirmLabel: 'Start FEVER' },
    ],
    modeGroupLabel: 'Machine', featureName: 'FEVER', statLabel: 'Fevers', playLabel: 'GRAB', busyLabel: 'GRABBING',
    celebrate: false,
    introCards: [
      { art: cardArt('machines'), title: 'THREE MACHINES', text: 'Steady POP, balanced DELUXE or rare-and-huge LEGEND.' },
      { art: cardArt('toys'), title: 'FIFTEEN TOYS', text: 'Up to three capsules a grab, in five tiers.' },
      { art: cardArt('ticket'), title: 'GOLDEN TICKET', text: 'FEVER: six grabs that never miss, ×1 to ×6.' },
    ],
    extra: '<div class="gg-extra"><span class="lz-lbl">Shelf · toys found this visit</span><div id="ggShelfHost"></div></div>',
    mount(st, a) {
      api = a; S = a.sound; stage = st;
      root = a.h('div', { class: 'gg-root', 'data-machine': 'pop' });
      layers = a.h('div', { class: 'gg-layers' });
      for (const k of ['back', 'mid', 'front', 'top']) { cv[k] = a.h('canvas', { class: 'gg-cv' }); g[k] = cv[k].getContext('2d'); layers.append(cv[k]); }
      strip = buildShelf('strip');
      hud = a.h('div', { class: 'gg-hud', hidden: true }, a.h('span', { class: 'gg-hud-l', text: 'GRAB' }), a.h('b', { class: 'gg-hud-n', text: '1/6' }), a.h('i', { class: 'gg-hud-x', text: '×1' }), a.h('span', { class: 'gg-hud-p' }));
      card = a.h('div', { class: 'gg-card', hidden: true }, a.h('div', { class: 'gg-card-in' }, a.h('small'), a.h('strong'), a.h('p')));
      layers.append(strip, hud);
      root.append(layers, card);
      stage.append(root);
      const host = document.getElementById('ggShelfHost');
      if (host) { shelfPanel = buildShelf('panel'); host.append(shelfPanel); }
      const art = () => {
        document.querySelectorAll('canvas[data-gg-toy]').forEach(c => { const q = c.getContext('2d'); q.clearRect(0, 0, c.width, c.height); A.drawToy(q, Number(c.dataset.ggToy), c.width / 2, c.height / 2, c.width * 0.96); });
        document.querySelectorAll('canvas[data-gg-cap]').forEach(c => { const q = c.getContext('2d'); q.clearRect(0, 0, c.width, c.height); A.drawCapsule(q, c.width / 2, c.height / 2, c.width * 0.44, Number(c.dataset.ggCap), -0.3, 'full', 1, Number(c.dataset.ggCap)); });
        document.querySelectorAll('canvas[data-gg-card]').forEach(c => drawCard(c, c.dataset.ggCard));
      };
      art();
      document.documentElement.dataset.machine = 'pop';
      relayout();
      const RP = window.LZ.params || {}, rm = String(RP.mode || '').toLowerCase();
      replaySkin = RP.replay ? (rm === 'fever' ? 'legend' : SKINS[rm] ? rm : null) : null;
      if (replaySkin) walkTo(replaySkin, true);
      const intro = document.getElementById('lzIntro');
      if (intro) { introCv = a.h('canvas', { class: 'gg-intro-art', 'aria-hidden': 'true' }); intro.prepend(introCv); drawIntroArt(); }
      if ('ResizeObserver' in window) new ResizeObserver(relayout).observe(stage);
      window.addEventListener('resize', () => { relayout(); drawIntroArt(); });
      if (document.fonts && document.fonts.load) Promise.all([document.fonts.load('700 20px Fredoka'), document.fonts.load('900 20px Nunito'), document.fonts.load('800 20px Unbounded'), document.fonts.ready]).then(() => { signKey = ''; art(); }, () => {});
      requestAnimationFrame(frame);
    },
    reset() { epoch++; if (api) { hardReset(); MUS.level = 0; } },
    play,
    idle() {
      lastIdleKick = performance.now(); MUS.level = 0;
      if (!api.replay && skin !== api.mode && SKINS[api.mode]) setTimeout(() => { if (!api.busy && skin !== api.mode) walking = walkTo(api.mode); }, 1100);
    },
    onMode(name) { if (replaySkin) return; if (!api || !L) { if (SKINS[name]) applySkin(name); return; } if (SKINS[name] && name !== skin && !api.busy) walking = walking.then(() => walkTo(name)); },
    onStart() { started = true; lastIdleKick = performance.now() - 3000; music(true); },
    onSound(on) { music(!!on && started); },
  };
  // The rules text needs api.group, which exists before boot() returns: build it lazily through a getter.
  Object.defineProperty(CFG, 'rules', { get() { api = api || window.LZ.api; return rulesHTML(); }, enumerable: true });
  window.LZ.boot(CFG);
})();
