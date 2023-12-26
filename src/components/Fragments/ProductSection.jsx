import {useEffect, useState} from "react";
import CardProduct from "./CardProduct";
import {getProductsLimit} from "../../services/products.service";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getProductsLimit(4, (data) => {
          setProducts(data);
        });
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-10 max-[400px]:py-8 sm:py-14 md:py-16 lg:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-xl font-bold tracking-tight text-gray-600 max-[400px]:text-lg md:text-2xl lg:text-3xl">
          Our product choices for you
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.CardImage image={product.image} />
              <CardProduct.CardBody
                id={product.id}
                title={product.title}
                price={product.price}
                rate={product.rating.rate}
              />
              <CardProduct.CardFooter id={product.id}>
                Add To Cart
              </CardProduct.CardFooter>
            </CardProduct>
          ))}
        </div>
      </div>
    </div>
  );
}
