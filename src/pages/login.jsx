import {Link} from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <AuthLayouts
        title="Login your account"
        description="Welcome, start your shopping"
      >
        <FormLogin />
        <p className="text-center text-sm text-gray-600 max-[315px]:text-xs lg:text-base">
          Don't have account?
          <Link
            to="/register"
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </AuthLayouts>

      <Footer />
    </>
  );
}
