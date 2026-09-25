# Oxidara Beauty — V4.2 focused approval preview

Current revision: **V4.2**, with 14 pages, the original seven Coming Soon products and two proposed women’s designs. The homepage crossfades automatically every six seconds; Mist and Melt model stills remain, while the original portrait film is secondary and click-to-play in the editorial social section. Both women’s concepts now have model/garment galleries. The same native Shopify Liquid sources feed both static snapshots.

Shareable review URL: https://rjstriker7.github.io/oxidara-beauty-review/?review=v4-2-focused-20260924-r2

Current screenshots and review notes: https://rjstriker7.github.io/oxidara-beauty-review/review-v4-2/

Only the existing separate approval preview is shared at the owner’s request. The brand domain, DNS, accounts and store are unchanged. Forms remain non-submitting demos; there are no prices, cart or checkout. Signup is brand-wide. Women’s images are proposed design concepts, not approved products. All reconstructed imagery remains subject to owner approval. Prior review folders document historical revisions.

**Motion remains partly open.** The original low-resolution portrait film is a small, manual-play social item. The restoration excerpt has softened highlights and a matching real-source poster, at native 528×660 desktop / 432×540 mobile resolution. It is not the requested new model-holding-product film. Genuine model motion still requires a connected video-generation service; the new stills and slideshow are not represented as that completed video.

The four new image masters are native **1122×1402**, with no upscaling. Higher-resolution production masters remain outstanding. Model likeness, product packaging and microdetail, and clothing fit/drape require owner approval; generated imagery does not verify product results or final specifications.

## Review and handoff

- `review-v4-2/`: current Home captures at390×844,430×932,768×1024 and1440×1000, labeled section crops and interaction evidence.
- `docs/V4-2-REVIEW.md`: current completed/open checklist. `docs/V4-2-MOTION-NOTES.md`: exact source grading and poster evidence.

- `review-v4-1/`: historical V4.1 review set of 30 full-page captures covering five changed pages at six sizes, plus two hero-state captures and QA evidence. Viewports: 360×800, 390×844, 430×932, 768×1024, 1280×900 and 1440×1000.
- `docs/V4-1-REVIEW.md`: historical V4.1 completed changes, actual verification, untested behavior and owner dependencies; use its release verification record to confirm the shared revision.
- `docs/V4-1-ASSET-MANIFEST.json`, `docs/V4-1-BEAUTY-PROMPTS.md`, `docs/V4-1-WOMENS-PROMPTS.json`: four new model stills, reference mapping, exact prompts, dimensions and approval limits. PNG masters are in `../oxidara-v4-1-assets/`; optimized website versions are in `theme/assets/`.
- `review-v4/` and `docs/V4-REVIEW.md`: historical V4 captures and QA, including the earlier 84-page/viewport review. They are not current V4.1 screenshots or evidence that every historical behavior was retested.
- `docs/V4-ASSET-PROMPTS.md`, `docs/V4-ASSET-MANIFEST.json`: two new women’s concepts, references, exact prompts and inferred details.
- `docs/OWNER-APPROVAL-REGISTER.md`: outstanding product facts, image approvals, Mask artwork statement, video rights and production assets.
- `docs/MOTION-ASSET-MANIFEST.json`: original brand footage, exact excerpts, dimensions and export formats.
- `theme/`: native Shopify theme, with default-on demo guards for BOTH contact and signup. No Shopify store exists; this theme has not been installed or tested on Shopify.
- `static-site/`: self-contained 14-page root snapshot; `static-subpath/`: snapshot for `/oxidara-beauty-review/`.
- `docs/catalog.json`: the seven existing Coming Soon products. Purifying Oil is separate from Melt.

## Local preview

On the source Mac, open http://127.0.0.1:4173/. This address cannot be used from another computer or phone; use the external review link above.

With Node.js 24+, run from this project: `cd preview`, `npm ci --ignore-scripts`, then `npm start`. Alternatively use `Start Preview.command`. The renderer binds to 127.0.0.1, serves local fonts/assets and uses scratch render-cache files; it does not store visitor submissions.

## Editing and packaging

Edit shared layouts in `theme/sections` and `theme/snippets`; responsive design and interactions are in `theme/assets`. Run `node scripts/build-content.mjs` after editing `docs/catalog.json` to regenerate fallback product content. Real Shopify product fields take precedence when later configured.

With the local preview running, run `node scripts/build-static.mjs`, then `node scripts/build-static.mjs --base=/oxidara-beauty-review --output=static-subpath`. These commands only write local files. Run `node scripts/check-preview.mjs` for route, link, asset and demo-safety checks.

The V4.2 Shopify ZIP has native theme folders at its root. The V4.2 review package includes the static snapshot, current captures, theme and docs. Source packaging excludes dependencies and temporary caches. Keep demo mode enabled; a future live store/form launch requires separate owner authorization and platform testing.
