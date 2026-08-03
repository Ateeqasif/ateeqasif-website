import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enables the local SVG placeholders in public/images/*. Safe here
    // because every SVG served is our own trusted local asset, never
    // user-supplied, and the strict CSP below disables script execution.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
