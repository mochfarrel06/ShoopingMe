import BannerSection from "../components/Fragments/BannerSection";
import HeroSection from "../components/Fragments/HeroSection";
import ProductSection from "../components/Fragments/ProductSection";
import MainLayouts from "../components/Layouts/MainLayouts";

export default function HomePage() {
  return (
    <MainLayouts>
      <HeroSection />
      <ProductSection />
      <BannerSection />
    </MainLayouts>
  );
}
