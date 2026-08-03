import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { footerNav, siteSettings } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink text-paper">
      <Container className="grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">
            {siteSettings.name} — Founder, Operator &amp; AI Business Automation Strategist.
          </p>
          <p className="mt-3 max-w-md text-sm text-slate-soft">
            Building scalable, data-driven technology ecosystems from Lahore to global markets.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {footerNav.map((route) => (
            <Link key={route.href} href={route.href} className="text-slate-soft hover:text-paper">
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-paper">Social</p>
          <div className="flex gap-3">
            <a
              href={siteSettings.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ateeq Asif on LinkedIn"
              className="rounded-full border border-ink-line p-2 text-slate-soft transition-colors hover:border-paper hover:text-paper"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={siteSettings.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ateeq Asif on Facebook"
              className="rounded-full border border-ink-line p-2 text-slate-soft transition-colors hover:border-paper hover:text-paper"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-ink-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ateeq Asif. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-paper">
            Privacy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
