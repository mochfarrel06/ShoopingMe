import {Link} from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
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
      >
        <FormRegister />
        <p className="text-center text-sm text-gray-600 max-[315px]:text-xs lg:text-base">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </AuthLayouts>
      <Footer />
    </>
  );
}
