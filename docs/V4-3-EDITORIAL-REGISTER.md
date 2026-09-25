# V4.3 editorial and approval register

Prepared for the public V4.3 approval preview, September 25, 2026. This register covers beauty product copy, ingredient education, application examples and the Science & Ingredients page. No ingredient, formula, result, instruction or specification in the illustrative editorial has been approved as a product fact.

## Ingredient proposals / editorial examples

These names are proposed **editorial spotlights**, not a proposed formulation or a statement that Oxidara uses the ingredient. Grouping profiles on a product page does not establish an ingredient combination. There are no proposed concentrations.

| Preview location | Ingredient profiles shown | Approval needed |
| --- | --- | --- |
| Release Essence Activation Mist | Hyaluronic acid; glycerin; panthenol | Owner/formulator approval of actual formula, INCI and any product-specific role |
| Melt Elixir Oil | Squalane; jojoba oil; vitamin E (tocopherol) | Actual formula, ingredient identity/source and finished-product description |
| Purifying Oil | Sunflower seed oil; squalane; vitamin E (tocopherol) | Actual formula and ingredient roles after the product identity/use type is resolved |
| Luxury Skin Serum | Niacinamide; hyaluronic acid; ceramides; peptides | Actual formula; exact ceramide/peptide identities if applicable; no ingredient family alone verifies a claim |
| Cryo-Refresh Mask | None; accessory information replaces ingredient cards | Materials, construction, components, function, handling and care |
| Collection education | Hyaluronic acid; squalane; ceramides | General educational copy, clearly separate from product cards/formulas |
| Science ingredient library | Hyaluronic acid; niacinamide; peptides; ceramides; squalane; vitamin C; botanical extracts (green tea leaf example); jojoba oil | General educational copy; final product mapping only after formula approval |
| Science support categories | Hydration; barrier support; radiance; conditioning; antioxidant support. Glycerin and vitamins C/E also appear as general examples. | These are category definitions, not Oxidara results or efficacy promises |

The visible notice beside PDP ingredient and application content, and Collection ingredient content, is: “Illustrative preview content. Ingredients and directions are not confirmed for this product.” Science adds an explicit library notice that none of the ingredients is confirmed for an Oxidara product. Every ingredient card is labeled “Example ingredient profile.”

## Draft directions

Every PDP has three complete steps marked **Example content · Owner review**. These drafts are not approved instructions. No quantity, frequency, treatment duration, wear time or product layering sequence is specified.

| Product | Step 1 | Step 2 | Step 3 | Specific unresolved facts |
| --- | --- | --- | --- | --- |
| Release Essence Activation Mist | Begin with clean hands/skin; review final suitability and precautions | Draft facial mist gesture with eyes/lips closed; final dispensing method and application areas need approval | Allow to settle; any next product follows its own directions | Actual spray method, suitable application areas, precautions, compatibility and frequency |
| Melt Elixir Oil | Dispense into clean hands with the approved dispenser; avoid skin contact with the opening | Draft gentle facial-oil application, avoiding the eye area | Allow to settle, close container, use other products according to their labels | Final application method/areas, amount, frequency, suitability and compatibility |
| Luxury Skin Serum | Clean hands, review label, dispense without touching applicator to face | Draft gentle facial application; follow final approved areas and compatibility | Let settle, close bottle, follow final storage guidance | Final use, texture, amount, frequency, suitability, compatibility and storage |
| Purifying Oil | Confirm use type on final label; keep preview product unapplied until approved | Once approved, follow that product’s designated method and areas; do not substitute Melt instructions | Follow explicit removal/leave-on direction on the future label | **Use type unresolved. Neither cleanser, rinse-off, nor leave-on status has been assigned. Remains separate from Melt.** |
| Cryo-Refresh Mask | Review supplied guide, inspect mask, confirm suitability/setup/precautions | Handle gently; follow final placement/removal guide; do not infer treatment from art | Follow approved cleaning/storage method for confirmed materials | No cooling/heating, light function, power setting, wear time or construction detail is invented |

Collection’s three-part overview is a choice framework: understand format, read the example, follow the final label. It does not prescribe an application order or require purchase/use of the collection together.

## Other draft / unverified editorial

- Five distinct 2–3-sentence product overviews replace the sparse beauty descriptions in this preview. They concern known format, existing campaign presentation and the status of the concept; product description approval remains required.
- Science’s formulation philosophy and four principles are explicitly proposed brand intentions. They do not establish manufacturing practice, proven performance or an existing test program.
- Final INCI lists, formulation, suitability, directions, precautions, testing information, supporting evidence, storage, quantities and packaging remain unresolved unless separately verified by the owner.
- Product naming/campaign naming remains as in the V4.2 source catalog. Purifying and Serum retain working-name disclosures in the existing verification area.
- No efficacy percentages, clinical outcomes, certification badges, invented laboratory photographs or technical molecule diagrams were added.
- Detailed citations and current competitor structure observations are in [V4-3-EDUCATION-RESEARCH.md](V4-3-EDUCATION-RESEARCH.md).

## Generated imagery used by education

| Asset | Intended location | Interpretation / approval |
| --- | --- | --- |
| `v4-3-ingredient-textures.webp` plus responsive siblings | Science hero | AI-generated editorial arrangement of clear gel, amber oil and ivory cream on a mineral surface. These are illustrative textures, not actual Oxidara formulas, ingredients or texture samples. Visible caption states this distinction. Requires owner art-direction approval. |

The education implementation creates no apparel colorways and makes no wardrobe design or materials claim. Wardrobe colors, men’s/women’s concepts, homepage human imagery and Mars imagery are tracked in the combined V4.3 handoff/asset register maintained by the coordinating task.

## Integration and verification

- `beauty-editorial.liquid`, `view: 'overview'`: beauty PDP overview.
- `beauty-editorial.liquid`, default view: ingredient/accessory module plus three-step application framework.
- `collection-education.liquid`: merchandising, ingredient literacy and routine-choice education outside the product cards.
- `ingredient-profile.liquid`: twelve centrally written, reusable example profiles; individual pages show only relevant selections.
- `page-science-ingredients.liquid`: six full modules, library, source note and links to all five products.
- `product-preview-url.liquid`: product URL fallback respects the route root; live product URLs take precedence.
- `v4-3-education.css`: responsive ivory/stone/soft red-earth system, with single-column ingredient cards at mobile widths.

Direct Liquid rendering passed for all new snippets. Each beauty PDP produced an overview and exactly three application steps; the four liquids produced 3/3/3/4 ingredient cards and Mask produced accessory information. The seven integrated education routes also returned HTTP 200 at both the root and `/oxidara-beauty-review` prefix, with the new stylesheet and expected application modules present. Full responsive visual review and comprehensive asset/route checks are performed by the coordinating task.
