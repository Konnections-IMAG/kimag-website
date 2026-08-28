import type { NextConfig } from "next";

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
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.konnectionsimag.com' },
    ],
  },
  
  // Performance optimizations
  // experimental: {
  //   optimizeCss: true, // Disabled due to critters dependency issue
  // },
  
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
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
