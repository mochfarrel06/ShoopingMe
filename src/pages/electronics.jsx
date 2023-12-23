import ElectronicsSection from "../components/Fragments/Electronics";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function ElectronicsPage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <ElectronicsSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
