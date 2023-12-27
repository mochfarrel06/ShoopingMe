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
        <HeroSection>
          <HeroSection.Header
            btnTitle="Shop now"
            description="Shop more easily, quickly, securely and best-selling transactions here."
          />
          <HeroSection.Body
            title={"Shop for goods easily"}
            description={
              "Find the convenience of shopping for your favorite items quickly andsafely in our online shop. An easy, practical and satisfying shopping experience only here!"
            }
          />
          <HeroSection.Footer />
        </HeroSection>
        <ProductSection />
        <BannerSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
