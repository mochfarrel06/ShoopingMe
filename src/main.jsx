import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/home.jsx";
import ErrorPage from "./pages/404.jsx";
import CartPage from "./pages/cart.jsx";
import ElectronicsPage from "./pages/electronics.jsx";
import JeweleryPage from "./pages/jewelery.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ManPage from "./pages/man-clothing.jsx";
import WomanPage from "./pages/woman-clothing.jsx";

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
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/man-clothing",
    element: <ManPage />,
  },
  {
    path: "/woman-clothing",
    element: <WomanPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/electronics",
    element: <ElectronicsPage />,
  },
  {
    path: "/jewelery",
    element: <JeweleryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
