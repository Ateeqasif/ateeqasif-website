import Image from "next/image";
import { profile } from "@/content/profile";
import { siteSettings } from "@/content/site";

export function AuthorBlock() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-paper-line bg-white/60 p-6">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-paper-soft">
        <Image
          src="/images/portraits/headshot-square.svg"
          alt={`Portrait of ${siteSettings.name}`}
          fill
          sizes="3.5rem"
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-semibold text-ink">{siteSettings.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate">{profile.bio25}</p>
      </div>
    </div>
  );
}
