import React from "react";
import Image from "next/image";
import Link from "next/link";
////
export default function OurServices(){
    return(
        <section className="w-full flex flex-col items-center px-7 md:px-[80px] xl:px-[180px] 2xl:px-[276px]">
            <h2 className="text-[#8717F8] font-bold text-3xl lg:text-4xl text-center">
                Iată ce îți oferim: 
            </h2>
            <div className="flex flex-col lg:grid lg:gap-5 lg:grid-cols-2 mt-24">
                <div className="flex flex-row bg-[#F6EFFF] p-6 pb-4   rounded-3xl mb-8">
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/consultanta.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col justify-between ml-2">
                        <h4 className="text-[#260056]  font-bold text-xl lg:text-2xl">
                            Consultanță fonduri
                        </h4>
                        <p className="text-[#260056] text-xs lg:text-[16px] mt-2">
                            Oferim consultanță completă în accesarea fondurilor europene și guvernamentale, acoperind toate etapele, de la identificarea oportunităților de finanțare până la raportarea implementării proiectelor.
                        </p>
                        <Link 
                            href='/Programe' 
                            className="self-end mt-4 text-xs lg:text-[16px] text-primary underline font-semibold hover:scale-105 transition-all cursor-pointer"
                        >
                            Vezi mai mult
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row bg-[#F6EFFF] p-6 pb-4   rounded-3xl mb-8">
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/registru.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col justify-between ml-2">
                        <h4 className="text-[#260056]  font-bold text-xl lg:text-2xl">
                            Magazinul Consultify
                        </h4>
                        <p className="text-[#260056] text-xs lg:text-[16px] mt-2">
                            Descoperiți gama noastră variată de produse digitale și servicii, concepute pentru a sprijini creșterea și eficiența afacerii dumneavoastră. Obțineți contracte, pachete digitale și asistență de înaltă calitate, totul la un clic distanță.
                        </p>
                        <Link 
                            href='/shop' 
                            className="self-end mt-2 text-xs lg:text-[16px] text-primary underline font-semibold hover:scale-105 transition-all cursor-pointer"
                        >
                            Vezi mai mult
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row bg-[#F6EFFF] p-6 pb-4   rounded-3xl mb-8">
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/implementare.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col ml-2">
                        <h4 className="text-[#260056]  font-bold text-xl lg:text-2xl">
                            Implementare Proiect
                        </h4>
                        <p className="text-[#260056] text-xs lg:text-[16px] mt-2">
                            Echipa noastră de experți vă oferă servicii exclusiviste pentru implementarea proiectelor deja depuse. Cu vastă experiență în gestionarea proiectelor, ne asigurăm că proiectul dumneavoastră va fi finalizat cu succes și în timp util.
                        </p>
                        <Link 
                            href='/servicii/implementare-proiect' 
                            className="self-end mt-2 text-xs lg:text-[16px] text-primary underline font-semibold hover:scale-105 transition-all cursor-pointer"
                        >
                            Vezi mai mult
                        </Link>
                    </div>
                </div>
                <div className="relative flex flex-row bg-[#D5B5FF] p-6 pb-4  rounded-3xl mb-8">
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/mentorat.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col ml-2">
                        <h4 className="text-[#260056]  font-bold text-xl lg:text-2xl">
                            Mentorat start-up
                        </h4>
                        <p className="text-[#260056] text-xs lg:text-[16px] mt-2">
                            Serviciul nostru personalizat de mentorat pentru start-up-uri vă oferă suportul de care aveți nevoie pentru a vă transforma ideile într-o afacere de succes. Profitați de expertiza noastră și lansați-vă în antreprenoriat cu încredere.
                        </p>
                    </div>
                    <span className="text-white bg-[#260056] text-xs lg:text-[16px] absolute bottom-0 right-0 py-2 px-4 lg:px-10 rounded-tl-3xl rounded-br-2xl">Coming soon</span>
                </div>
            </div>
        </section>
    )
}