import { ProductType } from "@/utils/types";
import { FC } from "react";
import ContentWrapper from "../ContentWrapper";
import ProductCard from "./ProductCard";

interface Props {
  data: ProductType[];
}

const SaleProduct: FC<Props> = ({ data }) => {
  return (
    <ContentWrapper title="Speacial Deals">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default SaleProduct;
