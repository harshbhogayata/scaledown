"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RAW_LINES = [
  "def retrieve_context(query, docs):",
  "  # 847 lines of RAG boilerplate",
  "  embeddings = embed_batch(docs)",
  "  scores = cosine_similarity(query, embeddings)",
  "  # retries, logs, dead code…",
  "  return ranked[:50]",
];

const COMPRESSED_LINES = [
  "def retrieve_context(query, docs):",
  "  return rank(embed(docs), query)[:50]",
];

export function HeroCompressionViz() {
  const [tokens, setTokens] = useState(10000);
  const [saved, setSaved] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 4), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (phase === 0) {
      setTimeout(() => {
        setTokens(10000);
        setSaved(0);
      }, 0);
      return;
    }
    if (phase === 1 || phase === 2) {
      const start = performance.now();
      const from = 10000;
      const to = 3000;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 900);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = from + (to - from) * eased;
        setTokens(Math.round(current));
        setSaved(Number(((from - current) * 0.00000125).toFixed(2)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [phase]);

  return (
    <div className="overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border bg-[#fafbfc] px-4 py-2.5">
        <span className="font-mono text-[11px] font-medium tracking-wide text-primary">
          ScaleDown · HASTE pipeline
        </span>
        <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
          −70% tokens
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_72px_1fr]">
        <div className="border-b border-border p-4 md:border-r md:border-b-0">
          <div className="mb-2 flex justify-between text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
            <span>Raw prompt</span>
            <span className="font-mono">10,000 tok</span>
          </div>
          <pre className="font-mono text-[11px] leading-5 text-muted-foreground">
            {RAW_LINES.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </pre>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 border-b border-border bg-[#eff6ff] px-2 py-3 md:flex-col md:border-r md:border-b-0">
          {["HASTE", "SEM"].map((node, i) => (
            <motion.div
              key={node}
              animate={{
                opacity: phase >= i + 1 ? 1 : 0.45,
                scale: phase === i + 1 ? 1.04 : 1,
              }}
              className="rounded border border-primary/25 bg-white px-2 py-1 font-mono text-[9px] font-bold tracking-wider text-primary"
            >
              {node}
            </motion.div>
          ))}
        </div>

        <div className="p-4">
          <div className="mb-2 flex justify-between text-[10px] font-semibold tracking-wide text-primary uppercase">
            <span>Compressed</span>
            <span className="font-mono">3,000 tok</span>
          </div>
          <motion.pre
            animate={{ height: phase >= 2 ? 52 : 108 }}
            transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
            className="overflow-hidden font-mono text-[11px] leading-5 text-foreground"
          >
            {COMPRESSED_LINES.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </motion.pre>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-border bg-[#fafbfc] sm:grid-cols-3">
        <div className="border-r border-border px-4 py-3">
          <div className="text-[10px] text-muted-foreground uppercase">Tokens</div>
          <div className="font-mono text-sm font-semibold tabular-nums">
            {tokens.toLocaleString()}
          </div>
        </div>
        <div className="border-r border-border px-4 py-3 sm:border-r">
          <div className="text-[10px] text-muted-foreground uppercase">Dollars saved</div>
          <div className="font-mono text-sm font-semibold tabular-nums text-[#10b981]">
            ${saved.toFixed(2)}
          </div>
        </div>
        <div className="col-span-2 px-4 py-3 sm:col-span-1">
          <div className="text-[10px] text-muted-foreground uppercase">Throughput</div>
          <div className="font-mono text-sm font-semibold tabular-nums text-primary">
            20,000 tok/s
          </div>
        </div>
      </div>
    </div>
  );
}
