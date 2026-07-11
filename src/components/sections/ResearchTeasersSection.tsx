"use client";

import Link from "next/link";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { RESEARCH_TEASERS } from "@/lib/showcase";

export function ResearchTeasersSection() {
  return (
    <section className="border-b border-border/70 py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionEyebrow>{RESEARCH_TEASERS.eyebrow}</SectionEyebrow>
            <h2 className="display max-w-2xl text-4xl text-foreground md:text-5xl">
              {RESEARCH_TEASERS.title}{" "}
              <span className="italic text-primary">{RESEARCH_TEASERS.italic}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/research" className="text-sm font-semibold text-primary hover:underline">
              All research →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {RESEARCH_TEASERS.items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <Link
                href="/research"
                className="flex flex-col gap-2 py-8 transition hover:bg-white/40 md:flex-row md:items-baseline md:gap-10 md:px-2"
              >
                <span className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-primary uppercase md:w-36">
                  {item.venue}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{item.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
