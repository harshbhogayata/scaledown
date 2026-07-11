"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FORMATS = ["Bullet points", "1-paragraph", "Executive brief"] as const;

const OUTPUTS: Record<(typeof FORMATS)[number], string> = {
  "Bullet points":
    "• Expand RAG for 1M-token contracts\n• GPT-4 Turbo latency >2s is blocking\n• Evaluate ScaleDown Compress @ 0.3 on FinanceBench\n• Target ≥50% token spend reduction",
  "1-paragraph":
    "The team will evaluate ScaleDown Compress on FinanceBench before migrating production RAG, aiming to cut token spend by 50%+ while preserving cross-document references that chunking loses.",
  "Executive brief":
    "Decision: pilot ScaleDown Compress. Owner: Carol. Success: F1 ≥ baseline, p95 latency <500ms, ≥50% token reduction.",
};

export function SummarizeRaceDemo({ compact = false }: { compact?: boolean }) {
  const [format, setFormat] = useState<(typeof FORMATS)[number]>("Bullet points");
  const [running, setRunning] = useState(false);
  const [sdProgress, setSdProgress] = useState(0);
  const [gptProgress, setGptProgress] = useState(0);
  const [done, setDone] = useState(false);

  function run() {
    setRunning(true);
    setDone(false);
    setSdProgress(0);
    setGptProgress(0);
    const start = performance.now();
    const frame = (now: number) => {
      const t = now - start;
      setSdProgress(Math.min(100, (t / 420) * 100));
      setGptProgress(Math.min(100, (t / 2400) * 100));
      if (t < 2400) requestAnimationFrame(frame);
      else {
        setRunning(false);
        setDone(true);
      }
    };
    requestAnimationFrame(frame);
  }

  return (
    <div className="w-full max-w-md space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {FORMATS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFormat(f)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
              format === f
                ? "border-primary bg-primary text-white"
                : "border-border bg-white text-muted-foreground hover:bg-accent"
            }`}
          >
            {f}
          </button>
        ))}
        <Button size="default" className="ml-auto px-6 font-bold tracking-wide" onClick={run} disabled={running}>
          {running ? "Running…" : "Run"}
        </Button>
      </div>

      <div className="space-y-4">
        <RaceBar label="ScaleDown · 5,000 tok/s" progress={sdProgress} accent />
        <RaceBar label="GPT-4 baseline · ~800 tok/s" progress={gptProgress} />
      </div>

      {(done || compact) && (
        <pre className="whitespace-pre-wrap rounded-lg border border-border bg-white p-4 font-mono text-[13px] leading-relaxed text-foreground shadow-sm">
          {OUTPUTS[format]}
        </pre>
      )}
    </div>
  );
}

function RaceBar({
  label,
  progress,
  accent,
}: {
  label: string;
  progress: number;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs font-semibold tracking-tight text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono">{Math.round(progress)}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/50">
        <motion.div
          className={`h-full rounded-full ${accent ? "bg-primary" : "bg-sd-text-tertiary"}`}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
        />
      </div>
    </div>
  );
}
