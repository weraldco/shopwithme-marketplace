import { ProductType } from "@/utils/types";
import { FC } from "react";
import ProductCard from "./ProductCard";

interface Props {
  data: ProductType[] | null;
}

const ProductList: FC<Props> = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1 className="text-2xl">All Products</h1>
      <div className="grid grid-cols-1 place-items-center gap-4 bg-white px-4 md:grid-cols-3 xl:grid-cols-6">
        {data.slice(0, 24).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        <button className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-400/80 active:bg-blue-500/80">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProductList;
