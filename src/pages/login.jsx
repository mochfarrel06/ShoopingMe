import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <AuthLayouts
      title="Login your account"
      description="Welcome, start your shopping"
    >
      <FormLogin />
    </AuthLayouts>
  );
}
