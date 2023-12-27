import {useEffect, useState} from "react";
import BannerSection from "../components/Fragments/BannerSection";
import HeroSection from "../components/Fragments/HeroSection";
import ProductSection from "../components/Fragments/ProductSection";
import MainLayouts from "../components/Layouts/MainLayouts";
import {getProductsLimit} from "../services/products.service";
import CardProduct from "../components/Fragments/CardProduct";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getProductsLimit(4, (data) => {
          setProducts(data);
        });
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MainLayouts>
        <HeroSection>
          <HeroSection.Header
            btnTitle="Shop now"
            description="Shop more easily, quickly, securely and best-selling transactions here."
          />
          <HeroSection.Body
            title={"Shop for goods easily"}
            description={
              "Find the convenience of shopping for your favorite items quickly andsafely in our online shop. An easy, practical and satisfying shopping experience only here!"
            }
          />
          <HeroSection.Footer />
        </HeroSection>
        <ProductSection title={"Our product choices for you"}>
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.CardImage image={product.image} />
              <CardProduct.CardBody
                id={product.id}
                title={product.title}
                price={product.price}
                rate={product.rating.rate}
              />
              <CardProduct.CardFooter id={product.id}>
                Add To Cart
              </CardProduct.CardFooter>
            </CardProduct>
          ))}
        </ProductSection>
        <BannerSection />
      </MainLayouts>
    </>
  );
}
