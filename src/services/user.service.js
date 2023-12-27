import axios from "axios";

export const getUserId = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/users/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
