import { siteSettings } from "@/content/site";

const baseUrl = `https://${siteSettings.domain}`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteSettings.name,
    alternateName: siteSettings.formalName,
    url: baseUrl,
    jobTitle: siteSettings.descriptor,
    description: siteSettings.defaultSeo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteSettings.addressLocality,
      addressCountry: siteSettings.addressCountry,
    },
    sameAs: [siteSettings.social.linkedin, siteSettings.social.facebook],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSettings.name,
    url: baseUrl,
    publisher: {
      "@type": "Person",
      name: siteSettings.name,
    },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href}`,
    })),
  };
}
