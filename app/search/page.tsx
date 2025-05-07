"use client";
import { useProductStore } from "@/store/productStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
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
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Search result: {q}</h1>
      <div className="grid grid-cols-6 gap-4">
        {searchedProduct.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
