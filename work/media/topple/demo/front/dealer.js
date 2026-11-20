/* Topple: the dealer. A rigged 3D character (Meshy auto-rig, 24 bones) moved by motion-capture clips from the Meshy
 * library, blended with an AnimationMixer, plus a brass monocle that is its own object on his head bone so it stays sharp
 * and can fly off on a big win.
 *
 * window.ToppleDealer(THREE, gltfScene, opts, clips) -> dealer
 *   clips: the GLB's animations, named idle, rub, walk, throw, win, big, lose, bow (tools/build-dealer-anims.mjs)
 *   root            the Object3D to add to a scene (feet on y = 0, facing +Z, 1.95 m tall)
 *   base(name)      the state he returns to after a one-shot: 'idle' between rounds, 'rub' while a round plays
 *   play(name)      one-shots: 'throw' | 'win' | 'big' | 'lose' | 'bow';  'pace' = walk a few steps and back (idle only)
 *   onRelease       set to a function: called when the ball leaves his hand in 'throw'
 *   update(dt)      call every frame
 *   look(x, y)      -1..1, where his head turns (on top of the clip), 0,0 = the camera
 *   inner(sign)     +1 / -1: the side of his box that faces the stage (he paces towards it)
 * Every move is a recorded human performance; code only blends them, turns him while he walks, and adds the head turn. */
(function () {
  'use strict';
  window.ToppleDealer = function (T, model, opt, clips) {
    opt = opt || {}; clips = clips || [];
    const root = new T.Group(), body = new T.Group(); root.add(body); body.add(model);
    // a soft contact shadow under his shoes; it is in 'body', so it walks with him
    const shC = document.createElement('canvas'); shC.width = shC.height = 64; { const g = shC.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, 'rgba(0,0,0,.6)'); r.addColorStop(0.6, 'rgba(0,0,0,.25)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); }
    const foot = new T.Mesh(new T.PlaneGeometry(0.62, 0.42), new T.MeshBasicMaterial({ map: new T.CanvasTexture(shC), transparent: true, depthWrite: false, toneMapped: false }));
    foot.rotation.x = -Math.PI / 2; foot.position.y = 0.003; foot.renderOrder = 1; body.add(foot);
    const B = {}; model.traverse(o => { if (o.isBone) B[o.name] = o; if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; } });
    const V = (x, y, z) => new T.Vector3(x, y, z).normalize(), q = new T.Quaternion(), qp = new T.Quaternion(), qi = new T.Quaternion();
    // extra rotation of a bone around a model-space axis (radians), applied after the clip has posed it
    function turn(name, axis, ang) {
      const b = B[name]; if (!b || !ang) return;
      const ax = axis.clone().transformDirection(model.matrixWorld);
      q.setFromAxisAngle(ax, ang); b.parent.getWorldQuaternion(qp); qi.copy(qp).invert();
      b.quaternion.premultiply(qi.clone().multiply(q).multiply(qp));
    }

    // ---------- clips ----------
    const mixer = new T.AnimationMixer(model), A = {}, LOOP = { idle: 1, rub: 1, walk: 1 };
    for (const c of clips) {
      const a = mixer.clipAction(c); A[c.name] = a;
      if (LOOP[c.name]) a.setLoop(T.LoopRepeat, Infinity); else { a.setLoop(T.LoopOnce, 1); a.clampWhenFinished = true; }
    }
    // per clip: playback speed, where in the clip it starts (the throw skips most of its wind-up), and the clip time at
    // which the ball leaves his right hand: the bottom of the downward swing, hand at hip height and in front of him
    // (the fastest point, 3.45 s, still has the hand up by his head)
    const SPEED = { throw: 1.2, win: 1, big: 1, lose: 1.05, bow: 1.35 }, START = { throw: 2.75 }, RELEASE_T = 3.56;
    let cur = null, curName = '', baseName = 'idle', released = false;
    function fadeTo(name, dur) {
      const next = A[name]; if (!next) return false;
      if (next === cur && LOOP[name]) return true;
      next.reset(); next.time = START[name] || 0; next.timeScale = SPEED[name] || 1; next.setEffectiveWeight(1); next.fadeIn(dur).play();
      if (cur && cur !== next) cur.fadeOut(dur);
      cur = next; curName = name; released = false; return true;
    }

    // ---------- pacing: a few slow steps towards the stage and back, between rounds ----------
    // his spot is the back of his stage, on the curtain side; he paces from there towards the stage side and back
    const WALK_V = 0.42, FAR = 0.42, HOME = 0.3, BACK = -0.12;   // walk speed (m/s), the far point, home offset, depth
    let pace = null, side = 1, yaw = 0, x = -HOME;
    const home = () => -side * HOME;
    const ease = k => (k <= 0 ? 0 : k >= 1 ? 1 : k * k * (3 - 2 * k)), face = d => (d > 0 ? Math.PI / 2 : -Math.PI / 2);
    function startPace() {
      if (!A.walk || pace) return;
      pace = { ph: 0, t: 0, to: side * FAR };
      fadeTo('walk', 0.5);
    }
    function stepPace(dt) {
      const p = pace; p.t += dt;
      if (p.ph === 0) { yaw = face(p.to - x) * ease(p.t / 0.6); if (p.t >= 0.6) { p.ph = 1; p.t = 0; } }
      else if (p.ph === 1) { const d = p.to - x; x += Math.sign(d) * Math.min(Math.abs(d), WALK_V * dt); if (Math.abs(p.to - x) < 1e-3) { p.ph = 2; p.t = 0; p.y0 = yaw; } }
      else if (p.ph === 2) { yaw = p.y0 + (face(-side) - p.y0) * ease(p.t / 0.7); if (p.t >= 0.7) { p.ph = 3; p.t = 0; } }
      else if (p.ph === 3) { const d = home() - x; x += Math.sign(d) * Math.min(Math.abs(d), WALK_V * dt); if (Math.abs(home() - x) < 1e-3) { x = home(); p.ph = 4; p.t = 0; p.y0 = yaw; fadeTo(baseName, 0.6); } }
      else if (p.ph === 4) { yaw = p.y0 * (1 - ease(p.t / 0.6)); if (p.t >= 0.6) { yaw = 0; pace = null; } }
    }
    // a pace cut short (a round starts): he turns back to the front where he stands
    let unturn = null;
    function stopPace() { if (pace) { pace = null; unturn = { y0: yaw, t: 0 }; } }

    // ---------- the monocle: a brass ring, a pane of glass and a fine chain to the lapel ----------
    const head = B.Head, brass = new T.MeshStandardMaterial({ color: 0xc99a3c, metalness: 1, roughness: 0.22 });
    const glassM = new T.MeshStandardMaterial({ color: 0xdfe8ff, metalness: 0, roughness: 0.04, transparent: true, opacity: 0.22, depthWrite: false });
    const mono = new T.Group(), ring = new T.Mesh(new T.TorusGeometry(0.023, 0.0036, 12, 48), brass), pane = new T.Mesh(new T.CircleGeometry(0.022, 32), glassM);
    mono.add(ring, pane); ring.castShadow = true;
    const monoHome = new T.Group(); head.add(monoHome);
    // his left eye (+X), measured by raycasting the mesh in its rest pose (the Head bone of this rig sits at the jaw)
    model.updateMatrixWorld(true);
    const eye = new T.Vector3(0.036, 1.812, 0.092).applyMatrix4(model.matrixWorld);
    monoHome.position.copy(head.worldToLocal(eye.clone()));
    monoHome.quaternion.copy(head.getWorldQuaternion(new T.Quaternion()).invert());
    monoHome.scale.setScalar(1 / head.getWorldScale(new T.Vector3()).x);              // the skeleton is in centimetres (scale 0.01)
    monoHome.add(mono);
    const chainPts = 14, chainGeo = new T.BufferGeometry().setFromPoints(Array.from({ length: chainPts }, () => new T.Vector3()));
    const chain = new T.Line(chainGeo, new T.LineBasicMaterial({ color: 0xd8b25a })); chain.frustumCulled = false; root.add(chain);
    // where the chain is pinned: a point on his left lapel, kept in the chest bone's own frame so it follows bows and turns
    const chest = B.Spine02 || B.Spine01 || B.Spine, lapelLocal = chest.worldToLocal(new T.Vector3(0.075, 1.5, 0.11).applyMatrix4(model.matrixWorld));
    const lapel = new T.Vector3(); let monoFly = null;
    function popMonocle() { const p = mono.getWorldPosition(new T.Vector3()); root.worldToLocal(p); root.add(mono); mono.position.copy(p); mono.rotation.set(0, 0, 0); monoFly = { t: 0, v: new T.Vector3(0.05, 1.5, 0.45), spin: 13 }; }
    function updateMono(dt) {
      if (monoFly) {
        const f = monoFly; f.t += dt;
        if (f.t < 0.95) { f.v.y -= 4.6 * dt; mono.position.addScaledVector(f.v, dt); mono.rotation.x += f.spin * dt; mono.rotation.y += f.spin * 0.6 * dt; }
        else {
          const home = monoHome.getWorldPosition(new T.Vector3()); root.worldToLocal(home);
          const k = Math.min(1, (f.t - 0.95) / 0.35), e = ease(k);
          mono.position.lerp(home, e); mono.rotation.x *= 1 - e; mono.rotation.y *= 1 - e;
          if (k >= 1) { monoHome.add(mono); mono.position.set(0, 0, 0); mono.rotation.set(0, 0, Math.sin(f.t * 30) * 0.15 * Math.exp(-(f.t - 1.3) * 6)); if (f.t > 2) { mono.rotation.set(0, 0, 0); monoFly = null; } }
        }
      }
      // the chain hangs from the monocle to his lapel, sagging under its own weight
      const a = mono.getWorldPosition(new T.Vector3()); root.worldToLocal(a);
      lapel.copy(lapelLocal); chest.localToWorld(lapel); root.worldToLocal(lapel);
      const pos = chainGeo.attributes.position, d = a.distanceTo(lapel);
      for (let i = 0; i < chainPts; i++) { const t = i / (chainPts - 1); pos.setXYZ(i, a.x + (lapel.x - a.x) * t, a.y + (lapel.y - a.y) * t - Math.sin(t * Math.PI) * d * 0.28, a.z + (lapel.z - a.z) * t); }
      pos.needsUpdate = true;
    }

    // ---------- per frame ----------
    const look = { x: 0, y: 0 }, lookS = { x: 0, y: 0 }, HEADUP = { rub: 0.32 };
    let headUp = 0, popped = false, fire = false;
    fadeTo('idle', 0);
    function update(dt) {
      if (pace) stepPace(dt);
      else if (unturn) { unturn.t += dt; yaw = unturn.y0 * (1 - ease(unturn.t / 0.35)); if (unturn.t >= 0.35) { yaw = 0; unturn = null; } }
      else { const want = curName === 'throw' && cur && cur.time < 4.2 ? side * 1.05 : 0; yaw += (want - yaw) * Math.min(1, dt * (want ? 9 : 3)); }   // he turns to the table to throw
      mixer.update(dt);
      // a one-shot hands back to the base state a little before its end, so the two overlap instead of freezing
      if (cur && !LOOP[curName]) {
        const c = cur.getClip(), left = (c.duration - cur.time) / (cur.timeScale || 1);
        if (curName === 'throw' && !released && cur.time >= RELEASE_T) { released = true; fire = true; }
        if (curName === 'big' && !popped && cur.time > 0.35 && !opt.reduced) { popped = true; popMonocle(); }
        if (left < 0.55) fadeTo(baseName, 0.55);
      }
      body.position.set(x, 0, BACK); body.rotation.y = yaw;
      model.updateMatrixWorld(true);
      // the head: where the game wants him to look, plus lifting his chin while he schemes so the face stays visible
      lookS.x += (look.x - lookS.x) * Math.min(1, dt * 3); lookS.y += (look.y - lookS.y) * Math.min(1, dt * 3);
      headUp += ((HEADUP[curName] || 0) - headUp) * Math.min(1, dt * 3);
      const free = 1 - Math.min(1, Math.abs(yaw) / 1.2);                  // no look-at while he walks sideways
      turn('neck', V(0, 1, 0), lookS.x * 0.18 * free); turn('Head', V(0, 1, 0), lookS.x * 0.27 * free);
      turn('neck', V(1, 0, 0), -(lookS.y * 0.1 + headUp * 0.4)); turn('Head', V(1, 0, 0), -(lookS.y * 0.15 + headUp * 0.6));
      model.updateMatrixWorld(true);
      updateMono(dt);
      if (fire) { fire = false; if (api.onRelease) api.onRelease(); }   // after the pose is final, so the hand is where it is drawn
    }
    const api = {
      root, bones: B, onRelease: null, hand: () => B.RightHand,
      base(name, quiet) { if (!A[name]) name = 'idle'; baseName = name; if (pace && name !== 'idle') stopPace(); if (!quiet && LOOP[curName] && curName !== name && !pace) fadeTo(name, 0.45); },
      has(name) { return !!A[name]; },
      play(name) {
        if (name === 'pace') { if (curName === 'idle' && !pace) startPace(); return; }
        if (opt.reduced && name === 'big') name = 'win';
        stopPace();
        if (name === 'big') popped = false;
        if (!fadeTo(name, 0.3) && name === 'throw' && api.onRelease) api.onRelease();
      },
      update, look(lx, ly) { look.x = lx; look.y = ly; }, inner(s) { const n = s >= 0 ? 1 : -1; if (n !== side) { side = n; if (!pace) x = home(); } },
      get clip() { return pace ? 'walk' : curName; }, get x() { return x; }, get yaw() { return yaw; }
    };
    return api;
  };
})();
