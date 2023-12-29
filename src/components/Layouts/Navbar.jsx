import {useEffect, useState} from "react";
import {Disclosure} from "@headlessui/react";
import NavbarMain from "../Fragments/NavbarMain";
import NavbarMobile from "../Fragments/NavbarMobile";
import {useSelector} from "react-redux";
import {getUserId} from "../../services/user.service";
import {getUserIdFromToken} from "../../services/auth.service";
import {useCart} from "../../hooks/useCart";

function classNames(...clasess) {
  return clasess.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [username, setUsername] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const totalCart = useCart();

  useEffect(() => {
    const usernameString = localStorage.getItem("token");
    setUsername(usernameString);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = getUserIdFromToken(token);
      getUserId(userId, (data) => {
        setUserDetails(data);
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // Kategori
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="min-h-full">
      <Disclosure
        as="nav"
        className="bg-white shadow-sm fixed w-full right-0 top-0 z-50 shadow-gray-200"
      >
        {({open}) => (
          <>
            <NavbarMain>
              <NavbarMain.NavbarTitle title={"ShoppingMe"} />
              <NavbarMain.NavbarNavigation
                categories={categories}
                classNames={classNames}
              />
              <NavbarMain.NavbarSearch />
              <NavbarMain.NavbarProfile
                classNames={classNames}
                onClick={handleLogout}
                username={username}
                totalCart={totalCart}
              />
              <NavbarMain.NavbarMenu open={open} />
            </NavbarMain>

            <NavbarMobile>
              <NavbarMobile.NavbarTitleMobile
                categories={categories}
                classNames={classNames}
              />
              <NavbarMobile.NavbarProfileMobile
                totalCart={totalCart}
                user={userDetails}
                username={username}
                onClick={handleLogout}
              />
            </NavbarMobile>
          </>
        )}
      </Disclosure>
    </div>
  );
}
