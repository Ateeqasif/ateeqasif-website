import type { NavRoute, SiteSettings } from "@/lib/types";

export const siteSettings: SiteSettings = {
  name: "Ateeq Asif",
  formalName: "Ateeq Ur Rehman Asif",
  descriptor: "AI & Business Automation Strategist",
  shortDescriptor: "Founder. Operator. AI & Business Automation Strategist.",
  locationLabel: "Lahore, Pakistan",
  addressLocality: "Lahore",
  addressCountry: "PK",
  // Confirm before launch: create and test this mailbox.
  email: "hello@ateeqasif.com",
  speakingEmail: "speaking@ateeqasif.com",
  social: {
    linkedin: "https://pk.linkedin.com/in/ateeqasif",
    facebook: "https://www.facebook.com/ateeq1168",
  },
  domain: "ateeqasif.com",
  defaultSeo: {
    title: "Ateeq Asif — AI & Business Automation Strategist",
    description:
      "Technology entrepreneur and founder focused on AI, automation, data-driven operations, leadership, and scalable business systems.",
  },
  // Used for schema.org Person.image. Social-card Open Graph images are
  // generated dynamically by src/app/opengraph-image.tsx instead.
  defaultOgImage: "/images/portraits/headshot-square.svg",
};

export const primaryNav: NavRoute[] = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Expertise", href: "/expertise" },
  { label: "Insights", href: "/insights" },
  { label: "Speaking", href: "/speaking" },
];

export const footerNav: NavRoute[] = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Expertise", href: "/expertise" },
  { label: "Insights", href: "/insights" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export const ctaCopy = {
  primary: "Start a Conversation",
  secondary: "Explore My Work",
  content: "Read the Insight",
  speaking: "Invite Me to Speak",
  company: (name: string) => `Visit ${name}`,
  subscription: "Get New Insights",
  linkedin: "Connect on LinkedIn",
};
