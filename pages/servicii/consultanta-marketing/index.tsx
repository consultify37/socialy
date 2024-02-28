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

type Props = {
    articles: Article[]
    products: Product[]
}

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

export default function PaginaProgram({ articles, products }: Props) {
  return(
    <>
        <Head>
            <title>{`${process.env.SITE} | Consultanță Marketing`}</title>
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
        <Implementare />
        <section
            id="feedback-firme"
            className="w-full flex flex-col items-center mt-16 md:mt-32 justify-center px-7 md:px-[110px] xl:px-[160px] 2xl:px-[276px]"
        >
            <h2 className="text-secondary font-bold text-[20px] md:text-xl lg:text-2xl xl:text-4xl text-center px-7">
                Peste 100 de firme s-au dezvoltat în online alături de Socialy
            </h2>
            <h3 className="text-secondary text-[16px] md:text-lg lg:text-xl xl:text-2xl">
                Iată câteva dintre ele:
            </h3>
            
            <Logos />
        </section>
        <DidYouKnow />
        <Garantii />
        <div className="h-8 md:h-12 w-full"></div>
        <Proces />
        <FAQAbout intrebari={intrebari} />
        <CTA
            title="Aplică acum și transformă-ți <purple>proiectele<purple> în realitate cu Consultify!"
            linkText="Completează formularul!"
            linkHref="/contact"
        />
        <FeaturedProducts 
          products={products}
        />
        <News 
          articles={articles}
        />
        <NewsLetter headingText={'Abonează-te la newsletter pentru informații actualizate despre afaceri!'} />
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