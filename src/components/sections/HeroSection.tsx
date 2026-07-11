"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HeroCompressionViz } from "@/components/mocks/HeroCompressionViz";
import { HERO } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/site/Magnetic";

const line = {
  hidden: { opacity: 0, y: 36, scale: 0.95, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { delay: 0.08 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* Generates a staggered halftone dot grid */
function HalftoneDots() {
  const dots: { x: number; y: number; r: number }[] = [];
  const cols = 45; 
  const dx = 100 / cols; 
  // Staggered grid vertical spacing (sqrt(3)/2 ≈ 0.866)
  const dy = dx * 0.866; 
  const rows = Math.ceil(100 / dy); 

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols + 1; col++) {
      const isEvenRow = row % 2 === 0;
      const xOffset = isEvenRow ? 0 : dx / 2;
      const x = col * dx + xOffset;
      const y = row * dy;
      
      // Growth from left to right
      const progress = Math.max(0, Math.min(1, x / 100));
      // Non-linear growth for a more dynamic halftone effect
      const easeProgress = Math.pow(progress, 1.5);
      
      const maxR = dx * 0.45;
      const radius = Number((easeProgress * maxR).toFixed(4));

      if (radius > 0.05) {
        dots.push({ 
          x: Number(x.toFixed(4)), 
          y: Number(y.toFixed(4)), 
          r: radius 
        });
      }
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ maskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, black, transparent)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, black, transparent)" }}>
      <svg
        className="absolute inset-0 size-full text-primary opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  // Deep parallax for the hero text
  const yText = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Subtle reverse parallax for the background dots
  const yDots = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Halftone Dot Pattern */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yDots }}>
        <HalftoneDots />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-site max-w-[1200px] pt-12 pb-12 md:pt-16 md:pb-16"
        style={{ y: yText, opacity }}
      >
        <motion.a
          custom={0}
          variants={line}
          initial="hidden"
          animate="show"
          href={HERO.badgeHref}
          target="_blank"
          rel="noreferrer"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#e55a2b] uppercase shadow-sm"
        >
          <Image src="/ai-icons/claude.svg" alt="" width={14} height={14} className="size-3.5" />
          {HERO.badge}
        </motion.a>

        <h1 className="display max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] text-foreground">
          <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
            Task-specific
          </motion.span>
          <motion.span
            custom={2}
            variants={line}
            initial="hidden"
            animate="show"
            className="block italic text-primary"
          >
            Small Language
          </motion.span>
          <motion.span custom={3} variants={line} initial="hidden" animate="show" className="block">
            Models.
          </motion.span>
        </h1>

        <motion.div
          custom={4}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-8 flex max-w-2xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-[1rem] leading-relaxed text-muted-foreground md:text-[1.125rem]">
            {HERO.subhead}
          </p>
          <div className="shrink-0">
            <Magnetic strength={0.3}>
              <a
                href={HERO.ctaHref}
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-[1rem] font-semibold text-background transition-all hover:bg-primary hover:scale-[1.02] active:scale-95 md:text-[1.125rem] shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              >
                {HERO.cta}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <p className="mt-2 text-center text-[0.8rem] text-muted-foreground md:text-left">
              {HERO.freeNote}
            </p>
          </div>
        </motion.div>

        <motion.p
          custom={5}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-8 font-mono text-[11px] font-bold tracking-widest text-muted-foreground uppercase"
        >
          {HERO.proof}
        </motion.p>
      </motion.div>

      {/* Product Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 container-site max-w-[1200px] pb-16 md:pb-24"
      >
        <div className="relative">
          {/* Subtle ambient orb for the glass to interact with */}
          <div className="absolute inset-0 top-10 flex items-center justify-center pointer-events-none opacity-30">
            <div className="h-[200px] w-[70%] rounded-full bg-primary blur-[100px]" />
          </div>
          
          <div className="relative overflow-hidden rounded-xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <HeroCompressionViz />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
