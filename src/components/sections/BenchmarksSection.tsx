"use client";

import { BenchmarkCharts } from "@/components/mocks/BenchmarkCharts";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { BENCHMARKS_INTRO } from "@/lib/content";

export function BenchmarksSection() {
  return (
    <section id="benchmarks" className="relative border-b border-border/70 bg-muted py-24 md:py-32">
      <div className="container-site mx-auto flex max-w-[1400px] flex-col items-start gap-16 lg:flex-row lg:gap-24">
        
        {/* LEFT: Sticky Header */}
        <Reveal className="lg:sticky lg:top-32 lg:w-[400px] xl:w-[450px] shrink-0">
          <div className="flex flex-col items-start text-left">
            <SectionEyebrow>benchmarks</SectionEyebrow>
            <h2 className="display mt-6 text-[3rem] leading-[1.05] tracking-tight text-foreground md:text-[4.5rem]">
              State of the art on the{" "}
              <span className="italic text-primary">benchmarks that matter.</span>
            </h2>
            <p className="mt-6 text-[1.125rem] leading-relaxed text-muted-foreground md:text-[1.25rem]">
              {BENCHMARKS_INTRO.subtitle}
            </p>
          </div>
        </Reveal>

        {/* RIGHT: Scrolling Content (Lollipop Charts) */}
        <div className="w-full flex-1 pt-4 lg:pt-0">
          <BenchmarkCharts />
        </div>
        
      </div>
    </section>
  );
}
