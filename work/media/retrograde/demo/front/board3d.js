/* Retrograde: the planet medallions in real 3D (2026-11-28).
 * Lidor: "the planets on the board move badly... it's garbage". They were baked pictures (36 per turn, 17 for the sway),
 * so every turn and sway stepped from picture to picture. Now the nine models (art/3d/web -> assets/3d, 4,500-7,400
 * triangles each, 1.4 MB together) are drawn live by the graphics card: the same models, the same light set-up and the
 * same colours as the baked sprites (tools/make-sprites-3d.mjs, tools/tint-sym.mjs), so they turn, sway, fall and
 * squash smoothly at the screen's own rate and the light moves on the brass.
 *
 *   RGBoard3D.init(boardCanvas) -> Promise<bool>
 *   RGBoard3D.render(items, { w, h, dpr, clip })   the board: items [{ sym, x, y, z, sx, sy, yaw, pitch, a, lift }] in CSS px
 *   RGBoard3D.atlas(items, px) -> { cv, px, cols } | null
 *       everything else (the intro orbit, planets flung out of a big win, the dial): the listed medallions rendered live
 *       into a small grid, which the 2D code then draws where it wants (items [{ sym, yaw, pitch }]).
 * Glows, shadows, light lines and bursts stay on the 2D canvases. Stake CSP: no blob: URLs (textures through
 * createImageBitmap, as Topple's TP_gltfNoBlob), WebAssembly is allowed (meshopt). */
window.RGBoard3D = (() => {
  'use strict';
  const T = window.THREE;
  // game code -> model file, and how much of the medallion square the model fills (as in make-sprites-3d.mjs)
  const SYMS = { L: ['L-saturn', 0.9], T: ['T-jupiter', 0.84], I: ['I-mars', 0.84], C: ['C-venus', 0.85], Q: ['Q-mercury', 0.98],
    S: ['S-moon', 0.88], G: ['G-sun', 0.95], W: ['W-comet', 0.94], A: ['A-astrolabe', 0.96] };
  // the colour of each planet (tools/tint-sym.mjs TINT: [shadow, enamel, highlight], strength), applied in the shader
  const TINT = {
    L: [['#1c0838', '#8a3ce6', '#f1e2ff'], .92], T: [['#05123c', '#3d84f0', '#eaf2ff'], .84], C: [['#03200e', '#2fa35a', '#e2ffe8'], .82],
    Q: [['#012420', '#12c4b4', '#dcfffb'], .92], S: [['#0a0f22', '#9db4dc', '#f6f9ff'], .5], A: [['#22060f', '#c8507e', '#ffe4ee'], .6],
    W: [['#24384e', '#e2f2ff', '#ffffff'], .92], I: [['#2a0210', '#cc1c3a', '#ffdde4'], .8],
  };
  const mobile = Math.min(screen.width, screen.height) < 700 || /Android|iPhone|iPad/i.test(navigator.userAgent);
  const proto = {};
  let ready = false, failed = false, board = null, side = null;

  // CSP-safe glTF images: decode the embedded textures with createImageBitmap instead of blob: URLs
  function noBlob(loader) {
    loader.register(parser => {
      const orig = parser.loadImageSource.bind(parser);
      parser.loadImageSource = function (index, imgLoader) {
        if (this.sourceCache[index] !== undefined) return this.sourceCache[index].then(t => t.clone());
        const def = this.json.images[index];
        if (def.bufferView === undefined || typeof createImageBitmap === 'undefined') return orig(index, imgLoader);
        const p = this.getDependency('bufferView', def.bufferView)
          .then(buf => createImageBitmap(new Blob([buf], { type: def.mimeType }), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }))
          .then(bmp => { const t = new T.Texture(bmp); t.needsUpdate = true; t.userData.mimeType = def.mimeType; return t; })
          .catch(() => orig(index, imgLoader));
        this.sourceCache[index] = p; return p;
      };
      return { name: 'RG_noBlob' };
    });
    return loader;
  }
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
  // the gradient map of tint-sym.mjs, in the fragment shader after tone mapping and sRGB (where the bake applied it)
  function tint(mat, sym) {
    const t = TINT[sym]; if (!t) return;
    const [a, b, c] = t[0].map(hex), k = t[1];
    mat.onBeforeCompile = sh => {
      sh.uniforms.rgA = { value: new T.Vector3(...a) }; sh.uniforms.rgB = { value: new T.Vector3(...b) }; sh.uniforms.rgC = { value: new T.Vector3(...c) }; sh.uniforms.rgK = { value: k };
      sh.fragmentShader = 'uniform vec3 rgA;uniform vec3 rgB;uniform vec3 rgC;uniform float rgK;\n' + sh.fragmentShader.replace('#include <dithering_fragment>',
        '#include <dithering_fragment>\n{ float l = pow(clamp(dot(gl_FragColor.rgb, vec3(.2126,.7152,.0722)), 0., 1.), .9);\n' +
        '  vec3 m = l < .55 ? mix(rgA, rgB, l / .55) : mix(rgB, rgC, (l - .55) / .45);\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, m, rgK); }');
    };
    mat.customProgramCacheKey = () => 'rg-tint-' + sym;
  }
  function loadModels() {
    const loader = noBlob(new T.GLTFLoader()); if (T.MeshoptDecoder) loader.setMeshoptDecoder(T.MeshoptDecoder);
    return Promise.all(Object.entries(SYMS).map(([k, [id, fit]]) => fetch('assets/3d/' + id + '.glb').then(res => res.arrayBuffer()).then(buf => new Promise((ok, no) => loader.parse(buf, '', g => {
      const src = g.scene;
      src.traverse(o => { if (o.isMesh) { const m = o.material; if (m.map) m.map.anisotropy = 4; tint(m, k); } });
      const box = new T.Box3().setFromObject(src); src.position.sub(box.getCenter(new T.Vector3()));
      const turn = new T.Group(); turn.add(src); turn.rotation.y = -Math.PI / 2;           // Tripo faces -X
      const sz = new T.Box3().setFromObject(turn).getSize(new T.Vector3());
      turn.scale.setScalar(fit / Math.max(sz.x, sz.y));
      turn.position.sub(new T.Box3().setFromObject(turn).getCenter(new T.Vector3()));
      const holder = new T.Group(); holder.add(turn);            // holder: 1 unit = the medallion square; yaw/pitch/scale go here
      proto[k] = holder; ok();
    }, no)))));
  }

  // one live view: a renderer, the bake's lights, an orthographic camera in CSS px (y down), and a pool of medallions
  function view(cv, aa) {
    const r = new T.WebGLRenderer({ canvas: cv, antialias: aa, alpha: true, premultipliedAlpha: true, powerPreference: 'high-performance' });
    r.setClearColor(0x000000, 0); r.toneMapping = T.NeutralToneMapping; r.toneMappingExposure = 1.05; r.outputColorSpace = T.SRGBColorSpace; r.autoClear = false;
    const scene = new T.Scene();
    scene.environment = new T.PMREMGenerator(r).fromScene(new T.RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.5;
    const L = (c, i, x, y, z) => { const l = new T.DirectionalLight(c, i); l.position.set(x, y, z); scene.add(l); };
    L(0xffe6c0, 2.0, -3, 5, 8); L(0xbcd2ff, 0.35, 4, -1, 6); L(0x6fa8ff, 1.4, 5, 3, -4); L(0x5fc9c0, 1.0, -5, -2, -4);
    const cam = new T.OrthographicCamera(0, 1, 0, -1, -4000, 4000); cam.position.set(0, 0, 2000); cam.lookAt(0, 0, 0);
    const pool = {}, used = {};
    for (const k in proto) { pool[k] = []; used[k] = 0; }
    let W = 0, H = 0, D = 0;
    function take(sym) {
      const list = pool[sym];
      if (used[sym] < list.length) return list[used[sym]++];
      const o = proto[sym].clone(true);
      o.traverse(m => { if (m.isMesh) { const src = m.material; m.material = src.clone(); m.material.onBeforeCompile = src.onBeforeCompile; m.material.customProgramCacheKey = src.customProgramCacheKey; m.material.transparent = true; } });
      scene.add(o); list.push(o); used[sym]++;
      return o;
    }
    function alpha(o, a) {
      if (o.userData.a === a) return; o.userData.a = a;
      o.traverse(m => { if (m.isMesh) { m.material.opacity = a; m.material.depthWrite = a > .98; } });
    }
    function size(w, h, d) {
      if (w === W && h === H && d === D) return;
      W = w; H = h; D = d; r.setPixelRatio(d); r.setSize(w, h, false);
      cam.left = 0; cam.right = w; cam.top = 0; cam.bottom = -h; cam.updateProjectionMatrix();
    }
    function draw(items, w, h, d, clip) {
      size(w, h, d);
      for (const k in used) used[k] = 0;
      for (const it of items) {
        if (!proto[it.sym]) continue;
        const m = take(it.sym);
        m.visible = true;
        m.position.set(it.x, -it.y, (it.lift || 0) * 400);
        m.rotation.set((it.pitch || 0) * RAD, (it.yaw || 0) * RAD, (it.roll || 0) * RAD);
        m.scale.set(it.z * (it.sx || 1), it.z * (it.sy || 1), it.z);
        alpha(m, Math.max(0, Math.min(1, it.a == null ? 1 : it.a)));
      }
      for (const k in pool) for (let i = used[k]; i < pool[k].length; i++) pool[k][i].visible = false;
      r.setScissorTest(false); r.clear();
      if (clip) { const [x, y, cw, ch] = clip; r.setScissorTest(true); r.setScissor(x, h - y - ch, cw, ch); }
      r.render(scene, cam);
      r.setScissorTest(false);
    }
    // compile every shader and upload every texture now (no stall at the first win)
    function warm() {
      const items = Object.keys(proto).map((sym, i) => ({ sym, x: 20 + i * 40, y: 20, z: 36 }));
      draw(items, 400, 40, 1); r.compile(scene, cam);
      for (const k in pool) for (const o of pool[k]) o.visible = false;
      r.clear();
    }
    return { r, draw, warm };
  }
  const RAD = Math.PI / 180;

  function init(cv) {
    if (!T || !T.WebGLRenderer || !T.GLTFLoader) { failed = true; return Promise.resolve(false); }
    return loadModels().then(() => {
      board = view(cv, !mobile); board.warm();
      try { side = view(document.createElement('canvas'), true); side.warm(); } catch (e) { side = null; }
      ready = true; return true;
    }).catch(() => { failed = true; return false; });
  }
  function render(items, o) { if (!ready) return false; board.draw(items, o.w, o.h, o.dpr, o.clip); return true; }
  // the listed medallions, live, in a small grid (cols x rows cells of px CSS px at the screen's ratio up to 2)
  function atlas(items, px) {
    if (!ready || !side || !items.length) return null;
    const cols = Math.min(items.length, 8), rows = Math.ceil(items.length / cols), d = Math.min(2, window.devicePixelRatio || 1);
    side.draw(items.map((it, i) => ({ sym: it.sym, x: (i % cols + .5) * px, y: (Math.floor(i / cols) + .5) * px, z: px, yaw: it.yaw, pitch: it.pitch, roll: it.roll })), cols * px, rows * px, d);
    return { cv: side.r.domElement, px, cols, d };
  }
  return { init, render, atlas, get ready() { return ready; }, get failed() { return failed; } };
})();
