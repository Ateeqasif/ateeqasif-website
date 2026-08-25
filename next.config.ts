import type { NextConfig } from "next";

// Set by CI when building for Hostinger's static-hosting deploy (see
// .github/workflows/deploy-hostinger.yml). Local `npm run dev`/`build`
// without this var produces the full dynamic app (API routes, image
// optimization) — unaffected.
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  images: {
    // next/image optimization requires a server; static export can't run
    // one, so images are served as-is in that mode.
    unoptimized: isStaticExport,
    // Enables the local SVG placeholders in public/images/*. Safe here
    // because every SVG served is our own trusted local asset, never
    // user-supplied, and the strict CSP below disables script execution.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
