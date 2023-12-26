import DetailProduct from "../components/Fragments/DetailProduct";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function DetailProductPage() {
  return (
    <MainLayouts>
      <Navbar />
      <DetailProduct />
      <Footer />
    </MainLayouts>
  );
}
