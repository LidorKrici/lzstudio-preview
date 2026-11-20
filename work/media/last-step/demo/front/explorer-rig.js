/* The explorer, as an LZ Rig (format: _shared/rig/README.md). One 512 x 512 drawing per pose, all on the same
 * canvas and scale (feet at y = 479). Bones are in px relative to their parent; the origin is the feet. */
window.LS_RIG = {
  lzrig: 1, name: 'explorer',
  size: [512, 512], origin: [0.49, 0.935],
  images: { idle: 'explorer-idle', blink: 'explorer-blink', hop: 'explorer-hop', win: 'explorer-win', fright: 'explorer-fright' },
  bones: [
    { name: 'root', length: 30 },
    { name: 'body', parent: 'root', y: -150, length: 60 },
    { name: 'head', parent: 'body', x: 11, y: -129, length: 60 },        // neck, under the beanie
    { name: 'pack', parent: 'body', x: -51, y: -159, length: 60 },       // top of the backpack straps
    { name: 'lantern', parent: 'body', x: 107, y: -44, length: 40 },     // the hand that holds the lantern
  ],
  slots: [{ name: 'explorer', bone: 'body', attachment: 'idle' }],
  attachments: {
    idle: {
      type: 'skin', image: 'idle', root: 'body', grid: 22,
      weights: [
        { bone: 'head', circle: [0.52, 0.245, 0.15], soft: 0.05 },
        { bone: 'pack', box: [0.2, 0.4, 0.27, 0.68], soft: 0.04 },
        { bone: 'lantern', box: [0.64, 0.79, 0.545, 0.79], soft: 0.03 },
      ],
    },
    blink: { like: 'idle', image: 'blink' },
    hop: { type: 'skin', image: 'hop', root: 'body', grid: 16, weights: [] },
    win: { type: 'skin', image: 'win', root: 'body', grid: 16, weights: [] },
    fright: { type: 'skin', image: 'fright', root: 'body', grid: 16, weights: [] },
  },
  every: [{ anim: 'blink', track: 2, min: 2.2, max: 5.2, when: ['idle'] }],
  animations: {
    // breathing, a slow head tilt, the pack lagging behind, the lantern swinging
    idle: {
      duration: 2.4, loop: true,
      bones: {
        body: { scale: [[0, 1, 1, 'inOutSine'], [1.2, 1.015, 0.985, 'inOutSine'], [2.4, 1, 1]] },
        head: { rotate: [[0, 0, 'inOutSine'], [1.2, -2.5, 'inOutSine'], [2.4, 0]] },
        pack: { rotate: [[0, 0, 'inOutSine'], [1.35, 1.6, 'inOutSine'], [2.4, 0]] },
        lantern: { rotate: [[0, 0, 'inOutSine'], [0.8, 4, 'inOutSine'], [2.0, -3, 'inOutSine'], [2.4, 0]] },
      },
      slots: { explorer: { attachment: [[0, 'idle']] } },
    },
    blink: { duration: 0.14, loop: false, slots: { explorer: { attachment: [[0, 'blink', 'stepped'], [0.14, 'idle']] } } },
    // anticipation before a hop
    crouch: {
      duration: 0.11, loop: false,
      bones: {
        root: { scale: [[0, 1, 1, 'outQuad'], [0.11, 1.1, 0.86]] },
        pack: { rotate: [[0, 0], [0.11, 3]] },
      },
      slots: { explorer: { attachment: [[0, 'idle']] } },
    },
    // in the air: stretch on take-off, round at the top, a little stretch coming down; the pack trails
    hop: {
      duration: 0.32, loop: false,
      bones: {
        root: { scale: [[0, 0.9, 1.14, 'outQuad'], [0.16, 1, 1, 'inQuad'], [0.32, 0.96, 1.06]] },
        pack: { rotate: [[0, -6, 'outQuad'], [0.32, 4]] },
      },
      slots: { explorer: { attachment: [[0, 'hop']] } },
    },
    // landing: squash, rebound, settle (standard 5.1, heavy landing); secondary parts follow 0.07 s later
    land: {
      duration: 0.38, loop: false,
      events: [[0, 'land', { sound: 'land' }]],
      bones: {
        root: { scale: [[0, 1.16, 0.84, 'outQuad'], [0.1, 0.94, 1.08, 'inOutQuad'], [0.22, 1.03, 0.97, 'inOutQuad'], [0.38, 1, 1]] },
        pack: { rotate: [[0, 0], [0.07, 6, 'outQuad'], [0.2, -3, 'inOutSine'], [0.38, 0]] },
        head: { rotate: [[0, 0], [0.07, 3, 'outQuad'], [0.24, -1, 'inOutSine'], [0.38, 0]] },
        lantern: { rotate: [[0, 0], [0.07, -8, 'outQuad'], [0.26, 4, 'inOutSine'], [0.38, 0]] },
      },
      slots: { explorer: { attachment: [[0, 'idle']] } },
    },
    // fists up: pop in, then bounce in place
    win: {
      duration: 0.45, loop: false,
      events: [[0, 'cheer', { sound: 'cheer' }]],
      bones: { root: { scale: [[0, 0.88, 1.12, 'outBack'], [0.2, 1.06, 0.96, 'inOutQuad'], [0.45, 1, 1]] } },
      slots: { explorer: { attachment: [[0, 'win']] } },
    },
    winLoop: {
      duration: 0.7, loop: true,
      bones: {
        root: {
          translate: [[0, 0, 0, 'outQuad'], [0.22, 0, -16, 'inQuad'], [0.44, 0, 0], [0.7, 0, 0]],
          scale: [[0, 1, 1], [0.44, 1, 1, 'outQuad'], [0.5, 1.08, 0.92, 'inOutQuad'], [0.7, 1, 1]],
        },
      },
      slots: { explorer: { attachment: [[0, 'win']] } },
    },
    // the tile gives way: recoil and a wobble
    fright: {
      duration: 0.8, loop: false,
      bones: {
        root: {
          scale: [[0, 1.12, 0.9, 'outBack'], [0.15, 0.96, 1.05, 'inOutQuad'], [0.4, 1, 1]],
          rotate: [[0, 0, 'outQuad'], [0.12, -9, 'inOutSine'], [0.45, -3, 'inOutSine'], [0.8, -5]],
        },
      },
      slots: { explorer: { attachment: [[0, 'fright']] } },
    },
  },
};
