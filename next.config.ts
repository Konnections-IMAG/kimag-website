import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

// 'unsafe-inline' is required for Next.js's inline bootstrap scripts; a
// nonce-based policy would force every page to render dynamically.
// The Cloudflare hosts cover Cloudflare Web Analytics.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://static.cloudflareinsights.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' https://cloudflareinsights.com${isDev ? ' ws:' : ''}`,
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const PRODUCTION_HOSTS = '(?:www\\.)?konnectionsimag\\.com';

const nextConfig: NextConfig = {
  // Production optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  
  // Image optimization
  //
  // The deployment target is Cloudflare Workers via @opennextjs/cloudflare,
  // which has no sharp-backed optimizer: /_next/image is a pass-through that
  // returns the original bytes untouched (verified — ?w=640 on a 2.6 MB PNG
  // came back as the same 2.6 MB PNG). Leaving optimization "on" therefore
  // only bought a pointless Worker hop and a srcset of ten identical URLs, so
  // source images are pre-sized and encoded to WebP in /public instead.
  images: {
    unoptimized: true,
  },
  
  // Performance optimizations
  // experimental: {
  //   optimizeCss: true, // Disabled due to critters dependency issue
  // },
  
  // One canonical origin: https://www. Limited to the production hosts so that
  // local development and preview deployments are unaffected.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
          { type: 'host', value: PRODUCTION_HOSTS },
        ],
        destination: 'https://www.konnectionsimag.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'konnectionsimag\\.com' }],
        destination: 'https://www.konnectionsimag.com/:path*',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // The legacy XSS auditor is deprecated and can itself cause issues.
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ];
  },
};

export default nextConfig;
