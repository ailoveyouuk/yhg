# Yardley Hastings Garage — SEO Implementation Plan

Prepared for the transition from `yhg.netlify.app` to the live domain **www.yardleyhastingsgarage.co.uk**. Goal: every SEO-relevant element — technical, on-page, structured data, local, and content — aligned, accurate and working toward maximum visibility and discovery.

Status key: ✅ Done · 🔲 To do · ⏳ Depends on domain go-live

---

## 1. Already in place

These were fixed in the last round of work and are live on `yhg.netlify.app`:

- ✅ `app/robots.ts` and `app/sitemap.ts` — previously missing entirely, now generating a real `robots.txt` and `sitemap.xml` covering every static page and every in-stock vehicle.
- ✅ Branded `app/not-found.tsx` — previously a blank 404.
- ✅ `lib/seo.ts` shared metadata helper, applied to every page — fixes the doubled title bug (`"MOT Testing | Yardley Hastings Garage | Yardley Hastings Garage"`), adds matching Open Graph/Twitter descriptions to every page, and adds a canonical URL to every page.
- ✅ Vehicle detail pages now generate their own Open Graph image (the car's own first photo) and a short spec-led summary, rather than sharing the homepage's generic description and image.
- ✅ `metadataBase` in `app/layout.tsx` already points at `https://www.yardleyhastingsgarage.co.uk` — all relative URLs in metadata already resolve correctly for the eventual live domain, no change needed there.
- ✅ "HPI clear" removed from listings (was showing "No" on every car — a data/copy issue, not SEO, but worth noting it's resolved).

---

## 2. Domain migration checklist (when DNS switches to www.yardleyhastingsgarage.co.uk)

This is the highest-priority section — get this wrong and you lose existing rankings/backlinks from the *old* live site during the switch.

1. 🔲 **Confirm what's indexed today.** Before cutover, check Google Search Console (or a `site:yardleyhastingsgarage.co.uk` search) for what pages of the *current* live site are indexed. Any URL that existed on the old site and won't exist on the new one needs a 301 redirect, not a 404 — otherwise you lose that page's accumulated ranking signal outright.
2. 🔲 **Map old URLs to new ones.** Once you have that list, add redirect rules to `netlify.toml` (`[[redirects]]` blocks, `status = 301`) for anything that changed path or was removed.
3. 🔲 **Netlify domain setup.** Add the custom domain in Netlify (Domain management → Add a domain), point DNS (A/ALIAS or CNAME per Netlify's instructions), and confirm the SSL certificate provisions automatically.
4. ⏳ **Force canonical host.** Ensure `yardleyhastingsgarage.co.uk` (no www) 301-redirects to `www.yardleyhastingsgarage.co.uk` (or vice versa — whichever Search Console currently treats as canonical) so you don't run two indexable copies of the same site. Netlify's domain settings handle this if configured as primary/alias domains.
5. 🔲 **Re-verify in Google Search Console** under the new domain (or use the existing property if it's already domain-property-based, which covers both host variants automatically) and **submit `sitemap.xml`** immediately after cutover.
6. 🔲 **Update Google Business Profile** website field to the new domain once live (currently likely pointing at the old site).
7. 🔲 **Update all backlinks you control** — Facebook, Instagram, Yell, Good Garage Guide, and any other directory listed in the footer/testimonials section — to the new domain once cutover is confirmed stable.
8. 🔲 **Monitor Search Console "Coverage" and "Page Indexing" reports weekly for the first month** after cutover for crawl errors, unexpected 404s, or redirect chains.

---

## 3. Structured data (schema.org / JSON-LD)

The site currently has none. This is the single biggest remaining SEO gap — structured data is what makes Google show rich results (star ratings, business hours, price, breadcrumbs) instead of a plain blue link, and it's what local business and vehicle listings are specifically built for.

### 3.1 LocalBusiness / AutoRepair schema (site-wide, highest priority)

Add a JSON-LD `AutoRepair` block (a subtype of `LocalBusiness`) to the root layout so it's present on every page. Should include:

- `name`, `image`, `telephone`, `email`, `address` (use `PostalAddress` with the real street/postcode), `geo` (latitude/longitude — look this up once for Bedford Rd W, Yardley Hastings), `url`, `openingHoursSpecification` (structured from `OPENING_HOURS` in `data/business.ts` — the data already exists, it just needs a schema wrapper), `priceRange`, `sameAs` (array of the Facebook, Instagram and Google Maps URLs already in the footer).
- Add `aggregateRating` (4.7 average, 54 reviews — already displayed on the homepage in plain text; wrapping it in schema lets Google show the star rating directly in search results). Reuse the same figures already in `Testimonials.tsx`/homepage rather than inventing new copy.
- This is a single new file, e.g. `components/StructuredData.tsx` (a script tag rendering `JSON.stringify` of the object), imported once into `app/layout.tsx`.

### 3.2 Vehicle / Product schema (stocklist + vehicle detail pages)

Each vehicle detail page should carry a `Vehicle` (or `Product` with `Offer`) schema block: `name`, `brand` (make), `model`, `vehicleModelDate` (year), `mileageFromOdometer`, `fuelType`, `vehicleTransmission`, `offers` (with `price`, `priceCurrency: "GBP"`, `availability` mapped from `status`, `itemCondition: "UsedCondition"`), and `image` (array of the car's photos). This is what enables Google's vehicle-listing rich results and Google Merchant-style visibility for used car searches.

### 3.3 BreadcrumbList schema

Every service page and the vehicle detail page already has a visual breadcrumb or clear hierarchy (Home → Stocklist → [Car]). Wrap that in `BreadcrumbList` schema so Google can show the breadcrumb trail in search results instead of the raw URL.

### 3.4 FAQPage schema

The `/faq` page's accordion content is a natural fit for `FAQPage` schema — this is one of the highest-value, lowest-effort structured data additions available, as it can produce expandable Q&A directly in search results for exactly the kind of questions people search ("do you offer free estimates", "are you DVSA authorised" etc.).

### 3.5 Service schema

Each of the service pages (Services, Bodywork, Detailing, MOT, Tyres, Diagnostics, Brakes) can carry `Service` schema (`serviceType`, `provider` referencing the `AutoRepair` entity, `areaServed`) — reinforces topical relevance for each service category independently.

**Suggested build order for structured data:** LocalBusiness/AutoRepair (site-wide) → FAQPage → BreadcrumbList → Vehicle → Service. Each is independent and can ship separately; none blocks another.

---

## 4. On-page content & metadata

- 🔲 **Heading hierarchy audit.** Quick pass to confirm every page has exactly one `<h1>` (the hero heading) and that subsequent headings step down in order (`h2` → `h3`) without skipping levels — this was not checked page-by-page in this round and is worth a dedicated look, particularly on the longer service pages with many nested sections.
- 🔲 **Keyword alignment check per page.** The meta descriptions and titles are now all correct and unique (Section 1), but a second pass worth doing: confirm the on-page `<h1>`/intro copy for each service actually contains the terms people search for that service in Northamptonshire specifically (e.g. does the Tyres page's visible copy include "tyres Northampton" naturally, not just in the meta description). This is a copy review, not a code change.
- 🔲 **Internal linking pass.** Service pages currently cross-reference each other only via the top nav. Adding 1–2 contextual in-body links between related services (e.g. the Brakes page linking to the Diagnostics page where it discusses ABS fault codes, which it already does in prose) strengthens topical relevance signals and keeps visitors on-site longer.
- 🔲 **Title length check.** A few titles run close to Google's ~60-character display limit once the " | Yardley Hastings Garage" suffix is added (e.g. "2024 Land Rover Defender — £53,500 | Yardley Hastings Garage" is already at the edge). Not urgent, but worth trimming vehicle titles to `Year Make Model | Yardley Hastings Garage` without the price if this becomes a recurring issue with longer model names.

---

## 5. Images

- 🔲 **Alt text audit — content images are already good.** Vehicle photos, testimonials and most content images already carry descriptive alt text (confirmed: `VehicleCard.tsx`, car detail galleries via `CarGallery.tsx`'s main image, `about/page.tsx`'s workshop photos). No action needed there.
- 🔲 **Decorative hero images correctly use empty alt.** Full-bleed background hero images behind large text headings (About, Services, Stocklist hero, homepage carousel panels) currently use `alt=""`, which is the *correct* accessibility/SEO practice for purely decorative images where a sighted user gets the same information from the adjacent heading text — no change needed, but worth documenting so a future edit doesn't "fix" this incorrectly by adding redundant alt text.
- 🔲 **`CarGallery.tsx` thumbnail strip.** The small thumbnail buttons (`components/CarGallery.tsx` line ~70) use `alt=""` — since the main image directly above already carries the full descriptive alt text and the thumbnails are pure navigation controls, this is acceptable, but each thumbnail button already has `aria-label="View photo {n}"` for accessibility, so this is fine as-is.
- 🔲 **File naming.** Image filenames are already fairly descriptive (`workshop-classic-aston-1.jpg`, `forecourt-cars-4.jpg`) — Google does use filenames as a minor image-search signal. No changes needed, flagging only so future asset uploads keep the same convention rather than defaulting to camera filenames (`IMG_4821.jpg` etc.).
- 🔲 **Image sitemap (optional, lower priority).** If vehicle photos or workshop images are a meaningful discovery channel (Google Image search), `app/sitemap.ts` can be extended with `images` entries per vehicle. Not essential at this stage — worth revisiting once there's traffic data showing image search is a real referral source.

---

## 6. Local SEO

- 🔲 **Google Business Profile.** Confirm the profile is fully filled out — hours matching `data/business.ts` exactly, services listed, all photos current, and the website link updated to the new domain at cutover. This is likely the single highest-impact lever available for a local garage, often outweighing on-site SEO for "near me" searches.
- 🔲 **NAP consistency.** Name/Address/Phone must match *exactly* (formatting included) across the website footer, Google Business Profile, Facebook, Instagram, and any directory listing (Yell, Good Garage Guide — both mentioned in the testimonials copy). Worth a manual cross-check once the domain is live.
- 🔲 **Local directory citations.** Beyond Facebook/Instagram/Google, confirm/claim listings on Yell.com and the Good Garage Guide (both referenced on-site already as existing ratings sources) with the new domain and consistent NAP.
- 🔲 **Geo meta tags / embedded map.** The contact page already embeds a Google Maps iframe — good. Consider adding explicit `geo.position` meta tags site-wide as a (minor, largely legacy) additional local signal once the LocalBusiness schema (Section 3.1) is in place, since the schema's `geo` field supersedes this for modern purposes.

---

## 7. Performance / Core Web Vitals

Page experience is a confirmed Google ranking factor. Not fully audited this round, but worth tracking once the domain is live and real traffic exists:

- 🔲 Run the live site through PageSpeed Insights / Search Console's Core Web Vitals report after go-live (synthetic testing pre-launch was unreliable in this environment).
- ✅ Video lazy-loading (`LazyBackgroundVideo`) and non-blocking font loading are already implemented from earlier work this session — both directly help Largest Contentful Paint (LCP).
- 🔲 Confirm `next/image` is generating appropriately-sized responsive images for all breakpoints (should be automatic given current usage, but worth spot-checking in Network tab once live).

---

## 8. Ongoing maintenance

- 🔲 Re-submit `sitemap.xml` in Search Console any time a large batch of vehicles is added/removed (the sitemap itself updates automatically on every deploy — this is just a reminder to nudge Google after major stock changes rather than waiting for the next crawl).
- 🔲 Keep `data/business.ts` as the single source of truth for hours/contact details — since Section 3.1's schema and Section 6's NAP consistency both depend on it staying accurate, any future hours change should be made there and nowhere else.
- 🔲 Revisit meta descriptions if service offerings change materially — they're now accurate and page-specific, but they're also hand-written strings in each page file rather than derived from data, so they won't auto-update if the underlying service content changes.

---

## Suggested priority order

1. Domain migration checklist (Section 2) — time-sensitive, must happen at cutover, not after.
2. LocalBusiness/AutoRepair + FAQPage schema (Sections 3.1, 3.4) — highest impact-to-effort ratio, ships independently of the domain switch.
3. Google Business Profile + NAP audit (Section 6) — can start immediately, doesn't depend on code changes.
4. Vehicle + BreadcrumbList schema (Sections 3.2, 3.3).
5. Heading hierarchy and internal linking pass (Section 4).
6. Core Web Vitals check once live traffic exists (Section 7).

Happy to start on any of these — the structured data work (Section 3) is the most self-contained next step if you want to keep going now.
