/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // Ensure CSS, fonts, and static assets resolve correctly on Azure
  assetPrefix: "",
  basePath: "",

  // Required for public/ folder to work correctly
  trailingSlash: false,

  // Node.js runtime support
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    }
  }
};

export default nextConfig;
