"use client";
import LoadingState from "@/app/components/LoadingState";
import ProductItem from "@/app/components/Products/ProductItem";
import { useProductStore } from "@/store/productStore";
import { FC, use, useEffect } from "react";

interface Props {
  params: Promise<{ id: number }>;
}

const Product: FC<Props> = ({ params }) => {
  const { id } = use(params);
  const { product, fetchSingleProduct } = useProductStore();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id, fetchSingleProduct]);
  if (!product) return <LoadingState />;

  return (
    <div>
      <ProductItem product={product} />
    </div>
  );
};

export default Product;
