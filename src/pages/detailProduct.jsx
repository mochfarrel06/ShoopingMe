import {useEffect, useState} from "react";
import DetailProduct from "../components/Fragments/Product/DetailProduct";
import Footer from "../components/Layouts/Footer";
import MainLayouts from "../components/Layouts/MainLayouts";
import Navbar from "../components/Layouts/Navbar/Navbar";
import {useParams} from "react-router-dom";
import {getDetailProduct} from "../services/products.service";

export default function DetailProductPage() {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <MainLayouts>
        <DetailProduct product={product}>
          <DetailProduct.Header product={product} />
          <DetailProduct.Footer product={product} />
        </DetailProduct>
      </MainLayouts>
    </>
  );
}
