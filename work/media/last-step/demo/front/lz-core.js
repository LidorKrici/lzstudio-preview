/* LZ Studio game shell for Stake Engine.
 * One copy of everything every game must get right: launch parameters, the RGS wallet flow, money display,
 * play amounts, modes, autoplay, replay, rules, sound switch, space bar, jurisdiction flags.
 * A game file calls LZ.boot({...}) with its own stage, playback and rules text.
 * The round result always comes from the RGS (/wallet/play) as a list of events; games only play them back. */
(() => {
  'use strict';

  /* ---------- Small helpers ---------- */
  const API = 1000000;                         // RGS money: 1,000,000 = 1.00
  const $ = id => document.getElementById(id);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v === false || v == null) continue;
      if (k === 'class') e.className = v; else if (k === 'html') e.innerHTML = v; else if (k === 'text') e.textContent = v;
      else e.setAttribute(k, v === true ? '' : String(v));
    }
    for (const k of kids.flat()) if (k != null) e.append(k);
    return e;
  }
  const ICON = {
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><path d="M12 7.5v.5"/></svg>',
    soundOn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
    soundOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  /* ---------- Launch parameters ---------- */
  const Q = new URLSearchParams(location.search);
  const qp = k => (Q.get(k) || '').trim();
  const P = {
    sessionID: qp('sessionID'), rgs: qp('rgs_url').replace(/^https?:\/\//, '').replace(/\/+$/, ''),
    lang: qp('lang') || 'en', currency: qp('currency').toUpperCase(), device: qp('device'),
    social: qp('social') === 'true', demo: qp('demo') === 'true',
    replay: qp('replay') === 'true', game: qp('game'), version: qp('version'), mode: qp('mode'),
    event: qp('event'), amount: Number(qp('amount'))
  };
  document.documentElement.lang = 'en';      // English is the only language; other codes fall back to it
  const host = location.hostname;
  const isLocalHost = host === 'localhost' || host === '127.0.0.1';
  const isTestHost = isLocalHost || location.protocol === 'file:' || /(^|\.)lz\.test$/.test(host);
  // Served by the local test server with no launch parameters: play against its mock RGS (the real math files).
  if (!P.replay && !P.sessionID && !P.rgs && isLocalHost) { P.sessionID = 'local-demo'; P.rgs = location.host; }
  // No session at all (opened from disk or a plain demo link): offline demo with play coins, drawn from a
  // sample of the real books (demo-books.js). The published build has no such file, so it shows an error instead.
  const LOCAL = !P.replay && !P.sessionID && !P.rgs;
  // QA only: ?lzspeed=N shortens every wait. Ignored anywhere but local files and test hosts.
  const HACK = isTestHost ? Math.max(1, Number(qp('lzspeed')) || 1) : 1;

  /* ---------- Currency display (Engine table) ---------- */
  const CUR = {
    USD: ['$', 2], CAD: ['CA$', 2], JPY: ['¥', 0], EUR: ['€', 2], RUB: ['₽', 2], CNY: ['CN¥', 2], PHP: ['₱', 2], INR: ['₹', 2],
    IDR: ['Rp', 0], KRW: ['₩', 0], BRL: ['R$', 2], MXN: ['MX$', 2], DKK: ['kr', 2, 1], PLN: ['zł', 2, 1], VND: ['₫', 0, 1],
    TRY: ['₺', 2], CLP: ['CLP', 0, 1], ARS: ['ARS', 2, 1], PEN: ['S/', 2], NGN: ['₦', 2], SAR: ['SAR', 2, 1], ILS: ['₪', 2],
    AED: ['AED', 2, 1], TWD: ['NT$', 2], NOK: ['kr', 2, 1], KWD: ['KD', 3], JOD: ['JD', 3], CRC: ['₡', 2], TND: ['TND', 3, 1],
    SGD: ['SG$', 2], MYR: ['RM', 2], OMR: ['OMR', 3, 1], QAR: ['QAR', 2, 1], BHD: ['BD', 3], PKR: ['₨', 2], EGP: ['EGP', 2, 1],
    NZD: ['NZ$', 2], BOB: ['Bs', 2], GHS: ['GH₵', 2], KES: ['KSh', 2], MAD: ['MAD', 2, 1], BAM: ['KM', 2], ISK: ['kr', 0, 1],
    TZS: ['TSh', 2], UGX: ['USh', 0], XOF: ['CFA', 0, 1], AUD: ['A$', 2], BWP: ['P', 2], GEL: ['₾', 2], HNL: ['L', 2],
    JMD: ['J$', 2], KGS: ['KGS', 2, 1], MZN: ['MZN', 2, 1], PGK: ['K', 2], TMT: ['TMT', 2, 1], TTD: ['TT$', 2], UAH: ['₴', 2],
    XCD: ['EC$', 2], APE: ['APE', 4, 1], BCH: ['BCH', 6, 1], BNB: ['BNB', 6, 1], BTC: ['BTC', 6, 1], BUSD: ['BUSD', 2, 1],
    CRO: ['CRO', 4, 1], DAI: ['DAI', 2, 1], DOGE: ['DOGE', 4, 1], EOS: ['EOS', 4, 1], ETH: ['ETH', 6, 1], LINK: ['LINK', 4, 1],
    LTC: ['LTC', 6, 1], POL: ['POL', 4, 1], SAND: ['SAND', 4, 1], SHIB: ['SHIB', 0, 1], SOL: ['SOL', 6, 1], TRUMP: ['TRUMP', 4, 1],
    TRX: ['TRX', 4, 1], UNI: ['UNI', 4, 1], USDC: ['USDC', 2, 1], USDT: ['USDT', 2, 1], XRP: ['XRP', 4, 1],
    XGC: ['GC', 2, 1], XSC: ['SC', 2, 1], XEC: ['SC', 2, 1], XRC: ['SC', 2, 1], WRW: ['SC', 2, 1]
  };
  let currency = P.currency || 'USD';
  const meta = () => {
    const m = CUR[currency];
    return m ? { sym: m[0], dec: m[1], after: !!m[2] } : { sym: currency || '', dec: 2, after: true };
  };
  const group = s => String(s).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  function numStr(units, dec) {
    const neg = units < 0, v = Math.abs(units) / API;
    const [i, f] = v.toFixed(dec).split('.');
    return (neg ? '-' : '') + group(i) + (f ? '.' + f : '');
  }
  function withSym(s) {
    const m = meta(), neg = s.startsWith('-'), v = neg ? s.slice(1) : s;
    return (neg ? '-' : '') + (m.after ? `${v} ${m.sym}` : `${m.sym}${v}`);
  }
  // Balance and play amounts: the currency's normal decimals.
  const money = units => withSym(numStr(units, meta().dec));
  // Wins: exact, so a tiny play amount still shows the precise win (up to 6 decimals).
  function winMoney(units) {
    let dec = meta().dec;
    while (dec < 6 && Math.round(Math.abs(units) / Math.pow(10, 6 - dec)) * Math.pow(10, 6 - dec) !== Math.abs(units)) dec++;
    return withSym(numStr(units, dec));
  }
  // A multiplier as text: 0.35x, 12.5x, 1,250x
  const fmtX = x => (x >= 100 ? group(x.toFixed(x % 1 ? 1 : 0)) : x >= 10 ? x.toFixed(x * 10 % 10 ? 2 : 1).replace(/(\.\d)0$/, '$1') : x.toFixed(2)) + '×';

  /* ---------- State ---------- */
  const S = {
    balance: 0, levels: [], amount: 0, minBet: 0, maxBet: 0, busy: false, ready: false,
    sound: true, interacted: false, fast: false, history: [], jur: {},
    sessionStart: Date.now(), net: 0, minRoundMs: 0, replayData: null, replayed: false,
    auto: null, stats: { rounds: 0, bestX: 0, bestUnits: 0, features: 0 },
    baseMode: null, costs: {}, resume: null, lastOutcome: null
  };
  let G = null;                                // the game config passed to boot()
  // Shell generation. shell: 2 (production standard 1.1, 2026-11-26) = the shell gives mechanism only: no browser
  // <select> for the amount, no 3 intro cards, no BIG/MEGA/EPIC banner. The elements stay in the DOM, hidden, as hooks
  // for the game's own picker, intro and celebration. A game without `shell` keeps the old defaults until it moves.
  const std = () => !!G && (G.shell || 1) >= 2;
  const speed = () => (S.fast ? 0.45 : 1) / HACK;
  const sleep = ms => new Promise(r => setTimeout(r, Math.max(0, Math.round(ms * speed()))));
  const modeOf = name => G.modes.find(m => m.name === String(name || '').toLowerCase());
  const costOf = name => S.costs[name] || (modeOf(name) || {}).cost || 1;

  /* ---------- RGS ---------- */
  class RgsError extends Error {
    constructor(status, code, message) { super(message || code || ('HTTP ' + status)); this.status = status; this.code = code; }
  }
  async function rgs(path, body) {
    let res;
    try {
      // A localhost RGS is the local test server; everything else is https.
      const scheme = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(P.rgs) ? 'http' : 'https';
      res = await fetch(`${scheme}://${P.rgs}${path}`, {
        method: body === undefined ? 'GET' : 'POST',
        body: body === undefined ? undefined : JSON.stringify(body)
      });
    } catch (e) { throw new RgsError(0, 'NETWORK', 'Cannot reach the game server'); }
    let data = null;
    try { data = await res.json(); } catch (e) { data = null; }
    if (!res.ok) throw new RgsError(res.status, data && data.error, data && data.message);
    return data;
  }
  const Live = {
    authenticate: () => rgs('/wallet/authenticate', { sessionID: P.sessionID }),
    play: (amount, mode) => rgs('/wallet/play', { amount, sessionID: P.sessionID, mode }),
    endRound: () => rgs('/wallet/end-round', { sessionID: P.sessionID }),
    balance: () => rgs('/wallet/balance', { sessionID: P.sessionID }),
    replay: () => rgs(`/bet/replay/${encodeURIComponent(P.game)}/${encodeURIComponent(P.version)}/${encodeURIComponent(P.mode)}/${encodeURIComponent(P.event)}`)
  };
  // Offline demo: play coins, rounds drawn from window.LZ_DEMO_BOOKS = { mode: [{ e: events, p: payout }] },
  // a weighted sample of the published books, so the demo pays like the real game (within sampling noise).
  const Demo = (() => {
    let bal = 1000 * API, open = null, id = 1;
    const levels = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100].map(v => v * API);
    const books = () => window.LZ_DEMO_BOOKS || {};
    return {
      load: () => new Promise((res, rej) => {
        if (window.LZ_DEMO_BOOKS) return res();
        const s = document.createElement('script');
        s.src = 'demo-books.js'; s.onload = () => (window.LZ_DEMO_BOOKS ? res() : rej(new RgsError(0, 'NETWORK', 'Missing session')));
        s.onerror = () => rej(new RgsError(0, 'NETWORK', 'Missing session'));
        document.head.append(s);
      }),
      authenticate: async () => ({
        balance: { amount: bal, currency },
        config: {
          minBet: levels[0], maxBet: levels[levels.length - 1], stepBet: 100000, defaultBetLevel: API, betLevels: levels,
          gameModes: G.modes.map(m => ({ mode: m.name.toUpperCase(), costMultiplier: m.cost, maxBet: levels[levels.length - 1] })), jurisdiction: {}
        }
      }),
      play: async (amount, mode) => {
        if (open) throw new RgsError(400, 'ERR_VAL', 'round active');
        const list = books()[mode];
        if (!list || !list.length) throw new RgsError(400, 'ERR_VAL', 'unknown mode');
        const cost = Math.round(amount * costOf(mode));
        if (cost > bal) throw new RgsError(400, 'ERR_IPB', 'insufficient balance');
        bal -= cost;
        const b = list[Math.floor(Math.random() * list.length)], payout = Math.round(amount * b.p / 100);
        const rd = { betID: id++, amount, payout, payoutMultiplier: b.p / 100, active: payout > 0, mode: mode.toUpperCase(), state: b.e };
        if (rd.active) open = rd;
        return { balance: { amount: bal, currency }, round: rd };
      },
      endRound: async () => { if (!open) throw new RgsError(400, 'ERR_VAL', 'no active round'); bal += open.payout; open = null; return { balance: { amount: bal, currency } }; },
      balance: async () => ({ balance: { amount: bal, currency } })
    };
  })();
  const Server = LOCAL ? Demo : Live;
  // The RGS hands back the book's events as round.state (or nested under .events).
  const eventsOf = st => Array.isArray(st) ? st : st && Array.isArray(st.events) ? st.events : [];

  /* ---------- Sound: one master switch, a few synth helpers; games add their own on top ---------- */
  let actx = null, master = null;
  const Sound = {
    // The AudioContext, or null while sound is off or before the first tap/key (browsers block audio until then).
    ctx() {
      if (!S.sound || !S.interacted) return null;
      try {
        if (!actx) {
          actx = new (window.AudioContext || window.webkitAudioContext)();
          master = actx.createGain(); master.gain.value = 0.9;
          const lim = actx.createDynamicsCompressor();
          lim.threshold.value = -10; lim.knee.value = 12; lim.ratio.value = 6; lim.attack.value = 0.003; lim.release.value = 0.2;
          master.connect(lim); lim.connect(actx.destination);
        }
        if (actx.state === 'suspended') actx.resume();
      } catch (e) { return null; }
      return actx;
    },
    // Connect game audio here (never straight to destination) so the sound button always silences it.
    get out() { return master; },
    get on() { return S.sound && S.interacted; },
    now() { return actx ? actx.currentTime : 0; },
    // tone({ f, to, d, type, g, when, a }): one oscillator note. `to` glides the pitch, `a` is the attack time.
    tone(o) {
      const a = Sound.ctx(); if (!a) return;
      const t = a.currentTime + (o.when || 0), d = o.d || 0.15, osc = a.createOscillator(), g = a.createGain();
      osc.type = o.type || 'sine'; osc.frequency.setValueAtTime(o.f, t);
      if (o.to) osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.to), t + d);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(o.g || 0.1, t + (o.a || 0.012));
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      osc.connect(g); g.connect(o.out || master); osc.start(t); osc.stop(t + d + 0.03);
    },
    // noise({ d, g, f, to, q, type, when }): a filtered noise burst. `to` sweeps the filter.
    noise(o) {
      const a = Sound.ctx(); if (!a) return;
      const t = a.currentTime + (o.when || 0), d = o.d || 0.2, len = Math.max(1, Math.floor(a.sampleRate * d));
      const buf = a.createBuffer(1, len, a.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * (o.flat ? 1 : 1 - i / len);
      const src = a.createBufferSource(), fl = a.createBiquadFilter(), g = a.createGain();
      src.buffer = buf; fl.type = o.type || 'bandpass'; fl.frequency.setValueAtTime(o.f || 1200, t); fl.Q.value = o.q || 1;
      if (o.to) fl.frequency.exponentialRampToValueAtTime(Math.max(20, o.to), t + d);
      g.gain.setValueAtTime(o.g || 0.1, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      src.connect(fl); fl.connect(g); g.connect(o.out || master); src.start(t);
    },
    // notes([freqs], { step, d, type, g, when }): a quick run of notes.
    notes(freqs, o = {}) { freqs.forEach((f, k) => Sound.tone({ ...o, f, when: (o.when || 0) + k * (o.step || 0.07) })); }
  };
  function syncSound() {
    if (master && actx) master.gain.setTargetAtTime(S.sound ? 0.9 : 0, actx.currentTime, 0.02);
    $('lzIcoOn').hidden = !S.sound; $('lzIcoOff').hidden = S.sound;
    $('lzSound').setAttribute('aria-label', S.sound ? 'Sound off' : 'Sound on');
    $('lzSound').setAttribute('aria-pressed', String(!S.sound));
    if (G.onSound) G.onSound(S.sound && S.interacted);
  }
  function firstTouch() {
    if (S.interacted) return;
    S.interacted = true; Sound.ctx();
    if (G.onSound) G.onSound(S.sound);
  }

  /* ---------- Shell markup ---------- */
  function buildShell() {
    const feats = G.modes.filter(m => m.kind === 'feature'), bases = G.modes.filter(m => m.kind !== 'feature');
    document.body.append(
      h('div', { class: 'lz-intro' + (!std() && G.introCards && G.introCards.length ? ' has-cards' : ''), id: 'lzIntro' },
        h('div', { class: 'lz-intro-in' },
          h('div', { class: 'lz-intro-logo', html: G.logo || '' }),
          h('p', { class: 'lz-intro-tag', id: 'lzIntroTag', text: G.tagline || '' }),
          // shell 2: an empty, hidden box where the game builds its own intro (its features come from G.introCards).
          // Older games: the optional feature preview, introCards: [{ art: '<svg…>', title, text }] (2 or 3 cards).
          std() ? h('div', { class: 'lz-intro-cards', id: 'lzIntroCards', hidden: true })
            : G.introCards && G.introCards.length ? h('div', { class: 'lz-intro-cards', id: 'lzIntroCards' }, G.introCards.slice(0, 3).map(c => h('div', { class: 'lz-intro-card' }, h('div', { class: 'lz-ic-art', html: c.art || '' }), h('b', { text: c.title || '' }), h('span', { text: c.text || '' })))) : null,
          h('div', { class: 'lz-intro-load', 'aria-hidden': 'true' }, h('i', { id: 'lzIntroBar' })),
          h('p', { class: 'lz-intro-err', id: 'lzIntroErr', hidden: true }),
          h('button', { class: 'lz-intro-play', id: 'lzIntroPlay', type: 'button', disabled: true, text: 'Loading' }),
          h('p', { class: 'lz-intro-fine', id: 'lzIntroFine', text: 'Best with sound on' })),
        h('div', { class: 'lz-studio', 'aria-hidden': 'true', html: '<b>LZ</b> STUDIO' })),
      h('div', { class: 'lz-app', id: 'lzApp', 'data-layout': G.layout || 'side', 'data-game': G.id },
        h('header', { class: 'lz-top' },
          h('div', { class: 'lz-brand', html: G.logo || '' }),
          h('div', { class: 'lz-tags' },
            h('span', { class: 'lz-tag', id: 'lzRtp', hidden: true, text: 'RTP ' + G.rtp + '%' }),
            h('span', { class: 'lz-tag', id: 'lzTimer', hidden: true, text: '0:00' }),
            h('span', { class: 'lz-tag', id: 'lzNet', hidden: true, text: 'Net 0.00' })),
          h('div', { class: 'lz-top-right' },
            h('div', { class: 'lz-wallet', id: 'lzWallet' }, h('span', { class: 'lz-lbl', text: 'Balance' }), h('b', { id: 'lzBalance', text: '–' })),
            h('button', { class: 'lz-icon', id: 'lzInfo', type: 'button', 'aria-label': 'Game rules', html: ICON.info }),
            h('button', { class: 'lz-icon', id: 'lzSound', type: 'button', 'aria-label': 'Sound off', 'aria-pressed': 'false',
              html: `<span id="lzIcoOn">${ICON.soundOn}</span><span id="lzIcoOff" hidden>${ICON.soundOff}</span>` }))),
        h('main', { class: 'lz-stage', id: 'lzStage', 'aria-label': 'Game' }),
        h('aside', { class: 'lz-panel', id: 'lzPanel', 'aria-label': 'Controls' },
          h('div', { class: 'lz-win', id: 'lzWinBox' }, h('span', { class: 'lz-lbl', text: 'Win' }), h('b', { id: 'lzWin', text: '0.00' })),
          h('div', { class: 'lz-replay', id: 'lzReplay', hidden: true, html:
            '<dl class="lz-facts"><dt>Mode</dt><dd id="lzRpMode">–</dd><dt>Amount</dt><dd id="lzRpAmount">–</dd><dt>Cost multiplier</dt><dd id="lzRpX">–</dd><dt>Real cost</dt><dd id="lzRpCost">–</dd><dt>Result</dt><dd id="lzRpMult">–</dd></dl>' }),
          bases.length > 1 ? h('div', { class: 'lz-modes', id: 'lzModes', role: 'group', 'aria-label': G.modeGroupLabel || 'Mode' },
            bases.map(m => h('button', { type: 'button', 'data-mode': m.name, 'aria-pressed': 'false' }, h('b', { text: m.label }), m.note ? h('small', { text: m.note }) : null))) : null,
          h('div', { class: 'lz-field', id: 'lzField' },
            h('span', { class: 'lz-lbl', text: 'Play amount' }),
            h('div', { class: 'lz-stepper' },
              h('button', { type: 'button', id: 'lzMinus', 'aria-label': 'Lower play amount', text: '−' }),
              // shell 2: the <select> only holds the amounts (hidden, never opened): the game's own picker reads its
              // options and sets its value + a 'change' event. Older games: a transparent select over the amount.
              h('div', { class: 'lz-amount' }, h('b', { id: 'lzAmt', text: '–' }), h('select', { id: 'lzAmtSel', 'aria-label': 'Play amount', hidden: std(), tabindex: std() ? '-1' : null, 'aria-hidden': std() ? 'true' : null })),
              h('button', { type: 'button', id: 'lzPlus', 'aria-label': 'Raise play amount', text: '+' }))),
          h('div', { class: 'lz-quick', id: 'lzQuick' },
            h('button', { type: 'button', id: 'lzMin', text: 'MIN' }),
            h('button', { type: 'button', id: 'lzMax', text: 'MAX' }),
            h('button', { type: 'button', id: 'lzFast', 'aria-pressed': 'false', text: 'TURBO' }),
            h('button', { type: 'button', id: 'lzAuto', text: 'AUTO' })),
          h('p', { class: 'lz-msg', id: 'lzMsg', role: 'alert', hidden: true }),
          h('button', { class: 'lz-action', id: 'lzAction', type: 'button' }, h('span', { id: 'lzActionLabel', text: 'PLAY' }), h('small', { id: 'lzActionSub', html: '&nbsp;' })),
          feats.length ? h('div', { class: 'lz-feats', id: 'lzFeats' },
            feats.map(m => h('button', { class: 'lz-feat', type: 'button', 'data-mode': m.name }, h('span', { text: m.label }), h('small', { 'data-price': m.name })))) : null,
          h('div', { class: 'lz-history', id: 'lzHistory', 'aria-label': 'Your recent rounds' }),
          h('div', { class: 'lz-extra', id: 'lzExtra', html: G.extra || '' }),
          h('div', { class: 'lz-stats', id: 'lzStats', 'aria-label': 'This session' },
            h('div', null, h('span', { text: 'Rounds' }), h('b', { id: 'lzStRounds', text: '0' })),
            h('div', null, h('span', { text: 'Best win' }), h('b', { id: 'lzStBest', text: '–' })),
            G.featureName ? h('div', null, h('span', { text: G.statLabel || G.featureName }), h('b', { id: 'lzStFeat', text: '0' })) : null),
          h('p', { class: 'lz-hint', id: 'lzHint', text: 'Space = Play · ⓘ = rules' }))),
      h('div', { class: 'lz-modal', id: 'lzBuy', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'lzBuyTitle', hidden: true },
        h('div', { class: 'lz-sheet lz-confirm' },
          h('h2', { id: 'lzBuyTitle' }), h('p', { id: 'lzBuyText' }),
          h('div', { class: 'lz-btns' }, h('button', { type: 'button', class: 'lz-ghost', id: 'lzBuyNo', text: 'Not now' }), h('button', { type: 'button', class: 'lz-go', id: 'lzBuyYes', text: 'Start' })))),
      h('div', { class: 'lz-modal', id: 'lzAutoPanel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'lzAutoTitle', hidden: true },
        h('div', { class: 'lz-sheet lz-confirm lz-auto' },
          h('h2', { id: 'lzAutoTitle', text: 'Autoplay' }),
          h('div', { class: 'lz-ap' }, h('span', { class: 'lz-lbl', text: 'Number of plays' }),
            h('div', { class: 'lz-seg', id: 'lzApRounds', html: '<button type="button" data-v="10" aria-pressed="true">10</button><button type="button" data-v="25">25</button><button type="button" data-v="50">50</button><button type="button" data-v="100">100</button>' })),
          h('div', { class: 'lz-ap' }, h('span', { class: 'lz-lbl', text: 'Stop if a single win is at least' }),
            h('div', { class: 'lz-seg', id: 'lzApWin', html: '<button type="button" data-v="0" aria-pressed="true">Off</button><button type="button" data-v="10">10×</button><button type="button" data-v="50">50×</button><button type="button" data-v="100">100×</button>' })),
          h('div', { class: 'lz-ap' }, h('span', { class: 'lz-lbl', text: 'Stop if balance falls by' }),
            h('div', { class: 'lz-seg', id: 'lzApLoss', html: '<button type="button" data-v="0" aria-pressed="true">Off</button><button type="button" data-v="10">10×</button><button type="button" data-v="25">25×</button><button type="button" data-v="50">50×</button>' }),
            h('span', { class: 'lz-note', id: 'lzApLossNote' })),
          G.featureName ? h('label', { class: 'lz-check' }, h('input', { type: 'checkbox', id: 'lzApFeat', checked: true }), ' Stop when ' + G.featureName + ' starts') : null,
          h('p', { class: 'lz-sum', id: 'lzApSum' }),
          h('div', { class: 'lz-btns' }, h('button', { type: 'button', class: 'lz-ghost', id: 'lzApCancel', text: 'Cancel' }), h('button', { type: 'button', class: 'lz-go', id: 'lzApStart', text: 'Start autoplay' })))),
      h('div', { class: 'lz-modal', id: 'lzRules', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'lzRulesTitle', hidden: true },
        h('div', { class: 'lz-sheet lz-rules' },
          h('button', { class: 'lz-icon lz-close', id: 'lzRulesClose', type: 'button', 'aria-label': 'Close rules', html: ICON.close }),
          h('h2', { id: 'lzRulesTitle', text: G.title + ' · Game rules' }),
          h('div', { id: 'lzRulesBody' }))),
      h('div', { class: 'lz-toast', id: 'lzToast', role: 'alert', hidden: true }));
    // The big-win banner lives on top of the stage.
    $('lzStage').append(h('div', { class: 'lz-bigwin', id: 'lzBig', role: 'status', hidden: true }, h('div', { class: 'lz-big-rays' }), h('strong', { id: 'lzBigLabel' }), h('b', { id: 'lzBigAmt', text: '0.00' })));
    $('lzRulesBody').innerHTML = rulesHTML();
  }
  function rulesHTML() {
    const feats = G.modes.filter(m => m.kind === 'feature'), bases = G.modes.filter(m => m.kind !== 'feature');
    const facts = G.modes.map(m => `<dt>${m.label} mode</dt><dd>${m.cost}× the play amount · RTP ${m.rtp || G.rtp}% · max win ${group(m.maxWin)}×</dd>`).join('');
    const stats = ['<b>Rounds</b> and <b>Best win</b>' + (G.featureName ? ' and <b>' + (G.statLabel || G.featureName) + '</b>' : '') + ' count your plays since the game was opened. They reset when the game reloads.'];
    return `<dl class="lz-facts">${facts}</dl>${G.rules || ''}
      <h3>Controls</h3>
      <ul>
        <li><b>PLAY</b> starts a round with the selected play amount. The space bar does the same.</li>
        ${bases.length > 1 ? `<li>The <b>${G.modeGroupLabel || 'mode'}</b> buttons choose which mode PLAY and autoplay use.</li>` : ''}
        <li><b>− / +</b> and the amount itself change the play amount. <b>MIN</b> and <b>MAX</b> jump to the smallest and largest amounts.</li>
        <li><b>TURBO</b> speeds up the animations. It does not change any result.</li>
        <li><b>AUTO</b> opens the autoplay panel. Choose how many plays, and optionally stop when a single win reaches a size you pick, when your balance falls by a set amount${G.featureName ? ', or when ' + G.featureName + ' starts' : ''}. Nothing starts until you press Start autoplay. Press STOP (or the space bar) at any time; the current round finishes first. Autoplay also stops if your balance is too low for the next play.</li>
        ${feats.map(m => `<li><b>${m.label}</b> opens a confirmation that shows the price (${m.cost}× the play amount). Confirm to start that round.</li>`).join('')}
        <li>The <b>speaker</b> button turns all sound on or off. The <b>ⓘ</b> button opens these rules.</li>
        <li><b>Win</b> shows what the round has won so far, and the final win at the end. <b>Balance</b> updates when the round is settled.</li>
        <li>${stats.join(' ')}</li>
      </ul>
      <h3>General</h3>
      <p>There are no choices during a round. The whole round is decided by the game server when you press PLAY; the animation shows that result. Win = play amount × the round's multiplier.</p>
      <p>Malfunction voids all wins and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted rounds. The expected return is calculated over many plays. The game display is not representative of any physical device and is for illustrative purposes only. Winnings are settled according to the amount received from the Remote Game Server and not from events within the web browser. TM and © 2026 Engine.</p>`;
  }

  /* ---------- HUD ---------- */
  let winShown = 0, winTimer = 0;
  function setWin(units, animate) {
    const el = $('lzWin'), from = winShown, t0 = performance.now(), d = animate && !reduced ? 500 * speed() : 0;
    winShown = units;
    clearTimeout(winTimer);
    $('lzWinBox').classList.toggle('has', units > 0);
    const step = () => {
      const t = d ? Math.min(1, (performance.now() - t0) / d) : 1;
      el.textContent = t >= 1 ? winMoney(units) : money(Math.round(from + (units - from) * t));
      if (t < 1) winTimer = setTimeout(step, 30);
    };
    step();
  }
  function setBalance(units, animate) {
    S.balance = units;
    $('lzBalance').textContent = money(units);
    if (animate && !reduced) { const w = $('lzWallet'); w.classList.remove('up'); void w.offsetWidth; w.classList.add('up'); }
  }
  function renderHistory(fresh) {
    $('lzHistory').replaceChildren(...S.history.map((x, k) => h('span', { class: 'lz-pill ' + (x >= 100 ? 'max' : x >= 10 ? 'hi' : x >= 1 ? 'mid' : '') + (fresh && k === 0 ? ' new' : ''), text: fmtX(x) })));
  }
  // The shared big-win banner. Tiers come from the game (winTiers) or the defaults.
  async function bigWin(units, x, capped) {
    const tiers = G.winTiers || [{ x: 10, label: 'BIG WIN' }, { x: 50, label: 'MEGA WIN' }, { x: 250, label: 'EPIC WIN' }];
    const tier = tiers.filter(t => x >= t.x).pop();
    if (!tier && !capped) return;
    const idx = capped ? tiers.length : tiers.indexOf(tier), box = $('lzBig'), amt = $('lzBigAmt');
    $('lzBigLabel').textContent = capped ? 'MAX WIN' : tier.label;
    box.dataset.tier = String(idx); box.hidden = false;
    box.style.animation = 'none'; void box.offsetWidth; box.style.animation = '';
    const t0 = performance.now(), dur = (1100 + idx * 500) * speed();
    const count = () => {
      const t = Math.min(1, (performance.now() - t0) / dur);
      amt.textContent = t >= 1 ? winMoney(units) : money(Math.round(units * (1 - Math.pow(1 - t, 3))));
      if (t < 1 && !box.hidden) setTimeout(count, 30);
    };
    count();
    if (G.onBigWin) G.onBigWin(idx, units, x);
    else Sound.notes([523, 659, 784, 1047, 1319, 1568, 2093].slice(0, 5 + idx), { d: 0.32, type: 'triangle', g: 0.12, step: 0.085 });
    await sleep(2300 + idx * 600);
    box.hidden = true;
  }

  /* ---------- Play amount ---------- */
  function fillLevels() {
    const sel = $('lzAmtSel');
    if (sel.options.length !== S.levels.length || sel.dataset.cur !== currency) {
      sel.replaceChildren(...S.levels.map(v => h('option', { value: String(v), text: money(v) })));
      sel.dataset.cur = currency;
    }
    sel.value = String(S.amount);
    $('lzAmt').textContent = money(S.amount);
    const i = S.levels.indexOf(S.amount), lock = S.busy || !!S.auto;
    $('lzMinus').disabled = lock || i <= 0;
    $('lzPlus').disabled = lock || i >= S.levels.length - 1;
    $('lzMin').disabled = lock; $('lzMax').disabled = lock; sel.disabled = lock;
  }
  function setAmount(v) {
    if (!S.levels.includes(v)) v = S.levels.reduce((best, l) => Math.abs(l - v) < Math.abs(best - v) ? l : best, S.levels[0]);
    S.amount = v; showMsg(''); renderAction();
  }
  function stepAmount(dir) { const n = S.levels[S.levels.indexOf(S.amount) + dir]; if (n !== undefined) setAmount(n); }
  function buildLevels(cfg) {
    let levels = Array.isArray(cfg.betLevels) ? cfg.betLevels.filter(v => Number.isFinite(v) && v > 0) : [];
    const min = cfg.minBet, max = cfg.maxBet, step = cfg.stepBet;
    if (!levels.length && min > 0 && max >= min && step > 0) for (let v = min; v <= max && levels.length < 60; v += step) levels.push(v);
    // Only ever offer amounts the RGS listed, inside its min and max.
    if (min > 0) levels = levels.filter(v => v >= min);
    if (max > 0) levels = levels.filter(v => v <= max);
    S.levels = Array.from(new Set(levels)).sort((a, b) => a - b);
    S.minBet = S.levels[0]; S.maxBet = S.levels[S.levels.length - 1];
  }
  function setBaseMode(name, silent) {
    const m = modeOf(name);
    if (!m || m.kind === 'feature') return;
    S.baseMode = m.name;
    const box = $('lzModes');
    if (box) box.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === m.name)));
    $('lzApp').dataset.mode = m.name;
    if (G.onMode && !silent) G.onMode(m.name);
    renderAction();
  }

  /* ---------- Messages ---------- */
  function showMsg(text) { const m = $('lzMsg'); m.textContent = text; m.hidden = !text; }
  let toastTimer = 0;
  function toast(text, ms = 4000) {
    const t = $('lzToast'); t.textContent = text; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, ms);
  }
  function errText(e) {
    if (!e) return 'Something went wrong. Please reload the game.';
    if (e.code === 'ERR_IPB') return 'Your balance is too low for this play amount.';
    if (e.code === 'ERR_GLE') return 'You have reached your play limit.';
    if (e.status === 423) return 'Play is paused for maintenance. Please try again soon.';
    if (e.status === 429 || e.code === 'ERR_ACT') return 'Too many requests. Please wait a moment and try again.';
    if (e.code === 'NETWORK') return 'Cannot reach the game server. Check your connection and reload.';
    if (e.code === 'ERR_VAL') return 'This session is no longer valid. Please reload the game.';
    return 'Something went wrong. Please reload the game.';
  }

  /* ---------- Actions ---------- */
  function renderAction() {
    if (!G) return;
    const btn = $('lzAction'), auto = !!S.auto;
    if (P.replay) {
      btn.disabled = S.busy || !S.replayData;
      btn.classList.toggle('busy', S.busy);
      $('lzActionLabel').textContent = S.busy ? 'REPLAYING' : S.replayed ? 'PLAY AGAIN' : 'PLAY REPLAY';
      $('lzActionSub').textContent = ' ';
      return;
    }
    btn.disabled = auto ? false : (S.busy || !S.ready);
    btn.classList.toggle('busy', S.busy && !auto);
    btn.classList.toggle('auto', auto);
    $('lzActionLabel').textContent = auto ? 'STOP AUTO' : S.busy ? (G.busyLabel || 'PLAYING') : (G.playLabel || 'PLAY');
    $('lzAuto').classList.toggle('on', auto);
    $('lzAuto').textContent = auto ? S.auto.left + ' LEFT' : 'AUTO';
    $('lzAuto').disabled = !S.ready || (S.busy && !auto);
    const cost = costOf(S.baseMode);
    $('lzActionSub').textContent = S.amount ? money(Math.round(S.amount * cost)) : ' ';
    document.querySelectorAll('.lz-feat').forEach(b => {
      b.disabled = S.busy || !S.ready || auto;
      b.querySelector('small').textContent = S.amount ? money(Math.round(S.amount * costOf(b.dataset.mode))) : '';
    });
    const box = $('lzModes');
    if (box) box.querySelectorAll('button').forEach(b => { b.disabled = S.busy || auto; });
    $('lzApp').classList.toggle('busy', S.busy);
    fillLevels();
  }
  // A mode that costs more than the play amount always asks first and states the price.
  let pendingBuy = null;
  function onBuy(name) {
    firstTouch();
    const m = modeOf(name);
    if (!m || S.busy || !S.ready || P.replay) return;
    const cost = Math.round(S.amount * costOf(name));
    if (cost > S.balance) { showMsg('Your balance is too low for ' + m.label + ' at this play amount.'); return; }
    pendingBuy = name;
    $('lzBuyTitle').textContent = m.confirmTitle || ('Start ' + m.label + '?');
    $('lzBuyText').textContent = (m.blurb ? m.blurb + ' ' : '') + 'This round is played for ' + money(cost) + ' (' + costOf(name) + '× your play amount of ' + money(S.amount) + ').';
    $('lzBuyYes').textContent = m.confirmLabel || 'Start';
    $('lzBuy').hidden = false;
    $('lzBuyYes').focus({ preventScroll: true });
  }
  function closeBuy() { $('lzBuy').hidden = true; pendingBuy = null; }
  async function onPlay(mode) {
    firstTouch();
    if (P.replay) return runReplay();
    if (S.busy || !S.ready) return;
    mode = mode || S.baseMode;
    const cost = Math.round(S.amount * costOf(mode));
    if (cost > S.balance) { showMsg('Your balance is too low for this play amount.'); return; }
    showMsg('');
    S.busy = true; renderAction();
    const t0 = Date.now();
    let res;
    try { res = await Server.play(S.amount, mode); }
    catch (e) { S.auto = null; S.busy = false; renderAction(); showMsg(errText(e)); if (e.code !== 'ERR_IPB') toast(errText(e)); refreshBalance(); return; }
    if (res.balance) setBalance(res.balance.amount);
    await finishRound(res.round, t0, mode);
  }
  // Plays a round's events through the game, then settles it. Nothing here can change the result.
  async function playback(events, amount, mode, payoutX, replay) {
    const fin = events.filter(e => e && e.type === 'final').pop();
    const winX = Number.isFinite(payoutX) ? payoutX : fin ? fin.payout / 100 : 0;
    const winUnits = Math.round(amount * winX), cost = costOf(mode);
    setWin(0);
    $('lzBig').hidden = true;
    const ctx = {
      amount, mode, cost, replay: !!replay, winX, winUnits, capped: !!(fin && fin.capped),
      sleep, speed, fast: () => S.fast, setWin, money, winMoney, fmtX, group,
      units: payoutInt => Math.round(amount * payoutInt / 100)      // a book value (100 = 1.00x) as money units
    };
    let out = null;
    try { out = await G.play(events, ctx); }
    catch (e) { if (isTestHost) console.error('playback failed', e); if (G.reset) try { G.reset(); } catch (e2) { /* keep going */ } }
    setWin(winUnits, true);
    // No fanfare for a round that returns less than it was played for (a feature mode costs more than 1x).
    // shell 2: the banner is off unless the game asks for it (celebrate: true); older games: on unless celebrate: false
    if ((std() ? G.celebrate === true : G.celebrate !== false) && winX >= cost) await bigWin(winUnits, winX, ctx.capped);
    return { winX, winUnits, feature: !!(out && out.feature) };
  }
  async function finishRound(round, t0, mode) {
    const amount = round.amount || S.amount;
    mode = (mode || String(round.mode || S.baseMode)).toLowerCase();
    if (!modeOf(mode)) mode = S.baseMode;
    const spent = Math.round(amount * costOf(mode));
    const px = Number(round.payoutMultiplier);
    const outcome = await playback(eventsOf(round.state), amount, mode, Number.isFinite(px) ? px : undefined, false);
    const payout = Number.isFinite(round.payout) ? round.payout : outcome.winUnits;
    // Settle wins: a round with a payout stays open until end-round.
    if (round.active) {
      for (let k = 0; k < 3; k++) {
        try { const r = await Server.endRound(); if (r && r.balance) setBalance(r.balance.amount, payout > 0); break; }
        catch (e) { if (k === 2) toast(errText(e)); else await new Promise(r => setTimeout(r, 800)); }
      }
    }
    S.net += payout - spent;
    S.history.unshift(outcome.winX); S.history = S.history.slice(0, 14); renderHistory(true);
    const st = S.stats;
    st.rounds++; if (outcome.feature) st.features++;
    if (payout > st.bestUnits) { st.bestUnits = payout; st.bestX = outcome.winX; }
    $('lzStRounds').textContent = String(st.rounds);
    $('lzStBest').textContent = st.bestUnits > 0 ? fmtX(st.bestX) : '–';
    if ($('lzStFeat')) $('lzStFeat').textContent = String(st.features);
    S.lastOutcome = outcome;
    $('lzNet').textContent = 'Net ' + (S.net >= 0 ? '+' : '') + money(S.net);
    const left = S.minRoundMs - (Date.now() - t0);
    if (left > 0) await new Promise(r => setTimeout(r, left));
    S.busy = false;
    renderAction();
    if (G.idle) G.idle(outcome);
  }

  /* ---------- Autoplay: opens a panel first; nothing runs until the player presses Start ---------- */
  const segValue = id => Number($(id).querySelector('[aria-pressed="true"]').dataset.v);
  function apSummary() {
    const n = segValue('lzApRounds'), w = segValue('lzApWin'), l = segValue('lzApLoss'), per = Math.round(S.amount * costOf(S.baseMode));
    $('lzApLossNote').textContent = l ? 'Stops if your balance drops by ' + money(S.amount * l) + ' from where autoplay started.' : '';
    $('lzApSum').textContent = n + ' plays of ' + money(per) + ' each (' + modeOf(S.baseMode).label + ' mode)' + (w ? ', stops on a ' + w + '× win' : '')
      + (l ? ', stops if your balance falls by ' + money(S.amount * l) : '') + ($('lzApFeat') && $('lzApFeat').checked ? ', stops when ' + G.featureName + ' starts' : '') + '.';
  }
  function openAuto() {
    firstTouch();
    if (S.auto) { stopAuto(); return; }
    if (S.busy || !S.ready || P.replay) return;
    apSummary();
    $('lzAutoPanel').hidden = false;
    $('lzApStart').focus({ preventScroll: true });
  }
  function closeAuto() { $('lzAutoPanel').hidden = true; }
  function stopAuto(reason) {
    if (!S.auto) return;
    S.auto = null;
    if (reason) toast(reason, 3000);
    renderAction();
  }
  async function startAuto() {
    closeAuto();
    if (S.busy || !S.ready) return;
    S.auto = { left: segValue('lzApRounds'), stopWin: segValue('lzApWin'), stopLoss: segValue('lzApLoss') * S.amount, stopFeat: !!($('lzApFeat') && $('lzApFeat').checked), startBal: S.balance };
    renderAction();
    while (S.auto && S.auto.left > 0) {
      if (Math.round(S.amount * costOf(S.baseMode)) > S.balance) { stopAuto('Autoplay stopped: balance too low for the next play.'); break; }
      S.auto.left--;
      renderAction();
      await onPlay(S.baseMode);
      const a = S.auto, o = S.lastOutcome || {};
      if (!a) break;
      if (S.busy) { stopAuto('Autoplay stopped.'); break; }
      if (a.stopWin && o.winX >= a.stopWin) { stopAuto('Autoplay stopped: a ' + fmtX(o.winX) + ' win.'); break; }
      if (a.stopFeat && o.feature) { stopAuto('Autoplay stopped: ' + G.featureName + '.'); break; }
      if (a.stopLoss && a.startBal - S.balance >= a.stopLoss) { stopAuto('Autoplay stopped: balance limit reached.'); break; }
      if (a.left <= 0) { stopAuto('Autoplay finished.'); break; }
      await new Promise(r => setTimeout(r, 450 / HACK));
    }
  }
  async function refreshBalance() {
    try { const r = await Server.balance(); if (r && r.balance) setBalance(r.balance.amount); } catch (e) { /* keep the last known balance */ }
  }

  /* ---------- Replay ---------- */
  async function loadReplay() {
    if (!P.rgs || !P.game || !P.version || !P.event) throw new RgsError(0, 'REPLAY', 'Missing replay parameters');
    P.mode = (P.mode || G.modes[0].name).toLowerCase();
    const data = await Live.replay();
    S.replayData = data;
    const amount = Number.isFinite(P.amount) && P.amount > 0 ? P.amount : API;
    const cost = Number(data.costMultiplier) || costOf(P.mode);
    S.amount = amount; S.costs[P.mode] = cost;
    if (modeOf(P.mode) && modeOf(P.mode).kind !== 'feature') setBaseMode(P.mode);
    $('lzRpMode').textContent = (modeOf(P.mode) || { label: P.mode }).label.toUpperCase();
    $('lzRpAmount').textContent = money(amount);
    $('lzRpX').textContent = cost + '×';
    $('lzRpCost').textContent = money(Math.round(amount * cost));
    $('lzRpMult').textContent = fmtX(Number(data.payoutMultiplier) || 0);
  }
  async function runReplay() {
    if (S.busy || !S.replayData) return;
    S.busy = true; renderAction();
    try { await playback(eventsOf(S.replayData.state), S.amount, modeOf(P.mode) ? P.mode : S.baseMode, Number(S.replayData.payoutMultiplier), true); }
    catch (e) { toast('This replay could not be shown.'); }
    S.busy = false; S.replayed = true; renderAction();
    if (G.idle) G.idle(null);
  }

  /* ---------- Rules, sound, keys ---------- */
  function openRules() { $('lzRules').hidden = false; $('lzRulesClose').focus({ preventScroll: true }); }
  function closeRules() { $('lzRules').hidden = true; $('lzInfo').focus({ preventScroll: true }); }
  const anyModal = () => !$('lzRules').hidden || !$('lzBuy').hidden || !$('lzAutoPanel').hidden;
  function bind() {
    document.addEventListener('pointerdown', firstTouch, { passive: true });
    document.addEventListener('keydown', firstTouch);
    $('lzAction').addEventListener('click', () => { if (S.auto) stopAuto('Autoplay stopped.'); else onPlay(); });
    $('lzAuto').addEventListener('click', openAuto);
    $('lzApCancel').addEventListener('click', closeAuto);
    $('lzApStart').addEventListener('click', startAuto);
    $('lzAutoPanel').addEventListener('click', e => { if (e.target === $('lzAutoPanel')) closeAuto(); });
    ['lzApRounds', 'lzApWin', 'lzApLoss'].forEach(id => $(id).addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $(id).querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      apSummary();
    }));
    if ($('lzApFeat')) $('lzApFeat').addEventListener('change', apSummary);
    document.querySelectorAll('.lz-feat').forEach(b => b.addEventListener('click', () => onBuy(b.dataset.mode)));
    $('lzBuyNo').addEventListener('click', closeBuy);
    $('lzBuyYes').addEventListener('click', () => { const m = pendingBuy; closeBuy(); if (m) onPlay(m); });
    $('lzBuy').addEventListener('click', e => { if (e.target === $('lzBuy')) closeBuy(); });
    if ($('lzModes')) $('lzModes').addEventListener('click', e => { const b = e.target.closest('button'); if (b && !S.busy && !S.auto) setBaseMode(b.dataset.mode); });
    $('lzMinus').addEventListener('click', () => stepAmount(-1));
    $('lzPlus').addEventListener('click', () => stepAmount(1));
    $('lzAmtSel').addEventListener('change', e => setAmount(Number(e.target.value)));
    $('lzMin').addEventListener('click', () => setAmount(S.minBet));
    $('lzMax').addEventListener('click', () => setAmount(S.maxBet));
    $('lzFast').addEventListener('click', () => { S.fast = !S.fast; $('lzFast').setAttribute('aria-pressed', String(S.fast)); if (G.onFast) G.onFast(S.fast); });
    $('lzInfo').addEventListener('click', openRules);
    $('lzRulesClose').addEventListener('click', closeRules);
    $('lzRules').addEventListener('click', e => { if (e.target === $('lzRules')) closeRules(); });
    $('lzSound').addEventListener('click', () => { S.sound = !S.sound; if (S.sound) Sound.ctx(); syncSound(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { if (!$('lzAutoPanel').hidden) closeAuto(); else if (!$('lzBuy').hidden) closeBuy(); else if (!$('lzRules').hidden) closeRules(); return; }
      if (e.code !== 'Space' || e.repeat || S.jur.disabledSpacebar) return;
      if (anyModal() || !$('lzIntro').classList.contains('out')) return;
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'SELECT' || tag === 'INPUT') return;
      e.preventDefault();
      if (S.auto) stopAuto('Autoplay stopped.'); else onPlay();
    });
    setInterval(() => {
      if (!S.jur.displaySessionTimer) return;
      const s = Math.floor((Date.now() - S.sessionStart) / 1000), hrs = Math.floor(s / 3600);
      $('lzTimer').textContent = `${hrs ? hrs + ':' : ''}${String(Math.floor(s / 60) % 60).padStart(hrs ? 2 : 1, '0')}:${String(s % 60).padStart(2, '0')}`;
    }, 1000);
  }

  /* ---------- Start ---------- */
  function preload() {
    const srcs = Array.from(new Set(G.preload || []));
    const bar = $('lzIntroBar');
    const fonts = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve();
    if (!srcs.length) { bar.style.transform = 'scaleX(.8)'; return Promise.race([fonts, new Promise(r => setTimeout(r, 3000))]); }
    let done = 0;
    const imgs = new Promise(res => {
      srcs.forEach(src => {
        const i = new Image();
        i.onload = i.onerror = () => { done++; bar.style.transform = `scaleX(${(done / srcs.length * 0.8).toFixed(3)})`; if (done === srcs.length) res(); };
        i.src = src;
      });
      setTimeout(res, 8000);
    });
    return Promise.all([imgs, Promise.race([fonts, new Promise(r => setTimeout(r, 3000))])]);
  }
  function fatal(text) {
    $('lzIntroErr').textContent = text; $('lzIntroErr').hidden = false;
    $('lzIntroPlay').hidden = true; $('lzIntroFine').hidden = true;
  }
  async function connect() {
    if (P.replay) { await loadReplay(); return; }
    if (LOCAL) await Demo.load();
    const auth = await Server.authenticate();
    const cfg = auth.config || {};
    if (auth.balance) { currency = auth.balance.currency || currency; setBalance(auth.balance.amount); }
    S.jur = cfg.jurisdiction || {};
    // Mode prices come from the RGS config when it lists them.
    for (const gm of cfg.gameModes || []) {
      const m = modeOf(gm.mode);
      if (m && Number(gm.costMultiplier) > 0) S.costs[m.name] = Number(gm.costMultiplier);
    }
    if ($('lzFeats')) $('lzFeats').hidden = !!S.jur.disabledBuyFeature;
    buildLevels(cfg);
    if (!S.levels.length) throw new RgsError(0, 'CONFIG', 'No play amounts available');
    S.amount = S.levels.includes(cfg.defaultBetLevel) ? cfg.defaultBetLevel : S.levels[0];
    const mrd = Number(S.jur.minimumRoundDuration) || 0;
    S.minRoundMs = mrd > 0 && mrd < 100 ? mrd * 1000 : mrd;
    $('lzFast').hidden = !!S.jur.disabledTurbo;
    $('lzAuto').hidden = !!S.jur.disabledAutoplay;
    $('lzRtp').hidden = !S.jur.displayRTP;
    $('lzTimer').hidden = !S.jur.displaySessionTimer;
    $('lzNet').hidden = !S.jur.displayNetPosition;
    if (S.jur.disabledSpacebar) $('lzHint').textContent = 'ⓘ = rules';
    // An unfinished round from before a disconnect: restore it and finish it.
    if (auth.round && (auth.round.active || eventsOf(auth.round.state).length)) S.resume = auth.round;
  }

  const api = {
    $, h, money, winMoney, fmtX, group, reduced, sound: Sound, toast, sleep, speed,
    get fast() { return S.fast; }, get busy() { return S.busy; }, get social() { return P.social || !!S.jur.socialCasino; },
    get mode() { return S.baseMode; }, get amount() { return S.amount; }, get replay() { return P.replay; },
    // Keeps `box` as the largest rectangle of the given width/height ratio that fits inside `host`.
    fit(box, ratio, host) {
      host = host || box.parentElement;
      const run = () => {
        const r = host.getBoundingClientRect(), cs = getComputedStyle(host);
        const w = r.width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), ht = r.height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        if (w <= 0 || ht <= 0) return;
        const bw = Math.min(w, ht * ratio);
        box.style.width = Math.floor(bw) + 'px'; box.style.height = Math.floor(bw / ratio) + 'px';
        box.style.setProperty('--u', (bw / 100).toFixed(3) + 'px');      // 1% of the box width, for scalable type and spacing
      };
      if ('ResizeObserver' in window) new ResizeObserver(run).observe(host); else window.addEventListener('resize', run);
      run();
      return run;
    }
  };

  async function boot(game) {
    G = game;
    G.modes = G.modes.map(m => ({ kind: 'base', cost: 1, ...m, name: m.name.toLowerCase() }));
    document.title = G.title;
    buildShell();
    bind();
    const firstBase = G.modes.find(m => m.kind !== 'feature');
    setBaseMode(firstBase.name, true);
    if (P.replay) {
      document.body.classList.add('lz-is-replay'); $('lzReplay').hidden = false; $('lzHint').hidden = true;
      $('lzIntroTag').textContent = 'Round replay'; $('lzIntroFine').hidden = true;
    }
    if (api.social) document.body.classList.add('lz-is-social');
    try { await G.mount($('lzStage'), api); } catch (e) { if (isTestHost) console.error('mount failed', e); }
    if (G.onMode) G.onMode(S.baseMode);
    $('lzApp').inert = true;
    const [, err] = await Promise.all([preload(), connect().then(() => null, e => e)]);
    $('lzIntroBar').style.transform = 'scaleX(1)';
    if (err) {
      fatal(P.replay ? 'This replay could not be loaded.' : errText(err.code === 'NETWORK' || err.status === 0 ? { code: 'NETWORK' } : err));
      return;
    }
    if (api.social) document.body.classList.add('lz-is-social');
    S.ready = true;
    if (!P.replay && S.resume) {
      if (S.resume.amount && S.levels.includes(S.resume.amount)) S.amount = S.resume.amount;
      const rm = modeOf(S.resume.mode);
      if (rm && rm.kind !== 'feature') setBaseMode(rm.name);
    }
    renderAction(); setWin(0);
    const btn = $('lzIntroPlay');
    btn.disabled = false; btn.textContent = S.resume ? 'Resume' : 'Play'; btn.focus({ preventScroll: true });
    btn.addEventListener('click', async () => {
      if ($('lzIntro').classList.contains('out')) return;
      firstTouch(); syncSound();
      $('lzIntro').classList.add('out'); $('lzApp').inert = false;
      setTimeout(() => { $('lzIntro').hidden = true; }, 500);
      if (G.onStart) G.onStart();
      if (S.resume) {
        const round = S.resume; S.resume = null;
        S.busy = true; renderAction();
        await finishRound(round, Date.now());
      }
    });
  }

  window.LZ = { boot, api, state: S, params: P, version: '1.0.0' };
})();
