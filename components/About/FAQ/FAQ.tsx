import { Key, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";

export interface FAQInterface {
    id: number,
    intrebari:string,
    raspuns: string,
}

const IntrebariStandard: FAQInterface[] = [
    {
        id: 1, intrebari: 'Ce tipuri de servicii de marketing oferiți?', raspuns: 'Oferim o gamă completă de servicii de marketing, inclusiv strategii de branding, publicitate online, gestionarea campaniilor pe rețelele sociale, creare de conținut video, webdesign și multe altele.',
    },
    {
        id: 2, intrebari: 'La ce rezultate ma pot aștepta de la colaborarea cu agenția voastră?', raspuns: 'Colaborarea cu noi îți va aduce rezultate tangibile în creșterea vizibilității, generarea de lead-uri calificate, creșterea traficului pe site-ul tău și, în final, sporirea vânzărilor și a profitabilității afacerii tale. Ne măsurăm succesul în funcție de rezultatele pe care le obții și suntem dedicați obținerii performanței pe termen lung.',
    },
    {
        id: 5, intrebari: 'Cum veți ține cont de bugetul meu de marketing și cum veți maximiza eficiența acestuia?', raspuns: 'Înțelegem importanța eficienței și a respectării bugetului. Vom dezvolta strategii de marketing care să fie aliniate cu bugetul disponibil și să maximizeze rezultatele obținute.',
    },
    {
        id: 7, intrebari: 'Cum veți adapta strategiile de marketing la schimbările și tendințele din industrie?', raspuns: 'Suntem mereu conectați la schimbările și tendințele din industria noastră. Vom monitoriza în permanență evoluțiile și vom adapta strategiile noastre în consecință.',
    },
    {
        id: 8, intrebari: 'De ce ar trebui să aleg agenția voastră de marketing în locul concurenților?', raspuns: 'Alegerea noastră ca partener de marketing îți aduce beneficii semnificative. Ne distingem prin abordarea noastră personalizată, expertiza noastră în domeniu, rezultatele tangibile pe care le obținem și relațiile solide pe care le construim cu clienții noștri. ',
    },
]

type Props = {
    intrebari?: FAQInterface[]
}

const FAQAbout = ({ intrebari=IntrebariStandard }: Props) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleSelectQuestion = (id: number) => {
        if (id === selectedQuestion) {
          setSelectedQuestion(null); // Close the selected question if it's clicked again
        } else {
          setSelectedQuestion(id); // Open the clicked question
        }
    };
    
    return(
        <section id='faq' className='mt-16 md:mt-32 px-7 md:px-[100px] xl:px-[160px] 2xl:px-[370px] w-full flex flex-col items-center gap-2'>
            <h2 className='text-2xl xl:text-4xl text-secondary font-bold max-w-[80%] md:max-w-[60%] mb-6 md:mb-8'>Întrebări frecvente:</h2>
            {
                intrebari.map(faq => (
                    <article key={faq.id} className='w-full rounded-[8px] bg-admin-card'>
                        <div className='flex justify-between p-4 px-6 cursor-pointer w-full' onClick={() => handleSelectQuestion(faq.id)}>
                            <h3 className='text-sm md:text-lg text-onPrimary font-bold'>{faq.intrebari}</h3>
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
                            <p className='p-4 px-6 text-onPrimary text-sm md:text-base'>
                                {faq.raspuns}
                            </p>
                        )}
                    </article>
                ))
            }
        </section>
    )
}

export default FAQAbout