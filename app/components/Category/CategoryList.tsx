import { CategoryType } from "@/utils/types";
import { FC } from "react";
import CategoryCard from "./CategoryCard";

interface Props {
  category: CategoryType[] | null;
}

const CategoryList: FC<Props> = ({ category }) => {
  if (!category) return <div>Loading..</div>;
  return (
    <div>
      <h1 className="text-2xl">All Categories</h1>
      <div className="grid grid-cols-1 place-items-center gap-4 bg-white px-4 md:grid-cols-3 xl:grid-cols-6">
        {category.slice(0, 12).map((cat, i) => (
          <CategoryCard data={cat} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
