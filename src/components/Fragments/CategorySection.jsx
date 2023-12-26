import {Fragment, useEffect, useRef, useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import CardProduct from "./CardProduct";
import {
  getCategoryProducts,
  getProducts,
} from "../../services/products.service";
import TableCart from "./TableCart";
import {useParams} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategorySection() {
  const {category} = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategoryProducts(category, (data) => {
      setCategoryData(data);
    });
  }, [category]);

  return (
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      {/* Start product section */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div>
          <div className="flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start max-[400px]:gap-5">
            <h2 className="text-base font-medium tracking-wide text-gray-700 max-[400px]:text-sm lg:text-xl">
              {category} products
            </h2>
            <p className="text-sm font-medium text-gray-500 tracking-wide">
              Showing products {categoryData.length}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {categoryData.length > 0 &&
              categoryData.map((product) => (
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
      {/* End product section */}
    </div>
  );
}
