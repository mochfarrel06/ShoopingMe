import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const useTotalCart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return totalCart;
};
