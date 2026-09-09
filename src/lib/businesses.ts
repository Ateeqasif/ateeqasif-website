import { businesses } from "@/content/businesses";
import type { Business } from "@/lib/types";

export function getAllBusinesses(): Business[] {
  return [...businesses].sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}
