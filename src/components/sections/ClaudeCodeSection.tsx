"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { EXTERNAL } from "@/lib/constants";
import { CLAUDE_CODE } from "@/lib/showcase";

export function ClaudeCodeSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-[#0c1222] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-sky-300 uppercase">
            {CLAUDE_CODE.eyebrow}
          </p>
          <h2 className="display text-4xl text-white md:text-5xl lg:text-6xl">
            {CLAUDE_CODE.title}{" "}
            <span className="italic text-sky-300">{CLAUDE_CODE.italic}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            {CLAUDE_CODE.body}
          </p>
          <ul className="mt-8 space-y-4">
            {CLAUDE_CODE.install.map((step, i) => (
              <li key={step.label} className="flex gap-4">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <div>
                  <p className="font-medium text-white">{step.label}</p>
                  <p className="text-sm text-white/50">{step.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              className="h-12 rounded-full px-7"
              render={<a href={EXTERNAL.getApiKey} />}
            >
              {CLAUDE_CODE.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-transparent px-7 text-white hover:bg-white/10"
              render={<a href="/claude-code" />}
            >
              Full setup guide
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl bg-[#151c2e] ring-1 ring-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="font-mono text-[11px] tracking-wide text-sky-300">
                scaledown · mcp
              </span>
              <span className="font-mono text-[10px] text-white/35">stdio</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-sky-100 md:text-[13px]">
              {CLAUDE_CODE.terminal}
            </pre>
            <div className="grid gap-px border-t border-white/10 bg-white/5 sm:grid-cols-2">
              {CLAUDE_CODE.tools.map((t) => (
                <div key={t.name} className="bg-[#151c2e] px-4 py-3">
                  <p className="font-mono text-xs text-primary">{t.name}</p>
                  <p className="mt-1 text-xs text-white/45">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
