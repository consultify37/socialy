import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA(){
    return(
        <section className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="w-full flex relative flex-col h-[400px] justify-center items-center py-12 px-12 bg-[#F7EDFF] rounded-3xl">
                <Image src='/images/CTA/triangle.svg' className="absolute right-[-2rem] top-[-2rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
                <Image src='/images/CTA/circle.svg' className="absolute right-0 bottom-[-14px] w-[300px] h-[300px]" alt='triangle' width={146} height={146}/>

                <Image src='/images/CTA/circle-thin.svg' className="absolute left-0 top-[0px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
                <Image src='/images/proces/hexagon.svg' className="absolute -left-[80px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>

                <h2 className="text-[#260056] text-4xl font-bold mb-4 max-w-[750px] text-center mb-12">Aplică acum la fonduri <span className="text-[#8717F8]"> nerambursabile</span> pentru afacerea ta</h2>
                <Link className="py-4 bg-[#8717F8] text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]" href="/contact">Completează formularul de contact</Link>
            </div>
        </section>
    )
}