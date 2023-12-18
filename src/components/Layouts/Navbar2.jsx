import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
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
export default function NavbarExample() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({open}) => (
        <>
          <div className="w-full px-2 max-[315px]:px-3 min-[315px]:px-5 sm:px-8 lg:px-16">
            <div className="relative flex py-6 items-center justify-between gap-5 max-[315px]:py-3 min-[315px]:py-4 lg:py-6">
              {/* Logo */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-800 max-[315px]:w-5 max-[315px]:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="font-bold text-xl text-blue-800 max-[315px]:text-xs min-[315px]:text-sm lg:text-lg">
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
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-700 min-[400px]:h-4 min-[400px]:w-4 max-[400px]:h-3 max-[400px]:w-3" />
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-10 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-700 focus:ring-1 max-[400px]:py-1 max-[400px]:placeholder:text-xs max-[400px]:px-6 min-[400px]:px-7 min-[400px]:placeholder:text-xs min-[400px]:py-1 sm:text-sm lg:py-2"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
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
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
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

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="space-y-1 px-3 pb-3 pt-2">
              <div className="flex items-center">
                <div className="relative flex rounded-fulltext-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
