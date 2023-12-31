import {Fragment} from "react";
import CartSection from "../components/Fragments/Section/Cart/CartSection";
import MainLayouts from "../components/Layouts/MainLayouts";
import {useLogin} from "../hooks/useLogin";

export default function CartPage() {
  useLogin();
  return (
    <Fragment>
      <MainLayouts>
        <CartSection />
      </MainLayouts>
    </Fragment>
  );
}
