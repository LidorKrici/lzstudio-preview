/* Going Viral for Stake Engine.
 * The round result comes from the RGS (/wallet/play) as a list of events; this file only plays them back.
 * Opened straight from disk (file://) with no launch parameters, it runs a local demo with play coins. */
(() => {
  'use strict';

  /* ---------- Constants ---------- */
  const CELLS = 36, COLS = 6;
  const API = 1000000;                      // RGS money: 1,000,000 = 1.00
  const MODE = 'base';
  const MAX_WIN_X = 5000;
  const BUY_MODE = 'live';                 // the Go Live mode in index.json
  const STREAM_TILES = 6;
  const TIERS = ['heart', 'fire', 'rocket', 'crown'];
  const TIER_COLORS = { heart: '#ff2e88', fire: '#ffb020', rocket: '#33e4f0', crown: '#ffd23f' };
  const IMG = {
    heart: 'assets/heart.webp', fire: 'assets/fire.webp', rocket: 'assets/rocket.webp', crown: 'assets/crown.webp',
    cancelled: 'assets/cancel.webp', cancelDrama: 'assets/cancel-drama.webp', cancelTxt: 'assets/txt-cancelled.webp',
    live: 'assets/live.webp', liveTxt: 'assets/txt-werelive.webp', tileBack: 'assets/tile-back.webp',
    bigwin: 'assets/big-win.webp', megawin: 'assets/mega-win.webp'
  };
  // v2 art: every character has a blink frame (same framing) and a celebration pose. Effects are drawn in code.
  const POSE = {};
  ['heart', 'fire', 'rocket', 'crown', 'live'].forEach(k => { POSE[k] = { base: 'assets/' + k + '.webp', blink: 'assets/' + k + '-blink.webp', win: 'assets/' + k + '-win.webp' }; });
  const symKey = src => (src.match(/assets\/(heart|fire|rocket|crown|live)\.webp$/) || [])[1];
  const MILESTONES = [
    { m: 1, label: 'TRENDING', color: '#33e4f0' },
    { m: 3, label: 'GOING VIRAL', color: '#ffd23f' },
    { m: 10, label: 'BLOWING UP', color: '#ff2e88' },
    { m: 50, label: 'MEGA VIRAL', color: '#ff2e88' },
    { m: 250, label: 'BREAKING THE INTERNET', color: '#ffd23f' }
  ];
  const METER_MAX = 250;
  const HYPE_INFO = {
    lock: { label: 'LOCKED IN', color: '#5dffa8', text: 'Multiplier secured' },
    shield: { label: 'SHIELD UP', color: '#33e4f0', text: 'Secured · next cancel is blocked' },
    boost: { label: 'BOOST ×2', color: '#ffd23f', text: 'Doubled and secured' },
    repost: { label: 'CELEBRITY REPOST ×5', color: '#ff2e88', text: 'Five times and secured' }
  };
  // What the chat says during the LIVE STREAM. Reactions to the post, not other players.
  const CHAT = ['FIRE FIRE FIRE', 'NO WAY', 'this is insane', 'LETS GOOO', 'obsessed', 'clip it!!', 'algorithm loves this', 'W post', 'to the moon', 'who else is watching', 'iconic', 'trending #1', 'GOAT', 'royalty'];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);

  /* ---------- Launch parameters ---------- */
  const Q = new URLSearchParams(location.search);
  const qp = k => (Q.get(k) || '').trim();
  const P = {
    sessionID: qp('sessionID'), rgs: qp('rgs_url').replace(/^https?:\/\//, '').replace(/\/+$/, ''),
    lang: qp('lang') || 'en', currency: qp('currency').toUpperCase(), device: qp('device'),
    social: qp('social') === 'true', demo: qp('demo') === 'true',
    replay: qp('replay') === 'true', game: qp('game'), version: qp('version'), mode: qp('mode') || MODE,
    event: qp('event'), amount: Number(qp('amount'))
  };
  // English is the only language; any other lang code falls back to it.
  document.documentElement.lang = 'en';
  // Served by the local test server (tools/serve.mjs) with no launch parameters: play against its mock RGS,
  // which draws from the real math files, so the demo pays exactly like the published game.
  if (!P.replay && !P.sessionID && !P.rgs && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    P.sessionID = 'local-demo'; P.rgs = location.host;
  }
  // Opened straight from disk there is no server: a rough offline preview. Its rules are not weighted like the
  // published math, so it pays more than the real game and must not be used to judge returns.
  const LOCAL = !P.replay && !P.sessionID && !P.rgs && location.protocol === 'file:';

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
  const group = s => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  function numStr(units, dec) {
    const neg = units < 0, v = Math.abs(units) / API;
    const [i, f] = v.toFixed(dec).split('.');
    return (neg ? '-' : '') + group(i) + (f ? '.' + f : '');
  }
  function withSym(s) {
    const m = meta(), neg = s.startsWith('-'), v = neg ? s.slice(1) : s;
    return (neg ? '-' : '') + (m.after ? `${v} ${m.sym}` : `${m.sym}${v}`);
  }
  // Balance and amounts: the currency's normal decimals.
  const money = units => withSym(numStr(units, meta().dec));
  // Wins: exact, so a tiny play amount still shows the precise win (up to 6 decimals).
  function winMoney(units) {
    const base = meta().dec;
    let dec = base;
    while (dec < 6 && Math.round(Math.abs(units) / Math.pow(10, 6 - dec)) * Math.pow(10, 6 - dec) !== Math.abs(units)) dec++;
    return withSym(numStr(units, dec));
  }
  const fmtX = x => '×' + (x >= 100 ? group(x.toFixed(0)) : x >= 10 ? x.toFixed(1) : x.toFixed(2));
  const compact = n => n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, '') + 'M'
    : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e5 ? 0 : 1).replace(/\.0$/, '') + 'K' : String(Math.round(n));

  /* ---------- State ---------- */
  const S = {
    balance: 0, levels: [], amount: 0, minBet: 0, maxBet: 0, busy: false, ready: false,
    sound: true, interacted: false, fast: false, history: [], shownX: 0, jur: {},
    sessionStart: Date.now(), net: 0, minRoundMs: 0, replayData: null, buyCost: 64,
    auto: null, stats: { rounds: 0, bestX: 0, bestUnits: 0, lives: 0 }
  };
  const speed = () => (S.fast ? 0.45 : 1);
  const sleep = ms => new Promise(r => setTimeout(r, Math.round(ms * speed())));

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
    play: (amount, mode = MODE) => rgs('/wallet/play', { amount, sessionID: P.sessionID, mode }),
    endRound: () => rgs('/wallet/end-round', { sessionID: P.sessionID }),
    balance: () => rgs('/wallet/balance', { sessionID: P.sessionID }),
    replay: () => rgs(`/bet/replay/${encodeURIComponent(P.game)}/${encodeURIComponent(P.version)}/${encodeURIComponent(P.mode)}/${encodeURIComponent(P.event)}`)
  };

  // Local demo for opening the file straight from disk: same rules, play coins, no server.
  const Local = (() => {
    const REACT = [['heart', 4, 1, 58], ['fire', 10, 2, 27], ['rocket', 24, 4, 11], ['crown', 64, 8, 4]];
    const STREAM = [[11, 400], [12, 280], [15, 200], [20, 90], [30, 25], [50, 5]];
    const HYPE = [['boost', 12, 16], ['repost', 35, 3], ['shield', 4, 21], ['lock', 2, 60]];
    const pick = list => { let r = Math.random() * list.reduce((s, x) => s + x[x.length - 1], 0); for (const x of list) if ((r -= x[x.length - 1]) < 0) return x; return list[list.length - 1]; };
    function streamOut(ev, mult, take, fin) {
      for (let k = 0; k < STREAM_TILES; k++) {
        const s = pick(STREAM)[0];
        mult = Math.round(mult * s / 10);
        ev.push({ type: 'stream', tile: take(), x: s / 10, mult, left: STREAM_TILES - 1 - k });
      }
      ev.push({ type: 'streamEnd', mult });
      return fin(mult);
    }
    function round(buy) {
      const free = Array.from({ length: CELLS }, (_, i) => i), ev = [];
      let mult = 0, locked = 0, shield = false, n = 0, meter = 0;
      const take = () => free.splice(Math.floor(Math.random() * free.length), 1)[0];
      const fin = pay => { const capped = pay >= MAX_WIN_X * 100; pay = Math.min(pay, MAX_WIN_X * 100); ev.push({ type: 'final', payout: pay, capped }); return { ev, pay }; };
      if (buy) { ev.push({ type: 'live', tile: take(), add: 1000, mult: 1000, meter: 100, bought: true }); return streamOut(ev, 1000, take, fin); }
      for (;;) {
        if (Math.random() < 0.125 + n * 0.004) {
          const tile = take();
          if (shield) { shield = false; ev.push({ type: 'cancel', tile, saved: true, mult, locked, meter }); if (!free.length) break; continue; }
          ev.push({ type: 'cancel', tile, saved: false, mult, locked, meter });
          return fin(locked);
        }
        const r = pick(REACT), tile = take();
        mult += r[1]; n++; meter = Math.min(100, meter + r[2]);
        ev.push({ type: 'reveal', tile, reaction: r[0], add: r[1], mult, meter });
        if (n % 5 === 0 && free.length) {
          const hp = pick(HYPE), h = hp[0];
          if (h === 'boost') mult *= 2; if (h === 'repost') mult *= 5; if (h === 'shield') shield = true;
          locked = mult; meter = Math.min(100, meter + hp[1]);
          ev.push({ type: 'hype', outcome: h, mult, locked, meter });
        }
        if (meter >= 100 && free.length > STREAM_TILES) {
          mult += 100; ev.push({ type: 'live', tile: take(), add: 100, mult, meter: 100 });
          return streamOut(ev, mult, take, fin);
        }
        if (!free.length) break;
      }
      mult *= 2; ev.push({ type: 'viral', mult });
      return fin(mult);
    }
    let bal = 1000 * API, open = null, id = 1;
    const levels = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100].map(v => v * API);
    return {
      authenticate: async () => ({ balance: { amount: bal, currency: currency }, config: { minBet: levels[0], maxBet: levels[levels.length - 1], stepBet: 100000, defaultBetLevel: API, betLevels: levels, gameModes: [{ mode: 'BASE', costMultiplier: 1, maxBet: levels[levels.length - 1] }, { mode: 'LIVE', costMultiplier: 64, maxBet: levels[levels.length - 1] }], jurisdiction: {} } }),
      play: async (amount, mode = MODE) => {
        if (open) throw new RgsError(400, 'ERR_VAL', 'round active');
        const buy = mode === BUY_MODE, cost = amount * (buy ? 64 : 1);
        if (cost > bal) throw new RgsError(400, 'ERR_IPB', 'insufficient balance');
        bal -= cost;
        const r = round(buy), payout = Math.round(amount * r.pay / 100);
        const rd = { betID: id++, amount, payout, payoutMultiplier: r.pay / 100, active: payout > 0, mode: buy ? 'LIVE' : 'BASE', state: r.ev };
        if (rd.active) open = rd;
        return { balance: { amount: bal, currency }, round: rd };
      },
      endRound: async () => { if (!open) throw new RgsError(400, 'ERR_VAL', 'no active round'); bal += open.payout; open = null; return { balance: { amount: bal, currency } }; },
      balance: async () => ({ balance: { amount: bal, currency } })
    };
  })();
  const Server = LOCAL ? Local : Live;

  // The RGS hands back the book's events as round.state (or nested under .events).
  const eventsOf = st => Array.isArray(st) ? st : st && Array.isArray(st.events) ? st.events : [];

  /* ---------- Sound ---------- */
  let actx = null;
  function audio() {
    if (!S.sound || !S.interacted) return null;
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
    } catch (e) { return null; }
    return actx;
  }
  function tone(f, d, type, gain, when = 0) {
    const a = audio(); if (!a) return;
    const t = a.currentTime + when, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + d + 0.03);
  }
  function noise(d, gain, freq, type = 'bandpass') {
    const a = audio(); if (!a) return;
    const len = Math.floor(a.sampleRate * d), buf = a.createBuffer(1, len, a.sampleRate), ch = buf.getChannelData(0);
    for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = a.createBufferSource(), fl = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf; fl.type = type; fl.frequency.value = freq; g.gain.value = gain;
    src.connect(fl); fl.connect(g); g.connect(a.destination); src.start();
  }
  const SFX_FILES = {
    scratch: 'assets/sfx-scratch.mp3', pop: 'assets/sfx-pop.mp3', cash: 'assets/sfx-cash.mp3', bust: 'assets/sfx-bust.mp3',
    tick: 'assets/sfx-tick.mp3', hype: 'assets/sfx-hype.mp3', bigwin: 'assets/sfx-bigwin.mp3'
  };
  const buffers = {};
  let samplesRequested = false;
  function loadSamples() {
    const a = audio();
    if (!a || samplesRequested || location.protocol === 'file:') return;
    samplesRequested = true;
    Object.entries(SFX_FILES).forEach(([name, url]) => {
      fetch(url).then(r => r.arrayBuffer()).then(b => a.decodeAudioData(b)).then(buf => { buffers[name] = buf; }).catch(() => {});
    });
  }
  function sample(name, gain, rate = 1) {
    const a = audio(), buf = buffers[name];
    if (a && buf) {
      const src = a.createBufferSource(), g = a.createGain();
      src.buffer = buf; src.playbackRate.value = rate; g.gain.value = gain;
      src.connect(g); g.connect(a.destination); src.start();
      return true;
    }
    if (a && location.protocol === 'file:' && SFX_FILES[name]) {
      const el = new Audio(SFX_FILES[name]);
      el.volume = Math.min(1, gain); el.playbackRate = rate;
      el.play().catch(() => {});
      return true;
    }
    return false;
  }
  function syncMusic() {
    const mu = $('music');
    mu.volume = 0.3;
    if (S.sound && S.interacted) { const p = mu.play(); if (p && p.catch) p.catch(() => {}); } else mu.pause();
  }
  const sfx = {
    scratch: () => { if (!sample('scratch', 0.45)) noise(0.22, 0.12, 3200); },
    pop: i => { if (!sample('pop', 0.7, 1 + Math.min(i, 30) * 0.015)) tone(520 * Math.pow(1.045, Math.min(i, 30)), 0.14, 'triangle', 0.16); },
    cash: () => { if (!sample('cash', 0.8)) [784, 988, 1175, 1568].forEach((f, k) => tone(f, 0.22, 'triangle', 0.13, k * 0.065)); },
    bust: () => { if (!sample('bust', 0.9)) { noise(0.7, 0.5, 600, 'lowpass'); tone(62, 0.7, 'sine', 0.3); } },
    tick: () => { if (!sample('tick', 0.5)) tone(1250, 0.05, 'square', 0.035); },
    thump: () => { tone(58, 0.16, 'sine', 0.32); tone(52, 0.2, 'sine', 0.26, 0.19); },
    lock: () => { tone(880, 0.08, 'square', 0.06); tone(1320, 0.12, 'triangle', 0.08, 0.07); },
    shield: () => { [660, 990, 1320].forEach((f, k) => tone(f, 0.25, 'sine', 0.09, k * 0.05)); },
    hype: () => { if (!sample('hype', 0.75)) [523, 659, 784, 1047].forEach((f, k) => tone(f, 0.16, 'square', 0.05, k * 0.05)); },
    bigwin: () => { if (!sample('bigwin', 0.9)) [523, 659, 784, 1047, 1319, 1568, 2093].forEach((f, k) => tone(f, 0.3, 'triangle', 0.12, k * 0.08)); }
  };
  // v2: the old video overlays are gone (they weighed 2.5MB). Big moments are drawn in code instead.
  function playFx(id) {
    if (reduced || document.hidden) return;
    if (id === 'vidWin') { confetti(90); flashBoard('#ffd23f'); roomPulse('win'); }
    else { roomPulse('bust'); }
  }
  // The streamer room behind the game reacts to the round: it pulses on wins, goes dark on a cancel.
  function roomPulse(kind) {
    if (reduced) return;
    const b = document.body;
    if (kind === 'bust') { b.classList.add('lights-out'); return; }
    b.classList.remove('room-pop'); void b.offsetWidth; b.classList.add('room-pop');
    setTimeout(() => b.classList.remove('room-pop'), 900);
  }
  function roomReset() { document.body.classList.remove('lights-out', 'room-pop'); }

  /* ---------- Board ---------- */
  const board = $('board');
  const cells = [];
  const foil = new Image();
  foil.src = IMG.tileBack;
  const repaintClosed = () => cells.forEach(c => { if (!c.open) paintCover(c); });
  function buildGrid() {
    const grid = $('grid');
    for (let i = 0; i < CELLS; i++) {
      const el = document.createElement('div'); el.className = 'cell';
      el.style.setProperty('--cx', String(i % COLS)); el.style.setProperty('--cy', String(Math.floor(i / COLS)));
      const img = document.createElement('img'); img.alt = ''; img.decoding = 'async';
      const tg = document.createElement('span'); tg.className = 'tg';
      const cv = document.createElement('canvas');
      el.append(img, tg, cv); grid.append(el);
      cells.push({ i, el, img, tg, cv, open: false });
    }
    if ('ResizeObserver' in window) new ResizeObserver(repaintClosed).observe(grid);
    else window.addEventListener('resize', repaintClosed);
    foil.addEventListener('load', repaintClosed);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(repaintClosed);
  }
  function paintCover(c) {
    const r = c.el.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(2, Math.round(r.width * dpr)), h = Math.max(2, Math.round(r.height * dpr));
    c.cv.width = w; c.cv.height = h; c.cv.style.opacity = '1';
    const x = c.cv.getContext('2d');
    x.globalCompositeOperation = 'source-over';
    x.clearRect(0, 0, w, h);
    // v2: the illustrated tile back (same art on every tile). The scratch erases it to show the reaction.
    if (foil.complete && foil.naturalWidth) x.drawImage(foil, 0, 0, w, h);
    else {
      const g = x.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, '#7b2fd6'); g.addColorStop(1, '#4a138f');
      x.fillStyle = g; x.beginPath(); x.roundRect ? x.roundRect(w * 0.04, h * 0.04, w * 0.92, h * 0.92, w * 0.2) : x.rect(0, 0, w, h); x.fill();
    }
  }
  const PATH = [[0.1, 0.16], [0.9, 0.2], [0.12, 0.4], [0.88, 0.5], [0.1, 0.7], [0.9, 0.8], [0.25, 0.94]];
  function pathPoint(t) {
    const segs = PATH.length - 1, p = Math.max(0, Math.min(1, t)) * segs;
    const k = Math.min(segs - 1, Math.floor(p)), f = p - k, a = PATH[k], b = PATH[k + 1];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }
  const CHIP_COLORS = ['#e9d8ff', '#a6f4ff', '#ffc2e4', '#fff3b0', '#d6c4f0'];
  function spawn(el, ms) { board.append(el); setTimeout(() => el.remove(), ms); }
  function foilChip(x, y) {
    const d = document.createElement('i'), size = 3 + Math.random() * 6;
    d.className = 'chip-bit';
    const st = d.style;
    st.left = x + 'px'; st.top = y + 'px'; st.width = size.toFixed(1) + 'px'; st.height = (size * 0.6).toFixed(1) + 'px';
    st.background = CHIP_COLORS[Math.floor(Math.random() * CHIP_COLORS.length)];
    st.setProperty('--dx', Math.round((Math.random() - 0.5) * 90) + 'px');
    st.setProperty('--dy', Math.round(20 + Math.random() * 70) + 'px');
    st.setProperty('--rot', Math.round(Math.random() * 720) + 'deg');
    spawn(d, 750);
  }
  function scratch(c, dur) {
    dur = Math.round(dur * speed());
    return new Promise(res => {
      const fast = reduced || document.hidden, coin = $('scratcher');
      let finished = false;
      const done = () => {
        if (finished) return;
        finished = true; coin.hidden = true; c.el.classList.remove('target', 'tense'); $('grid').classList.remove('spot');
        c.cv.style.opacity = '0'; setTimeout(res, fast ? 0 : 100);
      };
      if (fast) { done(); return; }
      setTimeout(done, dur + 60);
      const x = c.cv.getContext('2d'), w = c.cv.width, h = c.cv.height;
      const br = board.getBoundingClientRect(), cr = c.el.getBoundingClientRect();
      const ox = cr.left - br.left, oy = cr.top - br.top, cw = cr.width, ch = cr.height;
      const coinSize = Math.round(cw * 0.62);
      coin.style.width = coinSize + 'px'; coin.style.height = coinSize + 'px';
      coin.hidden = false;
      x.globalCompositeOperation = 'destination-out';
      x.lineCap = 'round'; x.lineJoin = 'round'; x.lineWidth = w * 0.3;
      const t0 = performance.now();
      let last = pathPoint(0), chips = 0;
      const frame = now => {
        if (finished) return;
        const t = Math.max(0, Math.min(1, (now - t0) / dur)), pt = pathPoint(t);
        x.beginPath(); x.moveTo(last[0] * w, last[1] * h); x.lineTo(pt[0] * w, pt[1] * h); x.stroke();
        last = pt;
        const cx = ox + pt[0] * cw, cy = oy + pt[1] * ch;
        coin.style.transform = `translate(${(cx - coinSize * 0.3).toFixed(1)}px, ${(cy - coinSize * 0.3).toFixed(1)}px) rotate(${Math.round(-25 + 50 * Math.sin(t * 18))}deg)`;
        if (chips < 30) { foilChip(cx, cy); chips++; }
        if (t < 1) requestAnimationFrame(frame); else done();
      };
      requestAnimationFrame(frame);
    });
  }
  function markLatest(c) { cells.forEach(o => o.el.classList.remove('latest')); if (c) c.el.classList.add('latest'); }
  function resetBoard() {
    $('grid').classList.remove('over', 'spot');
    board.classList.remove('checking', 'cracked', 'shielded', 'hot', 'blazing', 'onair');
    document.body.classList.remove('onair');
    roomReset();
    stopChat(); $('onAir').hidden = true;
    cells.forEach(c => { c.open = false; c.sym = null; c.el.className = 'cell'; c.el.style.removeProperty('--tc'); c.img.removeAttribute('src'); c.tg.textContent = ''; paintCover(c); });
  }

  /* ---------- Characters: celebration on reveal, then idle breathing and blinks ---------- */
  // Shows a character on a tile: it lands in its celebration pose, then settles into its normal pose.
  function showSym(c, key, color, celebrateMs = 650) {
    const p = POSE[key];
    c.sym = key;
    if (color) c.el.style.setProperty('--tc', color);
    if (!p) return;
    if (reduced || document.hidden) { c.img.src = p.base; return; }
    c.img.src = p.win;
    clearTimeout(c.poseT);
    c.poseT = setTimeout(() => { if (c.sym === key) c.img.src = p.base; }, Math.round(celebrateMs * speed()));
  }
  // Every so often one open character blinks (the blink frame has the exact same framing).
  function blinkOne() {
    if (reduced || document.hidden) return;
    const open = cells.filter(c => c.open && c.sym && POSE[c.sym] && c.img.src.endsWith(POSE[c.sym].base.slice(6)));
    if (!open.length) return;
    const c = open[Math.floor(Math.random() * open.length)], p = POSE[c.sym];
    c.img.src = p.blink;
    setTimeout(() => { if (c.sym && POSE[c.sym] === p) c.img.src = p.base; }, 140);
  }
  // Live reactions: hearts and flames float up the frame's edge, faster while a post is running and when it heats up.
  const REACT_SRC = [IMG.heart, IMG.heart, IMG.fire, IMG.heart, IMG.rocket, IMG.fire, IMG.crown];
  let reactT = 0;
  function floatReact() {
    const box = $('framebox');
    if (!reduced && !document.hidden && box && box.offsetParent) {
      const heat = Number(getComputedStyle(board).getPropertyValue('--heat')) || 0;
      const n = S.busy ? 1 + (heat > 0.5 ? 1 : 0) : 1;
      for (let k = 0; k < n; k++) {
        const im = document.createElement('img');
        im.className = 'freact'; im.alt = '';
        im.src = REACT_SRC[Math.floor(Math.random() * (S.busy ? REACT_SRC.length : 3))];
        im.style.setProperty('--fd', (2.2 + Math.random() * 1.2).toFixed(2) + 's');
        im.style.setProperty('--sw', Math.round(8 + Math.random() * 22) + '%');
        im.style.right = (1 + Math.random() * 4).toFixed(1) + '%';
        im.style.animationDelay = (k * 0.15) + 's';
        box.append(im);
        setTimeout(() => im.remove(), 4000);
      }
    }
    const heat = Number(getComputedStyle(board).getPropertyValue('--heat')) || 0;
    reactT = setTimeout(floatReact, document.body.classList.contains('onair') ? 220 : S.busy ? Math.round(520 - heat * 300) : 1600);
  }
  // At the end of a winning round, every character on the board celebrates together.
  function celebrateAll() {
    if (reduced || document.hidden) return;
    cells.forEach((c, k) => { if (c.open && POSE[c.sym]) setTimeout(() => showSym(c, c.sym, null, 1400), k * 18); });
  }

  /* ---------- Effects ---------- */
  const fx = $('fx');
  let parts = [], fxOn = false;
  function sizeFx() {
    const r = fx.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(2, Math.round(r.width * dpr)), h = Math.max(2, Math.round(r.height * dpr));
    if (fx.width !== w || fx.height !== h) { fx.width = w; fx.height = h; }
    return dpr;
  }
  function sparks(c, color, n) {
    if (reduced || document.hidden) return;
    const dpr = sizeFx(), b = fx.getBoundingClientRect(), r = c.el.getBoundingClientRect();
    const cx = (r.left - b.left + r.width / 2) * dpr, cy = (r.top - b.top + r.height / 2) * dpr, sp = r.width * dpr * 0.11;
    for (let k = 0; k < n; k++) {
      const a = Math.random() * 6.283, v = sp * (0.35 + Math.random());
      parts.push({ x: cx, y: cy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - sp * 0.25, s: (1.6 + Math.random() * 2.6) * dpr, r: 0, vr: 0, c: k % 3 ? color : '#ffffff', life: 1, spark: true });
    }
    if (!fxOn) { fxOn = true; requestAnimationFrame(stepFx); }
  }
  function confetti(count = 110) {
    if (reduced || document.hidden) return;
    const dpr = sizeFx(), cols = ['#ff2e88', '#ffd23f', '#33e4f0', '#ffffff', '#b28dff'];
    for (let i = 0; i < count; i++) {
      parts.push({ x: fx.width / 2, y: fx.height * 0.55, vx: (Math.random() - 0.5) * fx.width * 0.03, vy: -(Math.random() * 0.035 + 0.012) * fx.height, s: (Math.random() * 6 + 4) * dpr, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, c: cols[i % cols.length], life: 1 });
    }
    if (!fxOn) { fxOn = true; requestAnimationFrame(stepFx); }
  }
  function stepFx() {
    const x = fx.getContext('2d');
    x.clearRect(0, 0, fx.width, fx.height);
    const g = fx.height * 0.0016;
    parts.forEach(p => {
      if (p.spark) { p.vx *= 0.93; p.vy = p.vy * 0.93 + g * 0.35; p.life -= 0.032; } else { p.vy += g; p.vx *= 0.99; p.r += p.vr; p.life -= 0.011; }
      p.x += p.vx; p.y += p.vy;
      x.save(); x.globalAlpha = Math.max(0, p.life); x.fillStyle = p.c;
      if (p.spark) { x.globalCompositeOperation = 'lighter'; x.beginPath(); x.arc(p.x, p.y, p.s * Math.max(0.25, p.life), 0, 6.283); x.fill(); }
      else { x.translate(p.x, p.y); x.rotate(p.r); x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); }
      x.restore();
    });
    parts = parts.filter(p => p.life > 0 && p.y < fx.height + 40);
    if (parts.length) requestAnimationFrame(stepFx); else { fxOn = false; x.clearRect(0, 0, fx.width, fx.height); }
  }
  function cellBox(c) {
    const b = board.getBoundingClientRect(), r = c.el.getBoundingClientRect();
    return { x: r.left - b.left, y: r.top - b.top, w: r.width };
  }
  function ringAt(c, color) {
    if (reduced || document.hidden) return;
    const { x, y, w } = cellBox(c), d = document.createElement('div');
    d.className = 'rv-ring';
    Object.assign(d.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: w + 'px' });
    d.style.setProperty('--rc', color);
    spawn(d, 800);
  }
  function burstAt(c, color) {
    if (reduced || document.hidden) return;
    const { x, y, w } = cellBox(c), d = document.createElement('div');
    d.className = 'burst';
    Object.assign(d.style, { left: (x - w * 0.25) + 'px', top: (y - w * 0.25) + 'px', width: w * 1.5 + 'px', height: w * 1.5 + 'px' });
    d.style.setProperty('--rc', color);
    spawn(d, 600);
  }
  function popFrom(c, reaction, gainedX) {
    if (reduced || document.hidden) return;
    const { x, y, w } = cellBox(c), cx = x + w / 2, cy = y + w / 2;
    const n = 3 + TIERS.indexOf(reaction) * 2;
    for (let k = 0; k < n; k++) {
      const p = document.createElement('img'), size = Math.round(w * (0.28 + Math.random() * 0.22));
      p.className = 'pop'; p.src = IMG[reaction]; p.alt = '';
      Object.assign(p.style, { left: (cx - size / 2) + 'px', top: (cy - size / 2) + 'px', width: size + 'px', height: size + 'px', animationDelay: k * 40 + 'ms' });
      p.style.setProperty('--dx', Math.round((Math.random() - 0.5) * w * 2.2) + 'px');
      p.style.setProperty('--dy', Math.round(-w * (0.9 + Math.random() * 1.4)) + 'px');
      p.style.setProperty('--rot', Math.round((Math.random() - 0.5) * 90) + 'deg');
      spawn(p, 1600);
    }
    const t = document.createElement('div');
    t.className = 'pop-text'; t.textContent = '+' + fmtX(gainedX).slice(1) + '×';
    t.style.left = cx + 'px'; t.style.top = (cy - w * 0.6) + 'px';
    spawn(t, 1300);
  }
  function flashBoard(color) {
    if (reduced) return;
    const f = $('flash');
    f.style.setProperty('--flash', color);
    f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
  }
  function shake() { if (!reduced) { board.classList.remove('shake'); void board.offsetWidth; board.classList.add('shake'); } }
  let hypeTimer = 0;
  function showHype(label, color) {
    const h = $('hype');
    h.textContent = label; h.style.setProperty('--hype', color); h.hidden = false;
    h.style.animation = 'none'; void h.offsetWidth; h.style.animation = '';
    clearTimeout(hypeTimer);
    hypeTimer = setTimeout(() => { h.hidden = true; }, 1450);
  }
  function rain(n, srcs = [IMG.crown, IMG.heart, IMG.fire, IMG.rocket]) {
    if (reduced || document.hidden) return;
    const w = board.clientWidth, h = board.clientHeight;
    for (let k = 0; k < n; k++) {
      const im = document.createElement('img'), size = Math.round(26 + Math.random() * 30), t = 1.2 + Math.random() * 1.2;
      im.className = 'rain'; im.alt = ''; im.src = srcs[k % srcs.length];
      Object.assign(im.style, { left: Math.round(Math.random() * (w - size)) + 'px', width: size + 'px', height: size + 'px', animationDelay: (Math.random() * 0.8).toFixed(2) + 's' });
      im.style.setProperty('--fall', (h + 40) + 'px'); im.style.setProperty('--t', t.toFixed(2) + 's');
      im.style.setProperty('--rot', Math.round((Math.random() - 0.5) * 360) + 'deg');
      spawn(im, (t + 0.9) * 1000);
    }
  }
  function setHeat(x) {
    const heat = x <= 0.2 ? 0 : Math.min(1, Math.log(x / 0.2) / Math.log(METER_MAX / 0.2));
    board.style.setProperty('--heat', heat.toFixed(3));
    document.documentElement.style.setProperty('--heat', heat.toFixed(3));
    board.classList.toggle('hot', heat >= 0.3 && heat < 0.6);
    board.classList.toggle('blazing', heat >= 0.6);
    const mw = $('multWrap');
    mw.style.setProperty('--beat', (1.1 - heat * 0.75).toFixed(2) + 's');
    mw.classList.toggle('beat', S.busy && x > 0);
  }
  function glitchScreen() {
    if (reduced || document.hidden) return;
    const g = $('glitch'); g.classList.remove('go'); void g.offsetWidth; g.classList.add('go');
    setTimeout(() => g.classList.remove('go'), 700);
  }
  function drawCracks(c) {
    if (reduced || document.hidden) return;
    const cv = $('cracks'), b = board.getBoundingClientRect(), r = c.el.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.max(2, Math.round(b.width * dpr)); cv.height = Math.max(2, Math.round(b.height * dpr));
    const x = cv.getContext('2d'), fx0 = r.left - b.left + r.width / 2, fy0 = r.top - b.top + r.height / 2;
    cv.style.setProperty('--kx', (fx0 / b.width * 100).toFixed(1) + '%');
    cv.style.setProperty('--ky', (fy0 / b.height * 100).toFixed(1) + '%');
    x.lineCap = 'round'; x.lineJoin = 'round';
    x.strokeStyle = 'rgba(255,236,240,.92)'; x.shadowColor = 'rgba(255,40,70,.95)'; x.shadowBlur = 9 * dpr;
    const branch = (px, py, ang, len, wd, depth) => {
      const pts = [[px, py]];
      for (let d = 0; d < len;) {
        const seg = (16 + Math.random() * 32) * dpr;
        ang += (Math.random() - 0.5) * 0.75;
        px += Math.cos(ang) * seg; py += Math.sin(ang) * seg; d += seg;
        pts.push([px, py]);
        if (depth < 2 && Math.random() < 0.28) branch(px, py, ang + (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.6), len * 0.35, wd * 0.6, depth + 1);
      }
      for (let k = 1; k < pts.length; k++) {
        x.beginPath(); x.moveTo(pts[k - 1][0], pts[k - 1][1]); x.lineTo(pts[k][0], pts[k][1]);
        x.lineWidth = Math.max(0.6 * dpr, wd * (1 - k / pts.length * 0.75)); x.stroke();
      }
    };
    const n = 8 + Math.floor(Math.random() * 3), a0 = Math.random() * 6.283, reach = Math.hypot(cv.width, cv.height);
    for (let k = 0; k < n; k++) branch(fx0 * dpr, fy0 * dpr, a0 + k / n * 6.283, reach * (0.22 + Math.random() * 0.38), 2.6 * dpr, 0);
    board.classList.remove('cracked'); void board.offsetWidth; board.classList.add('cracked');
  }
  function initLight() {
    if (reduced) return;
    const grid = $('grid');
    let tx = 0.5, ty = 0.5, x = 0.5, y = 0.5, tiltX = 0, tiltY = 0, lastInput = -1e9, frame = 0;
    window.addEventListener('pointermove', e => {
      const r = grid.getBoundingClientRect();
      if (!r.width) return;
      tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height; lastInput = performance.now();
    }, { passive: true });
    const loop = now => {
      requestAnimationFrame(loop);
      if (document.hidden) return;
      const idle = now - lastInput > 2500;
      if (idle) { const t = now / 1000; tx = 0.5 + Math.cos(t * 0.55) * 0.8; ty = 0.5 + Math.sin(t * 0.8) * 0.65; }
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      const clamp = v => Math.max(-0.8, Math.min(0.8, v));
      tiltX += ((idle ? 0 : clamp(x - 0.5) * 3) - tiltX) * 0.1;
      tiltY += ((idle ? 0 : clamp(0.5 - y) * 3) - tiltY) * 0.1;
      if (idle && (frame++ & 1)) return;
      grid.style.setProperty('--mx', x.toFixed(3)); grid.style.setProperty('--my', y.toFixed(3));
      // The room behind drifts a little against the pointer (parallax), so the scene has depth.
      const root = document.documentElement.style;
      root.setProperty('--px', ((x - 0.5) * -1).toFixed(3)); root.setProperty('--py', ((y - 0.5) * -1).toFixed(3));
      grid.style.setProperty('--tx', tiltX.toFixed(2)); grid.style.setProperty('--ty', tiltY.toFixed(2));
    };
    requestAnimationFrame(loop);
  }
  function jiggleOne() {
    if (reduced || document.hidden) return;
    const closed = cells.filter(c => !c.open && !c.el.classList.contains('target'));
    if (!closed.length) return;
    const c = closed[Math.floor(Math.random() * closed.length)];
    c.el.classList.remove('jiggle'); void c.el.offsetWidth; c.el.classList.add('jiggle');
    setTimeout(() => c.el.classList.remove('jiggle'), 500);
  }

  /* ---------- HUD ---------- */
  let tweenId = 0;
  function setMult(x, cls) {
    const el = $('mult'), from = S.shownX, id = ++tweenId, t0 = performance.now(), d = reduced || document.hidden ? 0 : 260;
    const finish = () => { if (id !== tweenId) return; S.shownX = x; el.textContent = fmtX(x); };
    if (d) {
      setTimeout(finish, d + 40);
      const tick = now => {
        if (id !== tweenId) return;
        const t = Math.max(0, Math.min(1, (now - t0) / d)), v = from + (x - from) * (1 - Math.pow(1 - t, 3));
        el.textContent = fmtX(v);
        if (t < 1) requestAnimationFrame(tick); else finish();
      };
      requestAnimationFrame(tick);
    } else finish();
    el.className = 'mult ' + (cls || (x >= 25 ? 't4' : x >= 3 ? 't3' : x >= 1 ? 't2' : ''));
    if (x > from && !reduced) { void el.offsetWidth; el.classList.add('bump'); }
    const views = x * 40000;
    $('views').textContent = compact(views);
    if (x > from && !reduced) { const vb = $('views'); vb.classList.remove('bump'); void vb.offsetWidth; vb.classList.add('bump'); }
    $('meter').style.width = (x <= 0.2 ? 0 : Math.min(100, Math.log(x / 0.2) / Math.log(METER_MAX / 0.2) * 100)).toFixed(1) + '%';
    $('marks').querySelectorAll('span').forEach(s => s.classList.toggle('hit', x >= Number(s.dataset.m)));
  }
  function setChip(kind, text) { const c = $('chip'); c.className = 'chip ' + kind; c.textContent = text; }
  function setLocked(x, animate) {
    const p = $('lockPill');
    p.classList.toggle('off', !(x > 0));
    $('lockText').textContent = x > 0 ? `Secured ${fmtX(x)}` : 'Nothing secured';
    if (animate && !reduced) { p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop'); }
  }
  function setShield(on) { $('shieldPill').hidden = !on; board.classList.toggle('shielded', on); }
  let winShown = 0, winTimer = 0;
  function setWin(units, animate) {
    const el = $('winAmt'), from = winShown, t0 = performance.now(), d = animate && !reduced ? 600 : 0;
    winShown = units;
    clearTimeout(winTimer);
    const step = () => {
      const t = d ? Math.min(1, (performance.now() - t0) / d) : 1;
      el.textContent = t >= 1 ? winMoney(units) : money(Math.round(from + (units - from) * t));
      if (t < 1) winTimer = setTimeout(step, 30);
    };
    step();
  }
  function setBalance(units, animate) {
    S.balance = units;
    const el = $('balance');
    el.textContent = money(units);
    if (animate && !reduced) { const w = $('wallet'); w.classList.remove('up'); void w.offsetWidth; w.classList.add('up'); }
  }
  function showBigWin(units, x) {
    const bw = $('bigwin'), amt = $('bigwinAmt'), t0 = performance.now(), dur = 1100 * speed(), mega = x >= 50;
    $('bigwinImg').src = mega ? IMG.megawin : IMG.bigwin;
    $('bigwinImg').alt = mega ? 'Mega win' : 'Big win';
    bw.hidden = false;
    const count = () => {
      const t = Math.min(1, (performance.now() - t0) / dur);
      amt.textContent = t >= 1 ? winMoney(units) : money(Math.round(units * (1 - Math.pow(1 - t, 3))));
      if (t < 1) setTimeout(count, 30);
    };
    count(); confetti(180); rain(mega ? 48 : 30); sfx.bigwin(); playFx('vidWin');
    return sleep(2600).then(() => { bw.hidden = true; });
  }
  function renderHistory(fresh) {
    $('history').replaceChildren(...S.history.map((x, k) => {
      const s = document.createElement('span');
      s.className = 'pill ' + (x >= 100 ? 'max' : x >= 10 ? 'hi' : x >= 1 ? 'mid' : '') + (fresh && k === 0 ? ' new' : '');
      s.textContent = fmtX(x);
      return s;
    }));
  }

  /* ---------- Hype Check ---------- */
  async function hypeCheck(e, state) {
    const ck = $('check'), opts = Array.from($('checkOpts').children);
    board.classList.add('checking');
    setChip('check', 'HYPE CHECK');
    $('checkSub').textContent = `Post at ${fmtX(state.mult / 100)} · the algorithm decides…`;
    opts.forEach(o => o.classList.remove('lit', 'win'));
    ck.classList.remove('done');
    ck.hidden = false; ck.style.animation = 'none'; void ck.offsetWidth; ck.style.animation = '';
    flashBoard('#ffd23f'); confetti(40); sfx.hype(); shake();
    // A short, even sweep across the four effects, ending on the one the server sent. No slowdown on any other.
    const target = opts.findIndex(o => o.dataset.k === e.outcome);
    const steps = 8 + target;
    for (let k = 0; k <= steps; k++) {
      opts.forEach((o, j) => o.classList.toggle('lit', j === k % 4));
      sfx.tick();
      await sleep(95);
    }
    opts.forEach(o => o.classList.remove('lit'));
    opts[target].classList.add('win');
    ck.classList.add('done');
    const info = HYPE_INFO[e.outcome] || HYPE_INFO.lock;
    $('checkSub').textContent = info.text;
    await sleep(700);
    ck.hidden = true;
    board.classList.remove('checking');
    setChip('live', 'LIVE');
    // Apply the effect to the board and HUD.
    showHype(info.label, info.color);
    flashBoard(info.color);
    if (e.outcome === 'boost' || e.outcome === 'repost') {
      setMult(e.mult / 100); setHeat(e.mult / 100);
      confetti(e.outcome === 'repost' ? 160 : 90); rain(e.outcome === 'repost' ? 36 : 16);
      if (e.outcome === 'repost') { playFx('vidWin'); sfx.bigwin(); } else sfx.cash();
    } else if (e.outcome === 'shield') { sfx.shield(); setShield(true); }
    else sfx.lock();
    state.mult = e.mult; state.locked = e.locked;
    setLocked(e.locked / 100, true);
    setWin(Math.round(state.amount * e.locked / 100), true);
    await sleep(e.outcome === 'repost' ? 1400 : 900);
  }

  /* ---------- Round playback ---------- */
  // Plays a round's events. Everything shown comes from the events; nothing here can change the result.
  /* ---------- LIVE STREAM ---------- */
  let chatTimer = 0;
  function chatPush(text) {
    const box = $('chat');
    while (box.children.length >= 5) box.firstElementChild.remove();
    const d = document.createElement('div');
    d.className = 'bubble'; d.textContent = text;
    box.append(d);
    setTimeout(() => d.remove(), 4200);
  }
  function startChat() {
    stopChat();
    const tick = () => { chatPush(CHAT[Math.floor(Math.random() * CHAT.length)]); chatTimer = setTimeout(tick, Math.round((380 + Math.random() * 500) * speed())); };
    tick();
  }
  function stopChat() { clearTimeout(chatTimer); chatTimer = 0; }
  function setOnAir(x, left) {
    $('viewers').textContent = compact(Math.max(1, x) * 40000);
    $('streamLeft').textContent = left > 0 ? left + ' live tile' + (left === 1 ? '' : 's') + ' left' : 'Stream ending';
  }
  const streamImg = x => (x >= 10 ? IMG.crown : x >= 3 ? IMG.rocket : x >= 2 ? IMG.fire : IMG.heart);

  async function playRound(events, amount) {
    const state = { mult: 0, locked: 0, amount, revealed: 0 };
    resetBoard();
    setMult(0); setLocked(0); setShield(false); setWin(0); setHeat(0);
    hmReset();
    $('result').hidden = true; $('bigwin').hidden = true; $('hype').hidden = true;
    setChip('live', 'LIVE');
    $('roundLabel').textContent = 'Live now';
    await sleep(500);
    let finalPay = 0, ending = 'cancel', bustCell = null;
    for (const e of events) {
      if (e.type === 'reveal' || e.type === 'cancel') {
        const c = cells[e.tile];
        if (!c) continue;
        const isCancel = e.type === 'cancel';
        c.img.src = isCancel ? IMG.cancelled : POSE[e.reaction].win;
        c.el.classList.add('peek');
        if (isCancel) c.el.classList.add('bustprep');
        // The hold before a reveal depends only on how far the post has run, never on what is under the tile.
        const suspense = state.revealed >= 6 ? Math.min(600, 100 + (state.revealed - 6) * 30) : 0;
        if (!reduced && !document.hidden) {
          c.el.classList.add('target');
          if (suspense) { c.el.classList.add('tense'); $('grid').classList.add('spot'); sfx.thump(); }
          await sleep(260 + suspense);
        }
        sfx.scratch();
        await scratch(c, 640);
        c.open = true;
        if (e.type === 'reveal') {
          state.revealed++;
          const prev = state.mult / 100;
          state.mult = e.mult;
          c.tg.textContent = '+' + (e.add / 100).toFixed(2) + '×';
          markLatest(c); c.el.classList.add('on');
          c.el.classList.remove('popin'); void c.el.offsetWidth; c.el.classList.add('popin');
          setTimeout(() => c.el.classList.remove('popin'), 700);
          const col = TIER_COLORS[e.reaction] || '#ffd23f';
          showSym(c, e.reaction, col, 520 + TIERS.indexOf(e.reaction) * 180);
          ringAt(c, col); burstAt(c, col); sparks(c, col, 12 + TIERS.indexOf(e.reaction) * 6);
          setMult(e.mult / 100); setHeat(e.mult / 100);
          sfx.pop(state.revealed);
          popFrom(c, e.reaction, e.add / 100);
          hmSet(e.meter, e.reaction.charAt(0).toUpperCase() + e.reaction.slice(1), '', IMG[e.reaction]);
          const ms = MILESTONES.filter(m => prev < m.m && e.mult / 100 >= m.m).pop();
          if (ms) { showHype(ms.label, ms.color); flashBoard(ms.color); confetti(50); sfx.hype(); }
          await sleep(Math.max(420, 780 - state.revealed * 15));
        } else if (e.saved) {
          // The shield blocks this cancel: the tile is stamped and the post keeps going.
          c.el.classList.remove('bustprep', 'peek'); c.el.classList.add('saved', 'on');
          c.tg.textContent = 'BLOCKED';
          markLatest(null);
          setShield(false);
          flashBoard('#33e4f0'); shake(); sfx.shield();
          showHype('SHIELD SAVED IT', '#33e4f0');
          hmLog('Shield blocked a cancel', 'good');
          sparks(c, '#33e4f0', 30);
          await sleep(1300);
        } else {
          c.el.classList.remove('bustprep'); c.el.classList.add('dead', 'on');
          c.img.src = IMG.cancelDrama;
          c.tg.textContent = '';
          markLatest(null);
          bustCell = c;
          ending = 'cancel';
          hmDrain('CANCELLED · meter lost');
        }
      } else if (e.type === 'live') {
        // The post goes live: a LIVE tile, then the stream.
        const c = cells[e.tile];
        if (c) {
          c.img.src = IMG.live; c.el.classList.add('peek');
          if (!e.bought && !reduced && !document.hidden) { c.el.classList.add('target', 'tense'); $('grid').classList.add('spot'); sfx.thump(); await sleep(500); }
          if (!e.bought) { sfx.scratch(); await scratch(c, 640); }
          c.open = true; c.el.classList.remove('peek'); c.el.classList.add('on', 'livetile');
          c.tg.textContent = 'LIVE'; markLatest(c);
          c.cv.style.opacity = '0';
          showSym(c, 'live', '#ff3d4a', 1400);
        }
        state.mult = e.mult; ending = 'live';
        document.body.classList.add('onair');
        board.classList.add('onair'); $('onAir').hidden = false; setOnAir(e.mult / 100, STREAM_TILES);
        setChip('live', 'ON AIR');
        $('roundLabel').textContent = 'Live stream';
        showHype(e.bought ? 'GOING LIVE' : "YOU'RE LIVE!", '#ff3d4a');
        flashBoard('#ff3d4a'); shake(); confetti(120); rain(20); sfx.hype(); playFx('vidWin');
        setMult(e.mult / 100); setHeat(e.mult / 100);
        setLocked(e.mult / 100, true);
        setWin(Math.round(amount * e.mult / 100), true);
        startChat();
        hmGoLive(!!e.bought);
        await sleep(1700);
      } else if (e.type === 'stream') {
        const c = cells[e.tile];
        if (!c) continue;
        c.img.src = streamImg(e.x); c.el.classList.add('peek');
        if (!reduced && !document.hidden) { c.el.classList.add('target'); await sleep(200); }
        sfx.scratch();
        await scratch(c, 420);
        c.open = true; c.el.classList.remove('peek'); c.el.classList.add('on', 'streamt');
        if (e.x >= 3) c.el.classList.add('big');
        c.tg.textContent = '×' + e.x;
        markLatest(c);
        c.el.classList.remove('popin'); void c.el.offsetWidth; c.el.classList.add('popin');
        setTimeout(() => c.el.classList.remove('popin'), 700);
        const col = e.x >= 10 ? '#ffd23f' : e.x >= 3 ? '#ff2e88' : '#ff3d4a';
        showSym(c, e.x >= 10 ? 'crown' : e.x >= 3 ? 'rocket' : e.x >= 2 ? 'fire' : 'heart', col, e.x >= 3 ? 1000 : 600);
        ringAt(c, col); burstAt(c, col); sparks(c, col, 14 + Math.min(40, e.x * 4));
        state.mult = e.mult;
        setMult(e.mult / 100); setHeat(e.mult / 100);
        setLocked(e.mult / 100, false);
        setWin(Math.round(amount * e.mult / 100), true);
        setOnAir(e.mult / 100, e.left);
        sfx.pop(10 + (STREAM_TILES - e.left) * 3);
        chatPush(e.x >= 5 ? '×' + e.x + '!!! 🤯' : '×' + e.x + ' 🔥');
        hmLog('Live ×' + e.x, 'live', streamImg(e.x));
        if (e.x >= 3) { showHype('×' + e.x, col); flashBoard(col); confetti(e.x >= 10 ? 200 : 80); if (e.x >= 10) { rain(40); sfx.bigwin(); } else sfx.hype(); }
        await sleep(e.x >= 3 ? 1100 : 650);
      } else if (e.type === 'streamEnd') {
        stopChat();
        $('streamLeft').textContent = 'Stream ended';
        state.mult = e.mult; ending = 'live';
        await sleep(700);
      } else if (e.type === 'hype') {
        await hypeCheck(e, state);
        hmSet(e.meter, { lock: 'Lock', shield: 'Shield', boost: 'Boost ×2', repost: 'Repost ×5' }[e.outcome] || 'Hype Check', 'hype', IMG.crown);
      } else if (e.type === 'viral') {
        state.mult = e.mult; ending = 'viral';
        setMult(e.mult / 100); setHeat(e.mult / 100);
        showHype('WENT VIRAL ×2', '#ff2e88');
        hmLog('WENT VIRAL ×2', 'live', IMG.crown);
        flashBoard('#ff2e88'); confetti(200); rain(48); playFx('vidWin'); sfx.bigwin();
        await sleep(1500);
      } else if (e.type === 'final') {
        finalPay = e.payout;
        if (e.capped) {
          ending = 'cap';
          setMult(MAX_WIN_X); setLocked(MAX_WIN_X, true);
          showHype('MAX WIN ' + group(String(MAX_WIN_X)) + '×', '#ffd23f');
          flashBoard('#ffd23f'); confetti(200);
          await sleep(1500);
        } else if (ending === 'viral' || ending === 'live') setLocked(e.payout / 100, true);
      }
    }
    // Ending
    const winX = finalPay / 100, winUnits = Math.round(amount * finalPay / 100);
    $('grid').classList.add('over');
    if (ending === 'cancel') {
      glitchScreen(); if (bustCell) drawCracks(bustCell); flashBoard('#ff3d4a'); playFx('vidBust'); shake(); sfx.bust();
      setChip('bust', 'CANCELLED');
      setMult(state.mult / 100, 'dead');
      $('roundLabel').textContent = winX > 0 ? `Cancelled · secured ${fmtX(winX)}` : 'Cancelled';
    } else {
      setChip('max', ending === 'cap' ? 'MAX WIN' : ending === 'live' ? 'STREAM ENDED' : 'WENT VIRAL');
      $('roundLabel').textContent = ending === 'cap' ? `Max win ${fmtX(winX)} (capped)` : ending === 'live' ? `Live stream ${fmtX(winX)}` : `Went viral ${fmtX(winX)}`;
    }
    setHeat(0);
    setWin(winUnits, true);
    if (ending !== 'cancel' || winX >= 1) celebrateAll();
    if (winX >= 10) await showBigWin(winUnits, winX);
    else if (winX >= 1) { confetti(70); sfx.cash(); roomPulse('win'); }
    const r = $('result');
    r.className = 'result' + (ending !== 'cancel' ? ' viral' : '');
    stopChat();
    $('resultImg').src = ending === 'cancel' ? IMG.cancelTxt : ending === 'live' ? POSE.live.win : POSE.crown.win;
    $('resultImg').alt = ending === 'cancel' ? 'Cancelled' : ending === 'live' ? 'Live stream' : 'Went viral';
    $('resultText').textContent = winUnits > 0 ? `You win ${winMoney(winUnits)} · ${fmtX(winX)}` : 'No win this time';
    r.hidden = false;
    return { winX, winUnits, live: events.some(e => e.type === 'live') };
  }

  /* ---------- Hype Meter: fills during the round; at 100% the post goes LIVE ----------
   * The level always comes from the round's events (the RGS result), so it shows exactly what the math did. */
  const HM = { lv: 0, streak: 0 };
  const HM_LEVELS = [[0, 'Warming up'], [0.25, 'Heating up'], [0.5, 'On fire'], [0.75, 'Almost live!'], [1, 'ON AIR']];
  function hmRender(bump) {
    const el = $('hm'), lv = Math.max(0, Math.min(1, HM.lv));
    el.style.setProperty('--lv', lv.toFixed(3));
    $('hmPct').textContent = Math.round(lv * 100) + '%';
    if (bump && !reduced) { const p = $('hmPct'); p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); }
    $('hmLvl').textContent = HM_LEVELS.filter(l => lv >= l[0]).pop()[1];
    $('hmIcon').src = lv >= 1 ? IMG.live : lv >= 0.75 ? IMG.crown : lv >= 0.5 ? IMG.rocket : lv >= 0.25 ? IMG.fire : IMG.heart;
    el.classList.toggle('charged', lv >= 0.75 && lv < 1);
    el.classList.toggle('full', lv >= 1);
    $('hmHint').textContent = lv >= 1 ? 'On air: the stream is running' : 'Fill it to go LIVE';
    $('hmStreak').hidden = HM.streak < 2;
    $('hmStreakN').textContent = String(HM.streak);
  }
  function hmSparks(n) {
    if (reduced || document.hidden) return;
    const el = $('hm'), r = el.getBoundingClientRect(), tube = $('hmTube').getBoundingClientRect();
    const cx = tube.left - r.left + tube.width / 2, cy = tube.top - r.top + tube.height * (1 - Math.min(1, HM.lv));
    const cols = ['#ffd23f', '#ff2e88', '#33e4f0', '#ffffff'];
    for (let k = 0; k < n; k++) {
      const d = document.createElement('i'), ang = Math.random() * 6.283, v = 40 + Math.random() * 160;
      d.className = 'hm-spark';
      d.style.left = cx + 'px'; d.style.top = cy + 'px';
      d.style.setProperty('--s', (4 + Math.random() * 8).toFixed(1) + 'px');
      d.style.setProperty('--c', cols[k % cols.length]);
      d.style.setProperty('--dx', Math.round(Math.cos(ang) * v) + 'px');
      d.style.setProperty('--dy', Math.round(Math.sin(ang) * v) + 'px');
      d.style.animationDelay = Math.round(Math.random() * 120) + 'ms';
      el.append(d);
      setTimeout(() => d.remove(), 1200);
    }
  }
  // One line in the meter's log: what just happened and how much it added.
  function hmLog(text, cls, img) {
    const box = $('hmLog');
    const d = document.createElement('div');
    d.className = 'hm-entry ' + (cls || '');
    if (img) { const i = document.createElement('img'); i.src = img; i.alt = ''; d.append(i); }
    const s = document.createElement('span'); s.textContent = text; d.append(s);
    box.prepend(d);
    while (box.children.length > 7) box.lastElementChild.remove();
  }
  // A new round: the meter starts empty.
  function hmReset() {
    HM.lv = 0; $('hmLog').replaceChildren(); $('hmBoom').hidden = true;
    $('hm').classList.remove('full', 'charged');
    hmRender(false);
  }
  // Sets the meter from an event's meter value (0-100) and logs what filled it.
  function hmSet(meter, text, cls, img) {
    if (!Number.isFinite(meter)) return;
    const prev = HM.lv, lv = Math.min(1, meter / 100), gain = lv - prev;
    HM.lv = lv;
    if (text) hmLog((gain > 0 ? '+' + Math.round(gain * 100) + '% ' : '') + text, cls, img);
    if (gain >= 0.1) hmSparks(Math.round(10 + gain * 50));
    hmRender(gain > 0);
  }
  function hmDrain(text) {
    hmLog(text, 'bad', IMG.cancelled);
    if (!reduced) { const t = $('hmTube'); t.classList.remove('drain'); void t.offsetWidth; t.classList.add('drain'); }
  }
  // The meter hits 100%: it bursts and the post goes live.
  function hmGoLive(bought) {
    HM.lv = 1; hmRender(true);
    hmLog(bought ? 'GO LIVE · stream starts at 10.00×' : 'METER FULL · going LIVE', 'live', IMG.live);
    const el = $('hm'), boom = $('hmBoom');
    el.classList.remove('hm-flashing'); void el.offsetWidth; el.classList.add('hm-flashing');
    if (!reduced) { const s = document.querySelector('.side'); s.classList.remove('boom'); void s.offsetWidth; s.classList.add('boom'); }
    boom.hidden = false; boom.style.animation = 'none'; void boom.offsetWidth; boom.style.animation = '';
    setTimeout(() => { boom.hidden = true; }, 1600);
    hmSparks(46);
  }
  // After each round: wins of at least the play amount build a streak (a label only).
  function hmFeed(winX) {
    if (winX >= 1) HM.streak++; else HM.streak = 0;
    hmRender(false);
  }

  /* ---------- Play amount ---------- */
  function fillLevels() {
    const sel = $('amtSelect');
    sel.replaceChildren(...S.levels.map(v => { const o = document.createElement('option'); o.value = String(v); o.textContent = money(v); return o; }));
    sel.value = String(S.amount);
    $('amtText').textContent = money(S.amount);
    const i = S.levels.indexOf(S.amount);
    $('amtMinus').disabled = S.busy || i <= 0;
    $('amtPlus').disabled = S.busy || i >= S.levels.length - 1;
    $('minBtn').disabled = S.busy; $('maxBtn').disabled = S.busy; sel.disabled = S.busy;
  }
  function setAmount(v) {
    if (!S.levels.includes(v)) v = S.levels.reduce((best, l) => Math.abs(l - v) < Math.abs(best - v) ? l : best, S.levels[0]);
    S.amount = v; showMsg(''); fillLevels(); renderAction();
  }
  function stepAmount(dir) { const i = S.levels.indexOf(S.amount); const n = S.levels[i + dir]; if (n !== undefined) setAmount(n); }
  function buildLevels(cfg) {
    let levels = Array.isArray(cfg.betLevels) ? cfg.betLevels.filter(v => Number.isFinite(v) && v > 0) : [];
    const min = cfg.minBet, max = cfg.maxBet, step = cfg.stepBet;
    if (!levels.length && min > 0 && max >= min && step > 0) {
      for (let v = min; v <= max && levels.length < 60; v += step) levels.push(v);
    }
    // Only ever offer amounts the RGS listed, inside its min and max.
    if (min > 0) levels = levels.filter(v => v >= min);
    if (max > 0) levels = levels.filter(v => v <= max);
    S.levels = Array.from(new Set(levels)).sort((a, b) => a - b);
    S.minBet = S.levels[0]; S.maxBet = S.levels[S.levels.length - 1];
  }

  /* ---------- Messages ---------- */
  function showMsg(text) { const m = $('msg'); m.textContent = text; m.hidden = !text; }
  let toastTimer = 0;
  function toast(text, ms = 4000) {
    const t = $('toast'); t.textContent = text; t.hidden = false;
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
    const btn = $('action');
    if (P.replay) {
      btn.disabled = S.busy || !S.replayData;
      btn.classList.toggle('busy', S.busy);
      $('actionLabel').textContent = S.busy ? 'REPLAYING' : S.replayed ? 'PLAY AGAIN' : 'PLAY REPLAY';
      $('actionSub').textContent = ' ';
      return;
    }
    const auto = !!S.auto;
    btn.disabled = auto ? false : (S.busy || !S.ready);
    btn.classList.toggle('busy', S.busy && !auto);
    btn.classList.toggle('auto', auto);
    $('actionLabel').textContent = auto ? 'STOP' : S.busy ? '' : 'PLAY';
    $('autoBtn').classList.toggle('on', auto);
    $('autoLbl').textContent = auto ? S.auto.left + ' LEFT' : 'AUTO';
    btn.setAttribute('aria-label', auto ? 'Stop autoplay' : S.busy ? 'Round in play' : 'Play ' + (S.amount ? money(S.amount) : ''));
    $('autoBtn').disabled = !S.ready || (S.busy && !auto);
    $('actionSub').textContent = S.amount ? money(S.amount) : ' ';
    $('buyBtn').disabled = S.busy || !S.ready || auto;
    $('buyPrice').textContent = S.amount ? money(S.amount * S.buyCost) : '';
    fillLevels();
  }
  // Go Live costs more than 2x, so it always asks first and states the price.
  function onBuy() {
    S.interacted = true;
    if (S.busy || !S.ready || P.replay) return;
    const cost = S.amount * S.buyCost;
    if (cost > S.balance) { showMsg('Your balance is too low for Go Live at this play amount.'); return; }
    $('buyText').textContent = 'Start the LIVE STREAM bonus right away for ' + money(cost) + ' (' + S.buyCost + '× your play amount of ' + money(S.amount) + ')?';
    $('buyConfirm').hidden = false;
    $('buyYes').focus({ preventScroll: true });
  }
  function closeBuy() { $('buyConfirm').hidden = true; }
  async function onPlay(mode = MODE) {
    S.interacted = true;
    if (P.replay) return runReplay();
    if (S.busy || !S.ready) return;
    const cost = S.amount * (mode === BUY_MODE ? S.buyCost : 1);
    if (cost > S.balance) { showMsg('Your balance is too low for this play amount.'); return; }
    showMsg('');
    S.busy = true; renderAction();
    const t0 = Date.now();
    let res;
    try { res = await Server.play(S.amount, mode); }
    catch (e) { S.auto = null; S.busy = false; renderAction(); showMsg(errText(e)); if (e.status !== 400 || e.code !== 'ERR_IPB') toast(errText(e)); refreshBalance(); return; }
    if (res.balance) setBalance(res.balance.amount);
    await finishRound(res.round, t0, mode);
  }
  async function finishRound(round, t0, mode) {
    const amount = round.amount || S.amount;
    const isBuy = mode ? mode === BUY_MODE : /live/i.test(String(round.mode || ''));
    const spent = amount * (isBuy ? S.buyCost : 1);
    let outcome;
    try { outcome = await playRound(eventsOf(round.state), amount); }
    catch (e) { outcome = { winX: 0, winUnits: 0 }; }
    const payout = Number.isFinite(round.payout) ? round.payout : outcome.winUnits;
    // Settle wins: a round with a payout stays open until end-round.
    if (round.active) {
      for (let k = 0; k < 3; k++) {
        try { const r = await Server.endRound(); if (r && r.balance) setBalance(r.balance.amount, payout > 0); break; }
        catch (e) { if (k === 2) toast(errText(e)); else await new Promise(r => setTimeout(r, 800)); }
      }
    }
    S.net += payout - spent;
    S.history.unshift(outcome.winX); S.history = S.history.slice(0, 16); renderHistory(true);
    hmFeed(outcome.winX);
    stUpdate(outcome, payout);
    S.lastOutcome = outcome;
    $('netTag').textContent = 'Net ' + (S.net >= 0 ? '+' : '') + money(S.net);
    const left = S.minRoundMs - (Date.now() - t0);
    if (left > 0) await new Promise(r => setTimeout(r, left));
    S.busy = false;
    $('multWrap').classList.remove('beat');
    renderAction();
  }
  function stUpdate(outcome, payout) {
    const st = S.stats;
    st.rounds++;
    if (outcome.live) st.lives++;
    const best = payout > st.bestUnits;
    if (best) { st.bestUnits = payout; st.bestX = outcome.winX; }
    $('stRounds').textContent = String(st.rounds);
    $('stLive').textContent = String(st.lives);
    $('stBest').textContent = st.bestUnits > 0 ? fmtX(st.bestX) : '–';
    $('stBestAmt').textContent = st.bestUnits > 0 ? winMoney(st.bestUnits) : '';
    if (best && !reduced) { const b = $('stBest'); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  }

  /* ---------- Autoplay: opens a panel first; nothing runs until the player presses Start ---------- */
  const segValue = id => Number($(id).querySelector('[aria-pressed="true"]').dataset.v);
  function apSummary() {
    const n = segValue('apRounds'), w = segValue('apWin'), l = segValue('apLoss');
    $('apLossNote').textContent = l ? 'Stops if your balance drops by ' + money(S.amount * l) + ' from where autoplay started.' : '';
    $('apSum').textContent = n + ' plays of ' + money(S.amount) + ' each (BASE mode)' + (w ? ', stops on a ' + w + '× win' : '') + (l ? ', stops if your balance falls by ' + money(S.amount * l) : '') + ($('apLive').checked ? ', stops when a LIVE STREAM starts' : '') + '.';
  }
  function openAuto() {
    S.interacted = true;
    if (S.auto) { stopAuto(); return; }
    if (S.busy || !S.ready || P.replay) return;
    apSummary();
    $('autoPanel').hidden = false;
    $('apStart').focus({ preventScroll: true });
  }
  function closeAuto() { $('autoPanel').hidden = true; }
  function stopAuto(reason) {
    if (!S.auto) return;
    S.auto = null;
    if (reason) toast(reason, 3000);
    renderAction();
  }
  async function startAuto() {
    closeAuto();
    if (S.busy || !S.ready) return;
    S.auto = { left: segValue('apRounds'), stopWin: segValue('apWin'), stopLoss: segValue('apLoss') * S.amount, stopLive: $('apLive').checked, startBal: S.balance };
    renderAction();
    while (S.auto && S.auto.left > 0) {
      if (S.amount > S.balance) { stopAuto('Autoplay stopped: balance too low for the next play.'); break; }
      S.auto.left--;
      renderAction();
      await onPlay(MODE);
      const a = S.auto, o = S.lastOutcome || {};
      if (!a) break;
      if (S.busy) { stopAuto('Autoplay stopped.'); break; }
      if (a.stopWin && o.winX >= a.stopWin) { stopAuto('Autoplay stopped: a ' + fmtX(o.winX) + ' win.'); break; }
      if (a.stopLive && o.live) { stopAuto('Autoplay stopped: LIVE STREAM.'); break; }
      if (a.stopLoss && a.startBal - S.balance >= a.stopLoss) { stopAuto('Autoplay stopped: balance limit reached.'); break; }
      if (a.left <= 0) { stopAuto('Autoplay finished.'); break; }
      await new Promise(r => setTimeout(r, 450));
    }
  }

  async function refreshBalance() {
    try { const r = await Server.balance(); if (r && r.balance) setBalance(r.balance.amount); } catch (e) { /* keep the last known balance */ }
  }

  /* ---------- Replay ---------- */
  async function loadReplay() {
    if (!P.rgs || !P.game || !P.version || !P.event) throw new RgsError(0, 'REPLAY', 'Missing replay parameters');
    const data = await Live.replay();
    S.replayData = data;
    const amount = Number.isFinite(P.amount) && P.amount > 0 ? P.amount : API;
    const cost = Number(data.costMultiplier) || 1;
    S.amount = amount;
    $('rpMode').textContent = String(P.mode).toUpperCase();
    $('rpAmount').textContent = money(amount);
    $('rpCost').textContent = money(Math.round(amount * cost));
    $('rpMult').textContent = fmtX(Number(data.payoutMultiplier) || 0);
  }
  async function runReplay() {
    if (S.busy || !S.replayData) return;
    S.busy = true; renderAction();
    try { await playRound(eventsOf(S.replayData.state), S.amount); } catch (e) { toast('This replay could not be shown.'); }
    S.busy = false; S.replayed = true; renderAction();
  }

  /* ---------- Rules, sound, keys ---------- */
  function openRules() { $('rules').hidden = false; $('rulesClose').focus({ preventScroll: true }); }
  function closeRules() { $('rules').hidden = true; $('infoBtn').focus({ preventScroll: true }); }
  function bind() {
    const mark = () => { if (S.interacted) return; S.interacted = true; loadSamples(); syncMusic(); };
    document.addEventListener('pointerdown', mark, { passive: true });
    document.addEventListener('keydown', mark);
    $('action').addEventListener('click', () => { if (S.auto) stopAuto('Autoplay stopped.'); else onPlay(MODE); });
    $('autoBtn').addEventListener('click', openAuto);
    $('apCancel').addEventListener('click', closeAuto);
    $('apStart').addEventListener('click', startAuto);
    $('autoPanel').addEventListener('click', e => { if (e.target === $('autoPanel')) closeAuto(); });
    ['apRounds', 'apWin', 'apLoss'].forEach(id => $(id).addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $(id).querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      apSummary();
    }));
    $('apLive').addEventListener('change', apSummary);
    $('buyBtn').addEventListener('click', onBuy);
    $('buyNo').addEventListener('click', closeBuy);
    $('buyYes').addEventListener('click', () => { closeBuy(); onPlay(BUY_MODE); });
    $('buyConfirm').addEventListener('click', e => { if (e.target === $('buyConfirm')) closeBuy(); });
    $('amtMinus').addEventListener('click', () => stepAmount(-1));
    $('amtPlus').addEventListener('click', () => stepAmount(1));
    $('amtSelect').addEventListener('change', e => setAmount(Number(e.target.value)));
    $('minBtn').addEventListener('click', () => setAmount(S.minBet));
    $('maxBtn').addEventListener('click', () => setAmount(S.maxBet));
    $('fastBtn').addEventListener('click', () => { S.fast = !S.fast; $('fastBtn').setAttribute('aria-pressed', String(S.fast)); });
    $('infoBtn').addEventListener('click', openRules);
    $('rulesClose').addEventListener('click', closeRules);
    $('rules').addEventListener('click', e => { if (e.target === $('rules')) closeRules(); });
    $('soundBtn').addEventListener('click', () => {
      S.sound = !S.sound;
      $('icoOn').hidden = !S.sound; $('icoOff').hidden = S.sound;
      $('soundBtn').setAttribute('aria-label', S.sound ? 'Sound off' : 'Sound on');
      $('soundBtn').setAttribute('aria-pressed', String(!S.sound));
      if (S.sound) loadSamples();
      syncMusic();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !$('autoPanel').hidden) { closeAuto(); return; }
      if (e.key === 'Escape' && !$('buyConfirm').hidden) { closeBuy(); return; }
      if (e.key === 'Escape' && !$('rules').hidden) { closeRules(); return; }
      if (e.code !== 'Space' || e.repeat || S.jur.disabledSpacebar) return;
      if (!$('rules').hidden || !$('buyConfirm').hidden || !$('autoPanel').hidden || !$('intro').classList.contains('out')) return;
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'SELECT' || tag === 'INPUT') return;
      e.preventDefault();
      if (S.auto) stopAuto('Autoplay stopped.'); else onPlay();
    });
    setInterval(jiggleOne, 700);
    setInterval(blinkOne, 650);
    floatReact();
    setInterval(() => {
      if (!S.jur.displaySessionTimer) return;
      const s = Math.floor((Date.now() - S.sessionStart) / 1000);
      $('timerTag').textContent = `${Math.floor(s / 3600) ? Math.floor(s / 3600) + ':' : ''}${String(Math.floor(s / 60) % 60).padStart(Math.floor(s / 3600) ? 2 : 1, '0')}:${String(s % 60).padStart(2, '0')}`;
    }, 1000);
  }

  /* ---------- Start ---------- */
  function preload() {
    const poses = Object.values(POSE).flatMap(p => [p.base, p.blink, p.win]);
    const srcs = Array.from(new Set(Object.values(IMG).concat(poses, ['assets/logo.webp', 'assets/coin.webp', 'assets/hype-check.webp', 'assets/tile-open.webp', 'assets/board-frame.webp',
      'assets/icon-lock.webp', 'assets/icon-shield.webp', 'assets/icon-x2.webp', 'assets/icon-x5.webp', 'assets/btn-golive.webp'])));
    let done = 0;
    return new Promise(res => {
      const bar = $('introBar');
      srcs.forEach(src => {
        const i = new Image();
        i.onload = i.onerror = () => { done++; bar.style.transform = `scaleX(${(done / srcs.length * 0.8).toFixed(3)})`; if (done === srcs.length) res(); };
        i.src = src;
      });
      setTimeout(res, 8000);
    });
  }
  function fatal(text) {
    $('introErr').textContent = text; $('introErr').hidden = false;
    $('introPlay').hidden = true; $('introFine').hidden = true;
  }
  async function connect() {
    if (P.replay) { await loadReplay(); return; }
    if (!LOCAL && (!P.sessionID || !P.rgs)) throw new RgsError(0, 'NETWORK', 'Missing session');
    const auth = await Server.authenticate();
    const cfg = auth.config || {};
    if (auth.balance) { currency = auth.balance.currency || currency; setBalance(auth.balance.amount); }
    S.jur = cfg.jurisdiction || {};
    // The Go Live price comes from the RGS config when it lists the mode.
    const gm = (cfg.gameModes || []).find(m => String(m.mode).toLowerCase() === BUY_MODE);
    if (gm && Number(gm.costMultiplier) > 0) S.buyCost = Number(gm.costMultiplier);
    $('buyBtn').hidden = !!S.jur.disabledBuyFeature;
    buildLevels(cfg);
    if (!S.levels.length) throw new RgsError(0, 'CONFIG', 'No play amounts available');
    S.amount = S.levels.includes(cfg.defaultBetLevel) ? cfg.defaultBetLevel : S.levels[0];
    const mrd = Number(S.jur.minimumRoundDuration) || 0;
    S.minRoundMs = mrd > 0 && mrd < 100 ? mrd * 1000 : mrd;
    $('fastBtn').hidden = !!S.jur.disabledTurbo;
    $('autoBtn').hidden = !!S.jur.disabledAutoplay;
    $('rtpTag').hidden = !S.jur.displayRTP;
    $('timerTag').hidden = !S.jur.displaySessionTimer;
    $('netTag').hidden = !S.jur.displayNetPosition;
    if (S.jur.disabledSpacebar) $('hint').textContent = 'ⓘ = rules';
    // An unfinished round from before a disconnect: restore its amount and finish it.
    if (auth.round && (auth.round.active || eventsOf(auth.round.state).length)) S.resume = auth.round;
  }
  async function init() {
    buildGrid();
    $('marks').replaceChildren(...MILESTONES.map(m => {
      const s = document.createElement('span');
      s.dataset.m = String(m.m); s.textContent = '×' + m.m;
      s.style.left = (Math.log(m.m / 0.2) / Math.log(METER_MAX / 0.2) * 100).toFixed(1) + '%';
      return s;
    }));
    if (P.replay) { document.body.classList.add('replay'); $('replayBar').hidden = false; $('hint').hidden = true; $('introTag').textContent = 'Round replay'; $('introFine').hidden = true; }
    bind(); initLight(); hmRender(false);
    $('app').inert = true;
    const [, err] = await Promise.all([preload(), connect().then(() => null, e => e)]);
    $('introBar').style.transform = 'scaleX(1)';
    if (err) {
      fatal(P.replay ? 'This replay could not be loaded.' : errText(err.code === 'NETWORK' || err.status === 0 ? { code: 'NETWORK' } : err));
      return;
    }
    S.ready = true;
    if (P.replay) { renderAction(); setWin(0); }
    else {
      if (S.resume && S.resume.amount && S.levels.includes(S.resume.amount)) S.amount = S.resume.amount;
      renderAction(); setWin(0);
    }
    const btn = $('introPlay');
    btn.disabled = false; btn.textContent = S.resume ? 'Resume' : 'Play'; btn.focus({ preventScroll: true });
    btn.addEventListener('click', async () => {
      if ($('intro').classList.contains('out')) return;
      S.interacted = true; loadSamples(); syncMusic();
      $('intro').classList.add('out'); $('app').inert = false;
      setTimeout(() => { $('intro').hidden = true; }, 500);
      if (S.resume) {
        const round = S.resume; S.resume = null;
        S.busy = true; renderAction();
        await finishRound(round, Date.now());
      }
    });
  }
  init();
})();
