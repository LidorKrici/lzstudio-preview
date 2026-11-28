/* Retrograde mixer (production standard chapter 6, adapted from Rock Chompers' front/sound.js).
 * Every sound is a real recording (sound/CREDITS-sound.md). The game only emits events; all levels, pools, pitch and
 * pan live in CFG below (standard 6.2).
 *   buses: master 0.9 -> limiter -> the shell's sound.out (so the speaker button silences everything)
 *          fx 1.0 (ducks the music by its own level, release 130 ms) | music 0.3 -> low-pass (tension) -> duck
 *          ambience 0.12
 *   voices: at most 10 one-shots, 30 ms minimum between two starts of the same file, a rate limit per action.
 *   music:  full-mix layers of identical length on one timeline: up on the next beat, down only after 8 beats, never
 *           down inside a feature. A new set fades the old one out over 2 s and starts on a beat.
 *   loading (fix #17, first load): wake() on PLAY fetches only the CORE set (~150 KB: click, landing, spin, small win).
 *           Everything else (all music, bonus, big-win stingers, ambience) is fetched by loadRest(), which the game
 *           calls when its first spin has finished, in batches of 4 with a frame between them. Music that is not
 *           loaded yet simply starts later.
 * Files: assets/snd/<id>.webm (Opus); assets/snd/<id>.mp4 (AAC) where Opus cannot be played (older Safari). */
window.RGSound = (() => {
  'use strict';
  const MAN = window.RG_SND || { files: {}, music: {} };
  // scale steps in cents for runtime ladders (D Lydian / D Phrygian, two octaves)
  const LYD = [0, 200, 400, 600, 700, 900, 1100, 1200, 1400, 1600, 1800, 1900, 2100, 2300, 2400];
  const PHR = [0, 100, 300, 500, 700, 800, 1000, 1200, 1300, 1500, 1700, 1900, 2000, 2200, 2400];
  const at = (a, i) => a[Math.max(0, Math.min(a.length - 1, i | 0))];
  const pick = (n, i) => Math.max(1, Math.min(n, i | 0));
  const CFG = {
    pools: {
      click: ['ui_click_1', 'ui_click_2', 'ui_click_3'], hover: ['ui_hover_1', 'ui_hover_2'],
      whoosh: ['whoosh_1', 'whoosh_2', 'whoosh_3'], thud: ['land_thud_1', 'land_thud_2', 'land_thud_3'],
      winS: ['win_s_1', 'win_s_2', 'win_s_3'], winB: ['win_b_1', 'win_b_2'], dust: ['dust_1', 'dust_2', 'dust_3'],
      wild: ['wild_1', 'wild_2'], unwind: ['unwind_1', 'unwind_2'], page: ['page_1', 'page_2', 'page_3'],
    },
    // event -> actions. s: sound or pool; v: volume; p: cents (number, or function of the event's argument);
    // r: random +- cents; d: delay s (or function); pan: function -> -1..1; rate: ms between starts; duck: music dip 0..1
    events: {
      click:     [{ s: 'click', v: .55, r: 60, rate: 45 }],
      hover:     [{ s: 'hover', v: .3, r: 50, rate: 90 }],
      betUp:     [{ s: 'bet_up', v: .55, p: a => Math.round(1200 * (a.level || 0)), r: 0, rate: 50 }],
      betDown:   [{ s: 'bet_down', v: .55, p: a => Math.round(1200 * (a.level || 0)), r: 0, rate: 50 }],
      buyOpen:   [{ s: 'buy_open', v: .7, duck: .4 }],
      buyConfirm:[{ s: 'buy_confirm', v: .9, duck: .7 }],
      spin:      [{ s: 'whoosh', v: .5, r: 80, p: a => (a.retro ? -300 : 0), rate: 120 }],
      // one note per column, rising (base) or falling in D Phrygian (RETROGRADE); a felt-and-brass thud under it
      land:      [{ s: a => (a.retro ? 'land_r_' : 'land_') + pick(7, (a.retro ? 6 - (a.col | 0) : (a.col | 0)) + 1), v: .42, r: 0, d: a => a.when || 0, pan: a => ((a.col | 0) - 3) * .16, rate: 20 },
                  { s: 'thud', v: .5, r: 250, d: a => a.when || 0, pan: a => ((a.col | 0) - 3) * .16, rate: 20 }],
      scatter:   [{ s: a => 'scatter_' + pick(4, a.n), v: .9, duck: .6, rate: 60 }],
      antic:     [{ s: 'antic', v: .5, p: a => at(LYD, (a.col | 0) + 1), rate: 120 }],
      // the cascade ladder: each cascade the next step (8 steps), the Phrygian set during RETROGRADE
      run:       [{ s: a => (a.retro ? 'run_r_' : 'run_') + pick(8, a.step), v: .62, rate: 80 }],
      win:       [{ s: a => (a.big ? 'winB' : 'winS'), v: a => (a.big ? .8 : .6), p: a => (a.retro ? -100 : 0), r: 30, duck: .5, rate: 80 }],
      dust:      [{ s: 'dust', v: .42, r: 120, p: a => (a.retro ? -200 : 0), rate: 120 }],
      wild:      [{ s: 'wild', v: .6, r: 60, d: a => a.when || 0, rate: 50 }],
      // ALIGNMENT steps up: one family per band (x2-4 / x5-9 / x10+), the pitch climbing the scale inside the band
      step:      [{ s: a => 'step_' + (a.mult >= 10 ? 3 : a.mult >= 5 ? 2 : 1), v: .7, p: a => at(a.retro ? PHR : LYD, a.mult >= 10 ? Math.min(6, a.mult - 10) : a.mult >= 5 ? a.mult - 5 : a.mult - 2), duck: .4, rate: 80 }],
      unwind:    [{ s: 'unwind', v: .5, r: 60, rate: 300 }],
      trigger:   [{ s: 'trigger', v: 1, duck: .9 }],
      windDown:  [{ s: 'wind_down', v: .8, duck: .6 }],
      swell:     [{ s: 'swell', v: .7 }],
      flip:      [{ s: 'flip', v: 1, duck: .9 }],
      eclipse:   [{ s: 'eclipse_in', v: 1, duck: .9 }],
      more:      [{ s: 'more', v: .9, duck: .6 }],
      release:   [{ s: 'release', v: .85, duck: .6 }],
      featureEnd:[{ s: a => (a.good ? 'end_good' : 'end_plain'), v: .9, duck: .7 }],
      skyStart:  [{ s: a => 'sky_swell_' + pick(4, a.tier), v: .85 }],
      skyHit:    [{ s: a => 'sky_hit_' + pick(4, a.tier), v: 1, duck: .95 }],
      skyEnd:    [{ s: a => (a.tier >= 3 ? 'sky_end_2' : 'sky_end_1'), v: 1, duck: .9 }],
      page:      [{ s: 'page', v: .55, r: 80, rate: 400 }],
      start:     [{ s: 'start', v: .75 }],
      lossSmall: [{ s: 'lose_soft', v: .12, rate: 400 }],   // a win below what the round cost: a quiet close (6.8)
    },
    // count-up rise per tier (cents, 6.5) and the closing sound by win / round cost
    countRise: [400, 800, 1200, 2000, 2400],
    countEnd: x => (x <= 1 ? 'count_end_low' : x <= 10 ? 'count_end_mid' : x <= 100 ? 'count_end_over' : 'count_end_high'),
    core: ['ui_click_1', 'ui_click_2', 'ui_click_3', 'whoosh_1', 'whoosh_2', 'land_1', 'land_2', 'land_3', 'land_4', 'land_5', 'land_6', 'land_7', 'land_thud_1', 'land_thud_2', 'win_s_1', 'win_s_2', 'page_1', 'page_2', 'page_3', 'start'],
    // the order loadRest() fetches the rest in: base music and ambience first, the bonus sets last
    restFirst: [/^mus_intro/, /^mus_base_1/, /^mus_base_2/, /^amb_/, /^(run_|dust_|scatter_|antic|tension|step_|count|wild_|win_)/, /^mus_base/, /./],
  };

  let shell = null, ctx = null, bus = null, voices = 0, holdDuck = 1, restAsked = false, coreP = null, restP = null;
  const buffers = {}, lastStart = new Map(), lastFile = new Map();
  let music = null, wantMusic = null, wantLevel = 0, downTimer = 0, amb = null, wantAmb = false, tense = null, paused = false;
  const ext = (() => { try { const a = document.createElement('audio'); return a.canPlayType && a.canPlayType('audio/webm; codecs="opus"') ? '.webm' : '.mp4'; } catch (e) { return '.mp4'; } })();

  function getShell() { if (!shell && window.LZ && LZ.api && LZ.api.sound) shell = LZ.api.sound; return shell; }
  function speedOk() { try { return !(window.LZ && LZ.api && LZ.api.speed && LZ.api.speed() < .12); } catch (e) { return true; } }   // QA speed-up: silent
  function setup() {
    if (ctx) return true;
    const sh = getShell(); if (!sh) return false;
    const c = sh.ctx(); if (!c || !sh.out) return false;
    ctx = c;
    const master = ctx.createGain(); master.gain.value = .9;
    const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -1; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = .002; lim.release.value = .08;
    master.connect(lim); lim.connect(sh.out);
    const fx = ctx.createGain(); fx.gain.value = 1; fx.connect(master);
    const mus = ctx.createGain(); mus.gain.value = .3;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 20000; lp.Q.value = .7;
    const duck = ctx.createGain(); duck.gain.value = 1;
    const pause = ctx.createGain(); pause.gain.value = 1;
    mus.connect(lp); lp.connect(duck); duck.connect(pause); pause.connect(master);
    const ambBus = ctx.createGain(); ambBus.gain.value = .12; ambBus.connect(pause);
    bus = { master, fx, music: mus, lp, duck, amb: ambBus, pause };
    coreP = loadList(CFG.core.filter(n => MAN.files[n]));
    if (restAsked) setTimeout(loadRest, 0);
    return true;
  }
  // fetch + decode one file (webm, or mp4 where Opus is missing or fails); XHR when fetch is refused (file://)
  function get(url) {
    return fetch(url).then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); }).catch(() => new Promise((res, rej) => {
      const x = new XMLHttpRequest(); x.open('GET', url); x.responseType = 'arraybuffer';
      x.onload = () => (x.status === 0 || x.status === 200) && x.response ? res(x.response) : rej(new Error('xhr ' + x.status)); x.onerror = rej; x.send();
    }));
  }
  const decode = b => new Promise((res, rej) => { try { const p = ctx.decodeAudioData(b, res, rej); if (p && p.then) p.then(res, rej); } catch (e) { rej(e); } });
  async function one(n) {
    if (buffers[n] || !ctx) return;
    try { buffers[n] = await decode(await get('assets/snd/' + n + ext)); }
    catch (e) { if (ext === '.webm') { try { buffers[n] = await decode(await get('assets/snd/' + n + '.mp4')); } catch (e2) { /* silent */ } } }
    if (buffers[n]) onLoaded(n);
  }
  const frame = () => new Promise(r => (window.requestAnimationFrame ? requestAnimationFrame(() => setTimeout(r, 0)) : setTimeout(r, 16)));
  async function loadList(names, batch = 4) { for (let i = 0; i < names.length; i += batch) { await Promise.all(names.slice(i, i + batch).map(one)); await frame(); } }
  // idempotent: the game may call it more than once (after its first round, and again as a fallback 30 s after PLAY).
  // Called before the audio context exists (sound off), it is remembered and runs as soon as sound is switched on.
  function loadRest() {
    if (restP) return restP;
    restAsked = true;
    if (!setup()) return Promise.resolve();
    const rest = Object.keys(MAN.files).filter(n => !CFG.core.includes(n));
    const rank = n => CFG.restFirst.findIndex(re => re.test(n));
    rest.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, 'en', { numeric: true }));
    restP = (coreP || Promise.resolve()).then(() => loadList(rest, 4));
    return restP;
  }
  function onLoaded(n) {
    if (wantMusic && (!music || music.name !== wantMusic) && setReady(wantMusic)) playMusic(wantMusic, wantLevel);   // a set that was asked for before it had loaded
    if (wantAmb && !amb && /^amb_/.test(n)) ambience(true);
    if (tense && !tense.node && n === 'tension_loop') tension(true);
  }
  const setReady = name => { const M = MAN.music[name]; return M && M.layers.every(l => buffers[l]); };

  function duckFx(amount) {
    if (!bus || !amount) return;
    const g = bus.duck.gain, t = ctx.currentTime, floor = Math.min(holdDuck, 1 - amount);
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(floor, t + .001); g.setTargetAtTime(holdDuck, t + .06, .13 / 3);
  }
  function play(name, { v = 1, cents = 0, delay = 0, loop = false, dest, force = false, pan = 0 } = {}) {
    if (!setup()) return null;
    const buf = buffers[name]; if (!buf || (!force && voices >= 10)) return null;
    const now = performance.now();
    if (!loop && now - (lastFile.get(name) || -1e9) < 30 && !delay) return null;
    lastFile.set(name, now);
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = loop;
    src.playbackRate.value = Math.pow(2, cents / 1200);
    const g = ctx.createGain(); g.gain.value = v;
    let tail = g;
    if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); tail = p; }
    src.connect(g); tail.connect(dest || bus.fx);
    if (!force && !loop) { voices++; src.onended = () => { voices--; }; }
    src.start(ctx.currentTime + Math.max(0, delay));
    return { src, gain: g };
  }
  const val = (x, a) => (typeof x === 'function' ? x(a) : x);
  function emit(event, arg) {
    const acts = CFG.events[event]; if (!acts || !speedOk() || !setup()) return;
    const a = arg && typeof arg === 'object' ? arg : { n: arg, step: arg, tier: arg, mult: arg };
    acts.forEach((x, i) => {
      const key = event + ':' + i, now = performance.now();
      if (x.rate && now - (lastStart.get(key) || -1e9) < x.rate) return;
      lastStart.set(key, now);
      const s = val(x.s, a), pool = CFG.pools[s], name = pool ? pool[Math.floor(Math.random() * pool.length)] : s;
      let cents = val(x.p, a) || 0; if (x.r) cents += (Math.random() * 2 - 1) * x.r;
      const v = val(x.v, a) ?? 1;
      play(name, { v, cents, delay: val(x.d, a) || 0, pan: x.pan ? x.pan(a) : 0 });
      duckFx(x.duck ?? Math.min(.45, v * .3));
    });
  }

  /* ---------- music ---------- */
  function playMusic(name, level = 0) {
    if (!MAN.music[name]) return;
    wantMusic = name;
    if (music && music.name === name) { setLevel(level); return; }
    wantLevel = level;
    if (!setup() || !setReady(name)) return;          // not loaded yet: starts from onLoaded()
    const M = MAN.music[name], t = ctx.currentTime;
    let start = t + .4;
    if (music) {
      const old = music, beat = 60 / old.bpm;
      old.nodes.forEach(n => { n.gain.gain.cancelScheduledValues(t); n.gain.gain.setValueAtTime(n.gain.gain.value, t); n.gain.gain.linearRampToValueAtTime(0, t + 2); n.src.stop(t + 2.1); });
      start = old.start + Math.ceil((t + .05 - old.start) / beat) * beat;   // the new set enters on the old one's beat
    }
    const lv = Math.min(level, M.layers.length - 1);
    const nodes = M.layers.map((l, i) => {
      // every music file holds pad seconds before and after the loop: it loops between pad and pad + loopSeconds
      const src = ctx.createBufferSource(); src.buffer = buffers[l]; src.loop = true;
      const pad = M.pad || 0; if (pad) { src.loopStart = pad; src.loopEnd = pad + M.loopSeconds; }
      const g = ctx.createGain(); g.gain.value = 0;
      if (i === lv) { g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(1, start + (music ? .6 : 1.2)); }
      src.connect(g); g.connect(bus.music); src.start(start, M.pad || 0);
      return { src, gain: g };
    });
    music = { name, start, bpm: M.bpm, nodes, level: lv, feature: name !== 'base' };
  }
  function nextBeat() { const beat = 60 / music.bpm, t = ctx.currentTime + .02; return Math.max(music.start, music.start + Math.ceil((t - music.start) / beat) * beat); }
  function crossTo(level, when) {
    music.nodes.forEach((n, i) => { const g = n.gain.gain; g.cancelScheduledValues(when); g.setValueAtTime(g.value, when); g.linearRampToValueAtTime(i === level ? 1 : 0, when + .2); });
    music.level = level;
  }
  function setLevel(level) {
    wantLevel = level;
    if (!music || !ctx) return;
    level = Math.min(level, music.nodes.length - 1);
    clearTimeout(downTimer);
    if (level > music.level) crossTo(level, nextBeat());
    else if (level < music.level && !music.feature) downTimer = setTimeout(() => { if (music && wantLevel < music.level) crossTo(Math.min(wantLevel, music.nodes.length - 1), nextBeat()); }, 8 * 60 / music.bpm * 1000);
  }
  // the musical intro once, then the base game music (standard 6.3: the loop starts 0.4 s later at the earliest)
  function start() {
    if (!setup()) return;
    const n = play('mus_intro', { v: 1, dest: bus.music, force: true });
    const wait = n ? Math.max(.4, buffers.mus_intro.duration - 1.2) : .4;
    setTimeout(() => playMusic('base', wantLevel || 0), wait * 1000);
    if (!n) emit('start');
  }

  /* ---------- tension (6.4): music low-pass 20 kHz -> 150 Hz in 0.7 s and a rolling drum; on release the filter opens in 0.3 s and a cymbal answers ---------- */
  function tension(on) {
    if (!setup()) return;
    const f = bus.lp.frequency, t = ctx.currentTime;
    if (on) {
      if (!tense) { tense = { node: null }; f.cancelScheduledValues(t); f.setValueAtTime(Math.max(150, f.value), t); f.exponentialRampToValueAtTime(150, t + .7); }
      if (!tense.node && buffers.tension_loop) { const n = play('tension_loop', { v: .9, loop: true, force: true }); if (n) { n.gain.gain.setValueAtTime(0, t); n.gain.gain.linearRampToValueAtTime(.9, t + .25); tense.node = n; } }
    } else {
      if (!tense) return;
      const n = tense.node; tense = null;
      f.cancelScheduledValues(t); f.setValueAtTime(Math.max(150, f.value), t); f.exponentialRampToValueAtTime(20000, t + .3);
      if (n) { n.gain.gain.cancelScheduledValues(t); n.gain.gain.setTargetAtTime(0, t, .05); n.src.stop(t + .4); }
      play('tension_end', { v: .45 });
    }
  }
  // music dip held for the length of a big win (6.1: 0.05) and released after
  function hold(level) {
    holdDuck = level;
    if (!bus) return;
    const g = bus.duck.gain, t = ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(level, t + (level < 1 ? .15 : .6));
  }
  // the count of a win: the tick loop with its pitch climbing countRise[tier]; returns stop(ratio) which also plays the close
  function count(seconds, tier = 0) {
    const noop = () => {};
    if (!speedOk() || !setup()) return noop;
    const rise = CFG.countRise[Math.max(0, Math.min(tier, CFG.countRise.length - 1))];
    const n = play('count_loop', { v: .55, loop: true, force: true }); if (!n) return noop;
    const t = ctx.currentTime, r = n.src.playbackRate, d = Math.max(.1, seconds);
    r.setValueAtTime(1, t); r.linearRampToValueAtTime(Math.pow(2, rise / 1200), t + d);
    duckFx(.3);
    let done = false;
    const stop = () => { if (done) return; done = true; try { n.gain.gain.setTargetAtTime(0, ctx.currentTime, .02); n.src.stop(ctx.currentTime + .1); } catch (e) { /* ended */ } };
    setTimeout(stop, (d + .05) * 1000);
    return stop;
  }
  function countEnd(ratio) { if (speedOk() && setup()) { play(CFG.countEnd(ratio), { v: .8 }); duckFx(.5); } }
  // the observatory room: a slow pendulum clock and a far wind, one loop for every state
  function ambience(on) {
    wantAmb = on !== false;
    if (!setup()) return;
    if (!wantAmb) { if (amb) { const o = amb; amb = null; o.gain.gain.setTargetAtTime(0, ctx.currentTime, .3); o.src.stop(ctx.currentTime + 2); } return; }
    if (amb || !buffers.amb_room) return;
    const t = ctx.currentTime, node = play('amb_room', { v: 1, loop: true, dest: bus.amb, force: true }); if (!node) return;
    node.gain.gain.setValueAtTime(0, t); node.gain.gain.linearRampToValueAtTime(1, t + 1.5);
    amb = node;
  }
  // tab hidden: music and room fade out (effects are short); back: fade in
  function pause(p) {
    paused = !!p; if (!bus) return;
    const g = bus.pause.gain, t = ctx.currentTime; g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(paused ? 0 : 1, t + (paused ? .15 : .8));
  }

  return {
    init(api) { if (api && api.sound) shell = api.sound; },
    get ok() { return !!getShell(); },
    wake() { setup(); },            // PLAY: the audio context exists now; fetches the core set only
    loadRest,                       // after the first spin: everything else, in batches of 4
    emit, start, music: playMusic, level: setLevel, tension, hold, count, countEnd, ambience, pause,
    stats() { return { ctx: !!ctx, decoded: Object.keys(buffers).length, files: Object.keys(MAN.files).length, restAsked, music: music && music.name, level: music && music.level, voices, ext }; },
  };
})();
