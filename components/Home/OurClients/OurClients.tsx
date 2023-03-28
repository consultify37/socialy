import Image from "next/image";
import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import TestimonialItem from "./TestimonialItem";

export interface OurClientsTestimonial {
  id: number;
  text: string;
  by: string;
  image: string;
}

const OurClients = () => {
    const [step, setStep] = useState<number>(0)
    const Testimonials: OurClientsTestimonial[] = [
        {
            id: 1, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
        {
            id: 2, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
        {
            id: 3, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
        {
            id: 4, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
        {
            id: 5, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
        {
            id: 6, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
        {
            id: 7, text: 'Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify', by: 'Marian Savu - afacere în agricultură', image: '/images/ourclients.png'
        },
    ]
    return(
        <section id='our-clients' className='mt-[6.25rem] w-full flex items-center justify-center flex-col gap-5 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <div className='flex w-full justify-between items-center gap-5'>
                <span className='bg-[#8717F8] hidden w-[43px] h-[43px] md:flex items-center justify-center rounded-full cursor-pointer' onClick={() => setStep(old => old <= 0 ? Testimonials.length -1 : old - 1)}>
                    <MdOutlineNavigateBefore className='text-white' size={24} />
                </span>
                {
                    Testimonials.filter((_, i) => i === step).map(testimonial =>
                        <TestimonialItem key={testimonial.id} text={testimonial.text} by={testimonial.by} image={testimonial.image} />    
                    )
                }
                <span className='bg-[#8717F8] hidden w-[43px] h-[43px] md:flex items-center justify-center rounded-full cursor-pointer' onClick={() => setStep(old => old >= Testimonials.length - 1 ? 0 : old + 1)}>
                    <MdOutlineNavigateNext className='text-white' size={24} />
                </span>
            </div>
            <div className='flex gap-3 mt-5 items-center justify-center mb-5'>
                {
                    Testimonials.map((testimonial, i) =>
                        step === i ?
                            <Image key={testimonial.id} src='/images/step-checked.png' className='cursor-pointer' width={10} height={20} alt='Step checked'  />
                            
                        : 
                            <Image key={testimonial.id} src='/images/step-unchecked.png' className='cursor-pointer' width={10} height={20} alt='Step checked' onClick={() => setStep(i)}/>
                    )
                }
            </div>
        </section>
    )
}

export default OurClients;
