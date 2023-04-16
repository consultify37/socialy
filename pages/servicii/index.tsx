import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import WhyUsCart from "../../components/Home/Why-Us/Cart.js";
import CTA from "../../components/CTA";
import News from "../../components/Home/News/News";
import Axios from "axios";
import toast from "react-hot-toast";
import Proces from "../../components/Proces";
import OurServices from "../../components/OurServices";

export default function Servicii() {
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
            <title>Consultify | Servicii</title>
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
                src="/images/star.svg"
                alt="Hero blue circle"
                width={100}
                height={200}
                className="absolute right-6 -bottom-32 z-[5] w-[120px] md:w-[200px]"
            />
            <Image
                src="/images/proces/hexagon.svg"
                width={130}
                height={130}
                className="absolute bottom-2 -left-2 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
                alt="Yellow triangle"
            />
        </section>
        <OurServices />
        <Proces />
        <CTA />
        <div className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="flex justify-start items-start">
                <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
                    Consultify vine în ajutorul tău cu produse digitale pentru scalarea
                    afacerii tale
                </h3>
            </div>
            <WhyUsCart />
            <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
                vezi toate produsele
            </Link>
        </div>
        <News />
        <NewsLetter />
    </>
  );
}
