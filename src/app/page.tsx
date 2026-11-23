import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { VisionSection } from "@/components/sections/VisionSection";
import { FoodCultureSection } from "@/components/sections/FoodCultureSection";
import { SpecialSection } from "@/components/sections/SpecialSection";
import { CommunityFlavoursSection } from "@/components/sections/CommunityFlavoursSection";
import { WhyTanggySection } from "@/components/sections/WhyTanggySection";
import { CitiesSection } from "@/components/sections/CitiesSection";
import { VendorCommunitySection } from "@/components/sections/VendorCommunitySection";
import { OrderTrackingSection } from "@/components/sections/OrderTrackingSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { BrandBeliefSection } from "@/components/sections/BrandBeliefSection";
import { PromiseSection } from "@/components/sections/PromiseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <BrandStorySection />
        <VisionSection />
        <BrandBeliefSection />
        <FoodCultureSection />
        <SpecialSection />
        <CommunityFlavoursSection />
        <WhyTanggySection />
        <CitiesSection />
        <VendorCommunitySection />
        <OrderTrackingSection />
        <DownloadSection />
        <MissionVisionSection />
        <PromiseSection />
      </main>
      <Footer />
    </>
  );
}
