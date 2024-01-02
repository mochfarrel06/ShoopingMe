import {Fragment, useEffect, useState} from "react";
import CategorySection from "../components/Fragments/Category/CategorySection";
import MainLayouts from "../components/Layouts/MainLayouts";
import {useParams} from "react-router-dom";
import {getCategoryProducts} from "../services/products.service";
import CardProduct from "../components/Fragments/Product/Card/CardProduct";

export default function CategoryPage() {
  const [categoryData, setCategoryData] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    getCategoryProducts(category, (data) => {
      setCategoryData(data);
    });
  }, [category]);

  return (
    <Fragment>
      <MainLayouts>
        <CategorySection category={category} categoryData={categoryData}>
          {categoryData.length > 0 &&
            categoryData.map((product) => (
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
        </CategorySection>
      </MainLayouts>
    </Fragment>
  );
}
