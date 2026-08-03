import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink-soft",
  secondary: "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
  ghost: "text-accent-strong hover:text-ink",
};

export function CtaLink({ href, children, variant = "primary", external = false, className = "" }: CtaLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      <Icon aria-hidden="true" size={16} />
    </Link>
  );
}
