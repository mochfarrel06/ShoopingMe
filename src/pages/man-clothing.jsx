import ManSection from "../components/Fragments/ManSection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function ManPage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <ManSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
