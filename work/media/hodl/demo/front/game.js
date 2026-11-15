/* HODL: front end. A hold-and-win round presented as a trading terminal.
 * The shell (lz-core.js) owns the wallet, controls, rules sheet and settlement. This file draws the stage and
 * plays back the events of a round. Nothing here decides a result: every token, value, effect and total
 * comes from the book's events (see math/game.mjs for the rules and their order). Everything random in this
 * file is cosmetic (spark directions, background drift). */
(() => {
  'use strict';
  const COLS = 5, ROWS = 4, CELLS = 20, CAP = 1000000;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const now = () => performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const C = { green: '#25e89a', amber: '#ffc24a', violet: '#a77bff', red: '#ff4d5e', blue: '#4a9bff', cyan: '#8be9ff', copper: '#ff9d5c', silver: '#e3edf5', gold: '#ffd24a', holo: '#c59bff' };

  let api, stage, root, els = {}, cells = [], leds = [], meter = [], strip = [];
  let tokens = new Array(CELLS).fill(null);     // what is drawn: { c, k, v, el, val, use, tier }
  let model = new Array(CELLS).fill(0);         // the true value of every slot, straight from the events
  let gen = 0;                                  // round counter: late callbacks from an older round do nothing
  let SPD = 1, QUICK = false;                   // ctx.speed() of the round being played; QUICK = QA fast-forward
  let D = 60;                                   // token diameter in px (set by layout)
  let holdUntil = 0;                            // hit-stop: effects freeze until this time
  const hero = { shown: 0, from: 0, to: 0, t0: 0, dur: 0, live: false };

  /* ---------- Numbers ---------- */
  const tierOf = v => (v < 100 ? 'copper' : v < 500 ? 'silver' : v < 2500 ? 'gold' : 'holo');
  // A token value (hundredths) as printed on the token. All values are multiples of 0.1x.
  function fmtVal(v) {
    const x = v / 100;
    if (x >= 1000) return api.group(Math.round(x));
    const s = x.toFixed(1);
    return s.endsWith('.0') ? s.slice(0, -2) : s;
  }
  function fmtHero(v) {
    const x = Math.min(v, CAP) / 100;
    return (x >= 1000 ? api.group(x.toFixed(x % 1 ? 1 : 0)) : x >= 100 ? x.toFixed(1) : x.toFixed(2)) + '×';
  }

  /* ---------- Token art: minted in code as SVG symbols ---------- */
  function buildDefs() {
    const M = {
      copper: { rim: ['#ffd9b0', '#e2925a', '#f0b184', '#b0622c', '#6e3210'], face: ['#f6bb8a', '#d4834a', '#9a5324'], reed: '#4a1f08', groove: '#55260b', ink: '#6b3211', gloss: .2 },
      silver: { rim: ['#ffffff', '#c6cfd8', '#eef2f6', '#909caa', '#566270'], face: ['#f7fafc', '#cdd6de', '#8f9ba8'], reed: '#2c3640', groove: '#3b4651', ink: '#56626e', gloss: .32 },
      gold: { rim: ['#fff8cf', '#f8cc4c', '#fff0a6', '#d09a1a', '#8a5604'], face: ['#fff09a', '#f6c33a', '#c58a10'], reed: '#5c3a00', groove: '#6b4500', ink: '#8a5a00', gloss: .3 },
      holo: { rim: ['#6ff7ff', '#8f6bff', '#ff6bd6', '#ffc46b', '#5dffb0'], face: ['#43208c', '#1d0d4a', '#090420'], reed: '#0a0420', groove: '#05020f', ink: '#b99cff', gloss: .14 },
      whale: { rim: ['#b8f4ff', '#3fb6ff', '#8fe3ff', '#1b62d6', '#06256e'], face: ['#12609a', '#083a6b', '#020f22'], reed: '#021026', groove: '#010a18', ink: '#5fd0ff', gloss: .12 },
      candle: { rim: ['#d8ffe9', '#3df0a4', '#aaffd4', '#12a86a', '#06553a'], face: ['#12543a', '#0a3323', '#03120c'], reed: '#02150d', groove: '#010d08', ink: '#4dffb0', gloss: .1 },
    };
    const grads = Object.entries(M).map(([id, p]) => `
      <linearGradient id="hxRim-${id}" x1=".12" y1=".06" x2=".88" y2=".96"><stop offset="0" stop-color="${p.rim[0]}"/><stop offset=".3" stop-color="${p.rim[1]}"/><stop offset=".5" stop-color="${p.rim[2]}"/><stop offset=".74" stop-color="${p.rim[3]}"/><stop offset="1" stop-color="${p.rim[4]}"/></linearGradient>
      <radialGradient id="hxFace-${id}" cx=".36" cy=".28" r=".9"><stop offset="0" stop-color="${p.face[0]}"/><stop offset=".55" stop-color="${p.face[1]}"/><stop offset="1" stop-color="${p.face[2]}"/></radialGradient>`).join('');
    // a token has thickness: the dark edge shows under the face
    const body = (id, extra) => {
      const p = M[id];
      return `<symbol id="hx-${id}" viewBox="0 0 100 100">
        <circle cx="50" cy="51.9" r="48.1" fill="${p.rim[4]}"/><circle cx="50" cy="51.9" r="48.1" fill="#000" opacity=".34"/>
        <g transform="translate(1.9 0) scale(.962)">
        <circle cx="50" cy="50" r="49" fill="url(#hxRim-${id})"/>
        <circle cx="50" cy="50" r="46.3" fill="none" stroke="${p.reed}" stroke-width="3.6" stroke-dasharray="1.5 1.85" opacity=".5"/>
        <circle cx="50" cy="50" r="43.2" fill="${p.groove}"/>
        <circle cx="50" cy="50" r="41.6" fill="url(#hxFace-${id})"/>
        <circle cx="50" cy="50" r="41.6" fill="none" stroke="url(#hxBevel)" stroke-width="1.9"/>
        <circle cx="50" cy="50" r="37.2" fill="none" stroke="${p.ink}" stroke-width="1.2" stroke-dasharray=".1 3.3" stroke-linecap="round" opacity=".6"/>
        ${extra || `<g transform="translate(50 82.5)" fill="none" stroke="${p.ink}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="opacity:var(--glyph,.8)"><path d="M-5.5 1.5 0-3.5 5.5 1.5"/><path d="M-5.5 5.5 0 .5 5.5 5.5"/></g>`}
        <path d="M13.5 43A37.5 37.5 0 0 1 86.5 43A64 36 0 0 0 13.5 43Z" fill="#fff" opacity="${p.gloss}"/>
        </g>
      </symbol>`;
    };
    const whaleGlyph = `<g style="opacity:var(--glyph,1)">
        <path d="M14 66q9-6 18 0t18 0 18 0 18 0" fill="none" stroke="#5fd0ff" stroke-width="1.2" opacity=".28"/>
        <path d="M18 74q8-5 16 0t16 0 16 0 16 0" fill="none" stroke="#5fd0ff" stroke-width="1.2" opacity=".2"/>
        <path d="M50 47C47.5 42 46.5 37 46.5 33C40 32 31 29 23 19.5C33 20 43 22 50 28.5C57 22 67 20 77 19.5C69 29 60 32 53.5 33C53.5 37 52.5 42 50 47Z" fill="url(#hxFluke)" stroke="#031a33" stroke-width="1" stroke-linejoin="round"/>
      </g>`;
    const candleGlyph = `<g style="opacity:var(--glyph,1)">
        <path d="M31 27v20M69 21v20" stroke="#25e89a" stroke-width="1.6" opacity=".5"/>
        <rect x="27" y="32" width="8" height="11" rx="1.2" fill="#25e89a" opacity=".5"/><rect x="65" y="25" width="8" height="12" rx="1.2" fill="#25e89a" opacity=".5"/>
        <path d="M50 11v38" stroke="#d8ffe9" stroke-width="2.2" stroke-linecap="round"/>
        <rect x="42" y="17" width="16" height="25" rx="2.4" fill="url(#hxCandleBody)" stroke="#eafff4" stroke-width=".8"/>
      </g>`;
    // The Diamond: a brilliant cut seen from above. Facets are shaded by where they face (light from the top left).
    const pt = (r, deg) => { const a = deg * Math.PI / 180; return [50 + r * Math.cos(a), 50 + r * Math.sin(a)]; };
    const P = a => a.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
    const shade = ['#2a8fd6', '#1565a8', '#0d4a86', '#1877bd', '#56c6f5', '#c9f4ff', '#f2fdff', '#8adcfb'];
    let gem = '';
    for (let i = 0; i < 8; i++) {
      const a0 = 22.5 + i * 45, a1 = a0 + 45, mid = a0 + 22.5;
      gem += `<polygon points="${P([pt(29.5, a0), pt(29.5, a1), pt(48, a1), pt(48, a0)])}" fill="${shade[i]}"/>`;
      gem += `<polygon points="${P([pt(29.5, a0), pt(29.5, a1), pt(40, mid)])}" fill="${shade[(i + 3) % 8]}" opacity=".55"/>`;
      gem += `<polygon points="${P([pt(48, a0), pt(40, mid), pt(48, a1)])}" fill="#fff" opacity="${i >= 4 && i <= 6 ? .34 : .07}"/>`;
    }
    const oct = r => P([0, 1, 2, 3, 4, 5, 6, 7].map(i => pt(r, 22.5 + i * 45)));
    const diamond = `<symbol id="hx-diamond" viewBox="0 0 100 100">
        <polygon points="${oct(48.6)}" fill="#03182c" transform="translate(0 2.4)"/>
        <g transform="translate(1.6 0) scale(.968)"><polygon points="${oct(49.5)}" fill="#062a4a"/>${gem}
        <polygon points="${oct(48)}" fill="none" stroke="#e9fbff" stroke-width="1" opacity=".7"/>
        <polygon points="${oct(29.5)}" fill="url(#hxGemTable)" stroke="#fff" stroke-width="1.1"/>
        <path d="M30 34 46 26 38 34Z" fill="#fff" opacity=".75"/></g>
      </symbol>`;
    return `<svg class="hx-defs" width="0" height="0" aria-hidden="true" focusable="false"><defs>${grads}
      <linearGradient id="hxBevel" x1=".15" y1=".1" x2=".85" y2=".9"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient>
      <linearGradient id="hxFluke" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6fbff"/><stop offset="1" stop-color="#4fb8f0"/></linearGradient>
      <linearGradient id="hxCandleBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c8ffe2"/><stop offset=".5" stop-color="#25e89a"/><stop offset="1" stop-color="#0d9a62"/></linearGradient>
      <linearGradient id="hxLg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1fff9"/><stop offset="1" stop-color="#9fd9c6"/></linearGradient><linearGradient id="hxLo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b6ffd9"/><stop offset=".5" stop-color="#25e89a"/><stop offset="1" stop-color="#0b8f5b"/></linearGradient>
      <radialGradient id="hxGemTable" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#cdf3ff"/><stop offset="1" stop-color="#8fd9fb"/></radialGradient>
      <radialGradient id="hxMoon" cx=".38" cy=".34" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#e3d6ff"/><stop offset="1" stop-color="#9f7bff"/></radialGradient>
      </defs>${body('copper')}${body('silver')}${body('gold')}${body('holo')}${body('whale', whaleGlyph)}${body('candle', candleGlyph)}${diamond}
      <symbol id="hx-moon" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="url(#hxMoon)"/><circle cx="34" cy="38" r="9" fill="#8b6be0" opacity=".28"/><circle cx="62" cy="60" r="13" fill="#8b6be0" opacity=".22"/><circle cx="66" cy="30" r="6" fill="#8b6be0" opacity=".26"/><circle cx="38" cy="68" r="5" fill="#8b6be0" opacity=".22"/></symbol>
      <symbol id="hx-grow" viewBox="0 0 100 100"><path d="M50 14 84 52H62v34H38V52H16Z" fill="#8be9ff" stroke="#062a4a" stroke-width="5" stroke-linejoin="round"/></symbol>
      </svg>`;
  }
  const art = (id, cls) => `<svg class="${cls || 'hx-ico'}" viewBox="0 0 100 100" aria-hidden="true"><use href="#hx-${id}"/></svg>`;

  /* ---------- Sound. One small bus adds a delay send for space; everything ends in api.sound.out. ---------- */
  const SCALE = [220, 246.94, 261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5, 1174.66, 1318.51, 1567.98];
  let bus = null;
  function getBus() {
    const a = api.sound.ctx(); if (!a) return null;
    if (bus && bus.a === a) return bus;
    // everything the game plays goes through one trim, so the mix keeps headroom under the shell's limiter
    const trim = a.createGain(), wet = a.createGain(), dry = a.createGain(), music = a.createGain(), send = a.createGain(), delay = a.createDelay(1), fb = a.createGain(), lp = a.createBiquadFilter(), ret = a.createGain();
    trim.gain.value = 0.74; wet.gain.value = 1; dry.gain.value = 1; music.gain.value = 2.4; send.gain.value = 0.3; delay.delayTime.value = 0.3; fb.gain.value = 0.36; lp.type = 'lowpass'; lp.frequency.value = 2200; ret.gain.value = 0.55;
    trim.connect(api.sound.out); wet.connect(trim); wet.connect(send); music.connect(wet); dry.connect(trim);
    send.connect(delay); delay.connect(lp); lp.connect(fb); fb.connect(delay); lp.connect(ret); ret.connect(trim);
    bus = { a, trim, wet, dry, music };
    return bus;
  }
  // api.sound's helpers, with the game's trim as the default destination
  const SFX = {
    ctx: () => api.sound.ctx(),
    dest() { const b = getBus(); return b ? b.trim : undefined; },
    tone(o) { api.sound.tone({ out: this.dest(), ...o }); },
    noise(o) { api.sound.noise({ out: this.dest(), ...o }); },
    notes(fs, o = {}) { api.sound.notes(fs, { out: this.dest(), ...o }); },
  };
  const snd = {
    get S() { return SFX; },
    wet() { const b = getBus(); return b ? b.wet : undefined; },     // with the delay send
    lp(freq, q) {                                                     // a low-pass in front of the master, for softer saws
      const a = this.S.ctx(); if (!a) return undefined;
      const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq; f.Q.value = q || 0.8; f.connect(this.S.dest());
      setTimeout(() => { try { f.disconnect(); } catch (e) { /* already gone */ } }, 4000);
      return f;
    },
    // a mint strike: a pluck that climbs the scale as the board fills, heavier for higher tiers
    strike(count, weight) {
      const f = SCALE[clamp(count - 1, 0, 19)], out = this.wet();
      this.S.tone({ f, d: 0.26, type: 'triangle', g: 0.12, a: 0.004, out });
      this.S.tone({ f: f * 2, d: 0.12, type: 'sine', g: 0.045, a: 0.003, out });
      this.S.noise({ d: 0.035, g: 0.045, f: 4200, type: 'highpass' });
      this.S.tone({ f: 150 - weight * 18, to: 55, d: 0.1 + weight * 0.05, type: 'sine', g: 0.08 + weight * 0.03, a: 0.003 });   // the die coming down
      if (weight >= 2) { this.S.tone({ f: f * 3, d: 0.6, type: 'sine', g: 0.04, when: 0.02, out }); this.S.noise({ d: 0.22, g: 0.05, f: 2600, to: 600 }); }
      if (weight >= 3) this.S.notes([f * 2, f * 3, f * 4, f * 6, f * 8], { d: 0.55, type: 'sine', g: 0.045, step: 0.055, out });
    },
    roll() { for (let k = 0; k < 7; k++) this.S.tone({ f: 420 + k * 70, d: 0.035, type: 'square', g: 0.014, when: k * 0.05 }); this.S.noise({ d: 0.42, g: 0.02, f: 1800, to: 5200, q: 2, flat: true }); },
    scan(col) { this.S.tone({ f: 140 + col * 22, d: 0.07, type: 'square', g: 0.02 }); },
    miss() { this.S.noise({ d: 0.05, g: 0.016, f: 900, q: 1.5 }); },
    tense(k) { this.S.tone({ f: 330 * Math.pow(1.122, k), d: 0.2, type: 'triangle', g: 0.055, out: this.wet() }); },
    tick(left) {                                    // the respin countdown: lower and drier as it runs out
      this.S.tone({ f: [0, 392, 523, 659][clamp(left, 1, 3)], d: 0.07, type: 'square', g: 0.032 });
      this.S.noise({ d: 0.025, g: 0.045, f: 2600, q: 2 });
    },
    heart() { for (const w of [0, 0.19]) { this.S.tone({ f: 78, to: 42, d: 0.2, type: 'sine', g: 0.18, a: 0.004, when: w }); this.S.noise({ d: 0.05, g: 0.03, f: 220, when: w }); } },
    refill() { this.S.notes([659, 784, 988], { d: 0.1, type: 'triangle', g: 0.05, step: 0.035, out: this.wet() }); },
    lastOut() { this.S.tone({ f: 196, to: 98, d: 0.36, type: 'triangle', g: 0.09 }); },
    lock(i) { this.S.tone({ f: 1250 + i * 55, d: 0.045, type: 'square', g: 0.022 }); this.S.noise({ d: 0.03, g: 0.03, f: 5200, type: 'highpass' }); },
    hodl() {                                        // signature: four slabs, then a held fifth
      [73.42, 73.42, 87.31, 110].forEach((f, k) => {
        this.S.tone({ f, d: 0.22, type: 'sawtooth', g: 0.1, when: k * 0.13, out: this.lp(700) });
        this.S.tone({ f: f * 4, d: 0.12, type: 'square', g: 0.028, when: k * 0.13 });
        this.S.noise({ d: 0.06, g: 0.06, f: 1400, when: k * 0.13 });
      });
      this.S.tone({ f: 55, d: 0.7, type: 'sine', g: 0.16, a: 0.005, when: 0.52 });
      this.S.notes([293.66, 440, 587.33], { d: 0.9, type: 'triangle', g: 0.07, step: 0.001, when: 0.56, out: this.wet() });
      this.S.noise({ d: 0.5, g: 0.035, f: 600, to: 6000, when: 0.1 });
    },
    whale() {                                       // sub-bass swell
      this.S.tone({ f: 36, to: 66, d: 1.25, type: 'sine', g: 0.2, a: 0.5 });
      this.S.tone({ f: 72, to: 132, d: 1.1, type: 'triangle', g: 0.06, a: 0.5 });
      this.S.noise({ d: 1.1, g: 0.05, f: 300, to: 1400, q: 0.7 });
    },
    whaleRise() { this.S.tone({ f: 90, to: 50, d: 0.34, type: 'sine', g: 0.18 }); this.S.noise({ d: 0.34, g: 0.05, f: 500, to: 200 }); },
    whaleHit() { this.S.tone({ f: 110, to: 38, d: 0.55, type: 'sine', g: 0.19, a: 0.005 }); this.S.noise({ d: 0.3, g: 0.06, f: 900, to: 120 }); this.S.notes([196, 293.66, 392], { d: 0.7, type: 'triangle', g: 0.05, step: 0.001, out: this.wet() }); },
    candle() {                                      // a rising saw
      this.S.tone({ f: 150, to: 1500, d: 0.48, type: 'sawtooth', g: 0.075, a: 0.04, out: this.lp(2600, 3) });
      this.S.tone({ f: 300, to: 3000, d: 0.48, type: 'triangle', g: 0.03, a: 0.04 });
    },
    double(k) { this.S.tone({ f: 660 * Math.pow(1.189, k), d: 0.12, type: 'square', g: 0.04 }); this.S.tone({ f: 1320 * Math.pow(1.189, k), d: 0.24, type: 'sine', g: 0.04, out: this.wet() }); },
    upgrade() { this.S.notes([783.99, 1046.5, 1567.98], { d: 0.3, type: 'triangle', g: 0.05, step: 0.05, out: this.wet() }); },
    diamond(step) {                                 // a glassy ping, one step higher each time it grows
      const f = 1396.9 * Math.pow(1.0595, clamp(step, 0, 14) * 2), out = this.wet();
      this.S.tone({ f, d: 0.55, type: 'sine', g: 0.055, a: 0.002, out });
      this.S.tone({ f: f * 1.498, d: 0.4, type: 'sine', g: 0.028, a: 0.002, out });
      this.S.tone({ f: f * 2.01, d: 0.25, type: 'sine', g: 0.016, a: 0.002 });
    },
    closed() { this.S.tone({ f: 174.6, to: 130.8, d: 0.3, type: 'sine', g: 0.07 }); this.S.noise({ d: 0.14, g: 0.025, f: 500 }); },
    moon() {
      this.S.noise({ d: 1.5, g: 0.07, f: 200, to: 7000, q: 0.8, flat: true });
      this.S.tone({ f: 55, to: 220, d: 1.5, type: 'sawtooth', g: 0.09, a: 0.3, out: this.lp(1200) });
      this.S.notes([440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760], { d: 0.4, type: 'triangle', g: 0.08, step: 0.11, when: 0.5, out: this.wet() });
      this.S.notes([220, 440, 659.25, 880], { d: 1.4, type: 'triangle', g: 0.07, step: 0.001, when: 1.35, out: this.wet() });
      this.S.tone({ f: 60, to: 34, d: 0.8, type: 'sine', g: 0.19, a: 0.005, when: 1.35 });
    },
    row(k) { this.S.tone({ f: 880 + k * 110, d: 0.05, type: 'square', g: 0.022 }); },
    stamp(ok) { this.S.tone({ f: ok ? 130 : 98, to: 48, d: 0.22, type: 'sine', g: 0.17, a: 0.003 }); this.S.noise({ d: 0.09, g: 0.05, f: 900, to: 200 }); if (ok) this.S.notes([523.25, 659.25, 783.99], { d: 0.34, type: 'triangle', g: 0.07, step: 0.06, when: 0.04, out: this.wet() }); },
    winTick(p) { this.S.tone({ f: 520 * Math.pow(2, p * 1.6), d: 0.045, type: 'triangle', g: 0.05 }); },
    winHit(k) {                                     // a tier is reached: bigger each time
      const roots = [261.63, 329.63, 392, 523.25], r = roots[clamp(k, 0, 3)], out = this.wet();
      this.S.tone({ f: 120, to: 40, d: 0.5 + k * 0.1, type: 'sine', g: 0.18, a: 0.004 });
      this.S.noise({ d: 0.35 + k * 0.1, g: 0.055, f: 4000, to: 300 });
      this.S.notes([r, r * 1.26, r * 1.5, r * 2], { d: 0.9 + k * 0.2, type: 'triangle', g: 0.06, step: 0.001, out });
      this.S.notes([r * 2, r * 2.52, r * 3, r * 4, r * 5.04, r * 6].slice(0, 3 + k), { d: 0.3, type: 'sine', g: 0.05, step: 0.07, when: 0.08, out });
      if (k >= 2) this.S.tone({ f: r / 4, to: r / 2, d: 1.2, type: 'sawtooth', g: 0.07, a: 0.2, out: this.lp(900) });
    },
  };

  /* ---------- Adaptive music bed: a quiet generated loop, scheduled on the audio clock. ----------
   * level 0 idle (pad only) · 1 a round is open (bass + sparse arp) · 2 HODL (kick, hats, 16ths)
   * 3 last respin (everything drops to a heartbeat and a held note) · 4 big win (bright arp). */
  const CH = [[110, [220, 261.63, 329.63, 440]], [87.31, [174.61, 220, 261.63, 349.23]], [130.81, [196, 261.63, 329.63, 392]], [98, [196, 246.94, 293.66, 392]]];
  const music = { level: 0, next: 0, step: 0, timer: 0, on: false };
  function musicStep(step, t, a) {
    const b = getBus(); if (!b) return;
    const S = SFX, when = Math.max(0, t - a.currentTime), bar = (step >> 4) & 3, s = step & 15, lv = music.level, [bass, tones] = CH[bar], out = b.music;
    if (s === 0) {                                                    // pad: always there, very low
      S.tone({ f: bass * 2, d: 2.5, type: 'triangle', g: 0.016, a: 0.7, when, out });
      S.tone({ f: bass * 3.003, d: 2.5, type: 'sine', g: 0.012, a: 0.9, when, out });
      if (lv === 0 && bar % 2 === 0) S.tone({ f: tones[3] * 2, d: 0.5, type: 'sine', g: 0.01, a: 0.01, when: when + 0.6, out });
    }
    if (lv === 3) {                                                   // last respin: heartbeat and a held high note
      if (s === 0 || s === 3 || s === 8 || s === 11) S.tone({ f: 70, to: 40, d: 0.2, type: 'sine', g: s % 8 === 0 ? 0.11 : 0.07, a: 0.004, when, out: b.dry });
      if (s === 0) S.tone({ f: 880, d: 2.4, type: 'sine', g: 0.008, a: 0.5, when, out });
      return;
    }
    if (lv >= 1) {
      if (s === 0 || s === 8 || (lv >= 2 && s === 11)) S.tone({ f: bass, d: 0.42, type: 'triangle', g: 0.05, a: 0.008, when, out: b.dry });
      const dense = lv >= 2, hit = dense ? s % 2 === 0 || s === 7 || s === 15 : s % 4 === 2 || s === 12;
      if (hit) {
        const idx = [0, 2, 1, 3, 2, 3, 1, 2][(s >> 1) & 7], f = tones[idx] * (lv >= 4 ? 2 : 1) * (dense && s % 8 === 6 ? 2 : 1);
        S.tone({ f, d: dense ? 0.16 : 0.24, type: lv >= 4 ? 'triangle' : 'sine', g: dense ? 0.024 : 0.018, a: 0.004, when, out });
      }
    }
    if (lv >= 2) {
      if (s % 4 === 0) S.tone({ f: 105, to: 44, d: 0.15, type: 'sine', g: 0.085, a: 0.003, when, out: b.dry });
      if (s % 4 === 2) S.noise({ d: 0.03, g: 0.011, f: 7500, type: 'highpass', when, out: b.dry });
      if (lv >= 4 && s % 2 === 1) S.noise({ d: 0.02, g: 0.007, f: 9000, type: 'highpass', when, out: b.dry });
    }
  }
  function musicTick() {
    const a = api.sound.ctx();
    if (!a || !music.on || document.hidden) { music.next = 0; return; }
    if (!music.next || music.next < a.currentTime - 0.05) music.next = a.currentTime + 0.08;
    while (music.next < a.currentTime + 0.26) { musicStep(music.step, music.next, a); music.next += 0.15; music.step = (music.step + 1) & 63; }
  }
  const setMusic = lv => { music.level = lv; };

  /* ---------- Stage ---------- */
  const TAPE = [['LZX', 1, '4.20'], ['WAGMI', 1, '0.69'], ['APEX', 1, '2.71'], ['FOMO', 0, '3.14'], ['GM', 1, '1.00'], ['MOONR', 1, '9.99'], ['YOLO', 0, '0.42'], ['DGEN', 1, '1.61'], ['HODL', 1, '3.00'], ['LAMBO', 0, '0.01'], ['WEN', 1, '2.22'], ['SER', 1, '0.07']];
  function build() {
    const tape = TAPE.map(([t, up, p]) => `<span class="${up ? 'up' : 'dn'}"><b>${t}</b><i></i>${p}%</span>`).join('') + '<span class="note">DIAMOND HANDS: ONLINE</span><span class="note">THIS IS NOT ADVICE</span>';
    root = api.h('div', { class: 'hx', 'data-phase': 'idle', 'data-sz': 'md' });
    root.innerHTML = buildDefs() + `
      <canvas class="hx-bg"></canvas>
      <div class="hx-bar"><span class="hx-dots"><i></i><i></i><i></i></span><b class="hx-name">HODL<em>//</em>TERMINAL</b><span class="hx-pair">LZX-PERP &middot; 5&times;4 BOOK</span><span class="hx-status" id="hxStatus"><i></i><span>STANDBY</span></span></div>
      <div class="hx-chart" id="hxChart"><canvas class="hx-cv"></canvas>
        <div class="hx-hero" id="hxHero"><span class="hx-hl" id="hxLabel">PORTFOLIO</span><b class="hx-hv" id="hxValue">0.00×</b>
          <div class="hx-hud" id="hxHud"><span class="hx-hudl">RESPINS</span><span class="hx-leds"><i></i><i></i><i></i></span><span class="hx-slots" id="hxSlots">0/20</span></div></div>
      </div>
      <div class="hx-mid">
        <div class="hx-side hx-left"><span class="hx-sl">SLOTS</span><b class="hx-count" id="hxCount">00<i>/20</i></b>
          <div class="hx-moonmark">${art('moon', 'hx-mm')}<span>MOON <b>&times;3</b></span></div>
          <div class="hx-meter" id="hxMeter">${'<i></i>'.repeat(CELLS)}</div></div>
        <div class="hx-book" id="hxBook"><div class="hx-strip" id="hxStrip">${'<i></i>'.repeat(CELLS)}</div><div class="hx-board" id="hxBoard"></div></div>
        <div class="hx-side hx-right"><span class="hx-sl">FILLS</span><div class="hx-fills" id="hxFills"></div><div class="hx-sub"><span>TOTAL</span><b id="hxSub">0.00×</b></div></div>
      </div>
      <div class="hx-tape"><div class="hx-tape-in">${tape}${tape}</div></div>
      <div class="hx-frame"></div>
      <div class="hx-card" id="hxCard" hidden></div>
      <div class="hx-win" id="hxWin" hidden><div class="hx-win-bars">${'<i></i>'.repeat(14)}</div>
        <div class="hx-win-in"><small id="hxWinS">POSITION CLOSED</small><strong id="hxWinT">&nbsp;</strong><b id="hxWinX">0.00×</b><span id="hxWinA"></span>
          <div class="hx-ladder"><i id="hxWinP"></i><em style="left:26%">10×</em><em style="left:42.7%">50×</em><em style="left:60%">250×</em><em style="left:100%">MAX</em></div></div></div>
      <canvas class="hx-fx"></canvas>`;
    stage.append(root);
    for (const id of ['Status', 'Label', 'Value', 'Hud', 'Slots', 'Count', 'Meter', 'Strip', 'Book', 'Board', 'Fills', 'Sub', 'Card', 'Chart', 'Hero', 'Win', 'WinS', 'WinT', 'WinX', 'WinA', 'WinP']) els[id[0].toLowerCase() + id.slice(1)] = root.querySelector('#hx' + id);
    leds = [...root.querySelectorAll('.hx-leds i')]; meter = [...els.meter.children]; strip = [...els.strip.children];
    for (let c = 0; c < CELLS; c++) {
      const col = c % COLS, row = Math.floor(c / COLS);
      const cell = api.h('div', { class: 'hx-cell', style: `--i:${col + row};--c:${col};--r:${row}` });
      cell.innerHTML = `<span class="hx-dep"><i></i><i></i><i></i></span><em class="hx-id">${'ABCDE'[col]}${row + 1}</em><i class="hx-ghost"></i>`;
      cells.push(cell); els.board.append(cell);
    }
    els.board.append(api.h('i', { class: 'hx-sweep' }));
    bg.cv = root.querySelector('.hx-bg'); bg.g = bg.cv.getContext('2d');
    chart.cv = root.querySelector('.hx-cv'); chart.g = chart.cv.getContext('2d');
    fx.cv = root.querySelector('.hx-fx'); fx.g = fx.cv.getContext('2d');
    stage.addEventListener('pointermove', e => { const r = stage.getBoundingClientRect(); bg.tx = (e.clientX - r.left) / r.width - 0.5; bg.ty = (e.clientY - r.top) / r.height - 0.5; }, { passive: true });
  }

  // The stage is not a fixed ratio: wide on desktop, tall on a phone, tiny in the popout. Sizes are computed here.
  function layout() {
    const W = stage.clientWidth, H = stage.clientHeight;
    if (W < 20 || H < 20) return;
    const xs = H < 215 || W < 300, sm = !xs && (H < 350 || W < 380), tall = W / H < 1.08, m = Math.min(W, H);
    const pad = xs ? 3 : Math.round(clamp(m * 0.02, 5, 13)), gap = xs ? 2 : Math.round(clamp(m * 0.012, 3, 8)), bp = xs ? 2 : Math.round(clamp(m * 0.011, 3, 8));
    const barH = xs ? 0 : Math.round(clamp(H * 0.05, 17, 30)), tapeH = xs ? 0 : Math.round(clamp(H * 0.04, 14, 22));
    const avail = H - 2 * pad - barH - tapeH - gap * (1 + (barH ? 1 : 0) + (tapeH ? 1 : 0)), innerW = W - 2 * pad;
    let chartH = Math.round(avail * (xs ? 0.23 : tall ? 0.25 : 0.29)), cw, side = 0, stripH = 0;
    const cwMax = (innerW - 2 * bp - 4 * gap) / 5, chFor = sh => (avail - chartH - 2 * bp - 3 * gap - (sh ? sh + gap : 0)) / 4;
    let ch = chFor(0);
    if (tall) {
      stripH = xs ? 0 : 5; ch = chFor(stripH); cw = cwMax;
      if (ch > cw * 1.04) { ch = cw * 1.04; chartH = Math.round(avail - ch * 4 - 3 * gap - 2 * bp - (stripH ? stripH + gap : 0)); }
    } else {
      cw = Math.min(cwMax, ch * 1.2);
      side = (innerW - cw * 5 - gap * 4 - 2 * bp - 2 * gap) / 2;
      if (side < 84 || xs) { side = 0; stripH = xs ? 0 : 4; ch = chFor(stripH); cw = Math.min(cwMax, ch * 1.9); }
    }
    cw = Math.floor(cw); ch = Math.floor(ch); side = Math.floor(side);
    D = Math.floor(Math.min(cw, ch) * (xs ? 0.95 : 0.9));
    const set = (k, v) => root.style.setProperty(k, v);
    set('--pad', pad + 'px'); set('--gap', gap + 'px'); set('--bp', bp + 'px'); set('--barH', barH + 'px'); set('--tapeH', tapeH + 'px'); set('--chartH', chartH + 'px'); set('--stripH', stripH + 'px');
    set('--cw', cw + 'px'); set('--ch', ch + 'px'); set('--d', D + 'px'); set('--side', side + 'px');
    const heroF = clamp(chartH * (xs ? 0.46 : 0.31), 13, 60), heroW = Math.round(Math.min(innerW * 0.56, heroF * 4.75 + chartH * 0.13 + 12));
    set('--heroF', heroF.toFixed(1) + 'px'); set('--lblF', clamp(chartH * 0.08, 7, 12).toFixed(1) + 'px'); set('--heroW', heroW + 'px');
    set('--boardTop', (pad + barH + (barH ? gap : 0) + chartH + gap) + 'px');
    set('--u', (Math.min(W, H * 1.4) / 100).toFixed(2) + 'px');
    root.dataset.sz = xs ? 'xs' : sm ? 'sm' : H < 620 ? 'md' : 'lg';
    root.dataset.sides = side ? '1' : '0'; root.dataset.shape = tall ? 'tall' : 'wide';
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cb = els.chart.getBoundingClientRect();
    chart.w = Math.max(10, Math.round(cb.width)); chart.h = Math.max(10, Math.round(cb.height)); chart.dpr = dpr;
    chart.cv.width = chart.w * dpr; chart.cv.height = chart.h * dpr;
    chart.x0 = heroW + (xs ? 4 : 12);
    fx.w = W; fx.h = H; fx.dpr = dpr; fx.cv.width = W * dpr; fx.cv.height = H * dpr;
    bg.w = W; bg.h = H; bg.cv.width = W; bg.cv.height = H;
  }

  /* ---------- The space behind the terminal: a receding grid, soft light, slow data rain. Decoration only. ---------- */
  const bg = { cv: null, g: null, w: 10, h: 10, tx: 0, ty: 0, px: 0, py: 0, rain: Array.from({ length: 26 }, (_, i) => ({ x: (i * 0.618034) % 1, s: 0.25 + ((i * 7) % 10) / 14, l: 0.05 + ((i * 3) % 7) / 60, o: (i * 0.37) % 1 })) };
  const TINT = { idle: [37, 232, 154], open: [255, 194, 74], hodl: [37, 232, 154], closed: [90, 120, 115], settled: [37, 232, 154], moon: [167, 123, 255], win: [255, 194, 74] };
  function drawBg(t) {
    const g = bg.g, W = bg.w, H = bg.h;
    g.clearRect(0, 0, W, H);
    bg.px += (bg.tx - bg.px) * 0.04; bg.py += (bg.ty - bg.py) * 0.04;
    const last = root.classList.contains('last'), tint = last ? [255, 77, 94] : TINT[root.dataset.phase] || TINT.idle, k = 0.5 + 0.5 * Math.sin(t / 2600);
    const blob = (x, y, r, c, a) => { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`); gr.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`); g.fillStyle = gr; g.fillRect(0, 0, W, H); };
    blob(W * (0.22 - bg.px * 0.06), H * (0.05 - bg.py * 0.06), Math.max(W, H) * 0.62, tint, 0.16 + 0.05 * k);
    blob(W * (0.92 - bg.px * 0.1), H * (0.3 - bg.py * 0.1), Math.max(W, H) * 0.5, [140, 96, 255], 0.13);
    blob(W * (0.55 - bg.px * 0.08), H * (1.08 - bg.py * 0.08), Math.max(W, H) * 0.55, [255, 170, 60], 0.1);
    // receding floor grid
    const hz = H * 0.34 - bg.py * H * 0.05, vx = W / 2 - bg.px * W * 0.12, z = (t / 5200) % 1;
    g.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      const p = (i + z) / 12, y = hz + (H - hz) * p * p;
      g.strokeStyle = `rgba(${tint[0]},${tint[1]},${tint[2]},${(0.03 + 0.13 * p).toFixed(3)})`; g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke();
    }
    g.strokeStyle = `rgba(${tint[0]},${tint[1]},${tint[2]},0.07)`; g.beginPath();
    for (let i = -14; i <= 14; i++) { g.moveTo(vx + i * W * 0.02, hz); g.lineTo(vx + i * W * 0.2, H); }
    g.stroke();
    // slow data rain above the horizon
    if (!api.reduced) for (const r of bg.rain) {
      const y = ((r.o + t / 9000 * r.s) % 1.2 - 0.1) * H, x = r.x * W - bg.px * W * 0.05 * r.s, len = r.l * H;
      const gr = g.createLinearGradient(0, y - len, 0, y); gr.addColorStop(0, 'rgba(120,255,214,0)'); gr.addColorStop(1, `rgba(${tint[0]},${tint[1]},${tint[2]},${(0.1 + 0.12 * r.s).toFixed(2)})`);
      g.strokeStyle = gr; g.lineWidth = 1 + r.s; g.beginPath(); g.moveTo(x, y - len); g.lineTo(x, y); g.stroke();
      g.fillStyle = `rgba(220,255,240,${(0.2 + 0.3 * r.s).toFixed(2)})`; g.fillRect(x - 1, y - 1, 2, 2);
    }
  }

  /* ---------- The chart: the history of the round's portfolio. Every candle is something that happened. ---------- */
  const chart = { cv: null, g: null, w: 10, h: 10, dpr: 1, x0: 100, list: [], yMax: 200, yTo: 200, price: 0, priceTo: 0, dim: 0, dimTo: 0, vMax: 20, pulse: 0, flash: null };
  const KCOL = { coin: C.green, diamond: C.cyan, grow: C.cyan, candle: '#b9ff5a', whale: C.blue, moon: C.violet, flat: '#55706b' };
  function chartReset() { chart.list = []; chart.yTo = 200; chart.priceTo = 0; chart.dimTo = 0; chart.dim = 0; chart.vMax = 20; chart.flash = null; }
  function chartPush(kind, from, to) {
    chart.list.push({ kind, o: from, c: to, t0: now() });
    chart.priceTo = to; chart.yTo = Math.max(200, Math.min(to, CAP) * 1.22); chart.vMax = Math.max(chart.vMax, to - from); chart.pulse = now();
    if (kind === 'whale' || kind === 'candle' || kind === 'moon') {         // the instrument reacts to the big prints
      chart.flash = { t0: now(), col: KCOL[kind] };
      els.chart.style.setProperty('--jc', KCOL[kind]); kick(els.chart, 'jolt');
    }
  }
  function niceStep(v) { const p = Math.pow(10, Math.floor(Math.log10(v))), m = v / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }
  function drawChart(t) {
    const g = chart.g, W = chart.w, H = chart.h, xs = root.dataset.sz === 'xs';
    g.setTransform(chart.dpr, 0, 0, chart.dpr, 0, 0); g.clearRect(0, 0, W, H);
    chart.yMax += (chart.yTo - chart.yMax) * 0.12; chart.price += (chart.priceTo - chart.price) * 0.22; chart.dim += (chart.dimTo - chart.dim) * 0.12;
    const tagW = xs ? 4 : clamp(W * 0.085, 36, 64), x0 = chart.x0, x1 = W - tagW, y0 = H * (xs ? 0.14 : 0.12), yv = H * (xs ? 0.9 : 0.93), vh = xs ? 0 : H * 0.15, y1 = yv - vh - (xs ? 0 : H * 0.045), pw = x1 - x0, ph = y1 - y0;
    const Y = v => y1 - Math.min(1.04, v / chart.yMax) * ph;
    const idle = root.dataset.phase === 'idle', breath = 0.5 + 0.5 * Math.sin(t / 1400), live = chart.dim < 0.5;
    // grid: drifts slowly so the terminal never looks frozen
    g.lineWidth = 1;
    const gx = clamp(pw / 9, 14, 60), drift = (t / 90) % gx;
    g.strokeStyle = 'rgba(120,255,214,0.05)'; g.beginPath();
    for (let x = W - drift; x > 0; x -= gx) { g.moveTo(Math.round(x) + .5, 0); g.lineTo(Math.round(x) + .5, H); }
    g.stroke();
    const step = niceStep(chart.yMax / 3.2);
    g.font = `600 ${clamp(H * 0.075, 7, 11)}px "JetBrains Mono",monospace`; g.textAlign = 'left'; g.textBaseline = 'middle';
    for (let v = step; v < chart.yMax * 1.02; v += step) {
      const y = Math.round(Y(v)) + .5;
      g.strokeStyle = 'rgba(120,255,214,0.075)'; g.beginPath(); g.moveTo(x0 - 6, y); g.lineTo(W, y); g.stroke();
      if (!xs) { g.fillStyle = 'rgba(150,196,186,0.45)'; g.fillText((v / 100 >= 1000 ? (v / 100000) + 'K' : v / 100) + '×', x1 + 5, y); }
    }
    g.strokeStyle = 'rgba(120,255,214,0.2)'; g.beginPath(); g.moveTo(x0 - 6, Math.round(y1) + .5); g.lineTo(W, Math.round(y1) + .5); g.stroke();
    if (vh) { g.strokeStyle = 'rgba(120,255,214,0.1)'; g.beginPath(); g.moveTo(x0 - 6, Math.round(yv) + .5); g.lineTo(W, Math.round(yv) + .5); g.stroke(); }

    const L = chart.list, n = L.length, slots = Math.max(xs ? 9 : 12, n + 1), sw = pw / slots, bw = clamp(sw * 0.7, 1.5, 34);
    if (!n) {
      // nothing played yet: a flat line with a cursor waiting for the open
      const cx = x0 + ((t / 26) % pw);
      const grad = g.createLinearGradient(cx - 90, 0, cx, 0); grad.addColorStop(0, 'rgba(37,232,154,0)'); grad.addColorStop(1, 'rgba(37,232,154,0.8)');
      g.strokeStyle = grad; g.lineWidth = 2; g.beginPath(); g.moveTo(Math.max(x0, cx - 90), y1 - 1); g.lineTo(cx, y1 - 1); g.stroke();
      g.shadowColor = C.green; g.shadowBlur = 10; g.fillStyle = C.green; g.globalAlpha = 0.5 + 0.5 * breath; g.beginPath(); g.arc(cx, y1 - 1, xs ? 1.8 : 2.8, 0, 6.3); g.fill(); g.globalAlpha = 1; g.shadowBlur = 0;
      if (!xs) {
        g.font = `700 ${clamp(H * 0.085, 8, 12)}px "JetBrains Mono",monospace`; g.textAlign = 'center';
        g.fillStyle = `rgba(111,144,137,${0.4 + 0.3 * breath})`;
        if ('letterSpacing' in g) g.letterSpacing = '3px';
        g.fillText('AWAITING THE OPEN', x0 + pw / 2, y0 + ph * 0.42);
        if ('letterSpacing' in g) g.letterSpacing = '0px';
      }
      return;
    }
    const alive = 1 - chart.dim * 0.72, grow = c => easeOut(clamp((t - c.t0) / (280 * SPD + 1), 0, 1));
    // area under the closes
    g.beginPath(); g.moveTo(x0, y1);
    L.forEach((c, i) => { g.lineTo(x0 + (i + 0.5) * sw, Y(c.o + (c.c - c.o) * grow(c))); });
    g.lineTo(x0 + (n - 0.5) * sw, y1); g.closePath();
    const ag = g.createLinearGradient(0, y0, 0, y1); ag.addColorStop(0, `rgba(37,232,154,${(0.24 + (idle ? 0.07 * breath : 0)) * alive})`); ag.addColorStop(1, 'rgba(37,232,154,0)');
    g.fillStyle = ag; g.fill();
    // candles and their volume bars
    L.forEach((c, i) => {
      const p = grow(c), x = x0 + (i + 0.5) * sw, yo = Y(c.o), yc = Y(c.o + (c.c - c.o) * p);
      g.globalAlpha = alive;
      if (c.kind === 'flat') { g.fillStyle = KCOL.flat; g.fillRect(x - bw / 2, Math.round(yo) - 1, bw, 2); g.globalAlpha = 1; return; }
      const col = live ? KCOL[c.kind] || KCOL.coin : '#5d7a75', hgt = Math.max(3, yo - yc), fresh = 1 - clamp((t - c.t0) / (1100 * SPD + 1), 0, 1), lastOne = i === n - 1;
      if (bw > 3) { g.strokeStyle = col; g.lineWidth = Math.max(1, bw * 0.1); g.beginPath(); g.moveTo(x, yo + Math.min(4, hgt * .2)); g.lineTo(x, yo - hgt - Math.min(7, hgt * 0.22 + 2)); g.stroke(); }
      if (live && (fresh > 0 || lastOne)) { g.shadowColor = col; g.shadowBlur = 6 + 16 * (fresh > 0 ? fresh : 0.35 + 0.4 * breath); }
      const bgd = g.createLinearGradient(x - bw / 2, 0, x + bw / 2, 0); bgd.addColorStop(0, col); bgd.addColorStop(0.5, live ? '#f4fffa' : col); bgd.addColorStop(1, col);
      g.fillStyle = col; g.fillRect(x - bw / 2, yo - hgt, bw, hgt);
      g.shadowBlur = 0;
      g.globalAlpha = alive * 0.35; g.fillStyle = bgd; g.fillRect(x - bw / 2, yo - hgt, bw, hgt);
      if (vh) {                                                       // volume: how big this print was, on a compressed scale
        const vv = Math.sqrt(Math.min(1, (c.c - c.o) / chart.vMax)) * vh * p;
        g.globalAlpha = alive * (0.4 + 0.5 * fresh); g.fillStyle = col; g.fillRect(x - bw / 2, yv - Math.max(1.5, vv), bw, Math.max(1.5, vv));
      }
      g.globalAlpha = 1;
    });
    // the price line, its last-price dot and tag
    const py = clamp(Y(chart.price), 6, H - 6), lx = x0 + (n - 0.5) * sw, pl = 1 - clamp((t - chart.pulse) / (700 * SPD + 1), 0, 1);
    g.setLineDash([3, 4]); g.lineDashOffset = -(t / 60) % 7; g.strokeStyle = live ? 'rgba(255,194,74,0.6)' : 'rgba(110,140,134,0.5)'; g.lineWidth = 1;
    g.beginPath(); g.moveTo(lx, Math.round(py) + .5); g.lineTo(x1, Math.round(py) + .5); g.stroke(); g.setLineDash([]);
    if (live) {
      g.strokeStyle = C.amber; g.globalAlpha = 0.25 + 0.5 * pl; g.lineWidth = 1.5; g.beginPath(); g.arc(lx, py, 3 + (1 - pl) * 9 + 2 * breath, 0, 6.3); g.stroke(); g.globalAlpha = 1;
      g.shadowColor = C.amber; g.shadowBlur = 10; g.fillStyle = '#fff3d6'; g.beginPath(); g.arc(lx, py, xs ? 1.8 : 2.6, 0, 6.3); g.fill(); g.shadowBlur = 0;
    }
    if (!xs) {
      const fs = clamp(H * 0.085, 8, 12), th = (fs + 7) * (1 + 0.22 * pl);
      if (live) { g.shadowColor = C.amber; g.shadowBlur = 6 + 14 * pl; }
      g.fillStyle = live ? C.amber : '#52706a'; g.beginPath(); g.roundRect(x1 + 1, py - th / 2, tagW - 3, th, 3); g.fill(); g.shadowBlur = 0;
      g.fillStyle = '#1a1000'; g.font = `800 ${fs}px "JetBrains Mono",monospace`; g.textAlign = 'center';
      const x = Math.min(chart.price, CAP) / 100;
      g.fillText(x >= 1000 ? (x / 1000).toFixed(1) + 'K' : x >= 100 ? x.toFixed(0) : x.toFixed(x >= 10 ? 1 : 2), x1 + 1 + (tagW - 3) / 2, py + 0.5);
    }
    // a big print lights the whole instrument
    if (chart.flash) {
      const fp = Math.max(0, (t - chart.flash.t0) / (650 * SPD + 1));
      if (fp >= 1) chart.flash = null;
      else {
        g.globalCompositeOperation = 'lighter'; g.globalAlpha = (1 - fp) * 0.5;
        const fg = g.createRadialGradient(lx, py, 0, lx, py, pw * (0.25 + fp * 0.7)); fg.addColorStop(0, chart.flash.col); fg.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = fg; g.fillRect(0, 0, W, H);
        g.globalAlpha = (1 - fp) * 0.9; g.strokeStyle = chart.flash.col; g.lineWidth = 2; g.beginPath(); g.moveTo(lx, 0); g.lineTo(lx, H); g.stroke();
        g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
      }
    }
    // idle: a slow scan across the plot
    if (idle && !api.reduced) {
      const sx = x0 + ((t / 14) % (pw + 160)) - 80, sg = g.createLinearGradient(sx - 60, 0, sx + 60, 0);
      sg.addColorStop(0, 'rgba(37,232,154,0)'); sg.addColorStop(0.5, 'rgba(37,232,154,0.07)'); sg.addColorStop(1, 'rgba(37,232,154,0)');
      g.fillStyle = sg; g.fillRect(Math.max(x0, sx - 60), 0, 120, H);
    }
  }

  /* ---------- Effects canvas: additive light, pooled sparks, streams. Cosmetic only. ---------- */
  const fx = { cv: null, g: null, w: 10, h: 10, dpr: 1, items: [], last: 0 };
  const PN = 380, pp = { x: new Float32Array(PN), y: new Float32Array(PN), vx: new Float32Array(PN), vy: new Float32Array(PN), life: new Float32Array(PN), max: new Float32Array(PN), size: new Float32Array(PN), grav: new Float32Array(PN), col: new Array(PN).fill('#fff'), next: 0, live: 0 };
  function sparks(x, y, col, n, power, o = {}) {       // pooled particles; o.up = a fountain, o.grav in px/s2
    if (api.reduced || QUICK) return;
    for (let i = 0; i < n; i++) {
      const k = pp.next; pp.next = (k + 1) % PN;
      const a = o.up ? -Math.PI / 2 + (Math.random() - 0.5) * (o.spread || 1.2) : Math.random() * 6.283, s = power * (0.3 + 0.7 * Math.random());
      pp.x[k] = x + (o.jx ? (Math.random() - 0.5) * o.jx : 0); pp.y[k] = y; pp.vx[k] = Math.cos(a) * s; pp.vy[k] = Math.sin(a) * s;
      pp.max[k] = pp.life[k] = (o.life || 520) * (0.6 + 0.8 * Math.random()); pp.size[k] = (o.size || 1.6) * (0.6 + 0.8 * Math.random()) * Math.max(0.6, D / 64);
      pp.grav[k] = o.grav == null ? 520 : o.grav; pp.col[k] = Array.isArray(col) ? col[i % col.length] : col;
    }
    pp.live = PN;
  }
  function fxAdd(dur, draw) { if (api.reduced || QUICK) return; if (fx.items.length > 70) fx.items.shift(); fx.items.push({ t0: now(), dur: Math.max(16, dur * SPD), draw }); }
  function drawFx(t) {
    const g = fx.g, dt = Math.min(50, t - fx.last), frozen = t < holdUntil; fx.last = t;
    g.setTransform(fx.dpr, 0, 0, fx.dpr, 0, 0); g.clearRect(0, 0, fx.w, fx.h);
    if (frozen) for (const it of fx.items) it.t0 += dt;
    if (!fx.items.length && !pp.live) return;
    g.globalCompositeOperation = 'lighter';
    fx.items = fx.items.filter(it => { const p = (t - it.t0) / it.dur; if (p >= 1) return false; if (p >= 0) it.draw(g, p); return true; });
    if (pp.live) {
      let alive = 0; const s = dt / 1000;
      g.lineCap = 'round';
      for (let k = 0; k < PN; k++) {
        if (pp.life[k] <= 0) continue;
        if (!frozen) { pp.life[k] -= dt; pp.vy[k] += pp.grav[k] * s; pp.vx[k] *= 0.985; pp.x[k] += pp.vx[k] * s; pp.y[k] += pp.vy[k] * s; }
        const a = clamp(pp.life[k] / pp.max[k], 0, 1); alive++;
        g.globalAlpha = a; g.strokeStyle = pp.col[k]; g.lineWidth = pp.size[k] * (0.5 + a);
        g.beginPath(); g.moveTo(pp.x[k] - pp.vx[k] * 0.025, pp.y[k] - pp.vy[k] * 0.025); g.lineTo(pp.x[k], pp.y[k]); g.stroke();
      }
      pp.live = alive;
    }
    g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
  }
  const centre = c => { const r = cells[c].getBoundingClientRect(), b = root.getBoundingClientRect(); return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height / 2 }; };
  function ring(x, y, col, r1, life, width) {
    fxAdd(life || 420, (g, p) => { g.globalAlpha = (1 - p) * 0.9; g.strokeStyle = col; g.lineWidth = (width || 2) * (1 - p) * (D / 60) + 0.6; g.beginPath(); g.arc(x, y, D * 0.42 + (r1 - D * 0.42) * easeOut(p), 0, 6.283); g.stroke(); });
  }
  function glow(x, y, col, r, life, peak) {           // soft additive light spilling over the neighbours
    fxAdd(life || 380, (g, p) => {
      const gr = g.createRadialGradient(x, y, 0, x, y, r * (0.6 + 0.4 * easeOut(p))); gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.globalAlpha = (1 - p) * (peak || 0.55); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
    });
  }
  function stars(x, y, col, n, spread, life) {       // four-point sparkles (the Diamond)
    const ps = Array.from({ length: n }, () => ({ dx: (Math.random() - 0.5) * spread, dy: (Math.random() - 0.5) * spread, s: 0.5 + Math.random(), d: Math.random() * 0.4 }));
    fxAdd(life || 620, (g, p) => {
      g.fillStyle = col;
      for (const q of ps) {
        const lp = clamp((p - q.d) / 0.6, 0, 1); if (lp <= 0 || lp >= 1) continue;
        const s = Math.sin(lp * Math.PI) * q.s * D * 0.14, px = x + q.dx, py = y + q.dy - lp * D * 0.12;
        g.globalAlpha = Math.sin(lp * Math.PI);
        g.beginPath(); g.moveTo(px, py - s); g.quadraticCurveTo(px, py, px + s, py); g.quadraticCurveTo(px, py, px, py + s); g.quadraticCurveTo(px, py, px - s, py); g.quadraticCurveTo(px, py, px, py - s); g.fill();
      }
    });
  }
  function stream(a, b, delay, col) {                // motes pulled along a curve from a to b (the Whale)
    const mx = (a.x + b.x) / 2 + (a.y - b.y) * 0.22, my = (a.y + b.y) / 2 + (b.x - a.x) * 0.22;
    const ps = Array.from({ length: 8 }, (_, i) => ({ d: i * 0.055, r: 1.2 + Math.random() * 1.8, j: (Math.random() - 0.5) * D * 0.18 }));
    const life = 620 + delay;
    fxAdd(life, (g, p) => {
      g.fillStyle = col;
      for (const q of ps) {
        const lp = clamp((p * life - delay) / 520 - q.d, 0, 1); if (lp <= 0 || lp >= 1) continue;
        const e = lp * lp, u = 1 - e, x = u * u * a.x + 2 * u * e * mx + e * e * b.x, y = u * u * a.y + 2 * u * e * my + e * e * b.y + q.j * u;
        g.globalAlpha = 0.9 * Math.sin(lp * Math.PI); g.beginPath(); g.arc(x, y, q.r * (D / 60) * (1.2 - e * 0.6), 0, 6.283); g.fill();
      }
    });
  }
  function streaks(life, cols) {                     // the whole stage rushing upward
    const cs = cols || [C.green, C.green, C.violet];
    const ps = Array.from({ length: 50 }, (_, i) => ({ x: Math.random(), y: Math.random(), l: 0.06 + Math.random() * 0.2, s: 0.6 + Math.random() * 1.6, c: cs[i % cs.length] }));
    fxAdd(life, (g, p) => {
      const a = Math.sin(Math.min(1, p * 1.15) * Math.PI);
      for (const q of ps) {
        const y = ((q.y + p * q.s * 2.2) % 1.2) * fx.h - fx.h * 0.1;
        g.globalAlpha = a * 0.5; g.strokeStyle = q.c; g.lineWidth = 1.6; g.beginPath(); g.moveTo(q.x * fx.w, y); g.lineTo(q.x * fx.w, y + q.l * fx.h * (0.4 + a)); g.stroke();
      }
    });
  }
  function flashAll(col, peak, life) { fxAdd(life || 260, (g, p) => { g.globalAlpha = (1 - p) * (peak || 0.2); g.fillStyle = col; g.fillRect(0, 0, fx.w, fx.h); }); }
  function shake(px, ms) { if (!api.reduced && !QUICK && root.animate) root.animate([{ transform: 'translate(0,0)' }, { transform: `translate(${px}px,${-px * .6}px)` }, { transform: `translate(${-px * .7}px,${px * .5}px)` }, { transform: `translate(${px * .4}px,${px * .3}px)` }, { transform: 'translate(0,0)' }], { duration: Math.max(30, ms * SPD), easing: 'ease-out' }); }
  // hit-stop: the picture freezes for a few frames on the biggest impacts
  function hold(ms) { if (api.reduced || QUICK || ms <= 0) return 0; const d = ms * Math.min(1, SPD * 1.4); holdUntil = now() + d; root.classList.add('hold'); return d; }
  const holdSleep = (ctx, ms, extra) => ctx.sleep(hold(ms) / Math.max(SPD, 0.05) + (extra || 0));   // freeze, and wait it out

  function frame(t) {
    requestAnimationFrame(frame);
    if (document.hidden) return;
    if (holdUntil && t >= holdUntil) { holdUntil = 0; root.classList.remove('hold'); }
    if (hero.live) {
      const p = clamp((t - hero.t0) / hero.dur, 0, 1);
      hero.shown = hero.from + (hero.to - hero.from) * easeOut(p);
      if (p >= 1) { hero.shown = hero.to; hero.live = false; }
      els.value.textContent = fmtHero(Math.round(hero.shown / 10) * 10);
    }
    drawBg(t); drawChart(t); drawFx(t);
  }

  /* ---------- HUD pieces ---------- */
  function setHero(v, animate) {
    hero.to = v;
    if (animate && !api.reduced) { hero.from = hero.shown; hero.t0 = now(); hero.dur = Math.max(30, 380 * SPD); hero.live = true; }
    else { hero.shown = v; hero.live = false; els.value.textContent = fmtHero(v); }
    els.sub.textContent = fmtHero(v);
  }
  function bump() { kick(els.value, 'bump'); }
  function setStatus(text, tone) { els.status.lastElementChild.textContent = text; els.status.dataset.tone = tone || ''; }
  function setPhase(p) { root.dataset.phase = p; }
  function setLeds(n, using) { leds.forEach((l, i) => { l.className = i === using ? 'use' : i < n ? 'on' : ''; }); }
  function setCount(n) {
    els.count.firstChild.nodeValue = String(n).padStart(2, '0'); els.slots.textContent = n + '/20';
    for (const list of [meter, strip]) list.forEach((m, i) => { m.classList.toggle('on', i < n); m.classList.toggle('near', n >= 13 && i >= n); });
    root.style.setProperty('--charge', (n / CELLS).toFixed(2));
    root.classList.toggle('charged', n >= 13); root.classList.toggle('full', n >= CELLS);
  }
  const FICON = { coin: 'copper', diamond: 'diamond', candle: 'candle', whale: 'whale', moon: 'moon', grow: 'grow' };
  function addFill(kind, name, text, icon) {
    const row = api.h('div', { class: 'hx-fill f-' + kind, html: art(icon || FICON[kind], 'hx-fi') }, api.h('span', { text: name }), api.h('b', { text }));
    els.fills.prepend(row);
    while (els.fills.children.length > 14) els.fills.lastChild.remove();
  }
  function pop(c, text, cls) {
    const p = api.h('span', { class: 'hx-pop ' + (cls || ''), text });
    cells[c].append(p);
    p.addEventListener('animationend', () => p.remove());
  }
  async function showCard(ctx, cls, html, ms) {
    const card = els.card, g = gen;
    card.className = 'hx-card ' + cls; card.innerHTML = '<div class="hx-card-in">' + html + '</div>'; card.hidden = false;
    await ctx.sleep(ms);
    if (g !== gen) return;
    card.classList.add('out'); await ctx.sleep(180);
    if (g === gen) card.hidden = true;
  }

  /* ---------- Tokens ---------- */
  const MOVES = ['strike', 'rise', 'pulse', 'flip'];   // token moves share the transform, so only one at a time
  function kick(el, cls) {
    if (MOVES.includes(cls)) el.classList.remove(...MOVES); else el.classList.remove(cls);
    void el.offsetWidth; el.classList.add(cls);
  }
  const colOf = tok => (tok.k === 'whale' ? C.blue : tok.k === 'candle' ? C.green : tok.k === 'diamond' ? C.cyan : C[tok.tier]);
  function txt(tok, v) {
    const s = tok.k === 'whale' && v === 0 ? '' : fmtVal(v), short = s.length && s.length <= 3;
    tok.val.textContent = s;
    if (short) tok.val.append(api.h('i', { text: '×' }));
    tok.el.dataset.len = String(clamp(s.length + (short ? 1 : 0), 3, 7));
  }
  function setVal(tok, v) {
    tok.v = v;
    const tier = tok.k === 'coin' ? tierOf(v) : tok.k, up = tok.tier && tier !== tok.tier;
    if (tier !== tok.tier) {
      if (tok.tier) tok.el.classList.remove('t-' + tok.tier);
      tok.el.classList.add('t-' + tier); tok.use.setAttribute('href', '#hx-' + tier); tok.tier = tier;
      cells[tok.c].style.setProperty('--tc', colOf(tok));
    }
    txt(tok, v);
    return up;
  }
  function mint(c, k, v) {
    const el = api.h('div', { class: 'hx-tok k-' + k, style: `--sd:${-((c * 37) % 50) / 10}s` });
    el.innerHTML = art(k === 'coin' ? tierOf(v) : k, 'hx-art') + '<i class="hx-shine"></i><b class="hx-val"></b>';
    const tok = { c, k, v: 0, el, val: el.querySelector('.hx-val'), use: el.querySelector('use'), tier: '', grows: 0 };
    setVal(tok, v);
    cells[c].append(el); cells[c].classList.add('full'); tokens[c] = tok;
    return tok;
  }
  // the printed number ticks from one value to another (the material is already the final one)
  function countTo(tok, from, v, ms) {
    const g = gen, t0 = now(), dur = Math.max(30, ms * SPD);
    if (api.reduced || QUICK) { txt(tok, v); return; }
    const step = () => {
      if (g !== gen || tokens[tok.c] !== tok) return;
      if (now() < holdUntil) { requestAnimationFrame(step); return; }
      const p = clamp((now() - t0) / dur, 0, 1);
      txt(tok, p >= 1 ? v : Math.max(v > 0 && from === 0 ? 10 : 0, Math.round((from + (v - from) * easeOut(p)) / 10) * 10));
      if (p < 1) requestAnimationFrame(step);
    };
    step();
  }
  function clearBoard() {
    for (let c = 0; c < CELLS; c++) { if (tokens[c]) tokens[c].el.remove(); tokens[c] = null; model[c] = 0; cells[c].className = 'hx-cell'; }
    root.querySelectorAll('.hx-pop,.hx-fly,.hx-beam,.hx-tok').forEach(e => e.remove());
    els.board.className = 'hx-board';
  }
  function resetStage() {
    gen++; holdUntil = 0;
    clearBoard(); chartReset(); fx.items = []; pp.life.fill(0); pp.live = 0;
    els.fills.replaceChildren(); els.card.hidden = true; els.win.hidden = true;
    setHero(0); setLeds(0); setCount(0); setStatus('STANDBY');
    els.label.textContent = 'PORTFOLIO'; setPhase('idle'); els.hero.dataset.state = ''; root.classList.remove('last', 'hold', 'winning');
  }
  const filled = () => tokens.reduce((s, t) => s + (t ? 1 : 0), 0);
  const NAME = { coin: 'COIN', diamond: 'DIAMOND', candle: 'CANDLE', whale: 'WHALE' };
  const WEIGHT = { copper: 0, silver: 1, gold: 2, holo: 3, whale: 2, candle: 1, diamond: 1 };
  const lit = (c, col) => { const el = cells[c]; if (!el) return; el.style.setProperty('--lit', col); kick(el, 'lit'); };

  // One token is struck into its slot: drop, squash, shockwave, light on the neighbours. Returns how hard it hit (0-3).
  function strike(t, st) {
    cells[t.c].classList.remove('roll', 'tense');
    const tok = mint(t.c, t.k, t.v), p = centre(t.c), n = filled(), w = WEIGHT[tok.tier], col = colOf(tok), cx = t.c % COLS;
    model[t.c] = t.v;
    kick(tok.el, t.k === 'whale' ? 'rise' : 'strike'); kick(tok.el, 'shine'); kick(cells[t.c], 'hit');
    tok.el.style.setProperty('--w', String(w));
    if (st.locked) tok.el.classList.add('locked');
    if (cx > 0) lit(t.c - 1, col); if (cx < COLS - 1) lit(t.c + 1, col); lit(t.c - COLS, col); lit(t.c + COLS, col);
    glow(p.x, p.y, col, D * (1.5 + w * 0.5), 380 + w * 90, 0.4 + w * 0.1);
    ring(p.x, p.y, col, D * (0.95 + w * 0.3), 380 + w * 70, 2.5 + w);
    if (w >= 2) ring(p.x, p.y, '#ffffff', D * (1.5 + w * 0.45), 520 + w * 80, 2);
    sparks(p.x, p.y + D * 0.2, [col, '#ffffff', col], 6 + w * 9, D * (3 + w * 1.6), { life: 420 + w * 120, grav: 900 });
    if (t.k === 'diamond') stars(p.x, p.y, '#e8fbff', 8, D * 0.95);
    if (t.k === 'whale') snd.whaleRise();
    else { snd.strike(n, w); if (t.k === 'candle') SFX.tone({ f: 880, d: 0.1, type: 'square', g: 0.03, when: 0.03 }); if (t.k === 'diamond') snd.diamond(0); }
    if (w >= 2 && t.k !== 'whale') { shake(clamp(D * 0.03 * w, 1.5, 6), 240 + w * 60); flashAll(col, 0.06 + w * 0.04, 260); bump(); }
    if (t.v > 0) {
      countTo(tok, 0, t.v, 200 + w * 70);
      chartPush(t.k, st.total, st.total + t.v); st.total += t.v;
      addFill(t.k, NAME[t.k], '+' + fmtVal(t.v) + '×', t.k === 'coin' ? tok.tier : t.k);
    }
    setCount(n);
    return t.k === 'whale' ? 0 : w;
  }
  // gold and holo strikes are events: the picture holds for a beat
  async function impact(w, ctx) { if (w >= 2) await holdSleep(ctx, w === 2 ? 70 : 130, w === 3 ? 160 : 60); }
  // A token turns over and shows a new value (Candle doubling, the moon).
  function flipTo(tok, v, label, ctx, k) {
    const g = gen;
    kick(tok.el, 'flip'); pop(tok.c, label, 'x');
    snd.double(k || 0);
    ctx.sleep(130).then(() => {
      if (g !== gen || tokens[tok.c] !== tok) return;
      const from = tok.v, up = setVal(tok, v); kick(tok.el, 'shine'); countTo(tok, from, v, 220);
      if (up) { const p = centre(tok.c), col = colOf(tok); ring(p.x, p.y, col, D * 1.3, 460, 3); sparks(p.x, p.y, [col, '#fff'], 14, D * 4, { grav: 700 }); glow(p.x, p.y, col, D * 2, 420, 0.5); snd.upgrade(); }
    });
  }
  const sync = () => { for (let c = 0; c < CELLS; c++) if (tokens[c] && tokens[c].v !== model[c]) setVal(tokens[c], model[c]); };
  // empty slots roll like a ticker until they resolve
  const rollOn = () => { for (let c = 0; c < CELLS; c++) if (!tokens[c]) { cells[c].classList.remove('miss'); cells[c].classList.add('roll'); } };
  const rollOff = c => { const el = cells[c]; if (el.classList.contains('roll')) { el.classList.remove('roll', 'tense'); kick(el, 'miss'); } };

  /* ---------- Playback of each event ---------- */
  async function playOpen(e, ctx, st) {
    setPhase('open'); setStatus('THE OPEN', 'amber'); els.label.textContent = 'THE OPEN'; els.hero.dataset.state = 'pending'; setMusic(1);
    rollOn(); snd.roll();
    await ctx.sleep(460);
    let seen = 0;
    for (let col = 0; col < COLS; col++) {
      const tense = seen === 2;                     // one token short of HODL with columns still to open
      if (tense) { for (let c = 0; c < CELLS; c++) if (c % COLS >= col && !tokens[c]) cells[c].classList.add('tense'); snd.tense(col); await ctx.sleep(300); }
      else snd.scan(col);
      for (let r = 0; r < ROWS; r++) {
        const c = r * COLS + col, t = e.coins.find(q => q.c === c);
        if (!t) { rollOff(c); continue; }
        const w = strike(t, st); seen++; setHero(st.total, true);
        await impact(w, ctx); await ctx.sleep(80);
      }
      if (!tense) snd.miss();
      await ctx.sleep(tense ? 130 : 85);
    }
    st.total = e.total; setHero(st.total, true);
    await ctx.sleep(240);
  }
  async function playClosed(ctx, st) {
    setPhase('closed'); setStatus('MARKET CLOSED', 'mute'); els.label.textContent = 'MARKET CLOSED'; els.hero.dataset.state = 'closed'; setMusic(0);
    snd.closed();
    tokens.forEach(t => { if (t) { t.el.classList.add('fade'); cells[t.c].classList.remove('full'); } });
    chart.dimTo = 1; chart.priceTo = 0;
    st.total = 0; setHero(0, true);
    await showCard(ctx, 'c-closed', '<b>MARKET CLOSED</b><p>Fewer than 3 tokens. No HODL this round.</p>', 820);
    if (st.g === gen) { clearBoard(); setCount(0); }
  }
  async function playHodl(e, ctx, st) {
    setPhase('hodl'); setStatus('HODL', 'green'); els.label.textContent = 'PORTFOLIO'; els.hero.dataset.state = 'live'; setMusic(2);
    st.locked = true; st.left = e.respins;
    let k = 0;
    for (const t of tokens) if (t) { const tok = t, idx = k; ctx.sleep(idx * 55).then(() => { if (st.g === gen) { tok.el.classList.add('locked'); kick(tok.el, 'pulse'); snd.lock(idx); } }); k++; }
    snd.hodl(); bump();
    ctx.setWin(ctx.units(Math.min(st.total, CAP)), true);
    for (let i = 0; i < 3; i++) ctx.sleep(560 + i * 120).then(() => { if (st.g === gen) setLeds(i + 1); });
    // the stamp lands on the fourth slab of the signature
    ctx.sleep(520).then(() => { if (st.g !== gen) return; hold(90); shake(clamp(D * 0.08, 2, 7), 380); flashAll(C.green, 0.16, 320); sparks(fx.w / 2, fx.h * 0.62, [C.green, '#ffffff', C.amber], 46, D * 7, { life: 700, grav: 500, jx: fx.w * 0.4 }); kick(root, 'slam'); });
    await showCard(ctx, 'c-hodl', '<div class="hx-stamp"><div class="hx-word"><span>H</span><span>O</span><span>D</span><span>L</span></div><p>POSITION LOCKED &middot; <b>3 RESPINS</b></p></div>', 1350);
    setLeds(3);
    await ctx.sleep(100);
  }
  async function candleFx(f, ctx, st) {
    const col = f.c % COLS, tok = tokens[f.c];
    snd.candle();
    const beam = api.h('div', { class: 'hx-beam', style: `left:calc(${col} * (var(--cw) + var(--gap)))` }, api.h('i'));
    els.board.append(beam);
    if (tok) kick(tok.el, 'pulse');
    const before = st.total, base = centre(15 + col);
    sparks(base.x, base.y + D * 0.5, [C.green, '#d6ffea'], 18, D * 6, { up: true, spread: 0.5, life: 520, grav: 300 });
    for (let r = ROWS - 1; r >= 0; r--) {
      await ctx.sleep(80);
      const hit = f.cells.find(h => h.c === r * COLS + col);
      if (!hit || !tokens[hit.c]) continue;
      st.total += hit.v - model[hit.c]; model[hit.c] = hit.v;
      flipTo(tokens[hit.c], hit.v, '×2', ctx, ROWS - 1 - r);
      const p = centre(hit.c); sparks(p.x, p.y, ['#7dffc0', '#ffffff'], 10, D * 3.5, { grav: 600 }); glow(p.x, p.y, C.green, D * 1.5, 320, 0.45);
      setHero(st.total, true);
    }
    if (st.total > before) { chartPush('candle', before, st.total); addFill('candle', 'CANDLE ×2', '+' + fmtVal(st.total - before) + '×'); bump(); await holdSleep(ctx, 60); }
    else addFill('candle', 'CANDLE ×2', 'NO HIT');
    await ctx.sleep(330);
    beam.remove();
  }
  async function whaleFx(f, ctx, st) {
    const tok = tokens[f.c]; if (!tok) return;
    const to = centre(f.c), others = tokens.filter(t => t && t.c !== f.c && model[t.c] > 0);
    snd.whale();
    tok.el.classList.add('pull'); els.board.classList.add('deep');
    ring(to.x, to.y, C.blue, D * 2.4, 900, 3); glow(to.x, to.y, C.blue, D * 3, 1100, 0.4);
    fxAdd(1050 + others.length * 30, (g, p) => {      // the water turning around the Whale
      g.strokeStyle = '#6cc4ff'; g.lineCap = 'round';
      for (let k = 0; k < 4; k++) {
        const r = D * (1.5 - 0.95 * p) * (0.62 + k * 0.16), a0 = p * 9 + k * 1.57;
        g.globalAlpha = Math.sin(p * Math.PI) * (0.55 - k * 0.08); g.lineWidth = Math.max(1, D * 0.04 * (1 - k * 0.15));
        g.beginPath(); g.arc(to.x, to.y, r, a0, a0 + 1.5 + p); g.stroke();
      }
    });
    others.forEach((t, i) => {
      const from = centre(t.c), dx = to.x - from.x, dy = to.y - from.y, len = Math.hypot(dx, dy) || 1, delay = i * 38;
      t.el.style.setProperty('--tx', (dx / len * D * 0.13).toFixed(1) + 'px'); t.el.style.setProperty('--ty', (dy / len * D * 0.13).toFixed(1) + 'px');
      t.el.classList.add('tug');
      stream(from, to, delay, t.k === 'diamond' ? '#bff3ff' : '#6cc4ff');
      if (!api.reduced && !QUICK && root.animate) {  // the value itself flies into the Whale
        const fly = api.h('span', { class: 'hx-fly', text: fmtVal(model[t.c]) + '×', style: `left:${from.x}px;top:${from.y}px` });
        root.append(fly);
        const a = fly.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 0 }, { opacity: 1, offset: 0.15 }, { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.45)`, opacity: 0.9, offset: 0.92 }, { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.2)`, opacity: 0 }],
          { duration: Math.max(30, 560 * SPD), delay: delay * SPD, easing: 'cubic-bezier(.5,0,.9,.5)', fill: 'both' });
        a.onfinish = () => fly.remove();
      }
    });
    await ctx.sleep(430 + others.length * 30);
    countTo(tok, 0, f.v, 520);
    const before = st.total; st.total += f.v; model[f.c] = f.v; tok.v = f.v;
    setHero(st.total, true);
    await ctx.sleep(540);
    others.forEach(t => t.el.classList.remove('tug'));
    tok.el.classList.remove('pull'); els.board.classList.remove('deep'); kick(tok.el, 'pulse'); kick(tok.el, 'shine');
    snd.whaleHit(); shake(clamp(D * 0.07, 2, 7), 360); bump(); flashAll(C.blue, 0.14, 300);
    sparks(to.x, to.y, ['#7fd0ff', '#ffffff', C.blue], 34, D * 6, { life: 700, grav: 500 }); ring(to.x, to.y, '#bfe9ff', D * 1.9, 560, 4); ring(to.x, to.y, C.blue, D * 3, 800, 2);
    chartPush('whale', before, st.total); addFill('whale', 'WHALE', '+' + fmtVal(f.v) + '×');
    pop(f.c, '+' + fmtVal(f.v) + '×', 'w');
    await holdSleep(ctx, 110, 320);
  }
  async function playRespin(e, ctx, st) {
    const pace = st.pace, was = st.left, last = was === 1;
    // down to the final respin: the terminal raises an alert until something lands (or the feature ends).
    // It depends only on the counter, never on what the respin will bring.
    root.classList.toggle('last', last);
    if (last) { setStatus('LAST RESPIN', 'red'); snd.heart(); setMusic(3); }
    else { setStatus('HODL', 'green'); setMusic(2); }
    setLeds(was, was - 1); snd.tick(was);
    rollOn();
    await ctx.sleep((last ? 620 : 300) * pace);
    // 1. diamonds grow
    const grows = (e.fx || []).filter(f => f.k === 'grow');
    if (grows.length) {
      const before = st.total;
      for (const f of grows) {
        const tok = tokens[f.c]; if (!tok) continue;
        const add = f.v - model[f.c], from = model[f.c]; st.total += add; model[f.c] = f.v; tok.grows++; tok.v = f.v;
        countTo(tok, from, f.v, 180); kick(tok.el, 'pulse'); pop(f.c, '+' + fmtVal(add) + '×', 'd');
        const p = centre(f.c); stars(p.x, p.y, '#e8fbff', 5, D * 0.95); glow(p.x, p.y, C.cyan, D * 1.2, 300, 0.35);
        snd.diamond(tok.grows);
        await ctx.sleep(60 * pace);
      }
      chartPush('grow', before, st.total); setHero(st.total, true);
      // one running row for diamond growth instead of a new row every respin
      const top = els.fills.firstElementChild;
      if (top && top.classList.contains('f-grow')) { st.grown += st.total - before; top.lastElementChild.textContent = '+' + fmtVal(st.grown) + '×'; kick(top, 'again'); }
      else { st.grown = st.total - before; addFill('grow', 'DIAMOND UP', '+' + fmtVal(st.grown) + '×'); }
      await ctx.sleep(110 * pace);
    }
    // 2. new tokens
    const landed = e.landed || [];
    for (let c = 0; c < CELLS; c++) if (!tokens[c] && !landed.some(t => t.c === c)) rollOff(c);
    if (!landed.length) snd.miss();
    for (const t of landed) { const w = strike(t, st); setHero(st.total, true); await impact(w, ctx); await ctx.sleep(150 * pace); }
    if (landed.length) { root.classList.remove('last'); setStatus('HODL', 'green'); setMusic(2); setLeds(3); snd.refill(); kick(els.hud, 'refill'); await ctx.sleep(150 * pace); }
    else chartPush('flat', st.total, st.total);
    // 3. candles, 4. whales (in the order the book lists them)
    for (const f of e.fx || []) { if (f.k === 'candle') await candleFx(f, ctx, st); else if (f.k === 'whale') await whaleFx(f, ctx, st); }
    sync();
    st.total = e.total; st.left = e.left; st.respins = e.n;
    setHero(st.total, true); ctx.setWin(ctx.units(Math.min(st.total, CAP)), true);
    setLeds(e.left);
    if (e.left === 0) root.classList.remove('last');
    if (!landed.length) { if (e.left === 0) snd.lastOut(); await ctx.sleep(190 * pace); }
    await ctx.sleep(130 * pace);
  }
  async function playMoon(e, ctx, st) {
    setPhase('moon'); setStatus('TO THE MOON', 'violet'); setMusic(4);
    snd.moon(); streaks(2500);
    els.board.classList.add('moon');
    // the full meter fires
    for (let i = 0; i < CELLS; i++) { const p = centre(i); ctx.sleep(i * 18).then(() => { if (st.g === gen) { ring(p.x, p.y, C.violet, D * 0.9, 360, 2); kick(tokens[i] ? tokens[i].el : cells[i], 'pulse'); } }); }
    await ctx.sleep(420);
    ctx.sleep(120).then(() => { if (st.g !== gen) return; hold(110); shake(clamp(D * 0.09, 2, 8), 460); flashAll(C.violet, 0.22, 380); sparks(fx.w / 2, fx.h * 0.6, [C.violet, '#ffffff', C.amber], 60, D * 8, { life: 900, grav: 400, jx: fx.w * 0.5 }); });
    const card = showCard(ctx, 'c-moon', `<div class="hx-moonart">${art('moon', 'hx-bigmoon')}</div><small>20 / 20 SLOTS FULL</small><b>TO THE MOON</b><em>×${e.x}</em>`, 2050);
    await ctx.sleep(640);
    for (let col = 0; col < COLS; col++) {
      for (let r = ROWS - 1; r >= 0; r--) { const c = r * COLS + col, tok = tokens[c]; if (!tok) continue; model[c] *= e.x; flipTo(tok, model[c], '×' + e.x, ctx, col); }
      await ctx.sleep(130);
    }
    const before = st.total; st.total = e.total;
    chartPush('moon', before, st.total); addFill('moon', 'MOON ×' + e.x, '+' + fmtVal(st.total - before) + '×');
    setHero(st.total, true); bump(); shake(clamp(D * 0.07, 2, 6), 420);
    ctx.setWin(ctx.units(Math.min(st.total, CAP)), true);
    await card;
    sync();
    await ctx.sleep(200);
  }

  /* ---------- Closing the position: the ticket, then (for real wins of 10x and more) the climb ---------- */
  const LAD = v => Math.log10(1 + v / 100) / Math.log10(10001);   // where a multiplier sits on the ladder (0..1)
  async function climb(e, ctx, st) {
    const g = st.g, units = ctx.units(e.payout), w = els.win, names = ['BIG WIN', 'MEGA WIN', 'ALL-TIME HIGH'], marks = [1000, 5000, 25000];
    setMusic(4); root.classList.add('winning');
    w.className = 'hx-win'; w.dataset.tier = '-1'; w.hidden = false;
    els.winS.textContent = 'POSITION CLOSED · PORTFOLIO UP'; els.winT.innerHTML = '&nbsp;'; els.winX.textContent = '0.00×'; els.winA.textContent = ctx.winMoney(0); els.winP.style.width = '0%';
    await ctx.sleep(260);
    let cur = 0, tier = -1;
    const run = async (to, ms) => {                   // count from cur to `to`, ticking
      const from = cur, t0 = now(), dur = Math.max(30, ms * SPD); let lastTick = 0;
      const step = () => {
        if (g !== gen) return;
        const p = clamp((now() - t0) / dur, 0, 1), v = Math.round((from + (to - from) * (1 - Math.pow(1 - p, 2))) / 10) * 10;
        els.winX.textContent = fmtHero(p >= 1 ? to : v); els.winA.textContent = ctx.winMoney(p >= 1 && to === e.payout ? units : Math.round(units * v / e.payout));
        els.winP.style.width = (LAD(p >= 1 ? to : v) * 100).toFixed(1) + '%';
        if (p < 1) { if (now() - lastTick > 62) { lastTick = now(); snd.winTick(LAD(v)); } requestAnimationFrame(step); }
      };
      if (api.reduced || QUICK) { els.winX.textContent = fmtHero(to); els.winA.textContent = ctx.winMoney(Math.round(units * to / e.payout)); els.winP.style.width = (LAD(to) * 100).toFixed(1) + '%'; } else step();
      cur = to; await ctx.sleep(ms);
    };
    const stampTier = async (k, label) => {
      if (g !== gen) return;
      tier = k; w.dataset.tier = String(k); els.winT.textContent = label; kick(els.winT, 'slam'); kick(els.winX, 'bump');
      snd.winHit(k);
      const cols = k >= 2 ? [C.violet, '#ffffff', C.amber, C.cyan] : [C.amber, '#ffffff', C.green];
      flashAll(k >= 2 ? C.violet : C.amber, 0.18 + k * 0.05, 340); shake(clamp(D * (0.06 + k * 0.03), 2, 10), 380 + k * 80);
      sparks(fx.w / 2, fx.h * 0.98, cols, 50 + k * 26, fx.h * (1.5 + k * 0.25), { up: true, spread: 1.5 + k * 0.2, life: 1100 + k * 200, grav: fx.h * 1.7, jx: fx.w * 0.7, size: 2.2 });
      streaks(1300 + k * 300, cols);
      await holdSleep(ctx, 90 + k * 35, 380 + k * 120);
    };
    for (let k = 0; k < 3; k++) if (e.payout >= marks[k]) { await run(marks[k], [750, 950, 1100][k]); await stampTier(k, names[k]); }
    if (e.payout > cur) await run(e.payout, 800 + tier * 150);
    if (e.capped) await stampTier(3, 'MAX WIN');
    else { kick(els.winX, 'bump'); snd.stamp(true); sparks(fx.w / 2, fx.h * 0.55, [C.amber, '#fff'], 30, D * 6, { life: 700, jx: fx.w * 0.3 }); }
    w.classList.add('done');
    await ctx.sleep(1250 + Math.max(0, tier) * 200);
    if (g !== gen) return;
    w.classList.add('out'); await ctx.sleep(260);
    if (g === gen) { w.hidden = true; root.classList.remove('winning'); }
  }
  async function playFinal(e, ctx, st) {
    if (!st.hodl) return;
    // A result below what the round was played for is shown plainly: no stamp of success, no climb.
    const x = e.payout / 100, won = x >= (ctx.cost || 1), big = won && (x >= 10 || e.capped), g = st.g;
    setPhase('settled'); setStatus(e.capped ? 'MAX WIN' : 'POSITION CLOSED', e.capped ? 'violet' : won ? 'green' : 'mute');
    els.label.textContent = e.capped ? 'MAX WIN' : 'PORTFOLIO · FINAL'; els.hero.dataset.state = won ? 'final' : 'flat';
    root.classList.remove('last'); setLeds(0); setHero(e.payout, true); setMusic(won ? 1 : 0);
    ctx.setWin(ctx.units(e.payout), true);
    await ctx.sleep(200);
    let k = 0;
    for (const t of tokens) if (t) { const tok = t; ctx.sleep(k * 24).then(() => { if (g === gen) kick(tok.el, 'pulse'); }); k++; }
    await ctx.sleep(k * 24 + 100);
    // the ticket
    const rows = [['TOKENS', String(filled()).padStart(2, '0') + ' / 20'], ['RESPINS', String(st.respins)], ['PORTFOLIO', fmtHero(e.payout)]];
    const card = els.card;
    card.className = 'hx-card c-ticket' + (won ? '' : ' flat');
    card.innerHTML = `<div class="hx-ticket"><header><span>POSITION CLOSED</span><i></i></header>${rows.map(r => `<div class="hx-trow"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}<div class="hx-tsum"><span>WIN</span><b>${ctx.winMoney(ctx.units(e.payout))}</b></div><em class="hx-seal">${won ? 'FILLED' : 'CLOSED'}</em></div>`;
    card.hidden = false;
    const trs = [...card.querySelectorAll('.hx-trow,.hx-tsum')];
    for (let i = 0; i < trs.length; i++) { await ctx.sleep(105); if (g !== gen) return; trs[i].classList.add('on'); snd.row(i); }
    await ctx.sleep(170); if (g !== gen) return;
    card.querySelector('.hx-seal').classList.add('on'); snd.stamp(won); hold(won ? 70 : 0);
    if (won) { shake(clamp(D * 0.04, 1.5, 4), 240); sparks(fx.w / 2, fx.h * 0.6, [C.green, '#fff', C.amber], 22, D * 5, { life: 600, jx: fx.w * 0.25 }); }
    await ctx.sleep(big ? 620 : won ? 1250 : 1000);
    if (g !== gen) return;
    card.classList.add('out'); await ctx.sleep(180);
    if (g === gen) card.hidden = true;
    if (big) await climb(e, ctx, st);
    setMusic(0);
  }

  /* ---------- Rules text, the panel legend, the intro ---------- */
  const tierRow = (id, name, range) => `<tr><td>${art(id)}${name}</td><td>${range}</td></tr>`;
  const RULES = `
    <h3>How to play</h3>
    <p>HODL is a hold-and-win game on a board of 20 slots (5 columns by 4 rows). Choose a play amount and press PLAY. Every value in the game is a multiple of the play amount: 2× means two times the play amount.</p>
    <h3>The open</h3>
    <p>Each of the 20 slots either stays empty or mints a token (a Coin or a Diamond). With fewer than 3 tokens the market closes and the round wins nothing. With 3 or more tokens, HODL starts.</p>
    <h3>HODL</h3>
    <p>Every token on the board locks in place and the round has 3 respins. On each respin every empty slot can mint a new token. If at least one token lands, the respins go back to 3. If nothing lands, one respin is used up. HODL ends when no respins are left, when all 20 slots are full, or when the portfolio reaches 10,000×. The round wins the PORTFOLIO: the sum of the values of every token on the board.</p>
    <h3>Coins</h3>
    <p>A Coin has one value. Its material always shows its current value, so a Coin that is doubled can change material.</p>
    <table class="hx-wt"><thead><tr><th>Coin</th><th>Values it can land with</th></tr></thead><tbody>
      ${tierRow('copper', 'Copper', '0.2×, 0.3×, 0.4×, 0.5×, 0.6×, 0.8× (any value under 1×)')}
      ${tierRow('silver', 'Silver', '1×, 1.5×, 2×, 3×, 4× (from 1× to under 5×)')}
      ${tierRow('gold', 'Gold', '5×, 8×, 10×, 15× (from 5× to under 25×)')}
      ${tierRow('holo', 'Holo', '25×, 50×, 100× (25× and above)')}
    </tbody></table>
    <h3>Special tokens</h3>
    <table class="hx-wt"><thead><tr><th>Token</th><th>What it does</th></tr></thead><tbody>
      <tr><td>${art('diamond')}Diamond</td><td>Lands with 0.2×, 0.5×, 1× or 2×. At the start of every later respin it grows by the value it landed with.</td></tr>
      <tr><td>${art('candle')}Green Candle</td><td>Lands only during HODL, with 0.2×, 0.5× or 1× of its own. It doubles the value of every other token in its column.</td></tr>
      <tr><td>${art('whale')}Whale</td><td>Lands only during HODL. It takes a value equal to the sum of every other token on the board and keeps it as its own value.</td></tr>
      <tr><td>${art('moon')}To the moon</td><td>If all 20 slots are full, the portfolio is multiplied by 3 before it is won.</td></tr>
    </tbody></table>
    <h3>Order of effects in one respin</h3>
    <ol>
      <li>Every Diamond already on the board grows.</li>
      <li>New tokens land in the empty slots.</li>
      <li>Each Green Candle that just landed doubles the other tokens in its column, including tokens that landed on the same respin. If several Candles land together they act one after another, top row first, left to right.</li>
      <li>Each Whale that just landed collects, in the same order. A Whale collects after the Candles have doubled, and a second Whale also collects the first one.</li>
      <li>The respin counter is updated.</li>
    </ol>
    <h3>BULL RUN</h3>
    <p>BULL RUN is played for 50× the play amount. The open mints at least 6 tokens, so HODL always starts. The rules and the token values are the same; tokens and specials land more often than in a standard round.</p>
    <h3>Max win</h3>
    <p>The most a round can win is 10,000× the play amount. If the portfolio reaches 10,000× the round ends at once and wins 10,000×.</p>`;
  const EXTRA = `<div class="hx-legend">
      <div class="hx-lg-tiers"><span>${art('copper')}<b>&lt;1×</b></span><span>${art('silver')}<b>1×+</b></span><span>${art('gold')}<b>5×+</b></span><span>${art('holo')}<b>25×+</b></span></div>
      <div class="hx-lg-row">${art('whale')}<span><b>WHALE</b> takes the sum of the whole board</span></div>
      <div class="hx-lg-row">${art('candle')}<span><b>CANDLE</b> doubles its column</span></div>
      <div class="hx-lg-row">${art('diamond')}<span><b>DIAMOND</b> grows on every respin</span></div>
      <div class="hx-lg-row">${art('moon')}<span><b>TO THE MOON</b> 20/20 slots: portfolio ×3</span></div>
    </div>`;
  const LOGO = `<svg class="hx-logo" viewBox="0 0 196 60" width="196" height="60" role="img" aria-label="HODL">
    <path class="lg lg1" fill="url(#hxLg)" d="M2 6h12v18h18V6h12v48H32V35H14v19H2z"/>
    <g class="lg lg2"><circle cx="75" cy="30" r="19" fill="none" stroke="url(#hxLo)" stroke-width="11"/><circle cx="75" cy="30" r="24.5" fill="none" stroke="#04140e" stroke-width="2.4" stroke-dasharray="1.6 2.2" opacity=".55"/>
    <path d="M75 18v24" stroke="#b6ffd9" stroke-width="2" stroke-linecap="round"/><rect x="71" y="23" width="8" height="13" rx="1.5" fill="#25e89a"/></g>
    <path class="lg lg3" fill="url(#hxLg)" d="M106 6h20a24 24 0 0 1 0 48h-20zm12 11v26h8a13 13 0 0 0 0-26z"/><path class="lg lg4" fill="url(#hxLg)" d="M160 6h12v37h22v11h-34z"/></svg>`;
  // intro cards: drawn from the same minted tokens (they reference the stage's symbols, so no ids of their own)
  const tk = (id, x, y, d) => `<use href="#hx-${id}" x="${x - d / 2}" y="${y - d / 2}" width="${d}" height="${d}"/>`;
  const lockRing = (x, y, d) => `<circle cx="${x}" cy="${y}" r="${d / 2 + 3}" fill="none" stroke="#25e89a" stroke-width="1.6" opacity=".8"/>`;
  const CARDS = [
    { title: 'LOCK 3 AND HODL', text: 'Three tokens lock the board and start 3 respins. Every new token resets them.',
      art: `<svg viewBox="0 0 200 120"><rect x="4" y="6" width="192" height="108" rx="8" fill="#061416" stroke="#25e89a" stroke-opacity=".35"/>
        ${[0, 1, 2, 3, 4].map(i => `<rect x="${12 + i * 36}" y="18" width="32" height="40" rx="5" fill="#0b2022" stroke="#78ffd6" stroke-opacity=".14"/><rect x="${12 + i * 36}" y="62" width="32" height="40" rx="5" fill="#0b2022" stroke="#78ffd6" stroke-opacity=".14"/>`).join('')}
        ${tk('copper', 28, 38, 28)}${lockRing(28, 38, 28)}${tk('silver', 100, 82, 28)}${lockRing(100, 82, 28)}${tk('gold', 172, 38, 28)}${lockRing(172, 38, 28)}
        <g transform="translate(78 30)"><circle cx="8" cy="8" r="6" fill="#25e89a"/><circle cx="26" cy="8" r="6" fill="#25e89a"/><circle cx="44" cy="8" r="6" fill="#25e89a"/><circle cx="8" cy="8" r="9" fill="#25e89a" opacity=".25"/><circle cx="26" cy="8" r="9" fill="#25e89a" opacity=".25"/><circle cx="44" cy="8" r="9" fill="#25e89a" opacity=".25"/></g></svg>` },
    { title: 'WHALE · CANDLE · DIAMOND', text: 'Whales take the sum of the board, Candles double a column, Diamonds grow every respin.',
      art: `<svg viewBox="0 0 200 120"><circle cx="100" cy="60" r="52" fill="#4a9bff" opacity=".12"/><circle cx="100" cy="60" r="34" fill="#4a9bff" opacity=".14"/>
        <rect x="24" y="8" width="26" height="104" rx="6" fill="#25e89a" opacity=".16" stroke="#7dffc6" stroke-opacity=".6"/><path d="M37 2v116" stroke="#c8ffe2" stroke-width="2" stroke-linecap="round"/>
        ${tk('candle', 37, 84, 40)}${tk('diamond', 166, 46, 46)}${tk('whale', 100, 60, 70)}
        <path d="M150 20l3 8 8 3-8 3-3 8-3-8-8-3 8-3zM182 78l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff"/></svg>` },
    { title: 'TO THE MOON', text: 'Fill all 20 slots and the whole portfolio is multiplied by 3.',
      art: `<svg viewBox="0 0 200 120"><circle cx="150" cy="40" r="46" fill="#a77bff" opacity=".18"/>${tk('moon', 150, 40, 62)}
        ${[0, 1, 2, 3, 4, 5, 6].map(i => { const h = 10 + i * i * 1.7, x = 14 + i * 18, y = 108 - h - i * 6; return `<path d="M${x + 6} ${y - 6}v${h + 12}" stroke="#7dffc6" stroke-width="1.6"/><rect x="${x}" y="${y}" width="12" height="${h}" rx="2" fill="#25e89a" stroke="#d6ffea" stroke-width=".8"/>`; }).join('')}
        ${tk('gold', 30, 30, 24)}${tk('holo', 62, 50, 22)}<path d="M96 14l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff"/></svg>` },
  ];

  LZ.boot({
    id: 'hodl', title: 'HODL', tagline: 'Hold and win, the way traders mean it.', rtp: '96.30', layout: 'side',
    logo: LOGO,
    modes: [
      { name: 'base', label: 'Standard', cost: 1, maxWin: 10000 },
      { name: 'bull', kind: 'feature', label: 'BULL RUN', cost: 50, maxWin: 10000, blurb: 'The open mints at least 6 tokens, so HODL always starts.', confirmTitle: 'Start a BULL RUN?', confirmLabel: 'Start' }
    ],
    introCards: CARDS,
    featureName: 'HODL', statLabel: 'HODLs',
    playLabel: 'PLAY', busyLabel: 'LIVE',
    celebrate: false,                                 // the terminal runs its own climb (see climb())
    rules: RULES, extra: EXTRA,
    mount(st, a) {
      api = a; stage = st;
      build(); layout();
      if ('ResizeObserver' in window) new ResizeObserver(layout).observe(stage); else window.addEventListener('resize', layout);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout).catch(() => {});
      resetStage();
      requestAnimationFrame(frame);
    },
    reset: resetStage,
    onStart() { music.on = true; if (!music.timer) music.timer = setInterval(musicTick, 80); },
    onSound(on) { music.on = !!on && !!music.timer; if (!on) music.next = 0; },
    async play(events, ctx) {
      SPD = ctx.speed(); QUICK = SPD < 0.12; root.style.setProperty('--spd', String(SPD));
      resetStage();
      const st = { g: gen, total: 0, locked: false, left: 0, respins: 0, hodl: false, pace: 1, grown: 0 };
      const nResp = events.filter(e => e && e.type === 'respin').length;
      st.pace = nResp > 20 ? 0.7 : nResp > 13 ? 0.85 : 1;
      for (const e of events) {
        if (!e || st.g !== gen) continue;
        if (e.type === 'open') await playOpen(e, ctx, st);
        else if (e.type === 'closed') await playClosed(ctx, st);
        else if (e.type === 'hodl') { st.hodl = true; await playHodl(e, ctx, st); }
        else if (e.type === 'respin') await playRespin(e, ctx, st);
        else if (e.type === 'moon') await playMoon(e, ctx, st);
        else if (e.type === 'final') await playFinal(e, ctx, st);
      }
      setMusic(0);
      return { feature: st.hodl };
    },
    idle() { setPhase('idle'); setMusic(0); root.classList.remove('last', 'winning'); }
  });
})();
