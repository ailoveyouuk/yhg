import type { MetadataRoute } from 'next';
import type { Vehicle } from '@/types';
import vehiclesData from '@/data/vehicles.json';

// Uses the production domain regardless of which host actually serves the
// request, so the sitemap is always correct once DNS points here.
const BASE_URL = 'https://www.yardleyhastingsgarage.co.uk';

const vehicles = vehiclesData as Vehicle[];

// Static routes with a rough content-change frequency and relative priority.
// Homepage and stocklist change most often (new cars, homepage carousel);
// service pages are stable reference content; legal pages rarely change.
const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/cars', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/bodywork', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/detailing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mot', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tyres', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/diagnostics', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/brakes', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/cookies', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/consumer-rights', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const vehicleEntries: MetadataRoute.Sitemap = vehicles
    .filter((v) => v.type === 'car' && v.status !== 'sold')
    .map((v) => ({
      url: `${BASE_URL}/cars/${v.id}`,
      lastModified: v.date_added ? new Date(v.date_added) : now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  return [...staticEntries, ...vehicleEntries];
}
