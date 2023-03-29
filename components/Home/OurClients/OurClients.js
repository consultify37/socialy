import Image from "next/image";
import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const OurClients = () => {
    const Testimonials = [
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
                        <article key={testimonial.id} className='bg-[#260056] mx-[15px] rounded-[16px] justify-center md:justify-between items-center flex-col md:flex-row gap-y-5 flex flex-1 pt-10 md:pt-5'>
                            <div className='w-full md:w-[49%] px-7 md:px-10'>
                                <h3 className='text-white font-bold text-base md:max-w-[90%] md:text-[24px]'>{testimonial.text}</h3>
                                <p className='text-[16px] text-[#B8CCFF] font-medium mt-2'>{testimonial.by}</p>
                            </div>
                            <Image src={testimonial.image} blurDataURL='/images/ourclients.png' alt='Our clients' width={200} height={200} className='mt-auto w-[250px] md:mr-5 rounded-[18px]'/>
                        </article>
                    )
                }
                </Carousel>
            </div>
        </section>
    )
}

export default OurClients;
