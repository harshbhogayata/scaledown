import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "ScaleDown privacy practices — zero data retention for API prompts and outputs.",
};

export default function PrivacyPage() {
  return (
    <div className="container-site max-w-2xl py-16 md:py-24">
      <p className="text-[11px] font-medium tracking-[0.2em] text-primary uppercase">Legal</p>
      <h1 className="display mt-3 text-4xl text-foreground md:text-5xl">Privacy</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          ScaleDown is built for teams that cannot afford prompt leakage. On the hosted API we
          practice <strong className="text-foreground">zero data retention</strong>: prompts,
          outputs, and API keys are not logged or stored for model training.
        </p>
        <p>
          Enterprise deployments can run entirely in your VPC (including air-gapped options). Your
          inputs are never used to fine-tune or improve ScaleDown models.
        </p>
        <p>
          We are working through SOC 2, HIPAA, ISO 27001, and GDPR observation periods. For a DPA,
          subprocessors list, or trust-center packet, contact{" "}
          <a href="mailto:soham@scaledown.ai" className="text-primary hover:underline">
            soham@scaledown.ai
          </a>
          .
        </p>
        <p className="text-xs">Last updated: July 2026. This page is a product summary, not legal advice.</p>
      </div>
    </div>
  );
}
