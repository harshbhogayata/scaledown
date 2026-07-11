"use client";

import Image from "next/image";
import { PARTNERS } from "@/lib/content";

export function PartnersStrip() {

  return (
    <section className="relative overflow-hidden border-y border-white/60 bg-white/40 backdrop-blur-xl py-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      <div className="container-site max-w-[1200px] mb-5 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        <img src="/brand/logo.png" alt="ScaleDown" className="size-4 object-contain" />
        <span>Partners</span>
        <span className="h-4 w-px bg-border"></span>
        <span>Trusted By</span>
      </div>
      <div className="relative flex overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
          {/* Set 1 */}
          <div className="flex gap-14 pr-14 items-center">
            {PARTNERS.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="relative flex h-10 w-[120px] shrink-0 items-center justify-center opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={40}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Set 2 (Duplicate for loop) */}
          <div className="flex gap-14 pr-14 items-center" aria-hidden="true">
            {PARTNERS.map((p, i) => (
              <div
                key={`${p.name}-dup-${i}`}
                className="relative flex h-10 w-[120px] shrink-0 items-center justify-center opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={40}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
