/* Last Step: the stage and the playback of a round. The shell (lz-core.js) owns the wallet, controls, rules and
 * settlement; this file only draws the temple and replays the events of a book. Nothing here decides a result.
 * Scene: PixiJS v8 (vendor/pixi.min.js); numbers and tables come from rules-data.js, which tools/sync-rules.mjs writes
 * from the math. Layout (2026-11-21, after the user's reference shots): the board is a smaller window in a gilded frame
 * over a painted hall; the explorer (explorer-rig.js) stands outside it on a ledge and reacts, and his monkey
 * (monkey-rig.js) hops on the tiles. The controls are a bar inside the picture, under the board. */
(() => {
  'use strict';
  const PIXI = window.PIXI, R = window.LS_RULES, ART = window.LS_ART;
  const MODE = Object.fromEntries(R.modes.map(m => [m.name, m]));
  const W = 1600, H = 900;                         // logical scene size (16:9)
  const N = R.tiles;
  // Bridge geometry, fitted to bg-temple: the rock ledge on the left ends at x 190, the idol ledge starts at 1338.
  const X0 = 360, X1 = 1400, TW = (X1 - X0) / N, TOP = 486;   // the bridge meets both rock ledges (no gap)
  const tileX = i => X0 + (i - 0.5) * TW;          // centre of tile i (1..12); tile 0 = the left ledge
  const START_X = X0 - 58, IDOL_X = X1 + 105, HOST_X = X0 - 200;   // HOST_X: where the explorer stands, behind the monkey
  const GOLD = 0xE9B949, JADE = 0x2FE08C, FLAG_H = 128;
  const NUM = { stone: '#9DB3A7', bronze: '#F0A860', gold: '#FFDA72' };

  let api, app, scene, cam, bg, bgV, world, vaultWorld, fxLayer, hud, monkey, rig, beanie, flagS, idolS, idolGlow;
  let tiles = [], gtiles = [], tex = {}, mode = 'flag4', torches = [], mist = [], dust = [], sparks = [];
  let follow, ui = {}, speedFn = () => 1, skipBig = null, inVault = false, shakeT = 0, shakeAmp = 0;
  const tweens = new Set();
  // the living temple, the cliffs and the explorer's treasure (2026-11-20, from the user's notes)
  let bgMid, shimmerT = 0, vLedge, bgLayer, templeFx, ground, cliffL, cliffR, fore, pile, pileLevel = 0, idleT = 0, nextWave = 7;
  const embers = [], drops = [], rays = [], backFog = [], vines = [], coins = [];
  const RIG_S = 0.31, RIG_S_VAULT = 0.36;          // the monkey on the bridge (his drawing is about 487 px tall)
  // outside the board: the hall, the frame, the explorer and the coins that fly from the board into his pack
  let outer, hallBg, hallFx, maskG, frameC, framePieces = [], hostC, hrig, topFx, WIN = { x: 0, y: 0, w: 1, h: 1 }, HS = 0.5, full, appEl;
  const motes = [];
  // the frame image (board-frame, 1353 x 760 after the build): its opening and the size of a corner piece, in its px
  const FR = { l: 68, t: 71, r: 69, b: 72, edge: 12, c: 110 };
  // where the explorer stands in bg-hall: the top of the jade ledge (share of the image height) and its right end
  const LEDGE = { y: 0.72, r: 0.41 };
  const CLIFF_TOP = 0.035;                          // the walkable top of a cliff image, as a share of its height
  // where the top of his backpack is in each drawing (rig px from the feet), so the treasure pile sits on it
  const PACK = { idle: [-76, -384], blink: [-76, -384], hop: [-53, -354], wave: [-85, -370], pump: [-59, -370], peek: [-40, -385] };
  // the painted temple (bg-temple), in scene px: waterfalls [centre x, top, bottom, width], braziers, the sun motif
  // (measured on layer-far-b, the far wall since 2026-11-25)
  const FALLS = [[223, 431, 593, 20], [554, 450, 689, 17], [1054, 450, 689, 20], [1368, 431, 612, 24]];
  const BRAZIERS = [[384, 100], [1210, 100]], SUN = [800, 54];

  /* ---------------- tiny tween engine (follows TURBO through speedFn) ---------------- */
  const EASE = {
    lin: t => t, outQuad: t => 1 - (1 - t) * (1 - t), inQuad: t => t * t, inOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
    outBack: t => { const c = 1.7; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
    outCubic: t => 1 - Math.pow(1 - t, 3), inCubic: t => t * t * t,
  };
  function tween(obj, to, ms, ease = 'outQuad', onUpdate) {
    return new Promise(res => {
      const from = {}; for (const k in to) from[k] = obj[k];
      const tw = { obj, from, to, d: Math.max(1, ms * speedFn()), t: 0, e: EASE[ease] || EASE.outQuad, res, onUpdate };
      tweens.add(tw);
    });
  }
  function tickTweens(dt) {
    for (const tw of tweens) {
      tw.t += dt; const p = Math.min(1, tw.t / tw.d), k = tw.e(p);
      for (const key in tw.to) tw.obj[key] = tw.from[key] + (tw.to[key] - tw.from[key]) * k;
      // a tween whose sprite was destroyed meanwhile (a new bridge after a mode change) must not throw here: an error
      // in the ticker stops Pixi's clock for good and the round hangs (2026-11-26, the user: the game got stuck)
      try { if (tw.onUpdate) tw.onUpdate(k); } catch (e) { console.warn('tween dropped:', e.message); tweens.delete(tw); tw.res(); continue; }
      if (p >= 1) { tweens.delete(tw); tw.res(); }
    }
  }
  const stopTweens = obj => { for (const tw of tweens) if (tw.obj === obj) { tweens.delete(tw); tw.res(); } };
  const wait = ms => new Promise(r => { const o = { v: 0 }; tween(o, { v: 1 }, ms, 'lin').then(r); });

  /* ---------------- textures ---------------- */
  async function loadTex(name) {
    const img = new Image(); img.src = ART[name]; await img.decode();
    return PIXI.Texture.from(img);
  }
  function glowTexture(r, stops) {
    const c = document.createElement('canvas'); c.width = c.height = r * 2;
    const g = c.getContext('2d'), gr = g.createRadialGradient(r, r, 0, r, r, r);
    stops.forEach(([o, col]) => gr.addColorStop(o, col)); g.fillStyle = gr; g.fillRect(0, 0, r * 2, r * 2);
    return PIXI.Texture.from(c);
  }

  /* ---------------- the scene ---------------- */
  const fmtX = v => (v / 100).toFixed(2) + '×';
  // Text: our Pixi bundle has no Text class, so numbers are drawn in Limelight on a canvas (2x) and cached.
  const textCache = new Map();
  function textTex(str, color, px) {
    const key = str + '|' + color + '|' + px;
    if (textCache.has(key)) return textCache.get(key);
    const c = document.createElement('canvas'), g = c.getContext('2d'), f = px * 2;
    g.font = f + 'px Limelight'; const w = Math.ceil(g.measureText(str).width) + f * 0.6;
    c.width = Math.max(4, w); c.height = Math.ceil(f * 1.5);
    g.font = f + 'px Limelight'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
    g.lineWidth = f * 0.2; g.strokeStyle = '#1b130a'; g.strokeText(str, c.width / 2, c.height / 2);
    g.fillStyle = color; g.fillText(str, c.width / 2, c.height / 2);
    const t = PIXI.Texture.from(c); textCache.set(key, t); return t;
  }
  function label(str, color, px) {
    const box = new PIXI.Container(), sp = new PIXI.Sprite(textTex(str, color, px));
    sp.anchor.set(0.5); sp.scale.set(0.5); box.addChild(sp);
    box.str = str; box.px = px;
    box.setColor = col => { sp.texture = textTex(box.str, col, box.px); };
    return box;
  }
  /* Tile effects (2026-11-25, the user: the tiles look great, their animation must be much better). Made once per tile
   * picture from its own pixels, so every effect has exactly the tile's shape:
   *   lit   = the tile flooded with warm gold, drawn additively over it (a tile in the money glows, a landing flashes)
   *   shine = SHINE_N frames of a diagonal gleam crossing the tile
   *   halves = the tile split along a jagged crack, for a tile that gives way */
  const SHINE_N = 10, tileFx = {};
  function prepTileFx(name) {
    const src = tex[name].source.resource, w = src.width || src.naturalWidth, h = src.height || src.naturalHeight;
    const cv = () => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
    const lit = cv(), g = lit.getContext('2d');
    g.drawImage(src, 0, 0); g.globalCompositeOperation = 'source-atop'; g.fillStyle = 'rgba(255,214,120,1)'; g.fillRect(0, 0, w, h);
    const shine = [];
    for (let k = 0; k < SHINE_N; k++) {
      const c = cv(), q = c.getContext('2d'); q.drawImage(src, 0, 0); q.globalCompositeOperation = 'source-in';
      const x = -w * 0.5 + (k / (SHINE_N - 1)) * w * 2, gr = q.createLinearGradient(x - w * 0.22, 0, x + w * 0.22 - h * 0.4, h);
      gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(255,250,225,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      q.fillStyle = gr; q.fillRect(0, 0, w, h); shine.push(PIXI.Texture.from(c));
    }
    // the crack: from the top edge near the middle down to the bottom, in seven jagged steps
    const pts = []; for (let k = 0; k <= 7; k++) pts.push([w * (0.5 + (k % 2 ? 0.07 : -0.05) * (k === 0 || k === 7 ? 0.4 : 1)), h * k / 7]);
    const half = right => { const c = cv(), q = c.getContext('2d'); q.beginPath(); q.moveTo(right ? w : 0, 0); pts.forEach(p => q.lineTo(p[0], p[1])); q.lineTo(right ? w : 0, h); q.closePath(); q.clip(); q.drawImage(src, 0, 0); return PIXI.Texture.from(c); };
    tileFx[name] = { lit: PIXI.Texture.from(lit), shine, halves: [half(false), half(true)], crackX: pts.reduce((a, p) => a + p[0], 0) / pts.length / w };
  }
  function makeTile(texName, value, color, px = 19) {
    const c = new PIXI.Container();
    const s = new PIXI.Sprite(tex[texName]); s.anchor.set(0.5, 0.1); s.scale.set((TW * 1.03) / s.texture.width);
    const fx = tileFx[texName];
    const lit = new PIXI.Sprite(fx.lit); lit.anchor.set(0.5, 0.1); lit.scale.copyFrom(s.scale); lit.blendMode = 'add'; lit.alpha = 0;
    const sh = new PIXI.Sprite(fx.shine[0]); sh.anchor.set(0.5, 0.1); sh.scale.copyFrom(s.scale); sh.blendMode = 'add'; sh.visible = false;
    const t = label(value ? fmtX(value) : '0×', color, px);   // before the flag a tile wins nothing, and says so
    t.y = s.height * 0.37;
    c.addChild(s, lit, sh, t); c.sprite = s; c.lit = lit; c.shineS = sh; c.label_ = t; c.texName = texName;
    c.glow = 0; c.glowTo = 0; c.shineT = -1; c.sq = 1; c.baseS = s.scale.y;
    return c;
  }
  // a tile leaves the scene: its running animations stop first, so none of them touches a destroyed sprite
  function dropTile(t) { if (t.halves) t.halves.forEach(h => stopTweens(h.anim)); [t, t.label_, t.label_ && t.label_.scale, t.sqObj, t.dipObj, t.liftObj].forEach(o => o && stopTweens(o)); t.destroy({ children: true }); }
  // a gleam crosses the tile (ms: how long it takes)
  function shineTile(t, ms = 420) { if (t && !t.falling) { t.shineT = 0; t.shineD = ms; } }
  // the tile flashes gold and settles at a level (a tile in the money keeps a soft glow)
  function flashTile(t, peak = 1, rest = 0.22) { if (!t) return; t.glow = peak; t.glowTo = rest; }
  // the tile takes the monkey's weight: squash, a deeper dip, dust out of both sides
  function landTile(t, heavy = 1) {
    if (!t) return; dip(t, 10 * heavy);
    stopTweens(t.sqObj || (t.sqObj = {})); const o = t.sqObj; o.v = 1;
    tween(o, { v: 0 }, 380, 'outBack', k => { t.sq = 1 - 0.07 * o.v; });
    const w = TW * 0.5;
    burst(t.x - w, t.y + 14, 4, { color: 0xB8D4C6, speed: 120, life: 420, grav: 300, size: 0.9 });
    burst(t.x + w, t.y + 14, 4, { color: 0xB8D4C6, speed: 120, life: 420, grav: 300, size: 0.9 });
  }
  function numColor(i, flag) { return i < flag ? NUM.stone : NUM.bronze; }
  function buildBridge() {
    tiles.forEach(dropTile); tiles = [];
    const lad = R.ladder[mode] || R.ladder.flag4, flag = MODE[mode].flag || 4;
    for (let i = 1; i <= N; i++) {
      const t = makeTile(i >= 10 ? 'tile-cracked' : 'tile', lad[i - 1], numColor(i, flag));
      t.x = tileX(i); t.y = TOP; t.home = { x: t.x, y: t.y };
      t.label_.alpha = i < flag ? 0.55 : 1;
      world.addChildAt(t, 0);                     // behind the flag, the idol and the explorer
      tiles.push(t);
    }
    placeFlag(false);
  }
  function placeFlag(animate) {
    const flag = MODE[mode].flag; if (!flag) return;
    const x = tileX(flag) - TW * 0.18, y = TOP + 4;      // the pole stands on the flag tile, a little left of centre
    if (!animate) { flagS.x = x; flagS.y = y; return; }
    flagS.y = y - 60; flagS.x = x; flagS.alpha = 0; SND.emit('plant', flag - 2);
    tween(flagS, { y, alpha: 1 }, 260, 'outBack');
  }

  function buildScene() {
    outer = new PIXI.Container(); app.stage.addChild(outer);
    hallBg = new PIXI.Sprite(PIXI.Texture.EMPTY); hallFx = new PIXI.Container(); outer.addChild(hallBg, hallFx);
    const fly = glowTexture(14, [[0, 'rgba(255,240,170,1)'], [0.4, 'rgba(255,210,110,.6)'], [1, 'rgba(255,200,80,0)']]);
    for (let i = 0; i < 26; i++) { const d = new PIXI.Sprite(fly); d.anchor.set(0.5); d.blendMode = 'add'; d.ph = Math.random() * 9; d.u = Math.random(); d.v = Math.random(); d.sp = 0.006 + Math.random() * 0.012; d.scale.set(0.4 + Math.random() * 0.6); hallFx.addChild(d); motes.push(d); }
    scene = new PIXI.Container(); app.stage.addChild(scene);

    hostC = new PIXI.Container();
    hrig = new window.LZRig(PIXI, window.LS_RIG, {
      idle: tex['explorer-idle'], blink: tex['explorer-blink'], hop: tex['explorer-hop'], win: tex['explorer-win'], fright: tex['explorer-fright'],
      wave: tex['explorer-wave'], pump: tex['explorer-pump'], peek: tex['explorer-peek'],
    }, { grid: 22 });
    pile = new PIXI.Sprite(tex.treasure); pile.anchor.set(0.5, 0.92); pile.visible = false;
    hostC.addChild(pile, hrig.view);
    // his clips (figure 452 rig px tall in the idle drawing, feet 14.9 rig px right of the rig origin)
    flipH = makeFlip(hostC, hrig, () => hrig.view.scale.x, {
      figRig: 452, feetDx: 14.9, clips: ANIMS, vchar: 'explorer',
      map: { idle: 'explorer-idle', wave: 'explorer-sendoff', win: 'explorer-cheer', winLoop: null, pump: 'explorer-cheer', fright: 'explorer-fright', peek: 'explorer-peek' },
    });
    hrig.play('idle', { loop: true });
    topFx = new PIXI.Container(); app.stage.addChild(topFx);
    cam = new PIXI.Container(); scene.addChild(cam);
    // The background layer moves at half the speed of the bridge (parallax). Everything that belongs to the painting
    // lives in it, in its own coordinates (0, 0 = the centre of the painting = scene 800, 450).
    bgLayer = new PIXI.Container(); bgLayer.x = W / 2; bgLayer.y = H / 2; cam.addChild(bgLayer);
    bg = new PIXI.Sprite(tex['bg-temple']); bg.width = W * 1.06; bg.height = H * 1.06; bg.anchor.set(0.5);
    bgV = new PIXI.Sprite(tex['bg-vault']); bgV.width = W * 1.06; bgV.height = H * 1.06; bgV.anchor.set(0.5); bgV.visible = false;
    templeFx = new PIXI.Container();
    bgLayer.addChild(bg, bgV, templeFx);
    const P = (x, y) => [x - W / 2, y - H / 2];
    // light rays from the golden sun, swaying slowly
    const beam = (() => { const c = document.createElement('canvas'); c.width = 80; c.height = 600; const g = c.getContext('2d');
      const h = g.createLinearGradient(0, 0, 80, 0); h.addColorStop(0, 'rgba(255,255,255,0)'); h.addColorStop(0.5, 'rgba(255,255,255,1)'); h.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = h; g.fillRect(0, 0, 80, 600); g.globalCompositeOperation = 'destination-in';
      const v = g.createLinearGradient(0, 0, 0, 600); v.addColorStop(0, 'rgba(0,0,0,1)'); v.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = v; g.fillRect(0, 0, 80, 600);
      return PIXI.Texture.from(c); })();
    [-0.62, -0.31, 0, 0.31, 0.62].forEach((a, i) => {
      const r = new PIXI.Sprite(beam); r.anchor.set(0.5, 0); [r.x, r.y] = P(SUN[0], SUN[1]); r.base = a; r.rotation = a; r.ph = i * 1.7;
      r.scale.set(1.5 + (i % 2) * 0.6, 1.5); r.blendMode = 'add'; r.tint = 0xFFE2A0; r.alpha = 0.08; templeFx.addChild(r); rays.push(r);
    });
    // far fog banks behind the bridge
    const fogTex = glowTexture(128, [[0, 'rgba(140,210,175,.28)'], [0.6, 'rgba(70,150,120,.09)'], [1, 'rgba(40,110,90,0)']]);
    for (let i = 0; i < 6; i++) { const m = new PIXI.Sprite(fogTex); m.anchor.set(0.5); m.x = -900 + i * 330; m.y = 60 + (i % 2) * 70; m.scale.set(5, 1.5); m.alpha = 0.35; m.vx = 5 + i; templeFx.addChild(m); backFog.push(m); }
    // water streaks running down the painted waterfalls
    const streak = (() => { const c = document.createElement('canvas'); c.width = 4; c.height = 48; const g = c.getContext('2d');
      const v = g.createLinearGradient(0, 0, 0, 48); v.addColorStop(0, 'rgba(255,255,255,0)'); v.addColorStop(0.5, 'rgba(255,255,255,1)'); v.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = v; g.fillRect(0, 0, 4, 48); return PIXI.Texture.from(c); })();
    for (const [cx, y0, y1, w] of FALLS) for (let k = 0; k < 16; k++) {
      const d = new PIXI.Sprite(streak); d.anchor.set(0.5); d.blendMode = 'add'; d.tint = 0xCFFFE8;
      d.fx = cx - W / 2 - w / 2; d.fw = w; d.y0 = y0 - H / 2; d.y1 = y1 - H / 2; d.x = d.fx + Math.random() * w; d.y = d.y0 + Math.random() * (d.y1 - d.y0);
      d.vy = 220 + Math.random() * 160; d.alpha = 0.18 + Math.random() * 0.22; d.scale.set(0.8 + Math.random() * 0.8, 0.8 + Math.random() * 0.9); templeFx.addChild(d); drops.push(d);
    }
    // braziers: a flickering glow and embers rising from the fire
    const fire = glowTexture(128, [[0, 'rgba(255,170,80,.75)'], [0.35, 'rgba(255,106,42,.28)'], [1, 'rgba(255,106,42,0)']]);
    const ember = glowTexture(10, [[0, 'rgba(255,230,170,1)'], [0.5, 'rgba(255,140,60,.8)'], [1, 'rgba(255,90,30,0)']]);
    for (const [x, y] of BRAZIERS) {
      const g = new PIXI.Sprite(fire); g.anchor.set(0.5); [g.x, g.y] = P(x, y + 40); g.blendMode = 'add'; g.scale.set(1.6); templeFx.addChild(g); torches.push(g);
      for (let k = 0; k < 14; k++) { const e = new PIXI.Sprite(ember); e.anchor.set(0.5); e.blendMode = 'add'; e.ox = x - W / 2; e.oy = y - H / 2; resetEmber(e, true); templeFx.addChild(e); embers.push(e); }
    }
    // the middle layer: two pillars with waterfalls at the edges, between the far wall and the bridge (parallax)
    bgMid = new PIXI.Sprite(tex['bg-mid']); bgMid.anchor.set(0.5); bgMid.width = W * 1.12; bgMid.scale.y = bgMid.scale.x; bgMid.x = W / 2; bgMid.y = H / 2; cam.addChild(bgMid);
    // the cliffs at both ends of the bridge: part of the scene, so there is always ground under his feet
    ground = new PIXI.Container(); cam.addChild(ground);
    cliffL = new PIXI.Sprite(tex['cliff-left']); cliffL.anchor.set(1, CLIFF_TOP); cliffL.scale.set(0.66); cliffL.x = X0 + 10; cliffL.y = TOP - 2;
    cliffR = new PIXI.Sprite(tex['cliff-right']); cliffR.anchor.set(0, CLIFF_TOP); cliffR.scale.set(0.66); cliffR.x = X1 - 10; cliffR.y = TOP - 2;
    ground.addChild(cliffL, cliffR);
    world = new PIXI.Container(); cam.addChild(world);
    vaultWorld = new PIXI.Container(); vaultWorld.visible = false; cam.addChild(vaultWorld);
    // the vault has a ledge too: the explorer stands on it at the start of the golden bridge (he floated in the air before, 2026-11-25)
    vLedge = new PIXI.Sprite(tex['cliff-left']); vLedge.anchor.set(1, CLIFF_TOP); vLedge.scale.set(0.7); vLedge.x = GX0 - GW / 2 + 12; vLedge.y = GTOP - 2;
    vaultWorld.addChild(vLedge);
    // the idol on its ledge, with a slow breathing glow (standard 5.3: valuable items pulse x1.3 in 1200 ms)
    idolGlow = new PIXI.Sprite(glowTexture(160, [[0, 'rgba(120,255,180,.55)'], [0.5, 'rgba(47,224,140,.18)'], [1, 'rgba(47,224,140,0)']]));
    idolGlow.anchor.set(0.5); idolGlow.x = IDOL_X; idolGlow.y = TOP - 110; idolGlow.blendMode = 'add'; idolGlow.scale.set(1.5);
    idolS = new PIXI.Sprite(tex.idol); idolS.anchor.set(0.5, 1); idolS.scale.set(190 / idolS.texture.height); idolS.x = IDOL_X; idolS.y = TOP + 6;
    world.addChild(idolGlow, idolS);
    flagS = new PIXI.Sprite(tex.flag); flagS.anchor.set(0.1, 1); flagS.scale.set(FLAG_H / flagS.texture.height);
    world.addChild(flagS);
    // the monkey, who hops on the tiles
    rig = new window.LZRig(PIXI, window.LS_MONKEY_RIG, {
      idle: tex['monkey-idle'], blink: tex['monkey-blink'], hop: tex['monkey-hop'], win: tex['monkey-win'], fright: tex['monkey-fright'],
    }, { grid: 16 });
    monkey = new PIXI.Container(); monkey.addChild(rig.view); rig.view.scale.set(RIG_S);
    // his clips (figure 485 rig px tall in the idle drawing, feet 9.8 rig px left of the rig origin)
    flipM = makeFlip(monkey, rig, () => rig.view.scale.x, {
      figRig: 485, feetDx: -9.8, clips: ANIMS, vchar: 'monkey',
      map: { idle: 'monkey-idle', win: 'monkey-cheer', winLoop: null, fright: 'monkey-fright' },
    });
    world.addChild(hostC, monkey);                         // the explorer stands behind his monkey
    hostC.x = HOST_X; hostC.y = TOP; HS = 0.58; hrig.view.scale.set(HS);
    rig.play('idle', { loop: true });
    rig.on('event', (name) => { if (name === 'land') sfx('land'); });
    beanie = new PIXI.Sprite(tex.beanie); beanie.anchor.set(0.5); beanie.visible = false; world.addChild(beanie);
    fxLayer = new PIXI.Container(); cam.addChild(fxLayer);
    follow = new PIXI.Container(); cam.addChild(follow);           // mist and dust: they stay around the camera, even on the long vault bridge
    // mist puffs drifting under the bridge
    const puff = glowTexture(128, [[0, 'rgba(120,200,160,.30)'], [0.6, 'rgba(60,140,110,.10)'], [1, 'rgba(40,110,90,0)']]);
    for (let i = 0; i < 14; i++) {
      const m = new PIXI.Sprite(puff); m.anchor.set(0.5); m.x = (i / 14) * W * 1.2 - 80; m.y = 640 + (i % 3) * 70;
      m.scale.set(3 + (i % 4) * 0.8, 1.4 + (i % 2) * 0.5); m.alpha = 0.5; m.vx = 6 + (i % 5) * 3; m.ph = i * 0.9; follow.addChild(m); mist.push(m);
    }
    // gold dust motes rising (pool, no allocation in play)
    const mote = glowTexture(16, [[0, 'rgba(255,230,150,1)'], [1, 'rgba(255,200,80,0)']]);
    for (let i = 0; i < 36; i++) { const d = new PIXI.Sprite(mote); d.anchor.set(0.5); d.blendMode = 'add'; resetMote(d, true); follow.addChild(d); dust.push(d); }
    // spark / debris pool for traps and wins
    const spark = glowTexture(12, [[0, 'rgba(255,240,200,1)'], [0.35, 'rgba(255,200,90,.85)'], [1, 'rgba(255,170,50,0)']]);
    for (let i = 0; i < 90; i++) { const s = new PIXI.Sprite(spark); s.anchor.set(0.5); s.visible = false; s.blendMode = 'add'; fxLayer.addChild(s); sparks.push(s); }
    for (let i = 0; i < 8; i++) { const c = new PIXI.Sprite(tex.coin); c.anchor.set(0.5); c.visible = false; topFx.addChild(c); coins.push(c); }
    fore = new PIXI.Container(); cam.addChild(fore);
    // the front layer: leaves and gold lanterns in the top corners, close to the camera; each half sways on its own
    for (const side of [0, 1]) {
      const v = new PIXI.Sprite(tex['bg-front']); v.anchor.set(side ? 1 : 0, 0); v.width = W * 0.78; v.scale.y = v.scale.x; v.x = side ? W + 60 : -60; v.y = -150;   // the lanterns end above the heads v.ph = side * 2.1;
      const m = new PIXI.Graphics().rect(side ? W / 2 : -200, -200, W / 2 + 200, H + 400).fill(0xffffff); v.mask = m; fore.addChild(m, v); vines.push(v);
    }
    hud = new PIXI.Container(); scene.addChild(hud);
  }
  // a flipbook from a keyed video atlas (window.LS_ANIM, built by tools/build-assets.mjs)
  async function flipbook(name) {
    const m = (window.LS_ANIM || {})[name]; if (!m) return null;
    const img = new Image(); img.src = m.src; await img.decode();
    const tx = [];
    for (let n = 0; n < m.frames; n++) {
      const cv = document.createElement('canvas'); cv.width = m.fw; cv.height = m.fh;
      cv.getContext('2d').drawImage(img, (n % m.cols) * m.fw, Math.floor(n / m.cols) * m.fh, m.fw, m.fh, 0, 0, m.fw, m.fh);
      tx.push(PIXI.Texture.from(cv));
    }
    return { ...m, tx };
  }
  let FRAME_TEX = [], hostIdle = null, hostVid = null, vidT = 0, vidOn = false;

  /* ---------------- natural motion from video (2026-11-25) ----------------
   * Each character has a set of AI video clips (art/prod/anim, tools/build-anim.mjs). Every clip starts and ends on the
   * character's rest pose, so a clip can begin and end without a jump. The rigs still run underneath (they own the
   * timing the round code already uses); a Flip shows the clip that belongs to what the rig is doing and hides the rig.
   *   map: rig move -> clip; 'idle' loops; an action plays once and then hands back to idle (an idle request while an
   *   action plays waits for it); a move with no clip shows the rig drawing again.
   * Scale and place: the clip's figure height (figH, frame px) is matched to the drawing's (figRig, rig px), and the
   * clip's feet (anchor) go where the drawing's feet are (feetDx from the rig origin). */
  /* Video clips (2026-11-25, the user: the 10 fps frame atlases were not sharp enough). tools/build-video.mjs packs each
   * clip as an H.264 MP4: colour on top, alpha as grey below, 24 fps, every clip of a character in one shared frame
   * (window.LS_VID.chars: size, feet point ax/ay, figure height fig). Each character has a small WebGL canvas that
   * unpacks the current video frame (colour x alpha), and the Pixi sprite shows that canvas. A clip that is not loaded,
   * or a page opened from disk (file:// video cannot be read by WebGL), uses the frame atlas of the same clip instead. */
  const VIDMETA = window.LS_VID || { chars: {}, clips: {} }, VIDS = {};
  let vidBlocked = location.protocol === 'file:' || !Object.keys(VIDMETA.clips).length;
  function vidLoad(n) {
    const m = VIDMETA.clips[n]; if (vidBlocked || !m || VIDS[n]) return;
    const v = document.createElement('video');
    v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.preload = 'auto'; v.loop = !!m.loop;
    v.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;opacity:0;pointer-events:none';
    v.addEventListener('error', () => { v.failed = true; });
    v.src = m.src; document.body.append(v); v.load(); VIDS[n] = v;
  }
  const vidOK = n => !vidBlocked && VIDS[n] && !VIDS[n].failed && VIDS[n].readyState >= 2;
  function vidCanvas(cname) {
    const C = VIDMETA.chars[cname]; if (!C) return null;
    const cv = document.createElement('canvas'); cv.width = C.w; cv.height = C.h;
    const gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: true }); if (!gl) return null;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
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
    gl.viewport(0, 0, C.w, C.h); gl.clearColor(0, 0, 0, 0);
    const tex = PIXI.Texture.from(cv);
    return {
      C, tex,
      // false when the browser refuses this video in WebGL (then every clip uses its atlas from now on)
      draw(v) {
        try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, v); }
        catch (e) { vidBlocked = true; return false; }
        gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); tex.source.update(); return true;
      },
    };
  }

  function makeFlip(parent, rigObj, viewScale, { figRig, feetDx, map, clips, vchar }) {
    const sp = new PIXI.Sprite(PIXI.Texture.EMPTY); sp.visible = false; parent.addChild(sp);
    const F = { sp, cur: null, name: '', t: 0, loop: false, queue: null, manual: false, on: false, vid: null };
    const VC = vchar ? vidCanvas(vchar) : null;
    const scaleOf = c => c.video ? figRig / VC.C.fig : c.figH ? figRig / c.figH : c.videoPxPerFramePx / 2;
    F.has = n => !!clips[n] || vidOK(n);
    const stopVid = () => { if (F.vid) { F.vid.pause(); F.vid = null; } };
    F.start = (n, loop) => {
      if (VC && vidOK(n)) {
        // video: from its first frame (every clip starts on the rest pose)
        stopVid(); const v = VIDS[n];
        F.cur = { video: true, dur: VIDMETA.clips[n].dur }; F.name = n; F.t = 0; F.loop = loop; F.queue = null; F.manual = false; F.on = true;
        v.loop = loop; v.playbackRate = Math.max(0.5, Math.min(4, 1 / speedFn()));
        try { v.currentTime = 0; } catch (e) {}
        v.play().catch(() => {}); F.vid = v; F.fresh = true;
        sp.texture = VC.tex; sp.anchor.set(VC.C.ax / VC.C.w, VC.C.ay / VC.C.h);
        return true;
      }
      const c = clips[n]; if (!c) return false;
      stopVid();
      F.cur = c; F.name = n; F.t = 0; F.loop = loop; F.queue = null; F.manual = false; F.on = true;
      sp.anchor.set(c.anchor[0] / c.fw, c.anchor[1] / c.fh); sp.texture = c.tx[0];
      return true;
    };
    F.stop = () => { stopVid(); F.on = false; F.cur = null; F.name = ''; F.manual = false; };
    // the rig was told to play a move: pick the clip for it
    F.onRig = (move, opts = {}) => {
      if (F.manual && !(map[move])) return;                    // a hop drives its frames itself; only an action (a fright, a cheer) cuts in
      const n = map[move];
      if (n === undefined) { if (!['blink', 'crouch', 'land', 'hop'].includes(move)) F.stop(); return; }
      if (n === null) return;                                  // keep whatever plays now
      const isIdle = move === 'idle';
      if (isIdle && F.on && F.cur && !F.loop && F.name !== n) { F.queue = n; return; }   // let the action finish
      if (F.on && F.name === n && (F.loop || move === 'winLoop')) return;               // already playing it
      F.start(n, isIdle);
    };
    // a hop (always a frame atlas: the round code drives it frame by frame), k = 0..1 within each part of the jump
    // begin = the first call of a hop; later calls only drive the frames while that hop still owns the Flip (a fright
    // or a cheer that cut in must not be pushed out by the end of the landing, 2026-11-25)
    F.frameAt = (n, sec, begin) => {
      const c = clips[n]; if (!c) return;
      if (begin) { stopVid(); F.cur = c; F.name = n; F.loop = false; F.queue = null; F.on = true; sp.anchor.set(c.anchor[0] / c.fw, c.anchor[1] / c.fh); }
      else if (!F.manual || F.name !== n) return;
      F.manual = true; F.t = sec; sp.texture = c.tx[Math.max(0, Math.min(c.frames - 1, Math.round(sec * c.fps)))];
    };
    F.release = () => { F.manual = false; const n = map.idle; if (n && F.has(n)) F.start(n, true); else F.stop(); };
    const next = () => { const nx = F.queue || map.idle; if (nx && F.has(nx)) F.start(nx, true); else F.stop(); };
    F.update = (s, speed) => {
      if (F.on && F.cur && F.cur.video && F.vid) {
        const v = F.vid;
        v.playbackRate = Math.max(0.5, Math.min(4, 1 / speed));
        if (!F.loop && (v.ended || v.currentTime >= F.cur.dur - 0.03)) next();
        else if (v.readyState >= 2 && !v.seeking && (F.fresh || !v.paused)) {
          // the first frame of a new clip only once the seek to 0 is done (until then the sprite keeps the last frame)
          if (!VC.draw(v)) { const n = F.name; F.stop(); F.start(n, F.loop); } else F.fresh = false;
        }
      } else if (F.on && F.cur && !F.manual) {
        F.t += s / speed; const c = F.cur, i = Math.floor(F.t * c.fps);
        if (i >= c.frames) { if (F.loop) F.t = F.t % (c.frames / c.fps); else next(); }
        if (F.cur && !F.cur.video) sp.texture = F.cur.tx[Math.min(F.cur.frames - 1, Math.floor(F.t * F.cur.fps))];
      }
      const want = F.on && F.cur ? 1 : 0, k = Math.min(1, s * 18);
      sp.alpha += (want - sp.alpha) * k; sp.visible = sp.alpha > 0.01; rigObj.view.alpha = 1 - sp.alpha;
      if (F.cur) { const v = viewScale(); sp.scale.set(v * scaleOf(F.cur)); sp.x = rigObj.view.x + feetDx * v; sp.y = rigObj.view.y; }
    };
    // the rig keeps its own timing; every move it is told to play is also offered to the Flip
    const play = rigObj.play.bind(rigObj);
    rigObj.play = (move, opts) => { const r = play(move, opts); F.onRig(move, opts || {}); return r; };
    return F;
  }
  let flipH = null, flipM = null; const ANIMS = {};
  async function sliceFrame() {
    const img = new Image(); img.src = ART['board-frame']; await img.decode();
    const w = img.naturalWidth, h = img.naturalHeight, c = FR.c, xs = [0, c, w - c, w], ys = [0, c, h - c, h];
    FRAME_TEX = [];
    for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) {
      if (i === 1 && j === 1) continue;                   // the middle is the opening
      const cv = document.createElement('canvas'); cv.width = xs[i + 1] - xs[i]; cv.height = ys[j + 1] - ys[j];
      cv.getContext('2d').drawImage(img, xs[i], ys[j], cv.width, cv.height, 0, 0, cv.width, cv.height);
      const t = PIXI.Texture.from(cv); t.ij = [i, j]; FRAME_TEX.push(t);
    }
    FR.w = w; FR.h = h;
  }
  function placeFrame(r, band) {
    const k = band / (FR.l - FR.edge);                    // the gold band (without the image's empty margin) is band px wide
    const ox = r.x - FR.l * k, oy = r.y - FR.t * k, ow = r.w + (FR.l + FR.r) * k, oh = r.h + (FR.t + FR.b) * k, c = FR.c * k;
    const xs = [ox, ox + c, ox + ow - c, ox + ow], ys = [oy, oy + c, oy + oh - c, oy + oh];
    framePieces.forEach(p => { const [i, j] = p.texture.ij; p.x = xs[i]; p.y = ys[j]; p.width = xs[i + 1] - xs[i]; p.height = ys[j + 1] - ys[j]; });
  }
  function resetEmber(e, anywhere) {
    e.x = e.ox + (Math.random() - 0.5) * 50; e.y = e.oy + (anywhere ? -Math.random() * 160 : 0);
    e.vy = -(40 + Math.random() * 60); e.vx = (Math.random() - 0.5) * 20; e.life = e.max = 1.4 + Math.random() * 1.8; e.scale.set(0.25 + Math.random() * 0.45);
  }
  function resetMote(d, anywhere) {
    d.x = Math.random() * W; d.y = anywhere ? Math.random() * H : H + 20; d.vy = -(8 + Math.random() * 18); d.vx = (Math.random() - 0.5) * 6;
    d.scale.set(0.3 + Math.random() * 0.5); d.alpha = 0.08 + Math.random() * 0.25; d.base = d.alpha; d.tint = 0xFFD98A;
  }
  function burst(x, y, n, { color = 0xFFD98A, speed = 420, life = 900, grav = 900, size = 0.8 } = {}) {
    let k = 0;
    for (const s of sparks) {
      if (s.visible) continue;
      const a = Math.random() * Math.PI * 2, v = speed * (0.35 + Math.random() * 0.65);
      s.visible = true; s.x = x; s.y = y; s.vx = Math.cos(a) * v; s.vy = Math.sin(a) * v - speed * 0.5; s.life = s.max = life * (0.6 + Math.random() * 0.4);
      s.g = grav; s.tint = color; s.scale.set(size * (0.5 + Math.random() * 0.7)); s.alpha = 0.9;
      if (++k >= n) break;
    }
  }
  function shake(amp) { if (api.reduced) return; shakeAmp = Math.max(shakeAmp, amp); shakeT = 0; }

  /* ---------------- camera ---------------- */
  let camState = { x: W / 2, y: H / 2, z: 1 };
  let VW = W, VH = H;                              // the visible part of the scene (smaller than W on a portrait phone)
  const narrow = () => VW < W * 0.8;
  // the resting view: the whole scene when it fits; otherwise aligned to the start of the bridge, so the explorer is always in it
const homeCam = () => {
    // the board is a window now, smaller than the screen: rest a little closer, on the bridge from the cliff to the idol
    if (VW >= W * 0.98) return { x: W / 2, y: H / 2, z: 1 };
    const z = narrow() ? 1.3 : 1;
    return { x: HOST_X - 90 + VW / 2 / z, y: narrow() ? TOP - 70 : H / 2, z };
  };
  const lead = () => Math.min(260, VW * 0.2);      // how far ahead of the explorer the camera looks
  function applyCam() {
    const z = camState.z, hw = VW / 2 / z, hh = VH / 2 / z;
    const maxX = inVault && gtiles.length ? gX(gtiles.length - 1) + GW : W;   // the vault bridge is longer than one screen
    const cx = Math.max(hw, Math.min(maxX - hw, camState.x)), cy = Math.max(hh, Math.min(H - hh, camState.y));
    cam.scale.set(z); cam.x = VW / 2 - cx * z; cam.y = VH / 2 - cy * z;
    if (inVault) {
      // the vault backdrop travels with the camera and only drifts a little, so it never runs out
      bgLayer.x = cx + Math.max(-50, Math.min(50, -(cx - W / 2) * 0.02)); bgLayer.y = cy;
      follow.x = cx - VW / 2; follow.y = cy - VH / 2;
    } else {
      // parallax: the painted background moves half as much as the bridge
      const px = (cx - W / 2) * 0.5, py = (cy - H / 2) * 0.5;
      bgLayer.x = W / 2 + px; bgLayer.y = H / 2 + py;
      follow.x = 0; follow.y = 0;
      fore.x = -(cx - W / 2) * 0.35; fore.y = -(cy - H / 2) * 0.2;      // the foreground moves faster than the bridge
      bgMid.x = W / 2 + (cx - W / 2) * 0.22; bgMid.y = H / 2 + (cy - H / 2) * 0.22;   // the pillars move a little slower than the bridge
    }
  }
  function camTo(x, y, z, ms) {
    if (!narrow() && !inVault) { const h = homeCam(); x = h.x + (x - h.x) * 0.1; y = h.y + (y - h.y) * 0.1; z = h.z + (z - 1) * 0.12; }
    if (api.reduced) z = 1; return tween(camState, { x, y, z }, ms, 'inOutSine');
  }

  /* ---------------- the frame loop ---------------- */
  function frame(tk) {
    const dt = tk.deltaMS, s = dt / 1000, now = performance.now() / 1000;
    tickTweens(dt);
    cfTick(s);
    rig.timeScale = 1 / speedFn();
    rig.update(s);
    hrig.timeScale = 1 / speedFn(); hrig.update(s);
    // the explorer at rest plays his idle clip; any other move (wave, peek, pump, fright, win) is a drawing, with a short cross-fade
    flipH.update(s, speedFn()); flipM.update(s, speedFn());
    motes.forEach(d => { d.v -= d.sp * s; if (d.v < -0.05) { d.v = 1.05; d.u = Math.random(); } d.x = (d.u + Math.sin(now * 0.7 + d.ph) * 0.02) * full.clientWidth; d.y = d.v * full.clientHeight; d.alpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(now * 2.3 + d.ph)); });
    torches.forEach((g, i) => { g.alpha = 0.75 + Math.sin(now * 11 + i * 3) * 0.08 + Math.sin(now * 23 + i) * 0.06; g.scale.set(1.6 + Math.sin(now * 7 + i) * 0.05); });
    idolGlow.scale.set(1.5 * (1 + 0.15 * (0.5 + 0.5 * Math.sin(now * Math.PI * 2 / 1.2)))); idolGlow.rotation = now * Math.PI * 2 / 4;
    mist.forEach(m => { m.x += m.vx * s; if (m.x > W + 260) m.x = -260; m.alpha = 0.42 + Math.sin(now * 0.5 + m.ph) * 0.12; });
    rays.forEach(r => { r.rotation = r.base + Math.sin(now * 0.22 + r.ph) * 0.045; r.alpha = 0.05 + 0.06 * (0.5 + 0.5 * Math.sin(now * 0.4 + r.ph)); });
    backFog.forEach(m => { m.x += m.vx * s; if (m.x > 1000) m.x = -1000; });
    drops.forEach(d => { d.y += d.vy * s; if (d.y > d.y1) { d.y = d.y0; d.x = d.fx + Math.random() * d.fw; } });
    embers.forEach(e => { e.life -= s; e.x += (e.vx + Math.sin(now * 3 + e.oy + e.life) * 12) * s; e.y += e.vy * s; e.alpha = Math.max(0, Math.min(1, e.life / e.max * 2)) * 0.9; if (e.life <= 0) resetEmber(e, false); });
    vines.forEach(v => { v.rotation = (v.anchor.x ? -1 : 1) * Math.sin(now * 0.6 + v.ph) * 0.006; });
    // the treasure pile follows the top of his backpack in each drawing
    const att = hrig.slotState && hrig.slotState[0] && hrig.slotState[0].attachment, pk = PACK[att];
    if (pileLevel > 0 && pk) { pile.visible = true; pile.x = pk[0] * HS; pile.y = pk[1] * HS + 8 * HS; } else pile.visible = false;
    // the idol glows stronger as he gets closer
    if (!inVault) { const prox = Math.max(0, Math.min(1, (monkey.x - X0) / (X1 - X0))); idolGlow.alpha = 0.55 + 0.45 * prox; idolGlow.scale.set(idolGlow.scale.x * (1 + 0.45 * prox)); }
    // now and then, while waiting, he waves at the player
    if (api && !api.busy && !inVault && !skipBig) { idleT += s; if (idleT > nextWave) { idleT = 0; nextWave = 18 + Math.random() * 14; if (hrig.current(0) === 'idle') hrig.play('wave', { mix: 0.12, fadeSwap: 0.06, then: 'idle', thenMix: 0.2 }); } } else idleT = 0;
    dust.forEach(d => { d.x += d.vx * s; d.y += d.vy * s; d.alpha = d.base * (0.7 + 0.3 * Math.sin(now * 3 + d.x)); if (d.y < -20) resetMote(d, false); });
    sparks.forEach(p => {
      if (!p.visible) return;
      p.life -= dt; if (p.life <= 0) { p.visible = false; return; }
      p.vy += p.g * s; p.x += p.vx * s; p.y += p.vy * s; p.alpha = Math.min(0.9, p.life / p.max * 1.5);
    });
    // breathing of the tiles that are still to come (standard 5.3: nothing stands still)
    // + the tile effects: squash on landing, the gold glow easing to its resting level, the gleam crossing the tile
    const tileTick = (t, i) => {
      if (!t.falling) t.y = t.home.y + Math.sin(now * 2 + i * 0.7) * 1.2 + (t.dip || 0) + (t.lift || 0);
      const sx = t.baseS; if (sx) { t.sprite.scale.set(sx * (2 - t.sq), sx * t.sq); t.lit.scale.copyFrom(t.sprite.scale); t.shineS.scale.copyFrom(t.sprite.scale); }
      t.glow += (t.glowTo - t.glow) * Math.min(1, s * 3.2);
      t.lit.alpha = Math.max(0, t.glow) * (0.85 + 0.15 * Math.sin(now * 3 + i));
      if (t.shineT >= 0) {
        t.shineT += dt / speedFn(); const p = t.shineT / t.shineD;
        if (p >= 1) { t.shineT = -1; t.shineS.visible = false; }
        else { const fx = tileFx[t.texName]; t.shineS.visible = true; t.shineS.texture = fx.shine[Math.min(SHINE_N - 1, Math.floor(p * SHINE_N))]; t.shineS.alpha = 0.55 * Math.sin(p * Math.PI); }
      }
    };
    tiles.forEach(tileTick); gtiles.forEach(tileTick);
    // while waiting, now and then a gleam runs along the bridge from the start to the idol
    if (api && !api.busy && !inVault) { shimmerT += s; if (shimmerT > 5.5) { shimmerT = 0; tiles.forEach((t, i) => setTimeout(() => shineTile(t, 520), i * 70)); } } else shimmerT = 0;
    // shake: two sines, 18 Hz, exponential decay 12 (standard 5.4); the background moves 1.3x, the bridge 0.8x
    if (shakeAmp > 0.01) {
      shakeT += s; const a = 30 * shakeAmp * Math.exp(-12 * shakeT);
      const ox = Math.sin(shakeT * 2 * Math.PI * 18) * a, oy = Math.sin(shakeT * 2 * Math.PI * 18 * 1.3 + 1) * a * 0.6;
      applyCam(); cam.x += ox * 0.8; cam.y += oy * 0.8; bgLayer.x += ox * 1.3 / cam.scale.x; bgLayer.y += oy * 1.3 / cam.scale.y;
      if (a < 0.2) shakeAmp = 0;
    } else applyCam();
  }

  /* ---------------- sound: events go to sound-engine.js, tuned in sound-config.js ---------------- */
  const SND = window.LSSound;
  function sfx(name, k = 0) {
    const map = { land: 'land', hop: 'hop', step: 'tileWin', flag: 'flag', crack: 'crack', gold: 'gold', snap: 'snap', idol: 'idol' };
    if (map[name]) SND.emit(map[name], k);
    if (name === 'crack') SND.emit('fall');
    if (name === 'snap') SND.emit('rope');
  }
  function musicFor(ctx, win) {                    // excitement = win / play amount, thresholds from the math (3.3)
    const m = MODE[ctx.mode].tuning.music;
    SND.setLevel(win / 100 >= m.p95 ? 2 : 1);
  }

  /* ---------------- moves ---------------- */
  const standY = () => TOP;
  // scared: the leap back after a trap keeps the fright drawing (bare head), because his beanie is still flying away;
  // the hop and idle drawings wear it, so swapping to them here showed two beanies at once
  async function hopTo(x, y, { height = 70, ms = 300, scared = false } = {}) {
    // a body in flight, not a sticker on a curve (2026-11-25): he sinks before the jump, stretches and leans into the
    // arc in the air (the lean follows the arc's slope), and squashes on landing. Scaled around his feet (monkey's origin).
    const dir = Math.sign(x - monkey.x) || 1;
    stopTweens(monkey.scale); monkey.scale.set(1, 1); monkey.rotation = 0;
    if (!scared && flipM && flipM.has('monkey-hop')) {
      // monkey-hop clip (24 fps): crouch 0.08-0.37 s, in the air 0.38-0.83 s, landing 0.83-1.04 s
      const H = 'monkey-hop', o = { t: 0 }, x0 = monkey.x, y0 = monkey.y, lift = height * 0.25;
      rig.play('crouch', { mix: 0.05 });
      flipM.frameAt(H, 0.08, true);
      await tween(o, { t: 1 }, 120, 'lin', k => flipM.frameAt(H, 0.08 + 0.29 * k));
      sfx('hop'); rig.play('hop', { mix: 0.04, fadeSwap: 0.05 }); o.t = 0;
      await tween(o, { t: 1 }, ms * 1.15, 'lin', k => {
        flipM.frameAt(H, 0.38 + 0.45 * k);
        monkey.x = x0 + (x - x0) * k; monkey.y = y0 + (y - y0) * k - Math.sin(k * Math.PI) * lift;
      });
      monkey.x = x; monkey.y = y; o.t = 0;
      rig.play('land', { mix: 0.03, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
      tween(o, { t: 1 }, 170, 'lin', k => flipM.frameAt(H, 0.83 + 0.21 * k)).then(() => { if (flipM.manual && flipM.t >= 1.03) flipM.release(); });
      return;
    }
    if (!scared) { rig.play('crouch', { mix: 0.05 }); tween(monkey.scale, { x: 1.08, y: 0.9 }, 100, 'outQuad'); await wait(110); }
    sfx('hop');
    if (!scared) rig.play('hop', { mix: 0.04, fadeSwap: 0.05 });
    const x0 = monkey.x, y0 = monkey.y, o = { t: 0 };
    await tween(o, { t: 1 }, ms, 'lin', k => {
      monkey.x = x0 + (x - x0) * k; monkey.y = y0 + (y - y0) * k - Math.sin(k * Math.PI) * height;
      const up = Math.cos(k * Math.PI);                       // +1 rising, -1 falling
      monkey.rotation = scared ? -dir * 0.18 * Math.sin(k * Math.PI) : dir * 0.11 * up * Math.sin(Math.min(1, k * 3) * Math.PI / 2);
      const st = scared ? 0 : 0.09 * Math.abs(up) * (k < 0.15 ? k / 0.15 : 1);
      monkey.scale.set(1 - st * 0.6, 1 + st);
    });
    monkey.rotation = 0;
    monkey.scale.set(1.14, 0.84); tween(monkey.scale, { x: 1, y: 1 }, 300, 'outBack');
    if (!scared) rig.play('land', { mix: 0.03, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
  }
  const RIG_S_NOW = () => rig.view.scale.x;
  function setPile(level) {
    pileLevel = level;
    if (level <= 0) { pile.visible = false; return; }
    const target = (0.36 + 0.08 * Math.min(level, 6)) * (150 / pile.texture.width) * HS;
    stopTweens(pile.scale); tween(pile.scale, { x: target * 1.18, y: target * 1.18 }, 90, 'outQuad').then(() => tween(pile.scale, { x: target, y: target }, 260, 'outBack'));
  }
  // a coin flies from the tile, out of the frame, into the explorer's backpack (every tile from the flag on)
  function coinTo(fromX, fromY, onArrive, worldC = world) {
    const c = coins.find(k => !k.visible); if (!c) { onArrive && onArrive(); return; }
    const a = worldC.toGlobal({ x: fromX, y: fromY }), pk = PACK.idle, b = hostC.toGlobal({ x: pk[0] * HS, y: pk[1] * HS - 6 * HS });
    const tx = b.x, ty = b.y;
    if (!hostC.parent || !hostC.parent.visible || tx < -40) { burst(fromX, fromY - 20, 8, { color: GOLD, speed: 220, life: 500, grav: 500, size: 0.7 }); onArrive && onArrive(); return; }
    const size = Math.max(14, WIN.h * 0.035) / c.texture.height, lift = Math.max(60, Math.abs(tx - a.x) * 0.3);
    c.visible = true; c.alpha = 1; c.x = a.x; c.y = a.y; c.scale.set(size);
    const o = { t: 0 };
    tween(o, { t: 1 }, 560, 'inOutSine', k => { c.x = a.x + (tx - a.x) * k; c.y = a.y + (ty - a.y) * k - Math.sin(k * Math.PI) * lift; c.scale.set(size * (1 + 0.5 * Math.sin(k * Math.PI))); c.rotation = k * 7; })
      .then(() => { c.visible = false; hostPop(); onArrive && onArrive(); });
  }
  // the explorer bounces a little when the coin lands in his pack
  function hostPop() { const v = hostC.scale; stopTweens(v); v.set(1.04, 0.96); tween(v, { x: 1, y: 1 }, 260, 'outBack'); }
  // "+0.09x" above his head: what this tile added
  function floatUp(str) {
    const t = label(str, '#FFE7A0', 24); t.x = monkey.x + 6; t.y = monkey.y - 175 * (RIG_S_NOW() / RIG_S); fxLayer.addChild(t); t.scale.set(0.6);
    tween(t.scale, { x: 1.1, y: 1.1 }, 140, 'outBack');
    tween(t, { y: t.y - 60, alpha: 0 }, 1000, 'inQuad').then(() => t.destroy({ children: true }));
  }
  function dip(t, d = 7) { if (!t) return; t.dip = d; stopTweens(t.dipObj || (t.dipObj = {})); const o = t.dipObj; o.v = d; tween(o, { v: 0 }, 380, 'outBack', () => { t.dip = o.v; }); }
  // the tile the monkey is about to hop to rises a little and catches the light (the same for every tile: it says nothing)
  function anticipate(t) {
    if (!t) return; shineTile(t, 380);
    stopTweens(t.liftObj || (t.liftObj = {})); const o = t.liftObj; o.v = 0;
    tween(o, { v: 1 }, 160, 'outQuad', () => { t.lift = -4 * o.v; }).then(() => tween(o, { v: 0 }, 260, 'inOutSine', () => { t.lift = -4 * o.v; }));
  }
  // the tile splits along its crack: two halves turn apart and fall, with chips of stone and a puff of dust
  function splitTile(t, i) {
    const fx = tileFx[t.texName]; if (!fx) return;
    t.sprite.visible = false; t.lit.visible = false; t.shineS.visible = false;
    const halves = fx.halves.map((tx, k) => {
      const h = new PIXI.Sprite(tx); h.anchor.set(0.5, 0.1); h.scale.copyFrom(t.sprite.scale); t.addChildAt(h, 1); return h;
    });
    t.halves = halves;
    halves.forEach((h, k) => {
      const dir = k ? 1 : -1, o = { t: 0 }; h.anim = o;
      tween(o, { t: 1 }, 950, 'inQuad', q => { h.x = dir * (10 + 70 * q); h.y = 600 * q * q; h.rotation = dir * (0.15 + 1.1 * q); h.alpha = 1 - Math.max(0, q - 0.7) / 0.3; });
    });
    tween(t.label_, { y: t.label_.y + 380, alpha: 0, rotation: (i % 2 ? 0.6 : -0.6) }, 800, 'inQuad');
    burst(t.x, t.y + 16, 26, { color: 0x9FC2B0, speed: 320, life: 850, grav: 1200, size: 1.2 });
    burst(t.x, t.y + 6, 10, { color: 0xFFE2A0, speed: 260, life: 420, grav: 300, size: 0.7 });
  }
  function mendTile(t, i) {
    if (t.halves) { t.halves.forEach(h => { stopTweens(h.anim); h.destroy(); }); t.halves = null; }
    t.sprite.visible = true; t.lit.visible = true; stopTweens(t.label_);
    t.label_.y = t.sprite.height * 0.37 / (t.sq || 1); t.label_.rotation = 0; t.label_.alpha = i + 1 < (MODE[mode].flag || 4) ? 0.55 : 1;
  }
  // before a cracked tile the explorer leans in to look (the same for every cracked tile: it says nothing about what will happen)
  async function peek() { hrig.play('peek', { mix: 0.08, fadeSwap: 0.06 }); rig.play('crouch', { mix: 0.08 }); await wait(560); hrig.play('idle', { loop: true, mix: 0.12, fadeSwap: 0.06 }); rig.play('idle', { loop: true, mix: 0.12 }); }
  function popText(t, color) {
    t.setColor(color); t.scale.set(0.5);
    tween(t.scale, { x: 1.18, y: 1.18 }, 83, 'outQuad').then(() => tween(t.scale, { x: 1, y: 1 }, 250, 'outBack'));
  }
  function setPlaque(text, sub) { ui.plaqueVal.textContent = text; ui.plaqueSub.textContent = sub || ''; ui.plaque.classList.remove('pop'); void ui.plaque.offsetWidth; ui.plaque.classList.add('pop'); }

  async function trapAt(i, kind) {
    const t = tiles[i - 1]; if (!t) return;
    const trapT0 = performance.now();
    const retex = n => { t.sprite.texture = tex[n]; t.texName = n; t.lit.texture = tileFx[n].lit; };
    retex('tile-cracked');
    sfx('crack'); shake(0.85);
    rig.play('fright', { mix: 0.02, fadeSwap: 0.04 });
    hrig.play('fright', { mix: 0.02, fadeSwap: 0.04, then: 'idle', thenMix: 0.3 });
    // the monkey's beanie flies off backwards, from where it sits on his head (monkey-rig.js)
    // With the fright clip the beanie stays on his head for its first 0.4 s (he crouches), and the clip itself has no
    // flying beanie (tools/build-anim.mjs --main --drop): this one leaves exactly when his head is bare, so there is
    // never a beanie on his head and another in the air (2026-11-25). With the drawing (no clip) it leaves at once.
    const launch = () => {
      const pop = window.LS_MONKEY.beanie, ms = RIG_S_NOW();
      beanie.scale.set(pop.w * ms / beanie.texture.width);
      beanie.visible = true; beanie.x = monkey.x + pop.x * ms; beanie.y = monkey.y + pop.y * ms; beanie.rotation = 0; beanie.alpha = 1;
      const b = { t: 0 }, bx = beanie.x, by = beanie.y;
      tween(b, { t: 1 }, 900, 'lin', k => { beanie.x = bx - 140 * k; beanie.y = by - 120 * Math.sin(k * Math.PI) + 260 * k * k; beanie.rotation = -4 * k; beanie.alpha = 1 - Math.max(0, k - 0.75) * 4; });
    };
    // the clip's own clock decides (a video can take a moment to start): his head is bare from 0.4 s into the clip
    if (flipM && flipM.name === 'monkey-fright') (async () => {
      const t0 = performance.now(), at = () => (flipM.vid ? flipM.vid.currentTime : flipM.t);
      while (flipM.name === 'monkey-fright' && at() < 0.4 && performance.now() - t0 < 1500) await new Promise(r => requestAnimationFrame(r));
      launch();
    })(); else launch();
    // the tile shudders under him (a flash of the crack), then splits and its halves fall into the chasm
    t.glow = 0; t.glowTo = 0; t.lit.tint = 0xFFB070; flashTile(t, 0.7, 0);
    const o = { t: 0 };
    await tween(o, { t: 1 }, 260, 'lin', k => { t.x = t.home.x + Math.sin(k * 46) * 5 * (1 - k); t.rotation = Math.sin(k * 33) * 0.035 * (1 - k); });
    t.rotation = 0; t.falling = true; t.lit.tint = 0xFFFFFF;
    splitTile(t, i);
    // he scrambles back to safety
    const back = i - 1 >= 1 ? tileX(i - 1) : START_X;
    await hopTo(back, standY(), { height: 40, ms: 280, scared: true });
    // the flying beanie is gone after 900 ms; the idle drawing (beanie on) only comes back after that
    await wait(Math.max(500, 940 - (performance.now() - trapT0)));
    rig.play('idle', { loop: true, mix: 0.25 });
  }

  /* ---------------- the vault ---------------- */
  const GW = 150, GTOP = 520, GX0 = 260;
  const gX = k => GX0 + k * GW;
  function buildVault(kind) {
    gtiles.forEach(dropTile); gtiles = [];
    const vals = R.vault[kind].values, show = Math.min(vals.length, 60);
    for (let k = 0; k < show; k++) {
      const c = makeTile('tile-gold', Math.min(vals[k], R.cap), NUM.gold, 26); c.sprite.scale.set((GW * 1.0) / c.sprite.texture.width); c.baseS = c.sprite.scale.y; c.label_.y = c.sprite.height * 0.37;
      c.x = gX(k); c.y = GTOP; c.home = { x: c.x, y: c.y };
      vaultWorld.addChild(c); gtiles.push(c);
    }
    // ropes in the HUD
    ui.ropes.replaceChildren(...Array.from({ length: R.vault[kind].ropes }, () => api.h('i', { class: 'rope', style: 'background-image:url(' + ART.rope + ')' })));
  }
  async function enterVault(kind, fromIdol) {
    // gold wipe: flash and swap the scene
    ui.wipe.classList.remove('go'); void ui.wipe.offsetWidth; ui.wipe.classList.add('go');
    SND.emit('wipe'); SND.tension(false); SND.playMusic('vault', 2);   // in the vault the music never drops a level (6.3)
    await wait(380);
    inVault = true; world.visible = false; vaultWorld.visible = true; bg.visible = false; bgV.visible = true; torches.forEach(g => { g.visible = false; });
    buildVault(kind);
    vaultWorld.addChild(monkey); monkey.x = gX(0); monkey.y = GTOP; rig.view.scale.set(RIG_S_VAULT); setPile(Math.max(pileLevel, 4));
    vaultWorld.addChildAt(hostC, vaultWorld.children.length - 1); hostC.x = gX(0) - 190; hostC.y = GTOP; hrig.play('pump', { mix: 0.05, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
    templeFx.visible = false; fore.visible = false; ground.visible = false; bgMid.visible = false;
    camState = { x: monkey.x + 360, y: GTOP - 90, z: 1.1 }; applyCam();
    ui.ropes.hidden = false; ui.vaultTitle.hidden = false;
    setPlaque(fmtX(R.vault[kind].values[0] + (fromIdol || 0)), 'THE VAULT');
    await wait(900);
    ui.vaultTitle.hidden = true;
  }
  function leaveVault() {
    inVault = false; world.visible = true; vaultWorld.visible = false; bg.visible = true; bgV.visible = false; torches.forEach(g => { g.visible = true; });
    world.addChildAt(monkey, world.children.length - 1); rig.view.scale.set(RIG_S);
    world.addChildAt(hostC, world.children.indexOf(monkey)); hostC.x = HOST_X; hostC.y = TOP;
    templeFx.visible = true; fore.visible = true; ground.visible = true; bgMid.visible = true;
    ui.ropes.hidden = true; ui.vaultTitle.hidden = true;
    gtiles.forEach(dropTile); gtiles = [];
  }

  /* ---------------- win celebrations (2026-11-26, the user: many more animations and cool things when he wins more than
   * he played). Every win above the play amount gets a show, and it grows with the win:
   *   under the big-win line: the victory lap (gold runs along the tiles he won on, a coin jumps from each, the chimes
   *   climb), a banner WIN / NICE WIN / GREAT WIN / SUPERB WIN (tiers from the math, tuning.tiers) with turning sun rays
   *   and a counting amount, a coin fountain from the monkey, joy hops, glints on the explorer's treasure;
   *   the big-win card: the title climbs FINE FIND -> TREASURE HAUL -> TEMPLE FORTUNE while the count passes each line
   *   (slam, flash, coins, shake), coins rain the whole time, and the last number lands with a burst. ---------------- */
  // coins and glints are drawn on one 2D canvas over the whole stage (above the banner and the big-win card)
  const CF = { parts: [], ctx: null, cv: null, w: 1, h: 1, dpr: 1, img: null, glint: null, dirty: false };
  function cfInit(cv) {
    CF.cv = cv; CF.ctx = cv.getContext('2d');
    CF.img = new Image(); CF.img.src = ART.coin;
    const g = document.createElement('canvas'); g.width = g.height = 64; const q = g.getContext('2d');
    const gr = q.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,250,225,1)'); gr.addColorStop(0.22, 'rgba(255,220,130,.75)'); gr.addColorStop(1, 'rgba(255,200,80,0)');
    q.fillStyle = gr; q.fillRect(0, 0, 64, 64);
    q.fillStyle = 'rgba(255,255,240,.95)'; q.beginPath();
    [[32, 0], [35, 29], [64, 32], [35, 35], [32, 64], [29, 35], [0, 32], [29, 29]].forEach(([x, y], i) => i ? q.lineTo(x, y) : q.moveTo(x, y));
    q.closePath(); q.fill(); CF.glint = g;
  }
  function cfResize(w, h) {
    if (!CF.cv) return; CF.dpr = Math.min(2, window.devicePixelRatio || 1); CF.w = w; CF.h = h;
    CF.cv.width = Math.round(w * CF.dpr); CF.cv.height = Math.round(h * CF.dpr); CF.dirty = true;
  }
  const U = () => Math.min(CF.w, CF.h * 16 / 9) / 100 * (CF.w / CF.h < 1.2 ? 1.3 : 1);   // the HUD's --u
  // coins thrown up from a point (stage px): they flip on their axis, fall, and fade
  function coinBurst(x, y, n, { up = 1, spread = 1, size = 1 } = {}) {
    const u = U();
    for (let i = 0; i < n && CF.parts.length < 320; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 1.5 * spread, v = u * (50 + Math.random() * 50) * up;
      CF.parts.push({ k: 0, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: u * 170, s: u * (2.3 + Math.random() * 1.5) * size,
        spin: Math.random() * 6, vs: 7 + Math.random() * 11, rot: (Math.random() - 0.5) * 0.7, life: 2.8, max: 2.8 });
    }
  }
  // coins falling from above the stage
  function coinRain(n, size = 1) {
    const u = U();
    for (let i = 0; i < n && CF.parts.length < 320; i++) CF.parts.push({ k: 0, x: Math.random() * CF.w, y: -u * (4 + Math.random() * 12),
      vx: (Math.random() - 0.5) * u * 10, vy: u * (18 + Math.random() * 30), g: u * 95, s: u * (2.1 + Math.random() * 1.8) * size,
      spin: Math.random() * 6, vs: 5 + Math.random() * 9, rot: (Math.random() - 0.5) * 0.7, life: 5, max: 5 });
  }
  // little stars that twinkle once round a point
  function glints(x, y, n, r) {
    const u = U();
    for (let i = 0; i < n && CF.parts.length < 360; i++) {
      const a = Math.random() * Math.PI * 2, d = Math.random() * r, life = 0.45 + Math.random() * 0.5;
      CF.parts.push({ k: 1, x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, vx: 0, vy: -u * 4, g: 0, s: u * (1.6 + Math.random() * 2.6), life, max: life, wait: Math.random() * 0.35 });
    }
  }
  function cfTick(s) {
    const c = CF.ctx; if (!c) return;
    if (!CF.parts.length) { if (CF.dirty) { c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, CF.cv.width, CF.cv.height); CF.dirty = false; } return; }
    CF.dirty = true; s = Math.min(0.05, s) / speedFn();
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, CF.cv.width, CF.cv.height); c.setTransform(CF.dpr, 0, 0, CF.dpr, 0, 0);
    const img = CF.img, ok = img && img.complete && img.naturalWidth, ar = ok ? img.naturalWidth / img.naturalHeight : 1;
    let n = 0;
    for (const p of CF.parts) {
      if (p.wait > 0) { p.wait -= s; CF.parts[n++] = p; continue; }
      p.life -= s; p.vy += p.g * s; p.x += p.vx * s; p.y += p.vy * s; p.spin += p.vs * s;
      if (p.life <= 0 || p.y > CF.h + 80) continue;
      CF.parts[n++] = p;
      if (p.k === 0) {
        if (!ok) continue;
        const fx = Math.cos(p.spin); if (Math.abs(fx) < 0.06) continue;
        c.globalAlpha = Math.min(1, p.life / 0.4); c.save(); c.translate(p.x, p.y); c.rotate(p.rot); c.scale(fx, 1);
        c.drawImage(img, -p.s * ar / 2, -p.s / 2, p.s * ar, p.s);
        if (fx < 0) { c.globalAlpha *= 0.35; c.globalCompositeOperation = 'source-atop'; c.fillStyle = '#5a3a08'; c.fillRect(-p.s * ar / 2, -p.s / 2, p.s * ar, p.s); c.globalCompositeOperation = 'source-over'; }
        c.restore();
      }
    }
    CF.parts.length = n;
    c.globalCompositeOperation = 'lighter';
    for (const p of CF.parts) {
      if (p.k !== 1 || p.wait > 0) continue;
      const q = 1 - p.life / p.max, k = Math.sin(q * Math.PI), sz = p.s * (0.4 + k);
      c.globalAlpha = k; c.drawImage(CF.glint, p.x - sz / 2, p.y - sz / 2, sz, sz);
    }
    c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
  }
  const tick = () => new Promise(r => setTimeout(r, 30));
  const stagePt = (c, x, y) => { const p = c.toGlobal({ x, y }); return { x: p.x - WIN.x, y: p.y - WIN.y }; };
  const monkeyPt = (dy = -60) => stagePt(monkey.parent, monkey.x, monkey.y + dy * (RIG_S_NOW() / RIG_S));
  const packPt = () => { const pk = PACK.idle; return stagePt(hostC, pk[0] * HS, pk[1] * HS); };
  // gold runs along the tiles he won on: each flashes, a coin jumps out, and the chimes climb
  function victoryLap(list, gap = 80) {
    list.forEach((t, k) => wait(k * gap).then(() => {
      if (!t || t.destroyed || t.falling) return;
      flashTile(t, 1, 0.45); shineTile(t, 420); popText(t.label_, '#FFF2B8');
      SND.emit('tileWin', Math.min(10, k + 1));
      const p = stagePt(t.parent, t.x, t.y + 12); coinBurst(p.x, p.y, 2, { up: 0.75, size: 0.8, spread: 0.7 }); glints(p.x, p.y, 2, U() * 3);
    }));
    return list.length * gap;
  }
  // the monkey jumps for joy on the spot (the cheer clip keeps playing)
  async function joyHop(h = 44) {
    const y0 = monkey.y, o = { t: 0 };
    monkey.scale.set(1.1, 0.88); await tween(monkey.scale, { x: 1, y: 1 }, 90, 'outQuad');
    await tween(o, { t: 1 }, 400, 'lin', k => { const a = Math.sin(k * Math.PI); monkey.y = y0 - a * h; monkey.scale.set(1 - 0.05 * a, 1 + 0.07 * a); });
    monkey.y = y0; monkey.scale.set(1.13, 0.86); await tween(monkey.scale, { x: 1, y: 1 }, 220, 'outBack');
  }
  const WIN_LV = ['WIN', 'NICE WIN', 'GREAT WIN', 'SUPERB WIN'];
  const fmtMul = x => (Math.round(x * 100) / 100).toFixed(2) + '×';
  // every win above the play amount, under the big-win line
  async function winShow(ctx, x, lap) {
    const tu = MODE[ctx.mode].tuning.tiers || []; let lv = 0; for (let i = 0; i < 3; i++) if (x >= tu[i]) lv = i + 1;
    const sp = speedFn(), units = ctx.winUnits;
    let done = false; skipBig = () => { done = true; };
    rig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'idle', thenMix: 0.3 });
    hrig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'idle', thenMix: 0.3 });
    SND.emit('winSmall');
    ui.plaque.classList.add('hot');
    // the smallest wins (under the first tier) take half a second in all (2026-11-26, the user: "half a second, simply"):
    // the tiles flash together, the banner stamps in with the final amount, a few coins, one hop, gone
    if (lv === 0) {
      victoryLap(lap, 25);
      const w = ui.win; w.dataset.lv = '0'; w.classList.remove('land', 'out');
      ui.winT.textContent = WIN_LV[0]; ui.winAmt.textContent = ctx.winMoney(units); ui.winX.textContent = fmtMul(x);
      w.hidden = false; void w.offsetWidth;
      const m = monkeyPt(); coinBurst(m.x, m.y, 7); glints(m.x, m.y, 5, U() * 5);
      shake(0.14); joyHop(30);
      const t0 = performance.now();
      while (!done && performance.now() - t0 < 340 * sp) await tick();
      skipBig = null; w.classList.add('out'); ui.plaque.classList.remove('hot');
      await new Promise(r => setTimeout(r, 120 * sp));
      w.hidden = true; w.classList.remove('out');
      return;
    }
    const lapMs = victoryLap(lap), l0 = performance.now();
    while (!done && performance.now() - l0 < Math.min(lapMs, 560) * sp) await tick();
    // the banner stamps in, the coins fly
    const w = ui.win; w.dataset.lv = String(lv); w.classList.remove('land', 'out');
    ui.winT.textContent = WIN_LV[lv]; ui.winAmt.textContent = ctx.money(0); ui.winX.textContent = fmtMul(x);
    w.hidden = false; void w.offsetWidth;
    const m = monkeyPt(); coinBurst(m.x, m.y, 8 + lv * 9, { up: 1 + lv * 0.12 }); glints(m.x, m.y, 6 + lv * 3, U() * 6);
    const pp = packPt(); glints(pp.x, pp.y, 4 + lv * 2, U() * 3);
    if (lv >= 2) coinRain(10 + (lv - 2) * 16);
    shake(0.16 + lv * 0.1);
    (async () => { for (let i = 0; i < (lv >= 2 ? 2 : 1); i++) await joyHop(34 + lv * 8); })();
    const dur = (520 + lv * 420) * sp, stop = lv ? SND.count(dur / 1000, lv - 1) : null, t0 = performance.now();
    while (!done) {
      const p = Math.min(1, (performance.now() - t0) / dur);
      ui.winAmt.textContent = ctx.money(Math.round(units * (1 - Math.pow(1 - p, 3))));
      if (lv && Math.random() < 0.18 + lv * 0.1) { const q = monkeyPt(); coinBurst(q.x, q.y, 1, { up: 0.9 }); }
      if (p >= 1) break;
      await tick();
    }
    ui.winAmt.textContent = ctx.winMoney(units); if (stop) stop(); SND.emit('countEnd');
    w.classList.add('land');
    { const r = ui.winAmt.getBoundingClientRect(), b = full.getBoundingClientRect(); glints(r.left - b.left + r.width / 2, r.top - b.top + r.height / 2, 6 + lv * 2, r.width * 0.5); }
    done = false; const end = performance.now() + (480 + lv * 260) * sp;
    while (!done && performance.now() < end) await tick();
    skipBig = null; w.classList.add('out'); ui.plaque.classList.remove('hot');
    await new Promise(r => setTimeout(r, 200));
    w.hidden = true; w.classList.remove('land', 'out');
  }
  /* the big-win card (own, so tiers follow each mode's threshold from the math) */
  const TIERS = [{ k: 1, label: 'FINE FIND' }, { k: 5, label: 'TREASURE HAUL' }, { k: 25, label: 'TEMPLE FORTUNE' }];
  function cardPt() { const r = ui.bigCard.getBoundingClientRect(), b = full.getBoundingClientRect(); return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height / 2, w: r.width, h: r.height }; }
  function retrigger(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  // the count passed the next line: the title slams in, a flash, coins out of the card, the temple shakes
  function tierUp(i) {
    ui.bigLabel.textContent = TIERS[i].label; ui.big.dataset.tier = String(i);
    retrigger(ui.bigCard, 'up'); retrigger(ui.flash, 'go');
    const c = cardPt(); coinBurst(c.x, c.y, 16 + i * 10, { up: 1.25, spread: 1.7 }); glints(c.x, c.y, 10 + i * 4, c.w * 0.6);
    shake(0.4 + i * 0.15); SND.emit('flag');
  }
  async function bigWin(ctx, x, lap) {
    const at = MODE[ctx.mode].tuning.bigWinAt;
    if (x < at && !ctx.capped) return;
    let tier = 0; TIERS.forEach((t, i) => { if (x >= t.k * at) tier = i; });
    const sp = speedFn(), units = ctx.winUnits, card = ui.big;
    if (lap && lap.length) victoryLap(lap);
    let cur = 0; card.dataset.tier = '0'; card.classList.remove('land'); ui.bigCard.classList.remove('up'); card.hidden = false;
    ui.bigLabel.textContent = TIERS[0].label; ui.bigAmt.textContent = ctx.money(0);
    rig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'winLoop', thenMix: 0.05 });
    hrig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'winLoop', thenMix: 0.05 });
    SND.emit('bigWin'); SND.hold(0.05);
    const dur = (2000 + tier * 1500) * sp;
    const stopCount = SND.count(dur / 1000, ctx.capped ? 4 : tier);
    retrigger(ui.flash, 'go'); shake(0.5);
    await tick(); { const c = cardPt(); coinBurst(c.x, c.y + c.h * 0.4, 24, { up: 1.3, spread: 1.5 }); glints(c.x, c.y, 12, c.w * 0.6); }
    let hopping = true; (async () => { while (hopping) { await joyHop(50); await wait(110); } })();
    let done = false; skipBig = () => { done = true; };
    const t0 = performance.now(); let rainAt = 0, glintAt = 0;
    while (!done) {
      const now = performance.now(), p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      ui.bigAmt.textContent = ctx.money(Math.round(units * e));
      while (cur < tier && x * e >= TIERS[cur + 1].k * at) tierUp(++cur);       // the title climbs with the count
      if (now - rainAt > 110) { rainAt = now; coinRain(1 + cur * 2); }
      if (now - glintAt > 260) { glintAt = now; const c = cardPt(); glints(c.x, c.y, 2, c.w * 0.65); }
      if (p >= 1) break;
      await tick();
    }
    while (cur < tier) tierUp(++cur);                                            // skipped: straight to the top title
    ui.bigAmt.textContent = ctx.winMoney(units); stopCount(); SND.emit('countEnd');
    if (ctx.capped) { ui.bigLabel.textContent = 'LEGEND OF THE VAULT'; card.dataset.tier = '3'; retrigger(ui.bigCard, 'up'); }
    // the last number lands
    retrigger(card, 'land'); retrigger(ui.flash, 'go'); shake(0.6);
    { const c = cardPt(); coinBurst(c.x, c.y, 30 + tier * 12, { up: 1.45, spread: 2 }); glints(c.x, c.y, 18, c.w * 0.7); }
    const pp = packPt(); glints(pp.x, pp.y, 10, U() * 4);
    done = false; skipBig = () => { done = true; };
    const end = performance.now() + 1800 * sp;
    while (!done && performance.now() < end) { if (Math.random() < 0.35) coinRain(1); await tick(); }
    hopping = false; skipBig = null; card.hidden = true; card.classList.remove('land'); SND.hold(1);
    hrig.play('idle', { loop: true, mix: 0.3, fadeSwap: 0.08 });
  }

  // after a round, the tiles that fell rise back out of the chasm (the bridge never stays broken between rounds)
  function restoreBridge() {
    tiles.forEach((t, i) => {
      if (!t.falling) return;
      stopTweens(t); t.falling = false; t.rotation = 0; t.x = t.home.x; t.y = t.home.y + 140; t.alpha = 0;
      { const n = i + 1 >= 10 ? 'tile-cracked' : 'tile'; t.sprite.texture = tex[n]; t.texName = n; t.lit.texture = tileFx[n].lit; } mendTile(t, i);
      const o = { v: 140 }; t.falling = true;
      tween(o, { v: 0 }, 560, 'outBack', () => { if (t.destroyed) return; t.y = t.home.y + o.v; t.alpha = Math.min(1, 1 - o.v / 140 + 0.2); })
        .then(() => { if (t.destroyed) return; t.falling = false; t.alpha = 1; burst(t.x, t.y + 10, 8, { color: 0x9FC2B0, speed: 160, life: 500, grav: 600, size: 0.7 }); shineTile(t, 400); });
    });
  }

  /* ---------------- the round ---------------- */
  function reset() {
    tweens.clear(); skipBig = null;
    if (inVault) leaveVault();
    monkey.x = START_X; monkey.y = standY(); monkey.rotation = 0; monkey.scale.set(1, 1);
    beanie.visible = false; idolS.visible = true; idolS.y = TOP + 6; idolS.alpha = 1; setPile(0); idleT = 0;
    buildBridge();
    camState = homeCam(); applyCam();
    rig.play('idle', { loop: true, mix: 0.15 });
    hrig.play('idle', { loop: true, mix: 0.15 });
    setPlaque('—', 'FLAG ON TILE ' + (MODE[mode].flag || '-'));
    ui.big.hidden = true; ui.ropes.hidden = true; ui.vaultTitle.hidden = true;
    ui.win.hidden = true; ui.plaque.classList.remove('hot'); CF.parts.length = 0;
  }

  async function play(events, ctx) {
    speedFn = ctx.speed;
    if (MODE[ctx.mode] && MODE[ctx.mode].flag) mode = ctx.mode;
    reset();
    const flag = MODE[ctx.mode].flag;
    let win = 0, reach = 0, vaultKind = null, from = 0, ropes = 0, gk = 0;
    SND.wake(); SND.playMusic('temple', 0); SND.setLevel(1);
    if (flag) {
      hrig.play('wave', { mix: 0.08, fadeSwap: 0.06, then: 'idle', thenMix: 0.25 });   // he sends his monkey off across the bridge
      await camTo(monkey.x + lead(), TOP - 110, 1.32, 520);
    }
    for (const e of events) {
      if (!e || !e.type) continue;
      if (e.type === 'hop') {
        if (e.i >= 10) await peek();
        anticipate(tiles[e.i - 1]);
        await hopTo(tileX(e.i), standY());
        reach = e.i;
        const t = tiles[e.i - 1];
        landTile(t, e.i >= flag ? 1.2 : 1);
        camTo(Math.min(monkey.x + lead(), W), TOP - 110, e.i >= 9 ? 1.42 : 1.32, 420);
        if (e.i >= flag) {
          const prev = e.i > flag ? R.ladder[ctx.mode][e.i - 2] : 0;
          win = R.ladder[ctx.mode][e.i - 1];
          popText(t.label_, NUM.gold); t.label_.alpha = 1; flashTile(t, e.i === flag ? 0.85 : 0.6, 0.2); shineTile(t, 360);
          ctx.setWin(ctx.units(win), true); musicFor(ctx, win);
          floatUp('+' + fmtX(win - prev));
          const lvl = e.i - flag + 1;
          coinTo(t.x, t.y + 26, () => setPile(lvl));
          if (e.i === flag) {
            hrig.play('pump', { mix: 0.05, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
            sfx('flag'); burst(flagS.x + 10, flagS.y - 80, 26, { color: GOLD, speed: 380, life: 900, grav: 700 });
            tween(flagS.scale, { x: flagS.scale.x * 1.15, y: flagS.scale.y * 1.15 }, 120).then(() => tween(flagS.scale, { x: FLAG_H / flagS.texture.height, y: FLAG_H / flagS.texture.height }, 300, 'outBack'));
            setPlaque(fmtX(win), 'SECURED AT THE FLAG');
          } else { sfx('step', e.i - flag); setPlaque(fmtX(win), 'TILE ' + e.i); }
        }
        if (e.i === N - 1) SND.tension(true);          // one tile from the idol: the music holds its breath (6.4)
        await wait(90);
      } else if (e.type === 'trap') {
        if (e.i >= 10) await peek();
        SND.tension(false);
        await trapAt(e.i, e.kind);
        if (reach < flag) { setPlaque('—', 'THE FLAG WAS NOT REACHED'); SND.emit('lose'); }
      } else if (e.type === 'idol') {
        win = e.win;
        await camTo(IDOL_X - 120, TOP - 110, 1.32, 400);
        await hopTo(IDOL_X - 78, standY() - 4, { height: 60 });
        SND.tension(false); sfx('idol'); shake(0.45);
        tween(idolS, { y: idolS.y - 40 }, 400, 'outBack');
        burst(IDOL_X, TOP - 120, 40, { color: JADE, speed: 520, life: 1100, grav: 600 });
        rig.play('win', { mix: 0.03, fadeSwap: 0.04 });
        hrig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'winLoop', thenMix: 0.05 });
        setPlaque(fmtX(win), 'THE IDOL');
        await wait(700);
      } else if (e.type === 'vault') {
        vaultKind = e.kind; from = e.from; ropes = e.ropes; gk = 0;
        await enterVault(e.kind, from);
        ctx.setWin(ctx.units(Math.min(R.cap, from + R.vault[e.kind].values[0])), true);
      } else if (e.type === 'gold') {
        anticipate(gtiles[e.k]);
        await hopTo(gX(e.k), GTOP, { height: 80, ms: 280 });
        gk = e.k; const t = gtiles[e.k];
        landTile(t, 1.2); flashTile(t, 0.7, 0.22); if (t) coinTo(t.x, t.y + 30, () => setPile(Math.min(6, 4 + Math.floor(e.k / 4))), vaultWorld);
        if (t) { popText(t.label_, '#FFF2B8'); burst(t.x, t.y, 10, { color: GOLD, speed: 260, life: 600, grav: 500 }); }
        const run = Math.min(R.cap, from + e.v);             // a round never shows more than the max win
        sfx('gold', e.k); ctx.setWin(ctx.units(run), true);
        setPlaque(fmtX(run), run >= R.cap ? 'MAX WIN' : 'GOLDEN TILE ' + e.k);
        camTo(monkey.x + 360, GTOP - 90, 1.1, 360);
        await wait(60);
      } else if (e.type === 'snap') {
        await hopTo(gX(e.k), GTOP, { height: 80, ms: 280 });
        const t = gtiles[e.k];
        sfx('snap'); shake(0.6);
        rig.play('fright', { mix: 0.02, fadeSwap: 0.04 });
        hrig.play('fright', { mix: 0.02, fadeSwap: 0.04, then: 'idle', thenMix: 0.3 });
        if (t) { t.falling = true; burst(t.x, t.y + 10, 18, { color: GOLD, speed: 300, life: 700, grav: 1000 }); splitTile(t, e.k); }
        const icon = ui.ropes.children[ropes - 1]; if (icon) icon.classList.add('gone');
        ropes = e.ropes;
        // the rope pulls him back to the tile he came from
        const ex = monkey.x, ey = monkey.y, o = { t: 0 };
        await tween(o, { t: 1 }, 240, 'inQuad', k => { monkey.y = ey + 70 * k; });
        await tween(o, { t: 0 }, 1, 'lin');
        const bx = gX(gk);
        await tween(o, { t: 1 }, 380, 'outQuad', k => { monkey.x = ex + (bx - ex) * k; monkey.y = ey + 70 - (70 + Math.sin(k * Math.PI) * 60) * k; });
        monkey.y = GTOP; rig.play('land', { mix: 0.03, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
        // rebuild the fallen tile for the next try (a fresh golden tile rises in its place)
        if (t) { stopTweens(t); mendTile(t, 99); t.label_.alpha = 1; t.y = t.home.y + 60; t.rotation = 0; t.alpha = 0; tween(t, { y: t.home.y, alpha: 1 }, 420, 'outBack').then(() => { t.falling = false; shineTile(t, 400); }); }
        await wait(220);
      } else if (e.type === 'final') {
        if (ropes === 0 && vaultKind) { setPlaque(fmtX(e.payout), 'THE VAULT CLOSES'); await wait(400); }
      }
    }
    // after the run: every win above the play amount gets its show, the card for a big one (winShow / bigWin)
    const x = ctx.winX;
    const lap = (vaultKind ? gtiles.slice(0, gk + 1) : tiles.slice(flag ? flag - 1 : 0, reach)).filter(t => t && !t.falling).slice(-9);
    if (x >= Math.max(1, ctx.cost) && x < MODE[ctx.mode].tuning.bigWinAt && !ctx.capped) await winShow(ctx, x, lap);
    await bigWin(ctx, x, lap);
    if (flag && !inVault) { const h = homeCam(); await camTo(narrow() ? monkey.x + VW * 0.1 : h.x, h.y, h.z, 520); }
    if (vaultKind) SND.playMusic('temple', 0); else SND.setLevel(0);
    return { feature: !!vaultKind };
  }

  /* ---------------- rules text (built from rules-data.js) ---------------- */
  function rulesHtml() {
    const flags = R.modes.filter(m => m.flag), feats = R.modes.filter(m => !m.flag);
    const head = '<tr><th>Tile</th>' + flags.map(m => `<th>Flag ${m.flag}</th>`).join('') + '</tr>';
    const rows = Array.from({ length: N }, (_, i) => '<tr><td>' + (i + 1) + (i >= 9 ? ' (cracked)' : '') + '</td>' +
      flags.map(m => `<td>${i + 1 < m.flag ? '0×' : fmtX(R.ladder[m.name][i])}</td>`).join('') + '</tr>').join('');
    const v = R.vault.vault, g = R.vault.grand;
    return `<h3>How to play</h3>
      <p>Twelve stone tiles cross the chasm. Before the round, choose where the explorer plants his <b>flag</b>: on tile 2, 3, 4, 5 or 6. Press PLAY and his monkey hops from tile to tile on his own until a tile gives way or he reaches the idol.</p>
      <p>If a tile gives way before the flag, the round wins nothing. From the flag on, the round wins the value on the farthest tile he stood on. Tiles 10, 11 and 12 are cracked and give way more often.</p>
      <p>Everything is decided when the round starts. The flag is the only choice, and it is made before the round.</p>
      <h3>Tile values</h3><table><thead>${head}</thead><tbody>${rows}</tbody></table>
      <h3>The idol and the Vault</h3>
      <p>Tile 12 holds the idol. Reaching it wins the value of tile 12 and opens <b>the Vault</b> at once.</p>
      <p>In the Vault the monkey crosses a golden bridge with ${v.ropes} ropes. Each golden tile he reaches is worth more (about +15% a tile, from ${fmtX(v.values[0])}). When a golden tile gives way a rope catches him and he tries again from where he was. When the last rope is used, the Vault wins the value of the farthest golden tile, added to the idol's value.</p>
      <p>The Vault cannot be triggered again from inside the Vault.</p>
      <h3>Golden tile values</h3>
      <table><thead><tr><th>Golden tile</th><th>The Vault (idol and VAULT)</th><th>GRAND VAULT</th></tr></thead><tbody>${Array.from({ length: Math.max(v.values.length, g.values.length) }, (_, k) => '<tr><td>' + k + (k === 0 ? ' (start)' : '') + '</td><td>' + (k < v.values.length ? fmtX(Math.min(v.values[k], R.cap)) : '—') + '</td><td>' + (k < g.values.length ? fmtX(Math.min(g.values[k], R.cap)) : '—') + '</td></tr>').join('')}</tbody></table>
      <p>After the idol, the Vault adds the golden tile value to the value of tile 12.</p>
      <h3>Features</h3>
      <p><b>VAULT</b> is played for ${feats[0].cost}× the play amount and starts straight in the Vault with ${v.ropes} ropes, from ${fmtX(v.values[0])}.</p>
      <p><b>GRAND VAULT</b> is played for ${feats[1].cost}× the play amount and starts in the Vault with ${g.ropes} ropes, from ${fmtX(g.values[0])}.</p>
      <h3>In the game</h3>
      <p>The plaque at the top of the board shows the value the monkey holds right now; every tile from the flag on sends a coin to the explorer's pack. Tap the win card, or press Space, to skip its count; tap again to close it.</p>
      <h3>Max win</h3><p>Every round wins at most ${(R.cap / 100).toLocaleString('en')}× the play amount. The round ends when it gets there.</p>`;
  }

  /* ---------------- the opening screen: the torch in the dark ----------------
   * (2026-11-26 evening; it replaced "the map in the dark" the same day, the user: did not like the map, and the three
   * cards under it were lame; intro.css) Black. The monkey's torch catches on the stone landing, and its light runs
   * along the jade bridge towards the idol while the game loads (the light is the loading bar; each stone glints as it
   * is reached). Three paper notes with arrows explain the game as the light finds them. When everything is ready the
   * braziers flare, the dark lifts and the whole temple is lit. PLAY plants the flag and the view dives onto the bridge. */
  // each picture in its own pixels: where the monkey stands (his feet, his height as a share of the picture), the bridge
  // from the landing to the idol, the idol, the braziers, and the notes (where they sit, what their arrow points at,
  // how far the light must have come before they show)
  const ITEMPLE = {
    wide: { art: 'intro-temple-wide', w: 1376, h: 768, feet: [228, 640], mh: 0.42,
      path: [[470, 566], [620, 546], [735, 532], [835, 521], [915, 509], [985, 496], [1045, 482], [1062, 464], [1028, 449], [998, 431], [1002, 413], [1042, 399], [1100, 386]],
      idol: [1105, 240], braziers: [[957, 305], [1245, 305]],
      notes: [{ k: 'flag', at: [520, 452], to: [600, 536], show: 0.1, r: -3 }, { k: 'idol', at: [790, 300], to: [1035, 250], show: 0.6, r: 2.5 }, { k: 'vault', at: [1200, 585], to: [1110, 410], show: 1, r: -2 }] },
    tall: { art: 'intro-temple-tall', w: 768, h: 1376, feet: [170, 1212], mh: 0.25,
      path: [[350, 1062], [440, 962], [478, 880], [466, 806], [400, 760], [322, 722], [285, 688], [310, 642], [385, 622], [450, 600], [450, 577], [392, 556], [352, 530], [392, 500], [400, 472]],
      idol: [385, 300], braziers: [[250, 378], [518, 378]],
      notes: [{ k: 'flag', at: [610, 1050], to: [470, 968], show: 0.1, r: 3 }, { k: 'idol', at: [190, 545], to: [335, 330], show: 0.6, r: -3 }, { k: 'vault', at: [600, 700], to: [460, 500], show: 1, r: 2.5 }] },
  };
  const INOTES = { flag: ['PLANT THE FLAG', 'Pick tile 2 to 6. From the flag on, every tile wins more.'],
    idol: ['REACH THE IDOL', 'Tile 12 holds the idol, and it opens the Vault.'], vault: ['THE VAULT', 'A golden bridge. Ropes catch the monkey when a tile gives way.'] };
  const TORCH_AR = 378 / 640, TORCH_FLAME = [0.88, 0.16], TORCH_FEET = 0.42;   // monkey-torch: width / height, the flame, his feet (share of the width)
  function introTorch(intro, a) {
    const NS = 'http://www.w3.org/2000/svg';
    const sv = (t, at = {}) => { const e = document.createElementNS(NS, t); for (const k in at) e.setAttribute(k, at[k]); return e; };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = a.h('div', { class: 'ls-tscene' }), bgImg = a.h('img', { alt: '' });
    const flag = a.h('img', { class: 'ls-iflag', src: ART.flag, alt: '' });
    scene.append(bgImg, flag);
    const dark = a.h('canvas', { class: 'ls-tdark' }), dctx = dark.getContext('2d');
    const torchImg = a.h('img', { src: ART['monkey-torch'], alt: '' }), torch = a.h('div', { class: 'ls-itorch' }, torchImg);
    const flame = a.h('div', { class: 'ls-iflame' }), sparks = a.h('div', { class: 'ls-isparks' });
    for (let i = 0; i < 14; i++) {
      const e = a.h('i');
      Object.assign(e.style, { animationDuration: (1.3 + Math.random() * 1.5).toFixed(2) + 's', animationDelay: (-Math.random() * 3).toFixed(2) + 's' });
      e.style.setProperty('--dx', Math.round((Math.random() - 0.5) * 70) + 'px'); e.style.setProperty('--h', Math.round(50 + Math.random() * 130) + 'px');
      sparks.append(e);
    }
    const arrows = sv('svg', { class: 'ls-narrows' });
    const notes = Object.keys(INOTES).map(k => { const n = a.h('div', { class: 'ls-note' }, a.h('b', { text: INOTES[k][0] }), a.h('span', { text: INOTES[k][1] })); n.k = k; return n; });
    intro.prepend(scene, a.h('div', { class: 'ls-tshade' }), dark, a.h('div', { class: 'ls-iwarm' }), torch, flame, sparks, arrows, ...notes);
    // the free band between the name and PLAY (the cards are gone)
    const gap = a.h('div', { class: 'ls-igap' });
    document.getElementById('lzIntroTag').after(gap);
    const btn = document.getElementById('lzIntroPlay'), bar = document.getElementById('lzIntroBar');

    let M = null, P = [], cum = [0], glints = [], fires = [], idolGlow = null, F = { x: 0, y: 0 }, R0 = 100, RR = 80, S = 1;
    function build(kind) {
      M = ITEMPLE[kind]; bgImg.src = ART[M.art];
      scene.querySelectorAll('.ls-tg, .ls-tbz, .ls-tidol').forEach(e => e.remove());
      glints = M.path.map(() => { const g = a.h('i', { class: 'ls-tg' }); scene.append(g); return g; });
      fires = M.braziers.map(() => { const g = a.h('i', { class: 'ls-tbz' }); scene.append(g); return g; });
      idolGlow = a.h('i', { class: 'ls-tidol' }); scene.prepend(bgImg); scene.insertBefore(idolGlow, bgImg.nextSibling);
      cum = [0]; for (let i = 1; i < M.path.length; i++) cum.push(cum[i - 1] + Math.hypot(M.path[i][0] - M.path[i - 1][0], M.path[i][1] - M.path[i - 1][1]));
      const pct = ([x, y]) => ({ left: (x / M.w * 100) + '%', top: (y / M.h * 100) + '%' });
      glints.forEach((g, i) => { Object.assign(g.style, pct(M.path[i])); g._f = cum[i] / cum[cum.length - 1]; g.classList.remove('on'); });
      fires.forEach((g, i) => Object.assign(g.style, pct(M.braziers[i])));
      Object.assign(idolGlow.style, pct(M.idol));
      Object.assign(flag.style, pct(M.path[1]), { height: (kind === 'wide' ? 12 : 6.5) + '%' });
      notes.forEach(n => n.classList.remove('on')); found = false; intro.classList.remove('ls-found');
    }
    // the picture covers the screen; everything else follows it
    function place() {
      const vw = intro.clientWidth || innerWidth, vh = intro.clientHeight || innerHeight, kind = vw >= vh ? 'wide' : 'tall';
      if (M !== ITEMPLE[kind]) build(kind);
      intro.style.setProperty('--ls-top', Math.round(document.getElementById('lzIntroTag').getBoundingClientRect().bottom) + 'px');
      S = Math.max(vw / M.w, vh / M.h);
      const ox = (vw - M.w * S) / 2, oy = (vh - M.h * S) / 2, at = ([x, y]) => [ox + x * S, oy + y * S];
      Object.assign(scene.style, { left: ox + 'px', top: oy + 'px', width: M.w * S + 'px', height: M.h * S + 'px', transformOrigin: `${M.path[1][0] * S}px ${M.path[1][1] * S}px` });
      P = M.path.map(at);
      // the monkey on the landing
      const [fx0, fy0] = at(M.feet), h = Math.min(M.mh * M.h * S, vh * 0.5), w = h * TORCH_AR;
      const left = fx0 - w * TORCH_FEET, top = fy0 - h;
      Object.assign(torch.style, { left: left + 'px', top: top + 'px', height: h + 'px', width: w + 'px' });
      F = { x: left + w * TORCH_FLAME[0], y: top + h * TORCH_FLAME[1] };
      for (const el of [flame, sparks]) Object.assign(el.style, { left: F.x + 'px', top: F.y + 'px' });
      intro.style.setProperty('--fx', F.x.toFixed(1) + 'px'); intro.style.setProperty('--fy', F.y.toFixed(1) + 'px');
      R0 = Math.max(h * 1.15, 150); RR = Math.max(70, Math.min(vw, vh) * 0.17);
      intro.style.setProperty('--lr', (R0 * 1.3).toFixed(0) + 'px');
      // the notes: each one centred where it sits in the picture (kept on screen), its arrow from its edge to what it explains
      arrows.textContent = '';
      const marker = sv('marker', { id: 'lsNHead', viewBox: '0 0 10 10', refX: 6, refY: 5, markerWidth: 5, markerHeight: 5, orient: 'auto-start-reverse' });
      marker.append(sv('path', { d: 'M0,0L10,5L0,10Z', fill: '#F6E7C1' })); const defs = sv('defs'); defs.append(marker); arrows.append(defs);
      notes.forEach((n, i) => {
        const d = M.notes[i]; n._show = d.show; n.style.setProperty('--r', d.r + 'deg');
        const nw = n.offsetWidth, nh = n.offsetHeight;
        let [cx, cy] = at(d.at); cx = Math.max(nw / 2 + 8, Math.min(vw - nw / 2 - 8, cx));
        Object.assign(n.style, { left: (cx - nw / 2) + 'px', top: (cy - nh / 2) + 'px' });
        const [tx, ty] = at(d.to), dx = tx - cx, dy = ty - cy, k = Math.min(Math.abs(nw / 2 / (dx || 1e-6)), Math.abs(nh / 2 / (dy || 1e-6))) * 1.08;
        const sx = cx + dx * k, sy = cy + dy * k, len = Math.hypot(tx - sx, ty - sy), bend = len * 0.22 * (dx > 0 ? 1 : -1);
        const mx = (sx + tx) / 2 - (ty - sy) / len * bend, my = (sy + ty) / 2 + (tx - sx) / len * bend;
        const ex = tx - (tx - mx) / Math.hypot(tx - mx, ty - my) * 10, ey = ty - (ty - my) / Math.hypot(tx - mx, ty - my) * 10;   // stop short of the target
        const p = sv('path', { class: 'ls-narrow', d: `M${sx.toFixed(1)},${sy.toFixed(1)}Q${mx.toFixed(1)},${my.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`, 'marker-end': 'url(#lsNHead)' });
        arrows.append(p); n.arrow = p; if (n.classList.contains('on')) p.classList.add('on');
      });
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      dark.width = Math.round(vw * dpr); dark.height = Math.round(vh * dpr); dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    // a point a share f of the way along the bridge
    const along = f => {
      const L = cum[cum.length - 1] * f; let i = 1; while (i < cum.length - 1 && cum[i] < L) i++;
      const q = Math.max(0, Math.min(1, (L - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1)));
      return [P[i - 1][0] + (P[i][0] - P[i - 1][0]) * q, P[i - 1][1] + (P[i][1] - P[i - 1][1]) * q];
    };
    const hole = (x, y, r) => {
      if (r <= 1) return; const g = dctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.5, 'rgba(0,0,0,.9)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      dctx.fillStyle = g; dctx.fillRect(x - r, y - r, r * 2, r * 2);
    };

    // the clock of the opening: the torch catches, the light runs along the bridge as the game loads
    let drawn = 0, found = false;
    const t0 = performance.now();
    const loadP = () => { if (!btn.disabled) return 1; const m = /scaleX\(([\d.]+)\)/.exec(bar.style.transform || ''); return m ? Math.min(0.9, +m[1]) : 0; };
    function tick(now) {
      if (intro.hidden) return;
      const t = (now - t0) / 1000, vw = intro.clientWidth || innerWidth, vh = intro.clientHeight || innerHeight;
      const on = reduce ? 1 : Math.max(0, Math.min(1, (t - 0.45) / 1.1)), e = 1 - Math.pow(1 - on, 3);
      const fl = reduce ? 1 : 1 + Math.sin(t * 9.7) * 0.03 + Math.sin(t * 15.3 + 1.3) * 0.02 + Math.sin(t * 23.1 + 0.4) * 0.012;
      intro.style.setProperty('--lit', (e * (0.9 + (fl - 1) * 3)).toFixed(3));
      if (on < 1) torchImg.style.filter = `brightness(${(0.1 + 0.9 * e).toFixed(3)})`; else if (torchImg.style.filter) torchImg.style.filter = '';
      const want = reduce ? loadP() : Math.min(Math.max(0, (t - 1.2) / 2.6), loadP());
      drawn += (want - drawn) * 0.08; if (Math.abs(want - drawn) < 0.002) drawn = want;
      // the dark, with the torch's light and the trail of light along the bridge cut out of it
      if (!found || dark.style.opacity !== '0') {
        dctx.globalCompositeOperation = 'source-over'; dctx.clearRect(0, 0, vw, vh);
        dctx.fillStyle = 'rgba(4,3,2,.97)'; dctx.fillRect(0, 0, vw, vh);
        dctx.globalCompositeOperation = 'destination-out';
        hole(F.x, F.y + R0 * 0.25, R0 * e * fl);
        if (drawn > 0) { const n = Math.ceil(drawn * 24); for (let i = 1; i <= n; i++) { const [x, y] = along(drawn * i / n); hole(x, y, RR * (0.85 + 0.15 * fl) * e); } }
        const [hx, hy] = drawn > 0 ? along(drawn) : [F.x, F.y]; hole(hx, hy - RR * 0.4, RR * 1.6 * e * fl);   // the head of the light, brightest
      }
      glints.forEach(g => { if (!g.classList.contains('on') && drawn >= g._f - 0.005 && drawn > 0) g.classList.add('on'); });
      notes.forEach(n => { if (!n.classList.contains('on') && drawn >= n._show - 0.001) { n.classList.add('on'); if (n.arrow) n.arrow.classList.add('on'); } });
      if (drawn >= 0.999 && !found) { found = true; intro.classList.add('ls-found'); }
      requestAnimationFrame(tick);
    }
    place(); requestAnimationFrame(tick);
    addEventListener('resize', place);
    new ResizeObserver(place).observe(intro.querySelector('.lz-intro-in'));
    // the fonts change the notes' size: place them again once they are in
    document.fonts && document.fonts.load('20px "Patrick Hand"').then(place).catch(() => {});
    // PLAY: the flag goes in on the second stone and the view dives onto the bridge (the shell fades the screen in 0.45 s)
    btn.addEventListener('click', () => { if (!btn.disabled) intro.classList.add('ls-dive'); }, true);
  }

  /* ---------------- boot ---------------- */
  const card = (img, title, text) => ({ art: `<img src="${ART[img]}" alt="">`, title, text });
  LZ.boot({
    id: 'last-step', title: 'Last Step', tagline: 'Plant your flag. Cross the temple bridge. Reach the idol.', rtp: '96.30', layout: 'bar',
    logo: '<span class="ls-logo">LAST STEP</span>',
    modes: [
      ...R.modes.filter(m => m.flag).map(m => ({ name: m.name, label: 'TILE ' + m.flag, cost: 1, maxWin: m.maxWin,
        note: fmtX(R.ladder[m.name][m.flag - 1]) })),
      { name: 'vault', kind: 'feature', label: 'VAULT', cost: MODE.vault.cost, maxWin: MODE.vault.maxWin,
        blurb: `Start straight in the Vault with ${R.vault.vault.ropes} ropes.`, confirmTitle: 'Open the Vault?', confirmLabel: 'Open' },
      { name: 'grand', kind: 'feature', label: 'GRAND VAULT', cost: MODE.grand.cost, maxWin: MODE.grand.maxWin,
        blurb: `Start in the Vault with ${R.vault.grand.ropes} ropes and higher golden tiles.`, confirmTitle: 'Open the Grand Vault?', confirmLabel: 'Open' },
    ],
    modeGroupLabel: 'Flag on',
    featureName: 'the Vault', statLabel: 'Vaults',
    celebrate: false,
    introCards: [
      card('flag', 'PLANT THE FLAG', 'Choose tile 2 to 6. From the flag on, every tile wins more.'),
      card('idol', 'REACH THE IDOL', 'Tile 12 holds the idol, and it opens the Vault.'),
      card('rope', 'THE VAULT', 'A golden bridge. Ropes catch the monkey when a tile gives way.'),
    ],
    rules: rulesHtml(),
    async mount(stage, a) {
      api = a; SND.init(a);
      // the opening screen: the torch in the dark (introTorch)
      const intro = document.getElementById('lzIntro');
      if (intro) introTorch(intro, a);
      // the whole stage is one picture (the hall); the board is a framed window in it (.ls-box holds the board's HUD)
      full = a.h('div', { class: 'ls-full' });
      const box = a.h('div', { class: 'ls-box' });
      stage.append(full);
      appEl = document.getElementById('lzApp');
      // the control bar (bar.css) draws with the game's own pictures: the jade tile, the flag, the rope, the idol
      for (const [v, k] of [['--ls-tile-img', 'tile'], ['--ls-flag-img', 'flag'], ['--ls-rope-img', 'rope'], ['--ls-idol-img', 'idol']]) appEl.style.setProperty(v, `url("${ART[k]}")`);
      // the flag buttons read as a tile: a small TILE over a big number, the value under it
      document.querySelectorAll('#lzModes button[data-mode]').forEach(b => {
        const m = MODE[b.dataset.mode]; if (!m || !m.flag) return;
        const t = b.querySelector('b'); if (t) t.innerHTML = '<i>TILE</i>' + m.flag;
        b.setAttribute('aria-label', 'Flag on tile ' + m.flag);
      });
      // MIN and MAX are not in this bar (bar.css); the rules say what the bar has
      const rb = document.getElementById('lzRulesBody');
      if (rb) rb.querySelectorAll('li').forEach(li => { if (/\bMIN\b/.test(li.textContent)) li.innerHTML = '<b>− / +</b> and the amount itself change the play amount. Tap the amount to pick any amount from the list.'; });
      await document.fonts.load('40px Limelight').catch(() => {});
      for (const k of Object.keys(ART)) tex[k] = await loadTex(k);
      ['tile', 'tile-cracked', 'tile-gold'].forEach(prepTileFx);
      // the motion clips (natural motion, 2026-11-25): the two rest clips before the first screen; the actions load right
      // after it (the first-load budget, standard: 8MB), and until each one arrives the rig's drawing plays that move
      // 24 fps video where the page can use it (2026-11-25): the two rest clips before the first screen (up to 4 s), the
      // actions right after it. The frame atlases are the fallback (from disk, or a video that fails) and the hop.
      const FIRST = ['explorer-idle', 'monkey-idle'];
      if (!vidBlocked) {
        FIRST.forEach(vidLoad);
        const t0 = performance.now();
        while (performance.now() - t0 < 4000 && !FIRST.every(n => vidOK(n) || (VIDS[n] && VIDS[n].failed))) await new Promise(r => setTimeout(r, 50));
      }
      for (const n of FIRST) if (!vidOK(n) && (window.LS_ANIM || {})[n]) ANIMS[n] = await flipbook(n);
      setTimeout(async () => {
        Object.keys(VIDMETA.clips).forEach(vidLoad);
        if ((window.LS_ANIM || {})['monkey-hop']) ANIMS['monkey-hop'] = await flipbook('monkey-hop');
        await new Promise(r => setTimeout(r, 4000));
        // an atlas for every clip whose video cannot be used (from disk: all of them; a video still loading is just awaited)
        for (const n of Object.keys(window.LS_ANIM || {})) if (!ANIMS[n] && (vidBlocked || !VIDS[n] || VIDS[n].failed)) { try { ANIMS[n] = await flipbook(n); } catch (e) {} }
      }, 300);
      app = new PIXI.Application();
      await app.init({ resizeTo: full, backgroundAlpha: 0, antialias: true, resolution: Math.min(2, window.devicePixelRatio || 1), autoDensity: true, preference: 'webgl' });
      full.append(app.canvas, box);
      buildScene();
      const top = document.querySelector('.lz-top'), panel = document.getElementById('lzPanel');
      // Where everything goes, from the real size of the stage and of the shell's header and control bar:
      // wide screens: the explorer on the ledge at the left, the board to his right, the bar under the board;
      // portrait: the board on top, the explorer under its left corner (the shell puts the controls below the stage).
      const layout = () => {
        // the tiny landscape popout (400 x 225) has no room for a bar under the board: there the shell's side panel returns
        const want = innerHeight <= 330 && innerWidth >= innerHeight ? 'side' : 'bar';
        if (appEl.dataset.layout !== want) appEl.dataset.layout = want;
        const sw = full.clientWidth, sh = full.clientHeight; if (!sw || !sh) return;
        app.resize && app.resize();
        const land = sw / sh >= 1;
        hallBg.visible = false; hallFx.visible = false;    // the hall was the room around the framed board (dropped 2026-11-21)
        let win;
        // the bar (bar.css) is drawn 1400 px wide and rises 34 px above itself; on smaller screens it shrinks as one piece
        if (land) appEl.style.setProperty('--ls-k', Math.min(1, (sw - 24) / 1400, Math.max(0.5, sh * 0.16 / 118)).toFixed(3));
        win = { x: 0, y: 0, w: sw, h: sh };
        WIN = win; cfResize(win.w, win.h);
        // the temple fills the stage (cover); the board HUD box covers it too
        const k = Math.max(win.w / W, win.h / H); scene.scale.set(k); scene.x = win.x; scene.y = win.y; VW = win.w / k; VH = win.h / k;
        Object.assign(box.style, { left: win.x + 'px', top: win.y + 'px', width: win.w + 'px', height: win.h + 'px' });
        box.style.setProperty('--u', (Math.min(win.w, win.h * 16 / 9) / 100 * (win.w / win.h < 1.2 ? 1.3 : 1)).toFixed(3) + 'px');
        if (!api.busy) { camState = inVault ? camState : homeCam(); } applyCam();
      };
      layout();
      const ro = new ResizeObserver(() => layout()); ro.observe(full); if (panel) ro.observe(panel); if (top) ro.observe(top);
      // HUD in the DOM (crisp text at every size)
      ui.plaque = a.h('div', { class: 'ls-plaque' }, ui.plaqueVal = a.h('b', { text: '—' }), ui.plaqueSub = a.h('small', { text: '' }));
      ui.ropes = a.h('div', { class: 'ls-ropes', hidden: '' });
      ui.vaultTitle = a.h('div', { class: 'ls-title', hidden: '', text: 'THE VAULT' });
      ui.wipe = a.h('div', { class: 'ls-wipe' });
      ui.big = a.h('div', { class: 'ls-big', hidden: '' }, a.h('div', { class: 'ls-rays' }), ui.flash = a.h('div', { class: 'ls-flash' }),
        ui.bigCard = a.h('div', { class: 'ls-big-card' }, a.h('img', { class: 'ls-portrait', src: ART.portrait, alt: '' }), ui.bigLabel = a.h('b', { text: '' }), ui.bigAmt = a.h('strong', { text: '' }), a.h('small', { text: 'tap to continue' })));
      // the banner for every win above the play amount (winShow) and the canvas of coins and glints over everything
      ui.win = a.h('div', { class: 'ls-win', hidden: '' }, a.h('div', { class: 'ls-rays' }),
        a.h('div', { class: 'ls-win-in' }, ui.winT = a.h('b', { class: 'ls-win-t', text: 'WIN' }), ui.winAmt = a.h('strong', { class: 'ls-win-amt', text: '' }), ui.winX = a.h('small', { class: 'ls-win-x', text: '' })));
      ui.fxc = a.h('canvas', { class: 'ls-fxc' });
      box.append(ui.plaque, ui.ropes, ui.vaultTitle, ui.wipe, ui.win, ui.big, ui.fxc);
      cfInit(ui.fxc); cfResize(WIN.w, WIN.h);
      setTimeout(layout, 0);
      ui.big.addEventListener('pointerdown', () => skipBig && skipBig());
      ui.win.addEventListener('pointerdown', () => skipBig && skipBig());
      window.addEventListener('keydown', ev => { if ((ev.code === 'Space' || ev.code === 'Enter') && skipBig) { ev.preventDefault(); skipBig(); } }, true);
      // a frame that throws must not stop the clock (Pixi skips its next tick after an error): log it and go on
      { let errs = 0; app.ticker.add(tk => { try { frame(tk); } catch (e) { if (errs++ < 5) console.error("FRAME error:", e); } }); }
      document.addEventListener('visibilitychange', () => { if (document.hidden) app.ticker.stop(); else app.ticker.start(); });
      reset();
    },
    reset,
    play,
    idle() {
      if (inVault) { setTimeout(() => { if (!api.busy && inVault) { ui.wipe.classList.remove('go'); void ui.wipe.offsetWidth; ui.wipe.classList.add('go'); setTimeout(() => { if (!api.busy) reset(); }, 380); } }, 1400); return; }
      rig.play('idle', { loop: true, mix: 0.3 });
      if (!skipBig) hrig.play('idle', { loop: true, mix: 0.3, fadeSwap: 0.08 });
      setTimeout(() => { if (!api.busy) restoreBridge(); }, 700);
    },
    onMode(name) {
      if (!MODE[name] || !MODE[name].flag) return;
      mode = name; if (!app) return;
      if (inVault) { reset(); return; }
      buildBridge(); placeFlag(true);
      setPlaque('—', 'FLAG ON TILE ' + MODE[name].flag);
      // the new values light up one after another, from the flag to the idol
      const f = MODE[name].flag;
      tiles.forEach((t, i) => { if (i + 1 >= f) setTimeout(() => { if (api.busy || t.destroyed) return; popText(t.label_, NUM.bronze); flashTile(t, 0.5, 0); shineTile(t, 360); }, 120 + (i + 1 - f) * 55); });
    },
    onFast() {},
    onStart() { SND.wake(); SND.playMusic('temple', 0); setTimeout(() => { if (!api.busy) hrig.play('wave', { mix: 0.1, fadeSwap: 0.06, then: 'idle', thenMix: 0.2 }); }, 700); },
    onSound(on) { if (on) { SND.wake(); SND.playMusic('temple', SND.level); } },
  });
})();
