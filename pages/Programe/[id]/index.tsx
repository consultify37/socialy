import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PriceCTA from '../../../components/programe/PriceCTA'
import CuiIseAdreseaza from '../../../components/programe/CuiIseAdreseaza'
import Conditions from '../../../components/programe/Conditions'
import WhyUs from '../../../components/programe/WhyUs'
import Faq from '../../../components/programe/Faq'
import CTA from '../../../components/programe/CTA'
import WhyUsCart from '../../../components/Home/Why-Us/Cart'
import Link from 'next/link'
import News from '../../../components/Home/News/News'
import NewsLetter from '../../../components/global/newsletter'

const Program = () => {
  return (
    <>
      <Head>
          <title>Consultify | BlogPost</title>
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
          digiimm - POC 411 / POC 411 BIS
        </h1>

        <div className='flex flex-col w-full items-center mt-10 px-2 md:px-8'>
          <p className='text-[13px] md:text-[16px] text-[#393939] text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue augue ac mattis venenatis. Curabitur eu semper augue. Donec semper, elit hendrerit aliquet volutpat, orci eros vehicula nulla, et auctor magna ipsum ac metus. Nam ex dui, vestibulum vel gravida in, vehicula a enim. 
            <br/><br/>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac fermentum massa. Nullam quis cursus sem. Aliquam purus dui, finibus sit amet diam eget, venenatis rutrum velit. In vehicula purus ac malesuada fermentum. Aenean a congue sapien, nec eleifend metus. Nullam faucibus ipsum congue nunc dapibus, sed ultrices erat rhoncus. Phasellus et sagittis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ligula elit, porttitor eget aliquam ut, ornare eu est.
            <br/><br/>
            Nullam efficitur fermentum tristique. Maecenas sed odio eu nisl semper sollicitudin nec vitae nibh. Duis rhoncus mauris sit amet risus malesuada tristique. Integer consectetur ante elit, vitae venenatis felis ullamcorper ut. Sed eget ipsum urna. Etiam tincidunt accumsan tortor et aliquam. Suspendisse vitae tempus ligula. Pellentesque vitae pulvinar ipsum, nec sodales est. Etiam eu eros faucibus, rutrum elit eu, suscipit enim. Quisque tincidunt felis sapien, et rutrum risus maximus vitae. Curabitur dictum pulvinar gravida.
          </p>
          <PriceCTA />
          <CuiIseAdreseaza />
          <Conditions />
        </div>
        <WhyUs />
        <Faq />
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