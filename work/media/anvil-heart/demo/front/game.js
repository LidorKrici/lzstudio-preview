/* Anvil Heart: the stage and the playback of a round (6 reels x 4 rows, 4,096 ways, cascades). The shell (lz-core.js)
 * owns the wallet, the amounts, the modes and settling. This file draws the forge, the board and everything on it, and
 * plays back the events of the book it is given (math/game.mjs writes them). Nothing here decides a result: the boards,
 * the wins, what falls in and every landing effect's choice come from the book; the effects that follow from the rules
 * (ice, northern lights, split, pour, spark, heat) are applied here exactly as the rules say, to animate them. */
(() => {
  'use strict';
  const R = window.AH, A = window.AH_ASSETS || {}, SX = window.AHSound;
  const TAU = Math.PI * 2, REELS = 6;
  // the mixer is optional: every call goes through here, so a missing or failing sound never stops a round
  const call = (f, ...a) => { try { return SX && typeof SX[f] === 'function' ? SX[f](...a) : undefined; } catch (e) { return undefined; } };
  const S = {
    init: a => call('init', a), wake: () => call('wake'), loadRest: () => call('loadRest'), loadFirst: () => call('loadFirst'), start: () => call('start'),
    emit: (n, a) => call('emit', n, a || {}), music: (set, l) => call('music', set, l), level: l => call('level', l),
    tension: on => call('tension', !!on), hold: v => call('hold', v), ambience: on => call('ambience', !!on), pause: p => call('pause', !!p),
    countEnd: r => call('countEnd', r),
    count: (sec, tier) => call('count', sec, tier) || (() => {}),
  };

  /* ---------- Rule values shown on screen and in the rules (the same numbers as math/game.mjs) ---------- */
  const LOWS = 'abcd', HIGHS = 'EFGHIJ', REG = LOWS + HIGHS;
  const DBL = { a: 'k', b: 'l', c: 'm', d: 'n', E: 'o', F: 'p', G: 'q', H: 'r', I: 's', J: 't' };
  const UNDBL = Object.fromEntries(Object.entries(DBL).map(([k, v]) => [v, k]));
  const PAY = {
    a: [2, 4, 6, 8], b: [2, 4, 6, 8], c: [4, 6, 8, 10], d: [4, 6, 8, 12],
    E: [10, 15, 20, 40], F: [10, 20, 40, 80], G: [10, 20, 40, 80],
    H: [20, 40, 100, 200], I: [40, 80, 200, 300], J: [100, 200, 400, 800],
  };
  const NAMES = { a: 'Star plaque', b: 'Knot plaque', c: 'Spiral plaque', d: 'Tree plaque', E: 'Bellows', F: 'Silver eagle', G: 'Kantele', H: 'Tuonela swan', I: 'Golden maiden', J: 'Sampo lid' };
  const HEAT = [12, 30, 55, 90], UPGRADE = [['a', 'E'], ['b', 'F'], ['c', 'G'], ['d', 'H']];
  const SONG_CAP = 1024, SPOT_CAP = 128, MAX_ROWS = 8, CAP_X = 25000;
  const KIND = {
    bellows: { title: 't-bellows', bg: 'bg-bellows', name: 'THE BELLOWS', text: 'Every win heats the forge. At each heat level an ornament is forged into a high symbol, for the rest of the bonus.' },
    song: { title: 't-song', bg: 'bg-song', name: 'RUNE SONG', text: 'Every symbol has its own multiplier. It doubles each time that symbol wins, and it stays.' },
    mountain: { title: 't-mountain', bg: 'bg-mountain', name: 'COPPER MOUNTAIN', text: 'Every win carves one reel a row higher, up to 8 rows. The reels stay tall.' },
    grinds: { title: 't-grinds', bg: 'bg-grinds', name: 'THE SAMPO GRINDS', text: 'Every spot that wins gets a x2 multiplier that doubles each time it wins again, and it stays.' },
  };
  const COST = { base: 1, stoke: 3, bellows: 100, runesong: 200, mountain: 500 };
  // big win tiers in x of the play amount, from the mode's price (standard 3.3: 10 x cost^0.588), and the music levels
  // (front/tuning.json, the 70th / 95th / 99.5th percentile of the winning rounds)
  const tiersFor = cost => { const b = 10 * Math.pow(cost, .588); return [1, 2.5, 5, 10].map(k => Math.round(b * k)); };
  const MUSIC = { base: [.48, 4.8, 80.78], stoke: [.56, 18, 253.32], bellows: [103.02, 299.3, 848.06], runesong: [128.8, 667.9, 3325.96], mountain: [151.9, 1010.4, 5000] };
  const TITLES = ['w-big', 'w-mega', 'w-epic', 'w-legend'], TITLE_WORDS = ['BIG WIN', 'MEGA WIN', 'EPIC WIN', 'LEGENDARY'];

  /* ---------- Tokens ---------- */
  const isReg = t => REG.includes(t);
  const isDbl = t => t.length === 1 && t in UNDBL;
  const symOf = t => (isReg(t) ? t : isDbl(t) ? UNDBL[t] : null);
  const isWild = t => t === 'W' || t === 'Z' || t[0] === 'R';
  const runeOf = t => (t[0] === 'R' ? Number(t.slice(1)) : 0);
  function dec(str) {
    return String(str).split('/').map(reel => {
      const out = [];
      for (let i = 0; i < reel.length; i++) {
        if (reel[i] === 'R') { let j = i + 1; while (j < reel.length && reel[j] >= '0' && reel[j] <= '9') j++; out.push(reel.slice(i, j)); i = j - 1; }
        else out.push(reel[i]);
      }
      return out;
    });
  }
  const TILE = { J: 'tile-red', I: 'tile-amber', H: 'tile-blue', G: 'tile-green', F: 'tile-violet', E: 'tile-iron' };
  const ANIM = 'JIHGFESZ';                                       // (the wild now has its word on it, so its old clip stays off)                                      // symbols with their own win clip (tools/build-video.mjs)
  const imgOf = t => { const s = symOf(t); if (s) return 's-' + s; if (t[0] === 'R') return 's-R'; return 's-' + t; };
  // the cells a Spark (2x2) or Golden Spark (3x3) covers, kept inside the board (the same rule as math/game.mjs)
  function sparkBlocks(cols, rws) {
    const out = [];
    cols.forEach((col, c) => col.forEach((t, r) => {
      if (t !== 'K' && t !== 'Q') return;
      const size = t === 'K' ? 2 : 3;
      let c0 = t === 'K' ? c : c - 1; c0 = Math.max(0, Math.min(REELS - size, c0));
      const h = Math.min(...Array.from({ length: size }, (_, i) => rws[c0 + i]));
      let r0 = t === 'K' ? r : r - 1; r0 = Math.max(0, Math.min(h - size, r0));
      for (let i = 0; i < size; i++) for (let j = 0; j < size; j++) out.push([c0 + i, r0 + j]);
      out.push([c, r]);
    }));
    return out;
  }

  /* ---------- Scene state ---------- */
  let api = null, cv = null, c = null, W = 0, H = 0, DPR = 1, L = null, last = 0, T = 0;
  let busy = false, hurry = false, roundCtx = null, quick = false, smith = null, eagleA = null;
  const symA = {};                                                 // the symbols' win clips (alpha video), one player per symbol
  const symPlay = k => { const a = symA[k]; if (a && !a.busy()) a.play('sym' + k + '-win', false, 1.5); };
  let model = Array.from({ length: REELS }, () => []);              // model[reel][row], row 0 = bottom
  let rows = new Array(REELS).fill(4), viewRows = 4;
  let cells = Array.from({ length: REELS }, () => []);              // the drawn cells: { t, y, a, k, hl, rot }
  const st = { kind: null, heat: 0, lv: 0, song: null, spots: null, songPop: {} };
  const scene = {
    bg: 'bg-wide', bg2: null, bgA: 0, banner: {}, shake: 0, flash: 0, dark: 0, kick: 0, labels: [], flyers: [], title: null,
    total: 0, totalShow: false, totalPop: 1, spins: 0, spinNow: 0, eagle: null, aurora: null, tint: null, tintA: 0, heatPop: 1, rock: null,
  };
  const pop = (o, k = 1.15, key = 'sx', key2 = 'sy') => { o[key] = k; o[key2] = 2 - k; R.tween(o, { [key]: 1, [key2]: 1 }, 380, R.E.elastic); };
  const newCell = (t, y) => ({ t, y, a: 1, k: 1, hl: 0, rot: 0 });

  /* ---------- Layout ---------- */
  // the board frame (assets/frame.webp): the cells' window as parts of the picture
  const FB = { l: .0825, r: .0825, t: .1205, b: .125 };
  function layout() {
    const r = cv.parentElement.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height); DPR = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    const land = W / H >= 1.15, tiny = H < 260;
    const pn = document.getElementById('lzPanel'), BH = pn ? pn.getBoundingClientRect().height : 0;
    // landscape: the board takes its room first, and the floating bar is then sized to fill everything under it (Lidor, 28.11)
    const HS = land ? Math.max(1, H - Math.max(H * .13, 44)) : Math.max(1, H - BH * .96);   // the stage above the floating bar
    const fr = A.frame || [2048, 1360], fw = fr[0], fh = fr[1];
    // inner width IW -> cell size, inner height, and the frame's borders around it
    const geo = IW => { const cw = IW / 6, ch = cw / 1.11, IH = viewRows * ch, k = IW / (fw * (1 - FB.l - FB.r)); return { cw, ch, IH, bl: fw * FB.l * k, br: fw * FB.r * k, bt: fh * FB.t * k, bb: fh * FB.b * k }; };
    let IW, x0, y0;
    if (land) {
      const g1 = geo(1), maxH = HS * (tiny ? .94 : .9), perIW = g1.IH + g1.bt + g1.bb;
      IW = Math.min(W * (tiny ? .42 : .48), maxH / perIW);
      const g = geo(IW); x0 = W * (tiny ? .5 : .52) - IW / 2; y0 = (HS - (g.IH + g.bt + g.bb)) / 2 + g.bt + Math.min(HS * .04, (HS - (g.IH + g.bt + g.bb)) / 2);   // a little lower than the middle (Lidor, 28.11)
    } else {
      const g1 = geo(1), perIW = g1.IH + g1.bt + g1.bb;
      IW = Math.min(W * .92 / (1 + (g1.bl + g1.br)), HS * (viewRows > 4 ? .56 : .44) / perIW);
      const g = geo(IW); x0 = (W - IW) / 2; y0 = HS * .1 + g.bt;
    }
    const g = geo(IW);
    L = { land, tiny, g: { ix: x0, iy: y0, iw: IW, ih: g.IH, cw: g.cw, ch: g.ch, ox: x0 - g.bl, oy: y0 - g.bt, ow: IW + g.bl + g.br, oh: g.IH + g.bt + g.bb } };
    L.cs = Math.min(g.cw, g.ch);
    L.fw = L.cs * 1.6;
    const bottom = L.g.oy + L.g.oh;
    const root = document.documentElement.style;
    if (land && !tiny) {
      // the bar sits under the board's frame: no wider than the frame, centred on it, and no taller than the space below
      const lift = Math.max(8, Math.min(26, H * .028)), gap = H - bottom - 6 - lift, sz = Math.max(22, Math.min((gap - 12) / 2.65, L.g.ow / 8.8, 110));   // the controls, and the balance strip a little thinner under them
      root.setProperty('--ah-s', sz.toFixed(1) + 'px');
      root.setProperty('--ah-lift', lift.toFixed(1) + 'px'); root.setProperty('--ah-bx', L.g.ox.toFixed(1) + 'px'); root.setProperty('--ah-bw', L.g.ow.toFixed(1) + 'px');
    } else { root.removeProperty('--ah-s'); root.removeProperty('--ah-bx'); root.removeProperty('--ah-bw'); root.removeProperty('--ah-lift'); }
    if (land) {
      const sh = Math.min(HS * .8, (L.g.ox - W * .02) * 1.25);
      L.smith = { x: Math.max(sh * .3, L.g.ox * .5), y: H * .99, h: sh };
      L.logo = { x: L.g.ox * .5, y: H * .1, w: Math.min(L.g.ox * .86, H * .4) };
      L.title = { x: L.g.ix + IW / 2, y: L.g.iy + g.IH * .42, w: Math.min(W * .5, H * 1.0) };
      L.total = { x: L.smith.x, y: L.smith.y - L.smith.h * .44, h: Math.max(16, Math.min(H * .06, L.g.ox * .1)) };
      L.spins = { x: L.logo.x, y: H * .27, h: Math.max(14, Math.min(H * .05, L.g.ox * .09)) };
      L.side = { x: L.g.ox + L.g.ow + (W - L.g.ox - L.g.ow) / 2, y: H * .5, w: Math.max(40, Math.min(W - L.g.ox - L.g.ow - 16, L.cs * 1.8)) };
    } else {
      const free = HS - bottom - HS * .02;
      const sh = Math.min(HS * .3, W * .62);
      L.smith = { x: W * .22, y: HS + BH * .2, h: sh };
      L.logo = { x: W / 2, y: bottom + H * .042, w: Math.min(W * .5, H * .2) };
      L.title = { x: W / 2, y: L.g.iy + g.IH * .45, w: W * .94 };
      L.total = { x: W * .7, y: HS * .88, h: Math.max(16, Math.min(free * .1, W * .065)) };
      L.spins = { x: W / 2, y: bottom + H * .042, h: Math.max(14, Math.min(free * .07, W * .045)) };
      L.side = { x: W * .7, y: HS * .78, w: W * .5, row: true };
    }
    place();
  }
  function place() {
    const sb = document.querySelector('.ah-stagebox');
    if (sb) { sb.dataset.land = L.land ? '1' : '0'; sb.dataset.tiny = L.tiny ? '1' : '0'; }
    const box = document.querySelector('.ah-smithbox');
    if (box) { const h = L.smith.h, w = h * .55; Object.assign(box.style, { left: (L.smith.x - w / 2) + 'px', top: (L.smith.y - h) + 'px', width: w + 'px', height: h + 'px' }); }
  }
  // the middle of cell (reel, row): rows count up from the bottom; the board shows viewRows rows
  const cellXY = (x, r) => [L.g.ix + (x + .5) * L.g.cw, L.g.iy + (viewRows - 1 - r + .5) * L.g.ch];

  /* ---------- Drawing ---------- */
  function cover(name, alpha = 1, par = 1) {
    const im = R.img(name); if (!im || alpha <= .01) return;
    const k = Math.max(W / im.width, H / im.height) * 1.05, w = im.width * k, h = im.height * k;
    c.globalAlpha = alpha;
    c.drawImage(im, (W - w) / 2 + Math.sin(T * .05) * W * .01 * par, (H - h) / 2 + Math.cos(T * .07) * H * .004 * par, w, h);
    c.globalAlpha = 1;
  }
  function bg() {
    const base = !L.land && R.img('bg-tall') && scene.bg === 'bg-wide' ? 'bg-tall' : scene.bg;
    cover(base, 1);
    if (scene.bg2 && scene.bgA > 0) cover(scene.bg2, scene.bgA);
    // the forge fire breathes on the left, the sky's light on the right (painted light, moving)
    const fl = R.img('fx-flash');
    if (fl) {
      c.globalCompositeOperation = 'lighter';
      c.globalAlpha = .18 + .08 * Math.sin(T * 5.3) + .05 * Math.sin(T * 13.1);
      const s = H * .9; c.drawImage(fl, (L.land ? W * .08 : W * .1) - s / 2, H * .62 - s / 2, s, s);
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    }
    if (scene.dark > 0) { c.globalAlpha = scene.dark; c.fillStyle = '#05070d'; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
    if (scene.tint && scene.title) { c.globalAlpha = scene.tintA * (.8 + .2 * Math.sin(T * 6)); c.globalCompositeOperation = 'lighter'; c.fillStyle = scene.tint; c.fillRect(0, 0, W, H); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1; }
  }
  function drawFrame() {
    const im = R.img('frame'), g = L.g; if (!im) return;
    if (viewRows === 4) { c.drawImage(im, g.ox, g.oy, g.ow, g.oh); return; }
    // taller board (Copper Mountain): the frame's border as nine pieces, and its 4-row window drawn twice inside
    const iw = im.width, ih = im.height, sl = iw * FB.l, sr = iw * FB.r, stp = ih * FB.t, sb = ih * FB.b;
    const dl = g.ix - g.ox, dr = g.ox + g.ow - g.ix - g.iw, dt = g.iy - g.oy, db = g.oy + g.oh - g.iy - g.ih;
    const sx = [0, sl, iw - sr, iw], sy = [0, stp, ih - sb, ih], dx = [g.ox, g.ix, g.ix + g.iw, g.ox + g.ow], dy = [g.oy, g.iy, g.iy + g.ih, g.oy + g.oh];
    for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) {
      if (i === 1 && j === 1) continue;
      c.drawImage(im, sx[i], sy[j], sx[i + 1] - sx[i], sy[j + 1] - sy[j], dx[i], dy[j], dx[i + 1] - dx[i], dy[j + 1] - dy[j]);
    }
    void dl; void dr; void dt; void db;
    const half = g.ih / 2;
    for (let k = 0; k < 2; k++) c.drawImage(im, sl, stp, iw - sl - sr, ih - stp - sb, g.ix, g.iy + k * half, g.iw, half);
  }
  // a symbol's own clip, if it is playing: drawn over the same spot and at the same size as the painted symbol
  function symVideo(key, x, y, w) {
    const a = symA[key], meta = window.AH_VID && AH_VID.chars && AH_VID.chars['sym' + key], st0 = R.img('s-' + key);
    if (!a || !a.ready || !a.vid || !meta || !st0) return false;
    const h = w * st0.height / st0.width, sc = h / meta.fig;
    c.drawImage(a.image(), x - meta.ax * sc, y + h / 2 - meta.ay * sc, meta.w * sc, meta.h * sc);
    return true;
  }
  // a symbol fits inside its square: a tall picture (the golden maiden) is sized by its height, not its width
  const fitW = (name, s) => { const im = R.img(name); return im ? s * Math.min(1, im.width / im.height) : s; };
  function drawToken(t, x, y, s, o = {}) {
    if (!t) return;
    const d = isDbl(t), base = symOf(t);
    if (base && TILE[base]) R.draw(c, TILE[base], x, y, s * 1.12, { alpha: o.alpha });
    if (base && TILE[base]) s *= .86;
    if (d) {                                                         // a double: two of the symbol, a little smaller, side by side
      R.draw(c, imgOf(t), x - s * .17, y - s * .04, fitW(imgOf(t), s * .78), { alpha: o.alpha, rot: -.06 });
      R.draw(c, imgOf(t), x + s * .17, y + s * .04, fitW(imgOf(t), s * .78), { alpha: o.alpha, rot: .06 });
      R.number(c, 'x2', x + s * .3, y + s * .32, s * .3, { alpha: o.alpha });
      return;
    }
    const big = t === 'Z' || t === 'S' ? 1.08 : 1;
    if (t === 'S' || t === 'W' || t === 'Z' || t[0] === 'R') R.draw(c, 'fx-flash', x, y, s * 1.5, { alpha: (o.alpha ?? 1) * (.3 + .12 * Math.sin(T * 4 + x * .01)), add: true });
    const key = t[0] === 'R' ? null : t;
    const fw = fitW(imgOf(t), s * big);
    if (!(o.anim && key && ANIM.includes(key) && (o.alpha ?? 1) > .9 && symVideo(key, x, y, fw))) R.draw(c, imgOf(t), x, y, fw, { alpha: o.alpha, rot: o.rot || 0 });
    if (t[0] === 'R') R.number(c, 'x' + runeOf(t), x, y + s * .02, s * (runeOf(t) >= 100 ? .3 : .36), { alpha: o.alpha });
  }
  function drawBoard() {
    const g = L.g, cs = L.cs;
    drawFrame();
    // Copper Mountain: the rows a reel has not carved yet are still rock
    if (st.kind === 'mountain') for (let x = 0; x < REELS; x++) for (let r = rows[x]; r < viewRows; r++) {
      const [px, py] = cellXY(x, r);
      c.globalAlpha = .9; c.fillStyle = '#2b170c'; c.fillRect(px - g.cw / 2 + 2, py - g.ch / 2 + 2, g.cw - 4, g.ch - 4); c.globalAlpha = 1;
      R.draw(c, 'fx-molten', px, py, cs * .5, { alpha: .12 + .05 * Math.sin(T * 2 + x + r), add: true });
    }
    // the Sampo Grinds: the spots' multipliers glow under the symbols
    if (st.spots) for (let x = 0; x < REELS; x++) for (let r = 0; r < st.spots[x].length; r++) if (st.spots[x][r]) {
      const [px, py] = cellXY(x, r), m = st.spots[x][r];
      R.draw(c, 'fx-molten', px, py, cs * (.7 + Math.log2(m) * .06), { alpha: .14 + .05 * Math.sin(T * 4 + x + r), add: true });
    }
    c.save(); c.beginPath(); c.rect(g.ix, g.iy, g.iw, g.ih); c.clip();
    const full = model.map((col, x) => col.length > 0 && col.every(t => t === 'W') && cells[x].every((cl, r) => Math.abs(cl.y - r) < .05 && cl.a > .9));
    for (let x = 0; x < REELS; x++) if (full[x] && R.img('wild-reel')) {
      // a reel that is all wild hangs the WILD banner over its whole height (it unrolls from the top when the pour makes it)
      const im = R.img('wild-reel'), p = scene.banner[x] ?? 1, top = g.iy + (viewRows - rows[x]) * g.ch, rh = rows[x] * g.ch, bw = Math.min(g.cw * .98, rh * im.width / im.height * 1.15);
      const hl = cells[x].some(cl => cl.hl > .01);
      if (hl) R.draw(c, 'fx-flash', g.ix + (x + .5) * g.cw, top + rh / 2, g.cw * 1.8, { alpha: .45 + .2 * Math.sin(T * 10), add: true });
      c.save(); c.beginPath(); c.rect(g.ix + x * g.cw, top - 4, g.cw, rh * p + 4); c.clip();
      c.drawImage(im, g.ix + (x + .5) * g.cw - bw / 2, top + 2, bw, rh - 4);
      c.restore();
    }
    for (let x = 0; x < REELS; x++) for (const t of cells[x]) {
      if (full[x] && R.img('wild-reel') && (scene.banner[x] ?? 1) >= 1) continue;
      if (!t.t || t.a <= .01) continue;
      const [px, py] = cellXY(x, t.y), breathe = busy ? 0 : Math.sin(T * 1.6 + x * .8 + t.y * 1.1) * cs * .015;
      if (t.hl > .01) R.draw(c, 'fx-flash', px, py, cs * 1.6, { alpha: t.hl * (.55 + .25 * Math.sin(T * 12)), add: true });
      const k = t.k * (t.hl > .01 ? 1 + .06 * Math.sin(T * 14) : 1);
      drawToken(t.t, px, py + breathe, cs * .9 * k, { alpha: t.a, rot: t.rot, anim: t.hl > .01 || t.t === 'S' || t.t === 'Z' });
    }
    c.restore();
    if (st.spots) for (let x = 0; x < REELS; x++) for (let r = 0; r < st.spots[x].length; r++) if (st.spots[x][r]) {
      const [px, py] = cellXY(x, r);
      R.number(c, 'x' + st.spots[x][r], px + g.cw * .28, py - g.ch * .32, cs * .3);
    }
  }
  function drawSmith() {
    const k = L.smith, meta = (window.AH_VID && AH_VID.chars && AH_VID.chars.smith) || null;
    let im = smith && smith.image(), w, h, ax, ay;
    const sc = meta ? k.h / meta.fig : 1;
    if (im && meta) { w = meta.w * sc; h = meta.h * sc; ax = meta.ax * sc; ay = meta.ay * sc; }
    else { im = R.img('smith-hd') || R.img('smith-still'); if (!im || !meta) return; w = meta.w * sc; h = meta.h * sc; ax = meta.ax * sc; ay = meta.ay * sc; }
    const old = smith && smith.oldImageFade && smith.oldImageFade();
    // at rest the still breathes a little (standard 5.3: nothing stands still)
    const br = smith && smith.ready ? 0 : Math.sin(T * 1.9) * .008;
    c.save(); c.translate(k.x, k.y); c.scale(1 - br * .4, 1 + br);
    if (old) { c.globalAlpha = old.a; c.drawImage(old.img, -ax, -ay, w, h); c.globalAlpha = 1; }
    c.drawImage(im, -ax, -ay, w, h);
    c.restore();
  }
  function drawEagle() {
    const e = scene.eagle; if (!e) return;
    const meta = window.AH_VID && AH_VID.chars && AH_VID.chars.eagle;
    const im = (eagleA && eagleA.ready && eagleA.image()) || R.img('eagle-hd');
    if (!im || !meta) return;
    const sc = e.h / meta.fig, w = meta.w * sc, h = meta.h * sc;
    c.save(); c.globalAlpha = e.a; c.translate(e.x, e.y); c.rotate(e.rot || 0); if (e.flip) c.scale(-1, 1);
    c.drawImage(im, -meta.ax * sc, -meta.ay * sc, w, h);
    c.restore();
  }
  // the wooden plank in nine pieces: the gold corners keep their shape, only the middle stretches
  function plank9(x, y, w, h) {
    const im = R.img('plank'); if (!im) return;
    const iw = im.width, ih = im.height, sl = iw * .09, st2 = ih * .28, dt = h * .28, dl = Math.min(w * .3, dt * sl / st2);
    const sx = [0, sl, iw - sl, iw], sy = [0, st2, ih - st2, ih], dx = [x, x + dl, x + w - dl, x + w], dy = [y, y + dt, y + h - dt, y + h];
    for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) c.drawImage(im, sx[i], sy[j], sx[i + 1] - sx[i], sy[j + 1] - sy[j], dx[i], dy[j], dx[i + 1] - dx[i], dy[j + 1] - dy[j]);
  }
  function drawTotal() {
    if (!scene.totalShow || !scene.total) return;
    const k = L.total, txt = money(scene.total), h = k.h * scene.totalPop, w = Math.max(R.textWidth(txt, h) + h * 1.4, h * 5);
    plank9(k.x - w / 2, k.y - h * .85, w, h * 1.7);
    // the ingot glows hotter as the total grows (fix 20: the sum rides on the hero)
    const x = roundCtx ? scene.total / Math.max(1, roundCtx.amount) : 0, heat = Math.min(1, Math.log10(1 + x) / 2.5);
    R.draw(c, 'fx-flash', k.x, k.y, w * (.9 + heat * .6), { alpha: .15 + heat * .35, add: true });
    R.number(c, txt, k.x, k.y, h);
  }
  function drawSpins() {
    if (!scene.spins) return;
    const k = L.spins, t = scene.spinNow + '/' + scene.spins, h = k.h, w = R.textWidth(t, h) + h * 2.6;
    plank9(k.x - w / 2, k.y - h * .8, w, h * 1.6);
    R.draw(c, 's-S', k.x - w / 2 + h * .9, k.y, h * 1.2);
    R.number(c, t, k.x + h * .5, k.y, h);
  }
  // the bonus' own gauge beside the board: the bellows' heat, or the rune song's multipliers
  function drawSide() {
    const s = L.side; if (!s || !st.kind) return;
    if (st.kind === 'bellows') {
      const next = st.lv < HEAT.length ? HEAT[st.lv] : HEAT[HEAT.length - 1], prev = st.lv ? HEAT[st.lv - 1] : 0, p = st.lv >= HEAT.length ? 1 : (st.heat - prev) / Math.max(1, next - prev);
      const mt = R.img('meter');
      if (!s.row && mt) {                                         // the carved tube: molten iron rises in its glass
        const mh = Math.min(H * .8, s.w * 2.6 * mt.height / mt.width), mw = mh * mt.width / mt.height, mx = s.x, my = s.y;
        const gx = mx - mw / 2 + mw * .33, gw = mw * .38, gy = my - mh / 2 + mh * .19, gh = mh * .585, lv = Math.max(0, Math.min(1, (st.lv + p) / HEAT.length));
        const fy = gy + gh * (1 - lv);
        c.save(); c.beginPath(); c.roundRect(gx, gy, gw, gh, gw * .45); c.clip();
        c.fillStyle = '#c2360c'; c.fillRect(gx, fy, gw, gh * lv); c.globalAlpha = .9; c.fillStyle = '#ff8a2a'; c.fillRect(gx + gw * .2, fy, gw * .35, gh * lv); c.globalAlpha = 1;
        for (let q = 0; q < 3; q++) R.draw(c, 'fx-molten', gx + gw / 2, fy + gw * (.2 + q * .5) + Math.sin(T * 3 + q) * gw * .1, gw * 1.6, { alpha: .55, add: true, rot: T * (q % 2 ? .6 : -.5) });
        c.restore();
        R.draw(c, 'fx-flash', gx + gw / 2, fy, gw * 3 * scene.heatPop, { alpha: .45 + .2 * Math.sin(T * 8), add: true });
        c.drawImage(mt, mx - mw / 2, my - mh / 2, mw, mh);
        for (let k = 0; k < HEAT.length; k++) {
          const on = k < st.lv, [from, to] = UPGRADE[k], py = gy + gh * (1 - (k + 1) / HEAT.length) + gh * .04;
          R.draw(c, 's-' + (on ? to : from), mx - mw * .62, py, mw * .5, { alpha: on ? 1 : .5 });
          if (on) R.draw(c, 'fx-flash', mx - mw * .62, py, mw * .7, { alpha: .35, add: true });
        }
        return;
      }
      const h = s.row ? s.w * .16 : Math.min(L.g.ih * .9, s.w * 4), w = s.row ? s.w : Math.max(14, s.w * .22);
      R.draw(c, 's-E', s.x, s.row ? s.y - h * .9 : s.y - h / 2 - s.w * .45, (s.row ? h * 1.4 : s.w * .8) * st.heatLvPop());
      c.globalAlpha = .85; c.fillStyle = '#1c110a'; c.fillRect(s.x - w / 2, s.y - h / 2, w, h); c.globalAlpha = 1;
      c.fillStyle = '#ff7a2a';
      if (s.row) c.fillRect(s.x - w / 2, s.y - h / 2, w * p, h); else c.fillRect(s.x - w / 2, s.y + h / 2 - h * p, w, h * p);
      R.draw(c, 'fx-flash', s.x, s.row ? s.y : s.y + h / 2 - h * p, w * 2.4, { alpha: .4 + .2 * Math.sin(T * 8), add: true });
      for (let k = 0; k < HEAT.length; k++) {
        const on = k < st.lv, [from, to] = UPGRADE[k];
        const px = s.row ? s.x - w / 2 + w * (k + .5) / 4 : s.x + w * 1.6, py = s.row ? s.y + h * 1.4 : s.y + h / 2 - h * (k + .5) / 4;
        R.draw(c, 's-' + (on ? to : from), px, py, (s.row ? w / 5 : s.w * .5), { alpha: on ? 1 : .55 });
      }
    } else if (st.kind === 'song' && st.song) {
      const list = [...REG].filter(x => st.song[x] > 1).sort((a, b) => st.song[b] - st.song[a]).slice(0, s.row ? 5 : 8);
      const n = Math.max(1, list.length), step = s.row ? s.w / 5 : Math.min(H * .82 / 8, s.w * .75);
      list.forEach((x, i) => {
        const px = s.row ? s.x - s.w / 2 + step * (i + .5) : s.x, py = s.row ? s.y : s.y - step * (n - 1) / 2 + step * i, p = st.songPop[x] || 1;
        R.draw(c, 'fx-aurora', px, py, step * 1.1, { alpha: .25, add: true, rot: T * .3 + i });
        R.draw(c, 's-' + x, px - step * .18, py, step * .62 * p);
        R.number(c, 'x' + st.song[x], px + step * .22, py + step * .2, step * .3 * p);
      });
    }
  }
  function drawLabels() {
    for (const l of scene.labels) { if (l.a <= .01) continue; if (l.img) R.draw(c, l.img, l.x, l.y, l.w * l.s, { alpha: l.a }); else R.number(c, l.text, l.x, l.y, l.h * l.s, { alpha: l.a }); }
  }
  function drawFlyers() { for (const f of scene.flyers) R.draw(c, f.img, f.x, f.y, f.w * f.s, { rot: f.rot, alpha: f.a }); }
  function drawAurora() {
    const a = scene.aurora; if (!a || a.a <= .01) return;
    for (let k = 0; k < 3; k++) R.draw(c, 'fx-aurora', L.g.ix + L.g.iw * (.2 + k * .3), L.g.iy - L.g.ch * .2 + a.y * L.g.ih, L.g.iw * .7, { alpha: a.a * .8, add: true, rot: Math.sin(T + k) * .2 });
  }
  function drawTitle() {
    const t = scene.title; if (!t || t.a <= .01) return;
    const k = t.tier || 0, beat = t.live ? 1 + Math.sin(T * (5 + k)) * (.025 + k * .008) : 1, sway = t.live ? Math.sin(T * 2.3) * (.02 + k * .006) : 0;
    if (t.img && t.img.startsWith('w-')) {
      const im = R.img(t.img); if (!im) return;
      const ew = Math.min(L.title.w * 1.05, H * .6 * im.width / im.height) * t.s * beat, eh = ew * im.height / im.width, y = L.title.y + t.oy - H * .04;
      R.draw(c, 'fx-flash', L.title.x, y, ew * 1.7, { alpha: t.a * .45, add: true, rot: T * .25 });
      R.draw(c, 'fx-flash', L.title.x, y, ew * 1.3, { alpha: t.a * .35, add: true, rot: -T * .4 });
      if (k >= 2) R.draw(c, 'fx-aurora', L.title.x, y - eh * .1, ew * 1.5, { alpha: t.a * .5, add: true, rot: Math.sin(T) * .15 });
      R.draw(c, t.img, L.title.x, y, ew, { alpha: t.a, rot: sway * .5 });
      if (t.amount != null && t.amount > 0) {
        const nh = Math.min(eh * .3, H * .13) * (t.ns || 1);
        R.number(c, t.exact === false ? api.money(t.amount) : money(t.amount), L.title.x, y + eh * .5 + nh * .45, nh, { alpha: t.a });
      }
      return;
    }
    if (t.img) {
      if (t.live) R.draw(c, t.img, L.title.x, L.title.y + t.oy, L.title.w * t.s * beat * 1.04, { alpha: t.a * (.25 + .2 * Math.sin(T * 7)), rot: (t.rot || 0) + sway, add: true });
      R.draw(c, t.img, L.title.x, L.title.y + t.oy, L.title.w * t.s * beat, { alpha: t.a, rot: (t.rot || 0) + sway });
    }
    if (t.amount != null && t.amount > 0) {
      const nh = (L.land ? H * .15 : H * .085) * (t.ns || 1);
      R.number(c, t.exact === false ? api.money(t.amount) : money(t.amount), L.title.x, L.title.y + t.oy + L.title.w * .14 * Math.min(t.s, 1.1) + nh * .5, nh, { alpha: t.a });
    }
  }
  function drawLogo() {
    if (L.tiny) return;
    R.draw(c, 'logo', L.logo.x, L.logo.y, L.logo.w, { rot: Math.sin(T * .8) * .01 });
  }
  function ambientMote() {
    // embers rise from the forge on the left; snow drifts down on the right
    if (Math.random() < .55) R.spawn({ img: 'fx-spark', x: (L.land ? W * .12 : W * .15) + (Math.random() - .5) * W * .12, y: H * (.7 + Math.random() * .25), vx: (Math.random() - .3) * 30, vy: -40 - Math.random() * 50, w: 8 + Math.random() * 10, life: 2.6, fade: 1.2, alpha: .8, add: true, layer: 0 });
    else R.spawn({ img: 'fx-ice', x: W * (.5 + Math.random() * .5), y: -10, vx: -10 - Math.random() * 15, vy: 30 + Math.random() * 30, w: 5 + Math.random() * 6, rot: Math.random() * 6, vr: 1, life: 6, fade: 2, alpha: .55, layer: 0 });
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    const dt = Math.min(60, now - (last || now)); last = now; T += dt / 1000;
    R.stepTweens(dt); R.stepParts(dt);
    if (smith) smith.update(); if (eagleA) eagleA.update(); for (const k in symA) symA[k].update();
    if (!api.reduced && Math.random() < dt / 1000 * 2.2) ambientMote();
    c.setTransform(DPR, 0, 0, DPR, 0, 0);
    c.clearRect(0, 0, W, H);
    const sh = api.reduced ? 0 : scene.shake;
    c.save();
    if (sh > .3) c.translate((Math.random() - .5) * sh, (Math.random() - .5) * sh);
    if (scene.kick > .01) { const z = 1 + scene.kick * .04; c.translate(W / 2, H / 2); c.scale(z, z); c.translate(-W / 2, -H / 2); }
    bg();
    R.drawParts(c, 0);
    drawSmith();
    drawBoard();
    R.drawParts(c, 1);
    drawAurora(); drawSide(); drawSpins(); drawTotal();
    drawFlyers(); drawEagle();
    R.drawParts(c, 2);
    drawLabels();
    c.restore();
    if (L.land || !scene.spins) drawLogo();
    if (scene.flash > .01 && !api.reduced) { c.globalAlpha = scene.flash; c.fillStyle = '#fff4dc'; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
    drawTitle();
    drawScreen();
    scene.shake *= Math.pow(.86, dt / 16); scene.flash *= Math.pow(.84, dt / 16);
  }
  function money(units) { return roundCtx ? roundCtx.winMoney(units) : api.winMoney(units); }
  st.heatLvPop = () => scene.heatPop;

  /* ---------- Small effects ---------- */
  let skipReq = 0;
  const spaceOK = () => { const h = document.getElementById('lzHint'); return !h || /Space/.test(h.textContent); };
  function waitSkip(ms) {
    const s0 = skipReq, sp = roundCtx ? roundCtx.speed() : 1, t0 = performance.now();
    return new Promise(res => { const id = setInterval(() => { if (skipReq !== s0) { clearInterval(id); res(true); } else if (performance.now() - t0 >= ms * sp) { clearInterval(id); res(false); } }, 16); });
  }
  const wait = ms => roundCtx ? roundCtx.sleep(hurry ? ms * .25 : ms) : new Promise(r => setTimeout(r, ms));
  const tw = (o, to, ms, e, d) => R.tween(o, to, hurry ? ms * .3 : ms, e, d);
  function burst(x, y, img = 'fx-spark', n = 8, size = 1, o = {}) {
    for (let q = 0; q < n; q++) { const a = Math.random() * TAU, v = (180 + Math.random() * 320) * size; R.spawn({ img, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 120 * size, g: o.g ?? 700, w: L.cs * (o.w || .32) * size, rot: Math.random() * 6, vr: (Math.random() - .5) * 8, life: o.life || .7, fade: .35, add: o.add !== false, layer: 2 }); }
  }
  function flash(x, y, size = 1, layer = 2) { R.spawn({ img: 'fx-flash', x, y, w: L.fw * size, s: .3, vs: 3, life: .3, fade: .2, add: true, layer }); }
  function label(text, x, y, h, o = {}) {
    const l = { text, img: o.img, w: o.w || 0, x, y, h, s: .4, a: 1 };
    scene.labels.push(l);
    tw(l, { s: 1 }, 220, R.E.back).then(() => tw(l, { y: y - h * 1.2, a: 0 }, o.hold || 700, R.E.in, 250)).then(() => { scene.labels = scene.labels.filter(q => q !== l); });
  }
  function setTotal(units, bump = true) {
    scene.total = units; scene.totalShow = units > 0;
    if (bump) { scene.totalPop = 1.25; tw(scene, { totalPop: 1 }, 300, R.E.back); }
  }
  function musicLevel() {
    if (!roundCtx) return;
    const th = MUSIC[roundCtx.mode] || MUSIC.base, x = scene.total / Math.max(1, roundCtx.amount);
    let l = x >= th[2] ? 3 : x >= th[1] ? 2 : x >= th[0] ? 1 : 0;
    if (st.kind) { l = Math.min(2, l); if (l < (scene.mlv || 0)) l = scene.mlv; }
    scene.mlv = l; S.level(l);
  }
  const smithAct = (n, rate = 1) => { if (smith && !smith.busy()) return smith.act(n, rate); return Promise.resolve(false); };

  /* ---------- The board: the drawn cells follow the book's board exactly ---------- */
  function setBoard(cols) {
    model = cols.map(col => col.slice());
    cells = model.map(col => col.map((t, r) => newCell(t, r)));
  }
  async function spinIn(e) {
    const g = dec(e.g);
    if (e.free) { scene.spinNow = e.n; }
    for (let x = 0; x < REELS; x++) rows[x] = g[x].length;
    // the old symbols drop out of the bottom, then the new board falls in reel by reel
    for (let x = 0; x < REELS; x++) for (const t of cells[x]) tw(t, { y: t.y - viewRows - 1, a: 0 }, hurry ? 90 : 200, R.E.in, x * 22);
    S.emit('spin');
    await wait(hurry ? 90 : 200);
    model = g.map(col => col.slice());
    cells = model.map(col => col.map((t, r) => { const cl = newCell(t, r + viewRows + 1); return cl; }));
    let embers = 0, tense = false;
    for (let x = 0; x < REELS; x++) {
      const slow = tense ? (hurry ? 150 : 520) : 0;
      if (tense) { S.emit('antic', { col: x }); for (let r = 0; r < viewRows; r++) { const [px, py] = cellXY(x, r); R.spawn({ img: 'fx-spark', x: px, y: py, w: L.cs * .6, s: .2, vs: 1.6, life: .5, fade: .3, add: true, layer: 2 }); } }
      cells[x].forEach((t, r) => tw(t, { y: r }, (hurry ? 120 : 300) + slow * .5, R.E.out, (hurry ? 6 : 18) * r));
      await wait((hurry ? 40 : 95) + slow);
      S.emit('land', { col: x });
      const n = model[x].filter(t => t === 'S').length;
      if (n) {
        embers += n; S.emit('scatter', { n: embers, col: x });
        model[x].forEach((t, r) => { if (t === 'S') { const [px, py] = cellXY(x, r); flash(px, py, 1.2); burst(px, py, 'fx-spark', 10, .9); pop(cells[x][r], 1.3, 'k', 'kk'); } });
      }
      const rn = model[x].filter(t => t[0] === 'R'); if (rn.length) S.emit('rune', { mult: Math.max(...rn.map(runeOf)) });
      if (model[x].includes('Z')) { const r = model[x].indexOf('Z'), [px, py] = cellXY(x, r); flash(px, py, 2); burst(px, py, 'fx-spark', 16, 1.3); scene.shake = 12; }
      // one ember short of the next bonus: the remaining reels slow down (a real chance, standard 6.4)
      tense = embers >= 2 && x < REELS - 1;
      if (tense) { S.tension(true); smithAct('smith-tense', 1.2); }
    }
    S.tension(false);
    await wait(hurry ? 60 : 160);
  }
  async function eagleIn(e) {
    const [x, r] = e.at, [px, py] = cellXY(x, r);
    const h = L.cs * 2.6, from = { x: W + h, y: L.g.oy - h * .4 };
    S.emit('eagleWarn'); await wait(hurry ? 150 : 700);
    scene.eagle = { x: from.x, y: from.y, h, a: 1, rot: .1, flip: true };
    S.emit('eagle');
    if (eagleA) eagleA.play('eagle-swoop', false, 1.4);
    await tw(scene.eagle, { x: px + h * .1, y: py + h * .3, rot: -.05 }, hurry ? 220 : 620, R.E.out);
    // it takes the wild or special: a burst of feathers and frost, what falls into its place drops in
    const cl = cells[x][r];
    burst(px, py, 'fx-ice', 10, .8, { add: false }); flash(px, py, 1.1); scene.shake = 8;
    const taken = { img: imgOf(cl.t), x: px, y: py, w: L.cs * .9, s: 1, rot: 0, a: 1 }; scene.flyers.push(taken);
    cl.t = e.to; model[x][r] = e.to; cl.y = r + 1.2; cl.a = 0; tw(cl, { y: r, a: 1 }, hurry ? 120 : 280, R.E.out);
    smithAct('smith-upset', 1.6);
    const fly = { t: 0 };
    const run = () => { taken.x = scene.eagle ? scene.eagle.x : taken.x; taken.y = scene.eagle ? scene.eagle.y + h * .25 : taken.y; if (fly.t < 1 && scene.eagle) requestAnimationFrame(run); };
    run();
    await Promise.all([tw(scene.eagle, { x: -h, y: -h, rot: -.3 }, hurry ? 240 : 700, R.E.in), tw(fly, { t: 1 }, hurry ? 240 : 700)]);
    scene.flyers = scene.flyers.filter(f => f !== taken); scene.eagle = null;
  }
  async function strikeIn(e) {
    S.emit('hammer');
    const acted = smith && !smith.busy() ? smith.act('smith-strike', hurry ? 3 : 1.7) : null;
    await wait(acted ? (hurry ? 250 : 1250) : 200);
    scene.shake = 16; scene.flash = .35; scene.kick = 1; tw(scene, { kick: 0 }, 380, R.E.out);
    for (const [x, r] of e.at) {
      const [px, py] = cellXY(x, r), cl = cells[x][r];
      cl.t = 'W'; model[x][r] = 'W'; pop(cl, 1.35, 'k', 'kk'); flash(px, py, 1.3); burst(px, py, 'fx-spark', 10, 1);
      await wait(hurry ? 20 : 70);
    }
    await wait(hurry ? 80 : 260);
  }
  async function iceIn(e) {
    S.emit('ice');
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => {
      if (t !== 'M') return;
      const [px, py] = cellXY(x, r), cl = cells[x][r];
      burst(px, py, 'fx-ice', 12, 1, { add: false, g: 900 }); flash(px, py, 1);
      cl.t = e.s; model[x][r] = e.s; pop(cl, 1.3, 'k', 'kk');
    });
    await wait(hurry ? 120 : 420);
  }
  async function quenchIn(e) {
    S.emit('quench');
    const gone = new Set();
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => { if (t === 'T' || LOWS.includes(symOf(t))) gone.add(x * 16 + r); });
    for (const k of gone) { const x = k >> 4, r = k & 15, [px, py] = cellXY(x, r); R.spawn({ img: 'fx-steam', x: px, y: py, vy: -60, w: L.cs * 1.3, s: .5, vs: 1.2, life: .8, fade: .5, alpha: .9, layer: 2 }); tw(cells[x][r], { a: 0, k: 1.2 }, hurry ? 80 : 220, R.E.in); }
    await wait(hurry ? 90 : 300);
    refill(gone, dec(e.add));
    await wait(hurry ? 150 : 380);
  }
  async function auroraIn(e) {
    S.emit('aurora');
    scene.aurora = { a: 0, y: 0 };
    await tw(scene.aurora, { a: 1, y: .5 }, hurry ? 150 : 500, R.E.out);
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => {
      if (t !== 'N' && symOf(t) !== e.s) return;
      const [px, py] = cellXY(x, r), cl = cells[x][r];
      cl.t = 'W'; model[x][r] = 'W'; pop(cl, 1.3, 'k', 'kk');
      R.spawn({ img: 'fx-aurora', x: px, y: py, w: L.cs * 1.3, s: .5, vs: 1.2, life: .7, fade: .4, add: true, layer: 2 });
    });
    await tw(scene.aurora, { a: 0, y: 1 }, hurry ? 150 : 500, R.E.in);
    scene.aurora = null;
  }
  async function splitIn() {
    S.emit('split');
    for (let x = 0; x < REELS; x++) {
      if (!model[x].includes('X')) continue;
      const rx = model[x].indexOf('X'), [hx, hy] = cellXY(x, rx);
      flash(hx, hy, 1.6); scene.shake = 10; burst(hx, hy, 'fx-spark', 14, 1.1);
      model[x].forEach((t, r) => {
        const cl = cells[x][r];
        if (t === 'X') { cl.t = 'W'; model[x][r] = 'W'; }
        else if (isReg(t)) { cl.t = DBL[t]; model[x][r] = DBL[t]; }
        else return;
        pop(cl, 1.25, 'k', 'kk');
      });
    }
    await wait(hurry ? 120 : 420);
  }
  async function pourIn() {
    S.emit('pour');
    for (let x = 0; x < REELS; x++) {
      const top = model[x].lastIndexOf('P'); if (top < 0) continue;
      const willFill = model[x].every((t, r) => r <= top ? (t === 'P' || isReg(t) || isDbl(t) || t === 'W') : t === 'W');
      if (willFill) { scene.banner[x] = 0; tw(scene.banner, { [x]: 1 }, hurry ? 160 : 620, R.E.out); }
      for (let r = top; r >= 0; r--) {
        const t = model[x][r];
        if (!(t === 'P' || isReg(t) || isDbl(t))) continue;
        const [px, py] = cellXY(x, r), cl = cells[x][r];
        cl.t = 'W'; model[x][r] = 'W'; pop(cl, 1.2, 'k', 'kk');
        R.spawn({ img: 'fx-molten', x: px, y: py, w: L.cs * 1.1, s: .5, vs: 1.2, life: .5, fade: .3, add: true, layer: 2 });
        await wait(hurry ? 15 : 60);
      }
    }
    await wait(hurry ? 80 : 240);
  }
  async function sparkIn() {
    const gold = model.some(col => col.includes('Q'));
    S.emit(gold ? 'sparkGold' : 'spark');
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => { if (t === 'K' || t === 'Q') { const [px, py] = cellXY(x, r); flash(px, py, t === 'Q' ? 2.4 : 1.6); burst(px, py, 'fx-spark', t === 'Q' ? 26 : 16, t === 'Q' ? 1.4 : 1.1); } });
    scene.shake = gold ? 18 : 10; scene.flash = gold ? .3 : .12;
    for (const [x, r] of sparkBlocks(model, rows)) {
      const t = model[x][r]; if (t === 'S' || t === 'Z' || t[0] === 'R') continue;
      const cl = cells[x][r]; cl.t = 'W'; model[x][r] = 'W'; pop(cl, 1.3, 'k', 'kk');
    }
    await wait(hurry ? 120 : 420);
  }
  // survivors settle to the bottom of each reel, the new symbols fall in on top (the same rule as the math)
  function refill(gone, add) {
    for (let x = 0; x < REELS; x++) {
      const keepM = [], keepC = [];
      model[x].forEach((t, r) => { if (!gone.has(x * 16 + r)) { keepM.push(t); keepC.push(cells[x][r]); } });
      const fresh = add[x] || [];
      model[x] = keepM.concat(fresh);
      cells[x] = keepC.concat(fresh.map((t, j) => newCell(t, Math.max(viewRows, rows[x]) + j + .5)));
      cells[x].forEach((cl, r) => { R.killTweens(cl); cl.a = 1; cl.hl = 0; cl.k = 1; if (cl.y !== r) tw(cl, { y: r }, (hurry ? 120 : quick ? 170 : 280) + Math.abs(cl.y - r) * (hurry ? 10 : quick ? 14 : 26), R.E.out); });
    }
    S.emit('drop');
    const rn = (add || []).flat().filter(t => t[0] === 'R'); if (rn.length) S.emit('rune', { mult: Math.max(...rn.map(runeOf)), when: .25 });
  }
  let cascade = 0;
  async function winIn(e) {
    const wins = e.w.map(([s, n, ways, m, pay]) => ({ s, n, ways, m, pay }));
    const gone = new Set();
    for (const w of wins) { w.cells = []; for (let x = 0; x < w.n; x++) model[x].forEach((t, r) => { if (t === w.s || t === DBL[w.s] || isWild(t)) { w.cells.push([x, r]); gone.add(x * 16 + r); } }); }
    for (const k of gone) cells[k >> 4][k & 15].hl = 1;
    for (const w of wins) symPlay(w.s);
    if ([...gone].some(k => isWild(model[k >> 4][k & 15]))) symPlay('W');
    cascade++;
    const units = roundCtx ? roundCtx.units(e.win) : 0, x = roundCtx ? units / Math.max(1, roundCtx.amount) : 0;
    const rc = roundCtx ? roundCtx.cost : 1, bigX = 10 * Math.pow(rc, .588);
    S.emit(x >= bigX ? 'winB' : x >= 2 * rc ? 'winM' : 'winS');
    S.emit('melt', { step: cascade });
    // every symbol shows what it won, over its winning cells
    for (const w of wins) {
      const mx = w.cells.reduce((s, [cx]) => s + cx, 0) / w.cells.length, my = w.cells.reduce((s, [, cy]) => s + cy, 0) / w.cells.length;
      const [px, py] = cellXY(mx, my);
      label((w.m > 1 ? 'x' + w.m + ' ' : '') + money(roundCtx ? roundCtx.units(w.pay) : 0), px, py, L.cs * (w.m > 1 ? .42 : .34), { hold: 620 });
    }
    setTotal(roundCtx ? roundCtx.units(e.total) : 0); musicLevel();
    if (x >= 2 && smith && !smith.busy()) smith.act('smith-cheer', 1.5);
    await wait(hurry ? 180 : quick ? 160 : 480);
    if (e.capped) { await sampoMoment(); return; }
    // the winning cells melt in the forge
    for (const k of gone) {
      const cx = k >> 4, r = k & 15, cl = cells[cx][r], [px, py] = cellXY(cx, r);
      tw(cl, { k: 1.2, a: 0 }, hurry ? 80 : quick ? 120 : 200, R.E.in);
      R.spawn({ img: 'fx-molten', x: px, y: py, w: L.cs * .9, s: .4, vs: 1.4, life: .45, fade: .25, add: true, layer: 2 });
      if (Math.random() < .6) R.spawn({ img: 'fx-spark', x: px, y: py, vx: (Math.random() - .5) * 260, vy: -160 - Math.random() * 200, g: 700, w: L.cs * .35, life: .6, add: true, layer: 2 });
    }
    scene.shake = Math.max(scene.shake, 3 + wins.length);
    // the bonuses' states
    if (st.spots) for (const k of gone) { const cx = k >> 4, r = k & 15; st.spots[cx][r] = Math.min(SPOT_CAP, st.spots[cx][r] ? st.spots[cx][r] * 2 : 2); }
    if (st.spots && gone.size) S.emit('spotUp', { mult: Math.max(...st.spots.flat()) });
    if (st.song) for (const w of wins) { st.song[w.s] = Math.min(SONG_CAP, st.song[w.s] * 2); st.songPop[w.s] = 1.6; tw(st.songPop, { [w.s]: 1 }, 420, R.E.elastic); S.emit('songUp', { mult: st.song[w.s] }); }
    if (st.kind === 'bellows') { st.heat += gone.size; S.emit('bellows'); }
    if ('grow' in e) {
      const gx = e.grow, r = rows[gx], [px, py] = cellXY(gx, r);
      rows[gx]++; S.emit('grow'); burst(px, py, 'fx-molten', 12, 1, { add: true }); flash(px, py, 1.4); scene.shake = Math.max(scene.shake, 9);
    }
    await wait(hurry ? 80 : quick ? 90 : 200);
    refill(gone, dec(e.add));
    await wait(hurry ? 160 : quick ? 200 : 380);
  }
  async function heatIn(e) {
    const [from, to] = UPGRADE[e.lv - 1];
    st.lv = e.lv; st.heat = e.heat; scene.heatPop = 1.5; tw(scene, { heatPop: 1 }, 500, R.E.elastic);
    S.emit('heatUp', { level: e.lv }); scene.flash = .25; scene.shake = 10;
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => {
      if (t !== from && t !== DBL[from]) return;
      const cl = cells[x][r], [px, py] = cellXY(x, r);
      cl.t = t === from ? to : DBL[to]; model[x][r] = cl.t; pop(cl, 1.35, 'k', 'kk');
      R.spawn({ img: 'fx-molten', x: px, y: py, w: L.cs * 1.2, s: .5, vs: 1.3, life: .5, fade: .3, add: true, layer: 2 });
    });
    if (L.side) label('', L.side.x, L.side.y, L.cs * .4, { img: 's-' + to, w: L.cs * 1.2, hold: 900 });
    await waitSkip(hurry ? 200 : 900);
  }
  // the Sampo connects: the maximum win, at once
  async function sampoMoment() {
    S.emit('sampo'); scene.flash = 1; scene.shake = 30; symPlay('Z');
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => { if (t === 'Z') { const [px, py] = cellXY(x, r); for (let q = 0; q < 3; q++) R.spawn({ img: 'fx-flash', x: px, y: py, w: W * .6, s: .3 + q * .2, vs: 1.2, life: 1.4, fade: .7, add: true, rot: q, vr: .4, layer: 2 }); } });
    await waitSkip(1200);
  }

  /* ---------- The bonuses ---------- */
  /* The big screens (bonus opening, total win, max win): the carved panel lands with a hit, molten cracks run across it
     while it is open, its lettering beats; PLAY / Space / a tap on the stage continues, and it goes on its own after
     `ms` so autoplay never stops on it. o: { kind: 'intro' | 'total' | 'max', title, spins, text, amount } */
  async function screen(o, ms) {
    await ensure(['panel', 'l-congrats', 'l-total', 'l-free', 'l-max', 'l-press', 'seq-crack'].concat(o.title ? [o.title] : []));
    const sc = { ...o, a: 0, s: .55, cracks: [], nextCrack: 0, amt: 0 };
    scene.screen = sc;
    const cel = document.querySelector('.ah-celeb');
    if (cel) { cel.textContent = o.kind === 'intro' ? (o.name + ' ' + o.spins + ' FREE SPINS') : 'TOTAL WIN ' + money(o.amount || 0); cel.classList.add('on'); }
    tw(sc, { a: 1 }, 260, R.E.out); await tw(sc, { s: 1 }, 520, R.E.back);
    scene.shake = Math.max(scene.shake, 14); scene.flash = Math.max(scene.flash, .35); S.emit('hammer');
    if (o.amount) { const stop = S.count(1.4 * (roundCtx ? roundCtx.speed() : 1), 2); await Promise.race([tw(sc, { amt: o.amount }, 1400, R.E.out), waitSkip(1400)]); sc.amt = o.amount; stop(); }
    await waitSkip(ms);
    await tw(sc, { a: 0, s: 1.08 }, 280, R.E.in);
    scene.screen = null; if (cel) cel.classList.remove('on');
  }
  function drawScreen() {
    const sc = scene.screen; if (!sc || sc.a <= .01) return;
    const pan = R.img('panel'); if (!pan) return;
    c.globalAlpha = sc.a * .72; c.fillStyle = '#05070d'; c.fillRect(0, 0, W, H); c.globalAlpha = 1;
    const pw = Math.min(W * (L.land ? .66 : .96), H * .92 * pan.width / pan.height) * sc.s, ph = pw * pan.height / pan.width;
    const cx = W / 2, cy = H * .48, top = cy - ph / 2;
    // light behind the panel turns slowly
    R.draw(c, 'fx-flash', cx, cy, pw * 1.35, { alpha: sc.a * (.35 + .1 * Math.sin(T * 3)), add: true, rot: T * .2 });
    c.globalAlpha = sc.a; c.drawImage(pan, cx - pw / 2, top, pw, ph); c.globalAlpha = 1;
    // molten cracks run across the stone window, one after another
    if (T > sc.nextCrack && !api.reduced) { sc.nextCrack = T + .22 + Math.random() * .3; sc.cracks.push({ x: cx + (Math.random() - .5) * pw * .6, y: top + ph * (.25 + Math.random() * .4), t0: T, s: pw * (.25 + Math.random() * .25), r: Math.random() * TAU }); }
    const seq = R.img('seq-crack');
    sc.cracks = sc.cracks.filter(k => T - k.t0 < .7);
    if (seq) for (const k of sc.cracks) {
      const f = Math.min(11, Math.floor((T - k.t0) / .7 * 12)), fw = seq.width / 12;
      c.save(); c.globalAlpha = sc.a * .9; c.globalCompositeOperation = 'lighter'; c.translate(k.x, k.y); c.rotate(k.r);
      c.drawImage(seq, f * fw, 0, fw, seq.height, -k.s / 2, -k.s / 2 * seq.height / fw, k.s, k.s * seq.height / fw); c.restore();
    }
    const beat = 1 + Math.sin(T * 5) * .02, a = sc.a;
    if (sc.kind === 'intro') {
      R.draw(c, sc.title, cx, top + ph * .2, pw * .66 * beat, { alpha: a });
      const nh = ph * .16, nw = R.textWidth(String(sc.spins), nh), fr = R.img('l-free'), fw2 = pw * .42;
      R.number(c, String(sc.spins), cx - fw2 / 2 - pw * .02, top + ph * .42, nh, { alpha: a });
      if (fr) R.draw(c, 'l-free', cx + nw / 2 + pw * .02, top + ph * .42, fw2, { alpha: a });
      if (sc.text) {
        c.save(); c.globalAlpha = a; c.fillStyle = '#fff3dc'; c.textAlign = 'center'; c.textBaseline = 'middle';
        const fz = Math.max(12, Math.round(ph * .045)); c.font = '600 ' + fz + 'px Outfit, sans-serif'; c.lineWidth = fz * .28; c.strokeStyle = '#1c0f07'; c.lineJoin = 'round';
        const words = sc.text.split(' '), lines = [], maxW = pw * .64; let ln = '';
        for (const w2 of words) { const t2 = ln ? ln + ' ' + w2 : w2; if (c.measureText(t2).width > maxW && ln) { lines.push(ln); ln = w2; } else ln = t2; }
        if (ln) lines.push(ln);
        lines.forEach((l2, i) => { const y = top + ph * .56 + i * fz * 1.3; c.strokeText(l2, cx, y); c.fillText(l2, cx, y); });
        c.restore();
      }
    } else {
      R.draw(c, 'l-congrats', cx, top + ph * .19, pw * .5, { alpha: a });
      R.draw(c, sc.kind === 'max' ? 'l-max' : 'l-total', cx, top + ph * .34, pw * .62 * beat, { alpha: a });
      const amt = sc.amt >= (sc.amount || 0) ? money(sc.amount || 0) : api.money(Math.round(sc.amt));
      R.number(c, amt, cx, top + ph * .54, ph * .14 * beat, { alpha: a });
    }
    // PRESS TO CONTINUE on a dark strip across the gold plaque, so it reads
    const pr = R.img('l-press');
    if (pr) { const lw = pw * .3, lh = lw * pr.height / pr.width, py = top + ph * .845; c.save(); c.globalAlpha = a * .82; c.fillStyle = '#1c0f07'; c.beginPath(); c.roundRect(cx - lw * .56, py - lh * .75, lw * 1.12, lh * 1.5, lh * .6); c.fill(); c.restore(); R.draw(c, 'l-press', cx, py, lw, { alpha: a * (.6 + .4 * Math.sin(T * 4)) }); }
  }
  async function triggerIn(e) {
    const K = KIND[e.kind];
    await ensure([K.title, K.bg, 'meter']);
    S.emit('trigger', { kind: e.kind }); scene.flash = .7; scene.shake = 14; symPlay('S');
    for (let x = 0; x < REELS; x++) model[x].forEach((t, r) => { if (t === 'S') { const [px, py] = cellXY(x, r); cells[x][r].hl = 1; pop(cells[x][r], 1.4, 'k', 'kk'); burst(px, py, 'fx-spark', 14, 1.1); } });
    smithAct('smith-cheer', 1.2);
    await waitSkip(1100);
    st.kind = e.kind; st.heat = 0; st.lv = 0;
    st.song = e.kind === 'song' ? Object.fromEntries([...REG].map(s => [s, 1])) : null;
    st.spots = e.kind === 'grinds' ? rows.map(h => new Array(h).fill(0)) : null;
    scene.bg2 = K.bg; scene.bgA = 0; tw(scene, { bgA: 1 }, 900, R.E.inOut);
    S.music(e.kind, 0);
    if (e.kind === 'mountain') { viewRows = MAX_ROWS; layout(); }
    scene.spins = e.spins; scene.spinNow = 0;
    await screen({ kind: 'intro', title: K.title, name: K.name, spins: e.spins, text: K.text }, 3600);
  }
  async function moreIn(e) {
    S.emit('more'); scene.spins += e.spins; scene.flash = .3;
    label('+' + e.spins, L.spins.x, L.spins.y + L.spins.h * 1.6, L.spins.h * 1.6, { hold: 900 });
    await waitSkip(hurry ? 300 : 1100);
  }
  async function fsEndIn(e) {
    const units = roundCtx ? roundCtx.units(e.total) : 0;
    S.emit('featureEnd', { good: !!roundCtx && units >= roundCtx.amount * (COST[roundCtx.mode] >= 100 ? COST[roundCtx.mode] : 20) });
    // a feature that ends in a big win is told by the emblems (celebrate); every other one gets the total-win screen
    const willCelebrate = roundCtx && (roundCtx.capped || roundCtx.winX >= tiersFor(roundCtx.cost)[0]);
    if (!willCelebrate) await screen({ kind: 'total', amount: units }, 2600);
    scene.spins = 0;
    await tw(scene, { bgA: 0 }, 700, R.E.inOut);
    scene.bg2 = null;
    if (viewRows !== 4) { viewRows = 4; layout(); }
    st.kind = null; st.song = null; st.spots = null;
    S.music('base', 0);
  }

  /* ---------- The round ---------- */
  function resetStage() {
    R.clearParts(); scene.flyers = []; scene.labels = []; scene.title = null; scene.eagle = null; scene.aurora = null; scene.screen = null; scene.banner = {};
    scene.total = 0; scene.totalShow = false; scene.dark = 0; scene.flash = 0; scene.spins = 0; scene.spinNow = 0; scene.bg2 = null; scene.bgA = 0;
    st.kind = null; st.song = null; st.spots = null; st.heat = 0; st.lv = 0; cascade = 0;
    if (viewRows !== 4) { viewRows = 4; layout(); }
  }
  async function play(events, ctx) {
    roundCtx = ctx; busy = true; hurry = false; resetStage();
    document.body.classList.add('ah-busy');
    S.wake(); S.level(1); scene.mlv = 0;
    if (COST[ctx.mode] >= 100) { S.emit('buyConfirm'); S.loadRest(); }
    const kinds = events.filter(q => q.t === 'trigger').map(q => KIND[q.kind]);
    if (kinds.length) ensure(kinds.flatMap(k => [k.title, k.bg]));
    const cost = ctx.cost, feature = kinds.length > 0;
    quick = ctx.winX / cost < 1 && !feature;
    for (const e of events) {
      if (!e) continue;
      const t = e.t || e.type;
      if (t === 'spin') { cascade = 0; await spinIn(e); }
      else if (t === 'eagle') await eagleIn(e);
      else if (t === 'strike') await strikeIn(e);
      else if (t === 'ice') await iceIn(e);
      else if (t === 'quench') await quenchIn(e);
      else if (t === 'aurora') await auroraIn(e);
      else if (t === 'split') await splitIn(e);
      else if (t === 'pour') await pourIn(e);
      else if (t === 'spark') await sparkIn(e);
      else if (t === 'win') await winIn(e);
      else if (t === 'heat') await heatIn(e);
      else if (t === 'trigger') await triggerIn(e);
      else if (t === 'more') await moreIn(e);
      else if (t === 'fsEnd') await fsEndIn(e);
    }
    if (!ctx.winUnits && !feature && smith && Math.random() < .12) smithAct('smith-upset', 1.5);    // now and then he sighs at an empty round (standard 4.4)
    if (ctx.winUnits > 0 && ctx.winX < cost) S.emit('lossSmall');
    await celebrate(ctx.winUnits, ctx.winX, cost, ctx.capped);
    S.level(0);
    ctx.setWin(ctx.winUnits);
    busy = false; document.body.classList.remove('ah-busy');
    return { feature };
  }

  /* ---------- 2x and up, below BIG WIN (standard 7.2): the ingot flares, Ilmarinen cheers, the amount rises over the board ---------- */
  async function midWin(units) {
    S.emit('winM'); smithAct('smith-cheer', 1.4);
    const k = L.total, b = L.g;
    scene.flash = Math.max(scene.flash, .3); scene.shake = Math.max(scene.shake, 6);
    for (let q = 0; q < 18; q++) setTimeout(() => R.spawn({ img: q % 3 ? 'fx-spark' : 's-I', x: k.x + (Math.random() - .5) * 40, y: k.y, vx: (Math.random() - .5) * 560, vy: -560 - Math.random() * 400, g: 1300, w: L.cs * (q % 3 ? .3 : .28), rot: Math.random() * 6, vr: (Math.random() - .5) * 10, life: 1.15, fade: .3, add: q % 3 !== 0, layer: 2 }), (hurry ? 10 : 40) * q);
    const l = { text: money(units), x: k.x, y: k.y, h: L.cs * .5, s: .4, a: 1 };
    scene.labels.push(l);
    const mx = b.ix + b.iw / 2, my = b.iy + b.ih * .45;
    await tw(l, { x: mx, y: my, s: 1.9 }, 480, R.E.back);
    S.emit('hammer'); scene.shake = Math.max(scene.shake, 5); flash(mx, my, 2.2);
    for (let q = 0; q < 8; q++) { const a = q / 8 * TAU; R.spawn({ img: 'fx-spark', x: mx, y: my, vx: Math.cos(a) * 420, vy: Math.sin(a) * 420, drag: .06, w: L.fw * .28, life: .7, fade: .4, add: true, layer: 2 }); }
    l.s = 2.2; tw(l, { s: 1.9 }, 300, R.E.elastic);
    await wait(650);
    await tw(l, { x: k.x, y: k.y, s: .5, a: .3 }, 380, R.E.in);
    scene.labels = scene.labels.filter(q => q !== l);
    scene.totalPop = 1.5; tw(scene, { totalPop: 1 }, 420, R.E.elastic);
    await wait(250);
  }

  /* ---------- The win moment (from the mode's price, standard 3.3 and 7.1) ---------- */
  async function celebrate(units, x, cost, capped) {
    const TIERS = tiersFor(cost);
    if (x < cost) { await wait(380); return; }                     // below the price: quiet
    let tier = -1; TIERS.forEach((t, k) => { if (x >= t) tier = k; });
    if (capped) tier = 3;
    if (tier < 0 && x >= 2 * cost) { await midWin(units); return; }
    if (tier < 0) {
      S.emit('winS'); smithAct('smith-cheer', 1.6);
      burst(L.total.x, L.total.y, 'fx-spark', 10, 1);
      scene.totalPop = 1.4; tw(scene, { totalPop: 1 }, 600, R.E.elastic);
      await wait(1100);
      return;
    }
    // the big moment: the light is pulled in, the count climbs THROUGH the tiers (each lands with its own impact), the title
    // lives the whole time; the spin button or Space ends the current stage at once
    const top = tier, steps = TITLES.slice(0, top + 1), had = scene.totalShow;
    scene.totalShow = false;
    await ensure(steps);
    const sp = roundCtx ? roundCtx.speed() : 1, skip0 = skipReq;
    S.hold(.06); smithAct('smith-big', 1.1);
    await Promise.race([tw(scene, { dark: .5 }, 600, R.E.in), waitSkip(600)]); scene.dark = .5;
    const cel = document.querySelector('.ah-celeb');
    const t = { img: steps[0], s: .3, a: 1, oy: -H * .05, amount: 0, ns: 1, rot: -.05, exact: false, tier: 0, live: true };
    scene.title = t;
    const land = async k => {
      t.img = steps[k]; t.tier = k; t.s = .55; t.rot = (k % 2 ? .06 : -.06);
      tw(t, { s: 1, rot: 0 }, 380, R.E.back);
      scene.flash = .85; scene.shake = 16 + k * 7; scene.kick = 1; tw(scene, { kick: 0 }, 420, R.E.out);
      S.emit('bigWin', { tier: k + 1 }); S.emit('hammer');
      if (cel) { cel.textContent = TITLE_WORDS[k] + ' ' + money(units); cel.classList.add('on'); }
      tierFx(k, true);
      smithAct('smith-cheer', 1.2 + k * .15);
      await waitSkip(260);
      tierFx(k, false);
    };
    await land(0);
    const ends = [];
    for (let k = 0; k < top; k++) ends.push(Math.round(units * TIERS[k + 1] / Math.max(x, 1e-9)));
    ends.push(units);
    const SEG = capped ? [1000, 1000, 1000, 7000] : [2100, 1500, 1500, 1800];
    const p = { v: 0 }, total = ends.length;
    const stop = S.count(SEG.slice(0, total).reduce((s, v) => s + v, 0) / 1000 * sp, top);
    const grow = Math.sqrt(Math.min(x / cost, 50) / 50);
    let fountainAt = 0;
    const tick = () => {
      if (scene.title !== t) return;
      t.amount = Math.min(units, Math.round(p.v));
      const prog = p.v / Math.max(1, units);
      t.ns = .75 + .55 * grow * Math.min(1, prog * 1.4) + (prog > .65 && prog < 1 ? Math.sin(T * 18) * .05 : 0);
      if (T > fountainAt && !api.reduced && prog < 1) {
        fountainAt = T + Math.max(.015, .09 - .075 * prog * prog * prog);
        const imgs = ['s-I', 's-J', 'fx-spark', 's-H', 'fx-spark'];
        R.spawn({ img: imgs[(Math.random() * imgs.length) | 0], x: L.smith.x, y: L.smith.y - L.smith.h * .45, vx: (Math.random() - .3) * 800, vy: -700 - Math.random() * 500, g: 1500, w: L.cs * (.25 + Math.random() * .15), rot: Math.random() * 6, vr: (Math.random() - .5) * 12, life: 1.4, fade: .4, add: false, layer: 2 });
      }
      if (t.amount < units) requestAnimationFrame(tick);
    };
    tick();
    for (let k = 0; k < total; k++) {
      const done = tw(p, { v: ends[k] }, SEG[k], k === total - 1 ? R.E.out : R.E.lin);
      const skipped = await Promise.race([done.then(() => false), waitSkip(SEG[k] + 50)]);
      if (skipped) { R.killTweens(p); p.v = ends[k]; }
      if (k < total - 1) await land(k + 1);
    }
    stop(); S.countEnd(x / cost); p.v = units; t.amount = units; t.exact = true;
    t.ns = 1.35 * (.75 + .55 * grow); tw(t, { ns: .75 + .55 * grow }, 420, R.E.elastic); scene.shake = 14;
    if (capped) {                                                       // the max win: the Sampo grinds gold over the whole screen
      await ensure(['s-Z']);
      t.img = 's-Z'; t.s = .4; tw(t, { s: L.land ? .9 : .75 }, 500, R.E.back); scene.flash = 1; scene.shake = 34; S.emit('sampo');
      if (cel) cel.textContent = 'MAX WIN ' + money(units);
      for (let q = 0; q < 40; q++) setTimeout(() => R.spawn({ img: q % 3 ? 's-I' : 'fx-spark', x: Math.random() * W, y: -L.cs * .3, vx: (Math.random() - .5) * 80, vy: 200 + Math.random() * 300, g: 900, w: L.cs * (.3 + Math.random() * .2), rot: Math.random() * 6, vr: (Math.random() - .5) * 8, life: 2.4, fade: .5, layer: 2 }), q * 60);
      for (let q = 0; q < 8; q++) { if (await waitSkip(250)) break; }
    }
    await waitSkip(skipReq !== skip0 ? 500 : [2100, 2300, 2600, 3000][top]);
    await tw(t, { a: 0, s: .9 }, 300, R.E.in);
    scene.title = null; tw(scene, { dark: 0 }, 300); scene.tint = null; scene.totalShow = had; S.emit('bigEnd', { tier: top + 1 });
    const cel2 = document.querySelector('.ah-celeb'); if (cel2) cel2.classList.remove('on');
    S.hold(1);
  }
  // each tier its own fire: BIG sparks, MEGA molten splashes, EPIC a ring of sparks and aurora, LEGENDARY the northern lights fill the sky
  function tierFx(k, first) {
    const x = L.title.x, y = L.title.y, w = L.title.w;
    scene.tint = ['#ff7a1a', '#ff9a2a', '#7a5aff', '#3affb0'][k]; scene.tintA = .06 + k * .04;
    if (first) for (let q = 0; q < 3 + k * 2; q++) R.spawn({ img: 'fx-spark', s: .4, vs: 2.6, x: x + (Math.random() - .5) * w * .8, y: y + (Math.random() - .5) * w * .3, w: L.fw * (1.2 + Math.random() * (1 + k * .3)), life: .6, fade: .1, add: true, layer: 2 });
    if (k >= 1) for (let q = 0; q < (first ? 6 : 10) + k * 3; q++) R.spawn({ img: 'fx-molten', x: x + (Math.random() - .5) * w * .9, y: y + w * .12, vx: (Math.random() - .5) * 60, vy: -160 - Math.random() * 220, w: L.fw * (.4 + Math.random() * .4), s: .6, vs: .8, life: .9 + Math.random() * .4, fade: .5, add: true, layer: 2 });
    if (k >= 2) for (let q = 0; q < 24; q++) { const a = q / 24 * TAU; R.spawn({ img: 'fx-spark', x, y, vx: Math.cos(a) * (first ? 700 : 420), vy: Math.sin(a) * (first ? 700 : 420), drag: .04, w: L.fw * .35, life: 1, fade: .5, add: true, layer: 2 }); }
    if (k >= 3) for (let q = 0; q < 5; q++) R.spawn({ img: 'fx-aurora', x: W * (.1 + q * .2), y: H * .15, vx: (Math.random() - .5) * 40, w: W * .4, s: .6, vs: .4, rot: (Math.random() - .5) * .5, life: 2, fade: 1, add: true, alpha: .8, layer: 0 });
    if (!first) for (let q = 0; q < 6; q++) R.spawn({ img: 'fx-steam', x: x + (Math.random() - .5) * w, y: y + w * .1, vx: (Math.random() - .5) * 120, vy: -60 - Math.random() * 80, w: L.fw * .9, s: .5, vs: .9, life: 1.2, fade: .8, alpha: .4, layer: 2 });
  }

  /* ---------- The bar: one low row of carved wood and folk embroidery (adapted from Rock Chompers) ---------- */
  function buildBar() {
    const $ = id => document.getElementById(id), panel = $('lzPanel'), app = $('lzApp'), stage = $('lzStage');
    const box = (cls, kids) => { const d = document.createElement('div'); d.className = cls; kids.forEach(k => k && d.append(k)); return d; };
    const replay = !!(window.LZ && LZ.params && LZ.params.replay);

    const corner = box('ah-corner', [$('lzInfo'), $('lzSound')]);
    const hurryBtn = document.createElement('button');
    hurryBtn.type = 'button'; hurryBtn.className = 'ah-hurry'; hurryBtn.setAttribute('aria-label', 'Skip');
    hurryBtn.addEventListener('click', () => { skipReq++; S.emit('click'); });
    const spin = box('ah-spin', [$('lzAction'), hurryBtn]);
    const amt = document.querySelector('#lzField .lz-amount');
    // the floating bar (28.11, after Waylanders Forge's): turbo, a carved panel with the balance and the win, a panel with the
    // play amount and its up / down arrows, autoplay, and the big spin button
    const wide = box('ah-pw', [$('lzWallet'), $('lzWinBox')]);
    const bet = box('ah-pb', [amt, box('ah-arrows', [$('lzPlus'), $('lzMinus')])]);
    // two rows (Lidor, 28.11): the controls on top, the balance strip under them
    const C = replay ? box('ah-bc ah-row', [spin]) : box('ah-bc ah-row', [box('ah-top', [$('lzFast'), bet, $('lzAuto'), spin]), wide]);
    panel.prepend(C);
    app.classList.add('ah-app');
    const signs = box('ah-signs', []);
    document.querySelectorAll('.lz-feat').forEach(b => { b.classList.add('ah-sign'); signs.append(b); });
    const modes = $('lzModes');
    const holder = box('ah-stagebox', [signs, modes, corner]);
    stage.append(holder);
    if (modes) modes.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      S.emit('click');
      if (matchMedia('(max-aspect-ratio:3/4) and (max-width:370px)').matches && b.getAttribute('aria-pressed') === 'true' && !busy) {
        const other = Array.from(modes.querySelectorAll('button')).find(x => x !== b); if (other) setTimeout(() => other.click(), 0);
      }
    }));
    ['lzFast', 'lzAuto', 'lzInfo', 'lzSound'].forEach(id => $(id) && $(id).addEventListener('click', () => S.emit('click')));
    const lvl = () => { const sel = $('lzAmtSel'); return sel && sel.options.length > 1 ? sel.selectedIndex / (sel.options.length - 1) : 0; };
    $('lzMinus') && $('lzMinus').addEventListener('click', () => setTimeout(() => S.emit('betDown', { level: lvl() }), 0));
    $('lzPlus') && $('lzPlus').addEventListener('click', () => setTimeout(() => S.emit('betUp', { level: lvl() }), 0));
    document.querySelectorAll('.lz-feat').forEach(b => b.addEventListener('click', () => S.emit('buyOpen')));
    amountPicker(amt);
    if (amt) {
      const cost = document.createElement('small'); cost.className = 'ah-cost'; amt.append(cost);
      const sync = () => { const m = app.dataset.mode, sub = $('lzActionSub'); cost.textContent = m === 'stoke' && sub ? '3× · ' + sub.textContent.trim() : ''; amt.classList.toggle('x5', m === 'stoke'); };
      new MutationObserver(sync).observe(app, { attributes: true, attributeFilter: ['data-mode'] });
      if ($('lzActionSub')) new MutationObserver(sync).observe($('lzActionSub'), { childList: true, characterData: true, subtree: true });
      sync();
    }
    replayCard();
    if ($('lzField')) $('lzField').classList.add('ah-gone');
  }
  function amountPicker(amt) {
    if (!amt) return;
    const sel = document.getElementById('lzAmtSel'), popEl = document.createElement('div');
    popEl.className = 'ah-amtpop'; popEl.hidden = true; popEl.setAttribute('role', 'dialog'); popEl.setAttribute('aria-label', 'Choose the play amount');
    document.getElementById('lzApp').append(popEl);
    const open = () => {
      if (sel.disabled || busy) return;
      popEl.replaceChildren(...Array.from(sel.options).map(o => {
        const b = document.createElement('button'); b.type = 'button'; b.textContent = o.textContent; if (o.value === sel.value) b.className = 'on';
        b.addEventListener('click', ev => { ev.stopPropagation(); sel.value = o.value; sel.dispatchEvent(new Event('change')); popEl.hidden = true; S.emit('click'); });
        return b;
      }));
      popEl.hidden = false; S.emit('click');
    };
    amt.setAttribute('role', 'button'); amt.tabIndex = 0; amt.setAttribute('aria-label', 'Play amount: choose');
    amt.addEventListener('click', e => { e.stopPropagation(); if (popEl.hidden) open(); else popEl.hidden = true; });
    amt.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
    document.addEventListener('pointerdown', e => { if (!popEl.hidden && !popEl.contains(e.target) && !amt.contains(e.target)) popEl.hidden = true; });
  }
  function replayCard() {
    const P = (window.LZ && LZ.params) || {}; if (!P.replay) return;
    const bx = document.getElementById('lzReplay'); if (!bx) return;
    const social = !!(api && api.social) || /^(XSC|XGC|XEC|XRC|WRW)$/.test(String(P.currency || ''));
    const L0 = social ? ['Mode', 'Base Play', 'Feature Multiplier', 'Total Play Worth', 'Final Multiplier', 'Total Win'] : ['Mode', 'Base Bet', 'Cost Multiplier', 'Total Bet Cost', 'Payout Multiplier', 'Total Win'];
    const cardEl = document.createElement('dl'); cardEl.className = 'lz-facts ah-replay';
    const dd = L0.map(l => { const t = document.createElement('dt'); t.textContent = l; const d = document.createElement('dd'); d.textContent = '–'; const w = document.createElement('span'); w.className = 'ah-fact'; w.append(t, d); cardEl.append(w); return d; });
    const g = id => (document.getElementById(id) || {}).textContent || '–';
    const sync = () => {
      dd[0].textContent = g('lzRpMode'); dd[1].textContent = g('lzRpAmount'); dd[2].textContent = g('lzRpX'); dd[3].textContent = g('lzRpCost'); dd[4].textContent = g('lzRpMult');
      const a = LZ.state.amount, xv = parseFloat(g('lzRpMult').replace(/[^0-9.]/g, ''));
      dd[5].textContent = Number.isFinite(xv) && a ? api.winMoney(Math.round(a * xv)) : '–';
    };
    bx.querySelector('dl') && (bx.querySelector('dl').hidden = true);
    bx.append(cardEl);
    const mo = new MutationObserver(sync);
    ['lzRpMode', 'lzRpAmount', 'lzRpX', 'lzRpCost', 'lzRpMult'].forEach(id => { const el = document.getElementById(id); if (el) mo.observe(el, { childList: true, characterData: true, subtree: true }); });
    sync();
  }

  /* ---------- The intro: the forge at night, three carved planks ---------- */
  function buildIntro(cards) {
    const intro = document.getElementById('lzIntro'), bx = document.getElementById('lzIntroCards');
    if (!intro || !bx) return;
    intro.classList.add('ah-intro');
    bx.hidden = false;
    bx.replaceChildren(...cards.map(cd => {
      const d = document.createElement('div'); d.className = 'ah-icard';
      const im = document.createElement('img'); im.src = 'assets/' + cd.img + '.webp'; im.alt = '';
      const tx = document.createElement('div'); const b = document.createElement('b'); b.textContent = cd.title; const s = document.createElement('span'); s.textContent = cd.text;
      tx.append(b, s); d.append(im, tx); return d;
    }));
    const keep = document.createElement('label'); keep.className = 'ah-skip';
    keep.innerHTML = '<input type="checkbox" id="ahSkip"> Do not show this again';
    document.querySelector('.lz-intro-in').append(keep);
    let skip = false; try { skip = localStorage.getItem('ah-skip-intro') === '1'; } catch (e) { /* private mode */ }
    document.getElementById('ahSkip').checked = skip;
    document.getElementById('ahSkip').addEventListener('change', e => { try { localStorage.setItem('ah-skip-intro', e.target.checked ? '1' : '0'); } catch (er) { /* ignore */ } });
    if (skip) intro.classList.add('ah-short');
  }

  /* ---------- Rules ---------- */
  const xs = n => (n / 100).toFixed(2).replace(/\.?0+$/, '') + '×';
  const payRows = [...HIGHS].reverse().concat([...LOWS].reverse()).map(s => '<tr><td>' + NAMES[s] + '</td>' + PAY[s].map(v => '<td>' + xs(v) + '</td>').join('') + '</tr>').join('');
  const RULES = `
    <h3>How to play</h3>
    <p>Choose a play amount and press PLAY. The board has 6 reels of 4 rows. <b>A symbol wins when it lands on 3 or more reels in a row, starting from the leftmost reel</b>, anywhere on each reel. The number of ways is the number of that symbol (wilds included) on each of those reels, multiplied together: up to 4,096 ways. The win is the play amount × the value below × the number of ways. Every symbol that wins is counted. The round is decided by the game server when you press PLAY.</p>
    <table><thead><tr><th>Symbol</th><th>3 reels</th><th>4 reels</th><th>5 reels</th><th>6 reels</th></tr></thead><tbody>${payRows}</tbody></table>
    <p><b>Cascades:</b> after a win, every winning symbol and every wild that took part melts away. The symbols above fall down and new ones fall in from the top. This goes on until nothing wins.</p>
    <h3>Wilds</h3>
    <p><b>The glowing ingot</b> is a wild: it stands in for every symbol. A way must have at least one real symbol to win.</p>
    <p><b>Burning rune</b>: a wild with a multiplier from ×2 to ×1,000. A win that uses one or more burning runes is multiplied by the sum of their multipliers.</p>
    <p><b>The Sampo</b>: a wild. A win that uses it wins the maximum win, 25,000× the play amount, at once.</p>
    <h3>The forge's specials</h3>
    <p>When symbols land, the specials work in this order:</p>
    <ul>
      <li><b>Louhi's eagle</b> can swoop on any spin: it takes one wild or special from the board, and a regular symbol falls into its place.</li>
      <li><b>Ilmarinen strikes</b> on a regular spin now and then: 2 to 5 regular symbols turn into wilds.</li>
      <li><b>Ice</b>: every block of ice breaks into the same symbol.</li>
      <li><b>Quench</b>: steam removes the quench and every ornament (low symbol). Only high symbols fall into the gaps.</li>
      <li><b>Northern lights</b>: every symbol of one kind on the board becomes a wild.</li>
      <li><b>Split</b>: every regular symbol on its reel becomes a <b>double</b>, which counts as 2 of that symbol for ways. The split becomes a wild.</li>
      <li><b>Pour</b>: molten iron turns its own cell and every cell below it on its reel into wilds.</li>
      <li><b>Spark</b> bursts into a 2 × 2 block of wilds, <b>golden spark</b> into a 3 × 3 block (kept inside the board). Embers, runes and the Sampo stay.</li>
    </ul>
    <h3>Embers: four bonuses</h3>
    <p>Embers land on regular spins, at most one per reel, and stay through the cascades. At the end of the spin <b>3 embers start THE BELLOWS, 4 RUNE SONG, 5 COPPER MOUNTAIN and 6 THE SAMPO GRINDS</b>, each with 10 free spins. 3 embers on a free spin give 5 more spins, up to 30 in all.</p>
    <p><b>THE BELLOWS:</b> every symbol that melts heats the forge. At 12, 30, 55 and 90 melted symbols an ornament is forged into a high symbol for the rest of the bonus: star into bellows, knot into silver eagle, spiral into kantele, tree into swan.</p>
    <p><b>RUNE SONG:</b> every symbol has its own multiplier, starting at ×1. Each win of a symbol is multiplied by it, then the multiplier doubles, up to ×1,024. Ornaments are rarer in this bonus.</p>
    <p><b>COPPER MOUNTAIN:</b> every cascade that wins carves one reel a row higher, up to 8 rows. The reels stay tall for the whole bonus.</p>
    <p><b>THE SAMPO GRINDS:</b> every spot where a symbol wins gets a ×2 multiplier, which doubles each time a win uses that spot again, up to ×128. A win is multiplied by the sum of the multipliers under its symbols. The spots stay for the whole bonus.</p>
    <h3>Modes</h3>
    <p><b>STOKE THE FIRE</b> (3× the play amount for each spin): the embers land about 5 times as often.</p>
    <p><b>THE BELLOWS feature</b> (${COST.bellows}×), <b>RUNE SONG feature</b> (${COST.runesong}×) and <b>COPPER MOUNTAIN feature</b> (${COST.mountain}×): the spin lands exactly 3, 4 or 5 embers and the bonus starts. Each asks for confirmation and shows the price first. THE SAMPO GRINDS comes only from 6 embers.</p>
    <h3>Win cap</h3>
    <p>The most a single round can win is 25,000× the play amount. When the total reaches it, the round ends at 25,000×.</p>`;
  const introCards = [
    { img: 's-S', title: '4,096 WAYS · CASCADES', text: 'Land a symbol on 3+ reels from the left. Winners melt and new symbols fall in.' },
    { img: 's-W', title: 'THE FORGE\'S SPECIALS', text: 'Runes, sparks, pours, splits and northern lights forge wilds. Watch out for Louhi\'s eagle.' },
    { img: 's-Z', title: '4 BONUSES', text: '3 to 6 embers open THE BELLOWS, RUNE SONG, COPPER MOUNTAIN or THE SAMPO GRINDS.' },
  ];

  /* ---------- Boot ---------- */
  const LATER = ['bg-bellows', 'bg-song', 'bg-mountain', 'bg-grinds', 't-big', 't-mega', 't-epic', 't-legend', 'w-big', 'w-mega', 'w-epic', 'w-legend', 'panel', 'l-congrats', 'l-total', 'l-free', 'l-max', 'l-press', 'seq-crack', 'seq-molten', 'seq-spark', 'meter', 'smith-hd', 'wild-reel', 't-bellows', 't-song', 't-mountain', 't-grinds', 'eagle-hd'];
  if (innerWidth / Math.max(1, innerHeight) >= 1.15) LATER.push('bg-tall');   // the phone background only for a phone
  const ASSET_NAMES = Object.keys(A).filter(n => !LATER.includes(n));
  let laterP = null, idleOnce = false;
  const later = () => laterP || (laterP = (S.loadRest(), R.load(LATER.filter(n => A[n]))));
  const ensure = names => { const miss = names.filter(n => !R.img(n) && A[n]); return miss.length ? R.load(miss) : Promise.resolve(); };

  LZ.boot({
    id: 'anvil-heart', title: 'Anvil Heart', tagline: 'Strike the anvil. Forge the Sampo.', rtp: '96.30',
    layout: 'bar', shell: 2, celebrate: false,
    logo: '<img src="assets/logo.webp" alt="Anvil Heart">',
    modes: [
      { name: 'base', label: 'NORMAL', cost: 1, maxWin: CAP_X, note: '1×' },
      { name: 'stoke', label: 'STOKE THE FIRE', cost: 3, maxWin: CAP_X, note: '3×' },
      { name: 'bellows', kind: 'feature', label: 'THE BELLOWS', cost: COST.bellows, maxWin: CAP_X, blurb: 'The spin lands 3 embers: THE BELLOWS starts with 10 free spins. Every win heats the forge and forges ornaments into high symbols.', confirmTitle: 'Pump the bellows?', confirmLabel: 'Start' },
      { name: 'runesong', kind: 'feature', label: 'RUNE SONG', cost: COST.runesong, maxWin: CAP_X, blurb: 'The spin lands 4 embers: RUNE SONG starts with 10 free spins. Every symbol\'s multiplier doubles each time it wins.', confirmTitle: 'Sing the runes?', confirmLabel: 'Start' },
      { name: 'mountain', kind: 'feature', label: 'COPPER MOUNTAIN', cost: COST.mountain, maxWin: CAP_X, blurb: 'The spin lands 5 embers: COPPER MOUNTAIN starts with 10 free spins. Every win carves a reel higher, up to 8 rows.', confirmTitle: 'Open the mountain?', confirmLabel: 'Start' },
    ],
    modeGroupLabel: 'Fire', featureName: 'a bonus', statLabel: 'Bonuses',
    playLabel: 'PLAY', busyLabel: 'PLAYING',
    introCards, rules: RULES,
    preload: ['assets/logo.webp', 'assets/bg-wide.jpg', 'assets/frame.webp', 'assets/digits.webp'],
    async mount(stage, a) {
      api = a; S.init(a);
      R.setSpeed(() => (roundCtx ? roundCtx.speed() : 1));
      cv = document.createElement('canvas'); cv.className = 'ah-canvas';
      stage.append(cv); c = cv.getContext('2d');
      document.addEventListener('visibilitychange', () => S.pause(document.hidden));
      cv.addEventListener('pointerdown', () => { if (scene.screen) skipReq++; });   // PRESS TO CONTINUE: a tap on the big screens only
      document.addEventListener('keydown', e => { if (e.code === 'Space' && busy && !e.repeat && spaceOK()) { skipReq++; } });
      const sb = document.createElement('div'); sb.className = 'ah-smithbox'; sb.setAttribute('aria-hidden', 'true'); stage.append(sb);
      const cel = document.createElement('div'); cel.className = 'ah-celeb'; cel.setAttribute('role', 'status'); cel.setAttribute('aria-live', 'polite'); stage.append(cel);
      buildBar(); buildIntro(introCards);
      await R.load(ASSET_NAMES);
      smith = R.makeActor('smith', { idle: 'smith-idle', still: 'smith-still', later: ['smith-strike', 'smith-cheer', 'smith-upset', 'smith-big', 'smith-tense'] });
      eagleA = R.makeActor('eagle', { later: ['eagle-swoop'] });
      for (const k of ANIM) symA[k] = R.makeActor('sym' + k, { later: ['sym' + k + '-win'] });
      // the first board: a calm one to look at before the first PLAY (no ways on it)
      const g0 = Array.from({ length: REELS }, (_, x) => Array.from({ length: 4 }, (_, r) => [...REG][(x * 3 + r * 7 + (x * r) % 4) % 10]));
      g0[2][1] = 'S'; g0[4][3] = 'R10';
      setBoard(g0);
      new ResizeObserver(() => layout()).observe(stage);
      layout(); requestAnimationFrame(frame);
    },
    play,
    reset() { busy = false; document.body.classList.remove('ah-busy'); resetStage(); },
    // first load (fix #17): everything that is not needed for the first round comes after it, in steps
    idle() { if (!idleOnce) { idleOnce = true; setTimeout(() => { if (smith && smith.loadLater) smith.loadLater(); for (const k in symA) if (symA[k].loadLater) symA[k].loadLater(); }, 6000); setTimeout(() => { S.loadRest(); if (eagleA && eagleA.loadLater) eagleA.loadLater(); }, 9000); setTimeout(later, 12000); } roundCtx = null; },
    onStart() { S.wake(); S.loadFirst(); S.start(); S.ambience(true); setTimeout(() => { S.loadRest(); later(); }, 30000); },
    onSound(on) { if (on) { S.wake(); S.ambience(true); S.music(st.kind || 'base', 0); } },
    onMode() {},
  });
})();
