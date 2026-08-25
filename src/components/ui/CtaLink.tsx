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
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_0_40px_-8px_var(--color-accent-a)] hover:-translate-y-0.5",
  secondary: "glass glass-hover text-fg",
  ghost: "gradient-text hover:opacity-80",
};

export function CtaLink({ href, children, variant = "primary", external = false, className = "" }: CtaLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      <Icon aria-hidden="true" size={16} className={variant === "ghost" ? "text-accent-a" : ""} />
    </Link>
  );
}
