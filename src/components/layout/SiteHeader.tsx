"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { primaryNav, siteSettings, ctaCopy } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <Container className="flex h-[4.5rem] items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-fg">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-a to-accent-b"
          />
          {siteSettings.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {primaryNav.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-accent-a ${
                  active ? "text-fg" : "text-fg-secondary"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="glass gradient-border rounded-full px-5 py-2.5 text-sm font-semibold text-fg transition-all hover:shadow-[0_0_30px_-6px_var(--color-accent-a)]"
          >
            {ctaCopy.primary}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[4.5rem] z-40 origin-top border-b border-white/10 bg-bg/95 backdrop-blur-xl shadow-lg transition-all duration-200 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-6">
          {primaryNav.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-fg hover:bg-white/5"
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="glass gradient-border mt-3 rounded-full px-5 py-3 text-center text-sm font-semibold text-fg"
          >
            {ctaCopy.primary}
          </Link>
        </nav>
      </div>
    </header>
  );
}
