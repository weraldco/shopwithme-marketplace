"use client";
import { useProductStore } from "@/store/productStore";
import CategoryCard from "../components/Category/CategoryCard";
import ContentWrapper from "../components/ContentWrapper";
import ResponsiveLayout from "../components/Layout/ResponsiveLayout";

const CategorySection = () => {
  const { category } = useProductStore();
  console.log(category);
  if (!category) return <div>Loading..</div>;
  return (
    <ResponsiveLayout>
      <ContentWrapper title="All Categories">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-6 gap-4">
            {category.map((cat, i) => (
              <CategoryCard data={cat} key={i} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </ResponsiveLayout>
  );
};

export default CategorySection;
