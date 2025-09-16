import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jjkdqmfvdaeqqopxsbtt.supabase.co",
      }
    ]
  },
  eslint: {
    // ✅ Skip ESLint checks during builds on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
