import * as ReactImports from "./index";

const {
  Disclosure,
  Menu,
  Transition,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  XMarkIcon,
  Fragment,
  useState,
  Link,
  useNavigate,
} = ReactImports;

export default function NavbarMain({children}) {
  return (
    <div className="mx-auto max-w-7xl lg:w-full">
      <div className="h-24 flex items-center px-4 max-[400px]:h-20 sm:px-6 md:px-8 lg:px-4 xl:px-0">
        <div className="w-full flex item-center justify-between gap-5 max-[400px]:gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

function NavbarTitle({title}) {
  return (
    <Link
      to="/"
      className="flex items-center gap-0.5 group transition-all ease-in-out duration-400 max-[400px]:gap-0"
    >
      <ShoppingBagIcon className="h-6 w-6 text-blue-900 group-hover:text-blue-700 max-[400px]:h-5 max-[400px]:w-5 lg:w-7 lg:h-7 xl:h-8 xl:w-8" />
      <h1 className="font-bold text-lg text-blue-900 group-hover:text-blue-700 tracking-wide max-[400px]:text-base md:text-xl xl:text-2xl">
        {title}
      </h1>
    </Link>
  );
}

function NavbarNavigation({categories}) {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center justify-center gap-4 h-full xl:gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="text-base font-medium rounded-md text-gray-500 transition-all ease-in-out duration-150 lg:text-sm min-[1109px]:text-base xl:text-lg xl:px-3 xl:py-1 xl:hover:bg-gray-700 xl:hover:text-white"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NavbarSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <label className="relative group block w-60 xl:w-72">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlassIcon className="h-5 w-5 group-focus-within:text-blue-500 text-gray-400 max-[400px]:h-4 max-[400px]:w-4" />
      </span>
      <input
        className="placeholder:text-slate-400 block text-sm bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none group-focus-within:focus:ring-blue-500 focus:ring-1 max-[400px]:text-xs lg:text-base xl:text-lg"
        placeholder="Search product"
        type="text"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
}

function NavbarProfile({onClick, username, totalCart}) {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center h-full gap-4">
        {username ? (
          <>
            <Link
              to="/carts"
              className="relative rounded-full bg-white p-1 text-gray-900 hover:text-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute bg-orange-600 w-5 h-5 rounded-full right-0 top-0 text-center text-xs text-white font-medium flex items-center justify-center">
                {totalCart}
              </span>
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            <Menu as="div" className="relative">
              <div>
                <Menu.Button
                  type="button"
                  className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img
                    className="h-8 w-8 rounded-full xl:h-10 xl:w-10"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-56 lg:py-3">
                  <Menu.Item>
                    <Link
                      to="/profile"
                      className="block bg-white hover:bg-gray-100 px-4 py-2 text-sm text-gray-700 lg:text-base"
                    >
                      Profile Me
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      onClick={onClick}
                      className="block bg-white hover:bg-gray-100 px-4 py-2 text-sm text-gray-700 lg:text-base"
                    >
                      Logout
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="block px-3 bg-blue-800 py-2 rounded-md font-medium text-base text-white transition-all duration-150 ease-in-out hover:bg-blue-700 transform hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function NavbarMenu({open}) {
  return (
    <div className="lg:hidden flex">
      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200 max-[400px]:p-1">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon
            className="block h-6 w-6 max-[400px]:h-4 max-[400px]:w-4"
            aria-hidden="true"
          />
        ) : (
          <Bars3Icon
            className="block h-6 w-6 max-[400px]:h-4 max-[400px]:w-4"
            aria-hidden="true"
          />
        )}
      </Disclosure.Button>
    </div>
  );
}

NavbarMain.NavbarTitle = NavbarTitle;
NavbarMain.NavbarNavigation = NavbarNavigation;
NavbarMain.NavbarSearch = NavbarSearch;
NavbarMain.NavbarProfile = NavbarProfile;
NavbarMain.NavbarMenu = NavbarMenu;
