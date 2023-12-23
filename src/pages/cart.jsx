import CartSection from "../components/Fragments/CartSection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <CartSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
