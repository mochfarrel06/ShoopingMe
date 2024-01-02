import {useEffect, useState} from "react";
import {Disclosure} from "@headlessui/react";
import NavbarMain from "../../Fragments/Navbar/NavbarMain";
import NavbarMobile from "../../Fragments/Navbar/NavbarMobile";
import {useTotalCart} from "../../../hooks/useTotalCart";
import useUserData from "../../../hooks/useUserData";
import useLogout from "../../../hooks/useLogout";
import {categories} from "../../../utils";

export {
  useEffect,
  useState,
  Disclosure,
  NavbarMain,
  NavbarMobile,
  useTotalCart,
  useUserData,
  useLogout,
  categories,
};
