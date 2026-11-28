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
    // the Vault's music waits until after the first round (loadRest), so the first load stays under 8MB (standard 9.2)
    let aac = false;
    loading = decodeAll(SND, k => !LATER.test(k)).then(ok => (ok ? null : loadAac().then(() => { aac = true; return decodeAll(window.LS_SND_AAC || {}, k => !LATER.test(k)); })))
      .then(() => { startAmbience(); if (wantMusic) playMusic(wantMusic, wantLevel); });
    loadRest = () => { if (restLoading) return restLoading; restLoading = loading.then(() => decodeAll(aac ? (window.LS_SND_AAC || {}) : SND, k => LATER.test(k))).then(joinLate); return restLoading; };
    return true;
  }

  // after the first round: the Vault's music and the temple's top layer (2026-11-28, first-load budget with the blessed fall);
  // a layer that arrives later joins the music that already plays, in time (joinLate)
  const LATER = /^music_vault_|^music_temple_2$/;
  let loadRest = () => null, restLoading = null;
  function decodeAll(map, keep = () => true) {
    let fails = 0; const list = Object.entries(map).filter(([k]) => keep(k));
    // a data URI (front/, works from file://) or a file next to the page (publish/front, tools/split-publish.mjs)
    const bytes = uri => uri.startsWith('data:') ? Promise.resolve(b64(uri)) : fetch(uri).then(r => r.arrayBuffer());
    return Promise.all(list.map(([k, uri]) => bytes(uri).then(b => ctx.decodeAudioData(b)).then(buf => { buffers[k] = buf; }).catch(() => { fails++; })))
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
    const M = CFG.music[name]; if (!M || !buffers[M.layers[0]]) return;
    if (music && music.name === name) { setLevel(level); return; }
    const t = ctx.currentTime;
    if (music) {                                    // the old music fades over 2 s (6.3)
      const old = music; old.nodes.forEach(n => { if (!n) return; n.gain.gain.setTargetAtTime(0, t, 0.6); n.src.stop(t + 2.5); });
    }
    const start = t + (music ? 0.4 : 0.4);          // music starts 0.4 s after the cue
    const nodes = M.layers.map((l, i) => {
      if (!buffers[l]) return null;                  // not loaded yet: joins later (joinLate)
      const src = ctx.createBufferSource(); src.buffer = buffers[l]; src.loop = true;
      if (M.bars) { src.loopStart = 0; src.loopEnd = Math.min(buffers[l].duration, M.bars * 240 / M.bpm); }   // the exact loop, not the codec's padding
      const g = ctx.createGain(); g.gain.value = i === level ? 1 : 0;
      src.connect(g); g.connect(bus.music); src.start(start);
      return { src, gain: g };
    });
    music = { name, start, bpm: M.bpm, nodes, level: Math.min(level, topLayer(nodes)), M };
  }
  function nextBeat(after = 0) {
    const beat = 60 / music.bpm, t = ctx.currentTime + after;
    return music.start + Math.ceil((t - music.start) / beat) * beat;
  }
  // full mixes of one timeline: a 200 ms crossfade at the same point in time (6.3, the Dojo method)
  function crossTo(level, at) {
    level = Math.min(level, topLayer(music.nodes));
    music.nodes.forEach((n, i) => { if (!n) return; const g = n.gain.gain; g.cancelScheduledValues(at); g.setValueAtTime(g.value, at); g.linearRampToValueAtTime(i === level ? 1 : 0, at + 0.2); });
    music.level = level;
  }
  const topLayer = nodes => { let k = 0; nodes.forEach((n, i) => { if (n) k = i; }); return k; };
  // a layer decoded after the music started: started now at the same point of the loop, silent until its level comes
  function joinLate() {
    if (!music || !ctx) return;
    const M = music.M, t = ctx.currentTime + 0.05;
    music.nodes.forEach((n, i) => {
      if (n || !buffers[M.layers[i]]) return;
      const src = ctx.createBufferSource(); src.buffer = buffers[M.layers[i]]; src.loop = true;
      const end = M.bars ? Math.min(src.buffer.duration, M.bars * 240 / M.bpm) : src.buffer.duration;
      src.loopStart = 0; src.loopEnd = end;
      const g = ctx.createGain(); g.gain.value = 0; src.connect(g); g.connect(bus.music);
      src.start(t, Math.max(0, (t - music.start) % end));
      music.nodes[i] = { src, gain: g };
    });
    if (wantLevel > music.level) setLevel(wantLevel);
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
  // a heartbeat (2026-11-28, the tension gauge): two low thumps, made here (no file, no AI sound), on the fx bus
  function heart(v = 0.5) {
    if (!setup()) return;
    const t = ctx.currentTime + 0.01;
    [[0, 1], [0.19, 0.65]].forEach(([d, a]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(86, t + d); o.frequency.exponentialRampToValueAtTime(44, t + d + 0.15);
      g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(Math.max(0.001, v * a), t + d + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.24);
      o.connect(g); g.connect(bus.fx); o.start(t + d); o.stop(t + d + 0.28);
    });
    duckFx(0.25);
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
    emit, playMusic, setLevel, tension, hold, count, heart,
    loadRest() { return loadRest(); },              // after the first round: the Vault's music
    get level() { return music ? music.level : 0; },
    stats() { return { ctx: !!ctx, state: ctx && ctx.state, decoded: Object.keys(buffers).length, files: Object.keys(SND).length, music: music && music.name, level: music ? music.level : null, voices }; },
  };
})();
