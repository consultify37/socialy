import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";

export interface WhyUsCartItemsInterface {
  poza: any;
  pret: number;
  reducere: number;
  nume: string;
  id: number;
  price: number;
  title: string;
  image: string;
  initial?: number;
}

const WhyUsCartItem = ({
  price,
  initial,
  title,
  image,
  cardRef,
}: Omit<WhyUsCartItemsInterface, "id"> & {
  cardRef?: React.RefObject<HTMLAnchorElement>;
}) => {
  return (
    <Link
      ref={cardRef}
      href="/"
      className="p-2 rounded-md bg-white shadow-md min-w-[90%] md:min-w-[280px] flex flex-col gap-4 snap-center"
    >
      <Image
        src={image}
        alt="cart image"
        placeholder="blur"
        blurDataURL={image}
        width={152}
        height={264}
        className="mx-auto"
      />
      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col gap-2 max-w-[85%]">
          <p className="text-[#8717F8] text-sm font-bold">
            {price} lei{" "}
            {initial && (
              <s className="text-[#7C9EF8] font-thin">{initial} lei</s>
            )}
          </p>
          <h4 className="text-[#260056] font-bold text-base">{title}</h4>
        </div>
        <span className="w-10 h-10 bg-[#8717F8] flex items-center justify-center rounded-full text-white flex-shrink-0">
          <AiOutlineShoppingCart />
        </span>
      </div>
    </Link>
  );
};

export default WhyUsCartItem;
