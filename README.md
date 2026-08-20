### `dcl-bugtest-assetload-breaks-audio

# Bug: `AssetLoad` breaks audio on mobile

Preloading an audio file with `AssetLoad` prevents that clip from playing on mobile. Desktop is fine.

## Repro

`src/index.ts` has two clickable boxes that both call `AudioSource.playSound`:

| Box | Clip | `AssetLoad` | Mobile |
| --- | --- | --- | --- |
| WooHoo (left) | `assets/woo.wav` | yes | never plays |
| Tada (right) | `assets/tada.wav` | no | plays on every click |

Comment out the `AssetLoad.create(...)` block on WooHoo and that clip works on mobile too.

## Example of mobile vs desktop
