# Oxidara V4 — complete approval preview

This is the current review of the whole site: 14 pages, the original seven Coming Soon products, two proposed women’s designs and two playable campaign excerpts. It is not a functioning store. Only the existing separate GitHub Pages review is being updated at the owner’s request. The brand domain, DNS and Shopify remain untouched.

## Completed

- Reworked Home around a three-view hero: studio products, fire/heart campaign art, and the portrait film. Added clear manual controls, keyboard navigation and a pause control. Ivory remains the dominant canvas.
- Connected a concise brand introduction, three-product beauty edit, restoration film, Science introduction, campaign/social rail and wardrobe. Mobile rails preserve useful image size.
- Added a women’s concepts page and links from Home, Collection, mobile navigation and footer. Two standalone olive garments are clearly labeled AI-generated design studies, pending owner approval; they are not added to the seven-product catalog or promised for launch.
- Expanded Story and Science within the shared light system. Ingredient categories are explicitly illustrative placeholders, not confirmed formulas or evidence.
- Included the existing silent MP4/WebM portrait and restoration extracts. Phones and tablets require Play. Selected beauty PDPs retain the portrait film below product information. Posters, offscreen pause, data-saving restrictions and reduced-motion behavior remain.
- Fixed a genuine mobile film defect found during QA: an explicit Play could immediately stop if less than 55% of the film was visible. Automatic playback still requires substantial visibility; manually started clips continue while visible and stop offscreen.
- Fixed an overflowing hidden accessibility label and mobile wardrobe recommendation sizing; corrected spacing in the hero sentence.
- Privacy says “public preview.” The demo explanation remains explicit. Native contact and signup are both guarded by `settings.demo_mode != false`; saved and schema defaults are true. Demo branches use `method="dialog"`, disabled submit buttons and no submission endpoint. The static renderer enforces demo mode. No visitor data or real forms were submitted.

## Actual verification

- Chrome: all 14 pages rendered and captured at 360×800, 390×844, 430×932, 768×1024, 1280×900 and 1440×1000. 84 full-page captures; actual file widths checked. Fonts loaded, no document horizontal overflow or failed loaded images found. Below-fold images were scrolled into view; horizontal rails intentionally lazy-load offscreen items.
- Visually inspected contact sheets and readable page slices, including Home, Collection, women’s concepts, Story, Science, beauty and wardrobe PDPs. Current film-state captures supplement the still gallery.
- At 390px, all seven product galleries: second thumbnail selected with Enter and returned to first with Home. All seven product-information accordions opened with Enter. Each signup link set `#launch-list`; the settled landing position was checked on the Quarter-Zip page. Raw per-product records include positions sampled during smooth scrolling, not seven settled-position measurements.
- Mobile menu: Enter opens it, all required destinations are present, Escape closes it and returns focus to its button. Product-card links, gallery controls, accordion summaries and menu control show a dark 2px keyboard focus outline on light backgrounds.
- Women’s page: both accordions opened with Enter; wardrobe link, browser Back and direct refresh worked under `/oxidara-beauty-review/`.
- Hero: ArrowRight, End and manual controls select expected views; hiding the film stops it. Phone Play/Pause and both real film sources worked muted; desktop portrait autoplays when visible and permitted.
- Controlled local fixtures: reduced motion, Save-Data and known cellular conditions fetched no video automatically; WebM fallback played; an intentionally missing video retained the poster and announced a concise error. These are simulated conditions, not tests on a physical cellular connection.
- Route/asset audit: 14 root + 14 prefixed pages, 754 link references, 456 asset references, 30 demo form references, zero empty links; unknown pages return 404. An empty server safety probe returned 405; no user form content was sent.
- Shopify Theme Check: zero offenses. Source guards inspected for both forms. No Shopify account exists, so the theme has not been installed or tested in a real Shopify storefront.
- Browser console inspection found no site error; installed-extension warnings were unrelated. The unavailable-film fixture was deliberately induced and is not a shipped missing asset.

## Untested behavior

Physical iPhone/Android touch and swipe, Safari/WebKit, VoiceOver/screen-reader output, actual cellular/save-data settings, automatic carousel timing over long sessions, and real Shopify hosting. Responsive Chrome sizes do not substitute for those environments. No live form submission, checkout or payment behavior exists or was tested.

## Owner dependencies

- Approve or reject each women’s concept before treating it as a product. All proposed cut, proportions, length, textile appearance, seams, cuff/collar/zip and wordmark treatment are inferred; materials, fit, sizing, care and manufacture remain unknown.
- Approve all reconstructed product/label details against actual samples; supply approved packaging artwork and authentic product photographs. Purifying Oil remains separate from Melt.
- Supply final ingredients, directions, warnings, formulation information and evidence for any claims. The Mask artwork phrase “gel cooling technology” remains unverified in OWNER-APPROVAL-REGISTER.md; no function is inferred from artwork.
- Approve source-video reuse/likenesses and provide clean high-resolution originals. Existing excerpts are 528×660 desktop / 432×540 mobile, not new high-resolution footage. No verified product-handling or wardrobe video was available.
- New women’s native masters are 1122×1402, below the requested 2000px target. No master was upscaled. They are crisp at the present preview sizes but higher-resolution production masters remain open.
- Supply founder/company facts, contact and privacy details, then separately authorize any future live form/store launch.

See `V4-ASSET-PROMPTS.md`, `V4-ASSET-MANIFEST.json`, `MOTION-ASSET-MANIFEST.json`, `OWNER-APPROVAL-REGISTER.md` and the current `review-v4/` capture gallery. Older review folders are historical.
