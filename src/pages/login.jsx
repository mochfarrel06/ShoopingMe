import FormLogin from "../components/Fragments/Auth/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <AuthLayouts
        title="Login your account"
        description="Welcome, start your shopping"
        type="login"
      >
        <FormLogin />
      </AuthLayouts>
      <Footer />
    </>
  );
}
