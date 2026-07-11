import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { EXTERNAL } from "@/lib/constants";
import { PRICING } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flat-rate API at $0.05 per 1M tokens. Enterprise VPC and volume tiering available.",
};

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-b from-[#fafbfc] via-[#e9f4fe] to-white">
      <section className="container-site py-16 text-center">
        <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
          {PRICING.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          {PRICING.subtitle}
        </p>
      </section>

      <section className="container-site grid max-w-5xl gap-5 pb-20 md:grid-cols-2">
        <div className="rounded-lg border border-primary/30 bg-white p-8 shadow-[0_12px_40px_rgba(20,124,228,0.1)]">
          <p className="text-sm font-semibold text-primary">{PRICING.developer.label}</p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-heading text-6xl tracking-tight text-foreground">
              {PRICING.developer.price}
            </span>
            <span className="text-muted-foreground">{PRICING.developer.unit}</span>
          </div>
          <ul className="mt-8 space-y-3 text-left text-sm text-muted-foreground">
            {PRICING.developer.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Button className="mt-8 w-full" size="lg" render={<a href={EXTERNAL.getApiKey} />}>
            {PRICING.developer.cta}
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-white p-8">
          <p className="text-sm font-semibold text-muted-foreground">{PRICING.enterprise.label}</p>
          <div className="mt-4">
            <span className="font-heading text-5xl tracking-tight text-foreground">
              {PRICING.enterprise.price}
            </span>
            <p className="mt-1 text-sm text-muted-foreground">{PRICING.enterprise.unit}</p>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {PRICING.enterprise.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="mt-8 w-full"
            size="lg"
            render={<a href="mailto:soham@scaledown.ai" />}
          >
            {PRICING.enterprise.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
