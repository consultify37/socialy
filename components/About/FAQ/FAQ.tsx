import { Key, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
export interface FAQInterface {
    id: number,
    intrebari:string,
    raspuns: string,
}

const FAQAbout = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleSelectQuestion = (id: number) => {
        setSelectedQuestion(id);
    };
    const Intrebari: FAQInterface[] = [
        {
            id: 1, intrebari: '1Text aici pentru acest pas', raspuns: '1Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.',
        },
        {
            id: 2, intrebari: '2fsaText aici pentru acest pas', raspuns: '2Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.',
        },
        {
            id: 3, intrebari: '3ffText aici pentru acest pas', raspuns: '3Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.',
        },
        {
            id: 4, intrebari: '41Text aici pentru acest pas', raspuns: '4Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.',
        },
        {
            id: 5, intrebari: '5Text aici pentru acest pas', raspuns: '5Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.',
        },
    ]
    return(
        <section id='faq' className='px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] w-full flex flex-col items-center gap-2 mt-4 lg:mt-[6.25rem]'>
            <h2 className='md:text-xl lg:text-2xl xl:text-4xl text-[#8717F8] font-medium max-w-[80%] md:max-w-[60%] mb-5'>Întrebări frecvente</h2>
            {
                Intrebari.map(faq => (
                    <article key={faq.id} className='w-full rounded-[8px] bg-[#F2F4FF]'>
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

export default FAQAbout