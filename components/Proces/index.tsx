import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export type ProcesData = {
    id: number
    title: string,
    text: string,
    titluText: string,
}

const defaultData: ProcesData[] = [
    {
        id: 1, title: 'Evaluarea nevoilor tale', 
        text: 'Primul pas în colaborarea noastră constă într-o evaluare atentă a nevoilor și obiectivelor afacerii tale. Echipa noastră de specialiști în marketing va analiza situația ta actuală, publicul țintă și obiectivele de creștere. Pe baza acestor informații, vom identifica strategia de marketing potrivită, care va maximiza impactul și rezultatele pozitive pentru afacerea ta.',
        titluText: "Evaluarea nevoilor tale și identificarea strategiei potrivite",
    },
    {
        id: 2, title: 'Crearea planului',
        text: 'În pasul doi al procesului, vom dezvolta un plan de acțiune adaptat nevoilor și obiectivelor tale. Acest plan va include strategii de promovare, canale de marketing, campanii publicitare și alte tactici relevante. Echipa noastră va lucra îndeaproape cu tine pentru a se asigura că planul de acțiune este eficient și aliniat cu viziunea ta în afacere.',
        titluText: 'Crearea planului de acțiune',
    },
    {
        id: 3, title: 'Implementarea și monitorizarea', 
        text: 'Pasul trei implică implementarea planului de acțiune convenit. Echipa noastră de experți va coordona toate, inclusiv crearea și lansarea campaniilor, gestionarea canalelor de marketing și monitorizarea performanțelor. Vom urmări îndeaproape rezultatele și vom face ajustări pe parcurs pentru a asigura maximizarea impactului și obținerea rezultatelor dorite.',
        titluText: 'Implementarea și monitorizarea strategiei de marketing',
    },
    {
        id: 4, title: 'Analiza și optimizarea', 
        text: 'Pasul 4 constă în analiza rezultatelor obținute și optimizarea continuă a strategiei de marketing. Echipa noastră va monitoriza și evalua performanța campaniilor, identificând punctele tari și slabe și ajustând tacticiile pentru a obține rezultate superioare. Ne vom asigura că afacerea ta beneficiază de cele mai bune practici și de cele mai eficiente strategii de marketing.',
        titluText: 'Analiza și optimizarea continuă a strategiei de marketing',
    },
    {
        id: 5, title: 'Creștere continuă', 
        text: 'Pasul final în procesul nostru este de a oferi suport și asistență pe termen lung pentru creșterea afacerii tale. Vom fi alături de tine pentru a răspunde la întrebări, pentru a face ajustări și pentru a identifica noi oportunități de creștere într-un mediu în continuă schimbare. Suntem dedicați succesului afacerii tale și suntem pregătiți să fim partenerul tău în atingerea obiectivelor de marketing.',
        titluText: 'Creștere continuă și susținere pe termen lung',
    },
]

type Props = {
    data?: ProcesData[]
    title?: string
}

export default function Proces({ data=defaultData, title }: Props){
    const [procesActive, setProcesActive] = useState(false)
    const [selectedProces, setSelectedProces] = useState(data[0])

    const handleClick = (proces: ProcesData) => {
        setProcesActive(true)
        setSelectedProces(proces)
    }
    return(
        <section className="relative w-full mt-16 md:mt-32 py-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <Image src='/images/proces/triangle-proces.svg' className="absolute right-[1rem] bottom-[3rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
            <div className="w-[122%] md:w-[120%] bg-secondary h-full absolute rotate-[-2.69deg] left-[-10%] z-[-1] top-0"></div>

            <Image src='/images/proces/circle-proces.svg' className="hidden md:block absolute right-[-80px] top-0 w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/proces/hexagon.svg' className="hidden md:block absolute bottom-[5%] -left-12 w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
            <h2 className="text-primary text-xl lg:text-2xl xl:text-3xl text-center font-bold mb-20 md:mb-28">{ title ? title : <span>Cum dăm startul succesului tău în mediul online?</span> }</h2>
            <div className="w-full flex relative flex-col md:flex-row justify-between items-start">
                <div className="flex items-center w-full flex-col md:mr-8">
                    {data.map(proces => (
                        <div className="justify-start w-full" key={proces.id}>
                            <button
                                onClick={() => handleClick(proces)}
                                className={`flex w-full max-w-[400px] flex-row items-center mb-6 py-8 px-6 justify-start ${
                                    proces.id == selectedProces.id
                                        ? "bg-primary rounded-2xl"
                                        : ""
                                }`}
                            >
                                {proces.id === selectedProces.id ? 
                                    <Image
                                        src="/images/proces/check-selected.svg"
                                        className="mr-4"
                                        width={31}
                                        height={31}
                                        alt="check"
                                    /> : 
                                    <Image
                                        src="/images/proces/check.svg"
                                        className="mr-4"
                                        width={31}
                                        height={31}
                                        alt="check"
                                    />
                                }
                                <span
                                    className={`text-lg sm:text-xl font-bold text-start ${
                                        proces.id === selectedProces.id
                                            ? "text-onPrimary"
                                            : "text-onSecondary"
                                    }`}
                                >
                                    {proces.id}. {proces.title}
                                </span>
                            </button>
                            <h4 className={`text-[#fff] text-lg  ${proces.id == selectedProces.id ? "" : "hidden"} md:hidden font-semibold px-6 mb-4`}>{selectedProces.titluText}</h4>
                            <p className={`${proces.id == selectedProces.id ? "" : "hidden"} md:hidden text-onSecondary text-[14px] px-6`}>{ proces.text }</p>
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex w-full md:ml-8 mt-12 flex-col items-start">
                    <h4 className="text-[#fff] text-2xl lg:text-4xl font-semibold mb-8">{selectedProces.titluText}</h4>
                    <p className="text-base font-light text-[#fff] ">{selectedProces.text}</p>
                </div>
            </div>
            <Link href='/contact' className="mt-12 md:mt-0 py-3 md:py-4 font-semibold bg-primary text-onPrimary rounded-[28.5px] px-12 flex items-center justify-center w-fit mx-auto transition-all hover:scale-[1.05]">
                Contactează-ne!
            </Link>
        </section>
    )
}