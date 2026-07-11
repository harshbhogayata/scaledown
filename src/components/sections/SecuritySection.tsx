"use client";

import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { SECURITY } from "@/lib/content";
import { Database, Server, Lock, ShieldCheck } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";

const ICONS = [Database, Server, Lock, ShieldCheck];

export function SecuritySection() {
  return (
    <section className="bg-white py-8 md:py-12 border-t border-border">
      <div className="container-site max-w-[1200px]">

        {/* Header Block — same pattern as Pricing/FAQ */}
        <Reveal>
          <div className="mb-6 flex flex-col items-start md:mb-8">
            <div className="mb-4 flex items-center justify-start gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <img src="/brand/logo.png" alt="ScaleDown" className="size-4 object-contain" />
              <span>Security</span>
              <span className="h-4 w-px bg-border"></span>
              <span>Compliance</span>
            </div>
            <h2 className="max-w-3xl text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-foreground md:text-[4rem]">
              Built for{" "}
              <span className="italic text-primary">regulated stacks.</span>
            </h2>
          </div>
        </Reveal>

        {/* Content — editorial two-column like Pricing */}
        <Reveal delay={0.1}>
          <div className="border-t border-foreground pt-6 md:pt-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

              {/* Left: Description + Badges + CTA */}
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                    Enterprise-Ready Infrastructure
                  </p>
                  <p className="max-w-sm text-[1rem] leading-relaxed text-muted-foreground md:text-[1.125rem]">
                    {SECURITY.subtitle}
                  </p>

                  {/* Compliance Badges — 2x2 grid */}
                  <div className="mt-8 grid w-max grid-cols-2 gap-2 md:gap-3">
                    {SECURITY.badges.map((b) => (
                      <div
                        key={b.name}
                        className="flex size-20 items-center justify-center overflow-hidden rounded-full border border-[#e5e5e5] transition-transform hover:scale-105 md:size-[104px]"
                      >
                        <Image
                          src={b.src}
                          alt={b.name}
                          width={104}
                          height={104}
                          className="size-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:hello@scaledown.ai"
                  className="group mt-8 inline-flex w-max items-center justify-center gap-3 rounded-full bg-[#111] px-8 py-3.5 text-[1rem] font-semibold text-white transition-all hover:bg-primary md:text-[1.125rem]"
                >
                  Talk to Security
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Right: Editorial Feature List */}
              <div className="lg:col-span-6 lg:border-l lg:border-border lg:pl-16">
                <ul className="flex flex-col">
                  {SECURITY.items.map((item, i) => {
                    const Icon = ICONS[i % ICONS.length];
                    return (
                      <li
                        key={item.title}
                        className={`flex items-center gap-4 py-2.5 text-[1rem] text-foreground md:py-3 md:text-[1.125rem] ${
                          i !== 0 ? "border-t border-border" : ""
                        }`}
                      >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                          <Icon className="size-4" />
                        </div>
                        <span className="flex-1 font-medium">{item.title}</span>
                        <Check className="size-5 shrink-0 text-primary" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
