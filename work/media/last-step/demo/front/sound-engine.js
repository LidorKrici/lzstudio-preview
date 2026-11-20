/* Last Step mixer (production standard chapter 6): buses master 0.9 → limiter, fx 1.0 that ducks music 0.3
 * (attack 1 ms, release 130 ms), ambience 0.2; pools with random pitch, a rate limit per action and at most 8 voices;
 * adaptive music in layers that share one timeline (switching up on the beat, down after 8 beats), a low-pass for
 * the tension moment, and per-moment ducking. Everything connects to the shell's sound.out, so the sound button
 * silences all of it. Buffers come from window.LS_SND (data URIs) and are decoded after the first tap. */
window.LSSound = (() => {
  'use strict';
  const CFG = window.LS_SOUND_CFG, SND = window.LS_SND || {};
  let shell = null, ctx = null, bus = null, buffers = {}, loading = null, voices = 0;
  const lastStart = new Map();
  let music = null;            // { name, start, bpm, nodes: [{src, gain}], level }
  let wantMusic = null, wantLevel = 0, downTimer = null, holdDuck = 1;

  function b64(uri) { const s = atob(uri.split(',')[1]); const a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a.buffer; }
  function setup() {
    if (ctx || !shell) return !!ctx;
    const c = shell.ctx(); if (!c) return false;
    ctx = c;
    const master = ctx.createGain(); master.gain.value = 0.9;
    const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -1; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.08;
    master.connect(lim); lim.connect(shell.out);
    const fx = ctx.createGain(); fx.gain.value = 1; fx.connect(master);
    const musicOut = ctx.createGain(); musicOut.gain.value = 0.3;
    const duck = ctx.createGain(); duck.gain.value = 1;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 20000; lp.Q.value = 0.7;
    musicOut.connect(lp); lp.connect(duck); duck.connect(master);
    const amb = ctx.createGain(); amb.gain.value = 0.2; amb.connect(master);
    bus = { master, fx, music: musicOut, duck, lp, amb };
    // Opus (webm) first; a browser that cannot decode it (older Safari) gets the AAC copy, fetched only then
    loading = decodeAll(SND).then(ok => (ok ? null : loadAac().then(() => decodeAll(window.LS_SND_AAC || {}))))
      .then(() => { startAmbience(); if (wantMusic) playMusic(wantMusic, wantLevel); });
    return true;
  }

  function decodeAll(map) {
    let fails = 0; const list = Object.entries(map);
    return Promise.all(list.map(([k, uri]) => ctx.decodeAudioData(b64(uri)).then(buf => { buffers[k] = buf; }).catch(() => { fails++; })))
      .then(() => list.length > 0 && fails < list.length / 2);
  }
  function loadAac() {
    return new Promise(res => {
      if (window.LS_SND_AAC) return res();
      const s = document.createElement('script'); s.src = 'sounds-aac.js'; s.onload = res; s.onerror = res; document.head.appendChild(s);
    });
  }

  /* ---------- effects ---------- */
  function duckFx(amount) {                         // the fx → music envelope: down at once, back in 130 ms
    if (!bus) return;
    const g = bus.duck.gain, t = ctx.currentTime, floor = Math.min(holdDuck, 1 - amount);
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(floor, t + 0.001); g.setTargetAtTime(holdDuck, t + 0.06, 0.13 / 3);
  }
  function play(name, { v = 1, cents = 0, delay = 0, loop = false, dest, force = false } = {}) {
    if (!setup()) return null;
    const buf = buffers[name]; if (!buf || (!force && voices >= 8)) return null;   // force: scheduled sequences (the count)
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = loop;
    src.playbackRate.value = Math.pow(2, cents / 1200);
    const g = ctx.createGain(); g.gain.value = v;
    src.connect(g); g.connect(dest || bus.fx);
    if (!force && !loop) { voices++; src.onended = () => { voices--; }; }
    src.start(ctx.currentTime + delay);
    return { src, gain: g };
  }
  function emit(event, arg = 0) {
    const acts = CFG.events[event]; if (!acts) return;
    if (!setup()) return;
    acts.forEach((a, i) => {
      const key = event + ':' + i, now = performance.now();
      if (a.rate && now - (lastStart.get(key) || -1e9) < a.rate) return;
      lastStart.set(key, now);
      const pool = CFG.pools[a.s], name = pool ? pool[Math.floor(Math.random() * pool.length)] : a.s;
      let cents = a.p === 'scale' ? CFG.SCALE[Math.min(CFG.SCALE.length - 1, Math.max(0, arg))] : a.p === 'gold' ? Math.min(arg * 100, 1200) : (a.p || 0);
      if (a.r) cents += (Math.random() * 2 - 1) * a.r;
      play(name, { v: a.v ?? 1, cents, delay: a.d || 0 });
      duckFx(a.duck ?? Math.min(0.5, (a.v ?? 1) * 0.35));
    });
  }

  /* ---------- ambience and music ---------- */
  let ambNode = null;
  function startAmbience() { if (ambNode || !buffers.ambience) return; ambNode = play('ambience', { v: 1, loop: true, dest: bus.amb }); }
  function playMusic(name, level = 0) {
    wantMusic = name; wantLevel = level;
    if (!setup() || !loading) return;
    const M = CFG.music[name]; if (!M || !M.layers.every(l => buffers[l])) return;
    if (music && music.name === name) { setLevel(level); return; }
    const t = ctx.currentTime;
    if (music) {                                    // the old music fades over 2 s (6.3)
      const old = music; old.nodes.forEach(n => { n.gain.gain.setTargetAtTime(0, t, 0.6); n.src.stop(t + 2.5); });
    }
    const start = t + (music ? 0.4 : 0.4);          // music starts 0.4 s after the cue
    const nodes = M.layers.map((l, i) => {
      const src = ctx.createBufferSource(); src.buffer = buffers[l]; src.loop = true;
      const g = ctx.createGain(); g.gain.value = i === level ? 1 : 0;
      src.connect(g); g.connect(bus.music); src.start(start);
      return { src, gain: g };
    });
    music = { name, start, bpm: M.bpm, nodes, level };
  }
  function nextBeat(after = 0) {
    const beat = 60 / music.bpm, t = ctx.currentTime + after;
    return music.start + Math.ceil((t - music.start) / beat) * beat;
  }
  // full mixes of one timeline: a 200 ms crossfade at the same point in time (6.3, the Dojo method)
  function crossTo(level, at) {
    music.nodes.forEach((n, i) => { const g = n.gain.gain; g.cancelScheduledValues(at); g.setValueAtTime(g.value, at); g.linearRampToValueAtTime(i === level ? 1 : 0, at + 0.2); });
    music.level = level;
  }
  function setLevel(level) {
    wantLevel = level;
    if (!music || !ctx) return;
    clearTimeout(downTimer);
    if (level > music.level) crossTo(level, nextBeat());                       // up: on the next beat
    else if (level < music.level) {                                            // down: only after 8 beats
      const wait = 8 * 60 / music.bpm;
      downTimer = setTimeout(() => { if (music && wantLevel < music.level) crossTo(wantLevel, nextBeat()); }, wait * 1000);
    }
  }
  function tension(on) {                            // 6.4: the music closes to 150 Hz in 0.7 s, opens in 0.3 s
    if (!bus) return;
    const f = bus.lp.frequency, t = ctx.currentTime;
    f.cancelScheduledValues(t); f.setValueAtTime(f.value, t);
    if (on) f.exponentialRampToValueAtTime(150, t + 0.7); else f.exponentialRampToValueAtTime(20000, t + 0.3);
  }
  function hold(level) {                            // per-moment ducking: feature 0.5, count 0.7, big win 0.05; 1 = release
    holdDuck = level;
    if (!bus) return;
    const g = bus.duck.gain, t = ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(level, t + (level < 1 ? 0.15 : 0.6));
  }
  // the count of a big win: ticks whose pitch climbs to countRise[tier] cents; returns a stop function
  function count(seconds, tier) {
    if (!setup()) return () => {};
    const rise = CFG.countRise[Math.min(tier, CFG.countRise.length - 1)], step = 0.07, n = Math.max(1, Math.floor(seconds / step));
    const nodes = [];
    for (let i = 0; i < n; i++) { const k = play('tick', { v: 0.45, cents: rise * i / n, delay: i * step, force: true }); if (k) nodes.push(k); }
    return () => { const t = ctx.currentTime; nodes.forEach(k => { try { k.src.stop(t + 0.01); } catch (e) { /* already ended */ } }); };
  }

  return {
    init(api) { shell = api.sound; },
    wake() { setup(); },
    emit, playMusic, setLevel, tension, hold, count,
    get level() { return music ? music.level : 0; },
    stats() { return { ctx: !!ctx, state: ctx && ctx.state, decoded: Object.keys(buffers).length, files: Object.keys(SND).length, music: music && music.name, level: music ? music.level : null, voices }; },
  };
})();
