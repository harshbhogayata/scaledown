import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { EXTERNAL } from "@/lib/constants";
import { CLAUDE_CODE } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "Claude Code & MCP",
  description:
    "Save tokens in Claude Code, Cursor, and Codex with ScaleDown MCP tools — compress, summarize, classify, extract.",
};

export default function ClaudeCodePage() {
  return (
    <div className="bg-[#f4f7fb]">
      <section className="border-b border-border bg-gradient-to-b from-white to-[#eaf3fc] py-16 md:py-24">
        <div className="container-site max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.2em] text-primary uppercase">
            {CLAUDE_CODE.eyebrow}
          </p>
          <h1 className="display mt-4 text-4xl text-foreground md:text-6xl">
            {CLAUDE_CODE.title}{" "}
            <span className="italic text-primary">{CLAUDE_CODE.italic}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{CLAUDE_CODE.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="h-12 rounded-full px-7" render={<a href={EXTERNAL.getApiKey} />}>
              Get API Key
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full px-7"
              render={<a href={CLAUDE_CODE.github} target="_blank" rel="noreferrer" />}
            >
              GitHub · Kode
            </Button>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="display text-3xl text-foreground">Setup</h2>
          <ol className="mt-8 space-y-6">
            {CLAUDE_CODE.install.map((step, i) => (
              <li key={step.label} className="flex gap-4 border-t border-border pt-6">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{step.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl bg-[#0c1222] p-5">
            <pre className="overflow-x-auto font-mono text-[12px] leading-6 text-sky-100">
              {CLAUDE_CODE.terminal}
            </pre>
          </div>
        </div>

        <div>
          <h2 className="display text-3xl text-foreground">MCP tools</h2>
          <ul className="mt-8 space-y-4">
            {CLAUDE_CODE.tools.map((t) => (
              <li key={t.name} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <p className="font-mono text-sm font-semibold text-primary">{t.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-white p-5">
            <h3 className="font-semibold text-foreground">Env knobs</h3>
            <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
              <li>SCALEDOWN_API_KEY — required</li>
              <li>SCALEDOWN_COMPRESS_THRESHOLD — default 10000</li>
              <li>SCALEDOWN_COMPRESS_RATE — auto or fixed rate</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Automatic prompt hooks (UserPromptSubmit, PreCompact) are Claude Code–only. MCP tools
            work across Claude Code, Cursor, and Codex CLI.
          </p>
        </div>
      </section>
    </div>
  );
}
