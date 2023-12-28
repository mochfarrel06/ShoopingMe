import {useEffect, useState} from "react";
import {getUsername} from "../services/auth.service";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return username;
};
