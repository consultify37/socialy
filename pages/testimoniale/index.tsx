import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import WhyUsCart from "../../components/Home/Why-Us/Cart.js";
import Testimonials from './carousel'
import CTA from "../../components/CTA";
import News from "../../components/Home/News/News";
import Axios from "axios";
import toast from "react-hot-toast";

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
  
  const [newsletter, setNewsletter] = useState('Adresa ta de email');
  // const [buttonNews, setButtonNews] = useState('Mă abonez')
  
  const upload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Axios.get('https://api.inspiredconsulting.ro/newsletter', {
      params: {
        email: newsletter
      },
    })
    .then(function (response) {
      console.log(response.data)
      if (response.data == 'Esti deja abonat la newsletter') {
        toast.error('Esti deja abonat la newsletter')
      } else {
        toast.success("Te-ai abonat la newsletter cu succes")
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };
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
          src="/images/proces/hexagon.svg"
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
      <section className="relative bg-[#260056] w-full pt-32 mt-60 pb-14 flex flex-col items-center justify-center overflow-visible px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <span className="bg-[#260056] rounded-[200px_250px_0px_0px] w-[115vw] md:w-[103vw] -rotate-[2deg] absolute -left-5 -top-16 h-32" />
        <h2 className="text-xl md:text-4xl font-bold text-white md:max-w-[80%] text-center pt-6 md:pt-20 lg:pt-0">
          Am ajutat clienți din toată România să obțină fonduri nerambursabile pentru afacerile lor 
        </h2>
        <Testimonials />
        <div className="w-full mt-20">
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
        <div className="flex w-full mt-20 justify-between items-center">
          <div className="flex flex-col w-full mr-12 max-w-[600px]">
            <h4 className="text-white text-4xl">
              Ești în pană de idei de afaceri?
            </h4>
            <p className="text-white text-xl">
              Introdu adresa de mail, iar noi îți vom trimite un document cu peste 100 de idei de afaceri eligibile pentru fonduri nerambursabile
            </p>
            <form onSubmit={upload} className="relative flex mt-10 flex-col lg:flex-row items-center">
              <input
                className="py-4 text-[#fff] xl:px-6 px-4 lg:px-5 w-full bg-[#260056] placeholder:text-white border-2 border-[#7000FF] rounded-full"
                type="email"
                placeholder={newsletter}
                required
                onChange={(e) => setNewsletter(e.target.value)}
              />
              <button type="submit" className="text-[#fff] font-bold lg:absolute w-[max-content] mt-3 lg:mt-0 lg:right-0 z-30 transition-all hover:scale-[1.05] border-4 cursor-pointer border-[#260056] bg-[#7000FF] py-5 px-10 text-sm rounded-full">
                Vreau documentul
              </button>
            </form>
          </div>
          <div className='relative flex justify-end ml-12'>
            <Image src='/images/testimonials.png' alt='Why-Us' className='relative w-[450px] rounded-[35px] z-[2]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
            {/* <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' />  */}
            <Image src='/images/proces/hexagon.svg' className="absolute -right-[50px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/circle-litle.svg' className="absolute -left-[40px] -top-[40px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/triangle-litle.svg' className="absolute right-[15%] -top-[50px] w-[100px] h-[100px]" alt='triangle' width={250} height={250}/>
          </div>
        </div>
      </section>
      <CTA />
      <News />
      <NewsLetter />
    </>
  );
}
