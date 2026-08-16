import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Required for static export to Cloudflare Pages
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export (Cloudflare can optimize images)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.iconify.design",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
