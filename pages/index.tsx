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
      {/* Discover */}
      {/* <Discover /> */}
      {/* Why-Us */}
      {/* <WhyUs /> */}
      {/* What our clients say about us */}
      <OurClients />
      {/* Parteners */}
      {/* <Parteners /> */}
      {/* News */}
      <News />
    </>
  );
}
