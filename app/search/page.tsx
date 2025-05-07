"use client";
import { useProductStore } from "@/store/productStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ContentWrapper from "../components/ContentWrapper";
import ResponsiveLayout from "../components/Layout/ResponsiveLayout";
import ProductCard from "../components/Products/ProductCard";

const SearchPage = () => {
  const { searchedProduct, searchProduct, products, fetchMoreProducts } =
    useProductStore();
  const query = useSearchParams();
  const q = query.get("q");

  useEffect(() => {
    fetchMoreProducts(0);
  }, [fetchMoreProducts]);

  useEffect(() => {
    searchProduct(query);
  }, [products, query, searchProduct]);

  if (q == null) return <div>Page not accessible!</div>;

  if (!searchedProduct) {
    return <div>Loading...</div>;
  }
  return (
    <ResponsiveLayout>
      <ContentWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">Search result: {q}</h1>
          <div className="grid grid-cols-6 gap-4">
            {searchedProduct.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </ResponsiveLayout>
  );
};

export default SearchPage;
