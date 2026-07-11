export const CLAUDE_CODE = {
  eyebrow: "Claude Code · Cursor · Codex",
  title: "Save tokens where you already work.",
  italic: "Inside the IDE.",
  body: "The ScaleDown plugin compresses large prompts, summarizes long threads, classifies intent, and extracts entities before they hit a frontier model — via MCP tools that work in Claude Code, Cursor, and OpenAI Codex CLI.",
  install: [
    {
      label: "Get an API key",
      detail: "Create an account — 50M free tokens included.",
    },
    {
      label: "Register the MCP server",
      detail: "claude mcp add scaledown — or use npx @scaledown/claude-plugin",
    },
    {
      label: "Optional: auto-compress hooks",
      detail: "UserPromptSubmit / PreCompact hooks (Claude Code) compress oversized prompts automatically.",
    },
  ],
  tools: [
    { name: "sd_compress", desc: "Semantically compress large prompts and codebase context" },
    { name: "sd_summarize", desc: "Condense long conversations and transcripts" },
    { name: "sd_classify", desc: "Route intent before expensive tool calls" },
    { name: "sd_extract", desc: "Pull structured entities from messy text" },
  ],
  terminal: `$ claude mcp add scaledown --transport stdio \\
    -- npx -y @scaledown/claude-plugin

# Tools available in-session:
#   sd_compress · sd_summarize · sd_classify · sd_extract

$ export SCALEDOWN_API_KEY=sk-••••
$ export SCALEDOWN_COMPRESS_THRESHOLD=10000`,
  ctaPrimary: "Get API Key",
  ctaSecondary: "Open GitHub",
  github: "https://github.com/scaledown-team/Kode",
} as const;

export const PIPELINE = {
  eyebrow: "architecture",
  title: "Master of one.",
  italic: "Chain of many.",
  body: "General-purpose LLMs are overkill for high-volume workhorse steps. ScaleDown SLMs own compression, summarization, extraction, and classification — then hand a smaller, cleaner payload to your frontier model.",
  stages: [
    { id: "raw", label: "Raw context", detail: "Docs, threads, RAG hits, tool dumps" },
    { id: "haste", label: "HASTE", detail: "AST-guided selection for code" },
    { id: "semantic", label: "Semantic", detail: "Query-aware signal retention" },
    { id: "slm", label: "Task SLM", detail: "Compress · Summarize · Extract · Classify" },
    { id: "llm", label: "Frontier LLM", detail: "Reason on what matters" },
  ],
} as const;

export const USE_CASES = {
  eyebrow: "use cases",
  title: "Where tokens actually burn.",
  italic: "Fix those first.",
  items: [
    {
      slug: "rag",
      title: "RAG packing",
      model: "Compress",
      problem: "Retrieved chunks blow the context window and the bill.",
      outcome: "Fit more evidence per call — keep facts relevant to the query.",
      sampleIn: "12k-token retrieval dump + user question",
      sampleOut: "~3.5k-token compressed context, same answerability",
      href: "/products/compress",
    },
    {
      slug: "agents",
      title: "Agent memory",
      model: "Summarize",
      problem: "Multi-turn agents re-send entire histories every step.",
      outcome: "Faithful digests of threads up to 1M tokens without truncation.",
      sampleIn: "4-hour support / coding session log",
      sampleOut: "Stable summary + open actions, ready for the next turn",
      href: "/products/summarize",
    },
    {
      slug: "legal",
      title: "Contract extraction",
      model: "Extract",
      problem: "Off-the-shelf NER fails on long, messy legal PDFs.",
      outcome: "Plain-English schemas → structured JSON with confidence.",
      sampleIn: "Lease / MSA (CUAD-style clauses)",
      sampleOut: '{ "parties": [...], "effective_date": "..." }',
      href: "/products/extract",
    },
    {
      slug: "support",
      title: "Support triage",
      model: "Classify",
      problem: "Fine-tuning a router for every taxonomy change is slow.",
      outcome: "Define labels in plain text. Millions of items per hour.",
      sampleIn: "Inbound ticket text",
      sampleOut: "Bug 0.91 · Feature 0.06 · Pricing 0.03",
      href: "/products/classify",
    },
  ],
} as const;

export const COMPARE = {
  eyebrow: "compare",
  title: "Same job.",
  italic: "Different bill.",
  body: "Public benchmarks. Flat $0.05 / 1M tokens. No fine-tuning required for Classify.",
  headers: ["", "ScaleDown", "Frontier-class", "Mini / Nano", "DIY chunking"],
  rows: [
    ["Quality (task bench)", "SOTA / near-SOTA", "Variable", "Lower", "Loses cross-chunk signal"],
    ["Cost / 1K calls", "~$0.05", "Up to $20+", "Low–mid", "Hidden LLM spend"],
    ["Speed", "5k–20k tok/s", "<2k tok/s", "Mid", "Pipeline latency"],
    ["Fine-tune needed?", "No", "Often", "Sometimes", "N/A"],
    ["1M context path", "Yes", "Expensive", "Limited", "Truncates"],
  ],
} as const;

export const INTEGRATIONS = {
  eyebrow: "ecosystem",
  title: "Drop into the stack you already run.",
  italic: "",
  body: "HTTP-first API, Python SDK, MCP tools, and hosted models — no rip-and-replace.",
  items: [
    {
      name: "Claude Code / MCP",
      desc: "sd_* tools + optional auto-compress hooks",
      href: "/claude-code",
      icon: "/ai-icons/claude.svg",
    },
    {
      name: "Cursor & Codex",
      desc: "Same MCP tools in supported clients",
      href: "/claude-code",
      icon: "/ai-icons/openai.svg",
    },
    {
      name: "Python SDK",
      desc: "pip install scaledown — chain optimizers in a few lines",
      href: "https://pypi.org/project/scaledown",
      icon: "/partners/nvidia.svg",
    },
    {
      name: "HTTP / cURL",
      desc: "api.scaledown.xyz — Compress, Summarize, Extract, Classify, Batch",
      href: "https://docs.scaledown.ai",
      icon: "/partners/aws.svg",
    },
    {
      name: "Hugging Face",
      desc: "Hosted task-specific models",
      href: "https://huggingface.co/scaledown",
      icon: "/partners/arthur.svg",
    },
    {
      name: "Batch API",
      desc: "Async extract, summarize, and classify at volume",
      href: "https://docs.scaledown.ai/api-reference/batch-overview",
      icon: "/partners/google-cloud.png",
    },
  ],
} as const;

export const RESEARCH_TEASERS = {
  eyebrow: "research",
  title: "Built in the lab.",
  italic: "Shipped to production.",
  items: [
    {
      venue: "NeurIPS 2025",
      title: "HASTE: Hybrid AST-Guided Selection",
      blurb: "Semantic prompt compression for code-heavy and long-document workloads.",
    },
    {
      venue: "ScaleBench",
      title: "FinanceBench · QMSum · CLINC · CUAD",
      blurb: "Reproduce cost, speed, and quality vs frontier and mini baselines.",
    },
    {
      venue: "Open source",
      title: "SDK, optimizers, Claude plugin",
      blurb: "GitHub, PyPI, and Hugging Face — inspect how the pipeline chains.",
    },
  ],
} as const;

export const DX_RESPONSE_SAMPLE = `{
  "compressed_prompt": "…",
  "original_prompt_tokens": 10000,
  "compressed_prompt_tokens": 3000,
  "successful": true,
  "latency_ms": 412
}`;
