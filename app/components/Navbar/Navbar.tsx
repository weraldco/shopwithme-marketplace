"use client";
import { IoCartOutline } from "react-icons/io5";

import { useCartStore } from "@/store/cartStore";
import { Modak } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
import ResponsiveLayout from "../Layout/ResponsiveLayout";
import Search from "./Search";

const modakFont = Modak({ subsets: ["latin"], weight: "400" });
const Navbar: FC = () => {
  const { cart } = useCartStore();
  return (
    <div className="fixed top-0 flex w-full items-center justify-center bg-white p-4">
      <ResponsiveLayout>
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className={`text-2xl text-red-400 md:text-3xl ${modakFont.className}`}
          >
            ShopWithMe
          </Link>
          <div className="hidden gap-4 text-sm md:flex">
            <Link href="/">All Products</Link>
            <Link href="/sale">Sale Products</Link>
            <Link href="/category">Category</Link>
          </div>
          <div className="flex w-[50%] items-center justify-center">
            <Search />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-6 text-xl">
              <Link href="/cart" className="group relative">
                <IoCartOutline className="text-2xl"></IoCartOutline>
                <span className="absolute -top-3 -right-4 rounded-full bg-red-400 px-2 py-1 text-xs text-white duration-200 group-hover:bg-red-300">
                  {cart?.length}
                </span>
              </Link>
              {/* <IoHeartOutline></IoHeartOutline> */}
            </div>
            {/* <Link href="/auth/register">Sign-Up</Link>
            <Link href="/auth/login">Sign-In</Link> */}
          </div>
        </div>
      </ResponsiveLayout>
    </div>
  );
};

export default Navbar;
