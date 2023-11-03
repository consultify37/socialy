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
                        interval orar: 10:00 - 18:00
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <span className="hidden lg:block text-white text-[16px] mr-2">Social media: </span>
                    <Link href='/' className="flex flex-row items-center text-white">
                        <Image src='/images/TopBar/socials/insta-white.svg' width={20} height={20} alt="phone" className="mr-2 w-[20px]"/>
                    </Link>
                    <Link href='/' className="flex flex-row items-center text-white ml-2">
                        <Image src='/images/TopBar/socials/fb.svg' width={20} height={20} alt="phone" className="mr-2 w-[20px]"/>
                    </Link>
                    <Link href='/' className="flex flex-row items-center text-white ml-2">
                        <svg width="17" height="18" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 8.22201C15.2625 8.22201 13.6517 7.65199 12.3373 6.68361V13.6714C12.3373 17.1615 9.56981 20 6.16867 20C4.85436 20 3.63508 19.575 2.63351 18.8533C1.043 17.7074 0 15.8123 0 13.6714C0 10.1813 2.76754 7.34197 6.16949 7.34197C6.45217 7.34197 6.72835 7.36614 7.00048 7.40364V8.21784V10.9138C6.73729 10.8296 6.45948 10.7804 6.16949 10.7804C4.61635 10.7804 3.3524 12.0772 3.3524 13.6714C3.3524 14.7815 3.96651 15.7457 4.86329 16.2298C5.25401 16.4407 5.69835 16.5615 6.1703 16.5615C7.68769 16.5615 8.92565 15.3231 8.98251 13.7797L8.98495 0H12.3365C12.3365 0.298346 12.365 0.589191 12.4153 0.872536C12.6517 2.18259 13.4096 3.3068 14.4599 4.00933C15.191 4.49852 16.0634 4.78437 16.9992 4.78437L17 8.22201Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}