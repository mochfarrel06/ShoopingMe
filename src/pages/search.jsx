import {useLocation, useParams} from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import SearchSection from "../components/Fragments/SearchSection";
import {useEffect, useState} from "react";
import {getProducts} from "../services/products.service";
import CardProduct from "../components/Fragments/CardProduct";
import ProductNotFound from "../components/Fragments/ProductNotFound";

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    getProducts((data) => {
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      setProducts(filteredProducts);
    });
  }, [searchQuery]);

  return (
    <MainLayouts>
      <SearchSection searchQuery={searchQuery} products={products}>
        {products.length > 0 ? (
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
      </SearchSection>
    </MainLayouts>
  );
}
