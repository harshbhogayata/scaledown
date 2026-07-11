"use client";

import Link from "next/link";
import Image from "next/image";
import { EXTERNAL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

type NavItem = { label: string; href: string; external?: boolean };

// Nav data mapped from live site reference
const modelsNav: NavItem[] = [
  { label: "Compress", href: "/products/compress" },
  { label: "Summarize", href: "/products/summarize" },
  { label: "Extract", href: "/products/extract" },
  { label: "Classify", href: "/products/classify" },
];

const resourcesNav: NavItem[] = [
  { label: "Cookbooks", href: "/cookbooks" },
  { label: "Docs", href: "https://docs.scaledown.ai", external: true },
  { label: "Blog", href: "https://scaledown.ai/blog", external: true },
];

const benchmarksNav: NavItem[] = [
  { label: "ScaleDown vs OpenAI", href: "/benchmarks/openai" },
  { label: "ScaleDown vs Anthropic", href: "/benchmarks/anthropic" },
  { label: "ScaleDown vs Gemini", href: "/benchmarks/gemini" },
  { label: "ScaleDown vs Grok", href: "/benchmarks/grok" },
];

const communityNav: NavItem[] = [
  { label: "GitHub", href: "https://github.com/scaledown-team/scaledown" },
  { label: "Discord", href: "https://discord.gg/scaledown" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://twitter.com" },
];

function NavLink({ label, href, external }: { label: string; href: string; external?: boolean }) {
  const inner = (
    <>
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-y-full">
        {label}
      </span>
    </>
  );

  const className = "group relative inline-block overflow-hidden text-[13px] md:text-[14px] font-medium tracking-tight text-muted-foreground transition-colors duration-300 hover:text-black truncate";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background font-sans text-foreground">
      {/* Professional Ambient background blurs */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-80">
         <div className="absolute -top-32 left-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
         <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-[#00A6ED]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] border-x border-border bg-white/40 backdrop-blur-xl">
        
        {/* Massive Arpeggio-style CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
          <div className="col-span-1 lg:col-span-9 p-8 lg:p-16 overflow-hidden flex items-center justify-center">
            <h2 className="font-sans text-[11vw] lg:text-[7.5vw] leading-[0.8] tracking-tight font-black bg-gradient-to-br from-primary via-primary to-[#00A6ED] bg-clip-text text-transparent pb-2 -mb-2">
              ScaleDown
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-3 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center relative bg-white/50">
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex items-center gap-2">
              <img src="/brand/logo.png" alt="ScaleDown Logo" className="size-4 object-contain" />
            </div>
            <p className="text-[16px] lg:text-[18px] font-medium leading-tight tracking-tight text-foreground mb-5 mt-2 pl-6 lg:pl-0">
              Get an API key. No credit card required.
            </p>
            <div className="flex flex-col gap-3">
              <a href={EXTERNAL.getApiKey} className="inline-flex h-11 w-full items-center justify-center rounded-none bg-primary px-4 text-[11px] font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#005bb5]">
                Get API Key
              </a>
              <a href="mailto:hello@scaledown.ai" className="inline-flex h-11 w-full items-center justify-center rounded-none border border-[#ddd] bg-transparent px-4 text-[11px] font-bold tracking-widest text-black uppercase transition-colors hover:bg-black/5">
                Book a Call
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
          
          <div className="col-span-1 lg:col-span-6 grid grid-cols-1 md:grid-cols-3 border-b lg:border-b-0 lg:border-r border-border">
             {/* Column 1: Models */}
             <div className="flex flex-col p-5 lg:p-7 border-b md:border-b-0 md:border-r border-border">
               <h4 className="font-mono text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-5">Models</h4>
               <ul className="flex flex-col gap-3">
                 {modelsNav.map((item) => (
                   <li key={item.label}><NavLink {...item} /></li>
                 ))}
               </ul>
             </div>
             {/* Column 2: Resources */}
             <div className="flex flex-col p-5 lg:p-7 border-b md:border-b-0 md:border-r border-border">
               <h4 className="font-mono text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-5">Resources</h4>
               <ul className="flex flex-col gap-3">
                 {resourcesNav.map((item) => (
                   <li key={item.label}><NavLink {...item} /></li>
                 ))}
               </ul>
             </div>
             {/* Column 3: Benchmarks */}
             <div className="flex flex-col p-5 lg:p-7">
               <h4 className="font-mono text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-5">Benchmarks</h4>
               <ul className="flex flex-col gap-3">
                 {benchmarksNav.map((item) => (
                   <li key={item.label}><NavLink {...item} /></li>
                 ))}
               </ul>
             </div>
          </div>

          {/* Ask Your AI Assistant (Middle) - Replacing Newsletter */}
          <div className="col-span-1 lg:col-span-3 flex flex-col justify-center p-5 lg:p-7 border-b lg:border-b-0 lg:border-r border-border bg-[#f9f9f9]/50">
             <h3 className="font-mono text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-5">
               Ask your AI assistant
             </h3>
             <p className="text-[13px] leading-relaxed text-[#555] mb-5 font-medium">
               Want to know more? Chat with your favorite AI about our products and capabilities.
             </p>
             <div className="flex gap-5 items-center">
               <Image src="/ai-icons/openai.svg" alt="OpenAI" width={24} height={24} className="size-6 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer" />
               <Image src="/ai-icons/claude.svg" alt="Anthropic" width={24} height={24} className="size-6 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer" />
               <Image src="/ai-icons/gemini.svg" alt="Gemini" width={24} height={24} className="size-6 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer" />
               <Image src="/ai-icons/grok.svg" alt="Grok" width={24} height={24} className="size-6 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer text-foreground" />
               <Image src="/ai-icons/perplexity.svg" alt="Perplexity" width={24} height={24} className="size-6 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer text-foreground" />
             </div>
          </div>

          {/* Social List / Community (Right) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col">
            {communityNav.map((item, i) => (
              <a 
                key={item.label} 
                href={item.href}
                target={(item.href || "").startsWith("mailto:") ? undefined : "_blank"} 
                rel="noreferrer"
                className={`group flex flex-1 items-center justify-between px-5 lg:px-6 py-4 lg:py-0 text-[13px] lg:text-[14px] font-medium tracking-tight text-muted-foreground transition-colors duration-300 hover:text-black ${i !== communityNav.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="size-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-black stroke-[2.5]" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 pt-[2px] pb-[2px]">
          
          <div className="col-span-1 lg:col-span-9 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 p-2 lg:p-3 border-b lg:border-b-0 lg:border-r border-border">
             <div className="flex flex-col">
               <p className="font-mono text-[9px] font-medium tracking-wider text-muted-foreground uppercase flex items-center gap-1.5 mb-1.5">
                 <span className="relative flex size-1.5">
                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                 </span>
                 API ONLINE
               </p>
               <p className="text-[11px] lg:text-[12px] leading-tight text-foreground font-medium max-w-2xl mb-1.5">
                 SCALEDOWN is an Applied Research Lab based in San Francisco, CA. <br className="hidden lg:block" />
                 We build task-specific SLMs to deliver frontier quality at a fraction of the cost.
               </p>
             </div>
             
             <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-medium text-muted-foreground">
               <a href="mailto:hello@scaledown.ai" className="hover:text-black transition-colors">hello@scaledown.ai</a>
               <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
               <Link href="/cookies" className="hover:text-black transition-colors">Cookie Policy</Link>
               <span>© {new Date().getFullYear()}</span>
             </div>
          </div>

          {/* Logo block */}
          <div className="col-span-1 lg:col-span-3 flex items-center justify-center p-2">
             <Link href="/" className="group flex flex-col items-center gap-1.5" aria-label="ScaleDown home">
                <Image src="/brand/logo.png" alt="" width={28} height={28} className="size-7 object-contain transition-transform group-hover:scale-105" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-black uppercase">ScaleDown</span>
             </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
