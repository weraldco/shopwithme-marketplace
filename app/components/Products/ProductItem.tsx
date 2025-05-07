import { useCartStore } from "@/store/cartStore";
import { ProductType } from "@/utils/types";
import Image from "next/image";
import { FC, useState } from "react";
import ContentWrapper from "../ContentWrapper";
import ResponsiveLayout from "../Layout/ResponsiveLayout";
import QuantityButton from "../QuantityButton";
import Price from "./Price";
import Rating from "./Rating";
import ReviewContainer from "./ReviewContainer";

interface Props {
  product: ProductType;
}

const ProductItem: FC<Props> = ({ product }) => {
  const { addToCart } = useCartStore();
  const {
    title,
    description,
    rating,
    reviews,
    price,
    discountPercentage,
    images,
    brand,
    shippingInformation,
    returnPolicy,
    warrantyInformation,
    stock,
  } = product;
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setQuantity((quantity) => (quantity < stock ? quantity + 1 : stock));
  };

  const handleDecrementQuantity = () => {
    setQuantity((quantity) => (quantity == 1 ? 1 : quantity - 1));
  };
  return (
    <ResponsiveLayout>
      <div className="flex flex-col gap-4">
        <ContentWrapper>
          <div className="flex w-full gap-4">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div className="rounded-lg bg-neutral-100">
                <Image
                  src={images[imageIndex]}
                  height={500}
                  width={500}
                  alt={title}
                  priority
                />
              </div>
              <div className="flex gap-4">
                {images.map((image, i) => (
                  <Image
                    key={i}
                    src={image}
                    height={100}
                    width={100}
                    alt={title}
                    priority
                    onClick={() => setImageIndex(i)}
                    className="rounded-lg bg-neutral-100 duration-200 hover:bg-neutral-100/50 active:bg-neutral-200/50"
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <div className="text-xl font-bold">{title}</div>
              <div>
                <Rating rating={rating} reviews={reviews} />
                {brand && <>Brand: {brand}</>}
                <Price
                  price={price}
                  discountPercentage={discountPercentage}
                  dollarClass="text-2xl"
                  priceClass="font-bold text-4xl text-red-400"
                  priceOffClassname="text-sm"
                />
              </div>
              <div>{description}</div>
              <div>
                <OptionTable
                  title="Delivery Option:"
                  content={shippingInformation}
                />
                <OptionTable
                  title="Return and Warranty:"
                  content={`${returnPolicy} | ${warrantyInformation}`}
                />
              </div>
              <div className="flex items-center gap-2">
                Quantity:
                <QuantityButton
                  quantity={quantity}
                  increment={handleIncrementQuantity}
                  decrement={handleDecrementQuantity}
                />
                <div className="text-sm text-neutral-400 italic">
                  {stock} pcs left
                </div>
              </div>
              <div className="flex gap-4">
                <button className="w-full rounded-lg bg-red-400 px-4 py-2 font-bold text-white">
                  Buy Now
                </button>
                <button
                  className="w-full rounded-lg border border-red-400 px-4 py-2 font-bold text-red-400"
                  onClick={() =>
                    addToCart({ product: product, quantity: quantity })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper title="Reviews">
          <div className="flex flex-col gap-4">
            {product.reviews.map((review, i) => (
              <ReviewContainer key={i} data={review} />
            ))}
          </div>
        </ContentWrapper>
      </div>
    </ResponsiveLayout>
  );
};

export default ProductItem;

const OptionTable = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex w-full items-center text-[0.95em]">
      <span className="w-[20%]">{title}</span>
      <span className="w-full"> {content}</span>
    </div>
  );
};
