export type SiteSettings = {
  name: string;
  formalName: string;
  descriptor: string;
  shortDescriptor: string;
  locationLabel: string;
  addressLocality: string;
  addressCountry: string;
  email: string;
  contactRecipientEmail: string;
  social: {
    linkedin: string;
    facebook: string;
  };
  domain: string;
  defaultSeo: {
    title: string;
    description: string;
  };
};

export type NavRoute = {
  label: string;
  href: string;
};

export type Business = {
  slug: string;
  name: string;
  role: string;
  category: string;
  summary: string;
  focusTags: string[];
  url?: string;
  founded?: string;
  location?: string;
  displayOrder: number;
};

export type Recommendation = {
  name: string;
  excerpt: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type Profile = {
  shortBio: string;
  longBioParagraphs: string[];
  beliefs: string[];
  bio80: string;
  bio25: string;
};
