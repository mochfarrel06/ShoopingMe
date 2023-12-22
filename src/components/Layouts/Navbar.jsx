import {useState} from "react";
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
  {name: "Men", href: "#", current: false},
  {name: "Women", href: "#", current: false},
  {name: "Jewelery", href: "#", current: false},
  {name: "Electronics", href: "#", current: false},
];

const userNavigation = [
  {name: "Your Profile", href: "#"},
  {name: "Sign out", href: "#"},
];

function classNames(...clasess) {
  return clasess.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                userNavigation={userNavigation}
                classNames={classNames}
                isLoggedIn={isLoggedIn}
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
