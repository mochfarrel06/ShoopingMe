import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function RegisterPage() {
  return (
    <AuthLayouts
      title="Register your account"
      description="Welcome, create account for shopping"
    >
      <FormRegister />
    </AuthLayouts>
  );
}
