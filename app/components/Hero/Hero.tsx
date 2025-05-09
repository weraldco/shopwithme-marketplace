import Image from "next/image";

import { Lilita_One } from "next/font/google";

const lilitaFont = Lilita_One({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <div className="h-90 w-full overflow-hidden rounded-xl bg-red-100/80">
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
          className={`${lilitaFont.className} flex w-full flex-col items-center justify-center gap-2 text-[#673094] md:text-center lg:text-right`}
        >
          <span className="text-5xl md:text-6xl lg:text-8xl">MEGA SALE</span>
          <span className="text-2xl md:text-3xl lg:text-5xl">
            SALE UP TO 20% OFF
          </span>
          <div className="w-full px-18">
            <button className="rounded-xl bg-red-400 px-4 py-2 text-white duration-200 hover:bg-red-400/90 active:-translate-y-2 active:bg-red-400 md:text-base lg:text-2xl">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
