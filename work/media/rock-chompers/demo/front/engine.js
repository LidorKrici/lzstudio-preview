/* Rock Chompers: the little 2D engine under the stage. One canvas, images from front/assets (window.RC_ASSETS),
 * tweens, sprite particles (drawn effects only, no shapes drawn in code), the drawn gold digits, and the cook's
 * alpha-packed video (window.RC_VID) unpacked through a small WebGL canvas. Nothing here decides a result. */
window.RC = (() => {
  'use strict';
  const A = window.RC_ASSETS || {}, IMG = {};
  const TAU = Math.PI * 2;

  /* ---------- Images ---------- */
  function load(names, onEach) {
    return Promise.all(names.map(n => new Promise(res => {
      const ext = /^bg-/.test(n) ? '.jpg' : '.webp';
      const i = new Image(); i.decoding = 'async';
      // decoded before it is first drawn, so no frame waits for a big picture (fix #17)
      // kept decoded (ImageBitmap): Chrome otherwise decodes a picture again when it is first drawn, on the main thread and at
      // the drawn size, a 70-250 ms frame on a slow phone the first time a blast strip, a hot face or a title shows in a round.
      // The backgrounds are drawn every frame, so they stay plain pictures (and their 2560px copies stay out of memory twice)
      i.onload = () => {
        const done = im => { IMG[n] = im; onEach && onEach(); res(); };
        if (!/^(bg-mid|bg-far|fg)$/.test(n) && window.createImageBitmap) createImageBitmap(i).then(done, () => done(i));
        else if (i.decode) i.decode().then(() => done(i), () => done(i)); else done(i);
      };
      i.onerror = () => { onEach && onEach(); res(); };
      i.src = 'assets/' + n + ext;
    })));
  }
  const img = n => IMG[n];

  /* ---------- Easing and tweens ---------- */
  const E = {
    lin: t => t,
    out: t => 1 - Math.pow(1 - t, 3),
    in: t => t * t * t,
    inOut: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    back: t => { const c = 1.70158, c3 = c + 1; return 1 + c3 * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
    elastic: t => t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * TAU / 3) + 1,
  };
  let tweens = [];
  // tween(obj, { x: 10, sx: 1.2 }, ms, ease, delay) -> promise. `speed` (from the shell: turbo / QA) scales ms.
  let speedFn = () => 1;
  function tween(o, to, ms, ease = E.out, delay = 0) {
    return new Promise(res => {
      const from = {}; for (const k in to) from[k] = o[k];
      tweens.push({ o, to, from, d: Math.max(1, ms * speedFn()), t: -delay * speedFn(), ease, res });
    });
  }
  function killTweens(o) { tweens = tweens.filter(t => { if (t.o === o) { t.res(); return false; } return true; }); }
  function stepTweens(dt) {
    const keep = [];
    for (const t of tweens) {
      t.t += dt;
      if (t.t < 0) { keep.push(t); continue; }
      const k = Math.min(1, t.t / t.d), e = t.ease(k);
      for (const key in t.to) t.o[key] = t.from[key] + (t.to[key] - t.from[key]) * e;
      if (k >= 1) t.res(); else keep.push(t);
    }
    tweens = keep;
  }

  /* ---------- Particles (images only) ---------- */
  let parts = [];
  // spawn({ img, x, y, vx, vy, g, rot, vr, s, vs, life, fade, alpha, add }) in stage px and seconds
  function spawn(p) { parts.push(Object.assign({ vx: 0, vy: 0, g: 0, rot: 0, vr: 0, s: 1, vs: 0, life: 1, age: 0, fade: .35, alpha: 1, drag: 0 }, p)); }
  function stepParts(dt) {
    const s = dt / 1000, keep = [];
    for (const p of parts) {
      p.age += s; if (p.age >= p.life) continue;
      p.vy += p.g * s; if (p.drag) { const k = Math.pow(1 - p.drag, s * 60); p.vx *= k; p.vy *= k; }
      p.x += p.vx * s; p.y += p.vy * s; p.rot += p.vr * s; p.s = Math.max(0, p.s + p.vs * s);
      keep.push(p);
    }
    parts = keep;
  }
  function drawParts(c, layer) {
    for (const p of parts) {
      if ((p.layer || 0) !== layer) continue;
      const im = IMG[p.img]; if (!im) continue;
      const left = p.life - p.age, a = p.alpha * (left < p.fade ? left / p.fade : 1);
      // a frame-by-frame strip (seq-*): n frames side by side, the frame follows the particle's age
      const n = p.seq ? ((A[p.img] && A[p.img][2]) || 8) : 1, fw = im.width / n;
      const w = (p.w || 60) * p.s, h = w * im.height / fw;
      c.save(); c.globalAlpha = Math.max(0, a); if (p.add) c.globalCompositeOperation = 'lighter';
      c.translate(p.x, p.y); c.rotate(p.rot);
      if (n > 1) {
        // 8 drawn frames over half a second is ~15fps: blend each frame into the next and keep the whole strip growing,
        // so every screen refresh shows a new picture (no frame holds, no jumps)
        const k = Math.min(n - 1, Math.floor(p.age / p.life * n)), g = 1 + .1 * (p.age / p.life);
        c.scale(g, g);
        c.drawImage(im, k * fw, 0, fw, im.height, -w / 2, -h / 2, w, h);
      }
      else c.drawImage(im, -w / 2, -h / 2, w, h);
      c.restore();
    }
  }
  const clearParts = () => { parts = []; };

  /* ---------- Drawing helpers ---------- */
  // draws image `n` centred on (x, y), width w (height from the image), with scale, rotation, alpha
  function draw(c, n, x, y, w, o = {}) {
    const im = typeof n === 'string' ? IMG[n] : n; if (!im || !w) return 0;
    const h = w * (im.height || im.videoHeight) / (im.width || im.videoWidth);
    const ax = o.ax == null ? .5 : o.ax, ay = o.ay == null ? .5 : o.ay;
    c.save();
    if (o.alpha != null) c.globalAlpha *= Math.max(0, Math.min(1, o.alpha));
    if (o.add) c.globalCompositeOperation = 'lighter';
    c.translate(x, y); if (o.rot) c.rotate(o.rot);
    c.scale((o.sx == null ? 1 : o.sx) * (o.flip ? -1 : 1), o.sy == null ? 1 : o.sy);
    c.drawImage(im, -w * ax, -h * ay, w, h);
    c.restore();
    return h;
  }

  /* ---------- The drawn gold digits ---------- */
  // window.RC_ASSETS.digits = { h, map: { '0': [x, w], ... '.', ',', 'x', '+' } } on assets/digits.webp
  const DG = A.digits || { h: 120, map: {} };
  function textWidth(str, h) {
    const k = h / DG.h; let w = 0;
    for (const ch of str) { const g = DG.map[ch === '×' ? 'x' : ch]; w += g ? (g[1] - (ch === '.' || ch === ',' ? 6 : 10)) * k : h * .5; }
    return w;
  }
  // number(c, '12.50', x, y, h, { align, alpha, font }) draws digits from the atlas; any other character
  // (currency symbols, letters) in the display font with the same gold and outline
  function number(c, str, x, y, h, o = {}) {
    const im = IMG.digits, k = h / DG.h, w = textWidth(str, h);
    let cx = o.align === 'left' ? x : o.align === 'right' ? x - w : x - w / 2;
    c.save(); if (o.alpha != null) c.globalAlpha *= o.alpha;
    for (const ch of str) {
      const g = DG.map[ch === '×' ? 'x' : ch];
      if (g && im) {
        const gw = g[1] * k;
        c.drawImage(im, g[0], 0, g[1], DG.h, cx - 4 * k, y - h / 2, gw, h);
        cx += gw - (ch === '.' || ch === ',' ? 6 : 10) * k;
      } else {
        c.font = `700 ${Math.round(h * .62)}px ${o.font || 'Fredoka, sans-serif'}`; c.textBaseline = 'middle'; c.textAlign = 'left';
        c.lineJoin = 'round'; c.lineWidth = Math.max(2, h * .12); c.strokeStyle = '#3a1d0b'; c.strokeText(ch, cx, y + h * .04);
        c.fillStyle = '#ffc93a'; c.fillText(ch, cx, y + h * .04);
        cx += h * .5;
      }
    }
    c.restore();
    return w;
  }

  /* ---------- The cook: alpha-packed video through WebGL ---------- */
  const VM = window.RC_VID || { chars: {}, clips: {} };
  const VIDS = {};
  let vidBlocked = location.protocol === 'file:' || !Object.keys(VM.clips).length;
  function vidLoad(n) {
    const m = VM.clips[n]; if (vidBlocked || !m || VIDS[n]) return;
    const v = document.createElement('video');
    v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.preload = 'auto'; v.loop = !!m.loop;
    v.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;opacity:0;pointer-events:none';
    v.addEventListener('error', () => { v.failed = true; });
    v.src = m.src; document.body.append(v); v.load(); VIDS[n] = v;
  }
  const vidOK = n => !vidBlocked && VIDS[n] && !VIDS[n].failed && VIDS[n].readyState >= 2;
  // A character drawn from its alpha-packed clips. o.idle: a clip that loops whenever nothing else plays (the cook);
  // without it the character shows o.still between clips (the faces). act(clip, rate, stopAt) resolves when the clip
  // ends, or at stopAt seconds into it.
  function makeActor(cname, o = {}) {
    const C = VM.chars[cname];
    const F = { name: '', loop: false, queue: null, vid: null, fresh: false, cv: null, gl: null, ready: false, C, done: null, stopAt: 0 };
    if (C && !vidBlocked) {
      const cv = document.createElement('canvas'); cv.width = C.w; cv.height = C.h;
      const gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: true });
      if (gl) {
        const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
        const pr = gl.createProgram();
        gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p;varying vec2 uv;void main(){uv=p;gl_Position=vec4(p.x*2.-1.,1.-p.y*2.,0.,1.);}'));
        gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, 'precision mediump float;varying vec2 uv;uniform sampler2D t;void main(){vec3 c=texture2D(t,vec2(uv.x,uv.y*.5)).rgb;float a=texture2D(t,vec2(uv.x,.5+uv.y*.5)).r;gl_FragColor=vec4(min(c,vec3(a)),a);}'));
        gl.linkProgram(pr);
        if (gl.getProgramParameter(pr, gl.LINK_STATUS)) {
          gl.useProgram(pr);
          const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
          const lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
          const tx = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tx);
          for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
          gl.viewport(0, 0, C.w, C.h); gl.clearColor(0, 0, 0, 0);
          F.cv = cv; F.gl = gl;
          Object.keys(VM.clips).filter(n => VM.clips[n].char === cname && !(o.skip || []).includes(n) && !(o.later || []).includes(n)).forEach(vidLoad);
          F.loadLater = () => (o.later || []).forEach(vidLoad);
        }
      }
    }
    const upload = v => {
      try { F.gl.texImage2D(F.gl.TEXTURE_2D, 0, F.gl.RGB, F.gl.RGB, F.gl.UNSIGNED_BYTE, v); }
      catch (e) { vidBlocked = true; return false; }
      F.gl.clear(F.gl.COLOR_BUFFER_BIT); F.gl.drawArrays(F.gl.TRIANGLE_STRIP, 0, 4); F.ready = true; return true;
    };
    F.play = (n, loop = false, rate = 1, from = 0) => {
      F.fadeAt = null;
      if (!F.gl || !vidOK(n)) return false;
      if (F.ready && F.name && F.name !== n) {
        if (!F.old) { F.old = document.createElement('canvas'); F.old.width = F.cv.width; F.old.height = F.cv.height; }
        const o = F.old.getContext('2d'); o.clearRect(0, 0, F.old.width, F.old.height); o.drawImage(F.cv, 0, 0); F.fadeAt = performance.now();
      }
      if (F.vid && F.vid !== VIDS[n]) F.vid.pause();
      const v = VIDS[n]; F.name = n; F.loop = loop; F.vid = v; F.fresh = true;
      v.loop = loop; v.playbackRate = Math.max(.5, Math.min(4, rate));
      try { v.currentTime = from; } catch (e) { /* not seekable yet */ }
      v.play().catch(() => {});
      return true;
    };
    const finish = () => { const d = F.done; F.done = null; if (d) d(); };
    // an action plays once, then the idle loop (or the still) takes over again
    F.act = (n, rate = 1, stopAt = 0, from = 0) => new Promise(res => { finish(); if (!F.play(n, false, rate, from)) return res(false); F.stopAt = stopAt; F.done = () => res(true); });
    F.stop = () => { if (F.vid) F.vid.pause(); F.vid = null; F.name = ''; F.ready = false; finish(); };
    F.busy = () => F.warming || (!!F.vid && !F.loop);
    F.hurry = r => { if (F.vid && !F.loop) F.vid.playbackRate = Math.min(4, Math.max(F.vid.playbackRate, r)); };
    // warm a clip before it is first needed: the first play of a video starts its decoder and the first upload builds the
    // texture, which on a slow phone is a 100-200 ms frame in the middle of a round. Done once, while nothing plays.
    F.warm = n => new Promise(res => {
      if (!F.gl || !vidOK(n) || F.vid) return res();
      const v = VIDS[n]; F.warming = true;
      let ok = false;
      const done = () => {
        if (ok) return; ok = true;
        if (F.vid) { F.warming = false; return res(); }      // the game took the actor meanwhile: leave its clip alone
        try { if (v.readyState >= 2) { F.gl.texImage2D(F.gl.TEXTURE_2D, 0, F.gl.RGB, F.gl.RGB, F.gl.UNSIGNED_BYTE, v); F.gl.drawArrays(F.gl.TRIANGLE_STRIP, 0, 4); } } catch (x) { /* blocked: the clip falls back later */ }
        v.pause(); try { v.currentTime = 0; } catch (x) { /* fine */ }
        F.warming = false; res();
      };
      v.muted = true;
      if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(() => done());
      const p = v.play(); if (p) p.catch(done);
      setTimeout(done, 1500);
    });
    F.update = () => {
      if (!F.gl) return;
      if (!F.vid) { if (o.idle && vidOK(o.idle)) F.play(o.idle, true); return; }
      const v = F.vid, m = VM.clips[F.name];
      if (!F.loop && (v.ended || (m && v.currentTime >= m.dur - .04) || (F.stopAt && v.currentTime >= F.stopAt))) {
        if (F.stopAt && v.readyState >= 2) upload(v);
        if (o.idle) F.play(o.idle, true); else { v.pause(); F.vid = null; F.name = ''; if (!F.stopAt) F.ready = false; }
        F.stopAt = 0; finish(); return;
      }
      if (v.readyState >= 2 && !v.seeking && (F.fresh || !v.paused)) { if (upload(v)) F.fresh = false; }
    };
    F.pause = on => { if (F.vid) { if (on) F.vid.pause(); else F.vid.play().catch(() => {}); } };
    // the image to draw this frame (the video canvas, or the still rest pose)
    F.image = () => (F.gl && F.ready ? F.cv : (o.still ? IMG[o.still] : null));
    F.hold = () => { F.ready = false; };   // back to the still (after a clip stopped on its last useful frame)
    // the previous clip's last frame while the 70 ms crossfade runs (alpha 1 -> 0), else null
    F.oldImage = () => null;
    F.oldImageFade = () => { if (!F.old || F.fadeAt == null) return null; const t = (performance.now() - F.fadeAt) / 70; if (t >= 1) { F.fadeAt = null; return null; } return { img: F.old, a: 1 - t }; };
    return F;
  }
  /* ---------- Skeletons (standard 5.7, LZ Rig): every character is ONE drawing on bones, rendered by one shared
     PixiJS renderer and copied into this canvas at its place in the draw order (so blasts and numbers stay on top) */
  let PR = null, PRsize = 1536;
  async function rigsInit() {
    if (PR || !window.PIXI || !window.LZRig || !window.RC_RIGS) return !!PR;
    try {
      const app = new PIXI.Application();
      await app.init({ width: PRsize, height: PRsize, backgroundAlpha: 0, preserveDrawingBuffer: true, antialias: true, preference: 'webgl', autoStart: false });
      PR = app;
    } catch (x) { PR = null; }
    return !!PR;
  }
  function makeRig(name, o = {}) {
    const d = window.RC_RIGS && RC_RIGS[name]; if (!PR || !d) return null;
    const tex = {};
    for (const [k, img] of Object.entries(d.images)) { const im = IMG[img]; if (!im) return null; tex[k] = PIXI.Texture.from(im); }
    const rig = new LZRig(PIXI, d, tex, { seed: o.seed || 7 });
    const holder = new PIXI.Container(); holder.addChild(rig.view);
    const [Wd, Hd] = d.size, [ou, ov] = d.origin, padX = Wd * (o.padX ?? .4), padT = Hd * (o.padT ?? .45), padB = Hd * (o.padB ?? .12);
    const box = { l: ou * Wd + padX, t: ov * Hd + padT, w: Wd + padX * 2, h: Hd + padT + padB };
    const r = { name, rig, d, size: d.size, tint: 0xffffff,
      // (x, y): where the rig's origin goes (css px); sc: css px per art px; dpr: device pixels per css px
      draw(c, x, y, sc, dpr = 1, alpha = 1) {
        const rs = Math.min(sc * dpr, PRsize / box.w, PRsize / box.h);
        holder.tint = this.tint; holder.scale.set(rs); holder.position.set(box.l * rs, box.t * rs);
        PR.renderer.render({ container: holder, clear: true });
        if (alpha < 1) { c.save(); c.globalAlpha *= alpha; }
        c.drawImage(PR.canvas, 0, 0, box.w * rs, box.h * rs, x - box.l * sc, y - box.t * sc, box.w * sc, box.h * sc);
        if (alpha < 1) c.restore();
      },
      // play an action; resolves when it completes (or at once for a loop)
      act(n, opts = {}) {
        return new Promise(res => {
          if (!rig.has(n)) return res(false);
          const entry = rig.play(n, opts);
          if (entry.loop) return res(true);
          const off = rig.on('complete', (nm, _, track) => { if (nm === n && track === (opts.track || 0)) { off(); res(true); } });
        });
      },
      on: (t, f) => rig.on(t, f), update: dt => rig.update(dt), current: (t = 0) => rig.current(t), has: n => rig.has(n),
      bone: b => rig.bone(b),
    };
    return r;
  }
  // the cook rests on her sharp picture (the game draws it); her clips play for actions only
  const makeCook = () => makeActor('cook', { still: 'cook-still', skip: ['cook-idle'], later: ['cook-upset', 'cook-throw'] });   // the toss and the cheer are there from the first round

  return { rigsInit, makeRig, load, img, IMG, E, tween, killTweens, stepTweens, spawn, stepParts, drawParts, clearParts, draw, number, textWidth, makeCook, makeActor, vidOK: n => vidOK(n), TAU,
    setSpeed: f => { speedFn = f; }, get tweens() { return tweens.length; }, get parts() { return parts.length; } };
})();
