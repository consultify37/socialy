import React from "react";
import Image from "next/image";
import Carousel from "react-elastic-carousel"
import FonduriComponent from './component';
import Link from "next/link";

export default function CarouselPrograme(){
    return(
        <div className='carousel-programe w-full h-auto flex py-20 items-center flex-col relative justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <h2 className="text-[#8717F8] text-xl lg:text-4xl font-bold mb-8">Ce programe de fonduri poți accesa?</h2>
            <Link href='/Programe'>
                <span className="flex items-center justify-center text-[#5600AB] font-semibold h-auto mb-8 cursor-pointer transition-all hover:scale-[1.05]">
                    Vezi toate programele
                    <Image src='/images/arrow-right.svg' className="ml-2" width={10} alt='arrow-right' height={10}/>
                </span>
            </Link>
            <div className="w-full relative">
                <Carousel
                    pagination={true}
                >
                    <FonduriComponent />
                    <FonduriComponent />
                    <FonduriComponent />
                </Carousel>
            </div>
        </div>
    )
}