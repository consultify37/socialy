/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import CTA from "../../components/CTA";
import WhyUsCart from "../../components/Home/Why-Us/Cart";
import News from "../../components/Home/News/News";

export interface ProgameData {
    id: number;
    titlu: string,
    pret: string,
    subTitlu: string,
    titluDetalii: string,
    detalii: string,
}

export default function Programe() {
    const Programe: ProgameData[] = [
        {
            id: 1, titlu: 'POC 411 / POC 411 BIS', pret: "50.000 € - 500.000 €", subTitlu: 'POC / 411', titluDetalii: 'digiimm', detalii: 'fsafsa',
        },
        {
            id: 2, titlu: 'POC 411 / POC 411 BIS', pret: "50.000 € - 500.000 €", subTitlu: 'POC / 411', titluDetalii: 'digiimm', detalii: 'fsafsa',
        },
        {
            id: 3, titlu: 'POC 411 / POC 411 BIS', pret: "50.000 € - 500.000 €", subTitlu: 'POC / 411', titluDetalii: 'digiimm', detalii: 'fsafsa',
        },
        {
            id: 4, titlu: 'POC 411 / POC 411 BIS', pret: "50.000 € - 500.000 €", subTitlu: 'POC / 411', titluDetalii: 'digiimm', detalii: 'fsafsa',
        }
    ]
    return (
        <>
            <Head>
                <title>Admin | Programe</title>
            </Head>
            <section
                id="about-header"
                className="relative bg-[#260056] mb-40 w-full pt-[130px] pb-16 flex flex-col items-center justify-center overflow-visible"
            >
                <h1 className="text-xl lg:text-4xl font-bold text-white lg:max-w-[50%] text-center pt-20 lg:pt-0">
                    Alege programul potrivit pentru tine:
                </h1>
                <span className="bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] lg:w-[103vw] -rotate-2 z-[-1] absolute -left-5 -bottom-[3rem] h-32" />
                <Image
                    src="/images/Star 1.svg"
                    alt="Hero blue circle"
                    width={100}
                    height={200}
                    className="absolute right-0 top-0 z-[5] w-[80px] lg:w-[120px]"
                />
                <Image
                    src="/images/proces/hexagon.svg"
                    width={130}
                    height={130}
                    className="absolute top-7 -left-2 lg:bottom-5 lg:left-0 w-[100px] lg:w-[130px]"
                    alt="Yellow triangle"
                />
            </section>
            <section className="flex flex-col gap-5 pb-20 items-stretch justify-center px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="bg-[#ECECEC] mb-12 flex items-center px-4 justify-center w-full rounded-full">
                    <select className="bg-[#ECECEC] px-4 rounded-full py-4 text-xl w-full" name="categorie">
                        <option value="toate">Toate</option>
                        <option value="fonduri-europene">Fonduri europene</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                {
                    Programe.map(programe => (
                        programe.id % 2 === 0 ? (
                            <div 
                                style={{backgroundImage:"url('/images/fonduri/fonduri-img-1.png')"}}
                                className="rounded-3xl relative w-full h-auto flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-20 py-10 bg-cover bg-no-repeat align-center mb-20"
                            >   
                                <div style={{background: 'rgba(0, 0, 0, 0.45)'}} className="w-full h-full absolute rounded-3xl left-0 z-[1] top-0"></div>
                                <div className="flex flex-col justify-center items-center z-[10] rounded-2xl relative top-[100px] z-[100] bg-[#260056] py-8 px-8">
                                    <h5 className="text-white text-xl lg:text-4xl mb-6">digiimm</h5>
                                    <ul className="list-disc list-inside">
                                        <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                                        <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                                        <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                                        <li className="text-[#EDD7FF] text-md mb-8">Lorem lispum dolor sit amet</li>
                                    </ul>
                                    <Link className="py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12" href="/">Aplica acum!</Link>
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
                        ) : (
                            <div 
                                style={{backgroundImage:"url('/images/fonduri/fonduri-img-1.png')"}}
                                className="rounded-3xl relative w-full h-auto flex flex-col-reverse lg:flex-row-reverse justify-between px-4 lg:px-20 py-10 bg-cover bg-no-repeat align-center mb-20"
                            >   
                                <div style={{background: 'rgba(0, 0, 0, 0.45)'}} className="w-full h-full absolute rounded-3xl left-0 z-[1] top-0"></div>
                                <div className="flex flex-col justify-center items-center z-[10] rounded-2xl relative top-[100px] z-[100] bg-[#260056] py-8 px-8">
                                    <h5 className="text-white text-xl lg:text-4xl mb-6">digiimm</h5>
                                    <ul className="list-disc list-inside">
                                        <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                                        <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                                        <li className="text-[#EDD7FF] text-md mb-4">Lorem lispum dolor sit amet</li>
                                        <li className="text-[#EDD7FF] text-md mb-8">Lorem lispum dolor sit amet</li>
                                    </ul>
                                    <Link className="py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12" href="/">Aplica acum!</Link>
                                </div>
                                <div className='flex flex-col items-start justify-center z-[10]'>
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
                    ))
                }
            </section>
            <CTA
                title="Aplică acum la fonduri nerambursabile pentru afacerea ta!"
                linkText="Completează formularul!"
                linkHref="/contact"
            />
            <div className="w-full mt-20 px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex justify-start items-start">
                    <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
                    Consultify vine în ajutorul tău cu produse digitale pentru scalarea
                    afacerii tale
                    </h3>
                </div>
                <WhyUsCart />
                <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
                    vezi toate produsele
                </Link>
            </div>
            <News />
            <NewsLetter headingText={'Fii la curent cu cele mai recente informații despre fonduri europene!'} />
        </>
    );
}
