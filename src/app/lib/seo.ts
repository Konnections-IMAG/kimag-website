import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './site';

export const SHARE_IMAGE = {
  url: '/og-card.png',
  width: 1200,
  height: 630,
  alt: 'Konnections IMAG — PR and reputation consultancy, Hyderabad',
};

/**
 * Metadata for one page: a single self-referencing canonical, with matching
 * Open Graph and Twitter values. Next.js replaces (rather than merges) nested
 * objects such as `openGraph`, so every field is set here.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
