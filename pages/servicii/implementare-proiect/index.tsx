import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Rezultate from "../../../components/Rezultate";
import FAQAbout from "../../../components/About/FAQ/FAQ";
import NewsLetter from "../../../components/global/newsletter";
import CTA from "../../../components/CTA";
import OurClients from "../../../components/Home/OurClients/OurClients";
import DidYouKnow from "../../../components/implementare/DidYouKnow";
import { Faq2 } from "../../../types";
import PageHeader from "../../../components/Header/PageHeader";

const intrebari: Faq2[] = [
    {
        id: 1, intrebari: 'Care sunt avantajele colaborării cu noi pentru implementarea proiectelor pe fonduri europene?', raspuns: 'Colaborarea cu noi în implementarea proiectelor pe fonduri europene aduce avantaje remarcabile: echipă dedicată de experți, resurse exclusiviste și suport complet. De la planificare până la raportare, garantăm rezultate remarcabile prin know-how-ul dobandit.',
    },
    {
        id: 2, intrebari: 'Ce tipuri de proiecte puteți sprijini în cadrul implementării pe fonduri europene?', raspuns: 'Indiferent de natura proiectului dvs., putem sprijini o gamă variată de domenii în implementarea proiectelor. Fie că este vorba de dezvoltare regională, inovare, medical, mediu sau social, suntem specializați în abordarea fiecărui sector cu soluții personalizate și adaptate nevoilor dvs.',
    },
    {
        id: 3, intrebari: 'Ce experiență și expertiză aveți în gestionarea proiectelor pe fonduri europene?', raspuns: 'Avem o vastă experiență și expertiză în gestionarea proiectelor pe fonduri europene, confirmată de rezultatele noastre. Echipa noastră de specialiști este familiarizată cu cerințele și regulamentele specifice, asigurând o implementare eficientă și conformă. Beneficiați de încrederea că proiectul dvs. este în mâini sigure și că obiectivele vor fi atinse.',
    },
    {
        id: 4, intrebari: 'Ce resurse și instrumente puneți la dispoziție pentru a ne ajuta în implementarea proiectului pe fonduri europene?', raspuns: 'Pentru a vă ajuta în implementarea proiectului pe fonduri europene, punem la dispoziție o gamă completă de resurse și instrumente. Aveți acces la consultanță specializată, suport tehnic, baze de date relevante și ghiduri practice. Vă asigurăm că veți avea tot ceea ce este necesar pentru a duce proiectul la nivelul următor și a obține rezultate remarcabile.',
    },
    {
        id: 5, intrebari: 'Care sunt taxele și costurile implicate în colaborarea cu voi pentru implementarea unui proiect pe fonduri europene?', raspuns: 'Taxele și costurile implicate în colaborarea cu noi sunt transparente și echitabile. Ne angajăm să vă oferim servicii de înaltă calitate la prețuri competitive. În plus, costurile asociate implementării proiectului sunt calculate în mod eficient, asigurându-vă un raport optim între investiție și beneficii.',
    }
]

export default function PaginaProgram() {
  return(
    <>
        <Head>
            <title>Consultify | Implementare Proiect</title>
        </Head>
        <PageHeader
            title="De la concept la realitate: Implementarea proiectelor cu succes"
        >
            <Image
                src="/images/proces/hexagon.svg"
                alt="Hero blue circle"
                width={100}
                height={200}
                className="absolute md:right-6 -right-6 -bottom-16 lg:-bottom-32 z-10 w-[100px] md:w-[200px]"
            />
            <Image
                src="/images/circle-servicii.svg"
                width={130}
                height={130}
                className="absolute -top-[0rem] lg:-top-[5rem] -left-[2rem] w-[100px] md:w-[180px]"
                alt="Triangle"
            />
        </PageHeader>
        <article className="relative flex flex-wrap gap-y-10 gap-x-[6rem] md:mb-24 mt-20 md:mt-40 justify-between items-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <Image src='/images/servicii/circle.svg' className='absolute right-[-1.25rem] bottom-[-1rem] lg:bottom-[-5rem] rotate-2 w-[225px] lg:w-[225px] 2xl:w-[340px]' width={150} height={150} alt='Polygon img' />
            <div className="flex-1">
                <h2 className="text-[#260056] font-bold text-xl mb-6 lg:text-2xl xl:text-3xl">
                    Cum implementăm proiectele?
                </h2>
                <p className="text-[#260056] font-normal text-sm md:text-base">
                    Cu o abordare agilă și expertiză în fondurile europene, ne asigurăm că proiectele dvs. sunt implementate cu succes. De la analiza inițială și planificare riguroasă, până la execuția atentă și monitorizarea progresului, vă oferim soluții personalizate pentru a maximiza rezultatele. Iată ce pași urmăm:
                </p>
                <ul className='list-none my-6'>
                    <li className='flex gap-5 items-center'>
                        <span className='text-[#260056] px-[15px] w-8 h-8 rounded-[50%] bg-[#BA63FF] flex items-center justify-center font-semibold'>1</span>
                        <p className=' text-[16.5px] text-sm md:text-base font-semibold'>Achiziții strategice și conforme cu specificațiile proiectului.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-white px-[15px] w-8 h-8 rounded-[50%] bg-[#8717F8] flex items-center justify-center font-semibold'>2</span>
                        <p className='text-[16.5px] text-sm md:text-base font-semibold'>Formulare precisă a cererilor de plată conform reglementărilor programului.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-[#00103C] px-[15px] w-8 h-8 rounded-[50%] bg-[#CF9FFF] flex items-center justify-center font-semibold'>3</span>
                        <p className='text-[16.5px] text-sm md:text-base font-semibold'>Proces rapid și eficient de cereri de rambursare pentru maximizarea resurselor financiare.</p>
                    </li>
                </ul>
                <div className="flex flex-row gap-2 md:gap-4 mt-4">
                    <Link
                        href="/contact" 
                        className="bg-[#7000FF] py-3 text-[#fff] font-semibold rounded-[28.5px] flex justify-center items-center px-5 sm:px-12 hover:scale-[1.05] transition-all"
                    >
                        Contactează-ne!
                    </Link>
                    <Link
                        href="/testimoniale"
                        className="py-3 bg-transparent font-semibold text-[#260056] flex items-center justify-center rounded-[28.5px] border-2 border-[#8717F8] px-5 sm:px-12 hover:scale-[1.05] transition-all"
                    >
                        Testimoniale
                    </Link>
                </div>
            </div>
            <Image
                src="/images/implementare/implementare 1.png"
                alt="Our Story 2"
                className="w-full md:max-w-[450px] rounded-[35px] z-10"
                width={300}
                height={300}
                unoptimized={true}
            />
        </article>
        <Rezultate />
        <section className='relative w-full mt-20 md:mt-40 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-0 justify-between flex-col md:flex-row z-[2]'>
            <div className='relative w-full md:w-full'>
                <Image 
                    src='/images/implementare/implementare 3.png' 
                    alt='About home 2' 
                    className="w-full md:max-w-[450px] rounded-[35px] z-10"
                    object-fit='cover' 
                    placeholder='blur' 
                    width={400} 
                    height={400} 
                    blurDataURL='/images/home-about-1.png' 
                />
                <Image src='/images/patrat.svg' className='absolute z-[-1] left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' />
            </div>
            <div className='w-full md:w-full'>
                <h2 className='text-xl font-bold text-[#260056] z-[2] mb-6 lg:text-2xl xl:text-3xl'>Acest serviciu este pentru tine dacă vrei:</h2>
                <ul className='list-none mt-4'>
                    <li className='flex'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={28} height={28} alt='check' />
                        <p className='text-[#260056] text-[15px] lg:text-base font-bold '>Accelerarea procesului de implementare cu resursele și know-how-ul nostru.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={28} height={28} alt='check' />
                        <p className='text-[#260056] text-[15px] lg:text-base font-semibold'>Asigurarea conformității cu cerințele și termenele stricte ale fondurilor europene.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={28} height={28} alt='check' />
                        <p className='text-[#260056] text-[15px] lg:text-base font-semibold'>Reducerea stresului și a presiunii asupra echipei dumneavoastră.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={28} height={28} alt='check' />
                        <p className='text-[#260056] text-[15px] lg:text-base font-semibold'>Acces la rețeaua noastră extinsă de parteneri și contacte relevante.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4' width={28} height={28} alt='check' />
                        <p className='text-[#260056] text-[15px] lg:text-base font-semibold'>Suportul dedicat și consultanța pe tot parcursul implementării proiectului tău.</p>
                    </li>
                </ul>
                <div className='flex flex-row gap-2 md:gap-4 mt-6'>
                <Link
                    href="/shop" 
                    className="bg-primary py-3 text-[#fff] flex justify-center items-center font-semibold rounded-[28.5px] px-8 sm:px-12 hover:scale-[1.05] transition-all"
                >
                    Shop
                </Link>
                <Link
                    href="/contact"
                    className="py-3 bg-transparent font-semibold text-[#260056] flex items-center justify-center rounded-[28.5px] border-2 border-[#8717F8] px-8 sm:px-12 hover:scale-[1.05] transition-all"
                >
                    Contactează-ne!
                </Link>
                </div>
            </div>
        </section>
        <div className="h-4 md:h-8"></div>
        <OurClients />
        <DidYouKnow />
        <FAQAbout intrebari={intrebari} />
        <CTA
            title="Aplică acum și transformă-ți <purple>proiectele<purple> în realitate cu Consultify!"
            linkText="Completează formularul!"
            linkHref="/contact"
        />
        {/* <div className="w-full mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
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
        </div> */}
        {/* <News /> */}
        <NewsLetter headingText={'Abonează-te la newsletter pentru informații actualizate despre afaceri!'} />
    </>
  )
}