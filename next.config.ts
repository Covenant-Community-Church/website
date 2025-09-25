import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self' https://api.planningcenteronline.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: *.tile.openstreetmap.org https://unpkg.com img.youtube.com i.ytimg.com substackcdn.com images.unsplash.com avatars.planningcenteronline.com;
  font-src 'self';
  connect-src 'self' https://api.planningcenteronline.com ws:;
  frame-src 'self' https://www.youtube.com;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com', 'substackcdn.com', 'images.unsplash.com', 'avatars.planningcenteronline.com'],
  }
};

export default nextConfig;