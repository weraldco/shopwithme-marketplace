"use client";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { FC } from "react";
import Search from "./Search";

const Navbar: FC<Props> = () => {
  const { cart } = useCartStore();
  return (
    <div className="fixed top-0 flex w-full items-center justify-between bg-white p-4">
      <Link href="/" className="text-xl">
        Logo
      </Link>
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
          <IoHeartOutline></IoHeartOutline>
        </div>
        <div>sign-up</div>
        <div>sign-in</div>
      </div>
    </div>
  );
};

export default Navbar;
