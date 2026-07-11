"use client";

import { useState } from "react";

const ENTITIES = [
  {
    id: "parties",
    label: "Contract Parties",
    text: "Acme Corp and Beta LLC",
    json: { parties: ["Acme Corp", "Beta LLC"] },
    confidence: 0.98,
  },
  {
    id: "date",
    label: "Effective Date",
    text: "January 15, 2025",
    json: { effective_date: "2025-01-15" },
    confidence: 0.96,
  },
  {
    id: "term",
    label: "Term",
    text: "36 months",
    json: { term_months: 36 },
    confidence: 0.94,
  },
] as const;

export function ExtractHoverDemo({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof ENTITIES)[number] | null>(ENTITIES[0]);

  return (
    <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
      <div className="rounded-md border border-border bg-sd-bg p-4 text-sm leading-relaxed text-sd-text-secondary">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Lease agreement · page 1
        </p>
        This Agreement is entered into by{" "}
        <EntityMark
          entity={ENTITIES[0]}
          active={active?.id === "parties"}
          onHover={setActive}
        />{" "}
        effective{" "}
        <EntityMark entity={ENTITIES[1]} active={active?.id === "date"} onHover={setActive} />
        , for a term of{" "}
        <EntityMark entity={ENTITIES[2]} active={active?.id === "term"} onHover={setActive} />
        . Premises located at 120 Market Street…
      </div>

      {active ? (
        <div className="rounded-md border border-primary/20 bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">{active.label}</span>
            <span className="rounded-md bg-sd-success/10 px-2 py-0.5 font-mono text-[10px] font-medium text-sd-success">
              {(active.confidence * 100).toFixed(0)}% conf
            </span>
          </div>
          <pre className="overflow-x-auto font-mono text-[11px] leading-5 text-primary">
            {JSON.stringify(active.json, null, 2)}
          </pre>
        </div>
      ) : null}
    </div>
  );
}

function EntityMark({
  entity,
  active,
  onHover,
}: {
  entity: (typeof ENTITIES)[number];
  active: boolean;
  onHover: (e: (typeof ENTITIES)[number]) => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(entity)}
      onFocus={() => onHover(entity)}
      className={`rounded px-1 font-medium underline decoration-primary/40 underline-offset-2 transition-colors ${
        active ? "bg-primary/15 text-primary" : "bg-transparent text-foreground"
      }`}
    >
      {entity.text}
    </button>
  );
}
