import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ModesSection } from "@/components/sections/ModesSection";
import { OccasionSection } from "@/components/sections/OccasionSection";
import { StorySection } from "@/components/sections/StorySection";
import { WhyTanggySection } from "@/components/sections/WhyTanggySection";
import { JournalSection } from "@/components/sections/JournalSection";
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
        <ModesSection />
        <OccasionSection />
        <StorySection />
        <WhyTanggySection />
        <JournalSection />
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
