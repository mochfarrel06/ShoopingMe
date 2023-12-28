import {Disclosure} from "@headlessui/react";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";

export default function NavbarMobile({children}) {
  return (
    <Disclosure.Panel className="lg:hidden px-2 pb-3 pt-2 sm:px-4 md:px-6">
      {children}
    </Disclosure.Panel>
  );
}

function NavbarTitleMobile({categories, classNames}) {
  return (
    <div className="flex flex-col gap-2 pb-3">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/category/${category}`}
          className={classNames(
            category.current
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium max-[400px]:text-sm"
          )}
          aria-current={category.current ? "page" : undefined}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

function NavbarProfileMobile({user, username, onClick, totalCart}) {
  return (
    <div className="border-t border-x-gray-700 pt-4">
      {username ? (
        <>
          <div className="flex items-center justify-between px-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full max-[400px]:h-8 max-[400px]:w-8"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium leading-none text-gray-700 max-[400px]:text-sm">
                  {user.username}
                </div>
                <div className="text-sm font-medium leading-none text-gray-400 max-[400px]:text-xs">
                  {user.email}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full bg-gray-800 p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute bg-orange-600 w-5 h-5 rounded-full right-0 top-0 text-center text-xs text-white font-medium flex items-center justify-center">
                {totalCart}
              </span>
              <ShoppingCartIcon
                className="h-5 w-5 max-[400px]:h-4 max-[400px]:w-4"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <Link
              to="/profile"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white max-[400px]:text-sm"
            >
              Profile
            </Link>
            <Link
              to="/profile"
              onClick={onClick}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white max-[400px]:text-sm"
            >
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="px-3">
            <Link
              className="block px-3 bg-blue-800 py-2 rounded-md font-medium text-base text-white transition-all duration-150 ease-in-out hover:bg-blue-700"
              to="/login"
            >
              Sign In
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

NavbarMobile.NavbarTitleMobile = NavbarTitleMobile;
NavbarMobile.NavbarProfileMobile = NavbarProfileMobile;
