import ProductsSection from "../components/Fragments/ProductsSection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function ProductsPage() {
  return (
    <MainLayouts>
      <Navbar />
      <ProductsSection />
      <Footer />
    </MainLayouts>
  );
}
