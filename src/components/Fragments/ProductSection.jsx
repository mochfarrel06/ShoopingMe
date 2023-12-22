import CardProduct from "./CardProduct";

const products = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
    rating: "4.9",
  },

  {
    id: 2,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
    rating: "4.9",
  },
  {
    id: 3,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
    rating: "4.9",
  },
  {
    id: 4,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    href: "#",
    imageSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    color: "Black",
    rating: "4.9",
  },

  // More products...
];

export default function ProductSection() {
  return (
    <div className="py-60 max-[400px]:py-36 lg:py-64">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-xl font-bold tracking-tight text-gray-600 max-[400px]:text-lg md:text-2xl lg:text-3xl">
          Our product choices for you
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.CardImage
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
              />
              <CardProduct.CardBody
                name={product.name}
                price={product.price}
                rating={product.rating}
                btnTitle={"Add to Cart"}
              />
            </CardProduct>
          ))}
        </div>
      </div>
    </div>
  );
}
