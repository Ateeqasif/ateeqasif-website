import { Feed } from "feed";
import { getPublishedInsights } from "@/lib/insights";
import { siteSettings } from "@/content/site";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = `https://${siteSettings.domain}`;
  const insights = getPublishedInsights();

  const feed = new Feed({
    title: `${siteSettings.name} — Insights`,
    description: siteSettings.defaultSeo.description,
    id: `${baseUrl}/insights`,
    link: `${baseUrl}/insights`,
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteSettings.name}`,
    author: { name: siteSettings.name, link: baseUrl },
  });

  for (const insight of insights) {
    feed.addItem({
      title: insight.title,
      id: `${baseUrl}/insights/${insight.slug}`,
      link: insight.canonicalUrl ?? `${baseUrl}/insights/${insight.slug}`,
      description: insight.excerpt,
      date: new Date(insight.date as string),
    });
  }

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
