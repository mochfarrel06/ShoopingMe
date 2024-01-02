import {useEffect, useState} from "react";
import {Disclosure} from "@headlessui/react";
import NavbarMain from "../Fragments/NavbarMain";
import NavbarMobile from "../Fragments/NavbarMobile";
import {getUserId} from "../../services/user.service";
import {getUserIdFromToken} from "../../services/auth.service";
import {useTotalCart} from "../../hooks/useTotalCart";
import {useNavigate} from "react-router-dom";
import useUserData from "../../hooks/useUserData";

function classNames(...clasess) {
  return clasess.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [username, setUsername] = useState({});
  // const [userDetails, setUserDetails] = useState({});
  const totalCart = useTotalCart();
  const token = localStorage.getItem("token");
  const userDetails = useUserData();

  useEffect(() => {
    setUsername(token);
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     const userId = getUserIdFromToken(token);
  //     getUserId(userId, (data) => {
  //       setUserDetails(data);
  //     });
  //   }
  // }, []);

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
              <NavbarMain.NavbarNavigation categories={categories} />
              <NavbarMain.NavbarSearch />
              <NavbarMain.NavbarProfile
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
