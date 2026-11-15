/* Retrograde art: every picture in the game is drawn here, in code, on canvases.
 * Used by game.js (the stage) and by media/art.html (the listing art). Nothing here decides a result. */
window.RetroArt = (() => {
  'use strict';
  const TAU = Math.PI * 2, PI = Math.PI;
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const mk = (w, h = w) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };
  const seeded = seed => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
  const conic = (c, a, x, y) => (c.createConicGradient ? c.createConicGradient(a, x, y) : null);

  /* ---------- The seven metals ---------- */
  const METAL = {
    L: { planet: 'Saturn', metal: 'lead', shape: 'squircle', tex: 'hammer', size: .9, face: .74, lo: '#060a15', mid: '#22304e', hi: '#7187b0', edge: '#02040a', ink: ['#f4f8ff', '#b3c8f0'], gHi: 'rgba(255,255,255,.22)', gLo: 'rgba(0,0,0,.8)', spec: .42 },
    T: { planet: 'Jupiter', metal: 'tin', shape: 'hex', tex: 'brush', size: .94, face: .7, lo: '#454a33', mid: '#a2a77f', hi: '#f1f3cf', edge: '#252918', ink: ['#1a2212', '#333e27'], gHi: 'rgba(255,255,230,.8)', gLo: 'rgba(24,30,14,.6)', spec: .6 },
    I: { planet: 'Mars', metal: 'iron', shape: 'cog', tex: 'hammer', size: .96, face: .7, lo: '#1d0705', mid: '#86281a', hi: '#e08660', edge: '#0e0302', ink: ['#ffe8d2', '#ffb482'], gHi: 'rgba(255,190,150,.3)', gLo: 'rgba(0,0,0,.75)', spec: .45 },
    C: { planet: 'Venus', metal: 'copper', shape: 'rosette', tex: 'brush', size: .96, face: .73, lo: '#62240a', mid: '#dc7436', hi: '#ffd2a4', edge: '#3a1304', ink: ['#8ff0d6', '#2fae93'], gHi: 'rgba(255,225,190,.7)', gLo: 'rgba(40,10,0,.7)', spec: .7 },
    Q: { planet: 'Mercury', metal: 'quicksilver', shape: 'round', tex: 'mirror', size: .85, face: .88, lo: '#10303a', mid: '#7fbcc4', hi: '#f6ffff', edge: '#06202a', ink: ['#06242c', '#0f3f4a'], gHi: 'rgba(255,255,255,.9)', gLo: 'rgba(0,25,32,.5)', spec: .95 },
    S: { planet: 'Moon', metal: 'silver', shape: 'scallop', tex: 'polish', size: .98, face: .75, lo: '#4a5578', mid: '#cdd7f2', hi: '#ffffff', edge: '#2b3352', faceCol: ['#e6edff', '#8c9dd2', '#48568a'], ink: ['#ffffff', '#e8f0ff'], gHi: 'rgba(255,255,255,.55)', gLo: 'rgba(16,24,68,.9)', spec: .7 },
    G: { planet: 'Sun', metal: 'gold', shape: 'rays', tex: 'brush', size: 1, face: .66, lo: '#7c4a05', mid: '#f5bd33', hi: '#fff7c4', edge: '#4d2c00', ink: ['#4a2700', '#7a4706'], gHi: 'rgba(255,250,210,.9)', gLo: 'rgba(70,35,0,.6)', spec: .85 },
  };

  /* Planetary glyphs as paths in a unit box (about -0.5..0.5). Drawn white on a mask, then engraved. */
  const GLYPH = {
    L(c) { c.beginPath(); c.moveTo(-.16, -.5); c.lineTo(-.16, .3); c.moveTo(-.37, -.27); c.lineTo(.06, -.27); c.moveTo(-.16, .02); c.bezierCurveTo(-.06, -.2, .29, -.2, .29, .07); c.bezierCurveTo(.29, .25, .1, .29, .12, .41); c.quadraticCurveTo(.15, .52, .31, .44); c.stroke(); },
    T(c) { c.beginPath(); c.moveTo(-.37, -.3); c.bezierCurveTo(-.25, -.53, .12, -.5, .1, -.22); c.bezierCurveTo(.08, 0, -.2, .12, -.39, .17); c.lineTo(.39, .17); c.moveTo(.18, -.44); c.lineTo(.18, .5); c.stroke(); },
    I(c) { c.beginPath(); c.arc(-.1, .14, .27, 0, TAU); c.moveTo(.1, -.06); c.lineTo(.41, -.37); c.moveTo(.13, -.39); c.lineTo(.42, -.39); c.lineTo(.42, -.1); c.stroke(); },
    C(c) { c.beginPath(); c.arc(0, -.17, .26, 0, TAU); c.moveTo(0, .09); c.lineTo(0, .5); c.moveTo(-.2, .3); c.lineTo(.2, .3); c.stroke(); },
    Q(c) { c.beginPath(); c.arc(0, -.07, .2, 0, TAU); c.moveTo(0, .13); c.lineTo(0, .5); c.moveTo(-.17, .33); c.lineTo(.17, .33); c.moveTo(-.2, -.5); c.bezierCurveTo(-.2, -.2, .2, -.2, .2, -.5); c.stroke(); },
    S(c) { c.beginPath(); c.arc(.03, 0, .47, 0, TAU); c.fill(); c.globalCompositeOperation = 'destination-out'; c.beginPath(); c.arc(.27, -.05, .39, 0, TAU); c.fill(); c.globalCompositeOperation = 'source-over'; },
    G(c) { c.beginPath(); c.arc(0, 0, .37, 0, TAU); c.stroke(); c.beginPath(); c.arc(0, 0, .11, 0, TAU); c.fill(); },
  };
  function glyphMask(sym, S, unit, lw) {
    const cv = mk(S), c = cv.getContext('2d');
    c.translate(S / 2, S / 2); c.scale(unit, unit);
    c.lineWidth = lw; c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = c.fillStyle = '#fff';
    GLYPH[sym](c);
    return cv;
  }
  function tinted(mask, fill) {
    const cv = mk(mask.width), c = cv.getContext('2d');
    c.drawImage(mask, 0, 0); c.globalCompositeOperation = 'source-in';
    if (Array.isArray(fill)) { const g = c.createLinearGradient(0, cv.height * .2, 0, cv.height * .8); g.addColorStop(0, fill[0]); g.addColorStop(1, fill[1]); c.fillStyle = g; } else c.fillStyle = fill;
    c.fillRect(0, 0, cv.width, cv.height);
    return cv;
  }

  // Seven outlines that can be told apart with no colour at all: block, hexagon, cog, rosette, disc, scalloped disc, sunburst.
  function shapePath(c, shape, R) {
    c.beginPath();
    const poly = (n, f) => { for (let k = 0; k <= n; k++) { const a = k / n * TAU, r = f(a, k); c[k ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); } c.closePath(); };
    if (shape === 'squircle') poly(96, a => { const ca = Math.cos(a), sa = Math.sin(a); return R * .93 / Math.pow(ca * ca * ca * ca + sa * sa * sa * sa, .25); });
    else if (shape === 'hex') { for (let k = 0; k < 6; k++) { const a = k * PI / 3; c[k ? 'lineTo' : 'moveTo'](Math.cos(a) * R * 1.09, Math.sin(a) * R * 1.09); } c.closePath(); }
    else if (shape === 'octa') { for (let k = 0; k < 8; k++) { const a = PI / 8 + k * PI / 4; c[k ? 'lineTo' : 'moveTo'](Math.cos(a) * R * 1.05, Math.sin(a) * R * 1.05); } c.closePath(); }
    else if (shape === 'cog') {
      const n = 10, w = TAU / n;
      for (let k = 0; k < n; k++) { const a = k * w; for (const [da, rr] of [[-.21, 1.02], [.21, 1.02], [.31, .86], [.69, .86]]) { const x = Math.cos(a + da * w) * R * rr, y = Math.sin(a + da * w) * R * rr; if (!k && da === -.21) c.moveTo(x, y); else c.lineTo(x, y); } }
      c.closePath();
    } else if (shape === 'rosette') poly(120, a => R * (0.93 + 0.07 * Math.cos(a * 8)));
    else if (shape === 'scallop') poly(160, a => R * (0.962 + 0.038 * Math.cos(a * 16)));
    else if (shape === 'rays') { const n = 12; for (let k = 0; k < n * 2; k++) { const a = k * PI / n - PI / 2, r = R * (k % 2 ? 0.79 : 1.05); c[k ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); } c.closePath(); }
    else c.arc(0, 0, R, 0, TAU);
  }
  function sheen(c, a0, alphaW, alphaB) {
    const g = conic(c, a0, 0, 0);
    if (!g) return null;
    const w = `rgba(255,255,255,${alphaW})`, b = `rgba(0,0,0,${alphaB})`, z = 'rgba(128,128,128,0)';
    [[0, w], [.11, z], [.25, b], [.39, z], [.5, w], [.61, z], [.75, b], [.89, z], [1, w]].forEach(([p, col]) => g.addColorStop(p, col));
    return g;
  }

  function drawMedal(c, S, sym) {
    const m = METAL[sym], small = S < 80, rnd = seeded(sym.charCodeAt(0) * 9973 + 7);
    const R = S * 0.452 * m.size, Rf = R * (small ? Math.min(.9, m.face + .05) : m.face);
    let g;
    // cast shadow
    c.save(); c.shadowColor = 'rgba(0,0,0,.72)'; c.shadowBlur = S * 0.075; c.shadowOffsetY = S * 0.05; shapePath(c, m.shape, R * .96); c.fillStyle = m.lo; c.fill(); c.restore();
    // rim
    g = c.createLinearGradient(-R, -R, R, R); g.addColorStop(0, m.hi); g.addColorStop(.45, m.mid); g.addColorStop(1, m.lo);
    shapePath(c, m.shape, R); c.fillStyle = g; c.fill();
    const sh = sheen(c, -PI * .75, m.tex === 'hammer' ? .16 : .34, m.tex === 'hammer' ? .2 : .26);
    if (sh) { c.fillStyle = sh; c.fill(); }
    c.lineWidth = Math.max(1, S * 0.012); c.strokeStyle = m.edge; c.stroke();
    // rim details per shape
    if (m.shape === 'scallop') {
      const n = small ? 16 : 32, rb = R * .885, br = R * (small ? .06 : .045);
      for (let k = 0; k < n; k++) { const a = k / n * TAU, x = Math.cos(a) * rb, y = Math.sin(a) * rb; g = c.createRadialGradient(x - br * .4, y - br * .4, 0, x, y, br); g.addColorStop(0, '#fff'); g.addColorStop(.6, m.mid); g.addColorStop(1, m.lo); c.fillStyle = g; c.beginPath(); c.arc(x, y, br, 0, TAU); c.fill(); }
    } else if (m.shape === 'cog' && !small) {
      for (let k = 0; k < 5; k++) { const a = k / 5 * TAU + TAU / 20, x = Math.cos(a) * R * .79, y = Math.sin(a) * R * .79, br = R * .04; c.fillStyle = 'rgba(0,0,0,.55)'; c.beginPath(); c.arc(x, y, br, 0, TAU); c.fill(); c.fillStyle = 'rgba(255,200,170,.45)'; c.beginPath(); c.arc(x - br * .3, y - br * .3, br * .45, 0, TAU); c.fill(); }
    } else if (m.shape === 'rays' && !small) {
      c.lineWidth = S * .008; c.strokeStyle = 'rgba(90,50,0,.45)'; c.beginPath();
      for (let k = 0; k < 12; k++) { const a = k * PI / 6 - PI / 2; c.moveTo(Math.cos(a) * R * .72, Math.sin(a) * R * .72); c.lineTo(Math.cos(a) * R * .98, Math.sin(a) * R * .98); }
      c.stroke();
    } else if (m.shape === 'hex' && !small) {
      c.lineWidth = S * .01; c.strokeStyle = 'rgba(40,46,28,.5)'; shapePath(c, 'hex', R * .88); c.stroke(); c.strokeStyle = 'rgba(255,255,235,.5)'; c.lineWidth = S * .006; shapePath(c, 'hex', R * .855); c.stroke();
    } else if (m.shape === 'rosette' && !small) {
      for (let k = 0; k < 8; k++) { const a = k / 8 * TAU, x = Math.cos(a) * R * .885, y = Math.sin(a) * R * .885; c.fillStyle = 'rgba(70,22,0,.55)'; c.beginPath(); c.arc(x, y, R * .032, 0, TAU); c.fill(); }
    } else if (sym === 'L' && !small) {
      c.lineWidth = S * .01; c.strokeStyle = 'rgba(0,0,0,.6)'; shapePath(c, 'squircle', R * .9); c.stroke(); c.strokeStyle = 'rgba(170,195,240,.32)'; c.lineWidth = S * .006; shapePath(c, 'squircle', R * .875); c.stroke();
      for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const x = dx * R * .76, y = dy * R * .76, br = R * .045; c.fillStyle = 'rgba(0,0,0,.6)'; c.beginPath(); c.arc(x, y, br, 0, TAU); c.fill(); c.fillStyle = 'rgba(170,195,240,.5)'; c.beginPath(); c.arc(x - br * .3, y - br * .3, br * .45, 0, TAU); c.fill(); }
    }
    // the step down into the face
    g = c.createLinearGradient(-Rf, -Rf, Rf, Rf); g.addColorStop(0, m.lo); g.addColorStop(.5, m.mid); g.addColorStop(1, m.hi);
    c.beginPath(); c.arc(0, 0, Rf * 1.065, 0, TAU); c.fillStyle = g; c.fill();
    // face
    c.save(); c.beginPath(); c.arc(0, 0, Rf, 0, TAU); c.clip();
    const fc = m.faceCol || [m.hi, m.mid, m.lo];
    g = c.createRadialGradient(-Rf * .35, -Rf * .42, Rf * .04, 0, 0, Rf * 1.12); g.addColorStop(0, fc[0]); g.addColorStop(.42, fc[1]); g.addColorStop(1, fc[2]);
    c.fillStyle = g; c.fillRect(-Rf, -Rf, Rf * 2, Rf * 2);
    if (m.tex === 'brush' || m.tex === 'polish') {
      const s2 = sheen(c, -PI * .75, m.tex === 'brush' ? .4 : .26, m.tex === 'brush' ? .22 : .12);
      if (s2) { c.fillStyle = s2; c.fillRect(-Rf, -Rf, Rf * 2, Rf * 2); }
      if (m.tex === 'brush' && !small) {
        c.lineWidth = Math.max(.5, S * .0035);
        for (let k = 0; k < 90; k++) { const r = Rf * (.1 + .9 * rnd()), a0 = rnd() * TAU; c.strokeStyle = rnd() < .5 ? 'rgba(255,255,255,.13)' : 'rgba(0,0,0,.1)'; c.beginPath(); c.arc(0, 0, r, a0, a0 + .3 + rnd() * 1.7); c.stroke(); }
      }
    } else if (m.tex === 'hammer') {
      const n = small ? 9 : 30;
      for (let k = 0; k < n; k++) {
        const a = rnd() * TAU, d = Math.sqrt(rnd()) * Rf * .95, x = Math.cos(a) * d, y = Math.sin(a) * d, r = Rf * (.1 + .13 * rnd());
        g = c.createRadialGradient(x - r * .35, y - r * .35, 0, x, y, r); g.addColorStop(0, 'rgba(0,0,0,.3)'); g.addColorStop(.7, 'rgba(0,0,0,.08)'); g.addColorStop(1, 'rgba(0,0,0,0)');
        c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill();
        c.strokeStyle = sym === 'I' ? 'rgba(255,170,130,.2)' : 'rgba(200,220,255,.2)'; c.lineWidth = Math.max(.6, S * .006); c.beginPath(); c.arc(x, y, r * .82, .15 * PI, .75 * PI); c.stroke();
      }
    } else if (m.tex === 'mirror') {
      // liquid mirror: bright sky above a dark curved horizon
      g = c.createLinearGradient(0, -Rf, 0, Rf * .2); g.addColorStop(0, '#f2ffff'); g.addColorStop(.55, '#a4d4da'); g.addColorStop(1, '#f8ffff');
      c.fillStyle = g; c.fillRect(-Rf, -Rf, Rf * 2, Rf * 2);
      c.beginPath(); c.moveTo(-Rf * 1.1, Rf * .02); c.quadraticCurveTo(0, Rf * .46, Rf * 1.1, Rf * .02); c.lineTo(Rf * 1.1, Rf * 1.1); c.lineTo(-Rf * 1.1, Rf * 1.1); c.closePath();
      g = c.createLinearGradient(0, 0, 0, Rf); g.addColorStop(0, '#0c3440'); g.addColorStop(.45, '#33808c'); g.addColorStop(1, '#b4e6ea');
      c.fillStyle = g; c.fill();
      c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = Math.max(1, S * .012); c.beginPath(); c.moveTo(-Rf * 1.1, Rf * .02); c.quadraticCurveTo(0, Rf * .46, Rf * 1.1, Rf * .02); c.stroke();
      g = c.createRadialGradient(0, 0, Rf * .55, 0, 0, Rf); g.addColorStop(0, 'rgba(0,30,40,0)'); g.addColorStop(1, 'rgba(0,30,40,.5)'); c.fillStyle = g; c.fillRect(-Rf, -Rf, Rf * 2, Rf * 2);
    }
    c.restore();
    // engraved glyph: lit lower edge, shadowed upper edge, then the ink / inlay
    const unit = Rf * (small ? 1.34 : 1.24), lw = small ? .17 : .135, e = Math.max(.8, S * .011);
    const mask = glyphMask(sym, S, unit, lw);
    c.drawImage(tinted(mask, m.gHi), -S / 2 + e, -S / 2 + e);
    c.drawImage(tinted(mask, m.gLo), -S / 2 - e * .8, -S / 2 - e * .8);
    c.drawImage(tinted(mask, m.ink), -S / 2, -S / 2);
    // specular highlight
    c.save(); c.beginPath(); c.arc(0, 0, Rf, 0, TAU); c.clip();
    c.translate(-Rf * .3, -Rf * .5); c.rotate(-.55); c.scale(1, .42);
    g = c.createRadialGradient(0, 0, 0, 0, 0, Rf * .7); g.addColorStop(0, `rgba(255,255,255,${m.spec})`); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, Rf * .7, 0, TAU); c.fill(); c.restore();
    // rim light
    c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = Math.max(.8, S * .01); c.lineCap = 'round';
    c.beginPath(); c.arc(0, 0, Rf * 1.03, PI * 1.08, PI * 1.55); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,.22)'; c.beginPath(); c.arc(0, 0, Rf * 1.03, PI * .1, PI * .42); c.stroke();
  }

  /* Wild: a comet, the guiding star. */
  function starPath(c, x, y, long, short, waist) {
    c.beginPath();
    for (let k = 0; k < 8; k++) {
      const a = k * PI / 4 - PI / 2, r = k % 2 ? short : long * (k % 4 === 0 ? 1.1 : .9);
      c[k ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r, y + Math.sin(a) * r);
      c.lineTo(x + Math.cos(a + PI / 8) * waist, y + Math.sin(a + PI / 8) * waist);
    }
    c.closePath();
  }
  function tailPath(c, p0, p1, p2, w0) {
    const L = [], Rr = [];
    for (let k = 0; k <= 24; k++) {
      const t = k / 24, u = 1 - t, x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
      let dx = 2 * u * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]), dy = 2 * u * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]); const d = Math.hypot(dx, dy) || 1; dx /= d; dy /= d;
      const w = w0 * Math.pow(u, 1.15);
      L.push([x - dy * w, y + dx * w]); Rr.push([x + dy * w, y - dx * w]);
    }
    c.beginPath(); L.forEach((p, i) => c[i ? 'lineTo' : 'moveTo'](p[0], p[1])); Rr.reverse().forEach(p => c.lineTo(p[0], p[1])); c.closePath();
  }
  function drawComet(c, S) {
    const x = S * .07, y = -S * .075, rnd = seeded(31);
    let g = c.createRadialGradient(x, y, 0, x, y, S * .42); g.addColorStop(0, 'rgba(225,240,255,.95)'); g.addColorStop(.3, 'rgba(150,195,255,.5)'); g.addColorStop(.7, 'rgba(100,150,255,.16)'); g.addColorStop(1, 'rgba(90,140,255,0)');
    c.fillStyle = g; c.beginPath(); c.arc(x, y, S * .42, 0, TAU); c.fill();
    const end = [-S * .45, S * .42];
    for (const [ctl, w, a, col] of [[[-S * .03, S * .31], S * .19, 1, '#cfe6ff'], [[S * .12, S * .38], S * .085, .85, '#ffe9a8'], [[-S * .24, S * .15], S * .075, .75, '#ffffff']]) {
      g = c.createLinearGradient(x, y, end[0], end[1]); g.addColorStop(0, rgba('#ffffff', a)); g.addColorStop(.4, rgba(col, a * .8)); g.addColorStop(1, rgba(col, 0));
      c.fillStyle = g; tailPath(c, [x, y], ctl, end, w); c.fill();
    }
    for (let k = 0; k < 10; k++) { const t = .3 + rnd() * .65, px = x + (end[0] - x) * t + (rnd() - .5) * S * .2, py = y + (end[1] - y) * t + (rnd() - .5) * S * .2, z = S * (.012 + rnd() * .02); c.fillStyle = 'rgba(255,255,255,' + (.95 - t * .5).toFixed(2) + ')'; starPath(c, px, py, z * 2, z * .8, z * .35); c.fill(); }
    c.save(); c.shadowColor = 'rgba(255,214,120,.95)'; c.shadowBlur = S * .1;
    g = c.createRadialGradient(x, y, 0, x, y, S * .4); g.addColorStop(0, '#ffffff'); g.addColorStop(.2, '#fffbe2'); g.addColorStop(.5, '#ffd562'); g.addColorStop(1, '#ee9412');
    starPath(c, x, y, S * .37, S * .175, S * .07); c.fillStyle = g; c.fill(); c.restore();
    c.lineWidth = Math.max(.8, S * .013); c.strokeStyle = 'rgba(112,58,0,.95)'; c.lineJoin = 'round'; starPath(c, x, y, S * .37, S * .175, S * .07); c.stroke();
    c.fillStyle = 'rgba(255,255,255,.96)'; starPath(c, x, y, S * .235, S * .09, S * .036); c.fill();
    g = c.createRadialGradient(x, y, 0, x, y, S * .12); g.addColorStop(0, '#fff'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.beginPath(); c.arc(x, y, S * .12, 0, TAU); c.fill();
  }

  /* Scatter: an astrolabe. */
  function brass(c, x0, y0, x1, y1) { const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, '#fff0b8'); g.addColorStop(.3, '#e9c264'); g.addColorStop(.62, '#a87a2a'); g.addColorStop(1, '#5a3a0c'); return g; }
  function drawAstrolabe(c, S) {
    const R = S * .395, small = S < 80;
    let g;
    c.translate(0, S * .055);
    // suspension ring and throne
    c.lineWidth = S * .05; c.strokeStyle = '#3d2706'; c.beginPath(); c.arc(0, -R - S * .075, S * .048, 0, TAU); c.stroke();
    c.lineWidth = S * .03; c.strokeStyle = brass(c, -S * .06, -R - S * .13, S * .06, -R); c.stroke();
    c.beginPath(); c.moveTo(-S * .135, -R + S * .035); c.quadraticCurveTo(-S * .05, -R - S * .01, 0, -R - S * .055); c.quadraticCurveTo(S * .05, -R - S * .01, S * .135, -R + S * .035); c.closePath();
    c.fillStyle = brass(c, -S * .1, -R - S * .06, S * .1, -R + S * .04); c.fill(); c.lineWidth = Math.max(.8, S * .012); c.strokeStyle = '#3d2706'; c.stroke();
    // limb
    c.save(); c.shadowColor = 'rgba(0,0,0,.65)'; c.shadowBlur = S * .06; c.shadowOffsetY = S * .03; c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fillStyle = '#5a3a0c'; c.fill(); c.restore();
    c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fillStyle = brass(c, -R, -R, R, R); c.fill();
    const sh = sheen(c, -PI * .75, .4, .28); if (sh) { c.fillStyle = sh; c.fill(); }
    c.lineWidth = Math.max(1, S * .012); c.strokeStyle = '#3d2706'; c.stroke();
    c.strokeStyle = 'rgba(55,32,4,.8)'; c.lineWidth = Math.max(.7, S * .008); c.beginPath();
    const nt = small ? 24 : 48;
    for (let k = 0; k < nt; k++) { const a = k / nt * TAU, r0 = R * (k % 4 ? .875 : .83); c.moveTo(Math.cos(a) * r0, Math.sin(a) * r0); c.lineTo(Math.cos(a) * R * .965, Math.sin(a) * R * .965); }
    c.stroke();
    // plate: violet enamel
    const Rp = R * .79;
    g = c.createLinearGradient(-Rp, -Rp, Rp, Rp); g.addColorStop(0, '#3d2706'); g.addColorStop(1, '#f4d68a'); c.beginPath(); c.arc(0, 0, Rp * 1.045, 0, TAU); c.fillStyle = g; c.fill();
    c.save(); c.beginPath(); c.arc(0, 0, Rp, 0, TAU); c.clip();
    g = c.createRadialGradient(-Rp * .25, -Rp * .3, 0, 0, 0, Rp * 1.1); g.addColorStop(0, '#9a5cff'); g.addColorStop(.45, '#4a1aa6'); g.addColorStop(1, '#1a0640');
    c.fillStyle = g; c.fillRect(-Rp, -Rp, Rp * 2, Rp * 2);
    c.strokeStyle = 'rgba(255,214,130,.55)'; c.lineWidth = Math.max(.6, S * .007);
    for (const r of [.62, .36]) { c.beginPath(); c.arc(0, 0, Rp * r, 0, TAU); c.stroke(); }
    for (const r of [.5, .82, 1.16]) { c.beginPath(); c.arc(0, Rp * .62, Rp * r, 0, TAU); c.stroke(); }
    c.restore();
    // rete: an off-centre ring with star pointers
    const ry = -Rp * .2, rr = Rp * .47;
    c.lineWidth = Rp * .13; c.strokeStyle = '#3d2706'; c.beginPath(); c.arc(0, ry, rr, 0, TAU); c.stroke();
    c.lineWidth = Rp * .085; c.strokeStyle = brass(c, -rr, ry - rr, rr, ry + rr); c.stroke();
    for (const a of [-2.5, -1.1, .15, 1.2, 2.6, 3.6]) {
      const x0 = Math.cos(a) * rr, y0 = ry + Math.sin(a) * rr, x1 = Math.cos(a + .35) * Rp * .86, y1 = Math.sin(a + .35) * Rp * .8 + ry * .3;
      c.lineWidth = Rp * .06; c.strokeStyle = '#d9aa4a'; c.lineCap = 'round'; c.beginPath(); c.moveTo(x0, y0); c.quadraticCurveTo(x0 * 1.25, y0 * 1.1 + ry * .1, x1, y1); c.stroke();
      c.fillStyle = '#fff6cf'; starPath(c, x1, y1, Rp * .12, Rp * .05, Rp * .028); c.fill();
    }
    // alidade (the sighting rule) and the ruby pin
    c.save(); c.rotate(-.62);
    c.beginPath(); c.moveTo(-R * .97, 0); c.lineTo(-R * .8, -R * .085); c.lineTo(R * .8, -R * .085); c.lineTo(R * .97, 0); c.lineTo(R * .8, R * .085); c.lineTo(-R * .8, R * .085); c.closePath();
    c.fillStyle = brass(c, 0, -R * .1, 0, R * .1); c.fill(); c.lineWidth = Math.max(.8, S * .011); c.strokeStyle = '#3d2706'; c.lineJoin = 'round'; c.stroke();
    c.fillStyle = '#3d2706'; for (const k of [-.62, .62]) c.fillRect(R * k - R * .035, -R * .14, R * .07, R * .28);
    c.fillStyle = '#f4d68a'; for (const k of [-.62, .62]) c.fillRect(R * k - R * .018, -R * .12, R * .036, R * .24);
    c.restore();
    c.beginPath(); c.arc(0, 0, R * .15, 0, TAU); c.fillStyle = brass(c, -R * .15, -R * .15, R * .15, R * .15); c.fill(); c.strokeStyle = '#3d2706'; c.lineWidth = Math.max(.8, S * .01); c.stroke();
    g = c.createRadialGradient(-R * .035, -R * .04, 0, 0, 0, R * .105); g.addColorStop(0, '#ffe3e8'); g.addColorStop(.4, '#ff3f72'); g.addColorStop(1, '#7c0828');
    c.beginPath(); c.arc(0, 0, R * .1, 0, TAU); c.fillStyle = g; c.fill();
    c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = Math.max(.8, S * .012); c.lineCap = 'round'; c.beginPath(); c.arc(0, 0, R * .93, PI * 1.1, PI * 1.5); c.stroke();
  }

  function sprite(sym, px) {
    const cv = mk(px), c = cv.getContext('2d');
    c.translate(px / 2, px / 2);
    if (sym === 'W') drawComet(c, px); else if (sym === 'A') drawAstrolabe(c, px); else if (METAL[sym]) drawMedal(c, px, sym);
    return cv;
  }
  // soft additive glow and a four-point glint
  function glow(px, hex) {
    const cv = mk(px), c = cv.getContext('2d'), g = c.createRadialGradient(px / 2, px / 2, 0, px / 2, px / 2, px / 2);
    g.addColorStop(0, rgba(hex, .95)); g.addColorStop(.35, rgba(hex, .4)); g.addColorStop(1, rgba(hex, 0)); c.fillStyle = g; c.fillRect(0, 0, px, px);
    return cv;
  }
  function spark(px) {
    const cv = mk(px), c = cv.getContext('2d'), h = px / 2;
    let g = c.createRadialGradient(h, h, 0, h, h, h); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(.25, 'rgba(255,240,200,.35)'); g.addColorStop(1, 'rgba(255,240,200,0)'); c.fillStyle = g; c.fillRect(0, 0, px, px);
    c.fillStyle = '#fff'; c.beginPath();
    for (let k = 0; k < 4; k++) { const a = k * PI / 2; c.lineTo(h + Math.cos(a) * h * .96, h + Math.sin(a) * h * .96); c.lineTo(h + Math.cos(a + PI / 4) * h * .09, h + Math.sin(a + PI / 4) * h * .09); }
    c.closePath(); c.fill();
    return cv;
  }
  // a small lit sphere in a metal's colour (orbiting bodies, dial planets)
  function body(px, sym) {
    const m = METAL[sym], cv = mk(px), c = cv.getContext('2d'), h = px / 2, r = h * .78;
    let g = c.createRadialGradient(h, h, r * .6, h, h, h); g.addColorStop(0, rgba(m.hi, .35)); g.addColorStop(1, rgba(m.hi, 0)); c.fillStyle = g; c.fillRect(0, 0, px, px);
    g = c.createRadialGradient(h - r * .35, h - r * .4, r * .05, h, h, r); g.addColorStop(0, m.hi); g.addColorStop(.5, m.mid); g.addColorStop(1, m.lo);
    c.fillStyle = g; c.beginPath(); c.arc(h, h, r, 0, TAU); c.fill();
    c.strokeStyle = rgba(m.edge, .8); c.lineWidth = Math.max(.6, px * .03); c.stroke();
    return cv;
  }

  /* ---------- Sky, rings, plate ---------- */
  const PAL = {
    night: { top: '#03050f', bot: '#0b1438', halo: '#2b49c9', neb: ['#2444c4', '#5b2bb0', '#157a9c', '#3536c8', '#1c2f8f'], plate: ['#101a44', '#070b22'], well: '#04071a', leaf: '#e6c27a', star: ['#ffffff', '#cfe0ff', '#fff0cf'], frame: ['#fff0b8', '#d9ae52', '#7a5519', '#e8c672', '#5a3c0e'], ink: 'rgba(36,20,2,.8)' },
    retro: { top: '#140210', bot: '#2a0832', halo: '#d02a62', neb: ['#b8183f', '#7b1b9f', '#d2452c', '#5c1273', '#a01256'], plate: ['#3a0c30', '#170410'], well: '#12020c', leaf: '#ffd08a', star: ['#ffffff', '#ffd6e0', '#ffe9c4'], frame: ['#ffe0c4', '#e08e62', '#6a2414', '#f0b088', '#4a140a'], ink: 'rgba(46,8,4,.82)' },
    dawn: { top: '#1c3ad0', bot: '#5a2ccc', halo: '#ffcf70', neb: ['#3a7cff', '#8a4cff', '#2fc0e0', '#b060ff', '#ffb347'], plate: ['#16226a', '#0c1244'], well: '#080c30', leaf: '#fff0b8', star: ['#ffffff', '#e4edff', '#fff3d6'], frame: ['#fff0b8', '#d9ae52', '#7a5519', '#e8c672', '#5a3c0e'], ink: 'rgba(36,20,2,.8)' },
  };
  const BRASS = [[0, '#6b4c1c'], [.055, '#ecd391'], [.1, '#9a7430'], [.25, '#46300f'], [.4, '#a8843a'], [.48, '#fdeebb'], [.535, '#b08a3c'], [.7, '#3c280b'], [.85, '#9c7832'], [.94, '#dfc47e'], [1, '#6b4c1c']];
  const ROSE = [[0, '#9a4a2c'], [.055, '#ffe6cc'], [.1, '#dc8a5e'], [.25, '#5e2012'], [.4, '#e09468'], [.48, '#fff4e6'], [.535, '#e8a078'], [.7, '#50180c'], [.85, '#d48a5e'], [.94, '#ffd4b0'], [1, '#9a4a2c']];
  // The orrery around the grid, in units of the grid size, measured from the grid centre.
  //   band: a brass ring (with engraved ticks when it has n)   scale: gold-leaf ticks between two hairlines
  //   beads: gold dots   line: a hairline.   v = how fast (and which way) its engraving turns.
  function ringDefs(small) {
    return small
      ? [{ band: [.56, .59] }, { scale: [.6, .642], n: 60, major: 5, v: 1 }, { band: [.80, .848], n: 48, major: 4, v: -.7 }, { line: .863 }, { band: [1.12, 1.165], n: 72, major: 6, v: .4 }]
      : [{ band: [.553, .58] }, { scale: [.589, .625], n: 120, major: 10, v: 1 }, { line: .631 },
        { band: [.714, .73] }, { beads: .746, n: 48, v: -1.5 },
        { band: [.812, .866], n: 96, major: 8, v: .6 }, { line: .876 }, { line: .883 },
        { band: [.998, 1.014] }, { scale: [1.023, 1.054], n: 180, major: 15, v: -1 }, { line: 1.06 },
        { band: [1.136, 1.194], n: 144, major: 12, v: .35 }, { line: 1.204 }, { line: 1.211 }];
  }
  const ORBITS = [{ r: .672, s: 'S', v: 2.4, a: .6, z: .018 }, { r: .78, s: 'I', v: -1.5, a: 2.1, z: .02 }, { r: .78, s: 'Q', v: -1.5, a: 4.4, z: .015 }, { r: .94, s: 'G', v: .9, a: 3.7, z: .027 }, { r: 1.098, s: 'L', v: -.6, a: 1.2, z: .022 }, { r: 1.098, s: 'C', v: -.6, a: 4.0, z: .019 }];

  /* The rings. Drawn every frame: each brass band is shaded by a conic gradient that turns with `light`, so
   * the metal catches a moving light; a cast shadow, a centre channel and edge lines give it thickness.
   * mix = 0 night brass .. 1 RETROGRADE rose brass. */
  function drawRings(c, geo, small, rot, light, mix = 0, still = false) {
    const { cx, cy, G, k } = geo, leaf = mix > .5 ? '#ffd08a' : '#e6c27a', stops = mix > .5 ? ROSE : BRASS;
    c.lineCap = 'butt';
    c.strokeStyle = rgba(leaf, .28); c.lineWidth = Math.max(.75, k * .9); c.setLineDash([k * 1.5, k * 4]);
    for (const o of ORBITS) { if (small && o.r > .8) continue; c.beginPath(); c.arc(cx, cy, o.r * G, 0, TAU); c.stroke(); }
    c.setLineDash([]);
    const defs = ringDefs(small);
    for (let i = 0; i < defs.length; i++) {
      const r = defs[i];
      if (r.line || r.scale) {
        c.strokeStyle = rgba(leaf, .55); c.lineWidth = Math.max(.75, k);
        for (const rr of r.line ? [r.line] : r.scale) { c.beginPath(); c.arc(cx, cy, rr * G, 0, TAU); c.stroke(); }
        continue;
      }
      if (!r.band) continue;
      const r1 = r.band[0] * G, r2 = r.band[1] * G, w = r2 - r1, rm = (r1 + r2) / 2;
      c.strokeStyle = 'rgba(0,0,0,.5)'; c.lineWidth = w + k * 3; c.beginPath(); c.arc(cx, cy + G * .009, rm, 0, TAU); c.stroke();
      const g = conic(c, light * (i % 2 ? -1 : 1) + i * 1.1, cx, cy);
      if (g) stops.forEach(([p, col]) => g.addColorStop(p, col));
      c.strokeStyle = g || '#a8843a'; c.lineWidth = w; c.beginPath(); c.arc(cx, cy, rm, 0, TAU); c.stroke();
      if (w > k * 6) { c.strokeStyle = 'rgba(30,14,0,.3)'; c.lineWidth = w * .52; c.beginPath(); c.arc(cx, cy, rm, 0, TAU); c.stroke(); }
      c.lineWidth = Math.max(.75, k); c.strokeStyle = 'rgba(24,12,2,.9)'; c.beginPath(); c.arc(cx, cy, r2, 0, TAU); c.stroke(); c.beginPath(); c.arc(cx, cy, r1, 0, TAU); c.stroke();
      c.strokeStyle = 'rgba(255,246,215,.55)'; c.lineWidth = Math.max(.6, k * .8); c.beginPath(); c.arc(cx, cy, r2 - k * 1.5, 0, TAU); c.stroke();
      if (w > k * 6) { c.strokeStyle = 'rgba(255,246,215,.22)'; c.beginPath(); c.arc(cx, cy, r1 + k * 1.6, 0, TAU); c.stroke(); }
    }
    if (!still) drawTicks(c, geo, small, rot, leaf);
    c.globalCompositeOperation = 'lighter';
    for (let i = 0; i < defs.length; i++) {
      const r = defs[i]; if (!r.band) continue;
      const rm = (r.band[0] + r.band[1]) / 2 * G, w = (r.band[1] - r.band[0]) * G, st = light * (i % 2 ? -1 : 1) + i * 1.1, z = Math.max(w * 2.2, k * 7);
      for (const fr of [.055, .48]) { const a = st + fr * TAU, x = cx + Math.cos(a) * rm, y = cy + Math.sin(a) * rm, g = c.createRadialGradient(x, y, 0, x, y, z); g.addColorStop(0, 'rgba(255,250,228,.8)'); g.addColorStop(.3, 'rgba(255,236,180,.28)'); g.addColorStop(1, 'rgba(255,220,150,0)'); c.fillStyle = g; c.beginPath(); c.arc(x, y, z, 0, TAU); c.fill(); }
    }
    c.globalCompositeOperation = 'source-over';
  }
  // The turning parts of the rings (ticks, beads).
  function drawTicks(c, geo, small, rot, leaf) {
    const { cx, cy, G } = geo, lf = leaf || '#e6c27a';
    c.lineCap = 'butt';
    for (const r of ringDefs(small)) {
      if (r.v == null) continue;
      const a0 = rot * r.v;
      if (r.beads) {
        const rm = r.beads * G, br = Math.max(.9, G * .0042);
        c.fillStyle = rgba(lf, .85); c.beginPath();
        for (let i = 0; i < r.n; i++) { const a = a0 + i / r.n * TAU, x = cx + Math.cos(a) * rm, y = cy + Math.sin(a) * rm, z = i % 4 ? br : br * 1.9; c.moveTo(x + z, y); c.arc(x, y, z, 0, TAU); }
        c.fill(); continue;
      }
      const on = !!r.band, [ra, rb] = r.band || r.scale, w = rb - ra;
      c.strokeStyle = on ? 'rgba(30,16,2,.9)' : rgba(lf, .8); c.lineWidth = Math.max(.8, G * (on ? .0026 : .0019));
      c.beginPath();
      for (let i = 0; i < r.n; i++) {
        const a = a0 + i / r.n * TAU, big = i % r.major === 0, mid = r.major % 2 === 0 && i % (r.major / 2) === 0;
        const ri = (ra + w * (on ? (big ? .16 : mid ? .36 : .54) : .06)) * G, ro = (on ? rb - w * .16 : ra + w * (big ? .94 : mid ? .66 : .42)) * G, ca = Math.cos(a), sa = Math.sin(a);
        c.moveTo(cx + ca * ri, cy + sa * ri); c.lineTo(cx + ca * ro, cy + sa * ro);
      }
      c.stroke();
      if (!on) { c.fillStyle = rgba(lf, .95); c.beginPath(); for (let i = 0; i < r.n; i += r.major) { const a = a0 + i / r.n * TAU, x = cx + Math.cos(a) * rb * G, y = cy + Math.sin(a) * rb * G, z = Math.max(1, G * .004); c.moveTo(x + z, y); c.arc(x, y, z, 0, TAU); } c.fill(); }
    }
  }
  function drawBands(c, geo, small, leaf) { drawRings(c, geo, small, .37, -.7, leaf === '#ffd08a' ? 1 : 0, true); }

  // Far layer: the night itself and its nebulae (opaque).
  function drawNebula(c, W, H, pal, geo, opt = {}) {
    const p = PAL[pal], rnd = seeded(opt.seed || 4177), m = Math.max(W, H), fog = opt.fog || 1;
    let g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, p.top); g.addColorStop(1, p.bot); c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 12; i++) {
      const x = rnd() * W, y = rnd() * H, r = m * (.14 + rnd() * .3), col = p.neb[i % p.neb.length];
      g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, rgba(col, .22 * fog)); g.addColorStop(.5, rgba(col, .08 * fog)); g.addColorStop(1, rgba(col, 0));
      c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
    }
    g = c.createRadialGradient(geo.cx, geo.cy, 0, geo.cx, geo.cy, geo.G * 1.15); g.addColorStop(0, rgba(p.halo, .36 * fog)); g.addColorStop(.55, rgba(p.halo, .1 * fog)); g.addColorStop(1, rgba(p.halo, 0));
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    // a band of faint milky light across the sky
    c.save(); c.translate(geo.cx, geo.cy); c.rotate(-.5); c.scale(1, .22);
    g = c.createRadialGradient(0, 0, 0, 0, 0, m * .8); g.addColorStop(0, rgba(p.star[1], .1 * fog)); g.addColorStop(1, rgba(p.star[1], 0)); c.fillStyle = g; c.beginPath(); c.arc(0, 0, m * .8, 0, TAU); c.fill(); c.restore();
    c.globalCompositeOperation = 'source-over';
    // distant dust: many tiny dim stars
    const n = Math.round(clamp(W * H / (900 * (geo.k || 1) * (geo.k || 1)), 80, 1400));
    for (let i = 0; i < n; i++) { c.fillStyle = rgba(p.star[i % 3], .08 + rnd() * .25); c.fillRect(rnd() * W, rnd() * H, (geo.k || 1) * (.5 + rnd() * .6), (geo.k || 1) * (.5 + rnd() * .6)); }
  }
  // Middle layer (transparent): brighter stars, gold-leaf chart lines and invented constellations.
  function drawStars(c, W, H, pal, geo, opt = {}) {
    const p = PAL[pal], rnd = seeded(opt.seed || 977), k = geo.k || 1;
    const n = Math.round(clamp(W * H / (3400 * k * k), 30, 420));
    for (let i = 0; i < n; i++) {
      const x = rnd() * W, y = rnd() * H, s = (.4 + Math.pow(rnd(), 3) * 1.5) * k, a = .3 + rnd() * .65;
      if (s > 1.1 * k) { const gz = s * 5, g = c.createRadialGradient(x, y, 0, x, y, gz); g.addColorStop(0, rgba(p.star[i % 3], a * .5)); g.addColorStop(1, rgba(p.star[i % 3], 0)); c.fillStyle = g; c.fillRect(x - gz, y - gz, gz * 2, gz * 2); }
      c.fillStyle = rgba(p.star[i % 3], a); c.beginPath(); c.arc(x, y, s, 0, TAU); c.fill();
      if (s > 1.25 * k) { c.strokeStyle = rgba(p.star[i % 3], a * .5); c.lineWidth = k * .6; c.beginPath(); c.moveTo(x - s * 3.4, y); c.lineTo(x + s * 3.4, y); c.moveTo(x, y - s * 3.4); c.lineTo(x, y + s * 3.4); c.stroke(); }
    }
    c.strokeStyle = rgba(p.leaf, .16); c.lineWidth = Math.max(.6, k * .8);
    c.beginPath(); c.ellipse(geo.cx, geo.cy, geo.G * 1.62, geo.G * .6, -.32, 0, TAU); c.stroke();
    c.beginPath(); c.ellipse(geo.cx, geo.cy, geo.G * 1.38, geo.G * .98, .48, 0, TAU); c.stroke();
    c.setLineDash([k * 2, k * 5]); c.beginPath(); c.ellipse(geo.cx, geo.cy, geo.G * 2.1, geo.G * .32, .1, 0, TAU); c.stroke(); c.setLineDash([]);
    const cons = opt.cons == null ? (Math.min(W, H) / k < 200 ? 4 : 10) : opt.cons, step = geo.G * .085;
    for (let i = 0; i < cons; i++) {
      let x, y, tries = 0;
      do { x = (.04 + rnd() * .92) * W; y = (.06 + rnd() * .88) * H; tries++; } while (tries < 40 && Math.abs(x - geo.cx) < geo.G * .56 && Math.abs(y - geo.cy) < geo.G * .56);
      const pts = [[x, y]]; let a = rnd() * TAU;
      const len = 4 + Math.floor(rnd() * 3);
      for (let j = 1; j < len; j++) { a += (rnd() - .5) * 1.9; x += Math.cos(a) * step * (.7 + rnd() * .8); y += Math.sin(a) * step * (.7 + rnd() * .8); pts.push([x, y]); }
      const br = 1 + Math.floor(rnd() * (len - 2)), ba = a + 1.6 + rnd();
      const extra = [pts[br][0] + Math.cos(ba) * step, pts[br][1] + Math.sin(ba) * step];
      c.strokeStyle = rgba(p.leaf, .5); c.lineWidth = Math.max(.7, k); c.beginPath(); pts.forEach((q, j) => c[j ? 'lineTo' : 'moveTo'](q[0], q[1])); c.moveTo(pts[br][0], pts[br][1]); c.lineTo(extra[0], extra[1]); c.stroke();
      [...pts, extra].forEach((q, j) => {
        const s = k * (j % 3 === 0 ? 2.6 : 1.6);
        c.fillStyle = rgba(p.leaf, .95); c.beginPath(); c.arc(q[0], q[1], s, 0, TAU); c.fill();
        if (j % 3 === 0) { c.fillStyle = '#fffbe6'; starPath(c, q[0], q[1], s * 2.6, s * 1.1, s * .5); c.fill(); }
      });
    }
  }
  // Everything in one picture (listing art, previews).
  function drawSky(c, W, H, pal, geo, opt = {}) {
    drawNebula(c, W, H, pal, geo, opt);
    drawStars(c, W, H, pal, geo, opt);
    if (opt.rings !== false) drawRings(c, geo, !!opt.small, .37, -.7, pal === 'retro' ? 1 : 0);
  }

  /* The grid's plate, built like an instrument: a brass frame with thickness and an engraved scale, an enamel
   * field with a faint star chart, a round well under every medallion and an inlay lattice between them.
   * Size: (G + 2b) css px; the 7x7 field starts b px in. Light comes from the top left (from below in RETROGRADE). */
  function rrect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function plate(G, b, dpr, pal) {
    const p = PAL[pal], S = Math.round((G + b * 2) * dpr), cv = mk(S), c = cv.getContext('2d'), cs = G / 7 * dpr, bb = b * dpr, rad = cs * .16 + bb, up = pal === 'retro', rnd = seeded(61);
    const thick = bb > cs * .1, lite = cs < 34 * dpr;
    let g;
    // field
    rrect(c, bb * .5, bb * .5, S - bb, S - bb, rad - bb * .5); c.save(); c.clip();
    g = c.createLinearGradient(0, 0, 0, S); g.addColorStop(0, p.plate[up ? 1 : 0]); g.addColorStop(1, p.plate[up ? 0 : 1]); c.fillStyle = g; c.fillRect(0, 0, S, S);
    g = c.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S * .7); g.addColorStop(0, rgba(p.halo, .3)); g.addColorStop(1, rgba(p.halo, 0)); c.fillStyle = g; c.fillRect(0, 0, S, S);
    // star chart under the enamel: circles of altitude, hour lines, a scatter of stars
    c.strokeStyle = rgba(p.leaf, lite ? .05 : .075); c.lineWidth = Math.max(1, dpr * .8);
    for (let i = 1; i <= 6; i++) { c.beginPath(); c.arc(S / 2, S / 2, i * cs * .83, 0, TAU); c.stroke(); }
    c.beginPath(); for (let i = 0; i < 24; i++) { const a = i / 24 * TAU; c.moveTo(S / 2 + Math.cos(a) * cs * .83, S / 2 + Math.sin(a) * cs * .83); c.lineTo(S / 2 + Math.cos(a) * S, S / 2 + Math.sin(a) * S); } c.stroke();
    if (!lite) for (let i = 0; i < 150; i++) { c.fillStyle = rgba(p.star[i % 3], .1 + rnd() * .35); const z = dpr * (.5 + rnd() * .8); c.fillRect(rnd() * S, rnd() * S, z, z); }
    // wells
    const wr = cs * .462;
    for (let i = 0; i < 49; i++) {
      const x = bb + (i % 7 + .5) * cs, y = bb + (((i / 7) | 0) + .5) * cs;
      g = c.createRadialGradient(x, y + (up ? -1 : 1) * wr * .2, wr * .2, x, y, wr); g.addColorStop(0, rgba(p.well, .2)); g.addColorStop(.8, rgba(p.well, .5)); g.addColorStop(1, rgba(p.well, .72));
      c.fillStyle = g; c.beginPath(); c.arc(x, y, wr, 0, TAU); c.fill();
      if (!lite) {
        c.lineWidth = Math.max(1, cs * .022);
        c.strokeStyle = 'rgba(0,0,0,.55)'; c.beginPath(); c.arc(x, y, wr, up ? PI * .1 : PI * 1.05, up ? PI * .9 : PI * 1.95); c.stroke();
        c.strokeStyle = rgba(p.leaf, .3); c.beginPath(); c.arc(x, y, wr, up ? PI * 1.15 : PI * .15, up ? PI * 1.85 : PI * .85); c.stroke();
      } else { c.strokeStyle = rgba(p.leaf, .16); c.lineWidth = Math.max(1, dpr * .7); c.beginPath(); c.arc(x, y, wr, 0, TAU); c.stroke(); }
    }
    // inlay lattice
    c.fillStyle = rgba(p.leaf, lite ? .4 : .62);
    for (let i = 1; i < 7; i++) for (let j = 1; j < 7; j++) { const x = bb + i * cs, y = bb + j * cs, d = Math.max(1.2, cs * .05); c.beginPath(); c.moveTo(x, y - d); c.lineTo(x + d * .55, y); c.lineTo(x, y + d); c.lineTo(x - d * .55, y); c.closePath(); c.moveTo(x - d, y); c.lineTo(x, y - d * .55); c.lineTo(x + d, y); c.lineTo(x, y + d * .55); c.closePath(); c.fill(); }
    // shadow thrown by the frame onto the field, and a soft falloff to the edges
    g = c.createRadialGradient(S / 2, S / 2, S * .4, S / 2, S / 2, S * .78); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.55)'); c.fillStyle = g; c.fillRect(0, 0, S, S);
    const sh = cs * .34;
    g = c.createLinearGradient(0, up ? S - bb : bb, 0, up ? S - bb - sh : bb + sh); g.addColorStop(0, 'rgba(0,0,0,.6)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, up ? S - bb - sh : bb, S, sh);
    g = c.createLinearGradient(bb, 0, bb + sh, 0); g.addColorStop(0, 'rgba(0,0,0,.45)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(bb, 0, sh, S);
    c.restore();
    // frame
    const F = p.frame, x0 = up ? S : 0, y0 = up ? S : 0, x1 = up ? 0 : S, y1 = up ? 0 : S;
    g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, F[0]); g.addColorStop(.28, F[1]); g.addColorStop(.5, F[2]); g.addColorStop(.72, F[3]); g.addColorStop(1, F[4]);
    c.lineWidth = bb; c.strokeStyle = g; rrect(c, bb * .5, bb * .5, S - bb, S - bb, rad - bb * .5); c.stroke();
    if (thick) {
      // raised outer lip, sunk channel with a graduated scale, inner lip
      const g2 = c.createLinearGradient(x1, y1, x0, y0); g2.addColorStop(0, F[0]); g2.addColorStop(.5, F[2]); g2.addColorStop(1, F[4]);
      c.lineWidth = bb * .5; c.strokeStyle = g2; c.globalAlpha = .55; rrect(c, bb * .5, bb * .5, S - bb, S - bb, rad - bb * .5); c.stroke(); c.globalAlpha = 1;
      c.lineWidth = Math.max(1, dpr); c.strokeStyle = 'rgba(255,250,225,.75)'; rrect(c, bb * .2, bb * .2, S - bb * .4, S - bb * .4, rad - bb * .2); c.stroke();
      c.strokeStyle = 'rgba(20,10,0,.55)'; rrect(c, bb * .27, bb * .27, S - bb * .54, S - bb * .54, rad - bb * .27); c.stroke(); rrect(c, bb * .75, bb * .75, S - bb * 1.5, S - bb * 1.5, rad - bb * .75); c.stroke();
      c.strokeStyle = 'rgba(255,250,225,.4)'; rrect(c, bb * .82, bb * .82, S - bb * 1.64, S - bb * 1.64, rad - bb * .82); c.stroke();
      c.strokeStyle = p.ink; c.lineWidth = Math.max(1, dpr * .9); c.beginPath();
      const q = cs / 4;
      for (let i = 2; i <= 26; i++) {
        const v = bb + i * q, len = i % 4 === 0 ? .46 : i % 2 === 0 ? .32 : .2, a = bb * .3, e = a + bb * len;
        c.moveTo(v, a); c.lineTo(v, e); c.moveTo(v, S - a); c.lineTo(v, S - e); c.moveTo(a, v); c.lineTo(e, v); c.moveTo(S - a, v); c.lineTo(S - e, v);
      }
      c.stroke();
      // corner bosses
      for (const [x, y] of [[bb * .62, bb * .62], [S - bb * .62, bb * .62], [bb * .62, S - bb * .62], [S - bb * .62, S - bb * .62]]) {
        const r = bb * .36; g = c.createRadialGradient(x - r * .35, y - r * .4, 0, x, y, r); g.addColorStop(0, '#fffbe6'); g.addColorStop(.45, F[1]); g.addColorStop(1, F[4]);
        c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); c.strokeStyle = 'rgba(20,10,0,.8)'; c.lineWidth = Math.max(1, dpr * .8); c.stroke();
        c.fillStyle = 'rgba(20,10,0,.55)'; starPath(c, x, y, r * .62, r * .3, r * .14); c.fill();
      }
    }
    c.lineWidth = Math.max(1, dpr); c.strokeStyle = 'rgba(16,8,0,.95)'; rrect(c, .5, .5, S - 1, S - 1, rad); c.stroke(); rrect(c, bb, bb, S - bb * 2, S - bb * 2, rad - bb); c.stroke();
    c.strokeStyle = 'rgba(255,250,225,.5)'; c.lineWidth = Math.max(1, dpr * .8); rrect(c, 1.5 * dpr, 1.5 * dpr, S - 3 * dpr, S - 3 * dpr, rad - 1.5 * dpr); c.stroke();
    return cv;
  }
  // Glass over the plate: one soft band of reflected light and a thin bright streak. Drawn above the medallions.
  function plateGlass(G, b, dpr, pal) {
    const S = Math.round((G + b * 2) * dpr), cv = mk(S), c = cv.getContext('2d'), bb = b * dpr, cs = G / 7 * dpr, up = pal === 'retro';
    rrect(c, bb, bb, S - bb * 2, S - bb * 2, cs * .16); c.clip();
    c.translate(S / 2, S / 2); if (up) c.scale(1, -1); c.rotate(-.62);
    let g = c.createLinearGradient(0, -S * .78, 0, -S * .12); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.3, 'rgba(235,242,255,.15)'); g.addColorStop(.62, 'rgba(235,242,255,.045)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(-S, -S * .78, S * 2, S * .66);
    g = c.createLinearGradient(0, -S * .1, 0, -S * .04); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.5, 'rgba(255,255,255,.07)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(-S, -S * .1, S * 2, S * .06);
    return cv;
  }

  // the ALIGNMENT dial's still parts: brass bezel with ticks, enamel face, orbit hairlines
  const DIAL_ORBIT = i => .4 + i * .07;
  function dialFace(px, pal) {
    const p = PAL[pal], cv = mk(px), c = cv.getContext('2d'), R = px / 2 * .97, h = px / 2;
    c.translate(h, h);
    c.save(); c.shadowColor = 'rgba(0,0,0,.7)'; c.shadowBlur = px * .035; c.shadowOffsetY = px * .012; c.beginPath(); c.arc(0, 0, R * .98, 0, TAU); c.fillStyle = '#4d350f'; c.fill(); c.restore();
    let g = conic(c, -.6, 0, 0); if (g) (pal === 'retro' ? ROSE : BRASS).forEach(([q, col]) => g.addColorStop(q, col));
    c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fillStyle = g || '#b8913f'; c.fill();
    c.lineWidth = Math.max(1, px * .008); c.strokeStyle = 'rgba(40,24,4,.9)'; c.stroke();
    c.strokeStyle = 'rgba(255,250,225,.6)'; c.lineWidth = Math.max(.7, px * .005); c.beginPath(); c.arc(0, 0, R * .985, 0, TAU); c.stroke();
    c.strokeStyle = p.ink; c.lineWidth = Math.max(.8, px * .007); c.beginPath();
    const nt = 60;
    for (let i = 0; i < nt; i++) { const a = i / nt * TAU - PI / 2, big = i % 5 === 0; if (px < 150 && !big && i % 2) continue; c.moveTo(Math.cos(a) * R * (big ? .875 : .915), Math.sin(a) * R * (big ? .875 : .915)); c.lineTo(Math.cos(a) * R * .97, Math.sin(a) * R * .97); }
    c.stroke();
    const Rf = R * .85;
    g = c.createLinearGradient(-Rf, -Rf, Rf, Rf); g.addColorStop(0, '#2a1804'); g.addColorStop(1, '#fbeab6'); c.beginPath(); c.arc(0, 0, Rf * 1.035, 0, TAU); c.fillStyle = g; c.fill();
    g = c.createRadialGradient(0, -Rf * .2, 0, 0, 0, Rf); g.addColorStop(0, pal === 'retro' ? '#7a1848' : '#2640b0'); g.addColorStop(.6, p.plate[0]); g.addColorStop(1, p.plate[1]);
    c.beginPath(); c.arc(0, 0, Rf, 0, TAU); c.fillStyle = g; c.fill();
    g = c.createRadialGradient(0, 0, Rf * .7, 0, 0, Rf); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.55)'); c.fillStyle = g; c.fill();
    c.strokeStyle = rgba(p.leaf, .3); c.lineWidth = Math.max(.6, px * .004);
    for (let i = 0; i < 7; i++) { c.beginPath(); c.arc(0, 0, R * DIAL_ORBIT(i), 0, TAU); c.stroke(); }
    return cv;
  }
  // glass dome over the dial
  function dialGlass(px) {
    const cv = mk(px), c = cv.getContext('2d'), h = px / 2, R = h * .97 * .85;
    c.beginPath(); c.arc(h, h, R, 0, TAU); c.clip();
    let g = c.createRadialGradient(h - R * .35, h - R * .55, 0, h - R * .2, h - R * .4, R * 1.05); g.addColorStop(0, 'rgba(255,255,255,.2)'); g.addColorStop(.45, 'rgba(255,255,255,.05)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, px, px);
    c.strokeStyle = 'rgba(255,255,255,.22)'; c.lineWidth = Math.max(1, px * .012); c.lineCap = 'round'; c.beginPath(); c.arc(h, h, R * .93, PI * 1.12, PI * 1.45); c.stroke();
    return cv;
  }

  return { METAL, PAL, BRASS, ROSE, ORBITS, DIAL_ORBIT, mk, seeded, rgba, clamp, conic, sprite, glow, spark, body, drawSky, drawNebula, drawStars, drawRings, drawBands, drawTicks, ringDefs, plate, plateGlass, dialFace, dialGlass, starPath, shapePath, rrect, brass };
})();
