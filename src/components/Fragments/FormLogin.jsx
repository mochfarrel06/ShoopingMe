import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6">
      <InputForm
        label={"Email"}
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
