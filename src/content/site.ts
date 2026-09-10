import type { NavRoute, SiteSettings } from "@/lib/types";

export const siteSettings: SiteSettings = {
  name: "Ateeq Asif",
  formalName: "Ateeq Ur Rehman Asif",
  descriptor: "Collaborator & Opportunity Builder",
  shortDescriptor: "Collaborate. Create. Contribute.",
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
    title: "Ateeq Asif | Collaborator & Opportunity Builder",
    description:
      "Entrepreneur based in Lahore, Pakistan, collaborating across technology, design, and energy ventures to create opportunities, facilitate strong teams, and contribute to a more sustainable society.",
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
  primary: "Connect",
  secondary: "View My Businesses",
  company: (name: string) => `Visit ${name}`,
  linkedin: "Connect on LinkedIn",
};
