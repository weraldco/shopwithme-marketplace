import { useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";
import ContentWrapper from "../ContentWrapper";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, fetchMoreProducts } = useProductStore();
  const [numberProduct, setNumberProduct] = useState(30);

  useEffect(() => {
    fetchMoreProducts(numberProduct);
  }, [fetchMoreProducts, numberProduct]);

  if (!products) return <div>Loading...</div>;

  const handleClick = () => {
    setNumberProduct((number) => number + 30);
  };
  return (
    <ContentWrapper title="All Products">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-400/80 active:bg-blue-500/80"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    </ContentWrapper>
  );
};

export default ProductList;
