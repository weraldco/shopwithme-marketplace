"use client";
import { useProductStore } from "@/store/productStore";
import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import ResponsiveLayout from "../components/Layout/ResponsiveLayout";
import LoadingState from "../components/LoadingState";
import LoadMoreButton from "../components/LoadMoreButton";
import ProductCard from "../components/Products/ProductCard";

const SaleSection = () => {
  const { products } = useProductStore();
  const [productCount, setProductCount] = useState(30);

  const saleProducts = products?.filter(
    (product) => product.discountPercentage > 10,
  );

  const handleClick = () => {
    setProductCount((count) => count + 30);
  };
  if (!saleProducts) return <LoadingState />;
  return (
    <ResponsiveLayout>
      <ContentWrapper title="All Sales Product">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {saleProducts
            ?.slice(0, productCount)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        {saleProducts?.length > productCount && (
          <LoadMoreButton handleClick={handleClick} />
        )}
      </ContentWrapper>
    </ResponsiveLayout>
  );
};

export default SaleSection;
