"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CompressSliderDemo } from "@/components/mocks/CompressSliderDemo";
import { SummarizeRaceDemo } from "@/components/mocks/SummarizeRaceDemo";
import { ExtractHoverDemo } from "@/components/mocks/ExtractHoverDemo";
import { ClassifyRouterDemo } from "@/components/mocks/ClassifyRouterDemo";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/lib/constants";
import { PRODUCT_COPY, PRODUCTS_SECTION } from "@/lib/content";
import { ArrowRight } from "lucide-react";

const demos = {
  compress: CompressSliderDemo,
  summarize: SummarizeRaceDemo,
  extract: ExtractHoverDemo,
  classify: ClassifyRouterDemo,
} as const;

export function BionicGridSection() {
  return (
    <section className="bg-white py-8 md:py-12 border-t border-border">
      <div className="container-site max-w-[1200px]">

        {/* Header Block — same pattern as Pricing */}
        <Reveal>
          <div className="mb-8 flex flex-col items-start md:mb-12">
            <div className="mb-4 flex items-center justify-start gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <img src="/brand/logo.png" alt="ScaleDown" className="size-4 object-contain" />
              <span>Product Suite</span>
              <span className="h-4 w-px bg-border"></span>
              <span>Models</span>
            </div>
            <h2 className="max-w-3xl text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-foreground md:text-[4rem]">
              {PRODUCTS_SECTION.title.split(" for the ")[0]} for the{" "}
              <span className="italic text-primary">job.</span>
            </h2>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6 mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
            {PRODUCTS.map((product) => {
              const copy = PRODUCT_COPY[product.slug];
              const Demo = demos[product.slug];
              
              const BENTO_CONFIG: Record<string, { textSpan: string; demoSpan: string; textOrder: string; demoOrder: string }> = {
                compress: {
                  textSpan: "lg:col-span-5",
                  demoSpan: "lg:col-span-7",
                  textOrder: "order-1",
                  demoOrder: "order-2",
                },
                summarize: {
                  textSpan: "lg:col-span-4",
                  demoSpan: "lg:col-span-8",
                  textOrder: "order-3 lg:order-4",
                  demoOrder: "order-4 lg:order-3",
                },
                extract: {
                  textSpan: "lg:col-span-6",
                  demoSpan: "lg:col-span-6",
                  textOrder: "order-5",
                  demoOrder: "order-6",
                },
                classify: {
                  textSpan: "lg:col-span-7",
                  demoSpan: "lg:col-span-5",
                  textOrder: "order-7 lg:order-8",
                  demoOrder: "order-8 lg:order-7",
                },
              };

              const config = BENTO_CONFIG[product.slug as keyof typeof BENTO_CONFIG];
              
              const itemVariant = {
                hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              };

              return (
                <React.Fragment key={product.slug}>
                  {/* Text Card */}
                  <motion.div
                    variants={itemVariant}
                    className={`group relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-border bg-white/60 p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-border hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${config.textSpan} ${config.textOrder}`}
                  >
                    {/* Ambient background orb per text card */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 flex items-center justify-center pointer-events-none opacity-10 transition-opacity group-hover:opacity-30">
                      <div className="h-[300px] w-[300px] rounded-full bg-primary blur-[80px]" />
                    </div>

                    <div className="relative z-10">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        {copy.name}
                      </p>
                      <h3 className="text-[1.5rem] font-semibold tracking-tight leading-[1.1] text-foreground md:text-[1.75rem]">
                        {copy.headline}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-relaxed text-muted-foreground">
                        {copy.body}
                      </p>

                      <div className="mt-8 flex flex-wrap items-center gap-6">
                        <Link
                          href={product.href}
                          className="group/link inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          Learn more
                          <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                        <a
                          href={copy.docs}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[0.95rem] font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Docs
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Demo Card */}
                  <motion.div
                    variants={itemVariant}
                    className={`relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-muted p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-border hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${config.demoSpan} ${config.demoOrder}`}
                  >
                    <Demo />
                  </motion.div>
                </React.Fragment>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}
