"use client";

import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { PIPELINE } from "@/lib/showcase";

export function PipelineSection() {
  return (
    <section id="pipeline" className="border-b border-border/70 py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>{PIPELINE.eyebrow}</SectionEyebrow>
          <h2 className="display max-w-3xl text-4xl text-foreground md:text-5xl lg:text-6xl">
            {PIPELINE.title}{" "}
            <span className="italic text-primary">{PIPELINE.italic}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            {PIPELINE.body}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
            {PIPELINE.stages.map((stage, i) => (
              <div key={stage.id} className="flex flex-1 items-stretch md:flex-col">
                <div className="flex-1 rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(12,18,34,0.06)] ring-1 ring-black/5 md:rounded-none md:first:rounded-l-2xl md:last:rounded-r-2xl">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{stage.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{stage.detail}</p>
                </div>
                {i < PIPELINE.stages.length - 1 ? (
                  <div className="flex items-center justify-center px-1 text-primary md:hidden">
                    ↓
                  </div>
                ) : null}
                {i < PIPELINE.stages.length - 1 ? (
                  <div className="hidden items-center px-1 text-primary md:flex">→</div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
