import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  trailingSlash: true, // optional but recommended for static hosting
};

module.exports = nextConfig;
