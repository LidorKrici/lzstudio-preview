/* Rock Chompers mixer (production standard chapter 6, adapted from Last Step's): buses master 0.9 -> limiter,
 * fx 1.0 that ducks the music (attack 1 ms, release 130 ms), music 0.45 with a low-pass for tension, ambience 0.2;
 * pools with random pitch, a rate limit per action, at most 10 voices; adaptive music in full-mix layers that share
 * one timeline (up on the beat, down after 8 beats). Everything connects to the shell's sound.out, so the sound
 * button silences all of it. Files: assets/snd/<id>.webm (Opus), or .mp4 (AAC) where Opus cannot be decoded.
 * The game only emits events; the sound is tuned in CFG below (standard 6.2). */
window.RCSound = (() => {
  'use strict';
  const MAN = window.RC_SND || { files: {}, music: {} };
  const CFG = {
    pools: {
      click: ['ui_click_1', 'ui_click_2'], throw: ['throw_1', 'throw_2', 'throw_3'], chomp: ['chomp_1', 'chomp_2', 'chomp_3'],
      sizzle: ['sizzle_1', 'sizzle_2'], boom: ['boom_1', 'boom_2', 'boom_3'], rocks: ['rocks_1', 'rocks_2', 'rocks_3'],
      peb: ['find_peb_1', 'find_peb_2'], gem: ['find_gem_1', 'find_gem_2', 'find_gem_3'], goldf: ['find_gold_1', 'find_gold_2'],
      tooth: ['tooth_1', 'tooth_2'], thief: ['thief_1', 'thief_2'],
    },
    // C major pentatonic, two octaves, in cents: finds climb it through a round
    SCALE: [0, 200, 400, 700, 900, 1200, 1400, 1600, 1900, 2100, 2400],
    events: {
      click:     [{ s: 'click', v: .5, r: 60, rate: 50 }],
      tick:      [{ s: 'ui_tick', v: .45, r: 30, rate: 40 }],
      throw:     [{ s: 'throw', v: .55, r: 120, rate: 40 }],
      chomp:     [{ s: 'chomp', v: .6, r: 140, rate: 40 }, { s: 'sizzle', v: .35, r: 100, d: .08, rate: 60 }],
      boom:      [{ s: 'boom', v: .8, r: 90, duck: .55, rate: 30 }, { s: 'rocks', v: .5, r: 160, d: .06, rate: 30 }],
      peb:       [{ s: 'peb', v: .5, p: 'scale', r: 40, rate: 30 }],
      gem:       [{ s: 'gem', v: .6, p: 'scale', r: 0, rate: 30 }],
      gold:      [{ s: 'goldf', v: .7, p: 'scale', r: 0, rate: 30 }],
      crown:     [{ s: 'find_crown', v: .9, duck: .6 }],
      tooth:     [{ s: 'tooth', v: .75, p: 'tooth', r: 20 }],
      xtra:      [{ s: 'xtra_pop', v: .7 }],
      goldPep:   [{ s: 'gold_1', v: .7 }],
      goldPep2:  [{ s: 'gold_2', v: .8 }],
      goldPep3:  [{ s: 'gold_3', v: .9, duck: .6 }],
      thief:     [{ s: 'flap', v: .5 }, { s: 'thief', v: .75, d: .12 }],
      cough:     [{ s: 'peb', v: .45, p: -200 }],
      fuse:      [{ s: 'reaper_fuse', v: .5 }],
      reaper:    [{ s: 'reaper_boom', v: 1, duck: .8 }],
      nightIn:   [{ s: 'night_in', v: .9, duck: .9 }],
      nightOut:  [{ s: 'night_out', v: .8, duck: .6 }],
      winSmall:  [{ s: 'win_small', v: .7, duck: .5 }],
      tier0:     [{ s: 'win_1', v: .85, duck: .8 }],
      tier1:     [{ s: 'win_2', v: .9, duck: .8 }],
      tier2:     [{ s: 'win_3', v: .95, duck: .85 }],
      tier3:     [{ s: 'win_4', v: 1, duck: .9 }],
    },
    countRise: [400, 900, 1400, 2000, 2400],
  };
  let openBig = null; const bigGate = new Promise(r => { openBig = r; });
  let shell = null, ctx = null, bus = null, buffers = {}, loading = null, voices = 0, holdDuck = 1;
  const lastStart = new Map();
  let music = null, wantMusic = null, wantLevel = 0, downTimer = 0, amb = null, wantAmb = null;

  function setup() {
    if (ctx) return true;
    if (!shell) return false;
    const c = shell.ctx(); if (!c) return false;
    ctx = c;
    const master = ctx.createGain(); master.gain.value = .9;
    const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -1; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = .002; lim.release.value = .08;
    master.connect(lim); lim.connect(shell.out);
    const fx = ctx.createGain(); fx.gain.value = 1; fx.connect(master);
    const mus = ctx.createGain(); mus.gain.value = .45;                 // Lidor, 28.11: "the music a little louder"
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 20000; lp.Q.value = .7;
    const duck = ctx.createGain(); duck.gain.value = 1;
    mus.connect(lp); lp.connect(duck); duck.connect(master);
    const ambBus = ctx.createGain(); ambBus.gain.value = .2; ambBus.connect(master);
    bus = { master, fx, music: mus, lp, duck, amb: ambBus };
    loading = loadAll().then(() => { if (wantAmb) ambience(wantAmb); if (wantMusic) playMusic(wantMusic, wantLevel); });
    return true;
  }
  async function loadAll() {
    const names = Object.keys(MAN.files || {});
    let ext = '.webm';
    const one = async n => {
      try {
        const r = await fetch('assets/snd/' + n + ext); const b = await r.arrayBuffer();
        buffers[n] = await ctx.decodeAudioData(b);
      } catch (e) {
        if (ext === '.webm') {                      // no Opus here: every file from the AAC copy
          try { const r = await fetch('assets/snd/' + n + '.mp4'); buffers[n] = await ctx.decodeAudioData(await r.arrayBuffer()); } catch (e2) { /* silent */ }
        }
      }
    };
    // the small effects first, then music and ambience
    const fxs = names.filter(n => !/^(mus_|amb_)/.test(n)), big = names.filter(n => /^mus_/.test(n));
    await Promise.all(fxs.map(one));
    // music and ambience a little later, so the first round loads light (fix #17); the game is silent of music till then
    // Lidor, 28.11: "why does the music take so long to start". The day music comes right away (about 1.1MB), the rest after the first round
    const day = ['mus_day_1'].filter(n => big.includes(n)); await Promise.all(day.map(one));
    if (wantMusic === 'day' && (!music || music.name !== 'day')) playMusic('day', wantLevel);
    await bigGate;                                   // the game opens it after the first round (fix #17)
    for (const n of big.filter(n => !day.includes(n)).sort((a, b) => (/^mus_day/.test(b) ? 1 : 0) - (/^mus_day/.test(a) ? 1 : 0))) { await one(n); addLayers(); }
  }

  function duckFx(amount) {
    if (!bus) return;
    const g = bus.duck.gain, t = ctx.currentTime, floor = Math.min(holdDuck, 1 - amount);
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(floor, t + .001); g.setTargetAtTime(holdDuck, t + .06, .13 / 3);
  }
  function play(name, { v = 1, cents = 0, delay = 0, loop = false, dest, force = false } = {}) {
    if (!setup()) return null;
    const buf = buffers[name]; if (!buf || (!force && voices >= 10)) return null;
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = loop;
    src.playbackRate.value = Math.pow(2, cents / 1200);
    const g = ctx.createGain(); g.gain.value = v;
    src.connect(g); g.connect(dest || bus.fx);
    if (!force && !loop) { voices++; src.onended = () => { voices--; }; }
    src.start(ctx.currentTime + delay);
    return { src, gain: g };
  }
  function emit(event, arg = 0) {
    const acts = CFG.events[event]; if (!acts || !setup()) return;
    acts.forEach((a, i) => {
      const key = event + ':' + i, now = performance.now();
      if (a.rate && now - (lastStart.get(key) || -1e9) < a.rate) return;
      lastStart.set(key, now);
      const pool = CFG.pools[a.s], name = pool ? pool[Math.floor(Math.random() * pool.length)] : a.s;
      let cents = a.p === 'scale' ? CFG.SCALE[Math.min(CFG.SCALE.length - 1, Math.max(0, arg | 0))] : a.p === 'tooth' ? Math.min(arg, 5) * 120 : (a.p || 0);
      if (a.r) cents += (Math.random() * 2 - 1) * a.r;
      play(name, { v: a.v ?? 1, cents, delay: a.d || 0 });
      duckFx(a.duck ?? Math.min(.45, (a.v ?? 1) * .3));
    });
  }

  // Lidor, 28.11: "there is a background noise, just like white noise". The river-and-crickets bed was that hiss: no ambience bed any more
  function ambience(name) {
    wantAmb = null; return; // eslint-disable-line no-unreachable
    wantAmb = name;
    if (!setup() || !buffers[name]) return;
    if (amb && amb.name === name) return;
    const t = ctx.currentTime;
    if (amb) { const o = amb; o.node.gain.gain.setTargetAtTime(0, t, .5); o.node.src.stop(t + 2.5); }
    const node = play(name, { v: 1, loop: true, dest: bus.amb, force: true }); if (!node) return;
    node.gain.gain.setValueAtTime(0, t); node.gain.gain.linearRampToValueAtTime(1, t + 1.5);
    amb = { name, node };
  }
  function playMusic(name, level = 0) {
    wantMusic = name; wantLevel = level;
    if (!setup()) return;
    const M = (MAN.music || {})[name]; if (!M || !buffers[M.layers[0]]) { if (M) setTimeout(() => { if (wantMusic === name && (!music || music.name !== name)) playMusic(name, wantLevel); }, 1500); return; }
    if (music && music.name === name) { setLevel(level); return; }
    const t = ctx.currentTime;
    if (music) { const old = music; old.nodes.forEach(n => { n.gain.gain.setTargetAtTime(0, t, .6); n.src.stop(t + 2.5); }); }
    const start = t + .4;
    const nodes = M.layers.filter((l, i) => M.layers.slice(0, i + 1).every(q => buffers[q])).map((l, i) => {
      const src = ctx.createBufferSource(); src.buffer = buffers[l]; src.loop = true;
      const g = ctx.createGain(); g.gain.value = i === Math.min(level, M.layers.length - 1) ? 1 : 0;
      src.connect(g); g.connect(bus.music); src.start(start);
      return { src, gain: g };
    });
    music = { name, start, bpm: M.bpm || 104, nodes, level: Math.min(level, nodes.length - 1) };
  }
  // the music can start on its first layer; the others join the playing loop, in time, as they arrive
  function addLayers() {
    if (!music || !ctx) return;
    const M = (MAN.music || {})[music.name]; if (!M) return;
    while (music.nodes.length < M.layers.length && buffers[M.layers[music.nodes.length]]) {
      const buf = buffers[M.layers[music.nodes.length]], t = ctx.currentTime + .05;
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const g = ctx.createGain(); g.gain.value = 0; src.connect(g); g.connect(bus.music);
      src.start(t, Math.max(0, (t - music.start) % buf.duration));
      music.nodes.push({ src, gain: g });
    }
    if (wantLevel > music.level) setLevel(wantLevel);
  }
  function nextBeat() { const beat = 60 / music.bpm, t = ctx.currentTime; return music.start + Math.ceil((t - music.start) / beat) * beat; }
  function crossTo(level, at) {
    music.nodes.forEach((n, i) => { const g = n.gain.gain; g.cancelScheduledValues(at); g.setValueAtTime(g.value, at); g.linearRampToValueAtTime(i === level ? 1 : 0, at + .2); });
    music.level = level;
  }
  function setLevel(level) {
    wantLevel = level;
    if (!music || !ctx) return;
    level = Math.min(level, music.nodes.length - 1);
    clearTimeout(downTimer);
    if (level > music.level) crossTo(level, nextBeat());
    else if (level < music.level) downTimer = setTimeout(() => { if (music && wantLevel < music.level) crossTo(Math.min(wantLevel, music.nodes.length - 1), nextBeat()); }, 8 * 60 / music.bpm * 1000);
  }
  function tension(on) {
    if (!bus) return;
    const f = bus.lp.frequency, t = ctx.currentTime;
    f.cancelScheduledValues(t); f.setValueAtTime(Math.max(150, f.value), t);
    if (on) f.exponentialRampToValueAtTime(400, t + .7); else f.exponentialRampToValueAtTime(20000, t + .3);
  }
  function hold(level) {
    holdDuck = level;
    if (!bus) return;
    const g = bus.duck.gain, t = ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(level, t + (level < 1 ? .15 : .6));
  }
  // the count of a win: the tick loop with its pitch climbing countRise[tier] cents; returns a stop function
  function count(seconds, tier) {
    if (!setup()) return () => {};
    const rise = CFG.countRise[Math.min(tier, CFG.countRise.length - 1)];
    const n = play('count_loop', { v: .45, loop: true, force: true }); if (!n) return () => {};
    const t = ctx.currentTime, r = n.src.playbackRate;
    r.setValueAtTime(1, t); r.linearRampToValueAtTime(Math.pow(2, rise / 1200), t + Math.max(.1, seconds));
    let done = false;
    const stop = () => { if (done) return; done = true; try { n.gain.gain.setTargetAtTime(0, ctx.currentTime, .02); n.src.stop(ctx.currentTime + .1); } catch (e) { /* ended */ } };
    setTimeout(stop, (seconds + .05) * 1000);
    return stop;
  }

  return {
    init(api) { shell = api.sound; },
    wake() { setup(); },
    loadMusic() { if (openBig) { openBig(); openBig = null; } },
    emit, playMusic, setLevel, tension, hold, count, ambience,
    get level() { return music ? music.level : 0; },
    stats() { return { ctx: !!ctx, decoded: Object.keys(buffers).length, files: Object.keys(MAN.files || {}).length, music: music && music.name, level: music && music.level, voices }; },
  };
})();
