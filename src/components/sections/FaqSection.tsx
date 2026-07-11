"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/lib/content";
import { EXTERNAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Mail, Shield, Cookie } from "lucide-react";

function FaqAccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group/accordion-trigger relative flex w-full items-center justify-between text-left transition-all outline-none",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative ml-6 flex size-8 shrink-0 items-center justify-center">
          <span className="absolute h-[2px] w-6 bg-primary transition-all duration-300 -translate-y-1.5 group-aria-expanded/accordion-trigger:translate-y-0 group-aria-expanded/accordion-trigger:rotate-45" />
          <span className="absolute h-[2px] w-6 bg-primary transition-all duration-300 translate-y-1.5 group-aria-expanded/accordion-trigger:translate-y-0 group-aria-expanded/accordion-trigger:-rotate-45" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function FaqSection() {
  return (
    <section className="border-t border-border bg-muted py-12 md:py-16">
      <div className="container-site max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-col items-start text-left lg:sticky lg:top-24">
                <div className="mb-8 flex items-center justify-start gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <img src="/brand/logo.png" alt="ScaleDown" className="size-4 object-contain" />
                  <span>Popular Queries</span>
                </div>
                <h2 className="mb-6 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.05em] text-foreground md:text-[3.5rem]">
                  Quick and clear answers to your key questions
                </h2>
                <p className="max-w-md text-[1.125rem] leading-snug text-muted-foreground md:text-[1.25rem]">
                  Get the clarity you need about our models, API, and capabilities.
                </p>

                <div className="mt-12 flex w-full max-w-sm flex-col gap-3">
                  <a href={EXTERNAL.docs} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:bg-muted hover:shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <BookOpen className="size-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.95rem] font-semibold text-foreground">Read the Docs</span>
                        <span className="text-[0.85rem] text-muted-foreground">API Reference & Guides</span>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-[#ccc] transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </a>

                  <a href="mailto:hello@scaledown.ai" className="group flex items-center justify-between rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:bg-muted hover:shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Mail className="size-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.95rem] font-semibold text-foreground">Contact Support</span>
                        <span className="text-[0.85rem] text-muted-foreground">hello@scaledown.ai</span>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-[#ccc] transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </a>

                  <a href="/privacy" className="group flex items-center justify-between rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:bg-muted hover:shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Shield className="size-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.95rem] font-semibold text-foreground">Privacy Policy</span>
                        <span className="text-[0.85rem] text-muted-foreground">How we protect your data</span>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-[#ccc] transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </a>

                  <a href="/cookies" className="group flex items-center justify-between rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:bg-muted hover:shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Cookie className="size-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.95rem] font-semibold text-foreground">Cookie Policy</span>
                        <span className="text-[0.85rem] text-muted-foreground">Manage your preferences</span>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-[#ccc] transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion className="w-full">
                {FAQ.map((item) => (
                  <AccordionItem key={item.q} value={item.q} className="border-b border-border first:border-t-0">
                    <FaqAccordionTrigger className="group py-6 text-[1.25rem] font-medium tracking-tight text-foreground transition-colors hover:text-primary md:py-8 md:text-[1.75rem]">
                      {item.q}
                    </FaqAccordionTrigger>
                    <AccordionContent className="pb-8 text-[1rem] leading-relaxed text-muted-foreground md:pb-10 md:text-[1.125rem]">
                      <div className="max-w-2xl">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
