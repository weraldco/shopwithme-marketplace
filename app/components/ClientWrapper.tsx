"use client";
import { useCartStore } from "@/store/cartStore";
import { useProductStore } from "@/store/productStore";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ClientWrapper: FC<Props> = ({ children }) => {
  const { getCartData } = useCartStore();
  const { fetchAllProducts, getAllCategory } = useProductStore();

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);
  return <>{children}</>;
};

export default ClientWrapper;
