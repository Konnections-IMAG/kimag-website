import { MetadataRoute } from 'next'
import { servicePages } from './components/text/servicePages'
import { SITE_URL } from './lib/site'

// Bump a date only when that page's content actually changes.
const CONTENT_UPDATED = {
  home: '2026-11-27',
  services: '2026-11-27',
  privacy: '2026-11-27',
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: CONTENT_UPDATED.home,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${SITE_URL}/services/${page.slug}`,
      lastModified: CONTENT_UPDATED.services,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/privacy`,
      lastModified: CONTENT_UPDATED.privacy,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
