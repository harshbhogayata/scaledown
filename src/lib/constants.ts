export const EXTERNAL = {
  dashboard: "https://scaledown.ai/dashboard",
  getApiKey: "https://scaledown.ai/getapikey",
  docs: "https://docs.scaledown.ai",
  github: "https://github.com/scaledown-team/scaledown",
  pypi: "https://pypi.org/project/scaledown",
  huggingface: "https://huggingface.co/scaledown",
  blog: "https://scaledown.ai",
} as const;

export const PRODUCTS = [
  {
    slug: "compress" as const,
    name: "Compress",
    tagline: "Lossless, query-aware compression",
    description:
      "Send in a long prompt or document. Get back a semantically compressed version that preserves every fact relevant to your query.",
    href: "/products/compress",
    docs: "https://docs.scaledown.ai/api-reference/compress-overview",
  },
  {
    slug: "summarize" as const,
    name: "Summarize",
    tagline: "Frontier quality, 10× lower price",
    description:
      "Built for pipelines that need human-quality summaries at scale. Handles documents up to 1M tokens without truncation.",
    href: "/products/summarize",
    docs: "https://docs.scaledown.ai/api-reference/summarize-overview",
  },
  {
    slug: "extract" as const,
    name: "Extract",
    tagline: "Semantic NER in plain English",
    description:
      "Describe your entities in plain English. Works across documents up to 1M tokens and returns clean JSON every time.",
    href: "/products/extract",
    docs: "https://docs.scaledown.ai/api-reference/extract-overview",
  },
  {
    slug: "classify" as const,
    name: "Classify",
    tagline: "Millions of items per hour",
    description:
      "Define your label taxonomy in plain text. Classify millions of items per hour with consistent, calibrated outputs.",
    href: "/products/classify",
    docs: "https://docs.scaledown.ai",
  },
] as const;

export type ProductSlug = (typeof PRODUCTS)[number]["slug"];
