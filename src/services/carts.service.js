import axios from "axios";

export const getAllCarts = (callback) => {
  axios
    .get("https://fakestoreapi.com/carts")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
