import Image from "next/image";
import { profile } from "@/content/profile";
import { siteSettings } from "@/content/site";

export function AuthorBlock() {
  return (
    <div className="glass flex items-start gap-4 rounded-2xl p-6">
      <div className="gradient-border relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface">
        <Image
          src="/images/portraits/headshot-square.svg"
          alt={`Portrait of ${siteSettings.name}`}
          fill
          sizes="3.5rem"
          className="object-cover"
          unoptimized
        />
      </div>
      <div>
        <p className="font-semibold text-fg">{siteSettings.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-fg-secondary">{profile.bio25}</p>
      </div>
    </div>
  );
}
