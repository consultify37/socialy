import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    contact?: boolean 
    background?: string
}

export default function Rezultate({contact=true, background='bg-secondary'}: Props){
    return(
        <section className="w-full mt-16 md:mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className={"w-full flex relative flex-col lg:flex-row justify-between items-start py-8 px-6 md:py-16 md:px-12 rounded-3xl " + background}>
                <Image src='/images/rezultate/triangle.svg' className="absolute md:left-[-2rem] left-[-1.5rem] top-[-3rem] md:top-[-2rem] w-[60px] md:w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
                <Image src='/images/rezultate/square.svg' className="absolute right-[-2.75rem] bottom-[-2.75rem] w-[99px] h-[99px]" alt='triangle' width={146} height={146}/>

                <Image src='/images/rezultate/circle.svg' className="hidden lg:block absolute left-[25%] bottom-[-79px] w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
                <Image src='/images/rezultate/hexagon.svg' className="hidden lg:block absolute left-[5%] bottom-[-39px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>

                <div className="flex items-start w-full flex-col md:mr-12">
                    <h2 className="text-primary text-2xl md:text-4xl font-semibold mb-4">Iată rezultatele noastre:</h2>
                    <p className="text-sm text-onSecondary mb-4 md:mb-8">Cu ani de experiență în domeniul marketingului, suntem o agenție de încredere ce ajută companiile să-și atingă obiectivele și să-și maximizeze impactul în mediul online și offline.</p>
                    {contact && <Link className="py-3 md:py-4 bg-primary text-onPrimary rounded-[28.5px] font-semibold px-12 text-[14px] md:text-[16px] transition-all hover:scale-[1.05]" href="/contact">Contactează-ne!</Link>}
                </div>
                <div className="grid gap-5 w-full grid-cols-2 justify-between mt-6 lg:mt-0 lg:ml-12">
                    <div className="flex flex-col bg-[#303030] p-2 md:p-4 rounded-xl">
                        <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">150+</h6>
                        <span className="text-white font-semibold text-[14px] md:text-2xl mt-[-10px]">clienți fericiți</span>
                        <p className="text-xs text-white">Ajutându-i să-și depășească obiectivele de marketing.</p>
                    </div>
                    <div className="flex flex-col bg-[#303030] p-2 md:p-4 rounded-xl">
                        <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">20+</h6>
                        <span className="text-white font-semibold text-[14px] md:text-2xl mt-[-10px]">domenii diferite</span>
                        <p className="text-xs text-white">Dezvoltând strategii și campanii de marketing diversificate. </p>
                    </div>
                    <div className="flex flex-col bg-[#303030] p-2 md:p-4 rounded-xl">
                        <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">-50%</h6>
                        <span className="text-white font-semibold text-[14px] md:text-2xl mt-[-10px]">costuri reduse</span>
                        <p className="text-xs text-white">Marketing calitativ, costuri la minim.</p>
                    </div>
                    <div className="flex flex-col bg-[#303030] p-2 md:p-4 rounded-xl">
                        <h6 className="text-primary text-lg md:text-3xl mb-1 font-bold">1 mil €+</h6>
                        <span className="text-white font-semibold text-[14px] md:text-2xl mt-[-10px]">bugete investite</span>
                        <p className="text-xs text-white">Cu peste 5 ani de experiență, am ajutat oameni din diverse domenii să-și îndeplinească visurile.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}