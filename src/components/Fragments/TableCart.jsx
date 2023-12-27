import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";
import {getProducts} from "../../services/products.service";

export default function TableCart() {
  const cart = useSelector((state) => state.cart.data);
  const [products, setProducts] = useState([]);
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

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
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
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td className="border border-gray-300 py-2 px-4">
                  {product.title}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="border border-gray-300 py-2 px-4">{item.qty}</td>
                <td className="border border-gray-300 py-2 px-4">
                  ${" "}
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3} className="border border-gray-300 py-2 px-4">
            <b>Total Price</b>
          </td>
          <td className="border border-gray-300 py-2 px-4">
            <b>
              ${" "}
              {total.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
