"use client";
import { useCartStore } from "@/store/cartStore";
import { useProductStore } from "@/store/productStore";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ClientWrapper: FC<Props> = ({ children }) => {
  const { getCartData } = useCartStore();
  const { getAllCategory, fetchMoreProducts } = useProductStore();

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  useEffect(() => {
    fetchMoreProducts(0);
  }, [fetchMoreProducts]);

  useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);
  return <>{children}</>;
};

export default ClientWrapper;
