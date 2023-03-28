import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { OurClientsTestimonial } from "../../components/Home/OurClients/OurClients";
import TestimonialItem from "../../components/testimoniale/testimoniale-items/testimonial-item";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import WhyUsCart from "../../components/Home/Why-Us/Cart";
import Carousel from 'react-elastic-carousel'

const Testimonials: OurClientsTestimonial[] = [
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

export default function Testimoniale() {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [scrollAmount]);

  return (
    <>
      <Head>
        <title>Testimoniale</title>
      </Head>
      <section
        id="about-header"
        className="relative bg-[#260056] mb-60 w-full pt-32 pb-14 flex flex-col items-center justify-center overflow-visible"
      >
        <h1 className="text-xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-20 lg:pt-0">
          Cunoaște succesele clienților noștri
        </h1>
        <span className="bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] md:w-[103vw] -rotate-2 absolute -left-5 -bottom-20 h-32" />
        <Image
          src="/images/Star 1.svg"
          alt="Hero blue circle"
          width={100}
          height={200}
          className="absolute right-0 top-0 z-[5] w-[80px] md:w-[120px]"
        />
        <Image
          src="/images/shop-hexagon.png"
          width={130}
          height={130}
          className="absolute top-7 -left-2 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
          alt="Yellow triangle"
        />
      </section>
      <section
        id="feedback-firme"
        className="w-full flex flex-col items-center my-32 justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]"
      >
        <h2 className="text-[#8717F8] font-medium text-base md:text-xl lg:text-2xl xl:text-4xl text-center">
          Peste 5000 de firme au accesat fonduri europene cu ajutorul nostru
        </h2>
        <h3 className="text-[#8717F8] font-medium text-base md:text-lg lg:text-xl xl:text-3xl">
          Iată câteva dintre ele
        </h3>
        <div className="flex mt-4 gap-5 flex-wrap justify-center">
          <Image
            src="/images/feedback-1.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-227 1.svg"
          />
          <Image
            src="/images/feedback-2.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-236 1.svg"
          />
          <Image
            src="/images/feedback-3.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-262 1.svg"
          />
          <Image
            src="/images/feedback-4.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-286 1.svg"
          />
        </div>
      </section>
      <section className="relative bg-[#260056] w-full pt-32 mt-60 pb-14 flex flex-col items-center justify-center overflow-visible">
        <span className="bg-[#260056] rounded-[200px_250px_0px_0px] w-[115vw] md:w-[103vw] -rotate-[2deg] absolute -left-5 -top-16 h-32" />
        <h2 className="text-xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-6 md:pt-20 lg:pt-0">
          Am ajutat clienți din toată România în diferite domenii
        </h2>
        <div className="flex gap-10 flex-col mt-10 md:flex-row justify-evenly items-center">
          <div className="md:px-10 md:w-fit w-full text-center py-3 cursor-pointer transition-all hover:scale-[1.05] bg-white rounded-[28.5px] text-[#8717F8]">
            fonduri europene
          </div>
          <div className="md:px-8 md:w-fit px-20 w-full text-center py-3 cursor-pointer transition-all hover:scale-[1.05] bg-[#8717F8] rounded-[28.5px] text-white">
            credite
          </div>
          <div className="md:px-10 md:w-fit px-20 w-full text-center py-3 cursor-pointer transition-all hover:scale-[1.05] bg-[#8717F8] rounded-[28.5px] text-white">
            ghiduri digitale
          </div>
        </div>
        <section id='our-clients' className='mt-[6.25rem] w-full flex items-center justify-center flex-col gap-5 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
          <div className='flex w-full justify-between items-center gap-5'>
              <Carousel
                  isRTL={false}
              >
              {
                  Testimonials.map(testimonial =>
                          <TestimonialItem key={testimonial.id} text={testimonial.text} by={testimonial.by} image={testimonial.image} />    
                  )
              }
              </Carousel>
          </div>
      </section>
        <div className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
          <div className="flex justify-start items-start">
            <h3 className="text-lg text-white font-bold">
              Consultify vine în ajutorul tău cu produse digitale pentru scalarea
              afacerii tale
            </h3>
          </div>
          {/* Cart */}
          <WhyUsCart />
        </div>
        <Link href='/shop' className="bg-[#8717F8] mt-5 px-12 py-3 text-white transition-all hover:scale-[1.05] rounded-[28.5px]">
          vezi toate produsele
        </Link>
      </section>
      <NewsLetter />
    </>
  );
}
