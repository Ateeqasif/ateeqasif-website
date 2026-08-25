import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AppearanceCard } from "@/components/ui/AppearanceCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { appearances } from "@/content/appearances";
import { mediaKitRequirements, speakingFormats, speakingTopics } from "@/content/speaking-topics";
import { ctaCopy, siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Speaking & Media — Ateeq Asif",
  description:
    "Invite Ateeq Asif for talks, interviews, panels, and executive conversations on AI, automation, leadership, and scale.",
};

export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Speaking", href: "/speaking" }])} />

      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Speaking" }]} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>Speaking &amp; Media</Eyebrow>
              <h1 className="text-balance mt-4 text-4xl font-semibold text-fg sm:text-5xl">
                Practical conversations about AI, leadership, and building organizations that
                scale.
              </h1>
              <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
                I speak with founders, leadership teams, students, technology audiences, and
                business communities about the decisions behind meaningful transformation—not
                just the tools making headlines.
              </p>
            </div>
            <div className="relative mx-auto aspect-[3/2] w-full max-w-md overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/portraits/speaking-landscape.svg"
                alt={`${siteSettings.name} speaking portrait`}
                fill
                sizes="(min-width: 1024px) 28rem, 80vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">Suggested speaking topics</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {speakingTopics.map((topic) => (
              <div key={topic.slug} className="rounded-2xl glass p-7">
                <h3 className="text-lg font-semibold text-fg">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{topic.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-surface/50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">Formats</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {speakingFormats.map((format) => (
              <li key={format} className="rounded-xl glass p-4 text-sm text-fg-secondary">
                {format}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">Selected appearances</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {appearances.map((appearance) => (
              <AppearanceCard key={appearance.slug} appearance={appearance} />
            ))}
          </div>
          <p className="prose-measure mt-6 text-sm leading-relaxed text-fg-tertiary">
            Add only appearances with a stable link, approved title, date, publication logo, and
            usable visual. Do not fill the page with minor social clips merely to increase
            volume.
          </p>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-fg">Media kit requirements</h2>
          <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-fg-secondary">
            {mediaKitRequirements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-a" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        headline="Planning a conversation for founders, executives, or technology leaders?"
        body="Share the audience, format, location, date, and intended outcome. My team will respond with availability and the most relevant topic direction."
        primaryCta={{ label: ctaCopy.speaking, href: "/contact" }}
      />
    </>
  );
}
