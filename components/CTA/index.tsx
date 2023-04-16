import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA(){
    return(
        <section className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="w-full flex relative flex-col h-[300px] lg:h-[400px] justify-center items-center px-6 py-6 lg:py-12 lg:px-12 bg-[#F7EDFF] rounded-3xl">
                <Image src='/images/CTA/triangle.svg' className="absolute right-[-2rem] top-[-2rem] w-[110px]" alt='triangle' width={146} height={146}/>
                <Image src='/images/CTA/circle.svg' className="absolute right-0 bottom-[0px] w-[80px] lg:w-[220px]" alt='triangle' width={146} height={146}/>

                <Image src='/images/CTA/circle-thin.svg' className="absolute left-0 top-[0px] w-[100px] lg:w-[200px]" alt='triangle' width={250} height={250}/>
                <Image src='/images/proces/hexagon.svg' className="absolute -left-6 -bottom-6 lg:-left-[80px] lg:-bottom-[50px] w-[60px] lg:w-[160px]" alt='triangle' width={250} height={250}/>

                <h2 className="text-[#260056] text-lg lg:text-4xl font-bold mb-4 max-w-[750px] text-center mb-12">Aplică acum la fonduri <span className="text-[#8717F8]"> nerambursabile</span> pentru afacerea ta</h2>
                <Link className="py-4 bg-[#8717F8] text-center text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]" href="/contact">Completează formularul de contact</Link>
            </div>
        </section>
    )
}