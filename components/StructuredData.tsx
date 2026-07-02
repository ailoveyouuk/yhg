import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEW_URL,
} from '@/data/business';
import { SITE_URL } from '@/lib/seo';

/**
 * Site-wide LocalBusiness (AutoRepair) structured data — rendered once in
 * the root layout so it's present on every page. This is what lets Google
 * show a rich result (star rating, opening hours, address) instead of a
 * plain link, and feeds the "knowledge panel" style info for the business
 * name.
 *
 * NOTE: opening hours below are hand-transcribed from OPENING_HOURS in
 * data/business.ts into schema.org's day-of-week format. If those hours
 * ever change, update both places.
 *
 * Geo coordinates are the postcode (NN7 1HB) centroid — accurate enough
 * for local search purposes without needing a precise building lookup.
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: BUSINESS_NAME,
    image: `${SITE_URL}/assets/garage-exterior-front-2.jpg`,
    url: SITE_URL,
    telephone: BUSINESS_PHONE.href.replace('tel:', '+44'),
    email: BUSINESS_EMAIL.href.replace('mailto:', ''),
    // Symbolic mid-range indicator (Google's $-$$$$ style scale) rather than
    // a literal figure — pricing here is genuinely quote-based (see the
    // Services page's "How we quote" section), so a single number would be
    // misleading. "££" signals fair/standard independent-garage pricing,
    // not budget or premium-marked-up.
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_ADDRESS.line1}, ${BUSINESS_ADDRESS.line2}`,
      addressLocality: BUSINESS_ADDRESS.city,
      postalCode: BUSINESS_ADDRESS.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.202826,
      longitude: -0.738212,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:30',
        closes: '12:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/YardleyHastingsGarage/',
      'https://www.instagram.com/yardleyhastingsgarage.co.uk/',
      GOOGLE_REVIEW_URL,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      reviewCount: GOOGLE_REVIEW_COUNT,
      bestRating: 5,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
