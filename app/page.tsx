"use client";

import { useProductStore } from "@/store/productStore";
import CategoryList from "./components/Category/CategoryList";
import ProductList from "./components/Products/ProductList";
import SaleProduct from "./components/Products/SaleProduct";

const Home = () => {
  const { products, category } = useProductStore();
  const sale = products?.filter((product) => product.discountPercentage > 15);
  if (!products || !sale) return <div>Loading...</div>;
  return (
    <div>
      <SaleProduct data={sale} />
      <CategoryList category={category} />
      <ProductList data={products} />
    </div>
  );
};

export default Home;
