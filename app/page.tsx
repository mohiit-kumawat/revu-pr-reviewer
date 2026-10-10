import { LandingHeader } from "@/components/landing/header";
import { LandingHero } from "@/components/landing/hero";
import { PrPreviewHero } from "@/components/landing/pr-preview-hero";
import { SocialProof } from "@/components/landing/social-proof";
import { WhyRevu } from "@/components/landing/why-revu";
import { ReviewPreview } from "@/components/landing/review-preview";
import { FeatureCards } from "@/components/landing/feature-cards";
import { CtaSection } from "@/components/landing/cta-section";
import { LandingFooter } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-[#D99A64]/20 selection:text-[#D99A64]">
      <LandingHeader />
      <main className="flex-1">
        <LandingHero />
        <PrPreviewHero />
        <SocialProof />
        <WhyRevu />
        <ReviewPreview />
        <FeatureCards />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
