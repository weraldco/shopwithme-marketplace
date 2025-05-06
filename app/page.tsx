"use client";

import { useProductStore } from "@/store/productStore";
import ProductCard from "./components/Products/ProductCard";

const Home = () => {
  const { products } = useProductStore();
  if (!products) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 bg-white px-4 md:grid-cols-3 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
