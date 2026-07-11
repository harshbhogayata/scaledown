import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CompressSliderDemo } from "@/components/mocks/CompressSliderDemo";
import { SummarizeRaceDemo } from "@/components/mocks/SummarizeRaceDemo";
import { ExtractHoverDemo } from "@/components/mocks/ExtractHoverDemo";
import { ClassifyRouterDemo } from "@/components/mocks/ClassifyRouterDemo";
import { Button } from "@/components/ui/button";
import { EXTERNAL, PRODUCTS, type ProductSlug } from "@/lib/constants";
import { PRODUCT_COPY } from "@/lib/content";
import { DX_RESPONSE_SAMPLE, USE_CASES } from "@/lib/showcase";

const demos = {
  compress: CompressSliderDemo,
  summarize: SummarizeRaceDemo,
  extract: ExtractHoverDemo,
  classify: ClassifyRouterDemo,
} as const;

const details: Record<ProductSlug, { bullets: string[]; metric: string; useCases: string[] }> = {
  compress: {
    metric: "20,000 tok/s · ~0.28 F1 on FinanceBench",
    bullets: [
      "Query-aware compression preserves facts relevant to your prompt",
      "Drop into RAG pipelines without changing application logic",
      "Unlimited volume on the flat-rate API",
      "AST-guided selection for code-heavy contexts (HASTE)",
    ],
    useCases: ["RAG context packing", "Long-document Q&A", "Agent memory compression"],
  },
  summarize: {
    metric: "~0.24 ROUGE-L on QMSum · 5,000 tok/s",
    bullets: [
      "Stable, predictable output formats",
      "Handles transcripts and threads up to 1M tokens",
      "Lower latency and cost than frontier summarizers",
      "Built for agent pipelines that need faithful condensation",
    ],
    useCases: ["Meeting notes", "Support thread digests", "Research paper briefs"],
  },
  extract: {
    metric: "~0.52 F1 on CUAD · 12,000 tok/s",
    bullets: [
      "Define entities in plain English — no schema gymnastics",
      "Returns structured JSON with confidence scores",
      "Works on messy text, PDFs, and OCR-backed scans",
      "Outperforms off-the-shelf NER on long legal documents",
    ],
    useCases: ["Contract clause extraction", "Invoice fields", "Compliance entity pulls"],
  },
  classify: {
    metric: "95% accuracy on CLINC OOS · 12,000 tok/s",
    bullets: [
      "Custom label taxonomies in plain text",
      "Millions of items per hour throughput",
      "No fine-tuning or retraining required",
      "Calibrated outputs for routing, triage, and filtering",
    ],
    useCases: ["Ticket routing", "Intent triage", "Content moderation labels"],
  },
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: PRODUCT_COPY[product.slug].body,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const copy = PRODUCT_COPY[product.slug];
  const Demo = demos[product.slug];
  const detail = details[product.slug];
  const story = USE_CASES.items.find(
    (u) => u.model.toLowerCase() === product.slug || u.href === product.href
  );

  return (
    <div className="bg-[#f4f7fb]">
      <section className="border-b border-border bg-gradient-to-b from-white to-[#eaf3fc] py-14">
        <div className="container-site max-w-4xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-primary uppercase">
            {copy.name}
          </p>
          <h1 className="display mt-3 text-3xl text-foreground sm:text-5xl">{copy.headline}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {copy.body}
          </p>
          <p className="mt-3 font-mono text-xs text-primary">{detail.metric}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-full" render={<a href={EXTERNAL.getApiKey} />}>
              Get API Key
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              render={<a href={copy.docs} target="_blank" rel="noreferrer" />}
            >
              API Docs
            </Button>
            <Button variant="ghost" className="rounded-full" render={<Link href="/" />}>
              ← Home
            </Button>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <div className="space-y-8">
          {story ? (
            <div className="border-t border-primary/30 pt-6">
              <h2 className="display text-2xl text-foreground">{story.title}</h2>
              <p className="mt-3 text-sm font-medium text-foreground">{story.problem}</p>
              <p className="mt-2 text-sm text-muted-foreground">{story.outcome}</p>
              <div className="mt-4 grid gap-2 font-mono text-[11px] sm:grid-cols-2">
                <div className="rounded-xl bg-[#0c1222] p-3 text-sky-100/80">
                  <span className="text-white/35">In · </span>
                  {story.sampleIn}
                </div>
                <div className="rounded-xl bg-primary/10 p-3">
                  <span className="text-primary">Out · </span>
                  {story.sampleOut}
                </div>
              </div>
            </div>
          ) : null}
          <div>
            <h2 className="text-lg font-semibold text-foreground">Capabilities</h2>
            <ul className="mt-4 space-y-3">
              {detail.bullets.map((b) => (
                <li key={b} className="border-t border-border pt-3 text-sm text-muted-foreground">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">When to chain</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Run {copy.name} as a workhorse step, then pass the smaller payload to a frontier model
              — or chain Compress → Extract / Classify for structured pipelines. See the{" "}
              <Link href="/#pipeline" className="text-primary hover:underline">
                homepage pipeline
              </Link>{" "}
              and{" "}
              <Link href="/claude-code" className="text-primary hover:underline">
                Claude Code MCP tools
              </Link>
              .
            </p>
          </div>
          <div className="space-y-3 rounded-2xl bg-[#0c1222] p-4">
            <div>
              <p className="mb-2 text-[10px] font-semibold tracking-wide text-white/40 uppercase">
                Request
              </p>
              <pre className="overflow-x-auto font-mono text-[11px] leading-5 text-sky-100">{`POST https://api.scaledown.xyz/${product.slug}/
{ "context": "...", "prompt": "...", "scaledown": { "rate": "auto" } }`}</pre>
            </div>
            <div className="border-t border-white/10 pt-3">
              <p className="mb-2 text-[10px] font-semibold tracking-wide text-white/40 uppercase">
                Response shape
              </p>
              <pre className="overflow-x-auto font-mono text-[11px] leading-5 text-emerald-200/90">
                {DX_RESPONSE_SAMPLE}
              </pre>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-[0_16px_50px_rgba(12,18,34,0.08)] ring-1 ring-black/5">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Interactive demo</h2>
          <Demo />
        </div>
      </section>
    </div>
  );
}
