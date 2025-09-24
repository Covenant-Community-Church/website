import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: img.youtube.com i.ytimg.com substackcdn.com images.unsplash.com;
  font-src 'self';
  connect-src 'self' https://api.planningcenteronline.com;
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
      domains: ['img.youtube.com', 'i.ytimg.com', 'substackcdn.com', 'images.unsplash.com'],
  }
};

export default nextConfig;
