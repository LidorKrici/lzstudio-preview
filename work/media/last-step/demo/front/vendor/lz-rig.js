/* LZ Rig v1: data-driven 2D skeletal animation for LZ Studio games, drawn with PixiJS v8 meshes.
 *
 * One JSON file describes a character: a bone hierarchy, slots that show attachments, attachments (a whole
 * image skinned to several bones by soft weight regions, or a separate part image riding one bone), deformers
 * (a radial bulge, a wave) and keyframed animations with Bezier/eased curves, image swaps and events.
 * The format is documented in README.md. A DragonBones JSON can be converted with lz-rig-dragonbones.js.
 *
 * Usage:
 *   const rig = new LZRig(PIXI, data, textures);      // textures: { imageName: PIXI.Texture }
 *   stage.addChild(rig.view);
 *   rig.play('idle', { loop: true });                  // track 0
 *   rig.play('win', { then: 'idle' });                 // plays win once, then mixes back to idle
 *   rig.on('event', (name, data) => ...);              // events keyed in the animation (sound, shake, burst)
 *   rig.update(dtSeconds);                             // every frame (or LZRig.attach(app.ticker, rig))
 *
 * Coordinates: pixels, y down, rotation in degrees clockwise (same as PixiJS and DragonBones).
 * The rig origin (0,0) is the character's anchor, usually the feet, so squash and stretch pivot there.
 */
(function (root) {
  'use strict';

  /* ---------- easing ---------- */
  const c1 = 1.70158, c3 = c1 + 1;
  const EASE = {
    linear: t => t,
    inQuad: t => t * t, outQuad: t => t * (2 - t), inOutQuad: t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
    inCubic: t => t * t * t, outCubic: t => 1 - Math.pow(1 - t, 3), inOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    inSine: t => 1 - Math.cos(t * Math.PI / 2), outSine: t => Math.sin(t * Math.PI / 2), inOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
    inBack: t => c3 * t * t * t - c1 * t * t, outBack: t => 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2),
    outElastic: t => t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI) / 3) + 1,
    outBounce: t => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75; if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375; return n * (t -= 2.625 / d) * t + 0.984375; },
  };
  // CSS-style cubic-bezier(x1, y1, x2, y2) on a 0..1 segment.
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const X = t => ((ax * t + bx) * t + cx) * t, dX = t => (3 * ax * t + 2 * bx) * t + cx, Y = t => ((ay * t + by) * t + cy) * t;
    return x => {
      let t = x;
      for (let i = 0; i < 6; i++) { const d = dX(t); if (Math.abs(d) < 1e-6) break; t -= (X(t) - x) / d; }
      if (t < 0 || t > 1) { let lo = 0, hi = 1; t = x; for (let i = 0; i < 20; i++) { if (X(t) < x) lo = t; else hi = t; t = (lo + hi) / 2; } }
      return Y(t);
    };
  }
  // A key's curve shapes the segment that STARTS at that key. undefined = linear, 'stepped' = hold.
  function curveFn(c) {
    if (c === undefined || c === null || c === 'linear') return EASE.linear;
    if (c === 'stepped') return null;
    if (typeof c === 'string') { if (!EASE[c]) throw new Error('LZRig: unknown easing "' + c + '"'); return EASE[c]; }
    if (Array.isArray(c) && c.length === 4) return bezier(c[0], c[1], c[2], c[3]);
    throw new Error('LZRig: bad curve ' + JSON.stringify(c));
  }

  /* ---------- keys: [t, v1, (v2), (curve)] ---------- */
  function keys(list, width) {
    if (!Array.isArray(list) || !list.length) throw new Error('LZRig: empty timeline');
    let last = -Infinity;
    return list.map(k => {
      if (k[0] < last) throw new Error('LZRig: keys out of order at t=' + k[0]);
      last = k[0];
      const v = k.slice(1, 1 + width);
      if (v.length < width || v.some(x => typeof x !== 'number')) throw new Error('LZRig: key needs ' + width + ' number(s): ' + JSON.stringify(k));
      return { t: k[0], v, f: curveFn(k[1 + width]) };
    });
  }
  function sample(ks, time, out) {
    const n = ks.length, w = out.length;
    if (time <= ks[0].t || n === 1) { for (let j = 0; j < w; j++) out[j] = ks[0].v[j]; return out; }
    if (time >= ks[n - 1].t) { for (let j = 0; j < w; j++) out[j] = ks[n - 1].v[j]; return out; }
    let i = 0; while (i < n - 2 && ks[i + 1].t <= time) i++;
    const a = ks[i], b = ks[i + 1];
    if (!a.f) { for (let j = 0; j < w; j++) out[j] = a.v[j]; return out; }
    const p = a.f((time - a.t) / (b.t - a.t));
    for (let j = 0; j < w; j++) out[j] = a.v[j] + (b.v[j] - a.v[j]) * p;
    return out;
  }
  // Attachment keys: [t, name] or [t, name, fadeSeconds] (crossfade from the previous image).
  function stepKeys(list) { return list.map(k => ({ t: k[0], v: k[1], fade: k[2] || 0 })); }
  function stepIndex(ks, time) { let i = 0; for (let j = 0; j < ks.length; j++) { if (ks[j].t <= time) i = j; else break; } return i; }
  function hex(c) { return typeof c === 'number' ? c : parseInt(String(c).replace('#', ''), 16); }

  /* ---------- 2D affine: [a, b, c, d, tx, ty]  (x' = a x + c y + tx, y' = b x + d y + ty) ---------- */
  function local(m, o, x, y, rotDeg, sx, sy) {
    const r = rotDeg * Math.PI / 180, cs = Math.cos(r), sn = Math.sin(r);
    m[o] = cs * sx; m[o + 1] = sn * sx; m[o + 2] = -sn * sy; m[o + 3] = cs * sy; m[o + 4] = x; m[o + 5] = y;
  }
  function mul(m, o, p, po, q, qo) {   // m[o] = p[po] * q[qo]
    const a = p[po] * q[qo] + p[po + 2] * q[qo + 1], b = p[po + 1] * q[qo] + p[po + 3] * q[qo + 1];
    const c = p[po] * q[qo + 2] + p[po + 2] * q[qo + 3], d = p[po + 1] * q[qo + 2] + p[po + 3] * q[qo + 3];
    const tx = p[po] * q[qo + 4] + p[po + 2] * q[qo + 5] + p[po + 4], ty = p[po + 1] * q[qo + 4] + p[po + 3] * q[qo + 5] + p[po + 5];
    m[o] = a; m[o + 1] = b; m[o + 2] = c; m[o + 3] = d; m[o + 4] = tx; m[o + 5] = ty;
  }
  function inv(m, o, p, po) {
    const a = p[po], b = p[po + 1], c = p[po + 2], d = p[po + 3], tx = p[po + 4], ty = p[po + 5], det = a * d - b * c;
    if (Math.abs(det) < 1e-12) throw new Error('LZRig: a bone has zero scale in the setup pose');
    m[o] = d / det; m[o + 1] = -b / det; m[o + 2] = -c / det; m[o + 3] = a / det;
    m[o + 4] = (c * ty - d * tx) / det; m[o + 5] = (b * tx - a * ty) / det;
  }

  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

  /* ---------- compile the JSON once (shared by every instance of the same rig) ---------- */
  function compile(data) {
    if (!data || data.lzrig !== 1) throw new Error('LZRig: not an LZ Rig v1 file (missing "lzrig": 1)');
    const size = data.size || [256, 256], origin = data.origin || [0.5, 1];
    const bones = data.bones.map((b, i) => ({ name: b.name, i, parent: -1, x: b.x || 0, y: b.y || 0, rot: b.rotation || 0, sx: b.scaleX ?? 1, sy: b.scaleY ?? 1, length: b.length || 0, raw: b }));
    const bi = {};
    bones.forEach(b => { if (bi[b.name] !== undefined) throw new Error('LZRig: duplicate bone ' + b.name); bi[b.name] = b.i; });
    bones.forEach(b => {
      if (b.raw.parent === undefined) return;
      const p = bi[b.raw.parent];
      if (p === undefined) throw new Error('LZRig: bone ' + b.name + ' has unknown parent ' + b.raw.parent);
      if (p >= b.i) throw new Error('LZRig: bone ' + b.name + ' must come after its parent ' + b.raw.parent);
      b.parent = p;
    });
    const boneIdx = n => { const i = bi[n]; if (i === undefined) throw new Error('LZRig: unknown bone ' + n); return i; };

    // Attachments may inherit: { "like": "base", "image": "base-blink" } copies base and swaps the image.
    const atts = {};
    const rawAtts = data.attachments || {};
    const resolve = (name, seen = []) => {
      if (atts[name]) return atts[name];
      const a = rawAtts[name];
      if (!a) throw new Error('LZRig: unknown attachment ' + name);
      if (seen.includes(name)) throw new Error('LZRig: attachment inheritance loop at ' + name);
      const full = a.like ? Object.assign({}, resolve(a.like, seen.concat(name)).raw, a) : a;
      delete full.like;
      const out = { name, raw: full, type: full.type || 'skin', image: full.image };
      if (!out.image) throw new Error('LZRig: attachment ' + name + ' has no image');
      if (out.type === 'skin') {
        out.grid = full.grid || 12;
        out.origin = full.origin || origin;
        out.size = full.size || size;
        out.root = boneIdx(full.root || data.bones[0].name);
        out.regions = (full.weights || []).map(r => ({ bone: boneIdx(r.bone), box: r.box, circle: r.circle, soft: r.soft ?? 0.04, max: r.weight ?? 1 }));
        out.deform = Object.keys(full.deform || {}).map(k => ({ name: k, ...full.deform[k] }));
        if (out.deform.length > 8) throw new Error('LZRig: attachment ' + name + ' has more than 8 deformers');
        out.deform.forEach(dd => { if (!['bulge', 'wave', 'value'].includes(dd.type)) throw new Error('LZRig: deformer ' + dd.name + ' has unknown type ' + dd.type); });
      } else if (out.type === 'region') {
        out.bone = full.bone !== undefined ? boneIdx(full.bone) : null;   // null = the slot's bone
        out.x = full.x || 0; out.y = full.y || 0; out.rot = full.rotation || 0; out.sx = full.scaleX ?? 1; out.sy = full.scaleY ?? 1;
        out.w = full.width; out.h = full.height; out.anchor = full.anchor || [0.5, 0.5];
      } else throw new Error('LZRig: attachment type must be "skin" or "region": ' + name);
      atts[name] = out;
      return out;
    };
    Object.keys(rawAtts).forEach(n => resolve(n));

    const slots = (data.slots || []).map((s, i) => {
      if (s.attachment && !atts[s.attachment]) throw new Error('LZRig: slot ' + s.name + ' shows unknown attachment ' + s.attachment);
      return { name: s.name, i, bone: boneIdx(s.bone || data.bones[0].name), attachment: s.attachment || null, alpha: s.alpha ?? 1, tint: hex(s.tint ?? 0xffffff), blend: s.blend || 'normal' };
    });
    const si = Object.fromEntries(slots.map(s => [s.name, s.i]));
    const deformNames = new Set();
    Object.values(atts).forEach(a => (a.deform || []).forEach(d => deformNames.add(d.name)));

    const anims = {};
    for (const [name, a] of Object.entries(data.animations || {})) {
      const out = { name, duration: a.duration, loop: !!a.loop, tags: a.tags || [], bones: [], slots: [], deform: [], events: [] };
      if (!(a.duration > 0)) throw new Error('LZRig: animation ' + name + ' needs a positive duration');
      for (const [bn, tl] of Object.entries(a.bones || {})) {
        const t = { bi: boneIdx(bn) };
        if (tl.rotate) t.rotate = keys(tl.rotate, 1);
        if (tl.translate) t.translate = keys(tl.translate, 2);
        if (tl.scale) t.scale = keys(tl.scale, 2);
        out.bones.push(t);
      }
      for (const [sn, tl] of Object.entries(a.slots || {})) {
        if (si[sn] === undefined) throw new Error('LZRig: animation ' + name + ' uses unknown slot ' + sn);
        const t = { si: si[sn] };
        if (tl.attachment) { t.attachment = stepKeys(tl.attachment); t.attachment.forEach(k => { if (k.v && !atts[k.v]) throw new Error('LZRig: ' + name + ' swaps to unknown attachment ' + k.v); }); }
        if (tl.alpha) t.alpha = keys(tl.alpha, 1);
        if (tl.tint) t.tint = tl.tint.map(k => ({ t: k[0], v: hex(k[1]), f: curveFn(k[2]) }));
        out.slots.push(t);
      }
      for (const [dn, ks] of Object.entries(a.deform || {})) {
        if (!deformNames.has(dn)) throw new Error('LZRig: animation ' + name + ' drives unknown deformer ' + dn);
        out.deform.push({ name: dn, keys: keys(ks, 1) });
      }
      out.events = (a.events || []).map(e => ({ t: e[0], name: e[1], data: e[2] })).sort((x, y) => x.t - y.t);
      anims[name] = out;
    }
    return { name: data.name || 'rig', size, origin, bones, bi, atts, slots, si, anims, deformNames: [...deformNames], every: data.every || [] };
  }
  const CACHE = new WeakMap();
  function compiled(data) { if (!CACHE.has(data)) CACHE.set(data, compile(data)); return CACHE.get(data); }

  /* ---------- tint helpers ---------- */
  function lerpTint(a, b, p) {
    const r = ((a >> 16) & 255) + (((b >> 16) & 255) - ((a >> 16) & 255)) * p;
    const g = ((a >> 8) & 255) + (((b >> 8) & 255) - ((a >> 8) & 255)) * p;
    const bl = (a & 255) + ((b & 255) - (a & 255)) * p;
    return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(bl);
  }
  function sampleTint(ks, time) {
    if (time <= ks[0].t) return ks[0].v;
    for (let i = 0; i < ks.length - 1; i++) {
      const a = ks[i], b = ks[i + 1];
      if (time < b.t) return a.f ? lerpTint(a.v, b.v, a.f((time - a.t) / (b.t - a.t))) : a.v;
    }
    return ks[ks.length - 1].v;
  }

  /* ---------- the rig instance ---------- */
  class LZRig {
    constructor(PIXI, data, textures, opts = {}) {
      this.PIXI = PIXI; this.def = compiled(data); this.textures = textures; this.opts = opts;
      const d = this.def, n = d.bones.length;
      this.view = new PIXI.Container();
      this.view.label = 'rig:' + d.name;
      this.timeScale = 1;
      this.lx = new Float64Array(n); this.ly = new Float64Array(n); this.lr = new Float64Array(n); this.lsx = new Float64Array(n); this.lsy = new Float64Array(n);
      this.world = new Float64Array(6 * n); this.restInv = new Float64Array(6 * n); this.skinM = new Float64Array(6 * n);
      this.deformVals = Object.fromEntries(d.deformNames.map(k => [k, 0]));
      this.v1 = [0]; this.v2 = [0, 0]; this.dv = new Float64Array(8);   // scratch, so a frame allocates nothing
      this.slotState = d.slots.map(s => ({ attachment: s.attachment, alpha: s.alpha, tint: s.tint }));
      this.tracks = [];
      this.listeners = { event: [], complete: [], start: [] };
      this.clock = 0;
      this.rng = opts.seed !== undefined ? mulberry(opts.seed) : Math.random;
      this.timers = d.every.map(e => ({ ...e, next: this.rand(e.min, e.max) }));

      // Setup pose world matrices and their inverses (for skinning).
      this.setupPose();
      this.computeWorld();
      for (let i = 0; i < n; i++) inv(this.restInv, 6 * i, this.world, 6 * i);

      // One mesh per attachment, built lazily; each slot shows one at a time.
      this.meshes = {};
      this.slotViews = d.slots.map(s => { const c = new PIXI.Container(); c.label = 'slot:' + s.name; this.view.addChild(c); return c; });
      this.apply();
    }
    rand(a, b) { return a + (b - a) * (this.rng ? this.rng() : Math.random()); }

    /* ----- meshes ----- */
    texture(name) {
      const t = this.textures[name];
      if (!t) throw new Error('LZRig: no texture for image "' + name + '"');
      return t;
    }
    meshFor(att) {
      if (this.meshes[att.name]) return this.meshes[att.name];
      const P = this.PIXI, tex = this.texture(att.image);
      let m;
      if (att.type === 'skin') {
        const g = this.opts.grid || att.grid;   // opts.grid: a denser (hero) or lighter (many on screen) copy of the same rig
        const mesh = new P.MeshPlane({ texture: tex, verticesX: g, verticesY: g }); mesh.autoResize = false;
        const uv = mesh.geometry.getAttribute('aUV').buffer.data, nv = uv.length / 2;
        const [W, H] = att.size, [ou, ov] = att.origin;
        const rx = new Float32Array(nv), ry = new Float32Array(nv);
        const nb = this.def.bones.length, Wt = new Float32Array(nv * nb);
        const regs = att.regions;
        const dfw = att.deform.map(() => new Float32Array(nv));
        for (let v = 0; v < nv; v++) {
          const u = uv[2 * v], w = uv[2 * v + 1];
          rx[v] = (u - ou) * W; ry[v] = (w - ov) * H;
          let tot = 0;
          for (const r of regs) {
            let wt;
            if (r.box) { const [u0, u1, v0, v1] = r.box, f = r.soft; wt = smooth(u0 - f, u0 + f, u) * (1 - smooth(u1 - f, u1 + f, u)) * smooth(v0 - f, v0 + f, w) * (1 - smooth(v1 - f, v1 + f, w)); }
            else { const [cu, cv, rr] = r.circle; wt = 1 - smooth(rr - r.soft, rr + r.soft, Math.hypot(u - cu, w - cv)); }
            wt *= r.max;
            Wt[v * nb + r.bone] += wt; tot += wt;
          }
          if (tot > 1) { for (let b = 0; b < nb; b++) Wt[v * nb + b] /= tot; tot = 1; }
          Wt[v * nb + att.root] += 1 - tot;
          const free = 1 - Math.min(1, regs.length ? tot : 0);
          att.deform.forEach((dd, k) => {
            if (dd.type === 'bulge') { const dist = Math.hypot(u - dd.center[0], w - dd.center[1]) / dd.radius; dfw[k][v] = dist < 1 ? (1 - dist) * (1 - dist) * free : 0; }
            else if (dd.type === 'wave') { dfw[k][v] = Math.pow(1 - w, dd.power ?? 2) * free; }
            // 'value': moves nothing; a keyed number the game reads (glow pulse, beat) via rig.value(name).
          });
        }
        // Sparse influence list per vertex.
        const inf = [];
        for (let v = 0; v < nv; v++) { const l = []; for (let b = 0; b < nb; b++) { const x = Wt[v * nb + b]; if (x > 1e-4) l.push(b, x); } inf.push(l); }
        m = { mesh, att, rx, ry, inf, dfw, pos: mesh.geometry.getAttribute('aPosition').buffer };
      } else {
        const mesh = new P.MeshPlane({ texture: tex, verticesX: 2, verticesY: 2 }); mesh.autoResize = false;
        const w = att.w ?? tex.width, h = att.h ?? tex.height, [ax, ay] = att.anchor;
        const corners = [[-ax * w, -ay * h], [(1 - ax) * w, -ay * h], [-ax * w, (1 - ay) * h], [(1 - ax) * w, (1 - ay) * h]];
        const lm = new Float64Array(6); local(lm, 0, att.x, att.y, att.rot, att.sx, att.sy);
        const rx = new Float32Array(4), ry = new Float32Array(4);
        corners.forEach(([x, y], k) => { rx[k] = lm[0] * x + lm[2] * y + lm[4]; ry[k] = lm[1] * x + lm[3] * y + lm[5]; });
        m = { mesh, att, rx, ry, pos: mesh.geometry.getAttribute('aPosition').buffer };
      }
      return (this.meshes[att.name] = m);
    }

    /* ----- pose ----- */
    setupPose() {
      const B = this.def.bones;
      for (let i = 0; i < B.length; i++) { this.lx[i] = B[i].x; this.ly[i] = B[i].y; this.lr[i] = B[i].rot; this.lsx[i] = B[i].sx; this.lsy[i] = B[i].sy; }
      this.def.slots.forEach((s, i) => { const st = this.slotState[i]; st.attachment = s.attachment; st.alpha = s.alpha; st.tint = s.tint; st.fadeFrom = null; st.fadeP = 1; });
      for (const k in this.deformVals) this.deformVals[k] = 0;
    }
    computeWorld() {
      const B = this.def.bones, W = this.world, L = this.skinM;   // skinM used as scratch for the local matrix
      for (let i = 0; i < B.length; i++) {
        const o = 6 * i;
        local(L, o, this.lx[i], this.ly[i], this.lr[i], this.lsx[i], this.lsy[i]);
        if (B[i].parent < 0) { for (let k = 0; k < 6; k++) W[o + k] = L[o + k]; } else mul(W, o, W, 6 * B[i].parent, L, o);
      }
    }
    // Mix one animation at `time` into the current pose with weight `alpha` (1 = replace keyed values).
    // `entry` (optional) is the track entry, for play(..., { fadeSwap }): the new pose's drawing replaces the old one
    // at once and crossfades over fadeSwap seconds, instead of popping in halfway through the mix.
    mixIn(anim, time, alpha, entry) {
      const B = this.def.bones, v1 = this.v1, v2 = this.v2;
      for (const t of anim.bones) {
        const i = t.bi, b = B[i];
        if (t.rotate) { sample(t.rotate, time, v1); this.lr[i] += (b.rot + v1[0] - this.lr[i]) * alpha; }
        if (t.translate) { sample(t.translate, time, v2); this.lx[i] += (b.x + v2[0] - this.lx[i]) * alpha; this.ly[i] += (b.y + v2[1] - this.ly[i]) * alpha; }
        if (t.scale) { sample(t.scale, time, v2); this.lsx[i] += (b.sx * v2[0] - this.lsx[i]) * alpha; this.lsy[i] += (b.sy * v2[1] - this.lsy[i]) * alpha; }
      }
      for (const t of anim.slots) {
        const st = this.slotState[t.si];
        const swap = entry && entry.swapFade > 0 && entry.swapFrom;
        if (t.attachment && (alpha >= 0.5 || swap)) {
          const i = stepIndex(t.attachment, time), k = t.attachment[i];
          const prevAtt = st.attachment;
          if (k.fade > 0 && i > 0 && time < k.t + k.fade && t.attachment[i - 1].v !== k.v) { st.fadeFrom = t.attachment[i - 1].v; st.fadeP = (time - k.t) / k.fade; }
          else if (swap && entry.age < entry.swapFade && entry.swapFrom[t.si] && entry.swapFrom[t.si] !== k.v) { st.fadeFrom = entry.swapFrom[t.si]; st.fadeP = entry.age / entry.swapFade; }
          else { st.fadeFrom = null; st.fadeP = 1; }
          st.attachment = time < t.attachment[0].t ? prevAtt : k.v;
        }
        if (t.alpha) { sample(t.alpha, time, v1); st.alpha += (v1[0] - st.alpha) * alpha; }
        if (t.tint) st.tint = lerpTint(st.tint, sampleTint(t.tint, time), alpha);
      }
      for (const t of anim.deform) { sample(t.keys, time, v1); this.deformVals[t.name] += (v1[0] - this.deformVals[t.name]) * alpha; }
    }
    // Write the current pose into the meshes.
    apply() {
      this.computeWorld();
      const n = this.def.bones.length, S = this.skinM, W = this.world, R = this.restInv;
      for (let i = 0; i < n; i++) mul(S, 6 * i, W, 6 * i, R, 6 * i);
      const slots = this.def.slots;
      for (let si = 0; si < slots.length; si++) {
        const s = slots[si], st = this.slotState[si], view = this.slotViews[si];
        const att = st.attachment ? this.def.atts[st.attachment] : null;
        const m = att ? this.meshFor(att) : null;
        const fatt = st.fadeFrom && st.fadeFrom !== st.attachment ? this.def.atts[st.fadeFrom] : null;
        const fm = fatt ? this.meshFor(fatt) : null;
        // Crossfade: the new image sits underneath at full strength, the old one fades out on top.
        const a0 = m ? m.mesh : null, a1 = fm ? fm.mesh : null, want = (a0 ? 1 : 0) + (a1 ? 1 : 0);
        const kids = view.children;
        if (kids.length !== want || (a0 && kids[0] !== a0) || (a1 && kids[a0 ? 1 : 0] !== a1)) { view.removeChildren(); if (a0) view.addChild(a0); if (a1) view.addChild(a1); }
        if (m) this.drawMesh(m, att, s, st, st.alpha);
        if (fm) this.drawMesh(fm, fatt, s, st, st.alpha * (1 - st.fadeP));
      }
    }
    drawMesh(m, att, s, st, alpha) {
      const S = this.skinM, W = this.world, ph = this.clock;
      {
        m.mesh.alpha = alpha; m.mesh.tint = st.tint; m.mesh.blendMode = s.blend;
        const d = m.pos.data, rx = m.rx, ry = m.ry;
        if (att.type === 'skin') {
          const dvals = this.dv; for (let k = 0; k < att.deform.length; k++) dvals[k] = this.deformVals[att.deform[k].name] || 0;
          for (let v = 0, nv = rx.length; v < nv; v++) {
            let x0 = rx[v], y0 = ry[v];
            for (let k = 0; k < att.deform.length; k++) {
              const a = dvals[k], wv = m.dfw[k][v]; if (!a || !wv) continue;
              const dd = att.deform[k];
              if (dd.type === 'bulge') { const cx = (dd.center[0] - att.origin[0]) * att.size[0], cy = (dd.center[1] - att.origin[1]) * att.size[1]; x0 += (x0 - cx) * a * wv; y0 += (y0 - cy) * a * wv; }
              else if (dd.type === 'wave') {
                x0 += Math.sin(ry[v] * (dd.freq ?? 0.05) + ph * (dd.speed ?? 7)) * a * wv;
                if (dd.yAmp) y0 += Math.sin(rx[v] * (dd.yFreq ?? 0.06) + ph * (dd.ySpeed ?? 9)) * a * dd.yAmp * wv;
              }
            }
            let x = 0, y = 0;
            const l = m.inf[v];
            for (let j = 0; j < l.length; j += 2) {
              const o = 6 * l[j], w = l[j + 1];
              x += (S[o] * x0 + S[o + 2] * y0 + S[o + 4]) * w;
              y += (S[o + 1] * x0 + S[o + 3] * y0 + S[o + 5]) * w;
            }
            d[2 * v] = x; d[2 * v + 1] = y;
          }
        } else {
          const o = 6 * (att.bone ?? s.bone);
          for (let v = 0; v < 4; v++) { d[2 * v] = W[o] * rx[v] + W[o + 2] * ry[v] + W[o + 4]; d[2 * v + 1] = W[o + 1] * rx[v] + W[o + 3] * ry[v] + W[o + 5]; }
        }
        m.pos.update();
      }
    }

    /* ----- animation state ----- */
    anim(name) { const a = this.def.anims[name]; if (!a) throw new Error('LZRig: no animation "' + name + '" in ' + this.def.name); return a; }
    has(name) { return !!this.def.anims[name]; }
    // play(name, { track = 0, loop = anim.loop, mix = 0.12, speed = 1, then: 'idle' | null, thenMix })
    play(name, o = {}) {
      const track = o.track || 0, a = this.anim(name), prev = this.tracks[track];
      const entry = { anim: a, time: Math.min(a.duration, o.start || 0), fired0: !!o.start, loop: o.loop ?? a.loop, speed: o.speed ?? 1, mix: o.mix ?? 0.12, mixT: 0, then: o.then || null, thenMix: o.thenMix ?? 0.2, done: false, from: null, age: 0,
        swapFade: o.fadeSwap || 0, swapFrom: o.fadeSwap ? this.slotState.map(st => st.attachment) : null };
      if (prev && prev.anim && entry.mix > 0) { entry.from = prev; prev.from = null; } else entry.mixT = entry.mix;
      this.tracks[track] = entry;
      this.emit('start', a.name, null, track);
      return entry;
    }
    stop(track = 0, mix = 0.15) {
      const prev = this.tracks[track];
      if (!prev) return;
      this.tracks[track] = mix > 0 ? { anim: null, time: 0, loop: false, speed: 1, mix, mixT: 0, from: prev, done: true } : undefined;
    }
    current(track = 0) { const t = this.tracks[track]; return t && t.anim ? t.anim.name : null; }
    on(type, fn) { this.listeners[type].push(fn); return () => { this.listeners[type] = this.listeners[type].filter(f => f !== fn); }; }
    emit(type, name, data, track) { for (const f of this.listeners[type]) f(name, data, track, this); }

    advance(e, dt, track, fire) {
      if (!e.anim) return;
      e.age = (e.age || 0) + dt;
      const a = e.anim, t0 = e.time;
      let t1 = t0 + dt * e.speed;
      if (fire && a.events.length) {
        // Events fire once when the playhead passes them: keys in (t0, t1], plus keys at 0 on the first update.
        const fireRange = (lo, hi, incl0) => { for (const ev of a.events) if ((ev.t > lo || (incl0 && ev.t === lo)) && ev.t <= hi) this.emit('event', ev.name, ev.data, track); };
        const first = !e.fired0; e.fired0 = true;
        if (e.loop && t1 >= a.duration) { fireRange(t0, a.duration, first); fireRange(0, t1 % a.duration, true); }
        else if (!e.done) fireRange(t0, Math.min(t1, a.duration), first);
      }
      if (e.loop) e.time = t1 % a.duration;
      else {
        e.time = Math.min(t1, a.duration);
        if (!e.done && t1 >= a.duration) {
          e.done = true;
          if (fire) this.emit('complete', a.name, null, track);
          if (fire && e.then && this.tracks[track] === e) this.play(e.then, { track, mix: e.thenMix });
        }
      }
    }

    update(dt) {
      dt *= this.timeScale;
      this.clock += dt;
      // Random overlays from the file, e.g. { "anim": "blink", "track": 2, "min": 2.2, "max": 4.8, "when": ["idle"] }.
      for (const tm of this.timers) {
        tm.next -= dt;
        if (tm.next <= 0) {
          tm.next = this.rand(tm.min, tm.max);
          const base = this.current(0);
          if (!tm.when || tm.when.includes(base)) this.play(tm.anim, { track: tm.track ?? 1, mix: 0, loop: false });
        }
      }
      for (let i = 0; i < this.tracks.length; i++) {
        const e = this.tracks[i]; if (!e) continue;
        if (e.from) { this.advance(e.from, dt, i, false); e.mixT += dt; if (e.mixT >= e.mix) e.from = null; }
        this.advance(e, dt, i, true);
        if (!e.anim && !e.from) this.tracks[i] = undefined;
        if (e.anim && e.done && i > 0 && !e.then && !e.from) this.tracks[i] = undefined;   // finished overlays fall away
      }
      this.pose();
      this.apply();
    }
    // Recompute the pose from the tracks (no time passes).
    pose() {
      this.setupPose();
      for (const e of this.tracks) {
        if (!e) continue;
        const p = e.from ? Math.min(1, e.mixT / e.mix) : 1;
        if (e.from && e.from.anim) this.mixIn(e.from.anim, e.from.time, e.anim ? 1 : 1 - p);
        if (e.anim) this.mixIn(e.anim, e.time, e.from ? p : 1, e);
      }
    }
    // For tools: show `name` frozen at `time` seconds, ignoring the tracks.
    seek(name, time) { this.setupPose(); this.mixIn(this.anim(name), time, 1); this.apply(); }

    // The current value of a keyed deformer or 'value' channel (0 when nothing keys it).
    value(name) { return this.deformVals[name] || 0; }
    // Where a bone is right now, in the rig's own space (use rig.view.toGlobal(...) for screen space).
    // Games use it to fire particles, numbers or sounds from the character as it moves.
    bone(name) {
      const i = this.def.bi[name];
      if (i === undefined) throw new Error('LZRig: unknown bone ' + name);
      const o = 6 * i, W = this.world;
      return { x: W[o + 4], y: W[o + 5], rotation: Math.atan2(W[o + 1], W[o]) * 180 / Math.PI, scaleX: Math.hypot(W[o], W[o + 1]), scaleY: Math.hypot(W[o + 2], W[o + 3]) };
    }
    // Bone overlay for the viewer.
    drawBones(g) {
      g.clear();
      const W = this.world, B = this.def.bones;
      for (let i = 0; i < B.length; i++) {
        const o = 6 * i, x = W[o + 4], y = W[o + 5], len = B[i].length || 18;
        const ex = x + W[o] * len, ey = y + W[o + 1] * len;
        g.moveTo(x, y).lineTo(ex, ey).stroke({ width: 3, color: 0x00e5ff, alpha: 0.9 });
        g.circle(x, y, 5).fill({ color: i === 0 ? 0xff3355 : 0xffffff });
      }
    }
    destroy() { this.view.destroy({ children: true }); this.tracks = []; }

    static attach(ticker, rig) { const f = tk => rig.update(tk.deltaMS / 1000); ticker.add(f); return () => ticker.remove(f); }
    static validate(data) { compile(data); return true; }
  }
  function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  LZRig.EASE = EASE;
  LZRig.bezier = bezier;
  LZRig.version = 1;

  if (typeof module !== 'undefined' && module.exports) module.exports = LZRig; else root.LZRig = LZRig;
})(typeof window !== 'undefined' ? window : globalThis);
