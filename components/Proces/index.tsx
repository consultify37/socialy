import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProcesData {
    id: number;
    title: string,
    text: string,
    titluText: string,
}

export default function Proces(){
    const Proces: ProcesData[] = [
        {
            id: 1, title: 'Analizarea societății', 
            text: 'Primul pas în colaborarea noastră constă într-o analiză atentă a firmei dumneavoastră și identificarea programului activ care se potrivește cel mai bine cu obiectivele și nevoile afacerii dumneavoastră. Avem o echipă dedicată de specialiști cu experiență în identificarea celor mai bune programe de finanțare și înțelegerea tuturor cerințelor și criteriilor de eligibilitate. Cu noi la bord, sunteți sigur că veți fi încadrat în programul potrivit, care va maximiza șansele de a obține finanțarea dorită.',
            titluText: "Analizarea societății și încadrarea în programul cel mai potrivit",
        },
        {
            id: 2, title: 'Pregătirea documentației',
            text: 'În pasul 2 al procesului nostru, ne concentrăm pe obținerea tuturor informațiilor necesare pentru a începe redactarea proiectului. În cadrul acestei etape, solicităm clienților noștri să ne ofere toate documentele necesare pentru a putea continua. Avem o echipă de specialiști care se ocupă de analiza atentă a informațiilor furnizate, astfel încât să ne asigurăm că proiectul este construit în conformitate cu cerințele specifice ale programului selectat. În plus, colaborăm îndeaproape cu clienții noștri pe tot parcursul procesului de redactare, pentru a ne asigura că soluțiile propuse corespund nevoilor și cerințelor lor specifice.',
            titluText: 'Pregătirea documentației necesare pentru proiect',
        },
        {
            id: 3, title: 'Depunerea proiectului', 
            text: 'Depunerea proiectului este momentul crucial în obținerea finanțării dorite. După ce am finalizat analiza și scrierea proiectului, acesta este depus cu mare atenție la instituția responsabilă. În acest punct, noi preluăm întreaga responsabilitate și ne asigurăm că proiectul depus respectă toate criteriile și normele impuse de instituție. După depunere, urmează momentul așteptării verificării proiectului, moment în care noi monitorizăm cu atenție toate etapele procesului pentru a ne asigura că acesta are loc în cele mai bune condiții.',
            titluText: 'Depunerea proiectului și verificarea lui',
        },
        {
            id: 4, title: 'Aprobarea proiectului', 
            text: 'Pasul 4 în procesul nostru de a ajuta clienții să obțină finanțarea necesară este primirea deciziei de aprobare a proiectului depus, un pas crucial pentru succesul afacerii dumneavoastră. În acest moment, intrăm în acțiune și demarăm procedurile de achiziție, astfel încât clientul să beneficieze de cele mai bune oferte. De asemenea, începem și perioada de implementare a proiectului, iar echipa noastră dedicată va monitoriza cu atenție fiecare etapă a acestui proces pentru a asigura succesul final.',
            titluText: 'Aprobarea proiectului și începerea perioadei de implementare',
        },
        {
            id: 5, title: 'Perioada de monitorizare', 
            text: 'După ce am finalizat cu succes implementarea proiectului, începem perioada de monitorizare. Suntem mereu alături de tine pentru a-ți oferi consultanță și a răspunde la întrebări pe toată durata monitorizării. Este o perioadă de grație în care savurăm succesul, dar și de a verifica dacă firma este eligibilă pentru alte programe de finanțare. Suntem mândri de parteneriatele noastre și suntem pregătiți să ajutăm și alte companii să-și atingă obiectivele lor de afaceri prin proiecte finanțate cu succes.',
            titluText: 'Perioada de monitorizare și finalizarea obligațiilor',
        },
    ]
    const [procesActive, setProcesActive] = useState(false);
    const [selectedProces, setSelectedProces] = useState(Proces[0]);

    const handleClick = (proces: ProcesData) => {
        setProcesActive(true);
        setSelectedProces(proces);
        console.log(proces)
        console.log(selectedProces)
    }
    return(
        <section className="relative w-full mt-20 py-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <Image src='/images/proces/triangle-proces.svg' className="absolute right-[1rem] bottom-[3rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
            <div className="w-[120%] bg-[#260056] h-full absolute rotate-[-2.69deg] rounded-3xl left-[-10%] z-[-1] top-0"></div>

            <Image src='/images/proces/circle-proces.svg' className="hidden md:block absolute right-[-80px] top-0 w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/proces/hexagon.svg' className="hidden md:block absolute bottom-[5%] -left-12 w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
            <h2 className="text-[#fff] text-3xl md:text-4xl text-center font-bold mb-28">Ghidul nostru pentru accesarea fondurilor: Pas cu pas cu Consultify</h2>
            <div className="w-full flex relative flex-col md:flex-row justify-between items-start">
                <div className="flex items-start w-full flex-col md:mr-12">
                    {Proces.map(proces => (
                        <button
                            key={proces.id}
                            onClick={() => handleClick(proces)}
                            className={`flex w-full max-w-[400px] flex-row items-center mb-6 py-8 px-6 justify-start ${
                                proces.id == selectedProces.id
                                    ? "bg-[#D8A6FF] rounded-2xl"
                                    : ""
                            }`}
                        >
                            <Image
                                src="/images/proces/check.svg"
                                className="mr-4"
                                width={31}
                                height={31}
                                alt="check"
                            />
                            <span
                                className={`text-xl ${
                                    proces.id === selectedProces.id
                                        ? "text-[#260056]"
                                        : "text-[#fff]"
                                }`}
                            >
                                {proces.id}. {proces.title}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex w-full md:ml-12 flex-col items-start">
                    <h4 className="text-[#fff] text-2xl lg:text-4xl text-center lg:text-left font-semibold mb-8">{selectedProces.titluText}</h4>
                    <p className="text-md text-[#fff]">{selectedProces.text}</p>
                </div>
            </div>
        </section>
    )
}