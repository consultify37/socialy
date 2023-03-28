import Image from "next/image";
import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import TestimonialItem from "./TestimonialItem";
import Carousel from 'react-elastic-carousel';

export interface OurClientsTestimonial {
  id: number;
  text: string;
  by: string;
  image: string;
}
const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

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
                <Carousel
                    breakPoints={breakPoints}
                    isRTL={false}
                    pagination={true}
                    showArrows={true}
                >
                {
                    Testimonials.map(testimonial =>
                            <TestimonialItem key={testimonial.id} text={testimonial.text} by={testimonial.by} image={testimonial.image} />    
                    )
                }
                </Carousel>
            </div>
        </section>
    )
}

export default OurClients;
