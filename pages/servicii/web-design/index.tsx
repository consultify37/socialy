import React from "react";
import Head from "next/head";
import Image from "next/image";
import FAQAbout from "../../../components/About/FAQ/FAQ";
import NewsLetter from "../../../components/global/newsletter";
import CTA from "../../../components/CTA";
import DidYouKnow from "../../../components/implementare/DidYouKnow";
import { Article, Faq2, Product } from "../../../types";
import PageHeader from "../../../components/Header/PageHeader";
import Implementare from "../../../components/OurServices/Implementare";
import Logos from "../../../components/Home/Logos";
import Proces from "../../../components/Proces";
import Garantii from "../../../components/Garantii";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { formatDate } from "../../../utils/formatDate";
import FeaturedProducts from "../../../components/Home/Why-Us/FeaturedProducts";
import News from "../../../components/Home/News/News";

const cards = [
    {
        titleBack: 'Design personalizat',
        titleFront: 'Design personalizat',
        description: 'Creăm site-uri web unice și personalizate, adaptate perfect nevoilor și viziunii afacerii dumneavoastră.'
    },
    {
        titleBack: 'Funcționalitate și performanță',
        titleFront: 'Funcționalitate și performanță',
        description: 'Ne concentrăm pe construirea unor site-uri web rapide, sigure și ușor de utilizat. Folosim cele mai recente tehnologii și practici pentru a asigura rezultate excelente.'
    },
    {
        titleBack: 'Optimizare pentru fiabilitate',
        titleFront: 'Optimizare pentru fiabilitate',
        description: 'Ne asigurăm că website-ul pe care îl creăm este construit cu o atenție deosebită la performanță și fiabilitate. Astfel, veți beneficia de un website care funcționează în mod optim în orice circumstanțe.'
    }
]

const proces = [
    {
        id: 1, title: 'Discuție Inițială și Planificare', 
        text: 'Vrem să înțelegem de la început viziunea clientului de aceea începem cu o discuție detaliată despre nevoile și obiectivele afacerii dvs. Vom stabili împreună structura și funcționalitățile pe care doriți să le includem.',
        titluText: "Planificarea pas cu pas",
    },
    {
        id: 2, title: 'Design Personalizat și Concepte Inițiale',
        text: 'În pasul doi al procesului, echipa noastră  va crea o macheta pentru site-ul dvs., bazata pe discuțiile noastre anterioare. Vă vom prezenta opțiunile și vom face modificări conform feedback-ului, pentru ca procesul să fie conform așteptărilor!',
        titluText: 'Personalizarea proiectului',
    },
    {
        id: 3, title: 'Construcție și Dezvoltare', 
        text: 'Pasul trei implică implementarea planului de acțiune convenit. După ce suntem de acord cu design-ul, echipa noastră de dezvoltare va începe să transforme conceptele într-un site funcțional. Veți fi la curent cu progresul pe tot parcursul acestui proces.',
        titluText: 'Startul în crearea website-ului',
    },
    {
        id: 4, title: 'Testare și Finalizare', 
        text: 'După ce site-ul este construit, va fi supus unor teste riguroase din partea echipei Socialy pentru a ne asigura că funcționează corect pe toate dispozitivele și că oferă o experiență fluidă pentru utilizatori. Orice ajustări necesare vor fi făcute în această etapă.',
        titluText: 'Testarea și feedback-urile finale',
    },
    {
        id: 5, title: 'Lansarea finală', 
        text: 'Pasul final este aici: odată ce am obținut un website care vă reprezintă în întregime și suntem cu toții mulțumiți de rezultat, vom facea lansare oficială. Dar pentru noi, acest moment marchează doar începutul unei colaborări continue și fructuoase. Relația noastră nu se încheie odată cu lansarea; dimpotrivă, ne angajăm să vă sprijinim și să vă ghidăm în fiecare pas pe măsură ce vă dezvoltați prezența in online. ',
        titluText: 'Lansarea in mediul online',
    },
]

type Props = {
    articles: Article[]
    products: Product[]
}

const intrebari: Faq2[] = [
    {
        id: 1, intrebari: 'Care este procesul de creare a unui site web cu voi?', raspuns: 'Procesul începe cu o discuție inițială pentru a înțelege nevoile și obiectivele tale. Urmează faza de planificare și design, unde lucrăm împreună pentru a stabili aspectul și funcționalitatea site-ului. După aprobarea designului, începem dezvoltarea și testarea, asigurându-ne că site-ul este pregătit pentru lansare.',
    },
    {
        id: 2, intrebari: 'Cât timp durează să creați un site web?', raspuns: 'Durata de dezvoltare a unui site web poate varia în funcție de complexitatea proiectului și de cerințele specifice ale clientului. În general, încercăm să respectăm programul stabilit initial, comunicând transparent pe tot parcursul procesului.',
    },
    {
        id: 3, intrebari: 'Care sunt tarifele voastre pentru crearea unui website?', raspuns: 'Tarifele noastre pentru serviciile de webdesign variază în funcție de complexitatea și nevoile fiecărui proiect. Ne place să lucrăm strâns cu clienții noștri pentru a înțelege în profunzime cerințele lor și să le oferim soluții personalizate care să se încadreze în bugetul și obiectivele lor. Astfel, costul final este determinat în urma unei evaluări a proiectului.',
    },
    {
        id: 4, intrebari: 'Există costuri ascunse sau suplimentare pentru crearea website-ului?', raspuns: 'Nu, la noi nu există costuri ascunse sau suplimentare pentru crearea website-ului. Ne străduim să fim cât mai transparenți și să oferim o experiență fără surprize neplăcute pentru clienții noștri. Prețul final este stabilit în funcție de cerințele și bugetul dumneavoastră, iar colaborarea noastră se bazează pe încredere și comunicare deschisă.',
    },
    {
        id: 5, intrebari: 'Pot să îmi actualizez sau să îmi modific site-ul după finalizarea proiectului? ', raspuns: 'Da, aveți posibilitatea să vă actualizați sau să vă modificați website-ul după finalizarea proiectului. Suntem aici să vă sprijinim în menținerea și îmbunătățirea prezenței online. Totuși, este important să menționăm că modificările ulterioare pot implica costuri suplimentare, care vor fi stabilite în funcție de natura și complexitatea actualizărilor solicitate.',
    }
]

export default function PaginaProgram({ articles, products }: Props) {
  return(
    <>
        <Head>
            <title>{`${process.env.SITE} | Web Design`}</title>
        </Head>
        <PageHeader
            title="Iată de ce ai nevoie de un website pentru afacerea ta!"
            highlighted="website"
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
        <Implementare />
        <section
            id="feedback-firme"
            className="w-full flex flex-col items-center mt-16 md:mt-32 justify-center px-7 md:px-[110px] xl:px-[160px] 2xl:px-[276px]"
        >
            <h2 className="text-secondary font-bold text-[20px] md:text-xl lg:text-2xl xl:text-4xl text-center px-7">
                Peste 150 de firme s-au dezvoltat în mediul online cu ajutorul nostru.
            </h2>
            <h3 className="text-secondary text-[16px] md:text-lg lg:text-xl xl:text-2xl mt-4">
                Iată câteva dintre ele:
            </h3>
            
            <Logos />
        </section>
        <DidYouKnow />
        <Garantii cards={cards}/>
        <div className="h-8 md:h-12 w-full"></div>
        <Proces 
            data={proces}
            title="Cum construim imaginea afacerii tale in mediul online?"
        />
        <FAQAbout intrebari={intrebari} />
        <CTA
            title="Atrage mai mulți clienți cu un <purple>site web<purple> bine proiectat!"
            linkText="Completează formularul!"
            linkHref="/contact"
        />
        {/* <FeaturedProducts 
          products={products}
        /> */}
        {/* <News 
          articles={articles}
        /> */}
        <NewsLetter headingText={'Abonează-te la newsletter si descopera cele mai noi strategii de marketing!'} />
    </>
  )
}

export const getStaticProps = async () => { 
    const articlesSnap = await  getDocs(query(collection(db, 'articles'), where('active', '==', true), where('featured', '==', true), orderBy('createdAt', 'desc'), limit(8)))
    var articles = articlesSnap.docs.map((doc) => {
        const { lastUpdated, createdAt, ...data } = doc.data()
        return ({ id: doc.id, formattedCreatedAt: formatDate(new Date(createdAt.seconds*1000)), ...data }) 
    })
  
    const collectionRef = query(collection(db, 'products'), where('active', '==', true), where('featured', '==', true), orderBy('lastUpdated', 'desc'), limit(8))
    const collectionSnap = await getDocs(collectionRef)
  
    const products: Product[] = collectionSnap.docs.map((doc) => {
        const { lastUpdated, ...data } = doc.data()
  
        return ({ id: doc.id, ...data } as Product)
    })
  
    return {
        props: { articles, products },
        revalidate: Number(process.env.REVALIDATE)
    }
  }