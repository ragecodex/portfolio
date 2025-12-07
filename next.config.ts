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
    ],
  },
};

export default nextConfig;
