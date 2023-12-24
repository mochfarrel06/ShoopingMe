import axios from "axios";

export const getMensClothing = (callback) => {
  axios
    .get("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
