import type { Venture } from "@/lib/types";

/**
 * "draft" ventures are excluded from every public listing (see lib/ventures.ts).
 * They stay in this file, per spec section 5, "Other initiatives — publish after
 * confirmation": role, public description, approved logo, and destination URL
 * must be confirmed before EcoGreen Solar, ZeeFrames, or Ummah & Humanity go live.
 */
export const ventures: Venture[] = [
  {
    slug: "zapta-technologies",
    name: "ZAPTA Technologies",
    role: "Co-Founder & Chief Operating Officer",
    summary:
      "ZAPTA Technologies builds AI-enabled software, data-driven platforms, and digital products for businesses across markets. I help shape the operating model behind delivery: strategic planning, project governance, quality systems, leadership accountability, process discipline, and organizational scale.",
    focusTags: [
      "AI Engineering",
      "Software Products",
      "Data Platforms",
      "Delivery Governance",
      "Organizational Scale",
    ],
    logo: "/images/ventures/zapta-logo.svg",
    // Confirm before launch.
    url: undefined,
    status: "published",
    primary: true,
    displayOrder: 1,
    ctaLabel: "Visit ZAPTA Technologies",
  },
  {
    slug: "sync4tech",
    name: "Sync4Tech",
    role: "Co-Founder & Chief Executive Officer",
    summary:
      "Sync4Tech is an execution-led business transformation consultancy. It helps organizations automate repetitive work, connect fragmented tools, improve data visibility, and build scalable digital infrastructure. The focus is practical transformation: define the business outcome, design the right system, implement it, and enable the client's team to operate it.",
    focusTags: [
      "Business Automation",
      "Data Intelligence",
      "AI Enablement",
      "Transformation Strategy",
      "Implementation",
    ],
    logo: "/images/ventures/sync4tech-logo.svg",
    url: "https://sync4tech.co",
    status: "published",
    primary: true,
    displayOrder: 2,
    ctaLabel: "Visit Sync4Tech",
  },
  {
    slug: "ecogreen-solar",
    name: "EcoGreen Solar",
    role: "Role pending confirmation",
    summary:
      "Potential framing: sustainable-energy venture serving the Lahore market. Confirm Ateeq's public title, current involvement, approved company description, metrics, and URL before publication.",
    focusTags: [],
    status: "draft",
    primary: false,
    displayOrder: 3,
    draftNote:
      "Awaiting confirmed role, description, approved logo, and URL.",
  },
  {
    slug: "zeeframes",
    name: "ZeeFrames",
    role: "Role pending confirmation",
    summary:
      "Confirm the nature of the venture, Ateeq's present role, public status, approved one-line description, and URL before publication.",
    focusTags: [],
    status: "draft",
    primary: false,
    displayOrder: 4,
    draftNote:
      "Awaiting confirmed nature of venture, role, and public description.",
  },
  {
    slug: "ummah-and-humanity",
    name: "Ummah & Humanity",
    role: "In Development",
    summary:
      "Potential framing: a community initiative intended to encourage human dignity, connection, and appreciation across differences. Treat as \"In Development\" until the mission, governance, launch status, and public language are approved.",
    focusTags: [],
    status: "draft",
    primary: false,
    displayOrder: 5,
    draftNote: "Awaiting confirmed mission, governance, and launch status.",
  },
];
