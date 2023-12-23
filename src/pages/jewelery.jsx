import JewelerySection from "../components/Fragments/JewelerySection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function JeweleryPage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <JewelerySection />
      </MainLayouts>
      <Footer />
    </>
  );
}
