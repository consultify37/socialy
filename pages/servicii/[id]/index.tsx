import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Rezultate from "../../../components/Rezultate";
import FAQAbout from "../../../components/About/FAQ/FAQ";
import NewsLetter from "../../../components/global/newsletter";
import News from "../../../components/Home/News/News";
import ShopItem from "../../../components/Shop/ShopItem";
import WhyUsCart from "../../../components/Home/Why-Us/Cart";
import CTA from "../../../components/CTA";
import OurClients from "../../../components/Home/OurClients/OurClients";

export default function PaginaProgram() {
  return(
    <>
        <Head>
            <title>Admin | Servicii</title>
        </Head>
        <section
            id="about-header"
            className="relative bg-[#260056] mb-32 lg:mb-60 w-full pb-14 flex flex-col items-center justify-center overflow-visible"
        >
            <h1 className="text-2xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-10 lg:pt-20">
                Implementare proiect
            </h1>
            <span className="bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] md:w-[103vw] -rotate-2 absolute -left-5 lg:-bottom-20 -bottom-10 h-16 lg:h-32" />
            <Image
                src="/images/proces/hexagon.svg"
                alt="Hero blue circle"
                width={100}
                height={200}
                className="absolute right-6 -bottom-20 lg:-bottom-32 z-[100] w-[120px] md:w-[200px]"
            />
            <Image
                src="/images/circle-servicii.svg"
                width={130}
                height={130}
                className="absolute lg:-top-[5rem] -left-[2rem] w-[100px] md:w-[180px]"
                alt="Triangle"
            />
        </section>
        <section className='relative w-full lg:mt-16 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-5 justify-between flex-col-reverse md:flex-row-reverse flex-wrap z-[2]'>
            <Image src='/images/servicii/circle.svg' className='absolute right-[-1.25rem] bottom-[-5rem] rotate-2 w-[100px] lg:w-[225px]' width={150} height={150} alt='Polygon img' />
            <div className='relative w-full md:w-auto'>
                <Image src='/images/home-about-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[400px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/home-about-1.png' />
            </div>
            <div className='w-full md:w-[48%]'>
                <h2 className='text-xl font-bold text-[#260056] z-[2] md:text-xl lg:text-2xl xl:text-4xl'>Cum implementam proiectele?</h2>
                <p className='text-[#260056] font-thin text-[16px] mt-5 mb-10'>
                    Cu o abordare agilă și expertiză în fondurile europene, ne asigurăm că proiectele dvs. sunt implementate cu succes. De la analiza inițială și planificare riguroasă, până la execuția atentă și monitorizarea progresului, vă oferim soluții personalizate pentru a maximiza rezultatele. Iată ce pași urmăm:
                </p>
                <ul className='list-none mt-4'>
                    <li className='flex gap-5 items-center'>
                        <span className='text-[#260056] w-8 h-8 rounded-[50%] bg-[#BA63FF] flex items-center justify-center font-medium'>1</span>
                        <p className='text-[#260056] text-md font-normal'>Achiziții strategice și conforme cu specificațiile proiectului.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-white w-8 h-8 rounded-[50%] bg-[#8717F8] flex items-center justify-center font-medium'>2</span>
                        <p className='text-[#260056] text-md font-normal'>Formulare precisă a cererilor de plată conform reglementărilor programului.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-[#00103C] w-[50px] md:w-8 h-8 rounded-[50%] bg-[#CF9FFF] flex items-center justify-center font-medium'>3</span>
                        <p className='text-[#260056] text-md font-normal'>Proces rapid și eficient de cereri de rambursare pentru maximizarea resurselor financiare.</p>
                    </li>
                </ul>
                <div className='flex gap-4 mt-6'>
                    <Link href='/contact' className='py-3 bg-[#7000FF] text-[#fff] rounded-[28.5px] font-xl text-xs lg:text-lg px-10 lg:px-12'>Contactează-ne</Link>
                    <Link href='/testimoniale' className='py-3 bg-transparent text-[#260056] rounded-[28.5px] border-2 border-[#8717F8] text-xs lg:text-lg px-10 lg:px-12'>Testimoniale</Link>
                </div>
            </div>
        </section>
        <Rezultate />
        <section className='relative w-full mt-16 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-5 justify-between flex-col md:flex-row flex-wrap z-[2]'>
            <div className='relative w-full md:w-auto'>
                <Image src='/images/home-about-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[400px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/home-about-1.png' />
                <Image src='/images/patrat.svg' className='absolute z-[-1] left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' />
            </div>
            <div className='w-full md:w-[48%]'>
                <h2 className='text-xl font-bold text-[#260056] z-[2] md:text-xl lg:text-2xl xl:text-4xl'>Acest serviciu este pentru tine dacă vrei:</h2>
                <ul className='list-none mt-4'>
                    <li className='flex'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={20} height={20} alt='check' />
                        <p className='text-[#260056] lg:text-md font-normal'>Accelerarea procesului de implementare cu resursele și know-how-ul nostru.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={20} height={20} alt='check' />
                        <p className='text-[#260056] lg:text-md font-normal'>Asigurarea conformității cu cerințele și termenele stricte ale fondurilor europene.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={20} height={20} alt='check' />
                        <p className='text-[#260056] lg:text-md font-normal'>Reducerea stresului și a presiunii asupra echipei dumneavoastră.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={20} height={20} alt='check' />
                        <p className='text-[#260056] lg:text-md font-normal'>LoremAcces la rețeaua noastră extinsă de parteneri și contacte relevante.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={20} height={20} alt='check' />
                        <p className='text-[#260056] lg:text-md font-normal'>Suportul dedicat și consultanța pe tot parcursul implementării proiectului tău.</p>
                    </li>
                </ul>
                <div className='flex gap-4 mt-6'>
                    <Link href='/shop' className='py-3 bg-[#7000FF] text-[#fff] flex items-center rounded-[28.5px] font-xl text-xs lg:text-lg px-10 lg:px-12'>Shop</Link>
                    <Link href='/contact' className='py-3 bg-transparent text-[#260056] rounded-[28.5px] border-2 border-[#8717F8] text-xs lg:text-lg px-10 lg:px-12'>contact</Link>
                </div>
            </div>
        </section>
        <OurClients />
        <section className="bg-[#36007B] mt-20 py-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex flex-col">
            <div className='flex flex-col-reverse lg:flex-row-reverse justify-between items-center'>
                <div className='relative w-full md:w-auto mt-12 lg:mt-0 ml-0 lg:ml-12'>
                    <Image src='/images/servicii/circle-lit.svg' className='absolute z-[1] right-[-8.25rem] lg:right-[-4.25rem] top-[-4.5rem] lg:top-[-2.5rem] rotate-2 w-[250px] lg:w-[150px]' width={150} height={150} alt='hexagon' />
                    <Image src='/images/home-about-2.png' alt='About home 2' className='relative z-[10] rounded-[28.5px] w-full md:w-[800px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/home-about-1.png' />
                    <Image src='/images/proces/hexagon.svg' className='absolute z-[1] left-[-2.25rem] bottom-[-2.5rem] lg:left-[-4.25rem] lg:bottom-[-3.5rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='hexagon' />
                </div>
                <div className='flex flex-col gap-2 w-full mr-12'>
                    <h2  className='font-bold text-white text-xl lg:text-2xl xl:text-4xl mb-4'>Stiai că?</h2>
                    <p className='text-white text-base'>
                        Stiai că implementarea proiectelor tale pe fonduri europene prin intermediul consultanților noștri te poate propulsa către succesul dorit? Cu o echipă de experți dedicați și o abordare strategică, garantăm rezultate remarcabile.
                        <br /><br />
                        De la planificarea detaliată și coordonarea achizițiilor, până la monitorizarea progresului, consultanții noștri transformă viziunea ta în realitate. Statisticile vorbesc de la sine: peste 97% dintre proiectele implementate de consultanții noștri sunt finalizate cu succes și nu întâmpină probleme în perioada de monitorizare, comparativ cu doar 65% în cazul implementării făcute de aplicanți. Alege parteneriatul cu noi pentru a maximiza șansele de succes și a-ți atinge obiectivele în implementarea proiectului tău pe fonduri europene    
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center mb-12'>
                <Image src='/images/PaginaProgram/cui.svg' alt='About home 1' className='relative rounded-[28.5px] w-full md:w-[800px] mx-auto z-[4]' width={400} height={400} />
                <div className='flex flex-col gap-2 w-full'>
                    <h2  className='font-bold text-white text-xl lg:text-2xl xl:text-4xl mb-4'>Serviciul perfect pentru antreprenori care vor să-și implementeze proiectul cu succes.</h2>
                    <p className='text-white text-base'>Implementarea proiectelor prin noi se adresează întreprinderilor și organizațiilor care doresc rezultate de succes. Cu expertiza vastă și abordarea profesionistă, oferim suport și consultanță pe tot parcursul procesului. Indiferent de mărimea și complexitatea proiectului, ne asigurăm că implementarea este eficientă, conform cerințelor și obiectivelor. Alegând colaborarea cu noi, beneficiați de expertiză specializată și soluții personalizate pentru succesul proiectului dvs. pe fonduri europene.</p>
                </div>
            </div>
            <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-0 lg:mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px]">
                vreau să completez!
            </Link>
        </section>
        <FAQAbout />
        <CTA
            title="Aplică acum și transformă-ți proiectele în cu Consultify!"
            linkText="Completează formularul!"
            linkHref="/contact"
        />
        <div className="w-full mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="flex justify-start items-start">
                <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
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
        <News />
        <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />
    </>
  )
}