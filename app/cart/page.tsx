"use client";
import { useCartStore } from "@/store/cartStore";
import CartItem from "../components/Cart/CartItem";
import Checkout from "../components/Cart/Checkout";

const Cart = () => {
  const { cart } = useCartStore();

  console.log(cart);
  if (!cart) return <div>Loading...</div>;
  return (
    <div className="grid w-full max-w-6xl grid-cols-3 justify-center gap-4">
      <div className="col-span-2 flex flex-col gap-4">
        {cart.map((item, i) => (
          <CartItem key={i} data={item} />
        ))}
      </div>
      <Checkout cart={cart} />
    </div>
  );
};

export default Cart;
