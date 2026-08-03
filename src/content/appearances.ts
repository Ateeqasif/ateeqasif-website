import type { Appearance } from "@/lib/types";

export const appearances: Appearance[] = [
  {
    slug: "ptv-artificial-intelligence-agentic-ai",
    title: "Artificial Intelligence and Agentic AI",
    publisher: "Pakistan Television (PTV)",
    format: "Television interview",
    summary:
      "Invited to discuss Artificial Intelligence and Agentic AI. Add the exact program name, broadcast date, approved video link, still image, and a short summary once confirmed.",
    // A public Facebook post references this appearance; treat as provisional
    // until the definitive program name, date, and video link are approved.
    externalUrl: "https://www.facebook.com/ateeq1168/photos/4541652659426182/",
    featured: true,
    confirmed: false,
    pendingFields: ["program name", "broadcast date", "video link", "still image"],
  },
  {
    slug: "boardroom-pakistan-driving-digital-discipline",
    title: "Driving Digital Discipline",
    publisher: "Boardroom Pakistan",
    format: "Leadership conversation",
    summary:
      "Featured in \"Driving Digital Discipline,\" a leadership conversation focused on building AI-driven business systems and scalable organizations. Add the definitive article/video URL when available.",
    externalUrl: "https://www.instagram.com/p/DXVt0HeggNu/",
    featured: true,
    confirmed: false,
    pendingFields: ["definitive article/video URL"],
  },
];
