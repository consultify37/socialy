import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FonduriComponent() {
    return(
        <div 
            style={{backgroundImage:"url('/images/fonduri/fonduri-img-1.png')"}}
            className="rounded-3xl mx-2 md:mx-[30px] relative w-full h-auto flex flex-col-reverse md:flex-row justify-between px-4 md:px-20 py-10 bg-cover bg-no-repeat align-center"
        >   
            <div style={{background: 'rgba(0, 0, 0, 0.45)'}} className="w-full h-full absolute rounded-3xl left-0 z-[1] top-0"></div>
            <div className="flex flex-col justify-center items-center z-[10] rounded-2xl relative top-[100px] z-[100] bg-[#260056] py-8 px-8">
                <h5 className="text-white text-xl md:text-4xl mb-6">digiimm</h5>
                <ul className="list-disc list-inside">
                    <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                    <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                    <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                    <li className="text-[#EDD7FF] text-md mb-8">Lorem lispum dolor sit amet</li>
                </ul>
                <Link className="py-3 bg-[#BA63FF] text-[#fff] rounded-[28.5px] font-xl px-12" href="/">Aplica acum!</Link>
            </div>
            <div className='flex flex-col items-end justify-center z-[10]'>
                <h5 className='text-white text-xs lg:text-xl mb-2'>
                    PNRR / C9 / 13 / Măsura 1
                </h5>
                <h4 className='text-white text-xl lg:text-4xl mb-2'>
                    Digitalizarea IMM-urilor
                </h4>
                <h6 className='text-white text-xl lg:text-4xl'>
                    20.000 € - 100.000 €
                </h6>
            </div>
        </div>
    )
}