import axios from "axios";

// Get all product
export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get product limit
export const getProductsLimit = (limit, callback) => {
  axios
    .get(`https://fakestoreapi.com/products?limit=${limit}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Mengambil detail product
export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCategoryProducts = (category, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
