import { ventures } from "@/content/ventures";
import type { Venture } from "@/lib/types";

export function getPublishedVentures(): Venture[] {
  return ventures
    .filter((v) => v.status === "published")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getPrimaryVentures(): Venture[] {
  return getPublishedVentures().filter((v) => v.primary);
}

/** Draft ventures are never rendered publicly; exposed only for internal review tooling. */
export function getDraftVentures(): Venture[] {
  return ventures
    .filter((v) => v.status === "draft")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
