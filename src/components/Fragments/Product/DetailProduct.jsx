import {StarIcon} from "@heroicons/react/20/solid";
import {HeartIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/slices/cartSlice";

export default function DetailProduct({product, children}) {
  return (
    <div className="py-20 max-[400px]:py-10 sm:py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {Object.keys(product).length > 0 && (
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function Header({product}) {
  return (
    <div className="w-full py-10 bg-white border-2 border-gray-300 border-opacity-45 rounded-md flex items-center justify-center sm:py-16 md:py-20 lg:w-[40%]">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-60 object-center max-[400px]:w-40 sm:w-64 md:w-72 lg:w-60"
      />
    </div>
  );
}

function Footer({product}) {
  const id = product.id;
  const dispatch = useDispatch();
  const [username, setUsername] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const usernameString = localStorage.getItem("token");
    setUsername(usernameString);
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-12 lg:w-[60%]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl tracking-wide truncate text-gray-700 max-[400px]:text-lg">
          {product.title}
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <h5 className="text-base font-medium tracking-wide text-gray-600 max-[400px]:text-sm">
                {product.rating.rate}
              </h5>
              <StarIcon className="h-5 w-5 text-orange-500 max-[400px]:h-4 max-[400px]:w-4" />
            </div>
            <p className="text-base font-medium tracking-wide text-gray-600 max-[400px]:text-sm">
              ({product.rating.count})
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
          $ {product.price}
        </h4>
      </div>
      <div>
        <button
          onClick={() => {
            if (username) {
              dispatch(addToCart({id, qty: 1}));
            } else {
              navigate("/login");
            }
          }}
          className="block bg-blue-900 w-full py-3 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition-all ease-in-out max-[400px]:py-2 max-[400px]:text-base max-[400px]:font-medium"
        >
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-base font-medium text-gray-600 tracking-wide max-[400px]:text-sm">
          Description:
        </p>
        <h5 className="text-base font-medium text-gray-700 tracking-wide max-[400px]:text-sm">
          {product.description}
        </h5>
      </div>
    </div>
  );
}

DetailProduct.Header = Header;
DetailProduct.Footer = Footer;
