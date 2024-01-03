import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/home.jsx";
import ErrorPage from "./pages/404.jsx";
import CartPage from "./pages/cart.jsx";
import LoginPage from "./pages/login.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import ProductsPage from "./pages/products.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import {TotalPriceProvider} from "./context/TotalPriceContext.jsx";
import CategoryPage from "./pages/category.jsx";
import ProfilePage from "./pages/profile.jsx";
import {CartCobaPage} from "./pages/cartcoba.jsx";
import SearchPage from "./pages/search.jsx";
import CartSuccessPage from "./pages/cartsuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/category/:category",
    element: <CategoryPage />,
  },
  {
    path: "/carts",
    element: <CartPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/cartcoba",
    element: <CartCobaPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/cartsuccess",
    element: <CartSuccessPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
