import type { MetadataRoute } from "next";
import { getPublishedInsights } from "@/lib/insights";
import { siteSettings } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteSettings.domain}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/ventures",
    "/expertise",
    "/insights",
    "/speaking",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = getPublishedInsights().map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.updatedDate ?? insight.date ?? Date.now()),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes];
}
