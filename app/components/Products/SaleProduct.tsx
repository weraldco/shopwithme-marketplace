import { ProductType } from "@/utils/types";
import { FC } from "react";
import ProductCard from "./ProductCard";

interface Props {
  data: ProductType[];
}

const SaleProduct: FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl">Speacial Deals</h1>
      <div className="grid grid-cols-1 place-items-center gap-4 bg-white px-4 md:grid-cols-3 xl:grid-cols-6">
        {data.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SaleProduct;
