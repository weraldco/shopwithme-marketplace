import { CategoryType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  data: CategoryType;
}

const CategoryCard: FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/search?q=${data.slug.toLowerCase()}`}
      className="group flex flex-col gap-2"
    >
      <div className="max-w-lg rounded bg-neutral-100/80 p-6 duration-200 group-hover:bg-neutral-200/50 group-hover:shadow-md group-active:bg-neutral-200/90">
        <Image
          width={300}
          height={300}
          src={data.thumbnail}
          alt={data.thumbnail}
          priority
        ></Image>
      </div>
      <div className="flex items-center justify-center">{data.name}</div>
    </Link>
  );
};

export default CategoryCard;
