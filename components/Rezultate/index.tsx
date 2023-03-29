import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Rezultate(){
    return(
        <section className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="w-full flex relative flex-row justify-between items-start py-12 px-12 bg-[#F7EDFF] rounded-3xl">
                <Image src='/images/rezultate/triangle.svg' className="absolute left-[-2rem] top-[-2rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
                <Image src='/images/rezultate/square.svg' className="absolute right-[-2.75rem] bottom-[-2.75rem] w-[99px] h-[99px]" alt='triangle' width={146} height={146}/>

                <Image src='/images/rezultate/circle.svg' className="absolute left-[25%] bottom-[-78px] w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
                <Image src='/images/rezultate/hexagon.svg' className="absolute left-[5%] bottom-[-38px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>

                <div className="flex items-start w-full flex-col mr-12">
                    <h2 className="text-[#8717F8] text-4xl font-semibold mb-4">Iată rezultatele noastre</h2>
                    <p className="text-sm mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor.</p>
                    <Link className="py-4 bg-[#8717F8] text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]" href="/contact">Contactează-ne</Link>
                </div>
                <div className="grid gap-5 w-full grid-cols-2 justify-between ml-12">
                    <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                        <h6 className="text-[#6A13D8] text-[28px] font-bold">5000+</h6>
                        <span className="text-[#BA63FF] text-2xl mt-[-10px]">clienți fericiți</span>
                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                        <h6 className="text-[#6A13D8] text-[28px] font-bold">5000+</h6>
                        <span className="text-[#BA63FF] text-2xl mt-[-10px]">clienți fericiți</span>
                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                        <h6 className="text-[#6A13D8] text-[28px] font-bold">5000+</h6>
                        <span className="text-[#BA63FF] text-2xl mt-[-10px]">clienți fericiți</span>
                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                        <h6 className="text-[#6A13D8] text-[28px] font-bold">5000+</h6>
                        <span className="text-[#BA63FF] text-2xl mt-[-10px]">clienți fericiți</span>
                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}