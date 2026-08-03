import type { MetadataRoute } from "next";
import { siteSettings } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${siteSettings.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
