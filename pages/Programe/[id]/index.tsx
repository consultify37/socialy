import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PriceCTA from '../../../components/programe/PriceCTA'
import CuiIseAdreseaza from '../../../components/programe/CuiIseAdreseaza'
import Conditions from '../../../components/programe/Conditions'
import WhyUs from '../../../components/programe/WhyUs'
import Faq from '../../../components/programe/Faq'
import CTA from '../../../components/programe/CTA'
import NewsLetter from '../../../components/global/newsletter'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'
import { NextPageContext } from 'next'
import { Program } from '../../../types'

type Props = {
  program: Program
}

const Program = ({ program }: Props) => {
  
  return (
    <>
      <Head>
          <title>Consultify | {program.title2}</title>
      </Head>
      <section className="flex flex-col w-full pt-[140px] md:pt-40 pb-20 items-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <Image 
          src='/images/fonduri/fonduri-img-1.png'
          height={363}
          width={1066}
          alt='Imagine fonduri'
          className='w-full h-[calc((100vw-28px*2)/3)] md:h-[calc((100vw-80px*2)/3)]  xl:h-[calc((100vw-140px*2)/3)]  2xl:h-[calc((100vw-276px*2)/3)] rounded-3xl md:rounded-[38px]'
        />

        <h1 className='text-primary text-[28px] md:text-[35px] font-extrabold pt-10 text-center'>
          { program.title2 }
        </h1>

        <div className='flex flex-col w-full items-center mt-10 px-2 md:px-8'>
          <p className='text-[13px] md:text-[16px] text-[#393939] text-justify'>
            { program.descriere }
          </p>
          <PriceCTA suma={program.suma2} />
          <CuiIseAdreseaza title={program.title3} description={program.descriere3}  />
          <Conditions conditions={program.conditions} />
        </div>
        <WhyUs />
        <Faq faqs={program.faqs} />
        <CTA
          title="Aplică acum la fonduri nerambursabile pentru afacerea ta"
          linkText="Completează formularul!"
          linkHref="/contact"
        />
        {/* <div className='h-12 md:h-24'></div> */}

        {/* <WhyUsCart /> */}
        {/* <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px] hover:scale-[1.05] transition-all">
            Vezi toate produsele
        </Link> */}
      </section>
      {/* <News /> */}
      <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />
    </>
  )
}

export default Program

export const getStaticPaths = async () => {
  const programeRef = collection(db, 'programe-fonduri')
  const programeSnap = await getDocs(programeRef)

  const paths = programeSnap.docs.map((doc) => ({ params: { id: doc.id }}))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const programSnap = await  getDoc(doc(db, 'programe-fonduri', id))
  const program = { id: programSnap.id, ...programSnap.data() }

  return { 
    props: { program }, 
    revalidate: Number(process.env.REVALIDATE )
  }
}