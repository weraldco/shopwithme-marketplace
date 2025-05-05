"use client";
import { useCartStore } from "@/store/cartStore";
import { getDiscount } from "@/utils/helper";
import { CartType } from "@/utils/types";
import Image from "next/image";
import { FC, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import ModalPrompt from "../Modal/ModalPrompt";
import Price from "../Products/Price";
import QuantityButton from "../QuantityButton";
interface Props {
  data: CartType;
}

const CartItem: FC<Props> = ({ data }) => {
  const { removeToCart } = useCartStore();
  const [isCheck, setIsCheck] = useState(false);
  const { product, quantity } = data;
  const [currQuantity, setCurrentQuantity] = useState(quantity);

  const handleIncrementQuantity = () => {
    setCurrentQuantity((currQuantity) =>
      currQuantity < product.stock ? currQuantity + 1 : product.stock,
    );
  };

  const handleDecrementQuantity = () => {
    setCurrentQuantity((currQuantity) =>
      currQuantity == 1 ? 1 : currQuantity - 1,
    );
  };

  const handleCheckToggle = () => {
    setIsCheck((prev) => !prev);
  };
  return (
    <div className="flex w-full gap-4 bg-white px-4">
      <div className="flex w-full flex-row items-center gap-4">
        <div className="h-4 w-4">
          <input
            type="checkbox"
            name=""
            id=""
            checked={isCheck}
            onChange={handleCheckToggle}
          />
        </div>
        <div className="h-[120px] w-[120px] rounded-lg p-2">
          <Image
            src={product.thumbnail}
            alt={product.thumbnail}
            height={200}
            width={200}
            priority
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <div>{product.title}</div>
          <Price
            price={product.price}
            discountPercentage={product.discountPercentage}
            className="text-base"
            priceOffClassname="text-xs"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        $
        {(
          currQuantity *
          (product.price -
            getDiscount(product.price, product.discountPercentage))
        ).toFixed(2)}
        <QuantityButton
          quantity={currQuantity}
          increment={handleIncrementQuantity}
          decrement={handleDecrementQuantity}
        />
      </div>
      {/* Delete Prompter */}
      <div className="flex items-center justify-end">
        <ModalPrompt deleteCart={() => removeToCart(data.product.id)}>
          <IoTrashOutline size={20} />
        </ModalPrompt>
      </div>
    </div>
  );
};

export default CartItem;
