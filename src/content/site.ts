import type { NavRoute, SiteSettings } from "@/lib/types";

export const siteSettings: SiteSettings = {
  name: "Ateeq Asif",
  formalName: "Ateeq Ur Rehman Asif",
  descriptor: "Business Owner & Investor",
  shortDescriptor: "Founder. Owner. Investor.",
  locationLabel: "Lahore, Pakistan",
  addressLocality: "Lahore",
  addressCountry: "PK",
  // Confirm before launch: create and test this mailbox.
  email: "hello@ateeqasif.com",
  // Contact-form submissions are delivered here regardless of the
  // publicly-displayed address above.
  contactRecipientEmail: "ateeqasif1168@gmail.com",
  social: {
    linkedin: "https://pk.linkedin.com/in/ateeqasif",
    facebook: "https://www.facebook.com/ateeq1168",
  },
  domain: "ateeqasif.com",
  defaultSeo: {
    title: "Ateeq Asif — Business Owner & Investor",
    description:
      "Entrepreneur, business owner, and investor building a portfolio of technology and impact-driven companies from Lahore, Pakistan.",
  },
};

export const primaryNav: NavRoute[] = [
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavRoute[] = [
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export const ctaCopy = {
  primary: "Start a Conversation",
  secondary: "View My Businesses",
  company: (name: string) => `Visit ${name}`,
  linkedin: "Connect on LinkedIn",
};
