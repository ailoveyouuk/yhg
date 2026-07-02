import type { MetadataRoute } from 'next';

// Uses the production domain regardless of which host actually serves the
// request (Netlify preview URL, yhg.netlify.app, or the live custom domain)
// so search engines are always pointed at the canonical site once DNS is live.
const BASE_URL = 'https://www.yardleyhastingsgarage.co.uk';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
