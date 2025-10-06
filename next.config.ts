import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Es para que ignore el linter al momento del "build"
  },
};

export default nextConfig;
