import BannerSection from "../components/Fragments/BannerSection";
import HeroSection from "../components/Fragments/HeroSection";
import ProductSection from "../components/Fragments/ProductSection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <HeroSection />
        <ProductSection />
        <BannerSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
