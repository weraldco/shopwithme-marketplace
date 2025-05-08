"use client";
import { useProductStore } from "@/store/productStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ContentWrapper from "../components/ContentWrapper";
import ResponsiveContainer from "../components/Layout/ResponsiveContainer";
import ResponsiveLayout from "../components/Layout/ResponsiveLayout";
import LoadingState from "../components/LoadingState";
import ProductCard from "../components/Products/ProductCard";

const SearchPage = () => {
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
    <ResponsiveLayout>
      <ContentWrapper title={`Search Result: ${q}`}>
        <div className="flex flex-col gap-4">
          <ResponsiveContainer>
            {searchedProduct.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </ResponsiveContainer>
        </div>
      </ContentWrapper>
    </ResponsiveLayout>
  );
};

export default SearchPage;
