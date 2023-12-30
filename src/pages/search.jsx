import {useLocation} from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import SearchSection from "../components/Fragments/SearchSection";
import {useEffect, useState} from "react";
import {getProducts} from "../services/products.service";
import CardProduct from "../components/Fragments/CardProduct";
import ProductNotFound from "../components/Fragments/ProductNotFound";
import "react-loading-skeleton/dist/skeleton.css";
import ProductLoading from "../components/Fragments/ProductLoading";

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    setIsLoading(true);
    getProducts((data) => {
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      setProducts(filteredProducts);
      setIsLoading(false);
    });
  }, [searchQuery]);

  return (
    <MainLayouts>
      <SearchSection>
        <SearchSection.Header searchQuery={searchQuery} products={products} />
        <SearchSection.Body products={products}>
          {isLoading ? (
            <ProductLoading productCount={20} />
          ) : products.length > 0 ? (
            products.map((product) => (
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
            ))
          ) : (
            <ProductNotFound>
              <ProductNotFound.Header />
              <ProductNotFound.Footer
                title={"Oops! Product not found"}
                description={"Try searching with different keywords."}
              />
            </ProductNotFound>
          )}
        </SearchSection.Body>
      </SearchSection>
    </MainLayouts>
  );
}
