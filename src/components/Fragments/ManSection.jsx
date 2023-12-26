import {Fragment, useEffect, useRef, useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import CardProduct from "./CardProduct";
import {getMensClothing} from "../../services/products.service";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ManSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      {/* Start product section */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div>
          <div className="flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start max-[400px]:gap-5">
            <h2 className="text-base font-medium tracking-tight text-gray-500 max-[400px]:text-sm lg:text-lg">
              Showing products 1 - 10 of 10
            </h2>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-400 ring-opacity-5 focus:outline-none max-[400px]:left-0">
                  <div className="py-1">
                    <Menu.Item>
                      {({active}) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-800"
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
                              ? "bg-gray-100 text-gray-800"
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
                              ? "bg-gray-100 text-gray-800"
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
                                ? "bg-gray-100 text-gray-800"
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
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.CardImage image={product.image} />
                  <CardProduct.CardBody
                    title={product.title}
                    price={product.price}
                    rate={product.rating.rate}
                  />
                  <CardProduct.CardFooter
                    id={product.id}
                    handleAddToCart={handleAddToCart}
                  >
                    Add To Cart
                  </CardProduct.CardFooter>
                </CardProduct>
              ))}
          </div>
        </div>
        <div className="py-20">
          <h1 className="text-3xl font-bold mb-10">Cart</h1>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                  Product
                </th>
                <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                  Price
                </th>
                <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                  Quantity
                </th>
                <th className="border border-gray-300 py-2 px-4 bg-gray-100">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="border border-gray-300 py-2 px-4">
                        {product.title}
                      </td>
                      <td className="border border-gray-300 py-2 px-4">
                        ${" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="border border-gray-300 py-2 px-4">
                        {item.qty}
                      </td>
                      <td className="border border-gray-300 py-2 px-4">
                        ${" "}
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="border border-gray-300 py-2 px-4">
                  <b>Total Price</b>
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  <b>
                    ${" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* End product section */}
    </div>
  );
}
