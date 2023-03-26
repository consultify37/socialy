import { Key, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
export interface FAQInterface {
    intrebari:any
}

const FAQAbout = ({
    intrebari
  }: FAQInterface & {}) => {
    console.log(intrebari)
    const [toggle, setToggle] = useState<boolean>(false)

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleSelectQuestion = (id: number) => {
        setSelectedQuestion(id);
    };
    return(
        <section id='faq' className='px-7 md:px-[80px] xl:px-[200px] 2xl:px-[276px] w-full flex flex-col items-center gap-2 mt-[6.25rem]'>
            <h2 className='md:text-xl lg:text-2xl xl:text-4xl text-[#006CFF] font-medium max-w-[80%] md:max-w-[60%] mb-5'>Întrebări frecvente</h2>
            {
                intrebari.map((faq: { id: number; question: any; answer: any; }) =>
                    <article key={faq.id} className='w-full rounded-[8px] bg-[#F2F4FF]'>
                        <div className='flex justify-between p-4 px-6 cursor-pointer' onClick={() => handleSelectQuestion(faq.id)}>
                            <h3 className='text-[12px] md:text-lg text-[#260056] font-bold'>{faq.question}</h3>
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
                                {faq.answer}
                            </p>
                        )}
                    </article>
                )
            }
        </section>
    )
}

export default FAQAbout