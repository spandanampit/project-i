import HeroSection from "./landing/HeroSection";
import ThumbnailSection from "./landing/ThumbnailSection";
import FeaturesSection from "./landing/FeaturesSection";
import CTASection from "./landing/CTASection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ThumbnailSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}