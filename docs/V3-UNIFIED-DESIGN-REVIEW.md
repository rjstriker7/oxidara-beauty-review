# Oxidara V3 — unified ivory design review

Prepared September 24, 2026. **V3 approval preview.** Shared for remote viewing and ChatGPT review at the owner’s subsequent request. The brand domain and store are unchanged.

## Completed design work

- Replaced the historical layered stylesheet with one warm ivory / soft stone design system. All shopping and information page shells share the same canvas, gutters, controls and type. Only the compact footer uses a full-width dark background. Black/gold packaging, campaign fire and the blue mask remain content within the system.
- Recomposed Home: light product-led hero → four beauty products → concise brand story with inset restoration artwork → secondary wardrobe discovery → integrated campaign/TikTok cards → brand-wide signup. No alternating black-and-cream page sections.
- Collection: five beauty products in a clear studio grid, then a smaller wardrobe group; consistent image proportions and card alignment. Purifying Oil remains distinct from Melt Elixir Oil.
- Product pages: large light gallery, concise product title/Coming Soon/launch information, category-appropriate image captions and a compact information accordion. On mobile the reading order is title → gallery → launch details → pending product facts. Wardrobe recommendations feature the other wardrobe piece.
- Story, Science, Contact and Privacy use the same neutral system. Brand symbolism is separated from product evidence. The founder story remains general. Privacy retains “public preview” and the explicit non-submitting explanation.
- DM Sans is the primary typeface; serif is limited to the wordmark and expressive brand headlines. Gold is carried chiefly by the brand imagery. Decorative stars and gold-italic section styling are removed from the site shell.
- Retained every product, gallery, related-product route, mobile menu, anchor and demo safeguard. No new product facts, claims, reviews, certifications, photographs or launch date were added.

## Reference flow studied before implementation

Visually revisited the official [Rare Beauty](https://www.rarebeauty.com/), [Rhode](https://www.rhodeskin.com/) and [Makeup by Mario](https://www.makeupbymario.com/) homepages, plus Mario’s [Soft Shimmer product page](https://www.makeupbymario.com/products/soft-shimmer-long-wear-cream-eyeshadow?variant=44199952678977), in Chrome before implementation. The adopted principles are continuous retail backgrounds, product-first scanning, restrained spacing and a gallery/details PDP hierarchy. No competitor branding, claims or assets were copied.

## Verification actually performed

| Coverage | Result |
|---|---|
| All 13 pages at 360 × 800, 390 × 844, 430 × 932, 768 × 1024, 1280 × 900 and 1440 × 1000 | 78 Chrome viewport checks and genuine full-page captures. Fonts and images loaded; no failed images, horizontal overflow or text/control boxes extending beyond the viewport. |
| Visual inspection | Reviewed desktop and mobile page captures, product galleries, long title wrapping, availability labels, card alignment, product-information rows, form layouts, campaign transitions and the six breakpoint overviews. |
| Seven product galleries at 390px | Selected every alternate; verified changed source, caption and pressed state. Keyboard Home returned to the primary image and focused the first thumbnail. |
| Seven product accordions at 390px | Enter opened each; all four explicit placeholder categories were present; Space closed each. No overflow when expanded. |
| Mobile menu at 360/390/430px | Enter toggled it, Tab reached the collection link, Escape closed it and restored button focus. Links were at least 52px tall. Pointer navigation closed the menu. |
| Keyboard / accessibility | Skip link became visible and focused MainContent; navigation, product cards, gallery controls, accordions, contact email field and footer had visible contrasting outlines. Form inputs remained 16px on mobile. Gallery/accordion keyboard behavior and menu escape/focus return were tested. |
| Navigation | Mobile menu → Collection → Cap, brand-wide signup anchor, browser Back and refresh passed. Signup target sat below the sticky header. |
| Static subpath build | Direct Mask URL and refresh, gallery alternate, breadcrumb → Collection, Back, mobile menu → Science → Collection CTA all passed on an actual local static server under /oxidara-beauty-review/. |
| Route/asset checks | Both 13-page URL structures: 620 link/anchor references and 324 asset references passed; no empty destinations or purchasing controls. |
| Native Shopify source | Theme Check: zero findings. demo_mode defaults to true in schema and current settings. Both signup and contact use the same `settings.demo_mode != false` guard, endpoint-free `method="dialog"` demo forms and disabled submit buttons; JS also blocks demo submit events. Native Shopify forms stay in the inactive else branches. |
| Submission / publishing | No website form was submitted. The existing GitHub Pages review copy was updated for remote review. No account, hosting-provider, brand-domain or DNS change. |

This was Chrome responsive-viewport testing, not physical-device testing. Browser logs showed no site errors in the inspected records; unrelated installed-extension warnings were excluded from the site result. Reduced-motion behavior was inspected in CSS (animations/transitions and smooth scrolling disabled); OS-level preference switching was not exercised.

## Confirmed defects fixed in this pass

- The old alternating section backgrounds and inconsistent page shells were replaced by the requested continuous light design.
- Product-page source order now matches the mobile reading and keyboard order.
- Same-page signup anchors no longer incorrectly receive `aria-current="page"` in navigation.
- The skip link remains visually hidden until focused, with a reliable visible keyboard state.
- Form input borders and placeholder text were darkened after contrast measurement: borders now 3.27:1 against ivory; placeholders 4.94:1. Primary text is 14.30:1 and muted text 5.34:1. Disabled submit controls remain visibly disabled.

No known rendered layout or route defect remains from the checks above. This is not a claim of exhaustive accessibility certification.

## Untested behavior

- Safari/WebKit: attempted native Safari access, but the Mac was locked and automatic unlock was unavailable.
- Physical iPhone/Android touch and browser behavior; screen-reader announcements; OS reduced-motion switching.
- Hosted Shopify theme editor, product image/metafield data integration and live form delivery. No Shopify account exists; all forms remain demos.

## Owner dependencies retained

- Approval of reconstructed product geometry, label/wordmark details, apparel construction/fit and campaign likeness; authentic product/garment photographs or approved production assets for final verification.
- Actual ingredient lists, formulation, efficacy evidence, suitability, usage/precautions, quantities, packaging, mask construction/function, wardrobe materials/sizing/care and final product identities. Purifying Oil’s relationship to Melt remains unconfirmed.
- The mask artwork’s “gel cooling technology” statement remains **unverified** in OWNER-APPROVAL-REGISTER.md. Existing artwork is not scientific evidence, and the preview disclosure remains visible.
- Founder details, final legal/privacy/business/support information and eventual launch timing.
- Earlier high-resolution master targets remain open: existing packshot masters are 1122 × 1402. This composition pass did not create or upscale imagery, or represent reconstructions as verified product photography.

## Review materials

[Current website](https://rjstriker7.github.io/oxidara-beauty-review/?review=v3-ivory-20260924) · [Current screenshots](../review-v3/)

The gallery contains actual Chrome captures from the locally checked V3 revision. It is supporting visual evidence, not an independent reviewer’s test result. All 13 pages retain non-submitting demo forms and Coming Soon status.
