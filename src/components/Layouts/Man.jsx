import {ShoppingBagIcon, StarIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
  },

  {
    id: 2,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
  },
  {
    id: 3,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
  },
  {
    id: 4,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
  },
  {
    id: 5,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
  },

  // More products...
];

export default function ManClothing() {
  return (
    <div className="px-6 py-14 lg:px-8">
      {/* Start product section */}
      <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium tracking-tight text-gray-600">
            Showing products 1 - 10 of 10
          </h2>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Sort by
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({active}) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active}) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({active}) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-md rounded-md overflow-hidden px-5 py-10"
            >
              <div className="aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 flex items-center justify-center py-5">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-1/2 h-1/2 object-center lg:h-3/4 lg:w-3/4"
                />
              </div>
              <div className="mt-4 flex flex-col w-full gap-4">
                <div className="flex gap-10">
                  <a
                    href="#"
                    className="text-lg font-medium truncate text-gray-700 max-[400px]:text-base"
                  >
                    {product.name}
                  </a>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-700 font-normal text-sm">4.9</p>
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-700 text-xl font-semibold max-[400px]:text-lg">
                    {product.price}
                  </p>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm border-2 font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 max-[315px]:text-xs lg:text-base lg:py-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End product section */}
    </div>
  );
}
