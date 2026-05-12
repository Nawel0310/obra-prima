import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/obra-prima",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
