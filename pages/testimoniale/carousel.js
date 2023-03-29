/* eslint-disable react/jsx-key */
import Axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

  
const Testimonials = () => {
    const Testimonial = [
        {
          id: 1,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
        {
          id: 2,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
        {
          id: 3,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
        {
          id: 4,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
        {
          id: 5,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
        {
          id: 6,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
        {
          id: 7,
          text: "Am reușit să ridic fonduri în valoare de 200.000 euro cu ajutorul Consultify",
          by: "Marian Savu - afacere în agricultură",
          image: "/images/ourclients.png",
        },
      ];
    return(
        <section id='our-clients' className='mt-[6.25rem] w-full flex items-center justify-center flex-col gap-5 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <div className='flex w-full justify-between items-center gap-5'>
                <Carousel
                    isRTL={false}
                >
                {
                    Testimonial.map(testimonial =>
                        <article key={testimonial.id} className="bg-[#36007B] rounded-[16px] justify-center md:justify-between items-center flex-col md:flex-row gap-y-5 flex flex-1 pt-10 md:pt-5">
                            <div className="w-full md:w-200px px-7 md:px-5 py-2">
                                <h3 className="text-white font-bold text-base md:max-w-[90%] md:text-[24px]">
                                {testimonial.text}
                                </h3>
                                <p className="text-sm text-[#B8CCFF] font-medium mt-2">{testimonial.by}</p>
                                <p className="text-[#B8CCFF] font-medium mt-2">
                                Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce
                                sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla
                                libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                                </p>
                            </div>
                            <Image
                                src={testimonial.image}
                                blurDataURL="/images/ourclients.png"
                                alt="Our clients"
                                width={200}
                                height={200}
                                className="mt-auto w-[250px] md:mr-5 rounded-[18px]"
                            />
                        </article>
                    )
                }
                </Carousel>
            </div>
      </section>
    )
}

export default Testimonials