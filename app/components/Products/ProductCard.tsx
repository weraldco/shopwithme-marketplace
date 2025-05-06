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
    <Link href={`/product/${id}`} className="flex h-94 flex-1 flex-col gap-4">
      {/* Product title */}

      <div className="max-w-lg bg-neutral-100/80 p-6">
        <Image
          width={500}
          height={500}
          src={thumbnail}
          alt={title}
          priority
        ></Image>
      </div>
      <div className={`flex w-full flex-col gap-2 ${interFont.className}`}>
        <div className={`w-[220px] truncate font-semibold`}>{title}</div>
        <Rating rating={rating} reviews={reviews} />
        <div className="flex items-center gap-2">
          <div className="font-bold">
            ${(price - getDiscount(price, discountPercentage)).toFixed(2)}
          </div>
          {Math.round(discountPercentage) !== 0 && (
            <>
              <span className="text-neutral-500 line-through">${price}</span>
              <div className="bg-orange-200 px-2 py-1 text-sm text-orange-400">
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
