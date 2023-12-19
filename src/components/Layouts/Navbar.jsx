import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {UserIcon} from "@heroicons/react/20/solid";

const navigation = [
  {name: "Men", href: "#", current: false},
  {name: "Women", href: "#", current: false},
  {name: "Jewelery", href: "#", current: false},
  {name: "Electronics", href: "#", current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white fixed w-full right-0 shadow-md">
      {({open}) => (
        <>
          <div className="w-full max-[315px]:px-3 sm:px-6 lg:px-16">
            <div className="relative flex py-4 items-center justify-between gap-5 max-[315px]:py-4 max-[315px]:gap-2 lg:py-6">
              {/* Logo */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800 max-[315px]:w-4 max-[315px]:h-4 min-[315px]:w-5 min-[315px]:h-5 lg:h-7 lg:w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="font-bold text-xl text-blue-800 max-[315px]:text-sm md:text-lg lg:text-xl">
                  ShoppingMe
                </h1>
              </div>
              {/* Navigation */}
              <div className="hidden lg:block">
                <div className="flex items-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-800 text-white"
                          : "text-gray-700 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* Search */}
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-700 max-[315px]:h-3 max-[315px]:w-3 max-[400px]:h-3 max-[400px]:w-3" />
                </span>
                <input
                  className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-sm py-2 px-10 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-400 focus:ring-1 max-[315px]:py-1 max-[315px]:px-6 max-[315px]:placeholder:text-xs max-[315px]:text-xs sm:text-sm lg:py-2"
                  placeholder="Search"
                  type="text"
                  name="search"
                />
                {/* <input
                  className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-sm py-2 px-10 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-400 focus:ring-1 max-[315px]:py-1 max-[315px]:placeholder:text-[0.5rem] max-[315px]:text-[0.5rem] min-[315px]:py-[3px] min-[315px]:text-xs max-[400px]:py-1 max-[400px]:placeholder:text-xs max-[400px]:px-6 min-[400px]:px-7 min-[400px]:placeholder:text-xs min-[400px]:py-1 sm:text-sm lg:py-2"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                /> */}
              </label>
              {/* Menu profile */}
              <div className="hidden lg:flex gap-3 items-center">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <UserIcon className="h-6 w-6 text-gray-200" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({active}) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({active}) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({active}) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="inset-y-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon
                      className="block h-5 w-5 max-[315px]:h-4 max-[315px]:w-4"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-5 w-5 max-[315px]:h-4 max-[315px]:w-4"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden max-[315px]:px-3 max-[315px]:pt-2 sm:px-6 lg:px-16">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white font-medium"
                      : "text-gray-700 hover:bg-gray-700 font-medium hover:text-white",
                    "block rounded-md text-base font-medium max-[315px]:text-xs"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 max-[315px]:pt-5 min-[315px]:pt-5">
              <hr className="border-gray-200 rounded-md" />
              <div className="flex items-center w-full justify-between overflow-hidden">
                <div className="flex items-center py-2 gap-2">
                  <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <UserIcon className="h-10 w-10 text-gray-200 max-[315px]:h-7 max-[315px]:w-7 min-[315px]:h-7 min-[315px]:w-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-gray-800 tracking-wide max-[315px]:text-xs min-[315px]:text-sm">
                      Moch Farrel
                    </h3>
                    <p className="text-sm text-gray-400 max-[315px]:text-[0.6rem] min-[315px]:text-xs">
                      mochfarrel@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2">
                  <ShoppingCartIcon className="h-5 w-5 text-gray-700 max-[315px]:h-4 max-[315px]:w-4 min-[315px]:h-4 min-[315px]:w-4" />
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <a
                  href="#"
                  className="text-gray-700 font-medium text-base max-[315px]:text-xs min-[315px]:text-sm"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="text-gray-700 font-medium text-base max-[315px]:text-xs min-[315px]:text-sm"
                >
                  Logout
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
