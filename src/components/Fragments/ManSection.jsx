import {Fragment, useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import CardProduct from "./CardProduct";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
];

export default function ManSection() {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? {...item, qty: item.qty + 1} : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

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
            {products.map((product) => (
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
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td className="border border-gray-300 py-2 px-4">
                      {product.title}
                    </td>
                    <td className="border border-gray-300 py-2 px-4">
                      {product.price}
                    </td>
                    <td className="border border-gray-300 py-2 px-4">
                      {item.qty}
                    </td>
                    <td className="border border-gray-300 py-2 px-4">
                      {product.price * item.qty}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* End product section */}
    </div>
  );
}
