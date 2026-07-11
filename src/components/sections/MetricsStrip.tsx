"use client";

import { Reveal, SectionEyebrow } from "@/components/site/Reveal";

const METRICS = [
  { value: "20k", unit: "tok/s", label: "Peak throughput" },
  { value: "$0.05", unit: "/1M", label: "Flat token price" },
  { value: "50M", unit: "free", label: "Tokens to start" },
  { value: "95%", unit: "acc", label: "CLINC OOS classify" },
] as const;

export function MetricsStrip() {
  return (
    <section className="border-b border-border/70 py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>metrics & milestones</SectionEyebrow>
          <h2 className="display max-w-3xl text-4xl text-foreground md:text-5xl lg:text-6xl">
            Behind every number,{" "}
            <span className="italic text-primary">less spend.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            Independently verified on public benchmarks — speed, cost, and accuracy that frontier
            models can&apos;t match at this price.
          </p>
          <a
            href="#benchmarks"
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Reproduce on FinanceBench, QMSum, CLINC, CUAD →
          </a>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={0.08 * i}>
              <div className="border-t border-primary/25 pt-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="display text-5xl text-foreground md:text-6xl">{m.value}</span>
                  <span className="font-mono text-xs tracking-wide text-primary uppercase">
                    {m.unit}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
