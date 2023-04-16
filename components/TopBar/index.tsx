import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    return(
        <div className="bg-[#8717F8] z-10">
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between mx-3 py-4 md:mx-[80px] xl:mx-[140px] 2xl:mx-[276px]">
                <div className="flex flex-row justify-between mb-4 lg:mb-0 flex-wrap">
                    <Link href='tel:0712345679' className="flex flex-row items-center text-white text-xs lg:text-lg mr-2">
                        <Image src='/images/TopBar/phone.svg' width={10} height={10} alt="phone" className="mr-2 w-[10px] lg:w-[20px] ml-2"/>
                        0712 345 679
                    </Link>
                    <Link href='mailto:exemplu@email.com' className="flex flex-row items-center text-white text-xs lg:text-lg mr-2">
                        <Image src='/images/TopBar/mail.svg' width={10} height={10} alt="phone" className="mr-2 w-[10px] lg:w-[20px] ml-2"/>
                        exemplu@email.com
                    </Link>
                    <span className="flex flex-row items-center text-white text-xs lg:text-lg mr-2">
                        <Image src='/images/TopBar/clock.svg' width={10} height={10} alt="phone" className="mr-2 w-[10px] lg:w-[20px] ml-2"/>
                        interval orar: 8:00 - 17:00
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <span className="text-white text-xl mr-2">Social media:</span>
                    <Link href='/' className="flex flex-row items-center text-white">
                        <Image src='/images/TopBar/socials/insta-white.svg' width={20} height={20} alt="phone" className="mr-2"/>
                    </Link>
                    <Link href='/' className="flex flex-row items-center text-white ml-2">
                        <Image src='/images/TopBar/socials/fb.svg' width={20} height={20} alt="phone" className="mr-2"/>
                    </Link>
                    <Link href='/' className="flex flex-row items-center text-white ml-2">
                        <Image src='/images/TopBar/socials/linkedin-white.svg' width={20} height={20} alt="phone" className="mr-2"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}