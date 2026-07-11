"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { DX } from "@/lib/content";
import { EXTERNAL } from "@/lib/constants";
import { DX_RESPONSE_SAMPLE } from "@/lib/showcase";
import { ArrowRight } from "lucide-react";

const SNIPPETS = {
  Python: (
    <>
      <span className="text-[#ff7b72]">import</span> requests<br/><br/>
      payload = {"{"}<br/>
      &nbsp;&nbsp;<span className="text-[#a5d6ff]">"context"</span>: <span className="text-[#a5d6ff]">"..."</span>,<br/>
      &nbsp;&nbsp;<span className="text-[#a5d6ff]">"prompt"</span>: <span className="text-[#a5d6ff]">"..."</span>,<br/>
      &nbsp;&nbsp;<span className="text-[#a5d6ff]">"scaledown"</span>: {"{"} <span className="text-[#a5d6ff]">"rate"</span>: <span className="text-[#a5d6ff]">"auto"</span> {"}"}<br/>
      {"}"}<br/><br/>
      requests.<span className="text-[#d2a8ff]">post</span>(url, json=payload)
    </>
  ),
  TypeScript: (
    <>
      <span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">fetch</span>(url, {"{"}<br/>
      &nbsp;&nbsp;method: <span className="text-[#a5d6ff]">"POST"</span>,<br/>
      &nbsp;&nbsp;headers: {"{"}<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">"x-api-key"</span>: process.env.<span className="text-[#79c0ff]">SCALEDOWN_API_KEY</span>!,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">"Content-Type"</span>: <span className="text-[#a5d6ff]">"application/json"</span>,<br/>
      &nbsp;&nbsp;{"}"},<br/>
      &nbsp;&nbsp;body: JSON.<span className="text-[#d2a8ff]">stringify</span>({"{"}<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;context: <span className="text-[#a5d6ff]">"..."</span>,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prompt: <span className="text-[#a5d6ff]">"..."</span>,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;scaledown: {"{"} rate: <span className="text-[#a5d6ff]">"auto"</span> {"}"},<br/>
      &nbsp;&nbsp;{"}"}),<br/>
      {"}"});
    </>
  ),
  cURL: (
    <>
      <span className="text-[#79c0ff]">curl</span> -X POST https://api.scaledown.ai/compress/raw/ \<br/>
      &nbsp;&nbsp;-H <span className="text-[#a5d6ff]">"x-api-key: $SCALEDOWN_API_KEY"</span> \<br/>
      &nbsp;&nbsp;-d <span className="text-[#a5d6ff]">'{'{"context":"...","prompt":"...","scaledown":{"rate":"auto"}}'}'</span>
    </>
  ),
};

type Lang = keyof typeof SNIPPETS;
const MODELS = ["Compress", "Summarize", "Extract", "Classify"] as const;

export function DxSection() {
  const [lang, setLang] = useState<Lang>("Python");

  return (
    <section className="bg-muted py-8 md:py-12 border-t border-border">
      <div className="container-site max-w-[1200px]">

        {/* Header Block — same pattern as Pricing/FAQ */}
        <Reveal>
          <div className="mb-8 flex flex-col items-start md:mb-12">
            <div className="mb-4 flex items-center justify-start gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <img src="/brand/logo.png" alt="ScaleDown" className="size-4 object-contain" />
              <span>Developer Experience</span>
              <span className="h-4 w-px bg-border"></span>
              <span>Integration</span>
            </div>
            <h2 className="max-w-3xl text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-foreground md:text-[4rem]">
              One API call.{" "}
              <span className="italic text-primary">Drop into any pipeline.</span>
            </h2>
          </div>
        </Reveal>

        {/* Content — editorial two-column like Pricing */}
        <Reveal delay={0.1}>
          <div className="border-t border-foreground pt-6 md:pt-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

              {/* Left: Steps as editorial list */}
              <div className="flex flex-col lg:col-span-5">
                {DX.steps.map((step, i) => (
                  <div
                    key={step.n}
                    className={`flex gap-5 py-6 md:py-7 ${
                      i !== 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="text-[2rem] font-semibold leading-none tracking-[-0.05em] text-[#d4d4d4]">
                      {step.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[1.125rem] font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[1rem] leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                      {step.note ? (
                        <p className="mt-2 text-[0.9rem] font-medium text-primary">
                          {step.note}
                        </p>
                      ) : null}
                      {i === 0 ? (
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href={EXTERNAL.getApiKey}
                            className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-2.5 text-[0.875rem] font-semibold text-white transition-all hover:bg-primary"
                          >
                            Continue
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </a>
                          <a
                            href={EXTERNAL.dashboard}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-2.5 text-[0.875rem] font-semibold text-foreground transition-all hover:border-foreground"
                          >
                            <GoogleIcon />
                            Google
                          </a>
                        </div>
                      ) : null}
                      {i === 1 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {MODELS.map((m) => (
                            <span
                              key={m}
                              className="rounded-full bg-white border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Terminal */}
              <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-12">
                <div className="relative">
                  {/* Subtle ambient orb for the glass to interact with */}
                  <div className="absolute inset-0 top-1/4 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="h-[250px] w-[250px] rounded-full bg-primary blur-[120px]" />
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0a0a0a]/90 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    {/* Header Bar */}
                    <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#161616]/80 px-4 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-[#ff5f56] shadow-sm" />
                        <div className="size-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                        <div className="size-3 rounded-full bg-[#27c93f] shadow-sm" />
                      </div>
                      <div className="flex gap-1">
                        {(Object.keys(SNIPPETS) as Lang[]).map((l) => (
                          <button
                            key={l}
                            type="button"
                            onClick={() => setLang(l)}
                            className={`rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors ${
                              lang === l
                                ? "bg-white/10 text-white"
                                : "text-muted-foreground hover:text-white"
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Split View */}
                    <div className="flex flex-col md:flex-row min-h-[240px]">
                      {/* Code */}
                      <div className="w-full md:w-1/2 p-5 md:p-6 font-mono text-[12px] md:text-[13px] leading-[1.7] text-[#e0e0e0] overflow-x-auto border-b md:border-b-0 md:border-r border-white/10">
                        {SNIPPETS[lang]}
                      </div>

                      {/* Response */}
                      <div className="w-full md:w-1/2 flex flex-col bg-[#111111]/60">
                        <div className="flex items-center px-5 md:px-6 py-2.5 border-b border-white/5">
                          <span className="font-mono text-[10px] font-bold tracking-widest text-[#a5d6ff] uppercase">
                            Response
                          </span>
                        </div>
                        <div className="p-5 md:p-6 overflow-x-auto font-mono text-[12px] md:text-[13px] leading-[1.7] text-[#7ee787]">
                          {"{"}<br/>
                          &nbsp;&nbsp;"id": "cmpr-1a2b3c",<br/>
                          &nbsp;&nbsp;"object": "compression",<br/>
                          &nbsp;&nbsp;"created": 1720638421,<br/>
                          &nbsp;&nbsp;"model": "sd-compress-v1",<br/>
                          &nbsp;&nbsp;"compressed_text": "The tl;dr.",<br/>
                          &nbsp;&nbsp;"usage": {"{"}<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;"prompt_tokens": 1054,<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;"completion_tokens": 4,<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;"total_tokens": 1058<br/>
                          &nbsp;&nbsp;{"}"}<br/>
                          {"}"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[0.9rem] text-muted-foreground">
                  Need volume? Use the{" "}
                  <a
                    href="https://docs.scaledown.ai/api-reference/batch-overview"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-foreground underline decoration-[#ccc] underline-offset-4 transition hover:decoration-[#111]"
                  >
                    Batch API
                  </a>{" "}
                  for async extract, summarize, and classify.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden className="mr-1">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}
