/* Last Step: the stage and the playback of a round. The shell (lz-core.js) owns the wallet, controls, rules and
 * settlement; this file only draws the temple and replays the events of a book. Nothing here decides a result.
 * Scene: PixiJS v8 (vendor/pixi.min.js); the explorer is an LZ Rig (explorer-rig.js); numbers and tables come from
 * rules-data.js, which tools/sync-rules.mjs writes from the math. */
(() => {
  'use strict';
  const PIXI = window.PIXI, R = window.LS_RULES, ART = window.LS_ART;
  const MODE = Object.fromEntries(R.modes.map(m => [m.name, m]));
  const W = 1600, H = 900;                         // logical scene size (16:9)
  const N = R.tiles;
  // Bridge geometry, fitted to bg-temple: the rock ledge on the left ends at x 190, the idol ledge starts at 1338.
  const X0 = 190, X1 = 1338, TW = (X1 - X0) / N, TOP = 486;   // the bridge meets both rock ledges (no gap)
  const tileX = i => X0 + (i - 0.5) * TW;          // centre of tile i (1..12); tile 0 = the left ledge
  const START_X = X0 - 62, IDOL_X = 1462;
  const GOLD = 0xE9B949, JADE = 0x2FE08C, FLAG_H = 128;
  const NUM = { stone: '#9DB3A7', bronze: '#F0A860', gold: '#FFDA72' };

  let api, app, scene, cam, bg, bgV, world, vaultWorld, fxLayer, hud, explorer, rig, beanie, flagS, idolS, idolGlow;
  let tiles = [], gtiles = [], tex = {}, mode = 'flag4', torches = [], mist = [], dust = [], sparks = [];
  let follow, ui = {}, speedFn = () => 1, skipBig = null, inVault = false, shakeT = 0, shakeAmp = 0;
  const tweens = new Set();

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
      if (tw.onUpdate) tw.onUpdate(k);
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
  function makeTile(texName, value, color, px = 19) {
    const c = new PIXI.Container();
    const s = new PIXI.Sprite(tex[texName]); s.anchor.set(0.5, 0.1); s.scale.set((TW * 1.03) / s.texture.width);
    const t = label(value ? fmtX(value) : '0×', color, px);   // before the flag a tile wins nothing, and says so
    t.y = s.height * 0.37;
    c.addChild(s, t); c.sprite = s; c.label_ = t;
    return c;
  }
  function numColor(i, flag) { return i < flag ? NUM.stone : NUM.bronze; }
  function buildBridge() {
    tiles.forEach(t => t.destroy({ children: true })); tiles = [];
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
    flagS.y = y - 60; flagS.x = x; flagS.alpha = 0; SND.emit('plant');
    tween(flagS, { y, alpha: 1 }, 260, 'outBack');
  }

  function buildScene() {
    scene = new PIXI.Container(); app.stage.addChild(scene);
    cam = new PIXI.Container(); scene.addChild(cam);
    bg = new PIXI.Sprite(tex['bg-temple']); bg.width = W * 1.06; bg.height = H * 1.06; bg.anchor.set(0.5); bg.x = W / 2; bg.y = H / 2;
    bgV = new PIXI.Sprite(tex['bg-vault']); bgV.width = W * 1.06; bgV.height = H * 1.06; bgV.anchor.set(0.5); bgV.x = W / 2; bgV.y = H / 2; bgV.visible = false;
    cam.addChild(bg, bgV);
    // braziers flicker; their positions in the painted background
    const fire = glowTexture(128, [[0, 'rgba(255,170,80,.75)'], [0.35, 'rgba(255,106,42,.28)'], [1, 'rgba(255,106,42,0)']]);
    for (const [x, y] of [[392, 196], [1196, 196]]) {
      const g = new PIXI.Sprite(fire); g.anchor.set(0.5); g.x = x; g.y = y; g.blendMode = 'add'; g.scale.set(1.6); cam.addChild(g); torches.push(g);
    }
    world = new PIXI.Container(); cam.addChild(world);
    vaultWorld = new PIXI.Container(); vaultWorld.visible = false; cam.addChild(vaultWorld);
    // the idol on its ledge, with a slow breathing glow (standard 5.3: valuable items pulse x1.3 in 1200 ms)
    idolGlow = new PIXI.Sprite(glowTexture(160, [[0, 'rgba(120,255,180,.55)'], [0.5, 'rgba(47,224,140,.18)'], [1, 'rgba(47,224,140,0)']]));
    idolGlow.anchor.set(0.5); idolGlow.x = IDOL_X; idolGlow.y = TOP - 110; idolGlow.blendMode = 'add'; idolGlow.scale.set(1.5);
    idolS = new PIXI.Sprite(tex.idol); idolS.anchor.set(0.5, 1); idolS.scale.set(190 / idolS.texture.height); idolS.x = IDOL_X; idolS.y = TOP + 6;
    world.addChild(idolGlow, idolS);
    flagS = new PIXI.Sprite(tex.flag); flagS.anchor.set(0.1, 1); flagS.scale.set(FLAG_H / flagS.texture.height);
    world.addChild(flagS);
    // the explorer
    rig = new window.LZRig(PIXI, window.LS_RIG, {
      idle: tex['explorer-idle'], blink: tex['explorer-blink'], hop: tex['explorer-hop'], win: tex['explorer-win'], fright: tex['explorer-fright'],
    }, { grid: 22 });
    explorer = new PIXI.Container(); explorer.addChild(rig.view); rig.view.scale.set(0.31);
    world.addChild(explorer);
    rig.play('idle', { loop: true });
    rig.on('event', (name) => { if (name === 'land') sfx('land'); });
    beanie = new PIXI.Sprite(tex.beanie); beanie.anchor.set(0.5); beanie.scale.set(0.3); beanie.visible = false; world.addChild(beanie);
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
    hud = new PIXI.Container(); scene.addChild(hud);
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
    if (VW >= W * 0.98) return { x: W / 2, y: H / 2, z: 1 };
    const z = narrow() ? 1.3 : 1;
    return { x: START_X - 80 + VW / 2 / z, y: narrow() ? TOP - 70 : H / 2, z };
  };
  const lead = () => Math.min(260, VW * 0.2);      // how far ahead of the explorer the camera looks
  function applyCam() {
    const z = camState.z, hw = VW / 2 / z, hh = VH / 2 / z;
    const maxX = inVault && gtiles.length ? gX(gtiles.length - 1) + GW : W;   // the vault bridge is longer than one screen
    const cx = Math.max(hw, Math.min(maxX - hw, camState.x)), cy = Math.max(hh, Math.min(H - hh, camState.y));
    cam.scale.set(z); cam.x = VW / 2 - cx * z; cam.y = VH / 2 - cy * z;
    if (inVault) {
      // the vault backdrop travels with the camera and only drifts a little, so it never runs out
      bgV.x = cx + Math.max(-50, Math.min(50, -(cx - W / 2) * 0.02)); bgV.y = cy;
      follow.x = cx - VW / 2; follow.y = cy - VH / 2;
    } else {
      // parallax: the painted background moves half as much as the bridge
      const px = (cx - W / 2) * 0.5, py = (cy - H / 2) * 0.5;
      bg.x = W / 2 + px; bg.y = H / 2 + py; bgV.x = bg.x; bgV.y = bg.y;
      follow.x = 0; follow.y = 0;
    }
  }
  function camTo(x, y, z, ms) { if (api.reduced) z = 1; return tween(camState, { x, y, z }, ms, 'inOutSine'); }

  /* ---------------- the frame loop ---------------- */
  function frame(tk) {
    const dt = tk.deltaMS, s = dt / 1000, now = performance.now() / 1000;
    tickTweens(dt);
    rig.timeScale = 1 / speedFn();
    rig.update(s);
    torches.forEach((g, i) => { g.alpha = 0.75 + Math.sin(now * 11 + i * 3) * 0.08 + Math.sin(now * 23 + i) * 0.06; g.scale.set(1.6 + Math.sin(now * 7 + i) * 0.05); });
    idolGlow.scale.set(1.5 * (1 + 0.15 * (0.5 + 0.5 * Math.sin(now * Math.PI * 2 / 1.2)))); idolGlow.rotation = now * Math.PI * 2 / 4;
    mist.forEach(m => { m.x += m.vx * s; if (m.x > W + 260) m.x = -260; m.alpha = 0.42 + Math.sin(now * 0.5 + m.ph) * 0.12; });
    dust.forEach(d => { d.x += d.vx * s; d.y += d.vy * s; d.alpha = d.base * (0.7 + 0.3 * Math.sin(now * 3 + d.x)); if (d.y < -20) resetMote(d, false); });
    sparks.forEach(p => {
      if (!p.visible) return;
      p.life -= dt; if (p.life <= 0) { p.visible = false; return; }
      p.vy += p.g * s; p.x += p.vx * s; p.y += p.vy * s; p.alpha = Math.min(0.9, p.life / p.max * 1.5);
    });
    // breathing of the tiles that are still to come (standard 5.3: nothing stands still)
    tiles.forEach((t, i) => { if (!t.falling) t.y = t.home.y + Math.sin(now * 2 + i * 0.7) * 1.2; });
    gtiles.forEach((t, i) => { if (!t.falling) t.y = t.home.y + Math.sin(now * 2 + i * 0.7) * 1.2; });
    // shake: two sines, 18 Hz, exponential decay 12 (standard 5.4); the background moves 1.3x, the bridge 0.8x
    if (shakeAmp > 0.01) {
      shakeT += s; const a = 30 * shakeAmp * Math.exp(-12 * shakeT);
      const ox = Math.sin(shakeT * 2 * Math.PI * 18) * a, oy = Math.sin(shakeT * 2 * Math.PI * 18 * 1.3 + 1) * a * 0.6;
      applyCam(); cam.x += ox * 0.8; cam.y += oy * 0.8; bg.x += ox * 1.3 / cam.scale.x; bg.y += oy * 1.3 / cam.scale.y;
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
  async function hopTo(x, y, { height = 70, ms = 300 } = {}) {
    rig.play('crouch', { mix: 0.05 }); await wait(110);
    sfx('hop');
    rig.play('hop', { mix: 0.04, fadeSwap: 0.05 });
    const x0 = explorer.x, y0 = explorer.y, o = { t: 0 };
    await tween(o, { t: 1 }, ms, 'lin', k => { explorer.x = x0 + (x - x0) * k; explorer.y = y0 + (y - y0) * k - Math.sin(k * Math.PI) * height; });
    rig.play('land', { mix: 0.03, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
  }
  function popText(t, color) {
    t.setColor(color); t.scale.set(0.5);
    tween(t.scale, { x: 1.18, y: 1.18 }, 83, 'outQuad').then(() => tween(t.scale, { x: 1, y: 1 }, 250, 'outBack'));
  }
  function setPlaque(text, sub) { ui.plaqueVal.textContent = text; ui.plaqueSub.textContent = sub || ''; ui.plaque.classList.remove('pop'); void ui.plaque.offsetWidth; ui.plaque.classList.add('pop'); }

  async function trapAt(i, kind) {
    const t = tiles[i - 1]; if (!t) return;
    t.sprite.texture = tex['tile-cracked'];
    sfx('crack'); shake(0.85);
    rig.play('fright', { mix: 0.02, fadeSwap: 0.04 });
    // the beanie flies off backwards
    beanie.visible = true; beanie.x = explorer.x + 6; beanie.y = explorer.y - 140; beanie.rotation = 0; beanie.alpha = 1;
    const b = { t: 0 }, bx = beanie.x, by = beanie.y;
    tween(b, { t: 1 }, 900, 'lin', k => { beanie.x = bx - 140 * k; beanie.y = by - 120 * Math.sin(k * Math.PI) + 260 * k * k; beanie.rotation = -4 * k; beanie.alpha = 1 - Math.max(0, k - 0.75) * 4; });
    // the tile wobbles, cracks and drops into the chasm with a puff of dust
    const o = { t: 0 };
    await tween(o, { t: 1 }, 260, 'lin', k => { t.x = t.home.x + Math.sin(k * 40) * 4 * (1 - k); });
    t.falling = true;
    burst(t.x, t.y + 20, 22, { color: 0x9FC2B0, speed: 300, life: 800, grav: 1100, size: 1.1 });
    tween(t, { y: t.y + 520, rotation: (i % 2 ? 0.5 : -0.4), alpha: 0 }, 900, 'inQuad');
    t.label_.alpha = 0.3;
    // he scrambles back to safety
    const back = i - 1 >= 1 ? tileX(i - 1) : START_X;
    await hopTo(back, standY(), { height: 40, ms: 280 });
    rig.play('fright', { mix: 0.05 });
    await wait(500);
    rig.play('idle', { loop: true, mix: 0.25 });
  }

  /* ---------------- the vault ---------------- */
  const GW = 150, GTOP = 520, GX0 = 260;
  const gX = k => GX0 + k * GW;
  function buildVault(kind) {
    gtiles.forEach(t => t.destroy({ children: true })); gtiles = [];
    const vals = R.vault[kind].values, show = Math.min(vals.length, 60);
    for (let k = 0; k < show; k++) {
      const c = makeTile('tile-gold', Math.min(vals[k], R.cap), NUM.gold, 26); c.sprite.scale.set((GW * 1.0) / c.sprite.texture.width); c.label_.y = c.sprite.height * 0.37;
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
    vaultWorld.addChild(explorer); explorer.x = gX(0); explorer.y = GTOP; rig.view.scale.set(0.36);
    camState = { x: explorer.x + 360, y: GTOP - 90, z: 1.1 }; applyCam();
    ui.ropes.hidden = false; ui.vaultTitle.hidden = false;
    setPlaque(fmtX(R.vault[kind].values[0] + (fromIdol || 0)), 'THE VAULT');
    await wait(900);
    ui.vaultTitle.hidden = true;
  }
  function leaveVault() {
    inVault = false; world.visible = true; vaultWorld.visible = false; bg.visible = true; bgV.visible = false; torches.forEach(g => { g.visible = true; });
    world.addChildAt(explorer, world.children.length - 1); rig.view.scale.set(0.31);
    ui.ropes.hidden = true; ui.vaultTitle.hidden = true;
    gtiles.forEach(t => t.destroy({ children: true })); gtiles = [];
  }

  /* ---------------- big win card (own, so tiers follow each mode's threshold from the math) ---------------- */
  const TIERS = [{ k: 1, label: 'FINE FIND' }, { k: 5, label: 'TREASURE HAUL' }, { k: 25, label: 'TEMPLE FORTUNE' }];
  async function bigWin(ctx, x) {
    const at = MODE[ctx.mode].tuning.bigWinAt;
    if (x < at && !ctx.capped) return;
    let tier = 0; TIERS.forEach((t, i) => { if (x >= t.k * at) tier = i; });
    const label = ctx.capped ? 'LEGEND OF THE VAULT' : TIERS[tier].label;
    const card = ui.big; card.dataset.tier = String(ctx.capped ? 3 : tier); card.hidden = false;
    ui.bigLabel.textContent = label; ui.bigAmt.textContent = ctx.winMoney(0);
    rig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'winLoop', thenMix: 0.05 });
    SND.emit('bigWin'); SND.hold(0.05);
    const stopCount = SND.count((1600 + tier * 900) * speedFn() / 1000, ctx.capped ? 4 : tier);
    const dur = (1600 + tier * 900) * speedFn(), t0 = performance.now(), units = ctx.winUnits;
    let done = false;
    skipBig = () => { done = true; };
    while (!done) {
      const p = Math.min(1, (performance.now() - t0) / dur);
      ui.bigAmt.textContent = ctx.money(Math.round(units * (1 - Math.pow(1 - p, 3))));
      if (Math.random() < 0.5) burst(explorer.x + (Math.random() - 0.5) * 40, explorer.y - 120, 3, { color: GOLD, speed: 650, life: 1300, grav: 1300, size: 1.2 });
      if (p >= 1) break;
      await new Promise(r => setTimeout(r, 40));
    }
    ui.bigAmt.textContent = ctx.winMoney(units); stopCount(); SND.emit('countEnd');
    done = false; skipBig = () => { done = true; };
    const end = performance.now() + 1600 * speedFn();
    while (!done && performance.now() < end) await new Promise(r => setTimeout(r, 40));
    skipBig = null; card.hidden = true; SND.hold(1);
  }

  // after a round, the tiles that fell rise back out of the chasm (the bridge never stays broken between rounds)
  function restoreBridge() {
    tiles.forEach((t, i) => {
      if (!t.falling) return;
      stopTweens(t); t.falling = false; t.rotation = 0; t.x = t.home.x; t.y = t.home.y + 140; t.alpha = 0;
      t.sprite.texture = tex[i + 1 >= 10 ? 'tile-cracked' : 'tile']; t.label_.alpha = i + 1 < (MODE[mode].flag || 4) ? 0.55 : 1;
      tween(t, { y: t.home.y, alpha: 1 }, 520, 'outBack').then(() => { burst(t.x, t.y + 10, 8, { color: 0x9FC2B0, speed: 160, life: 500, grav: 600, size: 0.7 }); });
    });
  }

  /* ---------------- the round ---------------- */
  function reset() {
    tweens.clear(); skipBig = null;
    if (inVault) leaveVault();
    explorer.x = START_X; explorer.y = standY(); explorer.rotation = 0;
    beanie.visible = false; idolS.visible = true; idolS.y = TOP + 6; idolS.alpha = 1;
    buildBridge();
    camState = homeCam(); applyCam();
    rig.play('idle', { loop: true, mix: 0.15 });
    setPlaque('—', 'FLAG ON TILE ' + (MODE[mode].flag || '-'));
    ui.big.hidden = true; ui.ropes.hidden = true; ui.vaultTitle.hidden = true;
  }

  async function play(events, ctx) {
    speedFn = ctx.speed;
    if (MODE[ctx.mode] && MODE[ctx.mode].flag) mode = ctx.mode;
    reset();
    const flag = MODE[ctx.mode].flag;
    let win = 0, reach = 0, vaultKind = null, from = 0, ropes = 0, gk = 0;
    SND.wake(); SND.playMusic('temple', 0); SND.setLevel(1);
    if (flag) await camTo(explorer.x + lead(), TOP - 110, 1.32, 520);
    for (const e of events) {
      if (!e || !e.type) continue;
      if (e.type === 'hop') {
        await hopTo(tileX(e.i), standY());
        reach = e.i;
        const t = tiles[e.i - 1];
        camTo(Math.min(explorer.x + lead(), W), TOP - 110, 1.32, 420);
        if (e.i >= flag) {
          win = R.ladder[ctx.mode][e.i - 1];
          popText(t.label_, NUM.gold); t.label_.alpha = 1;
          ctx.setWin(ctx.units(win), true); musicFor(ctx, win);
          if (e.i === flag) {
            sfx('flag'); burst(flagS.x + 10, flagS.y - 80, 26, { color: GOLD, speed: 380, life: 900, grav: 700 });
            tween(flagS.scale, { x: flagS.scale.x * 1.15, y: flagS.scale.y * 1.15 }, 120).then(() => tween(flagS.scale, { x: FLAG_H / flagS.texture.height, y: FLAG_H / flagS.texture.height }, 300, 'outBack'));
            setPlaque(fmtX(win), 'SECURED AT THE FLAG');
          } else { sfx('step', e.i - flag); setPlaque(fmtX(win), 'TILE ' + e.i); }
        }
        if (e.i === N - 1) SND.tension(true);          // one tile from the idol: the music holds its breath (6.4)
        await wait(90);
      } else if (e.type === 'trap') {
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
        setPlaque(fmtX(win), 'THE IDOL');
        await wait(700);
      } else if (e.type === 'vault') {
        vaultKind = e.kind; from = e.from; ropes = e.ropes; gk = 0;
        await enterVault(e.kind, from);
        ctx.setWin(ctx.units(Math.min(R.cap, from + R.vault[e.kind].values[0])), true);
      } else if (e.type === 'gold') {
        await hopTo(gX(e.k), GTOP, { height: 80, ms: 280 });
        gk = e.k; const t = gtiles[e.k];
        if (t) { popText(t.label_, '#FFF2B8'); burst(t.x, t.y, 10, { color: GOLD, speed: 260, life: 600, grav: 500 }); }
        const run = Math.min(R.cap, from + e.v);             // a round never shows more than the max win
        sfx('gold', e.k); ctx.setWin(ctx.units(run), true);
        setPlaque(fmtX(run), run >= R.cap ? 'MAX WIN' : 'GOLDEN TILE ' + e.k);
        camTo(explorer.x + 360, GTOP - 90, 1.1, 360);
        await wait(60);
      } else if (e.type === 'snap') {
        await hopTo(gX(e.k), GTOP, { height: 80, ms: 280 });
        const t = gtiles[e.k];
        sfx('snap'); shake(0.6);
        rig.play('fright', { mix: 0.02, fadeSwap: 0.04 });
        if (t) { t.falling = true; burst(t.x, t.y + 10, 18, { color: GOLD, speed: 300, life: 700, grav: 1000 }); tween(t, { y: t.y + 480, rotation: 0.4, alpha: 0 }, 800, 'inQuad'); }
        const icon = ui.ropes.children[ropes - 1]; if (icon) icon.classList.add('gone');
        ropes = e.ropes;
        // the rope pulls him back to the tile he came from
        const ex = explorer.x, ey = explorer.y, o = { t: 0 };
        await tween(o, { t: 1 }, 240, 'inQuad', k => { explorer.y = ey + 70 * k; });
        await tween(o, { t: 0 }, 1, 'lin');
        const bx = gX(gk);
        await tween(o, { t: 1 }, 380, 'outQuad', k => { explorer.x = ex + (bx - ex) * k; explorer.y = ey + 70 - (70 + Math.sin(k * Math.PI) * 60) * k; });
        explorer.y = GTOP; rig.play('land', { mix: 0.03, fadeSwap: 0.05, then: 'idle', thenMix: 0.2 });
        // rebuild the fallen tile for the next try (a fresh golden tile rises in its place)
        if (t) { stopTweens(t); t.falling = false; t.y = t.home.y + 60; t.rotation = 0; t.alpha = 0; tween(t, { y: t.home.y, alpha: 1 }, 420, 'outBack'); }
        await wait(220);
      } else if (e.type === 'final') {
        if (ropes === 0 && vaultKind) { setPlaque(fmtX(e.payout), 'THE VAULT CLOSES'); await wait(400); }
      }
    }
    // after the run: a small cheer for a real win, the card for a big one
    const x = ctx.winX;
    if (x >= Math.max(1, ctx.cost) && x < MODE[ctx.mode].tuning.bigWinAt) {
      rig.play('win', { mix: 0.03, fadeSwap: 0.04, then: 'idle', thenMix: 0.3 });
      SND.emit('winSmall');
      await wait(650);
    }
    await bigWin(ctx, x);
    if (flag && !inVault) { const h = homeCam(); await camTo(narrow() ? explorer.x + VW * 0.1 : h.x, h.y, h.z, 520); }
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
      <p>Twelve stone tiles cross the chasm. Before the round, choose where the explorer plants his <b>flag</b>: on tile 2, 3, 4, 5 or 6. Press PLAY and he hops from tile to tile on his own until a tile gives way or he reaches the idol.</p>
      <p>If a tile gives way before the flag, the round wins nothing. From the flag on, the round wins the value on the farthest tile he stood on. Tiles 10, 11 and 12 are cracked and give way more often.</p>
      <p>Everything is decided when the round starts. The flag is the only choice, and it is made before the round.</p>
      <h3>Tile values</h3><table><thead>${head}</thead><tbody>${rows}</tbody></table>
      <h3>The idol and the Vault</h3>
      <p>Tile 12 holds the idol. Reaching it wins the value of tile 12 and opens <b>the Vault</b> at once.</p>
      <p>In the Vault the explorer crosses a golden bridge with ${v.ropes} ropes. Each golden tile he reaches is worth more (about +15% a tile, from ${fmtX(v.values[0])}). When a golden tile gives way a rope catches him and he tries again from where he was. When the last rope is used, the Vault wins the value of the farthest golden tile, added to the idol's value.</p>
      <p>The Vault cannot be triggered again from inside the Vault.</p>
      <h3>Golden tile values</h3>
      <table><thead><tr><th>Golden tile</th><th>The Vault (idol and VAULT)</th><th>GRAND VAULT</th></tr></thead><tbody>${Array.from({ length: Math.max(v.values.length, g.values.length) }, (_, k) => '<tr><td>' + k + (k === 0 ? ' (start)' : '') + '</td><td>' + (k < v.values.length ? fmtX(Math.min(v.values[k], R.cap)) : '—') + '</td><td>' + (k < g.values.length ? fmtX(Math.min(g.values[k], R.cap)) : '—') + '</td></tr>').join('')}</tbody></table>
      <p>After the idol, the Vault adds the golden tile value to the value of tile 12.</p>
      <h3>Features</h3>
      <p><b>VAULT</b> is played for ${feats[0].cost}× the play amount and starts straight in the Vault with ${v.ropes} ropes, from ${fmtX(v.values[0])}.</p>
      <p><b>GRAND VAULT</b> is played for ${feats[1].cost}× the play amount and starts in the Vault with ${g.ropes} ropes, from ${fmtX(g.values[0])}.</p>
      <h3>In the game</h3>
      <p>The plaque at the top shows the value the explorer holds right now. Tap the win card, or press Space, to skip its count; tap again to close it.</p>
      <h3>Max win</h3><p>Every round wins at most ${(R.cap / 100).toLocaleString('en')}× the play amount. The round ends when it gets there.</p>`;
  }

  /* ---------------- boot ---------------- */
  const card = (img, title, text) => ({ art: `<img src="${ART[img]}" alt="">`, title, text });
  LZ.boot({
    id: 'last-step', title: 'Last Step', tagline: 'Plant your flag. Cross the temple bridge. Reach the idol.', rtp: '96.30', layout: 'side',
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
      card('rope', 'THE VAULT', 'A golden bridge. Ropes catch the explorer when a tile gives way.'),
    ],
    rules: rulesHtml(),
    async mount(stage, a) {
      api = a; SND.init(a);
      const box = a.h('div', { class: 'ls-box' });
      stage.append(box);
      // the box fills the stage at any shape from 3:4 to 16:9 (a big board on a portrait phone, standard 8.7)
      const fitBox = () => {
        const r = stage.getBoundingClientRect(), cs = getComputedStyle(stage);
        const w = r.width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), h = r.height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        if (w <= 0 || h <= 0) return;
        const ratio = Math.max(0.75, Math.min(16 / 9, w / h)), bw = Math.min(w, h * ratio), bh = bw / ratio;
        box.style.width = Math.floor(bw) + 'px'; box.style.height = Math.floor(bh) + 'px';
        box.style.setProperty('--u', (Math.min(bw, bh * 16 / 9) / 100 * (ratio < 1.2 ? 1.3 : 1)).toFixed(3) + 'px');
      };
      new ResizeObserver(fitBox).observe(stage); fitBox();
      await document.fonts.load('40px Limelight').catch(() => {});
      for (const k of Object.keys(ART)) tex[k] = await loadTex(k);
      app = new PIXI.Application();
      await app.init({ resizeTo: box, backgroundAlpha: 0, antialias: true, resolution: Math.min(2, window.devicePixelRatio || 1), autoDensity: true, preference: 'webgl' });
      box.append(app.canvas);
      buildScene();
      const fitScene = () => {
        const bw = box.clientWidth, bh = box.clientHeight; if (!bw || !bh) return;
        const s = Math.max(bw / W, bh / H); scene.scale.set(s); VW = bw / s; VH = bh / s;
        if (!api.busy) { camState = inVault ? camState : homeCam(); } applyCam();
      };
      fitScene(); new ResizeObserver(fitScene).observe(box);
      // HUD in the DOM (crisp text at every size)
      ui.plaque = a.h('div', { class: 'ls-plaque' }, ui.plaqueVal = a.h('b', { text: '—' }), ui.plaqueSub = a.h('small', { text: '' }));
      ui.ropes = a.h('div', { class: 'ls-ropes', hidden: '' });
      ui.vaultTitle = a.h('div', { class: 'ls-title', hidden: '', text: 'THE VAULT' });
      ui.wipe = a.h('div', { class: 'ls-wipe' });
      ui.big = a.h('div', { class: 'ls-big', hidden: '' }, a.h('div', { class: 'ls-big-card' }, ui.bigLabel = a.h('b', { text: '' }), ui.bigAmt = a.h('strong', { text: '' }), a.h('small', { text: 'tap to continue' })));
      box.append(ui.plaque, ui.ropes, ui.vaultTitle, ui.wipe, ui.big);
      ui.big.addEventListener('pointerdown', () => skipBig && skipBig());
      window.addEventListener('keydown', ev => { if ((ev.code === 'Space' || ev.code === 'Enter') && skipBig) { ev.preventDefault(); skipBig(); } }, true);
      app.ticker.add(frame);
      document.addEventListener('visibilitychange', () => { if (document.hidden) app.ticker.stop(); else app.ticker.start(); });
      reset();
    },
    reset,
    play,
    idle() {
      if (inVault) { setTimeout(() => { if (!api.busy && inVault) { ui.wipe.classList.remove('go'); void ui.wipe.offsetWidth; ui.wipe.classList.add('go'); setTimeout(() => { if (!api.busy) reset(); }, 380); } }, 1400); return; }
      rig.play('idle', { loop: true, mix: 0.3 });
      setTimeout(() => { if (!api.busy) restoreBridge(); }, 700);
    },
    onMode(name) {
      if (!MODE[name] || !MODE[name].flag) return;
      mode = name; if (!app) return;
      if (inVault) { reset(); return; }
      buildBridge(); placeFlag(true);
      setPlaque('—', 'FLAG ON TILE ' + MODE[name].flag);
    },
    onFast() {},
    onStart() { SND.wake(); SND.playMusic('temple', 0); },
    onSound(on) { if (on) { SND.wake(); SND.playMusic('temple', SND.level); } },
  });
})();
