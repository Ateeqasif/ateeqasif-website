import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { StrategyFlowDiagram } from "@/components/ui/diagrams/StrategyFlowDiagram";
import { breadcrumbSchema } from "@/lib/structured-data";
import { ctaCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "AI, Automation & Business Scale Expertise — Ateeq Asif",
  description:
    "Perspectives and advisory focus across AI adoption, automation, operating systems, data, and execution governance.",
};

const themes = [
  {
    title: "AI strategy & responsible adoption",
    body: "AI adoption should start with a business problem and a measurable outcome. I help leaders identify useful applications, distinguish automation from augmentation, define human oversight, and prioritize initiatives that can move from experimentation into dependable operations.",
    questions: [
      "Where can AI produce real leverage?",
      "Which decisions require human approval?",
      "What data and controls are missing?",
      "How will value, risk, quality, and adoption be measured?",
    ],
  },
  {
    title: "Business process automation",
    body: "Automation is most valuable when it removes repeated coordination, duplicate entry, delays, and avoidable errors across a complete workflow. The goal is not to automate isolated clicks; it is to improve the flow of work across people, tools, and decisions.",
    questions: [
      "Where is work waiting?",
      "What is repeated manually?",
      "Which systems are disconnected?",
      "What exceptions occur?",
      "Who owns the result after automation?",
    ],
  },
  {
    title: "Operating systems for scale",
    body: "Growth exposes weak ownership, undocumented knowledge, inconsistent decisions, and founder dependency. I focus on the structures that help teams scale: clear roles, management rhythms, SOPs, governance, escalation paths, dashboards, and second-line leadership.",
    questions: [
      "Where are decisions concentrated?",
      "Which processes depend on individuals?",
      "What must be standardized?",
      "What should remain flexible?",
      "How do managers know performance is on track?",
    ],
  },
  {
    title: "Data-driven management",
    body: "Leaders need a small number of reliable signals—not more dashboards. I help frame the decisions that data must support, the definitions teams must share, and the management routines that turn information into action.",
    questions: [
      "Which decisions are currently made by instinct?",
      "Are teams measuring the same thing?",
      "Which indicators predict problems early?",
      "What action follows each KPI?",
    ],
  },
  {
    title: "Strategy, roadmaps & execution governance",
    body: "Complex initiatives fail when strategy is disconnected from delivery. I translate objectives into programs, milestones, ownership, dependencies, governance forums, quality controls, and decision points—so leadership can see progress and intervene early.",
    questions: [
      "What outcome defines success?",
      "Which workstreams are dependent?",
      "Who owns each decision?",
      "What evidence proves a milestone is complete?",
      "What risks need executive attention?",
    ],
  },
];

const engagementFormats = [
  "Executive strategy conversation or diagnostic workshop.",
  "Advisory engagement for founders and leadership teams.",
  "Transformation roadmap and operating-model design.",
  "Speaking, panel participation, or leadership roundtable.",
  "Company-level implementation through the appropriate venture, where relevant.",
];

export default function ExpertisePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Expertise", href: "/expertise" }])}
      />

      <section className="border-b border-white/10 py-16 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expertise" }]} />
          <Eyebrow>Expertise</Eyebrow>
          <h1 className="text-balance mt-4 max-w-3xl text-4xl font-semibold text-fg sm:text-5xl">
            From strategic ambition to an operating system that can deliver it.
          </h1>
          <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-secondary">
            I work best where business ambition has outgrown the current way of operating. My
            contribution is to bring structure: clarify the outcome, map the friction, align
            people and systems, and create an execution model leaders can measure and improve.
          </p>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-surface/50 py-14">
        <Container>
          <StrategyFlowDiagram />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="space-y-14">
            {themes.map((theme) => (
              <div key={theme.title} className="grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
                <div>
                  <h2 className="text-2xl font-semibold text-fg">{theme.title}</h2>
                  <p className="prose-measure mt-4 text-base leading-relaxed text-fg-secondary">{theme.body}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface/50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-a">
                    Typical questions
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-fg-secondary">
                    {theme.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-surface/50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">Engagement formats</h2>
          <ul className="prose-measure mt-6 grid gap-3 sm:grid-cols-2">
            {engagementFormats.map((format) => (
              <li key={format} className="rounded-xl glass p-4 text-sm text-fg-secondary">
                {format}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        headline="Have a complex growth or transformation challenge?"
        body="Share the context, the current constraint, and the outcome you want. I'll tell you honestly whether I can help and what the most useful next step may be."
        primaryCta={{ label: ctaCopy.primary, href: "/contact" }}
      />
    </>
  );
}
