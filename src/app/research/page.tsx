import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { EXTERNAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Research",
  description: "Applied AI research from ScaleDown — NeurIPS papers, open models, and benchmarks.",
};

const PAPERS = [
  {
    venue: "NeurIPS 2025",
    title: "HASTE: Hybrid AST-Guided Selection for Semantic Prompt Compression",
    status: "Accepted",
    blurb:
      "Task-specific SLMs that reduce token usage 50–70% while preserving semantic integrity on code and long-document workloads.",
  },
  {
    venue: "ScaleBench",
    title: "Public reproductions on FinanceBench, QMSum, CLINC OOS, and CUAD",
    status: "Open",
    blurb:
      "Independent benchmark tables for Compress, Summarize, Classify, and Extract — cost, speed, and accuracy vs frontier baselines.",
  },
  {
    venue: "Open source",
    title: "scaledown · Python SDK & optimizers",
    status: "GitHub",
    blurb:
      "Chain HasteOptimizer, SemanticOptimizer, and ScaleDownCompressor in a few lines. Models also hosted on Hugging Face.",
  },
];

export default function ResearchPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-border bg-gradient-to-b from-white to-[#eff6ff] py-16">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-medium text-primary">Applied AI research lab</p>
          <h1 className="mt-2 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            Research
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            ScaleDown publishes at NeurIPS and ships open models. General-purpose LLMs are a jack of
            all trades — our SLMs are built to be a master of one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button render={<a href={EXTERNAL.github} target="_blank" rel="noreferrer" />}>
              GitHub
            </Button>
            <Button
              variant="outline"
              render={<a href={EXTERNAL.huggingface} target="_blank" rel="noreferrer" />}
            >
              Hugging Face
            </Button>
          </div>
        </div>
      </section>

      <section className="container-site max-w-3xl space-y-4 py-14">
        {PAPERS.map((paper) => (
          <article
            key={paper.title}
            className="rounded-lg border border-border bg-[#fafbfc] p-6 transition-colors hover:border-primary/30"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#eff6ff] px-2 py-0.5 text-[11px] font-semibold text-primary">
                {paper.venue}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {paper.status}
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-foreground">{paper.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paper.blurb}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
