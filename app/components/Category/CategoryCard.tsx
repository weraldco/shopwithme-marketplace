import { CategoryType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  data: CategoryType;
}

const CategoryCard: FC<Props> = ({ data }) => {
  return (
    <Link href={`/search?q=${data.slug.toLowerCase()}`}>
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
    </Link>
  );
};

export default CategoryCard;
