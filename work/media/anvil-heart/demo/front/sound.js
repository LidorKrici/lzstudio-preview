/* Anvil Heart mixer (production standard chapter 6; copied from Retrograde's front/sound.js and adapted).
 * Every sound is a real recording (sound/CREDITS-sound.md). The game only emits events; all levels, pools, pitch and
 * pan live in CFG below (standard 6.2).
 *   buses: master 0.9 -> limiter -> the shell's sound.out (so the speaker button silences everything)
 *          fx 1.0 (ducks the music by its own level, release 130 ms) | music 0.3 -> low-pass (tension) -> duck
 *          ambience 0.14 (the northern wind and the forge fire)
 *   voices: at most 10 one-shots, 30 ms minimum between two starts of the same file, a rate limit per action.
 *   music:  full-mix layers of identical length on one timeline: up on the next beat, down only after 8 beats, never
 *           down inside a feature. A new set fades the old one out over 2 s and starts on a beat.
 *   loading (first load): wake() on PLAY fetches only the CORE set (click, landing, spin, drop, small win, melt).
 *           Everything else (all music, bonus, big-win stingers, ambience) is fetched by loadRest(), which the game
 *           calls when its first spin has finished, in batches of 4 with a frame between them. Music that is not
 *           loaded yet simply starts later.
 * Files: assets/snd/<id>.webm (Opus); assets/snd/<id>.mp4 (AAC) where Opus cannot be played (older Safari). */
window.AHSound = (() => {
  'use strict';
  const MAN = window.AH_SND || { files: {}, music: {} };
  // scale steps in cents for runtime ladders: D Dorian, two octaves (the key of all the music)
  const DOR = [0, 200, 300, 500, 700, 900, 1000, 1200, 1400, 1500, 1700, 1900, 2100, 2200, 2400];
  const at = (a, i) => a[Math.max(0, Math.min(a.length - 1, i | 0))];
  const pick = (n, i) => Math.max(1, Math.min(n, i | 0));
  // Rune Wild multipliers 2..1000 in four bands (standard 6.6): one sound family per band, the pitch climbs inside it
  const RUNE_BANDS = [[2, 3, 5], [10, 25], [50, 100], [250, 500, 1000]];
  const runeBand = m => { const i = RUNE_BANDS.findIndex(b => m <= b[b.length - 1]); return i < 0 ? 3 : i; };
  const runeStep = m => { const b = RUNE_BANDS[runeBand(m)]; const i = b.indexOf(m); return i < 0 ? b.length - 1 : i; };
  const log2 = m => Math.round(Math.log2(Math.max(1, m || 1)));
  const CFG = {
    pools: {
      click: ['ui_click_1', 'ui_click_2', 'ui_click_3'], hover: ['ui_hover_1', 'ui_hover_2'],
      whoosh: ['whoosh_1', 'whoosh_2', 'whoosh_3'], thud: ['land_thud_1', 'land_thud_2', 'land_thud_3'],
      drop: ['drop_1', 'drop_2', 'drop_3'], hiss: ['hiss_1', 'hiss_2', 'hiss_3'], tick: ['tick_1', 'tick_2', 'tick_3'],
      winS: ['win_s_1', 'win_s_2', 'win_s_3'], winM: ['win_m_1', 'win_m_2'], winB: ['win_b_1', 'win_b_2'],
      hammer: ['hammer_1', 'hammer_2'], eagle: ['eagle_1', 'eagle_2'], ice: ['ice_1', 'ice_2', 'ice_3'],
      quench: ['quench_1', 'quench_2'], split: ['split_1', 'split_2'], pour: ['pour_1', 'pour_2'], spark: ['spark_1', 'spark_2'],
      bellows: ['bellows_1', 'bellows_2', 'bellows_3'], grow: ['grow_1', 'grow_2'],
    },
    // event -> actions. s: sound or pool (or function of the event's argument); v: volume; p: cents (number or function);
    // r: random +- cents; d: delay s (or function); pan: function -> -1..1; rate: ms between starts; duck: music dip 0..1
    events: {
      click:      [{ s: 'click', v: .55, r: 60, rate: 45 }],
      hover:      [{ s: 'hover', v: .3, r: 50, rate: 90 }],
      betUp:      [{ s: 'bet_up', v: .55, p: a => Math.round(1200 * (a.level || 0)), rate: 50 }],
      betDown:    [{ s: 'bet_down', v: .55, p: a => Math.round(1200 * (a.level || 0)), rate: 50 }],
      buyOpen:    [{ s: 'buy_open', v: .7, duck: .4 }],
      buyConfirm: [{ s: 'buy_confirm', v: .9, duck: .7 }],
      spin:       [{ s: 'whoosh', v: .5, r: 80, rate: 120 }],
      // one kantele note per reel, rising up D Dorian, and a wood-and-iron thud under it (6 reels, pan +-0.4)
      land:       [{ s: a => 'land_' + pick(6, (a.col | 0) + 1), v: .42, d: a => a.when || 0, pan: a => ((a.col | 0) - 2.5) * .16, rate: 20 },
                   { s: 'thud', v: .5, r: 250, d: a => a.when || 0, pan: a => ((a.col | 0) - 2.5) * .16, rate: 20 }],
      drop:       [{ s: 'drop', v: .45, r: 150, d: a => a.when || 0, rate: 90 }],
      // embers 1..6: a tubular bell climbing the D minor chord, heavier each time; 6 opens the Sampo
      scatter:    [{ s: a => 'scatter_' + pick(6, a.n), v: .9, duck: .6, rate: 60, pan: a => (a.col === undefined ? 0 : ((a.col | 0) - 2.5) * .16) }],
      antic:      [{ s: 'antic', v: .5, p: a => at(DOR, (a.col | 0)), rate: 120 }],
      // the melt ladder: each cascade the next step (8 steps), with the hiss of hot iron in water under it
      melt:       [{ s: a => 'melt_' + pick(8, a.step), v: .6, rate: 80 },
                   { s: 'hiss', v: .35, r: 120, rate: 80 }],
      winS:       [{ s: 'winS', v: .55, r: 30, duck: .4, rate: 80 }],
      winM:       [{ s: 'winM', v: .7, r: 30, duck: .5, rate: 80 }],
      winB:       [{ s: 'winB', v: .8, r: 20, duck: .6, rate: 80 }],
      countTick:  [{ s: 'tick', v: .4, r: 40, p: a => Math.round(Math.min(2400, (a.rise || 0))), rate: 35 }],
      bigWin:     [{ s: a => 'big_' + pick(4, a.tier), v: 1, duck: .95 }],
      bigEnd:     [{ s: a => ((a.tier | 0) >= 3 ? 'big_end_2' : 'big_end_1'), v: 1, duck: .9 }],
      // the nine specials
      hammer:     [{ s: 'hammer', v: .95, r: 40, duck: .7, rate: 250 }],
      eagleWarn:  [{ s: 'eagle_warn', v: .7, duck: .3, rate: 1500 }],      // heard before the eagle is seen (bad moment, fix 19)
      eagle:      [{ s: 'eagle', v: .95, r: 50, duck: .7, rate: 600 }],
      ice:        [{ s: 'ice', v: .75, r: 80, d: a => a.when || 0, rate: 70 }],
      quench:     [{ s: 'quench', v: .8, r: 60, duck: .4, rate: 300 }],
      aurora:     [{ s: 'aurora', v: .85, duck: .5, rate: 500 }],
      split:      [{ s: 'split', v: .85, r: 60, d: a => a.when || 0, duck: .4, rate: 90 }],
      pour:       [{ s: 'pour', v: .8, r: 60, d: a => a.when || 0, duck: .4, rate: 150 }],
      spark:      [{ s: 'spark', v: .75, r: 80, d: a => a.when || 0, rate: 70 }],
      sparkGold:  [{ s: 'spark_gold', v: .95, d: a => a.when || 0, duck: .6, rate: 120 }],
      rune:       [{ s: a => 'rune_' + (runeBand(a.mult | 0) + 1), v: .75, p: a => at(DOR, runeStep(a.mult | 0) * 2), d: a => a.when || 0, duck: .4, rate: 80 }],
      sampo:      [{ s: 'sampo', v: 1, duck: .95 }],
      // features
      trigger:    [{ s: a => 'trigger_' + (['bellows', 'song', 'mountain', 'grinds'].includes(a.kind) ? a.kind : 'bellows'), v: 1, duck: .9 }],
      bellows:    [{ s: 'bellows', v: .7, r: 60, rate: 250 }],
      heatUp:     [{ s: a => 'heat_' + pick(4, a.level), v: .9, duck: .6, rate: 200 }],
      songUp:     [{ s: a => 'song_' + pick(10, log2(a.mult)), v: .7, d: a => a.when || 0, rate: 60 }],
      grow:       [{ s: 'grow', v: .85, r: 60, duck: .5, rate: 250 }],
      spotUp:     [{ s: a => 'spot_' + pick(7, log2(a.mult)), v: .65, d: a => a.when || 0, rate: 40 }],
      more:       [{ s: 'more', v: .9, duck: .6 }],
      featureEnd: [{ s: a => (a.good ? 'end_good' : 'end_plain'), v: .9, duck: .7 }],
      start:      [{ s: 'start', v: .75 }],
      lossSmall:  [{ s: 'lose_soft', v: .12, rate: 400 }],   // a win below what the round cost: a quiet close (6.8)
    },
    // count-up rise per tier (cents, 6.5) and the closing sound by win / round cost
    countRise: [400, 800, 1200, 2000, 2400],
    countEnd: x => (x <= 1 ? 'count_end_low' : x <= 10 ? 'count_end_mid' : x <= 100 ? 'count_end_over' : 'count_end_high'),
    core: ['ui_click_1', 'ui_click_2', 'ui_click_3', 'whoosh_1', 'whoosh_2', 'land_1', 'land_2', 'land_3', 'land_4', 'land_5', 'land_6', 'land_thud_1', 'land_thud_2', 'drop_1', 'drop_2', 'melt_1', 'melt_2', 'hiss_1', 'win_s_1', 'win_s_2', 'start'],
    // the order loadRest() fetches the rest in: base music and ambience first, the bonus sets last
    restFirst: [/^mus_intro/, /^mus_base_1/, /^mus_base_2/, /^amb_/, /^(melt_|hiss_|scatter_|antic|tension|count|tick_|win_|hammer|spark_|rune_|ice_|eagle)/, /^mus_base/, /^(?!mus_)/, /./],
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
    const ambBus = ctx.createGain(); ambBus.gain.value = .14; ambBus.connect(pause);
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
  // the music the game opens with (intro, base set, the forge's ambience) right after PLAY, so it is not silent until the first
  // round is over (Lidor, 28.11: 'why does the music start so late'); everything else still waits for loadRest()
  let firstP = null;
  function loadFirst() {
    if (firstP) return firstP;
    if (!setup()) return Promise.resolve();
    const want = Object.keys(MAN.files).filter(n => /^(mus_intro|mus_base_\d|amb_)/.test(n));
    firstP = (coreP || Promise.resolve()).then(() => loadList(want, 2));
    return firstP;
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
    const a = arg && typeof arg === 'object' ? arg : { n: arg, step: arg, tier: arg, mult: arg, level: arg, kind: arg, col: arg };
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

  /* ---------- music: sets base (4 layers), bellows / song / mountain (3), grinds (3) ---------- */
  function playMusic(name, level = 0) {
    if (!MAN.music[name]) return;
    wantMusic = name;
    if (music && music.name === name) { setLevel(level); return; }
    wantLevel = level;
    if (!setup() || !setReady(name)) return;          // not loaded yet: starts from onLoaded()
    const M = MAN.music[name], t = ctx.currentTime;
    // M.offset: where beat 1 sits inside the loop (the seam is half a 16th before the downbeat, so no attack sits on it)
    const off = M.offset || 0;
    let start = t + .4;
    if (music) {
      const old = music, beat = 60 / old.bpm;
      old.nodes.forEach(n => { n.gain.gain.cancelScheduledValues(t); n.gain.gain.setValueAtTime(n.gain.gain.value, t); n.gain.gain.linearRampToValueAtTime(0, t + 2); n.src.stop(t + 2.1); });
      start = old.beat0 + Math.ceil((t + .05 + off - old.beat0) / beat) * beat - off;   // the new set's beat 1 lands on the old one's beat
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
    music = { name, start, beat0: start + off, bpm: M.bpm, nodes, level: lv, feature: name !== 'base' };
  }
  function nextBeat() { const beat = 60 / music.bpm, t = ctx.currentTime + .02; return Math.max(music.start, music.beat0 + Math.ceil((t - music.beat0) / beat) * beat); }
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
  // the count of a win: the tick loop with its pitch climbing countRise[tier]; returns stop() (also stops on its own)
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
  // the forge on the frozen lake: a cold northern wind with the forge fire crackling under it, one loop for every state
  function ambience(on) {
    wantAmb = on !== false;
    if (!setup()) return;
    if (!wantAmb) { if (amb) { const o = amb; amb = null; o.gain.gain.setTargetAtTime(0, ctx.currentTime, .3); o.src.stop(ctx.currentTime + 2); } return; }
    if (amb || !buffers.amb_forge) return;
    const t = ctx.currentTime, node = play('amb_forge', { v: 1, loop: true, dest: bus.amb, force: true }); if (!node) return;
    node.gain.gain.setValueAtTime(0, t); node.gain.gain.linearRampToValueAtTime(1, t + 1.5);
    amb = node;
  }
  // tab hidden: music and ambience fade out (effects are short); back: fade in
  function pause(p) {
    paused = !!p; if (!bus) return;
    const g = bus.pause.gain, t = ctx.currentTime; g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(paused ? 0 : 1, t + (paused ? .15 : .8));
  }
  // player settings (6.1): separate music and effects volume, 0..1
  function volumes({ music: m, fx } = {}) {
    if (!setup()) return;
    const t = ctx.currentTime;
    if (m !== undefined) bus.music.gain.setTargetAtTime(.3 * Math.max(0, Math.min(1, m)), t, .05);
    if (fx !== undefined) bus.fx.gain.setTargetAtTime(Math.max(0, Math.min(1, fx)), t, .05);
  }

  return {
    init(api) { if (api && api.sound) shell = api.sound; },
    get ok() { return !!getShell(); },
    wake() { setup(); },            // PLAY: the audio context exists now; fetches the core set only
    loadRest,                       // after the first spin: everything else, in batches of 4
    loadFirst,                      // on PLAY: the intro, the base music and the ambience
    emit, start, music: playMusic, level: setLevel, tension, hold, count, countEnd, ambience, pause, volumes,
    events: () => Object.keys(CFG.events),
    stats() { return { ctx: !!ctx, decoded: Object.keys(buffers).length, files: Object.keys(MAN.files).length, restAsked, music: music && music.name, level: music && music.level, voices, ext }; },
  };
})();
