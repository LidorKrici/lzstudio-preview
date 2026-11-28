/* Rock Chompers: the stage and the playback of a round (v3: a 7x7 cluster slot with tumbles, stone-face CHOMPERS
 * and the TOTEM WHEEL). The shell (lz-core.js) owns the wallet, the amounts, the modes and settling. This file draws
 * the canyon, the board and everything on it, and plays back the events of the book it is given. Nothing here decides
 * a result: the boards, the wins, the meals and the wheel's stop all come from the book. */
(() => {
  'use strict';
  const R = window.RC, S = window.RCSound, A = window.RC_ASSETS || {};
  const TAU = Math.PI * 2, N = 7;
  let api = null, cv = null, c = null, W = 0, H = 0, DPR = 1, L = null, last = 0, T = 0;
  let cook = null, hurry = false, busy = false, roundCtx = null, quick = false;

  /* ---------- Values shown on screen and in the rules (the math is in math/game.mjs) ---------- */
  const TILE = { peb: 't-peb', tur: 't-tur', grn: 't-grn', rub: 't-rub', tooth: 't-tooth', idol: 't-idol', crown: 't-crown', W: 't-W', G: 't-G' };
  const SYMS = ['peb', 'tur', 'grn', 'rub', 'tooth', 'idol', 'crown'];
  const NAMES = { peb: 'Pebbles', tur: 'Turquoise', grn: 'Green pepper', rub: 'Ruby', tooth: 'Pearl tooth', idol: 'Gold idol', crown: 'Emerald crown' };
  const PAY = {
    peb: [10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 250], tur: [15, 20, 25, 30, 40, 50, 75, 100, 150, 250, 500],
    grn: [15, 20, 25, 30, 40, 50, 75, 100, 150, 250, 500], rub: [20, 25, 30, 40, 50, 75, 100, 150, 250, 500, 750],
    tooth: [25, 30, 40, 50, 75, 100, 150, 250, 400, 750, 1000], idol: [25, 40, 50, 75, 100, 150, 250, 400, 500, 1000, 2000],
    crown: [50, 75, 100, 150, 250, 400, 500, 750, 1250, 2500, 5000] };
  const SCALE = 2.1;
  // the totem wheel: 20 prizes, two in each painted segment, clockwise from the top (the same list as math/game.mjs)
  const WHEEL = [{ k: 'win', x: 5000 }, { k: 'win', x: 100 }, { k: 'night', seed: 8 }, { k: 'win', x: 150 }, { k: 'win', x: 300 },
    { k: 'night', seed: 16 }, { k: 'win', x: 120 }, { k: 'win', x: 750 }, { k: 'win', x: 110 }, { k: 'night', seed: 12 },
    { k: 'win', x: 2500 }, { k: 'win', x: 140 }, { k: 'win', x: 200 }, { k: 'night', seed: 24 }, { k: 'win', x: 175 },
    { k: 'win', x: 400 }, { k: 'win', x: 1000 }, { k: 'night', seed: 32 }, { k: 'win', x: 250 }, { k: 'win', x: 500 }];
  const WSTEP = TAU / WHEEL.length, wAng = k => (k - .5) * WSTEP;
  const TIERS = [4, 12, 20, 40];                         // x the round's price: SPICY, SCORCHER, INFERNO, VOLCANIC
  const TITLES = ['t-spicy', 't-scorcher', 't-inferno', 't-volcanic'];

  /* ---------- Scene state ---------- */
  // cells[x][y]: { s: symbol | null, y: drawn row (falls), a: alpha, k: scale, hl: highlight } ; chomps: the faces on the board
  const cells = Array.from({ length: N }, () => Array.from({ length: N }, () => ({ s: null, y: 0, a: 1, k: 1, hl: 0 })));
  const mult = Array.from({ length: N }, () => Array(N).fill(0));
  const multPop = Array.from({ length: N }, () => Array(N).fill(1));
  let chomps = [];
  const faces = { forEach: f => chomps.forEach(f) };    // the celebrations make every face on the board jump
  const scene = {
    night: 0, shake: 0, flash: 0, dark: 0, kick: 0,
    haul: 0, haulPop: 1, haulShow: false, total: 0, totalShow: false, totalPop: 1, spins: 0, spinNow: 0,
    title: null, labels: [], flyers: [], reaper: null, cartLevel: 0, cartPop: 1, chili: null, bird: null,
    wheel: null, win: 0, winA: 0, winPop: 1,
  };
  const pop = (o, k = 1.15, key = 'sx', key2 = 'sy') => { o[key] = k; o[key2] = 2 - k; R.tween(o, { [key]: 1, [key2]: 1 }, 380, R.E.elastic); };

  /* ---------- Layout ---------- */
  function layout() {
    const r = cv.parentElement.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height); DPR = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    const land = W / H >= 1.15, tiny = H < 260;
    let gs, gx, gy;
    if (land) {
      gs = Math.min(H * .9, W * .5); gx = W * .45 - gs / 2; gy = Math.max(H * .045, (H - gs) / 2);   // Lidor, 28.11: the board sits in the middle of the screen
      L = { land, tiny, cook: { x: W * .84, y: H * .99, h: H * .64 }, cart: { x: W * .83, y: H * .97, w: W * .1 },
        logo: { x: W * .1, y: H * .115, w: Math.min(W * .19, H * .34) }, title: { x: gx + gs / 2, y: H * .45, w: Math.min(W * .56, H * 1.05) },
        winHud: { x: gx + gs * .24, y: gy + gs - gs * .035, h: H * .06 }, nightHud: { x: gx + gs * .76, y: gy + gs - gs * .035, h: H * .05 },
        meter: { x: W * .1, y: H * .6, h: H * .66 } };
    } else {
      const S2 = Math.max(44, Math.min(52, innerHeight * .06)), feet = H - Math.max(0, 1.15 * S2 - 34) - 4;
      const signW = Math.min(W * .47, 220), signTop = 6 + S2 + 6, signH = signW / 2.45;
      const rowTop = signTop + signH + 4, row = Math.max(90, H * .17);   // the row of the logo, between the totem and the cook
      gy = rowTop + row; gs = Math.min(W * .995, feet - gy); gx = (W - gs) / 2;
      L = { land, tiny, signW, signTop, cook: { x: W * .86, y: gy + gs * .06, h: row * 1.3 }, cart: { x: W * .8, y: feet, w: W * .26 },
        logo: { x: W * .49, y: rowTop + row * .5 - Math.min(W * .46, row * 1.75) * .55 * .2, w: Math.min(W * .46, row * 1.75) }, title: { x: W / 2, y: gy + gs * .45, w: W * .92 },
        winHud: { x: gx + gs * .3, y: gy + gs - gs * .035, h: gs * .07 }, nightHud: { x: gx + gs * .74, y: gy + gs - gs * .035, h: gs * .055 },
        meter: { x: W * .1, y: rowTop + row * .55, h: row * 1.15 } };
    }
    const pad = gs * .125;                                   // the carved frame around the 7x7 floor
    L.grid = { x: gx, y: gy, s: gs, ix: gx + pad, iy: gy + pad, cs: (gs - pad * 2) / N };
    L.board = { x: gx, y: gy, w: gs, h: gs };
    L.fw = L.grid.cs * 1.6;                                   // the size the effects scale with
    place();
  }
  function place() {
    const st = document.querySelector('.rc-stagebox');
    if (st) { st.dataset.land = L.land ? '1' : '0'; st.dataset.tiny = L.tiny ? '1' : '0'; }
    // Lidor, 28.11: the two buy signs bigger, centred in the space right of the board
    if (st && !L.land) { st.style.setProperty('--rc-signtop', L.signTop + 'px'); st.style.setProperty('--rc-signw', L.signW + 'px'); }
    if (st && L.land) { const right = L.grid.x + L.grid.s, space = W - right, sw = Math.min(space * .78, H * .36, 330); st.style.setProperty('--rc-signx', (right + space / 2) + 'px'); st.style.setProperty('--rc-signw', sw + 'px'); }
    const cb = document.querySelector('.rc-cookbox');
    if (cb) { const h = L.cook.h, w = h * .6; Object.assign(cb.style, { left: (L.cook.x - w * .5) + 'px', top: (L.cook.y - h) + 'px', width: w + 'px', height: Math.min(h, H - (L.cook.y - h)) + 'px' }); }
  }
  const cellXY = (x, y) => [L.grid.ix + (x + .5) * L.grid.cs, L.grid.iy + (y + .5) * L.grid.cs];

  /* ---------- Drawing ---------- */
  /* ---------- The waterfalls flow (standard 5.7: continuous motion in code, 60fps) ----------
     Each fall's own shape is read once from the painting (its bright water pixels), and streaks of light run down
     through that shape every frame. Same places by day and by night (the night picture was painted from the day one). */
  const FALLS = [[.05, .31, .18, .86], [.80, .32, .94, .88]];        // x0, y0, x1, y1 of each fall, as parts of bg-mid
  const falls = {};
  function fallMasks(name, night) {
    const im = R.img(name); if (!im || falls[name]) return falls[name];
    const iw = im.width, ih = im.height, out = [];
    for (const [x0, y0, x1, y1] of FALLS) {
      const sx = Math.round(x0 * iw), sy = Math.round(y0 * ih), sw = Math.round((x1 - x0) * iw), sh = Math.round((y1 - y0) * ih);
      const w = Math.round(sw / 3), h = Math.round(sh / 3);           // a third of the picture's size is plenty for a soft mask
      const m = document.createElement('canvas'); m.width = w; m.height = h;
      const mc = m.getContext('2d', { willReadFrequently: true }); mc.drawImage(im, sx, sy, sw, sh, 0, 0, w, h);
      let d; try { d = mc.getImageData(0, 0, w, h); } catch (x) { return (falls[name] = []); }
      const p = d.data, t0 = night ? .42 : .74, t1 = night ? .66 : .9;
      for (let i = 0; i < p.length; i += 4) {
        const r = p[i], gg = p[i + 1], b = p[i + 2], l = (r * .3 + gg * .55 + b * .15) / 255;
        let a = Math.max(0, Math.min(1, (l - t0) / (t1 - t0)));
        if (b < r - 6 || b < gg - 20) a = 0;                            // water is white-blue: not the sky, sun or moss
        p[i] = p[i + 1] = p[i + 2] = 255; p[i + 3] = a * 255;
      }
      mc.putImageData(d, 0, 0);
      // the streaks: thin vertical lines of light, a texture twice the fall's height that scrolls down
      const st = document.createElement('canvas'); st.width = w; st.height = h * 2;
      const sc = st.getContext('2d');
      for (let q = 0; q < w * 2.6; q++) {
        const x = Math.random() * w, y = Math.random() * h, len = h * (.08 + Math.random() * .25), a = .25 + Math.random() * .55;
        const gr = sc.createLinearGradient(0, y, 0, y + len);   // station:ok: a streak of falling water, the waterfall's own art in motion gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, 'rgba(255,255,255,' + a + ')'); gr.addColorStop(1, 'rgba(255,255,255,0)');
        sc.fillStyle = gr; sc.fillRect(x, y, .6 + Math.random() * 1.4, len); sc.fillRect(x, y + h, .6 + Math.random() * 1.4, len); if (y + len > h) sc.fillRect(x, y - h, .6 + Math.random() * 1.4, len);
      }
      const work = document.createElement('canvas'); work.width = w; work.height = h;
      out.push({ m, st, work, w, h, x0, y0, x1, y1, sp: .9 + Math.random() * .25 });
    }
    return (falls[name] = out);
  }
  function drawFalls(name, alpha) {
    const im = R.img(name), fs = fallMasks(name, name !== 'bg-mid'); if (!im || !fs || alpha <= .01) return;
    const iw = im.width, ih = im.height, k = Math.max(W / iw, H / ih) * 1.06, w = iw * k, h = ih * k;
    const ox = (W - w) / 2 + Math.sin(T * .05) * W * .012, oy = (H - h) / 2 + Math.cos(T * .07) * H * .004;
    for (const f of fs) {
      const wc = f.work.getContext('2d'), off = (T * f.sp * f.h) % f.h;
      wc.globalCompositeOperation = 'copy'; wc.drawImage(f.st, 0, off - f.h);
      wc.globalCompositeOperation = 'destination-in'; wc.drawImage(f.m, 0, 0);
      c.globalAlpha = alpha * .9; c.globalCompositeOperation = 'lighter';
      c.drawImage(f.work, ox + f.x0 * w, oy + f.y0 * h, (f.x1 - f.x0) * w, (f.y1 - f.y0) * h);
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    }
    // the night's painted lanterns glow and flicker
    if (name !== 'bg-mid') {
      const gl = R.img('fx-flash');
      if (gl) for (const [lx, ly, ph] of [[.044, .30, 0], [.065, .545, 1.7], [.92, .29, 3.1], [.944, .54, 4.4]]) {
        c.globalCompositeOperation = 'lighter'; c.globalAlpha = alpha * (.35 + .15 * Math.sin(T * 7 + ph) + .08 * Math.sin(T * 17 + ph * 2));
        const s = h * .09; c.drawImage(gl, ox + lx * w - s / 2, oy + ly * h - s / 2, s, s);
      }
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    }
  }
  function bg() {
    const n = scene.night, drift = Math.sin(T * .05) * W * .012;
    const cover = (name, par, alpha = 1) => {
      const im = typeof name === 'string' ? R.img(name) : name; if (!im) return;
      const iw = im.videoWidth || im.width, ih = im.videoHeight || im.height;
      const k = Math.max(W / iw, H / ih) * 1.06, w = iw * k, h = ih * k;
      c.globalAlpha = alpha; c.drawImage(im, (W - w) / 2 + drift * par, (H - h) / 2 + Math.cos(T * .07) * H * .004 * par, w, h); c.globalAlpha = 1;
    };
    cover('bg-far', .4, 1); if (n > 0) cover('bg-far-night', .4, n);
    cover('bg-mid', 1, 1);
    if (n > 0) cover('bg-mid-night', 1, n);
    c.globalAlpha = .05; c.fillStyle = '#0f1a0c'; c.fillRect(0, 0, W, H); c.globalAlpha = 1;   // the canyon steps back
    if (scene.dark > 0) { c.globalAlpha = scene.dark; c.fillStyle = '#120a12'; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
    if (scene.tint && scene.title) { c.globalAlpha = scene.tintA * (.8 + .2 * Math.sin(T * 6)); c.globalCompositeOperation = 'lighter'; c.fillStyle = scene.tint; c.fillRect(0, 0, W, H); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1; }
  }
  function fg() {
    const im = R.img('fg'); if (!im) return;
    const k = Math.max(W / im.width, H / im.height) * 1.04, w = im.width * k, h = im.height * k;
    c.save(); c.translate(W / 2, H / 2); c.rotate(Math.sin(T * .6) * .004); c.drawImage(im, -w / 2 + Math.sin(T * .4) * 4, -h / 2 + Math.sin(T * .5) * 3, w, h); c.restore();
  }
  function nine(im, x, y, w, h, cut, d) {
    const W0 = im.width, H0 = im.height, sx = [0, cut, W0 - cut, W0], sy = [0, cut, H0 - cut, H0];
    const dx = [x, x + d, x + w - d, x + w], dy = [y, y + d, y + h - d, y + h];
    for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) c.drawImage(im, sx[i], sy[j], sx[i + 1] - sx[i], sy[j + 1] - sy[j], dx[i], dy[j], dx[i + 1] - dx[i], dy[j + 1] - dy[j]);
  }
  function drawGrid() {
    const g = L.grid, im = R.img('grid');
    R.draw(c, 'grid-halo', g.x + g.s / 2, g.y + g.s / 2 + g.s * .02, g.s * 1.33);   // a soft dark halo, so the board sits in the night
    if (im) c.drawImage(im, g.x, g.y, g.s, g.s);
    const cs = g.cs;
    // multipliers left by the faces sit under the stones
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (mult[x][y]) {
      const [px, py] = cellXY(x, y), p = multPop[x][y];
      R.draw(c, 'fx-flash', px, py, cs * 1.6 * p, { alpha: .45 + .2 * Math.sin(T * 5 + x + y), add: true });
      R.draw(c, 'mplate', px, py, cs * 1.12 * p, { alpha: 1 });
    }
    // the stones and gems
    c.save(); c.beginPath(); c.rect(g.ix, g.iy - cs * .02, cs * N, cs * N + cs * .04); c.clip();
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
      const t = cells[x][y];
      if (t.old) { const oy = t.y + N; if (oy >= N) t.old = null; else R.draw(c, TILE[t.old], g.ix + (x + .5) * cs, g.iy + (oy + .5) * cs, cs * .94); }
      if (!t.s || t.a <= .01) continue;
      // at rest the stones breathe and glint a little (nothing on the stage stands still)
      const px = g.ix + (x + .5) * cs, py = g.iy + (t.y + .5) * cs + (busy ? 0 : Math.sin(T * 1.6 + x * .8 + y * 1.1) * cs * .02);
      if (t.hl > .01) R.draw(c, 'fx-flash', px, py, cs * 1.7, { alpha: t.hl * (.55 + .25 * Math.sin(T * 12)), add: true });
      const k = t.k * (t.hl > .01 ? 1 + .06 * Math.sin(T * 14) : 1);
      R.draw(c, TILE[t.s], px, py, cs * .94 * k, { alpha: t.a, rot: t.s === 'G' ? Math.sin(T * 3 + x + y) * .06 : 0 });
    }
    c.restore();
    // the numbers on the multipliers, above the stones
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (mult[x][y]) {
      const [px, py] = cellXY(x, y), p = multPop[x][y];
      R.number(c, 'x' + mult[x][y], px + cs * .2, py - cs * .26, cs * .46 * p, { alpha: 1 });
    }
    // the chompers: 2x2 stone faces, hotter with every meal
    const clipped = f => { c.save(); c.beginPath(); c.rect(g.ix, g.iy, cs * N, cs * N); c.clip(); f(); c.restore(); };
    for (const ch of oldChomps) {                 // the faces of the last board slide out below with their column
      if (ch.gone || ch.fy >= N) continue;
      clipped(() => drawNiche(ch, 'face' + ch.face + '-idle', g.ix + (ch.x + 1) * cs, g.iy + (ch.fy + 1) * cs, cs, 0));
    }
    for (const ch of chomps) {
      if (ch.gone && ch.a <= .01) continue;
      if (ch.fy < ch.y - .001) {                  // still sliding in from above: only inside the board
        clipped(() => drawNiche(ch, 'face' + ch.face + '-idle', g.ix + (ch.x + 1) * cs, g.iy + (ch.fy + 1) * cs, cs, 0));
        continue;
      }
      const cx = g.ix + (ch.x + 1) * cs, cy = g.iy + (ch.fy + 1) * cs, hot = ch.meals / Math.max(1, ch.need);
      const img = hot >= .99 && ch.face === 0 && R.img('face0-lava') ? 'face0-lava' : hot > 0 ? 'face' + ch.face + '-red' : 'face' + ch.face + '-idle';
      if (hot > 0) R.draw(c, 'fx-flash', cx, cy, cs * 2.6 * (1 + hot * .2), { alpha: .2 + hot * .3, add: true, rot: T * .6 });
      drawNiche(ch, img, cx, cy, cs, hot);
    }
  }
  // a stone face set into a carved niche of exactly 2x2 cells: a dark recess, the face inside it, a gold rim that heats with every meal
  function drawNiche(ch, img, cx, cy, cs, hot) {
    const im = R.img(img); if (!im) return;
    const a = ch.a ?? 1, s = cs * 2 - cs * .06, r = cs * .22, shake = hot * cs * .025;
    c.save(); c.globalAlpha = a;
    c.translate(cx + (Math.random() - .5) * shake, cy + (Math.random() - .5) * shake); c.scale(ch.sx || 1, ch.sy || 1);
    const box = () => { c.beginPath(); c.roundRect(-s / 2, -s / 2, s, s, r); };
    // the recess
    box(); c.fillStyle = hot > 0 ? '#2a0f07' : '#150d09'; c.fill();
    // the face, whole, inside the niche
    c.save(); box(); c.clip();
    const fh = s * 1.1, fw = fh * im.width / im.height;
    c.rotate(Math.sin(T * 2 + ch.id) * .015);
    c.drawImage(im, -fw / 2, -fh / 2 + s * .04, fw, fh);
    c.restore();
    // the rim: dark outer edge, gold inner line, hotter with every meal
    box(); c.lineWidth = cs * .1; c.strokeStyle = '#120a06'; c.stroke();
    const gold = hot >= .99 ? '#ff7a2a' : hot > 0 ? '#ffb347' : '#c9973f';
    box(); c.lineWidth = cs * .045; c.strokeStyle = gold; c.stroke();
    // the meals still to go, as chili marks on a small dark plate at the bottom of the niche
    if (!ch.gone) {
      const n = ch.need, pw = cs * (.3 + n * .32), ph = cs * .36, py = s / 2 - ph * .55;
      c.beginPath(); c.roundRect(-pw / 2, py - ph / 2, pw, ph, ph / 2); c.fillStyle = 'rgba(10,6,4,.85)'; c.fill();
      c.lineWidth = cs * .025; c.strokeStyle = gold; c.stroke();
      for (let m = 0; m < n; m++) R.draw(c, 'it-chili', (m - (n - 1) / 2) * cs * .32, py, cs * .28, { alpha: m < ch.meals ? 1 : .3, rot: -.5 });
    }
    c.restore();
  }
  function drawCook() {
    const k = L.cook, im = R.img('hero'); if (!im) return;
    const h = k.h, w = h * im.width / im.height, br = Math.sin(T * 1.9) * .01, sway = Math.sin(T * .8) * .012;
    c.save(); c.translate(k.x, k.y); c.rotate(sway); c.scale(1 - br * .4, 1 + br);
    c.drawImage(im, -w / 2, -h, w, h);
    c.restore();
    // the lantern's light breathes and flickers
    const lx = k.x + w * .2, ly = k.y - h * .4, f = .55 + .2 * Math.sin(T * 7) + .1 * Math.sin(T * 17);
    R.draw(c, 'fx-flash', lx, ly, h * .32, { alpha: f * .55, add: true });
  }
  // the totem on the left: five sockets that fill with the golden peppers on the board
  function drawMeter() {
    const m = L.meter, im = R.img('meter'); if (!im || !m) return;
    const h = m.h, w = h * im.width / im.height;
    R.draw(c, 'meter', m.x, m.y, w);
    const sockY = i => m.y - h / 2 + h * (.226 + i * .099);
    const golds = []; if (model) for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (model[x][y] === 'G') golds.push([x, y]);
    const n = Math.min(5, golds.length), mt = scene.meterFx || (scene.meterFx = { in: 0, fly: 0, pop: [1, 1, 1, 1, 1] });
    if (n < mt.in + mt.fly) { mt.in = Math.min(mt.in, n); mt.fly = 0; }
    else if (n > mt.in + mt.fly) {                     // a new golden pepper: it flies from its cell into the next socket
      const k = mt.in + mt.fly, [gx2, gy2] = cellXY(...golds[k]); mt.fly++;
      fly('t-G', gx2, gy2, m.x, sockY(k), L.grid.cs * .9, 520, .15, TAU).then(() => {
        if (mt.fly > 0) { mt.fly--; mt.in++; }
        mt.pop[k] = 1.9; tw(mt.pop, { [k]: 1 }, 480, R.E.elastic); S.emit('tick');
        R.spawn({ img: 'fx-flash', x: m.x, y: sockY(k), w: w * .9, s: .4, vs: 1.6, life: .6, fade: .4, add: true, layer: 2 });
        for (let q = 0; q < 8; q++) R.spawn({ img: 'fx-spark', x: m.x, y: sockY(k), vx: (Math.random() - .5) * 400, vy: -100 - Math.random() * 300, g: 500, w: w * .12, life: .7, add: true, layer: 2 });
      });
    }
    for (let i = 0; i < 5; i++) {
      const sy = sockY(i), on = i < mt.in, p = mt.pop[i];
      if (on) { R.draw(c, 'fx-flash', m.x, sy, w * .75 * p, { alpha: .55 + .2 * Math.sin(T * 6 + i), add: true }); R.draw(c, 't-G', m.x, sy, w * .3 * p, { rot: Math.sin(T * 3 + i) * .08 }); }
      else R.draw(c, 'fx-flash', m.x, sy, w * .4, { alpha: .08 + .06 * Math.sin(T * 2 + i * 1.3), add: true });   // the empty socket glows faintly, waiting
    }
    // what the sockets open: 3 lights LANTERN NIGHT, 4 spin the TOTEM WHEEL (Lidor, 28.11: "yes, from 4")
    const fz = Math.max(9, w * .062);
    c.save(); c.font = '800 ' + fz + 'px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    for (const [i, t] of [[2, scene.night ? '+5' : 'NIGHT'], [3, scene.night ? '' : 'WHEEL']]) { if (!t || mt.in > i) continue;
      const y = sockY(i);
      c.lineWidth = fz * .32; c.strokeStyle = 'rgba(10,6,4,.95)'; c.strokeText(t, m.x, y);
      c.fillStyle = '#ffd76a'; c.fillText(t, m.x, y);
    }
    c.restore();
  }
  function drawWin() {
    if (scene.winA <= .01 || !scene.win) return;
    const k = L.winHud;
    R.number(c, money(scene.win), k.x, k.y, k.h * scene.winPop, { alpha: scene.winA });
  }
  function drawNight() {
    if (!scene.spins) return;
    const k = L.nightHud;
    R.draw(c, 'lantern', k.x - k.h * 1.6, k.y, k.h * .9, { rot: Math.sin(T * 2) * .08 });
    R.number(c, scene.spinNow + '/' + scene.spins, k.x + k.h * .4, k.y, k.h);
  }
  function drawBird() {
    const b = scene.bird; if (!b) return;
    const beat = Math.sin(T * 15);
    const bw = L.grid.cs * 2.8; R.draw(c, 'fx-flash', b.x, b.y, bw * 1.4, { alpha: .35, add: true });
    // the wings flap: wings up and wings down, with a short blend at each turn, the body bobbing with each stroke
    const up = Math.max(0, Math.min(1, (beat + .08) / .16)), o = { flip: b.flip, rot: (b.rot || 0) + beat * .04 }, by = b.y - beat * bw * .04;
    if (up > .01) R.draw(c, 'bird1', b.x, by, bw, { ...o, alpha: up });
    if (up < .99) R.draw(c, R.img('bird2') ? 'bird2' : 'bird1', b.x, by + (R.img('bird2') ? bw * .1 : 0), bw, { ...o, alpha: 1 - up });   // that frame is drawn a little higher: line the bodies up
  }
  // the totem wheel, over a dark canyon: the pedestal, the wheel (turning), the prizes on it, the cook's spoon on top
  function drawWheel() {
    const wh = scene.wheel; if (!wh || wh.a <= .01) return;
    c.globalAlpha = wh.a * .7; c.fillStyle = '#0c0712'; c.fillRect(0, 0, W, H); c.globalAlpha = 1;
    const r = Math.min(W * .4, H * .38), cx = L.land ? L.grid.x + L.grid.s / 2 : W / 2, cy = H * .47 + (1 - wh.a) * H * .4;
    R.draw(c, 'pedestal', cx, cy + r * 1.02, r * 2.3, { alpha: wh.a });
    c.save(); c.translate(cx, cy); c.rotate(wh.rot);
    R.draw(c, 'wheel', 0, 0, r * 2, { alpha: wh.a });
    // a carved gold line splits every painted segment in two
    c.save(); c.globalAlpha = wh.a; c.strokeStyle = '#e8b85a'; c.lineWidth = r * .012;
    for (let j = 0; j < 10; j++) { const a = j * TAU / 10 - TAU / 4; c.beginPath(); c.moveTo(Math.cos(a) * r * .5, Math.sin(a) * r * .5); c.lineTo(Math.cos(a) * r * .83, Math.sin(a) * r * .83); c.stroke(); }
    c.restore();
    // the prizes read along the spokes, from the rim inwards; the x5000 burns
    for (let k = 0; k < WHEEL.length; k++) {
      const a = wAng(k), seg = WHEEL[k], mega = seg.k === 'win' && seg.x >= 5000;
      c.save(); c.rotate(a); c.translate(0, -r * .665);
      if (mega) { R.draw(c, 'fx-flash', 0, 0, r * .5, { alpha: wh.a * (.7 + .3 * Math.sin(T * 8)), add: true, rot: T }); R.draw(c, 'fx-flames', 0, r * .02, r * .26, { alpha: wh.a * .9, add: true }); }
      c.rotate(-Math.PI / 2);
      if (seg.k === 'win') R.number(c, 'x' + seg.x, 0, 0, r * (mega ? .1 : .075), { alpha: wh.a });
      else { R.draw(c, 'lantern', -r * .08, 0, r * .085, { alpha: wh.a, rot: Math.PI / 2 }); R.number(c, '+' + seg.seed, r * .05, 0, r * .07, { alpha: wh.a }); }
      c.restore();
    }
    c.restore();
    if (wh.hit) R.draw(c, 'fx-flash', cx, cy - r * .62, r * .9, { alpha: wh.hit * (.6 + .3 * Math.sin(T * 10)), add: true });
    R.draw(c, 'spoon', cx, cy - r * 1.06, r * .3, { ay: .85, alpha: wh.a, rot: wh.tick || 0 });
    if (wh.card) drawPrizeCard(wh.card, cx, cy, r);
  }

  // the wheel's prize, big, on a dark carved panel: a win (xN) or LANTERN NIGHT with its multipliers
  function drawPrizeCard(card, cx, cy, r) {
    const s = card.s, w = r * 2.1 * s, im = R.img('ledge');
    if (im) c.drawImage(im, cx - w / 2, cy - r * .32 * s, w, r * .64 * s);
    R.draw(c, 'fx-flash', cx, cy, r * 2.2 * s, { alpha: .35, add: true, rot: T * .4 });
    if (card.k === 'win') R.number(c, 'x' + card.x, cx, cy, r * .34 * s);
    else { R.draw(c, 'lantern', cx - r * .55 * s, cy, r * .3 * s); R.number(c, '+' + card.seed + ' x2', cx + r * .1 * s, cy, r * .26 * s); }
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    const dt = Math.min(60, now - (last || now)); last = now; T += dt / 1000;
    R.stepTweens(dt); R.stepParts(dt);
    if (cook && cook.rig) cook.rig.update(dt / 1000);
    if (!api.reduced && Math.random() < dt / 1000 * (scene.night ? 3 : 1.2)) ambientMote();
    if (!api.reduced && !busy && Math.random() < dt / 1000 * 2.5 && L) { const x = Math.floor(Math.random() * N), y = Math.floor(Math.random() * N), [px, py] = cellXY(x, y); if (cells[x][y].s && cells[x][y].s !== 'peb') R.spawn({ img: 'fx-spark', x: px + (Math.random() - .5) * L.grid.cs * .4, y: py - L.grid.cs * .2, w: L.grid.cs * .45, s: .2, vs: 2.2, life: .55, fade: .35, add: true, rot: Math.random() * 6, layer: 2 }); }
    c.setTransform(DPR, 0, 0, DPR, 0, 0);
    c.clearRect(0, 0, W, H);
    const sh = api.reduced ? 0 : scene.shake;
    c.save();
    if (sh > .3) c.translate((Math.random() - .5) * sh, (Math.random() - .5) * sh);
    if (scene.kick > .01) { const z = 1 + scene.kick * .04; c.translate(W / 2, H / 2); c.scale(z, z); c.translate(-W / 2, -H / 2); }
    bg();
    R.drawParts(c, 0);
    drawGrid();
    R.drawParts(c, 1);
    drawMeter(); drawCook(); drawWin(); drawNight();
    drawFlyers(); drawBird();
    R.drawParts(c, 2);
    drawLabels();
    drawWheel();
    c.restore();
    drawLogo();   // Lidor, 28.11: nothing disappears during a round or autoplay
    if (scene.flash > .01 && !api.reduced) { c.globalAlpha = scene.flash; c.fillStyle = '#fff6dc'; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
    drawTitle();
    scene.shake *= Math.pow(.86, dt / 16); scene.flash *= Math.pow(.84, dt / 16);
  }
  function money(units) { return roundCtx ? roundCtx.winMoney(units) : api.winMoney(units); }
  function drawCart() {
    const k = L.cart, lvl = scene.cartLevel, name = 'cart' + lvl;
    const h = R.draw(c, name, k.x, k.y, k.w, { ay: 1, sx: scene.cartPop, sy: 2 - scene.cartPop });
    scene.cartH = h;
  }
  function drawHaul() {
    const k = L.cart, h = scene.cartH;
    if (scene.haulShow) {
      const nh = Math.max(L.tiny ? 13 : 20, Math.min(k.w * .3, L.land ? H * .085 : H * .05)) * scene.haulPop;
      const txt = money(scene.haul);
      const y = k.y - (h || k.w * .6) - nh * .55;
      const pw = R.textWidth(txt, nh) + nh * 1.2;
      R.draw(c, 'plank', k.x, y, Math.max(pw, k.w * .9), { sy: nh * 1.6 / (Math.max(pw, k.w * .9) * (R.img('plank') ? R.img('plank').height / R.img('plank').width : .4)) });
      R.number(c, txt, k.x, y, nh);
    }
  }
  function drawFlyers() {
    for (const f of scene.flyers) R.draw(c, f.img, f.x, f.y, f.w * f.s, { rot: f.rot, alpha: f.a });
  }
  function drawLabels() {
    for (const l of scene.labels) {
      if (l.a <= .01) continue;
      if (l.img) R.draw(c, l.img, l.x, l.y, l.w * l.s, { alpha: l.a });
      else R.number(c, l.text, l.x, l.y, l.h * l.s, { alpha: l.a });
    }
  }
  function drawReaper() {
    const r = scene.reaper; if (!r) return;
    R.draw(c, 'reaper', r.x, r.y, L.fw * .9 * r.s, { rot: r.rot, alpha: r.a });
  }
  function drawTitle() {
    const t = scene.title; if (!t || t.a <= .01) return;
    if (t.live) {                                                     // the tier title never stands still: it beats and sways, and glows
      const k = t.tier || 0, beat = 1 + Math.sin(T * (5 + k)) * (.025 + k * .008), sway = Math.sin(T * 2.3) * (.02 + k * .006);
      const glow = .25 + .2 * Math.sin(T * 7);
      R.draw(c, t.img, L.title.x, L.title.y + t.oy, L.title.w * t.s * beat * 1.04, { alpha: t.a * glow, rot: (t.rot || 0) + sway, add: true });
      R.draw(c, t.img, L.title.x, L.title.y + t.oy, L.title.w * t.s * beat, { alpha: t.a, rot: (t.rot || 0) + sway });
    } else R.draw(c, t.img, L.title.x, L.title.y + t.oy, L.title.w * t.s * (t.wk || 1), { alpha: t.a, rot: t.rot || 0 });
    if (t.amount != null) {
      const nh = (L.land ? H * .17 : H * .1) * (t.ns || 1);
      if (t.amount > 0) R.number(c, t.exact === false ? api.money(t.amount) : money(t.amount), L.title.x, L.title.y + t.oy + L.title.w * .2 * Math.min(t.s, 1.1) + nh * .4, nh, { alpha: t.a });
    }
  }
  function drawLogo() {
    if (L.tiny) return;
    R.draw(c, 'logo', L.logo.x, L.logo.y, L.logo.w, { ay: .3, rot: Math.sin(T * .8) * .01 });
  }
  function ambientMote() {
    if (scene.night) R.spawn({ img: 'fx-spark', x: Math.random() * W, y: H * (.3 + Math.random() * .6), vx: (Math.random() - .5) * 20, vy: -10 - Math.random() * 20, w: 14 + Math.random() * 10, life: 2.5, fade: 1, alpha: .8, add: true, layer: 0 });
    else R.spawn({ img: 'fx-spark', x: Math.random() * W, y: H * (.2 + Math.random() * .6), vx: (Math.random() - .5) * 10, vy: -6, w: 10, life: 2, fade: 1, alpha: .5, add: true, layer: 0 });
  }

  /* ---------- Small effects ---------- */
  // a skip: the spin button or Space bumps it (standard 1.5: a tap on the screen does nothing); waitSkip resolves early (true) when it moves
  let skipReq = 0;
  // the shell does not hand the jurisdiction flags to the game; it rewrites its hint when the space bar is switched off
  const spaceOK = () => { const h = document.getElementById('lzHint'); return !h || /Space/.test(h.textContent); };
  function waitSkip(ms) {
    const s0 = skipReq, sp = roundCtx ? roundCtx.speed() : 1, t0 = performance.now();
    return new Promise(res => { const id = setInterval(() => { if (skipReq !== s0) { clearInterval(id); res(true); } else if (performance.now() - t0 >= ms * sp) { clearInterval(id); res(false); } }, 16); });
  }
  const wait = ms => roundCtx ? roundCtx.sleep(hurry ? ms * .25 : ms) : new Promise(r => setTimeout(r, ms));
  const tw = (o, to, ms, e, d) => R.tween(o, to, hurry ? ms * .3 : ms, e, d);
  function boomAt(x, y, big = 1) {
    const s = L.fw * big;
    if (R.img('seq-boom')) {
      R.spawn({ img: 'seq-dust', seq: true, x, y: y + s * .08, w: s * 1.7, life: .5, fade: .12, rot: (Math.random() - .5) * .3, layer: 2 });
      R.spawn({ img: 'seq-boom', seq: true, x, y, w: s * 1.45 * (big > 1 ? 1.15 : 1), life: .5, fade: .08, rot: (Math.random() - .5) * .4, layer: 2 });
    } else R.spawn({ img: Math.random() < .5 ? 'fx-boom1' : 'fx-boom2', x, y, w: s * 1.25, s: .4, vs: 2.2, life: .42, fade: .2, rot: (Math.random() - .5) * .6, layer: 2 });
    R.spawn({ img: 'fx-flash', x, y, w: s * 1.1, s: .3, vs: 3, life: .22, fade: .15, add: true, layer: 2 });
    for (let k = 0; k < 2; k++) R.spawn({ img: 'fx-smoke', x: x + (Math.random() - .5) * s * .4, y: y + (Math.random() - .5) * s * .3, vx: (Math.random() - .5) * 60, vy: -40 - Math.random() * 40, w: s * .7, s: .6, vs: .8, life: .9, fade: .6, alpha: .85, layer: 2 });
    for (let k = 0; k < 6; k++) { const a = Math.random() * TAU, v = 250 + Math.random() * 350; R.spawn({ img: 'fx-rocks', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 200, g: 1400, w: s * (.12 + Math.random() * .12), rot: Math.random() * TAU, vr: (Math.random() - .5) * 12, life: .9, fade: .3, layer: 2 }); }
    scene.shake = Math.max(scene.shake, 10 * big); scene.flash = Math.max(scene.flash, .12 * big);
  }
  function steam(x, y) {
    for (const dir of [-1, 1]) R.spawn({ img: 'fx-steam', x: x + dir * L.fw * .45, y: y - L.fw * .05, vx: dir * 120, vy: -40, w: L.fw * .45, s: .5, vs: 1.4, life: .45, fade: .3, alpha: .9, rot: dir > 0 ? 0 : Math.PI, layer: 2 });
  }
  function label(text, x, y, h, o = {}) {
    const l = { text, img: o.img, w: o.w || 0, x, y, h, s: .4, a: 1 };
    scene.labels.push(l);
    tw(l, { s: 1 }, 220, R.E.back).then(() => tw(l, { y: y - h * 1.2, a: 0 }, o.hold || 700, R.E.in, 250)).then(() => { scene.labels = scene.labels.filter(q => q !== l); });
  }
  // an object flies on an arc from (x0, y0) to (x1, y1)
  async function fly(img, x0, y0, x1, y1, w, ms, arc = .25, spin = 0) {
    const f = { img, x: x0, y: y0, w, s: 1, rot: 0, a: 1 };
    scene.flyers.push(f);
    const p = { t: 0 }, hgt = Math.abs(x1 - x0) * arc + H * .08;
    const run = () => { const t = p.t; f.x = x0 + (x1 - x0) * t; f.y = y0 + (y1 - y0) * t - Math.sin(Math.PI * t) * hgt; f.rot = spin * t; };
    const loop = () => { run(); if (p.t < 1 && scene.flyers.includes(f)) requestAnimationFrame(loop); };
    loop();
    await tw(p, { t: 1 }, ms, R.E.inOut);
    run();
    scene.flyers = scene.flyers.filter(q => q !== f);
    return f;
  }

  /* ---------- The cart and the win so far ---------- */
  function setHaul(units, bump = true) {
    scene.haul = units; scene.haulShow = units > 0;
    const x = roundCtx ? units / Math.max(1, roundCtx.amount) : 0;
    const lvl = x >= 10 ? 2 : x >= 1 ? 1 : 0;
    if (lvl !== scene.cartLevel) { scene.cartLevel = lvl; pop(scene, 1.12, 'cartPop', 'cartPopY'); }
    if (bump) { scene.haulPop = 1.25; tw(scene, { haulPop: 1 }, 300, R.E.back); }
  }
  const cartTop = () => [L.cart.x, L.cart.y - L.cart.w * .5];
  function setWin(units) { scene.win = units; scene.winA = units > 0 ? 1 : 0; scene.winPop = 1.3; tw(scene, { winPop: 1 }, 320, R.E.back); }

  /* ---------- The board: its model follows the book exactly (the same tumble rule as the math) ---------- */
  let model = null;                                       // model[x][y]: symbol | 'C' (a chomper cell) | null
  let oldChomps = [];
  async function boardIn(e, night) {
    model = e.g.map(col => col.map(v => (v && typeof v === 'object' ? 'C' : v)));
    // the new board slides in from above, column by column, and pushes the old one out below: the floor is never empty
    const dur = hurry ? 200 : 460, step = hurry ? 10 : 34;
    oldChomps = chomps.filter(ch => !ch.gone).map(ch => ({ ...ch, fy: ch.y, sx: 1, sy: 1, a: 1 }));
    for (const ch of oldChomps) tw(ch, { fy: ch.y + N }, dur, R.E.inOut, step * ch.x);
    chomps = e.chomps.map(ch => ({ ...ch, fy: ch.y - N, meals: 0, need: night ? 1 : 2, a: 1, sx: 1, sy: 1, gone: false }));
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
      const t = cells[x][y], v = model[x][y];
      R.killTweens(t);
      t.old = t.s && t.a > .01 ? t.s : null;
      t.s = v === 'C' ? null : v; t.a = 1; t.k = 1; t.hl = 0; t.y = y - N;
      tw(t, { y }, dur, R.E.inOut, step * x);
    }
    for (const ch of chomps) tw(ch, { fy: ch.y }, dur, R.E.inOut, step * ch.x);
    S.emit('throw');
    await wait(dur + step * (N - 1) + (hurry ? 20 : 60));
    oldChomps = [];
    if (chomps.length) { S.emit('chomp'); chomps.forEach(ch => pop(ch, 1.12)); }
    const golds = model.flat().filter(v => v === 'G').length;
    if (golds) { S.emit(golds >= 3 ? 'goldPep3' : golds === 2 ? 'goldPep2' : 'goldPep'); if (golds >= 2 && !api.reduced) S.tension(golds >= 2); }
  }
  async function birdIn(e) {
    await ensure(['bird1', 'bird2']);
    const g = L.grid, b = { x: W + g.cs * 3, y: g.y + g.s * .2, flip: false, rot: -.15 };
    scene.bird = b; S.emit('thief');
    await tw(b, { x: g.ix + g.cs * 3.5, y: g.iy + g.cs * 3 }, hurry ? 160 : 420, R.E.out);
    for (const [x, y] of e.cells) { model[x][y] = 'W'; const t = cells[x][y]; t.s = 'W'; pop(t, 1.25, 'k', 'kk'); const [px, py] = cellXY(x, y); R.spawn({ img: 'fx-flames', x: px, y: py, w: g.cs, s: .5, vs: 1.2, life: .5, fade: .3, add: true, layer: 2 }); }
    await tw(b, { x: -g.cs * 3, y: g.y - g.cs * 3, rot: .2 }, hurry ? 160 : 520, R.E.in);
    scene.bird = null;
  }
  async function winsIn(e) {
    const g = L.grid;
    S.tension(false);
    for (const w of e.wins) for (const [x, y] of w.cells) cells[x][y].hl = 1;
    lastWinCells = e.wins.flatMap(w => w.cells.map(([x, y]) => [x, y, w.sym]));
    S.emit(e.wins.some(w => w.sym === 'crown' || w.sym === 'idol') ? 'crown' : e.wins.some(w => w.sym === 'tooth' || w.sym === 'rub') ? 'gold' : 'gem');
    // every cluster shows what it won, at its middle
    for (const w of e.wins) {
      const mx = w.cells.reduce((s, [x]) => s + x, 0) / w.cells.length, my = w.cells.reduce((s, [, y]) => s + y, 0) / w.cells.length;
      const [px, py] = cellXY(mx, my), units = roundCtx ? roundCtx.units(w.pay) : 0;
      label((w.m > 1 ? 'x' + w.m + ' ' : '') + money(units), px, py, g.cs * (w.m > 1 ? .5 : .42), { hold: 650 });
    }
    setWin(roundCtx ? roundCtx.units((scene.base || 0) + e.win) : 0);
    await wait(hurry ? 200 : quick ? 140 : 460);
    // pop: the winning stones burst
    for (const w of e.wins) for (const [x, y] of w.cells) {
      const t = cells[x][y], [px, py] = cellXY(x, y);
      tw(t, { k: 1.25, a: 0 }, hurry ? 80 : quick ? 120 : 180, R.E.in).then(() => { if (t.a <= .01) { t.s = null; t.hl = 0; t.k = 1; } });
      if (!api.reduced && Math.random() < .5) R.spawn({ img: 'seq-dust', seq: true, x: px, y: py, w: g.cs * 1.4, life: .5, fade: .12, layer: 2 });
      R.spawn({ img: 'fx-spark', x: px, y: py, vx: (Math.random() - .5) * 300, vy: -200 - Math.random() * 200, g: 700, w: g.cs * .4, life: .6, add: true, layer: 2 });
      model[x][y] = null;
    }
    scene.shake = Math.max(scene.shake, 3 + e.wins.length);
    await wait(hurry ? 90 : quick ? 80 : 200);
  }
  let lastWinCells = [];
  function chew(ch) {                            // two gulps: squash down, stretch up
    pop(ch, .86); setTimeout(() => pop(ch, .9), 240);
  }
  async function feedIn(e) {
    for (const f of e.feeds) {
      const ch = chomps.find(q => q.id === f.id); if (!ch) continue;
      ch.meals = f.meals; S.emit('chomp');
      const cx = L.grid.ix + (ch.x + 1) * L.grid.cs, cy = L.grid.iy + (ch.y + 1) * L.grid.cs;
      // up to three of the eaten stones, the ones nearest the face, fly into its mouth
      const near = lastWinCells.slice().sort((a, b) => (Math.abs(a[0] - ch.x - .5) + Math.abs(a[1] - ch.y - .5)) - (Math.abs(b[0] - ch.x - .5) + Math.abs(b[1] - ch.y - .5))).slice(0, 3);
      near.forEach(([x, y, s], k) => { const [px, py] = cellXY(x, y); setTimeout(() => fly(TILE[s], px, py, cx, cy + L.grid.cs * .35, L.grid.cs * .7, 260, .2, 3).then(() => {}), k * 50); });
      setTimeout(() => chew(ch), 200);
      for (const s of [-1, 1]) R.spawn({ img: 'fx-steam', x: cx + s * L.grid.cs * .8, y: cy - L.grid.cs * .3, vx: s * 60, vy: -80, w: L.grid.cs * .9, s: .5, vs: 1, life: .8, fade: .5, alpha: .8, layer: 2 });
    }
    await wait(hurry ? 120 : 520);
  }
  async function eruptIn(e) {
    const ch = chomps.find(q => q.id === e.id); if (!ch) return;
    const g = L.grid, cx = g.ix + (ch.x + 1) * g.cs, cy = g.iy + (ch.y + 1) * g.cs;
    S.emit('boom'); boomAt(cx, cy, 1.6); scene.flash = Math.max(scene.flash, .3); scene.shake = Math.max(scene.shake, 12);
    ch.gone = true; ch.sx = 1.3; ch.sy = .8; tw(ch, { a: 0, sx: 1.6, sy: 1.6 }, 280, R.E.in);
    for (let q = 0; q < 14; q++) R.spawn({ img: q % 2 ? 'fx-flames' : 'fx-rocks', x: cx, y: cy, vx: (Math.random() - .5) * 600, vy: -300 - Math.random() * 400, g: 1200, w: g.cs * (.4 + Math.random() * .4), rot: Math.random() * 6, vr: 6, life: .9, fade: .4, add: q % 2 === 0, layer: 2 });
    for (let k = 0; k < e.cells.length; k++) { const [x, y] = e.cells[k]; mult[x][y] = e.m[k]; multPop[x][y] = 1.8; const p = multPop[x]; tw(p, { [y]: 1 }, 420, R.E.elastic); model[x][y] = null; }
    S.emit('tooth', 3);
    if (cook && cook.rig && !cook.busy()) cook.act('cook-cheer', 1);
    await wait(hurry ? 180 : 500);
  }
  async function tumbleIn(e) {
    for (let x = 0; x < N; x++) {
      const slots = []; for (let y = 0; y < N; y++) if (model[x][y] !== 'C') slots.push(y);
      const keep = slots.filter(y => model[x][y] !== null).map(y => ({ y, s: model[x][y] }));
      const add = e.fill[x], col = add.map(s => ({ y: null, s })).concat(keep);
      const newS = []; slots.forEach((y, i) => { newS.push([y, col[i]]); });
      for (const [y, it] of newS) {
        model[x][y] = it.s;
        const t = cells[x][y]; R.killTweens(t); t.s = it.s; t.a = 1; t.k = 1; t.hl = 0;
        const from = it.y === null ? -1 - (add.length - add.indexOf(it.s) ) : it.y;
        t.y = it.y === null ? y - add.length - 1 : it.y;
        if (t.y !== y) tw(t, { y }, (hurry ? 120 : quick ? 170 : 300) + Math.abs(y - t.y) * (hurry ? 10 : quick ? 14 : 24), R.E.out);
        void from;
      }
    }
    S.emit('peb');
    await wait(hurry ? 200 : quick ? 190 : 380);
  }
  async function triggerMoment(n) {
    const g = L.grid;
    S.emit('goldPep3'); scene.flash = .4; scene.shake = 8;
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (model[x][y] === 'G') { const t = cells[x][y]; t.hl = 1; pop(t, 1.35, 'k', 'kk'); const [px, py] = cellXY(x, y); for (let q = 0; q < 6; q++) R.spawn({ img: 'fx-spark', x: px, y: py, vx: (Math.random() - .5) * 300, vy: -200 - Math.random() * 200, g: 400, w: g.cs * .4, life: .9, add: true, layer: 2 }); }
    const m = L.meter; if (m) R.spawn({ img: 'fx-flash', x: m.x, y: m.y, w: m.h * .7, s: .4, vs: 1.4, life: .8, fade: .5, add: true, layer: 2 });
    await waitSkip(1500);
    void n;
  }
  async function spinEnd(e) {
    S.tension(false); scene.baseBook = e.win;
    if (e.golds >= 3) await triggerMoment(e.golds);
    if (e.win > 0 && roundCtx) setHaul(roundCtx.units(e.win));
  }

  /* ---------- LANTERN NIGHT: free spins, the multipliers stay ---------- */
  async function nightStart(e) {
    await settle(); await ensure(['bg-mid-night', 'bg-far-night', 'w-night', 'lantern']);
    S.emit('nightIn'); scene.flash = .8; S.playMusic('night', 0); S.ambience('amb_night');
    if (cook && cook.rig && !cook.busy()) cook.act('cook-cheer', 1);
    // the golden peppers on the board glow and fly up
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (model && model[x][y] === 'G') { const [px, py] = cellXY(x, y); R.spawn({ img: 'it-gold', x: px, y: py, vy: -500, g: -200, w: L.grid.cs, life: .9, fade: .4, layer: 2 }); }
    await tw(scene, { night: 1 }, 1000, R.E.inOut);
    for (let q = 0; q < 12; q++) R.spawn({ img: 'lantern', x: W * (.08 + q / 12 * .84), y: -L.fw, vy: 150 + Math.random() * 90, w: L.fw * .6, rot: (Math.random() - .5) * .3, vr: (Math.random() - .5) * .6, life: 2.6, fade: 1.4, alpha: .9, layer: 0 });
    for (let x = 0; x < N; x++) mult[x].fill(0);
    for (const [x, y, m] of e.seeded) { mult[x][y] = m; multPop[x][y] = 1.8; const p = multPop[x]; tw(p, { [y]: 1 }, 420, R.E.elastic); }
    // the night counts on from the base spin's win, in the book's units (never the money shown on the cart)
    scene.spins = e.spins; scene.spinNow = 0; scene.total = scene.baseBook || 0; scene.totalShow = false; scene.base = 0;
    await nightCard(e);
  }
  async function wheelIn(e) {
    await ensure(['wheel', 'spoon', 'pedestal']);
    const wh = { a: 0, rot: 0, tick: 0, hit: 0 }; scene.wheel = wh;
    S.emit('nightIn'); S.tension(true);
    await tw(wh, { a: 1 }, 600, R.E.out);
    wh.hit = .6; await waitSkip(500); wh.hit = 0;
    // the cook spins it: several turns, slowing down onto the segment of the book
    const target = -wAng(e.seg) + (Math.random() - .5) * WSTEP * .6 - TAU * (5 + Math.floor(Math.random() * 2));
    const spin = { t: 0 }, r0 = wh.rot, dur = hurry ? 1600 : 4800;
    let lastTick = 0;
    const run = () => { const t = spin.t, ease = 1 - Math.pow(1 - t, 3.2); wh.rot = r0 + (target - r0) * ease;
      const seg = Math.floor(-wh.rot / WSTEP); if (seg !== lastTick) { lastTick = seg; wh.tick = .35; tw(wh, { tick: 0 }, 140, R.E.out); S.emit('tick'); }
      if (spin.t < 1) requestAnimationFrame(run); };
    run();
    await tw(spin, { t: 1 }, dur, R.E.lin);
    S.tension(false); wh.hit = 1; scene.flash = .5; S.emit('tier2');
    // the prize card
    const seg = WHEEL[e.seg]; wh.card = { ...seg, s: .3 }; tw(wh.card, { s: 1 }, 420, R.E.back); scene.shake = seg.x >= 5000 ? 28 : 10;
    if (seg.x >= 5000) { scene.flash = 1; S.emit('tier3'); for (let q = 0; q < 40; q++) { const a2 = Math.random() * TAU, v = 300 + Math.random() * 700; R.spawn({ img: 'fx-spark', x: W / 2, y: H * .47, vx: Math.cos(a2) * v, vy: Math.sin(a2) * v, g: 300, w: H * .03, life: 1.4, add: true, layer: 2 }); } }
    await waitSkip(1900);
    await tw(wh, { a: 0 }, 400, R.E.in); scene.wheel = null;
  }
  async function wheelWin(e) {
    const units = roundCtx ? roundCtx.units(e.w) : 0;
    setHaul(roundCtx ? roundCtx.units(e.total) : 0); setWin(roundCtx ? roundCtx.units(e.total) : 0);
    void units;
  }

  /* ---------- The round ---------- */
  let chain = Promise.resolve();
  const settle = async () => { await chain; };
  function resetStage(soft) {
    R.clearParts(); scene.flyers = []; scene.labels = []; scene.title = null; scene.bird = null; scene.wheel = null;
    scene.haul = 0; scene.haulShow = false; scene.cartLevel = 0; scene.dark = 0; scene.flash = 0; scene.spins = 0; scene.spinNow = 0;
    scene.totalShow = false; scene.total = 0; scene.win = 0; scene.winA = 0; scene.base = 0; scene.baseBook = 0;
    if (!soft) scene.night = 0;
    for (let x = 0; x < N; x++) mult[x].fill(0);
    chain = Promise.resolve();
  }
  async function play(events, ctx) {
    roundCtx = ctx; busy = true; hurry = false; resetStage();
    document.body.classList.add('rc-busy');
    S.wake(); S.setLevel(0);
    const need = [];
    if (events.some(q => q.type === 'night')) need.push('bg-mid-night', 'bg-far-night', 'w-night', 'lantern', 'w-total');
    if (events.some(q => q.type === 'wheel')) need.push('wheel', 'spoon', 'pedestal');
    if (events.some(q => q.type === 'bird')) need.push('bird1');
    ensure(need).then(() => { if (need.includes('bg-mid-night')) setTimeout(() => fallMasks('bg-mid-night', true), 0); });
    const cost = ctx.cost;
    let feature = false, inNight = false;
    // a round under the price keeps its motion (the stones always fall like stones); only its pauses get shorter
    quick = ctx.winX / cost < 1 && !events.some(q => q.type === 'night' || q.type === 'wheel');
    for (const e of events) {
      if (!e || !e.type) continue;
      if (e.type === 'board') await boardIn(e, inNight);
      else if (e.type === 'bird') await birdIn(e);
      else if (e.type === 'wins') await winsIn(e);
      else if (e.type === 'feed') await feedIn(e);
      else if (e.type === 'erupt') await eruptIn(e);
      else if (e.type === 'tumble') await tumbleIn(e);
      else if (e.type === 'spinEnd') {
        await spinEnd(e);
        if (!events.some(q => q.type === 'night' || q.type === 'wheel')) await celebrate(ctx.winUnits, ctx.winX, cost, ctx.capped);
      } else if (e.type === 'wheel') { feature = true; await wheelIn(e); }
      else if (e.type === 'wheelWin') { await wheelWin(e); if (!events.some(q => q.type === 'night')) await celebrate(ctx.winUnits, ctx.winX, cost, ctx.capped); }
      else if (e.type === 'night') { feature = true; inNight = true; await nightStart(e); }
      else if (e.type === 'fs') { scene.spinNow = e.n; scene.spins = e.of; scene.base = roundCtx ? scene.total : 0; }
      else if (e.type === 'more') { S.emit('goldPep3'); scene.spins = e.of; const m = L.meter; label('+5', m.x, m.y - m.h * .55, m.h * .1, { hold: 900 }); R.spawn({ img: 'fx-flash', x: m.x, y: m.y, w: m.h * .7, s: .4, vs: 1.4, life: .8, fade: .5, add: true, layer: 2 }); scene.flash = .3; await waitSkip(1100); }
      else if (e.type === 'fsEnd') { scene.total = e.total; if (e.win > 0) { setHaul(roundCtx.units(e.total)); } await wait(hurry ? 60 : 200); }
      else if (e.type === 'nightEnd') {
        const big = ctx.capped || ctx.winX / cost >= TIERS[0];
        if (big) { await settle(); await celebrate(ctx.winUnits, ctx.winX, cost, ctx.capped); await nightEnd(e, true); }
        else { await nightEnd(e); await celebrate(ctx.winUnits, ctx.winX, cost, ctx.capped); }
      }
    }
    await settle();
    ctx.setWin(ctx.winUnits);
    busy = false; document.body.classList.remove('rc-busy');
    return { feature };
  }

  /* ---------- 2x and up, below the first title (standard 7.2): the cart bursts, the cook cheers, the amount
     rises over the board, holds, and drops back into the cart sign. About 1.9s, the spin button or Space skips it ---------- */
  async function midWin(units) {
    S.emit('winSmall'); if (cook && !cook.busy()) cook.act('cook-cheer', 1.4);
    const [cx, cy] = cartTop(), b = L.board || { x: W * .3, y: H * .1, w: W * .4, h: H * .5 };
    scene.flash = Math.max(scene.flash, .3); scene.shake = Math.max(scene.shake, 6);
    R.spawn({ img: 'fx-spark', s: .4, vs: 2.6, add: true, seqOff: true, x: cx, y: cy - L.fw * .2, w: L.fw * 1.9, life: .6, fade: .1, add: true, layer: 2 });
    const gems = ['it-tur1', 'it-rub1', 'it-tur2', 'it-rub2', 'fx-spark'];
    for (let q = 0; q < 18; q++) setTimeout(() => R.spawn({ img: gems[q % 5], x: cx + (Math.random() - .5) * L.fw * .4, y: cy, vx: (Math.random() - .5) * 560, vy: -560 - Math.random() * 400, g: 1300, w: L.fw * (q % 5 === 4 ? .3 : .15 + Math.random() * .08), rot: Math.random() * 6, vr: (Math.random() - .5) * 10, life: 1.15, fade: .3, add: q % 5 === 4, layer: 2 }), (hurry ? 10 : 40) * q);
    scene.haulPop = 1.4; tw(scene, { haulPop: 1 }, 600, R.E.elastic);
    faces.forEach((f, j) => setTimeout(() => pop(f, 1.14), j * 70));
    for (let q = 0; q < 16; q++) setTimeout(() => R.spawn({ img: q % 2 ? 'it-gold' : 'it-tur1', x: b.x + Math.random() * b.w, y: b.y - L.fw * .3, vx: (Math.random() - .5) * 60, vy: 120 + Math.random() * 200, g: 900, w: L.fw * (.14 + Math.random() * .08), rot: Math.random() * 6, vr: (Math.random() - .5) * 8, life: 1.3, fade: .4, layer: 2 }), q * 45);
    const l = { text: money(units), x: cx, y: cy - L.fw * .3, h: L.fw * .36, s: .4, a: 1 };
    scene.labels.push(l);
    const mx = b.x + b.w / 2, my = b.y + b.h * .42;
    await tw(l, { x: mx, y: my, s: 1.9 }, 480, R.E.back);
    S.emit('tooth', 3); scene.shake = Math.max(scene.shake, 4);
    R.spawn({ img: 'fx-flash', x: mx, y: my, w: L.fw * 2.2, s: .4, vs: 2.4, life: .3, fade: .2, add: true, layer: 2 });
    for (let q = 0; q < 8; q++) { const a = q / 8 * TAU; R.spawn({ img: 'fx-spark', x: mx, y: my, vx: Math.cos(a) * 420, vy: Math.sin(a) * 420, drag: .06, w: L.fw * .28, life: .7, fade: .4, add: true, layer: 2 }); }
    l.s = 2.2; tw(l, { s: 1.9 }, 300, R.E.elastic);
    await wait(650);
    await tw(l, { x: cx, y: cy - L.fw * .1, s: .5, a: .3 }, 380, R.E.in);
    scene.labels = scene.labels.filter(q => q !== l);
    scene.haulPop = 1.5; tw(scene, { haulPop: 1 }, 420, R.E.elastic); S.emit('peb', 8);
    await wait(250);
  }

  /* ---------- The win moment (from the round's price, standard 7.1 and fix #3) ---------- */
  async function celebrate(units, x, cost, capped) {
    const ratio = x / cost;
    if (ratio < 1) { await wait(420); return; }                       // below the price: quiet, half a second
    let tier = -1; TIERS.forEach((t, k) => { if (ratio >= t) tier = k; });
    if (capped) tier = 3;
    if (tier < 0 && ratio >= 2) { await midWin(units); return; }       // 2x and up, below SPICY: a moment of its own (standard 7.2, 1.2)
    if (tier < 0) {                                                    // above the price, below SPICY: a short moment
      S.emit('winSmall'); if (cook && !cook.busy()) cook.act('cook-cheer', 1.6);
      const [cx, cy] = cartTop();
      for (let q = 0; q < 10; q++) R.spawn({ img: q % 2 ? 'fx-spark' : 'it-tur1', x: cx, y: cy, vx: (Math.random() - .5) * 500, vy: -300 - Math.random() * 300, g: 1100, w: L.fw * (q % 2 ? .3 : .14), rot: Math.random() * 6, vr: 6, life: .9, add: q % 2 === 1, layer: 2 });
      scene.haulPop = 1.4; tw(scene, { haulPop: 1 }, 600, R.E.elastic);
      await wait(1400);
      return;
    }
    // the big moment (standard 7.1): the light is pulled in, the count climbs THROUGH the tiers (each lands with its own
    // IMPACT: flash, shake, a camera kick, a 260 ms freeze, a second wave), the title lives the whole time (pulse, wobble,
    // its own fire), the count grows and beats from 65%, a world fountain speeds up. The spin button / Space
    // ends the current stage at once: first to the next tier, then to the end.
    const top = tier, steps = TITLES.slice(0, top + 1), hadHaul = scene.haulShow, hadTotal = scene.totalShow;
    scene.haulShow = false; scene.totalShow = false;
    await ensure(steps.concat(capped ? ['w-max'] : []));
    const sp = roundCtx ? roundCtx.speed() : 1, skip0 = skipReq;
    S.hold(.06); if (cook && !cook.busy()) cook.act('cook-cheer', 1.2);
    const pre = 650;
    scene.dark = 0; R.spawn({ img: 'fx-flash', x: L.title.x, y: L.title.y, w: L.fw * 3, s: 1.6, vs: -2.2, life: pre / 1000 * sp, fade: .2, add: true, alpha: .6, layer: 2 });
    await Promise.race([tw(scene, { dark: .5 }, pre, R.E.in), waitSkip(pre)]); scene.dark = .5;
    const cel = document.querySelector('.rc-celeb');
    const t = { img: steps[0], s: .3, a: 1, oy: -H * .05, amount: 0, ns: 1, rot: -.05, exact: false, tier: 0, live: true };
    scene.title = t;
    const NAMES = ['SPICY', 'SCORCHER', 'INFERNO', 'VOLCANIC'];
    const land = async k => {                                           // one tier lands: IMPACT
      t.img = steps[k]; t.tier = k; t.s = .55; t.rot = (k % 2 ? .06 : -.06);
      tw(t, { s: 1, rot: 0 }, 380, R.E.back);
      scene.flash = .85; scene.shake = 16 + k * 7; scene.kick = 1; tw(scene, { kick: 0 }, 420, R.E.out);
      S.emit('tier' + k); S.emit('boom');
      if (cel) { cel.textContent = NAMES[k] + ' ' + money(units); cel.classList.add('on'); }
      tierFx(k, true);
      if (cook && !cook.busy()) cook.act('cook-cheer', 1.2 + k * .15);
      faces.forEach((f, j) => { setTimeout(() => pop(f, 1.12 + k * .04), j * 60); if (k >= 2) f.st = 'hot'; });
      await waitSkip(260);                                              // the freeze
      tierFx(k, false);                                                 // the second wave
    };
    await land(0);
    // the count, in one segment per tier: each ends exactly on the next tier's threshold
    const ends = [];
    for (let k = 0; k < top; k++) ends.push(Math.round(units * TIERS[k + 1] / ratio));
    ends.push(units);
    const SEG = capped ? [1000, 1000, 1000, 7000] : [2100, 1500, 1500, 1800];
    const p = { v: 0 }, total = ends.length;
    const stop = S.count(SEG.slice(0, total).reduce((s, v) => s + v, 0) / 1000 * sp, top);
    const grow = Math.sqrt(Math.min(ratio, 50) / 50);                   // the count's size follows the win (7.2)
    let fountainAt = 0;
    const tick = () => {
      if (scene.title !== t) return;
      t.amount = Math.min(units, Math.round(p.v));
      const prog = p.v / Math.max(1, units);
      t.ns = .75 + .55 * grow * Math.min(1, prog * 1.4) + (prog > .65 && prog < 1 ? Math.sin(T * 18) * .05 : 0);
      if (T > fountainAt && !api.reduced && prog < 1) {                // a fountain from the cart, faster and faster
        fountainAt = T + Math.max(.015, .09 - .075 * prog * prog * prog);
        const [cx, cy] = cartTop(), imgs = ['it-tur1', 'it-rub1', 'it-gold', 'it-tur2', 'it-rub2', 'it-idol1'];
        R.spawn({ img: imgs[(Math.random() * imgs.length) | 0], x: cx, y: cy, vx: (Math.random() - .5) * 700, vy: -700 - Math.random() * 500, g: 1500, w: L.fw * (.14 + Math.random() * .12), rot: Math.random() * 6, vr: (Math.random() - .5) * 12, life: 1.4, fade: .4, layer: 2 });
      }
      if (t.amount < units) requestAnimationFrame(tick);
    };
    tick();
    for (let k = 0; k < total; k++) {
      const done = tw(p, { v: ends[k] }, SEG[k], k === total - 1 ? R.E.out : R.E.lin);
      const skipped = await Promise.race([done.then(() => false), waitSkip(SEG[k] + 50)]);
      if (skipped) { if (R.killTweens) R.killTweens(p); p.v = ends[k]; }
      if (k < total - 1) await land(k + 1);
    }
    stop(); p.v = units; t.amount = units; t.exact = true;
    t.ns = 1.35 * (.75 + .55 * grow); tw(t, { ns: .75 + .55 * grow }, 420, R.E.elastic); scene.shake = 14; S.emit('boom');
    if (capped) {                                                       // the max win: its own screen
      t.img = 'w-max'; t.s = .6; t.oy = -H * .04; const ms = L.land ? 1.5 : 1.05; tw(t, { s: ms }, 500, R.E.back); scene.flash = 1; scene.shake = 34; S.emit('tier3');
      for (let q = 0; q < 3; q++) R.spawn({ img: 'fx-flash', x: L.title.x, y: L.title.y, w: W * .9, s: .3 + q * .2, vs: 1.2, life: 1.6, fade: .8, add: true, alpha: .7, rot: q, vr: .4, layer: 2 });
      if (cel) cel.textContent = 'MAX WIN ' + money(units);
      for (let q = 0; q < 40; q++) setTimeout(() => R.spawn({ img: q % 3 ? 'it-gold' : 'it-tooth', x: Math.random() * W, y: -L.fw * .3, vx: (Math.random() - .5) * 80, vy: 200 + Math.random() * 300, g: 900, w: L.fw * (.18 + Math.random() * .12), rot: Math.random() * 6, vr: (Math.random() - .5) * 8, life: 2.4, fade: .5, layer: 2 }), q * 60);
      faces.forEach(f => { f.st = 'hot'; pop(f, 1.2); });
      for (let q = 0; q < 8; q++) { if (await waitSkip(250)) break; t.s = (L.land ? 1.5 : 1.05) * 1.06; tw(t, { s: L.land ? 1.5 : 1.05 }, 220, R.E.out); }
    }
    await waitSkip(skipReq !== skip0 ? 500 : [2100, 2300, 2600, 3000][top]);
    await tw(t, { a: 0, s: .9 }, 300, R.E.in);
    scene.title = null; tw(scene, { dark: 0 }, 300); scene.tint = null; scene.haulShow = hadHaul; scene.totalShow = hadTotal;
    faces.forEach(f => { if (f.st === 'hot') f.st = 'idle'; });
    const cel2 = document.querySelector('.rc-celeb'); if (cel2) cel2.classList.remove('on');
    S.hold(1);
  }
  // each tier its own fire: SPICY sparks, SCORCHER rising flames, INFERNO a ring of fire and embers, VOLCANIC falling rocks
  // and lava light. first = the hit, else = the second wave
  function tierFx(k, first) {
    const x = L.title.x, y = L.title.y, w = L.title.w;
    scene.tint = ['#ff7a1a', '#ff5a00', '#ff2a00', '#d80c00'][k]; scene.tintA = .06 + k * .04;
    if (first) for (let q = 0; q < 3 + k * 2; q++) R.spawn({ img: 'fx-spark', s: .4, vs: 2.6, add: true, seqOff: true, x: x + (Math.random() - .5) * w * .8, y: y + (Math.random() - .5) * w * .3, w: L.fw * (1.2 + Math.random() * (1 + k * .3)), life: .6, fade: .1, add: true, layer: 2 });
    if (k >= 1) for (let q = 0; q < (first ? 6 : 10) + k * 3; q++) R.spawn({ img: 'fx-flames', x: x + (Math.random() - .5) * w * .9, y: y + w * .12, vx: (Math.random() - .5) * 60, vy: -160 - Math.random() * 220, w: L.fw * (.4 + Math.random() * .4), s: .6, vs: .8, life: .9 + Math.random() * .4, fade: .5, add: true, layer: 2 });
    if (k >= 2) for (let q = 0; q < 24; q++) { const a = q / 24 * TAU; R.spawn({ img: 'fx-spark', x, y, vx: Math.cos(a) * (first ? 700 : 420), vy: Math.sin(a) * (first ? 700 : 420), drag: .04, w: L.fw * .35, life: 1, fade: .5, add: true, layer: 2 }); }
    if (k >= 3) for (let q = 0; q < 14; q++) R.spawn({ img: 'fx-rocks', x: Math.random() * W, y: -L.fw * .4, vx: (Math.random() - .5) * 100, vy: 300 + Math.random() * 400, g: 1600, w: L.fw * (.2 + Math.random() * .25), rot: Math.random() * 6, vr: (Math.random() - .5) * 10, life: 1.5, fade: .3, layer: 2 });
    if (!first) for (let q = 0; q < 6; q++) R.spawn({ img: 'fx-smoke', x: x + (Math.random() - .5) * w, y: y + w * .1, vx: (Math.random() - .5) * 120, vy: -60 - Math.random() * 80, w: L.fw * .9, s: .5, vs: .9, life: 1.2, fade: .8, alpha: .5, layer: 2 });
  }

  // the opening card of the night (it goes on its own after a while, so autoplay never stops on it)
  async function nightCard(e) {
    const st = document.getElementById('lzStage'); if (!st) return;
    const card = document.createElement('div'); card.className = 'rc-ncard'; card.setAttribute('role', 'dialog'); card.setAttribute('aria-label', 'Lantern night');
    const im = document.createElement('img'); im.src = 'assets/w-night.webp'; im.alt = 'LANTERN NIGHT';
    const big = document.createElement('b'); big.textContent = e.spins + ' FREE SPINS';
    const p = document.createElement('p'); p.textContent = 'Every stone face erupts at its first meal, and the multipliers stay all night' + (e.seeded && e.seeded.length ? '. ' + e.seeded.length + ' already on the board' : '') + '.';
    const go = document.createElement('i'); go.textContent = '';
    card.append(im, big, p, go); st.append(card);
    requestAnimationFrame(() => card.classList.add('on'));
    S.emit('tier1');
    const s0 = skipReq;
    await waitSkip(skipReq === s0 ? 3600 : 0);
    card.classList.remove('on'); setTimeout(() => card.remove(), 400);
  }
  async function nightEnd(e, counted) {
    await settle(); await ensure(['w-total']);
    S.emit('nightOut');
    const units = roundCtx.units(e.total);
    const t = { img: 'w-total', s: .3, a: 1, oy: 0, amount: counted ? units : 0, exact: !!counted };
    scene.haulShow = false; scene.totalShow = false;
    scene.title = t; scene.dark = .35;
    await tw(t, { s: 1 }, 420, R.E.back);
    if (counted) await waitSkip(1600);
    else {
      const p = { v: 0 }, stop = S.count(1.6 * roundCtx.speed(), 2);
      const tick = () => { t.amount = Math.round(p.v); if (scene.title === t && p.v < units) requestAnimationFrame(tick); };
      tick(); await Promise.race([tw(p, { v: units }, 1600), waitSkip(1600)]); stop(); p.v = units; t.amount = units; t.exact = true;
      await waitSkip(1400);
    }
    await tw(t, { a: 0 }, 300); scene.title = null; scene.dark = 0;
    setHaul(units, false);
    scene.spins = 0; scene.totalShow = false; for (let x = 0; x < N; x++) mult[x].fill(0);
    await tw(scene, { night: 0 }, 800, R.E.inOut);
    S.playMusic('day', 0); S.ambience('amb_day');
  }

  /* ---------- The bar: one low row in the world's own stone (fix #1) ---------- */
  function buildBar() {
    const $ = id => document.getElementById(id), panel = $('lzPanel'), app = $('lzApp'), stage = $('lzStage');
    const box = (cls, kids) => { const d = document.createElement('div'); d.className = cls; kids.forEach(k => k && d.append(k)); return d; };
    const replay = !!(window.LZ && LZ.params && LZ.params.replay);
    const L1 = box('rc-bl', [$('lzWallet')]);
    const corner = box('rc-corner', [$('lzInfo'), $('lzSound')]);
    const hurryBtn = document.createElement('button');
    hurryBtn.type = 'button'; hurryBtn.className = 'rc-hurry'; hurryBtn.setAttribute('aria-label', 'Skip');
    hurryBtn.addEventListener('click', () => { skipReq++; S.emit('click'); });   // standard 1.5: skips a celebration, never speeds up the round (only TURBO does)
    const spin = box('rc-spin', [$('lzAction'), hurryBtn]);
    const amt = document.querySelector('#lzField .lz-amount');
    let C;
    if (!replay) C = box('rc-bc', [$('lzMinus'), box('rc-spinw', [spin, amt]), $('lzPlus')]);
    else C = box('rc-bc', [spin]);
    const R1 = box('rc-br', [$('lzWinBox'), box('rc-quick', [$('lzFast'), $('lzAuto')])]);
    // the win panel pops each time a new win lands in it
    { const wb = R1.querySelector('.lz-win'), wn = wb && wb.querySelector('b'); let last = wn ? wn.textContent : ''; if (wn)
      new MutationObserver(() => { const t = wn.textContent; if (t !== last) { last = t; clearTimeout(wb._pt); wb._pt = setTimeout(() => { if (wb.classList.contains('has')) { wb.classList.remove('rc-pop'); void wb.offsetWidth; wb.classList.add('rc-pop'); } }, 90); } }).observe(wn, { childList: true, characterData: true, subtree: true }); }
    panel.prepend(L1, C, R1);
    app.classList.add('rc-app');
    // the two features hang on the stage as wooden signs; the pepper switch stands by the cook
    const signs = box('rc-signs', []);
    document.querySelectorAll('.lz-feat').forEach(b => { b.classList.add('rc-sign'); signs.append(b); });
    const modes = $('lzModes');
    const holder = box('rc-stagebox', [signs, modes, corner]);
    stage.append(holder);
    if (modes) modes.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      S.emit('click');
      if (matchMedia('(max-aspect-ratio:3/4) and (max-width:370px)').matches && b.getAttribute('aria-pressed') === 'true' && !busy) {
        const other = Array.from(modes.querySelectorAll('button')).find(x => x !== b); if (other) setTimeout(() => other.click(), 0);
      }
    }));
    ['lzMinus', 'lzPlus', 'lzFast', 'lzAuto', 'lzInfo', 'lzSound'].forEach(id => $(id) && $(id).addEventListener('click', () => S.emit('click')));
    amountPicker(amt);
    if (amt) {
      const cost = document.createElement('small'); cost.className = 'rc-cost'; amt.append(cost);
      const sync = () => { const m = app.dataset.mode, sub = $('lzActionSub'); cost.textContent = m === 'reaper' && sub ? '5× · ' + sub.textContent.trim() : ''; amt.classList.toggle('x5', m === 'reaper'); };
      new MutationObserver(sync).observe(app, { attributes: true, attributeFilter: ['data-mode'] });
      if ($('lzActionSub')) new MutationObserver(sync).observe($('lzActionSub'), { childList: true, characterData: true, subtree: true });
      sync();
    }
    replayCard();
    // the old field box keeps nothing visible
    if ($('lzField')) $('lzField').classList.add('rc-gone');
  }
  // the amount opens the game's own picker over the amount (fix #14): reads the hidden <select>'s options
  function amountPicker(amt) {
    if (!amt) return;
    const sel = document.getElementById('lzAmtSel'), pop = document.createElement('div');
    pop.className = 'rc-amtpop'; pop.hidden = true; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', 'Choose the play amount');
    document.getElementById('lzApp').append(pop);
    const open = () => {
      if (sel.disabled || busy) return;
      pop.replaceChildren(...Array.from(sel.options).map(o => {
        const b = document.createElement('button'); b.type = 'button'; b.textContent = o.textContent; if (o.value === sel.value) b.className = 'on';
        b.addEventListener('click', ev => { ev.stopPropagation(); sel.value = o.value; sel.dispatchEvent(new Event('change')); pop.hidden = true; S.emit('tick'); });
        return b;
      }));
      pop.hidden = false; S.emit('click');
    };
    amt.setAttribute('role', 'button'); amt.tabIndex = 0; amt.setAttribute('aria-label', 'Play amount: choose');
    amt.addEventListener('click', e => { e.stopPropagation(); if (pop.hidden) open(); else pop.hidden = true; });
    amt.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
    document.addEventListener('pointerdown', e => { if (!pop.hidden && !pop.contains(e.target) && !amt.contains(e.target)) pop.hidden = true; });
  }

  function replayCard() {
    const P = (window.LZ && LZ.params) || {}; if (!P.replay) return;
    const box = document.getElementById('lzReplay'); if (!box) return;
    const social = !!(api && api.social) || /^(XSC|XGC|XEC|XRC|WRW)$/.test(String(P.currency || ''));
    const L0 = social ? ['Mode', 'Base Play', 'Feature Multiplier', 'Total Play Worth', 'Final Multiplier', 'Total Win'] : ['Mode', 'Base Bet', 'Cost Multiplier', 'Total Bet Cost', 'Payout Multiplier', 'Total Win'];
    const card = document.createElement('dl'); card.className = 'lz-facts rc-replay';
    const dd = L0.map(l => { const t = document.createElement('dt'); t.textContent = l; const d = document.createElement('dd'); d.textContent = '–'; const w = document.createElement('span'); w.className = 'rc-fact'; w.append(t, d); card.append(w); return d; });
    const g = id => (document.getElementById(id) || {}).textContent || '–';
    const sync = () => {
      dd[0].textContent = g('lzRpMode'); dd[1].textContent = g('lzRpAmount'); dd[2].textContent = g('lzRpX'); dd[3].textContent = g('lzRpCost'); dd[4].textContent = g('lzRpMult');
      const a = LZ.state.amount, x = parseFloat(g('lzRpMult').replace(/[^0-9.]/g, ''));
      dd[5].textContent = Number.isFinite(x) && a ? api.winMoney(Math.round(a * x)) : '–';
    };
    box.querySelector('dl') && (box.querySelector('dl').hidden = true);
    box.append(card);
    const mo = new MutationObserver(sync);
    ['lzRpMode', 'lzRpAmount', 'lzRpX', 'lzRpCost', 'lzRpMult'].forEach(id => { const el = document.getElementById(id); if (el) mo.observe(el, { childList: true, characterData: true, subtree: true }); });
    sync();
  }

  /* ---------- The intro: the cliff asleep, three faces talk in their sleep (fix #5) ---------- */
  function buildIntro(cards) {
    const intro = document.getElementById('lzIntro'), box = document.getElementById('lzIntroCards');
    if (!intro || !box) return;
    intro.classList.add('rc-intro');
    box.hidden = false;
    const row = document.createElement('div'); row.className = 'rc-ifaces';
    [0, 1, 2, 3, 4].forEach(i => {
      const d = document.createElement('div'); d.className = 'rc-iface f' + i;
      const im = document.createElement('img'); im.src = 'assets/face' + i + '-idle.webp'; im.alt = ''; im.dataset.i = i;
      d.append(im);
      const card = cards[[0, 2, 4].indexOf(i)];
      if (card) {
        const b = document.createElement('div'); b.className = 'rc-bubble';
        b.innerHTML = `<b>${card.title}</b><span>${card.text}</span>`;
        d.append(b);
      }
      row.append(d);
    });
    box.replaceChildren(row);
    const talkers = Array.from(row.querySelectorAll('.rc-iface')).filter(d => d.querySelector('.rc-bubble'));
    let who = 0; talkers[0].classList.add('talk');
    const talk = talkers.length && setInterval(() => { if (intro.classList.contains('out')) return clearInterval(talk); talkers[who].classList.remove('talk'); who = (who + 1) % talkers.length; talkers[who].classList.add('talk'); }, 3400);
    // "do not show again": remembered in this browser only
    const keep = document.createElement('label'); keep.className = 'rc-skip';
    keep.innerHTML = '<input type="checkbox" id="rcSkip"> Do not show this again';
    document.querySelector('.lz-intro-in').append(keep);
    let skip = false; try { skip = localStorage.getItem('rc-skip-intro') === '1'; } catch (e) { /* private mode */ }
    document.getElementById('rcSkip').checked = skip;
    document.getElementById('rcSkip').addEventListener('change', e => { try { localStorage.setItem('rc-skip-intro', e.target.checked ? '1' : '0'); } catch (er) { /* ignore */ } });
    if (skip) intro.classList.add('rc-short');
    // the loading bar is the burning fuse
    const bar = document.getElementById('lzIntroBar'), load = document.querySelector('.lz-intro-load');
    if (load) { load.classList.add('rc-fuse'); const sp = document.createElement('i'); sp.className = 'rc-spark'; load.append(sp); }
    const sync = () => { const m = /scaleX\(([\d.]+)\)/.exec(bar.style.transform || ''); const k = m ? +m[1] : 0; load.style.setProperty('--k', k.toFixed(3)); };
    new MutationObserver(sync).observe(bar, { attributes: true, attributeFilter: ['style'] }); sync();
    // PLAY: the faces wake up, then the cliff takes over
    const play = document.getElementById('lzIntroPlay');
    play.addEventListener('click', () => {
      row.querySelectorAll('img').forEach((im, k) => setTimeout(() => { im.src = 'assets/face' + im.dataset.i + '-idle.webp'; im.parentElement.classList.add('awake'); }, k * 60));
    }, { capture: true });
  }

  /* ---------- Boot ---------- */
  const LATER = ['bg-far-night', 'bg-mid-night', 't-spicy', 't-scorcher', 't-inferno', 't-volcanic', 'w-night', 'w-total', 'w-max', 'bird1', 'bird2', 'lantern', 'tablet', 'sign', 'bubble', 'fuse', 'b-yes', 'b-no', 'b-stop', 'b-mute', 'wheel', 'spoon', 'pedestal', 'fx-boom1', 'fx-boom2'];
  const USED = /^(bg-(far|mid)$|hero|meter|t-|mplate|grid|grid-halo|face\d-(idle|red|sleep)|face0-lava|fx-|seq-|it-(gold|chili)|cart|plank|logo|digits|b-|ledge|board|cook-rig|fg)/;
  const ASSET_NAMES = Object.keys(A).filter(n => USED.test(n) && !LATER.includes(n) && n !== 'fg' && n !== 'digits').concat(['digits']);
  let laterP = null;
  const later = () => laterP || (laterP = (S.loadMusic(), R.load(LATER.filter(n => A[n]))));
  const ensure = names => { const miss = names.filter(n => !R.img(n) && A[n]); return miss.length ? R.load(miss) : Promise.resolve(); };
  const xs = n => (n / 100).toFixed(2).replace(/\.?0+$/, '') + '×';
  const introCards = [
    { title: 'CLUSTERS OF 5', text: 'Five or more of the same stone, touching side by side, win. They burst and the stones above tumble down: it goes on until nothing wins.' },
    { title: 'FEED THE FACES', text: 'A stone face can land on the board. Every win touching it is a meal; after 2 meals it erupts and leaves a multiplier on its spot. It doubles every time.' },
    { title: 'GOLDEN PEPPERS', text: '3 golden peppers light LANTERN NIGHT: free spins, and the multipliers stay all night. 4 spin the TOTEM WHEEL.' },
  ];
  const payRows = SYMS.slice().reverse().map(s => '<tr><td>' + NAMES[s] + '</td>' + [0, 2, 5, 10].map(i => '<td>' + xs(PAY[s][i] * SCALE) + '</td>').join('') + '</tr>').join('');
  const RULES = `
    <h3>How to play</h3>
    <p>Choose a play amount and press PLAY. The board is 7 × 7. <b>A cluster of 5 or more of the same stone, touching side by side (not diagonally), wins</b> the play amount × its value. All the clusters on the board win. Then they burst, the stones above tumble down into the gaps and new stones fall in from the top; this goes on until nothing wins. The round is decided by the game server when you press PLAY.</p>
    <table><thead><tr><th>Cluster of</th><th>5</th><th>7</th><th>10</th><th>15+</th></tr></thead><tbody>${payRows}</tbody></table>
    <p><b>Wild chili</b> joins any cluster it touches.</p>
    <h3>Stone faces</h3>
    <p>A stone face can land on the board as a 2 × 2 block. Every winning cluster that touches it is a meal. <b>After 2 meals it erupts</b>: it leaves the board and leaves a <b>multiplier</b> on its four spots: ×2, or double what was already there, up to ×128. A winning cluster is multiplied by the <b>sum</b> of the multipliers under it. In an ordinary round the multipliers are gone at the end of the round.</p>
    <p><b>The thief bird</b> can swoop in before the tumbles: every stone of one low kind turns into a wild chili.</p>
    <h3>Golden peppers</h3>
    <p>Golden peppers stay where they land. At the end of the round, <b>3 golden peppers start LANTERN NIGHT</b> (15 free spins), and <b>4 or more spin the TOTEM WHEEL</b>.</p>
    <h3>LANTERN NIGHT</h3>
    <p>15 free spins. At night up to three stone faces land on every spin and <b>each one erupts after a single meal</b>, and <b>the multipliers stay on the board for the whole night</b>. 3 golden peppers on a free spin give 5 more spins (up to 30).</p>
    <h3>TOTEM WHEEL</h3>
    <p>The cook spins the great stone wheel. Its prize is a win straight away of 20 prizes: a win straight away (from ×100 up to ×1,000, ×2,500 and the burning <b>×5,000</b> the play amount), or LANTERN NIGHT that starts with multipliers already on the board (+8, +12, +16, +24 or +32 ×2 spots).</p>
    <p><b>LANTERN NIGHT feature</b> (${130}× the play amount) and <b>TOTEM WHEEL feature</b> (${200}× the play amount) start the feature straight away. Both ask for confirmation and show the price first.</p>
    <h3>Win cap</h3>
    <p>The most a single round can win is 10,000× the play amount. When the total reaches it, the round ends at 10,000×.</p>`;

  LZ.boot({
    id: 'rock-chompers', title: 'Rock Chompers', tagline: 'Feed the stone faces. Every one that erupts leaves a multiplier.', rtp: '96.30',
    layout: 'bar', shell: 2, celebrate: false,
    logo: '<img src="assets/logo.webp" alt="Rock Chompers">',
    modes: [
      { name: 'base', label: 'PLAY', cost: 1, maxWin: 10000, note: '1×' },
      { name: 'night', kind: 'feature', label: 'LANTERN NIGHT', cost: 130, maxWin: 10000, blurb: 'LANTERN NIGHT starts right away: 15 free spins, and the multipliers stay all night.', confirmTitle: 'Light the lanterns?', confirmLabel: 'Light them' },
      { name: 'wheel', kind: 'feature', label: 'TOTEM WHEEL', cost: 200, maxWin: 10000, blurb: 'One spin of the great stone wheel: a big win, or LANTERN NIGHT with multipliers already on the board.', confirmTitle: 'Spin the totem wheel?', confirmLabel: 'Spin it' },
    ],
    featureName: 'LANTERN NIGHT', statLabel: 'Nights',
    playLabel: 'PLAY', busyLabel: 'PLAYING',
    introCards, rules: RULES,
    preload: ['assets/logo.webp', 'assets/bg-mid.jpg', 'assets/grid.webp', 'assets/digits.webp', 'assets/hero.webp'],
    async mount(stage, a) {
      api = a; S.init(a);
      R.setSpeed(() => (roundCtx ? roundCtx.speed() : 1));
      cv = document.createElement('canvas'); cv.className = 'rc-canvas';
      stage.append(cv); c = cv.getContext('2d');
      document.addEventListener('keydown', e => { if (e.code === 'Space' && busy && !e.repeat && spaceOK()) { skipReq++; } });
      const cb = document.createElement('div'); cb.className = 'rc-cookbox'; cb.setAttribute('aria-hidden', 'true'); stage.append(cb);
      const cel = document.createElement('div'); cel.className = 'rc-celeb'; cel.setAttribute('role', 'status'); cel.setAttribute('aria-live', 'polite'); stage.append(cel);
      buildBar(); buildIntro(introCards);
      await R.load(ASSET_NAMES);
      // the first board: a calm one to look at before the first PLAY
      const g0 = Array.from({ length: N }, (_, x) => Array.from({ length: N }, (_, y) => SYMS[(x * 2 + y * 3 + (x * y) % 3) % 7]));
      model = g0; for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) { cells[x][y].s = g0[x][y]; cells[x][y].y = y; }
      new ResizeObserver(() => layout()).observe(stage);
      layout(); requestAnimationFrame(frame);
    },
    play,
    reset() { busy = false; document.body.classList.remove('rc-busy'); resetStage(); },
    idle() { setTimeout(later, 8000); roundCtx = null; },
    onStart() { S.wake(); S.ambience('amb_day'); S.playMusic('day', 0); },
    onSound(on) { if (on) { S.wake(); S.ambience('amb_day'); S.playMusic(scene.night ? 'night' : 'day', 0); } },
    onMode() {},
  });
})();
