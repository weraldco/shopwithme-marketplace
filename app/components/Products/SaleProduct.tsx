import { ProductType } from "@/utils/types";
import { FC } from "react";
import ContentWrapper from "../ContentWrapper";
import ResponsiveContainer from "../Layout/ResponsiveContainer";
import ProductCard from "./ProductCard";

interface Props {
  data: ProductType[];
}

const SaleProduct: FC<Props> = ({ data }) => {
  return (
    <ContentWrapper
      title="Speacial Deals"
      isActiveLink
      link="/sale"
      linkTitle="All Special Deals"
    >
      <ResponsiveContainer>
        {data.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ResponsiveContainer>
    </ContentWrapper>
  );
};

export default SaleProduct;
