// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const repo = "splash-page"; // <= your repo name
const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export", // replaces `next export`
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true }, // GH Pages can't optimize images
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};
