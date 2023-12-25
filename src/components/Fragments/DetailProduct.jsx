import {StarIcon} from "@heroicons/react/20/solid";
import {HeartIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDetailProduct} from "../../services/products.service";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);

  return (
    <div className="py-20 max-[400px]:py-10 sm:py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Image */}
          <div className="bg-white mx-auto max-w-xs py-5 flex items-center max-[400px]:max-w-[12rem] sm:max-w-sm md:max-w-xs">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* Detail */}
          <div className="flex flex-col gap-6 lg:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl tracking-wide truncate text-gray-700 max-[400px]:text-lg">
                {/* Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops */}
                {id}
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-1">
                    <h5 className="text-base font-medium tracking-wide text-gray-600 max-[400px]:text-sm">
                      4.9
                    </h5>
                    <StarIcon className="h-5 w-5 text-orange-500 max-[400px]:h-4 max-[400px]:w-4" />
                  </div>
                  <p className="text-base font-medium tracking-wide text-gray-600 max-[400px]:text-sm">
                    (500)
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="text-base font-medium tracking-wide text-gray-600 max-[400px]:text-sm">
                    Favorit
                  </p>
                  <HeartIcon className="h-5 w-5 text-gray-600 max-[400px]:h-4 max-[400px]:w-4" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-bold tracking-wide text-gray-900 max-[400px]:text-xl">
                $109.95
              </h4>
            </div>
            <div>
              <button className="block bg-blue-900 w-full py-3 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition-all ease-in-out max-[400px]:py-2 max-[400px]:text-base max-[400px]:font-medium">
                Add to cart
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-gray-600 tracking-wide max-[400px]:text-sm">
                Description:
              </p>
              <h5 className="text-base font-medium text-gray-700 tracking-wide max-[400px]:text-sm">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
