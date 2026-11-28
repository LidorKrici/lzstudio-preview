/* Retrograde: the Old Astronomer, a PAINTED 2D character standing on the observatory floor beside the board.
 * His motion is real animation at 24 frames a second: AI video clips made from the painting itself (start frame = end
 * frame, so every clip leaves and returns to the same rest pose), keyed at full resolution and stored as alpha-packed
 * video by tools/wizard-video.mjs (assets/wizard/<clip>.mp4: colour on top, alpha as grey below; plain H.264 that every
 * browser plays, iPhone included). They are drawn through WebGL, which takes the alpha from the lower half.
 * Clips: idle (loops), cast (the spell toward the board), cheer (a big win), suspense (two astrolabes down; ping-pong baked
 * in, repeats while it lasts). Every clip starts and ends on the same rest frame, and (the user, 2026-11-25: "when an
 * animation starts it must finish, not jump") a gesture is NEVER cut: it always plays to its last frame. A request that
 * comes while one plays waits in a single slot (the stronger one wins) and starts from that rest frame; only the switch
 * out of idle is a short cross-fade (the idle clip barely moves, so it is invisible).
 * Without WebGL, or opened straight from disk (file:// video cannot be read by WebGL), the still painting stands in.
 * game.js decides WHEN; this file decides HOW. Nothing here touches a result.
 *   RGWiz.init(canvas) · RGWiz.frame(x, y, w, h, mode) · RGWiz.act(name, {hold}) · RGWiz.cast() -> seconds until his hand
 *   is out · RGWiz.hand() fingertip {x, y} in stage px · RGWiz.glow(v)
 * Earlier versions: art/character/wizard-2d-atlas.js.bak (frame atlases), wizard-2d-poses.js.bak, wizard-3d-*.js.bak. */
window.RGWiz = (() => {
  'use strict';
  // the cast clip: where it starts (as the board-side hand is already rising) and that hand's path, marked by eye on the
  // frames (seconds into the clip, share of the frame width / height); outside the marks the hand rests on his belly
  // CAST_PEAK: seconds into the cast clip when his hand is fully out (the magic leaves then); HAND: [s, x, y] marks
  // (open-eyes clips, 2026-11-25: the arm is out by 1.0 s, raised and held to 3.0 s, back on the belly by 3.6 s)
  const CAST_PEAK = 1.0;
  const HAND = { cast: [[.4, .6, .45], [.75, .85, .36], [1, .84, .35], [1.25, .84, .25], [1.5, .76, .2], [2, .76, .16], [2.75, .76, .19], [3, .74, .21], [3.25, .6, .31], [3.6, .6, .45]] };
  const PRI = { suspense: 2, cheer: 3, cast: 4 };     // a queued cast is never pushed out: the game is waiting for that hand
  const REST_HAND = [.6, .45], CLIPS = ['idle', 'cast', 'cheer', 'suspense'], LOOP = { idle: true };
  let cv = null, gl = null, c2 = null, ready = false, box = null, mode = 'full', W = 1, H = 1, dpr = 1, last = 0;
  let texOld = null, tUp = 0, pair = false;   // texOld: the clip's frame before texCur (temporal blend)
  let blocked = false, texStill = null, still = null, vids = {}, cur = 'idle', prev = null, xf = 1, hold = false, queued = null, prog = null, loc = {}, buf = null, texCur = null, texPrev = null;
  function setupGL() {
    cv.addEventListener('webglcontextlost', e => { e.preventDefault(); blocked = true; }, false);
    gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false }); if (!gl) return false;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
    prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, 'attribute vec2 p;uniform vec4 r;varying vec2 uv;void main(){uv=p;gl_Position=vec4(r.x+p.x*r.z,r.y-p.y*r.w,0.,1.);}'));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, 'precision mediump float;varying vec2 uv;uniform sampler2D t;uniform sampler2D t2;uniform float o;uniform float m;void main(){vec2 u0=vec2(uv.x,uv.y*.5),u1=vec2(uv.x,.5+uv.y*.5);vec3 c=mix(texture2D(t2,u0).rgb,texture2D(t,u0).rgb,m);float a=mix(texture2D(t2,u1).r,texture2D(t,u1).r,m)*o;gl_FragColor=vec4(c*a,a);}'));
    gl.linkProgram(prog); if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
    gl.useProgram(prog); loc = { p: gl.getAttribLocation(prog, 'p'), r: gl.getUniformLocation(prog, 'r'), o: gl.getUniformLocation(prog, 'o'), m: gl.getUniformLocation(prog, 'm'), t: gl.getUniformLocation(prog, 't'), t2: gl.getUniformLocation(prog, 't2') }; gl.uniform1i(loc.t, 0); gl.uniform1i(loc.t2, 1);
    buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(loc.p); gl.vertexAttribPointer(loc.p, 2, gl.FLOAT, false, 0, 0);
    const tex = () => { const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v); return t; };
    texCur = tex(); texPrev = tex(); texStill = tex(); texOld = tex();
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    return true;
  }
  const LATER = ['cheer', 'suspense'];
  let restAsked = false;
  function loadRest() { if (restAsked) return; restAsked = true; for (const n of LATER) { const v = vids[n]; if (v && !v.getAttribute('src')) { v.preload = 'auto'; v.src = 'assets/wizard/' + n + '.mp4'; v.load(); } } }
  function init(canvas) {
    cv = canvas;
    const img = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
    return img('assets/wizard/rest.webp').then(i => {
      still = i; if (!still) return false;
      // from disk the browser normally refuses video in WebGL (a security error on upload): then the still painting stays
      const video = setupGL();
      if (video) {
        for (const n of CLIPS) {
          const v = document.createElement('video');
          v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.loop = RUNALL || !!LOOP[n]; if (RUNALL) v.addEventListener('canplay', () => { if (v.paused) v.play().catch(() => {}); }, { once: true });
          // first load (studio standard: 8 MB): the rest pose and the spell come at once; cheer and suspense only after
          // PLAY (loadRest) or a few seconds later. A clip not in yet is simply skipped (usable() is false)
          const later = LATER.includes(n); v.preload = later ? 'none' : 'auto';
          v.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;opacity:0;pointer-events:none';
          if (!later) v.src = 'assets/wizard/' + n + '.mp4'; document.body.append(v); vids[n] = v;
          v.addEventListener('error', () => { v._bad = true; });          // a clip that fails is never drawn (usable() is false)
          // 2026-11-28: a frame is uploaded only once the decoder has really delivered it; reading a clip that has just been
          // started or seeked made the graphics card wait for its decoder (100-130 ms on a PC at every new gesture)
          if (v.requestVideoFrameCallback) { v._rv = true; const tick = () => { v._fresh = true; v.requestVideoFrameCallback(tick); }; v.requestVideoFrameCallback(tick); }
        }
        vids.idle.play().catch(() => {}); setTimeout(loadRest, 45000);   // normally asked for by the game after the first round
        const pk = document.createElement('canvas'), sw = still.naturalWidth, sh = still.naturalHeight; pk.width = sw; pk.height = sh * 2;
        const p2 = pk.getContext('2d'); p2.fillStyle = '#000'; p2.fillRect(0, 0, sw, sh * 2); p2.drawImage(still, 0, 0);
        try { const id = p2.getImageData(0, 0, sw, sh), d = id.data, o = p2.createImageData(sw, sh); for (let i = 0; i < d.length; i += 4) { o.data[i] = o.data[i + 1] = o.data[i + 2] = d[i + 3]; o.data[i + 3] = 255; } p2.putImageData(o, 0, sh); p2.globalCompositeOperation = 'destination-over'; } catch (e) { /* tainted: no still fallback */ }
        for (const t of [texCur, texStill]) { gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, pk); }
      } else { gl = null; c2 = cv.getContext('2d'); }
      ready = true; last = performance.now(); requestAnimationFrame(loop); return true;
    });
  }
  let redraw = true, shownName = '', shownT = -2, curReady = true, waitT = 0;
  function frame(x, y, w, h, m) {
    if (!cv) return;
    redraw = true;
    box = { x, y, w, h }; mode = m || 'full'; W = Math.max(1, w); H = Math.max(1, h); dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.style.left = Math.round(x) + 'px'; cv.style.top = Math.round(y) + 'px'; cv.style.width = Math.round(W) + 'px'; cv.style.height = Math.round(H) + 'px';
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  }
  // the figure's box: standing on the bottom edge, as tall as fits (the clips and the painting share one framing)
  const ASPECT = 2 / 3;
  function rect() {
    if (mode === 'bust') { const h = H * 1.9, w = h * ASPECT; return { x: W * .5 - w * .5, y: -H * .02, w, h }; }
    let h = H * .97, w = h * ASPECT; if (w > W * .98) { w = W * .98; h = w / ASPECT; }
    return { x: (W - w) / 2, y: H - h, w, h };
  }
  // RUNALL (2026-11-28, Lidor: "the characters move stuck"): every clip keeps playing, looped and muted. A gesture is a
  // seek on a running clip; starting a paused one made the video decoder stall the graphics card for 0.1-0.3 s on a PC.
  const RUNALL = !!window.RG_WIZ_RUNALL;   // off (2026-11-28): four clips decoding at once brought no gain and is a risk on real GPUs
  // the clips are 60 pictures a second (2026-11-28: a 60 Hz screen shows each picture once; 24 left a 3-2-3-2 stutter)
  const CLIP_FPS = 60;
  const usable = n => gl && !blocked && vids[n] && !vids[n]._bad && vids[n].readyState >= 2;
  // a finished gesture is wound back to its first frame while it is off screen, ready for next time
  function prime(v) { if (!v || !v.paused) return; try { if (v.currentTime > .02) v.currentTime = 0; } catch (e) { /* not seekable */ } }
  function play(name, from = 0, fade = true) {
    if (!usable(name)) return false;
    if (cur !== name) { prev = cur; xf = fade ? 0 : 1; const t = texCur; texCur = texPrev; texPrev = t; curReady = false; if (vids[prev] && !RUNALL) { const pv = vids[prev]; pv.pause(); if (!LOOP[prev]) setTimeout(() => { if (cur !== prev || pv !== vids[cur]) prime(pv); }, 400); } }
    const v = vids[name]; cur = name; v.playbackRate = 1;
    // a primed clip already sits decoded on its first frame: start it without a seek (a seek at the moment of the
    // gesture made the decoder stall the graphics card on a PC, 2026-11-28)
    if (Math.abs(v.currentTime - from) > .02) { try { v.currentTime = from; } catch (e) { /* not seekable yet */ } }
    v._lastT = from; pair = false;
    v.play().catch(() => {});
    return true;
  }
  // start a gesture now if he is at rest, otherwise keep it for when the running one has finished
  function want(name) {
    if (!usable(name)) return false;
    if (cur === 'idle') { play(name, 0, true); return true; }
    if (cur === name && name !== 'cast') return true;
    if (!queued || (PRI[name] || 0) >= (PRI[queued] || 0)) queued = name;
    return false;
  }
  function act(name, o = {}) {
    if (!ready) return -1;
    if (name === 'idle') { hold = false; if (queued === 'suspense') queued = null; if (cur === 'suspense' && vids.suspense) vids.suspense.playbackRate = RUSH; return 0; }
    // when the suspense is over, the rest of its clip runs faster (no cut, no jump), so he is free for the spell sooner
    if (name === 'worried') { hold = !!o.hold; if (hold) want('suspense'); else { if (queued === 'suspense') queued = null; if (cur === 'suspense' && vids.suspense) vids.suspense.playbackRate = RUSH; } return 0; }
    if (name === 'cheer' || name === 'summon') { want('cheer'); return .9; }
    return 0;
  }
  // a spell: every spell gets its own raised hand. Returns the seconds until his hand is out (the magic leaves then).
  //  - at rest: the cast clip starts now
  //  - already casting with the hand still out (up to HAND_DOWN): the magic leaves with this raise
  //  - busy with anything else (suspense, cheer, a cast on its way down): that clip finishes faster (no cut, no jump),
  //    the cast is next, and the answer counts both. The game waits that long before it draws the win.
  // CAST_DONE: the cast clip is back at rest by then (its last 1.5 s are rest): a queued cast starts again from there
  const HAND_DOWN = 2.6, RUSH = 3, CAST_DONE = 3.65;
  const leftOf = (n, v, t) => (n === 'cast' ? Math.max(0, CAST_DONE - t) : Math.max(0, v.duration - t));
  function cast() {
    if (!ready || !usable('cast')) return -1;
    if (cur === 'idle') { play('cast', 0, true); return CAST_PEAK; }
    const v = vids[cur], t = v ? v.currentTime : 0;
    if (cur === 'cast' && t <= HAND_DOWN) return Math.max(0, CAST_PEAK - t);
    // busy (suspense, cheer, a cast going down): the game never waits for him; he crossfades into the cast now
    if (cur === 'cast') { const tt = texCur; texCur = texPrev; texPrev = tt; curReady = false; prev = 'cast'; xf = 0; v.playbackRate = 1; try { v.currentTime = 0; } catch (e) {} v._lastT = 0; pair = false; v.play().catch(() => {}); queued = null; return CAST_PEAK; }
    queued = null; play('cast', 0, true); return CAST_PEAK;
  }
  // seconds until a cast called now would have his hand out (no side effects; -1 when there is no wizard)
  function castIn() {
    if (!ready || !usable('cast')) return -1;
    if (cur === 'idle') return CAST_PEAK;
    const v = vids[cur], t = v ? v.currentTime : 0;
    if (cur === 'cast' && t <= HAND_DOWN) return Math.max(0, CAST_PEAK - t);
    return CAST_PEAK;
  }
  function handAt(name, t) {
    const k = HAND[name]; if (!k || t <= k[0][0] || t >= k[k.length - 1][0]) return REST_HAND;
    for (let i = 1; i < k.length; i++) if (t <= k[i][0]) { const a = k[i - 1], b = k[i], u = (t - a[0]) / (b[0] - a[0]); return [a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u]; }
    return REST_HAND;
  }
  function hand() {
    if (!ready || !box) return null;
    const r = rect(), p = gl && vids[cur] ? handAt(cur, vids[cur].currentTime) : REST_HAND;
    return { x: box.x + r.x + p[0] * r.w, y: box.y + r.y + p[1] * r.h };
  }
  function glow() { /* the spell's own light (game.js streamWin) carries the glow at his hand */ }
  function draw(tex, a, r, tex2 = tex, m = 1) {
    if (a <= 0) return;
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tex2); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform4f(loc.r, r.x / W * 2 - 1, 1 - r.y / H * 2, r.w / W * 2, r.h / H * 2); gl.uniform1f(loc.o, a); gl.uniform1f(loc.m, m);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function loop(now) {
    requestAnimationFrame(loop);
    if (document.hidden || !ready || !box) return;
    if (blocked && gl && gl.isContextLost && gl.isContextLost()) { cv.style.visibility = 'hidden'; return; }   // never a black box
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const r = rect();
    if (!gl) {                                                         // no video: the still painting, gently breathing
      const s = 1 + Math.sin(now / 1000 * 1.25) * .006;
      c2.setTransform(1, 0, 0, 1, 0, 0); c2.clearRect(0, 0, cv.width, cv.height); c2.setTransform(dpr, 0, 0, dpr, 0, 0);
      c2.translate(r.x + r.w / 2, r.y + r.h); c2.scale(1, s); c2.drawImage(still, -r.w / 2, -r.h, r.w, r.h); return;
    }
    const v = vids[cur];
    // a gesture always plays to its last frame (the rest frame); then the queued one, suspense again while held, or idle
    // a cast waiting behind a cast: as soon as the hand is back at rest, the clip starts over, crossfaded from the frozen
    // rest frame (texPrev keeps it), so there is no jump and no idle second and a half
    if (cur === 'cast' && queued === 'cast' && v && v.currentTime >= CAST_DONE) {
      queued = null; const tt = texCur; texCur = texPrev; texPrev = tt; curReady = false; prev = 'cast'; xf = 0; v.playbackRate = 1;
      try { v.currentTime = 0; } catch (e) {} v._lastT = 0; pair = false; v.play().catch(() => {});
    }
    else if (!LOOP[cur] && v && v.duration && (v.ended || v.currentTime >= v.duration - .05 || (RUNALL && v.currentTime + .5 < (v._lastT || 0)))) {
      const next = cur === 'suspense' && hold ? 'suspense' : queued; queued = null;
      if (next && usable(next)) play(next, 0, false); else play('idle', 0, false);
    }
    // phones (2026-11-27): the clips are 24 fps but the loop runs at 60, and every frame uploaded a 587x1760 picture.
    // Now a frame is uploaded and drawn only when the clip shows a new picture, a crossfade runs, or the box changed;
    // otherwise the canvas simply keeps what it shows.
    const cv0 = usable(cur) ? vids[cur] : null;
    if (v && !LOOP[cur]) v._lastT = Math.max(v._lastT || 0, v.currentTime);
    const fresh = cv0 ? (cv0._rv ? !!cv0._fresh : Math.floor(cv0.currentTime * CLIP_FPS + .001) !== shownT) : false;
    const FD = 1000 / CLIP_FPS, mk = pair ? Math.min(1, (now - tUp) / FD) : 1;   // the blend from the frame before to the newest
    if (xf >= 1 && !redraw && cur === shownName && !fresh && curReady && mk >= 1) return;
    redraw = false; shownName = cur;
    if (cv0) { if (!cv0._rv) shownT = Math.floor(cv0.currentTime * CLIP_FPS + .001); cv0._fresh = false; }
    // 2026-11-28: upload only a frame the decoder has delivered. Right after a gesture starts, the new clip's texture still
    // holds an old picture: the last picture of the clip before stays on screen until the new clip's first frame is in
    // (one or two frames), instead of the graphics card waiting for the decoder.
    waitT = curReady ? 0 : waitT + dt;                    // a decoder that never reports a frame: upload anyway after 0.3 s
    if (cv0 && (fresh || !cv0._rv || waitT > .3)) { const was = curReady; const tt = texOld; texOld = texCur; texCur = tt; gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texCur); try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, cv0); curReady = true; pair = was; tUp = now; } catch (e) { if (e && e.name === 'SecurityError') { blocked = true; texCur = texStill; prev = null; for (const v of Object.values(vids)) v.pause(); } } }
    if (!curReady && prev) { gl.viewport(0, 0, cv.width, cv.height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); draw(texPrev, 1, r); return; }
    xf = Math.min(1, xf + dt / .22);
    gl.viewport(0, 0, cv.width, cv.height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    if (prev && xf < 1) draw(texPrev, 1 - xf, r);
    draw(texCur, xf < 1 ? xf : 1, r, pair ? texOld : texCur, pair ? mk : 1);
  }
  return { init, frame, act, cast, castIn, hand, glow, loadRest, get ready() { return ready; } };
})();
