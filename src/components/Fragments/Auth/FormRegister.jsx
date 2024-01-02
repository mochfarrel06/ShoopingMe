import Button from "../../Elements/Button";
import InputForm from "../../Elements/Input";

export default function FormRegister() {
  return (
    <form className="flex flex-col gap-6" action="#" method="POST">
      <InputForm
        label={"Full Name"}
        type="text"
        name="fullname"
        placeholder="john doe"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="******"
      />
      <Button>Register</Button>
    </form>
  );
}
