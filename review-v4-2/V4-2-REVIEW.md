# Oxidara V4.2 — focused refinements to the approved V4 foundation

## Completed

- **Mobile beauty rail:** one complete card per snapped position at 390/430px, without a neighboring title or CTA peek. Mandatory scroll snapping, snap-stop, subtle swipe text and inset keyboard focus are present. Home's responsive image sizes now match the full-width mobile cards.
- **Hero:** the Mist/Melt product duo remains the default. Existing automatic flow and manual Pause/Play controls remain. No portrait film is used as the primary hero.
- **Social composition:** a featured Pore Release beauty campaign plus compact wordmark and wardrobe posts replaces the social horizontal rail. The full campaign artwork is shown, including embedded lettering and bottle bases. Mobile supporting posts stack vertically with readable links.
- **Secondary portrait:** the existing face-only film is restored as a small, explicit-Play item in the social section. It does not fetch/autoplay merely by entering view, even on desktop. Disclosure sits beside the film. The Mist/Melt product-holding stills and women's model views are retained.
- **Restoration:** the same 153 frames / 5.10 seconds receive a conservative highlight curve. A matching poster uses the quietest original frame (source19.600s). No new footage, frames, subject details or upscaling were fabricated; originals are unchanged. See V4-2-MOTION-NOTES.md for before/after evidence and exact processing.
- **Keyboard playback:** fixed a race in which immediate activation after keyboard focus scrolled to the portrait could be cancelled by an out-of-date visibility reading. Current geometry now protects intentional playback while preserving offscreen/page-exit cancellation.
- **Safeguards:** seven original Coming Soon entries, separate Purifying/Melt, beauty-first order, ivory environment, current PDP layouts and brand-wide signup remain. Both women's items stay proposed AI design studies outside the product catalog. Both native Shopify forms default to non-submitting demos.

## Actual verification

Chrome Home was reviewed and captured at **390×844, 430×932, 768×1024 and 1440×1000** after fonts and all images loaded. No document horizontal overflow or failed image was found. Supplied detail images are unretouched crops of those genuine full-page captures; the combined phone comparison sheets are explicitly labeled.

At 390 and 430, keyboard movement reached subsequent full-width beauty cards with aligned snapped positions and a visible inset outline. On desktop the portrait stayed on its poster with no video source loaded while scrolled into view, then played muted after explicit activation. First keyboard Play after scrolling to the film was retested after the visibility fix and playback advanced. Pause was also checked. At 430, the restoration film selected its 432×540 mobile MP4, stayed muted and advanced. The featured campaign artwork remained complete; supporting crops and links were visually checked.

Automated checks cover all 14 pages at root and public subpath: 750 internal links, 598 asset references, 30 demo form references, no empty destinations, invalid route 404 and an empty server safety probe 405. No visitor forms were submitted. Focused carousel, manual-motion and concept-gallery logic checks pass. Current Shopify Theme Check: zero offenses. New video exports decode end to end with no audio and no added frames.

This is a focused Home revision. Previous all-page/PDP visual evidence is historical; those resolved findings were not reopened or represented as newly retested.

## Open owner dependencies

- Clean higher-resolution originals and reuse/likeness approval for both source films. The restoration grade cannot recover clipped or compressed detail. Source resolution remains 528×660 desktop and 432×540 mobile.
- Approval of reconstructed packaging, model likeness, the two proposed women's designs and fit/construction; final product facts, ingredients, directions, materials and sizing remain unverified.
- The Mask artwork phrase “gel cooling technology” remains unverified in the owner register.
- The separately requested genuine model-holding-product film is still pending a connected video-generation service or an approved supplied clip. This focused pass restores the existing portrait in a secondary position; it does not claim that new film is complete.

## Untested

Physical-device touch swipes, Safari/WebKit, VoiceOver or other screen readers, actual cellular networks, OS-level reduced-motion switching and a real Shopify installation. Reduced-motion and data-saving logic were checked in source/simulated logic tests, not claimed as physical-device tests.
