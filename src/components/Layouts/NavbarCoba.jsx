import {Fragment, useState} from "react";
import {Dialog, Disclosure, Popover, Transition} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  {name: "Men", href: "#"},
  {name: "Women", href: "#"},
  {name: "Jewelery", href: "#"},
  {name: "Electronics", href: "#"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarCoba() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8 gap-5">
        {/* Start Logo */}
        <div className="flex">
          <a href="#">
            <span className="font-bold text-xl text-gray-700">ShoppingMe</span>
          </a>
        </div>
        {/* End Logo */}

        {/* Start list menu */}
        <ul className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-medium leading-6 text-gray-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* End List Menu */}

        {/* Start Search */}
        <label className="relative block overflow-hidden">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-300" />
          </span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm sm:py-1"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
        {/* End Search */}

        {/* Start cart and sign up */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Start cart */}
          <div className="lg:flex lg:items-center">
            <ShoppingCartIcon className="h-6 w-6 text-slate-900" />
          </div>
          {/* End cart */}

          {/* Start Login */}
          <div className="lg:flex">
            <button
              type="button"
              href="#"
              className="text-sm inline-block font-semibold bg-gray-100 leading-6 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300"
            >
              Sign Up
            </button>
          </div>
          {/* End Login */}
        </div>
        {/* End cart and sign up */}

        {/* Start Menu open */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>
        {/* End Menu open */}
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="font-bold text-xl text-gray-700 md:text-red-700">
                ShoppingMe
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <ul>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6">
                <button
                  type="button"
                  href="#"
                  className="text-sm inline-block font-semibold bg-gray-100 leading-6 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
