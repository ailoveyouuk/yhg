/**
 * Single source of truth for Yardley Hastings Garage business information.
 * Update this file to reflect any changes to contact details or opening hours.
 */

export const BUSINESS_NAME = 'Yardley Hastings Garage';

/** Founding year — used for "Est. 1906" branding throughout the site. */
export const FOUNDED_YEAR = 1906;

/** Compact "Established" tagline used under the logo and in the footer. */
export const ESTABLISHED_TAGLINE = `Est. ${FOUNDED_YEAR}`;

/** Business owner — referenced on the About page. */
export const OWNER_NAME = 'Duane Winter';

export const BUSINESS_ADDRESS = {
  line1: 'Bedford Rd W',
  line2: 'Yardley Hastings',
  city: 'Northampton',
  postcode: 'NN7 1HB',
  /** Single-line version for footers, meta descriptions, etc. */
  full: 'Bedford Rd W, Yardley Hastings, Northampton NN7 1HB',
  /** Two-line JSX-friendly version split for use with <br /> */
  line1AndLine2: 'Bedford Rd W, Yardley Hastings',
  cityAndPostcode: 'Northampton NN7 1HB',
  /** Google Maps embed URL */
  mapsEmbed: 'https://maps.google.com/maps?q=Bedford+Road+West,+Yardley+Hastings,+Northampton+NN7+1HB&output=embed',
  /** Google Maps link for href */
  mapsLink: 'https://maps.google.com/maps?q=Bedford+Road+West,+Yardley+Hastings,+Northampton+NN7+1HB',
};

export const BUSINESS_PHONE = {
  /** Raw digits for tel: href */
  href: 'tel:01604696225',
  /** Formatted display string */
  display: '01604 696225',
};

export const BUSINESS_EMAIL = {
  /** Raw address for mailto: href */
  href: 'mailto:admin@yardleyhastingsgarage.co.uk',
  /** Display string */
  display: 'admin@yardleyhastingsgarage.co.uk',
};

/**
 * Opening hours as a structured array of [day label, hours string] tuples.
 * Use the string 'Closed' for closed days — components check for this to apply
 * muted styling.
 */
export const OPENING_HOURS: [string, string][] = [
  ['Mon – Fri', '8:00am – 5:30pm'],
  ['Saturday', '8:30am – 12:00 noon'],
  ['Sunday', 'Closed'],
];

/**
 * Compact one-line summary of opening hours for hero captions and inline text.
 * Example: "Mon–Fri 8am–5:30pm · Sat 8:30am–12pm"
 */
export const OPENING_HOURS_COMPACT = 'Mon–Fri 8am–5:30pm · Sat 8:30am–12pm';

/**
 * Google Business Profile — used for the testimonials section and "Leave a
 * Review" call-to-action. The review URL deep-links straight to our specific
 * Google Maps listing (via its unique CID) so customers land on the right
 * place, then can tap "Write a review" themselves.
 */
export const GOOGLE_REVIEW_URL = 'https://www.google.com/maps?cid=13222963246971302546';
export const GOOGLE_RATING = 4.7;
export const GOOGLE_REVIEW_COUNT = 54;

/** Accepted payment methods — displayed in the footer. No finance/credit options offered. */
export const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Bank Transfer'];
