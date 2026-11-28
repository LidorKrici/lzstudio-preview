/* The pilot on her leaf glider, as an LZ Rig (format: _shared/rig/README.md).
 * Three part images ride their bones: the glider (720 x 309), the pilot hanging from its bar by her fists (480 x 476),
 * and a face drawn over her own for the expressions (296 x 300 heads, all framed alike, at 0.7).
 * The neutral face is the body drawing's own; the head slot is hidden (alpha 0) until an expression shows it.
 * Bones are px in the art's own scale; the game scales the whole view. Origin = the glider's centre. */
window.SB_RIG = {
  lzrig: 1, name: 'pilot',
  size: [720, 720], origin: [0.5, 0.5],
  images: { glider: 'glider', pilot: 'pilot', 'head-neutral': 'head-neutral', 'head-blink': 'head-blink', 'head-tense': 'head-tense',
    'head-cheer': 'head-cheer', 'head-scared': 'head-scared', 'head-dazed': 'head-dazed' },
  bones: [
    { name: 'root', length: 30 },
    { name: 'glider', parent: 'root', length: 60 },
    { name: 'body', parent: 'glider', x: 12, y: 128, length: 60 },      // the middle of the bar, where her fists hold on
    { name: 'head', parent: 'body', x: -6, y: 86, length: 40 },         // the middle of her face in the body drawing
    { name: 'scarf', parent: 'body', x: -60, y: 178, length: 60 },      // where the scarf leaves her neck
    { name: 'legs', parent: 'body', x: -120, y: 300, length: 80 },      // her hips: the legs trail from here
  ],
  slots: [
    { name: 'pilot', bone: 'body', attachment: 'pilot' },
    { name: 'glider', bone: 'glider', attachment: 'glider' },
    { name: 'head', bone: 'head', attachment: 'head-neutral', alpha: 0 },
  ],
  attachments: {
    glider: { type: 'region', image: 'glider', anchor: [0.5, 0.5] },
    // the body drawing is skinned: head, scarf and legs follow their own bones, everything else the body (soft edges in
    // empty or flat places, standard 5.7 / README "skinning a single image")
    pilot: {
      type: 'skin', image: 'pilot', root: 'body', size: [480, 476], origin: [0.712, 0.07], grid: 18,
      weights: [
        { bone: 'head', circle: [0.70, 0.24, 0.17], soft: 0.05 },
        { bone: 'scarf', box: [0.0, 0.42, 0.20, 0.50], soft: 0.06 },
        { bone: 'legs', box: [0.0, 0.62, 0.66, 1.05], soft: 0.07 },
      ],
    },
    'head-neutral': { type: 'region', image: 'head-neutral', anchor: [0.5, 0.5], scaleX: 0.7, scaleY: 0.7 },
    'head-blink': { type: 'region', image: 'head-blink', anchor: [0.5, 0.5], scaleX: 0.7, scaleY: 0.7 },
    'head-tense': { type: 'region', image: 'head-tense', anchor: [0.5, 0.5], scaleX: 0.7, scaleY: 0.7 },
    'head-cheer': { type: 'region', image: 'head-cheer', anchor: [0.5, 0.5], scaleX: 0.7, scaleY: 0.7 },
    'head-scared': { type: 'region', image: 'head-scared', anchor: [0.5, 0.5], scaleX: 0.7, scaleY: 0.7 },
    'head-dazed': { type: 'region', image: 'head-dazed', anchor: [0.5, 0.5], scaleX: 0.7, scaleY: 0.7 },
  },
  every: [{ anim: 'blink', track: 3, min: 2.2, max: 5.0, when: ['rest', 'fly'] }],
  animations: {
    // in the sling, waiting: the glider breathes, she swings a little under the bar
    rest: {
      duration: 2.6, loop: true,
      bones: {
        glider: { rotate: [[0, -2, 'inOutSine'], [1.3, 1, 'inOutSine'], [2.6, -2]] },
        body: { rotate: [[0, 2, 'inOutSine'], [1.45, -3, 'inOutSine'], [2.6, 2]] },
        head: { rotate: [[0, 0, 'inOutSine'], [1.3, -3, 'inOutSine'], [2.6, 0]] },
        legs: { rotate: [[0, 3, 'inOutSine'], [1.3, -5, 'inOutSine'], [2.6, 3]] },
        scarf: { rotate: [[0, 0, 'inOutSine'], [0.65, 4, 'inOutSine'], [1.3, -2, 'inOutSine'], [1.95, 3, 'inOutSine'], [2.6, 0]] },
      },
    },
    // gliding: a slow bob, she swings behind the bar (follow-through, 0.07 s late)
    fly: {
      duration: 1.4, loop: true,
      bones: {
        root: { translate: [[0, 0, 0, 'inOutSine'], [0.7, 0, -7, 'inOutSine'], [1.4, 0, 0]] },
        glider: { rotate: [[0, 1.5, 'inOutSine'], [0.7, -1.5, 'inOutSine'], [1.4, 1.5]] },
        body: { rotate: [[0, 6, 'inOutSine'], [0.77, -2, 'inOutSine'], [1.4, 6]] },
        legs: { rotate: [[0, -4, 'inOutSine'], [0.45, 7, 'inOutSine'], [0.9, -2, 'inOutSine'], [1.4, -4]] },
        scarf: { rotate: [[0, 0, 'inOutSine'], [0.175, 7, 'inOutSine'], [0.35, -3, 'inOutSine'], [0.525, 6, 'inOutSine'], [0.7, -4, 'inOutSine'], [0.875, 7, 'inOutSine'], [1.05, -3, 'inOutSine'], [1.225, 5, 'inOutSine'], [1.4, 0]] },
        head: { rotate: [[0, -2, 'inOutSine'], [0.7, 3, 'inOutSine'], [1.4, -2]] },
      },
    },
    // pulled back in the band: nose up, legs swing forward, holding on hard
    pull: {
      duration: 0.25, loop: false,
      bones: {
        glider: { rotate: [[0, 0, 'outQuad'], [0.25, -9]] },
        body: { rotate: [[0, 0, 'outBack'], [0.25, 14]] },
      },
      slots: { head: { attachment: [[0, 'head-tense', 'stepped']], alpha: [[0, 0], [0.08, 1]] } },
    },
    // the snap of the release: stretch along the flight, then settle
    launch: {
      duration: 0.4, loop: false,
      events: [[0, 'launch', {}]],
      bones: {
        root: { scale: [[0, 1.12, 0.88, 'outQuad'], [0.12, 0.92, 1.1, 'inOutQuad'], [0.4, 1, 1]] },
        body: { rotate: [[0, 22, 'outBack'], [0.4, 4]] },
      },
      slots: { head: { attachment: [[0, 'head-cheer', 'stepped']], alpha: [[0, 1], [0.3, 1], [0.4, 0]] } },
    },
    // a pickup: a quick happy bump
    grab: {
      duration: 0.3, loop: false,
      bones: { root: { scale: [[0, 1, 1, 'outQuad'], [0.08, 1.06, 0.95, 'inOutQuad'], [0.3, 1, 1]] } },
      slots: { head: { attachment: [[0, 'head-cheer', 'stepped']], alpha: [[0, 1], [0.24, 1], [0.3, 0]] } },
    },
    // the sparrows hit: shake, scared face
    flinch: {
      duration: 0.7, loop: false,
      bones: {
        glider: { rotate: [[0, 0], [0.06, -9], [0.14, 7], [0.24, -5], [0.34, 3], [0.7, 0]] },
        body: { rotate: [[0, 0, 'outBack'], [0.1, -16, 'inOutSine'], [0.7, 0]] },
        legs: { rotate: [[0, 0, 'outBack'], [0.12, -18, 'inOutSine'], [0.7, 0]] },
      },
      slots: { head: { attachment: [[0, 'head-scared', 'stepped']], alpha: [[0, 1], [0.6, 1], [0.7, 0]] } },
    },
    // touching down and sliding: nose down, she swings forward
    land: {
      duration: 0.57, loop: false,
      events: [[0, 'land', {}]],
      bones: {
        root: { scale: [[0, 1, 1, 'outQuad'], [0.13, 1.15, 0.88, 'inOutQuad'], [0.3, 0.92, 1.12], [0.57, 1, 1]] },
        glider: { rotate: [[0, 4, 'outQuad'], [0.57, 1]] },
        body: { rotate: [[0, -18, 'outBack'], [0.57, -4]] },
      },
    },
    cheer: {
      duration: 1.2, loop: true,
      bones: { root: { translate: [[0, 0, 0, 'outQuad'], [0.3, 0, -14, 'inQuad'], [0.6, 0, 0, 'outQuad'], [0.9, 0, -8, 'inQuad'], [1.2, 0, 0]] } },
      slots: { head: { attachment: [[0, 'head-cheer', 'stepped']], alpha: [[0, 1]] } },
    },
    blink: { duration: 0.14, loop: false, slots: { head: { attachment: [[0, 'head-blink', 'stepped']], alpha: [[0, 1], [0.14, 0]] } } },
  },
};
