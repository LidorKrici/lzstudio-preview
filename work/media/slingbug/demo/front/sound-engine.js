/* Slingbug sound (standard chapter 6). Files: window.SB_SND (data URIs from tools/build-sound.mjs, sound/out/*.ogg).
 * Mixer (6.1): master is the shell's api.sound.out (the sound button mutes everything, [107]);
 *   fx 1.0 ducks music (each effect pulls music down by its loudness and lets go in 130 ms), music 0.3, ambience 0.18.
 *   Moment ducking: feature sound 0.5, win count 0.7, big win 0.05.
 * Music (6.3): three stems of the same tempo and length start together and loop; layers fade in and out on the next beat.
 * Variety (6.7): every effect can have _a/_b/_c takes and a random pitch of +-4 %. A streak raises the pitch of pickups. */
window.SBSound = (() => {
  'use strict';
  const BPM = 112, BEAT = 60 / BPM;
  const CONF = {                       // name: [gain, pitch spread, duck amount]
    pull_stretch: [0.55, 0.03, 0.2], notch_click: [0.6, 0.05, 0.1], release_twang: [0.9, 0.04, 0.5], launch_whoosh: [0.7, 0.06, 0.4],
    pollen_pop: [0.55, 0.06, 0.2], dew_plink: [0.65, 0.05, 0.25], seed_puff: [0.6, 0.06, 0.2], gold_chime: [0.85, 0.02, 0.6],
    firefly_twinkle: [0.8, 0.03, 0.5], wing_flutter: [0.8, 0.04, 0.5], sparrows: [0.85, 0.04, 0.6], tear_rip: [0.85, 0.05, 0.6],
    frog_croak: [0.9, 0.03, 0.7], frog_gulp: [0.9, 0.03, 0.7], spit_pop: [0.8, 0.05, 0.5], land_thud: [0.8, 0.04, 0.4],
    slide_grass: [0.5, 0.05, 0.2], acorn_crack: [0.75, 0.06, 0.4], ui_click: [0.5, 0.03, 0], tick: [0.35, 0.02, 0],
    tier_hit_1: [0.9, 0, 0.8], tier_hit_2: [0.9, 0, 0.8], tier_hit_3: [0.95, 0, 0.8], tier_hit_4: [1, 0, 0.8], max_win: [1, 0, 0.9],
    night_start: [0.9, 0, 0.8],
  };
  let api = null, ctx = null, bus = null, bufs = {}, loading = null, music = null, amb = null, momentDuck = 1, streak = 0;

  function ensure() {
    if (!api || !api.sound || !window.SB_SND) return null;
    const c = api.sound.ctx();
    if (!c) return null;
    if (ctx !== c) {
      ctx = c;
      const g = n => { const x = ctx.createGain(); x.gain.value = n; return x; };
      bus = { fx: g(1), music: g(0.3), duck: g(1), amb: g(0.18) };
      bus.fx.connect(api.sound.out); bus.duck.connect(bus.music); bus.music.connect(api.sound.out); bus.amb.connect(api.sound.out);
      bufs = {}; music = null; amb = null; loading = load();
    }
    return ctx;
  }
  // data URI -> ArrayBuffer without fetch (Stake's CSP may not allow fetching data: URLs)
  function b64(uri) { const bin = atob(uri.slice(uri.indexOf(',') + 1)), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; }
  async function load() {
    const names = Object.keys(window.SB_SND);
    // in small batches with a frame between them (6.9), first the effects, then music and ambience
    names.sort((a, b) => (/^(music|amb)/.test(a) ? 1 : 0) - (/^(music|amb)/.test(b) ? 1 : 0));
    for (let i = 0; i < names.length; i += 4) {
      await Promise.all(names.slice(i, i + 4).map(async n => {
        try { bufs[n] = await ctx.decodeAudioData(b64(window.SB_SND[n])); } catch (e) { /* a missing sound is skipped */ }
      }));
      await new Promise(r => requestAnimationFrame(() => r()));
    }
  }
  const takes = name => Object.keys(bufs).filter(k => k === name || k.startsWith(name + '_') && /_[abc]$/.test(k));

  // play(name, { pitch, gain, at }) — returns nothing; silent if the sound is not loaded yet or sound is off
  function play(name, o = {}) {
    if (!ensure()) return;
    const list = takes(name);
    if (!list.length) return;
    const b = bufs[list[Math.floor(Math.random() * list.length)]];
    const [gain, spread, duck] = CONF[name] || [0.7, 0.04, 0.3];
    const src = ctx.createBufferSource(); src.buffer = b;
    src.playbackRate.value = (o.pitch || 1) * (1 + (Math.random() * 2 - 1) * spread);
    const g = ctx.createGain(); g.gain.value = gain * (o.gain ?? 1);
    src.connect(g); g.connect(bus.fx);
    const t = ctx.currentTime + (o.at || 0);
    src.start(t);
    if (duck > 0) {                     // the fx bus pulls the music down (sidechain envelope, 6.1)
      const d = bus.duck.gain, low = Math.max(0.25, 1 - duck * 0.6);
      d.cancelScheduledValues(t); d.setTargetAtTime(low, t, 0.001); d.setTargetAtTime(1, t + Math.min(0.4, b.duration), 0.13);
    }
  }
  // a pickup in a streak climbs in pitch (6.6)
  function pickup(name) { play(name, { pitch: Math.pow(2, Math.min(streak, 12) / 24) }); streak++; }
  function resetStreak() { streak = 0; }

  function startLoops() {
    if (!ensure() || music) return;
    const stems = ['music_day_base', 'music_day_top', 'music_night'].filter(n => bufs[n]);
    if (!stems.length) return;
    const t0 = ctx.currentTime + 0.1;
    music = { t0, layers: {} };
    for (const n of stems) {
      const s = ctx.createBufferSource(); s.buffer = bufs[n]; s.loop = true;
      const g = ctx.createGain(); g.gain.value = n === 'music_day_base' ? 1 : 0; g.top = n === 'music_day_top' ? 0.7 : 1;
      s.connect(g); g.connect(bus.duck); s.start(t0);
      music.layers[n] = g; g.top = n === 'music_day_top' ? 0.7 : 1;
    }
    const a = bufs.amb_day;
    if (a) { const s = ctx.createBufferSource(); s.buffer = a; s.loop = true; const g = ctx.createGain(); g.gain.value = 1; s.connect(g); g.connect(bus.amb); s.start(); amb = { day: g }; }
    const n = bufs.amb_night;
    if (n && amb) { const s = ctx.createBufferSource(); s.buffer = n; s.loop = true; const g = ctx.createGain(); g.gain.value = 0; s.connect(g); g.connect(bus.amb); s.start(); amb.night = g; }
  }
  // layer(name, on): fade a stem in or out, starting on the next beat
  function layer(name, on) {
    if (!ensure()) return;
    if (!music) startLoops();
    if (!music || !music.layers[name]) return;
    const now = ctx.currentTime, k = Math.ceil((now - music.t0) / BEAT), t = music.t0 + k * BEAT;
    const g = music.layers[name].gain; g.cancelScheduledValues(now); g.setValueAtTime(g.value, now); g.linearRampToValueAtTime(on ? (music.layers[name].top || 1) : 0, Math.max(t, now) + BEAT);
  }
  // the state of the meadow: 'idle', 'flight', 'night'
  function scene(s) {
    if (!ensure()) return;
    if (!music) startLoops();
    layer('music_day_base', s !== 'night'); layer('music_day_top', s === 'flight'); layer('music_night', s === 'night');
    if (amb) { const now = ctx.currentTime; if (amb.day) amb.day.gain.setTargetAtTime(s === 'night' ? 0 : 1, now, 0.5); if (amb.night) amb.night.gain.setTargetAtTime(s === 'night' ? 1 : 0, now, 0.5); }
  }
  // moment ducking (6.1): 'feature' 0.5, 'count' 0.7, 'big' 0.05, null = back to normal
  function moment(kind) {
    if (!ensure()) return;
    momentDuck = kind === 'feature' ? 0.5 : kind === 'count' ? 0.7 : kind === 'big' ? 0.05 : 1;
    bus.music.gain.setTargetAtTime(0.3 * momentDuck, ctx.currentTime, 0.15);
  }
  return { init(a) { api = a; }, play, pickup, resetStreak, scene, moment, start() { if (ensure()) { (loading || Promise.resolve()).then(() => scene('idle')); } } };
})();
