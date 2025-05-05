"use client";
import { useCartStore } from "@/store/cartStore";
import LabelIdentifier from "../LabelIdentifier";

const Checkout = () => {
  const { checkout } = useCartStore();
  const subTotal = checkout?.reduce(
    (total, curr) => total + curr.product.price * curr.quantity,
    0,
  );
  const totalDiscount = checkout?.reduce(
    (total, curr) =>
      total +
      (curr.product.discountPercentage / 100) *
        curr.product.price *
        curr.quantity,
    0,
  );
  const discountedTotalPrice = checkout?.reduce(
    (total, curr) =>
      total +
      ((curr.product.discountPercentage / 100) * curr.product.price -
        curr.product.price) *
        curr.quantity,
    0,
  );

  const shippingFee = discountedTotalPrice
    ? (discountedTotalPrice * 7) / 100
    : 0;
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex flex-col gap-3">
          <div className="text-xl">Order Summary</div>
          <div>
            <LabelIdentifier
              title="Subtotal"
              content={subTotal}
              titleClass="text-sm"
            />
            <LabelIdentifier
              title="Discount:"
              content={totalDiscount}
              titleClass="text-sm"
            />
            <LabelIdentifier
              title="Shipping Fee:"
              content={shippingFee}
              titleClass="text-sm"
            />
          </div>
          <hr />
          <div className="">
            <LabelIdentifier
              className="font-semibold"
              title="Total"
              content={discountedTotalPrice}
            />
          </div>
        </div>

        <button className="w-full rounded bg-blue-500 py-2 font-bold text-white duration-200 hover:bg-blue-500/90 active:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  );
};

export default Checkout;
