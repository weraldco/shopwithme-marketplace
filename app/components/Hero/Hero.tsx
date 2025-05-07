import Image from "next/image";
import { FC } from "react";

import { Lilita_One } from "next/font/google";

const lilitaFont = Lilita_One({ subsets: ["latin"], weight: "400" });

interface Props {}

const Hero: FC<Props> = () => {
  return (
    <div className="h-90 w-full rounded-xl bg-red-100/80">
      <div className="flex h-full w-full">
        <Image
          src="/images/hero/sale.png"
          width={350}
          height={350}
          alt=""
          priority
          className="h-full w-full rounded-xl object-contain object-bottom-left"
        />

        <div
          className={`${lilitaFont.className} flex w-full flex-col items-center justify-center gap-2 text-right text-[#673094]`}
        >
          <span className="text-8xl">MEGA SALE</span>
          <span className="text-5xl">SALE UP TO 20% OFF</span>
          <div className="w-full px-18">
            <button className="rounded-xl bg-red-400 px-4 py-2 text-2xl text-white duration-200 hover:bg-red-400/90 active:-translate-y-2 active:bg-red-400">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
