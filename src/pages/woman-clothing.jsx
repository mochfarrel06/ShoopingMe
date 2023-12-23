import WomanSection from "../components/Fragments/WomanSection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function WomanPage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <WomanSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
