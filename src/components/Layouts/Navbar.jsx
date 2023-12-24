import {useEffect, useState} from "react";
import {Disclosure} from "@headlessui/react";
import NavbarMain from "../Fragments/NavbarMain";
import NavbarMobile from "../Fragments/NavbarMobile";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  {name: "Men", to: "/man-clothing", current: false},
  {name: "Women", to: "/woman-clothing", current: false},
  {name: "Jewelery", to: "/jewelery", current: false},
  {name: "Electronics", to: "/electronics", current: false},
];

const userNavigation = [
  {name: "Your Profile", to: "/profile"},
  {name: "Sign out", to: ""},
];

function classNames(...clasess) {
  return clasess.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [email, setEmail] = useState({});

  useEffect(() => {
    const emailString = localStorage.getItem("email");
    setEmail(emailString);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

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
                navigation={navigation}
                classNames={classNames}
              />
              <NavbarMain.NavbarSearch />
              <NavbarMain.NavbarProfile
                user={user}
                classNames={classNames}
                onClick={handleLogout}
                email={email}
              />
              <NavbarMain.NavbarMenu open={open} />
            </NavbarMain>

            <NavbarMobile>
              <NavbarMobile.NavbarTitleMobile
                navigation={navigation}
                classNames={classNames}
              />
              <NavbarMobile.NavbarProfileMobile
                user={user}
                userNavigation={userNavigation}
              />
            </NavbarMobile>
          </>
        )}
      </Disclosure>
    </div>
  );
}
