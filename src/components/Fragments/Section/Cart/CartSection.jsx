import {MinusIcon, PlusIcon, TrashIcon} from "@heroicons/react/20/solid";
import {useEffect, useRef, useState} from "react";
import {getAllCarts} from "../../../../services/carts.service";
import {useSelector} from "react-redux";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../../../context/TotalPriceContext";
import {getProducts} from "../../../../services/products.service";

export default function CartSection() {
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const {total} = useTotalPrice();

  // Mengambil data products clothing dari api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // Total Cart
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "block";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  return (
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="w-full overflow-hidden">
          <h1 className="font-semibold text-2xl text-gray-800 tracking-wide max-[400px]:text-xl lg:text-3xl">
            Shopping Cart
          </h1>
          <div className="mt-10 lg:flex lg:justify-between">
            {/* Product cart */}
            <div className="divide-y divide-gray-200 mb-10">
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <div
                      key={item.id}
                      className="flex gap-5 items-center px-2 py-4 max-[400px]:items-start lg:gap-10"
                    >
                      {/* <div className="max-[400px]:mt-10 mt-0">
                        <input
                          type="checkbox"
                          className="w-5 h-5 border-gray-500 max-[400px]:w-4 max-[400px]:h-4"
                        />
                      </div> */}
                      <div className="flex gap-5 w-full overflow-hidden justify-between max-[400px]:gap-3 max-[400px]:flex-col max-[400px]:items-center max-[400px]:justify-center lg:gap-8 lg:max-w-md">
                        <div className="h-full w-16 flex-shrink-0 overflow-hidden max-[400px]:w-28 lg:w-24">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-col gap-4 overflow-hidden w-full">
                          <h4 className="text-sm font-medium text-gray-700 truncate max-[400px]:text-xs lg:text-base">
                            {product.title}
                          </h4>
                          <div className="flex flex-col gap-4">
                            <h3 className="text-base font-medium text-gray-800 max-[400px]:text-sm lg:text-lg">
                              $ {product.price}
                            </h3>
                            <div className="flex items-center gap-5 max-[400px]:gap-3">
                              <button className="py-2">
                                <TrashIcon className="w-5 h-5 text-gray-500 max-[400px]:w-4 max-[400px]:h-4" />
                              </button>
                              <div className="flex gap-4 max-[400px]:gap-2 items-center">
                                <button className="bg-gray-700 w-8 h-8 px-2 py-2 flex items-center justify-center rounded-md max-[400px]:py-1">
                                  <MinusIcon className="w-4 h-4 text-white max-[400px]:w-3 max-[400px]:h-3" />
                                </button>
                                <span className="text-gray-800 text-base py-2 items-center font-medium max-[400px]:text-sm max-[400px]:py-1">
                                  {item.qty}
                                </span>
                                <button className="bg-gray-700 w-8 h-8 px-2 py-2 flex items-center justify-center rounded-md max-[400px]:py-1">
                                  <PlusIcon className="w-4 h-4 text-white text-base max-[400px]:w-3 max-[400px]:h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* End product cart */}

            {/* Total price */}
            <div className="border-t py-5 flex flex-col gap-8 lg:w-96 lg:border-none lg:py-0">
              <h3 className="font-semibold text-lg tracking-wide text-gray-700 max-[400px]:text-base">
                Total Belanja
              </h3>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-normal text-gray-500 tracking-wide max-[400px]:text-xs">
                    Total harga ({totalCart} barang)
                  </h5>
                  <p className="text-sm font-normal text-gray-500 tracking-wide max-[400px]:text-xs">
                    ${total}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="text-base font-medium text-gray-700 tracking-wide max-[400px]:text-sm">
                    Total harga
                  </h4>
                  <p className="text-base font-medium text-gray-700 tracking-wide max-[400px]:text-sm">
                    ${total}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 py-5">
                <button className="block w-full py-2 bg-blue-800 rounded-md text-white text-sm font-medium hover:bg-blue-700 max-[400px]:text-xs">
                  Beli {totalCart} barang
                </button>
              </div>
            </div>
            {/* End total price */}
          </div>
        </div>
      </div>
    </div>
  );
}
