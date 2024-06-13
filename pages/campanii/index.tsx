/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import Image from "next/image"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import CTA from "../../components/CTA"
import TabsComponent from "../../components/TabsComponent"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { Article, Product, Program } from "../../types"
import PageHeader from "../../components/Header/PageHeader"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import FonduriComponent from "../../components/fonduri/FonduriComponent"
import { formatDate } from "../../utils/formatDate"
import FeaturedProducts from "../../components/Home/Why-Us/FeaturedProducts"
import News from "../../components/Home/News/News"

type Props = {
    categories: string[]
    programe: Program[]
    articles: Article[]
    products: Product[]
}

export default function Programe({categories, programe, articles, products}: Props) {
    const [category, setCategory] = useState('Toate')
    const [page, setPage] = useState(0)
    let maxPages = Math.ceil(programe.filter((program) => program.categorie == category || category == 'Toate').length/4)

    useEffect(() => {
        setPage(0)
    }, [category])

    const handleNext = () => {
        if ( page < maxPages-1 ) {
            window.scrollTo({top: 280, left: 0, behavior: "instant"})
            setPage(page+1)
        }
    }

    const handlePrev = () => {
        if ( page != 0 ) {
            window.scrollTo({top: 280, left: 0, behavior: "instant"})
            setPage(page-1)
        }
    }

    return (
        <>
            <Head>
                <title>Socialy | Campanii</title>
            </Head>
            <PageHeader 
                title="Alege campania potrivită nevoilor tale:"
            >
                <Image src='/images/circle-hero-left.svg' width={150} height={150} className='absolute -left-4 -top-28 lg:-top-56 lg:left-0 lg:w-[250px]' alt='Circle hero green' />
                <Image src='/images/proces/hexagon.svg' width={100} height={100} className='absolute bottom-[96px] lg:-bottom-20 right-0 lg:right-16 w-[120px] lg:w-[150px] z-10' alt='Yellow triangle' />
            </PageHeader>
            <section className="flex flex-col gap-5 pb-20 items-stretch justify-center px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                {/* <div className="bg-[#ECECEC] mb-12 flex items-center px-4 justify-center w-full rounded-full">
                    <select className="bg-[#ECECEC] px-4 rounded-full py-4 text-xl w-full outline-none" name="categorie">
                        <option value="toate">Toate</option>
                        <option value="fonduri-europene">Fonduri europene</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div> */}
                <TabsComponent 
                    values={['Toate', ...categories]}
                    setSelectedValue={setCategory}
                />
                <div className="md:px-8">
                    {
                        programe.filter((program) => program.categorie == category || category == 'Toate').filter((program, index) => (index >= page*4 && index < (page+1)*4) ).map((program, index) => (
                            <FonduriComponent program={program} index={index} key={program.id +index} />
                        ))
                    }
                </div>
                <div className='mt-32 flex items-center justify-center w-full gap-2'>
                    <RiArrowLeftSLine size={24} onClick={handlePrev} className={`${page === 0 ? 'text-[#CDCDCD]' : 'text-[#260056]'} cursor-pointer`} />
                    {
                        maxPages > 0 &&
                            Array.from({length: maxPages}, (_, i) =>
                                <p key={i} onClick={() => {window.scrollTo({top: 280, left: 0, behavior: "instant"}); setPage(i)}} className={`${i === page ? 'bg-secondary text-onSecondary' : 'text-secondary'} cursor-pointer h-8 w-8 rounded-full flex items-center justify-center`}>{i+1}</p>
                            )
                    }
                    <RiArrowRightSLine size={24} onClick={handleNext} className={`${page === maxPages - 1 ? 'text-onSecondary' : 'text-secondary'} cursor-pointer`} />
                </div>
            </section>
            <div className="-mt-24">
                <CTA
                    title="Vrei să-ți duci afacerea la nivelul <purple>următor<purple>? Lasă-ne să te ghidăm!"
                    linkText="Completează formularul!"
                    linkHref="/contact"
                />
            </div>
            {/* <FeaturedProducts 
                products={products}
            />
            <News
                articles={articles}
            /> */}
            <NewsLetter headingText={'Abonează-te și fii la curent cu cele mai noi strategii de marketing alături de comunitatea noastră!'} />
        </>
    );
}

export const getStaticProps = async () => {
    const programeRef = query(collection(db, 'programe-fonduri'), where('site', '==', process.env.SITE))
    const programeSnap = await getDocs(programeRef)

    const programe = programeSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    const categoriesRef = query(collection(db, 'categories'), where('site', '==', process.env.SITE))
    const categoriesSnap = await getDocs(categoriesRef)

    const categories = categoriesSnap.docs.map((doc) => ( doc.data().category )) 

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
        props: {
            categories, programe, articles, products
        },
        revalidate: Number(process.env.REVALIDATE)
    }
} 