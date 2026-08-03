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
    <header className="sticky top-0 z-50 border-b border-paper-line bg-paper/95 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
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
                className={`text-sm font-medium transition-colors hover:text-accent-strong ${
                  active ? "text-ink" : "text-slate"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
          >
            {ctaCopy.primary}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-paper-line p-2 text-ink md:hidden"
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
        className={`fixed inset-x-0 top-[4.5rem] z-40 origin-top border-b border-paper-line bg-paper shadow-lg transition-all duration-200 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-6">
          {primaryNav.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper-soft"
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
          >
            {ctaCopy.primary}
          </Link>
        </nav>
      </div>
    </header>
  );
}
