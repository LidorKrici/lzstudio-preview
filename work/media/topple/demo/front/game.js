/* Topple front end: plugs the 3D stage (scene.js) into the LZ shell (lz-core.js).
 * The shell owns the wallet, controls, rules sheet and settlement. This file builds the HUD and plays back the events
 * of a round. Nothing here decides a result: which stones fall, which stay standing and every number come from the events. */
(() => {
  'use strict';
  const TR = window.TOPPLE_TRACKS || {}, MODES = window.TOPPLE_MODES || {};
  const TRACK_INFO = {
    long: { label: 'LONG RUN', note: 'Stones grow ×1.25' },
    base: { label: 'CLASSIC', note: 'Stones grow ×1.5' },
    giants: { label: 'GIANTS', note: 'Stones grow ×2' }
  };
  const WORLD_NAMES = ['', 'THE TABLE', 'THE ROOM', 'THE STREET', 'THE CITY', 'ABOVE THE CLOUDS'];
  let api, sc, el = {}, shown = null, busy = false, track = 'base', lastAmount = null, lastLevel = -1;

  // ---------- small helpers ----------
  const fmtV = v => { const x = v / 100; return (x >= 100 ? Math.round(x) : x >= 10 ? Math.round(x * 10) / 10 : Math.round(x * 100) / 100).toString(); };
  const maxWin = (name, d) => (MODES[name] && MODES[name].maxWin) || d, costOf = (name, d) => (MODES[name] && MODES[name].cost) || d;
  const inject = src => new Promise(res => { const s = document.createElement('script'); s.src = src; s.onload = () => res(true); s.onerror = () => res(false); document.head.append(s); });
  const levelFrac = () => { const s = document.getElementById('lzAmtSel'); return s && s.options.length > 1 ? s.selectedIndex / (s.options.length - 1) : 0.4; };
  function slotsFrom(d, betLabel, bonus) {
    const out = [{ kind: 'bet', world: d[0] ? d[0].w : 1, label: betLabel }];
    for (const s of d) {
      if (s.t === 'l') out.push({ kind: 'l', world: s.w, la: '+' + fmtV(s.a), lb: '+' + fmtV(s.b) });
      else if (s.t === 'm') out.push({ kind: 'm', world: s.w, x: s.x, label: '×' + s.x });
      else out.push({ kind: s.t, world: s.w, label: '+' + fmtV(s.v) });
    }
    return out;
  }

  // ---------- sound: recorded samples, pitched by the size of the stone; one loop for music and one for room tone ----------
  // The one music track in use. Only it is loaded; the other candidates in sounds.json stay out of the game and the upload
  // (tools/build.mjs and tools/build-offline-snd.mjs read this line).
  const MUSIC = 'music_casino_2';
  const Snd = (function () {
    let man = null, list = {}, bufs = {}, lastAt = {}, want = {}, live = {}, exc = 0.15;
    const fmt = (() => { try { return document.createElement('audio').canPlayType('audio/webm; codecs="opus"') ? 0 : 1; } catch (e) { return 0; } })();
    const pick = id => { const p = man && man.pools && man.pools[id]; return p ? p[(Math.random() * p.length) | 0] : id; };
    const loopy = id => list[id].group === 'music' || list[id].group === 'ambience';
    async function load() {
      try {
        const inline = window.TOPPLE_SND;
        man = inline ? inline.manifest : location.protocol === 'file:' ? null : await fetch('assets/snd/sounds.json').then(r => (r.ok ? r.json() : null));
        if (!man) return;
        list = man.sounds || man;
        const AC = window.AudioContext || window.webkitAudioContext, ctx = new AC();
        const ids = Object.keys(list).filter(k => list[k] && list[k].files && (list[k].group !== 'music' || k === MUSIC) && !/^amb_|^rumble_loop$/.test(k)).sort((a, b) => loopy(a) - loopy(b));   // short sounds first
        for (let i = 0; i < ids.length; i += 4) await Promise.all(ids.slice(i, i + 4).map(async id => {
          try {
            const ab = inline ? Uint8Array.from(atob(inline.data[id]), c => c.charCodeAt(0)).buffer : await fetch('assets/snd/' + (list[id].files[fmt] || list[id].files[0])).then(r => r.arrayBuffer());
            bufs[id] = await ctx.decodeAudioData(ab); if (loopy(id)) sync();
          } catch (e) { /* a missing sound is simply silent */ }
        }));
        ctx.close();
      } catch (e) { man = null; }
    }
    function play(id, o) {
      o = o || {}; const s = api.sound, ctx = s.ctx(); if (!ctx || !man) return;
      const buf = bufs[pick(id)]; if (!buf) return;
      const now = ctx.currentTime; if (o.gap && lastAt[id] && now - lastAt[id] < o.gap) return; lastAt[id] = now;
      const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = buf; src.playbackRate.value = (o.rate || 1) * (1 + (Math.random() - 0.5) * (o.jitter == null ? 0.06 : o.jitter));
      g.gain.value = o.vol == null ? 0.8 : o.vol; src.connect(g);
      if (o.pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = o.pan; g.connect(p); p.connect(s.out); } else g.connect(s.out);
      src.start(now + (o.delay || 0)); if (o.duck) duck(o.duck);
    }
    // Loops change by crossfade. Music runs through a low-pass that opens as the round heats up, and ducks under big hits.
    function sync() {
      const s = api && api.sound, ctx = s && s.ctx(); if (!ctx) return;
      for (const key of ['music', 'amb']) {
        const w = want[key]; let cur = live[key];
        if (cur && cur.src.context !== ctx) cur = live[key] = null;
        if (cur && (!w || cur.id !== w.id)) { cur.g.gain.cancelScheduledValues(ctx.currentTime); cur.g.gain.setTargetAtTime(0, ctx.currentTime, 0.25); const src = cur.src; setTimeout(() => { try { src.stop(); } catch (e) { /* already stopped */ } }, 1600); cur = live[key] = null; }
        if (w && !cur && bufs[w.id]) {
          const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = bufs[w.id]; src.loop = true; g.gain.value = 0; g.gain.setTargetAtTime(w.vol, ctx.currentTime + (key === 'music' ? 0.4 : 0), 0.5);
          let f = null; if (key === 'music') { f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 2400 + exc * exc * 15600; src.connect(f); f.connect(g); } else src.connect(g);
          g.connect(s.out); src.start(); live[key] = { id: w.id, src, g, f, vol: w.vol };
        } else if (w && cur && cur.vol !== w.vol) { cur.vol = w.vol; cur.g.gain.setTargetAtTime(w.vol, ctx.currentTime, 0.4); }
      }
    }
    function loop(key, id, vol) { want[key] = id ? { id, vol } : null; sync(); }
    function excite(x) { exc = Math.max(0, Math.min(1, x)); const s = api && api.sound, ctx = s && s.ctx(), m = live.music; if (ctx && m && m.f && m.src.context === ctx) m.f.frequency.setTargetAtTime(2400 + exc * exc * 15600, ctx.currentTime, 0.25); }
    function duck(depth) { const s = api && api.sound, ctx = s && s.ctx(), m = live.music; if (!ctx || !m || m.src.context !== ctx) return; const t = ctx.currentTime; m.g.gain.cancelScheduledValues(t); m.g.gain.setTargetAtTime(m.vol * depth, t, 0.01); m.g.gain.setTargetAtTime(m.vol, t + 0.35, 0.15); }
    function climb(id, vol, cents, dur) {
      const s = api.sound, ctx = s.ctx(); if (!ctx || !bufs[id]) return () => {};
      const src = ctx.createBufferSource(), g = ctx.createGain(), t = ctx.currentTime; src.buffer = bufs[id]; src.loop = true;
      src.playbackRate.setValueAtTime(1, t); src.playbackRate.linearRampToValueAtTime(Math.pow(2, cents / 1200), t + dur); g.gain.value = vol; src.connect(g); g.connect(s.out); src.start();
      return () => { try { g.gain.setTargetAtTime(0, ctx.currentTime, 0.03); setTimeout(() => { try { src.stop(); } catch (e) { /* stopped */ } }, 250); } catch (e) { /* closed */ } };
    }
    function hold(level) { const s = api && api.sound, ctx = s && s.ctx(), m = live.music; if (!ctx || !m || m.src.context !== ctx) return; m.g.gain.cancelScheduledValues(ctx.currentTime); m.g.gain.setTargetAtTime(m.vol * level, ctx.currentTime, level < 1 ? 0.08 : 0.6); }
    return { load, play, loop, excite, duck, sync, climb, hold };
  })();
  const AMB = ['', 'amb_room', 'amb_room', 'amb_street', 'amb_city', 'amb_sky'];
  const CENTS = [400, 800, 1200, 2000, 2400, 2400], DUR = [2.4, 3.4, 4.4, 5.6, 7, 8];
  function lettersOf(text) { return text.split('').map((ch, i) => '<span class="tp-l" style="--i:' + i + '">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>').join(''); }
  // A named win: the camera rises over the chain, gold runs along it, the title tips in like dominoes and climbs
  // through the tiers while the amount counts up, gold dominoes rain, and a shockwave ends it. Tap once to finish the
  // count, tap again to close. TURBO shortens every part.
  async function bigWin(ctx, label, idx, units, x, capped) {
    const box = api.$('lzBig'), lab = api.$('lzBigLabel'), amt = api.$('lzBigAmt'), sp = ctx.fast() ? 2.3 : 1, dur = DUR[idx] / sp, k = Math.pow(ctx.cost, 0.588);
    const tiers = capped ? TIERS.concat([{ x: Infinity, label: 'MAX WIN' }]) : TIERS;
    let shownTier = -1;
    const setTier = (i, quiet) => { if (i === shownTier) return; shownTier = i; lab.innerHTML = lettersOf(i >= TIERS.length ? 'MAX WIN' : tiers[i].label); box.dataset.tier = String(i); if (!quiet) { Snd.play('mult_' + Math.min(5, i + 1), { vol: 0.85, jitter: 0 }); box.classList.remove('up'); void box.offsetWidth; box.classList.add('up'); } };
    box.hidden = false; box.classList.remove('pulse', 'slam', 'up'); box.style.setProperty('--grow', '1'); setTier(0, true); amt.textContent = api.money(0);
    sc.celebrate({ big: true, dur }); Snd.hold(0.08); Snd.play('bonus_in', { vol: 0.55, jitter: 0 });
    const stop = Snd.climb('count_tick_loop', 0.5, CENTS[idx], dur);
    let tap = 0; const onTap = () => { tap++; }; box.style.pointerEvents = 'auto'; box.addEventListener('pointerdown', onTap);
    const t0 = performance.now();
    await new Promise(res => { (function step() {
      const t = tap || api.reduced ? 1 : Math.min(1, (performance.now() - t0) / 1000 / dur), e = t < 1 ? 1 - Math.pow(1 - t, 2.2) : 1, u = Math.round(units * e), xc = x * e;
      amt.textContent = t >= 1 ? api.winMoney(units) : api.money(u);
      let ti = 0; for (let i = 0; i < TIERS.length; i++) if (xc / k >= TIERS[i].x && i <= idx) ti = i; if (capped && t >= 1) ti = TIERS.length;
      setTier(Math.min(ti, idx), false);
      box.style.setProperty('--grow', String(1 + 0.3 * Math.sqrt(Math.min(1, xc / k / 50)) * e));
      if (t > 0.65 && !box.classList.contains('pulse')) box.classList.add('pulse');
      if (t < 1) requestAnimationFrame(step); else res();
    })(); });
    stop(); sc.finale(); box.classList.remove('pulse'); box.classList.add('slam');
    Snd.play(idx >= 2 ? 'win_end_high' : 'win_end_over', { vol: 0.95, jitter: 0 }); Snd.play('slam_huge', { rate: 1.1, vol: 0.6 });
    const t1 = performance.now(), before = tap; await new Promise(res => { (function hold() { if (tap > before || performance.now() - t1 > 1700 / sp) res(); else setTimeout(hold, 40); })(); });
    sc.release(); Snd.hold(1); box.classList.add('out'); await ctx.sleep(380);
    box.hidden = true; box.classList.remove('out', 'slam', 'up'); box.style.pointerEvents = ''; box.removeEventListener('pointerdown', onTap);
  }
  // Win names: thresholds are in x of the play amount for the 1x tracks; a feature mode needs more (x / cost^0.588), so a
  // win is only named when it is big for what the round was played for.
  const TIERS = [{ x: 5, label: 'KNOCKOUT' }, { x: 15, label: 'CHAIN REACTION' }, { x: 30, label: 'LANDSLIDE' }, { x: 100, label: 'AVALANCHE' }, { x: 1000, label: 'EARTHQUAKE' }];
  async function bigWinOld(ctx, label, idx, units) {
    const box = api.$('lzBig'), amt = api.$('lzBigAmt'); api.$('lzBigLabel').textContent = label; box.dataset.tier = String(idx); box.hidden = false;
    box.style.animation = 'none'; void box.offsetWidth; box.style.animation = '';
    const dur = (1200 + idx * 700) / (ctx.fast() ? 2.3 : 1), t0 = performance.now(); let skipped = false;
    Snd.play(idx >= 2 ? 'win_end_high' : 'win_end_over', { vol: 0.9, jitter: 0, duck: 0.3 });
    const skip = () => { skipped = true; }; box.style.pointerEvents = 'auto'; box.addEventListener('pointerdown', skip);
    await new Promise(res => { (function step() { const t = skipped || api.reduced ? 1 : Math.min(1, (performance.now() - t0) / dur); amt.textContent = t >= 1 ? api.winMoney(units) : api.money(Math.round(units * (1 - Math.pow(1 - t, 3)))); if (t < 1) setTimeout(step, 30); else res(); })(); });
    await ctx.sleep(skipped ? 450 : 1300); box.hidden = true; box.style.pointerEvents = ''; box.removeEventListener('pointerdown', skip);
  }

  // ---------- HUD ----------
  function buildHud(stage) {
    const h = api.h;
    el.canvas = h('canvas', { class: 'tp-canvas' });
    el.world = h('div', { class: 'tp-world' }, h('b', { text: WORLD_NAMES[1] }));
    el.strip = h('div', { class: 'tp-strip', 'aria-hidden': 'true' });
    el.potV = h('b', { class: 'tp-pot-v', text: '0.00' }); el.potX = h('i', { class: 'tp-pot-x', text: '' });
    el.pot = h('div', { class: 'tp-pot' }, h('span', { class: 'tp-lbl', text: 'Pot' }), el.potV, el.potX);
    el.push = h('div', { class: 'tp-tok tp-push', title: 'Extra pushes' }); el.gold = h('div', { class: 'tp-tok tp-gold', title: 'Gold stones' });
    el.side = h('div', { class: 'tp-side' }, el.push, el.gold);
    el.banner = h('div', { class: 'tp-banner', hidden: true }, h('small'), h('b'));
    el.fly = h('div', { class: 'tp-fly', 'aria-hidden': 'true' });
    el.note = h('div', { class: 'tp-note', hidden: true });
    stage.append(el.canvas, h('div', { class: 'tp-hud' }, h('div', { class: 'tp-top' }, el.world, el.strip), el.pot, el.side, el.fly, el.banner, el.note));
    arrangeBar(stage);
    const fit = () => { const r = stage.getBoundingClientRect(); stage.style.setProperty('--u', (r.height > r.width ? r.width / 58 : Math.min(r.width, r.height * 1.7) / 100) + 'px'); if (sc) sc.resize(); };
    if ('ResizeObserver' in window) new ResizeObserver(fit).observe(stage); else addEventListener('resize', fit);
    fit();
  }
  // House bar layout: icons, balance and win on the left; amount, speed and the round main button on the right.
  // The shell's own elements are moved, not rebuilt, so every id, listener and state it manages keeps working.
  function arrangeBar(stage) {
    const $ = api.$, h = api.h, panel = $('lzPanel'), field = $('lzField'), step = field.querySelector('.lz-stepper');
    panel.prepend(h('div', { class: 'tp-b-left' }, $('lzInfo'), $('lzSound')), $('lzWallet'));
    const min = $('lzMin'), max = $('lzMax'); min.classList.add('tp-edge'); max.classList.add('tp-edge'); step.prepend(min); step.append(max);
    const dock = h('div', { class: 'tp-dock' }); if ($('lzModes')) dock.append($('lzModes')); else dock.append(h('span'));
    if ($('lzFeats')) dock.append($('lzFeats'));
    stage.append(dock);
  }
  const GLYPH = { m: '×', g: '<svg viewBox="0 0 20 20"><path d="M10 1.5l2.5 5.4 5.9.7-4.4 4 1.2 5.9L10 14.6l-5.2 2.9L6 11.6 1.6 7.6l5.9-.7z"/></svg>', p: '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="6.5"/></svg>', s: '<svg viewBox="0 0 20 20"><path d="M10 18V11L4 3M10 11l6-8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>' };
  function drawStrip(slots) {
    el.strip.replaceChildren(...slots.slice(1).map((s, k) => {
      const c = api.h('i', { class: 'w' + s.world + (s.kind !== 'v' && s.kind !== 'l' ? ' k-' + s.kind : '') + (s.kind === 'm' ? ' x' + s.x : '') + (k && slots[k].world !== s.world ? ' edge' : '') });
      if (s.kind === 'm') c.textContent = s.x; else if (GLYPH[s.kind]) c.innerHTML = GLYPH[s.kind];
      return c;
    }));
  }
  const cell = slot => el.strip.children[slot - 1];
  function tokens(box, n, max, cls) { box.replaceChildren(...Array.from({ length: max }, (_, i) => api.h('i', { class: (i < n ? 'on ' : '') + cls }))); box.classList.toggle('show', n > 0 || box.dataset.keep === '1'); }
  function fly(text, slot, lane, cls) {
    const p = sc.project(slot, lane, 1.12); if (!p.visible) return;
    const d = api.h('span', { class: 'tp-pop ' + (cls || ''), text }), a = el.fly.getBoundingClientRect(), b = el.pot.getBoundingClientRect();
    d.style.left = p.x + 'px'; d.style.top = p.y + 'px';
    d.style.setProperty('--dx', (b.left + b.width * 0.55 - a.left - p.x) + 'px'); d.style.setProperty('--dy', (b.top + b.height * 0.62 - a.top - p.y) + 'px');
    el.fly.append(d); setTimeout(() => d.remove(), 1100);
  }
  function banner(small, big, ms) {
    el.banner.children[0].textContent = small || ''; el.banner.children[1].textContent = big; el.banner.hidden = false;
    el.banner.style.animation = 'none'; void el.banner.offsetWidth; el.banner.style.animation = '';
    clearTimeout(banner.t); banner.t = setTimeout(() => { el.banner.hidden = true; }, ms || 1500);
  }
  function setPot(units, x, bump) {
    el.potV.textContent = api.winMoney(units); el.potX.textContent = x > 0 ? api.fmtX(x) : '';
    if (bump) { el.pot.classList.remove('bump', 'mult'); void el.pot.offsetWidth; el.pot.classList.add(bump); }
  }
  function setWorld(w, announce) { el.world.children[0].textContent = shown && shown.bonus ? shown.title : WORLD_NAMES[w] || ''; el.world.dataset.w = w; if (announce && !api.reduced) banner('You reached', WORLD_NAMES[w], 1300); }

  // ---------- rows ----------
  function showRow(desc) {
    shown = desc; sc.setRow(desc); drawStrip(desc.slots);
    tokens(el.push, desc.pushes || 0, Math.max(3, desc.pushes || 0), 'ball'); tokens(el.gold, 0, 3, 'star');
    setWorld(desc.slots[1] ? desc.slots[1].world : 1, false);
  }
  // Before the first round (and after changing track or play amount): the plain row of the chosen track.
  function attract() {
    const t = TR[track] || TR.base; if (!t || !sc) return;
    lastAmount = api.amount; lastLevel = levelFrac();
    showRow({ growth: t.growth, bonus: false, attract: true, betScale: 0.82 + 0.4 * lastLevel, slots: slotsFrom(t.w.map((w, k) => ({ t: 'v', v: t.v[k], w })), api.money(api.amount)) });
    setPot(0, 0);
  }

  // ---------- one round ----------
  async function play(events, ctx) {
    busy = true; el.note.hidden = true; Snd.sync(); Snd.excite(0.3);
    const speed = () => (ctx.fast() ? 2.3 : 1);
    let cur = null, basePot = 0, pot = 0, hadBonus = false, golds = 0, fell = 0, deepest = 1;
    const total = () => basePot + pot, show = bump => { const u = ctx.units(total()); setPot(u, total() / 100, bump); ctx.setWin(u, true); };
    const keyOf = (i, l) => i + ':' + (l === 0 || l === 1 ? l : -1);
    const onCollect = st => {
      const list = cur.by.get(keyOf(st.slot, st.lane)); if (st.slot > 0) { const c = cell(st.slot); if (c) c.classList.add('down'); }
      if (!list) return;
      for (const e of list) {
        if (e.type === 'fall') { pot += e.v; fell++; deepest = Math.max(deepest, st.world); fly('+' + fmtV(e.v), st.slot, st.lane); show('bump'); Snd.excite(0.3 + fell / 16); }
        else if (e.type === 'mult') { pot = e.pot; fly('×' + e.x, st.slot, st.lane, 'big'); show('mult'); Snd.play('mult_' + (e.x >= 20 ? 5 : e.x >= 10 ? 4 : e.x >= 5 ? 3 : e.x >= 3 ? 2 : 1), { vol: 0.9, jitter: 0, duck: 0.45 }); }
        else if (e.type === 'gold') { golds = e.n; tokens(el.gold, golds, 3, 'star'); Snd.play('gold_' + Math.min(3, golds), { vol: 0.9, jitter: 0, duck: 0.45 }); }
        else if (e.type === 'bank') { cur.pushes = e.n; tokens(el.push, e.n, Math.max(3, e.n), 'ball'); fly('+1 push', st.slot, st.lane, 'tok'); Snd.play('bank_ting', { vol: 0.7 }); }
        else if (e.type === 'split') { Snd.play('split', { vol: 0.8, jitter: 0 }); }
      }
    };
    const flush = async () => {
      if (!cur) return;
      sc.setRate(speed());
      if (cur.strike) { const s = cur.strike; cur.strike = null; Snd.play('ball_swing', { vol: 0.5 }); await sc.strike(s.slot, s.lane); }
      const stops = cur.stops; cur.stops = [];
      await sc.run(stops, onCollect);
      for (const s of stops) { const c = cell(s.slot); if (c) c.classList.add('stand'); cur.standing.push(s); }
    };
    const begin = async (desc, strike) => {
      sc.fadeOut(); await ctx.sleep(140);
      showRow(desc); cur = { by: new Map(), stops: [], standing: [], strike, pushes: desc.pushes || 0 };
      sc.fadeIn(); await ctx.sleep(desc.bonus ? 500 : 260);
    };
    const add = e => { const k = keyOf(e.i, e.l); if (!cur.by.has(k)) cur.by.set(k, []); cur.by.get(k).push(e); };

    for (const e of events) {
      if (e.type === 'row') { track = e.track || track; await begin({ growth: e.growth, bonus: false, betScale: 0.82 + 0.4 * levelFrac(), slots: slotsFrom(e.d, ctx.money(ctx.amount)) }, { slot: 0 }); setPot(0, 0); }
      else if (e.type === 'bonus') {
        await flush(); hadBonus = true; basePot += pot; pot = 0;
        const title = e.kind === 'skyline' ? 'SKYLINE' : 'GOLDEN RUN';
        Snd.play('bonus_in', { vol: 1, jitter: 0, duck: 0.25 }); banner(e.pushes + ' pushes', title, 2000 / speed()); await ctx.sleep(1500);
        await begin({ growth: e.growth, bonus: true, title, pushes: e.pushes, betScale: 1, slots: slotsFrom(e.d, title === 'SKYLINE' ? 'SKY' : 'GOLD', true) }, null);
        el.push.dataset.keep = '1'; tokens(el.push, e.pushes, Math.max(3, e.pushes), 'ball');
      }
      else if (e.type === 'stop') cur.stops.push({ slot: e.i, lane: e.l });
      else if (e.type === 'push') {
        await flush();
        const cands = cur.standing.filter(s => s.slot === e.i), t = cands.find(s => s.lane === 0) || cands[0] || { slot: e.i };
        cur.standing = cur.standing.filter(s => s !== t); const c = cell(e.i); if (c) c.classList.remove('stand');
        cur.strike = { slot: t.slot, lane: t.lane }; cur.pushes = e.left; tokens(el.push, e.left, Math.max(3, e.left), 'ball');
        if (e.i > 0) { await ctx.sleep(260); }
      }
      else if (e.type === 'end') {
        await flush(); if (e.pot != null) pot = e.pot; if (e.total != null) { basePot = e.total - pot; } show();
        if (hadBonus && cur && shown && shown.bonus) { banner(shown.title + ' collected', ctx.money(ctx.units(pot)), 1900 / speed()); Snd.play(pot >= 100 * ctx.cost ? 'win_end_over' : 'win_end_low', { vol: 0.8, jitter: 0 }); await ctx.sleep(1500); }
      }
      else if (e.type === 'final') { /* settled by the shell */ }
      else if (cur && e.i != null) add(e);
    }
    await flush(); sc.setRate(1); el.push.dataset.keep = '';
    const x = total() / 100;
    const tier = TIERS.filter(t => x / Math.pow(ctx.cost, 0.588) >= t.x).pop();
    if (x > 0 && x < ctx.cost) Snd.play('lose_soft', { vol: 0.35 });
    else if (x >= ctx.cost && !tier && !ctx.capped) { const sp = speed(); sc.celebrate({ big: false, dur: 1.0 / sp }); const stop = Snd.climb('count_tick_loop', 0.35, 400, 0.9 / sp); await ctx.sleep(900); stop(); Snd.play('win_end_low', { vol: 0.7, jitter: 0 }); sc.release(); }
    el.note.textContent = fell + (fell === 1 ? ' stone fell' : ' stones fell') + ' · ' + (hadBonus ? 'bonus played' : WORLD_NAMES[deepest].toLowerCase()); el.note.hidden = false;
    await ctx.sleep(x >= ctx.cost ? 500 : 280);
    if (x >= ctx.cost && (tier || ctx.capped)) await bigWin(ctx, '', ctx.capped ? TIERS.length : TIERS.indexOf(tier), ctx.units(total()), x, ctx.capped);
    Snd.excite(0.15); busy = false;
    return { feature: hadBonus };
  }


  // ---------- rules: every number here is read from the published books (tracks.js), never typed by hand ----------
  function rulesHtml() {
    const W = ['', 'The Table', 'The Room', 'The Street', 'The City', 'Above the Clouds'], num = n => (Math.round(n * 100) / 100).toLocaleString('en-US');
    const byWorld = (w, v) => { const out = []; w.forEach((x, k) => { const o = out[out.length - 1]; if (o && o.w === x) { o.to = k + 1; if (v[k] != null) o.v.push(v[k]); } else out.push({ w: x, from: k + 1, to: k + 1, v: v[k] != null ? [v[k]] : [] }); }); return out; };
    const ladder = (w, v) => '<table><thead><tr><th>World</th><th>Positions</th><th>Value of each stone (× the play amount)</th></tr></thead><tbody>' + byWorld(w, v).map(o => '<tr><td>' + W[o.w] + '</td><td>' + (o.from === o.to ? o.from : o.from + ' to ' + o.to) + '</td><td>' + o.v.map(x => '+' + fmtV(x)).join(', ') + '</td></tr>').join('') + '</tbody></table>';
    const tracks = ['base', 'long', 'giants'].filter(k => TR[k]), mults = [...new Set(tracks.flatMap(k => (MODES[k] && MODES[k].mults) || []))].sort((a, b) => a - b);
    const bonusOf = k => MODES[k] && MODES[k].bonus, anyBonus = tracks.map(bonusOf).find(Boolean);
    let h = '<h3>How to play</h3><p>Choose a track and press PUSH. A brass ball knocks over the first stone, which stands for your play. Every stone knocks over the next, bigger stone. Each stone that falls adds the value engraved on it to the pot. The chain ends when a stone wobbles and stays standing, or when the last stone of the row falls. The round wins the pot: the values shown are multiples of the play amount.</p>';
    h += '<p>The whole row, with all its special stones, is on the table before the push. The strip at the top of the stage shows every position of the row.</p>';
    h += '<h3>Tracks</h3><table><thead><tr><th>Track</th><th>Each stone is</th><th>Stones in the row</th><th>Most a round can win</th></tr></thead><tbody>' + tracks.map(k => '<tr><td>' + TRACK_INFO[k].label + '</td><td>×' + TR[k].growth + ' the one before</td><td>' + TR[k].w.length + '</td><td>' + num(maxWin(k, 0)) + '×</td></tr>').join('') + '</tbody></table>';
    h += '<p>Multiplier stones in Golden Runs and Skyline rounds are ' + [...new Set(['golden', 'skyline'].flatMap(k => (MODES[k] && MODES[k].bonusMults) || []))].sort((a, b) => a - b).map(x => '×' + x).join(', ') + '.</p>';
    h += '<p>All three tracks are played for the same play amount. A row passes through five worlds; the stones of each world are made of a different material.</p>';
    for (const k of tracks) h += '<h3>' + TRACK_INFO[k].label + ': values on the stones</h3>' + ladder(TR[k].w, TR[k].v);
    h += '<h3>Special stones</h3><table><thead><tr><th>Stone</th><th>What it does when it falls</th></tr></thead><tbody>';
    h += '<tr><td>Multiplier (' + mults.map(x => '×' + x).join(', ') + ')</td><td>Multiplies the pot collected so far. It adds no value of its own. Several can fall in one round.</td></tr>';
    h += '<tr><td>Split</td><td>Adds its value, then the chain splits into two lanes for the next 3 to 5 positions. Both lanes add to the same pot and each lane can stop on its own. The chain goes on after the split if at least one lane reached its end.</td></tr>';
    h += '<tr><td>Extra push</td><td>Adds its value and is kept, up to 3 at a time. When the chain stops, one kept push knocks over the standing stone and the chain goes on.</td></tr>';
    h += '<tr><td>Gold</td><td>Adds its value. Three gold stones that fall in one round start a Golden Run when the chain has ended.</td></tr></tbody></table>';
    if (anyBonus) {
      h += '<h3>Golden Run</h3><p>A Golden Run is a new golden row with ' + anyBonus.pushes + ' pushes. The first push starts the chain; every time the chain stops, the next push knocks over the standing stone, until no push is left. Extra push stones add pushes. Multiplier stones multiply the Golden Run pot. Golden rows have no gold stones and no split stones. The Golden Run pot is added to the pot of the round.</p>';
      for (const k of tracks) { const b = bonusOf(k); if (b) h += '<h3>Golden row on ' + TRACK_INFO[k].label + '</h3>' + ladder(b.w, b.v); }
    }
    const g = MODES.golden, s = MODES.skyline;
    h += '<h3>Feature modes</h3>';
    if (g) h += '<p><b>GOLDEN RUN</b> is played for ' + g.cost + '× the play amount. It starts a Golden Run at once' + (g.bonus ? ', with ' + g.bonus.pushes + ' pushes on a golden row of ' + g.bonus.w.length + ' stones that grow ×' + g.bonus.growth : '') + '. It can win up to ' + num(g.maxWin) + '× the play amount.</p>' + (g.bonus ? ladder(g.bonus.w, g.bonus.v) : '');
    if (s) h += '<p><b>SKYLINE</b> is played for ' + s.cost + '× the play amount. It starts at once' + (s.bonus ? ' on a row of ' + s.bonus.w.length + ' stones that begins in ' + W[s.bonus.w[0]] + ', with ' + s.bonus.pushes + ' pushes. One of its stones in positions 2 to 4 is always a multiplier. It plays like a Golden Run: every time the chain stops, the next push knocks over the standing stone, and extra push stones add pushes' : '') + '. It can win up to ' + num(s.maxWin) + '× the play amount.</p>' + (s.bonus ? ladder(s.bonus.w, s.bonus.v) : '');
    h += '<h3>Limits</h3><p>A round ends at once when the pot reaches the most that its mode can win. Wins below the play amount are shown without a celebration.</p>';
    return h;
  }

  // ---------- boot ----------
  const baseModes = Object.keys(TRACK_INFO).filter(k => TR[k] || !Object.keys(TR).length);
  LZ.boot({
    id: 'topple', title: 'Topple', tagline: 'Your play is the first stone. Every stone knocks down a bigger one.', rtp: '96.30', layout: 'bar',
    logo: '<span class="tp-logo">TOPPLE</span>',
    modes: [
      ...['base', 'long', 'giants'].filter(k => baseModes.indexOf(k) >= 0).map(k => ({ name: k, label: TRACK_INFO[k].label, note: TRACK_INFO[k].note, cost: 1, maxWin: maxWin(k, 5000) })),
      { name: 'golden', kind: 'feature', label: 'GOLDEN RUN', cost: costOf('golden', 25), maxWin: maxWin('golden', 5000), blurb: 'Starts a Golden Run at once: a golden row and three pushes.', confirmTitle: 'Start a Golden Run?', confirmLabel: 'Start' },
      { name: 'skyline', kind: 'feature', label: 'SKYLINE', cost: costOf('skyline', 100), maxWin: maxWin('skyline', 10000), blurb: 'Starts among the towers with five pushes and an early multiplier.', confirmTitle: 'Start a Skyline?', confirmLabel: 'Start' }
    ],
    modeGroupLabel: 'track', featureName: 'a Golden Run', statLabel: 'Golden Runs',
    playLabel: 'PUSH', busyLabel: 'ROLLING',
    winTiers: TIERS, celebrate: false,
    rules: rulesHtml(),
    introCards: [
      { art: '<img src="assets/ui/card-1.webp" alt="">', title: 'EVERY STONE IS BIGGER', text: 'Your play is the first stone. Each stone that falls adds to the pot.' },
      { art: '<img src="assets/ui/card-2.webp" alt="">', title: 'SPECIAL STONES', text: 'Multipliers, splits, extra pushes and gold wait along the row.' },
      { art: '<img src="assets/ui/card-3.webp" alt="">', title: 'GOLDEN RUN', text: 'Three gold stones open a golden row with three pushes.' }
    ],
    async mount(stage, a) {
      api = a; buildHud(stage);
      const rb = a.$('lzRulesBody');
      rb.innerHTML = rb.innerHTML.replace(/<b>PLAY<\/b>/g, '<b>PUSH</b> (the round brass button)').replace(/mode PLAY and/g, 'mode PUSH and')
        .replace('<li>The <b>speaker</b>', '<li>The <b>track</b> and feature buttons sit on the stage, under the stones; they step aside while a round plays.</li><li>A named win screen (KNOCKOUT and up) counts the win; tap it to finish the count at once.</li><li>The <b>speaker</b>');
      if (location.protocol === 'file:' && !window.TOPPLE_PACK) { (await inject('../offline/assets-inline.js')) || (await inject('../look/assets-inline.js')); }
      if (location.protocol === 'file:' && !window.TOPPLE_SND) await inject('../offline/snd-inline.js');
      let lists = {};
      if (!window.TOPPLE_PACK && !window.TOPPLE_ASSETS) { try { const m = await fetch('assets/manifest.json').then(r => r.json()); lists = { grounds: (m.ground || []).map(x => x.id), envs: (m.env || []).map(x => x.id), props: (m.props || []).map(x => x.id), moon: !!m.moon }; } catch (e) { /* the stage falls back to plain light */ } }
      try { await document.fonts.load('800 60px Cinzel'); } catch (e) { /* falls back to a serif */ }
      sc = window.ToppleScene(el.canvas, Object.assign({ reduced: a.reduced, font: 'Cinzel, Georgia, serif' }, lists));
      sc.onWorld = w => { setWorld(w, busy && !(shown && shown.bonus)); if (busy) Snd.play('world_up', { vol: 0.6 }); }; 
      sc.onHit = h => {
        const n = shown ? shown.slots.length : 20, rate = 1.25 * Math.pow(0.36, h.slot / n), fam = h.mat === 'ivory' || h.mat === 'pearl' ? 'clack_ivory' : h.mat === 'diamond' ? 'clack_glass' : h.mat === 'black' || /^m/.test(h.mat) ? 'clack_stone' : 'clack_metal';
        if (h.kind === 'hit') { Snd.play(fam, { rate, vol: 0.55 + 0.1 * h.world, gap: 0.03 }); if (h.world >= 3) Snd.play('thud_big', { rate: Math.max(0.5, rate * 1.4), vol: 0.5, gap: 0.05 }); }
        else if (h.kind === 'slam') Snd.play('slam_huge', { rate: 0.9, vol: 1, duck: 0.3 });
        else if (h.kind === 'wobble') Snd.play('wobble', { rate: Math.max(0.5, rate * 1.2), vol: 0.8 });
        else if (h.kind === 'strike') Snd.play('ball_hit', { rate: Math.max(0.55, rate), vol: 0.9 });
      };
      await sc.ready; sc.resize(); sc.start();
      Snd.load(); Snd.loop('music', MUSIC, 0.3);
      try { attract(); sc.warm(); } catch (e) { /* warm-up is an optimisation only */ }
      document.addEventListener('pointerdown', e => { if (e.target.closest && e.target.closest('button')) { Snd.sync(); Snd.play('ui_click', { vol: 0.5 }); } }, true);
      attract();
      setInterval(() => { if (!busy && shown && shown.attract && (api.amount !== lastAmount || levelFrac() !== lastLevel)) { attract(); Snd.play('bet_tick', { rate: 0.8 + 0.6 * lastLevel, vol: 0.5, jitter: 0 }); } }, 200);
    },
    play,
    reset() { busy = false; if (sc) { sc.setRate(1); sc.fadeIn(); attract(); } },
    idle() { busy = false; },
    onSound() { Snd.sync(); }, onStart() { Snd.sync(); },
    onMode(name) { if (TR[name]) { track = name; if (!busy && sc) attract(); } }
  });
})();
