import {StarIcon} from "@heroicons/react/20/solid";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../../redux/slices/cartSlice";
import {useEffect, useState} from "react";

export default function CardProduct({children}) {
  return (
    <div className="group relative border-2 border-gray-100 rounded-md overflow-hidden px-5 py-10">
      {children}
    </div>
  );
}

function CardImage({image, title}) {
  return (
    <div className="group-hover:opacity-75 overflow-hidden flex items-center bg-white justify-center h-80 max-[400px]:h-72 sm:px-10 md:px-14 lg:px-14 xl:h-60">
      <img
        src={image}
        alt={title}
        className="w-52 object-center max-[400px]:w-36"
      />
    </div>
  );
}

function CardBody({title, price, rate, id}) {
  return (
    <div className="mt-4 flex flex-col w-full gap-4">
      <div className="flex gap-10">
        <Link
          to={`/product/${id}`}
          className="text-lg font-medium truncate text-gray-700 max-[400px]:text-base"
        >
          {title}
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-gray-700 font-normal text-sm">{rate}</p>
          <StarIcon className="h-4 w-4 text-yellow-400" />
        </div>
      </div>
      <div className="">
        <p className="text-gray-700 text-xl font-semibold max-[400px]:text-lg">
          ${" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
}

function CardFooter({children, id}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const usernameString = localStorage.getItem("token");
    setUsername(usernameString);
  }, []);

  return (
    <button
      onClick={() => {
        if (username) {
          dispatch(addToCart({id, qty: 1}));
        } else {
          navigate("/login");
        }
      }}
      className="mt-10 flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm border-2 font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 max-[315px]:text-xs"
    >
      {children}
    </button>
  );
}

CardProduct.CardImage = CardImage;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;
