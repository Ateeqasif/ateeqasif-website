import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `How ${siteSettings.name} collects, uses, and protects information submitted through this website.`,
  robots: { index: false, follow: true },
};

const sections = [
  {
    heading: "Who operates this website",
    body: `This website is operated by ${siteSettings.formalName} ("I", "me"). For any privacy question, contact ${siteSettings.email}.`,
  },
  {
    heading: "Information collected",
    body: "Through the contact form, I collect the name, work email, organization, reason for contacting, message, and timeline you choose to provide. Through the optional newsletter form, I collect an email address. No payment or highly sensitive personal information is collected on this site.",
  },
  {
    heading: "Purpose and lawful basis for processing",
    body: "Information submitted through the contact form is used to respond to your enquiry, which is processed on the basis of your consent and my legitimate interest in responding to business, partnership, speaking, and media enquiries. Newsletter subscriptions are processed on the basis of your consent and can be withdrawn at any time.",
  },
  {
    heading: "Service providers",
    body: "This site is intended to run on Vercel (hosting) and Resend (transactional email for the contact form). No analytics provider is enabled by default; if analytics are added, this notice will be updated to name the provider and describe the data collected before it goes live in production.",
  },
  {
    heading: "Retention and security",
    body: "Enquiry and subscription data is retained only as long as needed to respond to your request or maintain a subscription, and is not sold or shared with third parties for marketing purposes. Reasonable technical safeguards (encrypted transport, access-controlled hosting) are used to protect the information submitted.",
  },
  {
    heading: "Cookies and analytics",
    body: "This site does not set marketing or advertising cookies. If privacy-friendly analytics (or consent-managed GA4) are enabled in the future, cookie and consent behavior will be documented here and reflected in an on-site consent control.",
  },
  {
    heading: "Your rights",
    body: `You may ask to access, correct, or delete the personal information you have submitted, or withdraw consent for future contact, by emailing ${siteSettings.email}.`,
  },
  {
    heading: "International transfers",
    body: "Where service providers process data outside your country of residence, appropriate safeguards required by applicable law are used.",
  },
  {
    heading: "Policy updates",
    body: "This notice may be updated as the site's tools, hosting, or analytics change. The version below reflects the current draft.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />

        <div className="mt-6 rounded-xl border border-accent-a/30 bg-accent-a/10 px-4 py-3 text-sm font-medium text-fg">
          Draft — this notice must be reviewed and approved against the site&rsquo;s actual
          hosting, analytics, and email tools before launch.
        </div>

        <h1 className="mt-6 text-4xl font-semibold text-fg">Privacy Notice</h1>
        <p className="mt-2 text-sm text-fg-tertiary">Draft — last updated {new Date().toISOString().slice(0, 10)}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-fg">{section.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-fg-secondary">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
