import ProfileSection from "../components/Fragments/ProfileSection";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <ProfileSection />
      </MainLayouts>
      <Footer />
    </>
  );
}
