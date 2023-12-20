import {StarIcon} from "@heroicons/react/20/solid";

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

  // More products...
];

export default function HomePage() {
  return (
    <div className="px-6 py-14 lg:px-8">
      {/* Start Hero secttion */}
      <div className="py-60 mx-auto max-w-2xl max-[400px]:py-32 sm:py-48 lg:py-60">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Shop more easily, quickly, securely and best-selling transactions
            here.{" "}
            <a href="#" className="font-semibold text-blue-800">
              <span className="absolute inset-0" aria-hidden="true" />
              Shop now<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 max-[400px]:text-3xl sm:text-5xl lg:text-6xl">
            Shop for goods easily
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-500 max-[400px]:text-base">
            Find the convenience of shopping for your favorite items quickly and
            safely in our online shop. An easy, practical and satisfying
            shopping experience only here!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* End Hero secttion */}

      {/* Start product section */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-600 max-[400px]:text-lg md:text-2xl lg:text-3xl">
          Our product choices for you
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-md rounded-md overflow-hidden px-5 py-10"
            >
              <div className="aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 flex items-center justify-center py-5 lg:h-96">
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

      {/* Start banner */}
      <div className="mx-auto max-w-2xl px-4 mt-32 mb-32 bg-gray-100 rounded-md sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center gap-16 justify-center text-center py-16">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl tracking-wide text-gray-800 max-[400px]:text-lg md:text-2xl lg:text-3xl">
              Get Exclusive Offer On Your Email
            </h4>
            <p className="font-medium text-sm text-gray-500 max-[400px]:text-xs lg:text-base">
              Subscribe to our newsletter and stay update
            </p>
          </div>
          <div className="flex items-center overflow-hidden rounded-md">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full border-0 text-sm px-5 py-2 text-gray-800 sm:leading-6 outline-none lg:py-4 lg:text-base"
              placeholder="Input your email"
            />
            <button className="block border-0 px-3 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-500 lg:px-8 lg:py-4 lg:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* End Banner */}
    </div>
  );
}
