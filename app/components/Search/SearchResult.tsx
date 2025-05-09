"use client";
import { useProductStore } from "@/store/productStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ContentWrapper from "../ContentWrapper";
import ResponsiveContainer from "../Layout/ResponsiveContainer";
import LoadingState from "../LoadingState";
import ProductCard from "../Products/ProductCard";

const SearchResult = () => {
  const { searchedProduct, searchProduct, products } = useProductStore();
  const query = useSearchParams();
  const q = query.get("q");

  useEffect(() => {
    searchProduct(query);
  }, [products, query, searchProduct]);

  if (q == null) return <div>Page not accessible!</div>;

  if (!searchedProduct) {
    return <LoadingState />;
  }
  return (
    <div className="flex flex-col gap-4">
      <ContentWrapper title={`Search Result: ${q}`}>
        <ResponsiveContainer>
          {searchedProduct.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </ResponsiveContainer>
      </ContentWrapper>
    </div>
  );
};

export default SearchResult;
