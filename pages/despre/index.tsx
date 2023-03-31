import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AboutHeader from "../../components/About/AboutHeader";
import FAQAbout from "../../components/About/FAQ/FAQ";
import OurStory from "../../components/About/OurStory/OurStory";
import WhyUsAbout from "../../components/About/Why-Us/WhyUs-About";
import News from "../../components/Home/News/News";
import WhyUsCart from "../../components/Home/Why-Us/Cart";

const About: NextPage = () => {
    return(
        <>
            {/* PageSettings */}
            <Head>
                <title>Consultify | Programe</title>
            </Head>
            {/* About header */}
            <AboutHeader />
            {/* Story */}
            <OurStory />
            {/* WhyUs */}
            <WhyUsAbout />
            {/* FAQ */}
            <FAQAbout />
            <div className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex justify-start items-start">
                    <h3 className="text-3xl text-[#8717F8] font-bold">
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
            {/* News */}
            <News />
        </>
    )
}

export default About