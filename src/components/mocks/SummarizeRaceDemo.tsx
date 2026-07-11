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
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {FORMATS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFormat(f)}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
              format === f
                ? "border-primary bg-primary text-white"
                : "border-border bg-white text-muted-foreground hover:bg-accent"
            }`}
          >
            {f}
          </button>
        ))}
        <Button size="sm" className="ml-auto" onClick={run} disabled={running}>
          {running ? "Running…" : "Run"}
        </Button>
      </div>

      <div className="space-y-2">
        <RaceBar label="ScaleDown · 5,000 tok/s" progress={sdProgress} accent />
        <RaceBar label="GPT-4 baseline · ~800 tok/s" progress={gptProgress} />
      </div>

      {(done || compact) && (
        <pre className="whitespace-pre-wrap rounded-md border border-border bg-sd-bg p-3 font-mono text-xs leading-relaxed text-foreground">
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
      <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className={`h-full rounded-full ${accent ? "bg-primary" : "bg-sd-text-tertiary"}`}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
        />
      </div>
    </div>
  );
}
