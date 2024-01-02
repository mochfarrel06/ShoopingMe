import * as ReactImports from "./index";
const {
  useEffect,
  useState,
  Disclosure,
  NavbarMain,
  NavbarMobile,
  useTotalCart,
  useUserData,
  useLogout,
  categories,
} = ReactImports;

function classNames(...clasess) {
  return clasess.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [username, setUsername] = useState({});
  const totalCart = useTotalCart();
  const token = localStorage.getItem("token");
  const userDetails = useUserData();
  const handleLogout = useLogout();

  useEffect(() => {
    setUsername(token);
  }, []);

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
