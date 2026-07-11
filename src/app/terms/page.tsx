import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "ScaleDown terms of use for the API and related services.",
};

export default function TermsPage() {
  return (
    <div className="container-site max-w-2xl py-16 md:py-24">
      <p className="text-[11px] font-medium tracking-[0.2em] text-primary uppercase">Legal</p>
      <h1 className="display mt-3 text-4xl text-foreground md:text-5xl">Terms of Service</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          By using ScaleDown APIs, SDKs, or the Claude Code / MCP plugin, you agree to use the
          service lawfully, protect your API keys, and not attempt to reverse-engineer models beyond
          what open-source packages explicitly allow.
        </p>
        <p>
          The flat-rate API is billed per token processed as published on the pricing page. Free
          trial tokens (including the 50M starter grant) may be revoked for abuse. Enterprise
          agreements supersede these terms where signed.
        </p>
        <p>
          Service is provided as-is during observation-period compliance work. For SLAs, contact{" "}
          <a href="mailto:soham@scaledown.ai" className="text-primary hover:underline">
            soham@scaledown.ai
          </a>
          .
        </p>
        <p className="text-xs">Last updated: July 2026. Full commercial terms available on request.</p>
      </div>
    </div>
  );
}
