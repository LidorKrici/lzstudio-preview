/* Gacha Grab art library: every capsule, toy and the claw are drawn here, in code, on a 2D canvas.
 * Used by the game stage (game.js) and by the listing art (media/art.html). Nothing here knows about results. */
(() => {
  'use strict';
  const TAU = Math.PI * 2, PI = Math.PI;
  const parse = c => {
    if (c[0] === '#') { const n = parseInt(c.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
    return c.match(/[\d.]+/g).slice(0, 3).map(Number);
  };
  const mix = (a, b, t) => { const A = parse(a), B = parse(b); return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})`; };
  const lite = (c, t) => mix(c, '#ffffff', t), dark = (c, t) => mix(c, '#0b0620', t);
  const rgba = (c, a) => { const p = parse(c); return `rgba(${p[0]},${p[1]},${p[2]},${a})`; };
  function rr(c, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
  }
  const ell = (c, x, y, rx, ry, rot = 0) => { c.beginPath(); c.ellipse(x, y, Math.max(0, rx), Math.max(0, ry), rot, 0, TAU); };
  function star(c, x, y, R, r, n = 5, rot = -PI / 2) {
    c.beginPath();
    for (let i = 0; i < n * 2; i++) { const a = rot + i * PI / n, q = i % 2 ? r : R; c[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * q, y + Math.sin(a) * q); }
    c.closePath();
  }
  const poly = (c, pts) => { c.beginPath(); pts.forEach((p, i) => c[i ? 'lineTo' : 'moveTo'](p[0], p[1])); c.closePath(); };
  // four-point sparkle
  function glint(c, x, y, s, col = '#fff', a = 1) {
    c.save(); c.globalAlpha *= a; c.fillStyle = col; c.beginPath();
    c.moveTo(x, y - s); c.quadraticCurveTo(x + s * 0.12, y - s * 0.12, x + s, y); c.quadraticCurveTo(x + s * 0.12, y + s * 0.12, x, y + s);
    c.quadraticCurveTo(x - s * 0.12, y + s * 0.12, x - s, y); c.quadraticCurveTo(x - s * 0.12, y - s * 0.12, x, y - s); c.fill(); c.restore();
  }

  /* ---------- Capsules ---------- */
  // tier 0-4 = Common .. Legendary, tier 5 = the Golden Ticket capsule
  const TIERS = [
    { name: 'Common', top: '#3fa9ff', glow: null, ray: '#8fd0ff', spark: ['#bfe4ff', '#ffffff'] },
    { name: 'Uncommon', top: '#2fcc72', glow: null, ray: '#8ff0b8', spark: ['#b6ffd2', '#ffffff'] },
    { name: 'Rare', top: '#ff4f96', glow: '#ff8fc0', ray: '#ff9ccb', spark: ['#ffc0dc', '#ffffff', '#ff7ab8'] },
    { name: 'Epic', top: '#9353ff', glow: '#b98bff', ray: '#c6a2ff', spark: ['#d9c2ff', '#ffffff', '#9b5cff', '#6ff3ff'] },
    { name: 'Legendary', top: '#ffd257', glow: '#fff0a8', ray: '#fff0a8', spark: ['#ff6ad5', '#ffe86a', '#6affea', '#8a9bff', '#ffffff'] },
    { name: 'Golden Ticket', top: '#ffc531', glow: '#ffd75e', ray: '#ffe27a', spark: ['#fff3b0', '#ffc531', '#ffffff'] },
  ];
  const PRISM = ['#ff5fa2', '#ffb347', '#fff36a', '#63f5a8', '#5fd0ff', '#a47bff', '#ff5fa2'];
  function prism(c, R, rot = 0) {
    if (c.createConicGradient) { const g = c.createConicGradient(rot - 1.2, 0, R * 0.1); PRISM.forEach((p, i) => g.addColorStop(i / (PRISM.length - 1), p)); return g; }
    const g = c.createLinearGradient(-R, -R, R, 0); PRISM.forEach((p, i) => g.addColorStop(i / (PRISM.length - 1), p)); return g;
  }
  // what you glimpse through the clear half: an anonymous little figure (never a specific toy)
  const SIL = [
    c => { ell(c, 0, 0.12, 0.5, 0.46); c.fill(); ell(c, -0.3, -0.32, 0.17, 0.2); c.fill(); ell(c, 0.3, -0.32, 0.17, 0.2); c.fill(); },
    c => { ell(c, 0, 0.15, 0.48, 0.44); c.fill(); c.fillRect(-0.05, -0.56, 0.1, 0.3); ell(c, 0, -0.6, 0.11, 0.11); c.fill(); },
    c => { ell(c, 0, 0.2, 0.44, 0.4); c.fill(); poly(c, [[-0.36, -0.02], [-0.2, -0.56], [0, -0.12], [0.2, -0.56], [0.36, -0.02]]); c.fill(); },
  ];
  /* The shell. The coloured half is up (local -y); the seam bulges towards the clear half so the capsule reads
   * as a ball seen slightly from above. part: 'full' | 'top' | 'bottom'. No lighting here (see capsuleGloss). */
  function capsuleBase(c, R, tier, part = 'full', variant = 0) {
    const T = TIERS[tier], top = T.top, e = R * 0.17, gold = tier === 5, leg = tier === 4;
    const dome = () => { c.beginPath(); c.arc(0, 0, R, PI, TAU); c.ellipse(0, 0, R, e, 0, 0, PI); c.closePath(); };
    const bowl = () => { c.beginPath(); c.arc(0, 0, R, 0, PI); c.ellipse(0, 0, R, e, 0, PI, 0, true); c.closePath(); };
    const seamCol = gold || leg ? '#b9770c' : dark(top, 0.45);
    if (part !== 'top') {
      c.save();
      if (part === 'full') { c.beginPath(); c.arc(0, 0, R, 0, TAU); } else bowl();
      c.clip();
      if (gold) {
        const g = c.createLinearGradient(0, -R * 0.2, 0, R); g.addColorStop(0, '#ffd257'); g.addColorStop(1, '#d98a00');
        c.fillStyle = g; c.fillRect(-R, -R, 2 * R, 2 * R);
      } else {
        const tint = leg ? '#ffe7a8' : mix(top, '#ffffff', 0.7);
        const g = c.createRadialGradient(-R * 0.2, R * 0.12, R * 0.08, 0, 0, R);
        g.addColorStop(0, rgba(tint, leg ? 0.34 : 0.2)); g.addColorStop(0.72, rgba(tint, leg ? 0.48 : 0.36)); g.addColorStop(1, rgba(leg ? '#ffd257' : mix(top, '#ffffff', 0.28), 0.82));
        c.fillStyle = g; c.fillRect(-R, -R, 2 * R, 2 * R);
        c.fillStyle = rgba(dark(leg ? '#c98a12' : top, 0.5), 0.3);
        c.save(); c.translate(0, R * 0.36); c.scale(R * 0.72, R * 0.72); SIL[variant % 3](c); c.restore();
        c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = R * 0.05; c.lineCap = 'round';
        c.beginPath(); c.arc(0, 0, R * 0.8, 0.56 * PI, 0.84 * PI); c.stroke();
      }
      c.restore();
    }
    if (part !== 'bottom') {
      c.save(); dome(); c.clip();
      let g;
      if (leg) g = prism(c, R);
      else { g = c.createLinearGradient(0, -R, 0, e); g.addColorStop(0, lite(top, gold ? 0.55 : 0.34)); g.addColorStop(0.55, top); g.addColorStop(1, gold ? '#f0a400' : dark(top, 0.16)); }
      c.fillStyle = g; c.fillRect(-R, -R, 2 * R, R + e + 1);
      c.fillStyle = 'rgba(255,255,255,.85)';
      if (tier === 1) c.fillRect(-R, -R * 0.56, 2 * R, R * 0.17);
      else if (tier === 2) { for (const [x, y] of [[-0.52, -0.36], [0, -0.62], [0.52, -0.36]]) { ell(c, x * R, y * R, R * 0.115, R * 0.115); c.fill(); } }
      else if (tier === 3) { star(c, 0, -R * 0.5, R * 0.3, R * 0.13, 4); c.fill(); ell(c, -R * 0.56, -R * 0.28, R * 0.07, R * 0.07); c.fill(); ell(c, R * 0.56, -R * 0.28, R * 0.07, R * 0.07); c.fill(); }
      else if (leg) { c.fillStyle = 'rgba(255,255,255,.22)'; c.fillRect(-R, -R, 2 * R, R + e); glint(c, R * 0.3, -R * 0.46, R * 0.2); glint(c, -R * 0.24, -R * 0.24, R * 0.11); }
      else if (gold) { c.fillStyle = '#fff6c9'; star(c, 0, -R * 0.45, R * 0.33, R * 0.15, 5); c.fill(); }
      c.restore();
    }
    // the seam: a ring with thickness
    c.save(); c.beginPath(); c.arc(0, 0, R, 0, TAU); c.clip();
    if (part !== 'bottom') {
      c.strokeStyle = seamCol; c.lineWidth = R * 0.13; c.beginPath(); c.ellipse(0, 0, R, e, 0, 0, PI); c.stroke();
      c.strokeStyle = 'rgba(255,255,255,.62)'; c.lineWidth = R * 0.032; c.beginPath(); c.ellipse(0, -R * 0.052, R, e, 0, 0.12, PI - 0.12); c.stroke();
      c.strokeStyle = 'rgba(0,0,0,.2)'; c.lineWidth = R * 0.03; c.beginPath(); c.ellipse(0, R * 0.07, R, e, 0, 0.1, PI - 0.1); c.stroke();
    } else {
      c.strokeStyle = seamCol; c.lineWidth = R * 0.1; c.beginPath(); c.ellipse(0, 0, R, e, 0, 0, PI); c.stroke();
    }
    c.restore();
    c.lineWidth = Math.max(0.8, R * 0.07); c.lineJoin = 'round';
    c.strokeStyle = gold || leg ? 'rgba(140,84,0,.9)' : rgba(dark(top, 0.55), 0.9);
    const q = R - c.lineWidth / 2;
    c.beginPath();
    if (part === 'top') { c.arc(0, 0, q, PI, TAU); c.ellipse(0, 0, q, e, 0, 0, PI); c.closePath(); }
    else if (part === 'bottom') { c.arc(0, 0, q, 0, PI); c.ellipse(0, 0, q, e, 0, PI, 0, true); c.closePath(); }
    else c.arc(0, 0, q, 0, TAU);
    c.stroke();
  }
  // Light that stays put while the shell rolls: terminator shade, rim light, a soft and a sharp highlight.
  function capsuleGloss(c, R) {
    let g = c.createRadialGradient(-R * 0.3, -R * 0.35, R * 0.15, 0, 0, R * 1.02);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.52, 'rgba(30,14,70,0)'); g.addColorStop(0.84, 'rgba(30,14,70,.24)'); g.addColorStop(1, 'rgba(30,14,70,.52)');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fill();
    g = c.createRadialGradient(R * 0.36, R * 0.44, 0, R * 0.36, R * 0.44, R * 0.46);
    g.addColorStop(0, 'rgba(255,255,255,.3)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fill();
    g = c.createRadialGradient(-R * 0.36, -R * 0.42, 0, -R * 0.36, -R * 0.42, R * 0.64);
    g.addColorStop(0, 'rgba(255,255,255,.74)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = R * 0.055; c.lineCap = 'round';
    c.beginPath(); c.arc(0, 0, R * 0.87, 0.1 * PI, 0.42 * PI); c.stroke();
    c.fillStyle = 'rgba(255,255,255,.97)'; ell(c, -R * 0.44, -R * 0.5, R * 0.21, R * 0.105, -0.72); c.fill();
    ell(c, -R * 0.16, -R * 0.7, R * 0.05, R * 0.04, -0.3); c.fill();
  }
  function drawCapsule(c, x, y, R, tier, rot = 0, part = 'full', alpha = 1, variant = 0) {
    c.save(); c.globalAlpha *= alpha; c.translate(x, y);
    if (part === 'full') { c.save(); c.rotate(rot); capsuleBase(c, R, tier, part, variant); c.restore(); capsuleGloss(c, R); c.restore(); return; }
    const e = R * 0.17, gold = tier >= 4;
    c.rotate(rot);
    if (part === 'bottom') {                      // an open bowl: inside first, then the shell in front
      c.fillStyle = gold ? 'rgba(150,90,0,.55)' : rgba(dark(TIERS[tier].top, 0.4), 0.45); ell(c, 0, 0, R * 0.97, e); c.fill();
    }
    capsuleBase(c, R, tier, part, variant);
    c.save(); c.beginPath();
    if (part === 'top') { c.arc(0, 0, R, PI, TAU); c.ellipse(0, 0, R, e, 0, 0, PI); } else { c.arc(0, 0, R, 0, PI); c.ellipse(0, 0, R, e, 0, PI, 0, true); }
    c.closePath(); c.clip(); c.rotate(-rot); capsuleGloss(c, R); c.restore();
    if (part === 'bottom') { c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = Math.max(0.8, R * 0.045); c.beginPath(); c.ellipse(0, 0, R * 0.97, e, 0, PI, TAU); c.stroke(); }
    c.restore();
  }
  // Pre-rendered sprites for the pile (drawn many times per frame). shade darkens the rows further back.
  const spriteCache = new Map(), glossCache = new Map();
  function mk(size) { const k = document.createElement('canvas'); k.width = k.height = Math.max(2, Math.ceil(size)); return k; }
  function capsuleSprites(tier, Rpx, variant = 0, shade = 0, shadeCol = '#1a1040') {
    const key = tier + '|' + Rpx.toFixed(1) + '|' + variant + '|' + shade + shadeCol;
    let s = spriteCache.get(key);
    if (s) return s;
    const pad = 2, d = Rpx * 2 + pad * 2;
    const base = mk(d);
    let c = base.getContext('2d'); c.translate(d / 2, d / 2); capsuleBase(c, Rpx, tier, 'full', variant);
    if (shade > 0) { c.globalCompositeOperation = 'source-atop'; c.fillStyle = rgba(shadeCol, shade); c.fillRect(-d, -d, d * 2, d * 2); }
    const gk = Rpx.toFixed(1) + '|' + shade;
    let gloss = glossCache.get(gk);
    if (!gloss) { gloss = mk(d); c = gloss.getContext('2d'); c.translate(d / 2, d / 2); if (shade > 0) c.globalAlpha = 1 - shade * 0.9; capsuleGloss(c, Rpx); if (glossCache.size > 30) glossCache.clear(); glossCache.set(gk, gloss); }
    s = { base, gloss, half: d / 2, glow: null };
    if (TIERS[tier].glow) {
      const gr = Rpx * 2.1, gl = mk(gr * 2); c = gl.getContext('2d');
      const g = c.createRadialGradient(gr, gr, Rpx * 0.6, gr, gr, gr);
      g.addColorStop(0, rgba(TIERS[tier].glow, 0.7)); g.addColorStop(1, rgba(TIERS[tier].glow, 0));
      c.fillStyle = g; c.fillRect(0, 0, gr * 2, gr * 2);
      s.glow = gl; s.glowHalf = gr;
    }
    if (spriteCache.size > 160) spriteCache.clear();
    spriteCache.set(key, s);
    return s;
  }

  /* ---------- Toys: 15 originals in a soft vinyl look, each drawn in a 100x100 box centred on 0,0 ---------- */
  const INK = '#2b2145';
  let BLINK = false;
  function vgrad(c, col, r = 64) {
    const g = c.createRadialGradient(-13, -20, 3, 0, 6, r);
    g.addColorStop(0, lite(col, 0.52)); g.addColorStop(0.5, col); g.addColorStop(1, dark(col, 0.32));
    return g;
  }
  // A body made of one or more shapes: one outline around the union, one shared gradient fill, then a soft
  // shade from below and a bounce light, both in body coordinates so they run seamlessly across the shapes.
  function body(c, col, shapes, ow = 3.2, line) {
    c.lineJoin = 'round'; c.lineCap = 'round';
    c.strokeStyle = line || dark(col, 0.62); c.lineWidth = ow * 2;
    for (const s of shapes) { s(); c.stroke(); }
    c.fillStyle = vgrad(c, col);
    for (const s of shapes) { s(); c.fill(); }
    const sh = c.createLinearGradient(0, 4, 0, 46); sh.addColorStop(0, rgba(dark(col, 0.7), 0)); sh.addColorStop(1, rgba(dark(col, 0.7), 0.26));
    const bl = c.createRadialGradient(22, 26, 0, 22, 26, 26); bl.addColorStop(0, 'rgba(255,255,255,.22)'); bl.addColorStop(1, 'rgba(255,255,255,0)');
    for (const s of shapes) { s(); c.fillStyle = sh; c.fill(); s(); c.fillStyle = bl; c.fill(); }
  }
  // vinyl highlight: a soft blob with a hard little speck beside it
  const shine = (c, x, y, rx, ry, rot = -0.6, a = 0.62) => { c.fillStyle = `rgba(255,255,255,${a})`; ell(c, x, y, rx, ry, rot); c.fill(); c.fillStyle = `rgba(255,255,255,${Math.min(1, a + 0.3)})`; ell(c, x + rx * 1.25, y - ry * 0.2, rx * 0.2, rx * 0.2); c.fill(); };
  function face(c, x, y, gap, o = {}) {
    const r = o.r || 4.3, ink = o.ink || INK;
    c.lineCap = 'round';
    for (const s of [-1, 1]) {
      const ex = x + s * gap;
      if (o.eyes === 'sleepy' || (BLINK && o.eyes !== 'happy')) { c.strokeStyle = ink; c.lineWidth = 2.6; c.beginPath(); c.arc(ex, y - 1, r, 0.12 * PI, 0.88 * PI); c.stroke(); }
      else if (o.eyes === 'happy') { c.strokeStyle = ink; c.lineWidth = 2.8; c.beginPath(); c.arc(ex, y + 2, r, 1.12 * PI, 1.88 * PI); c.stroke(); }
      else { c.fillStyle = ink; ell(c, ex, y, r * 0.84, r); c.fill(); c.fillStyle = '#fff'; ell(c, ex - r * 0.26, y - r * 0.36, r * 0.34, r * 0.34); c.fill(); ell(c, ex + r * 0.3, y + r * 0.34, r * 0.16, r * 0.16); c.fill(); }
      if (o.blush) { c.fillStyle = rgba(o.blush, 0.6); ell(c, x + s * (gap + (o.bx === undefined ? 7 : o.bx)), y + (o.by === undefined ? 7 : o.by), 4.8, 2.9); c.fill(); }
    }
    const my = y + (o.my === undefined ? 6 : o.my);
    c.strokeStyle = ink; c.lineWidth = 2.3;
    if (o.mouth === 'o') { c.fillStyle = ink; ell(c, x, my + 1, 2.6, 3.2); c.fill(); }
    else if (o.mouth === 'w') { c.beginPath(); c.arc(x - 2.6, my, 2.6, 0.05 * PI, 0.95 * PI); c.stroke(); c.beginPath(); c.arc(x + 2.6, my, 2.6, 0.05 * PI, 0.95 * PI); c.stroke(); }
    else if (o.mouth === 'grin') { c.fillStyle = '#7a2340'; c.beginPath(); c.arc(x, my - 1, o.mw || 6, 0, PI); c.closePath(); c.fill(); c.fillStyle = '#ff8fa8'; ell(c, x, my + 2.6, (o.mw || 6) * 0.5, 2); c.fill(); }
    else if (o.mouth !== 'none') { c.beginPath(); c.arc(x, my - 2, o.mw || 4, 0.14 * PI, 0.86 * PI); c.stroke(); }
  }

  const TOY = [
    /* 0 Mochi: a soft rice-cake blob with a berry on top, dusted with sugar */
    c => {
      body(c, '#ff7fa5', [() => ell(c, 0, -29, 9, 8)]);
      c.fillStyle = '#58c66a'; c.strokeStyle = '#2c7a3c'; c.lineWidth = 2; ell(c, 5, -37, 6, 3, -0.5); c.fill(); c.stroke();
      body(c, '#fff0f5', [() => { c.beginPath(); c.moveTo(-37, 25); c.bezierCurveTo(-47, -6, -26, -30, 0, -30); c.bezierCurveTo(26, -30, 47, -6, 37, 25); c.quadraticCurveTo(35, 38, 18, 38); c.lineTo(-18, 38); c.quadraticCurveTo(-35, 38, -37, 25); c.closePath(); }], 3.2, '#b0708c');
      shine(c, -17, -15, 9, 4.5);
      c.fillStyle = 'rgba(255,255,255,.9)'; for (const [x, y] of [[14, -18], [22, -8], [-26, 2], [8, -24]]) { ell(c, x, y, 1.3, 1.3); c.fill(); }
      face(c, 0, 6, 12, { mouth: 'w', blush: '#ff8fb5', my: 5 });
    },
    /* 1 Puff: a sleepy cloud with a pocket star */
    c => {
      body(c, '#f3f9ff', [() => ell(c, -21, 8, 17, 17), () => ell(c, 2, -8, 23, 23), () => ell(c, 23, 9, 16, 16), () => rr(c, -36, 8, 72, 24, 12)], 3.2, '#6f8fc0');
      shine(c, -8, -20, 9, 4.5);
      face(c, 1, 10, 10, { eyes: 'sleepy', blush: '#8fc4ff', mw: 3.5, my: 8 });
      c.fillStyle = '#ffd84d'; c.strokeStyle = '#b97a00'; c.lineWidth = 1.8; c.lineJoin = 'round'; star(c, 27, -9, 8, 3.8, 5, -PI / 2 + 0.3); c.fill(); c.stroke();
      c.fillStyle = '#7fc4ff'; for (const [x, y] of [[-16, 38], [2, 41], [18, 38]]) { c.beginPath(); c.moveTo(x, y - 4); c.quadraticCurveTo(x + 3.4, y + 1.5, x, y + 3.2); c.quadraticCurveTo(x - 3.4, y + 1.5, x, y - 4); c.fill(); }
    },
    /* 2 Sprout: a bean with two leaves and a drop of dew */
    c => {
      c.strokeStyle = '#2c7a3c'; c.lineWidth = 3; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, -18); c.lineTo(0, -30); c.stroke();
      body(c, '#4cc46a', [
        () => { c.beginPath(); c.moveTo(0, -30); c.bezierCurveTo(-8, -46, -28, -46, -30, -34); c.bezierCurveTo(-22, -26, -8, -26, 0, -30); c.closePath(); },
        () => { c.beginPath(); c.moveTo(0, -30); c.bezierCurveTo(8, -48, 26, -46, 30, -38); c.bezierCurveTo(22, -28, 8, -27, 0, -30); c.closePath(); }], 2.6);
      c.strokeStyle = 'rgba(255,255,255,.5)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(-4, -32); c.quadraticCurveTo(-14, -38, -24, -35); c.moveTo(4, -32); c.quadraticCurveTo(14, -40, 24, -38); c.stroke();
      c.fillStyle = '#8fe0ff'; ell(c, 17, -39, 3.2, 3.6); c.fill(); c.fillStyle = '#fff'; ell(c, 16, -40.2, 1, 1); c.fill();
      body(c, '#a8d94e', [() => ell(c, -11, 37, 8, 4.5), () => ell(c, 11, 37, 8, 4.5)], 2.4);
      body(c, '#cdea63', [() => ell(c, 0, 10, 28, 29)]);
      shine(c, -11, -7, 8, 4);
      face(c, 0, 9, 10, { blush: '#ff9f6b', my: 6 });
    },
    /* 3 Wisp: a small ghost in a bow tie */
    c => {
      body(c, '#f1ecff', [() => ell(c, -29, 8, 6, 7), () => ell(c, 29, 8, 6, 7), () => { c.beginPath(); c.moveTo(-28, 33); c.lineTo(-28, -6); c.bezierCurveTo(-28, -46, 28, -46, 28, -6); c.lineTo(28, 33); c.quadraticCurveTo(18.7, 20, 9.3, 33); c.quadraticCurveTo(0, 20, -9.3, 33); c.quadraticCurveTo(-18.7, 20, -28, 33); c.closePath(); }], 3.2, '#7a68b8');
      shine(c, -13, -24, 8, 4);
      face(c, 0, -8, 10, { r: 5.4, mouth: 'o', blush: '#ff9ecb', my: 9, by: 8 });
      c.fillStyle = '#ff6fae'; c.strokeStyle = '#a82a66'; c.lineWidth = 1.6; c.lineJoin = 'round';
      poly(c, [[0, 14], [-9, 9], [-9, 19]]); c.fill(); c.stroke(); poly(c, [[0, 14], [9, 9], [9, 19]]); c.fill(); c.stroke(); ell(c, 0, 14, 2.6, 2.6); c.fill(); c.stroke();
    },
    /* 4 Nib: a round little dino */
    c => {
      body(c, '#ff9a4a', [() => poly(c, [[-6, -32], [2, -45], [9, -32]]), () => poly(c, [[9, -28], [20, -38], [23, -22]]), () => poly(c, [[22, -14], [34, -18], [30, -3]])], 2.6);
      body(c, '#4fd29a', [() => { c.beginPath(); c.moveTo(14, 30); c.quadraticCurveTo(42, 36, 44, 16); c.quadraticCurveTo(36, 28, 18, 20); c.closePath(); }, () => ell(c, 0, -6, 30, 27), () => rr(c, -20, 8, 40, 31, 14), () => ell(c, -22, 14, 6, 5), () => ell(c, 22, 14, 6, 5)]);
      c.fillStyle = '#d6ffe9'; ell(c, 0, 25, 12, 11); c.fill();
      c.strokeStyle = 'rgba(31,111,82,.35)'; c.lineWidth = 1.5; for (const y of [21, 27, 33]) { c.beginPath(); c.moveTo(-8, y); c.lineTo(8, y); c.stroke(); }
      c.fillStyle = 'rgba(255,255,255,.38)'; ell(c, 0, 8, 16, 10); c.fill();
      shine(c, -14, -22, 8, 4);
      face(c, 0, -9, 13, { blush: '#ff8f8f', mouth: 'none' });
      c.fillStyle = '#1f6f52'; ell(c, -4, 4, 1.6, 1.6); c.fill(); ell(c, 4, 4, 1.6, 1.6); c.fill();
      c.strokeStyle = INK; c.lineWidth = 2.3; c.beginPath(); c.arc(0, 6, 9, 0.2 * PI, 0.8 * PI); c.stroke();
      c.fillStyle = '#fff'; c.strokeStyle = INK; c.lineWidth = 1.6; poly(c, [[3, 14.2], [7.5, 13], [6, 19]]); c.fill(); c.stroke();
    },
    /* 5 Hopps: a wide happy frog with a lily in its hair */
    c => {
      body(c, '#8bdc4c', [() => ell(c, -17, -17, 13, 13), () => ell(c, 17, -17, 13, 13), () => ell(c, 0, 11, 37, 27), () => ell(c, -27, 33, 10, 5), () => ell(c, 27, 33, 10, 5)]);
      c.fillStyle = 'rgba(255,255,255,.34)'; ell(c, 0, 25, 21, 10); c.fill();
      for (const s of [-1, 1]) {
        c.fillStyle = '#fff'; ell(c, s * 17, -18, 8.6, 8.6); c.fill();
        if (BLINK) { c.strokeStyle = INK; c.lineWidth = 2.6; c.beginPath(); c.arc(s * 17, -19, 5, 0.12 * PI, 0.88 * PI); c.stroke(); }
        else { c.fillStyle = INK; ell(c, s * 17 + 1, -17, 4.6, 5); c.fill(); c.fillStyle = '#fff'; ell(c, s * 17 - 0.6, -19, 1.7, 1.7); c.fill(); }
        c.fillStyle = 'rgba(255,150,130,.6)'; ell(c, s * 25, 10, 5, 3); c.fill();
      }
      c.strokeStyle = INK; c.lineWidth = 2.6; c.lineCap = 'round'; c.beginPath(); c.arc(0, 0, 19, 0.16 * PI, 0.84 * PI); c.stroke();
      shine(c, -24, 0, 6, 3);
      c.fillStyle = '#ff9ecb'; c.strokeStyle = '#b84a84'; c.lineWidth = 1.4; for (let i = 0; i < 5; i++) { const a = i * TAU / 5 - 0.4; ell(c, 0 + Math.cos(a) * 4.6, -31 + Math.sin(a) * 4.6, 3.6, 3.6); c.fill(); c.stroke(); }
      c.fillStyle = '#ffe36a'; ell(c, 0, -31, 3, 3); c.fill();
    },
    /* 6 Bitsy: a tiny robot */
    c => {
      c.strokeStyle = '#3a4466'; c.lineWidth = 3; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, -26); c.lineTo(0, -37); c.stroke();
      body(c, '#ff6b6b', [() => ell(c, 0, -41, 5, 5)], 2.4);
      body(c, '#7fdcd2', [() => rr(c, -23, 20, 17, 16, 6), () => rr(c, 6, 20, 17, 16, 6), () => rr(c, -39, -10, 10, 17, 4), () => rr(c, 29, -10, 10, 17, 4), () => rr(c, -31, -27, 62, 49, 13)]);
      c.fillStyle = '#1b2242'; rr(c, -23, -19, 46, 32, 9); c.fill();
      c.fillStyle = '#7df9ff'; rr(c, -15, BLINK ? -6 : -11, 8, BLINK ? 2.6 : 11, BLINK ? 1 : 3); c.fill(); rr(c, 7, BLINK ? -6 : -11, 8, BLINK ? 2.6 : 11, BLINK ? 1 : 3); c.fill();
      c.strokeStyle = '#7df9ff'; c.lineWidth = 2.4; c.beginPath(); c.arc(0, 2, 5, 0.15 * PI, 0.85 * PI); c.stroke();
      c.fillStyle = '#ff8fb5'; ell(c, -18, 6, 2.6, 1.6); c.fill(); ell(c, 18, 6, 2.6, 1.6); c.fill();
      c.fillStyle = 'rgba(255,255,255,.16)'; poly(c, [[-23, -19], [-4, -19], [-17, 13], [-23, 13]]); c.fill();
      for (const [x, col] of [[-10, '#ff6b6b'], [0, '#ffd84d'], [10, '#7dff9a']]) { c.fillStyle = col; ell(c, x, 18, 1.9, 1.9); c.fill(); }
      c.fillStyle = '#3a4466'; ell(c, -34, -2, 1.6, 1.6); c.fill(); ell(c, 34, -2, 1.6, 1.6); c.fill();
      shine(c, -20, -23, 7, 2.4, 0, 0.7);
    },
    /* 7 Nyx: a sleepy lilac cat curled up in a crescent moon */
    c => {
      const moon = () => { c.beginPath(); c.arc(0, 4, 42, 0.302, 4.591, false); c.arc(12, -6, 36, 4.218, 0.676, true); c.closePath(); };
      body(c, '#ffd95a', [moon], 3.2, '#a8700a');
      c.fillStyle = 'rgba(255,255,255,.5)'; ell(c, -27, 22, 7, 3.2, 0.8); c.fill();
      c.lineCap = 'round'; c.beginPath(); c.moveTo(14, 30); c.bezierCurveTo(30, 32, 34, 18, 26, 12);
      c.strokeStyle = '#5a4a9c'; c.lineWidth = 11; c.stroke(); c.strokeStyle = '#b9a9f0'; c.lineWidth = 5.5; c.stroke();
      body(c, '#b9a9f0', [() => poly(c, [[-20, -14], [-18, -36], [-4, -24]]), () => poly(c, [[24, -14], [22, -36], [8, -24]]), () => ell(c, 2, -8, 23, 20), () => ell(c, 2, 17, 17, 14)], 3, '#5a4a9c');
      c.fillStyle = '#ff9ecb'; poly(c, [[-15, -20], [-15, -30], [-8, -24]]); c.fill(); poly(c, [[19, -20], [19, -30], [12, -24]]); c.fill();
      c.fillStyle = 'rgba(255,255,255,.4)'; ell(c, 2, 20, 9, 8); c.fill();
      shine(c, -10, -19, 6, 3, -0.6, 0.5);
      face(c, 2, -7, 10, { eyes: 'sleepy', mouth: 'w', blush: '#ff9ecb', my: 5, by: 5, bx: 5 });
      c.strokeStyle = 'rgba(90,74,156,.75)'; c.lineWidth = 1.3; c.beginPath();
      for (const q of [-1, 1]) { c.moveTo(2 + q * 15, -3); c.lineTo(2 + q * 25, -5); c.moveTo(2 + q * 15, 0); c.lineTo(2 + q * 24, 2); }
      c.stroke();
      c.strokeStyle = '#ff6fae'; c.lineWidth = 2.4; c.beginPath(); c.arc(2, 2, 13, 0.25 * PI, 0.75 * PI); c.stroke();
      c.fillStyle = '#ffd84d'; c.strokeStyle = '#b97a00'; c.lineWidth = 1.2; ell(c, 2, 15.6, 2.8, 2.8); c.fill(); c.stroke();
      glint(c, 30, -30, 6, '#fff3a8'); glint(c, 40, -12, 3.5, '#fff3a8');
    },
    /* 8 Squidge: a small octopus with a bow */
    c => {
      body(c, '#ff8a78', [() => ell(c, -25, 23, 10, 11), () => ell(c, -8.5, 27, 10, 11), () => ell(c, 8.5, 27, 10, 11), () => ell(c, 25, 23, 10, 11), () => ell(c, 0, -7, 31, 29)]);
      c.fillStyle = 'rgba(255,255,255,.5)'; for (const x of [-25, -8.5, 8.5, 25]) { ell(c, x, x * x > 100 ? 28 : 32, 3, 2.4); c.fill(); }
      c.fillStyle = 'rgba(255,220,210,.55)'; for (const [x, y] of [[-17, -26], [-10, -31], [19, -22]]) { ell(c, x, y, 2.2, 2.2); c.fill(); }
      shine(c, -14, -24, 9, 4.5);
      face(c, 0, -5, 12, { r: 5.2, mouth: 'o', blush: '#ffd3cb', my: 9, by: 8 });
      c.fillStyle = '#5fd6c9'; c.strokeStyle = '#1f7f76'; c.lineWidth = 1.6; c.lineJoin = 'round';
      poly(c, [[14, -32], [5, -39], [6, -27]]); c.fill(); c.stroke(); poly(c, [[14, -32], [24, -36], [21, -25]]); c.fill(); c.stroke(); ell(c, 14, -32, 2.8, 2.8); c.fill(); c.stroke();
    },
    /* 9 Zoom: a comet in flying goggles */
    c => {
      const tail = (x1, y1, w, col) => { const g = c.createLinearGradient(8, 8, x1, y1); g.addColorStop(0, col); g.addColorStop(1, rgba(col, 0)); c.fillStyle = g; poly(c, [[8 - w, 8 + w], [x1, y1], [8 + w, 8 - w]]); c.fill(); };
      tail(-48, -46, 20, '#ff6f91'); tail(-40, -48, 13, '#ffb347'); tail(-50, -34, 8, '#fff36a');
      body(c, '#ffd84d', [() => star(c, 9, 9, 33, 17, 5, -PI / 2 + 0.22)], 3.4, '#b26a00');
      shine(c, -2, 0, 5, 2.6);
      face(c, 9, 11, 8.5, { blush: '#ff9a4a', bx: 5, by: 6, r: 3.9, my: 5 });
      c.strokeStyle = '#7a3d12'; c.lineWidth = 2.6; c.beginPath(); c.moveTo(-4, -3); c.lineTo(23, 0); c.stroke();
      for (const [x, y] of [[4, -3.4], [15, -2.2]]) { c.fillStyle = '#7a3d12'; ell(c, x, y, 5.6, 4.8, 0.1); c.fill(); c.fillStyle = '#8fe9ff'; ell(c, x, y, 3.9, 3.2, 0.1); c.fill(); c.fillStyle = 'rgba(255,255,255,.85)'; ell(c, x - 1.2, y - 1, 1.2, 0.8, 0.1); c.fill(); }
    },
    /* 10 Drako: a baby dragon puffing its first flame */
    c => {
      body(c, '#ffc24d', [() => poly(c, [[-20, 4], [-46, -16], [-40, 0], [-47, 10], [-35, 11], [-27, 20]]), () => poly(c, [[20, 4], [46, -16], [40, 0], [47, 10], [35, 11], [27, 20]])], 2.6);
      body(c, '#fff1c9', [() => poly(c, [[-17, -27], [-23, -46], [-6, -32]]), () => poly(c, [[17, -27], [23, -46], [6, -32]])], 2.6, '#a8853a');
      body(c, '#ff6a5c', [() => ell(c, 0, -8, 28, 25), () => ell(c, 0, 23, 21, 18)]);
      c.fillStyle = '#fff1c9'; ell(c, 0, 26, 12.5, 12); c.fill();
      c.strokeStyle = 'rgba(168,133,58,.6)'; c.lineWidth = 1.6; for (const y of [21, 27, 33]) { c.beginPath(); c.moveTo(-9, y); c.lineTo(9, y); c.stroke(); }
      c.fillStyle = 'rgba(255,255,255,.32)'; ell(c, 0, 1, 14, 8.5); c.fill();
      shine(c, -13, -22, 7, 3.5);
      face(c, 0, -12, 12, { blush: '#ffd0a0', mouth: 'none', by: 9 });
      c.fillStyle = '#a82a22'; ell(c, -4, -1, 1.5, 1.5); c.fill(); ell(c, 4, -1, 1.5, 1.5); c.fill();
      c.strokeStyle = INK; c.lineWidth = 2.2; c.beginPath(); c.arc(0, 1, 8, 0.2 * PI, 0.8 * PI); c.stroke();
      c.fillStyle = '#fff'; c.lineWidth = 1.5; poly(c, [[-7, 6.4], [-3, 8.2], [-5.6, 12]]); c.fill(); c.stroke();
      const fl = (x, y, s, col) => { c.fillStyle = col; c.beginPath(); c.moveTo(x, y - s); c.bezierCurveTo(x + s * 0.9, y - s * 0.2, x + s * 0.6, y + s * 0.7, x, y + s * 0.7); c.bezierCurveTo(x - s * 0.6, y + s * 0.7, x - s * 0.7, y, x - s * 0.2, y - s * 0.3); c.closePath(); c.fill(); };
      fl(15, 2, 7, '#ff9a2e'); fl(15, 3.4, 4, '#fff36a');
    },
    /* 11 Orbit: an astronaut bear */
    c => {
      c.strokeStyle = '#5d6b8f'; c.lineWidth = 2.4; c.lineCap = 'round'; c.beginPath(); c.moveTo(20, -30); c.lineTo(27, -42); c.stroke();
      body(c, '#ff6b6b', [() => ell(c, 28, -44, 3.6, 3.6)], 2);
      body(c, '#f4f6fb', [() => ell(c, -22, -28, 10, 10), () => ell(c, 22, -28, 10, 10), () => rr(c, -18, 20, 36, 22, 9), () => ell(c, -22, 28, 7, 8), () => ell(c, 22, 28, 7, 8), () => ell(c, 0, -5, 32, 31)], 3.2, '#5d6b8f');
      const g = c.createLinearGradient(0, -26, 0, 18); g.addColorStop(0, '#39439a'); g.addColorStop(1, '#10143a');
      c.fillStyle = g; ell(c, 0, -5, 24, 21.5); c.fill(); c.strokeStyle = '#5d6b8f'; c.lineWidth = 2.4; c.stroke();
      c.save(); ell(c, 0, -5, 23, 20.5); c.clip();
      c.fillStyle = '#d99a5b'; ell(c, -11, -13, 5.5, 5.5); c.fill(); ell(c, 11, -13, 5.5, 5.5); c.fill(); ell(c, 0, 0, 15.5, 14.5); c.fill();
      c.fillStyle = '#ffe9cf'; ell(c, 0, 5, 7, 5.2); c.fill();
      c.fillStyle = INK; ell(c, 0, 3, 2.4, 1.8); c.fill();
      if (BLINK) { c.strokeStyle = INK; c.lineWidth = 1.8; c.beginPath(); c.moveTo(-8.6, -3); c.lineTo(-4.4, -3); c.moveTo(4.4, -3); c.lineTo(8.6, -3); c.stroke(); } else { ell(c, -6.5, -3, 2.3, 2.7); c.fill(); ell(c, 6.5, -3, 2.3, 2.7); c.fill(); }
      c.fillStyle = 'rgba(255,255,255,.22)'; poly(c, [[-26, -28], [-8, -28], [-22, 16], [-26, 16]]); c.fill();
      c.fillStyle = 'rgba(255,255,255,.8)'; ell(c, 14, -18, 1.4, 1.4); c.fill(); ell(c, 17, -12, 0.9, 0.9); c.fill();
      c.restore();
      c.fillStyle = '#ff6b6b'; rr(c, -12, 26, 24, 5, 2.5); c.fill(); c.fillStyle = '#5fd0ff'; ell(c, -5, 36, 2.6, 2.6); c.fill(); c.fillStyle = '#ffd84d'; ell(c, 5, 36, 2.6, 2.6); c.fill();
      shine(c, -17, -27, 8, 3.5);
    },
    /* 12 Prism: a living crystal */
    c => {
      const P = { t: [0, -42], ul: [-28, -19], ur: [28, -19], ll: [-28, 11], lr: [28, 11], b: [0, 42], m1: [0, -11], m2: [0, 19] };
      c.lineJoin = 'round'; c.strokeStyle = '#4f3a9c'; c.lineWidth = 6.4; poly(c, [P.t, P.ur, P.lr, P.b, P.ll, P.ul]); c.stroke();
      const f = (pts, col) => { c.fillStyle = col; poly(c, pts); c.fill(); };
      f([P.t, P.ul, P.m1], '#ffb8ea'); f([P.t, P.ur, P.m1], '#aee6ff'); f([P.ul, P.ll, P.m2, P.m1], '#d2bdff'); f([P.ur, P.lr, P.m2, P.m1], '#b0fff0');
      f([P.ll, P.b, P.m2], '#fff0a6'); f([P.lr, P.b, P.m2], '#ffc4dc');
      const ig = c.createRadialGradient(0, 2, 0, 0, 2, 30); ig.addColorStop(0, 'rgba(255,255,255,.7)'); ig.addColorStop(1, 'rgba(255,255,255,0)');
      c.save(); poly(c, [P.t, P.ur, P.lr, P.b, P.ll, P.ul]); c.clip(); c.fillStyle = ig; c.fillRect(-30, -30, 60, 62); c.restore();
      c.strokeStyle = 'rgba(255,255,255,.8)'; c.lineWidth = 1.5; c.beginPath();
      for (const [a, b] of [[P.t, P.m1], [P.ul, P.m1], [P.ur, P.m1], [P.m1, P.m2], [P.ll, P.m2], [P.lr, P.m2], [P.b, P.m2]]) { c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); }
      c.stroke();
      c.fillStyle = 'rgba(255,255,255,.5)'; poly(c, [[-24, -17], [-15, -24], [-15, 6], [-24, 9]]); c.fill();
      face(c, 0, 2, 11, { blush: '#ff8fc7', my: 6 });
      glint(c, 20, -30, 8); glint(c, -31, 24, 5.5); glint(c, 33, 18, 4);
    },
    /* 13 Nova: a sun that is far too cool */
    c => {
      const rays = [];
      for (let i = 0; i < 8; i++) { const a = i * TAU / 8 - PI / 2, a1 = a - 0.24, a2 = a + 0.24; rays.push(() => poly(c, [[Math.cos(a1) * 24, Math.sin(a1) * 24], [Math.cos(a) * 44, Math.sin(a) * 44], [Math.cos(a2) * 24, Math.sin(a2) * 24]])); }
      body(c, '#ff9838', rays, 3, '#a8480a');
      body(c, '#ffd53d', [() => ell(c, 0, 0, 27, 27)], 3.2, '#a8480a');
      shine(c, -11, -16, 8, 4);
      face(c, 0, -3, 10, { eyes: 'happy', mouth: 'grin', blush: '#ff7d4d', my: 9, mw: 6.5, by: 9, bx: 7 });
      c.fillStyle = '#2b2145'; c.strokeStyle = '#2b2145'; c.lineWidth = 2.2; c.lineJoin = 'round';
      rr(c, -19, -9.5, 16, 10.5, 4); c.fill(); rr(c, 3, -9.5, 16, 10.5, 4); c.fill(); c.beginPath(); c.moveTo(-4, -6); c.lineTo(4, -6); c.stroke();
      c.fillStyle = 'rgba(255,255,255,.55)'; poly(c, [[-16, -8], [-11, -8], [-14, -1], [-17.5, -1]]); c.fill(); poly(c, [[6, -8], [11, -8], [8, -1], [4.5, -1]]); c.fill();
    },
    /* 14 Emperor Bun: a crowned golden rabbit in an ermine collar */
    c => {
      body(c, '#ffd65a', [() => ell(c, -13, -24, 8.5, 21, -0.16), () => ell(c, 13, -24, 8.5, 21, 0.16)], 3.2, '#9b6400');
      c.fillStyle = '#ff9ecb'; ell(c, -13, -24, 4, 14, -0.16); c.fill(); ell(c, 13, -24, 4, 14, 0.16); c.fill();
      body(c, '#ffd65a', [() => ell(c, 0, 13, 31, 27)], 3.2, '#9b6400');
      body(c, '#ff4f72', [() => poly(c, [[-14, -8], [-16, -25], [-7, -17], [0, -29], [7, -17], [16, -25], [14, -8]])], 2.6, '#8a1232');
      c.fillStyle = '#fff6c9'; for (const [x, y] of [[-16, -25], [0, -29], [16, -25]]) { ell(c, x, y, 2.6, 2.6); c.fill(); }
      c.fillStyle = '#6ff3ff'; ell(c, 0, -13, 3, 3); c.fill();
      shine(c, -15, 0, 8, 4);
      face(c, 0, 12, 11, { mouth: 'w', blush: '#ff8fa8', my: 7 });
      c.fillStyle = '#ff9ecb'; ell(c, 0, 16.4, 2.4, 1.8); c.fill();
      body(c, '#ffffff', [() => ell(c, -18, 35, 7, 5.5), () => ell(c, -6, 38, 7, 5.5), () => ell(c, 6, 38, 7, 5.5), () => ell(c, 18, 35, 7, 5.5)], 2.2, '#9b8fb0');
      c.fillStyle = '#2b2145'; for (const [x, y] of [[-15, 36], [-4, 39], [8, 39], [17, 36]]) { ell(c, x, y, 1.1, 1.6, 0.3); c.fill(); }
      glint(c, 30, -10, 6); glint(c, -34, 26, 4.5);
    },
    /* 15 the Golden Ticket itself */
    c => {
      c.save(); c.rotate(-0.2);
      const tk = () => { c.beginPath(); c.moveTo(-36, -22); c.lineTo(36, -22); c.lineTo(36, -7); c.arc(36, 0, 7, -PI / 2, PI / 2, true); c.lineTo(36, 22); c.lineTo(-36, 22); c.lineTo(-36, 7); c.arc(-36, 0, 7, PI / 2, -PI / 2, true); c.closePath(); };
      c.lineJoin = 'round'; c.strokeStyle = '#8f5a00'; c.lineWidth = 6.4; tk(); c.stroke();
      const g = c.createLinearGradient(-36, -22, 36, 22); g.addColorStop(0, '#fff3a8'); g.addColorStop(0.45, '#ffc531'); g.addColorStop(1, '#f09a00');
      c.fillStyle = g; tk(); c.fill();
      c.strokeStyle = 'rgba(143,90,0,.55)'; c.lineWidth = 1.6; c.setLineDash([3, 3]); rr(c, -27, -16, 54, 32, 4); c.stroke(); c.setLineDash([]);
      c.fillStyle = '#fffbe0'; c.strokeStyle = '#b97a00'; c.lineWidth = 2; star(c, 0, 0, 13, 6); c.fill(); c.stroke();
      c.fillStyle = 'rgba(255,255,255,.5)'; poly(c, [[-30, -20], [-14, -20], [-26, 20], [-34, 20]]); c.fill();
      c.restore();
      glint(c, 30, -26, 8); glint(c, -36, 22, 5);
    },
  ];
  const TOYS = ['Mochi', 'Puff', 'Sprout', 'Wisp', 'Nib', 'Hopps', 'Bitsy', 'Nyx', 'Squidge', 'Zoom', 'Drako', 'Orbit', 'Prism', 'Nova', 'Emperor Bun'];
  /* How each toy carries itself once it is out of its capsule: bob = up/down, sway = rocking, squash = breathing,
   * float = hovers above the stand, spin = slow turn, hop = little jumps. Periods in seconds. */
  const POSE = [
    { squash: 0.07, per: 1.5 }, { float: 0.07, bob: 0.03, per: 3.2 }, { sway: 0.1, per: 2.1 }, { float: 0.09, bob: 0.05, sway: 0.05, per: 2.6 },
    { hop: 0.07, per: 1.3 }, { hop: 0.12, squash: 0.05, per: 1.9 }, { sway: 0.07, per: 0.9, step: true }, { squash: 0.035, per: 3.6 },
    { sway: 0.08, squash: 0.04, per: 1.7 }, { float: 0.06, sway: 0.12, per: 1.1 }, { hop: 0.06, sway: 0.05, per: 1.5 }, { float: 0.1, bob: 0.05, sway: 0.09, per: 4.2 },
    { float: 0.07, bob: 0.03, spin: 0.14, per: 3 }, { squash: 0.06, spin: 0.1, per: 2.2 }, { bob: 0.025, sway: 0.03, per: 2.8 }, { float: 0.08, bob: 0.04, sway: 0.1, per: 2 },
  ];
  function drawToy(c, id, x, y, size, rot = 0, blink = false) {
    c.save(); c.translate(x, y); if (rot) c.rotate(rot); c.scale(size / 100, size / 100); BLINK = blink; TOY[id](c); BLINK = false; c.restore();
  }
  const toyCache = new Map();
  function toySprite(id, px, blink = false) {
    px = Math.max(8, Math.round(px));
    const key = id + '|' + px + (blink ? 'b' : '');
    let s = toyCache.get(key);
    if (!s) { s = mk(px); drawToy(s.getContext('2d'), id, px / 2, px / 2, px, 0, blink); if (toyCache.size > 160) toyCache.clear(); toyCache.set(key, s); }
    return s;
  }

  /* ---------- The claw. Origin = the pivot bar under the housing, r = capsule radius it is built for, open 0..1.
   * Chunky on purpose: machined housing with an indicator lamp, pistons, pinned joints, rubber-tipped fingers. ---------- */
  const clawAngle = open => 0.42 + open * 0.56;
  // where the tip of a side finger is (side = -1 | 1), relative to the pivot, in units of r
  function clawTip(open, side) {
    const a = clawAngle(open);
    return [side * (0.55 + 1.3 * Math.sin(a) + 1.25 * Math.sin(a - 1.15)), 0.35 + 1.3 * Math.cos(a) + 1.25 * Math.cos(a - 1.15)];
  }
  const CLAW_TOP = 1.86;                           // the cable collar sits this many r above the pivot
  function drawClaw(c, r, open, part, pal = {}) {
    const metal = pal.metal || '#dfe4ee', edge = pal.edge || '#3d4660', tip = pal.tip || '#ff5f9e', rubber = pal.rubber || '#2c2540', lamp = pal.lamp || tip, a = clawAngle(open);
    c.lineCap = 'round'; c.lineJoin = 'round';
    const seg = (x0, y0, x1, y1, w, col) => { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); };
    const pin = (x, y, q) => { c.fillStyle = edge; ell(c, x, y, q, q); c.fill(); c.fillStyle = lite(metal, 0.3); ell(c, x, y, q * 0.64, q * 0.64); c.fill(); c.fillStyle = edge; ell(c, x, y, q * 0.24, q * 0.24); c.fill(); c.fillStyle = 'rgba(255,255,255,.8)'; ell(c, x - q * 0.26, y - q * 0.28, q * 0.16, q * 0.16); c.fill(); };
    if (part === 'back') {
      // the third finger reaches round the back of whatever is held (foreshortened when open)
      const len = 2.3 * r * (1 - open * 0.3), w = 1 - open * 0.15, y0 = 0.3 * r, y1 = y0 + len;
      seg(0, y0, 0, y1, r * 0.5 * w, edge); seg(0, y0, 0, y0 + len * 0.6, r * 0.33 * w, dark(metal, 0.3)); seg(0, y0 + len * 0.62, 0, y1, r * 0.34 * w, rubber);
      c.fillStyle = tip; ell(c, 0, y1, r * 0.13, r * 0.13); c.fill();
    }
    // side fingers: pistons and upper arms reach round behind what is held, the lower fingers hook in front of it
    for (const s of [-1, 1]) {
      const p0 = [s * 0.55 * r, 0.35 * r], p1 = [p0[0] + s * 1.3 * r * Math.sin(a), p0[1] + 1.3 * r * Math.cos(a)];
      const p2 = [p1[0] + s * 1.25 * r * Math.sin(a - 1.15), p1[1] + 1.25 * r * Math.cos(a - 1.15)];
      const pm = [p1[0] + (p2[0] - p1[0]) * 0.5, p1[1] + (p2[1] - p1[1]) * 0.5], pa = [p0[0] + (p1[0] - p0[0]) * 0.62, p0[1] + (p1[1] - p0[1]) * 0.62], ph = [s * 0.34 * r, -0.12 * r];
      if (part === 'back') {
      // piston from the housing to the upper arm
      seg(ph[0], ph[1], pa[0], pa[1], r * 0.2, edge); seg(ph[0], ph[1], pa[0], pa[1], r * 0.1, '#eef2fa');
      const pc = [ph[0] + (pa[0] - ph[0]) * 0.56, ph[1] + (pa[1] - ph[1]) * 0.56];
      seg(ph[0], ph[1], pc[0], pc[1], r * 0.3, edge); seg(ph[0], ph[1], pc[0], pc[1], r * 0.19, dark(metal, 0.22));
      seg(p0[0], p0[1], p1[0], p1[1], r * 0.52, edge); seg(p0[0], p0[1], p1[0], p1[1], r * 0.35, metal);
      seg(p0[0] - s * r * 0.06, p0[1] + r * 0.12, p1[0] - s * r * 0.07, p1[1] - r * 0.1, r * 0.08, 'rgba(255,255,255,.8)');
      pin(pa[0], pa[1], r * 0.13);
      continue;
      }
      seg(p1[0], p1[1], p2[0], p2[1], r * 0.5, edge); seg(p1[0], p1[1], pm[0], pm[1], r * 0.33, metal);
      seg(pm[0], pm[1], p2[0], p2[1], r * 0.34, rubber);
      c.fillStyle = tip; ell(c, p2[0], p2[1], r * 0.13, r * 0.13); c.fill();
      seg(pm[0], pm[1], pm[0], pm[1], r * 0.38, tip);
      pin(p1[0], p1[1], r * 0.25); pin(p0[0], p0[1], r * 0.22);
    }
    if (part === 'back') return;
    // skirt between the pivots
    c.fillStyle = edge; poly(c, [[-0.95 * r, -0.12 * r], [0.95 * r, -0.12 * r], [0.78 * r, 0.52 * r], [-0.78 * r, 0.52 * r]]); c.fill(); c.strokeStyle = edge; c.lineWidth = r * 0.12; c.stroke();
    c.fillStyle = dark(metal, 0.3); poly(c, [[-0.86 * r, -0.06 * r], [0.86 * r, -0.06 * r], [0.72 * r, 0.44 * r], [-0.72 * r, 0.44 * r]]); c.fill();
    // housing
    const hx = -1.18 * r, hy = -1.5 * r, hw = 2.36 * r, hh = 1.42 * r;
    c.fillStyle = edge; rr(c, hx, hy, hw, hh, r * 0.36); c.fill();
    const g = c.createLinearGradient(0, hy, 0, hy + hh); g.addColorStop(0, lite(metal, 0.7)); g.addColorStop(0.28, metal); g.addColorStop(0.75, dark(metal, 0.16)); g.addColorStop(1, dark(metal, 0.36));
    c.fillStyle = g; rr(c, hx + r * 0.09, hy + r * 0.09, hw - r * 0.18, hh - r * 0.18, r * 0.28); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = r * 0.05; c.beginPath(); c.moveTo(hx + r * 0.4, hy + r * 0.17); c.lineTo(hx + hw - r * 0.4, hy + r * 0.17); c.stroke();
    c.fillStyle = tip; rr(c, hx + r * 0.09, hy + hh * 0.6, hw - r * 0.18, r * 0.2, 0); c.fill();
    c.fillStyle = 'rgba(255,255,255,.35)'; rr(c, hx + r * 0.09, hy + hh * 0.6, hw - r * 0.18, r * 0.06, 0); c.fill();
    c.fillStyle = edge; for (const sx of [-1, 1]) { ell(c, sx * (hw / 2 - r * 0.3), hy + r * 0.32, r * 0.065, r * 0.065); c.fill(); ell(c, sx * (hw / 2 - r * 0.3), hy + hh - r * 0.26, r * 0.065, r * 0.065); c.fill(); }
    c.strokeStyle = rgba(edge, 0.55); c.lineWidth = r * 0.05; for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(r * 0.5, hy + r * (0.36 + i * 0.13)); c.lineTo(r * 0.84, hy + r * (0.36 + i * 0.13)); c.stroke(); }
    // indicator lamp
    const lx = -r * 0.44, ly = hy + r * 0.48, lr = r * 0.2;
    const lg = c.createRadialGradient(lx, ly, 0, lx, ly, lr * 2.6); lg.addColorStop(0, rgba(lamp, 0.75)); lg.addColorStop(1, rgba(lamp, 0));
    c.fillStyle = lg; ell(c, lx, ly, lr * 2.6, lr * 2.6); c.fill();
    c.fillStyle = edge; ell(c, lx, ly, lr * 1.25, lr * 1.25); c.fill(); c.fillStyle = lamp; ell(c, lx, ly, lr, lr); c.fill();
    c.fillStyle = 'rgba(255,255,255,.85)'; ell(c, lx - lr * 0.3, ly - lr * 0.34, lr * 0.34, lr * 0.26); c.fill();
    // cable collar
    c.fillStyle = edge; rr(c, -r * 0.34, -CLAW_TOP * r, r * 0.68, r * 0.46, r * 0.12); c.fill();
    c.fillStyle = dark(metal, 0.12); rr(c, -r * 0.25, -CLAW_TOP * r + r * 0.08, r * 0.5, r * 0.3, r * 0.08); c.fill();
    c.fillStyle = 'rgba(255,255,255,.5)'; rr(c, -r * 0.25, -CLAW_TOP * r + r * 0.08, r * 0.5, r * 0.08, r * 0.04); c.fill();
  }
  // a little arcade prize ticket (w x h around the origin), for the win celebrations
  function ticketChip(c, w, h, col, col2) {
    const n = h * 0.22;
    c.fillStyle = col; c.beginPath(); c.moveTo(-w / 2, -h / 2); c.lineTo(w / 2, -h / 2); c.lineTo(w / 2, -n); c.arc(w / 2, 0, n, -PI / 2, PI / 2, true); c.lineTo(w / 2, h / 2); c.lineTo(-w / 2, h / 2); c.lineTo(-w / 2, n); c.arc(-w / 2, 0, n, PI / 2, -PI / 2, true); c.closePath(); c.fill();
    c.fillStyle = col2 || 'rgba(255,255,255,.75)'; star(c, 0, 0, h * 0.3, h * 0.13, 5); c.fill();
  }

  window.GG = { TAU, TIERS, TOYS, POSE, PRISM, CLAW_TOP, mix, lite, dark, rgba, rr, ell, star, glint, poly, drawCapsule, capsuleBase, capsuleGloss, capsuleSprites, drawToy, toySprite, drawClaw, clawTip, clawAngle, prism, ticketChip };
})();
