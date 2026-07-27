import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/support",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/socials",
        destination: "/bio",
        permanent: true,
      },
      {
        source: "/linktree",
        destination: "/bio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
