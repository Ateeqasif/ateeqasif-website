import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Ateeq Asif",
  description:
    "Contact Ateeq Asif for partnerships, investment conversations, business advisory, or media enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }])} />

      <section className="py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="text-balance mt-4 text-4xl font-semibold text-fg sm:text-5xl">
                Let&rsquo;s have a focused conversation.
              </h1>
              <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
                If you are exploring a collaboration, partnership, business advisory need, or media
                conversation with me or any of the businesses I work with, share enough context for
                me to understand the opportunity.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="flex items-center gap-3 text-sm font-medium text-fg hover:text-accent-a"
                >
                  <Mail aria-hidden="true" size={18} />
                  {siteSettings.email}
                </a>
                <a
                  href={siteSettings.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-fg hover:text-accent-a"
                >
                  <LinkedInIcon size={18} />
                  LinkedIn
                </a>
                <a
                  href={siteSettings.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-fg hover:text-accent-a"
                >
                  <FacebookIcon size={18} />
                  Facebook
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-7 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
