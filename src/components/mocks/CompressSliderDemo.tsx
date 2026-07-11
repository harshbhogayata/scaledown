"use client";

import { useMemo, useState, useTransition } from "react";
import { Slider } from "@/components/ui/slider";

const SAMPLE = `Meeting notes — Q3 planning (full transcript, 4,812 tokens)

Alice: We need to expand the RAG pipeline to handle 1M-token contracts without truncation. Bob mentioned latency spikes above 2s on GPT-4 Turbo. Carol proposed chunking but that loses cross-document references. Decision: evaluate ScaleDown Compress at 0.3 rate on FinanceBench before migrating production. Action items: ship API key rotation, measure F1 vs baseline, cut token spend 50%+.`;

function compressText(text: string, rate: number) {
  const keep = Math.max(0.15, 1 - rate);
  const words = text.split(/\s+/);
  const target = Math.max(12, Math.floor(words.length * keep));
  return words.slice(0, target).join(" ") + (target < words.length ? "…" : "");
}

export function CompressSliderDemo({ compact = false }: { compact?: boolean }) {
  const [rate, setRate] = useState(0.55);
  const [, startTransition] = useTransition();

  const output = useMemo(() => compressText(SAMPLE, rate), [rate]);
  const inTokens = 4812;
  const outTokens = Math.round(inTokens * (1 - rate));

  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs font-medium text-muted-foreground">Compression rate</label>
        <span className="font-mono text-xs font-semibold text-primary">
          {(rate * 100).toFixed(0)}%
        </span>
      </div>
      <Slider
        value={[rate]}
        min={0.2}
        max={0.8}
        step={0.05}
        onValueChange={(v) => {
          const next = Array.isArray(v) ? Number(v[0]) : Number(v);
          if (!Number.isFinite(next)) return;
          startTransition(() => setRate(next));
        }}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-sd-bg p-3">
          <div className="mb-1 flex justify-between text-[10px] uppercase tracking-wide text-muted-foreground">
            <span>Input</span>
            <span className="font-mono">{inTokens} tok</span>
          </div>
          <p className={`text-xs leading-relaxed text-sd-text-secondary ${compact ? "line-clamp-4" : "line-clamp-6"}`}>
            {SAMPLE}
          </p>
        </div>
        <div className="rounded-md border border-primary/20 bg-sd-blue-light p-3">
          <div className="mb-1 flex justify-between text-[10px] uppercase tracking-wide text-primary">
            <span>Compressed</span>
            <span className="font-mono">{outTokens} tok</span>
          </div>
          <p className={`text-xs leading-relaxed text-foreground ${compact ? "line-clamp-4" : "line-clamp-6"}`}>
            {output}
          </p>
        </div>
      </div>
    </div>
  );
}
