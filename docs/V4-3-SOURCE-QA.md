# V4.3 source and content QA

Independent source audit, September 25, 2026. Reviewed the current integrated theme and read-only local preview. No form was submitted, no POST was sent, and no publishing, hosting or DNS action was taken.

## Findings and fixes

1. **Fixed:** `settings_schema.json` still identified the theme as 4.2.0. It now identifies V4.3 as 4.3.0.
2. **Fixed:** the native password page always emitted a Shopify storefront-password form, bypassing demo mode. It now uses a non-submitting `method="dialog"` form with a disabled submit button unless `demo_mode` is explicitly false. The real Shopify password form remains in the explicit false branch.
3. **Fixed:** removed the unused `education_root` assignment from the Collection education snippet, identified by Theme Check.

## Content safeguards

- The catalog contains exactly seven unique product identities; all have `available: false`. Each rendered PDP visibly says Coming Soon.
- Purifying Oil has its own product/URL and now shows “Oil · Use type unconfirmed.” Neither its overview nor its example directions assigns cleansing, rinse-off or leave-on use. It remains distinct from Melt.
- All four liquid PDPs have individual ingredient cards labeled “Example ingredient profile,” with explicit non-attribution language. The exact requested illustrative-content notice appears beside ingredient and application content.
- Each of the five beauty pages has three complete example steps. No application amount, frequency, duration, wear time or mandatory layering order is specified.
- Mask content uses preparation, handling and care. Cooling, heating and light-based functions are explicitly unverified; no technical settings or construction are invented.
- Science uses general cosmetic education and proposed brand principles. The library states that no listed ingredient is confirmed for an Oxidara product. No efficacy numbers, clinical outcome or certification is asserted.
- Collection’s editorial content sits outside product cards. The routine section explicitly says the products are not required together and no layering order is confirmed.
- Women’s designs and wardrobe color extensions are labeled proposals pending owner approval. Palette selection is explicitly a tone preview; garment images do not falsely change to an invented manufactured variant.
- The homepage human image is captioned as an AI-generated campaign concept, not a demonstration of results. Science textures and the red-earth landscape also have visible illustration/concept captions.
- Story content treats restoration as symbolism and Prepare / Release / Renew as philosophy, not product outcomes or skincare directions. No founder biography, founding date, credentials or commercial metrics were added.
- Source text and rendered routes contain no prices, purchase buttons or checkout controls. The existing `/cart` route remains an informational Coming Soon page.

## Native form verification

The native Liquid source—not merely the local preview renderer—was inspected. Saved settings set `demo_mode: true`; schema defaults also set it true.

Offline branch rendering confirmed signup and contact use non-submitting demo markup with disabled controls when the setting is missing or true. Native Shopify forms appear only for an explicit false setting. Their demo fields do not include a network endpoint. The shared theme script also prevents demo submit events. The password page now follows the same default-on demo guard; its missing/true/false branches were also rendered offline after the fix, and a read-only GET confirmed the local preview no longer emits the native-password form marker.

Brand-wide signup wording remains on the footer and PDP CTA. Signup does not silently select a product-specific mailing list.

## Checks

- Offline Liquid render checks passed for signup, contact and password with missing, true and false demo settings.
- Read-only GET checks passed for 16 routes at both root and `/oxidara-beauty-review`: 32 HTTP 200 responses, one H1 per page, disabled submit controls in the local preview, no commerce controls, correct product statuses, and required beauty notices/application steps.
- Initial Shopify Theme Check: zero errors, one unused-assignment warning; the warning was fixed.
- Final Shopify Theme Check passed with **0 errors, 0 warnings, 0 informational findings** after source edits were settled. Machine-readable output: [theme-check-v4-3.json](theme-check-v4-3.json).

This audit covers literal markup/copy and form branching. Image appearance, embedded raster lettering and responsive visual composition are reviewed separately by the coordinating task.
