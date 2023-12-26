import CategorySection from "../components/Fragments/CategorySection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function CategoryPage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <CategorySection />
      </MainLayouts>
      <Footer />
    </>
  );
}
