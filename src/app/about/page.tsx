import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextBlock } from "@/components/ui/TextBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/structured-data";
import { profile } from "@/content/profile";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ateeq Asif's work collaborating across technology and impact-driven ventures, creating opportunities and contributing to a more sustainable society from Lahore, Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "About", href: "/about" }])} />

      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-8 max-w-2xl">
            <Eyebrow>About Ateeq</Eyebrow>
            <h1 className="text-balance mt-4 text-4xl font-semibold text-fg sm:text-5xl">
              I collaborate to create opportunities, not just build one career.
            </h1>
            <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
              {profile.shortBio}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">My journey</h2>
          <TextBlock paragraphs={profile.longBioParagraphs} className="mt-6" />
        </Container>
      </section>

      <section className="border-y border-white/10 bg-surface/50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">What I believe</h2>
          <ul className="prose-measure mt-6 space-y-4">
            {profile.beliefs.map((belief) => (
              <li key={belief.slice(0, 40)} className="flex items-start gap-3 text-base leading-relaxed text-fg-secondary">
                <Check aria-hidden="true" size={18} className="mt-1 shrink-0 text-accent-a" />
                <span>{belief}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-fg">Short bio for reuse</h2>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-a">
                80-word biography
              </p>
              <p className="mt-2 text-base leading-relaxed text-fg-secondary">{profile.bio80}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-a">
                25-word biography
              </p>
              <p className="mt-2 text-base leading-relaxed text-fg-secondary">{profile.bio25}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
