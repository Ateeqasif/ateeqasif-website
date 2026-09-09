"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Portrait3DProps = {
  src: string;
  alt: string;
};

export function Portrait3D({ src, alt }: Portrait3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -14, ry: px * 16 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div className="relative mx-auto w-full max-w-sm" style={{ perspective: "1200px" }}>
      <div
        aria-hidden="true"
        className="animate-pulse-slow pointer-events-none absolute inset-x-6 top-6 h-[80%] rounded-[3rem] bg-gradient-to-br from-accent-a/35 to-accent-b/35 blur-3xl"
      />
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/5] w-full transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 24rem, 80vw"
          className="object-contain object-bottom drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)]"
          priority
          unoptimized
          style={{ transform: "translateZ(40px)" }}
        />
      </div>
    </div>
  );
}
