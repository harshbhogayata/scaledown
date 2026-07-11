"use client";

import Link from "next/link";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { USE_CASES } from "@/lib/showcase";

export function UseCasesSection() {
  return (
    <section className="border-b border-border/70 bg-white/50 py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>{USE_CASES.eyebrow}</SectionEyebrow>
          <h2 className="display max-w-3xl text-4xl text-foreground md:text-5xl lg:text-6xl">
            {USE_CASES.title}{" "}
            <span className="italic text-primary">{USE_CASES.italic}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {USE_CASES.items.map((item, i) => (
            <Reveal key={item.slug} delay={0.06 * i}>
              <article className="group flex h-full flex-col border-t border-primary/30 pt-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="display text-3xl text-foreground md:text-4xl">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-wide text-primary uppercase">
                    {item.model}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">{item.problem}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.outcome}</p>
                <div className="mt-6 grid gap-3 font-mono text-[11px] leading-relaxed sm:grid-cols-2">
                  <div className="rounded-xl bg-[#0c1222] p-3 text-sky-100/80">
                    <p className="mb-1 text-[9px] tracking-wide text-white/35 uppercase">In</p>
                    {item.sampleIn}
                  </div>
                  <div className="rounded-xl bg-primary/10 p-3 text-foreground">
                    <p className="mb-1 text-[9px] tracking-wide text-primary uppercase">Out</p>
                    {item.sampleOut}
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-semibold text-primary transition group-hover:gap-2"
                >
                  Open {item.model} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
