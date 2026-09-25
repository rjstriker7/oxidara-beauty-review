# V4.3 — Our Story sources, interpretation, and approvals

Review date: September 25, 2026. This records the focused Story work, not publication approval.

## Source access and review limits

The official [Oxidara TikTok account](https://www.tiktok.com/@oxidara.beauty) and the [restoration post](https://www.tiktok.com/@oxidara.beauty/video/7619851588173073695) were requested again through web research. Both returned restricted/unavailable fetch errors. No claim is made that the live feed was accessible or that new posts were reviewed.

The preserved source material was re-reviewed instead: `work/research/indexed-posts.json`, its 209 indexed post records and captions, and all six contact sheets covering posts 001–209. This was a fresh visual review of the archived covers and selected readable text, not 209 complete video viewings. Existing source documentation was also read: `BRAND-RESEARCH.md`, `asset-manifest.json`, `V2-ASSET-LIBRARY.md`, and `V4-2-MOTION-NOTES.md`. The generated restoration-heart and molten-wordmark masters were visually inspected to distinguish source themes from later reconstructions.

The archived index is relative to the workspace root; its post numbers are lookup aids, not TikTok identifiers. A future live review may reveal changes beyond the preserved feed.

## Supported themes and their use

| Theme | Preserved primary-source evidence | V4.3 treatment and boundary |
|---|---|---|
| Beauty Beyond Earth | [Post 007](https://www.tiktok.com/@oxidara.beauty/video/7570553950248701214) visibly places the phrase beneath Oxidara and a red planetary disc; [post 101](https://www.tiktok.com/@oxidara.beauty/video/7649170098330111263) repeats it beside a crescent form. | Restored as the main Story heading and homepage Story eyebrow. Original expansion interprets it as looking beyond the familiar. Historical launch text in the artwork is not repeated. |
| Cosmic scale and mineral color | Post 007's red planet; [post 016](https://www.tiktok.com/@oxidara.beauty/video/7582074957367184670) combines planetary imagery and golden symbolic figures; [post 174](https://www.tiktok.com/@oxidara.beauty/video/7675475111385763103) includes a lunar/space scene; archived cover 136 shows a warm desert horizon. | Restrained red-earth horizon, warm ivory, and muted mineral accents. Identifying the proposed palette specifically with Mars follows the owner's V4.3 direction; the archived red disc alone does not prove a documented Mars-origin story. No claim of extraterrestrial ingredients, sourcing, technology, or actual Mars photography. |
| Faith | [Post 003](https://www.tiktok.com/@oxidara.beauty/video/7568226883381382430) and recurring later covers/captions use Christian faith imagery; [post 151](https://www.tiktok.com/@oxidara.beauty/video/7667405040700755230) links faith, fire, and restoration. | Brand-level language of conviction, belief, intention, and beginnings. No inference about founder identity, biography, religious credentials, or individual customers. |
| Fire and refinement | [Post 050](https://www.tiktok.com/@oxidara.beauty/video/7604398550503525663) and [post 051](https://www.tiktok.com/@oxidara.beauty/video/7604731455863934238) have the phrase Faith Forged in Fire in their archived captions. Their covers depict golden wings and a molten wordmark. | Fire becomes a symbol of strength through change. Short campaign phrase retained; surrounding prose is original. No product effect is inferred from flames, molten surfaces, or gold. |
| Restoration, rebuilding, renewal | [Post 056](https://www.tiktok.com/@oxidara.beauty/video/7606763408247049502) supplies the amber-heart reference; [post 106](https://www.tiktok.com/@oxidara.beauty/video/7650981041661938974) uses the title The Rebuild; [post 183](https://www.tiktok.com/@oxidara.beauty/video/7677748757827570975) says Made New; [post 187](https://www.tiktok.com/@oxidara.beauty/video/7679216550313725214) repeats the idea of a continuing story. | A fuller emotional passage about rebuilding and a new perspective. A nearby visible note says restoration is symbolic and makes no skin-repair or product-result claim. |
| Prepare. Release. Renew. | [Post 149 / ritual duo](https://www.tiktok.com/@oxidara.beauty/video/7666554127878556959) displays the three words in product campaign artwork. | Three complete short explanations as brand philosophy. A visible local note states that this is not a prescribed skincare sequence or replacement for product directions. Source efficacy claims are not transferred. |
| Beauty, campaign, and wardrobe | The ritual duo above, the historical serum and mask source records in `BRAND-RESEARCH.md`, and [post 208 / active wardrobe](https://www.tiktok.com/@oxidara.beauty/video/7688505403193265439). | One final composed section connects beauty, the coordinated wardrobe concepts, and TikTok. Women's concepts and colors are explicitly subject to owner approval. No additional catalog products are created by Story. |

## Current premium structure references

These official pages were reviewed for information architecture. No competitor copy, founder account, formula, results, directions, certification, or business history is reused.

- [Rhode — About](https://www.rhodeskin.com/pages/about-us): clear brand opening, a short point of view, and distinct links into the different parts of the brand. This supported the opening-to-philosophy-to-product-world progression.
- [Rare Beauty — About](https://www.rarebeauty.com/pages/about): separate introduction, mission, and principles make values easy to scan. Oxidara uses its own supported themes and does not substitute an invented founder quotation or biography.
- [Makeup by Mario — Artistry Feed](https://www.makeupbymario.com/pages/artistry-feed): distinct editorial modules connect brand storytelling to product discovery. The Story ending uses clear thematic links into beauty, wardrobe, and the original campaigns. Direct requests for `/pages/our-story` and `/pages/about-mario` were unavailable; no successful review of those routes is claimed.

## Files and integration

- `theme/snippets/page-our-story.liquid`: seven sections — Beauty Beyond Earth, Why Oxidara, Faith, Fire, Restoration, Prepare/Release/Renew, and The World of Oxidara. Uses existing route helpers and standard accessible links.
- `theme/assets/v4-3-story.css`: scoped `.v43-story` styles, modern sans headings, existing ivory variables, restrained red-earth accents, and mobile stacking. Load after `v4-2.css` in both the theme and local-preview stylesheet list.
- `theme/sections/story-preview.liquid`: copy only. Existing V4.2 graded restoration MP4/WebM files, poster, mobile variants, description, controls, and original-source link are unchanged.

The layout uses an image/copy opening, a compact two-column introduction, paired Faith/Fire sections, an inset restoration image, a three-part philosophy, and editorial links. It does not introduce large black section backgrounds.

## Story imagery register

| File / placement | Status and provenance | Approval needed |
|---|---|---|
| `v4-3-red-earth-horizon.webp` plus responsive derivatives / Story opening | New AI-generated imagined landscape supplied in the main V4.3 pass. Visible caption identifies an imagined AI campaign concept. It is not a photograph of Mars, documentary location evidence, or ingredient sourcing. Exact native dimensions and generation record belong in the main V4.3 image register. | Owner approval of proposed campaign image and Mars/mineral interpretation. |
| `v2-oxidara-restoration-heart-portrait-02.webp` and `v2-oxidara-restoration-heart-campaign-01.webp` / restoration section | Existing AI reconstructions of the preserved amber-heart campaign, rendered by the unchanged `restoration-image` helper. Visibly labeled recreated AI campaign artwork. Portrait master 1122×1402; landscape master 1586×992. | Existing routine brand/artwork approval remains required. |
| `v4-2-oxidara-restoration-film*` / homepage Story teaser | Existing graded excerpt from the preserved original TikTok footage. No new generation, timing edit, crop, or control change in this Story pass. See `V4-2-MOTION-NOTES.md`. | Existing source-reuse/rights approval and cleaner production original remain open as previously recorded. |

## Unverified content and owner decisions

1. Approve the original expanded brand narrative, especially the meanings assigned to Faith, Fire, Restoration, and Prepare/Release/Renew. These are editorial interpretations of recurring source themes, not verbatim owner-approved mission statements.
2. Approve the specific Mars/red-earth design emphasis. The general planetary identity and Beauty Beyond Earth phrase are evidenced; the new landscape and refined palette are proposed interpretations requested for this pass.
3. Approve the relative emphasis on beauty, active wardrobe, and campaign storytelling. The page introduces no founder biography, founding date, company history, credentials, customer numbers, retail relationships, or revenue claims.
4. Confirm rights and final approval for generated or reconstructed campaign imagery. Labels remain visible.
5. Confirm final wardrobe designs/colors through the main V4.3 proposal register. This page points into that capsule and does not establish fabric, fit, technical performance, or product specifications.

No ingredients or product directions are proposed in Story. All formulation and application drafts are tracked separately in the beauty education register. The source art's medical, efficacy, safety, and launch-date statements remain excluded.
