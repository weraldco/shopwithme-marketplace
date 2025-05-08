"use client";

import { useProductStore } from "@/store/productStore";
import CategoryList from "./components/Category/CategoryList";
import Hero from "./components/Hero/Hero";
import ResponsiveLayout from "./components/Layout/ResponsiveLayout";
import LoadingState from "./components/LoadingState";
import ProductList from "./components/Products/ProductList";
import SaleProduct from "./components/Products/SaleProduct";

const Home = () => {
  const { products, category } = useProductStore();
  const sale = products?.filter((product) => product.discountPercentage > 10);
  if (!products || !sale) return <LoadingState />;
  return (
    <ResponsiveLayout>
      <div className="flex flex-col gap-4">
        <Hero />
        <SaleProduct data={sale} />
        <CategoryList category={category} />
        <ProductList />
        {/*
         */}
      </div>
    </ResponsiveLayout>
  );
};

export default Home;
