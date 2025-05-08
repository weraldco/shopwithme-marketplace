import { useProductStore } from "@/store/productStore";
import { useState } from "react";
import ContentWrapper from "../ContentWrapper";
import ResponsiveContainer from "../Layout/ResponsiveContainer";
import LoadMoreButton from "../LoadMoreButton";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProductStore();
  const [numberProduct, setNumberProduct] = useState(30);

  if (!products) return <div>Loading...</div>;

  const handleClick = () => {
    setNumberProduct((number) => number + 30);
  };
  return (
    <ContentWrapper title="All Products">
      <ResponsiveContainer>
        {products.slice(0, numberProduct).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ResponsiveContainer>

      <LoadMoreButton handleClick={handleClick} />
    </ContentWrapper>
  );
};

export default ProductList;
