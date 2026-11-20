/* Neon Koi: the machine's playfield as a small 2D physics world.
 * It never decides anything. When the game loads, it fires a few thousand practice balls through the pins
 * and keeps a library of recorded flights, sorted by where each ball ended (pocket 0..10, or the KOI GATE).
 * When a round's book says "ball 4 lands in pocket 9", the front end plays back one of the recorded flights
 * that really ended in pocket 9, so every ball on screen moves by real physics and ends where the book says.
 * Units: the field is 100 wide; y grows downwards. */
(function (root) {
  'use strict';
  const B = {
    W: 100, WALL_L: 4, WALL_R: 96,
    ARC: { cx: 50, cy: 46, r: 46 },          // the steel rail over the top of the field
    BR: 1.35,                                 // ball radius
    PR: 0.72,                                 // pin radius
    POCKET_TOP: 127, FLOOR: 141, NP: 11,
    SCREEN: { x0: 30, x1: 70, top: 38, mid: 52, bot: 74, r: 20 },   // the lantern screen: a dome over a box
    GATE: { x: 50, y: 90, hw: 4.2, depth: 6 },                    // the KOI GATE under the screen
    G: 150, E: 0.42, DT: 1 / 240, REC: 4,      // gravity, bounce, step, record every 4th step (60 fps)
  };
  B.PW = (B.WALL_R - B.WALL_L) / B.NP;
  B.pocketX = k => B.WALL_L + (k + 0.5) * B.PW;
  const S = B.SCREEN, GT = B.GATE;

  // ---------- Pins ----------
  const pins = [];
  const inScreen = (x, y, pad) => (y > S.mid - pad && y < S.bot + pad && x > S.x0 - pad && x < S.x1 + pad) ||
    (y <= S.mid && Math.hypot(x - 50, y - S.mid) < S.r + pad);
  const nearGate = (x, y) => Math.abs(x - GT.x) < GT.hw + 6 && y > GT.y - 5.5 && y < GT.y + GT.depth + 3;
  for (let row = 0, y = 24; y <= 120; row++, y += 6.4) {
    const off = row % 2 ? 0 : 3.9;
    for (let x = B.WALL_L + 6 + off - 3; x <= B.WALL_R - 6; x += 7.8) {
      if (y < B.ARC.cy && Math.hypot(x - B.ARC.cx, y - B.ARC.cy) > B.ARC.r - 5) continue;
      if (x < B.WALL_L + 5.5 || inScreen(x, y, 4.3) || nearGate(x, y)) continue;
      pins.push({ x, y, r: B.PR });
    }
  }
  // Guide pins that lead balls from under the screen toward the gate, and the gate's two "tulip" posts.
  [[38, 80], [62, 80], [42.5, 84.5], [57.5, 84.5]].forEach(([x, y]) => pins.push({ x, y, r: B.PR, guide: true }));
  pins.push({ x: GT.x - GT.hw - 0.5, y: GT.y, r: 1.0, post: true }, { x: GT.x + GT.hw + 0.5, y: GT.y, r: 1.0, post: true });
  // Divider tips between the pockets.
  for (let i = 1; i < B.NP; i++) pins.push({ x: B.WALL_L + i * B.PW, y: B.POCKET_TOP, r: 0.55, tip: true });
  B.pins = pins;

  // Spatial hash for the pins.
  const CELL = 6, grid = new Map();
  const key = (cx, cy) => cx * 1000 + cy;
  pins.forEach((p, i) => {
    for (let cx = Math.floor((p.x - 3) / CELL); cx <= Math.floor((p.x + 3) / CELL); cx++)
      for (let cy = Math.floor((p.y - 3) / CELL); cy <= Math.floor((p.y + 3) / CELL); cy++) {
        const k = key(cx, cy); if (!grid.has(k)) grid.set(k, []); const a = grid.get(k); if (!a.includes(i)) a.push(i);
      }
  });

  // ---------- One flight ----------
  // Starts at the launcher (top right of the rail) with speed `v`, returns { xy, hits, end } or null if it stalls.
  function fly(v, rnd) {
    const R = B.BR, A = B.ARC, E = B.E, dt = B.DT;
    const th0 = 0.16;
    let x = A.cx + (A.r - R) * Math.cos(th0), y = A.cy - (A.r - R) * Math.sin(th0);
    let vx = -v * Math.sin(th0), vy = -v * Math.cos(th0);
    const xy = [x, y], hits = [];
    let step = 0, end = null, captured = false, lastHit = -1;
    const maxSteps = 240 * 9;
    while (step < maxSteps) {
      step++;
      vy += B.G * dt;
      const sp = Math.hypot(vx, vy); if (sp > 150) { vx *= 150 / sp; vy *= 150 / sp; }
      const py = y; x += vx * dt; y += vy * dt;
      if (!captured) {
        // pins
        const cx = Math.floor(x / CELL), cy = Math.floor(y / CELL), list = grid.get(key(cx, cy));
        if (list) for (const i of list) {
          const p = pins[i], dx = x - p.x, dy = y - p.y, d = Math.hypot(dx, dy), m = R + p.r;
          if (d < m && d > 1e-6) {
            const nx = dx / d, ny = dy / d; x = p.x + nx * m; y = p.y + ny * m;
            const vn = vx * nx + vy * ny;
            if (vn < 0) {
              vx -= (1 + E) * vn * nx; vy -= (1 + E) * vn * ny;
              const tx = -ny, ty = nx, vt = vx * tx + vy * ty;      // a little friction and a little spin scatter
              const kick = (rnd() - 0.5) * 6;
              vx -= vt * 0.08 * tx; vy -= vt * 0.08 * ty; vx += tx * kick; vy += ty * kick;
              if (-vn > 10 && (i !== lastHit || step % 8 === 0)) { hits.push(Math.floor(step / B.REC), i); lastHit = i; }
            }
          }
        }
        // side walls
        if (x < B.WALL_L + R) { x = B.WALL_L + R; vx = Math.abs(vx) * E; }
        if (x > B.WALL_R - R) { x = B.WALL_R - R; vx = -Math.abs(vx) * E; }
        // the rail over the top
        if (y < A.cy) {
          const dx = x - A.cx, dy = y - A.cy, d = Math.hypot(dx, dy);
          if (d > A.r - R) {
            const nx = dx / d, ny = dy / d; x = A.cx + nx * (A.r - R); y = A.cy + ny * (A.r - R);
            const vn = vx * nx + vy * ny; if (vn > 0) { vx -= (1 + 0.15) * vn * nx; vy -= (1 + 0.15) * vn * ny; }
          }
        }
        // the lantern screen: a dome on a box
        if (y > S.mid && y < S.bot + R && x > S.x0 - R && x < S.x1 + R) {
          const qx = Math.max(S.x0, Math.min(S.x1, x)), qy = Math.max(S.mid, Math.min(S.bot, y));
          const dx = x - qx, dy = y - qy, d = Math.hypot(dx, dy);
          if (d < R) {
            let nx, ny;
            if (d > 1e-6) { nx = dx / d; ny = dy / d; } else { nx = x < 50 ? -1 : 1; ny = 0; }
            x = qx + nx * R; y = qy + ny * R;
            const vn = vx * nx + vy * ny; if (vn < 0) { vx -= (1 + E) * vn * nx; vy -= (1 + E) * vn * ny; }
          }
        }
        if (y <= S.mid + R) {
          const dx = x - 50, dy = y - S.mid, d = Math.hypot(dx, dy);
          if (d < S.r + R && dy < R) {
            const nx = dx / d, ny = dy / d; x = 50 + nx * (S.r + R); y = S.mid + ny * (S.r + R);
            const vn = vx * nx + vy * ny; if (vn < 0) { vx -= (1 + E) * vn * nx; vy -= (1 + E) * vn * ny; }
            if (Math.abs(dx) < 0.6) vx += (rnd() - 0.5) * 8;                  // nothing balances on the top of the dome
          }
        }
        // the gate: a ball that drops into its mouth is caught; its outside walls are solid
        const inMouth = Math.abs(x - GT.x) < GT.hw - R * 0.35;
        if (py < GT.y && y >= GT.y && inMouth && vy > 0) { captured = true; end = 'g'; }
        else if (y > GT.y - R && y < GT.y + GT.depth + R && Math.abs(x - GT.x) < GT.hw + 0.9 + R && !inMouth) {
          const side = x < GT.x ? -1 : 1, wallX = GT.x + side * (GT.hw + 0.9);
          if (y > GT.y + 0.5) { x = wallX + side * R; vx = side * Math.abs(vx) * E; }
        }
        // pocket dividers
        if (y > B.POCKET_TOP) {
          for (let i = 1; i < B.NP; i++) {
            const dx = B.WALL_L + i * B.PW;
            if (Math.abs(x - dx) < R + 0.35) { const s = x < dx ? -1 : 1; x = dx + s * (R + 0.35); vx = s * Math.abs(vx) * E; }
          }
        }
        if (y > B.FLOOR - R) {
          y = B.FLOOR - R;
          const k = Math.max(0, Math.min(B.NP - 1, Math.floor((x - B.WALL_L) / B.PW)));
          end = k;
        }
      } else {
        // caught: slide down into the gate cup
        vx = (GT.x - x) * 6; vy = Math.max(20, vy * 0.9);
        if (y > GT.y + GT.depth - 1) { y = GT.y + GT.depth - 1; }
      }
      if (step % B.REC === 0) xy.push(x, y);
      if (end !== null && (end !== 'g' ? true : y >= GT.y + GT.depth - 1.5)) {
        xy.push(x, y);
        return { xy: new Float32Array(xy), hits: new Int32Array(hits), end };
      }
    }
    return null;
  }

  // ---------- The library ----------
  // Fires practice balls at random launch speeds until every pocket and the gate have enough flights.
  function library(rnd = Math.random, opts = {}) {
    const want = opts.want || 6, cap = opts.cap || 24, maxTries = opts.maxTries || 30000;
    const lib = { g: [] }; for (let k = 0; k < B.NP; k++) lib[k] = [];
    const count = { g: 0 }; for (let k = 0; k < B.NP; k++) count[k] = 0;
    let tries = 0;
    const full = () => Object.keys(lib).every(k => lib[k].length >= (k === 'g' ? want + 2 : want));
    // Speeds: most launches go over the top; a spread of strengths reaches every part of the field.
    while (tries < maxTries && !full()) {
      tries++;
      const v = opts.vmin + rnd() * (opts.vmax - opts.vmin);
      const f = fly(v, rnd);
      if (!f) continue;
      count[f.end]++;
      if (lib[f.end].length < cap) { f.v = v; lib[f.end].push(f); }
    }
    lib.tries = tries; lib.count = count;
    return lib;
  }
  B.fly = fly;
  B.library = (rnd, o = {}) => library(rnd, { vmin: 42, vmax: 118, ...o });
  if (typeof module !== 'undefined' && module.exports) module.exports = B; else root.NKBoard = B;
})(typeof window !== 'undefined' ? window : globalThis);
