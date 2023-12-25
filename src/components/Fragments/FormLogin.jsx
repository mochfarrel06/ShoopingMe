import {useState} from "react";
import {login} from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6">
      <InputForm
        label={"Username"}
        type="text"
        name="username"
        placeholder="Jhon doe"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button type="submit">Login</Button>
      {loginFailed && (
        <p className="text-red-600 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}
