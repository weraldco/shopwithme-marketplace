import { CategoryType } from "@/utils/types";
import { FC } from "react";
import ContentWrapper from "../ContentWrapper";
import CategoryCard from "./CategoryCard";

interface Props {
  category: CategoryType[] | null;
}

const CategoryList: FC<Props> = ({ category }) => {
  if (!category) return <div>Loading..</div>;
  return (
    <ContentWrapper title="Categories">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {category.slice(0, 12).map((cat, i) => (
          <CategoryCard data={cat} key={i} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default CategoryList;
