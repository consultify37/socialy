import React from "react";
import Image from "next/image";
import Link from "next/link";
////
export default function OurServices(){
    return(
        <section className="w-full flex flex-col items-center px-7 md:px-[80px] xl:px-[180px] 2xl:px-[276px]">
            <h2 className="text-secondary font-bold text-[22px] lg:text-2xl xl:text-3xl text-center">
                Iată ce ți-am pregătit:
            </h2>
            <div className="flex flex-col lg:grid lg:gap-5 lg:grid-cols-2 mt-12 md:mt-24">
                <Link 
                    href='/campanii'
                    className="group/card-1 flex relative flex-row bg-[#F4F4F4] p-6 pb-10   rounded-3xl mb-8 hover:shadow-2xl cursor-pointer"
                >
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#0CFF00] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/megaphone.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col justify-start ml-2">
                        <h4 className="text-secondary font-bold text-xl lg:text-2xl">
                            Marketing online
                        </h4>
                        <p className="text-secondary text-xs lg:text-[16px] mt-2">
                            La Socialy, oferim soluții complete de marketing online pentru a-ți crește afacerea și a-ți atinge obiectivele comerciale. Cu o abordare strategică și orientată către rezultate, ne concentrăm pe utilizarea eficientă a canalelor digitale pentru a maximiza impactul și a genera vânzări pentru afacerea ta.                        
                        </p>
                    </div>
                    <span className="sm:opacity-0 group-hover/card-1:opacity-100 transition-all duration-300 text-onPrimary bg-primary font-semibold text-xs lg:text-[16px] absolute bottom-0 right-0 py-2 px-4 lg:px-10 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl">Descoperă</span>
                </Link>
                <Link 
                    href='#'
                    className="group/card-2 flex relative flex-row bg-[#F4F4F4] p-6 pb-10   rounded-3xl mb-8 hover:shadow-2xl cursor-pointer"
                >
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#0CFF00] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/registru.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col justify-start ml-2">
                        <h4 className="text-secondary  font-bold text-xl lg:text-2xl">
                            Magazinul Socialy
                        </h4>
                        <p className="text-secondary text-xs lg:text-[16px] mt-2">
                            Descoperă gama noastră variată de produse digitale și servicii, concepute pentru a sprijini creșterea și eficiența afacerii tale în mediul online. Obține îndrumarea de care ai nevoie în afacere, totul la doar un click distanță!
                        </p>
                    </div>
                    <span className="sm:opacity-0 group-hover/card-2:opacity-100 transition-all duration-300 text-onPrimary bg-primary font-semibold text-xs lg:text-[16px] absolute bottom-0 right-0 py-2 px-4 lg:px-10 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl">Descoperă</span>
                </Link>
                {/* <div className="group/card-4 relative flex flex-row bg-[#C3C3C3] p-6 pb-4  rounded-3xl mb-8">
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#0CFF00] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/registru.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col ml-2 mb-[22px] lg:mb-0">
                        <h4 className="text-secondary  font-bold text-xl lg:text-2xl">
                            Magazinul Socialy
                        </h4>
                        <p className="text-secondary text-xs lg:text-[16px] mt-2 mb-4">
                            Descoperiți gama noastră variată de produse digitale și servicii, concepute pentru a sprijini creșterea și eficiența afacerii dumneavoastră. Obțineți contracte, pachete digitale și asistență de înaltă calitate, totul la un clic distanță.
                        </p>
                    </div>
                    group-hover/card-4:-translate-x-[106%] group-hover/card-4:scale-y-[5.53] group-hover/card-4:scale-x-[3.11] group-hover/card-4:-translate-y-[222%] group-hover/card-4:rounded-md group-hover/card-4:opacity-80 transition-all
                    <span className="text-onPrimary bg-primary font-semibold text-xs lg:text-[16px] absolute bottom-0 right-0 py-2 px-4 lg:px-10 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl">Coming soon</span>
                </div> */}
                <Link 
                    href='/servicii/web-design'
                    className="group/card-3 flex relative flex-row bg-[#F4F4F4] p-6 pb-10 rounded-3xl mb-8 hover:shadow-2xl cursor-pointer"
                >
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#0CFF00] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/bulb.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col justify-start ml-2">
                        <h4 className="text-secondary  font-bold text-xl lg:text-2xl">
                            Web Design
                        </h4>
                        <p className="text-secondary text-xs lg:text-[16px] mt-2">
                            Echipa noastră pasionată de web design creează site-uri web cu impact și funcționalitate remarcabilă. De la designul intuitiv și atrăgător până la optimizarea pentru toate dispozitivele, fiecare site este realizat cu atenție la detalii pentru a te ajuta să te evidențiezi in mediul online. 
                        </p>
                        
                        {/* <Link 
                            href='/servicii/implementare-proiect' 
                            className="self-end mt-2 text-xs lg:text-[16px] text-primary underline font-semibold hover:scale-105 transition-all cursor-pointer"
                        >
                            Vezi mai mult
                        </Link> */}
                    </div>
                    <span className="sm:opacity-0 group-hover/card-3:opacity-100 transition-all duration-300 text-onPrimary bg-primary font-semibold text-xs  lg:text-[16px] absolute bottom-0 right-0 py-2 px-4 lg:px-10 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl">Descoperă</span>
                </Link>
                <div className="group/card-4 relative flex flex-row bg-[#C3C3C3] p-6 pb-4  rounded-3xl mb-8">
                    <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#0CFF00] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                        <Image
                            src="/images/OurServices/buildings.svg"
                            alt="Hero blue circle"
                            width={32}
                            height={32}
                            className="z-[5] h-[max-content]"
                        />
                    </div>
                    <div className="flex flex-col ml-2 mb-[22px] lg:mb-0">
                        <h4 className="text-secondary  font-bold text-xl lg:text-2xl">
                            Marketing outdoor
                        </h4>
                        <p className="text-secondary text-xs lg:text-[16px] mt-2">
                            Marketingul outdoor utilizează pliante, afișe și vehicule cu ecrane TV pentru a atrage atenția publicului în mediul exterior. Aceste instrumente oferă oportunități captivante de a comunica mesaje publicitare și de a amplifica conștientizarea brandului în locuri cu trafic intens.
                        </p>
                    </div>
                    {/* group-hover/card-4:-translate-x-[106%] group-hover/card-4:scale-y-[5.53] group-hover/card-4:scale-x-[3.11] group-hover/card-4:-translate-y-[222%] group-hover/card-4:rounded-md group-hover/card-4:opacity-80 transition-all */}
                    <span className="text-onPrimary bg-primary font-semibold text-xs lg:text-[16px] absolute bottom-0 right-0 py-2 px-4 lg:px-10 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl">Coming soon</span>
                </div>
            </div>
        </section>
    )
}