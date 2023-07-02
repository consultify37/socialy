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
import Rezultate from "../components/Rezultate";
import Proces from "../components/Proces";
import CTA from "../components/CTA";
import NewsLetter from "../components/global/newsletter";
import Garantii from "../components/Garantii";
export default function Home() {
  return (
    <>
      {/* pageSettings */}
      <Head>
        <title>Consultify | Acasă</title>
      </Head>
      <HomeHeader />
      <TrustSRL />
      <AboutHome />
      <CarouselPrograme />
      <Rezultate />
      <Garantii />
      <Proces />
      <OurClients />
                  <CTA
                title="Aplică acum și transformă-ți proiectele în realitate cu Consultify!"
                linkText="Completează formularul!"
                linkHref="/contact"
            />
      <div className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
          <div className="flex justify-start items-start">
            <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
              Crește eficiența și productivitatea cu serviciile și produsele digitale oferite de Consultify și Inspirely!
            </h3>
          </div>
          {/* Cart */}
          <WhyUsCart />
          <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
            vezi toate produsele
          </Link>
      </div>
      <News />
      <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />
    </>
  );
}
