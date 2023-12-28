import CartSection from "../components/Fragments/CartSection";
import MainLayouts from "../components/Layouts/MainLayouts";
import {useLogin} from "../hooks/useLogin";

export default function CartPage() {
  useLogin();
  return (
    <>
      <MainLayouts>
        <CartSection />
      </MainLayouts>
    </>
  );
}
