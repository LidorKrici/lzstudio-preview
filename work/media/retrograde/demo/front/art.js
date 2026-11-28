/* Retrograde art helpers for game.js. The pictures themselves are painted or baked (assets/: the board, the 3D symbols,
 * the room, the fx bursts, the ui kit); this file loads them, fits the painted board to the field, and draws the two
 * light sprites the effects are made of. The ALIGNMENT dial's face is still drawn here (no painted face yet).
 * The 2D code-drawn medallions, sky, orrery rings and plate that used to live here are in art-archive/. */
window.RetroArt = (() => {
  'use strict';
  const TAU = Math.PI * 2, PI = Math.PI;
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const mk = (w, h = w) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };
  const seeded = seed => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
  const conic = (c, a, x, y) => (c.createConicGradient ? c.createConicGradient(a, x, y) : null);

  /* The seven planets and their metals (names for the rules). */
  const METAL = {
    L: { planet: 'Saturn', metal: 'lead' }, T: { planet: 'Jupiter', metal: 'tin' }, I: { planet: 'Mars', metal: 'iron' }, C: { planet: 'Venus', metal: 'copper' },
    Q: { planet: 'Mercury', metal: 'quicksilver' }, S: { planet: 'Moon', metal: 'silver' }, G: { planet: 'Sun', metal: 'gold' },
  };

  // 3D symbols baked from the Tripo models (sym3d.js, tools/make-sprites-3d.mjs).
  const IMG3D = {};
  const ready = (() => {
    const src = window.LZ_SYM3D; if (!src) return Promise.resolve();
    return Promise.all(Object.keys(src).map(k => { const i = new Image(); i.src = src[k]; return (i.decode ? i.decode() : new Promise(r => { i.onload = r; })).then(() => { IMG3D[k] = i; }, () => {}); }));
  })();
  // the painted board (tools/make-board.mjs -> board.js + assets/board): gold frame + star-atlas plate, and the
  // socket under every medallion.
  const BOARD = window.RG_BOARD || null, BIMG = {};
  const boardReady = !BOARD ? Promise.resolve() : Promise.all([['plate', BOARD.src], ['socket', BOARD.socket]].map(([k, src]) => { const i = new Image(); i.src = src; return (i.decode ? i.decode() : new Promise(r => { i.onload = r; })).then(() => { BIMG[k] = i; }, () => {}); }));
  // the painted ALIGNMENT dial face (art/ui2/dial-face, tools/key-ui2.mjs): decoded before the game starts
  let FACE = null;
  const faceReady = new Promise(res => { const i = new Image(); i.onload = () => { FACE = i; res(); }; i.onerror = () => res(); i.src = 'assets/ui/dial-face.webp'; }).then(() => FACE && FACE.decode ? FACE.decode().catch(() => {}) : 0);
  const allReady = Promise.all([ready, boardReady, faceReady]);
  // the frame's widest side as a share of the 7x7 field (0 = no painted board)
  const boardFrame = () => { if (!BIMG.plate) return 0; const [l, t, r, b] = BOARD.inner, iw = r - l, ih = b - t; return Math.max(l / iw, (BOARD.w - r) / iw, t / ih, (BOARD.h - b) / ih); };
  const sym3d = sym => (window.LZ_SYM3D && window.LZ_SYM3D[sym]) || null;
  // a symbol at px x px (the baked 3D picture; empty until it has decoded)
  function sprite(sym, px) {
    const cv = mk(px), c = cv.getContext('2d');
    if (IMG3D[sym]) { c.imageSmoothingQuality = 'high'; c.drawImage(IMG3D[sym], 0, 0, px, px); }
    return cv;
  }
  // soft additive glow and a four-point glint: the two light sprites every effect is drawn with
  function glow(px, hex) {
    const cv = mk(px), c = cv.getContext('2d'), g = c.createRadialGradient(px / 2, px / 2, 0, px / 2, px / 2, px / 2); // station:ok the soft light sprite particles and light are drawn with
    g.addColorStop(0, rgba(hex, .95)); g.addColorStop(.35, rgba(hex, .4)); g.addColorStop(1, rgba(hex, 0)); c.fillStyle = g; c.fillRect(0, 0, px, px);
    return cv;
  }
  function spark(px) {
    const cv = mk(px), c = cv.getContext('2d'), h = px / 2;
    let g = c.createRadialGradient(h, h, 0, h, h, h); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(.25, 'rgba(255,240,200,.35)'); g.addColorStop(1, 'rgba(255,240,200,0)'); c.fillStyle = g; c.fillRect(0, 0, px, px); // station:ok the halo of the glint sprite (light)
    c.fillStyle = '#fff'; c.beginPath();
    for (let k = 0; k < 4; k++) { const a = k * PI / 2; c.lineTo(h + Math.cos(a) * h * .96, h + Math.sin(a) * h * .96); c.lineTo(h + Math.cos(a + PI / 4) * h * .09, h + Math.sin(a + PI / 4) * h * .09); }
    c.closePath(); c.fill();
    return cv;
  }

  /* The painted board: its inner opening fitted to the field, sockets under the cells. Size (G + 2b) css px; the 7x7
   * field starts b px in. RETROGRADE / ECLIPSE turn the star atlas (not the frame) to the room's colour. */
  function plate(G, b, dpr, pal) {
    const S = Math.round((G + b * 2) * dpr), cv = mk(S);
    if (!BIMG.plate) return cv;
    const c = cv.getContext('2d'), bb = b * dpr, g = G * dpr, cs = g / 7;
    const [l, t, r, bt] = BOARD.inner, sx = g / (r - l), sy = g / (bt - t);
    c.imageSmoothingQuality = 'high';
    c.drawImage(BIMG.plate, bb - l * sx, bb - t * sy, BOARD.w * sx, BOARD.h * sy);
    if (BIMG.socket) { const z = cs * .97; for (let i = 0; i < 49; i++) { const x = bb + (i % 7 + .5) * cs, y = bb + (((i / 7) | 0) + .5) * cs; c.drawImage(BIMG.socket, x - z / 2, y - z / 2, z, z); } }
    const tint = pal === 'retro' ? '#b3204f' : pal === 'ecl' ? '#b07a1a' : null;
    if (tint) { c.save(); c.beginPath(); c.rect(bb, bb, g, g); c.clip(); c.globalCompositeOperation = 'color'; c.globalAlpha = .6; c.fillStyle = tint; c.fillRect(bb, bb, g, g); c.restore(); }
    return cv;
  }

  /* The ALIGNMENT dial's still parts, inside the painted zodiac ring (assets/ui/dial-ring.webp): brass bezel with the
   * step ticks, enamel face, orbit hairlines. Still drawn in code: it needs a painted face (see the station report). */
  const PAL = {
    night: { plate: ['#101a44', '#070b22'], leaf: '#e6c27a', ink: 'rgba(36,20,2,.8)' },
    retro: { plate: ['#3a0c30', '#170410'], leaf: '#ffd08a', ink: 'rgba(46,8,4,.82)' },
  };
  const BRASS = [[0, '#6b4c1c'], [.055, '#ecd391'], [.1, '#9a7430'], [.25, '#46300f'], [.4, '#a8843a'], [.48, '#fdeebb'], [.535, '#b08a3c'], [.7, '#3c280b'], [.85, '#9c7832'], [.94, '#dfc47e'], [1, '#6b4c1c']];
  const ROSE = [[0, '#9a4a2c'], [.055, '#ffe6cc'], [.1, '#dc8a5e'], [.25, '#5e2012'], [.4, '#e09468'], [.48, '#fff4e6'], [.535, '#e8a078'], [.7, '#50180c'], [.85, '#d48a5e'], [.94, '#ffd4b0'], [1, '#9a4a2c']];
  const DIAL_ORBIT = i => .4 + i * .07;
  function dialFace(px, pal) {
    if (FACE) {             // the painting; RETROGRADE gets the same crimson tint as the cartouche
      const cv = mk(px), c = cv.getContext('2d'), R = px / 2 * .97;
      if (pal === 'retro') c.filter = 'sepia(.35) hue-rotate(-28deg) saturate(1.7) brightness(.95)';
      c.drawImage(FACE, px / 2 - R, px / 2 - R, R * 2, R * 2); c.filter = 'none';
      return cv;
    }
    return mk(px);         // the picture failed to load: an empty face (the ring and the hub are still drawn)
  }

  return { ready: allReady, boardFrame, sym3d, METAL, DIAL_ORBIT, mk, seeded, rgba, clamp, sprite, glow, spark, plate, dialFace };
})();
