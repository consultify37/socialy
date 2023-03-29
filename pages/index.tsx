import React from "react";
import Head from "next/head";
import HomeHeader from "../components/Home/HomeHeader";
import AboutHome from "../components/Home/About/About";
import TrustSRL from "../components/Home/Trust";
import Discover from "../components/Home/Discover/Discover";
import WhyUs from "../components/Home/Why-Us/Why-Us";
import OurClients from "../components/Home/OurClients/OurClients";
import Parteners from "../components/Home/Parteners/Parteners";
import News from "../components/Home/News/News";
import WhyUsCart from "../components/Home/Why-Us/Cart.js";
import Link from "next/link";
import CarouselPrograme from "../components/fonduri/index";
export default function Home() {
  return (
    <>
      {/* pageSettings */}
      <Head>
        <title>Consultify | Acasă</title>
      </Head>
      {/* Header */}
      <HomeHeader />
      {/* Feedback SRL */}
      <TrustSRL />
      {/* About Us */}
      <AboutHome />
      <CarouselPrograme />
      {/* Discover */}
      {/* <Discover /> */}
      {/* Why-Us */}
      {/* <WhyUs /> */}
      {/* What our clients say about us */}
      <OurClients />
      <div className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
          <div className="flex justify-start items-start">
            <h3 className="text-lg text-[#8717F8] font-bold">
              Consultify vine în ajutorul tău cu produse digitale pentru scalarea
              afacerii tale
            </h3>
          </div>
          {/* Cart */}
          <WhyUsCart />
          <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
            vezi toate produsele
          </Link>
      </div>
      {/* Parteners */}
      {/* <Parteners /> */}
      {/* News */}
      <News />
    </>
  );
}
