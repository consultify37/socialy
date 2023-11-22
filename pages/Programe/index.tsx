/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import CTA from "../../components/CTA"
import TabsComponent from "../../components/TabsComponent"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Program } from "../../types"
import PageHeader from "../../components/Header/PageHeader"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

type Props = {
    categories: string[]
    programe: Program[]
}

export default function Programe({categories, programe}: Props) {
    const [category, setCategory] = useState('Toate')
    const [page, setPage] = useState(0)
    let maxPages = Math.ceil(programe.filter((program) => program.categorie == category || category == 'Toate').length/4)

    useEffect(() => {
        setPage(0)
    }, [category])

    const handleNext = () => {
        if ( page < maxPages-1 ) {
            window.scrollTo({top: 280, left: 0, behavior: 'smooth'})
            setPage(page+1)
        }
    }

    const handlePrev = () => {
        if ( page != 0 ) {
            window.scrollTo({top: 280, left: 0, behavior: 'smooth'})
            setPage(page-1)
        }
    }

    return (
        <>
            <Head>
                <title>Consultify | Programe</title>
            </Head>
            <PageHeader 
                title="Alege programul potrivit pentru tine:"
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
                            index % 2 === 0 ? (
                                <div 
                                    className={"rounded-4xl relative w-full xl:min-h-[400px] flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-20 py-2 bg-cover bg-no-repeat align-center " + ( index == 0 ? 'mt-[2rem] md:mt-[4rem]' : 'mt-[8rem]')  }
                                    key={program.id}
                                >   
                                    <div style={{background: `url('${program.backgroundImage.image}')`, backgroundSize: 'cover'}} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                    <div style={{background: "rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                    <div className="flex flex-col justify-center items-center rounded-2xl relative top-[100px] z-[5] bg-[#260056] py-8 px-8">
                                        <h5 className="text-white text-xl md:text-4xl font-bold mb-6">{program.title}</h5>
                                        <ul className="list-disc list-inside">
                                            { program.bulletPoints.map((bulletPoint, index) => (
                                                <li key={index} className="text-[#EDD7FF] font-semibold text-[15px] md:text-base mb-4">{ bulletPoint }</li>
                                            ))}
                                        </ul>
                                        <Link className="py-3 mt-4 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all" href={"/Programe/" + program.id}>Aplică acum!</Link>
                                    </div>
                                    <div className='flex flex-col items-end justify-center pt-12 z-[1]'>
                                        <h5 className='text-white font-bold text-sm lg:text-xl mb-2 md:mb-3'>
                                            {program.text1}
                                        </h5>
                                        <h4 className='text-white text-xl lg:text-4xl mb-2 md:mb-3 font-extrabold'>
                                            { program.text2 }
                                        </h4>
                                        <h6 className='text-white text-xl lg:text-4xl md:mb-3 font-extrabold'>
                                            { program.suma }
                                        </h6>
                                    </div>
                                </div>
                            ) : (
                                <div 
                                    className="rounded-4xl relative w-full h-auto flex flex-col-reverse lg:flex-row-reverse justify-between px-4 lg:px-20 py-2 bg-cover bg-no-repeat align-center mt-[8rem]"
                                    key={program.id}
                                >   
                                    <div style={{background: `url('${program.backgroundImage.image}')`, backgroundSize: 'cover'}} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                    <div style={{background: "rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                    <div className="flex flex-col justify-center items-center rounded-2xl relative top-[100px] z-[5] bg-[#260056] py-8 px-8">
                                        <h5 className="text-white text-xl font-bold lg:text-4xl mb-6">{ program.title }</h5>
                                        <ul className="list-disc list-inside">
                                            { program.bulletPoints.map((bulletPoint, index) => (
                                                <li key={index} className="text-[#EDD7FF] font-semibold text-[15px] md:text-base mb-4">{ bulletPoint }</li>
                                            ))}
                                        </ul>
                                        <Link className="py-3 mt-4 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all" href={"/Programe/" + program.id}>Aplică acum!</Link>
                                    </div>
                                    <div className='flex flex-col items-start justify-center z-[100] pt-12'>
                                        <h5 className='text-white font-bold text-sm lg:text-xl mb-2 md:mb-3'>
                                            {program.text1}
                                        </h5>
                                        <h4 className='text-white text-xl lg:text-4xl mb-2 md:mb-3 font-extrabold'>
                                            { program.text2 }
                                        </h4>
                                        <h6 className='text-white text-xl lg:text-4xl md:mb-3 font-extrabold'>
                                            { program.suma }
                                        </h6>
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
                <div className='mt-32 flex items-center justify-center w-full gap-2'>
                    <RiArrowLeftSLine size={24} onClick={handlePrev} className={`${page === 0 ? 'text-[#CDCDCD]' : 'text-[#260056]'} cursor-pointer`} />
                    {
                        maxPages > 0 &&
                            Array.from({length: maxPages}, (_, i) =>
                                <p key={i} onClick={() => {window.scrollTo({top: 280, left: 0, behavior: 'smooth'}); setPage(i)}} className={`${i === page ? 'bg-[#260056] text-white' : 'text-[#260056]'} cursor-pointer h-8 w-8 rounded-full flex items-center justify-center`}>{i+1}</p>
                            )
                    }
                    <RiArrowRightSLine size={24} onClick={handleNext} className={`${page === maxPages - 1 ? 'text-[#CDCDCD]' : 'text-[#260056]'} cursor-pointer`} />
                </div>
            </section>
            <div className="-mt-24">
                <CTA
                    title="Aplică acum la fonduri <purple>nerambursabile<purple> pentru afacerea ta!"
                    linkText="Completează formularul!"
                    linkHref="/contact"
                />
            </div>
            {/* <div className="w-full mt-32 px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex justify-start items-start">
                    <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
                    Consultify vine în ajutorul tău cu produse digitale pentru scalarea
                    afacerii tale
                    </h3>
                </div>
                <WhyUsCart />
                <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px] hover:scale-[1.05] transition-all">
                    Vezi toate produsele
                </Link>
            </div>
            <News /> */}
            <NewsLetter headingText={'Abonează-te și află secretele succesului în obținerea finanțăriilor europene'} />
        </>
    );
}

export const getStaticProps = async () => {
    const programeRef = collection(db, 'programe-fonduri')
    const programeSnap = await getDocs(programeRef)

    const programe = programeSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    const categoriesRef = collection(db, 'categories')
    const categoriesSnap = await getDocs(categoriesRef)

    const categories = categoriesSnap.docs.map((doc) => ( doc.data().category )) 

    return {
        props: {
            categories, programe
        },
        revalidate: Number(process.env.REVALIDATE)
    }
} 
