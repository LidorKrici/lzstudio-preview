/* Beat Drop front end. The reels are a drum machine: 4 tracks x 8 steps.
 * The shell (lz-core.js) owns the wallet, controls and rules sheet; this file draws the groovebox, plays the
 * book's events back as a bar of music and synthesises every sound. Nothing here decides a result:
 * every pad comes from the `bar` events and the totals are the events' totals.
 *
 * Everything that happens in a round sits on one step grid (eighth notes). Sound for a step is scheduled on the
 * AudioContext clock one step ahead; the picture waits for the same instant. So TURBO, the tempo ramp of a long
 * feature and the sound button all take effect within one step, and with no sound the same grid runs on timers. */
(() => {
  'use strict';

  /* ---------- Rules data (same numbers as math/game.mjs; the published books are verified against them) ---------- */
  const TR = [
    { name: 'HAT', c: 'var(--hat)', hex: '#27d8ff', from: 6, wins: { 6: 30, 7: 200, 8: 2000 },
      ico: '<path d="M3 9c3-2.6 15-2.6 18 0M3 14.5c3 2.6 15 2.6 18 0M12 4v16"/>' },
    { name: 'KICK', c: 'var(--kick)', hex: '#ff7a1a', from: 5, wins: { 5: 50, 6: 300, 7: 2000, 8: 15000 },
      ico: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.6" fill="currentColor"/>' },
    { name: 'CLAP', c: 'var(--clap)', hex: '#ff2d95', from: 4, wins: { 4: 100, 5: 600, 6: 4000, 7: 25000, 8: 100000 },
      ico: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>' },
    { name: 'LEAD', c: 'var(--lead)', hex: '#b8ff2e', from: 3, wins: { 3: 200, 4: 1000, 5: 6000, 6: 40000, 7: 120000, 8: 250000 },
      ico: '<path d="M2 16.5L9 6.5v10l7-10v10l6-8"/>' }
  ];
  const BPM_BASE = 124, BPM_WIN = 128, DROP_COST = 80;
  const dropBpm = n => n <= 4 ? 148 : Math.min(230, 148 + 14 * (n - 4));     // the first four bars keep the tempo, then a long feature speeds up bar by bar
  const TIERS = [{ x: 10, label: 'GOLD WIN' }, { x: 50, label: 'PLATINUM WIN' }, { x: 250, label: 'DIAMOND WIN' }];
  const PCOL = ['39,216,255', '255,122,26', '255,45,149', '184,255,46', '255,201,60', '255,255,255'];
  const LOGO_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="1" width="10" height="10" rx="2.6" fill="#27d8ff"/><rect x="13" y="1" width="10" height="10" rx="2.6" fill="#ff7a1a"/><rect x="1" y="13" width="10" height="10" rx="2.6" fill="#ff2d95"/><rect x="13" y="13" width="10" height="10" rx="2.6" fill="#b8ff2e"/></svg>';
  const LOGO = `<span class="bd-logo">${LOGO_ICON}<span><i>BEAT</i> <b>DROP</b></span></span>`;
  // The DROP mark: a heavy arrow falling onto an impact line.
  const DROP_MARK = '<svg class="dm" viewBox="0 0 48 48" aria-hidden="true"><path class="sl" d="M9.5 4v10M38.5 4v10"/><path class="ar" d="M24 39.5L8.5 21H18V5.5h12V21h9.5z"/><path class="rp" d="M12 43.5q12 4.5 24 0"/></svg>';
  const group = s => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const fx = v => group(String(+(v / 100).toFixed(2))) + '×';          // hundredths -> "0.3×", "2,500×"
  let uidN = 0;
  const uid = () => 'bdg' + (++uidN).toString(36);

  let api, S, stage, dev, cur = null, run = 0, mode = 'base', roundNo = 0, frozen = false;
  const el = {}, rows = [], cols = [];
  const STOP = {};

  /* ---------- Time: one clock for sound and picture ---------- */
  const hack = () => (api.fast ? 0.45 : 1) / api.speed();          // 1 in real play; larger only under the QA speed-up
  const rate = () => (api.fast ? 0.5 : 1) / hack();                // TURBO = double time
  const quick = () => hack() > 3;
  const Clock = {
    a: null, off: 0, lastA: 0, lastP: 0,
    begin() {
      const c = ac();
      if (c && c.state === 'running') { this.a = c; this.lastA = c.currentTime; this.lastP = performance.now(); }
      else { this.a = null; this.off = 0; }
    },
    now() {
      const p = performance.now();
      if (this.a) {
        const t = this.a.currentTime;
        if (t !== this.lastA) { this.lastA = t; this.lastP = p; return t; }
        const gap = (p - this.lastP) / 1000;
        if (gap < 0.3 && this.a.state === 'running') return t + Math.min(gap, 0.02);
        this.off = t + Math.min(gap, 0.02) - p / 1000; this.a = null;        // the audio clock stalled: carry on with timers
      }
      return p / 1000 + this.off;
    },
    // master time -> AudioContext time (null when there is no sound, or it is too late to play it)
    audio(t) {
      const c = ac(); if (!c) return null;
      const ta = this.a === c ? t : c.currentTime + (t - this.now());
      return ta < c.currentTime - 0.03 ? null : Math.max(ta, c.currentTime + 0.002);
    }
  };
  function until(t, my) {
    return new Promise((res, rej) => {
      const tick = () => {
        if (my !== run) return rej(STOP);
        const left = t - Clock.now();
        if (left <= 0.003) res(); else setTimeout(tick, Math.min(200, Math.max(1, left * 1000 - 2)));
      };
      tick();
    });
  }
  const stepLen = bpm => 30 / bpm * rate();
  function cue(au, s, t, d) { if (!au) return; const ta = Clock.audio(t); if (ta != null) snd(() => au(s, ta, d)); }
  /* The sequencer. Runs `n` steps from time `t`: au(s, audioTime, stepSeconds) is called one step ahead of each
   * step to schedule its sound, vis(s, stepSeconds) on time to show it. Tempo is read again at every step.
   * Returns the time of the step after the last one, where the next sequence starts. */
  async function steps(t, n, bpm, au, vis, my) {
    const B = typeof bpm === 'function' ? bpm : () => bpm;
    if (t < Clock.now() - 0.25) t = Clock.now() + 0.02;                    // fell behind (hidden tab): start again from now
    let d = stepLen(B());
    cue(au, 0, t, d);
    for (let s = 0; s < n; s++) {
      await until(t, my);
      if (vis) vis(s, d);
      d = stepLen(B()); t += d;
      if (s < n - 1) cue(au, s + 1, t, d);
    }
    return t;
  }

  /* ---------- Audio engine: a small synth studio on its own buses, into the shell's master ---------- */
  const A = { c: null };
  function ac() {
    if (!api || quick()) return null;
    const c = S.ctx(); if (!c || !S.out) return null;
    if (A.c !== c) { try { buildBus(c); } catch (e) { A.c = null; return null; } }
    return c;
  }
  const tag = (n, name) => { n.__bd = name; return n; };                  // lets tools/audio-check.mjs meter each bus
  const gn = (c, v) => { const g = c.createGain(); g.gain.value = v; return g; };
  const bq = (c, type, f, q) => { const b = c.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q) b.Q.value = q; return b; };
  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  function buildBus(c) {
    // three instrument buses -> mix -> tone filter -> soft saturation -> glue compressor -> shell master
    A.drums = tag(gn(c, 1), 'drums'); A.music = tag(gn(c, 1), 'lead'); A.back = tag(gn(c, 1), 'backing'); A.mix = gn(c, 0.84);
    A.filt = bq(c, 'lowpass', 18000, 0.5);
    A.sat = c.createWaveShaper();
    const cv = new Float32Array(257); for (let i = 0; i < 257; i++) { const x = i / 128 - 1; cv[i] = Math.tanh(1.3 * x) / Math.tanh(1.3); }
    A.sat.curve = cv; A.sat.oversample = '2x';
    A.comp = c.createDynamicsCompressor();
    A.comp.threshold.value = -17; A.comp.knee.value = 16; A.comp.ratio.value = 2.4; A.comp.attack.value = 0.012; A.comp.release.value = 0.2;
    A.outg = tag(gn(c, 0.92), 'bus');
    for (const b of [A.drums, A.music, A.back]) b.connect(A.mix);
    A.mix.connect(A.filt); A.filt.connect(A.sat); A.sat.connect(A.comp); A.comp.connect(A.outg); A.outg.connect(S.out);
    A.an = c.createAnalyser(); A.an.fftSize = 512; A.an.smoothingTimeConstant = 0.72; A.outg.connect(A.an);
    A.bins = new Uint8Array(A.an.frequencyBinCount); A.wave = new Uint8Array(A.an.fftSize);
    // echo send: dotted eighth, low-passed in the loop, feedback well under 1
    A.send = gn(c, 1); A.dly = c.createDelay(1); A.dly.delayTime.value = 0.363; A.fb = gn(c, 0.3); A.dlp = bq(c, 'lowpass', 2600); A.wet = tag(gn(c, 0.55), 'echo');
    A.send.connect(A.dly); A.dly.connect(A.dlp); A.dlp.connect(A.fb); A.fb.connect(A.dly); A.dlp.connect(A.wet); A.wet.connect(A.mix);
    // reverb send: a small club room made from shaped noise
    A.rvIn = gn(c, 1); A.rv = c.createConvolver(); A.rvOut = tag(gn(c, 2.4), 'reverb');
    const len = Math.floor(c.sampleRate * 1.7), ir = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch); let lp = 0;
      for (let i = 0; i < len; i++) { const k = i / len; lp += ((Math.random() * 2 - 1) - lp) * (0.55 - 0.42 * k); d[i] = lp * Math.pow(1 - k, 2.6) * (i < 300 ? i / 300 : 1); }
    }
    A.rv.buffer = ir; A.rvIn.connect(A.rv); A.rv.connect(A.rvOut); A.rvOut.connect(A.mix);
    // idle room tone, straight to the master, very quiet
    A.idle = tag(gn(c, 0), 'idle'); A.idle.connect(S.out);
    const nl = Math.floor(c.sampleRate * 2), buf = c.createBuffer(1, nl, c.sampleRate), nd = buf.getChannelData(0);
    for (let i = 0; i < nl; i++) nd[i] = Math.random() * 2 - 1;
    A.noise = buf;
    A.c = c;
  }
  // helpers: every voice is built from short-lived nodes that are disconnected when its source ends
  function osc(type, f, t, d) { const o = A.c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t); o.start(t); o.stop(t + d); return o; }
  function nz(t, d) { const s = A.c.createBufferSource(); s.buffer = A.noise; s.loop = true; s.start(t, Math.random() * 1.5); s.stop(t + d); return s; }
  function fin(src, nodes) { src.onended = () => { for (const n of nodes) { try { n.disconnect(); } catch (e) { /* gone */ } } }; }
  function chain(src, ...nodes) { let p = src; for (const n of nodes) { p.connect(n); p = n; } fin(src, [src, ...nodes.slice(0, -1)]); }
  // connects the last node of a voice to its bus plus optional reverb / echo sends; returns the nodes to release
  function route(g, dest, rev, echo) {
    const out = [g]; g.connect(dest);
    if (rev) { const s = gn(A.c, rev); g.connect(s); s.connect(A.rvIn); out.push(s); }
    if (echo) { const s = gn(A.c, echo); g.connect(s); s.connect(A.send); out.push(s); }
    return out;
  }
  function ad(p, t, peak, a, d) { p.setValueAtTime(0.0001, t); p.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a); p.exponentialRampToValueAtTime(0.0001, t + a + d); }
  function duck(t, depth) {
    A.music.gain.setTargetAtTime(depth, t, 0.004); A.music.gain.setTargetAtTime(1, t + 0.07, 0.07);
    A.back.gain.setTargetAtTime(depth * 0.8, t, 0.004); A.back.gain.setTargetAtTime(1, t + 0.08, 0.09);
  }
  const snd = fn => { try { fn(); } catch (e) { /* a sound must never break a round */ } };

  // KICK: pitch-swept sine with a click
  function kick(t, heavy, v = 1) {
    const c = A.c, o = osc('sine', heavy ? 185 : 158, t, 0.6), g = gn(c, 0);
    o.frequency.exponentialRampToValueAtTime(heavy ? 47 : 52, t + (heavy ? 0.12 : 0.085));
    o.frequency.exponentialRampToValueAtTime(heavy ? 40 : 46, t + 0.4);
    ad(g.gain, t, (heavy ? 0.25 : 0.22) * v, 0.003, heavy ? 0.42 : 0.27);
    chain(o, g, A.drums);
    const n = nz(t, 0.04), hp = bq(c, 'highpass', 1700), ng = gn(c, 0);
    ad(ng.gain, t, 0.065 * v, 0.001, 0.02);
    chain(n, hp, ng, A.drums);
    duck(t, heavy ? 0.5 : 0.66);
  }
  // HAT: filtered noise, closed or open
  function hat(t, open, heavy, v = 1) {
    const c = A.c, d = open ? (heavy ? 0.2 : 0.24) : 0.05, n = nz(t, d + 0.04), hp = bq(c, 'highpass', heavy ? 6400 : 7400), pk = bq(c, 'peaking', 9800, 1.6), g = gn(c, 0);
    pk.gain.value = 6;
    ad(g.gain, t, (open ? 0.055 : 0.07) * v, 0.001, d);
    n.connect(hp); hp.connect(pk); pk.connect(g); fin(n, [n, hp, pk, ...route(g, A.drums, open ? 0.12 : 0.05)]);
  }
  // CLAP: three quick noise bursts and a tail in the room (plus a snare body in the heavy kit)
  function clap(t, heavy, v = 1) {
    const c = A.c, n = nz(t, 0.4), bp = bq(c, 'bandpass', heavy ? 1650 : 1350, 1.1), g = gn(c, 0), p = g.gain, pk = 0.15 * v;
    p.setValueAtTime(0.0001, t);
    for (const k of [0, 0.011, 0.022]) { p.linearRampToValueAtTime(pk, t + k + 0.002); p.exponentialRampToValueAtTime(pk * 0.2, t + k + 0.01); }
    p.linearRampToValueAtTime(pk, t + 0.035); p.exponentialRampToValueAtTime(0.0001, t + 0.035 + (heavy ? 0.24 : 0.17));
    n.connect(bp); bp.connect(g); fin(n, [n, bp, ...route(g, A.drums, 0.3)]);
    if (heavy) { const o = osc('triangle', 215, t, 0.16), og = gn(c, 0); o.frequency.exponentialRampToValueAtTime(150, t + 0.09); ad(og.gain, t, 0.09 * v, 0.002, 0.1); chain(o, og, A.drums); }
  }
  function snare(t, v, f) {
    const c = A.c, n = nz(t, 0.12), bp = bq(c, 'bandpass', 2100, 0.8), g = gn(c, 0);
    ad(g.gain, t, v, 0.001, 0.07); n.connect(bp); bp.connect(g); fin(n, [n, bp, ...route(g, A.drums, 0.2)]);
    const o = osc('triangle', f, t, 0.1), og = gn(c, 0); o.frequency.exponentialRampToValueAtTime(f * 0.7, t + 0.06); ad(og.gain, t, v * 0.7, 0.001, 0.055); chain(o, og, A.drums);
  }
  function crash(t, v = 1, len = 1.3) {
    const n = nz(t, len + 0.2), hp = bq(A.c, 'highpass', 2600), g = gn(A.c, 0); ad(g.gain, t, 0.1 * v, 0.002, len);
    n.connect(hp); hp.connect(g); fin(n, [n, hp, ...route(g, A.drums, 0.35)]);
  }
  // LEAD: detuned saws and a sub square through a resonant low-pass with its own envelope
  function lead(t, midi, heavy, len, v = 1) {
    const c = A.c, f = mtof(midi), det = heavy ? [-12, 0, 12] : [-7, 7], lp = bq(c, 'lowpass', 400, heavy ? 5 : 7), out = gn(c, 0), pre = gn(c, 1 / (det.length + 0.6));
    lp.frequency.setValueAtTime(420, t); lp.frequency.exponentialRampToValueAtTime(heavy ? 5200 : 3400, t + 0.012); lp.frequency.exponentialRampToValueAtTime(680, t + len);
    ad(out.gain, t, (heavy ? 0.105 : 0.1) * v, 0.005, len);
    pre.connect(lp); lp.connect(out);
    const rel = [pre, lp, ...route(out, A.music, 0.16, 0.26)];
    det.forEach((dt, i) => { const o = osc('sawtooth', f, t, len + 0.06); o.detune.value = dt; o.connect(pre); if (!i) fin(o, rel); });
    const sq = osc('square', f / 2, t, len + 0.06), sqg = gn(c, 0.6); chain(sq, sqg, pre);
  }
  function bass(t, midi, len, v = 1, bright = 0) {
    const c = A.c, f = mtof(midi), lp = bq(c, 'lowpass', 160, 3), g = gn(c, 0);
    lp.frequency.setValueAtTime(140 + bright * 300, t); lp.frequency.exponentialRampToValueAtTime(420 + bright * 1300, t + 0.02); lp.frequency.exponentialRampToValueAtTime(150 + bright * 200, t + len);
    ad(g.gain, t, 0.14 * v, 0.006, len);
    const o = osc('sawtooth', f, t, len + 0.05), s = osc('sine', f, t, len + 0.05), sgn = gn(c, 0.8);
    lp.connect(g); g.connect(A.back); o.connect(lp); chain(s, sgn, g);
    fin(o, [o, lp, g]);
  }
  // chord stab: the layer that makes a winning bar sound full
  function stab(t, midis, len, v = 1, cut = 2600, wah = false) {
    const c = A.c, lp = bq(c, wah ? 'bandpass' : 'lowpass', 500, wah ? 3.2 : 1.2), g = gn(c, 0), pre = gn(c, 1 / midis.length);
    if (wah) { lp.frequency.setValueAtTime(450, t); lp.frequency.exponentialRampToValueAtTime(cut, t + len * 0.45); lp.frequency.exponentialRampToValueAtTime(600, t + len); }
    else { lp.frequency.setValueAtTime(cut, t); lp.frequency.exponentialRampToValueAtTime(Math.max(300, cut * 0.22), t + len); }
    ad(g.gain, t, 0.12 * v, 0.006, len);
    pre.connect(lp); lp.connect(g);
    const rel = [pre, lp, ...route(g, A.back, 0.28)];
    midis.forEach((m, i) => { for (const dt of [-8, 8]) { const o = osc('sawtooth', mtof(m), t, len + 0.05); o.detune.value = dt; o.connect(pre); if (!i && dt < 0) fin(o, rel); } });
  }
  // pad swell: the soft chord under a bar, one swell per beat so it pumps in tempo
  function swell(t, midis, len, v = 1, cut = 700) {
    const c = A.c, lp = bq(c, 'lowpass', cut, 0.8), g = gn(c, 0), pre = gn(c, 1 / midis.length), p = g.gain, pk = 0.055 * v;
    p.setValueAtTime(0.0001, t); p.exponentialRampToValueAtTime(pk, t + Math.min(0.09, len * 0.4)); p.setValueAtTime(pk, t + len * 0.6); p.exponentialRampToValueAtTime(0.0001, t + len);
    pre.connect(lp); lp.connect(g);
    const rel = [pre, lp, ...route(g, A.back, 0.35)];
    midis.forEach((m, i) => { for (const dt of [-9, 9]) { const o = osc('sawtooth', mtof(m), t, len + 0.04); o.detune.value = dt; o.connect(pre); if (!i && dt < 0) fin(o, rel); } });
  }
  function pluck(t, midi, v = 1) {          // arpeggio note
    const c = A.c, o = osc('triangle', mtof(midi), t, 0.2), o2 = osc('sawtooth', mtof(midi), t, 0.2), lp = bq(c, 'lowpass', 2800, 2), g = gn(c, 0), g2 = gn(c, 0.35);
    lp.frequency.setValueAtTime(3200, t); lp.frequency.exponentialRampToValueAtTime(700, t + 0.15);
    ad(g.gain, t, 0.045 * v, 0.003, 0.15);
    o.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); fin(o2, [o2, g2]);
    fin(o, [o, lp, ...route(g, A.back, 0.22, 0.32)]);
  }
  function bell(t, midi, v = 1, len = 0.4) {
    const c = A.c, f = mtof(midi), g = gn(c, 0);
    ad(g.gain, t, 0.06 * v, 0.002, len);
    const o1 = osc('sine', f, t, len + 0.05), o2 = osc('sine', f * 2.76, t, len + 0.05), g2 = gn(c, 0.28);
    o1.connect(g); chain(o2, g2, g);
    fin(o1, [o1, ...route(g, A.music, 0.3, 0.3)]);
  }
  function blip(t, midi, v = 1) {          // a track just reached a winning count
    for (const [k, m] of [[0, midi], [0.05, midi + 7]]) {
      const o = osc('triangle', mtof(m), t + k, 0.16), g = gn(A.c, 0); ad(g.gain, t + k, 0.07 * v, 0.003, 0.11); chain(o, g, A.music);
    }
  }
  // gain pad: a run of glassy bells, one per multiplier point
  function sndGold(t, v) {
    const notes = [88, 93, 96, 100, 105];
    for (let i = 0; i < v && i < 5; i++) bell(t + i * 0.034, notes[i], 0.95 - i * 0.06, 0.42);
    const n = nz(t, 0.25), hp = bq(A.c, 'highpass', 9000), g = gn(A.c, 0); ad(g.gain, t, 0.03, 0.003, 0.2); chain(n, hp, g, A.drums);
  }
  // DROP pad: a pitch dive over a sub thump; each one in a bar starts a fourth higher
  function sndDropPad(t, k) {
    const c = A.c, f0 = 587 * Math.pow(2, k * 5 / 12);
    const o = osc('sawtooth', f0, t, 0.42), lp = bq(c, 'lowpass', 2600, 4), g = gn(c, 0);
    o.frequency.exponentialRampToValueAtTime(f0 / 6, t + 0.3);
    lp.frequency.setValueAtTime(2600, t); lp.frequency.exponentialRampToValueAtTime(420, t + 0.32);
    ad(g.gain, t, 0.12, 0.004, 0.34); o.connect(lp); lp.connect(g); fin(o, [o, lp, ...route(g, A.drums, 0.3)]);
    const s = osc('sine', 112, t, 0.36), sg = gn(c, 0); s.frequency.exponentialRampToValueAtTime(44, t + 0.2); ad(sg.gain, t, 0.17, 0.003, 0.3); chain(s, sg, A.drums);
    const n = nz(t, 0.3), hp = bq(c, 'highpass', 5200), ng = gn(c, 0); ad(ng.gain, t, 0.045, 0.012, 0.24); chain(n, hp, ng, A.drums);
    duck(t, 0.55);
  }
  // one step of a sweep (noise + saw), so a riser can follow the tempo: k0..k1 are positions 0..1 along the rise
  function riseSeg(t, d, k0, k1, v = 1) {
    const c = A.c, n = nz(t, d + 0.03), bp = bq(c, 'bandpass', 300, 1.3), g = gn(c, 0), f = k => 300 * Math.pow(30, k), a = k => 0.004 + 0.105 * k * k;
    bp.frequency.setValueAtTime(f(k0), t); bp.frequency.exponentialRampToValueAtTime(f(k1), t + d);
    g.gain.setValueAtTime(a(k0) * v, t); g.gain.linearRampToValueAtTime(a(k1) * v, t + d); g.gain.linearRampToValueAtTime(0.0001, t + d + 0.02);
    chain(n, bp, g, A.drums);
    const o = osc('sawtooth', 110 * Math.pow(8, k0), t, d + 0.03), lp = bq(c, 'lowpass', 500 + 5500 * k1, 2), og = gn(c, 0);
    o.frequency.exponentialRampToValueAtTime(110 * Math.pow(8, k1), t + d);
    og.gain.setValueAtTime(0.0001, t); og.gain.linearRampToValueAtTime(0.065 * k1 * v, t + 0.012); og.gain.setValueAtTime(0.065 * k1 * v, t + d - 0.006); og.gain.linearRampToValueAtTime(0.0001, t + d + 0.012);
    chain(o, lp, og, A.drums);
  }
  // two DROP pads are down and a third can still land: a tense shimmer, one step at a time
  function antSeg(t, d, k) {
    const c = A.c, n = nz(t, d + 0.03), bp = bq(c, 'bandpass', 900 + 3800 * k, 3), g = gn(c, 0), trem = gn(c, 0.55), lfo = osc('sine', 10 + 12 * k, t, d + 0.03), lg = gn(c, 0.45);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.03 + 0.04 * k, t + 0.02); g.gain.setValueAtTime(0.03 + 0.04 * k, t + d - 0.01); g.gain.linearRampToValueAtTime(0.0001, t + d + 0.02);
    chain(lfo, lg, trem.gain); chain(n, bp, trem, g, A.drums);
  }
  function sndPre(t, d) {                 // a short breath into the downbeat
    const n = nz(t, d + 0.03), hp = bq(A.c, 'highpass', 6000), g = gn(A.c, 0);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.04, t + Math.max(0.02, d - 0.01)); g.gain.linearRampToValueAtTime(0.0001, t + d + 0.01);
    chain(n, hp, g, A.drums);
  }
  // the impact of THE DROP: sub boom, crash, heavy kick, a wide chord and a falling swoop
  function sndImpact(t) {
    const c = A.c, s = osc('sine', 70, t, 1.3), sg = gn(c, 0);
    s.frequency.exponentialRampToValueAtTime(31, t + 0.8); ad(sg.gain, t, 0.25, 0.004, 1.1); chain(s, sg, A.drums);
    crash(t, 1.1, 1.4); kick(t, true);
    stab(t, [45, 57, 60, 64, 69], 1.0, 1.25, 5200);
    const o = osc('sawtooth', 1760, t, 0.6), lp = bq(c, 'lowpass', 3000, 2), og = gn(c, 0); o.frequency.exponentialRampToValueAtTime(110, t + 0.5); ad(og.gain, t, 0.05, 0.004, 0.5); chain(o, lp, og, A.music);
  }
  // in the pocket: a wah chord stab over a walking bass (one per step)
  const POCKET_CH = [[57, 60, 64, 67], [57, 60, 62, 65], [59, 62, 64, 67]], POCKET_B = [45, 50, 52];
  function sndPocket(t, d, i) {
    stab(t, POCKET_CH[i % 3], Math.min(0.3, d * 0.9), 0.8, 2400, true); bass(t, POCKET_B[i % 3], Math.min(0.26, d * 0.85), 0.8, 0.5);
    if (!i) bell(t, 93, 0.8, 0.5); else if (i === 2) bell(t, 100, 0.8, 0.6);
  }
  function sndGainUse(t, g) {             // GAIN multiplies the bar: a quick upward zap
    const o = osc('sawtooth', 220, t, 0.2), lp = bq(A.c, 'lowpass', 2400, 3), og = gn(A.c, 0);
    o.frequency.exponentialRampToValueAtTime(Math.min(2400, 600 + g * 130), t + 0.13); ad(og.gain, t, 0.06, 0.004, 0.15); chain(o, lp, og, A.music);
  }
  const SCALE = [69, 72, 74, 76, 79, 81, 84, 86, 88, 91, 93, 96, 98, 100];
  function sndGainUp(t, g) {              // GAIN goes up: two notes that climb with every level
    const i = Math.max(0, Math.min(SCALE.length - 3, g - 2));
    bell(t, SCALE[i], 1, 0.3); bell(t + 0.06, SCALE[i + 2], 1, 0.45);
    const n = nz(t, 0.1), hp = bq(A.c, 'highpass', 5000), ng = gn(A.c, 0); ad(ng.gain, t, 0.035, 0.002, 0.07); chain(n, hp, ng, A.drums);
  }
  function sndBank(t) { bell(t, 88, 0.9, 0.3); bell(t + 0.045, 93, 0.9, 0.4); }
  // end of THE DROP: a held chord while the whole bus is filtered down, then the filter opens again
  function sndEnd(t) {
    const c = A.c, f = A.filt.frequency;
    stab(t, [45, 57, 60, 64, 71], 2.1, 1.1, 3200); bass(t, 33, 1.7, 1, 0.3); kick(t, true, 0.9);
    const o = osc('sawtooth', 440, t, 1.4), lp = bq(c, 'lowpass', 2200, 2), og = gn(c, 0); o.frequency.exponentialRampToValueAtTime(82, t + 1.3); ad(og.gain, t, 0.05, 0.01, 1.3); chain(o, lp, og, A.music);
    f.cancelScheduledValues(t); f.setValueAtTime(18000, t); f.exponentialRampToValueAtTime(240, t + 1.6); f.setValueAtTime(240, t + 2.2); f.exponentialRampToValueAtTime(18000, t + 2.5);
  }
  function openFilter() { const c = A.c; if (!c) return; snd(() => { A.filt.frequency.cancelScheduledValues(c.currentTime); A.filt.frequency.setValueAtTime(18000, c.currentTime); }); }

  /* Idle: a held chord through a slow filter, no drums and no notes, so nothing can be taken for a result.
   * It fades in a few seconds after a round, lasts under a minute and stops the moment a round starts. */
  const Idle = { on: false, wait: 0, off: 0, nodes: null };
  function idleStart() {
    const c = ac(); if (Idle.on || !c || api.busy || document.hidden) return;
    snd(() => {
      const t = c.currentTime + 0.05, life = 46, lp = bq(c, 'lowpass', 420, 1.2), g = gn(c, 0), lfo = c.createOscillator(), lg = gn(c, 170), list = [lp, g, lg];
      lfo.frequency.value = 0.07; lfo.connect(lg); lg.connect(lp.frequency); lfo.start(t); lfo.stop(t + life);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.28, t + 5); g.gain.setValueAtTime(0.28, t + life - 8); g.gain.exponentialRampToValueAtTime(0.0001, t + life);
      lp.connect(g); g.connect(A.idle);
      const oscs = [lfo];
      for (const m of [45, 52, 57, 60, 64]) for (const dt of [-6, 6]) { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(m); o.detune.value = dt; o.connect(lp); o.start(t); o.stop(t + life); oscs.push(o); }
      A.idle.gain.cancelScheduledValues(c.currentTime); A.idle.gain.setValueAtTime(0.03, c.currentTime);
      Idle.nodes = { oscs, list }; Idle.on = true;
      clearTimeout(Idle.off); Idle.off = setTimeout(() => idleStop(), life * 1000);
    });
  }
  function idleStop() {
    clearTimeout(Idle.wait); clearTimeout(Idle.off);
    if (!Idle.on) return;
    Idle.on = false;
    const n = Idle.nodes, c = A.c; Idle.nodes = null;
    if (!n || !c) return;
    snd(() => { A.idle.gain.cancelScheduledValues(c.currentTime); A.idle.gain.setTargetAtTime(0, c.currentTime, 0.04); });
    setTimeout(() => { for (const o of n.oscs) { try { o.stop(); o.disconnect(); } catch (e) { /* ended */ } } for (const x of n.list) { try { x.disconnect(); } catch (e) { /* gone */ } } }, 400);
  }

  /* ---------- The track under the round ----------
   * Am - F - C - G. Every round is the next bar of it; the lead pads play A minor pentatonic, which sits on all four. */
  const PROG = [
    { root: 45, pad: [57, 60, 64, 71], arp: [69, 72, 76, 81, 76, 72, 81, 76] },
    { root: 41, pad: [57, 60, 65, 69], arp: [69, 72, 77, 81, 77, 72, 81, 77] },
    { root: 48, pad: [55, 60, 64, 67], arp: [67, 72, 76, 79, 76, 72, 79, 76] },
    { root: 43, pad: [55, 59, 62, 69], arp: [67, 71, 74, 79, 74, 71, 79, 74] }
  ];
  const LEAD_PAT = { base: [69, 72, 76, 81, 79, 76, 74, 72], drop: [57, 69, 64, 69, 67, 69, 72, 76] };
  // base game: a soft pumping chord and a three-note bass figure; both open up as tracks start winning in the bar
  function backBase(ta, s, d, w, ch) {
    if (s % 2 === 0) swell(ta, ch.pad, d * 1.9, 0.7 + 0.3 * Math.min(2, w), 520 + 520 * Math.min(3, w));
    const on = w >= 2 ? true : w === 1 ? (s === 0 || s === 3 || s === 6 || s === 7) : (s === 0 || s === 3 || s === 6);
    if (on) bass(ta, ch.root + (w >= 2 && (s & 1) ? 12 : 0), Math.min(0.26, d * 0.95), s === 0 ? 0.75 : 0.6, 0.15 + 0.2 * Math.min(2, w));
    if (w >= 2) pluck(ta, ch.arp[s], 0.8);
  }
  // THE DROP: energy 0..3 grows with GAIN and with the bar number; a crash opens every fourth bar, a walk-up closes it
  const energy = st => Math.min(3, Math.max(st.gain - 1, Math.floor((st.n - 1) / 3)));
  function backFree(ta, s, d, st) {
    const E = energy(st), ch = PROG[(st.n + 3) % 4], nx = PROG[st.n % 4], len = Math.min(0.24, d * 0.9), fill = st.n % 4 === 0 && s >= 6;
    if (s === 0 && st.n > 1 && st.n % 4 === 1) crash(ta, 0.8, 1.1);
    if (fill) bass(ta, nx.root - 12 + (s === 6 ? -5 : -2), len, 0.9, 0.6);
    else if (E === 0) { if (s === 0 || s === 3 || s === 6) bass(ta, ch.root - 12, len * 1.5, 0.8, 0.1); }
    else if (E === 1) { if (s === 0 || (s & 1)) bass(ta, ch.root - 12, len, 0.85, 0.3); }
    else bass(ta, ch.root - 12 + ((s & 1) ? 12 : 0), len, s & 1 ? 0.9 : 0.75, E > 2 ? 0.7 : 0.45);
    if (s % 2 === 0) swell(ta, ch.pad, d * 1.9, 0.8 + 0.1 * E, 700 + 500 * E);
    if (E >= 1 && (s === 3 || s === 7 || (E >= 2 && (s & 1)))) stab(ta, ch.pad, Math.min(0.14, d * 0.7), 0.5, 2600 + 400 * E);
    if (E >= 3 || (E >= 2 && st.n % 2 === 0)) pluck(ta, ch.arp[s] + 12, 0.75);
  }
  // big-win riff: three keys, one per tier, each a third higher
  const WIN_KEYS = [
    { root: 45, pad: [57, 60, 64, 69], arp: [57, 60, 64, 69, 72, 76, 81, 76] },
    { root: 48, pad: [60, 64, 67, 72], arp: [60, 64, 67, 72, 76, 79, 84, 79] },
    { root: 52, pad: [59, 64, 67, 71], arp: [64, 67, 71, 76, 79, 83, 88, 83] }
  ];
  function winStep(ta, s, d, ph) {
    const k = WIN_KEYS[Math.min(2, ph)];
    if (s === 0) { crash(ta, 0.9, 1.1); stab(ta, k.pad, d * 3, 1, 4200); }
    if (s % 2 === 0) { kick(ta, true, 0.92); swell(ta, k.pad, d * 1.9, 1, 1500 + 500 * ph); } else hat(ta, true, true, 0.8);
    if (s === 2 || s === 6) clap(ta, true, 0.85);
    bass(ta, k.root - 12 + ((s & 1) ? 12 : 0), Math.min(0.22, d * 0.9), 0.85, 0.6);
    lead(ta, k.arp[s], true, Math.min(0.2, d * 0.95), 0.8);
    if (s % 2 === 0) bell(ta, k.arp[s] + 12, 0.7, 0.4);
  }
  function winSlam(ta, ph, max) {
    const k = WIN_KEYS[Math.min(2, ph)];
    crash(ta, 1.2, 1.6); kick(ta, true); stab(ta, [k.root, ...k.pad, k.pad[0] + 12], 1.5, 1.3, 5200); bass(ta, k.root - 12, 1.1, 1, 0.5);
    [0, 4, 7, 12].forEach((iv, i) => bell(ta + 0.07 * i, k.pad[0] + 12 + iv, 0.9, 0.7));
    if (max) { const s = osc('sine', 70, ta, 1.3), sg = gn(A.c, 0); s.frequency.exponentialRampToValueAtTime(31, ta + 0.8); ad(sg.gain, ta, 0.22, 0.004, 1.1); chain(s, sg, A.drums); }
  }

  /* ---------- Stage ---------- */
  const lv = new Float32Array(24);            // meter levels when there is no analyser to read
  const bg = { cv: null, g: null, w: 0, h: 0, k: 0 };
  let lastDraw = 0, scopeG = null, scopePh = 0, haloK = -1;
  function meter(track, amt = 1) {
    const [a, b] = [[16, 24], [0, 6], [9, 16], [6, 14]][track];
    for (let i = a; i < b; i++) lv[i] = Math.max(lv[i], amt * (0.55 + Math.random() * 0.45));
  }
  function M(v) { return cur ? cur.winMoney(cur.units(v)) : api.winMoney(Math.round((api.amount || 0) * v / 100)); }
  // text into a display, one <s> per character; characters that change roll in
  function digits(node, text, roll) {
    if (node._t === text) return;
    const first = node._t === undefined; node._t = text;
    const n = text.length, kids = node.children;
    while (kids.length < n) node.prepend(document.createElement('s'));
    while (kids.length > n) node.firstChild.remove();
    for (let i = 0; i < n; i++) {
      const k = kids[i], ch = text[i];
      if (k.textContent === ch) continue;
      k.textContent = ch;
      if (roll && !first && !api.reduced && !quick() && k.animate) k.animate([{ transform: 'translateY(-55%)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 190, easing: 'cubic-bezier(.2,.9,.3,1)' });
    }
    node.classList.toggle('l1', n > 8 && n <= 11); node.classList.toggle('l2', n > 11);
  }
  function pop(node, cls = 'pop') { node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); }
  function setHero(v, bump, roll) { digits(el.hero, M(v), roll); el.hero.classList.toggle('z', !v); if (bump && v) pop(el.hero); }
  function setSub(text, bump) { el.sub.textContent = text; if (bump && text) pop(el.sub); }
  let bpmNow = BPM_BASE;
  function setBpm(v) { if (v) bpmNow = v; digits(el.bpm, String(Math.round(bpmNow * (api.fast ? 2 : 1))), true); }
  function setGain(g, live) {
    digits(el.gain, '×' + g, true); el.gainCell.classList.toggle('dim', !live);
    const f = Math.min(1, (g - 1) / 9);
    el.gainArc.style.strokeDashoffset = String(207.3 * (1 - (live ? Math.max(0.05, f) : 0)));
    el.gainCap.style.transform = `rotate(${-135 + 270 * (live ? f : 0)}deg)`;
  }
  function setBar(n, of) { digits(el.bar, n + '/' + of, true); }
  function setLamps(n) { el.lamps.forEach((l, i) => l.classList.toggle('on', i < n)); el.lampCell.classList.toggle('dim', !n); }
  function setMode(m) { mode = m; dev.dataset.mode = m; document.body.classList.toggle('bd-dropping', m === 'drop'); setBpm(m === 'drop' ? dropBpm(1) : BPM_BASE); }
  function showCard(kind, small, strong, em) {
    el.card.dataset.kind = kind; el.cardS.textContent = small || ''; el.cardE.textContent = em || '';
    el.cardB.replaceChildren(); el.cardB._t = undefined; el.cardB.className = '';
    if (kind === 'end') digits(el.cardB, strong || ''); else el.cardB.textContent = strong || '';
    el.card.classList.remove('show'); void el.card.offsetWidth; el.card.classList.add('show');
  }
  function hideCard(kind) { if (!kind || el.card.dataset.kind === kind) el.card.classList.remove('show'); }
  // the ladder at the end of a row: reached thresholds light up, the next one is marked, the win lands on top
  function setLadder(r, hits, win, gx) {
    const next = Math.max(TR[r.t].from, hits + 1);
    for (const ch of r.chips) { ch.el.classList.toggle('got', hits >= ch.h); ch.el.classList.toggle('nx', ch.h === next); ch.el.classList.toggle('top', win > 0 && ch.h === hits); }
    const txt = win > 0 ? M(win) : '';
    if (r.amt._t !== txt) { digits(r.amt, txt, false); if (txt) pop(r.amt); }
    const xt = gx > 1 ? '×' + gx : '';
    if (r.gx.textContent !== xt) { r.gx.textContent = xt; if (xt) pop(r.gx); }
    r.el.classList.toggle('armed', gx > 1 && !win);
  }
  function clearGrid() {
    for (const r of rows) {
      r.el.classList.remove('won', 'lost', 'armed', 'sweep');
      for (const p of r.pads) { p.className = 'bd-pad'; p.children[1].textContent = ''; }
      r.cnt.textContent = '0'; r.pips.forEach(i => i.classList.remove('on'));
      setLadder(r, 0, 0, 0);
    }
    el.head.classList.remove('on'); el.leds.forEach(l => l.classList.remove('on'));
    dev.classList.remove('charged'); setLamps(0);
  }
  function moveHead(s) {
    const c = cols[s]; if (!c) return;
    el.head.style.width = c.w + 'px'; el.head.style.transform = `translateX(${c.x}px)`; el.head.classList.add('on');
    if (!quick()) pop(el.head, 'strike');
    el.leds.forEach((l, i) => l.classList.toggle('on', i === s));
  }
  function measure() {
    const g = el.grid.getBoundingClientRect(); if (!g.width) return;
    rows[0].pads.forEach((p, s) => { const r = p.getBoundingClientRect(), m = Math.max(2, r.width * 0.06); cols[s] = { x: r.left - g.left - m, w: r.width + m * 2 }; });
    // step lights sit exactly under their pad columns
    const f = el.ledBox.getBoundingClientRect(), a = rows[0].pads[0].getBoundingClientRect(), b = rows[0].pads[7].getBoundingClientRect();
    el.ledBox.style.paddingLeft = Math.max(0, a.left - f.left) + 'px'; el.ledBox.style.paddingRight = Math.max(0, f.right - b.right) + 'px';
  }
  function layout() {
    const r = stage.getBoundingClientRect(), w = r.width, h = r.height;
    if (w < 20 || h < 20) return;
    const port = w / h < 1.15, tiny = !port && h < 230;
    const u = port ? Math.min(w / 50, h / 60) : Math.min(w / 100, h / (tiny ? 33 : 42.5));
    dev.style.setProperty('--u', u.toFixed(3) + 'px');
    dev.classList.toggle('port', port);
    dev.classList.toggle('pshort', port && h / u < 57);
    dev.classList.toggle('tiny', tiny);
    dev.classList.toggle('sm', !port && !tiny && h < 390);
    el.ledBox.style.paddingLeft = el.ledBox.style.paddingRight = '0px';
    measure();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    for (const cv of [el.scope, el.fx]) {
      const k = cv === el.fx ? Math.min(1.5, dpr) : dpr, sw = Math.round(cv.clientWidth * k), sh = Math.round(cv.clientHeight * k);
      if (sw > 0 && sh > 0 && (cv.width !== sw || cv.height !== sh)) { cv.width = sw; cv.height = sh; }
    }
    FX.k = el.fx.clientWidth ? el.fx.width / el.fx.clientWidth : 1;
    bg.w = bg.cv.width = Math.max(64, Math.ceil(window.innerWidth / 3)); bg.h = bg.cv.height = Math.max(64, Math.ceil(window.innerHeight / 3));
    // the glow around the whole device (stage + control bar)
    const p = document.getElementById('lzPanel').getBoundingClientRect(), hs = el.halo.style;
    hs.left = Math.min(r.left, p.left) + 'px'; hs.top = r.top + 'px'; hs.width = Math.max(r.right, p.right) - Math.min(r.left, p.left) + 'px'; hs.height = Math.max(r.bottom, p.bottom) - r.top + 'px';
  }
  function build(h) {
    const svg = (inner, cls) => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
    const dial = '<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="trk" cx="50" cy="50" r="44" stroke-dasharray="207.3 276.5" transform="rotate(135 50 50)"/><circle class="lit" cx="50" cy="50" r="44" stroke-dasharray="207.3 276.5" stroke-dashoffset="207.3" transform="rotate(135 50 50)"/></svg>';
    dev = h('div', { class: 'bd-dev idle', 'data-mode': 'base' });
    dev.innerHTML = `
      <div class="bd-chassis" aria-hidden="true"><i class="bd-refl a"></i><i class="bd-refl b"></i><i class="bd-refl c"></i><i class="bd-sheen"></i><i class="bd-edge"></i>
        <i class="bd-screw tl"></i><i class="bd-screw tr"></i><i class="bd-screw bl"></i><i class="bd-screw br"></i></div>
      <div class="bd-top">
        <div class="bd-brand">${LOGO}<span class="bd-model">GROOVE UNIT</span></div>
        <div class="bd-lcd" id="bdLcd">
          <canvas class="bd-scope" id="bdScope" aria-hidden="true"></canvas>
          <div class="bd-cells">
            <div class="bd-cell" data-k="bpm"><span>BPM</span><b id="bdBpm"></b></div>
            <div class="bd-cell" data-k="bar"><span>BAR</span><b id="bdBar"></b></div>
            <div class="bd-cell dim" data-k="gain" id="bdGainCell"><span>GAIN</span><b id="bdGain"></b></div>
            <div class="bd-cell dim" data-k="drop" id="bdLampCell"><span>DROP</span><div class="bd-lamps"><i></i><i></i><i></i><i></i></div></div>
          </div>
          <div class="bd-hero"><span>TOTAL WIN</span><b id="bdHero" class="z"></b><i id="bdSub"></i></div>
        </div>
        <div class="bd-knobs" aria-hidden="true">
          <div class="bd-knob" id="bdKnobG"><div class="bd-dial">${dial}<div class="bd-cap" id="bdGainCap"></div></div><span>GAIN</span></div>
          <div class="bd-knob s"><div class="bd-dial">${dial}<div class="bd-cap" id="bdCutCap"></div></div><span>CUTOFF</span></div>
        </div>
      </div>
      <div class="bd-grid" id="bdGrid">
        ${TR.map((t, i) => `<div class="bd-row" data-t="${i}" style="--c:${t.c};--t:${i}">
          <div class="bd-lab">${svg(t.ico, 'bd-ico')}<b class="bd-name">${t.name}</b><span class="bd-cnt"><em>0</em>/8</span>
            <div class="bd-pips">${Array.from({ length: 8 }, (_, k) => `<i${k + 1 >= t.from ? ' class="z"' : ''}></i>`).join('')}</div></div>
          <div class="bd-pads">${Array.from({ length: 8 }, (_, s) => `<div class="bd-pad" style="--s:${s}"><i class="led"></i><span></span>${DROP_MARK}</div>`).join('')}</div>
          <div class="bd-lad"><div class="bd-amt"><b></b><small></small></div>
            <div class="bd-chips">${Object.keys(t.wins).map(k => `<i data-h="${k}"><u>${k}</u>${fx(t.wins[k])}</i>`).join('')}</div></div>
        </div>`).join('')}
        <div class="bd-head" id="bdHead"><i></i></div>
      </div>
      <div class="bd-foot"><div class="bd-leds" id="bdLeds">${Array.from({ length: 8 }, (_, s) => `<i style="--s:${s}"></i>`).join('')}</div></div>
      <canvas class="bd-fx" id="bdFx" aria-hidden="true"></canvas>
      <div class="bd-vig" id="bdVig"></div>
      <div class="bd-card" id="bdCard" role="status"><small></small><strong></strong><em></em></div>
      <div class="bd-cele" id="bdCele" role="status"><div class="bd-rec"><i></i><b></b></div><div class="bd-band"><small></small><strong></strong><em></em></div></div>
      <div class="bd-strobe" id="bdStrobe"></div>`;
    stage.append(dev);
    const q = id => dev.querySelector('#' + id);
    Object.assign(el, { bpm: q('bdBpm'), bar: q('bdBar'), gain: q('bdGain'), gainCell: q('bdGainCell'), lampCell: q('bdLampCell'), hero: q('bdHero'), sub: q('bdSub'), scope: q('bdScope'), lcd: q('bdLcd'),
      gainCap: q('bdGainCap'), cutCap: q('bdCutCap'), knobG: q('bdKnobG'), grid: q('bdGrid'), head: q('bdHead'), vig: q('bdVig'), card: q('bdCard'), strobe: q('bdStrobe'),
      ledBox: q('bdLeds'), fx: q('bdFx'), cele: q('bdCele') });
    el.gainArc = el.knobG.querySelector('.lit'); el.cutArc = el.cutCap.parentElement.querySelector('.lit');
    el.cardS = el.card.children[0]; el.cardB = el.card.children[1]; el.cardE = el.card.children[2];
    const band = el.cele.querySelector('.bd-band'); el.celeS = band.children[0]; el.celeB = band.children[1]; el.celeE = band.children[2];
    el.leds = [...el.ledBox.children]; el.lamps = [...dev.querySelectorAll('.bd-lamps i')];
    dev.querySelectorAll('.bd-row').forEach((row, t) => rows.push({
      t, el: row, pads: [...row.querySelectorAll('.bd-pad')], cnt: row.querySelector('.bd-cnt em'), pips: [...row.querySelectorAll('.bd-pips i')],
      amt: row.querySelector('.bd-amt b'), gx: row.querySelector('.bd-amt small'), lad: row.querySelector('.bd-lad'),
      chips: [...row.querySelectorAll('.bd-chips i')].map(c => ({ el: c, h: Number(c.dataset.h) }))
    }));
    el.grid.addEventListener('animationend', e => { if (e.animationName === 'bdHit') e.target.classList.remove('hit'); else if (e.animationName === 'bdSweep') e.target.classList.remove('sweep'); });
    scopeG = el.scope.getContext('2d'); FX.g = el.fx.getContext('2d');
    bg.cv = h('canvas', { class: 'bd-bg', 'aria-hidden': 'true' }); el.halo = h('div', { class: 'bd-halo', 'aria-hidden': 'true' });
    document.body.prepend(bg.cv, el.halo); bg.g = bg.cv.getContext('2d');
  }

  /* ---------- Particles: one pooled canvas over the device, additive ---------- */
  const NP = 260;
  const FX = { g: null, k: 1, live: 0, x: new Float32Array(NP), y: new Float32Array(NP), vx: new Float32Array(NP), vy: new Float32Array(NP), life: new Float32Array(NP), ttl: new Float32Array(NP), sz: new Float32Array(NP), gr: new Float32Array(NP), col: new Uint8Array(NP), at: 0 };
  // n sparks from (x, y) in device pixels; o: { col, sp speed, up bias, gr gravity, ttl, sz, spread (rad), dir (rad) }
  function sparks(x, y, n, o = {}) {
    if (api.reduced || quick() || document.hidden) return;
    const sp = (o.sp || 220) * (el.fx.clientWidth / 1000 + 0.35), spread = o.spread === undefined ? Math.PI * 2 : o.spread, dir = o.dir || 0;
    for (let k = 0; k < n; k++) {
      let i = -1;
      for (let j = 0; j < NP; j++) { const q = (FX.at + j) % NP; if (FX.life[q] <= 0) { i = q; break; } }
      if (i < 0) return;
      FX.at = (i + 1) % NP;
      const a = dir + (Math.random() - 0.5) * spread, v = sp * (0.35 + Math.random() * 0.65);
      FX.x[i] = x + (Math.random() - 0.5) * (o.jit || 6); FX.y[i] = y + (Math.random() - 0.5) * (o.jit || 6);
      FX.vx[i] = Math.cos(a) * v; FX.vy[i] = Math.sin(a) * v - (o.up || 0);
      FX.ttl[i] = FX.life[i] = (o.ttl || 0.6) * (0.6 + Math.random() * 0.6); FX.sz[i] = (o.sz || 2) * (0.6 + Math.random() * 0.8); FX.gr[i] = o.gr === undefined ? 380 : o.gr;
      FX.col[i] = Array.isArray(o.col) ? o.col[k % o.col.length] : (o.col === undefined ? 5 : o.col);
      FX.live++;
    }
  }
  function drawFx(dt) {
    const g = FX.g, k = FX.k;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, el.fx.width, el.fx.height);
    if (FX.live <= 0) { FX.live = 0; return; }
    g.setTransform(k, 0, 0, k, 0, 0); g.globalCompositeOperation = 'lighter'; g.lineCap = 'round';
    let live = 0;
    for (let i = 0; i < NP; i++) {
      if (FX.life[i] <= 0) continue;
      if (!frozen) { FX.life[i] -= dt; FX.vy[i] += FX.gr[i] * dt; FX.vx[i] *= 0.985; FX.x[i] += FX.vx[i] * dt; FX.y[i] += FX.vy[i] * dt; }
      if (FX.life[i] <= 0) continue;
      live++;
      const a = Math.min(1, FX.life[i] / FX.ttl[i] * 1.6), c = PCOL[FX.col[i]];
      g.strokeStyle = `rgba(${c},${a.toFixed(3)})`; g.lineWidth = FX.sz[i];
      g.beginPath(); g.moveTo(FX.x[i], FX.y[i]); g.lineTo(FX.x[i] - FX.vx[i] * 0.035, FX.y[i] - FX.vy[i] * 0.035); g.stroke();
    }
    FX.live = live;
  }
  // centre of an element in device pixels
  function at(node) { const a = node.getBoundingClientRect(), b = dev.getBoundingClientRect(); return [a.left - b.left + a.width / 2, a.top - b.top + a.height / 2, a.width, a.height]; }
  function burst(node, n, o) { if (api.reduced || quick()) return; const p = at(node); if (p[2] < 2) return; sparks(p[0], p[1], n, o); }
  // hit-stop: the picture holds its breath for a moment on the biggest hits (the music does not stop)
  function hitStop(ms) {
    if (api.reduced || quick()) return;
    frozen = true; dev.classList.add('freeze');
    setTimeout(() => { frozen = false; dev.classList.remove('freeze'); }, ms * rate());
  }
  function shake(big) { if (api.reduced || quick()) return; dev.classList.remove('shake', 'shake2'); pop(dev, big ? 'shake2' : 'shake'); }

  /* ---------- Per-frame drawing: club light behind the device, the scope, the knob that rides the music ---------- */
  const BEAM = ['39,216,255', '255,45,149', '255,122,26', '184,255,46', '150,90,255'];
  function drawBg(t) {
    const { g, w, h } = bg, drop = mode === 'drop', k = bg.k;
    g.globalCompositeOperation = 'source-over'; g.fillStyle = '#04050a'; g.fillRect(0, 0, w, h);
    g.globalCompositeOperation = 'lighter';
    const amp = (drop ? 0.34 : 0.2) + k * (drop ? 0.4 : 0.26), len = h * 1.5;
    for (let i = 0; i < 7; i++) {
      const sp = (drop ? 0.95 : 0.2) * (1 + i * 0.11), ox = w * (0.04 + 0.153 * i), a = Math.sin(t * sp + i * 1.7) * 0.55 + (3 - i) * 0.1, sw = 0.05 + 0.02 * Math.sin(t * 0.3 + i), c = BEAM[i % 5];
      const gr = g.createLinearGradient(ox, 0, ox + Math.sin(a) * len, Math.cos(a) * len);
      gr.addColorStop(0, `rgba(${c},${amp})`); gr.addColorStop(0.5, `rgba(${c},${amp * 0.35})`); gr.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = gr; g.beginPath(); g.moveTo(ox - 1, -2); g.lineTo(ox + 1, -2);
      g.lineTo(ox + Math.sin(a + sw) * len, Math.cos(a + sw) * len); g.lineTo(ox + Math.sin(a - sw) * len, Math.cos(a - sw) * len); g.closePath(); g.fill();
      // the lamp itself
      const lg = g.createRadialGradient(ox, 0, 0, ox, 0, h * 0.09);
      lg.addColorStop(0, `rgba(255,255,255,${0.5 + k * 0.4})`); lg.addColorStop(0.3, `rgba(${c},${0.5 + k * 0.3})`); lg.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = lg; g.fillRect(ox - h * 0.1, 0, h * 0.2, h * 0.1);
    }
    for (let i = 0; i < 3; i++) {
      const cx = w * (0.5 + 0.5 * Math.sin(t * 0.06 + i * 2.2)), cy = h * (0.5 + 0.45 * Math.cos(t * 0.05 + i * 2)), r = Math.max(w, h) * 0.5;
      const gr = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      gr.addColorStop(0, `rgba(${BEAM[(i * 2 + 1) % 5]},${0.07 + k * 0.08})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }
    bg.k *= 0.86;
    const hk = Math.round(Math.min(1, 0.32 + k * 0.6 + (drop ? 0.2 : 0)) * 20) / 20;
    if (hk !== haloK) { haloK = hk; el.halo.style.opacity = String(hk); el.chassis.style.setProperty('--k', String(Math.min(1, 0.45 + k * 0.5))); }
  }
  function drawScope(t) {
    const g = scopeG, w = el.scope.width, h = el.scope.height; if (!w || !h) return;
    const live = A.c && S.on && !quick(), col = mode === 'drop' ? '255,143,196' : '255,190,115';
    if (live) { A.an.getByteFrequencyData(A.bins); A.an.getByteTimeDomainData(A.wave); }
    g.clearRect(0, 0, w, h);
    // dot-matrix spectrum
    const n = 24, rowsN = Math.max(4, Math.min(9, Math.round(h / (w / n) / 1.05))), cw = w / n, rh = h / rowsN, rad = Math.max(0.6, Math.min(cw, rh) * 0.27);
    let en = 0;
    for (let i = 0; i < n; i++) {
      let v;
      if (live) { const a = Math.floor(Math.pow(i / n, 1.9) * 150) + 1, b = Math.floor(Math.pow((i + 1) / n, 1.9) * 150) + 2; let m = 0; for (let k = a; k < b; k++) m = Math.max(m, A.bins[k]); v = Math.pow(m / 255, 1.4); lv[i] = Math.max(lv[i] * 0.8, v); v = lv[i]; }
      else { v = lv[i]; lv[i] *= 0.85; }
      en += v;
      const lit = Math.round(v * rowsN);
      for (let s = 0; s < rowsN; s++) {
        g.fillStyle = s < lit ? `rgba(${s >= rowsN - 2 ? '255,255,255' : col},${0.5 + 0.5 * s / rowsN})` : `rgba(${col},0.09)`;
        g.beginPath(); g.arc(i * cw + cw / 2, h - (s + 0.5) * rh, rad, 0, 6.3); g.fill();
      }
    }
    en = Math.min(1, en / 10);
    // scope trace over it
    g.lineWidth = Math.max(1, h * 0.035); g.lineJoin = 'round'; g.strokeStyle = `rgba(255,255,255,${0.55 + 0.4 * en})`; g.shadowColor = `rgba(${col},1)`; g.shadowBlur = h * 0.12;
    g.beginPath();
    const pts = 72; scopePh += 0.22 + en * 0.5;
    for (let i = 0; i <= pts; i++) {
      const x = i / pts;
      let y;
      if (live) y = (A.wave[Math.floor(x * 300)] - 128) / 128 * 2.4;
      else y = en * (Math.sin(x * 15 + scopePh) * 0.5 + Math.sin(x * 41 - scopePh * 1.7) * 0.28 * lv[20] + Math.sin(x * 6 + scopePh * 0.6) * 0.4 * lv[2]);
      y = Math.max(-1, Math.min(1, y)) * Math.sin(Math.PI * x);
      const px = x * w, py = h * 0.5 - y * h * 0.42;
      if (i) g.lineTo(px, py); else g.moveTo(px, py);
    }
    g.stroke(); g.shadowBlur = 0;
    // the CUTOFF knob rides the level
    cutoff += (en - cutoff) * 0.3;
    el.cutCap.style.transform = `rotate(${-135 + 270 * cutoff}deg)`;
    el.cutArc.style.strokeDashoffset = String(207.3 * (1 - cutoff));
  }
  let cutoff = 0;
  function frame(ts) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.06, (ts - lastDraw) / 1000);
    if (document.hidden || ts - lastDraw < 28) return;
    lastDraw = ts;
    if (!api.reduced) drawBg(ts / 1000);
    drawScope(ts / 1000);
    if (FX.live > 0 || FX.dirty) { FX.dirty = FX.live > 0; drawFx(dt); }
  }

  /* ---------- A bar ---------- */
  // Everything the bar will do, step by step, worked out from the pads (the same counting the verifier does).
  function plan(pads) {
    const hits = [0, 0, 0, 0], gx = [0, 0, 0, 0], tw = [0, 0, 0, 0], steps = [];
    let drops = 0;
    for (let s = 0; s < 8; s++) {
      const cells = [], ups = [];
      for (let t = 0; t < 4; t++) {
        const v = pads[t].charCodeAt(s) - 48;
        if (!(v > 0)) continue;
        hits[t]++;
        let di = -1;
        if (v === 9) di = drops++; else if (v > 1) gx[t] += v;
        const base = TR[t].wins[hits[t]] || 0;
        if (base) ups.push({ t, tier: hits[t] - TR[t].from });
        tw[t] = base * (gx[t] || 1);
        cells.push({ t, v, di });
      }
      steps.push({ cells, ups, drops, tw: tw.slice(), gx: gx.slice(), hits: hits.slice(), w: tw.filter(x => x > 0).length, raw: tw.reduce((a, b) => a + b, 0) });
    }
    return steps;
  }
  function stepAudio(P, s, ta, d, free, st, pads) {
    const p = P[s], len = Math.min(0.34, Math.max(0.12, d * 1.7));
    if (!s) A.dly.delayTime.setTargetAtTime(Math.min(0.9, 1.5 * d), ta, 0.02);       // echo = dotted eighth, in tempo
    for (const cell of p.cells) {
      // accents: kick strongest on the beat, clap on the backbeat, hats louder off the beat
      if (cell.t === 0) hat(ta, (s & 1) === 1 && (s === 7 || pads[0][s + 1] === '0'), free, s & 1 ? 1 : 0.78);
      else if (cell.t === 1) kick(ta, free, s % 4 === 0 ? 1 : s % 2 === 0 ? 0.93 : 0.82);
      else if (cell.t === 2) clap(ta, free, s === 2 || s === 6 ? 1 : 0.82);
      else lead(ta, LEAD_PAT[free ? 'drop' : 'base'][s], free, len, s % 2 === 0 ? 1 : 0.88);
      if (cell.v === 9) sndDropPad(ta, cell.di);
      else if (cell.v > 1) sndGold(ta, cell.v);
    }
    for (const u of p.ups) { blip(ta + 0.02, [76, 81, 84, 88, 93, 96][Math.min(5, u.tier)], 0.8); if (!free) stab(ta, st.ch.pad, Math.min(0.22, d * 0.9), 0.55, 3000); }
    if (p.drops === 2 && s < 7) antSeg(ta, d, s / 7);
    if (free) backFree(ta, s, d, st); else backBase(ta, s, d, s ? P[s - 1].w : 0, st.ch);
  }
  function stepShow(e, P, s, free) {
    const p = P[s], q = quick();
    moveHead(s);
    for (let t = 0; t < 4; t++) { const pad = rows[t].pads[s]; if (e.pads[t][s] === '0') pad.className = 'bd-pad off'; }
    for (const cell of p.cells) {
      const r = rows[cell.t], pad = r.pads[s], won = p.tw[cell.t] > 0, was = s > 0 && P[s - 1].tw[cell.t] > 0;
      pad.className = 'bd-pad on' + (q ? '' : ' hit') + (cell.v === 9 ? ' dropp' : cell.v > 1 ? ' gold' : '');
      if (cell.v > 1 && cell.v < 9) pad.children[1].textContent = '×' + cell.v;
      r.cnt.textContent = String(p.hits[cell.t]); if (!q) pop(r.cnt, 'tk');
      const pip = r.pips[p.hits[cell.t] - 1]; if (pip) pip.classList.add('on');
      meter(cell.t);
      if (cell.t === 1) bg.k = Math.min(1.4, bg.k + (free ? 1 : 0.7));
      if (cell.v === 9) { bg.k = 1.4; meter(1); meter(3); burst(pad, 22, { col: [5, 2, 5], sp: 420, ttl: 0.55, gr: 0, sz: 2.4 }); shake(); }
      else if (cell.v > 1) burst(pad, 6 + cell.v * 3, { col: [4, 5, 4], sp: 300, up: 120, ttl: 0.7 });
      if (won) {
        r.el.classList.add('won');
        if (!was && !q) { pop(r.el, 'sweep'); const top = r.chips.find(c => c.h === p.hits[cell.t]); if (top) burst(top.el, 12, { col: [cell.t, 5], sp: 260, ttl: 0.5 }); }
      }
      setLadder(r, p.hits[cell.t], p.tw[cell.t], p.gx[cell.t]);
    }
    for (let t = 0; t < 4; t++) if (!p.cells.some(c => c.t === t)) setLadder(rows[t], p.hits[t], p.tw[t], p.gx[t]);
    if (p.raw !== (s ? P[s - 1].raw : 0)) { if (free) setSub('+' + M(p.raw), true); else setHero(p.raw, true); }
    setLamps(p.drops);
    // two DROP pads down: the machine charges, and the pads that could still bring the third one shimmer
    if (p.drops === 2 && s < 7) {
      dev.classList.add('charged');
      for (let t = 0; t < 4; t++) { if (e.pads[t].slice(0, s + 1).includes('9')) continue; for (let k = s + 1; k < 8; k++) rows[t].pads[k].classList.add('ant'); }
    } else {
      dev.classList.remove('charged');
      if (p.drops > 2) { dev.querySelectorAll('.bd-pad.ant').forEach(x => x.classList.remove('ant')); if (s && P[s - 1].drops < 3) { hitStop(110); if (!api.reduced && !q) pop(el.strobe, 'go2'); } }
    }
  }

  async function playBar(e, st, my) {
    if (!Array.isArray(e.pads) || e.pads.length !== 4 || e.pads.some(r => typeof r !== 'string' || r.length !== 8)) return;
    const free = !!e.free, P = plan(e.pads);
    hideCard(); clearGrid(); dev.classList.remove('idle');
    if (!quick()) pop(dev, 'arm');
    let t, bpm;
    if (free) {
      st.n = e.n; bpm = () => dropBpm(st.n);
      setBar(e.n, st.bars); setSub(''); setBpm(dropBpm(e.n));
      t = Math.max(st.t, Clock.now() + 0.03);
    } else {
      const pre = 0.24 * rate();
      bpm = BPM_BASE; t = Clock.now() + pre;
      setHero(0); setBar(1, 1);
      cue((s, ta) => sndPre(ta, pre - 0.03), 0, Clock.now() + 0.012, 0);
    }
    t = await steps(t, 8, bpm, (s, ta, d) => stepAudio(P, s, ta, d, free, st, e.pads), s => stepShow(e, P, s, free), my);

    /* the tally, on the downbeat after the bar */
    const won = e.win > 0, winners = new Set((e.wins || []).map(w => w.t)), big = !free && e.win >= 100, pk = e.pocket > 1 ? e.pocket : 0;
    const raw = e.gain ? e.win / e.gain : e.win;            // the bar's win before GAIN (pocket included)
    const settle = () => {
      el.head.classList.remove('on'); el.leds.forEach(l => l.classList.remove('on')); dev.classList.remove('charged');
      dev.querySelectorAll('.bd-pad.ant').forEach(x => x.classList.remove('ant'));
      if (won) rows.forEach(r => { if (!winners.has(r.t)) r.el.classList.add('lost'); });
      for (const w of e.wins || []) {
        const r = rows[w.t]; if (!r) continue;
        r.el.classList.add('won'); setLadder(r, w.hits, w.win, w.x);
        if (!quick()) { pop(r.el, 'sweep'); pop(r.amt, 'slam'); burst(r.amt, big || free ? 16 : 6, { col: [w.t, 5, 4], sp: 300, up: 90, ttl: 0.7 }); }
      }
      if (pk) { showCard('pocket', winners.size + ' TRACKS WIN', 'IN THE POCKET', 'BAR WIN ×' + pk); shake(); }
    };
    if (!free) {
      const n = pk ? 4 : big ? 3 : won ? 2 : 1;
      t = await steps(t, n, BPM_BASE, (s, ta, d) => {
        if (pk && s < pk) sndPocket(ta, d, s);
        if (s) return;
        if (big) {
          if (!pk) stab(ta, st.ch.pad, 0.55, 1, 3200);
          bass(ta, st.ch.root - 12, 0.5, 1, 0.3); kick(ta, false, 0.9); swell(ta, st.ch.pad, d * 3, 1.2, 1600);
          if (e.win >= 500) st.ch.arp.slice(0, 4).forEach((m, i) => bell(ta + 0.09 * i, m + 12, 0.9, 0.5));
        } else if (won) { const o = osc('triangle', mtof(81), ta, 0.12), g = gn(A.c, 0); ad(g.gain, ta, 0.05, 0.003, 0.08); chain(o, g, A.music); swell(ta, st.ch.pad, d * 1.6, 0.7, 700); }
        else { const o = osc('sine', 120, ta, 0.14), g = gn(A.c, 0); o.frequency.exponentialRampToValueAtTime(70, ta + 0.09); ad(g.gain, ta, 0.05, 0.004, 0.1); chain(o, g, A.drums); }   // the bar closes
      }, s => {
        if (s) return;
        settle();
        setHero(e.total, won, true);
        cur.setWin(cur.units(e.total), true);
        if (big) { bg.k = 1.4; shake(); }
      }, my);
      hideCard('pocket');
      st.t = t;
      return;
    }
    // free bar: [win, x GAIN, into the total, GAIN goes up]; from bar 5 on the same in two steps
    const long = st.n <= 3, n = !won ? 2 : (long ? 4 : 2) + (pk && !long ? 2 : 0), bank = long ? 2 : (pk ? 2 : 1), up = n - 1;
    t = await steps(t, n, bpm, (s, ta, d) => {
      if (s % 2 === 0) kick(ta, true, 0.9);
      backFree(ta, s, d, st);
      if (pk && s < pk) sndPocket(ta, d, s);
      if (!won) return;
      if (s === 0 && !pk) stab(ta, PROG[(st.n + 3) % 4].pad, Math.min(0.5, d * 2.2), 1, 3400);
      if (s === (long ? 1 : 0) && e.gain > 1) sndGainUse(ta + (long ? 0 : d * 0.5), e.gain);
      if (s === bank) sndBank(ta);
      if (s === up) sndGainUp(ta + (up === bank ? d * 0.5 : 0), e.gain + 1);
    }, (s, d) => {
      if (s === 0) { settle(); if (won) { bg.k = 1.4; setSub('+' + M(raw) + (e.gain > 1 && !long ? ' ×' + e.gain : ''), true); } }
      if (!won) return;
      if (s === 1 && long && e.gain > 1) { setSub('+' + M(raw) + ' ×' + e.gain, true); punch(); }
      if (s === bank) {
        hideCard('pocket');
        if (!quick()) for (const w of e.wins || []) if (rows[w.t]) fly(rows[w.t].amt, w.t);
        setHero(e.total, true, true); setSub('');
        cur.setWin(cur.units(e.total), true);
      }
      if (s === up) { st.gain = e.gain + 1; gainUp(st.gain); }
    }, my);
    st.t = t;
  }
  // sparks from a track's win up to the total on the display
  function fly(node, col) {
    if (api.reduced) return;
    const a = at(node), b = at(el.hero), dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    sparks(a[0], a[1], 9, { col: [col, 4, 5], sp: len * 2.6, dir: Math.atan2(dy, dx), spread: 0.5, gr: 0, ttl: 0.42, sz: 2.2 });
  }
  function punch() { if (!quick()) { pop(el.lcd, 'punch'); pop(el.gainCell, 'bump'); } }
  // GAIN goes up: the knob turns, the ring fills, the display punches
  function gainUp(g) {
    setGain(g, true); punch();
    if (!quick()) { pop(el.knobG, 'step'); burst(el.knobG.offsetWidth ? el.gainCap : el.gainCell, 14, { col: [4, 5], sp: 240, up: 60, ttl: 0.55 }); }
  }

  /* ---------- THE DROP ---------- */
  async function dropIntro(e, st, my) {
    st.feature = true; st.bars = e.bars; st.gain = 1; st.n = 0;
    const calm = api.reduced, bpm = dropBpm(1);
    rows.forEach(r => { r.el.classList.remove('won'); r.el.classList.add('lost'); });
    showCard('drop', e.pads + ' DROP PADS', 'THE DROP', e.bars + ' FREE BARS');
    dev.classList.add('charged'); bg.k = 1.4; shake();
    for (const r of rows) for (const p of r.pads) if (p.classList.contains('dropp')) burst(p, 16, { col: [5, 2], sp: 380, gr: 0, ttl: 0.6 });
    let t = Math.max(st.t, Clock.now() + 0.02) + 0.7 * rate();
    // build-up: one bar. Snare roll that doubles twice, noise and pitch rising, chord swelling, lights closing in
    t = await steps(t, 8, bpm, (s, ta, d) => {
      if (!s) openFilter();
      const hits = s < 4 ? [0] : s < 6 ? [0, 0.5] : [0, 0.25, 0.5, 0.75];
      for (const h of hits) snare(ta + h * d, 0.05 + 0.1 * (s + h) / 8, 170 + (s + h) * 17);
      riseSeg(ta, d, s / 8, (s + 1) / 8);
      if (s < 4 && s % 2 === 0) kick(ta, true, 0.8 - s * 0.1);
      if (s % 2 === 0) swell(ta, [57, 60, 64, 69], d * 1.9, 0.6 + s * 0.12, 500 + s * 420);
    }, (s, d) => {
      if (!s && !calm) { dev.classList.add('roll'); el.vig.style.transition = `transform ${(8 * d).toFixed(3)}s cubic-bezier(.5,0,.9,.6),opacity .2s`; el.vig.classList.add('on'); }
      dev.style.setProperty('--rd', (d * (s < 4 ? 2 : s < 6 ? 1 : 0.5)).toFixed(3) + 's');
      setBpm(BPM_BASE + (bpm - BPM_BASE) * (s + 1) / 8);
      for (let i = 0; i < 24; i++) lv[i] = Math.max(lv[i], (s + 2) / 9 * (0.5 + Math.random() * 0.5));
      bg.k = Math.max(bg.k, 0.3 + s * 0.12);
    }, my);
    // one beat of nothing, then the drop
    t = await steps(t, 2, bpm, null, s => { if (!s) { dev.classList.remove('roll', 'charged'); dev.classList.add('blackout'); hideCard(); } }, my);
    t = await steps(t, 4, bpm, (s, ta, d) => { if (!s) sndImpact(ta); else backFree(ta, s, d, { gain: 1, n: 1 }); }, s => {
      if (s === 0) {
        dev.classList.remove('blackout'); el.vig.style.transition = 'opacity .15s'; el.vig.classList.remove('on');
        setMode('drop'); clearGrid(); setBar(0, st.bars); setGain(1, true);
        if (!calm && !quick()) { pop(el.strobe, 'go'); shake(true); hitStop(90); const c = at(el.grid); sparks(c[0], c[1], 70, { col: [0, 1, 2, 3, 5], sp: 900, gr: 120, ttl: 0.9, sz: 2.6, jit: c[2] * 0.5 }); }
        bg.k = 1.4; for (let i = 0; i < 24; i++) lv[i] = 1;
        showCard('more', '', 'DROP!', '');
      } else if (s === 3) hideCard();
    }, my);
    st.t = t;
  }
  async function moreBars(e, st, my) {
    st.bars += e.bars;
    st.t = await steps(st.t, 4, () => dropBpm(st.n), (s, ta, d) => {
      if (s % 2 === 0) kick(ta, true, 0.9);
      backFree(ta, s, d, st);
      if (s < 3) { bell(ta, 81 + s * 5, 1, 0.5); snare(ta, 0.1 + s * 0.01, 220 + s * 20); }
    }, s => {
      if (s === 0) { showCard('more', 'DROP PADS', '+' + e.bars + ' BARS', ''); setBar(st.n, st.bars); punch(); bg.k = 1.4; shake(); burst(el.bar, 14, { col: [5, 2], sp: 260, ttl: 0.5 }); }
      else if (s === 3) hideCard();
    }, my);
  }
  async function dropOutro(e, st, my, cele) {
    const total = st.total, r = rate();
    let t = Math.max(st.t, Clock.now() + 0.02);
    cue((s, ta) => sndEnd(ta), 0, t, 0);
    await until(t, my);
    clearGrid(); setMode('base'); setSub('');
    st.sum = 'THE DROP · ' + st.n + (st.n === 1 ? ' BAR' : ' BARS');
    if (cele) { await until(t + 0.6 * r, my); setGain(1, false); setBar(1, 1); st.t = Clock.now(); return; }      // the celebration tells the total
    showCard('end', st.sum, M(0), 'TOTAL WIN');
    const t0 = Clock.now(), dur = 0.9 * r;
    for (;;) {
      const k = Math.min(1, (Clock.now() - t0) / dur);
      digits(el.cardB, M(Math.round(total * (1 - Math.pow(1 - k, 3)))));
      if (k >= 1) break;
      await until(Clock.now() + 0.033, my);
    }
    digits(el.cardB, M(total));
    if (total >= 100) { bg.k = 1.4; pop(el.cardB, 'slam'); }
    await until(t + 2.3 * r, my);
    hideCard(); setGain(1, false); setBar(1, 1);
    st.t = Clock.now();
  }

  /* ---------- Big wins: the machine cuts a record ----------
   * Gold from 10x, platinum from 50x, diamond from 250x, and the max win. One bar of the win riff per tier, the
   * count-up moves on every step, the label is re-pressed in the next metal as the count passes each tier. */
  function vu(k) {            // the pad grid as a level meter (gold, never a track colour: this is not a result)
    for (let s = 0; s < 8; s++) {
      const hgt = Math.round(Math.max(0, Math.min(4, k * 4 * (0.45 + 0.55 * Math.abs(Math.sin(s * 1.9 + k * 9))) + (Math.random() - 0.3))));
      for (let t = 0; t < 4; t++) rows[t].pads[s].classList.toggle('vu', 3 - t < hgt);
    }
  }
  async function celebrate(ctx, st, my) {
    const x = ctx.winX, total = Math.round(x * 100), max = !!ctx.capped;
    let tier = -1; for (let i = 0; i < TIERS.length; i++) if (x >= TIERS[i].x) tier = i;
    if (max) tier = 2;
    if (tier < 0 || x < ctx.cost) return;
    // breakpoints: where each bar of the count ends
    const cuts = []; for (let i = 1; i <= tier; i++) cuts.push(TIERS[i].x * 100); cuts.push(total);
    const calm = api.reduced;
    clearGrid(); hideCard();
    el.cele.dataset.tier = '0'; el.celeS.textContent = st.sum || ''; el.celeB.textContent = TIERS[0].label; digits(el.celeE, M(0));
    dev.classList.add('cele'); el.cele.classList.remove('out'); el.cele.classList.add('show');
    let t = Math.max(st.t || 0, Clock.now() + 0.02) + 0.05 * rate(), from = 0;
    // anticipation: one beat, the lights go down and the record comes up
    if (!st.feature) t = await steps(t, 2, BPM_WIN, (s, ta, d) => { if (!s) { openFilter(); riseSeg(ta, d * 2, 0.35, 0.8, 0.8); } }, null, my);
    else { t += 0.3 * rate(); cue((s, ta) => riseSeg(ta, 0.28 * rate(), 0.4, 0.8, 0.7), 0, Clock.now() + 0.02, 0); }
    for (let ph = 0; ph < cuts.length; ph++) {
      const to = cuts[ph], f0 = from;
      const len = ph === cuts.length - 1 ? 8 : 4;                      // the tiers on the way up get half a bar, the last one a full bar
      t = await steps(t, len, BPM_WIN, (s, ta, d) => winStep(ta, s, d, ph), s => {
        if (s === 0) {
          el.cele.dataset.tier = String(ph); el.celeB.textContent = TIERS[ph].label;
          if (!quick()) { pop(el.celeB, 'slam'); pop(el.cele, 'press'); }
          if (!calm && !quick()) { shake(ph > 0); if (ph > 0) { hitStop(70); pop(el.strobe, 'go2'); } }
          const c = at(el.cele); sparks(c[0], c[1], 40 + ph * 20, { col: ph === 0 ? [4, 5, 4] : ph === 1 ? [5, 0, 5] : [0, 2, 5, 3, 4], sp: 700, up: 160, ttl: 1, sz: 2.6 });
        }
        const k = (s + 1) / len, v = Math.round(f0 + (to - f0) * (1 - Math.pow(1 - k, 1.6)));
        digits(el.celeE, M(v)); if (!quick()) pop(el.celeE, s % 2 ? 'tk' : 'beat');
        vu((ph + k) / cuts.length);
        if (s % 2 === 0) { bg.k = 1.4; for (let i = 0; i < 24; i++) lv[i] = Math.max(lv[i], 0.5 + Math.random() * 0.5); }
      }, my);
      from = to;
    }
    // the final amount lands
    t = await steps(t, 5, BPM_WIN, (s, ta) => { if (!s) winSlam(ta, tier, max); }, s => {
      if (s) return;
      digits(el.celeE, M(total));
      if (max) { el.cele.dataset.tier = '3'; el.celeB.textContent = 'MAX WIN'; }
      if (!quick()) { pop(el.celeE, 'slam'); pop(el.celeB, 'slam'); }
      if (!calm && !quick()) { hitStop(tier > 0 || max ? 120 : 70); shake(true); pop(el.strobe, max ? 'go' : 'go2'); }
      const c = at(el.cele); sparks(c[0], c[1], max ? 150 : 70 + tier * 25, { col: [0, 1, 2, 3, 4, 5], sp: 1000, up: 220, ttl: 1.3, sz: 3 });
      vu(1); bg.k = 1.4; setHero(total, true); cur.setWin(cur.units(total), true);
    }, my);
    el.cele.classList.add('out');
    for (const r of rows) for (const p of r.pads) p.classList.remove('vu');
    await until(t + 0.25 * rate(), my);
    el.cele.classList.remove('show', 'out'); dev.classList.remove('cele');
  }

  function reset() {
    run++;
    clearGrid(); hideCard();
    dev.classList.remove('blackout', 'roll', 'shake', 'shake2', 'charged', 'cele', 'freeze', 'arm'); frozen = false;
    el.cele.classList.remove('show', 'out'); el.vig.classList.remove('on'); el.strobe.classList.remove('go', 'go2');
    for (const r of rows) for (const p of r.pads) p.classList.remove('vu');
    setMode('base'); setGain(1, false); setBar(1, 1); setSub(''); setHero(0);
    openFilter();
  }
  let attractT = 0;
  function attract() {
    clearTimeout(attractT);
    attractT = setTimeout(() => { if (!api.busy) dev.classList.add('idle'); }, 900);
    clearTimeout(Idle.wait);
    Idle.wait = setTimeout(() => { if (!api.busy && S.on) idleStart(); }, 3200);
  }

  /* ---------- Drawn art for the rules sheet and the intro ---------- */
  function padArt(col, o = {}) {
    const g = uid(), lit = o.lit !== false, fill = o.drop ? '#120818' : lit ? `url(#${g})` : '#2b2e37';
    return `<svg viewBox="0 0 40 40" class="bd-art" aria-hidden="true"><defs><radialGradient id="${g}" cx=".5" cy=".42" r=".75"><stop offset="0" stop-color="#fff"/><stop offset=".32" stop-color="${col}"/><stop offset="1" stop-color="${col}" stop-opacity=".6"/></radialGradient></defs>
      <rect x="3" y="5" width="34" height="33" rx="8" fill="#050608"/><rect x="3" y="3" width="34" height="33" rx="8" fill="${fill}" stroke="${o.drop ? '#ff7ad1' : col}" stroke-opacity="${lit ? 0.95 : 0.5}" stroke-width="${o.drop ? 1.8 : 1}"/>
      ${lit ? '<path d="M8 8.5h24" stroke="#fff" stroke-opacity=".55" stroke-width="1.4" stroke-linecap="round"/>' : `<circle cx="20" cy="19.5" r="5.5" fill="${col}" opacity=".5"/>`}
      ${o.text ? `<text x="20" y="25" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="800" font-size="14" fill="#2a1c00">${o.text}</text>` : ''}
      ${o.drop ? '<path d="M20 31L9.5 18.5H16V8h8v10.5h6.5z" fill="#fff"/><path d="M12 33.5q8 3 16 0" fill="none" stroke="#ff7ad1" stroke-width="2" stroke-linecap="round"/>' : ''}</svg>`;
  }
  const trackArt = t => `<svg viewBox="0 0 24 24" class="bd-art" fill="none" stroke="${t.hex}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t.ico.replace('currentColor', t.hex)}</svg>`;
  const winTable = () => {
    const cs = [3, 4, 5, 6, 7, 8];
    return `<table class="bd-table"><thead><tr><th>Lit pads</th>${cs.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${TR.map(t =>
      `<tr><td>${trackArt(t)}${padArt(t.hex)}<b>${t.name}</b></td>${cs.map(c => `<td>${t.wins[c] ? '<b>' + fx(t.wins[c]) + '</b>' : '–'}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  };
  // a small bar of music for the intro: pattern rows of lit and dark pads, optional playhead
  function gridArt(rowsP, head) {
    let s = '<svg viewBox="0 0 120 80" aria-hidden="true">';
    rowsP.forEach((row, t) => [...row].forEach((ch, i) => {
      const x = 4 + i * 14.2, y = 6 + t * 17.5, col = ch === 'g' ? '#ffc93c' : TR[t].hex, lit = ch !== '0';
      s += `<rect x="${x}" y="${y}" width="12" height="14.5" rx="3.2" fill="${lit ? col : '#262932'}" ${lit ? '' : `stroke="${col}" stroke-opacity=".45" stroke-width=".7"`}/>` + (lit ? `<rect x="${x + 2.4}" y="${y + 2}" width="7.2" height="2" rx="1" fill="#fff" opacity=".75"/>` : '');
    }));
    if (head !== undefined) s += `<rect x="${2.6 + head * 14.2}" y="2.5" width="14.8" height="75" rx="4.5" fill="#fff" fill-opacity=".16" stroke="#fff" stroke-width="1.4"/>`;
    return s + '</svg>';
  }
  const goldArt = () => { const g = uid(); return `<svg viewBox="0 0 120 80" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6c8"/><stop offset=".35" stop-color="#ffd75a"/><stop offset=".7" stop-color="#e7a80f"/><stop offset="1" stop-color="#b97f00"/></linearGradient></defs>
    <g transform="translate(60 40)">${[-36, 0, 36].map((x, i) => `<g transform="translate(${x} ${i === 1 ? -4 : 5}) rotate(${(i - 1) * 9})"><rect x="-15" y="-13" width="30" height="30" rx="7" fill="#3a2600"/><rect x="-15" y="-16" width="30" height="30" rx="7" fill="url(#${g})" stroke="#fff3c0" stroke-width="1"/><text y="5" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="800" font-size="14" fill="#2a1c00">×${[2, 5, 3][i]}</text></g>`).join('')}</g></svg>`; };
  const dropArt = () => `<svg viewBox="0 0 120 80" aria-hidden="true"><g stroke-linecap="round" fill="none">${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4 + 0.39; return `<path d="M${(60 + Math.cos(a) * 30).toFixed(1)} ${(40 + Math.sin(a) * 30).toFixed(1)}L${(60 + Math.cos(a) * 44).toFixed(1)} ${(40 + Math.sin(a) * 44).toFixed(1)}" stroke="${TR[i % 4].hex}" stroke-width="3"/>`; }).join('')}</g>
    <rect x="36" y="18" width="48" height="48" rx="11" fill="#050608"/><rect x="36" y="14" width="48" height="48" rx="11" fill="#150a1c" stroke="#ff7ad1" stroke-width="2.4"/>
    <path d="M60 54L44.5 35.5H54V20h12v15.5h9.5z" fill="#fff"/><path d="M48 58q12 4.5 24 0" fill="none" stroke="#ff7ad1" stroke-width="3" stroke-linecap="round"/></svg>`;

  LZ.boot({
    id: 'beat-drop', title: 'Beat Drop', tagline: 'The reels are a drum machine. Hear the win before you read it.', rtp: '96.30', layout: 'bar',
    logo: LOGO,
    modes: [
      { name: 'base', label: 'One Bar', cost: 1, maxWin: 8080 },
      { name: 'drop', kind: 'feature', label: 'THE DROP', cost: DROP_COST, maxWin: 8080,
        blurb: 'The first bar is certain to show 3 or 4 DROP pads, so THE DROP starts straight away.', confirmTitle: 'Bring THE DROP?', confirmLabel: 'Drop it' }
    ],
    introCards: [
      { art: gridArt(['11011100', '10001000', '00100010', '01000000'], 5), title: 'HEAR IT WIN', text: 'Four tracks, eight steps. Enough lit pads on a track and it wins.' },
      { art: goldArt(), title: 'GAIN PADS', text: 'Gold pads multiply their track: ×2, ×3 or ×5.' },
      { art: dropArt(), title: 'THE DROP', text: '3 DROP pads bring free bars with a GAIN that only climbs.' }
    ],
    featureName: 'THE DROP', statLabel: 'Drops',
    playLabel: 'PLAY', busyLabel: 'PLAYING',
    celebrate: false,
    winTiers: TIERS,
    rules: `
      <h3>How to play</h3>
      <p>The machine is a drum machine with four tracks (HAT, KICK, CLAP and LEAD) and eight steps. Press PLAY: the playhead sweeps one bar from left to right, and every pad it crosses is either lit or dark. A lit pad sounds its drum or note, so you hear the result as it lands. Each track counts its lit pads in the bar and wins when it has enough of them.</p>
      <p class="bd-legend"><span>${padArt('#27d8ff')} lit pad</span><span>${padArt('#27d8ff', { lit: false })} dark pad</span><span>${padArt('#ffc93c', { text: '×3' })} gain pad</span><span>${padArt('#fff', { drop: true })} DROP pad</span></p>
      <h3>Win table</h3>
      <p>Each track wins on its own number of lit pads (out of 8). Values are multiples of the play amount. Several tracks can win in the same bar; their wins are added. The strip at the end of each track shows the same values and lights up as the hits come in.</p>
      ${winTable()}
      <h3>Gain pads</h3>
      <p>${padArt('#ffc93c', { text: '×2' })}${padArt('#ffc93c', { text: '×3' })}${padArt('#ffc93c', { text: '×5' })} A lit pad can be a gold gain pad. It counts as a lit pad, and it multiplies the win of its own track. If a track has more than one gain pad, their values are added together first (×2 and ×3 make ×5). A gain pad on a track that does not win has no effect.</p>
      <h3>In the pocket</h3>
      <p>When three tracks win in the same bar, the bar is in the pocket and its whole win is doubled. When all four tracks win, it is tripled.</p>
      <h3>DROP pads and THE DROP</h3>
      <p>${padArt('#fff', { drop: true })} A lit pad can be a DROP pad. It counts as a lit pad for its track, and a track can show at most one per bar. 3 DROP pads in a bar start THE DROP with 6 free bars. 4 DROP pads start it with 10 free bars. The bar that triggers it keeps its own win.</p>
      <p>In THE DROP the tempo goes up and lit pads are more common. GAIN starts at ×1. Every free bar's win is multiplied by the current GAIN, and after every winning bar GAIN goes up by 1. It never goes back down during the feature. 3 DROP pads in a free bar add 3 more bars, 4 DROP pads add 5 more, up to 20 free bars in total. THE DROP wins the sum of all its bars.</p>
      <h3>THE DROP mode</h3>
      <p>The THE DROP button starts a round that is played for ${DROP_COST}× the play amount. Its first bar is certain to show 3 or 4 DROP pads, so THE DROP is instantly triggered. Everything else follows the same rules.</p>
      <h3>Maximum win</h3>
      <p>The most one round can win is 8,080× the play amount. If the total reaches that, the round ends at once and wins exactly 8,080×.</p>
      <h3>Reading the machine</h3>
      <p>Beside each track: its lit pads so far out of 8. At the end of each row: the track's win ladder, with the next count that wins marked, and what the track has won in this bar. The display shows the tempo (BPM), the bar number, the current GAIN, the DROP pads in this bar and the total win of the round. A round that wins 10×, 50× or 250× the play amount or more is marked as a gold, platinum or diamond win; this is only a display and does not change the win.</p>`,
    mount(st, a) {
      api = a; S = a.sound; stage = st;
      build(a.h);
      el.chassis = dev.querySelector('.bd-chassis');
      setHero(0); setGain(1, false); setBar(1, 1); setBpm(); setLamps(0);
      rows.forEach(r => setLadder(r, 0, 0, 0));
      if ('ResizeObserver' in window) { const ro = new ResizeObserver(layout); ro.observe(stage); ro.observe(document.getElementById('lzPanel')); }
      window.addEventListener('resize', layout);
      layout();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout, () => {});
      document.addEventListener('visibilitychange', () => { if (document.hidden) idleStop(); });
      requestAnimationFrame(frame);
    },
    reset,
    async play(events, ctx) {
      clearTimeout(attractT); idleStop();
      reset();
      const my = run;
      cur = ctx; Clock.begin();
      setHero(0);
      const st = { feature: false, bars: 0, gain: 1, n: 0, t: 0, total: 0, sum: '', ch: PROG[roundNo++ % 4] };
      const cele = ctx.winX >= ctx.cost && (ctx.winX >= TIERS[0].x || ctx.capped);
      try {
        for (const e of events) {
          if (!e || typeof e !== 'object') continue;
          if (e.type === 'bar') { await playBar(e, st, my); if (Number.isFinite(e.total)) st.total = e.total; }
          else if (e.type === 'drop') await dropIntro(e, st, my);
          else if (e.type === 'more') await moreBars(e, st, my);
          else if (e.type === 'dropEnd') await dropOutro(e, st, my, cele);
        }
        if (cele) await celebrate(ctx, st, my);
      } catch (err) { if (err !== STOP) throw err; }
      return { feature: st.feature };
    },
    idle() { attract(); },
    onFast() { setBpm(); },
    onSound(on) { if (!on) idleStop(); else if (!api.busy && dev && !Idle.on) { clearTimeout(Idle.wait); Idle.wait = setTimeout(() => { if (!api.busy && S.on) idleStart(); }, 2000); } },
    onStart() { attract(); }
  });
})();
