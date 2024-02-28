import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import CuiIseAdreseaza from '../../../components/programe/CuiIseAdreseaza'
import Faq from '../../../components/programe/Faq'
import NewsLetter from '../../../components/global/newsletter'
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../../firebase'
import { Article, Product, Program } from '../../../types'
import FormatText from '../../../utils/FormatText'
import Proces from '../../../components/Proces'
import Logos from '../../../components/Home/Logos'
import Rezultate from '../../../components/Rezultate'
import CTA from '../../../components/CTA'
import { formatDate } from '../../../utils/formatDate'
import News from '../../../components/Home/News/News'
import FeaturedProducts from '../../../components/Home/Why-Us/FeaturedProducts'

type Props = {
  program: Program
  articles: Article[]
  products: Product[]
}

const Program = ({ program, products, articles }: Props) => {
  return (
    <>
      <Head>
          <title>{`${process.env.SITE} | ${program.title2}`}</title>
      </Head>
      <section className="flex flex-col w-full pt-[140px] md:pt-[168px] md:pb-8 items-center px-7 md:px-[110px] xl:px-[160px] 2xl:px-[276px]">
        <Image 
          src={program.imaginePrincipala.image}
          height={363}
          width={1066}
          alt='Imagine fonduri'
          className='w-full h-auto rounded-3xl md:rounded-[38px]'
        />

        <h1 className='text-secondary text-[28px] md:text-[35px] font-extrabold pt-10 text-center'>
          { program.title2 }
        </h1>

        <div className='flex flex-col w-full items-center mt-10 px-2 md:px-12'>
          <FormatText text={program.descriere2} className='text-[13px] md:text-[16px] text-[#393939] text-justify' />
          <section
            id="feedback-firme"
            className="w-full flex flex-col items-center mt-10 md:mt-24 justify-center -mx-2 md:mx-12"
          >
            <h2 className="text-secondary font-bold text-[20px] md:text-xl lg:text-2xl xl:text-4xl text-center px-7">
              Peste 100 de firme s-au dezvoltat în online alături de Socialy
            </h2>
            <h3 className="text-secondary text-[16px] md:text-lg lg:text-xl xl:text-2xl">
              Iată câteva dintre ele:
            </h3>
            
            <Logos />
          </section>
          <div className='-mx-9 md:-mx-[124px] xl:-mx-[184px] 2xl:-mx-[324px] -mt-4'>
            <Proces 
              title='Ce facem pentru tine?'
              data={program.conditions.map((item, index) => ({ id: index+1, text: item.description, title: item.condition, titluText: item.condition }))}
            />
          </div>
          {/* <Conditions conditions={program.conditions} /> */}
        </div>
        <div className='mt-4 -mx-7 md:-mx-[80px] xl:-mx-[140px] 2xl:-mx-[276px]'>
          <Rezultate />
        </div>
        <div className='-mx-2 md:mx-12'>
          <CuiIseAdreseaza title={program.title3} description={program.descriere3}  />
        </div>
        <Faq faqs={program.faqs} />
      </section>
      <CTA
        title="Contactează-ne și hai să vedem împreună cum poate crește <purple>afacerea ta<purple>"
        linkText="Completează formularul!"
        linkHref="/contact"
      />
      <FeaturedProducts 
        products={products}
      />
      <News 
        articles={articles}
      />
      <NewsLetter headingText={'Fii la curent cu cele mai recente informații despre fonduri europene!'} />
    </>
  )
}

export default Program

export const getStaticPaths = async () => {
  const programeRef = query(collection(db, 'programe-fonduri'), where('site', '==', process.env.SITE))
  const programeSnap = await getDocs(programeRef)

  const paths = programeSnap.docs.map((doc) => ({ params: { id: doc.id }}))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const programSnap = await  getDoc(doc(db, 'programe-fonduri', id))
  const program = { id: programSnap.id, ...programSnap.data() }

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
    props: { program, products, articles }, 
    revalidate: Number(process.env.REVALIDATE )
  }
}