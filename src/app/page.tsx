import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { VisionSection } from "@/components/sections/VisionSection";
import { FoodCultureSection } from "@/components/sections/FoodCultureSection";
import { SpecialSection } from "@/components/sections/SpecialSection";
import { WhyTanggySection } from "@/components/sections/WhyTanggySection";
import { CitiesSection } from "@/components/sections/CitiesSection";
import { OrderTrackingSection } from "@/components/sections/OrderTrackingSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PromiseSection } from "@/components/sections/PromiseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <BrandStorySection />
        <VisionSection />
        <FoodCultureSection />
        <SpecialSection />
        <WhyTanggySection />
        <CitiesSection />
        <OrderTrackingSection />
        <DownloadSection />
        <FAQSection />
        <PromiseSection />
      </main>
      <Footer />
    </>
  );
}
