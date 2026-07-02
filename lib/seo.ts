import type { Metadata } from 'next';

/**
 * Canonical production domain. Used for canonical URLs, Open Graph og:url,
 * and the sitemap/robots routes — hardcoded rather than inferred from the
 * request so metadata is always correct regardless of which host actually
 * serves it (Netlify preview URL, yhg.netlify.app, or the live custom domain
 * once DNS is switched over).
 */
export const SITE_URL = 'https://www.yardleyhastingsgarage.co.uk';

/**
 * Builds consistent per-page metadata: sets the document title, canonical
 * URL, and mirrors the title/description into Open Graph and Twitter Card
 * fields so link previews (iMessage, WhatsApp, Facebook, Slack, etc.) show
 * that page's actual content instead of falling back to the homepage's.
 *
 * IMPORTANT: pass the bare page title only (e.g. "Services", not
 * "Services | Yardley Hastings Garage"). The root layout's title.template
 * already appends the business name to `title`, and Next.js applies that
 * same template to openGraph.title/twitter.title when they're plain
 * strings — pre-suffixing here would render as
 * "Services | Yardley Hastings Garage | Yardley Hastings Garage".
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/services". Use "/" for the homepage. */
  path: string;
  image?: { url: string; alt: string; width?: number; height?: number };
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      title,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
  };
}
