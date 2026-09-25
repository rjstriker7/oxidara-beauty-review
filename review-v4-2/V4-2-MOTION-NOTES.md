# V4.2 restoration motion refinement

The existing restoration excerpt now has a softer highlight presentation and a matching resting poster. This is a conservative grade of the same source footage, not new generated footage. The hand, light pattern, framing, forward/reverse action and silent playback remain unchanged.

## Source and timing

- Original post: https://www.tiktok.com/@oxidara.beauty/video/7619851588173073695
- Preserved original: `/Users/rodolfomacmini/Desktop/Oxidara_V2_Assets/06_Original_References/Video/oxidara_restoration_tiktok_7619851588173073695_original.mp4` (576×854).
- Original excerpt: source time 19.600–22.200s; existing crop 528×660 at x=24, y=0, followed by the existing forward/reverse loop.
- Input master: `../../oxidara-motion-v3-1/masters/oxidara-restoration-film-master.mp4`.
- New graded master: `../../oxidara-motion-v4-2/v4-2-oxidara-restoration-master.mp4` (528×660).
- **Timing correction:** the old manifest labels the loop 5.13s, but the actual existing master and published MP4/WebM decode to 153 frames / 5.10s. The new versions also decode to 153 frames / 5.10s at 30fps; no frame or new action was added to force the inaccurate historical label.
- Audio streams: zero in every export. No additional cropping, upscaling, sharpening, generated frames, retouching or subject alteration.

## Grade and poster

FFmpeg 7.1 applies this fixed master-channel curve across the existing frames:

```text
curves=master='0/0 0.35/0.35 0.65/0.61 0.85/0.75 1/0.86'
```

The lower midtones and shadows stay close to the source while upper midtones/highlights roll off. This reduces the harsh near-white light without removing the gold/restoration mood. It does not recover detail already clipped or missing in the compressed source.

The poster uses **loop time 0.000s / original source time 19.600s** with the same curve. Inspection of every decoded frame identified this as the lowest-average-luminance frame of the existing loop, with the simplest light pattern. Choosing a later frame would increase the resting brightness. The poster is therefore softer through grading, rather than claiming a different source moment is darker.

MP4 exports use H.264, yuv420p, CRF 23, slow preset and faststart. WebM exports use VP9, CRF 33, zero target bitrate, row threading and CPU-used 3. The intermediate graded master uses H.264 CRF 16. Mobile outputs are downsampled to 432×540; desktop outputs retain 528×660. Posters are WebP quality 92 at the corresponding sizes. Metadata is stripped; there is no audio.

## Inspection evidence

- [Before/after comparison](restoration-before-after.jpg): actual decoded source/new frames at 0.000s (rest), 1.967s (largest near-white area), and 2.300s (highest average luminance), each shown at native 528×660.
- [Graded loop contact sheet](restoration-contact-sheet.jpg): ten actual frames sampled at 0.5s intervals, downsampled only for the inspection sheet.
- Full-resolution poster and both comparison states were visually inspected. The softened result retains the warm light, dark outer frame and visible hand details. No new UI/caption is burned into the video.
- All four video exports were decoded end to end without errors, with the expected dimensions, 153 frames, 5.10s duration and zero audio streams. Browser playback is a separate integration check, not claimed by this source-asset pass.

Decoded-frame luminance measurements (Pillow RGB-to-L, 0–255) are supporting diagnostics, not an efficacy or accessibility certification:

| Measurement | Existing master | Graded master |
|---|---:|---:|
| First-frame mean | 88.75 | 81.84 |
| Peak frame mean | 117.39 | 107.06 |
| Maximum frame area at luminance ≥235 | 7.239% | 0.0% |

## Website asset files

All six files below are in `theme/assets/`. Use the new versioned filenames together so the resting poster matches the playback grade. The original assets are preserved unchanged.

| File | Dimensions | Bytes | SHA-256 |
|---|---|---:|---|
| `v4-2-oxidara-restoration-film-mobile-poster.webp` | 432×540 | 17,734 | `29635a72924dd6cc4cc131fbe84706dd05489a644b109341fcdf6422e336dd96` |
| `v4-2-oxidara-restoration-film-mobile.mp4` | 432×540 | 195,183 | `a242419e0ec655078121a0cb68705eb28372eb41a11f73a869592a56e2e1cb41` |
| `v4-2-oxidara-restoration-film-mobile.webm` | 432×540 | 148,451 | `7b22341467c57231e8d44d65c3862445ef40d2bd28528d8061e3c81fac218109` |
| `v4-2-oxidara-restoration-film-poster.webp` | 528×660 | 22,574 | `78e95dc5b2422b78d9675f4d62542fd816968cda06b05f1b28db6a9ac96d33ff` |
| `v4-2-oxidara-restoration-film.mp4` | 528×660 | 291,634 | `632cdc0341bae0d03011c5419a623c6d3aa980c8abca4009bf9befe58e62b5c9` |
| `v4-2-oxidara-restoration-film.webm` | 528×660 | 192,021 | `00eaa575484ea480d6759887b39c48245655ffa99c869bd429d8a0437c568c1e` |

## Remaining limits

Native source resolution remains low. This pass softens the light; it does not turn compressed source footage into high-resolution photography. Keep its rendered size restrained and obtain a clean higher-resolution original for production. Original campaign AI provenance, website reuse and any depicted likeness remain owner-approval items. The requested model-holding-product film remains pending; this restoration clip is not its substitute.
