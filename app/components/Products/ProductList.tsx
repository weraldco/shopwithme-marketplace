import { useProductStore } from "@/store/productStore";
import { useState } from "react";
import ContentWrapper from "../ContentWrapper";
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.slice(0, numberProduct).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <LoadMoreButton handleClick={handleClick} />
    </ContentWrapper>
  );
};

export default ProductList;
