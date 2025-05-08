import { CategoryType } from "@/utils/types";
import { FC } from "react";
import ContentWrapper from "../ContentWrapper";
import ResponsiveContainer from "../Layout/ResponsiveContainer";
import CategoryCard from "./CategoryCard";

interface Props {
  category: CategoryType[] | null;
}

const CategoryList: FC<Props> = ({ category }) => {
  if (!category) return <div>Loading..</div>;
  return (
    <ContentWrapper
      title="Categories"
      isActiveLink
      link="/category"
      linkTitle="All categories"
    >
      <ResponsiveContainer>
        {category.slice(0, 12).map((cat, i) => (
          <CategoryCard data={cat} key={i} />
        ))}
      </ResponsiveContainer>
    </ContentWrapper>
  );
};

export default CategoryList;
