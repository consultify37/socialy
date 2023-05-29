import { Key, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
export interface FAQInterface {
    id: number,
    intrebari:string,
    raspuns: string,
}

const FAQServicii = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleSelectQuestion = (id: number) => {
        if (id === selectedQuestion) {
          setSelectedQuestion(null); // Close the selected question if it's clicked again
        } else {
          setSelectedQuestion(id); // Open the clicked question
        }
    };
      
    const Intrebari: FAQInterface[] = [
        {
            id: 1, intrebari: 'Care sunt avantajele colaborării cu noi pentru implementarea proiectelor pe fonduri europene?', raspuns: 'Colaborarea cu noi în implementarea proiectelor pe fonduri europene aduce avantaje remarcabile: echipă dedicată de experți, resurse exclusiviste și suport complet. De la planificare până la raportare, garantăm rezultate de succes prin know-how și soluții personalizate.',
        },
        {
            id: 2, intrebari: 'Ce tipuri de proiecte puteți sprijini în cadrul implementării pe fonduri europene?', raspuns: 'Indiferent de natura proiectului dvs., putem sprijini o gamă variată de domenii în implementarea pe fonduri europene. Fie că este vorba de dezvoltare regională, inovare, medical, mediu sau social, suntem specializați în abordarea fiecărui sector cu soluții personalizate și adaptate nevoilor dvs.',
        },
        {
            id: 3, intrebari: 'Ce experiență și expertiză aveți în gestionarea proiectelor pe fonduri europene?', raspuns: 'Avem o vastă experiență și expertiză în gestionarea proiectelor pe fonduri europene, confirmată de rezultatele noastre de succes. Echipa noastră de specialiști este familiarizată cu cerințele și regulamentele specifice, asigurând o implementare eficientă și conformă. Beneficiați de încrederea că proiectul dvs. este în mâini sigure și că obiectivele vor fi atinse.',
        },
        {
            id: 4, intrebari: 'Ce resurse și instrumente puneți la dispoziție pentru a ne ajuta în implementarea proiectului pe fonduri europene?', raspuns: 'Pentru a vă ajuta în implementarea proiectului pe fonduri europene, punem la dispoziție o gamă completă de resurse și instrumente. Aveți acces la consultanță specializată, suport tehnic, baze de date relevante și ghiduri practice. Vă asigurăm că veți avea tot ceea ce este necesar pentru a duce proiectul la nivelul următor și a obține rezultate remarcabile.',
        },
        {
            id: 5, intrebari: 'Care sunt taxele și costurile implicate în colaborarea cu noi pentru implementarea unui proiect pe fonduri europene?', raspuns: 'Taxele și costurile implicate în colaborarea cu noi pentru implementarea proiectului pe fonduri europene sunt transparente și echitabile. Ne angajăm să vă oferim servicii de înaltă calitate la prețuri competitive. În plus, costurile asociate implementării proiectului sunt calculate în mod eficient, asigurându-vă un raport optim între investiție și beneficii.',
        }
    ]
    return(
        <section id='faq' className='mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] w-full flex flex-col items-center gap-2'>
            <h2 className='text-2xl xl:text-4xl text-[#8717F8] font-bold max-w-[80%] md:max-w-[60%] mb-5'>Întrebări frecvente</h2>
            {
                Intrebari.map(faq => (
                    <article key={faq.id} className='w-full rounded-[8px] bg-[#FAF3FF]'>
                        <div className='flex justify-between p-4 px-6 cursor-pointer' onClick={() => handleSelectQuestion(faq.id)}>
                            <h3 className='text-[12px] md:text-lg text-[#260056] font-bold'>{faq.intrebari}</h3>
                            <Image
                                className={`w-[20px] right-[10px] top-[23px]
                                ${
                                faq.id === selectedQuestion
                                    ? "rotate-180 transition-all"
                                    : "transition-all"
                                }
                                `}
                                src="/images/arrow-qa.svg"
                                width={20}
                                height={20}
                                alt="arrow-qa"
                            />
                        </div>
                        {faq.id === selectedQuestion && (
                            <p className='p-4 px-6 text-[#3F3F3F] text-[12px] md:text-base'>
                                {faq.raspuns}
                            </p>
                        )}
                    </article>
                ))
            }
        </section>
    )
}

export default FAQServicii