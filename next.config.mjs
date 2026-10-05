const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/ultikart" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static HTML in /out for cPanel
  basePath,                  // site lives at gaia-services.net/ultikart
  assetPrefix: basePath || undefined,
  trailingSlash: true,       // folder/index.html works on Apache without rewrites
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
