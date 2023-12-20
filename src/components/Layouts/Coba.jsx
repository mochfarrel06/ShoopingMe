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
      <div className="mx-auto max-w-2xl py-40 sm:py-48 lg:py-56">
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Shop for goods easily
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our product choices for you
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-md rounded-md overflow-hidden px-5 py-10"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
