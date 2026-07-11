"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X, Minimize2, FileText, Search, Layers, BookOpen, PenTool, ArrowRight } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EXTERNAL, PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLink =
  "text-[11px] font-bold tracking-[0.15em] text-muted-foreground transition-all duration-200 hover:text-foreground uppercase";

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white/40 backdrop-blur-xl supports-[backdrop-filter]:bg-white/30">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(navLink, "group inline-flex items-center gap-1 outline-none")}>
              Models
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              sideOffset={24}
              className="w-[500px] rounded-2xl border border-black/[0.04] bg-white/95 p-4 shadow-[0_24px_54px_-12px_rgba(0,0,0,0.1)] backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-4"
            >
              <div className="grid grid-cols-2 gap-3">
                {PRODUCTS.map((p) => {
                  let Icon = Minimize2;
                  if (p.slug === "summarize") Icon = FileText;
                  if (p.slug === "extract") Icon = Search;
                  if (p.slug === "classify") Icon = Layers;

                  return (
                    <DropdownMenuItem
                      key={p.slug}
                      className="group flex cursor-pointer items-start gap-4 rounded-xl p-3 outline-none transition-colors hover:bg-muted focus:bg-muted"
                      onClick={() => router.push(p.href)}
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">
                        <Icon className="size-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14px] font-semibold text-foreground transition-colors group-hover:text-primary group-focus:text-primary">
                          {p.name}
                        </span>
                        <span className="text-[12px] font-medium leading-snug text-muted-foreground transition-colors group-hover:text-[#555] group-focus:text-[#555]">
                          {p.tagline}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </div>
              <div className="mt-4 border-t border-border bg-[#f9f9f9] -mx-4 -mb-4 p-4 rounded-b-2xl">
                <div className="flex items-center justify-between px-2">
                  <span className="text-[12px] font-medium text-muted-foreground">Explore our developer documentation</span>
                  <a href={EXTERNAL.docs} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary transition-colors hover:text-[#005bb5]">
                    View API Docs <ArrowRight className="size-3" />
                  </a>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/dietcode" className={navLink}>
            Dietcode
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(navLink, "group inline-flex items-center gap-1 outline-none")}>
              Resources
              <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              sideOffset={24}
              className="w-[280px] rounded-2xl border border-black/[0.04] bg-white/95 p-3 shadow-[0_24px_54px_-12px_rgba(0,0,0,0.1)] backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-4"
            >
              <DropdownMenuItem 
                className="group flex cursor-pointer items-center gap-3 rounded-xl p-3 outline-none transition-colors hover:bg-muted focus:bg-muted"
                onClick={() => router.push("/cookbooks")}
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">
                  <BookOpen className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-foreground transition-colors group-hover:text-primary group-focus:text-primary">
                    Cookbooks
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">Guides & examples</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="group flex cursor-pointer items-center gap-3 rounded-xl p-3 outline-none transition-colors hover:bg-muted focus:bg-muted"
                onClick={() => router.push("/blog")}
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">
                  <PenTool className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-foreground transition-colors group-hover:text-primary group-focus:text-primary">
                    Blog
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">Latest product updates</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/pricing" className={navLink}>
            Pricing
          </Link>
          <a href={EXTERNAL.docs} target="_blank" rel="noreferrer" className={navLink}>
            Docs
          </a>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="mailto:hello@scaledown.ai" className={navLink}>
            Book a Call
          </a>
          <a
            href={EXTERNAL.dashboard}
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-5 text-[11px] font-bold tracking-widest text-white uppercase transition-all duration-200 hover:bg-[#0060d1] shadow-[0_4px_14px_0_rgb(0,112,243,0.39)] hover:shadow-[0_6px_20px_rgba(0,112,243,0.23)] hover:-translate-y-0.5"
          >
            Login / Sign Up
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/20 bg-white/80 backdrop-blur-2xl md:hidden shadow-[0_24px_54px_-12px_rgba(0,0,0,0.1)]">
          <div className="container-site flex flex-col gap-1 py-3">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                {p.name}
              </Link>
            ))}
            <Link href="/dietcode" className="rounded-md px-2 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground" onClick={() => setOpen(false)}>
              Dietcode
            </Link>
            <Link href="/resources" className="rounded-md px-2 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground" onClick={() => setOpen(false)}>
              Resources
            </Link>
            <Link href="/pricing" className="rounded-md px-2 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <a href={EXTERNAL.docs} className="rounded-md px-2 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground" onClick={() => setOpen(false)}>
              Docs
            </a>
            <div className="mt-4 flex flex-col gap-2 px-2 pb-2">
              <a href="mailto:hello@scaledown.ai" className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-transparent text-[11px] font-bold tracking-widest text-foreground uppercase transition-colors hover:bg-black/5">
                Book a Call
              </a>
              <a href={EXTERNAL.dashboard} className="inline-flex h-11 items-center justify-center rounded-lg bg-primary text-[11px] font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#005bb5]">
                Login / Sign Up
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
