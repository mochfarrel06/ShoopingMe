import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin() {
  return (
    <form className="flex flex-col gap-6" action="#" method="POST">
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
      <Button>Login</Button>
    </form>
  );
}
