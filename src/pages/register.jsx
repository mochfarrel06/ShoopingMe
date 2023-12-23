import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <AuthLayouts
        title="Register your account"
        description="Welcome, create account for shopping"
        type="register"
      >
        <FormRegister />
      </AuthLayouts>
      <Footer />
    </>
  );
}
