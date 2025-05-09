import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['cdn.dummyjson.com'],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "", // optional
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
