import React from "react"
import Link from "next/link"
import Image from "next/image"

const defaultCards = [
    {
        titleBack: 'Experiență',
        titleFront: 'Experiență',
        description: 'Socialy dispune de o echipă de specialiști în marketing cu o vastă experiență în domeniu, mereu pregătită să aducă idei noi și să transforme viziunile clienților în realitate pe platformele de social media.'
    },
    {
        titleBack: 'Abordare Personalizată',
        titleFront: 'Abordare Personalizată',
        description: 'La Socialy, ne concentrăm pe nevoile și obiectivele fiecărui client. Înțelegem că nu există o soluție care să se potrivească tuturor și de aceea lucrăm strâns cu clienții noștri pentru a dezvolta strategii personalizate care să se alinieze cu viziunea și bugetul lor.'
    },
    {
        titleBack: 'Rezultate Măsurabile și Transparente',
        titleFront: 'Rezultate Măsurabile și Transparente',
        description: 'Ne angajăm să oferim rezultate tangibile și măsurabile. Folosim instrumente avansate de analiză și monitorizare pentru a urmări performanța campaniilor noastre și pentru a furniza rapoarte periodice clienților noștri. '
    },
]

type Props = {
    cards?: {
        titleBack: string;
        titleFront: string;
        description: string;
    }[]
}

export default function Garantii({cards=defaultCards}: Props){
    return(
        <section className="w-full flex flex-col items-center mt-16 md:mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <h2 className="text-xl lg:text-3xl text-secondary self-start lg:self-center text-center font-bold mb-12">De ce să ne alegi pe noi? </h2>
            <div className="relative flex flex-col items-center w-full pb-20 lg:pb-16">
                <div className="absolute bg-[#EBEBEB] w-full h-calc lg:h-[400px] left-0 bottom-0 rounded-2xl"></div>
                <Image src='/images/Garantii/polygon.svg' className="w-[100px] lg:w-[166px] absolute -right-2 lg:-right-12 -bottom-12" width={200} height={200} alt="polygon"/>
                <Image src='/images/Garantii/semicircle.svg' className="w-[200px] lg:w-[120px] absolute -left-0 bottom-0" width={200} height={200} alt="polygon"/>
                <div className="flex flex-col lg:flex-row items-center justify-between mb-12 px-12 w-full">
                    { cards.map((card, index) => (
                        <div className="box mb-10 lg:mb-0" key={card.titleFront}>
                            <div className="card">
                                <div className="front flex flex-col justify-center px-6 bg-secondary border-8 border-primary">
                                    <h4 className="text-white text-lg lg:text-2xl font-bold">{card.titleBack}</h4>
                                    <p className="text-lg text-primary">Apasă pentru a afla detalii</p>
                                </div>
                                <div className="back flex flex-col items-center h-full bg-[#fbfffb]">
                                    <div className="w-full bg-secondary rounded-t-[2rem] px-1 py-4">
                                        <p className="text-[22px] font-bold text-onSecondary text-center">{card.titleFront}</p>
                                    </div>
                                    <div 
                                        className="flex flex-col h-full items-center justify-between px-6"
                                        style={{padding: index == 2 ? '22px' : '32px'}}
                                    >
                                        <p className="text-[14px] text-o">{card.description}</p>
                                        <Link
                                            href='/contact'
                                            className="px-12 py-4 bg-primary text-onPrimary rounded-[28.5px] text-base font-semibold transition-all hover:scale-[1.05]"
                                            >
                                            Aplică acum!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <Link
                    href="/testimoniale"
                    className="py-3 md:py-4 bg-primary text-onPrimary flex items-center rounded-[28.5px] font-semibold px-12 z-50 hover:scale-105 transition-all"
                >
                    Ce spun clienții noștri?
                </Link>
            </div>
        </section>
    )
}