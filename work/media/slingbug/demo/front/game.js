/* Slingbug: a rhinoceros beetle on a leaf glider, launched from a twig slingshot across a morning meadow.
 * The pull picks the mode (three notches: HOP, GLIDE, FULL SEND); the angle only changes the look.
 * Everything that happens in the air comes from the book's events (math/game.mjs): one waypoint per segment.
 * Art: front/assets.js (tools/build-assets.mjs). Rig: front/pilot-rig.js. Engine: PixiJS 8 + LZ Rig (standard 9.1). */
(() => {
  'use strict';
  const ART = window.SB_ART, PIX = window.PIXI;
  const GROUND = 800;            // world y of the moss surface; the view always shows 0..900 at least
  const SEG = 430;               // world px per segment of sky
  const SX = 470;                // the slingshot's x (clear of the foreground poppy at a full pull)
  const START = SX + 260;        // where segment 0 begins
  const MODES = ['hop', 'glide', 'fullsend'];
  const NOTCH = [95, 175, 255];  // pull lengths of the three notches
  const MIN_W = 1150;            // the view is never narrower than this in world px (phones see more sky instead)

  let nightSky, lastDazed = null, lastFrog = null;
  // the night bonus: one flight in DIVES through three floors of sky (math/game.mjs floorAt), the camera climbs with her
  let camY = 0, camYT = 0, skyMode = false, hudBase = 0, bandK = 0.7, skyTop = 0;
  // the close camera: in flight the view zooms in around the beetle (zoom), a short push on big moments (zoomPunch)
  let zoom = 1, zoomPunch = 1, skyC = null, near = null; const fgPieces = [];
  // 2026-11-28 Lidor: the close camera made every flaw bigger ('looks awful, much closer'): back to the plain framing
  const flyZoom = () => 1;
  const scr = (x, y) => { const g = world.toGlobal({ x, y }); return { x: g.x / scale, y: g.y / scale }; };   // world -> hud
  let cloudsA = null, cloudsB = null, starsC = null, floorTags = null, silkC = null;
  const floorAt = (dive, i) => (i < 2 + 2 * dive ? 3 : i < 5 + 2 * dive ? 2 : 1);
  const FL_Y = { 3: [-700, -1500], 2: [60, -560], 1: [600, 250] };        // world y of each floor: [bottom, top]
  const FL_R = { 3: [0.70, 0.95], 2: [0.45, 0.68], 1: [0.10, 0.40] };     // the books' heights of each floor
  const SILK_Y = GROUND - 175;                                             // where the strand is, in world y
  const bonusY = (f, y) => { const r = FL_R[f], t = clamp((y - r[0]) / (r[1] - r[0]), 0, 1); return lerp(FL_Y[f][0], FL_Y[f][1], t); };
  let api, app, tex = {}, rootC, sky, far, mid, ground, fgL, fgR, world, itemsC, fxC, hudC, rig, planeC, sling = {}, tags = [];
  const hud = {};
  let viewW = 1600, viewH = 900, padW = 0, oy = 0, scale = 1, cam = 0, camTarget = 0, night = false, fast = false;
  let mode = 'glide', idleT = 0, pulling = null, armed = null, busyRound = false, rush = 1, skipCelebration = false;
  const tweens = new Set();
  const snd = (fn, ...a) => { try { if (window.SBSound) window.SBSound[fn](...a); } catch (e) { /* sound never stops the game */ } };
  const lerp = (a, b, t) => a + (b - a) * t, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ease = { out: t => 1 - (1 - t) ** 3, inOut: t => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2), back: t => 1 + 2.4 * (t - 1) ** 3 + 1.4 * (t - 1) ** 2, in: t => t * t * t };

  /* ---------- small engine helpers ---------- */
  function spr(name, ax = 0.5, ay = 0.5) { const s = new PIX.Sprite(tex[name]); s.anchor.set(ax, ay); return s; }
  // tween(obj, { x: [from, to] | to }, ms, easeFn) -> Promise. Time follows TURBO through the shell's speed().
  function tween(o, props, ms, fn = ease.out) {
    const from = {}, to = {};
    try { for (const [k, v] of Object.entries(props)) { if (Array.isArray(v)) { from[k] = v[0]; to[k] = v[1]; o[k] = v[0]; } else { from[k] = o[k]; to[k] = v; } } }
    catch (e) { return Promise.resolve(); }                   // its sprite is already gone
    const dur = Math.max(1, ms * spd());
    return new Promise(res => {
      const t = { t: 0, step(dt) { this.t += dt; const p = Math.min(1, this.t / dur), e = fn(p);
        try { for (const k in to) o[k] = from[k] + (to[k] - from[k]) * e; } catch (err) { tweens.delete(t); res(); return; }   // its sprite was destroyed meanwhile
        if (p >= 1) { tweens.delete(t); res(); } } };
      tweens.add(t);
    });
  }
  const spd = () => (api && api.speed ? api.speed() : 1);
  // (rush only slows a moment down now: standard 1.5 took the tap-to-hurry away)
  const wait = ms => (api ? api.sleep(ms / Math.max(1, rush)) : new Promise(r => setTimeout(r, ms / Math.max(1, rush))));

  /* ---------- the pilot from video (2026-11-27, Lidor: "raise the animation ten levels") ----------
   * AI clips at 24 fps, keyed and packed by tools/build-video.mjs: colour on top, alpha as grey below, one H.264 MP4 per
   * clip. A small WebGL canvas per group unpacks the current video frame and a Pixi sprite shows it. Two groups:
   *   glide: on her leaf glider (fly loops; scared and cheer play once and end on the fly pose, so nothing jumps)
   *   stand: on her feet (the dance in the big-win scene, dazed after the frog)
   * The rig keeps running underneath and shows whenever a clip is not ready (not loaded yet, or a browser that refuses
   * the video). Opened from disk, a file:// video cannot be read by WebGL; then the clips come as data URIs from
   * ../build/video-local.js (not published). */
  const VID = window.SB_VID || { groups: {}, clips: {} }, VIDS = {};
  let vidBlocked = !Object.keys(VID.clips).length;
  function vidLoad(n, src) {
    if (vidBlocked || VIDS[n] || !src) return;
    const v = document.createElement('video');
    v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.preload = 'auto';
    v.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;opacity:0;pointer-events:none';
    v.addEventListener('error', () => { v.failed = true; });
    v.src = src; document.body.append(v); v.load(); VIDS[n] = v;
  }
  // only = the clips to load now (the glide at the start; the others once the first round is over)
  function vidLoadAll(only) {
    if (vidBlocked) return;
    const names = Object.keys(VID.clips).filter(n => !only || only.includes(n));
    if (location.protocol !== 'file:') { names.forEach(n => vidLoad(n, VID.clips[n].src)); return; }
    const go = () => { if (!window.SB_VID_LOCAL) { vidBlocked = true; return; } names.forEach(n => vidLoad(n, window.SB_VID_LOCAL[n])); };
    if (window.SB_VID_LOCAL) return go();
    const sc = document.createElement('script'); sc.src = '../build/video-local.js'; sc.onload = go; sc.onerror = () => { vidBlocked = true; }; document.head.append(sc);
  }
  function vidPlayer(group) {
    const G = VID.groups[group]; if (!G) return null;
    const cv = document.createElement('canvas'); cv.width = G.w; cv.height = G.h;
    const gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: true }); if (!gl) return null;
    const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p;varying vec2 uv;void main(){uv=p;gl_Position=vec4(p.x*2.-1.,1.-p.y*2.,0.,1.);}'));
    // the colour in the file is already multiplied by alpha (transparent = black)
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, 'precision mediump float;varying vec2 uv;uniform sampler2D t;void main(){vec3 c=texture2D(t,vec2(uv.x,uv.y*.5)).rgb;float a=texture2D(t,vec2(uv.x,.5+uv.y*.5)).r;gl_FragColor=vec4(min(c,vec3(a)),a);}'));
    gl.linkProgram(pr); if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
    gl.useProgram(pr);
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
    const lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
    const tx = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tx);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
    gl.viewport(0, 0, G.w, G.h); gl.clearColor(0, 0, 0, 0);
    const texture = PIX.Texture.from(cv);
    const sp = new PIX.Sprite(texture); sp.visible = false;
    // a clip that starts in the middle of another (the glide loop interrupted by a fright or a cheer) would jump 3-4 times
    // more than a normal frame (measured). The last shown frame stays on top and fades out over the new clip instead.
    const gcv = document.createElement('canvas'); gcv.width = G.w; gcv.height = G.h; const gctx = gcv.getContext('2d');
    const gtex = PIX.Texture.from(gcv), ghost = new PIX.Sprite(gtex); ghost.visible = false; let fadeT = 0;
    const FADE = 160;
    const P = { G, sp, name: '', vid: null, loop: false, then: null, rate: 1, fresh: false, shown: false, on: false };
    P.ready = n => !vidBlocked && VIDS[n] && !VIDS[n].failed && VIDS[n].readyState >= 2;
    P.play = (n, o = {}) => {
      if (!P.ready(n)) return false;
      const v = VIDS[n];
      if (P.shown && sp.visible && sp.parent) {               // cross-fade from whatever frame is on screen now
        gctx.clearRect(0, 0, G.w, G.h); gctx.drawImage(cv, 0, 0); gtex.source.update(); fadeT = performance.now(); ghost.visible = true;
      }
      if (P.vid && P.vid !== v) P.vid.pause();
      P.vid = v; P.name = n; P.loop = !!o.loop; P.then = o.then || null; P.rate = o.rate || 1; P.fresh = true; P.on = true;
      v.loop = P.loop; v.playbackRate = clamp(P.rate / spd(), 0.5, 4);
      try { v.currentTime = o.at || 0; } catch (e) { /* not seekable yet */ }
      v.play().catch(() => {});
      return true;
    };
    P.acting = () => P.on && !P.loop;
    P.stop = () => { if (P.vid) P.vid.pause(); P.vid = null; P.on = false; P.name = ''; };
    P.detach = () => { P.stop(); if (sp.parent) sp.parent.removeChild(sp); if (ghost.parent) ghost.parent.removeChild(ghost); ghost.visible = false; sp.visible = false; sp.alpha = 1; P.shown = false; };
    P.update = () => {
      if (ghost.visible) {
        const k = (performance.now() - fadeT) / FADE;
        if (k >= 1 || !sp.parent || !sp.visible) { ghost.visible = false; if (ghost.parent) ghost.parent.removeChild(ghost); }
        else {
          if (ghost.parent !== sp.parent) sp.parent.addChildAt(ghost, sp.parent.getChildIndex(sp) + 1);
          ghost.position.copyFrom(sp.position); ghost.scale.copyFrom(sp.scale); ghost.anchor.copyFrom(sp.anchor); ghost.rotation = sp.rotation;
          ghost.alpha = sp.alpha * (1 - k) * (1 - k);
        }
      }
      const v = P.vid; if (!v) return;
      v.playbackRate = clamp(P.rate / spd(), 0.5, 4);
      if (!P.loop && (v.ended || v.currentTime >= VID.clips[P.name].dur - 0.05)) {
        const t = P.then; P.vid = null; P.on = false;            // the sprite keeps the last frame (the rest pose)
        if (t) P.play(t, { loop: true });
        return;
      }
      if (v.readyState >= 2 && !v.seeking && (P.fresh || !v.paused)) {
        try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, v); }
        catch (e) { vidBlocked = true; P.stop(); P.shown = false; sp.visible = false; return; }
        gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); texture.source.update();
        P.fresh = false; P.shown = true;
      }
    };
    return P;
  }
  let glideV = null, standV = null, frogV = null, fxV = null, popV = null, vidRest = 0;
  // the glide clip sits exactly where the rig's glider is (its box matched to the rig's box at rest)
  function fitGlide() {
    const G = glideV.G, sp = glideV.sp, k = rig.view.scale.x, vis = rig.view.visible;
    rig.view.visible = true; const b = rig.view.getLocalBounds(); rig.view.visible = vis;
    const s = b.width * k / (G.box[2] - G.box[0]) * 1.08;
    sp.anchor.set((G.box[0] + G.box[2]) / 2 / G.w, (G.box[1] + G.box[3]) / 2 / G.h); sp.scale.set(s);
    sp.x = rig.view.x + (b.x + b.width / 2) * k; sp.y = rig.view.y + (b.y + b.height / 2) * k;
    glideV.fitted = true;
  }
  // what the rig is told to do, the glide clip acts out: a fright, a cheer, otherwise the glide loop
  function glideFollows(move) {
    if (!glideV) return;
    // review v2: a fright that is already playing does not start over, and a landing settles her back into the glide
    if (move === 'flinch') { if (!(glideV.acting() && glideV.name === 'pilot-scared')) glideV.play('pilot-scared', { rate: 1.45, then: 'pilot-fly' }); }
    else if (move === 'land' || move === 'rest') { if (glideV.name !== 'pilot-fly') glideV.play('pilot-fly', { loop: true }); }
    else if (move === 'grab') { if (!glideV.acting()) glideV.play('pilot-cheer', { rate: 1.6, then: 'pilot-fly' }); }
    else if (move !== 'blink' && !glideV.acting() && glideV.name !== 'pilot-fly') glideV.play('pilot-fly', { loop: true });
  }
  // the stand clip on her feet: feet at (x, y) in the parent, the figure fig px tall
  function standAt(parent, x, y, fig) {
    const G = standV.G, sp = standV.sp;
    sp.anchor.set(G.feet[0] / G.w, G.feet[1] / G.h); sp.scale.set(fig / (G.feet[1] - G.box[1]));
    sp.x = x; sp.y = y; sp.rotation = 0; sp.alpha = 1; parent.addChild(sp);
    return sp;
  }

  /* ---------- numbers drawn from the digit sheet (four materials = four value levels, standard 4.1) ---------- */
  // the material ladder (art/סגנון.md): pollen under the play amount, amber from 1x, firefly gold from 20x. The clear dew digits read
  // as almost nothing against the dew drop and the sky (2026-11-27), so dew stays a picture, not a number.
  const MAT = x => (x < 1 ? 'pollen' : x < 20 ? 'amber' : 'gold');
  function fmt(x) { return x < 10 ? x.toFixed(2) : x < 100 ? x.toFixed(1) : String(Math.round(x)); }
  function fitW(c, max) { const w = c.width; if (w > max) c.scale.set(max / w); }
  function digits(str, mat, h) {
    const c = new PIX.Container(); let x = 0;
    for (const ch of str) {
      const key = 'd-' + mat + '-' + (ch === '.' ? 'dot' : ch === '+' ? 'plus' : ch);
      if (!tex[key]) continue;
      const s = new PIX.Sprite(tex[key]), k = h / 130;
      s.scale.set(k); s.anchor.set(0, ch === '.' ? 1 : 0.5); s.x = x; s.y = ch === '.' ? h * 0.5 : 0;
      c.addChild(s); x += s.width * 0.9;
    }
    c.pivot.x = x / 2; return c;
  }

  /* ---------- the scene ---------- */
  // A strip of one picture repeated sideways (the shared PixiJS build has no TilingSprite): scroll(offset) moves it.
  function strip(texture, k) {
    const c = new PIX.Container(); c.k = k; c.parts = []; c.texture0 = texture;
    c.fit = viewW => { c.tw = c.texture0.width * c.k; const n = Math.ceil(viewW / c.tw) + 2;
      while (c.parts.length < n) { const s = new PIX.Sprite(c.texture0); c.addChild(s); c.parts.push(s); }
      c.parts.forEach(s => s.scale.set(c.k)); };
    c.scroll = off => { const w = c.tw, x0 = -(((off % w) + w) % w); c.parts.forEach((s, i) => { s.x = x0 + i * w; }); };
    c.setTexture = t => { c.texture0 = t; c.parts.forEach(s => { s.texture = t; }); };
    c.setTint = t => c.parts.forEach(s => { s.tint = t; });
    return c;
  }
  function mirrorTexture(name) {          // the plant row is drawn twice, the second mirrored, so it repeats without a seam
    const src = tex[name].source.resource, w = src.width, h = src.height, c = document.createElement('canvas');
    c.width = w * 2; c.height = h; const g = c.getContext('2d');
    g.drawImage(src, 0, 0); g.save(); g.translate(w * 2, 0); g.scale(-1, 1); g.drawImage(src, 0, 0); g.restore();
    return PIX.Texture.from(c);
  }
  function build() {
    skyC = new PIX.Container(); app.stage.addChild(skyC);           // the sky does not zoom or climb (it is far away)
    rootC = new PIX.Container(); app.stage.addChild(rootC);
    // every repeating strip is drawn twice, the second mirrored, so it repeats without a seam (review 11.5: the ground seam)
    sky = strip(mirrorTexture('sky-day'), 1); far = strip(mirrorTexture('far'), 1); mid = strip(mirrorTexture('mid'), 0.42); ground = strip(mirrorTexture('ground'), 1);
    nightSky = spr('sky-night', 0.5, 0); nightSky.visible = false;    // one moon: the night sky is a single picture that only drifts
    cloudsB = strip(mirrorTexture('night-clouds'), 0.8); cloudsA = strip(mirrorTexture('night-clouds'), 1.1);
    starsC = new PIX.Container();
    for (let k = 0; k < 70; k++) { const t = spr('fx-spark'); t.blendMode = 'add'; t.tint = k % 3 ? 0xdfe8ff : 0xffe7a0; t.scale.set(0.03 + Math.random() * 0.07);
      t.wx = Math.random(); t.wy = -760 - Math.random() * 1300; t.ph = Math.random() * 6.28; starsC.addChild(t); }
    [cloudsA, cloudsB, starsC].forEach(c => { c.visible = false; });
    skyC.addChild(sky, nightSky);
    near = strip(mirrorTexture('near'), 0.66);            // smaller giant plants: the meadow reads as further away
    rootC.addChild(starsC, cloudsB, cloudsA, far, mid, ground, near);
    world = new PIX.Container(); rootC.addChild(world);
    // the slingshot: back prong, band behind, the glider, band in front, front prong
    sling.back = spr('sling-back', 0.5, 1); sling.back.scale.set(1.05); sling.back.x = SX - 40; sling.back.y = GROUND + 58;
    sling.front = spr('sling-front', 0.5, 1); sling.front.scale.set(1.05); sling.front.x = SX + 80; sling.front.y = GROUND + 58;
    sling.bandB = spr('band', 0, 0.5); sling.bandF = spr('band', 0, 0.5);
    sling.pouch = spr('pouch', 0.5, 0.5); sling.pouch.scale.set(0.8);
    // prong tips (where the band is tied), in world px
    // where the band is tied: the top of each prong, measured on the drawings (sling-back's branch at 24% of its width,
    // sling-front's at 55%; both 420 px tall at scale 1.05, anchored at the bottom middle)
    sling.tipB = { x: SX - 40 - 0.5 * 391 * 1.05 + 94 * 1.05, y: GROUND + 58 - 1.05 * 420 + 46 };
    sling.tipF = { x: SX + 80 - 0.5 * 139 * 1.05 + 77 * 1.05, y: GROUND + 58 - 1.05 * 420 + 40 };
    // Lidor 28.11: "show the bands at rest": she sits deep in the pouch, the bands make a clear V from the prong tips down to her
    sling.rest = { x: (sling.tipB.x + sling.tipF.x) / 2, y: sling.tipB.y + 115 };
    itemsC = new PIX.Container();
    planeC = new PIX.Container();
    if (/[?&]probe\b/.test(location.search)) window.__sb = { planeC, get sling() { return sling; }, loadClips: () => vidLoadAll(), get frogV() { return frogV; }, get fxC() { return fxC; } };   // QA probe only (tools/probe-motion.mjs)
    // no face drawn over her own head (Lidor 2026-11-27: the pieces do not sit together, two heads showed): the head slot is left out
    const RD = JSON.parse(JSON.stringify(window.SB_RIG)); RD.slots = RD.slots.filter(sl => sl.name !== 'head');
    for (const an of Object.values(RD.animations)) if (an.slots) delete an.slots.head;
    for (const k of Object.keys(RD.images)) if (/^head-/.test(k)) delete RD.images[k];      // the faces are not in assets.js any more
    rig = new window.LZRig(PIX, RD, Object.fromEntries(Object.keys(RD.images).map(k => [k, tex[RD.images[k]]])), { seed: 7 });
    rig.view.scale.set(0.5); planeC.addChild(rig.view);
    window.LZRig.attach(app.ticker, rig);
    rig.play('rest', { loop: true });
    glideV = vidPlayer('glide'); standV = vidPlayer('stand'); frogV = vidPlayer('frog');   // the two burst clips are off (2026-11-28): their seeds flew past the clip's frame and showed a cut box
    if (glideV) { planeC.addChild(glideV.sp); const rp = rig.play.bind(rig); rig.play = (m, o) => { const r = rp(m, o); glideFollows(m); return r; }; }
    vidLoadAll(['pilot-fly']);
    fxC = new PIX.Container();
    world.addChild(sling.back, sling.bandB, itemsC, sling.pouch, sling.bandF, sling.front, planeC, fxC);
    // the three notches as leaf tags above the sling
    MODES.forEach((m, i) => {
      const t = spr('tag-' + m, 0.5, 1); t.scale.set(0.5); t.x = SX - 200 + i * 160; t.y = sling.tipB.y - 90; t.mode = m; t.base = 0.5;
      t.visible = false; world.addChild(t); tags.push(t);
    });
    gaugeBuild();
    // giant blurred plants right in front of the camera, passing faster than the world (speed and depth)
    // the giant blurred foreground came off (2026-11-28, Lidor's screenshot): its pieces were cut straight where they met the
    // edge of the sheet, and the see-through stem crossing her looked like a second beetle. fgPieces stays empty.

    hudC = new PIX.Container(); app.stage.addChild(hudC);
    hud.bubble = spr('ui-bubble', 0.5, 0.5); hud.bubble.scale.set(0.85);
    hud.num = new PIX.Container(); hud.tail = new PIX.Container(); hud.wings = new PIX.Container();
    hudC.addChild(hud.bubble, hud.num, hud.tail, hud.wings);
    hudC.visible = false;
    placePlaneInSling();
  }
  function layout() {
    const w = app.screen.width, h = app.screen.height;          // CSS px (renderer.width is already CSS px in PixiJS 8)
    // the board fills the window and the bar floats over its bottom edge (review v1: 'a thin strip over a full-screen game'):
    // the world's ground line sits a little above the bar, and the ground picture carries on under it
    const pnl = document.getElementById('lzPanel'), ph = pnl ? pnl.getBoundingClientRect().height : 0;
    // upright phones: the win plate floats just above the bar, so the ground line goes above it too (it no longer covers the slingshot)
    const pad = Math.round(ph * 0.55) + (h > w ? 52 : 0);
    // Lidor 28.11: "it is seen too close, it is confusing": the camera stands further back (more meadow and sky in view)
    scale = h > w ? Math.min((h - pad) / 900, w / MIN_W) : Math.min((h - pad) / 1120, w / (MIN_W * 1.22));   // the phone is far already
    viewW = w / scale; viewH = h / scale; padW = pad / scale; oy = viewH - 900 - padW;
    rootC.scale.set(scale); rootC.y = oy * scale;                // ground stays above the bar; extra height is sky
    skyC.scale.set(scale); skyC.y = oy * scale;
    const top = -oy;
    // the sky covers the whole screen: when the camera rises with her the world moves down, and nothing may show under the sky
    const skyK = Math.max((viewH + 60) / tex['sky-day'].height, 1);
    sky.k = skyK; sky.fit(viewW); sky.y = top;
    const nh = viewH + 80, nk = Math.max(nh / tex['sky-night'].height, (viewW + 160) / tex['sky-night'].width);
    nightSky.scale.set(nk * 1.22); nightSky.x = viewW / 2; nightSky.y = top; skyTop = top;
    cloudsA.fit(viewW); cloudsA.y = -560; cloudsB.fit(viewW); cloudsB.y = -160;
    far.fit(viewW); far.y = GROUND - tex.far.height + 120;
    mid.fit(viewW); mid.y = GROUND - tex.mid.height * 0.42 + 40;
    ground.fit(viewW); ground.y = GROUND - 92;          // the moss covers the gap low in the plant row (the far haze showed through as a pale line)
    fgPieces.forEach(p => { p.scale.set(p.k); p.y = 900 + 60; });
    near.fit(viewW); near.y = GROUND - tex.near.height * 0.66 + 24;   // its roots on the moss line, where the stump stands
    hudC.scale.set(scale); hudC.x = 0; hudC.y = 0;
    // on a narrow screen the pull tags and the night buttons take the top corners: the dew drop goes under them
    const narrow = viewW * scale < 620, by = narrow ? Math.max(92, 250 / scale) : 92;
    hud.bubble.x = viewW / 2; hud.bubble.y = by; hud.num.x = viewW / 2; hud.num.y = by + 2;
    hud.tail.x = viewW / 2 + 230; hud.tail.y = by + 2; hud.wings.x = viewW / 2; hud.wings.y = by + 86;
  }

  /* ---------- the slingshot ---------- */
  function band(s, from, to) {
    const dx = to.x - from.x, dy = to.y - from.y, len = Math.hypot(dx, dy);
    s.x = from.x; s.y = from.y; s.rotation = Math.atan2(dy, dx); s.scale.set(len / 640, bandK);
  }
  function drawSling(p) {
    band(sling.bandB, sling.tipB, p); band(sling.bandF, sling.tipF, p);

    sling.pouch.x = p.x; sling.pouch.y = p.y; sling.pouch.rotation = Math.atan2(sling.tipF.y - sling.tipB.y, sling.tipF.x - sling.tipB.x) * 0.3;
  }
  function placePlaneInSling(p = sling.rest) {
    planeC.x = p.x + 14; planeC.y = p.y - 18; planeC.rotation = -0.12;   // leaning back into the pull, ready
    drawSling(p);
  }
  function setTags(active) {
    tags.forEach(t => { const on = t.mode === active; t.alpha = on ? 1 : 0.55; t.tint = on ? 0xffffff : 0xd8d8c8; t.scale.set(t.base * (on ? 1.12 : 1)); });
    gaugeShow(MODES.indexOf(active));
  }
  // the pull gauge: a notch on the line she is pulled along, for each strength
  const PULL = [
    // the band (Lidor 28.11: the thick flat strips 'sit like rubbish'): thin rubber in its own colour, a little thicker and redder with strength
    { name: 'HOP', line: 'SAFE · MAX 500x', tint: 0x9fd86a, band: 0xd6b48a, k: 0.32 },
    { name: 'GLIDE', line: 'BALANCED · MAX 2,500x', tint: 0xffc451, band: 0xc98a5a, k: 0.4 },
    { name: 'FULL SEND', line: 'RISKY · MAX 10,000x', tint: 0xff6a4d, band: 0xb85a3c, k: 0.5 },
  ];
  let gauge = null, gaugeSel = -1;
  // a power meter in the sky over the sling: three rows, the strongest on top, each with its name, risk and highest win
  const notchAt = n => ({ x: sling.rest.x - 150, y: sling.tipB.y - 110 - n * 92 });
  function gaugeBuild() {
    gauge = new PIX.Container(); world.addChild(gauge);
    PULL.forEach((P, n) => {
      const c = new PIX.Container(), q = notchAt(n); c.x = q.x; c.y = q.y; c.n = n;
      const dot = spr('pollen'); dot.scale.set(0.36); dot.tint = P.tint; c.addChild(dot); c.dot = dot;
      const t1 = textSprite(P.name, 40); t1.anchor.set(0, 1); t1.x = 40; t1.y = 6; t1.tint = P.tint; c.addChild(t1);
      const t2 = textSprite(P.line, 26); t2.anchor.set(0, 0); t2.x = 42; t2.y = 6; c.addChild(t2);
      gauge.addChild(c);
    });
    // Lidor 28.11: "a meter of how hard you pull back": a stem that fills from HOP up to FULL SEND as she is pulled
    const top = notchAt(2), bot = notchAt(0), x = top.x - 34, h = bot.y - top.y + 40;
    const stem = spr('band', 0, 0.5); stem.rotation = -Math.PI / 2; stem.x = x; stem.y = bot.y + 20; stem.scale.set(h / 640, 0.55); stem.tint = 0x3a4b2c; stem.alpha = 0.6;
    const fill = spr('band', 0, 0.5); fill.rotation = -Math.PI / 2; fill.x = x; fill.y = bot.y + 20; fill.scale.set(0.001, 0.55);
    gauge.addChildAt(stem, 0); gauge.addChildAt(fill, 1); gauge.fill = fill; gauge.fillH = h;
  }
  function gaugePower(L) {        // L = how far she is pulled (world px); 0 at rest
    if (!gauge || !gauge.fill) return;
    const k = clamp((L - 24) / (NOTCH[2] + 15 - 24), 0, 1), n = L < (NOTCH[0] + NOTCH[1]) / 2 ? 0 : L < (NOTCH[1] + NOTCH[2]) / 2 ? 1 : 2;
    gauge.fill.scale.x = Math.max(0.001, k * gauge.fillH / 640); gauge.fill.tint = PULL[Math.max(0, MODES.indexOf(mode))].tint;
  }
  function gaugeShow(n) {
    if (!gauge) return;
    gaugeSel = n;
    gauge.children.forEach(c => { if (c.n === undefined) return; const on = c.n === n; c.alpha = on ? 1 : 0.5; c.scale.set(on ? 1.12 : 0.9); });
    if (!pulling && !busyRound) bandLook(n);
  }
  // the band's look follows the strength: thin and green, amber, or thick and red
  function bandLook(n) {
    if (skyMode || n < 0) return;
    bandK = PULL[n].k; sling.bandB.tint = sling.bandF.tint = PULL[n].band;
    if (!busyRound) drawSling(pulling && pulling.q ? pulling.q : sling.rest);
  }
  const gaugeHit = p => { if (!gauge || !gauge.visible || gauge.alpha < 0.5) return -1; for (const c of gauge.children) if (p.x > c.x - 40 && p.x < c.x + 380 && Math.abs(p.y - c.y) < 42) return c.n; return -1; };
  // pull vector (from the rest point, pointing back and down) for a notch and an angle
  function pullPoint(notch, ang) { const L = NOTCH[notch]; return { x: sling.rest.x - Math.cos(ang) * L, y: sling.rest.y + Math.sin(ang) * L }; }

  function toWorld(e) {
    const r = app.canvas.getBoundingClientRect();
    const w = world.toLocal({ x: e.clientX - r.left, y: e.clientY - r.top }); return { x: w.x, y: w.y };
  }
  function bindPull() {
    const c = app.canvas;
    c.addEventListener('pointerdown', e => {
      if (busyRound) return;                                            // standard 1.5 (5.8, Lidor 28.11): a tap on the screen does nothing in a round
      if (api.busy || !ready()) return;
      const p = toWorld(e);
      const hit = gaugeHit(p);
      if (hit >= 0) { if (hit !== MODES.indexOf(mode)) { setMode(MODES[hit]); snd('play', 'notch_click', { pitch: 1 + hit * 0.12 }); } return; }
      if (Math.hypot(p.x - sling.rest.x, p.y - sling.rest.y) > 260) return;
      pulling = { id: e.pointerId, notch: MODES.indexOf(mode), ang: 0.3 };
      c.setPointerCapture(e.pointerId);
      rig.play('pull', { track: 1 }); snd('play', 'pull_stretch');
    });
    c.addEventListener('pointermove', e => {
      if (!pulling || e.pointerId !== pulling.id) return;
      const p = toWorld(e), dx = sling.rest.x - p.x, dy = p.y - sling.rest.y;
      const L = Math.hypot(dx, dy);
      pulling.ang = clamp(Math.atan2(dy, Math.max(dx, 1)), 0.02, 0.45);   // she sits lower in the pouch now: a flatter pull keeps her out of the ground
      const n = L < (NOTCH[0] + NOTCH[1]) / 2 ? 0 : L < (NOTCH[1] + NOTCH[2]) / 2 ? 1 : 2;
      const Lc = clamp(L, 24, NOTCH[2] + 15);                       // follows the finger, no jumps between notches
      pulling.L = Lc; gaugePower(Lc); const q = { x: sling.rest.x - Math.cos(pulling.ang) * Lc, y: sling.rest.y + Math.sin(pulling.ang) * Lc }; pulling.q = q;
      // the pull is only the feel: the pull is chosen on the leaves (Lidor 28.11), whatever the stretch
      placePlaneInSling(q); planeC.rotation = -pulling.ang * 0.5;
    });
    const up = e => {
      if (!pulling || e.pointerId !== pulling.id) return;
      gaugePower(0);
      const p = pulling; pulling = null;
      if (p.notch < 0) { rig.stop(1); placePlaneInSling(); return; }
      armed = { notch: p.notch, ang: p.ang };
      const btn = api.$('lzAction'); if (btn && !btn.disabled) btn.click(); else { armed = null; rig.stop(1); placePlaneInSling(); }
    };
    c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
  }
  const ready = () => { const b = api.$('lzAction'); return b && !b.disabled; };
  function setMode(m) {
    mode = m; setTags(m);
    const b = document.querySelector('#lzModes button[data-mode="' + m + '"]');
    if (b && b.getAttribute('aria-pressed') !== 'true') b.click();
  }

  /* ---------- the flight: waypoints from the events ---------- */
  // Lidor 28.11: "let her fly a little higher, wander in the sky": the same 0..1 heights now reach far higher (the camera is further back)
  const skyY = v => GROUND - 330 - v * 1080;            // Lidor 28.11: about twice as high; the camera rises with her            // 0 = just over the poppies, 1 = under the dew drop
  function catmull(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }
  // Lidor 28.11: "higher with the stronger band": each pull flies in its own band of sky (HOP low, FULL SEND high). Looks only.
  const LIFT = [[0, 0.5], [0.12, 0.78], [0.25, 1]];
  function flightPlan(evs, ang, notch = 1) {
    const [lo, hi] = LIFT[clamp(notch, 0, 2)], lift = y => lo + y * (hi - lo);
    const head = evs[0], segs = head.segs, at = {};
    for (const e of evs) if (Number.isInteger(e.i) && e.type !== 'end') (at[e.i] = at[e.i] || []).push(e);
    const end = evs.find(e => e.type === 'end') || { res: 'land', i: segs };
    const launchV = clamp(0.45 + ang * 0.45, 0.5, 0.95);           // a steeper pull climbs higher; looks only
    const pts = [{ x: planeC.x, y: planeC.y }];
    const last = end.res === 'land' || end.res === 'max' && end.i >= segs ? segs : end.i;
    // Lidor 28.11: "it only goes down; let her suddenly rise after she is really close to the bottom". On a long flight she
    // dives right down to the flowers once or twice, and a warm gust throws her back up. Only the look: the book already
    // holds how long she flies. A dip goes where the stretch and the one after it are empty; the frog's stretch is low too.
    const dips = new Set(), free = i => !(at[i] || []).some(e => e.y !== undefined);
    const tryDip = c => { for (let d = 0; d < 4; d++) for (const i of [c + d, c - d]) if (i >= 2 && i < segs - 2 && free(i) && free(i + 1) && !dips.has(i - 1) && !dips.has(i + 1)) { dips.add(i); return; } };
    if (segs >= 6) tryDip(Math.round(segs * 0.45));
    if (segs >= 12) tryDip(Math.round(segs * 0.75));
    let v = launchV;
    for (let i = 0; i <= Math.min(last, segs - 1); i++) {
      v += (0.4 - v) * (i ? 1.6 / Math.max(4, segs) : 0);                 // a slow sink, so the dives stand out
      if (dips.has(i - 1)) v = 0.95;                                        // the gust
      const ev = (at[i] || []).find(e => e.y !== undefined);
      const bolt = (at[i] || []).some(e => e.type === 'bolt');
      const y = dips.has(i) || bolt ? -0.02 : lift(ev ? ev.y : v);
      pts.push({ x: START + (i + 0.5) * SEG, y: skyY(y), i, evs: at[i] || [], dip: dips.has(i), gust: dips.has(i - 1) });
    }
    if (end.res === 'land') {
      pts.push({ x: START + segs * SEG + 120, y: GROUND - 205, touch: true });
    }
    return { pts, end, segs };
  }
  // a dive: climbs (from the band or the silk) to the top of the stars, then falls through the floors to the silk
  function divePlan(evs, dv) {
    const head = evs[0], segs = head.segs, at = {};
    for (const e of evs) if (Number.isInteger(e.i) && e.type !== 'end') (at[e.i] = at[e.i] || []).push(e);
    const end = evs.find(e => e.type === 'end') || { res: 'land', i: segs };
    const d = dv.dive, top = FL_Y[3][1] - 140 * d, x0 = planeC.x, y0 = planeC.y, gap = SEG * 0.8;
    const pts = [{ x: x0, y: y0 }, { x: x0 + 90, y: lerp(y0, top, 0.5) }, { x: x0 + 260, y: top }];
    const nS = 2 + 2 * d, range = f => (f === 3 ? [0, nS] : f === 2 ? [nS, nS + 3] : [nS + 3, segs]);
    const last = end.res === 'land' || end.res === 'max' && end.i >= segs ? segs : end.i;
    for (let i = 0; i <= Math.min(last, segs - 1); i++) {
      const f = floorAt(d, i), r = range(f), hiY = f === 3 ? top : FL_Y[f][1];
      const t = (i - r[0] + 0.5) / Math.max(1, r[1] - r[0]);
      const ev = (at[i] || []).find(e => e.y !== undefined);
      pts.push({ x: x0 + 260 + (i + 1) * gap, y: ev ? bonusY(f, ev.y) : lerp(hiY, FL_Y[f][0], t), i, evs: at[i] || [] });
    }
    const lx = pts[pts.length - 1].x;
    if (end.res === 'land') pts.push(dv.last ? { x: lx + 260, y: GROUND - 205, touch: true } : { x: lx + 240, y: SILK_Y });
    return { pts, end, segs };
  }
  // the spider-silk strand she bounces on: a mesh, so the middle sags under her while the stalks stay put
  let silkNow = null;
  function makeSilk(x, dive) {
    if (!silkC) { silkC = new PIX.Container(); world.addChildAt(silkC, 0); }
    const t = tex['night-silk'], K = 430 / t.width, MP = PIX.MeshPlane;
    const m = MP ? new MP({ texture: t, verticesX: 24, verticesY: 2 }) : new PIX.Sprite(t);
    m.scale.set(K); m.x = x - t.width * K / 2; m.y = SILK_Y + 20 - t.height * K * 0.44;
    m.alpha = 0; tween(m, { alpha: 1 }, 400);
    m.tint = [0xffffff, 0xfff2c8, 0xffe08a, 0xffd060][Math.min(3, dive)];   // every bounce brighter (stronger)
    if (MP) { const g = m.geometry; m.p0 = Float32Array.from(g.positions); m.vx = 24; }
    m.sag = a => { if (!m.p0) { m.y = SILK_Y + 20 - t.height * K * 0.44 + a * 0.6; return; }
      const g = m.geometry, p = g.positions;
      for (let k = 0; k < p.length / 2; k++) { const u = (k % m.vx) / (m.vx - 1), b = Math.pow(Math.max(0, Math.sin(Math.PI * clamp((u - 0.06) / 0.88, 0, 1))), 1.3); p[k * 2 + 1] = m.p0[k * 2 + 1] + a / K * b; }
      g.getBuffer('aPosition').update(); };
    silkC.addChild(m); silkNow = m;
    return m;
  }
  // she lands on the silk, it sags and throws her back up (the next dive's flight takes her from there)
  async function silkCatch() {
    const m = silkNow; if (!m) return;
    rig.play('land', { track: 1 }); snd('play', 'land_thud', { pitch: 1.3 });
    const o = { a: 0 }, y0 = planeC.y, ride = { step() { m.sag(o.a); planeC.y = y0 + o.a * 0.9; planeC.rotation *= 0.85; } };
    tweens.add(ride);
    await tween(o, { a: 95 }, 200, ease.out);
    tweens.delete(ride);
    if (!api.reduced) { pieces('dew', planeC.x, SILK_Y + 20, 8, 0.12); pieces('fx-spark', planeC.x, SILK_Y + 20, 6, 0.1); }
    const back = { a: 95 }, spring = { step() { if (!m.destroyed) m.sag(back.a); } }; tweens.add(spring);
    tween(back, { a: 0 }, 700, t => 1 - Math.cos(t * Math.PI * 3.5) * Math.exp(-4.5 * t)).then(() => { tweens.delete(spring); if (!m.destroyed) tween(m, { alpha: 0 }, 600).then(() => m.destroy()); });
    const hq = scr(planeC.x, planeC.y), hi = textSprite('HIGHER!', 40); hi.x = hq.x; hi.y = hq.y - 90; hudC.addChild(hi); hi.scale.set(0.3);
    tween(hi.scale, { x: 1, y: 1 }, 260, ease.back); tween(hi, { y: hi.y - 80 }, 900, ease.out); wait(700).then(() => tween(hi, { alpha: 0 }, 300)).then(() => hi.destroy());
    planeC.y = y0 + 85;
  }
  // after the frog in the bonus: she shakes it off, and a strand is already under her
  async function diveRecover(dive) {
    if (lastFrog && !lastFrog.destroyed) { const fr = lastFrog; lastFrog = null; tween(fr, { y: fr.y + 120, alpha: 0 }, 400, ease.in).then(() => fr.destroy()); frogGone(); }
    const d = lastDazed; lastDazed = null;
    const x = d && !d.destroyed ? d.x : planeC.x;
    if (d && !d.destroyed) {
      if (d.vidSp) { await tween(d.vidSp, { alpha: 0 }, 160); standV.detach(); }
      burst('fx-seeds', d.x, d.y - 60, 0.6, 600); snd('play', 'seed_puff'); tween(d, { alpha: 0 }, 160).then(() => d.destroy());
    }
    planeC.x = x; planeC.y = SILK_Y - 120; planeC.rotation = 0; planeC.scale.set(0.4); planeC.visible = true; rig.play('fly', { loop: true });
    makeSilk(x, dive);
    await tween(planeC.scale, { x: 1, y: 1 }, 260, ease.back);
    await tween(planeC, { y: SILK_Y }, 260, ease.in);
    await silkCatch();
  }
  // the floor names at the left edge, where each floor is on the screen
  function floorHud() {
    if (!floorTags) {
      floorTags = new PIX.Container(); hudC.addChild(floorTags);
      for (const [f, name] of [[3, 'STARS'], [2, 'CLOUDS'], [1, 'MEADOW']]) {
        const c = new PIX.Container(); c.f = f;
        const n = spr('ftag-' + f, 0, 0.5); n.scale.set(0.5); c.addChild(n);
        const t = textSprite(name, 20); t.anchor.set(0, 0.5); t.x = 8; t.y = 70; c.addChild(t);
        floorTags.addChild(c);
      }
    }
    floorTags.visible = skyMode;
    if (!skyMode) return;
    floorTags.children.forEach(c => { const yy = scr(planeC.x, (FL_Y[c.f][0] + FL_Y[c.f][1]) / 2).y; c.x = 16; c.y = yy; c.alpha = yy > 60 && yy < viewH - padW - 60 ? 1 : 0; });
  }
  function setSky(on) {
    skyMode = on; const appEl = document.getElementById('lzApp'); if (appEl) appEl.classList.toggle('sb-bonus', on); [cloudsA, cloudsB, starsC].forEach(c => { c.visible = on; });
    if (!on) { camYT = 0; skyMode = false; bandLook(MODES.indexOf(mode)); if (silkC) silkC.removeChildren().forEach(c => c.destroy()); silkNow = null; }
    floorHud();
  }

  // position on the path, u in [0, pts.length - 1]
  function pathAt(pts, u) {
    const k = clamp(Math.floor(u), 0, pts.length - 2), t = u - k;
    const P = j => pts[clamp(j, 0, pts.length - 1)];
    return { x: catmull(P(k - 1).x, P(k).x, P(k + 1).x, P(k + 2).x, t), y: catmull(P(k - 1).y, P(k).y, P(k + 1).y, P(k + 2).y, t) };
  }

  // One clock for the whole flight. The old flight ran one tween per waypoint, and the first one eased out to a stop just
  // before the first item, then jumped to full speed (Lidor 27.11: "stutters and jumps a second before she hits something").
  let flight = null;
  function flightDriver(pts, v) {
    const total = pts.length - 1, N = 24, S = [0], U = [0];
    let prev = pathAt(pts, 0);
    for (let j = 1; j <= total * N; j++) { const u = j / N, p = pathAt(pts, u); S.push(S[S.length - 1] + Math.hypot(p.x - prev.x, p.y - prev.y)); U.push(u); prev = p; }
    const len = S[S.length - 1], end = pts[total];
    const uAt = d => { if (d >= len) return total; let lo = 0, hi = S.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (S[m] <= d) lo = m; else hi = m; } return U[lo] + (U[hi] - U[lo]) * (d - S[lo]) / Math.max(1e-6, S[hi] - S[lo]); };
    const dr = { d: 0, u: 0, t: 0, k: 1, v, waits: [], step(dt) {
      this.t += dt;
      const kick = 1 + 1.1 * Math.exp(-this.t / 260);                  // the sling's kick fades into the glide
      this.d += v * this.k * kick * dt / spd();                       // TURBO speeds the clock like every tween
      this.u = uAt(this.d);
      if (this.d <= len) {
        const p = pathAt(pts, this.u), q = pathAt(pts, Math.min(total, this.u + 0.05));
        planeC.x = p.x; planeC.y = p.y;
        const r = clamp(Math.atan2(q.y - p.y, Math.max(1, q.x - p.x)), -0.6, 0.5);
        planeC.rotation = lerp(planeC.rotation, r * 0.6, 0.2);
      } else {                                                         // past the last point: she glides on, level
        planeC.x = end.x + (this.d - len); planeC.y = end.y + Math.sin(this.t / 300) * 6; planeC.rotation *= 0.94;
      }
      if (this.waits.length) this.waits = this.waits.filter(w => { if (this.u >= w.u) { w.res(); return false; } return true; });
    },
    reach(u) { return this.u >= u ? Promise.resolve() : new Promise(res => this.waits.push({ u, res })); },
    ease(k, ms) { return tween(this, { k }, ms, ease.inOut); } };
    return dr;
  }

  /* items waiting in the sky, placed on the path before the plane gets there */
  const ITEM = { coin: 'pollen', gem: 'dew', balloon: 'seed', gold: 'seed-gold' };
  function spawnItems(plan) {
    itemsC.removeChildren();
    const out = [];
    plan.pts.forEach((p, idx) => {
      for (const e of p.evs || []) {
        let list = [];
        if (e.type === 'item') {
          if (e.k === 'coin') for (let c = 0; c < e.n; c++) { const q = pathAt(plan.pts, idx - 0.35 + c * (0.7 / Math.max(1, e.n - 1))); const s = spr('pollen'); s.scale.set(0.6); s.x = q.x; s.y = q.y - 30 * Math.sin(Math.PI * c / Math.max(1, e.n - 1)); list.push(s); }
          else { const s = spr(ITEM[e.k]); s.scale.set(e.k === 'gold' ? 0.85 : 0.7); s.x = p.x; s.y = p.y - 8; list.push(s); }
        } else if (e.type === 'star') { const s = spr('firefly'); s.scale.set(0.7); s.x = p.x; s.y = p.y - 6; list.push(s); }
        else if (e.type === 'ticket') { const s = spr('wing'); s.scale.set(0.72); s.x = p.x; s.y = p.y - 6; list.push(s); }
        list.forEach(s => { s.ph = Math.random() * 6; s.by = s.y; itemsC.addChild(s); });
        if (list.length) out.push({ e, idx, list });
      }
    });
    return out;
  }

  /* ---------- HUD: the dew-drop multiplier, the fireflies on the tail, the golden wings ---------- */
  let shownPot = 0;
  function hudPot(pot, pop = true) {
    shownPot = pot; potTarget = pot;
    hud.num.removeChildren().forEach(c => c.destroy({ children: true }));
    const x = (hudBase + pot) / 100, d = digits(fmt(x) + 'x', MAT(x), 74); fitW(d, 300); hud.num.addChild(d);
    if (pop && !api.reduced) { hud.num.scale.set(1.25); tween(hud.num.scale, { x: 1, y: 1 }, 260, ease.back); }
  }
  function hudTail(m) {
    hud.tail.removeChildren();
    if (m <= 1) return;
    const f = spr('firefly'); f.scale.set(0.34); f.x = -30; hud.tail.addChild(f);
    const d = digits('x' + m, 'gold', 40); d.pivot.x = 0; d.x = 10; hud.tail.addChild(d);
    if (!api.reduced) { hud.tail.scale.set(1.4); tween(hud.tail.scale, { x: 1, y: 1 }, 300, ease.back); }
  }
  function hudWings(n) {
    hud.wings.removeChildren();
    if (!n) return;
    for (let k = 0; k < 3; k++) { const w = spr('wing'); w.scale.set(0.24); w.x = (k - 1) * 44; w.alpha = k < n ? 1 : 0.25; hud.wings.addChild(w); }
  }

  /* ---------- effects (drawn shapes, standard 4.5) ---------- */
  const PIECE = { 'fx-pollen': ['pollen', 0.16], 'fx-seeds': ['seed', 0.18], 'fx-splash': ['dew', 0.14], 'fx-spark': ['fx-spark', 0.12], 'fx-chips': ['acorn', 0.1], 'fx-shred': ['seed', 0.14] };
  function pieces(name, x, y, n, k, up = 1) {
    for (let j = 0; j < n; j++) {
      const p = spr(name); p.scale.set(k * (0.6 + Math.random() * 0.8)); p.x = x; p.y = y; p.rotation = Math.random() * 6.28; fxC.addChild(p);
      const a = Math.random() * Math.PI * 2, sp = 0.25 + Math.random() * 0.45, vx = Math.cos(a) * sp, vy = Math.sin(a) * sp - 0.35 * up, vr = (Math.random() - 0.5) * 0.02;
      const t = { a: 0, step(dt) { if (p.destroyed) { tweens.delete(t); return; } this.a += dt; p.x += vx * dt; p.y += (vy + 0.0009 * this.a) * dt; p.rotation += vr * dt; p.alpha = Math.max(0, 1 - this.a / 900); if (this.a > 900) { tweens.delete(t); p.destroy(); } } };
      tweens.add(t);
    }
  }
  function burst(name, x, y, k = 0.5, ms = 520) {
    if (PIECE[name] && !api.reduced) pieces(PIECE[name][0], x, y, Math.round(6 + k * 10), PIECE[name][1]);
    const s = spr(name); s.x = x; s.y = y; s.scale.set(k * 0.6); s.alpha = 1; fxC.addChild(s);
    tween(s.scale, { x: k * 1.15, y: k * 1.15 }, ms, ease.out); tween(s, { alpha: 0 }, ms, ease.in).then(() => s.destroy());
  }
  function flyToHud(s, trail = true) {           // a picked item flies up to the dew drop (world -> screen), leaving a glittering trail
    if (!s || s.destroyed) return Promise.resolve();
    const q = scr(s.x, s.y), gx = q.x, gy = q.y;
    world.removeChild(s); itemsC.removeChild(s); hudC.addChild(s); s.x = gx; s.y = gy;
    s.scale.set(s.scale.x * zoom * zoomPunch);
    const k0 = s.scale.x;
    let tr = null;
    if (trail && !api.reduced) {
      tr = { a: 0, n: 0, step(dt) { this.a += dt; if (s.destroyed) return; while (this.n * 45 < this.a) { this.n++;
        const g = new PIX.Sprite(s.texture); g.anchor.copyFrom(s.anchor); g.x = s.x; g.y = s.y; g.scale.set(s.scale.x * 0.7); g.alpha = 0.55; g.blendMode = 'add'; hudC.addChildAt(g, 0);
        tween(g, { alpha: 0 }, 260).then(() => g.destroy()); tween(g.scale, { x: s.scale.x * 0.2, y: s.scale.x * 0.2 }, 260); } } };
      tweens.add(tr);
    }
    return tween(s.scale, { x: k0 * 1.3, y: k0 * 1.3 }, 120, ease.back)
      .then(() => Promise.all([tween(s, { x: hud.bubble.x, y: hud.bubble.y }, 430, ease.inOut), tween(s.scale, { x: Math.min(k0 * 0.5, 46 / s.texture.height), y: Math.min(k0 * 0.5, 46 / s.texture.height) }, 430)]))
      .then(() => { if (tr) tweens.delete(tr); if (!s.destroyed) s.destroy(); });
  }

  /* ---------- collecting (Lidor 2026-11-27: 'the collecting should be far more impressive') ----------
   * Every pick: a bright ring and sparks where it was taken, its worth rises from the spot in the digit material of its size,
   * the pieces fly to the dew drop with a trail, and the drop swells and ticks up only when they land. Coins ring one by
   * one, each a little higher (the streak). A gold seed stops time for a breath: slow motion, a camera punch, a big ring. */
  let potTarget = 0;
  function ring(x, y, k, parent = fxC) {
    if (api.reduced) return;
    const r = spr('fx-spark'); r.blendMode = 'add'; r.tint = 0xffd77a; r.alpha = 0.85; r.x = x; r.y = y; r.scale.set(k * 0.15); parent.addChild(r);
    tween(r.scale, { x: k * 0.9, y: k * 0.9 }, 300, ease.out); tween(r, { alpha: 0, rotation: 0.9 }, 340, ease.in).then(() => r.destroy());
  }
  function popValue(x, y, v, big, f = 1) {
    if (!(v > 0)) return;
    // on the screen layer, where the pick was: it does not slide off the edge with the camera (review v2: labels cut at the edge)
    const q = scr(x, y), d = digits('+' + fmt(v) + 'x', MAT(v), big ? 104 : 60); d.x = clamp(q.x, 130, viewW - 170); d.y = Math.max(230, q.y - 60); hudC.addChild(d);
    if (f > 1) { const t = spr('ftag-' + f, 0, 0.5); t.scale.set(big ? 0.42 : 0.3); t.x = d.pivot.x * 2 + 8; t.y = 0; d.addChild(t); }
    d.scale.set(0.3); tween(d.scale, { x: 1, y: 1 }, 280, ease.back);
    tween(d, { y: d.y - (big ? 130 : 90) }, big ? 1300 : 950, ease.out);
    wait(big ? 950 : 650).then(() => tween(d, { alpha: 0 }, 320)).then(() => d.destroy({ children: true }));
  }
  function dropArrive(big) {      // the dew drop takes the pick in: a swell, a glint, and the number ticks over
    if (shownPot !== potTarget) hudPot(potTarget);
    if (api.reduced) return;
    const b = hud.bubble; b.scale.set(0.85 * (big ? 1.28 : 1.12)); tween(b.scale, { x: 0.85, y: 0.85 }, big ? 420 : 260, ease.back);
    ring(b.x, b.y, big ? 0.7 : 0.35, hudC);
  }
  function punch(k, ms) {         // a short camera push toward the beetle and back
    if (api.reduced) return;
    const z = { k: 1 }, zt = { step() { zoomPunch = z.k; } }; tweens.add(zt);
    tween(z, { k }, ms * 0.35, ease.out).then(() => tween(z, { k: 1 }, ms * 0.65, ease.inOut)).then(() => { tweens.delete(zt); zoomPunch = 1; });
  }
  // the pollen pop: a drawn burst (clip) where she took something; one at a time, a new one takes over the last
  function pollenPop(x, y, k) {
    if (!popV || !popV.ready('fx-pollen') || api.reduced) return;
    const G = popV.G, sp = popV.sp;
    sp.anchor.set((G.box[0] + G.box[2]) / 2 / G.w, (G.box[1] + G.box[3]) / 2 / G.h); sp.scale.set(k * 55 / Math.max(1, G.box[2] - G.box[0]));
    sp.x = x; sp.y = y; sp.alpha = 1; fxC.addChild(sp); popV.play('fx-pollen', { rate: 1.3 });
    const my = sp.popId = (sp.popId || 0) + 1;
    wait(40 / 24 / 1.3 * 1000).then(() => { if (sp.popId === my && sp.parent === fxC) popV.detach(); });
  }
  function collect(e, list, x, y, before) {
    const big = e.k === 'gold', v = (e.pot - before) / 100;
    potTarget = e.pot;
    if (big) {
      snd('play', 'gold_chime'); shake(0.5);
      if (!api.reduced && rush <= 1) { rush = 0.18; setTimeout(() => { if (rush === 0.18) rush = 1; }, 260); }
      punch(1.07, 520); ring(x, y, 1.1); burst('fx-pollen', x, y, 0.9); pieces('fx-spark', x, y, 10, 0.16);
    } else if (e.k !== 'coin') {
      snd('pickup', e.k === 'gem' ? 'dew_plink' : 'seed_puff'); ring(x, y, 0.8); pollenPop(x, y, 0.9);
      burst(e.k === 'gem' ? 'fx-splash' : 'fx-seeds', x, y, 0.55);
    }
    popValue(x, y, v, big || v >= 0.5, e.f || 1);
    if (big && fxV && fxV.ready('fx-dandelion') && list[0] && !list[0].destroyed) {
      const it = list[0], G = fxV.G, sp = fxV.sp, bw = G.box[2] - G.box[0];
      sp.anchor.set((G.box[0] + G.box[2]) / 2 / G.w, (G.box[1] + G.box[3]) / 2 / G.h); sp.scale.set(it.width * 1.05 / bw);
      sp.x = it.x; sp.y = it.y; sp.alpha = 1; sp.blendMode = 'normal'; fxC.addChild(sp);
      fxV.play('fx-dandelion', { rate: 1.25 }); it.visible = false; itemsC.removeChild(it);
      wait(420).then(() => dropArrive(true));
      wait(48 / 24 / 1.25 * 1000).then(() => { if (fxV.sp.parent === fxC) tween(fxV.sp, { alpha: 0 }, 200).then(() => fxV.detach()); });
      rig.play('grab', { track: 1 });
      return;
    }
    list.forEach((s, j) => setTimeout(() => {
      if (s.destroyed) return;
      if (e.k === 'coin') { snd('pickup', 'pollen_pop'); ring(s.x, s.y, 0.45); if (!api.reduced) pieces('pollen', s.x, s.y, 3, 0.12); if (j === 0) pollenPop(s.x, s.y, 0.7); }
      flyToHud(s).then(() => dropArrive(big && j === list.length - 1));
    }, j * 55 * spd()));
    rig.play('grab', { track: 1 });
  }
  function shake(power) {
    if (api.reduced) return;
    const t0 = performance.now();
    const t = { step() { const age = (performance.now() - t0) / 1000, a = 30 * power * Math.exp(-12 * age); rootC.x = Math.sin(age * 18 * 6.28) * a; if (age > 0.5) { rootC.x = 0; tweens.delete(t); } } };
    tweens.add(t);
  }

  // the running win, never above what the round will really win (a capped round stops at the cap, standard 10)
  function showWin(ctx, hundredths) { const u = ctx.units(hundredths); ctx.setWin(ctx.capped ? Math.min(u, ctx.winUnits) : u, true); }

  /* ---------- one throw ---------- */
  async function throwOnce(evs, ctx, bank, tail, dv = null) {
    const head = evs[0];
    // 1. pull back to the notch (an autoplay / PLAY-button round pulls by itself), then release
    const n = armed ? armed.notch : MODES.indexOf(ctx.mode) >= 0 ? MODES.indexOf(ctx.mode) : 1;
    const ang = armed ? armed.ang : 0.3, pulledByHand = !!armed;
    armed = null;
    const bounce = !!(dv && dv.dive > 0);
    if (!bounce) camTarget = 0;
    if (dv && dv.dive === 0) { bandK = 1.25; sling.bandB.tint = sling.bandF.tint = 0xffd66b; }   // the strong night band
    if (!bounce && !pulling && !pulledByHand) {
      rig.play('pull', { track: 1 }); snd('play', 'pull_stretch');
      const p = pullPoint(n, ang), o = { x: sling.rest.x, y: sling.rest.y, r: 0 };
      const f = { step() { placePlaneInSling(o); planeC.rotation = o.r; } }; tweens.add(f);
      await tween(o, { x: p.x, y: p.y, r: -ang * 0.5 }, 380, ease.inOut);
      tweens.delete(f); placePlaneInSling(p); planeC.rotation = -ang * 0.5;
    }
    if (!pulledByHand && !bounce) await wait(dv ? 380 : 120);
    if (dv && !bounce && !api.reduced) { pieces('fx-spark', planeC.x, planeC.y, 12, 0.12); shake(0.35); }
    const plan = dv ? divePlan(evs, dv) : flightPlan(evs, ang, n);
    if (dv && !dv.last && plan.end.res === 'land') makeSilk(plan.pts[plan.pts.length - 1].x, dv.dive);
    const items = spawnItems(plan);
    rig.stop(1); rig.play('launch', { track: 1 }); rig.play('fly', { loop: true, mix: 0.2 });
    snd('play', 'release_twang', bounce ? { pitch: 1.25 } : undefined); snd('play', 'launch_whoosh', { at: 0.05 }); if (!bounce) snd('resetStreak'); snd('scene', night ? 'night' : 'flight');
    if (!bounce) {
      // the band snaps back to rest
      const band0 = { x: planeC.x - 20, y: planeC.y + 40 };
      tween(band0, { x: sling.rest.x, y: sling.rest.y }, 220, ease.back).then(() => drawSling(sling.rest));
      const snap = { step() { drawSling(band0); } }; tweens.add(snap); setTimeout(() => tweens.delete(snap), 260 * spd() + 40);
    }
    // 2. fly the waypoints: one continuous clock (flightDriver), events fire as she passes them
    let pot = 0, wings = 0;
    const segMs = (n === 0 ? 360 : n === 1 ? 330 : 300);
    const total = plan.pts.length - 1;
    const byIdx = new Map(); items.forEach(it => { (byIdx.get(it.idx) || byIdx.set(it.idx, []).get(it.idx)).push(it); });
    const follow = flightDriver(plan.pts, SEG / segMs); flight = follow;
    tweens.add(follow);
    for (let k = 1; k <= total; k++) {
      if (plan.pts[k] && plan.pts[k].dip && !api.reduced) { follow.ease(0.55, 420); rig.play('flinch', { track: 1 }); snd('play', 'wing_flutter', { pitch: 0.8 }); }
      await follow.reach(k);
      const wp = plan.pts[k];
      if (wp.dip) gust(wp, follow);
      for (const e of wp.evs || []) {
        if (e.type === 'item') {
          const it = (byIdx.get(k) || []).find(x => x.e === e);
          collect(e, it ? it.list : [], wp.x, wp.y, pot);
          pot = e.pot; showWin(ctx, (bank + pot), true);
        } else if (e.type === 'star') {
          tail.m = e.m; rig.play('grab', { track: 1 }); snd('play', 'firefly_twinkle', { pitch: 1 + Math.min(4, Math.log2(e.m)) * 0.06 });
          const it = (byIdx.get(k) || []).find(x => x.e === e); if (it) it.list.forEach(s => itemsC.removeChild(s));
          burst('fx-spark', wp.x, wp.y, 0.6);
          hudTail(tail.m); setTailFlies(tail.m);
        } else if (e.type === 'ticket') {
          wings = e.n || wings + 1; snd('play', 'wing_flutter', { pitch: 1 + (wings - 1) * 0.12 });
          const it = (byIdx.get(k) || []).find(x => x.e === e); if (it) it.list.forEach(s => flyToHud(s));
          burst('fx-spark', wp.x, wp.y, 0.5); hudWings(Math.min(3, wings));
        } else if (e.type === 'tear') {
          snd('play', 'sparrows');
          follow.ease(0.45, 300);
          await sparrows(wp);
          follow.ease(1, 500);
          rig.play('flinch', { track: 1 }); snd('play', 'tear_rip');
          burst('fx-shred', planeC.x, planeC.y, 0.6, 700); shake(0.85);
          if (e.lost > 0) dropPollen(Math.min(8, 2 + Math.round(e.lost / 20)));
          pot = e.pot; hudPot(pot); showWin(ctx, (bank + pot), true);
        } else if (e.type === 'bolt') {
          follow.ease(0.6, 300);                                     // slower, never stopped (Lidor hates a halt in the air)
          if (!api.reduced) { const z = { k: 1 }; const zt = { step() { zoomPunch = z.k; } }; tweens.add(zt);
            const hurried = rush > 1; if (!hurried) rush = 0.35;           // a player who tapped to hurry keeps the hurry
            snd('play', 'frog_croak', { pitch: 0.8 }); await tween(z, { k: 1.08 }, 260, ease.out); if (!hurried) rush = 1; await wait(260);
            tween(z, { k: 1 }, 400).then(() => { tweens.delete(zt); zoomPunch = 1; }); }
          await frogCatch(wp);
          pot = 0; hudPot(0, false); showWin(ctx, (bank), true);
          return { res: 'crash', win: 0 };
        }
      }
      if (plan.end.i === wp.i && plan.end.res === 'night') { follow.ease(0.3, 500); await wingsMoment(); tweens.delete(follow); flight = null; return { res: 'night', win: pot }; }
      if (plan.end.i === wp.i && plan.end.res === 'max') {
        tweens.delete(follow); flight = null;
        const o = { x: planeC.x, y: planeC.y }, g = { step() { planeC.x = o.x; planeC.y = o.y; planeC.rotation *= 0.92; } }; tweens.add(g);
        const dist = Math.hypot(420, GROUND - 205 - planeC.y);
        await tween(o, { x: planeC.x + 420, y: GROUND - 205 }, Math.max(500, 3 * dist / follow.v), ease.out); tweens.delete(g);
        rig.play('land', { track: 1 }); shake(0.3); snd('play', 'land_thud'); burst('fx-seeds', planeC.x, GROUND - 20, 0.5);
        rig.play('rest', { loop: true, mix: 0.3 });
        return { res: 'max', win: pot };
      }
    }
    tweens.delete(follow); flight = null;
    if (dv && !dv.last) { await silkCatch(); return { res: 'land', win: pot }; }   // a bounce, not a landing
    // 3. touch down and slide; acorns crack
    rig.play('land', { track: 1 }); shake(0.3); snd('play', 'land_thud'); snd('play', 'slide_grass', { at: 0.08 });
    burst('fx-seeds', planeC.x, GROUND - 20, 0.5);
    const crates = evs.filter(e => e.type === 'crate');
    const acorns = crates.map((c, j) => { const s = spr('acorn'); s.scale.set(0.5); s.x = planeC.x + 170 + j * 130; s.y = GROUND - 22; s.anchor.set(0.5, 1); itemsC.addChild(s); return s; });
    const slide = { x: planeC.x };
    const stopX = planeC.x + 170 + Math.max(0, crates.length) * 130 + 40;
    let ci = 0;
    const sl = tween(slide, { x: stopX }, Math.max(450, 3 * (stopX - slide.x) / follow.v), ease.out);   // ease.out starts at her speed
    const slideF = { step() { planeC.x = slide.x; planeC.y = GROUND - 205; planeC.rotation *= 0.9;
      while (ci < crates.length && planeC.x >= acorns[ci].x - 30) { const c = crates[ci], s = acorns[ci]; burst('fx-chips', s.x, s.y - 30, 0.45); snd('play', 'acorn_crack'); s.destroy(); pot = c.pot; hudPot(pot); showWin(ctx, (bank + pot), true); ci++; } } };
    tweens.add(slideF);
    await sl; tweens.delete(slideF);
    while (ci < crates.length) { pot = crates[ci].pot; acorns[ci].destroy(); ci++; hudPot(pot); showWin(ctx, (bank + pot), true); }
    rig.play('rest', { loop: true, mix: 0.3 });
    return { res: 'land', win: pot };
  }

  // the gust that saves her just over the flowers: seeds whirl up from the grass, streaks of wind, she shoots up and cheers
  function gust(wp, follow) {
    snd('play', 'launch_whoosh', { pitch: 1.25 }); shake(0.25);
    follow.ease(1.45, 220).then(() => follow.ease(1, 700));
    if (!api.reduced) {
      for (let j = 0; j < 14; j++) {
        const sd = spr(j % 3 ? 'seed' : 'pollen'); sd.scale.set(0.18 + Math.random() * 0.14); sd.x = wp.x - 120 + Math.random() * 240; sd.y = GROUND - 40; fxC.addChild(sd);
        const vx = 0.15 + Math.random() * 0.35, vy = -(0.9 + Math.random() * 0.7), r = (Math.random() - 0.5) * 0.02;
        const t = { a: 0, step(dt) { if (sd.destroyed) { tweens.delete(t); return; } this.a += dt; sd.x += vx * dt; sd.y += vy * dt * Math.max(0.2, 1 - this.a / 1400); sd.rotation += r * dt; sd.alpha = Math.max(0, 1 - this.a / 1300); if (this.a > 1300) { tweens.delete(t); sd.destroy(); } } };
        tweens.add(t);
      }
      for (let j = 0; j < 5; j++) { const w = spr('fx-spark'); w.blendMode = 'add'; w.tint = 0xfff0c0; w.alpha = 0.5; w.scale.set(0.5, 0.05); w.rotation = -1.2; w.x = wp.x - 60 + j * 30; w.y = GROUND - 60 - j * 25; fxC.addChild(w);
        tween(w, { y: w.y - 260, alpha: 0 }, 600, ease.out).then(() => w.destroy()); }
    }
    setTimeout(() => rig.play('grab', { track: 1 }), 250);
  }

  // the fireflies on the tail: one for every doubling, up to 5 drawn
  const tailFlies = [];
  function setTailFlies(m) {
    const n = Math.min(5, Math.round(Math.log2(m)));
    while (tailFlies.length < n) { const f = spr('firefly'); f.scale.set(0.5); f.ph = Math.random() * 6; planeC.addChildAt(f, 0); tailFlies.push(f); }
    while (tailFlies.length > n) tailFlies.pop().destroy();
  }
  function dropPollen(n) {
    for (let j = 0; j < n; j++) {
      const s = spr('pollen'); s.scale.set(0.3); s.x = planeC.x + (Math.random() - 0.5) * 80; s.y = planeC.y; fxC.addChild(s);
      tween(s, { y: GROUND - 10, x: s.x - 40 - Math.random() * 120 }, 700 + Math.random() * 300, ease.in).then(() => tween(s, { alpha: 0 }, 300)).then(() => s.destroy());
    }
  }
  // a sparrow on LZ Rig: one drawing, a wave runs through it (strongest at the wing tips, the top of the drawing) at every frame
  function sparrowRig() {
    const [w, h] = window.SB_SIZE['sparrow-2'];
    const data = { lzrig: 1, name: 'sparrow', size: [w, h], origin: [0.5, 0.5], images: { s: 'sparrow-2' }, bones: [{ name: 'root' }],
      slots: [{ name: 's', bone: 'root', attachment: 's' }],
      attachments: { s: { type: 'skin', image: 's', root: 'root', grid: 14, weights: [], deform: { flap: { type: 'wave', freq: 0, speed: 0, power: 1.6, yAmp: 1, yFreq: 0.028, ySpeed: 24 } } } },
      animations: { fly: { duration: 1, loop: true, deform: { flap: [[0, 30]] }, bones: { root: { translate: [[0, 0, 0, 'inOutSine'], [0.13, 0, -6, 'inOutSine'], [0.26, 0, 0]] } } } } };
    const r = new window.LZRig(PIX, data, { s: tex['sparrow-2'] }, { seed: Math.floor(Math.random() * 1000) });
    r.play('fly', { loop: true, start: Math.random() }); return r;
  }
  async function sparrows(wp) {
    const flock = [];
    for (let j = 0; j < 4; j++) {
      const r = sparrowRig(), s = r.view; s.scale.set(0.6); s.x = cam + viewW + 80 + j * 60; s.y = wp.y - 260 - j * 40; s.rig = r; fxC.addChild(s); flock.push(s);
    }
    const flap = { step(dt) { flock.forEach(s => { if (!s.destroyed) s.rig.update(dt / 1000); }); } };
    tweens.add(flap);
    flock.forEach((s, j) => { const dx = planeC.x + 40 - j * 30 - s.x, dy = planeC.y - 10 + j * 18 - s.y; s.rotation = Math.atan2(dy, dx) + Math.PI; });
    // they home in on where she is now (she keeps moving)
    await Promise.all(flock.map((s, j) => { const x0 = s.x, y0 = s.y, o = { t: 0 }, h = { step() { if (s.destroyed) return; s.x = lerp(x0, planeC.x + 40 - j * 30, o.t); s.y = lerp(y0, planeC.y - 10 + j * 18, o.t); } };
      tweens.add(h); return tween(o, { t: 1 }, 360 + j * 50, ease.in).then(() => tweens.delete(h)); }));
    flock.forEach(s => { tween(s, { rotation: -0.4 }, 200); });
    flock.forEach((s, j) => tween(s, { x: s.x - 700, y: s.y - 300 - j * 40 }, 700, ease.out).then(() => { tweens.delete(flap); s.rig.destroy(); }));
  }

  // squash and stretch around a sprite's own base scale K (standard 5.1: anticipation, stretch, heavy landing)
  const squash = (o, K, sx, sy, ms, fn = ease.out) => tween(o.scale, { x: K * sx, y: K * sy }, ms, fn);
  // The frog with its clips (2026-11-28, Lidor: "the frog is all in the air"): it never leaves the ground. It sits up out of
  // the grass ahead of her, facing her, stretches, and its long tongue shoots up and pulls her down into its mouth.
  async function frogCatchClip() {
    // with the clips (24 fps) when they are loaded; before that (round 1) the same frog as a still picture with squash in code,
    // so the frog always looks the same (Lidor 28.11: 'the frog disappeared')
    const clip = !!(frogV && frogV.ready('frog-leap') && frogV.ready('frog-spit'));
    const K = 0.95, dir = 1;
    const G = clip ? frogV.G : { w: tex['frog-new'].width, h: tex['frog-new'].height, feet: [tex['frog-new'].width * 0.5, tex['frog-new'].height], box: [0, 0, tex['frog-new'].width, tex['frog-new'].height] };
    const sp = clip ? frogV.sp : spr('frog-new', 0.5, 1);                  // facing right, as drawn (Lidor 28.11): it waits just under her path and the tongue goes forward-up
    const TC = clip && frogV.ready('frog-tongue') ? VID.clips['frog-tongue'] : null;
    const hFig = tex['frog-sit'].height * K * 0.95, k = hFig / (G.feet[1] - G.box[1]), fy = GROUND + 58;
    let fx = planeC.x + 60;
    let tipMax = null;
    if (TC) { let bi = -1; TC.tip.forEach((t, i) => { if (t && (bi < 0 || t[0] > TC.tip[bi][0])) bi = i; }); tipMax = { i: bi, x: TC.tip[bi][0], y: TC.tip[bi][1] };
      fx = planeC.x + 140 - (tipMax.x - G.feet[0]) * k; }
    sp.anchor.set(G.feet[0] / G.w, G.feet[1] / G.h); sp.scale.set(k * dir, k); sp.x = fx; sp.y = fy + 70; sp.alpha = 0; fxC.addChild(sp);
    const s = spr('frog-sit', 0.5, 1); s.visible = false; s.x = fx; s.y = fy; fxC.addChild(s);    // a stand-in for the clean-up code
    snd('play', 'frog_croak');
    if (flight) flight.ease(0.9, 200);                                  // she glides on toward it while it gets ready
    if (TC) {
      // the drawn tongue: it flies out to where she is about to be, she glides onto its tip, and it reels her in
      frogV.play('frog-tongue', { rate: 1 });
      await tween(sp, { y: fy, alpha: 1 }, 160, ease.back);
      const V = VIDS['frog-tongue'];
      const tipW = t => { const g = sp.toGlobal({ x: t[0] - G.feet[0], y: t[1] - G.feet[1] }); return world.toLocal(g); };
      if (flight) { tweens.delete(flight); flight = null; }
      const goal = tipW([tipMax.x, tipMax.y]), lead = Math.max(250, (tipMax.i / 24) * 1000 - 220);
      tween(planeC, { x: goal.x, y: goal.y }, lead, ease.inOut);                       // a last glide right onto the sticky tip
      snd('play', 'frog_gulp');
      let stuck = false;
      for (let n = 0; n < 200; n++) {
        await wait(16);
        const i = Math.floor((V ? V.currentTime : 0) * 24), t = TC.tip[Math.min(i, TC.tip.length - 1)];
        if (!stuck && i >= tipMax.i - 1) { stuck = true; rig.play('flinch', { track: 1 }); shake(1); tweens.forEach(tw => { if (tw.o === planeC) tweens.delete(tw); }); }
        if (stuck) {
          if (!t || i > tipMax.i + 40) break;
          const q = tipW(t); planeC.x = q.x; planeC.y = q.y + 6;
          planeC.scale.set(Math.max(0.15, 1 - 0.85 * clamp((tipMax.x - t[0]) / Math.max(1, tipMax.x - G.box[2]), 0, 1)));
        }
      }
      planeC.visible = false; planeC.scale.set(1);
      shake(0.4);
      await wait(900);                                                                  // the gulp, cheeks puffed, in the clip
      frogV.play('frog-spit', { rate: 1.5, at: 2.2 }); await wait(500);
    } else {
    if (clip) frogV.play('frog-leap', { rate: 1.7, at: 0.8 }); else squash(sp, sp.scale.y, 1.12, 0.88, 260, ease.inOut);
    await Promise.all([tween(sp, { y: fy, alpha: 1 }, 180, ease.back)]);
    await wait(120);
    // the tongue: a pink band from the mouth to her, out fast, then back with her on it
    const mouth = () => ({ x: fx + dir * hFig * 0.22, y: fy - hFig * 0.78 });
    const tg = spr('band', 0, 0.5); tg.tint = 0xe0566c; fxC.addChild(tg);
    const o = { t: 0 }, aim = () => ({ x: planeC.x, y: planeC.y + 10 });
    const draw = () => { const m = mouth(), p = aim(), q = { x: lerp(m.x, p.x, o.t), y: lerp(m.y, p.y, o.t) }; band(tg, m, q); tg.scale.y = 1.05; };
    const tgT = { step: draw }; tweens.add(tgT);
    snd('play', 'frog_gulp');
    await tween(o, { t: 1 }, 130, ease.out);
    if (flight) { tweens.delete(flight); flight = null; }
    rig.play('flinch', { track: 1 }); shake(1);
    const from = { x: planeC.x, y: planeC.y }, pull = { t: 0 };
    const reel = { step() { const m = mouth(), t = pull.t; planeC.x = lerp(from.x, m.x, t); planeC.y = lerp(from.y, m.y, t); planeC.scale.set(1 - 0.85 * t); } };
    tweens.add(reel);
    await tween(pull, { t: 1 }, 330, t => t * (0.6 + 0.4 * t));      // reeled in at once, faster at the end
    tweens.delete(reel); tweens.delete(tgT); tg.destroy(); planeC.visible = false; planeC.scale.set(1);
    shake(0.4);
    if (clip) { frogV.play('frog-spit', { rate: 1.5 }); await wait(5100 * 0.66 / 1.5); }
    else { const k0 = sp.scale.y; await squash(sp, k0, 1.15, 0.85, 120); await squash(sp, k0, 0.95, 1.08, 160); await wait(500); await squash(sp, k0, 1.1, 0.9, 110); await squash(sp, k0, 1, 1, 200, ease.back); }
    }                                                       // the spit pop in the clip
    snd('play', 'spit_pop'); burst('fx-splash', fx + dir * 70, GROUND - 80, 0.4);
    const P = 0.5, p = spr('pilot-dazed', 0.5, 0.8); p.scale.set(P); p.x = fx + dir * 110; p.y = GROUND - 130; fxC.addChild(p);
    const arc = { t: 0 }, x0 = p.x, y0 = p.y, x1 = fx + dir * 250, y1 = GROUND - 20;
    const fly = { step() { const t = arc.t; p.x = lerp(x0, x1, t); p.y = lerp(y0, y1, t) - Math.sin(Math.PI * t) * 110; p.rotation = -t * Math.PI * 2; } };
    tweens.add(fly);
    await tween(arc, { t: 1 }, 520, t => t);
    tweens.delete(fly); p.rotation = 0;
    await squash(p, P, 1.3, 0.7, 90); await squash(p, P, 0.9, 1.15, 140); await squash(p, P, 1, 1, 140);
    if (standV && standV.ready('pilot-dazed')) {
      p.vidSp = standAt(fxC, p.x, p.y + p.texture.height * P * 0.2, p.texture.height * P * 0.86);
      standV.play('pilot-dazed', { rate: 1.15 }); p.visible = false;
    } else for (const r of [0.14, -0.1, 0.06, -0.03, 0]) await tween(p, { rotation: r }, 110, ease.inOut);
    lastDazed = p; lastFrog = clip ? s : sp;
    await wait(200);
  }
  async function frogCatch(wp) {
    if (tex['frog-new']) return frogCatchClip();
    const K = 0.95, s = spr('frog-crouch', 0.5, 1); let fx = planeC.x + 60; s.scale.set(K, K * 0.6); s.x = fx; s.y = GROUND + 70; fxC.addChild(s);
    snd('play', 'frog_croak');
    await Promise.all([tween(s, { y: GROUND + 10 }, 200, ease.back), squash(s, K, 1, 1, 200, ease.back)]);
    await squash(s, K, 1.14, 0.84, 170, ease.inOut);                                   // anticipation
    // the stalk stays in the grass; the frog leaves it, stretched, tongue first
    const stalk = spr('frog-stalk', 0.5, 1); stalk.scale.set(K); stalk.x = fx - 18; stalk.y = GROUND + 10; fxC.addChildAt(stalk, 0);
    s.texture = tex['frog-leap']; s.scale.set(K * 0.86, K * 1.18);
    const lead = flight ? flight.v * flight.k * 220 * spd() : 0;      // she is still gliding: the frog leaps to where she will be
    const topY = planeC.y + 170;
    await Promise.all([tween(s, { y: topY, x: planeC.x + lead + 60 }, 220, ease.out), squash(s, K, 0.94, 1.08, 220)]);
    if (flight) { tweens.delete(flight); flight = null; }
    fx = s.x;
    rig.play('flinch', { track: 1 }); shake(1); snd('play', 'frog_gulp');
    // caught on the tongue: the glider rides down with her and shrinks into her mouth
    const o = { y: topY }, py = planeC.y - topY, px = planeC.x - fx, span = GROUND + 10 - topY;
    const ride = { step() { const t = (o.y - topY) / span; s.y = o.y; planeC.x = fx + px * (1 - t); planeC.y = o.y + py * (1 - t); planeC.scale.set(1 - 0.85 * t); } };
    tweens.add(ride);
    await tween(o, { y: GROUND + 10 }, 380, t => t * (0.6 + 0.4 * t));   // no stop at the top of the ride
    tweens.delete(ride); planeC.visible = false; planeC.scale.set(1);
    stalk.destroy(); s.texture = tex['frog-full']; shake(0.4);
    if (frogV && frogV.ready('frog-spit')) {
      // v3: the gulp, the puffed cheeks and the spit are a drawn clip (24 fps), not pictures swapped (review v2)
      const G = frogV.G, sp = frogV.sp;
      sp.anchor.set(G.feet[0] / G.w, G.feet[1] / G.h); sp.scale.set(tex['frog-sit'].height * K * 0.95 / (G.feet[1] - G.box[1]));
      sp.x = s.x; sp.y = s.y; sp.alpha = 1; fxC.addChild(sp); frogV.play('frog-spit', { rate: 1.5 }); s.visible = false;
      await wait(5100 * 0.66 / 1.5);                                                     // the spit pop in the clip
    } else {
      await squash(s, K, 1.18, 0.82, 90); await squash(s, K, 0.95, 1.07, 130); await squash(s, K, 1, 1, 120);
      await wait(120);
      await squash(s, K, 1.1, 0.93, 110, ease.inOut);                                    // cheeks pump
      s.texture = tex['frog-spit']; s.scale.set(K * 0.92, K * 1.06); squash(s, K, 1, 1, 260, ease.back);
    }
    snd('play', 'spit_pop'); burst('fx-splash', fx + 70, GROUND - 80, 0.4);
    const P = 0.5, p = spr('pilot-dazed', 0.5, 0.8); p.scale.set(P); p.x = fx + 110; p.y = GROUND - 130; fxC.addChild(p);
    const arc = { t: 0 }, x0 = p.x, y0 = p.y, x1 = fx + 240, y1 = GROUND - 20;
    const fly = { step() { const t = arc.t; p.x = lerp(x0, x1, t); p.y = lerp(y0, y1, t) - Math.sin(Math.PI * t) * 110; p.rotation = t * Math.PI * 2; } };
    tweens.add(fly);
    await tween(arc, { t: 1 }, 520, t => t);
    tweens.delete(fly); p.rotation = 0;
    s.texture = tex['frog-sit'];                                                       // the frog settles, pleased
    await squash(p, P, 1.3, 0.7, 90); await squash(p, P, 0.9, 1.15, 140); await squash(p, P, 1, 1, 140);
    if (standV && standV.ready('pilot-dazed')) {                                       // she wobbles, eyes spinning, and shakes it off
      p.vidSp = standAt(fxC, p.x, p.y + p.texture.height * P * 0.2, p.texture.height * P * 0.86);
      standV.play('pilot-dazed', { rate: 1.15 }); p.visible = false;
    } else for (const r of [0.14, -0.1, 0.06, -0.03, 0]) await tween(p, { rotation: r }, 110, ease.inOut);
    lastDazed = p; lastFrog = s;
    await wait(200);
  }

  /* ---------- a round ---------- */
  function clearRound() {
    tweens.forEach(t => { if (t.keep !== true) tweens.delete(t); });
    if (standV) standV.detach(); if (frogV) frogV.detach(); if (fxV) fxV.detach(); if (popV) popV.detach();
    itemsC.removeChildren(); fxC.removeChildren().forEach(c => c.destroy());
    tailFlies.splice(0).forEach(f => f.destroy());
    planeC.visible = true; flight = null;
    if (!armed) { rig.stop(1); rig.play('rest', { loop: true }); placePlaneInSling(); }   // pulled by hand: she stays in the pouch
    camTarget = 0;
    hudWings(0); hudTail(1);
  }
  async function playRound(events, ctx) {
    busyRound = true;
    clearRound(); hudC.visible = true; hudC.alpha = 1; hud.bubble.visible = hud.num.visible = true; hudPot(0, false);
    let j = 0, bank = 0, feature = false;
    const tail = { m: 1 };
    const take = () => { const st = j; while (j < events.length && events[j].type !== 'end') j++; j++; return events.slice(st, j); };
    // base flight (or the first throw of a bought feature)
    if (events[0] && events[0].type === 'bonus') { feature = true; await nightIntro(); j = 1; }
    let res = !feature && events[j] && events[j].type === 'launch' ? await throwOnce(take(), ctx, bank, tail) : { res: 'land', win: 0 };
    if (res.res === 'night') {
      feature = true; bank += res.win;
      await nightIntro();
      j++;                                       // the 'bonus' event
    } else bank += res.win;
    let flown = 0;
    const bonusEv = events.find(e => e.type === 'bonus'); let flightsTotal = bonusEv ? bonusEv.throws : 3;
    if (feature) setSky(true);
    // the bonus is ONE flight (Lidor 27.11: "it should not start over every time"): the band throws her to the stars, and
    // between dives a silk strand throws her back up. Only the first dive starts at the sling.
    while (feature && j < events.length && events[j].type === 'launch') {
      const m0 = events[j].m, thisThrow = take();
      flightsTotal += thisThrow.filter(e => e.type === 'ticket' && e.add).length;
      const last = !(events[j] && events[j].type === 'launch');
      hudFlights(flightsTotal - flown - 1, flightsTotal);
      if (flown === 0) { await wait(300); if (res.res === 'night') await homeToSling(true); clearRound(); }
      hudBase = bank; hudPot(0, false); hudTail(m0); setTailFlies(m0);
      const r = await throwOnce(thisThrow, ctx, bank, tail, { dive: flown, last });
      bank += r.win; flown++;
      if (r.res === 'max') break;
      if (r.res === 'crash' && !last) await diveRecover(flown);
    }
    hudFlights(null); hudBase = 0;
    if (feature) { await wait(400); skipCelebration = false; await bonusTotal(ctx, flown); }
    await celebrate(ctx);
    if (feature) { setSky(false); await setNight(false, 900); }
    snd('scene', 'idle');
    // one win counter at a time (fixed item 1, review v2): the dew drop counts in the air, the plate in the bar takes over at the end
    if (hudC.visible) { await tween(hudC, { alpha: 0 }, 260); hudC.visible = false; hudC.alpha = 1; }
    busyRound = false; rush = 1;
    if (!vidRest) vidRest = setTimeout(() => vidLoadAll(), 3000);   // the other clips, in the background after the first round (standard 11.2)
    return { feature };
  }
  /* ---------- the win (standard 7.1, 7.2): tiers measured against what the round was played for ---------- */
  const TIERS = [{ x: 1.75, img: 'tier-1', line: 'Caught a breeze!' }, { x: 5, img: 'tier-2', line: 'Above the dandelions' },
    { x: 20, img: 'tier-3', line: 'The sparrows are jealous' }, { x: 50, img: 'tier-4', line: 'They will sing about this flight' }];
  // count length by win size (Dojo curve, standard 7.1), never under 1 s per tier reached
  const countMs = x => x < 1.75 ? 0 : x < 10 ? 640 * (x - 2) / 8 + 900 : x < 20 ? 640 + 80 * (x - 10) : x < 50 ? 1440 + 66.7 * (x - 20) : x < 100 ? 3440 + 60 * (x - 50) : Math.min(11440, 6440 + 33.3 * (x - 100));
  let marker = null;            // a DOM flag while the celebration is on screen (for the improvement station)
  // Each tier is its own scene (review 11.5: "only the word changed"). The light, the moving things and the way the title
  // arrives change with the tier; the pilot comes on stage and dances; the dew drop hides so only the count and the bar show.
  const SCENES = [
    { tint: 0xfff0c0, dim: 0.16, enter: 'left',  ambient: 'pollen' },    // UPDRAFT: warm light, pollen spiralling up
    { tint: 0x1b2a12, dim: 0.45, enter: 'drop',  ambient: 'seeds' },     // HIGH FLYER: dandelion seeds drifting across
    { tint: 0x3a2208, dim: 0.52, enter: 'right', ambient: 'wind' },      // TAILWIND: a gust, streaks and golden seeds
    { tint: 0x0e1630, dim: 0.66, enter: 'punch', ambient: 'fireflies' }, // MEADOW LEGEND: night falls, fireflies circle
    { tint: 0x241a04, dim: 0.7,  enter: 'zoom',  ambient: 'all' },       // MAX WIN
  ];
  async function celebrate(ctx) {
    const x = ctx.winX / ctx.cost;
    if (ctx.winX <= 0) return;
    if (x < 1) { rig.play('flinch', { track: 1 }); await wait(150); return; }   // below what it was played for: a small wince, no fanfare
    if (x < TIERS[0].x) { await smallWin(ctx, x); return; }
    skipCelebration = false;
    if (!marker) { marker = document.createElement('div'); marker.className = 'sb-celebrate'; marker.hidden = true; document.body.appendChild(marker); }
    marker.hidden = false; marker.classList.add('on'); snd('moment', 'big');
    const hudWas = [hud.bubble, hud.num, hud.tail, hud.wings].map(h => h.visible); [hud.bubble, hud.num, hud.tail, hud.wings].forEach(h => { h.visible = false; });
    const layer = new PIX.Container(); hudC.addChild(layer);
    const dim = new PIX.Graphics().rect(0, 0, viewW, viewH).fill({ color: 0xffffff }); dim.tint = SCENES[0].tint; dim.alpha = 0; layer.addChild(dim);
    const amb = new PIX.Container(), fount = new PIX.Container(), stage = new PIX.Container(), title = new PIX.Container(), num = new PIX.Container(), line = new PIX.Container();
    layer.addChild(amb, fount, stage, title, num, line);
    title.x = num.x = line.x = viewW / 2; title.y = viewH * 0.2; num.y = viewH * 0.38; line.y = viewH * 0.48;
    await tween(dim, { alpha: SCENES[0].dim }, 650, ease.in);            // the light is pulled in before the first tier
    // the pilot steps onto the stage, big, and dances (code motion every frame)
    planeC.visible = false;
    const HK0 = Math.min(1.2, viewH * 0.46 / 480), useV = !!(standV && standV.ready('pilot-dance'));
    let hero, HK = HK0;
    if (useV) { hero = standAt(stage, viewW * 0.5, viewH + 400, tex['pilot-win'].height * HK0 * 0.92); HK = hero.scale.x; standV.play('pilot-dance', { loop: true }); }
    else { hero = spr('pilot-win', 0.5, 1); hero.scale.set(HK); hero.x = viewW * 0.5; hero.y = viewH + 400; stage.addChild(hero); }
    tween(hero, { y: (viewH - padW) * 0.99 }, 520, ease.back);
    const capped = ctx.capped, total = ctx.winX, dur = capped ? 10000 : Math.max(2100, countMs(x) + 400 * TIERS.filter(t => x >= t.x).length);
    let scene = SCENES[0], t0 = 0, spawnAcc = 0, ambAcc = 0, last = -1, titleSpr = null, titleBase = 0.62;
    const setTier = k => {
      scene = SCENES[Math.min(k, SCENES.length - 1)];
      tween(dim, { alpha: scene.dim }, 420); dim.tint = scene.tint;
      if (titleSpr) { const old = titleSpr; tween(old, { alpha: 0, y: old.y - 40 }, 200).then(() => old.destroy()); }
      const sp = spr(k >= TIERS.length ? 'cap-max' : TIERS[k].img); titleSpr = sp; title.addChild(sp);
      titleBase = k >= TIERS.length ? 0.8 : 0.62 + k * 0.03;
      const e = scene.enter;
      if (e === 'left') { sp.x = -viewW * 0.7; sp.rotation = -0.3; sp.scale.set(titleBase); tween(sp, { x: 0, rotation: 0 }, 480, ease.back); }
      else if (e === 'drop') { sp.y = -viewH * 0.5; sp.scale.set(titleBase); tween(sp, { y: 0 }, 520, t => 1 - Math.abs(Math.cos(t * Math.PI * 2.5)) * (1 - t)); }
      else if (e === 'right') { sp.x = viewW * 0.8; sp.scale.set(titleBase * 1.4, titleBase * 0.7); tween(sp, { x: 0 }, 300, ease.out); tween(sp.scale, { x: titleBase, y: titleBase }, 520, ease.back); }
      else if (e === 'punch') { sp.scale.set(0.05); tween(sp.scale, { x: titleBase * 1.25, y: titleBase * 1.25 }, 260, ease.out).then(() => tween(sp.scale, { x: titleBase, y: titleBase }, 300, ease.back)); }
      else { sp.scale.set(titleBase * 3); sp.alpha = 0; tween(sp, { alpha: 1 }, 300); tween(sp.scale, { x: titleBase, y: titleBase }, 620, ease.back); }
      line.removeChildren().forEach(c => c.destroy());
      const txt = k >= TIERS.length ? 'The whole meadow is cheering' : TIERS[k].line;
      const t = textSprite(txt, 38); t.alpha = 0; line.addChild(t); tween(t, { alpha: 1 }, 400);
      // the pilot reacts to every new tier: a jump with squash and stretch
      hero.scale.set(HK * 1.2, HK * 0.8); tween(hero.scale, { x: HK, y: HK }, 380, ease.back);
    };
    const impact = async k => {             // IMPACT: light sucked in, flash, shake, a 260 ms hold, a second wave
      if (!api.reduced) {
        const fl = new PIX.Graphics().rect(0, 0, viewW, viewH).fill({ color: 0xfff6d6 }); fl.alpha = 0; layer.addChild(fl);
        await tween(fl, { alpha: 0.85 }, 90, ease.in); shake(k >= 3 ? 1 : 0.85);
        tween(fl, { alpha: 0 }, 420).then(() => fl.destroy());
      }
      setTier(k); snd('play', k >= TIERS.length ? 'max_win' : 'tier_hit_' + (k + 1));
      await wait(260);
      for (let j = 0; j < 14 + k * 6; j++) spawnSeed(fount, true);
    };
    // the scene's own moving things (each one moves in code every frame)
    const ambient = kind => {
      const W = viewW, H = viewH;
      const mk = (name, k) => { const a = spr(name); a.scale.set(k); amb.addChild(a); return a; };
      if (kind === 'pollen' || kind === 'all') { const a = mk('pollen', 0.18 + Math.random() * 0.2); a.x = Math.random() * W; a.y = H + 30; a.v = 0.12 + Math.random() * 0.1; a.ph = Math.random() * 6; a.mode = 'rise'; }
      if (kind === 'seeds' || kind === 'all') { const a = mk('seed', 0.2 + Math.random() * 0.2); a.x = -60; a.y = Math.random() * H * 0.8; a.v = 0.08 + Math.random() * 0.08; a.ph = Math.random() * 6; a.mode = 'drift'; }
      if (kind === 'wind' || kind === 'all') { const a = mk(Math.random() < 0.7 ? 'seed' : 'seed-gold', 0.16 + Math.random() * 0.12); a.scale.x *= 2.4; a.alpha = 0.7; a.x = W + 80; a.y = Math.random() * H; a.v = 0.9 + Math.random() * 0.6; a.mode = 'gust'; }
      if (kind === 'fireflies' || kind === 'all') { const a = mk('firefly', 0.16 + Math.random() * 0.14); a.blendMode = 'add'; a.r = 180 + Math.random() * 260; a.ang = Math.random() * 6.28; a.v = (0.0006 + Math.random() * 0.0008) * (Math.random() < 0.5 ? -1 : 1); a.mode = 'orbit'; a.alpha = 0; }
    };
    // a tap moves the count on to the next tier, not straight to the end (standard 5.8, review v2); after the last one it ends
    const pAt = xv => 1 - Math.pow(1 - Math.min(1, xv * ctx.cost / total), 1 / 2.2);
    const nextP = () => { const curX = total * (1 - Math.pow(1 - t0, 2.2)) / ctx.cost, nt = TIERS.find(tt => tt.x > curX + 1e-6 && x >= tt.x); return nt ? pAt(nt.x) : 1; };
    let tapped = false;
    const step = { t: 0, step(dt) {
      this.t += dt;
      if (skipCelebration) { skipCelebration = false; if (t0 < 1) this.t = Math.max(this.t, nextP() * dur * spd()); else tapped = true; }
      t0 = Math.min(1, this.t / (dur * spd()));
      const p = t0, cur = total * (p < 1 ? (1 - Math.pow(1 - p, 2.2)) : 1);
      const xs = cur / ctx.cost, v = Math.round(xs * 100) / 100;
      if (v !== last) { if (this.t - (this.tk || 0) > 90 && p < 1) { this.tk = this.t; snd('play', 'tick', { pitch: 1 + p * 0.5 }); } last = v; num.removeChildren().forEach(c => c.destroy({ children: true })); const d = digits(fmt(cur) + 'x', MAT(xs), 92 + 60 * Math.sqrt(Math.min(xs, 50) / 50)); fitW(d, viewW * 0.74); num.addChild(d); }
      if (p > 0.65 && !api.reduced) num.scale.set(1 + 0.04 * Math.sin(this.t / 60));
      // the title breathes and sways; the pilot dances (hop, squash, lean) in code
      if (titleSpr && !titleSpr.destroyed) { titleSpr.y = Math.sin(this.t / 420) * 8; titleSpr.rotation = Math.sin(this.t / 700) * 0.03; }
      const hp = (this.t % 560) / 560, hop = Math.abs(Math.sin(hp * Math.PI));
      if (useV) hero.y = (viewH - padW) * 0.99;                     // the clip dances; the code only keeps her on the stage
      else { hero.y = (viewH - padW) * 0.99 - hop * 34; hero.rotation = Math.sin(this.t / 280) * 0.08; }
      spawnAcc += dt; const every = Math.max(25, 140 - 110 * p * p * p);
      while (spawnAcc > every) { spawnAcc -= every; spawnSeed(fount, false); }
      ambAcc += dt; while (ambAcc > 70) { ambAcc -= 70; if (amb.children.length < 70) ambient(scene.ambient); }
      for (const a of amb.children) {
        if (a.mode === 'rise') { a.y -= a.v * dt; a.x += Math.sin(this.t / 300 + a.ph) * 0.6; }
        else if (a.mode === 'drift') { a.x += a.v * dt; a.y += Math.sin(this.t / 500 + a.ph) * 0.4; a.rotation += 0.001 * dt; }
        else if (a.mode === 'gust') { a.x -= a.v * dt; }
        else if (a.mode === 'orbit') { a.ang += a.v * dt; a.x = viewW / 2 + Math.cos(a.ang) * a.r; a.y = viewH * 0.32 + Math.sin(a.ang) * a.r * 0.45; a.alpha = Math.min(1, a.alpha + dt / 400); }
        if (a.y < -80 || a.x < -200 || a.x > viewW + 200) a.dead = true;
      }
      amb.children.filter(a => a.dead).forEach(a => a.destroy());
    } };
    tweens.add(step);
    await impact(0);
    for (let k = 1; k < TIERS.length; k++) {
      if (x < TIERS[k].x) break;
      while (total * (1 - Math.pow(1 - t0, 2.2)) / ctx.cost < TIERS[k].x - 1e-6) await wait(40);
      await impact(k);
    }
    if (capped) { while (t0 < 1) await wait(40); await impact(TIERS.length); }
    while (t0 < 1) await wait(40);
    tapped = false;
    if (!api.reduced) { num.scale.set(1.15); tween(num.scale, { x: 1, y: 1 }, 300, ease.back); }
    hudPot(Math.round(ctx.winX * 100 / ctx.cost), false);
    for (let t = 0; t < 2100 && !tapped && !(rush > 1 && t > 500); t += 50) await wait(50);
    tweens.delete(step); skipCelebration = false;
    await tween(layer, { alpha: 0 }, 300);
    if (useV) standV.detach();                             // the clip's sprite is reused, not destroyed with the scene
    layer.destroy({ children: true }); rig.stop(1); planeC.visible = true;
    [hud.bubble, hud.num, hud.tail, hud.wings].forEach((h, i) => { h.visible = hudWas[i]; });
    marker.hidden = true; marker.classList.remove('on'); snd('moment', null);
  }
  // a line of text drawn on a canvas in the game's font (the shared PixiJS build has no Text)
  function textSprite(str, px) {
    const k = 2, c = document.createElement('canvas'), g = c.getContext('2d'), font = '600 ' + px * k + 'px Fredoka, sans-serif';
    g.font = font; const w = Math.ceil(g.measureText(str).width) + 16 * k; c.width = w; c.height = Math.ceil(px * 1.5 * k);
    g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
    g.lineWidth = 7 * k; g.strokeStyle = '#6b3a12'; g.strokeText(str, w / 2, c.height / 2);
    g.fillStyle = '#fff6e0'; g.fillText(str, w / 2, c.height / 2);
    const s = new PIX.Sprite(PIX.Texture.from(c)); s.anchor.set(0.5); s.scale.set(1 / k); return s;
  }
  // above what it was played for, under the first tier (standard 7.2): ~1.6 s, skippable. She cheers, the meadow bursts
  // around her, the amount rises out of the glider and flies down into the win plate.
  async function smallWin(ctx, x) {
    skipCelebration = false;
    hud.bubble.visible = hud.num.visible = false;        // the number over her head is the only counter now
    hudPot(Math.round(ctx.winX * 100 / ctx.cost), false);
    rig.play('cheer', { track: 1, loop: true }); snd('play', 'tier_hit_1', { gain: 0.7 });
    burst('fx-pollen', planeC.x, planeC.y - 30, 0.8, 700); burst('fx-spark', planeC.x + 50, planeC.y - 90, 0.6, 600); burst('fx-seeds', planeC.x - 60, planeC.y - 40, 0.6, 800);
    const sq = scr(planeC.x, planeC.y), sx = sq.x, sy = sq.y;
    const d = digits(fmt(x) + 'x', MAT(x), 84); fitW(d, viewW * 0.5);
    const c = new PIX.Container(); c.addChild(d); c.x = sx; c.y = sy - 170; c.scale.set(0.3); hudC.addChild(c);
    await tween(c.scale, { x: 1.15, y: 1.15 }, 260, ease.back);
    tween(c.scale, { x: 1, y: 1 }, 160);
    for (let t = 0; t < 650 && !skipCelebration; t += 50) await wait(50);
    snd('play', 'tick', { pitch: 1.3 });
    await Promise.all([tween(c, { x: viewW / 2, y: viewH + 30, alpha: 0.2 }, 420, ease.in), tween(c.scale, { x: 0.5, y: 0.5 }, 420, ease.in)]);
    c.destroy({ children: true }); rig.stop(1);
  }
  function spawnSeed(c, big) {               // the fountain: seeds and pollen from the meadow
    const s = spr(Math.random() < 0.55 ? 'seed' : Math.random() < 0.5 ? 'pollen' : 'seed-gold');
    s.scale.set((big ? 0.42 : 0.24) * (0.7 + Math.random() * 0.6)); s.x = viewW / 2 + (Math.random() - 0.5) * 160; s.y = viewH + 40;
    const vx = (Math.random() - 0.5) * (big ? 1.1 : 0.7), vy = -(1.3 + Math.random() * 0.8) * (viewH / 900);
    c.addChild(s);
    const t = { a: 0, step(dt) { if (s.destroyed) { tweens.delete(t); return; } this.a += dt; const k = this.a / 1000; s.x += vx * dt * 0.6; s.y = viewH + 40 + vy * this.a * 0.95 + 0.9 * this.a * this.a / 1000 * (viewH / 900); s.rotation += 0.002 * dt;
      if (k > 3 || s.destroyed) { tweens.delete(t); if (!s.destroyed) s.destroy(); } } };
    tweens.add(t);
  }

  // the third golden wing: everything slows, the three wings fly in from the counter and spin together over her
  async function wingsMoment() {
    snd('moment', 'feature'); snd('play', 'wing_flutter', { pitch: 1.3 });
    const c = new PIX.Container(); hudC.addChild(c);
    const cx = viewW / 2, cy = viewH * 0.42, ws = [];
    for (let k = 0; k < 3; k++) { const w = spr('wing'); w.scale.set(0.3); w.x = hud.wings.x + (k - 1) * 44; w.y = hud.wings.y; c.addChild(w); ws.push(w); }
    hud.wings.visible = false;
    await Promise.all(ws.map((w, k) => tween(w, { x: cx + Math.cos(k * 2.09) * 120, y: cy + Math.sin(k * 2.09) * 120 }, 520, ease.inOut)));
    const spin = { a: 0, step(dt) { this.a += dt / 1000; ws.forEach((w, k) => { const r = 120 - Math.min(80, this.a * 90); const an = k * 2.09 + this.a * 4; w.x = cx + Math.cos(an) * r; w.y = cy + Math.sin(an) * r; w.rotation = an; w.scale.set(0.3 + this.a * 0.15); }); } };
    tweens.add(spin); shake(0.45);
    for (let j = 0; j < 3; j++) { await wait(300); (() => { const w = world.toLocal({ x: viewW / 2 * scale, y: cy * scale }); pieces('fx-spark', w.x, w.y, 6, 0.14); })(); }
    tweens.delete(spin);
    await Promise.all(ws.map(w => tween(w, { alpha: 0 }, 260)));
    c.destroy({ children: true });
  }
  // the bonus HUD: flights left, as little gliders under the dew drop (standard 7.3)
  let flightsC = null;
  function hudFlights(left, total) {
    if (!flightsC) { flightsC = new PIX.Container(); hudC.addChild(flightsC); }
    flightsC.removeChildren().forEach(c => c.destroy());
    if (left == null) { flightsC.visible = false; return; }
    flightsC.visible = true; flightsC.x = 30; flightsC.y = 150 + Math.max(0, hud.bubble.y - 92);
    const t = textSprite(left > 0 ? 'BOUNCES LEFT' : 'LAST DIVE', 26); t.anchor.set(0, 0.5); flightsC.addChild(t);
    for (let k = 0; k < total - 1; k++) { const g = spr('glider', 0, 0.5); g.scale.set(0.12); g.x = k * 96; g.y = 44; g.alpha = k < left ? 1 : 0.25; flightsC.addChild(g); }
  }
  // the end of the bonus: a total card with the pilot, before the tier celebration (standard 7.2)
  async function bonusTotal(ctx, flights) {
    const c = new PIX.Container(); hudC.addChild(c);
    const dim = new PIX.Graphics().rect(0, 0, viewW, viewH).fill({ color: 0x0e1630 }); dim.alpha = 0; c.addChild(dim);
    tween(dim, { alpha: 0.6 }, 300);
    const cap = spr('cap-night'); cap.scale.set(0.5); cap.x = viewW / 2; cap.y = viewH * 0.22; c.addChild(cap);
    const t1 = textSprite('TOTAL WIN', 44); t1.x = viewW / 2; t1.y = viewH * 0.36; c.addChild(t1);
    const xs = ctx.winX / ctx.cost, d = digits(fmt(xs) + 'x', MAT(xs), 120);   // against what was paid, like the tier scenes (review: '504X' after an 80x buy)
    fitW(d, viewW * 0.7); d.x = viewW / 2; d.y = viewH * 0.5; c.addChild(d);
    const t2 = textSprite(flights + (flights === 1 ? ' DIVE' : ' DIVES') + ' FROM THE STARS', 30); t2.x = viewW / 2; t2.y = viewH * 0.62; c.addChild(t2);
    [cap, t1, d, t2].forEach((o, k) => { const sx = o.scale.x, sy = o.scale.y; o.scale.set(0.05); setTimeout(() => { if (!o.destroyed) tween(o.scale, { x: sx, y: sy }, 420, ease.back); }, k * 120); });
    for (let j = 0; j < 30; j++) { const f = spr('firefly'); f.blendMode = 'add'; f.scale.set(0.14 + Math.random() * 0.12); f.ph = Math.random() * 6.28; f.r = 160 + Math.random() * 280; c.addChild(f); }
    const tw = { a: 0, step(dt) { this.a += dt; c.children.forEach(f => { if (f.r) { const an = f.ph + this.a / 900; f.x = viewW / 2 + Math.cos(an) * f.r; f.y = viewH * 0.45 + Math.sin(an) * f.r * 0.5; } }); } };
    tweens.add(tw); snd('play', 'night_start');
    for (let t = 0; t < 2600 && !skipCelebration; t += 50) await wait(50);
    tweens.delete(tw);
    await tween(c, { alpha: 0 }, 300); c.destroy({ children: true });
  }
  async function nightIntro() {
    const cap = spr('cap-night'); cap.scale.set(0.1); cap.x = viewW / 2; cap.y = viewH * 0.2; hudC.addChild(cap);   // above the beetle, not on her
    snd('moment', 'feature'); snd('play', 'night_start');
    await tween(cap.scale, { x: 0.8, y: 0.8 }, 500, ease.back);
    const lines = [textSprite('The night band throws you to the stars', 34), textSprite('Higher is worth more: x3  x2  x1', 34), textSprite('Each bounce on the silk flies higher', 30), textSprite('PRESS PLAY TO CONTINUE', 24)];
    lines.forEach((t, k) => { t.x = viewW / 2; t.y = viewH * 0.2 + 80 + k * 46; t.alpha = 0; hudC.addChild(t); tween(t, { alpha: 1 }, 300); });
    skipCelebration = false;
    for (let t = 0; t < 2600 && !skipCelebration; t += 50) await wait(50);
    skipCelebration = false;
    // the sweep: a swarm of fireflies crosses the screen and the meadow is night behind it
    const sw = new PIX.Container(); hudC.addChild(sw);
    for (let j = 0; j < 60; j++) { const f = spr('firefly'); f.blendMode = 'add'; f.scale.set(0.2 + Math.random() * 0.25); f.x = -200 - Math.random() * 500; f.y = Math.random() * viewH; f.v = 1.4 + Math.random() * 0.8; sw.addChild(f); }
    const swt = { step(dt) { sw.children.forEach(f => { f.x += f.v * dt; }); } }; tweens.add(swt);
    await wait(200); setNight(true, 700); snd('scene', 'night');
    await Promise.all([tween(cap, { alpha: 0 }, 350), ...lines.map(t => tween(t, { alpha: 0 }, 300))]);
    await wait(500); tweens.delete(swt); sw.destroy({ children: true });
    cap.destroy(); lines.forEach(t => t.destroy()); snd('moment', null);
  }
  // day <-> night: a dusk of ms milliseconds, not a one-frame cut (review v2, standard 5.6)
  const mixC = (a, b, k) => { const c = (sh) => Math.round(((a >> sh) & 255) * (1 - k) + ((b >> sh) & 255) * k) << sh; return c(16) | c(8) | c(0); };
  let duskT = null;
  function setNight(on, ms = 0) {
    night = on;
    const paint = k => {                          // k = 0 day, 1 night
      const t = mixC(0xffffff, 0x6f7fb8, k);
      [far, mid, ground, near].forEach(s => s.setTint(t)); [...fgPieces, sling.back, sling.front].forEach(s => { s.tint = t; });
      sky.visible = k < 1; nightSky.visible = k > 0; nightSky.alpha = k; sky.alpha = 1;
    };
    if (duskT) { tweens.delete(duskT); duskT = null; }
    if (!ms || api.reduced) { paint(on ? 1 : 0); return Promise.resolve(); }
    const o = { k: on ? 0 : 1 }; duskT = { keep: true, step() { paint(o.k); } }; tweens.add(duskT);
    return tween(o, { k: on ? 1 : 0 }, ms, ease.inOut).then(() => { if (duskT) tweens.delete(duskT); duskT = null; paint(on ? 1 : 0); });
  }

  function frogGone() { if (frogV && frogV.sp.parent) { const sp = frogV.sp; tween(sp, { y: sp.y + 120, alpha: 0 }, 400, ease.in).then(() => frogV.detach()); } }
  // after a round: the glider flies home to the sling while the camera pans back
  async function homeToSling(inRound = false) {
    itemsC.removeChildren(); tailFlies.splice(0).forEach(f => f.destroy());
    if (lastDazed && !lastDazed.destroyed) {            // after the frog: she shakes it off and climbs back on (one pilot only)
      const d = lastDazed; lastDazed = null;
      if (d.vidSp) { const v = d.vidSp; await tween(v, { alpha: 0 }, 160); standV.detach(); }
      planeC.x = d.x; planeC.y = d.y - 150; planeC.rotation = 0;
      burst('fx-seeds', d.x, d.y - 60, 0.6, 600); snd('play', 'seed_puff');
      tween(d, { alpha: 0 }, 160).then(() => d.destroy());
      planeC.scale.set(0.4); planeC.visible = true; await tween(planeC.scale, { x: 1, y: 1 }, 280, ease.back);
    }
    if (lastFrog && !lastFrog.destroyed) { const fr = lastFrog; lastFrog = null; tween(fr, { y: fr.y + 120, alpha: 0 }, 400, ease.in).then(() => fr.destroy()); frogGone(); }
    camTarget = 0; planeC.visible = true; planeC.scale.set(1); rig.play('fly', { loop: true });
    const o = { x: planeC.x, y: planeC.y };
    const f = { step() { planeC.x = o.x; planeC.y = o.y; camTarget = Math.max(0, planeC.x - viewW * 0.4); } }; tweens.add(f);   // the camera rides home with her
    await tween(o, { x: sling.rest.x + 20, y: sling.rest.y - 40 }, 700, ease.inOut);
    tweens.delete(f); if (busyRound && !inRound) return;
    camTarget = 0;
    rig.play('rest', { loop: true, mix: 0.3 }); placePlaneInSling(); if (standV) standV.detach(); fxC.removeChildren().forEach(c => c.destroy());
  }

  /* ---------- per frame ---------- */
  function frame(tk) {
    const dt = tk.deltaMS;
    tweens.forEach(t => t.step(dt * rush));
    if (glideV) {
      if (!glideV.on && !vidBlocked && glideV.ready('pilot-fly')) glideV.play('pilot-fly', { loop: true });
      glideV.update();
      if (glideV.shown && !glideV.fitted) fitGlide();
      const on = glideV.shown && !vidBlocked; glideV.sp.visible = on; rig.view.visible = !on;
    }
    if (standV) { standV.update(); if (standV.sp.parent) standV.sp.visible = standV.shown && !vidBlocked && standV.sp.parent.visible !== false; }
    for (const V of [frogV, fxV, popV]) if (V) { V.update(); if (V.sp.parent) V.sp.visible = V.shown && !vidBlocked; }
    idleT += dt / 1000;
    // the camera follows the glider with a look-ahead
    if (busyRound) camTarget = Math.max(0, planeC.x - viewW * 0.34);
    cam = lerp(cam, camTarget, Math.min(1, dt / 160));
    world.x = -cam;
    if (busyRound && planeC.visible) camYT = Math.min(0, planeC.y + oy - (viewH - padW) * (skyMode ? 0.42 : 0.3)); else if (!skyMode) camYT = 0;
    camY = lerp(camY, camYT, Math.min(1, dt / 130));
    // zoom in around the beetle while a round is on, back out at rest; the beetle stays where the plain camera put her,
    // drawn a little toward the middle as the zoom grows, and the view never shows below the ground picture
    const zt = busyRound && planeC.visible ? flyZoom() : 1;
    zoom = lerp(zoom, zt, Math.min(1, dt / 450)); if (!busyRound && Math.abs(zoom - 1) < 0.003) zoom = 1;
    const Z = zoom * zoomPunch, px = planeC.x - cam, py = planeC.y, sxN = px, syN = py + oy - camY;
    const kz = flyZoom() > 1.001 ? clamp((zoom - 1) / (flyZoom() - 1), 0, 1) : 0;
    let tx = sxN + (viewW * 0.4 - sxN) * 0.5 * kz, ty = syN + ((viewH - padW) * 0.5 - syN) * 0.6 * kz;
    if (Z > 1.001) ty = Math.max(ty, viewH - (1030 - py) * Z);       // only a zoom needs the floor guard (it hid the ground at Z = 1)
    rootC.scale.set(scale * Z); rootC.pivot.set(px, py); rootC.position.set(tx * scale, ty * scale);
    if (nightSky.visible) nightSky.y = skyTop - (skyMode ? 140 : 0) - camY * 0.05;      // the sky drifts a little as she climbs
    if (skyMode) {
      cloudsA.scroll(cam * 0.55 + idleT * 10); cloudsB.scroll(cam * 0.35 + idleT * 6);
      starsC.children.forEach(t => { const W = viewW + 200; t.x = ((t.wx * W - cam * 0.25) % W + W) % W - 100; t.y = t.wy + camY * 0.6; t.alpha = 0.5 + 0.5 * Math.sin(idleT * 2.4 + t.ph); });
      floorHud();
    }
    ground.scroll(cam); sky.scroll(cam * 0.04 + idleT * 14);
    if (nightSky.visible) nightSky.x = viewW / 2 - Math.min(70, cam * 0.004) + Math.sin(idleT * 0.2) * 6;
    far.scroll(cam * 0.15 + Math.sin(idleT * 0.4) * 6); mid.scroll(cam * 0.42 + Math.sin(idleT * 0.7) * 10);
    // the giant plants pass rarely, and turn see-through while they cross in front of her
    { const SPAN = viewW * 2.6 + 1200, bx = planeC.x - cam; fgPieces.forEach((p, k) => { p.rotation = Math.sin(idleT * (0.8 + k * 0.1) + k) * 0.025;
      p.x = (((p.off * viewW * 2 - cam * 1.7) % SPAN) + SPAN) % SPAN - 500;
      p.alpha = busyRound ? clamp((Math.abs(p.x - bx) - 90) / 260, 0.22, 1) : 1; }); }
    near.scroll(cam * 0.82);
    // items breathe while they wait (standard 5.3)
    // what is ahead of the beetle leans toward her as she comes near (a pull you can see before the pick), and glows bigger
    const mg = busyRound && planeC.visible ? Math.min(1, dt / 16) : 0;
    for (const s of itemsC.children) if (s.by !== undefined) {
      if (s.k0 === undefined) s.k0 = s.scale.x;
      if (mg) { const dx = planeC.x - s.x, dy = planeC.y - s.by, d = Math.hypot(dx, dy);
        if (d < 260) { const f = 0.09 * (1 - d / 260) * mg; s.x += dx * f; s.by += dy * f; s.scale.set(s.k0 * (1 + 0.35 * (1 - d / 260))); } }
      s.y = s.by + Math.sin(idleT * 5.2 + s.ph) * 3; s.rotation = Math.sin(idleT * 4.2 + s.ph) * 0.12;
    }
    tailFlies.forEach((f, k) => { f.x = -150 - k * 52 + Math.sin(idleT * 6 + f.ph) * 6; f.y = -18 + Math.cos(idleT * 7 + f.ph) * 8; });
    if (!busyRound && !pulling) { tags.forEach((t, k) => { t.y = sling.tipB.y - 90 + Math.sin(idleT * 2 + k) * 3; }); }
    if (gauge) { const want = (!busyRound || pulling) && !skyMode ? 1 : 0; gauge.alpha = lerp(gauge.alpha, want, Math.min(1, dt / 160)); gauge.visible = gauge.alpha > 0.02;
      gauge.children.forEach(c => { if (c.n === gaugeSel) c.dot.scale.set(0.32 * (1 + 0.12 * Math.sin(idleT * 5))); }); }
  }


  /* ---------- the replay card, with the fields of Stake's sample (fixed item 18; social wording on Stake.us) ---------- */
  function replayCard() {
    const box = api.$('lzReplay'); if (!box) return;
    const draw = () => {
      const S = window.LZ && window.LZ.state, d = S && S.replayData;
      if (!d) return;
      const amount = S.amount, cost = Number(d.costMultiplier) || 1, x = Number(d.payoutMultiplier) || 0;
      const rows = api.social
        ? [['Base Play', api.money(amount)], ['Feature Multiplier', cost + '×'], ['Total Play Worth', api.money(Math.round(amount * cost))], ['Final Multiplier', api.fmtX(x)], ['Total Win', api.winMoney(Math.round(amount * x))]]
        : [['Base Bet', api.money(amount)], ['Cost Multiplier', cost + '×'], ['Total Bet Cost', api.money(Math.round(amount * cost))], ['Payout Multiplier', api.fmtX(x)], ['Total Win', api.winMoney(Math.round(amount * x))]];
      const mode = (api.$('lzRpMode') || {}).textContent || '';
      box.innerHTML = '<dl class="lz-facts"><dt>Mode</dt><dd>' + mode + '</dd>' + rows.map(([k, v]) => '<dt>' + k + '</dt><dd>' + v + '</dd>').join('') + '</dl>';
    };
    // draw the moment the shell fills its card (it writes the result last), so no one ever sees the shell's version
    let done = false;
    const go = () => { if (done || !(window.LZ && window.LZ.state && window.LZ.state.replayData) || !/[0-9]/.test((api.$('lzRpMult') || {}).textContent || '')) return; done = true; mo.disconnect(); clearInterval(t); draw(); };
    const mo = new MutationObserver(go); mo.observe(box, { childList: true, subtree: true, characterData: true });
    const t = setInterval(go, 20);
  }

  /* ---------- the intro (standard 8.3): the band is the loading bar ---------- */
  function buildIntro() {
    const box = api.$('lzIntroCards'), intro = api.$('lzIntro'), bar = api.$('lzIntroBar'), play = api.$('lzIntroPlay');
    if (!box || !intro) return;
    const sign = (img, title, text) => `<div class="sb-sign"><i style="background-image:url('${ART[img]}')"></i><div><b>${title}</b><span>${text}</span></div></div>`;
    const vol = (name, n) => `<span>${name} ${[0, 1, 2].map(k => `<i class="${k < n ? 'on' : ''}"></i>`).join('')}</span>`;
    box.innerHTML = '<div class="sb-sling"><i class="back"></i><i class="band"></i><i class="pilot"></i><i class="front"></i></div>'
      + '<div class="sb-signs">'
      + sign('v-pull', 'PULL TO PICK', 'Three notches on the band: HOP, GLIDE or FULL SEND')
      + sign('v-firefly', 'FIREFLIES', 'Each one on the tail doubles what comes after it')
      + sign('v-night', 'NIGHT FLIGHT', '3 golden wings: the night band throws you to the stars. Higher is worth more')
      + sign('v-frog', 'MIND THE FROG', 'Sparrows tear half off. On FULL SEND the frog ends the flight')
      + '<div class="sb-vol">Volatility ' + vol('HOP', 1) + vol('GLIDE', 2) + vol('FULL SEND', 3) + '</div></div>';
    box.hidden = false; box.classList.add('sb-on');
    // the title screen (2026-11-28): painted key art, and on a wide screen it lives (a looping clip; the phone keeps the
    // tall picture). The clip is muted and only decorative.
    intro.classList.add('sb-key');
    if (window.matchMedia && matchMedia('(min-aspect-ratio: 1/1)').matches && !api.reduced) {
      const v = document.createElement('video'); v.className = 'sb-intro-video'; v.muted = true; v.loop = true; v.autoplay = true;
      v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true'); v.poster = 'intro/key-wide.webp'; v.preload = 'none';
      intro.insertBefore(v, intro.firstChild);
      // the clip comes a second after the game is ready, so it never adds to the first load (standard 11.2; HQ 28.11)
      const go = () => setTimeout(() => { if (!intro.hidden && !intro.classList.contains('out')) { v.src = 'video/intro.mp4'; v.play().catch(() => {}); } }, 1000);
      if (!play.disabled) go(); else new MutationObserver((l, o) => { if (!play.disabled) { o.disconnect(); go(); } }).observe(play, { attributes: true, attributeFilter: ['disabled'] });
      new MutationObserver((l, o) => { if (intro.hidden || intro.classList.contains('out')) { o.disconnect(); setTimeout(() => { v.pause(); v.removeAttribute('src'); v.load(); }, 900); } })
        .observe(intro, { attributes: true, attributeFilter: ['hidden', 'class'] });
    }
    // DON'T SHOW AGAIN (kept in this browser only)
    let skip = false;
    try { skip = localStorage.getItem('sb-skip-intro') === '1'; } catch (e) { /* private mode */ }
    const lab = document.createElement('label'); lab.className = 'sb-again';
    lab.innerHTML = '<input type="checkbox"' + (skip ? ' checked' : '') + "> DON'T SHOW AGAIN";
    lab.querySelector('input').addEventListener('change', e => { try { localStorage.setItem('sb-skip-intro', e.target.checked ? '1' : '0'); } catch (err) { /* ignore */ } });
    play.insertAdjacentElement('afterend', lab);
    play.setAttribute('aria-label', 'Play');
    // the band follows the shell's loading bar
    const sling = box.querySelector('.sb-sling');
    const sync = () => { const m = /scaleX\(([\d.]+)\)/.exec(bar.style.transform || ''); sling.style.setProperty('--sb-pull', m ? m[1] : 0); };
    new MutationObserver(sync).observe(bar, { attributes: true, attributeFilter: ['style'] }); sync();
    // with DON'T SHOW AGAIN ticked, the game starts by itself once it is ready
    if (skip) new MutationObserver((l, o) => { if (!play.disabled) { o.disconnect(); setTimeout(() => play.click(), 150); } }).observe(play, { attributes: true, attributeFilter: ['disabled'] });
  }

  /* ---------- rules (social wording only, numbers from math/game.mjs) ---------- */
  const RULES = `
<h3>How to play</h3>
<p>Pull the beetle back on the slingshot and let go. The band has three notches, and the notch you let go from picks how the flight is played: <b>HOP</b>, <b>GLIDE</b> or <b>FULL SEND</b>. All three are played for 1× the play amount. The angle of the pull changes only how the flight looks, never the result. You can also press PLAY: the beetle pulls back to the notch that is selected.</p>
<h3>In the air</h3>
<p>The flight passes a number of stretches of meadow. On each stretch the glider meets at most one thing:</p>
<table>
<tr><td>Pollen arc</td><td>3 to 7 pollen balls, each worth 0.05× the play amount</td></tr>
<tr><td>Dew drop</td><td>0.25×</td></tr>
<tr><td>Dandelion seed</td><td>0.5×</td></tr>
<tr><td>Golden seed</td><td>5×</td></tr>
<tr><td>Firefly</td><td>Clings to the tail and doubles everything collected after it (×2, ×4, ×8 …)</td></tr>
<tr><td>Golden wing</td><td>Collect 3 in one flight to start NIGHT FLIGHT at once</td></tr>
<tr><td>Sparrows</td><td>GLIDE and FULL SEND only: half of the collected total falls off, the flight goes on</td></tr>
<tr><td>Frog</td><td>FULL SEND only: the frog catches the glider and the flight ends with no win</td></tr>
</table>
<p>When the stretches run out the glider lands and slides; it may crack 0 to 2 acorns, each worth 0.1×. Every value is multiplied by the fireflies on the tail. The total is then won.</p>
<h3>NIGHT FLIGHT</h3>
<p>One long flight at night. The strong night band throws the beetle up to the stars, and she glides down in <b>3 dives</b>. At the bottom of each dive a spider-silk strand bounces her back up for the next one.</p>
<p>Every dive falls through three floors of sky, and everything collected is worth its floor:</p>
<table>
<tr><td>STARS</td><td>×3</td></tr>
<tr><td>CLOUDS</td><td>×2</td></tr>
<tr><td>MEADOW</td><td>×1</td></tr>
</table>
<p>Every bounce is stronger than the one before: the first dive spends 2 stretches among the stars, the second 4, the third 6, and so on (2 more each dive). Then 3 stretches in the clouds, and the rest in the meadow.</p>
<p>At night every value is 2 times the day value, before the floor. Fireflies stay on the tail from dive to dive. The total of each dive is kept when she bounces. The frog can only reach the meadow floor; it takes only that dive's total, and the flight goes on. A golden wing at night adds one more dive (at most 8). There are no acorns at night.</p>
<p>NIGHT FLIGHT can also be started instantly for 80× the play amount, and SUPER NIGHT for 320×: the same, starting with two fireflies on the tail (×4).</p>
<h3>Highest win</h3>
<p>HOP 500×, GLIDE 2,500×, FULL SEND, NIGHT FLIGHT and SUPER NIGHT 10,000× the play amount. A round stops as soon as it reaches its highest win.</p>`;

  LZ.boot({
    id: 'sling-plane', title: 'Slingbug', tagline: 'Pull back. Let go. Glide.',
    rtp: '96.30', layout: 'bar', shell: 2, celebrate: false,
    logo: `<img src="${ART.logo}" alt="Slingbug" style="height:100%;max-height:100%;width:auto;display:block">`,
    modes: [
      { name: 'hop', label: 'HOP', cost: 1, maxWin: 500, note: 'Short and safe: it always lands' },
      { name: 'glide', label: 'GLIDE', cost: 1, maxWin: 2500, note: 'Longer, with sparrows' },
      { name: 'fullsend', label: 'FULL SEND', cost: 1, maxWin: 10000, note: 'Longest, with sparrows and the frog' },
      { name: 'night', kind: 'feature', label: 'NIGHT FLIGHT', cost: 80, maxWin: 10000, blurb: 'Thrown to the stars by the night band: 3 dives, and higher is worth more (×3, ×2, ×1).', confirmTitle: 'Start NIGHT FLIGHT?', confirmLabel: 'Start' },
      { name: 'supernight', kind: 'feature', label: 'SUPER NIGHT', cost: 320, maxWin: 10000, blurb: 'NIGHT FLIGHT starting with two fireflies on the tail (×4).', confirmTitle: 'Start SUPER NIGHT?', confirmLabel: 'Start' },
    ],
    modeGroupLabel: 'Pull', featureName: 'NIGHT FLIGHT', statLabel: 'Night flights',
    playLabel: 'LAUNCH', busyLabel: 'FLYING',
    rules: RULES,
    async mount(stage, a) {
      api = a; snd('init', a);
      app = new PIX.Application();
      await app.init({ resizeTo: stage, backgroundAlpha: 0, antialias: true, resolution: Math.min(2, window.devicePixelRatio || 1), autoDensity: true, preference: 'webgl' });
      stage.appendChild(app.canvas);
      app.canvas.style.touchAction = 'none';
      await Promise.all(Object.entries(ART).map(async ([k, src]) => { const img = new Image(); img.src = src; await img.decode(); tex[k] = PIX.Texture.from(img); }));
      build(); layout();
      // upload every picture to the graphics card now, while the intro is up: the first draw of a texture used to stall
      // the pull and the release for 100-600 ms (Lidor: "it stutters when you pull the bug back")
      { const warm = new PIX.Container(); for (const t of Object.values(tex)) { const w = new PIX.Sprite(t); w.scale.set(0.02); warm.addChild(w); }
        warm.alpha = 0.001; app.stage.addChild(warm); app.render(); app.stage.removeChild(warm); warm.destroy({ children: true }); }
      // pictures for bar.css (the art lives in assets.js as data URIs)
      const css = { spin: 'ui-spin', leaf: 'ui-leaf-1', panel: 'ui-panel', plus: 'ui-plus', minus: 'ui-minus', bar: 'ui-bar', wing: 'wing',
        'tag-hop': 'tag-hop', 'tag-glide': 'tag-glide', 'tag-fullsend': 'tag-fullsend', sky: 'sky-day', mid: 'mid', 'sling-back': 'sling-back',
        'sling-front': 'sling-front', band: 'band', 'pilot-pull': 'pilot-pull', firefly: 'firefly' };
      for (const [k, v] of Object.entries(css)) document.documentElement.style.setProperty('--sb-' + k, 'url("' + ART[v] + '")');
      app.renderer.on('resize', layout);
      // the board can change size without the window resizing (the shell's layout settles after mount): follow the element
      if ('ResizeObserver' in window) new ResizeObserver(() => { app.resize(); layout(); frame({ deltaMS: 0 }); app.render(); }).observe(stage);
      buildIntro();
      { const st = document.querySelector('.lz-studio'); if (st) st.innerHTML = '<b>THEIA</b> STUDIO'; }   // the studio mark under the intro
      document.body.classList.add('sb-ready');
      if (api.replay) replayCard();
      // the pulls and the night features sit on the board (bar.css); the shell's handlers stay on the moved elements
      const over = document.createElement('div'); over.className = 'sb-over'; stage.appendChild(over);
      for (const id of ['lzModes', 'lzFeats']) { const el = api.$(id); if (el) over.appendChild(el); }
      app.ticker.add(frame);
      bindPull();
      // standard 1.5 (Lidor 28.11): no hurry during a flight; the play button only skips a celebration
      // standard 1.5 (5.8, 8.1): the only speed is TURBO. The play button and the space bar skip a celebration, nothing else
      document.addEventListener('pointerdown', e => { if (busyRound && e.target && e.target.closest && e.target.closest('#lzAction')) skipCelebration = true; }, true);
      document.addEventListener('keydown', e => { if (busyRound && e.code === 'Space') skipCelebration = true; });
      setTags(mode);
      document.addEventListener('visibilitychange', () => { if (document.hidden) app.ticker.stop(); else app.ticker.start(); });
    },
    async play(events, ctx) { return playRound(events, ctx); },
    reset() { busyRound = false; pulling = null; armed = null; setNight(false); clearRound(); },
    async idle() { await new Promise(r => setTimeout(r, 300)); if (busyRound || pulling) return; homeToSling(); },
    onMode(name) { if (MODES.includes(name)) { mode = name; if (tags.length) setTags(name); } },
    onStart() { snd('start'); },
    onSound(on) { if (on) snd('start'); },
    onFast(on) { fast = on; rig && (rig.timeScale = on ? 1.6 : 1); },
  });

})();
