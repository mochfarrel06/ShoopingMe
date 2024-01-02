import {useEffect, useState} from "react";
import {getUserIdFromToken} from "../services/auth.service";
import {getUserId} from "../services/user.service";

export default function useUserData() {
  const [userDetails, setUserDetails] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const userId = getUserIdFromToken(token);
      getUserId(userId, (data) => {
        setUserDetails(data);
      });
    }
  }, []);

  return userDetails;
}
