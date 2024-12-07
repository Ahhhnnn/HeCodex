/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" },
      { hostname: "cdn.sanity.io" },
      { hostname: "ghchart.rshah.org" },
      { hostname: "github-readme-streak-stats.herokuapp.com" },
      { hostname: "github-readme-stats.vercel.app" },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx"],
};

export default nextConfig;
