export type SiteSettings = {
  name: string;
  formalName: string;
  descriptor: string;
  shortDescriptor: string;
  locationLabel: string;
  addressLocality: string;
  addressCountry: string;
  email: string;
  speakingEmail: string;
  social: {
    linkedin: string;
    facebook: string;
  };
  domain: string;
  defaultSeo: {
    title: string;
    description: string;
  };
  defaultOgImage: string;
};

export type NavRoute = {
  label: string;
  href: string;
};

export type VentureStatus = "published" | "draft";

export type Venture = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  focusTags: string[];
  logo?: string;
  url?: string;
  status: VentureStatus;
  primary: boolean;
  displayOrder: number;
  ctaLabel?: string;
  draftNote?: string;
};

export type SpeakingTopic = {
  slug: string;
  title: string;
  description: string;
  audience?: string;
  format?: string;
  displayOrder: number;
};

export type Appearance = {
  slug: string;
  title: string;
  publisher: string;
  date?: string;
  format: string;
  summary: string;
  thumbnail?: string;
  externalUrl?: string;
  featured: boolean;
  confirmed: boolean;
  pendingFields?: string[];
};

export type InsightCategory =
  | "Founder & Leadership"
  | "AI & Automation"
  | "Business Scale"
  | "Data & Decisions"
  | "Strategy & Execution"
  | "Pakistan & Global Technology";

export type InsightFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  category: InsightCategory;
  tags: string[];
  date: string | null;
  updatedDate?: string | null;
  image?: string;
  canonicalUrl?: string;
  featured: boolean;
  published: boolean;
  sourceType: "migrated" | "original";
};

export type Insight = InsightFrontmatter & {
  content: string;
  readingTime: string;
};

export type Profile = {
  shortBio: string;
  longBioParagraphs: string[];
  beliefs: string[];
  bio80: string;
  bio25: string;
  currentRoles: {
    org: string;
    title: string;
    description: string;
  }[];
};
