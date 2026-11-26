/* The explorer's monkey, as an LZ Rig (format: _shared/rig/README.md). He is the one who hops on the tiles; the
 * explorer stands outside the board and reacts (2026-11-21, the user's layout: a board in a frame and the main
 * character beside it). One 512 x 512 drawing per pose, all on the same canvas and scale (soles at y = 497, see
 * art/prod/raw/monkey-frame.json). The drawings are whole-body, so the motion is squash and stretch of the root. */
// Where his beanie sits (rig px from his feet) and how wide it is, for the beanie that flies off when a tile gives way.
window.LS_MONKEY = { beanie: { x: -20, y: -436, w: 143 } };
window.LS_MONKEY_RIG = {
  lzrig: 1, name: 'monkey',
  size: [512, 512], origin: [0.54, 0.972],
  images: { idle: 'monkey-idle', blink: 'monkey-blink', hop: 'monkey-hop', win: 'monkey-win', fright: 'monkey-fright' },
  bones: [
    { name: 'root', length: 30 },
    { name: 'body', parent: 'root', y: -180, length: 80 },
  ],
  slots: [{ name: 'monkey', bone: 'body', attachment: 'idle' }],
  attachments: {
    idle: { type: 'skin', image: 'idle', root: 'body', grid: 16, weights: [] },
    blink: { like: 'idle', image: 'blink' },
    hop: { type: 'skin', image: 'hop', root: 'body', grid: 16, weights: [] },
    win: { type: 'skin', image: 'win', root: 'body', grid: 16, weights: [] },
    fright: { type: 'skin', image: 'fright', root: 'body', grid: 16, weights: [] },
  },
  every: [{ anim: 'blink', track: 2, min: 1.8, max: 4.6, when: ['idle'] }],
  animations: {
    // a lively little breath and a sway: a monkey never stands quite still
    idle: {
      duration: 1.6, loop: true,
      bones: {
        root: {
          scale: [[0, 1, 1, 'inOutSine'], [0.8, 1.02, 0.98, 'inOutSine'], [1.6, 1, 1]],
          rotate: [[0, 0, 'inOutSine'], [0.8, 1.2, 'inOutSine'], [1.6, 0]],
        },
      },
      slots: { monkey: { attachment: [[0, 'idle']] } },
    },
    blink: { duration: 0.12, loop: false, slots: { monkey: { attachment: [[0, 'blink', 'stepped'], [0.12, 'idle']] } } },
    crouch: {
      duration: 0.1, loop: false,
      bones: { root: { scale: [[0, 1, 1, 'outQuad'], [0.1, 1.12, 0.84]] } },
      slots: { monkey: { attachment: [[0, 'idle']] } },
    },
    hop: {
      duration: 0.3, loop: false,
      bones: { root: { scale: [[0, 0.88, 1.16, 'outQuad'], [0.15, 1, 1, 'inQuad'], [0.3, 0.95, 1.07]] } },
      slots: { monkey: { attachment: [[0, 'hop']] } },
    },
    land: {
      duration: 0.34, loop: false,
      events: [[0, 'land', { sound: 'land' }]],
      bones: { root: { scale: [[0, 1.18, 0.82, 'outQuad'], [0.1, 0.93, 1.09, 'inOutQuad'], [0.2, 1.03, 0.97, 'inOutQuad'], [0.34, 1, 1]] } },
      slots: { monkey: { attachment: [[0, 'idle']] } },
    },
    win: {
      duration: 0.45, loop: false,
      bones: { root: { scale: [[0, 0.86, 1.14, 'outBack'], [0.2, 1.06, 0.96, 'inOutQuad'], [0.45, 1, 1]] } },
      slots: { monkey: { attachment: [[0, 'win']] } },
    },
    winLoop: {
      duration: 0.6, loop: true,
      bones: {
        root: {
          translate: [[0, 0, 0, 'outQuad'], [0.2, 0, -22, 'inQuad'], [0.4, 0, 0], [0.6, 0, 0]],
          scale: [[0, 1, 1], [0.4, 1, 1, 'outQuad'], [0.46, 1.1, 0.9, 'inOutQuad'], [0.6, 1, 1]],
        },
      },
      slots: { monkey: { attachment: [[0, 'win']] } },
    },
    fright: {
      duration: 0.8, loop: false,
      bones: {
        root: {
          scale: [[0, 1.14, 0.88, 'outBack'], [0.15, 0.95, 1.06, 'inOutQuad'], [0.4, 1, 1]],
          rotate: [[0, 0, 'outQuad'], [0.12, -10, 'inOutSine'], [0.45, -3, 'inOutSine'], [0.8, -5]],
        },
      },
      slots: { monkey: { attachment: [[0, 'fright']] } },
    },
  },
};
