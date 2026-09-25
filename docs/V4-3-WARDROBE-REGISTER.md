# Oxidara V4.3 — wardrobe approval register

September 25, 2026. Local approval preview only. No publication, hosting or DNS changes.

## Presentation

The homepage and Collection now introduce one capsule with parallel men’s and women’s campaign panels, coordinated color proposals and direct links into the existing or proposed pieces. The men’s panel retains the existing Oxidara Cap and Oxidara Quarter-Zip as Coming Soon products. The women’s panel links to design studies; neither women’s piece has been added to the catalog. Existing product identities, product count, signup and non-submitting form safeguards remain unchanged by this work.

The women’s concept page has two active outdoor model views and the original standalone garment studies in its image galleries. Both use the same olive / black / mineral styling direction as the men’s campaign. Apparel remains supporting content within the beauty site.

## Proposed palette — applies to the men’s look and both women’s studies

| Proposal | Preview color | Direction | Approval status |
| --- | --- | --- | --- |
| Olive | `#676953` | Muted olive drawn from the existing campaign palette | Proposed tone; physical color, dye and product allocation unconfirmed |
| Ink | `#292a28` | Soft black / charcoal neutral | Proposed tone; no manufactured variant or stock implied |
| Stone | `#c8bca6` | Warm sand / mineral neutral | Proposed tone; no manufactured variant or stock implied |
| Red Earth | `#9e6752` | Restrained Mars / red-earth accent | Proposed tone; owner approval required before adding to any product |

These are digital palette studies, not precise production color standards. Selecting a chip updates the adjacent palette sample and named proposed tone. It does not recolor a garment, choose an orderable variant or imply availability. The notice beside every palette states this explicitly. Buttons have 44px minimum targets, visible selected and focus states, `aria-pressed`, a polite live status and keyboard Arrow/Home/End support; native Enter/Space activation is retained.

## Generated imagery

Generation mode: **built-in image_gen**. No CLI/API fallback, no upscaling, no screenshot replacement and no pixel retouching. Every selected output was visually inspected. WebP exports are resized/compressed derivatives of untouched native PNG masters.

| Asset | Native master | Website placement | Observations and unverified details |
| --- | --- | --- | --- |
| Women’s cropped quarter-zip active study | `v4-3-oxidara-womens-quarterzip-active-01.png`, 1122 × 1402 | Parallel homepage/Collection women’s panel; women’s concept model view | Adult model walking in olive cropped quarter-zip and black leggings, with black bag on a pale mineral trail. OXIDARA chest wordmark is readable. Likeness, crop, collar, zipper, cuffs, seam layout, textile appearance, fit, drape, logo placement, landscape and styling are generated interpretations, not verified product facts. Leggings and bag are styling only, not new Oxidara products. |
| Women’s full-zip jacket active study | `v4-3-oxidara-womens-jacket-active-01.png`, 1122 × 1402 | Women’s concept model view | Adult model stepping up a broad limestone trail step in olive jacket, black leggings and ivory trainers. OXIDARA chest wordmark is readable. Likeness, shaped fit, zipper, collar, seams, cuffs, textile appearance, drape, landscape and styling are generated interpretations. Leggings and trainers are styling only, not new Oxidara products. No apparel performance is established. |

References: the V4.1 women’s model image for each silhouette, plus `v2-oxidara-wardrobe-outdoor-campaign-01.webp` as outdoor styling reference. The first supplied image was the edit target; the second was a supporting brand-world reference. The two existing standalone women’s garment concepts remain available through their galleries. The existing men’s outdoor campaign is reused rather than regenerated.

Native masters are saved in both:

- `/Users/rodolfomacmini/Documents/Codex/2026-09-23/ok-x20/outputs/oxidara-v4-3-assets/`
- `/Users/rodolfomacmini/Desktop/Oxidara_V2_Assets/04_Wardrobe/V4-3/`

Website assets are in `theme/assets/`, using matching stems and `.webp` plus `-280.webp`, `-560.webp`, and `-840.webp` variants. Full-size WebPs retain the native 1122px width. There is no claim that a larger native resolution target was met.

Exact prompts and generation output source paths: [V4.3 wardrobe image prompts](V4-3-WARDROBE-IMAGE-PROMPTS.md). Dimensions, hashes and export details: [V4.3 wardrobe image manifest](V4-3-WARDROBE-IMAGE-MANIFEST.json).

## Owner approvals still needed

1. Whether either women’s top should proceed beyond a design study. Neither is a confirmed product or launch commitment.
2. Silhouettes, lengths, proportions, wordmark placement and all inferred clothing details in both generated model views and original garment studies.
3. Final colors, exact production color standards and which pieces would receive each approved color.
4. Materials, sizing, measurements, actual fit, construction and care information. No technical fabric composition or performance is asserted.
5. Generated human likenesses, campaign styling, outdoor scenery and intended image use.
6. Final physical samples and photography before replacing the clearly labeled visualization status.

## Integration

- Collection: render `wardrobe-capsule` with `capsule_id: section.id`; it owns `#wardrobe` and its parallel women’s panel owns `#womens-concepts`.
- Homepage: `wardrobe-preview` renders the same capsule with `compact: true`, with a 520px desktop image-height ceiling and no conflicting collection anchors.
- Women’s page: `main-womens-wardrobe` renders `womens-concepts` with `full: true`. `#cropped-quarterzip` and `#fullzip-jacket` are the deep-link anchors.
- Men’s PDP palette: render `wardrobe-colors` with a unique `palette_id` and `audience: 'Men’s'`.
- Load `v4-3-wardrobe.css` after earlier theme styles and `wardrobe-colors.js` with `defer`.

Browser layout, route and interaction QA is recorded in the main V4.3 review; this register does not claim independent browser testing.
