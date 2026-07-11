import { EXTERNAL } from "@/lib/constants";

export const HERO = {
  badge: "NEW Save Tokens in Claude Code",
  badgeHref: "https://github.com/scaledown-team/Kode",
  headline: "Task-specific Small Language Models",
  subhead:
    "ScaleDown is an applied AI research lab developing purpose-built models for compression, summarization, extraction, and classification.",
  proof: "SOTA ACCURACY · 10X CHEAPER · 20X FASTER",
  cta: "GET API KEY",
  ctaHref: EXTERNAL.getApiKey,
  freeNote: "new accounts get 50M tokens free",
} as const;

export const PARTNERS = [
  { name: "Arthur AI", src: "/partners/arthur.svg" },
  { name: "NVIDIA", src: "/partners/nvidia.svg" },
  { name: "AWS", src: "/partners/aws.svg" },
  { name: "Google Cloud", src: "/partners/google-cloud.png" },
  { name: "Intel", src: "/partners/intel.png" },
  { name: "Nutanix", src: "/partners/nutanix.svg" },
  { name: "Cohere", src: "/partners/cohere.png" },
  { name: "Leidos", src: "/partners/leidos.png" },
  { name: "Fujitsu", src: "/partners/fujitsu.png" },
  { name: "UC San Diego", src: "/partners/uc-san-diego.png" },
] as const;

export const PRODUCT_COPY = {
  compress: {
    name: "Compress",
    headline:
      "Lossless, query-aware compression. Strip the noise out of long context without losing the signal.",
    body: "Send in a long prompt or document. Get back a semantically compressed version that preserves every fact relevant to your query, at a fraction of the token count. Unlimited volume.",
    docs: "https://docs.scaledown.ai/api-reference/compress-overview",
  },
  summarize: {
    name: "Summarize",
    headline:
      "Summarization better than frontier model quality, 10× lower price, 20x lower latency.",
    body: "Built for pipelines that need human-quality summaries at scale. Handles long documents, transcripts, and threads up to 1M tokens without truncation.",
    docs: "https://docs.scaledown.ai/api-reference/summarize-overview",
  },
  extract: {
    name: "Extract",
    headline:
      "Semantic NER using natural language. Define what you want in plain English and pull it out as structured data.",
    body: "Describe your entities in plain English: names, dates, product SKUs, any schema you define. Works across documents up to 1M tokens and returns clean JSON every time.",
    docs: "https://docs.scaledown.ai/api-reference/extract-overview",
  },
  classify: {
    name: "Classify",
    headline: "Sort data fast. Built for high-throughput tagging, triage, and filtering.",
    body: "Define your label taxonomy in plain text. Classify millions of items per hour, across inputs up to 1M tokens, with consistent, calibrated outputs. No fine-tuning required.",
    docs: "https://docs.scaledown.ai",
  },
} as const;

export const DX = {
  title: "What developer experience looks like",
  subtitle: "One API call. Drop into any existing pipeline.",
  steps: [
    {
      n: "01",
      title: "Create account",
      body: "Get started in under a minute.",
      note: "50M free tokens included.",
    },
    {
      n: "02",
      title: "Generate API key",
      body: "Generate a key from your dashboard.",
      note: "Access all four models.",
    },
    {
      n: "03",
      title: "Make first request",
      body: "Compatible with any HTTP client or SDK.",
      note: null,
    },
  ],
} as const;

export const BENCHMARKS_INTRO = {
  title: "State of the art on the benchmarks that matter",
  subtitle: "Independently verified on public benchmarks. Reproduce any result.",
} as const;

export type ChartRow = { model: string; value: number; fill: string };

export const BENCHMARK_DATA: Record<
  string,
  { title: string; metrics: { name: string; data: ChartRow[]; domain?: [number, number] }[] }
> = {
  compress: {
    title: "Compression · FinanceBench",
    metrics: [
      {
        name: "F1 Score",
        domain: [0, 0.3],
        data: [
          { model: "GPT-5.2", value: 0.15, fill: "#eaeaea" },
          { model: "Mini", value: 0.21, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.28, fill: "#0070F3" },
        ],
      },
      {
        name: "Cost per 1K calls",
        domain: [0, 20],
        data: [
          { model: "GPT-5.2", value: 20, fill: "#eaeaea" },
          { model: "Mini", value: 8, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.05, fill: "#0070F3" },
        ],
      },
      {
        name: "Speed (tokens/sec)",
        domain: [0, 20000],
        data: [
          { model: "GPT-5.5", value: 500, fill: "#eaeaea" },
          { model: "Mini", value: 2000, fill: "#eaeaea" },
          { model: "ScaleDown", value: 20000, fill: "#0070F3" },
        ],
      },
    ],
  },
  summarize: {
    title: "Summarization · QMSum",
    metrics: [
      {
        name: "ROUGE-L Score",
        domain: [0, 0.26],
        data: [
          { model: "Nano", value: 0.16, fill: "#eaeaea" },
          { model: "Mini", value: 0.2, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.24, fill: "#0070F3" },
        ],
      },
      {
        name: "Cost per 1K calls",
        domain: [0, 40],
        data: [
          { model: "GPT-5.4", value: 35, fill: "#eaeaea" },
          { model: "Mini", value: 12, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.05, fill: "#0070F3" },
        ],
      },
      {
        name: "Speed (tokens/sec)",
        domain: [0, 5000],
        data: [
          { model: "Mini", value: 800, fill: "#eaeaea" },
          { model: "Nano", value: 1500, fill: "#eaeaea" },
          { model: "ScaleDown", value: 5000, fill: "#0070F3" },
        ],
      },
    ],
  },
  classify: {
    title: "Classification · CLINC OOS",
    metrics: [
      {
        name: "Accuracy (%)",
        domain: [60, 100],
        data: [
          { model: "Nano", value: 70, fill: "#eaeaea" },
          { model: "Mini", value: 77, fill: "#eaeaea" },
          { model: "ScaleDown", value: 95, fill: "#0070F3" },
        ],
      },
      {
        name: "Cost per 1K calls",
        domain: [0, 0.16],
        data: [
          { model: "Mini", value: 0.12, fill: "#eaeaea" },
          { model: "Nano", value: 0.08, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.05, fill: "#0070F3" },
        ],
      },
      {
        name: "Speed (tokens/sec)",
        domain: [0, 12000],
        data: [
          { model: "Mini", value: 2000, fill: "#eaeaea" },
          { model: "Nano", value: 4000, fill: "#eaeaea" },
          { model: "ScaleDown", value: 12000, fill: "#0070F3" },
        ],
      },
    ],
  },
  extract: {
    title: "Extraction · CUAD",
    metrics: [
      {
        name: "F1 Score",
        domain: [0, 0.55],
        data: [
          { model: "Mini", value: 0.28, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.52, fill: "#0070F3" },
        ],
      },
      {
        name: "Cost per 1K calls",
        domain: [0, 1],
        data: [
          { model: "Mini", value: 0.9, fill: "#eaeaea" },
          { model: "ScaleDown", value: 0.05, fill: "#0070F3" },
        ],
      },
      {
        name: "Speed (tokens/sec)",
        domain: [0, 12000],
        data: [
          { model: "Mini", value: 2000, fill: "#eaeaea" },
          { model: "ScaleDown", value: 12000, fill: "#0070F3" },
        ],
      },
    ],
  },
};

export const PRICING = {
  title: "Two ways to use ScaleDown",
  subtitle: "Flat-rate API for everyone. Self-hosted for teams that need it.",
  developer: {
    label: "Developer",
    price: "$0.05",
    unit: "/ 1M tokens",
    bullets: [
      "50M free tokens to start",
      "All four models included",
      "1M context window, unlimited compression",
      "Flat pricing, no tiers",
    ],
    cta: "Get API key",
  },
  enterprise: {
    label: "Enterprise",
    price: "Custom",
    unit: "/ Volume tiering",
    bullets: [
      "Self-hosted in your VPC",
      "Fine-tuning on your data",
      "Dedicated support and SLAs",
      "RBAC, SSO, air-gapped options",
    ],
    cta: "Contact Solutions Engineering",
  },
} as const;

export const SECURITY = {
  title: "Security & Compliance",
  subtitle:
    "Enterprise grade security - following SOC 2, HIPAA, ISO 27001, and GDPR standards. Currently in observation period.",
  items: [
    {
      title: "Zero Data Retention",
      body: "Prompts, outputs, and API keys are never logged or stored.",
    },
    {
      title: "Self-Hosted Deployment",
      body: "Run entirely inside your VPC with optional air-gapped deployment.",
    },
    {
      title: "Enterprise Access Controls",
      body: "SSO, RBAC, and audit logging for regulated environments.",
    },
    {
      title: "No Model Training on Your Data",
      body: "Your inputs are never used to fine-tune or improve ScaleDown models.",
    },
    {
      title: "Audit Logs & Reporting",
      body: "Exportable SOC2 and HIPAA compliance logs with 1-year retention.",
    },
    {
      title: "End-to-End Encryption",
      body: "TLS 1.3 in transit and AES-256 encryption at rest.",
    },
    {
      title: "Data Residency & Governance",
      body: "Define granular geographic boundaries for all your API requests.",
    },
  ],
  badges: [
    { name: "SOC 2", src: "/security/soc2.jpg" },
    { name: "HIPAA", src: "/security/hipaa.jpg" },
    { name: "ISO 27001", src: "/security/iso27001.jpg" },
    { name: "GDPR", src: "/security/gdpr.jpg" },
  ],
} as const;

export const FAQ = [
  {
    q: "How much work is it to integrate ScaleDown?",
    a: "One API call. ScaleDown is a drop-in REST API compatible with any HTTP client or SDK. Most teams are in production within a day.",
  },
  {
    q: "Do you charge for output tokens?",
    a: "No. ScaleDown does not charge for output tokens. We exclusively charge for input tokens because most of our models (Compress, Extract, and Classify) are encoder-only architectures. Summarize has a decoder/generative step, but for our customers we will eat that cost.",
  },
  {
    q: "Is there a limit on how much I can compress?",
    a: "No. Compression is unlimited. There are no caps on request volume, document count, or total tokens compressed. Pricing stays flat at $0.05 per 1M tokens no matter how much you send.",
  },
  {
    q: "How fast are the models?",
    a: "ScaleDown models are 20x faster than frontier models on equivalent tasks. Latency is measured in milliseconds, not seconds, making them suitable for real-time pipelines and high-throughput batch workloads.",
  },
  {
    q: "How much context can the models handle?",
    a: "Summarize, Extract, and Classify each ship with a 1M-token context window whereas Compress is unlimited.",
  },
  {
    q: "Can I self-host ScaleDown at my company?",
    a: "Yes. ScaleDown supports fully self-hosted deployments inside your VPC with no outbound calls, as well as air-gapped deployments for environments that cannot reach the public internet.",
  },
  {
    q: "Is my data used to train ScaleDown models?",
    a: "No. Your inputs, outputs, and API keys are never logged, stored, or used to train or improve ScaleDown models.",
  },
] as const;

export const PRODUCTS_SECTION = {
  title: "Pick the right model for the job",
  subtitle:
    "Each model is trained to do one thing. Use them independently or chain them together.",
} as const;
