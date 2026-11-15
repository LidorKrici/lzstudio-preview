/* Long Shot: a sniper range in a red-rock canyon at sunset.
 * ONE art source for everything: Poly Haven's CC0 photoscanned models, PBR textures and the sunset sky
 * (tools/fetch-assets.mjs, tools/build-assets.mjs). The few shapes that are built here (the target, the steel
 * plates, the bell, the balloon) wear the same PBR textures and are lit by the same sky, so nothing on screen
 * comes from a different style.
 * The round's result comes from the RGS book; this file only plays it back:
 *   shot   { range, golden, gates }      the range, whether the bullet is golden, how many objects
 *   gate   { i, obj, total }             object i on the course and the bullet's value after it
 *   target { result, total, win }        miss / hit / bull
 *   final  { payout, capped }
 * Cosmetic randomness (where an object stands, how debris flies, where a miss lands) never changes a result. */
(() => {
  'use strict';
  const T = window.THREE;
  let api;

  const C = { red: 0xc8352c, cream: 0xefe6d2, gold: 0xffc75a, ink: 0x1a120c, clay: 0xe2702a, brass: 0xd9a34a, haze: 0xd7ad8a };
  const OBJ_INFO = {
    bottle: { label: '+0.2×', name: 'Bottle', tone: 'add' }, can: { label: '+0.3×', name: 'Tin can', tone: 'add' },
    balloon: { label: '+0.5×', name: 'Balloon', tone: 'add' }, clay: { label: '+1.5×', name: 'Clay disc', tone: 'add' },
    bell: { label: '+5×', name: 'Brass bell', tone: 'big' }, plate: { label: '×2', name: 'Steel plate', tone: 'mul' },
    gold: { label: '×5', name: 'Gold plate', tone: 'gold' }
  };
  const RANGE = { near: { m: 300, L: 230, R: 1.6 }, mid: { m: 800, L: 390, R: 1.9 }, far: { m: 1500, L: 600, R: 2.2 } };
  const MUZZLE = new T.Vector3(0, .6, -.3);       // set from the rifle model once it is placed
  const TARGET_Y = 2.1;
  // Where the sun stands in the sky panorama (found by tools: azimuth 41.8°, 3.9° above the horizon) and where
  // we want it: low, behind the shooter's left shoulder, so everything down the range is lit warm and casts long shadows away from the camera.
  const SUN_IMG_AZ = 41.8 * Math.PI / 180, SUN_WANT = new T.Vector3(-.62, 0, .78).normalize();
  const SKY_ROT = Math.atan2(SUN_WANT.z, SUN_WANT.x) - SUN_IMG_AZ;
  const SUN_DIR = new T.Vector3(SUN_WANT.x, .42, SUN_WANT.z).normalize();   // the light itself sits a little higher

  /* ---------- Small math ---------- */
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const eOut = t => 1 - Math.pow(1 - t, 3), eInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const rand = (a, b) => a + Math.random() * (b - a);
  let seed = 7; const srand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };   // fixed scenery
  const hash = (x, y) => { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return h - Math.floor(h); };
  function vnoise(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  const fbm = (x, y) => { let s = 0, a = .5, f = 1; for (let i = 0; i < 5; i++) { s += a * vnoise(x * f, y * f); a *= .5; f *= 2.03; } return s; };
  // Ground height: a nearly flat range floor between layered sandstone walls.
  function groundH(x, z) {
    const ax = Math.abs(x);
    let h = (fbm(x * .06, z * .06) - .5) * .9;
    const wall = smooth(18, 52, ax + (fbm(z * .015, 3) - .5) * 22);
    let w = wall * (16 + fbm(x * .02 + 9, z * .012) * 60);
    w = lerp(w, Math.round(w / 6) * 6, .55) + (fbm(x * .3, z * .3) - .5) * 2.2 * wall;   // sandstone ledges
    return lerp(h * smooth(2, 9, ax) * .5, h + w, smooth(12, 26, ax));
  }

  /* ---------- Renderer, scene, camera ---------- */
  let R, scene, cam, stageEl, W = 0, H = 1, BASE_TAN = .45, sun, envTex;
  const clock = { t: 0, last: performance.now() };
  const tasks = new Set(), fx = [], springs = [];
  const G = {}, MAT = {}, ART = {};
  let range = 'near', world = {}, course = null, bullet, trail, flashLight, rifle, target, camState;
  const add = c => new T.MeshBasicMaterial({ color: c, transparent: true, blending: T.AdditiveBlending, depthWrite: false, fog: false });
  const std = (c, rough = .8, metal = 0, extra = {}) => new T.MeshStandardMaterial({ color: c, roughness: rough, metalness: metal, ...extra });
  function mesh(geo, m, sx = 1, sy = sx, sz = sx) { const o = new T.Mesh(geo, typeof m === 'string' ? MAT[m] : m); o.scale.set(sx, sy, sz); return o; }
  const shadowed = (o, cast = true, recv = true) => { o.traverse(n => { if (n.isMesh) { n.castShadow = cast; n.receiveShadow = recv; } }); return o; };

  /* ---------- Assets: fetched over the network, or from the base64 copy when the page is opened from disk ---------- */
  function bytes(p) {
    const inl = window.LS_INLINE && window.LS_INLINE[p];
    if (inl) { const bin = atob(inl), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return Promise.resolve(u.buffer); }
    return fetch(p).then(r => { if (!r.ok) throw new Error('missing ' + p); return r.arrayBuffer(); });
  }
  function loadInline() {
    if (location.protocol !== 'file:' || window.LS_INLINE) return Promise.resolve();
    return new Promise(res => { const s = document.createElement('script'); s.src = '../offline/assets-inline.js'; s.onload = s.onerror = () => res(); document.head.append(s); });
  }
  async function tex(p, srgb) {
    const url = URL.createObjectURL(new Blob([await bytes(p)], { type: 'image/webp' }));
    const t = await new T.TextureLoader().loadAsync(url); URL.revokeObjectURL(url);
    if (srgb) t.colorSpace = T.SRGBColorSpace;
    t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = Math.min(8, R.capabilities.getMaxAnisotropy());
    return t;
  }
  async function glb(name) {
    const buf = await bytes('assets/' + name + '.glb');
    return new Promise((res, rej) => new T.GLTFLoader().parse(buf, '', g => res(g.scene), rej));
  }
  // A PBR material from a Poly Haven texture set (diffuse, OpenGL normal, AO/roughness/metal), repeated `rep` times.
  const SETS = {};
  async function loadSet(id) { SETS[id] = await Promise.all([tex(`assets/${id}_diff.webp`, true), tex(`assets/${id}_nor.webp`), tex(`assets/${id}_arm.webp`)]); }
  function pbr(id, rx = 1, ry = rx, extra = {}) {
    const [d, n, a] = SETS[id].map(t => { const c = t.clone(); c.repeat.set(rx, ry); c.needsUpdate = true; return c; });
    return new T.MeshStandardMaterial({ map: d, normalMap: n, aoMap: a, roughnessMap: a, metalnessMap: a, roughness: 1, metalness: 1, ...extra });
  }
  function part(scene3, name) { let f = null; scene3.traverse(n => { if (!f && n.name === name) f = n; }); return f; }
  // A model re-centred on its base so it stands on y = 0 at its origin.
  function grounded(obj) {
    const b = new T.Box3().setFromObject(obj), c = b.getCenter(new T.Vector3());
    const g = new T.Group(); obj.position.sub(new T.Vector3(c.x, b.min.y, c.z)); g.add(obj); return g;
  }

  async function loadArt() {
    await loadInline();
    const names = ['bolt_action_rifle_7_62', 'can_rusted', 'wine_bottles_01', 'wooden_crate_01', 'wooden_military_crate', 'namaqualand_boulder_04',
      'rock_07', 'quiver_tree_01', 'shrub_02'];
    const [models] = await Promise.all([
      Promise.all(names.map(glb)),
      ...['dry_ground_rocks', 'cliff_side', 'weathered_planks', 'rusty_metal_02', 'red_sand'].map(loadSet),
      tex('assets/sky.webp', true).then(t => { envTex = t; })
    ]);
    names.forEach((n, i) => { ART[n] = models[i]; });
  }

  /* ---------- Materials and shapes (particles, built objects) ---------- */
  function initMaterials() {
    MAT.planks = pbr('weathered_planks', 1, 1); MAT.planksLong = pbr('weathered_planks', 1, 4);
    MAT.steel = pbr('rusty_metal_02', 1, 1, { metalness: .35 });
    MAT.goldPlate = pbr('rusty_metal_02', 1, 1, { color: 0xffd27a, metalness: 1, roughness: .55, map: null });
    MAT.redPaint = std(C.red, .6); MAT.redPaint.normalMap = MAT.steel.normalMap;
    MAT.brass = std(C.brass, .28, 1); MAT.copper = std(0xc9773f, .3, 1); MAT.bulletGold = std(0xffcf5c, .18, 1, { emissive: 0x4a2c00 });
    MAT.clay = pbr('red_sand', .4, .4, { color: 0xffa060, metalness: 0 }); MAT.clayRim = std(0xa4471a, .75);
    MAT.rope = std(0xb89464, .95); MAT.hole = std(0x150d08, 1);
    MAT.balloon0 = new T.MeshPhysicalMaterial({ color: 0xd8322a, roughness: .32, clearcoat: 1, clearcoatRoughness: .12 });
    MAT.balloon1 = new T.MeshPhysicalMaterial({ color: 0x1f9c93, roughness: .32, clearcoat: 1, clearcoatRoughness: .12 });
    MAT.balloon2 = new T.MeshPhysicalMaterial({ color: 0xf0b62a, roughness: .32, clearcoat: 1, clearcoatRoughness: .12 });
    MAT.shard = std(0xb87830, .08, 0, { transparent: true, opacity: .75 });
    MAT.splinter = std(0x8a6a48, .9); MAT.chip = std(0xd96a28, .7); MAT.rubber = MAT.balloon0;
    MAT.trail = add(0xffd9a0); MAT.trail.opacity = .5; MAT.trailGold = add(0xffc23a); MAT.trailGold.opacity = .7;
    MAT.flash = add(0xffd27a); MAT.ring = add(0xfff0d0); MAT.wake = add(0x6e5a44); MAT.wakeGold = add(0x8a6a1c);
    MAT.spark = new T.MeshBasicMaterial({ color: 0xffe2a0, fog: false }); MAT.sparkGold = new T.MeshBasicMaterial({ color: 0xffd23f, fog: false });
    // soft round sprite for dust and smoke
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d'), rg = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(.45, 'rgba(255,255,255,.55)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = rg; g.fillRect(0, 0, 64, 64);
    G.soft = new T.CanvasTexture(cv); G.soft.colorSpace = T.SRGBColorSpace;
  }
  function initGeometry() {
    G.box = new T.BoxGeometry(1, 1, 1); G.cyl = new T.CylinderGeometry(1, 1, 1, 32); G.cyl16 = new T.CylinderGeometry(1, 1, 1, 16);
    G.sph = new T.IcosahedronGeometry(1, 2); G.tet = new T.TetrahedronGeometry(1); G.oct = new T.OctahedronGeometry(1, 0);
    G.disc = new T.CircleGeometry(1, 40); G.torus = new T.TorusGeometry(1, .04, 6, 48);
    G.bell = new T.LatheGeometry([[0, .5], [.07, .5], [.15, .46], [.19, .36], [.21, .2], [.25, .08], [.31, .01], [.33, -.01], [.3, -.03], [0, -.02]].map(p => new T.Vector2(p[0], p[1])), 40);
    G.bullet = new T.LatheGeometry([[0, .34], [.02, .32], [.045, .26], [.06, .18], [.065, .1], [.065, 0], [.06, -.02], [0, -.02]].map(p => new T.Vector2(p[0], p[1])), 24);
    G.bullet.rotateX(Math.PI / 2);                  // nose along +Z (Object3D.lookAt points +Z at the target)
    G.trail = new T.CylinderGeometry(.05, 0, 1, 8, 1, true); G.trail.translate(0, -.5, 0); G.trail.rotateX(Math.PI / 2);  // streak behind, along -Z
    G.balloon = new T.SphereGeometry(.34, 32, 24); G.balloon.scale(1, 1.18, 1);
    G.knot = new T.ConeGeometry(.05, .08, 12); G.knot.rotateX(Math.PI);
  }

  /* ---------- World ---------- */
  function buildSky() {
    envTex.mapping = T.EquirectangularReflectionMapping;
    scene.background = envTex; scene.backgroundRotation.set(0, SKY_ROT, 0); scene.backgroundIntensity = 1;
    const pm = new T.PMREMGenerator(R);
    scene.environment = pm.fromEquirectangular(envTex).texture; scene.environmentRotation.set(0, SKY_ROT, 0); scene.environmentIntensity = 1.05;
    pm.dispose();
    sun = new T.DirectionalLight(0xffd3a4, 3.6);
    sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera; sc.left = -22; sc.right = 22; sc.top = 22; sc.bottom = -22; sc.near = 1; sc.far = 260;
    sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
    scene.add(sun, sun.target);
  }
  function aimSun(focus) { sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(SUN_DIR, 120); }
  function heightPlane(x0, x1, z0, z1, nx, nz, uvOf) {
    const g = new T.PlaneGeometry(1, 1, nx, nz), p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) {
      const u = p.getX(i) + .5, v = p.getY(i) + .5, x = lerp(x0, x1, u), z = lerp(z0, z1, v), y = groundH(x, z);
      p.setXYZ(i, x, y, z); const t = uvOf(x, y, z); uv.setXY(i, t[0], t[1]);
    }
    g.computeVertexNormals();
    // PlaneGeometry winds counter-clockwise when seen from +Z; lying flat it must face up
    if (g.attributes.normal.getY(0) < 0) { g.index.array.reverse(); g.computeVertexNormals(); }
    return g;
  }
  function buildGround() {
    const Z0 = 60, Z1 = -1340, F = 16;
    const floor = new T.Mesh(heightPlane(-F, F, Z0, Z1, 32, 700, (x, y, z) => [x / 5, z / 5]), pbr('dry_ground_rocks', 1, 1, { color: 0xffe9d2 }));
    floor.receiveShadow = true; scene.add(floor);
    for (const s of [-1, 1]) {
      const g = heightPlane(s * F, s * 190, Z0, Z1, 70, 350, (x, y, z) => [z / 14 + x * .01, (y + Math.abs(x) * .25) / 14]);
      const m = new T.Mesh(g, pbr('cliff_side', 1, 1, { color: 0xf3d2bc }));
      m.receiveShadow = true; scene.add(m);          // walls do not cast: the range floor stays in the evening light
    }
  }
  function place(src, x, z, s, ry = srand() * 6.28, sink = 0) {
    const o = src.clone(); o.position.set(x, groundH(x, z) - sink * s, z); o.scale.setScalar(s); o.rotation.y = ry; scene.add(o); return o;
  }
  function scatter() {
    const tree = shadowed(grounded(ART.quiver_tree_01));
    for (let i = 0; i < 26; i++) { const sd = srand() < .5 ? -1 : 1; place(tree, sd * (10 + srand() * 22), 6 - srand() * 720, 1.6 + srand() * 1.4); }
    const shrubs = ['shrub_02_a', 'shrub_02_b', 'shrub_02_c', 'shrub_02_d'].map(n => { const m = part(ART.shrub_02, n).clone(); m.position.set(0, 0, 0); return shadowed(grounded(m), true, false); });
    for (let i = 0; i < 110; i++) { const sd = srand() < .5 ? -1 : 1; place(shrubs[i % 4], sd * (3.5 + Math.pow(srand(), .8) * 18), 10 - srand() * 760, .35 + srand() * .55); }
    const boulder = shadowed(grounded(ART.namaqualand_boulder_04));
    for (let i = 0; i < 46; i++) { const sd = srand() < .5 ? -1 : 1; place(boulder, sd * (6 + srand() * 22), 8 - srand() * 820, .4 + Math.pow(srand(), 2) * 2.4, undefined, .12); }
    const rock = shadowed(grounded(ART.rock_07));
    for (let i = 0; i < 160; i++) { const sd = srand() < .5 ? -1 : 1; place(rock, sd * (2.4 + srand() * 14), 8 - srand() * 600, 2 + srand() * 5, undefined, .05); }
    // range fence: weathered posts every 12 m lead the eye to the target
    const postG = new T.BoxGeometry(.14, 1.2, .14);
    for (let i = 0; i < 36; i++) for (const sd of [-1, 1]) { const x = sd * 6.2, z = -4 - i * 12, p = new T.Mesh(postG, MAT.planksLong); p.position.set(x, groundH(x, z) + .55, z); p.rotation.set((srand() - .5) * .1, srand(), (srand() - .5) * .12); p.castShadow = true; scene.add(p); }
    // dust drifting in the light (travels with the camera, gives the bullet cam a sense of speed)
    const n = 700, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) pos.set([(srand() - .5) * 12, .2 + srand() * 3, 6 - srand() * 60], i * 3);
    const pg = new T.BufferGeometry(); pg.setAttribute('position', new T.BufferAttribute(pos, 3));
    world.motes = new T.Points(pg, new T.PointsMaterial({ color: 0xffe6c2, size: .02, transparent: true, opacity: .35, depthWrite: false }));
    scene.add(world.motes);
  }
  function buildFlag() {
    const g = new T.Group(), x = -5.2, z = -16;
    const pole = mesh(G.cyl16, MAT.steel, .045, 5.4, .045); pole.position.y = 2.7; pole.castShadow = true; g.add(pole);
    const cg = new T.PlaneGeometry(1.5, .9, 16, 8); cg.translate(.75, 0, 0);
    const cols = new Float32Array(cg.attributes.position.count * 3), c = new T.Color();
    for (let i = 0; i < cg.attributes.position.count; i++) { const yy = cg.attributes.position.getY(i); c.setHex(Math.floor((yy + .45) / .3) % 2 ? C.red : C.cream); cols.set([c.r, c.g, c.b], i * 3); }
    cg.setAttribute('color', new T.BufferAttribute(cols, 3));
    const cloth = new T.Mesh(cg, new T.MeshStandardMaterial({ vertexColors: true, side: T.DoubleSide, roughness: .95 }));
    cloth.position.y = 4.9; cloth.castShadow = true; g.add(cloth);
    g.position.set(x, groundH(x, z), z); scene.add(g);
    world.flag = { geo: cg, base: Float32Array.from(cg.attributes.position.array) };
  }

  /* ---------- Shooter's nest and rifle ---------- */
  function buildRifle() {
    const nest = new T.Group();
    const crate = shadowed(grounded(ART.wooden_military_crate.clone())); crate.rotation.y = Math.PI / 2; crate.position.set(0, 0, -.05); nest.add(crate);
    const g = shadowed(ART.bolt_action_rifle_7_62.clone(), true, true);
    const hold = new T.Group(); hold.add(g);
    hold.rotation.y = Math.PI / 2;                 // the model points +X; the range runs to -Z
    hold.position.set(0, .57, .25);
    nest.add(hold);
    nest.position.y = groundH(0, 0);
    scene.add(nest);
    nest.updateMatrixWorld(true);
    const box = new T.Box3().setFromObject(part(g, 'bolt_action_rifle_7_62'));
    MUZZLE.set(0, box.max.y - .03, box.min.z + .01);
    return { g: hold, rest: hold.position.clone(), kick: 0 };
  }

  /* ---------- The target ---------- */
  function targetFace() {
    const cv = document.createElement('canvas'); cv.width = cv.height = 512; const g = cv.getContext('2d');
    [[1, '#efe6d2'], [.82, '#c8352c'], [.62, '#efe6d2'], [.42, '#c8352c'], [.2, '#e9b23a']].forEach(([r, c]) => { g.beginPath(); g.arc(256, 256, r * 252, 0, 7); g.fillStyle = c; g.fill(); });
    g.strokeStyle = 'rgba(26,18,12,.55)'; g.lineWidth = 2; [1, .82, .62, .42, .2].forEach(r => { g.beginPath(); g.arc(256, 256, r * 252 - 1, 0, 7); g.stroke(); });
    const img = g.getImageData(0, 0, 512, 512), d = img.data;            // paper grain
    for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - .5) * 14; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    g.putImageData(img, 0, 0);
    const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 8;
    return new T.MeshStandardMaterial({ map: t, roughness: .88, normalMap: SETS.weathered_planks[1], normalScale: new T.Vector2(.25, .25) });
  }
  function buildTarget() {
    const g = new T.Group(), face = new T.Group();
    const board = new T.Mesh(G.cyl, [MAT.planks, MAT.planks, MAT.planks]); board.rotation.x = Math.PI / 2; board.scale.set(1.04, .12, 1.04); face.add(board);
    const front = new T.Mesh(G.disc, targetFace()); front.position.z = .061; face.add(front);
    face.position.y = TARGET_Y; g.add(face);
    for (const sd of [-1, 1]) { const leg = mesh(G.box, MAT.planksLong, .14, 3.4, .14); leg.position.set(sd * .55, 1.45, -.25); leg.rotation.z = -sd * .1; leg.rotation.x = -.12; g.add(leg); }
    const brace = mesh(G.box, MAT.planks, 1.4, .12, .12); brace.position.set(0, 1, -.3); g.add(brace);
    shadowed(g); scene.add(g);
    return { g, face, holes: [], swing: { a: 0, v: 0 } };
  }
  function placeTarget(name, instant) {
    const r = RANGE[name], z = -r.L;
    target.R = r.R; target.z = z;
    target.face.scale.setScalar(r.R);
    target.g.position.set(0, groundH(0, z), z);
    world.aimY = TARGET_Y * r.R / 1.6 + target.g.position.y;
    target.face.position.y = TARGET_Y * r.R / 1.6;
    if (instant) camState.look.set(0, world.aimY, z);
  }

  /* ---------- Course objects (built per round from the book's gates) ---------- */
  function post(h) { const p = mesh(G.box, MAT.planksLong, .16, h, .16); p.position.y = h / 2; p.castShadow = true; return p; }
  function bottleModel(k) {
    const names = ['wine_bottles_01_bordeaux', 'wine_bottles_01_alsace', 'wine_bottles_01_burgundy', 'wine_bottles_01_champagne'];
    const m = part(ART.wine_bottles_01, names[k % 4]).clone(); m.position.set(0, 0, 0); return grounded(m);
  }
  function buildObject(kind, at, k) {
    const g = new T.Group(), gy = groundH(at.x, at.z), hy = at.y - gy;
    g.position.set(at.x, gy, at.z);
    const top = new T.Group(); top.position.y = hy; g.add(top);
    const o = { kind, g, at, top, hy, parts: [], swing: null };
    if (kind === 'bottle') {
      g.add(post(hy - .26)); const b = bottleModel(k); b.scale.setScalar(1.7); b.position.y = -.26; top.add(b); o.parts.push(b);
    } else if (kind === 'can') {
      const crate = grounded(ART.wooden_crate_01.clone()); crate.scale.set(1, (hy - .19) / .35, 1); crate.rotation.y = srand() * 3; g.add(crate);
      const c = grounded(ART.can_rusted.clone()); c.scale.setScalar(2.5); c.position.y = -.19; top.add(c); o.parts.push(c);
    } else if (kind === 'balloon') {
      const mat = MAT['balloon' + (k % 3)], b = mesh(G.balloon, mat); top.add(b); o.parts.push(b);
      const knot = mesh(G.knot, mat); knot.position.y = -.43; top.add(knot); o.parts.push(knot);
      const str = new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(0, hy - .47, 0), new T.Vector3(.06, hy * .5, .02), new T.Vector3(0, .25, 0)]), new T.LineBasicMaterial({ color: 0xe8dcc6 }));
      g.add(str); o.parts.push(str); o.bob = rand(0, 6);
      const stake = mesh(G.box, MAT.planks, .06, .3, .06); stake.position.y = .15; g.add(stake);
    } else if (kind === 'clay') {
      const disc = new T.Group(); disc.add(mesh(G.cyl, MAT.clay, .17, .05, .17), mesh(G.cyl, MAT.clayRim, .12, .056, .12));
      top.add(disc); o.parts.push(disc); o.fly = { from: new T.Vector3((at.x > 0 ? -1 : 1) * 9, -hy + .6, -3), disc };
      const trap = grounded(ART.wooden_crate_01.clone()); trap.position.set(o.fly.from.x, 0, -3); g.add(trap);
      disc.position.copy(o.fly.from);
    } else if (kind === 'bell') {
      for (const sd of [-1, 1]) { const p = mesh(G.box, MAT.planksLong, .16, hy + .9, .16); p.position.set(sd * 1.1, (hy + .9) / 2, 0); g.add(p); }
      const beam = mesh(G.box, MAT.planks, 2.5, .18, .2); beam.position.y = hy + .9; g.add(beam);
      const pivot = new T.Group(); pivot.position.y = .9; top.add(pivot);
      const rope = mesh(G.cyl16, MAT.rope, .018, .55, .018); rope.position.y = -.27; pivot.add(rope);
      const bell = mesh(G.bell, MAT.brass, 1.45); bell.position.y = -.9 - .25; pivot.add(bell); o.parts.push(bell);
      o.swing = { obj: pivot };
    } else if (kind === 'plate' || kind === 'gold') {
      g.add(post(hy - .2));
      const pivot = new T.Group(); pivot.position.y = -.12; top.add(pivot);
      const p = mesh(G.cyl, kind === 'gold' ? MAT.goldPlate : MAT.steel, .42, .05, .42); p.rotation.x = Math.PI / 2; p.position.y = .12;
      pivot.add(p); pivot.rotation.y = at.face || 0; o.parts.push(p);
      if (kind === 'plate') { const dot = mesh(G.disc, MAT.redPaint, .13); dot.position.set(0, .12, .027); pivot.add(dot); }
      const chain = mesh(G.cyl16, MAT.steel, .012, .2, .012); chain.position.y = .5; pivot.add(chain);
      o.swing = { obj: pivot };
    }
    shadowed(g);
    course.group.add(g);
    return o;
  }
  function buildCourse(book) {
    clearCourse();
    course = { group: new T.Group(), objects: [], gates: book.gates, pts: [] };
    scene.add(course.group);
    const L = RANGE[book.range].L, n = book.gates.length;
    const zAt = i => -(12 + (L * .72 - 12) * (i + 1) / (n + .6));     // objects in the first stretch, then the long final flight
    const end = aimPoint(book.result);
    const anchors = [{ p: MUZZLE.clone(), i: -1 }];
    let side = Math.random() < .5 ? -1 : 1;
    book.gates.forEach((gt, i) => {
      if (gt.obj === 'plate' || gt.obj === 'gold') { side = -side; anchors.push({ p: new T.Vector3(side * rand(1.2, 2.6), rand(1.2, 2.1) + groundH(0, zAt(i)) * .5, zAt(i)), i, ric: true }); }
    });
    anchors.push({ p: end.hit, i: n });
    const lineAt = z => {
      for (let k = 0; k < anchors.length - 1; k++) {
        const a = anchors[k].p, b = anchors[k + 1].p;
        if (z <= a.z && z >= b.z) { const t = (a.z - z) / (a.z - b.z); return a.clone().lerp(b, t); }
      }
      return end.hit.clone();
    };
    let kHit = 0;
    book.gates.forEach((gt, i) => {
      if (gt.obj === 'none') return;
      const at = lineAt(zAt(i));
      at.y = Math.max(at.y, groundH(at.x, at.z) + .75);
      const anc = anchors.find(a => a.i === i);
      if (anc) { const prev = anchors[anchors.indexOf(anc) - 1].p, next = anchors[anchors.indexOf(anc) + 1].p;
        const din = anc.p.clone().sub(prev).normalize(), dout = next.clone().sub(anc.p).normalize(), nrm = dout.sub(din).normalize();
        at.face = Math.atan2(nrm.x, nrm.z); anc.p.y = at.y; }
      course.objects.push({ ...buildObject(gt.obj, at, kHit++), i, total: gt.total });
    });
    course.anchors = anchors; course.end = end; course.lineAt = lineAt; course.zAt = zAt;
    setPips(n);
  }
  function aimPoint(result) {
    const c = new T.Vector3(0, world.aimY, target.z + .1), R0 = target.R, a = rand(0, Math.PI * 2);
    const r = result === 'bull' ? rand(0, .1) * R0 : result === 'hit' ? rand(.28, .86) * R0 : rand(1.3, 2.1) * R0;
    const hit = c.clone().add(new T.Vector3(Math.cos(a) * r, Math.sin(a) * r * .8, 0));
    return { hit, result };
  }
  function clearCourse() {
    if (!course) return;
    scene.remove(course.group);
    course.group.traverse(o => { if (o.isLine) o.geometry.dispose(); });
    course = null;
  }

  /* ---------- Effects ---------- */
  function burst(at, { n = 14, geo = G.tet, m = 'spark', size = .06, speed = 4, up = 2, life = .8, grav = 9, dir = null, spread = 1 }) {
    for (let i = 0; i < n; i++) {
      const p = mesh(geo, m, size * rand(.6, 1.4)); p.position.copy(at);
      const v = new T.Vector3(rand(-1, 1), rand(-.3, 1), rand(-1, 1)).normalize().multiplyScalar(speed * rand(.4, 1) * spread);
      if (dir) v.addScaledVector(dir, speed * rand(.3, 1));
      v.y += up * rand(.3, 1);
      scene.add(p); fx.push({ o: p, v, life, t: 0, grav, spin: new T.Vector3(rand(-9, 9), rand(-9, 9), rand(-9, 9)), s0: p.scale.x });
    }
  }
  // dust and smoke: soft sprites lit by nothing but their colour, fading as they grow
  function puff(at, { n = 7, color = 0xd9b48c, size = .6, life = 1.4, rise = .6, opacity = .55 }) {
    for (let i = 0; i < n; i++) {
      const m = new T.SpriteMaterial({ map: G.soft, color, transparent: true, opacity, depthWrite: false });
      const p = new T.Sprite(m); p.scale.setScalar(size * rand(.6, 1.2)); p.position.copy(at).add(new T.Vector3(rand(-.3, .3), rand(0, .25), rand(-.3, .3)));
      scene.add(p); fx.push({ o: p, v: new T.Vector3(rand(-.5, .5), rise * rand(.5, 1.2), rand(-.5, .5)), life: life * rand(.8, 1.2), t: 0, grav: 0, grow: 2.6, s0: p.scale.x, drag: 1.4, sprite: opacity });
    }
  }
  function ringWave(at, normal, { m = 'ring', r0 = .2, r1 = 2.2, life = .45 } = {}) {
    const o = mesh(G.torus, m, r0); o.position.copy(at); o.lookAt(at.clone().add(normal)); scene.add(o);
    fx.push({ o, life, t: 0, ring: [r0, r1] });
  }
  function stepFx(dt) {
    for (let i = fx.length - 1; i >= 0; i--) {
      const f = fx[i]; f.t += dt; const k = f.t / f.life;
      if (k >= 1) { scene.remove(f.o); if (f.sprite) f.o.material.dispose(); fx.splice(i, 1); continue; }
      if (f.ring) { f.o.scale.setScalar(lerp(f.ring[0], f.ring[1], eOut(k))); f.o.visible = k < .98; continue; }
      if (f.v) { if (f.drag) f.v.multiplyScalar(Math.max(0, 1 - f.drag * dt)); f.v.y -= f.grav * dt; f.o.position.addScaledVector(f.v, dt); }
      if (f.spin) { f.o.rotation.x += f.spin.x * dt; f.o.rotation.y += f.spin.y * dt; f.o.rotation.z += f.spin.z * dt; }
      if (f.sprite) { f.o.scale.setScalar(f.s0 * (1 + (f.grow - 1) * eOut(k))); f.o.material.opacity = f.sprite * (1 - smooth(.25, 1, k)); continue; }
      const s = f.s0 * (1 - smooth(.55, 1, k));
      if (!f.keepScale) f.o.scale.setScalar(Math.max(.0001, s));
      if (f.o.position.y < .02 && f.v) { f.o.position.y = .02; f.v.set(f.v.x * .4, Math.abs(f.v.y) * .25, f.v.z * .4); }
    }
    for (const s of springs) { s.v += (-s.k * s.a - s.c * s.v) * dt; s.a += s.v * dt; s.apply(s.a); }
  }
  function kickSpring(apply, v, k = 40, c = 3) { const s = { a: 0, v, k, c, apply }; springs.push(s); if (springs.length > 30) springs.shift(); return s; }

  /* ---------- Camera director ---------- */
  function idlePose(t) {
    const breathe = api && api.reduced ? 0 : 1;
    return { pos: new T.Vector3(.17 + Math.sin(t * .31) * .015 * breathe, .82 + Math.sin(t * .9) * .006 * breathe, 1.3), look: new T.Vector3(0, world.aimY - .9, target.z) };
  }
  function setFov(zoom = 1) {
    const a = W / H, tanV = clamp(BASE_TAN / a, Math.tan(T.MathUtils.degToRad(19)), Math.tan(T.MathUtils.degToRad(38)));
    cam.fov = T.MathUtils.radToDeg(2 * Math.atan(tanV / zoom)); cam.updateProjectionMatrix();
  }
  let shake = 0; const tmpF = new T.Vector3();
  function updateCamera(dt) {
    const s = camState;
    if (s.mode === 'idle' || s.mode === 'scope') {
      const p = idlePose(clock.t), k = 1 - Math.exp(-dt * (s.mode === 'scope' ? 12 : 2.4));
      s.pos.lerp(p.pos, k); s.look.lerp(p.look, k);
      s.zoom = lerp(s.zoom, s.mode === 'scope' ? s.scopeZoom : 1, 1 - Math.exp(-dt * 7));
    } else if (s.mode === 'fixed') { /* driven by play() */ }
    cam.position.copy(s.pos); cam.lookAt(s.look);
    aimSun(tmpF.copy(s.look).sub(s.pos).normalize().multiplyScalar(14).add(s.pos));
    if (shake > 0 && !api.reduced) { cam.position.x += rand(-1, 1) * shake * .06; cam.position.y += rand(-1, 1) * shake * .05; shake = Math.max(0, shake - dt * 3.5); }
    const want = s.zoom; if (Math.abs(want - (s.zApplied || 0)) > .001) { s.zApplied = want; setFov(want); }
  }

  /* ---------- HUD ---------- */
  let $val, $vl, $pips, $range, $result, $card, $scope, $flash, $pops, $hud;
  function buildHud(stage) {
    const h = api.h;
    $hud = h('div', { class: 'ls-hud' });
    $hud.innerHTML = `
      <div class="ls-val" id="lsValBox"><span id="lsVl">BULLET</span><b id="lsVal">0.00×</b></div>
      <div class="ls-range"><span class="ls-rng" id="lsRange">300 M</span><span class="ls-pips" id="lsPips"></span></div>
      <div class="ls-pops" id="lsPops"></div>
      <div class="ls-result" id="lsResult" hidden><strong></strong><b></b></div>
      <div class="ls-card" id="lsCard" hidden><small>THE RIFLE IS LOADED WITH A</small><strong>GOLDEN BULLET</strong><span>More objects on the course · never misses</span></div>
      <div class="ls-scope" id="lsScope" aria-hidden="true"><svg viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid slice">
        <path fill="#0b0705" fill-rule="evenodd" d="M-2000-2000H2000V2000H-2000Z M0-74A74 74 0 1 0 0 74A74 74 0 1 0 0-74Z"/>
        <circle r="74" fill="none" stroke="#0b0705" stroke-width="5"/><circle r="70" fill="none" stroke="rgba(255,220,160,.25)" stroke-width="1"/>
        <g stroke="#120c08" stroke-width="1.2"><path d="M-74 0H-9M9 0H74M0-74V-9M0 9V74"/><path stroke-width="3.2" d="M-74 0H-40M40 0H74M0 40V74"/></g>
        <g fill="#120c08">${[-32, -24, -16, 16, 24, 32].map(x => `<circle cx="${x}" cy="0" r="1.1"/><circle cx="0" cy="${x}" r="1.1"/>`).join('')}</g>
        <circle r="1.4" fill="#e2483d"/></svg><span class="ls-scope-r" id="lsScopeR">300 M</span></div>
      <div class="ls-flash" id="lsFlash"></div>`;
    stage.append($hud);
    $val = api.$('lsVal'); $vl = api.$('lsVl'); $pips = api.$('lsPips'); $range = api.$('lsRange'); $result = api.$('lsResult');
    $card = api.$('lsCard'); $scope = api.$('lsScope'); $flash = api.$('lsFlash'); $pops = api.$('lsPops');
  }
  function setPips(n) { $pips.innerHTML = Array.from({ length: n }, () => '<i></i>').join(''); }
  function pip(i, kind) { const p = $pips.children[i]; if (p) { p.className = 'on ' + (kind === 'none' ? 'empty' : OBJ_INFO[kind].tone); } }
  function setVal(x, kind) {
    $val.textContent = api.fmtX(x);
    const box = $val.parentElement; box.dataset.lvl = x >= 100 ? 3 : x >= 20 ? 2 : x >= 5 ? 1 : 0;
    if (kind) { box.classList.remove('bump'); void box.offsetWidth; box.classList.add('bump'); }
  }
  function popAt(world3, text, tone) {
    const v = world3.clone().project(cam); if (v.z > 1) return;
    const el = api.h('div', { class: 'ls-pop ' + tone, text });
    el.style.left = ((v.x + 1) / 2 * 100) + '%'; el.style.top = ((1 - v.y) / 2 * 100) + '%';
    $pops.append(el); setTimeout(() => el.remove(), 1400);
  }
  function flash(power = 1) { if (api.reduced) return; $flash.style.setProperty('--p', power); $flash.classList.remove('go'); void $flash.offsetWidth; $flash.classList.add('go'); }
  function showResult(kind, text, sub) {
    $result.hidden = false; $result.className = 'ls-result ' + kind;
    $result.querySelector('strong').textContent = text; $result.querySelector('b').textContent = sub || '';
  }

  /* ---------- Sound palette ---------- */
  const SFX = {
    shot() { const s = api.sound; s.noise({ d: .55, g: .24, f: 2400, to: 160, type: 'lowpass' }); s.tone({ f: 120, to: 36, d: .42, g: .24 }); s.noise({ d: .05, g: .2, f: 5200, type: 'highpass' }); s.noise({ d: 1.6, g: .045, f: 700, to: 180, type: 'lowpass', when: .16 }); s.noise({ d: 1.2, g: .025, f: 500, to: 160, type: 'lowpass', when: .55 }); },
    whizz(d) { api.sound.noise({ d: Math.max(.15, d), g: .04, f: 4200, to: 1100, q: 4, type: 'bandpass' }); },
    glass(p) { const s = api.sound; s.noise({ d: .35, g: .12, f: 6500, type: 'highpass' }); s.notes([2500, 3300, 2800, 3900, 3100].map(f => f * p), { step: .028, d: .2, type: 'triangle', g: .04 }); },
    can(p) { const s = api.sound; s.tone({ f: 900 * p, to: 520 * p, d: .25, type: 'square', g: .04 }); s.noise({ d: .14, g: .12, f: 3200, q: 3 }); s.tone({ f: 1700 * p, d: .18, type: 'triangle', g: .04, when: .05 }); },
    balloon(p) { const s = api.sound; s.noise({ d: .1, g: .24, f: 1500, type: 'lowpass' }); s.tone({ f: 220 * p, to: 80, d: .14, g: .14 }); },
    clay(p) { const s = api.sound; s.noise({ d: .28, g: .17, f: 2800, to: 800, q: 2 }); s.tone({ f: 340 * p, to: 150, d: .16, type: 'triangle', g: .08 }); },
    bell() { const s = api.sound; [[523, 2.4, .1], [1046 * 1.19, 1.8, .06], [1568 * 1.33, 1.3, .045], [2637 * 1.12, .9, .03], [262, 2.6, .07]].forEach(([f, d, g]) => s.tone({ f, d, g, a: .004 })); s.noise({ d: .05, g: .1, f: 4000, type: 'highpass' }); },
    plate() { const s = api.sound; s.noise({ d: .05, g: .18, f: 5200, type: 'highpass' }); s.tone({ f: 1480, d: .7, type: 'triangle', g: .06, a: .003 }); s.tone({ f: 2240, d: .5, g: .04, a: .003 }); s.tone({ f: 3200, to: 620, d: .5, g: .07, when: .04 }); },
    gold() { SFX.plate(); api.sound.notes([1047, 1319, 1568, 2093, 2637], { step: .055, d: .5, type: 'triangle', g: .055, when: .08 }); },
    thud() { const s = api.sound; s.tone({ f: 150, to: 52, d: .34, g: .25 }); s.noise({ d: .22, g: .15, f: 650, type: 'lowpass' }); s.noise({ d: .06, g: .08, f: 2600 }); },
    bull() { SFX.thud(); api.sound.notes([784, 988, 1175, 1568, 1976], { step: .07, d: .6, type: 'triangle', g: .07, when: .1 }); },
    miss() { const s = api.sound; s.noise({ d: .6, g: .07, f: 1900, to: 300, q: 2 }); s.noise({ d: .4, g: .1, f: 260, type: 'lowpass', when: .42 }); s.tone({ f: 196, to: 165, d: .5, type: 'triangle', g: .05, when: .5 }); },
    golden() { const s = api.sound; s.tone({ f: 98, d: 1.8, g: .12, a: .3 }); s.notes([392, 523, 659, 784, 1047, 1319], { step: .1, d: 1.1, type: 'triangle', g: .06 }); s.noise({ d: 1.2, g: .03, f: 7000, type: 'highpass', when: .2 }); },
    load() { const s = api.sound; s.noise({ d: .05, g: .1, f: 2400, q: 4 }); s.noise({ d: .06, g: .12, f: 1600, q: 4, when: .16 }); s.tone({ f: 600, to: 380, d: .07, type: 'square', g: .03, when: .18 }); },
    tick() { api.sound.tone({ f: 1800, d: .04, type: 'square', g: .02 }); }
  };

  /* ---------- Loop ---------- */
  function tween(ms, fn) {
    return new Promise(res => {
      const d = Math.max(1, ms * api.speed()), t0 = performance.now();
      let done = false;
      const finish = () => { if (done) return; done = true; tasks.delete(step); fn(1); res(); };
      const step = now => { const u = Math.min(1, (now - t0) / d); if (u >= 1) finish(); else fn(u); };
      tasks.add(step); setTimeout(finish, d + 160);
    });
  }
  let rafOn = false;
  function frame(now) {
    rafOn = false;
    if (document.hidden) return;
    const dt = Math.min(.05, (now - clock.last) / 1000); clock.last = now; clock.t += dt;
    for (const f of [...tasks]) f(now);
    stepWorld(dt);
    stepFx(dt * (world.slow || 1));
    updateCamera(dt);
    R.render(scene, cam);
    kick();
  }
  function kick() { if (!rafOn && !document.hidden) { rafOn = true; requestAnimationFrame(frame); } }
  document.addEventListener('visibilitychange', () => { clock.last = performance.now(); kick(); });

  function stepWorld(dt) {
    const t = clock.t;
    if (world.flag) {
      const p = world.flag.geo.attributes.position, b = world.flag.base;
      for (let i = 0; i < p.count; i++) { const x = b[i * 3]; p.setZ(i, Math.sin(x * 3.2 - t * 5.5) * .12 * x + Math.sin(x * 5 + t * 3) * .03 * x); }
      p.needsUpdate = true; world.flag.geo.computeVertexNormals();
    }
    const m = world.motes.geometry.attributes.position;
    for (let i = 0; i < m.count; i += 3) m.setY(i, m.getY(i) + Math.sin(t + i) * dt * .05);
    m.needsUpdate = true;
    world.motes.position.z = Math.floor(cam.position.z / 30) * 30;     // the dust travels with the camera
    target.face.rotation.x = target.swing.a;
    if (course) for (const o of course.objects) if (o.bob !== undefined && !o.gone) o.top.position.y = o.hy + Math.sin(t * 1.6 + o.bob) * .05;
    if (rifle) { rifle.kick = Math.max(0, rifle.kick - dt * 4); const k = eOut(rifle.kick); rifle.g.position.set(rifle.rest.x, rifle.rest.y + k * .01, rifle.rest.z + k * .07); rifle.g.rotation.x = k * .08; }
  }

  /* ---------- Resize ---------- */
  function resize() {
    const r = stageEl.getBoundingClientRect(); W = Math.max(2, Math.floor(r.width)); H = Math.max(2, Math.floor(r.height));
    R.setSize(W, H, false); cam.aspect = W / H; camState.zApplied = 0; setFov(camState.zoom);
    $hud.style.setProperty('--u', (Math.min(W, H * 16 / 9) / 100).toFixed(3) + 'px');
    $hud.dataset.size = W < 330 || H < 220 ? 'xs' : W < 600 ? 's' : 'l';
    kick();
  }

  /* ---------- Thumbnails of the real models (intro cards and rules use the same art as the game) ---------- */
  function snapshots() {
    // Rendered with the game's own renderer (no second WebGL context), read back in the same task.
    const out = {};
    try {
      R.setPixelRatio(1); R.setSize(200, 200, false); R.setClearColor(0x000000, 0);
      const sc = new T.Scene(); sc.environment = scene.environment; sc.environmentRotation.copy(scene.environmentRotation); sc.environmentIntensity = 1;
      const dl = new T.DirectionalLight(0xfff0dc, 2.2); dl.position.set(-2, 3, 4); sc.add(dl);
      const c2 = new T.PerspectiveCamera(30, 1, .01, 50);
      const shoot = (obj) => {
        const b = new T.Box3().setFromObject(obj), c = b.getCenter(new T.Vector3()), r = b.getSize(new T.Vector3()).length() * .5;
        sc.add(obj); const d = r / Math.sin(T.MathUtils.degToRad(15)) * 1.05;
        c2.position.copy(c).add(new T.Vector3(.35, .25, 1).normalize().multiplyScalar(d)); c2.lookAt(c);
        R.render(sc, c2); sc.remove(obj); return R.domElement.toDataURL('image/png');
      };
      out.bottle = shoot(bottleModel(1));
      out.can = shoot(grounded(ART.can_rusted.clone()));
      const bal = new T.Group(); bal.add(mesh(G.balloon, MAT.balloon0)); const kn = mesh(G.knot, MAT.balloon0); kn.position.y = -.43; bal.add(kn); out.balloon = shoot(bal);
      const clay = new T.Group(); clay.add(mesh(G.cyl, MAT.clay, .17, .05, .17), mesh(G.cyl, MAT.clayRim, .12, .056, .12)); clay.rotation.x = .5; out.clay = shoot(clay);
      out.bell = shoot(mesh(G.bell, MAT.brass, 1.3));
      const pl = new T.Group(), pd = mesh(G.cyl, MAT.steel, .42, .05, .42); pd.rotation.x = Math.PI / 2; const dot = mesh(G.disc, MAT.redPaint, .13); dot.position.z = .027; pl.add(pd, dot); pl.rotation.y = -.35; out.plate = shoot(pl);
      const gp = new T.Group(), gd = mesh(G.cyl, MAT.goldPlate, .42, .05, .42); gd.rotation.x = Math.PI / 2; gp.add(gd); gp.rotation.y = -.35; out.gold = shoot(gp);
      const tg = new T.Group(); tg.add(new T.Mesh(G.disc, target.face.children[1].material)); tg.rotation.y = -.3; out.target = shoot(tg);
      const gb = mesh(G.bullet, MAT.bulletGold, 3); gb.rotation.y = -Math.PI / 2 - .4; gb.rotation.z = .3; out.golden = shoot(new T.Group().add(gb));
    } catch (e) { /* thumbnails are decoration only */ }
    R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    resize();
    return out;
  }
  function placeThumbs(shots) {
    document.querySelectorAll('[data-ls-img]').forEach(el => { const s = shots[el.dataset.lsImg]; if (s) el.innerHTML = `<img alt="" src="${s}">`; });
  }

  /* ---------- Round playback ---------- */
  function reset() {
    clearCourse();
    for (const f of fx) { scene.remove(f.o); if (f.sprite) f.o.material.dispose(); } fx.length = 0; springs.length = 0;
    if (bullet) bullet.visible = false;
    camState.mode = 'idle'; world.slow = 1; shake = 0;
    target.swing.a = 0; target.swing.v = 0;
    for (const h of target.holes) target.face.remove(h); target.holes.length = 0;
    $result.hidden = true; $card.hidden = true; $scope.classList.remove('on'); $pops.innerHTML = '';
    $val.parentElement.classList.remove('golden', 'won', 'lost'); $vl.textContent = 'BULLET'; setVal(0);
    $hud.classList.remove('flying');
  }
  function bulletAt(p, dir, golden) {
    bullet.visible = true; bullet.position.copy(p); bullet.lookAt(p.clone().add(dir));
    bullet.children[0].material = golden ? MAT.bulletGold : MAT.copper; trail.material = golden ? MAT.trailGold : MAT.trail;
  }
  const tmp = new T.Vector3(), up = new T.Vector3(0, 1, 0);
  // Flies the bullet from point a to point b. `into` = the camera swings to watch the impact at b.
  function leg(a, b, ms, { into = false, fromImpact = false, golden = false, last = false, sideSign = 1, passGates = null, focus = null } = {}) {
    const dir = b.clone().sub(a).normalize(), side = tmp.clone().crossVectors(dir, up).normalize().multiplyScalar(sideSign);
    let lastRing = 0;
    return tween(ms, u => {
      // speed profile: fast through the open air, easing into the impact (bullet time) and out of it
      const e = fromImpact ? (into ? eInOut(u) : 1 - Math.pow(1 - u, 2)) : (into ? 1 - Math.pow(1 - u, 2.4) : u);
      const p = a.clone().lerp(b, e);
      bulletAt(p, dir, golden);
      trail.scale.z = lerp(1.2, 4.5, 1 - Math.abs(.5 - u) * 2) * (into && u > .8 ? .6 : 1);
      const near = into ? smooth(.5, .92, u) : 0, out = fromImpact ? 1 - smooth(0, .35, u) : 0, sideK = Math.max(near, out);
      const chase = p.clone().addScaledVector(dir, -2.7).addScaledVector(up, .62).addScaledVector(side, .38);
      const watchAt = into ? (focus || b) : a;
      // impact cam: off to one side and a little ahead, so the object and the canyon behind it are both in frame;
      // target cam: in front of the target and to the side, so the bullet's arrival and the face are both visible
      const watch = last
        ? watchAt.clone().addScaledVector(side, 4.4).addScaledVector(up, .55).addScaledVector(dir, -5.2)
        : watchAt.clone().addScaledVector(side, 2.9).addScaledVector(up, .55).addScaledVector(dir, -1.7);
      camState.pos.copy(chase.lerp(watch, sideK));
      camState.look.copy(p.clone().addScaledVector(dir, 9).addScaledVector(up, .35).lerp(watchAt.clone().addScaledVector(dir, last ? -.6 : 0), sideK * .92));
      world.slow = lerp(1, .25, sideK);
      if (passGates) passGates(p.z);
      if (u - lastRing > .3 && !api.reduced) { lastRing = u; ringWave(p.clone().addScaledVector(dir, -.3), dir, { m: golden ? 'wakeGold' : 'wake', r0: .04, r1: .32, life: .3 }); }
    });
  }
  function impact(o, golden, streak) {
    const at = o.at, p = 1 + streak * .06, dirIn = o.dirIn || new T.Vector3(0, 0, -1);
    o.gone = true;
    switch (o.kind) {
      case 'bottle': o.parts.forEach(x => (x.visible = false)); burst(at, { n: 26, m: MAT.shard, size: .05, speed: 3.2, dir: dirIn, up: 2.5 }); puff(at, { n: 3, color: 0xf0e2c8, size: .4, life: .7, rise: .2, opacity: .3 }); SFX.glass(p); break;
      case 'can': { const c = o.parts[0], v = dirIn.clone().multiplyScalar(5).add(new T.Vector3(rand(-1, 1), 4.5, 0)); fx.push({ o: c, v, life: 1.6, t: 0, grav: 11, spin: new T.Vector3(9, 4, 6), s0: c.scale.x, keepScale: true }); burst(at, { n: 8, size: .03, speed: 3, up: 1 }); SFX.can(p); break; }
      case 'balloon': o.parts.forEach(x => (x.visible = false)); burst(at, { n: 16, m: o.parts[0].material, size: .08, speed: 3.5, up: .5, grav: 3, life: 1.2 }); ringWave(at, dirIn, { r0: .1, r1: 1.4, life: .35 }); SFX.balloon(p); break;
      case 'clay': o.parts[0].visible = false; burst(at, { n: 22, m: MAT.chip, size: .06, speed: 4, dir: dirIn, up: 1.5 }); puff(at, { n: 6, color: 0xe08850, size: .5, life: 1, rise: .3, opacity: .5 }); SFX.clay(p); break;
      case 'bell': kickSpring(a => (o.swing.obj.rotation.x = a), -3.2, 18, .9); burst(at, { n: 14, m: 'sparkGold', size: .04, speed: 5, up: 1 }); ringWave(at, dirIn, { m: 'trailGold', r0: .2, r1: 3, life: .6 }); SFX.bell(); shake = .5; break;
      case 'plate': case 'gold': {
        kickSpring(a => (o.swing.obj.rotation.x = a), -5, 30, 2.2);
        burst(at, { n: o.kind === 'gold' ? 26 : 16, m: o.kind === 'gold' ? 'sparkGold' : 'spark', size: .035, speed: 7, up: 1.5, grav: 6, life: .6 });
        if (o.kind === 'gold') { ringWave(at, dirIn, { m: 'trailGold', r0: .3, r1: 3.6, life: .55 }); flash(.5); SFX.gold(); } else SFX.plate();
        shake = .6; break;
      }
    }
  }

  async function play(events, ctx) {
    reset();
    const shot = events.find(e => e.type === 'shot') || { range: range, golden: false, gates: 0 };
    const gates = events.filter(e => e.type === 'gate');
    const tgt = events.find(e => e.type === 'target') || { result: 'miss', total: 100, win: 0 };
    const golden = !!shot.golden;
    if (RANGE[shot.range] && shot.range !== range) { range = shot.range; placeTarget(range, true); updateRangeLabel(); }
    buildCourse({ range, gates, result: tgt.result });
    const objs = course.objects;
    $hud.classList.add('flying');
    setVal(0);
    // 1. Golden bullet title card
    if (golden) {
      $card.hidden = false; $val.parentElement.classList.add('golden'); SFX.golden(); flash(.35);
      await ctx.sleep(1700);
      $card.hidden = true;
    } else SFX.load();
    // 2. Into the scope
    camState.mode = 'scope'; camState.scopeZoom = clamp(RANGE[range].L / 30, 5, 16);
    $scope.classList.add('on');
    await ctx.sleep(golden ? 520 : 420);
    // 3. Fire
    SFX.shot(); rifle.kick = 1; flash(.6); shake = 1;
    flashLight.intensity = 30; tween(140, u => (flashLight.intensity = 30 * (1 - u)));
    const mz = MUZZLE.clone(); puff(mz.clone().add(new T.Vector3(0, 0, -.2)), { n: 7, color: 0xd8d0c4, size: .35, life: 1.6, rise: .25, opacity: .45 }); puff(new T.Vector3(0, groundH(0, -1) + .1, -.9), { n: 6, color: 0xd9b48c, size: .7, life: 1.3, rise: .2, opacity: .4 });
    const flashM = mesh(G.oct, MAT.flash, .12, .12, .34); flashM.position.copy(mz).add(new T.Vector3(0, 0, -.2)); scene.add(flashM); fx.push({ o: flashM, life: .09, t: 0, s0: .16 });
    const casing = mesh(G.cyl16, MAT.brass, .007, .055, .007); casing.position.set(.06, MUZZLE.y + .03, .42); scene.add(casing);
    fx.push({ o: casing, v: new T.Vector3(1.4, 2, .3), life: 1.2, t: 0, grav: 9, spin: new T.Vector3(18, 6, 12), s0: .007, keepScale: true });
    await ctx.sleep(90);
    $scope.classList.remove('on');
    camState.mode = 'fixed'; camState.zoom = 1;
    // 4. The flight: muzzle -> each object hit -> the target
    let from = MUZZLE.clone(), fromImpact = false, streak = 0, total = 100, side = 1;
    const passed = new Set();
    const passGates = z => { gates.forEach((g, i) => { if (!passed.has(i) && z <= course.zAt(i) + .01) { passed.add(i); pip(i, g.obj); } }); };
    const speedMs = d => 170 + Math.sqrt(d) * (golden ? 34 : 30);    // long stretches fly fast, short ones still read
    for (const o of objs) {
      const to = o.at.clone(), dist = from.distanceTo(to);
      o.dirIn = to.clone().sub(from).normalize();
      if (o.fly) { const disc = o.fly.disc, start = o.fly.from.clone(); tween(speedMs(dist) * .9, u => disc.position.copy(start.clone().lerp(new T.Vector3(0, 0, 0), eOut(u)).add(new T.Vector3(0, Math.sin(u * Math.PI) * 1.2, 0)))); }
      SFX.whizz(speedMs(dist) / 1000 * ctx.speed());
      await leg(from, to, speedMs(dist), { into: true, fromImpact, golden, sideSign: side, passGates });
      total = o.total; streak++;
      impact(o, golden, streak);
      setVal(total / 100, o.kind);
      popAt(to.clone().add(new T.Vector3(0, .5, 0)), OBJ_INFO[o.kind].label, OBJ_INFO[o.kind].tone);
      await ctx.sleep(o.kind === 'bell' || o.kind === 'gold' ? 300 : 170);
      from = to; fromImpact = true; side = -side;
    }
    // Final leg: identical pacing for a hit and a miss.
    const end = course.end, dist = from.distanceTo(end.hit);
    SFX.whizz((speedMs(dist) + 300) / 1000 * ctx.speed());
    await leg(from, end.hit, speedMs(dist) + 300, { into: true, fromImpact, golden, last: true, sideSign: side, passGates, focus: new T.Vector3(0, world.aimY, target.z) });
    gates.forEach((g, i) => pip(i, g.obj));
    const box = $val.parentElement;
    if (tgt.result === 'miss') {
      bullet.visible = false;
      const dir = end.hit.clone().sub(from).normalize();
      const land = end.hit.clone().addScaledVector(dir, 14); land.y = groundH(land.x, land.z) + .1;
      const look0 = camState.look.clone(); tween(420, u => { bulletAt(end.hit.clone().lerp(land, u), dir, golden); camState.look.copy(look0).lerp(land, eOut(u) * .6); }).then(() => { bullet.visible = false; puff(land, { n: 10, size: 1.2, life: 1.8, rise: .9 }); burst(land, { n: 12, m: MAT.splinter, size: .06, speed: 2.5, up: 3 }); });
      SFX.miss();
      box.classList.add('lost'); $vl.textContent = 'MISSED';
      showResult('miss', 'MISS', 'The shot went wide');
      await ctx.sleep(1000);
    } else {
      bullet.visible = false;
      const hole = mesh(G.disc, MAT.hole, .03); hole.position.copy(target.face.worldToLocal(end.hit.clone())); hole.position.z = .064; target.face.add(hole); target.holes.push(hole);
      kickSpring(a => (target.swing.a = a), -2.6, 26, 2.4);
      const nrm = new T.Vector3(0, 0, 1);
      burst(end.hit, { n: 18, m: MAT.splinter, size: .04, speed: 4, up: 2, dir: nrm }); puff(end.hit, { n: 4, color: 0xe8dcc6, size: .5, life: .9, rise: .2, opacity: .35 });
      ringWave(end.hit, nrm, { m: tgt.result === 'bull' ? 'trailGold' : 'ring', r0: .2, r1: tgt.result === 'bull' ? 4 : 2.2, life: .55 });
      shake = .8;
      if (tgt.result === 'bull') { SFX.bull(); flash(.8); burst(end.hit, { n: 30, m: 'sparkGold', size: .04, speed: 6, up: 2, dir: nrm }); } else SFX.thud();
      const x = tgt.win / 100;
      setVal(x, 'win'); box.classList.add('won'); $vl.textContent = 'WIN';
      showResult(tgt.result, tgt.result === 'bull' ? 'BULLSEYE' : 'HIT', tgt.result === 'bull' ? api.fmtX(tgt.total / 100) + ' doubled to ' + api.fmtX(x) : api.fmtX(x) + ' the play amount');
      ctx.setWin(ctx.units(tgt.win), true);
      await ctx.sleep(golden ? 1300 : 1000);
    }
    world.slow = 1;
    camState.mode = 'idle';
    $hud.classList.remove('flying');
    return { feature: golden };
  }

  function updateRangeLabel() { const t = RANGE[range].m + ' M'; $range.textContent = t; api.$('lsScopeR').textContent = t; }

  /* ---------- Boot ---------- */
  const imgSpan = k => `<span class="ls-ico" data-ls-img="${k}"></span>`;
  LZ.boot({
    id: 'long-shot', title: 'Long Shot', tagline: 'One bullet. Everything it hits on the way is a prize. It keeps them only if it finds the target.',
    rtp: '96.30', layout: 'side',
    logo: '<svg viewBox="0 0 330 64" role="img" aria-label="Long Shot"><g fill="none" stroke="currentColor" stroke-width="5"><circle cx="32" cy="32" r="21"/></g><g stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M32 4v14M32 46v14M4 32h14M46 32h14"/></g><circle cx="32" cy="32" r="5" fill="#e2483d"/><text x="70" y="46" font-family="Unbounded, sans-serif" font-weight="800" font-size="36" fill="currentColor" textLength="252" lengthAdjust="spacingAndGlyphs">LONG SHOT</text></svg>',
    modes: [
      { name: 'near', label: '300 M', note: 'Hits often', cost: 1, maxWin: 500 },
      { name: 'mid', label: '800 M', note: 'Balanced', cost: 1, maxWin: 2500 },
      { name: 'far', label: '1500 M', note: 'Rare, huge', cost: 1, maxWin: 10000 },
      { name: 'golden', kind: 'feature', label: 'GOLDEN BULLET', cost: 50, maxWin: 10000,
        blurb: 'A golden bullet at 1500 M: twelve objects, many more steel and gold plates, and it never misses.', confirmTitle: 'Load a golden bullet?', confirmLabel: 'Load it' }
    ],
    modeGroupLabel: 'Range',
    introCards: [
      { art: imgSpan('bottle'), title: 'HIT THINGS', text: 'Every object on the way is a prize: it adds to the bullet.' },
      { art: imgSpan('plate'), title: 'RICOCHET', text: 'A steel plate doubles it. A gold plate multiplies it by 5.' },
      { art: imgSpan('golden'), title: 'GOLDEN BULLET', text: 'Twice the objects, and it never misses.' }
    ],
    featureName: 'a golden bullet', statLabel: 'Golden bullets',
    playLabel: 'FIRE', busyLabel: 'IN FLIGHT',
    winTiers: [{ x: 10, label: 'BIG WIN' }, { x: 50, label: 'MEGA WIN' }, { x: 250, label: 'EPIC WIN' }],
    rules: `<h3>How to play</h3>
      <p>Choose a <b>Range</b>, then press <b>FIRE</b> (the play button). One bullet crosses the range. It leaves the barrel worth nothing. Every object it hits on the way is a prize that is added to the bullet's value. At the end it reaches the target, far down the range:</p>
      <table><thead><tr><th>At the target</th><th>Result</th></tr></thead><tbody>
        <tr><td>${imgSpan('target')} <b>Miss</b></td><td>The round wins nothing.</td></tr>
        <tr><td><b>Hit</b></td><td>Wins the bullet's value × the play amount.</td></tr>
        <tr><td><b>Bullseye</b></td><td>Wins double the bullet's value × the play amount.</td></tr></tbody></table>
      <h3>On the course</h3>
      <p>The bullet hits a fixed number of objects (3 at 300 M, 4 at 800 M, 6 at 1500 M), every round a different set. Objects count in the order the bullet meets them. The first object is never a plate.</p>
      <table><thead><tr><th>Object</th><th>Does</th></tr></thead><tbody>
        <tr><td>${imgSpan('bottle')} Bottle</td><td>+0.2×</td></tr>
        <tr><td>${imgSpan('can')} Tin can</td><td>+0.3×</td></tr>
        <tr><td>${imgSpan('balloon')} Balloon</td><td>+0.5×</td></tr>
        <tr><td>${imgSpan('clay')} Clay disc</td><td>+1.5×</td></tr>
        <tr><td>${imgSpan('bell')} Brass bell</td><td>+5×</td></tr>
        <tr><td>${imgSpan('plate')} Steel plate</td><td>Ricochet: the bullet's value ×2</td></tr>
        <tr><td>${imgSpan('gold')} Gold plate</td><td>Ricochet: the bullet's value ×5</td></tr></tbody></table>
      <h3>Ranges</h3>
      <table><thead><tr><th>Range</th><th>Objects</th><th>Character</th><th>Max win</th></tr></thead><tbody>
        <tr><td>300 M</td><td>3</td><td>More than half of the shots find the target.</td><td>500×</td></tr>
        <tr><td>800 M</td><td>4</td><td>About one shot in three finds the target.</td><td>2,500×</td></tr>
        <tr><td>1500 M</td><td>6</td><td>About one shot in six finds the target.</td><td>10,000×</td></tr></tbody></table>
      <p>All three ranges have the same RTP. A shorter range wins more often; a longer range wins less often and bigger.</p>
      <h3>${imgSpan('golden')} Golden bullet</h3>
      <p>Now and then the rifle is loaded with a golden bullet (about once in 200 to 280 rounds, depending on the range). A golden bullet hits more objects (7 at 300 M, 9 at 800 M, 12 at 1500 M), steel and gold plates are three times as common and the brass bell twice as common, and it <b>never misses</b> the target.</p>
      <p><b>GOLDEN BULLET</b> instantly triggers a round with a golden bullet at 1500 M. It is played for 50× the play amount and asks you to confirm first.</p>
      <h3>Win cap</h3>
      <p>A round wins at most 500× at 300 M, 2,500× at 800 M and 10,000× at 1500 M and with the GOLDEN BULLET. A round that reaches the cap ends there and wins the cap.</p>
      <p>Where an object stands, where a missed shot lands and how debris flies are decoration only. Every result is decided before the shot is fired.</p>`,
    async mount(stage, a) {
      api = a; stageEl = stage;
      R = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
      R.toneMapping = T.ACESFilmicToneMapping; R.toneMappingExposure = 1;
      R.shadowMap.enabled = true; R.shadowMap.type = T.PCFSoftShadowMap;
      R.domElement.className = 'ls-canvas';
      stage.prepend(R.domElement);
      scene = new T.Scene();
      scene.fog = new T.Fog(C.haze, 160, 1500);
      cam = new T.PerspectiveCamera(45, 16 / 9, .03, 3000);
      camState = { mode: 'idle', pos: new T.Vector3(.17, .82, 1.3), look: new T.Vector3(0, 2, -60), zoom: 1, scopeZoom: 3 };
      await loadArt();
      initMaterials(); initGeometry();
      buildSky(); buildGround(); scatter(); buildFlag();
      rifle = buildRifle(); target = buildTarget();
      flashLight = new T.PointLight(0xffc070, 0, 8, 1.6); flashLight.position.copy(MUZZLE).add(new T.Vector3(0, .1, -.3)); scene.add(flashLight);
      bullet = new T.Group(); bullet.add(mesh(G.bullet, MAT.copper, 1.15)); trail = mesh(G.trail, MAT.trail, .7, .7, 3); bullet.add(trail); bullet.visible = false; scene.add(bullet);
      buildHud(stage);
      placeTarget(range, true);
      updateRangeLabel();
      if ('ResizeObserver' in window) new ResizeObserver(resize).observe(stage); else window.addEventListener('resize', resize);
      resize();
      placeThumbs(snapshots());
      kick();
    },
    reset,
    play,
    idle() {
      camState.mode = 'idle';
      // After a GOLDEN BULLET round (always 1500 M) go back to the range the player has selected.
      if (api.mode && RANGE[api.mode] && api.mode !== range) { range = api.mode; placeTarget(range, false); updateRangeLabel(); }
      kick();
    },
    onMode(name) {
      if (!RANGE[name] || !target) return;
      if (name !== range) { range = name; reset(); placeTarget(range, false); updateRangeLabel(); SFX.tick(); }
    },
    onStart() { kick(); }
  });
})();
