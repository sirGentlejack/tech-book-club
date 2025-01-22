import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  test: /\.svg$/,
      use: ["@svgr/webpack"],
};

export default nextConfig;
