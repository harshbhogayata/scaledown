"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LABELS = ["Bug", "Feature", "Pricing", "Support"] as const;
const QUERIES = [
  { text: "Login button broken on Safari", label: "Bug" as const },
  { text: "Add SSO for enterprise", label: "Feature" as const },
  { text: "What's the cost per 1M tokens?", label: "Pricing" as const },
  { text: "How do I rotate API keys?", label: "Support" as const },
  { text: "Null pointer in extract pipeline", label: "Bug" as const },
  { text: "Need webhook for classify events", label: "Feature" as const },
];

export function ClassifyRouterDemo({ compact = false }: { compact?: boolean }) {
  const [index, setIndex] = useState(0);
  const [buckets, setBuckets] = useState<Record<(typeof LABELS)[number], number>>({
    Bug: 0,
    Feature: 0,
    Pricing: 0,
    Support: 0,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % QUERIES.length;
        const label = QUERIES[next].label;
        setBuckets((b) => ({ ...b, [label]: b[label] + 1 }));
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const current = QUERIES[index];

  return (
    <div className="space-y-4">
      <div className="relative flex h-16 items-center justify-center overflow-hidden rounded-md border border-dashed border-primary/30 bg-sd-blue-light/60">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.text}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.87, 0, 0.13, 1] }}
            className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium shadow-sm"
          >
            {current.text}
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-1 font-mono text-[9px] text-primary">ScaleDown node</div>
      </div>

      <div className={`grid gap-2 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
        {LABELS.map((label) => (
          <div
            key={label}
            className={`rounded-md border p-2.5 transition-colors ${
              current.label === label
                ? "border-primary bg-sd-blue-light"
                : "border-border bg-white"
            }`}
          >
            <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              {label}
            </div>
            <div className="font-mono text-lg font-semibold tabular-nums text-foreground">
              {buckets[label]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
