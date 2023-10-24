import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    return(
        <div className="fixed w-full z-[999] bg-[#8717F8]">
            <div className="flex flex-row items-center justify-between mx-8 py-2 md:mx-[80px] xl:mx-[140px] 2xl:mx-[276px]">
                <div className="flex flex-row justify-betweenflex-wrap">
                    <Link href='tel:0727153317' className="flex flex-row items-center text-white text-[16px] mr-2">
                        <Image src='/images/TopBar/phone.svg' width={10} height={10} alt="phone" className="w-[16px] lg:w-[20px] mr-4 lg:ml-2 lg:mr-2"/>
                        (0727) 153 317
                    </Link>
                    <Link href='mailto:contact@consultify.ro' className="hidden md:flex flex-row items-center text-white text-[16px] mr-2">
                        <Image src='/images/TopBar/mail.svg' width={10} height={10} alt="phone" className="w-[10px] lg:w-[20px] mr-1 lg:ml-2 lg:mr-2"/>
                        contact@consultify.ro
                    </Link>
                    <span className="hidden md:flex flex-row items-center text-white text-[16px] mr-2">
                        <Image src='/images/TopBar/clock.svg' width={10} height={10} alt="phone" className="w-[10px] lg:w-[20px] mr-1 lg:ml-2 lg:mr-2"/>
                        interval orar: 9:00 - 17:00
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center">
                    {/* <span className="hidden md:block text-white text-[16px] mr-2">Social media:</span> */}
                    <Link href='/' className="flex flex-row items-center text-white">
                        <Image src='/images/TopBar/socials/insta-white.svg' width={20} height={20} alt="phone" className="mr-2 w-[20px]"/>
                    </Link>
                    <Link href='/' className="flex flex-row items-center text-white ml-2">
                        <Image src='/images/TopBar/socials/fb.svg' width={20} height={20} alt="phone" className="mr-2 w-[20px]"/>
                    </Link>
                    <Link href='/' className="flex flex-row items-center text-white ml-2">
                        <Image src='/images/TopBar/socials/linkedin-white.svg' width={20} height={20} alt="phone" className="w-[20px]"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}