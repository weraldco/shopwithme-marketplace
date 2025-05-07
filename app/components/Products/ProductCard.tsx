// Product Card
import { getDiscount } from "@/utils/helper";
import { ProductType } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Rating from "./Rating";

const interFont = Inter({ weight: "400", subsets: ["latin"] });

interface Props {
  product: ProductType;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { id, title, thumbnail, rating, reviews, price, discountPercentage } =
    product;

  return (
    <Link
      href={`/product/${id}`}
      className="group flex flex-1 flex-col gap-4 rounded pb-2"
    >
      {/* Product title */}

      <div className="max-w-lg rounded bg-neutral-100/80 p-2 duration-200 group-hover:bg-neutral-200/50 group-hover:shadow-md group-active:bg-neutral-200/90">
        <Image
          width={200}
          height={200}
          src={thumbnail}
          alt={title}
          priority
        ></Image>
      </div>
      <div className={`flex w-full flex-col gap-2 ${interFont.className}`}>
        <div className={`w-full truncate font-semibold`}>{title}</div>
        <Rating rating={rating} reviews={reviews} />
        <div className="flex items-center justify-between gap-2">
          <div className="font-bold">
            ${(price - getDiscount(price, discountPercentage)).toFixed(2)}
          </div>
          {Math.round(discountPercentage) !== 0 && (
            <>
              <span className="text-sm text-neutral-500 line-through">
                ${price}
              </span>
              <div className="bg-orange-200 px-2 py-1 text-[0.8em] text-orange-400">
                {Math.round(discountPercentage)}% Off
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
