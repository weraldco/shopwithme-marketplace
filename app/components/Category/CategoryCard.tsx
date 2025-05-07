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
      <div className="flex flex-col gap-2">
        <div className="max-w-lg rounded bg-neutral-200/50 p-6">
          <Image
            width={500}
            height={500}
            src={data.thumbnail}
            alt={data.thumbnail}
            priority
          ></Image>
        </div>
        <div className="flex items-center justify-center">{data.name}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
