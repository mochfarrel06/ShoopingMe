import {useEffect, useState} from "react";
import {Disclosure} from "@headlessui/react";
import NavbarMain from "../Fragments/NavbarMain";
import NavbarMobile from "../Fragments/NavbarMobile";
import {useSelector} from "react-redux";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  {name: "Products", to: "/products", current: false},
  {name: "men", to: "/men", current: false},
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
  const [username, setUsername] = useState({});
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const usernameString = localStorage.getItem("token");
    setUsername(usernameString);
  }, []);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

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
                user={user}
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
                user={user}
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
