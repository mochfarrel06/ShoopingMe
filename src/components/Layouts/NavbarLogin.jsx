import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  {name: "Men", href: "#", current: true},
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

export default function NavbarLogin() {
  return (
    <div className="min-h-full">
      <Disclosure
        as="nav"
        className="bg-white shadow-sm fixed w-full right-0 top-0 z-50"
      >
        {({open}) => (
          <>
            <div className="mx-auto max-w-7xl">
              <div className="h-24 flex items-center px-4 max-[400px]:h-20 sm:px-6 lg:px-8">
                <div className="w-full flex item-center justify-between gap-5 max-[400px]:gap-4">
                  {/* Start Logo */}
                  <div className="flex items-center gap-0.5 max-[400px]:gap-0">
                    <ShoppingBagIcon className="h-6 w-6 text-blue-900 max-[400px]:h-5 max-[400px]:w-5 lg:w-7 lg:h-7 xl:h-8 xl:w-8" />
                    <h1 className="font-bold text-lg text-blue-900 tracking-wide max-[400px]:text-base md:text-xl xl:text-2xl">
                      ShoppingMe
                    </h1>
                  </div>
                  {/* End Logo */}

                  {/* Start Navigation */}
                  <div className="flex items-center gap-10">
                    <div className="hidden lg:block">
                      <div className="flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-500 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium lg:text-base"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <label className="relative block">
                      <span className="sr-only">Search</span>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 max-[400px]:h-4 max-[400px]:w-4" />
                      </span>
                      <input
                        className="placeholder:text-slate-400 block text-sm bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 max-[400px]:text-xs lg:text-base xl:text-lg"
                        placeholder="Search product"
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                  {/* End Navigation */}

                  {/* Star user and cart*/}
                  <div className="hidden lg:block">
                    <div className="flex items-center h-full gap-4">
                      <button
                        type="button"
                        className="relative rounded-full bg-white p-1 text-gray-900 hover:text-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View cart</span>
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full xl:h-10 xl:w-10"
                              src={user.imageUrl}
                              alt=""
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
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({active}) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 lg:text-base"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  {/* End user and cart */}

                  {/* Start mobile menu button */}
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
                  {/* End mobile menu button */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden px-2 pb-3 pt-2 sm:px-6">
              <div className="flex flex-col gap-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium max-[400px]:text-sm"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-x-gray-700 pt-4">
                <div className="flex items-center justify-between px-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full max-[400px]:h-8 max-[400px]:w-8"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-base font-medium leading-none text-gray-700 max-[400px]:text-sm">
                        {user.name}
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
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon
                      className="h-5 w-5 max-[400px]:h-4 max-[400px]:w-4"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white max-[400px]:text-sm"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
