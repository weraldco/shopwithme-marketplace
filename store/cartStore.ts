import { CartType } from "@/utils/types";
import { create } from "zustand";

type CartStoreType = {
  cart: CartType[] | null;
  getCartData: () => Promise<void>;
  addToCart: (product: CartType) => void;
  removeToCart: (id: number | string) => void;
  checkout: CartType[] | null;
  checkoutChange: (product: CartType) => void;
};

export const useCartStore = create<CartStoreType>((set, get) => ({
  cart: null,

  getCartData: async () => {
    try {
      const getData = localStorage.getItem("cart");
      if (getData) set({ cart: JSON.parse(getData) });
    } catch (error) {
      console.log("Failed to get the data", error);
    }
  },
  addToCart: (product) => {
    const getData = localStorage.getItem("cart");
    if (!getData) {
      // if localstorage is empty save a new data
      const data = [product];
      set({ cart: data });
      localStorage.setItem("cart", JSON.stringify(data));
    } else {
      const existingData: CartType[] = JSON.parse(getData);
      const found = existingData.find(
        (data) => data.product.title == product.product.title,
      );
      if (!found) {
        existingData.push(product);
        set({ cart: existingData });
        localStorage.setItem("cart", JSON.stringify(existingData));
      } else {
        console.log(product);
        found.quantity = found.quantity + product.quantity;
        set({ cart: existingData });
        localStorage.setItem("cart", JSON.stringify(existingData));
      }
    }
  },
  removeToCart: (id: number | string) => {
    set((state) => ({
      cart: state.cart?.filter((item) => item.product.id != id),
    }));
    const cart = get().cart;
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  checkout: null,

  checkoutChange: (product) => {
    const checkoutData = get().checkout;
    // Check if data is empty
    if (checkoutData) {
      // Check if product is in data
      const found = checkoutData.find(
        (item) => item.product === product.product,
      );
      if (found) {
        const filteredData = checkoutData?.filter(
          (item) => item.product !== product.product,
        );
        set({ checkout: filteredData });
      } else {
        checkoutData.push(product);
        set({ checkout: checkoutData });
      }
      // if not empty store the product to checkout
    } else {
      set({ checkout: [product] });
    }
  },
}));
