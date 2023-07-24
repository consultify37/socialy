import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Garantii(){
    return(
        <section className="w-full flex flex-col items-center mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <h2 className="text-xl lg:text-3xl text-[#8717F8] self-start lg:self-center font-bold mb-12">Iată ce garanții îți oferim la Consultify:</h2>
            <div className="relative flex flex-col items-center w-full pb-20 lg:pb-16">
                <div className="absolute bg-[#F1DFFF] w-full h-calc lg:h-[400px] left-0 bottom-0 rounded-2xl"></div>
                <Image src='/images/Garantii/polygon.svg' className="w-[100px] lg:w-[166px] absolute -right-2 lg:-right-12 -bottom-12" width={200} height={200} alt="polygon"/>
                <Image src='/images/Garantii/semicircle.svg' className="w-[200px] lg:w-[120px] absolute -left-0 bottom-0" width={200} height={200} alt="polygon"/>
                <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-12 px-12 w-full">
                    <div className="box mb-10 lg:mb-0">
                        <div className="card">
                            <div className="front flex flex-col justify-center px-6 bg-[#260056] border-8 border-[#7000FF]">
                                <h4 className="text-white text-lg lg:text-2xl font-bold">Descoperă garanția de formă!</h4>
                                <p className="text-lg text-[#EDD7FF]">Apasa pentru a afla detalii</p>
                            </div>
                            <div className="back px-6 bg-[#260056] border-8 border-[#7000FF]">
                                <p className="text-lg text-[#EDD7FF]">Garanția noastră de formă vă oferă siguranța că documentația necesară va fi completată corespunzător și în conformitate cu cerințele instituțiilor finanțatoare.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box mb-10 lg:mb-0">
                        <div className="card">
                            <div className="front flex flex-col justify-center px-6 bg-[#260056] border-8 border-[#7000FF]">
                                <h4 className="text-white text-lg lg:text-2xl font-bold">Descoperă garanția de succes!</h4>
                                <p className="text-lg text-[#EDD7FF]">Apasa pentru a afla detalii</p>
                            </div>
                            <div className="back px-6 bg-[#260056] border-8 border-[#7000FF]">
                                <p className="text-lg text-[#EDD7FF]">Cu garanția noastră de succes, sunteți asigurat că proiectul dumneavoastră este gestionat de experți care își asumă responsabilitatea de a oferi cele mai bune soluții.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box mb-10 lg:mb-0">
                        <div className="card">
                            <div className="front flex flex-col justify-center px-6 bg-[#260056] border-8 border-[#7000FF]">
                                <h4 className="text-white text-lg lg:text-2xl font-bold">Descoperă garanția de eligibilitate!</h4>
                                <p className="text-lg text-[#EDD7FF]">Apasa pentru a afla detalii</p>
                            </div>
                            <div className="back px-6 bg-[#260056] border-8 border-[#7000FF]">
                                <p className="text-lg text-[#EDD7FF]">Garanția noastră de eligibilitate vă oferă siguranța că îndepliniți criteriile necesare pentru a accesa finanțări europene și naționale.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Link
                    href="/testimoniale"
                    className="py-3 bg-[#7000FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12"
                >
                    ce spun clienții noștri?
                </Link>
            </div>
        </section>
    )
}