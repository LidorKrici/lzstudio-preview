/* Sumi Koi: a pachinko scroll painted in ink.
 * Ten ink drops fall through bamboo pegs into eleven tea cups; a drop in the red seal stamps one of its three marks,
 * and three marks open it: KOI SPRING, a school of koi with the prize; the golden koi multiplies it or starts KOI FEVER.
 *
 * The round's result comes from the RGS book. This file only plays it back (the events are the same as the pilot's):
 *   drop { n } · ball { i, k, w, mark?, tot } · spring { koi[], t, gold, m, w, tot } · fever { n, m, src } · fball { i, k, m, w, add, tot }
 *   fend { w, m, n } · final { payout, capped }
 * Every drop on screen replays a flight recorded by real physics (board.js) that ended where the book says.
 * The board is drawn by sk-scene.js; this file holds the bar, the intro, the celebrations and the sound. */
(() => {
  'use strict';
  const NB = window.NKBoard;
  let api, SK, stageEl, ART = {};
  const $ = {};
  // how big a cup is (0 nothing .. 4 the outer gold), per ink
  const TIERS_OF = { calm: [4, 3, 2, 1, 1, 0, 1, 1, 2, 3, 4], wild: [4, 3, 2, 1, 0, 0, 0, 1, 2, 3, 4] };
  let TIER = TIERS_OF.calm;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const rand = (a, b) => a + Math.random() * (b - a);
  // Named wins, in x of what the round cost. From the math: 5x once in 49 rounds, 25x once in 498 (catalog item 3).
  const TIERS = [{ x: 5, key: 'tier1', label: 'INK SPLASH' }, { x: 8, key: 'tier2', label: 'FULL BLOOM' }, { x: 12, key: 'tier3', label: 'MASTERPIECE' }, { x: 16, key: 'tier4', label: 'DRAGON GATE' }];   // math v2: DRAGON GATE about once in 400 rounds
  // Celebration timing per tier (ms): before the hit, the count, the hold (catalog item 3: at least 650/2100/2100)
  const TIME = [[650, 2100, 2100], [900, 2700, 2500], [1300, 3200, 2800], [2000, 3700, 3200]];

  /* =====================================================================
   *  Sound: recorded samples (CREDITS-sound.md), one music bed and one room tone
   * ===================================================================== */
  const Snd = (function () {
    let man = null, list = {}, bufs = {}, lastAt = {}, want = {}, live = {}, level = 1, laterLoad = null;
    const pick = id => { const p = man && man.pools && man.pools[id]; return p ? p[(Math.random() * p.length) | 0] : id; };
    const loopy = id => list[id] && (list[id].group === 'music' || list[id].group === 'ambience' || list[id].loop);
    async function load() {
      try {
        const inline = window.SK_SND;
        man = inline ? inline.manifest : location.protocol === 'file:' ? null : await fetch('assets/snd/sounds.json').then(r => (r.ok ? r.json() : null));
        if (!man) return;
        list = man.sounds || man;
        const AC = window.AudioContext || window.webkitAudioContext, ctx = new AC();
        const LATER = ['music_fever'];   // the feature's music comes after the first round (the first load stays under 8 MB)
        const ids = Object.keys(list).filter(k => list[k] && list[k].files && !LATER.includes(k)).sort((a, b) => loopy(a) - loopy(b));
        const one = async id => {
          try {
            const f = list[id].files.find(x => /\.mp4$/.test(x)) || list[id].files[0];
            const ab = inline ? Uint8Array.from(atob(inline.data[id]), c => c.charCodeAt(0)).buffer : await fetch('assets/snd/' + f).then(r => r.arrayBuffer());
            bufs[id] = await ctx.decodeAudioData(ab); if (loopy(id)) sync();
          } catch (e) { /* a missing sound is simply silent */ }
        };
        for (let i = 0; i < ids.length; i += 4) await Promise.all(ids.slice(i, i + 4).map(one));
        laterLoad = () => { laterLoad = null; Promise.all(LATER.filter(k => list[k]).map(one)).then(() => { try { ctx.close(); } catch (e) { /* ignore */ } }); };
      } catch (e) { man = null; }
    }
    function has(id) { return !!bufs[pick(id)]; }
    function play(id, o) {
      o = o || {}; const s = api.sound, ctx = s.ctx(); if (!ctx || !man) return;
      const buf = bufs[pick(id)]; if (!buf) return;
      const now = ctx.currentTime; if (o.gap && lastAt[id] && now - lastAt[id] < o.gap) return; lastAt[id] = now;
      const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = buf;
      src.playbackRate.value = (o.rate || 1) * (1 + (Math.random() - 0.5) * (o.jitter == null ? 0.05 : o.jitter));
      g.gain.value = o.vol == null ? 0.8 : o.vol; src.connect(g);
      if (o.pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = clamp(o.pan, -1, 1); g.connect(p); p.connect(s.out); } else g.connect(s.out);
      src.start(now + (o.delay || 0));
      return { stop() { try { g.gain.setTargetAtTime(0, ctx.currentTime, 0.04); src.stop(ctx.currentTime + 0.3); } catch (e) { /* done */ } }, src };
    }
    // music and room tone: crossfaded loops; the music ducks under a celebration
    function sync() {
      const s = api && api.sound, ctx = s && s.ctx(); if (!ctx) return;
      for (const key of ['music', 'amb']) {
        const w = want[key]; let cur = live[key];
        if (cur && cur.src.context !== ctx) cur = live[key] = null;
        if (cur && (!w || cur.id !== w.id)) { cur.g.gain.cancelScheduledValues(ctx.currentTime); cur.g.gain.setTargetAtTime(0, ctx.currentTime, 0.4); const src = cur.src; setTimeout(() => { try { src.stop(); } catch (e) { /* stopped */ } }, 2200); cur = live[key] = null; }
        if (w && !cur && bufs[w.id]) {
          const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = bufs[w.id]; src.loop = true;
          g.gain.value = 0; g.gain.setTargetAtTime(w.vol * (key === 'music' ? level : 1), ctx.currentTime + 0.2, 0.6);
          src.connect(g); g.connect(s.out); src.start(); live[key] = { id: w.id, src, g, vol: w.vol };
        } else if (w && cur && cur.vol !== w.vol) { cur.vol = w.vol; cur.g.gain.setTargetAtTime(w.vol * (key === 'music' ? level : 1), ctx.currentTime, 0.5); }
      }
    }
    function loop(key, id, vol) { want[key] = id ? { id, vol } : null; sync(); }
    function hold(l) { level = l; const s = api && api.sound, ctx = s && s.ctx(), m = live.music; if (!ctx || !m || m.src.context !== ctx) return; m.g.gain.cancelScheduledValues(ctx.currentTime); m.g.gain.setTargetAtTime(m.vol * l, ctx.currentTime, l < 1 ? 0.08 : 0.7); }
    function climb(id, vol, cents, dur) {
      const s = api.sound, ctx = s.ctx(); if (!ctx || !bufs[id]) return () => {};
      const src = ctx.createBufferSource(), g = ctx.createGain(), t = ctx.currentTime; src.buffer = bufs[id]; src.loop = true;
      src.playbackRate.setValueAtTime(1, t); src.playbackRate.linearRampToValueAtTime(Math.pow(2, cents / 1200), t + dur); g.gain.value = vol; src.connect(g); g.connect(s.out); src.start();
      return () => { try { g.gain.setTargetAtTime(0, ctx.currentTime, 0.03); setTimeout(() => { try { src.stop(); } catch (e) { /* stopped */ } }, 250); } catch (e) { /* closed */ } };
    }
    return { load, play, loop, hold, climb, sync, has, later() { if (laterLoad) laterLoad(); } };
  })();
  const KOTO = ['koto_1', 'koto_2', 'koto_3', 'koto_4', 'koto_5', 'koto_6', 'koto_7'];
  const pan = fx => (fx - 50) / 60;
  function music() {
    const fev = SK && SK.S.feverOn && Snd.has('music_fever');
    Snd.loop('music', fev ? 'music_fever' : 'music_base', fev ? 0.5 : 0.36);
    Snd.loop('amb', SK && SK.S.feverOn ? 'amb_night' : 'amb_room', 0.32);
  }

  /* =====================================================================
   *  Painted numerals in the DOM (the celebration and the cards)
   * ===================================================================== */
  function digitsHtml(str, set) {
    const m = ART['digits_' + set]; if (!m) return str;
    const atlasW = Object.values(m.glyphs).reduce((a, g) => Math.max(a, g.x + g.w), 0) + 4;
    let out = '';
    for (const ch of str) {
      const gl = m.glyphs[ch === '×' ? 'x' : ch];
      if (gl) out += `<i class="skd" style="width:${(gl.w / m.h).toFixed(3)}em;background-image:url(assets/digits/${set}.webp);background-size:${(atlasW / m.h).toFixed(3)}em 1em;background-position:-${(gl.x / m.h).toFixed(3)}em 0"></i>`;
      else out += `<b class="skc">${ch === ' ' ? '&nbsp;' : ch.replace(/</g, '&lt;')}</b>`;
    }
    return out;
  }
  function setDigits(el, str, set) { if (el.dataset.v === str + set) return; el.dataset.v = str + set; el.innerHTML = digitsHtml(str, set); el.setAttribute('aria-label', str); if (el.dataset.fit) fitWidth(el); }
  // a long amount (BTC, the max win) shrinks to its box instead of running out of it
  function fitWidth(el) { el.style.fontSize = ''; if (!el.clientWidth) return; let fs = parseFloat(getComputedStyle(el).fontSize), n = 0; while (el.scrollWidth > el.clientWidth + 1 && fs > 14 && n++ < 40) { fs *= 0.93; el.style.fontSize = fs.toFixed(1) + 'px'; } }

  /* =====================================================================
   *  HUD on the stage: drops left, the buy stamp, the cards, the celebration
   * ===================================================================== */
  function buildHud(stage) {
    const h = api.h;
    $.bg = h('div', { class: 'sk-bg', 'aria-hidden': 'true' }, h('i', { class: 'sk-room' }), h('i', { class: 'sk-night' }), h('i', { class: 'sk-bamboo' }), h('i', { class: 'sk-bamboo b2' }));
    document.body.prepend($.bg);
    $.hud = h('div', { class: 'sk-hud' });
    $.drops = h('div', { class: 'sk-drops', 'aria-label': 'Drops left' }, $.dropsRow = h('span', { class: 'sk-dropsrow' }), $.dropsN = h('span', { class: 'sk-dropsn' }));
    $.board = h('div', { class: 'sk-boardbox', 'aria-hidden': 'true' });
    $.koi = h('div', { class: 'sk-koibox', 'aria-hidden': 'true' });
    $.card = h('div', { class: 'sk-card', hidden: true }, $.cardImg = h('img', { alt: '' }), $.cardSub = h('div', { class: 'sk-cardsub', 'data-fit': '1' }));
    $.big = h('div', { class: 'sk-big', hidden: true, 'aria-live': 'polite' },
      $.bigDim = h('i', { class: 'sk-bigdim' }),
      $.bigKoi = h('video', { class: 'sk-bigkoi', muted: true, loop: true, playsinline: true, preload: 'none', disablepictureinpicture: true }),
      $.bigInk = h('div', { class: 'sk-bigink' }),
      $.bigIn = h('div', { class: 'sk-bigin' }, $.bigTitle = h('img', { class: 'sk-bigtitle', alt: '' }), $.bigAmt = h('div', { class: 'sk-bigamt', 'data-fit': '1' }), $.bigX = h('div', { class: 'sk-bigx', hidden: true })),
      $.bigFlash = h('i', { class: 'sk-bigflash' }));
    $.mid = h('div', { class: 'sk-mid', hidden: true }, $.midInk = h('div', { class: 'sk-midink' }), h('img', { class: 'sk-midenso', src: 'assets/enso/red.webp', alt: '' }), $.midAmt = h('div', { class: 'sk-midamt' }));
    $.small = h('div', { class: 'sk-small', hidden: true }, h('img', { class: 'sk-smallenso', src: 'assets/enso/red.webp', alt: '' }), $.smallAmt = h('div', { class: 'sk-smallamt' }));
    // the koi: a painted, looping film (first frame = last). Wide: on the side scroll's paper. Tall: a small hanging scroll above the board
    $.kv = h('div', { class: 'sk-koiv', 'aria-hidden': 'true' }, $.kvv = h('video', { muted: true, loop: true, playsinline: true, autoplay: true, preload: 'auto', disablepictureinpicture: true }));
    $.kvv.muted = true; $.kvv.defaultMuted = true;
    $.kvl = h('video', { class: 'leap', muted: true, playsinline: true, preload: 'none', disablepictureinpicture: true }); $.kvl.muted = true; $.kvl.defaultMuted = true; $.kv.append($.kvl);
    $.kvl.addEventListener('ended', () => { $.kvv.currentTime = 0; $.kvv.playbackRate = 1; const p = $.kvv.play(); if (p && p.catch) p.catch(() => {}); $.kv.classList.remove('leaping'); });
    $.bigKoi.muted = true; $.bigKoi.defaultMuted = true;
    $.fbar = h('div', { class: 'sk-fbar', hidden: true, 'aria-live': 'polite' },
      h('span', { class: 'sk-fbcell' }, $.fbLabel = h('b', { text: 'KOI FEVER' }), $.fbM = h('span', { class: 'sk-fbv' })),
      h('span', { class: 'sk-fbcell' }, $.fbIco = h('img', { src: 'assets/drops/gold.webp', alt: 'Left' }), $.fbN = h('span', { class: 'sk-fbv' })),
      h('span', { class: 'sk-fbcell' }, h('b', { text: 'WIN' }), $.fbW = h('span', { class: 'sk-fbv' })));
    $.dragonB = h('div', { class: 'sk-dragonb', 'aria-hidden': 'true' }, h('img', { src: 'assets/spring/dragon-sleep.webp', alt: '' }), h('i', { class: 'sk-dreye' }));
    $.evb = h('div', { class: 'sk-evb', hidden: true, 'aria-live': 'polite' }, $.evbW = h('b'), $.evbS = h('span'));
    FX.init();
    $.hud.append($.board, $.dragonB, $.koi, $.drops, $.fbar, $.mid, $.small, $.evb, $.card);
    stage.append($.kv);     // outside the HUD's layer, so its paper can blend (multiply) with the scroll drawn on the canvas
    stage.append($.hud);
    stage.append($.big);   // after the HUD, without a layer of its own: the koi film in it blends with the room and the board
  }
  const fb = { m: 2, n: 0, w: 0 };
  function fbarSet(o) {
    Object.assign(fb, o || {});
    if (!$.bonusFlag) { const f = document.getElementById('lzField'); if (f) { $.bonusFlag = api.h('div', { class: 'sk-bonusflag', 'aria-live': 'polite' }); f.append($.bonusFlag); } }
    if ($.bonusFlag) $.bonusFlag.innerHTML = '<b>' + ($.fbLabel ? $.fbLabel.textContent : 'KOI FEVER') + '</b>' + digitsHtml('x' + fb.m, 'gold') + '<span>' + Math.max(0, fb.n) + ' LEFT</span>';
    setDigits($.fbM, 'x' + fb.m, 'gold'); setDigits($.fbN, 'x' + Math.max(0, fb.n), 'gold'); setDigits($.fbW, api.money(fb.w), 'gold');
  }
  function setDrops(left, total, gold) {
    if (gold && !$.fbar.hidden) fbarSet({ n: left });
    // one painted drop and its count in brushed numerals (no row of little circles)
    const key = (gold ? 'g' : 'i') + left;
    if ($.drops.dataset.k === key) return; $.drops.dataset.k = key;
    $.dropsRow.innerHTML = '<img src="assets/drops/' + (gold ? 'gold' : 'ink') + '.webp" alt="">';
    setDigits($.dropsN, 'x' + Math.max(0, left), gold ? 'gold' : 'ink');
    $.drops.classList.toggle('gold', !!gold); $.drops.classList.toggle('empty', left <= 0);
    $.drops.classList.remove('tick'); void $.drops.offsetWidth; $.drops.classList.add('tick');
  }

  // a win of 2x a drop and more sends ink drops from the cup to the win counter in the bar
  function flyToWin(k, tier) {
    if (api.reduced) return;
    const from = SK.rect({ cup: k }), w = document.getElementById('lzWin'); if (!from || !w) return;
    const st = stageEl.getBoundingClientRect(), to = w.getBoundingClientRect(), n = Math.min(6, 1 + tier);
    for (let i = 0; i < n; i++) {
      const im = api.h('img', { class: 'sk-fly', src: tier >= 4 ? 'assets/drops/gold.webp' : 'assets/drops/ink.webp', alt: '' });
      const x0 = st.left + from.x + rand(-8, 8), y0 = st.top + from.y, x1 = to.left + to.width / 2, y1 = to.top + to.height / 2;
      Object.assign(im.style, { left: x0 + 'px', top: y0 + 'px' });
      im.style.setProperty('--dx', (x1 - x0).toFixed(0) + 'px'); im.style.setProperty('--dy', (y1 - y0).toFixed(0) + 'px'); im.style.setProperty('--d', (i * 0.06).toFixed(2) + 's');
      document.body.append(im); setTimeout(() => im.remove(), 1300);
    }
    setTimeout(() => { const b = w.parentElement; b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }, 650);
  }
  async function card(key, sub, ms, ctx, waitTap) {
    celeb(true);
    if ($.cardTap) $.cardTap.remove(); $.cardTap = null;
    $.cardImg.hidden = false; $.cardImg.src = 'assets/titles/' + key + '.webp';
    $.cardSub.innerHTML = sub || '';
    $.card.hidden = false; $.card.className = 'sk-card in ' + key;
    await ctx.sleep(ms);
    if (false && waitTap && !ctx.fast() && !(window.LZ && LZ.state && LZ.state.auto) && !skipNow) {
      $.cardTap = api.h('div', { class: 'sk-cardtap', text: 'TAP TO START' }); $.card.append($.cardTap);
      let go = false; const on = () => { go = true; }; stageEl.addEventListener('pointerdown', on); window.addEventListener('keydown', on);
      const t0 = performance.now(); while (!go && !skipNow && performance.now() - t0 < 6000) await new Promise(r => setTimeout(r, 40));
      stageEl.removeEventListener('pointerdown', on); window.removeEventListener('keydown', on);
    }
    $.card.className = 'sk-card out ' + key; await ctx.sleep(300); $.card.hidden = true; celeb(false);
  }
  function placeKoi(wide, b) {
    let r = null, src = '';
    if (wide) { r = SK.rect('sidepaper'); src = 'assets/koi/swim-v.mp4'; }
    else {
      // on a phone the koi swims on the scroll itself, in the open paper under the top of the arc, above the seal
      r = SK.rect({ field: [18, -7, 82, -7 + 64 * 9 / 16] }); src = 'assets/koi/swim-h.mp4';
    }
    SK.S.videoKoi = !!r;
    $.kv.hidden = !r; $.kv.classList.toggle('tall', false); $.kv.classList.toggle('onboard', !wide);
    if (!r) return;
    Object.assign($.kv.style, { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px' });
    $.kv.dataset.leap = wide ? 'assets/koi/leap-v.mp4' : 'assets/koi/leap-h.mp4'; if (leapOn && $.kvl.dataset.src !== $.kv.dataset.leap) loadLeap();
    if ($.kvv.dataset.src !== src) { $.kvv.dataset.src = src; $.kvv.src = src; const p = $.kvv.play(); if (p && p.catch) p.catch(() => {}); }
    if (api.reduced) $.kvv.pause();
  }
  // the leap clips load after the first round, so the first screen stays light
  let leapOn = false;
  // the koi of the school and the golden koi are decoded once at the start, so the seal opens without a stall
  for (const k of ['ink', 'color']) { const im = new Image(); im.src = 'assets/koi/' + k + '.webp'; if (im.decode) im.decode().catch(() => {}); }
  // every title is decoded at the start too: a tier change in a celebration only swaps a ready picture
  window.__skKeep = ['titles/spring', 'titles/tier1', 'titles/tier2', 'titles/tier3', 'titles/tier4', 'titles/max', 'titles/fever', 'titles/feverwin', 'spring/waterfall', 'spring/dragon-sleep'].map(k => { const im = new Image(); im.src = 'assets/' + k + '.webp'; if (im.decode) im.decode().catch(() => {}); return im; });
  function loadLeap() { leapOn = true; const src = $.kv.dataset.leap; if (!src || $.kvl.dataset.src === src) return; $.kvl.dataset.src = src; $.kvl.preload = 'auto'; $.kvl.src = src; try { $.kvl.load(); } catch (e) { /* ignore */ } }
  // the leap starts only where the swim loop starts (the same resting pose, so no jump): the koi swims faster, excited,
  // until its loop comes round, then leaps; when the leap ends, the swim starts again from that same pose
  let leapWait = false;
  function koiLeap() {
    if (api.reduced || $.kv.hidden || $.kvl.readyState < 3) return false;
    if (leapWait || $.kv.classList.contains('leaping')) return true;
    const v = $.kvv, t0 = performance.now(); let prev = v.currentTime;
    v.playbackRate = 2.6; leapWait = true;
    (function watch() {
      const t = v.currentTime;
      if (performance.now() - t0 > 4000) { leapWait = false; v.playbackRate = 1; return; }     // never came round: no leap
      if (t + 0.05 < prev) {                                                                  // the loop came round
        leapWait = false; v.pause();
        $.kvl.currentTime = 0; $.kvl.playbackRate = 1; const p = $.kvl.play(); if (p && p.catch) p.catch(() => {});
        $.kv.classList.add('leaping'); koiSplash(); return;
      }
      prev = t; requestAnimationFrame(watch);
    })();
    return true;
  }
  // the film koi reacts by its speed and its colour: it darts on a win, turns gold on a big one and in KOI FEVER
  let kvT = 0;
  // ink and gold flung from the koi's scroll as it leaps (DOM splashes over the film)
  function koiSplash() {
    if (api.reduced || $.kv.hidden) return;
    const r = $.kv.getBoundingClientRect(), sr = stageEl.getBoundingClientRect();
    for (let i = 0; i < 9; i++) {
      const im = api.h('img', { src: 'assets/splash/' + 'acf'[i % 3] + '.webp', alt: '', class: 'sk-ksplash' + (i % 3 === 0 ? ' gold' : '') });
      im.style.left = (r.left - sr.left + r.width * (0.2 + Math.random() * 0.6)) + 'px'; im.style.top = (r.top - sr.top + r.height * (0.15 + Math.random() * 0.4)) + 'px';
      im.style.setProperty('--d', (0.35 + i * 0.03).toFixed(2) + 's'); im.style.setProperty('--r', Math.round(Math.random() * 360) + 'deg');
      stageEl.append(im); setTimeout(() => im.remove(), 1800);
    }
  }
  function koiFilm(kind, o) {
    const v = $.kvv; if (!v || $.kv.hidden) return;
    clearTimeout(kvT);
    const set = (rate, cls, ms) => { v.playbackRate = rate; $.kv.classList.remove('win', 'big', 'dive'); if (cls) { void $.kv.offsetWidth; $.kv.classList.add(cls); } if (ms) kvT = setTimeout(() => { v.playbackRate = 1; $.kv.classList.remove('win', 'big', 'dive'); }, ms); };
    if (kind === 'win') set(2.2, 'win', 1300);
    else if (kind === 'big') { if (!koiLeap()) { set(1.8, 'big', Math.max(1600, ((o && o.dur) || 3) * 1000)); koiSplash(); } }
    else if (kind === 'lose') set(0.6, 'dive', 1100);
    else if (kind === 'fever') { $.kv.classList.toggle('gold', !!o); v.playbackRate = o ? 1.5 : 1; if (o && !koiLeap()) { set(1.5, 'big', 1600); koiSplash(); } }
  }
  // phone: the scroll never climbs over the buttons at the top (info, sound, the ink switch, the KOI FEVER and KOI SPRING
  // stamps). If its top rod would, the board shrinks until the rod sits just under them (Lidor, iPhone, 2026-11-28)
  function fitUnderHud(r, pad) {
    if (!SK || !SK.S.ready || SK.S.wide) return;
    const st = stageEl.getBoundingClientRect();
    let hud = 0;
    for (const el of [$.icons, $.modes, $.buy]) { if (!el || el.hidden) continue; const q = el.getBoundingClientRect(); if (q.height) hud = Math.max(hud, q.bottom - st.top); }
    const b = SK.rect('board'), bottom = b.y + b.h, need = hud + 6;
    if (!hud || b.y >= need || bottom - need < 40) return;
    SK.layout(Math.max(2, r.width | 0), Math.max(2, r.height | 0), pad, SK.S.s * (bottom - need) / (bottom - b.y));
    place();
  }
  function place() {
    if (!SK || !SK.S.ready) return;
    const b = SK.rect('board'), k = SK.rect('koi'), l = SK.rect('launcher');
    Object.assign($.board.style, { left: b.x + 'px', top: b.y + 'px', width: b.w + 'px', height: b.h + 'px' });
    const wide = SK.S.wide;
    $.hud.dataset.wide = wide ? '1' : '0';
    if (l) {
      if (wide) Object.assign($.drops.style, { left: b.x + b.w + 10 + 'px', top: b.y + b.h * 0.06 + 'px' });
      else Object.assign($.drops.style, { left: b.x + b.w * 0.5 + 'px', top: Math.max(4, b.y - 4) + 'px' });
    }
    if ($.buy) {
      if (wide) { const r = SK.rect('right'); Object.assign($.buy.style, { left: (r.x + Math.max(8, (r.w - $.buy.offsetWidth) / 2)) + 'px', top: (b.y + b.h * 0.36) + 'px', right: 'auto' }); }
      else Object.assign($.buy.style, { left: 'auto', right: '6px', top: '6px' });
    }
    if ($.modes) {
      if (wide) { const r = SK.rect('right'); Object.assign($.modes.style, { left: (r.x + Math.max(6, (r.w - $.modes.offsetWidth) / 2)) + 'px', top: (b.y + b.h * 0.12) + 'px', right: 'auto' }); if ($.buy) $.buy.style.top = Math.max(b.y + b.h * 0.36, b.y + b.h * 0.12 + $.modes.offsetHeight + 8) + 'px'; }
      // tall: the ink switch sits under the rules and sound knobs, so nothing overlaps on the narrowest phones
      else {
        const ir = $.icons ? $.icons.getBoundingClientRect() : null, sr = stageEl.getBoundingClientRect(), bw = $.buy ? $.buy.offsetWidth : 96;
        const x = ir ? ir.right - sr.left + 10 : 10;
        if (false && ir && x + $.modes.offsetWidth + bw + 16 <= sr.width) Object.assign($.modes.style, { left: x + 'px', right: 'auto', top: (ir.top - sr.top + (ir.height - $.modes.offsetHeight) / 2) + 'px' });
        else Object.assign($.modes.style, { left: '10px', right: 'auto', top: (($.icons ? $.icons.offsetTop + $.icons.offsetHeight : 54) + 8) + 'px' });
      }
    }
    // wide: the right column stacks top to bottom, never overlapping: drops left, the ink switch, the stamp
    if (wide) {
      const r = SK.rect('right'), cx = w => r.x + Math.max(6, (r.w - w) / 2);
      let y = b.y + Math.max(4, b.h * 0.03);
      Object.assign($.drops.style, { left: cx($.drops.offsetWidth) + 'px', top: y + 'px' }); y += $.drops.offsetHeight + 10;
      if ($.modes) { Object.assign($.modes.style, { left: cx($.modes.offsetWidth) + 'px', top: y + 'px', right: 'auto' }); y += $.modes.offsetHeight + 12; }
      if ($.buy) Object.assign($.buy.style, { left: cx($.buy.offsetWidth) + 'px', top: Math.max(y, b.y + b.h * 0.3) + 'px', right: 'auto' });
    }
    if (wide) Object.assign($.fbar.style, { left: b.x + b.w / 2 + 'px', top: b.y + Math.max(6, b.h * 0.025) + 'px' });
    else Object.assign($.fbar.style, { left: b.x + b.w / 2 + 'px', top: Math.max(4, b.y - 4) + 'px' });
    $.fbar.classList.toggle('tall', !wide);
    // phone: on the narrowest screens the stamps reach over the ink switch: the switch steps down below them
    if (!wide && $.modes && $.buy) { const m = $.modes.getBoundingClientRect(), q = $.buy.getBoundingClientRect(); if (m.right > q.left - 4 && m.top < q.bottom && m.bottom > q.top) $.modes.style.top = (q.bottom - stageEl.getBoundingClientRect().top + 6) + 'px'; }
    // phone: the drops tag never runs into the ink switch above it (it may sit a little lower, over the rod's top)
    if (!wide && $.modes) { const mb = $.modes.offsetTop + $.modes.offsetHeight + 4 + $.drops.offsetHeight; if (mb > Math.max(4, b.y - 4)) { $.drops.style.top = mb + 'px'; $.fbar.style.top = mb + 'px'; } }
    Object.assign($.dragonB.style, { left: (b.x + b.w * (wide ? 0.12 : 0.1)) + 'px', top: (b.y + b.h * (wide ? 0.035 : 0.03)) + 'px', width: (b.w * (wide ? 0.76 : 0.8)) + 'px' });
    // phone: info and sound stand at the stage's top left, out of the bar
    if ($.icons) {
      if ($.icons.parentNode !== stageEl) stageEl.append($.icons);
      $.icons.classList.add('on-stage');
    }
    // the koi last: it fits around everything placed above
    placeKoi(wide, b);
    const kr = SK.S.videoKoi ? { x: parseFloat($.kv.style.left), y: parseFloat($.kv.style.top), w: parseFloat($.kv.style.width), h: parseFloat($.kv.style.height) } : k;
    if (kr) Object.assign($.koi.style, { left: kr.x + 'px', top: kr.y + 'px', width: Math.max(1, kr.w) + 'px', height: Math.max(1, kr.h) + 'px' });
  }

  /* =====================================================================
   *  The bar: one low row of ink on paper. Left: info, sound, balance. Centre: the enso between - and +, the play
   *  amount under it. Right: win, turbo, auto. The shell's own elements are moved, never rebuilt.
   * ===================================================================== */
  const ICONS = { lzInfo: 'info', lzMinus: 'minus', lzPlus: 'plus', lzFast: 'turbo', lzAuto: 'auto' };
  // the shell rewrites some buttons' text (AUTO -> "8 LEFT", Loading -> Play): keep the painted art inside them
  function keepArt(el, html, wrapText) {
    const fix = () => {
      if (el.querySelector(':scope > img')) return;
      const txt = el.textContent.trim();
      el.innerHTML = html + (wrapText ? `<span class="sk-lbl">${txt}</span>` : `<span>${txt}</span>`);
    };
    fix(); new MutationObserver(fix).observe(el, { childList: true });
  }
  function bar() {
    const g = id => document.getElementById(id), app = g('lzApp'), panel = g('lzPanel');
    if (!app || !panel || app.classList.contains('sk-bar')) return;
    const box = (cls, kids) => { const d = document.createElement('div'); d.className = cls; kids.forEach(k => k && d.append(k)); return d; };
    for (const [id, ic] of Object.entries(ICONS)) { const b = g(id); if (b) { b.dataset.ic = ic; keepArt(b, `<img src="assets/icons/${ic}.webp" alt="">`, true); } }
    const snd = g('lzSound');
    if (snd) { g('lzIcoOn').innerHTML = '<img src="assets/icons/sound.webp" alt="">'; g('lzIcoOff').innerHTML = '<img src="assets/icons/mute.webp" alt="">'; }
    const replay = !!(window.LZ && LZ.params && LZ.params.replay);
    // rules and sound: always in sight, on the stage's top left (they stay out of the bar's seven controls)
    $.icons = box('sk-icons', [g('lzInfo'), snd]);
    const L = $.iconsHome = box('sk-bl', [$.icons, g('lzWallet')]);
    const R = box('sk-br', [g('lzWinBox'), g('lzQuick')]);
    const stepper = document.querySelector('#lzField .lz-stepper'), amount = document.querySelector('#lzField .lz-amount');
    let C;
    if (!replay && stepper && g('lzAction')) { stepper.insertBefore(box('sk-spinw', [g('lzAction'), amount]), g('lzPlus')); C = box('sk-bc', [g('lzField')]); }
    else C = box('sk-bc', [g('lzField'), g('lzAction')]);
    panel.prepend(L, C, R);
    // the ink switch: on the stage, by the stamp
    const modes = g('lzModes');
    if (modes) { $.modes = modes; stageEl.append(modes); modes.classList.add('sk-ink'); modes.querySelectorAll('button').forEach(b => { b.insertAdjacentHTML('afterbegin', `<img src="assets/enso/${b.dataset.mode === 'wild' ? 'red' : 'ink'}.webp" alt="">`); }); }
    // the buy stamp leaves the bar for the stage
    const feats = g('lzFeats');
    if (feats) {
      $.buy = feats; stageEl.append(feats); feats.classList.add('sk-buy');
      feats.querySelectorAll('.lz-feat').forEach(b => { b.insertAdjacentHTML('afterbegin', '<img class="sk-stamp' + (/spring/.test(b.dataset.mode) ? ' spring' : '') + '" src="assets/' + (/spring/.test(b.dataset.mode) ? 'spring/waterfall' : 'ui/buy-card') + '.webp" alt="">'); });
    }
    app.classList.add('sk-bar');
    amountPicker(); hurryButton();
    // the action: an enso, a square while playing
    const act = g('lzAction');
    act.insertAdjacentHTML('afterbegin', '<img class="sk-enso" src="assets/enso/ink.webp" alt=""><img class="sk-stop" src="assets/enso/stop.webp" alt="">');
    new MutationObserver(() => { const w = g('lzWin'); if (w) w.parentElement.classList.toggle('has', !/^[^1-9]*$/.test(w.textContent)); }).observe(g('lzWin'), { childList: true, characterData: true, subtree: true });
    window.addEventListener('resize', () => requestAnimationFrame(place));
  }
  // the play amount: a paper slip of amounts above the bar (no browser select)
  function amountPicker() {
    const sel = document.getElementById('lzAmtSel'), amt = document.querySelector('#lzField .lz-amount');
    if (!sel || !amt) return;
    const pop = api.h('div', { class: 'sk-amtpop', hidden: true, role: 'listbox', 'aria-label': 'Play amount' });
    document.getElementById('lzApp').append(pop);
    amt.setAttribute('role', 'button'); amt.tabIndex = 0; amt.setAttribute('aria-label', 'Choose play amount');
    const close = () => { pop.hidden = true; document.removeEventListener('pointerdown', outside, true); };
    const outside = e => { if (!pop.contains(e.target) && !amt.contains(e.target)) close(); };
    const open = () => {
      if (api.busy || document.getElementById('lzMinus').disabled && document.getElementById('lzPlus').disabled) return;
      pop.innerHTML = '';
      [...sel.options].forEach(o => {
        const b = api.h('button', { type: 'button', role: 'option', 'aria-selected': String(o.value === sel.value), text: o.textContent });
        b.addEventListener('click', () => { sel.value = o.value; sel.dispatchEvent(new Event('change', { bubbles: true })); close(); Snd.play('ui_tick', { vol: 0.5 }); });
        pop.append(b);
      });
      const r = amt.getBoundingClientRect();
      pop.hidden = false;
      pop.style.left = clamp(r.left + r.width / 2 - pop.offsetWidth / 2, 6, innerWidth - pop.offsetWidth - 6) + 'px';
      pop.style.bottom = (innerHeight - r.top + 8) + 'px';
      setTimeout(() => document.addEventListener('pointerdown', outside, true), 0);
    };
    amt.addEventListener('click', () => (pop.hidden ? open() : close()));
    amt.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } if (e.key === 'Escape') close(); });
  }
  // a tap on the enso while a round plays hurries it (turbo for the rest of the round)
  function hurryButton() {
    const act = document.getElementById('lzAction');
    const hurry = api.h('button', { type: 'button', class: 'sk-hurry', hidden: true, 'aria-label': 'Speed up this round' });
    document.body.append(hurry);
    let saved = null;
    const placeH = () => { const r = act.getBoundingClientRect(); Object.assign(hurry.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' }); };
    new MutationObserver(() => {
      const busy = act.classList.contains('busy');
      if (busy) { placeH(); hurry.hidden = false; } else { hurry.hidden = true; if (saved !== null) { LZ.state.fast = saved; saved = null; } }
    }).observe(act, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', () => { if (!hurry.hidden) placeH(); });
    // standard 1.5: during a round the spin button does not hurry the round; it only skips a celebration that is on screen
    hurry.addEventListener('pointerdown', e => { e.preventDefault(); window.dispatchEvent(new Event('sk-skip')); });
  }
  let skipNow = false;

  /* =====================================================================
   *  Intro: the scroll unrolls while the game loads; the features are written on it in ink; PLAY is a red seal.
   *  "Don't show again" keeps only the logo and the seal next time.
   * ===================================================================== */
  const FEATS = [
    { img: 'drops/ink', title: 'TEN DROPS', text: 'Ten ink drops fall through the bamboo into eleven cups. About one play in three brings an ink event: a gold cup, a golden drop or a hungry seal.' },
    { img: 'spring/waterfall-thumb', title: 'THE RED SEAL', text: 'Every drop in the red seal stamps a mark. Three marks open KOI SPRING: the koi climbs the waterfall with three lives, taking pearls that multiply.' },
    { img: 'spring/dragon-thumb', title: 'THE GOLDEN DRAGON', text: 'It sleeps above the scroll. Take the dragon pearl on the falls and it wakes: up to x10, or KOI FEVER.' }
  ];
  let skipIntro = false;
  try { skipIntro = localStorage.getItem('sumikoi.intro') === 'short'; } catch (e) { /* storage blocked */ }
  function intro() {
    const I = document.getElementById('lzIntro'); if (!I) return;
    I.classList.add('sk-intro'); if (skipIntro) I.classList.add('short');
    const inner = I.querySelector('.lz-intro-in');
    const h = api.h;
    const sc = h('div', { class: 'sk-scroll' }, h('img', { class: 'sk-rod top', src: 'assets/board/rod.webp', alt: '' }), h('div', { class: 'sk-sheet' }), h('img', { class: 'sk-rod bot', src: 'assets/board/rod.webp', alt: '' }));
    inner.prepend(sc);
    const sheet = sc.querySelector('.sk-sheet');
    sheet.append(I.querySelector('.lz-intro-logo'), I.querySelector('.lz-intro-tag'));
    const notes = h('ol', { class: 'sk-notes' }, FEATS.map((f, i) => h('li', { style: `--i:${i}` }, h('img', { src: 'assets/' + f.img + '.webp', alt: '' }), h('div', null, h('b', { text: f.title }), h('span', { text: f.text })))));
    sheet.append(h('img', { class: 'sk-introdragon', src: 'assets/spring/dragon-sleep.webp', alt: '' }));
    sheet.append(notes);
    sheet.append(h('div', { class: 'sk-vol' }, h('b', { text: 'VOLATILITY' }), h('span', { class: 'sk-volbar', 'aria-label': '4 of 5' }, [0, 1, 2, 3, 4].map(i => h('img', { src: 'assets/drops/' + (i < 4 ? 'ink' : 'gold') + '.webp', alt: '', class: i < 4 ? 'on' : '' }))), h('span', { text: 'HIGH' })));
    const play = document.getElementById('lzIntroPlay');
    const row = h('div', { class: 'sk-playrow' }); row.append(play);
    const keep = h('button', { type: 'button', class: 'sk-keep', 'aria-pressed': String(skipIntro) }, h('i'), h('span', { text: "Don't show again" }));
    keep.addEventListener('click', () => { skipIntro = !skipIntro; keep.setAttribute('aria-pressed', String(skipIntro)); try { localStorage.setItem('sumikoi.intro', skipIntro ? 'short' : 'full'); } catch (e) { /* storage blocked */ } });
    sheet.append(row, keep, I.querySelector('.lz-intro-load'), I.querySelector('#lzIntroErr'), I.querySelector('#lzIntroFine'));
    keepArt(play, '<img src="assets/enso/red.webp" alt="">', false);
    // the scroll always fits the frame: it shrinks as a whole (down to the 400x225 popout)
    const fit = () => {
      if (I.hidden) return;
      sc.style.zoom = '1';
      const availH = I.clientHeight - 20, availW = I.clientWidth - 16, h0 = sc.offsetHeight, w0 = sc.offsetWidth;
      const z = Math.min(1, availH / Math.max(1, h0), availW / Math.max(1, w0));
      sc.style.zoom = z.toFixed(3);
    };
    fit(); window.addEventListener('resize', fit);
    if (document.fonts) document.fonts.ready.then(fit);
    // iPhone Safari: fonts.ready can resolve before the display font is even asked for, so the text grew after the
    // last fit and pushed Play off the bottom. Refit whenever a font lands or the scroll changes size, and a few
    // times while the intro unrolls.
    if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', fit);
    if (window.ResizeObserver) { let q = 0; new ResizeObserver(() => { if (!q) q = requestAnimationFrame(() => { q = 0; fit(); }); }).observe(sheet); }
    [300, 900, 2000, 4000].forEach(ms => setTimeout(fit, ms));
    [...sc.querySelectorAll('img')].forEach(im => { if (!im.complete) im.addEventListener('load', fit); });
    I.querySelectorAll('.lz-intro-logo img').forEach(im => { if (!im.complete) im.addEventListener('load', fit); });
    // the exit: the scroll flies to where the board hangs, then the board takes over
    play.addEventListener('click', () => {
      const b = SK && SK.S.ready ? SK.rect('board') : null, r = sc.getBoundingClientRect(), st = stageEl.getBoundingClientRect();
      if (b && r.width) { const k = b.h / r.height; sc.style.transform = `translate(${(st.left + b.x + b.w / 2) - (r.left + r.width / 2)}px,${(st.top + b.y + b.h / 2) - (r.top + r.height / 2)}px) scale(${k.toFixed(3)})`; }
      Snd.play('scroll_unroll', { vol: 0.5 }); music();
    }, true);
  }

  // the replay facts in Stake's own wording (the social wording, which also passes for the regular site), plus the win
  function replayCard() {
    const rp = document.getElementById('lzReplay'); if (!rp) return;
    const names = { Amount: 'Base Play', 'Cost multiplier': 'Feature Multiplier', 'Real cost': 'Total Play Worth', Result: 'Final Multiplier' };
    rp.querySelectorAll('dt').forEach(dt => { const n = names[dt.textContent.trim()]; if (n) dt.textContent = n; });
    const dl = rp.querySelector('dl'); if (!dl) return;
    const dt = api.h('dt', { text: 'Total Win' }), dd = api.h('dd', { id: 'skRpWin', text: '–' }); dl.append(dt, dd);
    const fill = () => { const rd = LZ.state.replayData, amt = LZ.state.amount; if (rd && amt) { const v = api.winMoney(Math.round(amt * (Number(rd.payoutMultiplier) || 0))); if (dd.textContent !== v) dd.textContent = v; } };
    new MutationObserver(fill).observe(rp, { childList: true, subtree: true, characterData: true }); setTimeout(fill, 400);
  }

  /* =====================================================================
   *  Celebrations
   * ===================================================================== */
  // a feature bought for 40x is judged against 40^0.588 = 8.75x, so a 99x return on it is a FULL BLOOM (never below its price)
  const scaleOf = cost => Math.max(1, cost);   // 7.1: tiers are measured from the round's cost
  function tierOf(x, cost) { const r = x / scaleOf(cost); let t = -1; TIERS.forEach((T, i) => { if (r >= T.x) t = i; }); return t; }
  function splashBurst(n, gold) { return splashBurstIn($.bigInk, n, gold); }
  function splashBurstIn(box, n, gold) {
    const keys = ['a', 'b', 'c', 'f'];
    for (let i = 0; i < n; i++) {
      const im = api.h('img', { src: 'assets/splash/' + keys[i % 4] + '.webp', alt: '', class: 'sk-sp' + (gold && i % 2 ? ' g' : '') });
      const a = (i / n) * Math.PI * 2 + rand(-0.3, 0.3), d = rand(18, 42);
      im.style.setProperty('--x', (Math.cos(a) * d).toFixed(1) + 'vmin'); im.style.setProperty('--y', (Math.sin(a) * d * 0.7).toFixed(1) + 'vmin');
      im.style.setProperty('--r', rand(0, 360).toFixed(0) + 'deg'); im.style.setProperty('--s', rand(0.6, 1.3).toFixed(2)); im.style.setProperty('--d', rand(0, 0.25).toFixed(2) + 's');
      box.append(im); setTimeout(() => im.remove(), 2600);
    }
  }
  // A named win: the ink pulls in, the seal stamps (flash, shake, a 260 ms stop), the title slams and climbs through the
  // tiers while the amount counts up, a last hit, the hold. A tap skips to the next part; TURBO shortens all of it.
  const celeb = on => stageEl.classList.toggle('sk-celeb', on);
  async function bigWin(ctx, idx, units, x, capped) {
    celeb(true);
    const fast = () => ctx.fast(), sp = () => (fast() ? 2.2 : 1), [pre, cnt, hold] = capped ? [1700, 10000, 2500] : TIME[idx];
    $.bigX.hidden = !capped; if (capped) $.bigX.innerHTML = digitsHtml('x' + Math.round(x), 'red');
    let rainT = 0; if (capped && !api.reduced) rainT = setInterval(() => goldRain(stageEl.clientWidth < stageEl.clientHeight ? 7 : 14), 900);
    let tap = 0, jump = 0; const onTap = () => { tap++; jump++; }; const unKey = keyTap(onTap);
    let dragon = capped;
    const phase = p => { $.big.className = 'sk-big ' + p + ' t' + idx + (capped ? ' maxw' : '') + (dragon ? ' dragon' : '') + (shown >= 2 || capped ? ' goldk' : ''); };
    let shown = 0;
    // the koi rises first: the screen is never an empty wash while the win gathers
    $.big.hidden = false; phase('pre'); bigKoi(true); $.bigTitle.src = 'assets/titles/' + (capped ? 'max' : TIERS[0].key) + '.webp'; setDigits($.bigAmt, api.money(0), 'gold');
    Snd.hold(0.06); Snd.play('reach', { vol: 0.55, jitter: 0 });
    SK.Koi.react('big', { dur: (pre + cnt + hold) / 1000 / sp() });
    const wait = async ms => { const t0 = performance.now(), n0 = tap; while (performance.now() - t0 < ms / sp() && tap === n0 && !skipNow) await new Promise(r => setTimeout(r, 30)); };
    await wait(pre);
    // the hit
    phase('hit'); SK.S.shake = 1;
    // on a phone the hit is spread over a few frames (the canvas burst now, the wash and the splashes after), so no frame carries all of it
    const ph = stageEl.clientWidth < stageEl.clientHeight, later = (f, ms) => (ph ? setTimeout(f, ms) : f());
    { const c = FX.stageXY(stageEl.clientWidth / 2, stageEl.clientHeight * 0.45); FX.boom(); FX.ring(c.x, c.y, 40, Math.max(innerWidth, innerHeight) * 0.7); FX.burst(c.x, c.y, (120 + idx * 50) * (ph ? 0.6 : 1), { speed: 1.6, size: 1.2 }); FX.fountain((cnt + hold) / sp(), 46 + idx * 24, { storm: idx >= 1 || capped }); FX.koiAcross(3 + idx * 2, idx >= 2); if (idx >= 3 || capped) FX.dragonPass(); } Snd.play('taiko_1', { vol: 0.95, jitter: 0 }); Snd.play('stamp', { vol: 0.8 });
    later(() => { if (ph) SK.wash(50, 60, 50, 1); else SK.feverWash(); }, 70);
    later(() => { splashBurst(ph ? 5 + idx * 2 : 8 + idx * 4, idx >= 2); tierFx(capped ? 3 : 0); }, 160); if (capped) later(() => goldRain(ph ? 30 : 50), 260);
    await new Promise(r => setTimeout(r, 260 / sp()));
    phase('count');
    const stop = Snd.climb('count_loop', 0.45, 400 + idx * 600, cnt / 1000 / sp());
    const setTier = i => { if (capped || i === shown) return; shown = i; dragon = i >= 3; $.big.classList.toggle('goldk', i >= 2); $.bigKoi.classList.remove('leap'); void $.bigKoi.offsetWidth; $.bigKoi.classList.add('leap'); $.bigTitle.src = 'assets/titles/' + TIERS[i].key + '.webp'; $.big.classList.remove('up'); void $.big.offsetWidth; $.big.classList.add('up'); Snd.play('taiko_' + (1 + (i % 3)), { vol: 0.85 }); splashBurst(6, i >= 2); tierFx(i); { const c = FX.stageXY(stageEl.clientWidth / 2, stageEl.clientHeight * 0.42); FX.boom(i >= 2 ? '255,200,90' : '255,226,160'); FX.ring(c.x, c.y, 30, Math.max(innerWidth, innerHeight) * 0.6); FX.burst(c.x, c.y, 80 + i * 30, { speed: 1.5 }); FX.koiAcross(2 + i, i >= 2); if (i >= 3) FX.dragonPass(); } SK.S.shake = Math.max(SK.S.shake, 0.6); };
    let t0 = performance.now(), jumped = 0, lastDraw = 0;
    await new Promise(res => {
      (function step() {
        // a tap: the next tier at once (normal speed), or the end (turbo, or already at the last tier)
        if (jump > jumped) {
          jumped = jump;
          const nx = shown < idx && !fast() && !capped ? TIERS[shown + 1].x * scaleOf(ctx.cost) / x : 1;
          const tt = nx >= 1 ? 1 : 1 - Math.pow(1 - nx, 1 / 2.2);
          t0 = performance.now() - tt * cnt / sp() - 1;
        }
        const t = skipNow || api.reduced ? 1 : Math.min(1, (performance.now() - t0) / (cnt / sp())), e = t < 1 ? 1 - Math.pow(1 - t, 2.2) : 1;
        const nowT = performance.now();
        if (t >= 1 || nowT - lastDraw > 45) { lastDraw = nowT; setDigits($.bigAmt, t >= 1 ? api.winMoney(units) : api.money(Math.round(units * e)), 'gold'); ctx.setWin(t >= 1 ? units : Math.round(units * e), t < 1); }   // the numerals at ~20 fps: the count reads the same, the frame stays light
        let ti = 0; TIERS.forEach((T, i) => { if (x * e / scaleOf(ctx.cost) >= T.x && i <= idx) ti = i; }); setTier(Math.min(ti, idx));
        $.bigAmt.style.setProperty('--grow', (1 + 0.25 * e).toFixed(3));
        if (t < 1) requestAnimationFrame(step); else res();
      })();
    });
    stop(); setTier(idx);
    if (capped) { $.bigTitle.src = 'assets/titles/max.webp'; }
    tap = 0; phase('slam'); SK.S.shake = 1;
    { const a = $.bigAmt.getBoundingClientRect(); FX.boom(); FX.burst(a.left + a.width / 2, a.top + a.height / 2, 160 + idx * 40, { speed: 1.8, size: 1.3 }); FX.ring(a.left + a.width / 2, a.top + a.height / 2, 30, Math.max(innerWidth, innerHeight)); FX.toWin(a.left + a.width / 2, a.top + a.height / 2, 24); if (idx >= 3 || capped) FX.dragonPass(); } Snd.play('win_end_' + (idx >= 2 ? 2 : 1), { vol: 0.95, jitter: 0 }); Snd.play('taiko_roll', { vol: 0.6 });
    splashBurst(10, true);
    await wait(hold);
    phase('out'); bigKoi(false); clearInterval(rainT); Snd.hold(1);
    await new Promise(r => setTimeout(r, 380));
    $.big.hidden = true; $.big.removeEventListener('pointerdown', onTap); unKey(); celeb(false); ctx.setWin(units, true);
  }
  // the koi swims through every big win, behind the title: a wide arc across the screen, a leap at every new tier, gold from MASTERPIECE
  function bigKoi(on) {
    const v = $.bigKoi;
    if (!on || api.reduced || stageEl.clientWidth < stageEl.clientHeight) { v.classList.remove('swim', 'leap'); try { v.pause(); } catch (e) {} return; }   // phones: no film over the celebration (a slow phone stalls on it)
    const want = leapOn ? 'assets/koi/leap-h.mp4' : 'assets/koi/swim-h.mp4';
    if (v.dataset.src !== want) { v.dataset.src = want; v.src = want; }
    v.playbackRate = leapOn ? 1 : 1.7; v.classList.add('swim'); const p = v.play(); if (p && p.catch) p.catch(() => {});
  }
  /* ---------- v3: the sleeping dragon over the board, and the ink events ---------- */
  // the dragon sleeps above the scroll every round; each mark on the seal stirs it, two marks wake its eyes,
  // three send it to the falls
  function dragonState(s) {
    if (!$.dragonB) return;
    $.dragonB.classList.remove('stir', 'wake', 'rise'); void $.dragonB.offsetWidth;
    if (s) $.dragonB.classList.add(s);
    if (s === 'stir' || s === 'wake') dragonPuff();
    if (s === 'wake') Snd.play('roar', { vol: 0.4, rate: 0.85, jitter: 0 });
    if (s === 'rise') Snd.play('roar', { vol: 0.85, jitter: 0 });
  }
  function dragonPuff() {
    if (api.reduced || !$.dragonB) return;
    const r = $.dragonB.getBoundingClientRect(), sr = stageEl.getBoundingClientRect();
    for (let k = 0; k < 3; k++) {
      const im = api.h('img', { src: 'assets/splash/' + 'acf'[k] + '.webp', alt: '', class: 'sk-puff' });
      im.style.left = (r.left - sr.left + r.width * (0.9 + k * 0.03)) + 'px'; im.style.top = (r.top - sr.top + r.height * 0.32) + 'px'; im.style.setProperty('--d', (k * 0.12) + 's');
      $.hud.append(im); setTimeout(() => im.remove(), 1600);
    }
  }
  // a ribbon of brush words over the board: what this round brings
  async function eventBanner(word, sub, cls, ctx) {
    $.evb.className = 'sk-evb ' + (cls || ''); $.evbW.textContent = word; $.evbS.innerHTML = sub || '';
    $.evb.hidden = false; void $.evb.offsetWidth; $.evb.classList.add('in');
    await ctx.sleep(1100 / (ctx.fast() ? 2 : 1));
    $.evb.classList.add('out'); await ctx.sleep(260); $.evb.hidden = true;
  }
  // the koi leaves its scroll and swims to a cup (the gold cup)
  async function koiToCup(k, ctx) {
    const r = SK.rect({ cup: k }), side = SK.rect('sidepaper'), st = stageEl.getBoundingClientRect(); if (!r) return;
    const x0 = side ? side.x + side.w / 2 : st.width * 0.5, y0 = side ? side.y + side.h * 0.4 : -40, x1 = r.x, y1 = r.y - r.h * 0.4;
    const el = api.h('img', { src: 'assets/koi/color.webp', alt: '', class: 'sk-swimkoi touch' }); $.hud.append(el);
    const flip = x1 < x0 ? -1 : 1, ang = Math.atan2(y1 - y0, Math.abs(x1 - x0)) * 180 / Math.PI * flip;
    const tf = (x, y, a, s) => `translate(${x.toFixed(0)}px,${y.toFixed(0)}px) translate(-50%,-50%) rotate(${a.toFixed(0)}deg) scale(${(s * flip).toFixed(2)},${s.toFixed(2)})`;
    const mx = (x0 + x1) / 2, my = Math.min(y0, y1) - st.height * 0.12;
    SK.Koi.react('big', { dur: 1.2 }); Snd.play('launch_1', { vol: 0.6, rate: 0.8 });
    const dur = 1050 / (ctx.fast() ? 2 : 1);
    await el.animate([{ transform: tf(x0, y0, ang - 30, 0.3), opacity: 0 }, { transform: tf(mx, my, 0, 0.7), opacity: 1, offset: 0.45 }, { transform: tf(x1, y1, ang + 40, 0.55), opacity: 1, offset: 0.9 }, { transform: tf(x1, y1 + 20, 80, 0.3), opacity: 0 }], { duration: dur, easing: 'cubic-bezier(.3,.6,.4,1)', fill: 'forwards' }).finished;
    el.remove();
  }
  function goldCupTag(k, m) {
    if ($.gcTag) $.gcTag.remove(); $.gcTag = null;
    if (k < 0) return;
    const r = SK.rect({ cup: k }); if (!r) return;
    $.gcTag = api.h('div', { class: 'sk-gctag' }); $.gcTag.innerHTML = digitsHtml('x' + m, 'gold');
    Object.assign($.gcTag.style, { left: r.x + 'px', top: (r.y + r.h * 0.55) + 'px' }); $.hud.append($.gcTag);
  }
  function hungrySeal(on) {
    if (!on) { if ($.hungry) $.hungry.remove(); $.hungry = null; return; }
    const r = SK.rect('seal'); if (!r) return;
    $.hungry = api.h('img', { src: 'assets/enso/red.webp', alt: '', class: 'sk-hungry' });
    Object.assign($.hungry.style, { left: (r.x + r.w / 2) + 'px', top: (r.y + r.h / 2) + 'px', width: (r.w * 1.5) + 'px' }); $.hud.append($.hungry);
  }
  // the ink event of the round, shown before the drops fall
  async function inkEvent(e, ctx) {
    if (!e) return;
    if (e.kind === 'goldcup') {
      const b = eventBanner('GOLD CUP', digitsHtml('x' + e.m, 'gold'), 'gold', ctx);
      await koiToCup(e.k, ctx);
      SK.setCupMult(e.k, e.m); goldCupTag(e.k, e.m); SK.landFx(e.k, 4, true);
      Snd.play('bell_' + Math.min(4, e.m - 1), { vol: 0.9, jitter: 0 }); Snd.play('stamp', { vol: 0.8 });
      await b;
    } else if (e.kind === 'golddrop') {
      Snd.play('bell_3', { vol: 0.85, jitter: 0 }); Snd.play('reach', { vol: 0.6, jitter: 0 });
      $.drops.classList.add('golden');
      await eventBanner('GOLDEN DROP', '<span class="sk-evbsmall">ONE DROP WINS</span>' + digitsHtml('x10', 'gold'), 'gold', ctx);
    } else if (e.kind === 'hungry') {
      hungrySeal(true); dragonState('stir'); Snd.play('taiko_roll', { vol: 0.8, jitter: 0 }); SK.S.shake = 0.5;
      await eventBanner('HUNGRY SEAL', '<span class="sk-evbsmall">THE SEAL PULLS THE INK</span>', 'red', ctx);
    }
  }
  function clearInkEvent() { SK.setCupMult(-1); goldCupTag(-1); hungrySeal(false); if ($.drops) $.drops.classList.remove('golden'); }
  /* =====================================================================
   *  FRENZY (v3, 2026-11-28): every win throws things across the screen; big wins go wild.
   *  One canvas over the whole window (above the stage and the bar), painted sprites only: golden drops as coins,
   *  ink and gold splashes, koi, the red enso as a shockwave, the dragon for the biggest wins.
   * ===================================================================== */
  const FX = (() => {
    const IMG = {}, ps = [], rings = [];
    let cv = null, g = null, raf = 0, W = 0, H = 0, Q = 0.75, flash = 0, flashCol = '255,214,120', budget = 420, ema = 0.016;
    const KEYS = { gold: 'drops/gold', ink: 'drops/ink', sa: 'splash/a', sc: 'splash/c', sf: 'splash/f', koi: 'koi/ink', koig: 'koi/color', enso: 'enso/red', ensoi: 'enso/ink', dragon: 'spring/dragon' };
    function init() {
      if (cv) return;
      cv = document.createElement('canvas'); cv.className = 'sk-fx'; document.body.append(cv); g = cv.getContext('2d');
      for (const [k, src] of Object.entries(KEYS)) { const im = new Image(); im.src = 'assets/' + src + '.webp'; if (im.decode) im.decode().catch(() => {}); IMG[k] = im; }
      // tinted splashes: gold and red ink (made once on small canvases)
      const tint = (k, col) => { const im = IMG[k]; const make = () => { const c = document.createElement('canvas'); c.width = 128; c.height = 128; const t = c.getContext('2d'); t.drawImage(im, 0, 0, 128, 128); t.globalCompositeOperation = 'source-in'; t.fillStyle = col; t.fillRect(0, 0, 128, 128); IMG[k + col] = c; }; if (im.complete) make(); else im.addEventListener('load', make, { once: true }); };
      for (const k of ['sa', 'sc', 'sf']) { tint(k, '#d9aa3c'); tint(k, '#c8372d'); }
      resize(); window.addEventListener('resize', resize);
      // the frame clock, always on (cheap): the frenzy knows how the device is doing before it throws anything
      let pt = performance.now(); (function mon(t) { const d = (t - pt) / 1000; pt = t; if (d > 0 && d < 0.5 && !raf) ema = ema * 0.95 + d * 0.05; requestAnimationFrame(mon); })(pt);
    }
    // drawn at part resolution (the sprites are soft paintings anyway): the canvas costs a quarter to a half as much
    function resize() { if (!cv) return; W = innerWidth; H = innerHeight; Q = innerWidth < innerHeight ? 0.5 : 0.7; cv.width = Math.round(W * Q); cv.height = Math.round(H * Q); }
    const phone = () => innerWidth < innerHeight, weak = () => !!(SK && SK.S && SK.S.weak);
    // how much to throw: less on phones and slow devices, and less again while frames run long (measured here)
    const scale = () => (weak() ? 0.3 : phone() ? 0.55 : 1) * (ema > 0.034 ? 0.3 : ema > 0.024 ? 0.6 : 1);
    function img(k) { const i = IMG[k]; return i && (i.width || i.naturalWidth) ? i : null; }
    // one particle: an image flung with velocity, gravity, spin, fade; or flying home to a target
    function add(p) { if (ps.length >= budget * scale() + 30 || api.reduced) return; ps.push(Object.assign({ t: 0, life: 1.6, g: 1400, rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 10, s: 1, a: 1, drag: 0.4 }, p)); go(); }
    function go() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); } }
    let last = 0;
    function step(now) {
      raf = 0; const raw = (now - last) / 1000, dt = Math.min(0.05, raw); last = now; if (raw < 0.5) ema = ema * 0.9 + raw * 0.1;
      g.setTransform(Q, 0, 0, Q, 0, 0); g.clearRect(0, 0, W, H);
      if (flash > 0) { g.fillStyle = `rgba(${flashCol},${(flash * 0.55).toFixed(3)})`; g.fillRect(0, 0, W, H); flash = Math.max(0, flash - dt * 2.6); }
      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i]; r.t += dt; const k = r.t / r.life; if (k >= 1) { rings.splice(i, 1); continue; }
        const im = img(r.k), R = Math.min(r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - k, 3)), ema > 0.024 ? 260 : 700); if (!im) continue;
        g.globalAlpha = (1 - k) * r.a; g.save(); g.translate(r.x, r.y); g.rotate(r.rot + k * 1.5); g.drawImage(im, -R, -R, R * 2, R * 2); g.restore();
      }
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]; p.t += dt;
        if (p.home) {      // flying home: an arc that bends onto its target
          const k = Math.min(1, p.t / p.life), e = k * k * (3 - 2 * k);
          p.x = p.x0 + (p.tx - p.x0) * e + Math.sin(k * Math.PI) * p.bend; p.y = p.y0 + (p.ty - p.y0) * e - Math.sin(k * Math.PI) * p.lift;
          if (k >= 1) { ps.splice(i, 1); if (p.onHome) p.onHome(); continue; }
        } else {
          p.vy += p.g * dt; p.vx *= 1 - p.drag * dt; p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.t >= p.life || p.y > H + 80) { ps.splice(i, 1); continue; }
        }
        p.rot += p.vr * dt;
        const im = img(p.k) || (p.k.startsWith('s') ? null : null); const src = IMG[p.k] && (IMG[p.k].width || IMG[p.k].naturalWidth) ? IMG[p.k] : null; if (!src) continue;
        const fade = p.home ? 1 : Math.min(1, (p.life - p.t) / 0.35), sz = p.size * p.s * (p.grow ? 1 + p.grow * Math.min(1, p.t / p.life) : 1);
        const ar = (src.height || src.naturalHeight) / (src.width || src.naturalWidth);
        g.globalAlpha = Math.max(0, p.a * fade); g.save(); g.translate(p.x, p.y); g.rotate(p.face ? Math.atan2(p.vy || (p.ty - p.y), p.vx || (p.tx - p.x)) * (p.flip ? -1 : 1) : p.rot); if (p.flip) g.scale(-1, 1);
        g.drawImage(src, -sz / 2, -sz * ar / 2, sz, sz * ar); g.restore();
      }
      g.globalAlpha = 1;
      if (ps.length || rings.length || flash > 0) raf = requestAnimationFrame(step);
    }
    const R = (a, b) => a + Math.random() * (b - a);
    const center = el => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height }; };
    const stageXY = (x, y) => { const s = stageEl.getBoundingClientRect(); return { x: s.left + x, y: s.top + y }; };
    // an explosion of coins (and splashes) from a point
    function burst(x, y, n, o = {}) {
      init(); const base = Math.min(W, H);
      n = Math.round(n * scale());
      for (let i = 0; i < n; i++) {
        const a = o.up ? R(-Math.PI * 0.92, -Math.PI * 0.08) : R(0, Math.PI * 2), v = R(0.35, 1) * (o.speed || 1) * base * 1.1;
        const kind = o.kinds ? o.kinds[i % o.kinds.length] : (i % 5 === 4 ? 'sc#d9aa3c' : 'gold');
        add({ k: kind, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, size: base * R(0.028, 0.05) * (o.size || 1) * (kind.startsWith('s') ? 2.2 : 1), life: R(0.9, 1.6) * (o.life || 1), g: base * 2.2 * (o.grav ?? 1) });
      }
    }
    // coins flying from a point to the WIN counter in the bar
    function toWin(x, y, n, onEach) {
      init(); const w = document.getElementById('lzWin'); if (!w) return; const t = center(w);
      n = Math.max(1, Math.round(n * scale()));
      for (let i = 0; i < n; i++) setTimeout(() => add({ k: 'gold', home: true, x0: x + R(-20, 20), y0: y + R(-20, 20), tx: t.x + R(-10, 10), ty: t.y, bend: R(-120, 120), lift: R(60, 200), life: R(0.55, 0.85), size: Math.min(W, H) * 0.035, onHome: () => { pop(w); if (onEach) onEach(); } }), i * 45);
    }
    function pop(el) { el.classList.remove('sk-pop'); void el.offsetWidth; el.classList.add('sk-pop'); }
    // a fountain of coins from the bottom (or a storm from the top) for a while
    function fountain(ms, rate, o = {}) {
      init(); const t0 = performance.now();
      const tick = () => { const k = performance.now() - t0; if (k > ms || skipNow) return; const n = Math.max(1, Math.round(rate * scale() * (phone() ? 0.45 : 1) / 9));
        for (let i = 0; i < n; i++) { const x = Math.random() < 0.5 ? R(W * 0.0, W * 0.28) : R(W * 0.72, W * 1.0);   // from the sides: the amount in the middle stays readable
          add({ k: Math.random() < 0.18 ? 'sa#d9aa3c' : 'gold', x, y: H + 20, vx: (x < W / 2 ? R(-0.12, 0.08) : R(-0.08, 0.12)) * W, vy: -R(0.9, 1.5) * H, size: Math.min(W, H) * R(0.03, 0.055) * (Math.random() < 0.18 ? 2 : 1), life: 2.2, g: H * 1.25 }); }
        if (o.storm) for (let i = 0; i < Math.ceil(n / 2); i++) add({ k: Math.random() < 0.3 ? 'sf#c8372d' : 'gold', x: R(-0.1, 1.1) * W, y: -30, vx: R(0.05, 0.25) * W, vy: R(0.2, 0.5) * H, size: Math.min(W, H) * R(0.025, 0.045), life: 3, g: H * 0.5, drag: 0.1 });
        setTimeout(tick, 70); };
      tick();
    }
    // koi leaping across the whole screen
    function koiAcross(n, golden) {
      init(); n = Math.max(1, Math.round(n * (weak() ? 0.4 : phone() ? 0.5 : 1) * (ema > 0.03 ? 0.5 : 1)));
      for (let i = 0; i < n; i++) setTimeout(() => { const ltr = Math.random() < 0.5, y = R(0.25, 0.85) * H; add({ k: golden || Math.random() < 0.4 ? 'koig' : 'koi', x: ltr ? -80 : W + 80, y, vx: (ltr ? 1 : -1) * R(0.55, 0.9) * W, vy: -R(0.6, 0.95) * H, g: H * 1.3, size: Math.min(W, H) * R(0.16, 0.26), life: 2.4, face: true, flip: !ltr, drag: 0 }); }, i * R(90, 220));
    }
    function ring(x, y, r0, r1, o = {}) { init(); rings.push({ k: o.ink ? 'ensoi' : 'enso', x, y, r0, r1, t: 0, life: o.life || 0.7, rot: Math.random() * 6, a: o.a ?? 0.9 }); go(); }
    function boom(col) { init(); flash = 1; flashCol = col || '255,214,120'; go(); }
    // the dragon sweeps across the screen (the biggest wins)
    function dragonPass() { init(); const ltr = Math.random() < 0.5; add({ k: 'dragon', x: ltr ? -W * 0.3 : W * 1.3, y: H * 0.55, vx: (ltr ? 1 : -1) * W * 0.75, vy: -H * 0.12, g: 0, drag: 0, size: Math.min(W * 0.9, H * 1.1), life: 2.6, rot: 0, vr: 0, flip: !ltr, face: false }); }
    return { init, burst, toWin, fountain, koiAcross, ring, boom, dragonPass, stageXY, center, pop, scale };
  })();
  // a win of `x` play amounts landed at stage point (sx, sy): the frenzy grows with it
  function frenzyCup(sx, sy, x, gold) {
    const p = FX.stageXY(sx, sy);
    const n = x >= 5 ? 46 : x >= 1 ? 26 : x >= 0.3 ? 14 : 7;
    FX.burst(p.x, p.y, n, { up: true, speed: x >= 1 ? 1.15 : 0.8, kinds: gold || x >= 1 ? ['gold', 'gold', 'sc#d9aa3c', 'gold'] : ['gold', 'sf#d9aa3c'] });
    if (x >= 0.3) FX.toWin(p.x, p.y, x >= 5 ? 14 : x >= 1 ? 8 : 3);
    if (x >= 1) FX.ring(p.x, p.y, 10, Math.min(innerWidth, innerHeight) * (x >= 5 ? 0.35 : 0.2));
  }
  let bestCup = -1;
  // a win rising out of its cup in KOI FEVER (bigger, with a red enso, for a drop worth twice the cost or more)
  function plusAt(k, units, big) {
    const r = SK.rect({ cup: k }); if (!r) return;
    const el = api.h('div', { class: 'sk-plus' + (big ? ' big' : '') }); setDigits(el, api.money(units), 'gold');
    Object.assign(el.style, { left: r.x + 'px', top: r.y + 'px' }); $.hud.append(el); setTimeout(() => el.remove(), big ? 1700 : 1100);
  }
  // space / Enter during a celebration count as a tap on it
  // a celebration is skipped by the spin button (sk-skip) or space / Enter only (standard 1.5)
  function keyTap(fn) { const k = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fn(); } }; window.addEventListener('keydown', k, true); window.addEventListener('sk-skip', fn); return () => { window.removeEventListener('sk-skip', fn); window.removeEventListener('keydown', k, true); }; }
  // from 2x (standard 1.2, 7.2): the amount rises out of the best cup, flies to the middle of the scroll and lands in a
  // red enso with a burst of ink; the koi darts; colour washes into the painting. About 2 s, a tap skips.
  async function midWin(ctx, units) {
    const sp = ctx.fast() ? 2.2 : 1, from = bestCup >= 0 ? SK.rect({ cup: bestCup }) : null;
    $.mid.hidden = false; $.mid.className = 'sk-mid'; celeb(true);
    const b = SK.rect('board'), tx = b.x + b.w / 2, ty = b.y + b.h * 0.56;
    const fx = from ? from.x : tx, fy = from ? from.y : b.y + b.h * 0.9;
    $.mid.style.setProperty('--fx', (fx - tx).toFixed(0) + 'px'); $.mid.style.setProperty('--fy', (fy - ty).toFixed(0) + 'px');
    Object.assign($.mid.style, { left: tx + 'px', top: ty + 'px' });
    setDigits($.midAmt, api.winMoney(units), 'gold');
    void $.mid.offsetWidth; $.mid.classList.add('fly');
    Snd.play('launch_1', { vol: 0.6, rate: 0.8 }); SK.Koi.react('win');
    let tap = false; const onTap = () => { tap = true; }; const unKey = keyTap(onTap);
    const strong = ctx.winX >= 3 * scaleOf(ctx.cost); $.mid.classList.toggle('strong', strong); if (strong) { SK.Koi.react('big', { dur: 1.6 }); Snd.play('taiko_1', { vol: 0.6 }); }
    const wait = async ms => { const t0 = performance.now(); while (performance.now() - t0 < ms / sp && !tap && !skipNow) await new Promise(r => setTimeout(r, 25)); };
    await wait(520);
    { const p = FX.stageXY(tx, ty); FX.boom(); FX.ring(p.x, p.y, 30, Math.min(innerWidth, innerHeight) * 0.45); FX.burst(p.x, p.y, 70, { speed: 1.3 }); FX.fountain(1300, strong ? 40 : 26); FX.koiAcross(strong ? 3 : 2); FX.toWin(p.x, p.y, 16); }
    $.mid.classList.add('land'); ctx.setWin(units, true); SK.S.shake = Math.max(SK.S.shake, 0.55); Snd.play('stamp', { vol: 0.8 }); Snd.play('win_end_1', { vol: 0.7, jitter: 0 }); Snd.play('taiko_3', { vol: 0.45 });
    SK.wash(50, 72, 46, 0.9);
    for (let i = 0; i < 10; i++) SK.fx('splash/' + 'acfb'[i % 4], 50 + Math.cos(i * 0.63) * 30, 76 + Math.sin(i * 0.63) * 26, 1.5, { life: 1, color: i % 3 ? 0x1b1a18 : 0xc9a24a, opacity: 0.85, order: 66, delay: i * 0.03 });
    splashBurstIn($.midInk, strong ? 12 : 7, strong);
    if (strong) for (let i = 0; i < 8; i++) SK.fx('splash/' + 'acf'[i % 3], 50 + Math.cos(i * 0.8) * 38, 74 + Math.sin(i * 0.8) * 30, 1.8, { life: 1.2, color: 0xc9a24a, opacity: 0.9, order: 66, delay: 0.15 + i * 0.04 });
    await wait(1300);
    $.mid.classList.add('out'); await new Promise(r => setTimeout(r, 260)); $.mid.hidden = true; $.mid.removeEventListener('pointerdown', onTap); unKey(); celeb(false);
  }
  // every named tier looks different: INK SPLASH black ink; FULL BLOOM colour blooms across the painting;
  // MASTERPIECE a rain of gold-leaf drops; DRAGON GATE all of it with a great red enso turning behind the title
  function tierFx(i) {
    const phone = stageEl.clientWidth < stageEl.clientHeight;
    if (i >= 1) { if (phone) { SK.wash(30, 40, 40, 1); SK.wash(70, 90, 40, 1); } else SK.feverWash(); for (let k = 0; k < (phone ? 4 : 9); k++) SK.fx('wash/' + 'abcdef'[k % 6], 10 + k * 10, 30 + (k % 3) * 35, 3.2, { life: 1.8, color: [0xc8372d, 0xd98aa0, 0x2d4a7a, 0xc9a24a][k % 4], opacity: 0.55, grow: 1.2, order: 26, delay: k * 0.05 }); }
    if (i >= 2) goldRain(Math.round((i >= 3 ? 46 : 26) * (stageEl.clientWidth < stageEl.clientHeight ? 0.3 : 1)));
    $.big.classList.toggle('dragon', i >= 3 || $.big.classList.contains('maxw'));
  }
  function goldRain(n) {
    return;   // the frenzy canvas throws the gold now (one layer, not dozens of animated pictures)
    for (let k = 0; k < n; k++) {
      const im = api.h('img', { src: 'assets/drops/gold.webp', alt: '', class: 'sk-rain' });
      im.style.left = rand(2, 98).toFixed(1) + '%'; im.style.setProperty('--d', rand(0, 1.2).toFixed(2) + 's'); im.style.setProperty('--t', rand(1.1, 2).toFixed(2) + 's'); im.style.setProperty('--s', rand(0.5, 1.2).toFixed(2));
      $.big.append(im); setTimeout(() => im.remove(), 3600);
    }
  }
  // a win at or over the play: the cups glow, the koi jumps, a small count by the board (about 1.4 s, skippable)
  async function smallWin(ctx, units) {
    $.small.hidden = false; $.small.className = 'sk-small in';
    Snd.play('win_end_1', { vol: 0.6, jitter: 0 }); Snd.play('stamp', { vol: 0.5 });
    SK.Koi.react('win'); SK.S.shake = Math.max(SK.S.shake, 0.35); SK.wash(50, 70, 34, 0.9);
    { const b = SK.rect('board'), p = FX.stageXY(b.x + b.w / 2, b.y + b.h * 0.7); FX.boom('255,220,140'); FX.burst(p.x, p.y, 40, { up: true, speed: 1.2 }); FX.toWin(p.x, p.y, 12); FX.ring(p.x, p.y, 20, Math.min(innerWidth, innerHeight) * 0.3); }
    for (let i = 0; i < 7; i++) SK.fx('splash/' + 'acf'[i % 3], 50 + Math.cos(i * 0.9) * 26, 72 + Math.sin(i * 0.9) * 22, 1.3, { life: 0.9, color: i % 2 ? 0xc9a24a : 0x1b1a18, opacity: 0.8, order: 66, delay: i * 0.04 });
    let sTap = false; const onS = () => { sTap = true; }; const unKey = keyTap(onS);
    const dur = 1100 / (ctx.fast() ? 2.2 : 1), t0 = performance.now();
    await new Promise(res => { (function st() { const t = skipNow || sTap ? 1 : Math.min(1, (performance.now() - t0) / dur); setDigits($.smallAmt, t >= 1 ? api.winMoney(units) : api.money(Math.round(units * (1 - Math.pow(1 - t, 3)))), 'gold'); ctx.setWin(t >= 1 ? units : Math.round(units * (1 - Math.pow(1 - t, 3))), t < 1); if (t < 1) requestAnimationFrame(st); else res(); })(); });
    $.small.classList.add('done'); { const w0 = performance.now(); sTap = false; while (!sTap && !skipNow && performance.now() - w0 < 650 / (ctx.fast() ? 2.2 : 1)) await new Promise(r => setTimeout(r, 25)); }
    unKey();
    $.small.className = 'sk-small out'; await ctx.sleep(220); $.small.hidden = true;
  }

  // the ink of a mode: base and fever are calm, wild and wildfever are wild
  function setInkFor(mode) { const ink = /wild/.test(mode || '') ? 'wild' : 'calm'; TIER = TIERS_OF[ink]; if (SK && SK.S.ready) SK.setInk(ink); else pendingInk = ink; document.documentElement.dataset.ink = ink; }
  let pendingInk = null;

  /* =====================================================================
   *  Round playback
   * ===================================================================== */
  let C = null, pending = 0;
  async function until(cond, ctx) { while (!cond()) { if (document.hidden) SK.advance(0.05); await new Promise(r => setTimeout(r, 30)); } }
  function reset() {
    if (!SK || !SK.S.ready) return;
    SK.clearRound(); SK.setFever(false, 2); music();
    $.card.hidden = true; $.big.hidden = true; $.small.hidden = true; $.mid.hidden = true;
    setDrops(10, 10, false);
    SK.Reels.reach = 0; SK.Reels.flash = 0; SK.Reels.r.forEach(r => { r.v = 0; r.tw = null; });
    stageEl.classList.remove('sk-on-fever'); $.bg.classList.remove('night');
  }
  async function tease(ctx) {
    const sp = ctx.fast() ? 2.4 : 1, r = SK.rect('seal');
    if (r) { stageEl.style.setProperty('--tx', (r.x + r.w / 2) + 'px'); stageEl.style.setProperty('--ty', (r.y + r.h / 2) + 'px'); }
    stageEl.classList.add('sk-tease'); Snd.hold(0.15); Snd.play('taiko_roll', { vol: 0.9, jitter: 0 });
    for (let i = 0; i < 3; i++) {
      await ctx.sleep(520 / sp);
      SK.Reels.flash = 1; SK.S.shake = 0.4 + i * 0.25; Snd.play('taiko_' + (1 + i), { vol: 0.8 + i * 0.07, jitter: 0 });
      for (let k = 0; k < 4 + i * 2; k++) SK.fx('splash/' + 'acf'[k % 3], 50 + Math.cos(k * 1.3) * (14 + i * 6), 52 + Math.sin(k * 1.3) * (10 + i * 5), 1.2 + i * 0.3, { life: 0.8, color: 0xc9a24a, opacity: 0.9, order: 66, delay: k * 0.03 });
    }
    await ctx.sleep(380 / sp);
    Snd.play('gong', { vol: 0.95, jitter: 0 }); SK.S.shake = 1; Snd.hold(1);
    stageEl.classList.remove('sk-tease');
  }
  let reelQ = 0;
  // a drop in the seal stamps a mark; two marks: the seal holds its breath; three: it opens
  function markSeal(n) {
    if (!n) return;
    dragonState(n >= 3 ? 'rise' : n === 2 ? 'wake' : 'stir');
    SK.Reels.setMarks(Math.min(3, n)); SK.S.shake = Math.max(SK.S.shake, 0.35 + n * 0.12);
    Snd.play('stamp', { vol: 0.75 + n * 0.08, jitter: 0 }); Snd.play(KOTO[Math.min(6, 1 + n * 2)], { vol: 0.6, jitter: 0 });
    if (n === 2) { SK.Reels.reach = 1; Snd.play('reach', { vol: 0.75, jitter: 0 }); SK.Koi.react('look', { x: SK.W2(50), y: SK.H2(45) }); }
    if (n >= 3) { SK.Reels.reach = 0; SK.Reels.flash = 1; Snd.play('gong', { vol: 0.9, jitter: 0 }); SK.wash(50, 50, 46, 1); SK.Koi.react('win'); }
  }
  // KOI SPRING: the seal opens and the school swims out of it, one koi after another, each carrying its prize
  // (the first KOI SPRING: a school swimming out; replaced by the waterfall climb below, 2026-11-28)
  async function koiSchool(sp, ctx, base) {
    const fast = ctx.fast() ? 2.2 : 1, sr = SK.rect('seal'), st = stageEl.getBoundingClientRect();
    await tease(ctx);
    SK.Reels.open = 1; SK.Reels.flash = 1; SK.S.shake = 1; SK.Koi.react('big', { dur: 2 });
    for (let k = 0; k < 10; k++) SK.fx('splash/' + 'acf'[k % 3], 50 + Math.cos(k * 0.63) * 22, 52 + Math.sin(k * 0.63) * 16, 1.7, { life: 1, color: k % 3 ? 0xc8372d : 0xc9a24a, opacity: 0.9, order: 66, delay: k * 0.03 });
    await card('spring', '<span class="sk-cardword">' + sp.koi.length + ' KOI SWIM OUT</span>', 1500, ctx);
    $.fbLabel.textContent = 'KOI SPRING'; $.fbIco.src = 'assets/koi/ink.webp'; $.fbar.classList.add('spring'); $.fbar.hidden = false;
    let acc = 0; fbarSet({ m: 1, n: sp.koi.length, w: Math.min(ctx.units(base), ctx.winUnits) });
    const cx = sr ? sr.x + sr.w / 2 : st.width / 2, cy = sr ? sr.y + sr.h / 2 : st.height * 0.4;
    for (let i = 0; i < sp.koi.length; i++) {
      const v = sp.koi[i];
      swimKoi(cx, cy, i, sp.koi.length, false, 3400 / fast);
      for (let d = 0; d < (stageEl.clientWidth < stageEl.clientHeight ? 1 : 2); d++) setTimeout(() => swimKoi(cx, cy, Math.random() * sp.koi.length, sp.koi.length, false, 3800 / fast, true), (120 + d * 160) / fast);   // the school around the prize koi
      plusFrom(cx, cy - (sr ? sr.h * 0.3 : 30), ctx.units(v), v >= 100);
      acc += v; fbarSet({ n: sp.koi.length - i - 1, w: Math.min(ctx.units(base + acc), ctx.winUnits) }); $.fbar.classList.remove('tick'); void $.fbar.offsetWidth; $.fbar.classList.add('tick');
      Snd.play(KOTO[Math.min(6, i)], { vol: 0.55, jitter: 0 }); Snd.play('launch_1', { vol: 0.35, rate: 1.3 });
      SK.Reels.flash = 0.5; if (SK.Pond) SK.Pond.react('win');
      await ctx.sleep((v >= 100 ? 560 : 400) / fast);
    }
    await ctx.sleep(500 / fast);
    if (sp.gold) {
      // the golden koi: a great golden fish leaps out of the seal; it multiplies the spring, or starts KOI FEVER
      SK.S.shake = 1; Snd.play('taiko_roll', { vol: 0.9, jitter: 0 }); Snd.hold(0.2);
      const big = swimKoi(cx, cy, 0, 1, true, 2200 / fast);
      await ctx.sleep(900 / fast);
      Snd.play('gong', { vol: 1, jitter: 0 }); Snd.hold(1); goldRain(stageEl.clientWidth < stageEl.clientHeight ? 16 : 30); SK.feverWash();
      if (sp.m > 1) {
        fbarSet({ m: sp.m, w: Math.min(ctx.units(base + sp.w), ctx.winUnits) });
        const x = api.h('div', { class: 'sk-goldx' }); x.innerHTML = digitsHtml('x' + sp.m, 'gold'); Object.assign(x.style, { left: cx + 'px', top: (cy - (sr ? sr.h : 80)) + 'px' }); $.hud.append(x); setTimeout(() => x.remove(), 1900);
        Snd.play('win_end_2', { vol: 0.9, jitter: 0 });
      }
      await ctx.sleep(1300 / fast); big.remove();
    }
    $.fbar.hidden = true; $.fbar.classList.remove('spring'); $.fbLabel.textContent = 'KOI FEVER'; $.fbIco.src = 'assets/drops/gold.webp';
    SK.Reels.open = 0; SK.Reels.setMarks(0);
  }
  // KOI SPRING, the waterfall (math v2's spring, shown as a game of its own): the seal opens onto a great waterfall; the koi
  // climbs it ledge by ledge, each ledge a bigger prize (2x .. 50x). Every jump is a held breath - it crouches, the drums
  // build, sometimes it slips and pushes on. Where the book's prize stops, its next jump fails and it falls back into the
  // pool. The golden koi (or the top ledge) breaks through the Dragon Gate and becomes the golden dragon: x2..x10 or KOI FEVER.
  // KOI SPRING (math v4): a climb with three lives and pearls. Ledge 0 is the sure 2x. Every surge either clears the next
  // ledge (the lives refill, a pearl there is taken: +1 or x2 to the multiplier, or the dragon pearl) or the current wins
  // and a life breaks; no lives, or the top ledge: the climb ends. Prize = ledge x multiplier (x the dragon, if woken).
  const RUNGS = [200, 210, 230, 250, 280, 320, 360, 420, 500, 650, 850, 1200, 2000, 5000];
  const RUNG_Y = RUNGS.map((v, i) => 0.82 - i * (0.82 - 0.2) / (RUNGS.length - 1));
  const fmtX = v => String(v / 100).replace(/\.0+$/, '').replace(/(\.\d)0$/, '$1');
  function buildFalls() {
    if ($.wf) return;
    const h = api.h;
    $.wf = h('div', { class: 'sk-wf', hidden: true },
      $.wfVeil = h('i', { class: 'sk-wfveil' }),
      $.wfPanel = h('div', { class: 'sk-wfpanel' },
        $.wfVid = h('video', { class: 'sk-wfvid', muted: true, loop: true, playsinline: true, preload: 'none', disablepictureinpicture: true, poster: 'assets/spring/waterfall.webp' }),
        $.wfSleep = h('img', { class: 'sk-wfsleep', src: 'assets/spring/dragon-sleep.webp', alt: '' }),
        $.wfRungs = h('div', { class: 'sk-wfrungs' }),
        $.wfPearls = h('div', { class: 'sk-wfpearls' }),
        $.wfKoi = h('div', { class: 'sk-wfkoi' },
          $.wfSwim = h('video', { class: 'swim', muted: true, loop: true, playsinline: true, preload: 'auto', disablepictureinpicture: true }),
          $.wfKoiV = h('video', { class: 'leap', muted: true, playsinline: true, preload: 'none', disablepictureinpicture: true })),
        $.wfDragon = h('img', { class: 'sk-wfdragon', alt: '' }),
        $.wfWake = h('video', { class: 'sk-wfwake', muted: true, playsinline: true, preload: 'auto', disablepictureinpicture: true }),
        $.wfInk = h('div', { class: 'sk-wfink' }),
        $.wfLives = h('div', { class: 'sk-wflives', 'aria-label': 'Lives' }, [0, 1, 2].map(() => h('img', { src: 'assets/koi/color.webp', alt: '' }))),
        $.wfMult = h('div', { class: 'sk-wfmult' }),
        $.wfPrize = h('div', { class: 'sk-wfprize' })));
    for (const v of [$.wfVid, $.wfKoiV, $.wfSwim, $.wfWake]) { v.muted = true; v.defaultMuted = true; }
    RUNGS.forEach((v, i) => { const t = h('div', { class: 'sk-wfrung', style: `top:${(RUNG_Y[i] * 100).toFixed(1)}%` }); t.innerHTML = digitsHtml(fmtX(v) + 'x', i >= 11 ? 'gold' : 'ink'); $.wfRungs.append(t); });
    stageEl.insertBefore($.wf, $.big);
  }
  async function koiSpring(sp, ctx, base) {
    buildFalls();
    const top = RUNGS.length - 1, dragonTaken = !!sp.gold;
    let fast = ctx.fast() ? 2 : 1, tap = false;
    const unKey = () => {};   // standard 1.5: the climb is not hurried by taps or the spin button; only TURBO
    const wait = ms => ctx.sleep(ms / fast);
    const sw = $.wfSwim, play = v => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    const weak = !!SK.S.weak;
    if (!sw.dataset.src) { sw.dataset.src = '1'; sw.src = 'assets/koi/struggle-v.mp4'; try { sw.load(); } catch (e) { /* ignore */ } }
    if (dragonTaken && !weak && !$.wfWake.dataset.src) { $.wfWake.dataset.src = '1'; $.wfWake.src = 'assets/spring/dragon-wake.mp4'; try { $.wfWake.load(); } catch (e) { /* ignore */ } }
    const warm = v => { try { const p = v.play(); if (p && p.then) p.then(() => v.pause()).catch(() => {}); } catch (e) { /* ignore */ } };
    if (!weak) { if (!$.wfVid.dataset.src) { $.wfVid.dataset.src = '1'; $.wfVid.src = 'assets/spring/waterfall.mp4'; } warm($.wfVid); }
    warm(sw); if (dragonTaken && !weak) warm($.wfWake);
    // the seal bursts, the screen goes to the falls
    if (!sp.bought) {
      await tease(ctx);
      SK.Reels.open = 1; SK.Reels.flash = 1; SK.S.shake = 1; SK.Koi.react('big', { dur: 2 });
      for (let k = 0; k < 10; k++) SK.fx('splash/' + 'acf'[k % 3], 50 + Math.cos(k * 0.63) * 22, 52 + Math.sin(k * 0.63) * 16, 1.7, { life: 1, color: k % 3 ? 0xc8372d : 0xc9a24a, opacity: 0.9, order: 66, delay: k * 0.03 });
    }
    await card('spring', '<span class="sk-cardword">THREE LIVES · TAKE THE PEARLS</span>', 1400, ctx);
    const b = SK.rect('board'), st = stageEl.getBoundingClientRect(), pw = Math.min(st.height * 0.94 * 2 / 3, st.width * 0.96);
    Object.assign($.wfPanel.style, { width: pw + 'px', height: pw * 1.5 + 'px', left: (b ? b.x + b.w / 2 : st.width / 2) + 'px' });
    $.wf.hidden = false; $.wf.className = 'sk-wf in';
    $.wfSleep.className = 'sk-wfsleep'; $.wfWake.className = 'sk-wfwake'; $.wfDragon.className = 'sk-wfdragon';
    if (!weak) play($.wfVid);
    Snd.play('taiko_roll', { vol: 0.7, jitter: 0 });
    // the pearls on the falls: the player sees them before the climb begins
    $.wfPearls.innerHTML = '';
    const pearlEls = {};
    for (const p of sp.pearls) {
      const el = api.h('div', { class: 'sk-wfpearl ' + (p.k === 'dragon' ? 'dragon' : p.k === 'x2' ? 'x2' : 'plus'), style: `top:${(RUNG_Y[p.l] * 100).toFixed(1)}%` });
      el.innerHTML = p.k === 'dragon' ? '<img src="assets/spring/dragon-thumb.webp" alt="">' : '<img src="assets/drops/gold.webp" alt=""><span>' + digitsHtml(p.k === 'x2' ? 'x2' : '+1', 'gold') + '</span>';
      $.wfPearls.append(el); pearlEls[p.l] = el;
    }
    const rungEls = [...$.wfRungs.children], livesEls = [...$.wfLives.children];
    const setRung = i => rungEls.forEach((el, k) => { el.classList.toggle('done', k < i); el.classList.toggle('now', k === i); });
    let M = 1, L = 0, lives = 3;
    const setLives = n => livesEls.forEach((el, k) => { el.classList.toggle('lost', k >= n); el.classList.toggle('last', n === 1 && k === 0); });
    const setMult = () => { $.wfMult.innerHTML = digitsHtml('x' + M, 'gold'); $.wfMult.classList.remove('tick'); void $.wfMult.offsetWidth; $.wfMult.classList.add('tick'); };
    const prize = units => { setDigits($.wfPrize, api.money(units), 'gold'); $.wfPrize.classList.remove('tick'); void $.wfPrize.offsetWidth; $.wfPrize.classList.add('tick'); };
    const yOf = i => (i < 0 ? 0.92 : RUNG_Y[i]) * 100;
    sw.playbackRate = 1.1; play(sw);
    $.wfKoi.style.top = yOf(0) + '%'; $.wfKoi.className = 'sk-wfkoi hold';
    setLives(3); setMult(); setRung(0); prize(ctx.units(base + RUNGS[0]));
    await wait(900);
    // one surge: a clear climb onto the next ledge, or the current wins at the lip and throws the koi back down
    const surge = async (from, to, win) => {
      sw.playbackRate = 2.4 * Math.min(2, fast); $.wfKoi.className = 'sk-wfkoi surge';
      Snd.play('launch_1', { vol: 0.45, rate: 0.75 });
      const dur = (win ? 950 : 1250) / fast;
      const lip = from + (to - from) * 0.86;
      const kf = win ? [{ top: from + '%' }, { top: (to - 1.2) + '%', offset: 0.8 }, { top: to + '%' }]
        : [{ top: from + '%' }, { top: lip + '%', offset: 0.5 }, { top: (lip + 0.6) + '%', offset: 0.62 }, { top: (from + 1.5) + '%', offset: 0.9 }, { top: from + '%' }];
      if (!win) setTimeout(() => { $.wfKoi.classList.add('swept'); Snd.play('cup_empty', { vol: 0.8 }); const k = $.wfKoi.getBoundingClientRect(); FX.burst(k.left + k.width / 2, k.top + k.height * 0.2, 10, { kinds: ['sa#d9aa3c', 'sf#c8372d'], speed: 0.7 }); }, dur * 0.6);
      const a = $.wfKoi.animate(kf, { duration: dur, easing: 'cubic-bezier(.35,.1,.3,1)', fill: 'forwards' });
      await a.finished; $.wfKoi.style.top = (win ? to : from) + '%'; a.cancel();
      sw.playbackRate = 1.1; $.wfKoi.className = 'sk-wfkoi hold';
    };
    for (const step of sp.path) {
      // the breath before each try: longer and louder on the last life and higher up
      Snd.play('reach', { vol: 0.4 + L * 0.03 + (lives === 1 ? 0.25 : 0), jitter: 0, rate: 0.9 + L * 0.025 });
      await wait(320 + Math.min(600, L * 45) + (lives === 1 && !tap ? 450 : 0));
      const from = yOf(L), to = yOf(Math.min(top, L + 1));
      if (step === 1) {
        await surge(from, to, true);
        L++; lives = 3; setLives(3); setRung(L); splashAt(to);
        Snd.play('stamp', { vol: 0.8, jitter: 0 }); Snd.play(KOTO[Math.min(6, Math.floor(L / 2))], { vol: 0.65, jitter: 0 }); SK.S.shake = Math.max(SK.S.shake, 0.25 + L * 0.03);
        { const k = $.wfKoi.getBoundingClientRect(); FX.burst(k.left + k.width / 2, k.top + k.height * 0.3, 12 + L * 3, { up: true, speed: 0.9 }); }
        const pearl = sp.pearls.find(p => p.l === L);
        if (pearl) {
          const el = pearlEls[L]; if (el) el.classList.add('taken');
          if (pearl.k === 'dragon') { $.wfSleep.classList.add('stir', 'wake'); Snd.play('roar', { vol: 0.7, rate: 0.9, jitter: 0 }); FX.boom('255,200,90'); }
          else { M = pearl.k === 'x2' ? M * 2 : M + 1; setMult(); Snd.play('bell_' + (pearl.k === 'x2' ? 4 : 2), { vol: 0.9, jitter: 0 }); const r = (el || $.wfMult).getBoundingClientRect(); FX.burst(r.left + r.width / 2, r.top + r.height / 2, 24, { speed: 1 }); FX.ring(r.left + r.width / 2, r.top + r.height / 2, 8, r.width * 3); }
        }
        prize(ctx.units(base + RUNGS[L] * M));
        if (L >= 8) Snd.play('taiko_' + (1 + (L % 3)), { vol: 0.7, jitter: 0 });
      } else {
        await surge(from, to, false);
        lives--; setLives(lives); splashAt(from); SK.S.shake = 0.45;
        Snd.play('taiko_3', { vol: 0.6, rate: 0.8, jitter: 0 });
        if (lives === 1) { $.wfLives.classList.add('lastlife'); Snd.play('reach', { vol: 0.8, rate: 0.7, jitter: 0 }); }
        if (lives === 0) { $.wfLives.classList.remove('lastlife'); $.wfKoi.classList.add('swept'); await wait(700); }
      }
    }
    $.wfLives.classList.remove('lastlife');
    if (dragonTaken) {
      // the dragon pearl was taken: the koi turns gold, surges up through the gate, and the dragon wakes and rises
      Snd.hold(0.2); Snd.play('taiko_roll', { vol: 1, jitter: 0 });
      $.wfKoi.className = 'sk-wfkoi hold gold'; $.wfSleep.classList.add('stir', 'wake'); Snd.play('reach', { vol: 0.9, jitter: 0, rate: 1.2 }); await wait(900);
      sw.playbackRate = 3 * Math.min(2, fast); $.wfKoi.className = 'sk-wfkoi surge gold';
      const a = $.wfKoi.animate([{ top: yOf(L) + '%' }, { top: '8%', opacity: 1, offset: 0.8 }, { top: '4%', opacity: 0 }], { duration: 1300 / fast, easing: 'cubic-bezier(.3,.6,.4,1)', fill: 'forwards' });
      await a.finished; a.cancel(); sw.pause(); $.wfKoi.className = 'sk-wfkoi gone';
      { const p = $.wfPanel.getBoundingClientRect(); FX.boom(); FX.ring(p.left + p.width / 2, p.top + p.height * 0.2, 30, Math.max(innerWidth, innerHeight) * 0.8); FX.burst(p.left + p.width / 2, p.top + p.height * 0.2, 160, { speed: 1.7 }); FX.fountain(3000, 60, { storm: true }); FX.koiAcross(5, true); }
      $.wf.classList.add('gate'); Snd.play('gong', { vol: 1, jitter: 0 }); Snd.hold(1); SK.S.shake = 1;
      $.wfSleep.className = 'sk-wfsleep gone';
      if (weak) { $.wfDragon.src = 'assets/spring/dragon.webp'; $.wfDragon.className = 'sk-wfdragon rise'; }
      else { try { $.wfWake.currentTime = 0; } catch (e) { /* ignore */ } $.wfWake.playbackRate = Math.min(2, fast); $.wfWake.className = 'sk-wfwake on'; play($.wfWake); }
      setTimeout(() => { Snd.play('roar', { vol: 1, jitter: 0 }); Snd.play('taiko_roll', { vol: 1, jitter: 0 }); SK.S.shake = 1; }, 1300 / fast);
      await wait(3600);
      if (sp.m > 1) {
        prize(ctx.units(base + sp.w));
        const x = api.h('div', { class: 'sk-goldx' }); x.innerHTML = digitsHtml('x' + sp.m, 'gold');
        Object.assign(x.style, { left: '50%', top: '42%' }); $.wfPanel.append(x); setTimeout(() => x.remove(), 1900);
        Snd.play('win_end_2', { vol: 0.95, jitter: 0 });
        await wait(1500);
      } else if (sp.gold === 'fever') {
        const x = api.h('div', { class: 'sk-goldx word' }); x.textContent = 'KOI FEVER'; Object.assign(x.style, { left: '50%', top: '42%' }); $.wfPanel.append(x); setTimeout(() => x.remove(), 1700);
        await wait(1400);
      } else await wait(600);
    } else await wait(500);
    // back to the scroll
    $.wf.className = 'sk-wf out'; await ctx.sleep(380);
    $.wf.hidden = true; $.wf.className = 'sk-wf'; $.wfVid.pause(); sw.pause(); $.wfWake.pause(); $.wfWake.className = 'sk-wfwake'; $.wfDragon.className = 'sk-wfdragon';
    unKey();
    SK.Reels.open = 0; SK.Reels.setMarks(0);
  }
  // white water thrown up where the koi lands or falls
  function splashAt(topPct) {
    for (let k = 0; k < 5; k++) {
      const im = api.h('img', { src: 'assets/splash/' + 'acf'[k % 3] + '.webp', alt: '', class: 'sk-wfsplash' });
      im.style.top = topPct + '%'; im.style.left = (50 + (k - 2) * 6) + '%'; im.style.setProperty('--r', Math.round(Math.random() * 360) + 'deg');
      $.wfInk.append(im); setTimeout(() => im.remove(), 900);
    }
  }
  // one koi of the school: out of the seal, a curve across the screen to the side (the koi scroll on a wide screen), and away
  function swimKoi(x0, y0, i, n, golden, dur, small) {
    const W = stageEl.clientWidth, H = stageEl.clientHeight, wide = W > H;
    const el = api.h('img', { src: 'assets/koi/' + (golden ? 'color' : 'ink') + '.webp', alt: '', class: 'sk-swimkoi' + (golden ? ' golden' : '') });
    $.hud.append(el);
    const side = golden ? 0 : small ? (Math.random() < 0.5 ? 1 : -1) : (Math.floor(i) % 2 ? 1 : -1), spread = (i / Math.max(1, n - 1) - 0.5);
    const x1 = golden ? W / 2 : wide ? (side < 0 ? W * (0.1 + Math.random() * 0.12) : W * (0.82 + Math.random() * 0.1)) : W * (0.5 + side * 0.32), y1 = golden ? H * 0.34 : wide ? H * (0.35 + spread * 0.4) : H * (0.18 + Math.random() * 0.1);
    const x2 = golden ? W / 2 : x1 + side * W * 0.25, y2 = golden ? H * 0.3 : -H * 0.2;
    const ang = (dx, dy) => Math.atan2(dy, Math.abs(dx) || 1) * 180 / Math.PI;
    const flip = (golden ? 1 : side) < 0 ? -1 : 1, s = golden ? 1 : small ? 0.32 + Math.random() * 0.14 : 0.62 + Math.random() * 0.18;
    const tf = (x, y, a, k) => `translate(${x.toFixed(0)}px,${y.toFixed(0)}px) translate(-50%,-50%) rotate(${(a * flip).toFixed(0)}deg) scale(${(k * flip).toFixed(2)},${k.toFixed(2)})`;
    const kf = golden
      ? [{ transform: tf(x0, y0, -30, 0.2), opacity: 0 }, { transform: tf(x0, y0 - H * 0.15, -40, 0.9), opacity: 1, offset: 0.35 }, { transform: tf(x1, y1, 0, 1.15), opacity: 1, offset: 0.6 }, { transform: tf(x2, y2, 8, 1.1), opacity: 1, offset: 0.85 }, { transform: tf(x2, y2 - H * 0.05, 0, 1.2), opacity: 0 }]
      : [{ transform: tf(x0, y0, ang(x1 - x0, y1 - y0), 0.2), opacity: 0 }, { transform: tf(x0 + (x1 - x0) * 0.3, y0 + (y1 - y0) * 0.3, ang(x1 - x0, y1 - y0), s), opacity: 1, offset: 0.2 }, { transform: tf(x1, y1, ang(x2 - x1, y2 - y1), s), opacity: 1, offset: 0.65 }, { transform: tf(x2, y2, ang(x2 - x1, y2 - y1), s), opacity: 0.9 }];
    el.animate(kf, { duration: dur, easing: 'cubic-bezier(.35,.1,.4,1)', fill: 'forwards' });
    if (!golden) setTimeout(() => el.remove(), dur + 50);
    return el;
  }
  // a prize rising out of the seal
  function plusFrom(x, y, units, big) {
    const el = api.h('div', { class: 'sk-plus' + (big ? ' big' : '') }); setDigits(el, api.money(units), 'gold');
    Object.assign(el.style, { left: x + 'px', top: y + 'px' }); $.hud.append(el); setTimeout(() => el.remove(), big ? 1700 : 1100);
  }
  async function spinReels(r, fever, ctx) {
    const R = SK.Reels, quick = reelQ > 1 && !fever, sp = () => ctx.speed() * (quick ? 0.5 : 1);
    R.reach = 0; R.spinAll(26);
    let ticking = true;
    (async () => { while (ticking) { Snd.play('reel_tick', { vol: 0.3, gap: 0.05 }); await new Promise(res => setTimeout(res, 75)); } })();
    await ctx.sleep(quick ? 160 : 380);
    await R.stopAt(0, r[0], 0.38 * sp()); Snd.play('reel_stop_1', { vol: 0.7 });
    await ctx.sleep(120);
    await R.stopAt(1, r[1], 0.38 * sp()); Snd.play('reel_stop_2', { vol: 0.7 });
    if (r[0] === r[1] && !quick) {
      R.reach = 1; Snd.play('reach', { vol: 0.75, jitter: 0 }); SK.Koi.react('look', { x: SK.W2(50), y: SK.H2(45) });
      R.r[2].v = 9; await ctx.sleep(fever ? 1150 : 800);
      await R.stopAt(2, r[2], 0.8 * sp());
    } else { await ctx.sleep(80); await R.stopAt(2, r[2], 0.38 * sp()); }
    ticking = false; Snd.play('reel_stop_3', { vol: 0.8 });
    R.reach = 0;
    if (fever) { R.flash = 1; SK.S.shake = 1; Snd.play('stamp', { vol: 0.9 }); SK.feverWash(); }
    reelQ = Math.max(0, reelQ - 1);
  }
  async function play(events, ctx) {
    reset(); C = ctx; skipNow = false; setInkFor(ctx.mode); bestCup = -1; reelQ = 0;
    let total = 0;
    SK.Reels.setMarks(0); clearInkEvent(); dragonState(null);
    const iev = events.find(e => e.type === 'event');
    inkEvent(iev, ctx);   // alongside the first drops: a round with an event is not longer; the gold cup is set before a drop can land
    const drop = events.find(e => e.type === 'drop');
    const celebrates = ctx.winX >= ctx.cost && ctx.winX > 0;
    const showTotal = () => { if (!celebrates) ctx.setWin(Math.min(ctx.units(total), ctx.winUnits), true); };   // never past the round's (capped) result; a celebrated win is counted by its celebration
    if (drop) {
      setDrops(drop.n, drop.n, false);
      let left = drop.n;
      for (const e of events) {
        if (e.type !== 'ball') continue;
        pending++; left--; setDrops(left, drop.n, false);
        Snd.play('launch_' + (1 + (left % 2)), { vol: 0.42, pan: 0.5 });
        const golden = !!(iev && iev.kind === 'golddrop' && iev.i === e.i);
        if (golden) { Snd.play('bell_2', { vol: 0.8, jitter: 0 }); $.drops.classList.remove('golden'); }
        const bl = SK.launch(e.k, golden, {
          pin: p => Snd.play('pin_' + (1 + ((Math.random() * 5) | 0)), { vol: 0.18 + Math.random() * 0.08, gap: 0.035, pan: pan(p.x), rate: 0.92 + (141 - p.y) / 700 }),
          land: () => {
            pending--;
            const k = e.k, tier = TIER[k];
            SK.landFx(k, tier, golden);
            if (e.w > 0) { const cr = SK.rect({ cup: k }); if (cr) frenzyCup(cr.x, cr.y, e.w / 100 / (ctx.cost || 1), golden || (iev && iev.kind === 'goldcup' && iev.k === k)); }
            if (golden && e.w > 0) { plusAt(k, ctx.units(e.w), true); Snd.play('taiko_1', { vol: 0.8, jitter: 0 }); SK.S.shake = Math.max(SK.S.shake, 0.6); }
            else if (iev && iev.kind === 'goldcup' && iev.k === k && e.w > 0) { plusAt(k, ctx.units(e.w), true); Snd.play('bell_3', { vol: 0.8, jitter: 0 }); SK.landFx(k, 4, true); }
            Snd.play(tier ? 'cup_' + (1 + ((Math.random() * 4) | 0)) : 'cup_empty', { vol: 0.6, pan: pan(NB.pocketX(k)) });
            if (tier >= 1) Snd.play(KOTO[Math.min(6, tier * 2 - 1 + (Math.random() < 0.5 ? 0 : 1))], { vol: 0.32 + tier * 0.12, pan: pan(NB.pocketX(k)), jitter: 0 });
            if (tier >= 3) SK.Koi.react('win');
            if (e.w > 0) { total += e.w; showTotal(); if (tier >= 2 && !celebrates) flyToWin(k, tier); if (bestCup < 0 || TIER[k] >= TIER[bestCup]) bestCup = k; }
          },
          near: () => { Snd.play('reel_tick', { vol: 0.5, rate: 0.8 }); SK.Koi.react('look', { x: SK.W2(50), y: SK.H2(80) }); },
          gate: () => {
            pending--;
            SK.gateFx(false); Snd.play('gate', { vol: 0.8 });
            markSeal(e.mark || 0);
          }
        });
        if (golden && bl && bl.mesh) bl.mesh.scale.setScalar(1.8);
        await ctx.sleep(rand(62, 78));
      }
      await until(() => pending === 0, ctx);
    }
    const spr = events.find(e => e.type === 'spring');
    if (spr) { spr.bought = /spring/.test(ctx.mode || ''); await koiSpring(spr, ctx, total); total += spr.w; }
    const fev = events.find(e => e.type === 'fever');
    let feature = false;
    if (fev) {
      feature = true;
      const startTotal = total;
      SK.setFever(true, fev.m); stageEl.classList.add('sk-on-fever'); $.bg.classList.add('night'); music();
      Snd.play('taiko_roll', { vol: 0.8 }); SK.S.shake = 1;
      fbarSet({ m: fev.m, n: fev.n, w: Math.min(ctx.units(total), ctx.winUnits) });   // the bar's flag reads KOI FEVER from the card on
      await card('fever', '<span class="sk-cardword">' + (fev.src === 'gold' ? 'THE GOLDEN KOI · ' : '') + fev.n + ' GOLDEN DROPS</span>' + digitsHtml('x' + fev.m, 'gold'), 1700, ctx, true);
      let n = fev.n, used = 0;
      if (SK.Pond) SK.Pond.addGold();
      $.fbar.hidden = false; fbarSet({ m: fev.m, n: fev.n, w: Math.min(ctx.units(total), ctx.winUnits) });
      setDrops(n, n, true);
      for (const e of events) {
        if (e.type !== 'fball') continue;
        if (ctx.capped && ctx.units(total) >= ctx.winUnits) break;      // the cap is reached: the result cannot change any more
        pending++; used++; setDrops(n - used, n, true);
        if (n - used === 0 && !events.slice(events.indexOf(e) + 1).some(x => x.type === 'fball')) { Snd.hold(0.25); Snd.play('taiko_roll', { vol: 1, jitter: 0 }); eventBanner('LAST DROP', '', 'gold', ctx); SK.S.shake = 0.6; await ctx.sleep(900); Snd.hold(1); }
        Snd.play('launch_1', { vol: 0.5, rate: 1.2, pan: 0.5 });
        const b = SK.launch(e.k, true, {
          pin: p => Snd.play('pin_' + (1 + ((Math.random() * 5) | 0)), { vol: 0.2, gap: 0.035, pan: pan(p.x), rate: 1.1 }),
          land: () => {
            pending--;
            const k = e.k, tier = Math.min(4, TIER[k] + 1);
            SK.landFx(k, tier, true); if (e.w > 0) { const cr = SK.rect({ cup: k }); if (cr) frenzyCup(cr.x, cr.y, e.w / 100 / (ctx.cost || 1), true); } Snd.play('cup_' + (1 + ((Math.random() * 4) | 0)), { vol: 0.7, pan: pan(NB.pocketX(k)) });
            Snd.play(KOTO[Math.min(6, tier + 2)], { vol: 0.5, pan: pan(NB.pocketX(k)), jitter: 0 });
            if (tier >= 4) { SK.Koi.react('win'); Snd.play('taiko_2', { vol: 0.7 }); }
            if (e.w > 0) plusAt(k, ctx.units(e.w), e.w / 100 >= 2 * ctx.cost);
            if (e.w / 100 >= 2 * ctx.cost) { SK.S.shake = 0.8; Snd.play('taiko_1', { vol: 0.85, jitter: 0 }); Snd.play('stamp', { vol: 0.7 }); SK.Koi.react('big', { dur: 1.6 }); SK.wash(NB.pocketX(k), 125, 40, 1.1); }
            total += e.w; showTotal(); fbarSet({ w: Math.min(ctx.units(total), ctx.winUnits) }); $.fbar.classList.remove('tick'); void $.fbar.offsetWidth; $.fbar.classList.add('tick');
          },
          gate: () => {
            pending--;
            SK.gateFx(true); Snd.play('bell_' + Math.min(4, Math.max(1, e.m - 1)), { vol: 0.8, jitter: 0 }); Snd.play('gate', { vol: 0.6 });
            n += e.add; SK.setFever(true, e.m); SK.Reels.flash = 0.7; SK.S.shake = 0.6; fbarSet({ m: e.m }); SK.feverWash(); if (SK.Pond) SK.Pond.addGold(); setDrops(n - used, n, true);
          }
        });
        await until(() => b.passed, ctx);
        await ctx.sleep(120);
      }
      await until(() => pending === 0, ctx);
      if (ctx.capped) { SK.S.shake = 1; Snd.play('gong', { vol: 0.9 }); }
      const fe = events.find(e => e.type === 'fend');
      await ctx.sleep(250);
      Snd.play('win_end_2', { vol: 0.8 });
      $.fbar.hidden = true;
      await card('feverwin', digitsHtml(ctx.winMoney(Math.min(ctx.units(total), ctx.winUnits)), 'gold'), 1700, ctx);
    }
    // the celebration: named tiers from 5x of what the round cost; a smaller win over the cost gets a short count
    const units = ctx.winUnits, x = ctx.winX, idx = tierOf(x, ctx.cost);
    if (idx >= 0 || (ctx.capped && x > 0)) await bigWin(ctx, Math.max(0, idx), units, x, ctx.capped);
    else if (x >= 2 * scaleOf(ctx.cost) && x >= ctx.cost) await midWin(ctx, units);
    else if (x >= ctx.cost && x > 0) await smallWin(ctx, units);
    else if (x === 0) SK.Koi.react('lose');
    // after KOI FEVER the room goes back to evening and the calm music returns
    clearInkEvent(); dragonState(null);
    if (feature) { $.fbar.hidden = true; if (SK.Pond) SK.Pond.clearGold(); SK.setFever(false, 2); stageEl.classList.remove('sk-on-fever'); $.bg.classList.remove('night'); music(); setDrops(10, 10, false); }
    if (!leapOn) setTimeout(() => (window.requestIdleCallback || setTimeout)(() => { loadLeap(); Snd.later(); }), 9000);   // well after the first round: the first load stays light
    return { feature };
  }

  /* =====================================================================
   *  Rules
   * ===================================================================== */
  const RULES = `
    <h3>How to play</h3>
    <p>Press the ink circle to play. Ten <b>ink drops</b> fall from the top right of the scroll, each worth a tenth of the play amount. Every drop bounces down through the bamboo pegs and lands in one of the 11 cups along the bottom, or drops into the <b>red seal</b> under its three marks. Each drop wins the value written over its cup × the drop. The round wins the total of all ten drops.</p>
    <table><thead><tr><th>Cup (from the edge in)</th><th>Ink drop wins</th><th>× the play amount</th></tr></thead><tbody>
      <tr><td>Gold (outer)</td><td>34× the drop</td><td>3.4×</td></tr>
      <tr><td>Red with gold rim</td><td>4.2× the drop</td><td>0.42×</td></tr>
      <tr><td>Red</td><td>0.8× the drop</td><td>0.08×</td></tr>
      <tr><td>Indigo</td><td>0.3× the drop</td><td>0.03×</td></tr>
      <tr><td>Black</td><td>0.2× the drop</td><td>0.02×</td></tr>
      <tr><td>Clay (centre)</td><td>0</td><td>0</td></tr>
      <tr><td>Red seal</td><td>a mark on the seal</td><td>—</td></tr>
    </tbody></table>
    <h3>Calm ink or wild ink</h3>
    <p>Before you play, choose the ink with the switch beside the scroll. Both cost the same and return the same on average (96.30%); the wild ink only spreads the wins further apart. <b>CALM INK</b> uses the table above. <b>WILD INK</b> uses steeper cups: the outer gold cups are worth more than twice as much, and the three cups in the middle are worth nothing. The red seal, KOI SPRING, the golden koi and KOI FEVER work the same in both inks.</p>
    <table><thead><tr><th>Cup (from the edge in)</th><th>Wild ink drop wins</th><th>× the play amount</th></tr></thead><tbody>
      <tr><td>Gold (outer)</td><td>76× the drop</td><td>7.6×</td></tr>
      <tr><td>Red with gold rim</td><td>6.8× the drop</td><td>0.68×</td></tr>
      <tr><td>Red</td><td>0.9× the drop</td><td>0.09×</td></tr>
      <tr><td>Black</td><td>0.1× the drop</td><td>0.01×</td></tr>
      <tr><td>The three clay cups in the middle</td><td>0</td><td>0</td></tr>
      <tr><td>Red seal</td><td>a mark on the seal</td><td>—</td></tr>
    </tbody></table>
    <h3>Ink events</h3>
    <p>About one play in three starts with an <b>ink event</b>, shown before the drops fall (at most one in a play):</p>
    <ul><li><b>GOLD CUP</b> (about 1 play in 6): the koi turns one cup gold. Every drop in that cup wins its value ×2, ×3 or ×5, as written on the cup.</li>
    <li><b>GOLDEN DROP</b> (about 1 in 9): one of the ten drops is golden. In a cup it wins the cup's value ×10; in the red seal it stamps two marks.</li>
    <li><b>HUNGRY SEAL</b> (about 1 in 14): the seal pulls the ink, and drops find it far more often in that play.</li></ul>
    <h3>The red seal and KOI SPRING</h3>
    <p>A drop that falls into the red seal wins nothing by itself: it stamps one of the seal's <b>three marks</b>. The marks are cleared at the start of every round. When the third mark is stamped in the same round, the seal opens after the last ink drop: <b>KOI SPRING</b>. The koi climbs a great waterfall, ledge by ledge: 2×, 2.5×, 3×, 4×, 5×, 7.5×, 10×, 15×, 25× and 50× the play amount. It always climbs past the three small ledges to the 2× ledge, so a KOI SPRING wins at least <b>2×</b>; where its climb ends is decided by the round, and it wins the ledge it reached. The seal opens about once in 7 rounds.</p>
    <h3>The golden koi</h3>
    <p>The golden dragon sleeps above the scroll. Sometimes the <b>dragon pearl</b> lies on the falls: if the koi reaches its ledge, at the end of the climb the koi turns golden and leaps through the <b>Dragon Gate</b>, and the dragon wakes: it multiplies the KOI SPRING prize by ×2, ×3, ×5 or ×10, or starts <b>KOI FEVER</b> after the spring. The dragon wakes about once in 70 plays.<b>Dragon Gate</b> at the top of the falls, and the dragon wakes: it either multiplies the KOI SPRING prize by ×2, ×3, ×5 or ×10, or starts <b>KOI FEVER</b> after the spring. The dragon wakes about once in 50 plays; KOI FEVER starts this way about once in 400 plays. </p>
    <h3>KOI FEVER</h3>
    <p>KOI FEVER drops <b>10 golden drops</b>, one after another. A golden drop is worth the whole play amount, and the cups show their golden values × the current multiplier, which starts at ×2.</p>
    <table><thead><tr><th>Cup (from the edge in)</th><th>Golden drop wins</th></tr></thead><tbody>
      <tr><td>Gold (outer)</td><td>140× the play amount × multiplier</td></tr>
      <tr><td>Red with gold rim</td><td>14× × multiplier</td></tr>
      <tr><td>Red</td><td>3.5× × multiplier</td></tr>
      <tr><td>Indigo</td><td>1.1× × multiplier</td></tr>
      <tr><td>Black</td><td>0.4× × multiplier</td></tr>
      <tr><td>Clay (centre)</td><td>0.15× × multiplier</td></tr>
      <tr><td>Red seal</td><td>multiplier +1 and +1 golden drop</td></tr>
    </tbody></table>
    <p>In wild ink the golden cups are: 240× (outer), 20×, 3.2×, 0.5×, 0.08×, and 0 in the centre, each × the play amount × the multiplier.</p>
    <p>A golden drop in the red seal wins nothing by itself, but raises the multiplier by 1 for every golden drop after it and adds one more golden drop. A KOI FEVER holds at most 40 golden drops; at 40, the seal still raises the multiplier but adds no drop. The next golden drop falls once the one before it has passed the seal, so every multiplier step happens in order.</p>
    <h3>KOI FEVER at once</h3>
    <p>The <b>KOI FEVER</b> stamp beside the scroll starts KOI FEVER at once with 10 golden drops at ×2, in the ink you have chosen (it reads <b>WILD FEVER</b> in wild ink). It is played for 40× the play amount and asks you to confirm first.</p>
    <table><thead><tr><th>Mode</th><th>Price</th><th>Return (RTP)</th><th>Largest win</th></tr></thead><tbody>
      <tr><td>CALM INK</td><td>1× the play amount</td><td>96.30%</td><td>5,000×</td></tr>
      <tr><td>WILD INK</td><td>1× the play amount</td><td>96.30%</td><td>5,000×</td></tr>
      <tr><td>KOI FEVER</td><td>40× the play amount</td><td>96.30%</td><td>5,000×</td></tr>
      <tr><td>WILD FEVER</td><td>40× the play amount</td><td>96.30%</td><td>5,000×</td></tr>
    </tbody></table>
    <h3>Named wins</h3>
    <p>A round that wins at least 5× what it cost is celebrated: INK SPLASH (5×), FULL BLOOM (10×), MASTERPIECE (15×) and DRAGON GATE (25×). A tap on the celebration moves it on; TURBO makes it shorter.</p>
    <h3>Win cap</h3>
    <p>A round wins at most <b>5,000×</b> the play amount. A round that reaches the cap ends there and wins the cap.</p>
    <p>Each drop's path is a real physics flight recorded by the game, chosen so that it ends where the round's result says. The result of every round is decided before the first drop falls; the path, the ink splashes and the order in which drops land are decoration only.</p>`;

  /* =====================================================================
   *  Boot
   * ===================================================================== */
  const PRELOAD = ['logo', 'bg/room-wide', 'bg/room-tall', 'board/painting', 'board/seal', 'board/rod', 'koi/ink', 'koi/color', 'enso/ink', 'enso/red', 'drops/ink', 'gate/cup', 'cups/gold', 'cups/clay'].map(k => 'assets/' + k + '.webp');
  LZ.boot({
    id: 'neon-koi', title: 'Sumi Koi', tagline: 'An ink scroll, ten drops, one red seal.', rtp: '96.30',
    shell: 2, layout: 'bar', celebrate: false, preload: PRELOAD,
    logo: '<img class="sk-logo" src="assets/logo.webp" alt="Sumi Koi">',
    modes: [
      { name: 'base', label: 'CALM', cost: 1, maxWin: 5000 },
      { name: 'wild', label: 'WILD', cost: 1, maxWin: 5000 },
      { name: 'fever', kind: 'feature', label: 'KOI FEVER', cost: 40, maxWin: 5000,
        blurb: 'Starts KOI FEVER in calm ink straight away: 10 golden drops at ×2.', confirmTitle: 'Start KOI FEVER?', confirmLabel: 'Start' },
      { name: 'spring', kind: 'feature', label: 'KOI SPRING', cost: 8, maxWin: 5000,
        blurb: 'Opens the red seal at once in calm ink: the koi climbs the waterfall, with the golden dragon more often.', confirmTitle: 'Open KOI SPRING?', confirmLabel: 'Open' },
      { name: 'wildspring', kind: 'feature', label: 'WILD SPRING', cost: 8, maxWin: 5000,
        blurb: 'Opens the red seal at once in wild ink: the koi climbs the waterfall, with the golden dragon more often.', confirmTitle: 'Open WILD SPRING?', confirmLabel: 'Open' },
      { name: 'wildfever', kind: 'feature', label: 'WILD FEVER', cost: 40, maxWin: 5000,
        blurb: 'Starts KOI FEVER in wild ink straight away: 10 golden drops at ×2, with the wild cups.', confirmTitle: 'Start WILD FEVER?', confirmLabel: 'Start' }
    ],
    modeGroupLabel: 'Ink',
    onMode(name) { setInkFor(name); },
    introCards: FEATS.map(f => ({ title: f.title, text: f.text })),
    featureName: 'KOI FEVER', statLabel: 'Fevers',
    playLabel: 'PLAY', busyLabel: 'PLAY',
    rules: RULES,
    async mount(stage, a) {
      api = a; stageEl = stage; SK = window.SK;
      stage.classList.add('sk-stage');
      buildHud(stage);
      // opened straight from disk: the offline demo pack (pictures, sizes, sounds) replaces what file:// cannot fetch
      if (location.protocol === 'file:' && !window.SK_IMG) await new Promise(res => { const sc = document.createElement('script'); sc.src = '../offline/sk-offline.js'; sc.onload = sc.onerror = res; document.head.append(sc); });
      if (window.SK_CSS) { const st = document.createElement('style'); st.textContent = window.SK_CSS; document.head.append(st); }   // file://: the masks inlined
      if (window.SK_FONT) { const st = document.createElement('style'); st.textContent = '@font-face{font-family:"Shippori Mincho B1";src:url(' + window.SK_FONT + ') format("woff2");font-weight:700}'; document.head.append(st); }
      if (window.SK_ART) ART = window.SK_ART;
      else try { ART = await fetch('assets/art.json').then(r => r.json()); } catch (e) { ART = {}; }
      if (!ART.digits_ink && window.SK_ART) ART = window.SK_ART;
      bar(); intro(); replayCard();
      Snd.load();
      try { await SK.build(stage, ART, { reduced: api.reduced }); if (pendingInk) SK.setInk(pendingInk); }
      catch (e) { stage.classList.add('sk-flat'); console.error(e); }
      const resize = () => { const r = stage.getBoundingClientRect(); if (SK.S.ready) { const a = document.getElementById('lzAction'), ar = a ? a.getBoundingClientRect() : null, pad = ar ? Math.max(0, r.bottom - ar.top + 2) : 0; SK.layout(Math.max(2, r.width | 0), Math.max(2, r.height | 0), pad); place(); fitUnderHud(r, pad); } };
      if ('ResizeObserver' in window) new ResizeObserver(resize).observe(stage); else window.addEventListener('resize', resize);
      // the buttons above the scroll grow when their pictures and font arrive: the board is fitted under them again
      if ('ResizeObserver' in window) { let q = 0; const ro = new ResizeObserver(() => { if (!q) q = requestAnimationFrame(() => { q = 0; resize(); }); }); [$.icons, $.modes, $.buy].forEach(el => { if (el) ro.observe(el); }); }
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);
      [500, 1500, 3000].forEach(ms => setTimeout(resize, ms));
      resize();
      { const orig = SK.Koi.react.bind(SK.Koi); SK.Koi.react = (k, o) => { orig(k, o); koiFilm(k, o); }; }
      SK.S.onFrame = () => { SK.S.rate = (SK.S.feverOn ? 2.0 : 2.35) / api.speed(); if (SK.Koi.mesh && !SK.S.videoKoi) { const k = SK.rect('koi'); if (k) Object.assign($.koi.style, { left: k.x + 'px', top: k.y + 'px', width: Math.max(1, k.w) + 'px', height: Math.max(1, k.h) + 'px' }); } };
      setDrops(10, 10, false);
    },
    reset,
    async play(events, ctx) { if (!SK.S.ready) return { feature: events.some(e => e.type === 'fever') }; return play(events, ctx); },
    onSound(on) { if (on) music(); },
    idle() { SK && SK.kick(); },
    onStart() { SK && SK.kick(); music(); place(); }
  });
})();
