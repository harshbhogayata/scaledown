import { BenchmarksSection } from "@/components/sections/BenchmarksSection";
import { BionicGridSection } from "@/components/sections/BionicGridSection";
import { DxSection } from "@/components/sections/DxSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { PricingTeaserSection } from "@/components/sections/PricingTeaserSection";
import { SecuritySection } from "@/components/sections/SecuritySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <BionicGridSection />
      <DxSection />
      <BenchmarksSection />
      <SecuritySection />
      <PricingTeaserSection />
      <FaqSection />
    </>
  );
}
