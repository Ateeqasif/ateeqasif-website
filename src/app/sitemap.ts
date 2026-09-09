import type { MetadataRoute } from "next";
import { siteSettings } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteSettings.domain}`;

  return ["", "/about", "/businesses", "/contact", "/privacy"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
