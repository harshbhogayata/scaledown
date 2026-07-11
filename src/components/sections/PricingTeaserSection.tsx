"use client";

import { Reveal } from "@/components/site/Reveal";
import { EXTERNAL } from "@/lib/constants";
import { PRICING } from "@/lib/content";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/site/Magnetic";

export function PricingTeaserSection() {
  return (
    <section className="bg-white py-8 md:py-12 border-t border-border">
      <div className="container-site max-w-[1200px]">
        {/* Header Block */}
        <Reveal>
          <div className="mb-8 flex flex-col items-start md:mb-12">
            <div className="mb-4 flex items-center justify-start gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <img src="/brand/logo.png" alt="ScaleDown" className="size-4 object-contain" />
              <span>Pricing</span>
              <span className="h-4 w-px bg-border"></span>
              <span>ScaleDown</span>
            </div>
            <h2 className="max-w-3xl text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-foreground md:text-[4rem]">
              Flat rate. <span className="italic text-primary">No theater.</span>
            </h2>
          </div>
        </Reveal>

        {/* Editorial Pricing Layout */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 mb-16">
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-mono text-[11px] font-bold tracking-widest text-muted-foreground uppercase mb-4">Pay as you go</h3>
                <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  {PRICING.developer.label}
                </p>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="text-[3.5rem] font-semibold leading-[0.8] tracking-[-0.05em] text-foreground md:text-[5rem]">
                    {PRICING.developer.price}
                  </span>
                  <span className="text-[1.125rem] font-medium text-muted-foreground">
                    {PRICING.developer.unit}
                  </span>
                </div>
                <p className="mt-4 max-w-sm text-[1rem] leading-snug text-muted-foreground md:text-[1.125rem] mb-8">
                  {PRICING.subtitle}
                </p>
              </div>
              
              <Magnetic strength={0.3}>
                <a
                  href={EXTERNAL.getApiKey}
                  className="group mt-8 inline-flex w-max items-center justify-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-[1rem] font-semibold text-background transition-all hover:bg-primary hover:scale-[1.02] active:scale-95 md:text-[1.125rem]"
                >
                  {PRICING.developer.cta}
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="flex flex-col">
                {PRICING.developer.bullets.map((b, i) => (
                  <li 
                    key={b} 
                    className={cn(
                      "flex items-center justify-between py-4 text-[1rem] text-foreground md:py-5 md:text-[1.125rem] border-b border-border",
                      i === 0 && "border-t border-border",
                      i === PRICING.developer.bullets.length - 1 && "border-b-0 pb-0"
                    )}
                  >
                    {b}
                    <Check className="size-6 shrink-0 text-primary" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Enterprise Strip */}
        <Reveal delay={0.2}>
          <div className="group mt-8 flex flex-col justify-between gap-6 border-y border-border py-8 transition-colors hover:border-foreground md:mt-12 md:flex-row md:items-center md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
              <span className="text-[1.5rem] font-semibold tracking-tight text-foreground md:text-[2rem]">
                {PRICING.enterprise.label}
              </span>
              <span className="hidden h-8 w-px bg-border md:block"></span>
              <span className="text-[1.125rem] text-muted-foreground md:text-[1.25rem]">
                Self-hosted VPC, fine-tuning, and dedicated SLAs.
              </span>
            </div>
            <a 
              href="mailto:hello@scaledown.ai" 
              className="inline-flex items-center gap-3 text-[1.125rem] font-semibold text-foreground transition-colors group-hover:text-primary md:text-[1.25rem]"
            >
              Contact Sales <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
