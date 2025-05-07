import { CategoryType } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  data: CategoryType;
}

const CategoryCard: FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="flex rounded bg-neutral-100 p-2">
        <Image
          src={data.thumbnail}
          width={140}
          height={140}
          alt={data.thumbnail}
          priority
        />
      </div>
      <div className="flex items-center justify-center">{data.name}</div>
    </div>
  );
};

export default CategoryCard;
