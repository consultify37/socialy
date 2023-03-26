import { NextPage } from "next";
import Head from "next/head";
import AboutHeader from "../../components/About/AboutHeader";
import FAQAbout from "../../components/About/FAQ/FAQ";
import OurStory from "../../components/About/OurStory/OurStory";
import WhyUsAbout from "../../components/About/Why-Us/WhyUs-About";
import News from "../../components/Home/News/News";

const About: NextPage = () => {
    return(
        <>
            {/* PageSettings */}
            <Head>
                <title>Consultify | About</title>
            </Head>
            {/* About header */}
            <AboutHeader />
            {/* Story */}
            <OurStory />
            {/* WhyUs */}
            <WhyUsAbout />
            {/* FAQ */}
            {/* <FAQAbout intrebari={undefined} /> */}
            {/* News */}
            <News />
        </>
    )
}

export default About