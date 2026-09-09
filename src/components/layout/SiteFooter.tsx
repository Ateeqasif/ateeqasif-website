import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { footerNav, siteSettings } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface text-fg">
      <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-xl font-semibold">
            {siteSettings.name}, Collaborator &amp; Opportunity Builder.
          </p>
          <p className="mt-3 text-sm text-fg-secondary">
            Collaborating across technology and impact-driven ventures from Lahore, Pakistan.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            {footerNav.map((route) => (
              <Link key={route.href} href={route.href} className="text-fg-secondary hover:text-fg">
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-fg">Social</p>
            <div className="flex gap-3">
              <a
                href={siteSettings.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteSettings.name} on LinkedIn`}
                className="rounded-full border border-white/10 p-2 text-fg-secondary transition-colors hover:border-accent-a/40 hover:text-accent-a"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={siteSettings.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteSettings.name} on Facebook`}
                className="rounded-full border border-white/10 p-2 text-fg-secondary transition-colors hover:border-accent-a/40 hover:text-accent-a"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-xs text-fg-tertiary sm:text-left">
          <p>© {year} Ateeq Asif. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
