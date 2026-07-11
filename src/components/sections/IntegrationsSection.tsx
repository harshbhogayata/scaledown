"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { INTEGRATIONS } from "@/lib/showcase";

export function IntegrationsSection() {
  return (
    <section className="border-b border-border/70 bg-white/50 py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>{INTEGRATIONS.eyebrow}</SectionEyebrow>
          <h2 className="display max-w-3xl text-4xl text-foreground md:text-5xl">
            {INTEGRATIONS.title}
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {INTEGRATIONS.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.items.map((item, i) => {
            const external = item.href.startsWith("http");
            const inner = (
              <>
                <div className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="max-h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </>
            );
            const className =
              "flex h-full gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(12,18,34,0.05)] ring-1 ring-black/5 transition hover:ring-primary/30";

            return (
              <Reveal key={item.name} delay={0.05 * i}>
                {external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
