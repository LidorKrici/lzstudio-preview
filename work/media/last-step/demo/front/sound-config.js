/* Last Step sound design as data (production standard 6.2): the game only emits events, the sound is tuned here.
 * actions: { s: sound or pool, v: volume, p: pitch in cents, r: random pitch ± cents, d: delay s, rate: min ms between
 *            starts of this action, duck: how far the music drops (0..1, the fx envelope of 6.1 does the rest) }
 * Pitch can come from the event argument: p: 'scale' uses SCALE[arg], p: 'gold' uses min(arg * 100, 1200). */
window.LS_SOUND_CFG = {
  pools: {
    hop: ['hop_a', 'hop_b', 'hop_c'],
    land: ['land_a', 'land_b', 'land_c'],
    gold: ['gold_a', 'gold_b'],
  },
  // D minor pentatonic over two octaves, in cents above the chime: each tile after the flag is the next step up
  SCALE: [0, 300, 500, 700, 1000, 1200, 1500, 1700, 1900, 2200, 2400],
  events: {
    hop:        [{ s: 'hop', v: 0.45, r: 150, rate: 60 }],
    land:       [{ s: 'land', v: 0.55, r: 250, rate: 60 }],
    tileWin:    [{ s: 'chime', v: 0.5, p: 'scale', r: 0 }],
    flag:       [{ s: 'flag_claim', v: 0.8 }, { s: 'chime', v: 0.55, p: 1200 }, { s: 'win_small', v: 0.35, d: 0.05 }],
    plant:      [{ s: 'plant', v: 0.6, p: 'scale', r: 0, rate: 90 }],   // rises with the chosen tile (TILE 2 lowest)
    crack:      [{ s: 'crack', v: 0.9, r: 60, duck: 0.6 }],
    fall:       [{ s: 'crumble', v: 0.65, d: 0.2 }],
    lose:       [{ s: 'lose', v: 0.22 }],                 // quiet on purpose (6.8)
    tension:    [],                                       // the music filter does the work (6.4)
    idol:       [{ s: 'idol', v: 1.0, duck: 0.5 }],
    wipe:       [{ s: 'wipe', v: 0.85 }, { s: 'vault_open', v: 0.7, d: 0.25 }],
    gold:       [{ s: 'gold', v: 0.65, p: 'gold', r: 40 }],
    snap:       [{ s: 'snap', v: 0.85, duck: 0.6 }],
    rope:       [{ s: 'rope', v: 0.6, d: 0.1 }],
    winSmall:   [{ s: 'win_small', v: 0.7 }],
    bigWin:     [{ s: 'fanfare', v: 1.0 }],
    tick:       [{ s: 'tick', v: 0.5, rate: 55 }],
    countEnd:   [{ s: 'chime', v: 0.6, p: 1900 }],
  },
  music: {
    temple: { bpm: 96, layers: ['music_temple_0', 'music_temple_1', 'music_temple_2'] },
    vault:  { bpm: 108, layers: ['music_vault_0', 'music_vault_1', 'music_vault_2'] },
  },
  // count tick: pitch rises from 0 to this many cents over the count, by win tier (6.5)
  countRise: [400, 800, 1200, 2000, 2400],
};
