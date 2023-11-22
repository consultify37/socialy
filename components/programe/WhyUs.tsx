import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyUs = () => {
  return (
    <div className="w-full flex relative flex-col lg:flex-row justify-between items-start py-6 px-6 md:py-12 md:px-12 bg-[#F7EDFF] rounded-3xl mt-12 md:mt-24">
      <Image src='/images/rezultate/triangle.svg' className="absolute md:left-[-2rem] left-[-1.5rem] top-[-3rem] md:top-[-2rem] w-[60px] md:w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
      <Image src='/images/rezultate/square.svg' className="absolute right-[-2.75rem] bottom-[-2.75rem] w-[99px] h-[99px]" alt='triangle' width={146} height={146}/>

      <Image src='/images/rezultate/circle.svg' className="hidden lg:block absolute left-[25%] bottom-[-79px] w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
      <Image src='/images/rezultate/hexagon.svg' className="hidden lg:block absolute left-[5%] bottom-[-39px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>

      <div className="flex items-start w-full flex-col md:mr-12">
          <h2 className="text-[#8717F8] text-2xl md:text-4xl font-semibold mb-4">Iată rezultatele noastre:</h2>
          <p className="text-sm mb-4 md:mb-10">Cu ani de experiență în domeniul consultanței pentru fonduri europene, am ajutat numeroase companii să-și atingă obiectivele și să-și realizeze proiectele cu succes.</p>
          <Link className="py-3 md:py-4 bg-[#8717F8] font-semibold text-[#fff] rounded-[28.5px] px-12 hover:scale-[1.05] transition-all" href="/contact">Contactează-ne!</Link>
      </div>
      <div className="grid gap-5 w-full grid-cols-2 justify-between mt-6 lg:mt-0 lg:ml-12">
          <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
              <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">850+</h6>
              <span className="text-[#8717F8] font-semibold text-[14px] md:text-2xl mt-[-10px]">clienți fericiți</span>
              <p className="text-xs">Peste 850 de companii din diverse domenii au obținut finanțarea dorită prin intermediul nostru.</p>
          </div>
          <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
              <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">20+</h6>
              <span className="text-[#BA63FF] font-semibold text-[14px] md:text-2xl mt-[-10px]">PROGRAME DIFERITE</span>
              <p className="text-xs">Colaborând atât cu start-up-uri, cât și cu instituții publice, ne-am specializat în proiecte din domenii variate.</p>
          </div>
          <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
              <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">2</h6>
              <span className="text-[#6A13D8] font-semibold text-[14px] md:text-2xl mt-[-10px]">BIROURI ROMANIA</span>
              <p className="text-xs">Siguranța și confortul clienților sunt prioritățile noastre, de aceea avem birouri deschise în mai multe orașe.</p>
          </div>
          <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
              <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">5+</h6>
              <span className="text-[#5E07A3] font-semibold text-[14px] md:text-2xl mt-[-10px]">EXPERIENTA</span>
              <p className="text-xs">Cu peste 5 ani de experiență, am ajutat oameni din diverse domenii să-și îndeplinească visurile.</p>
          </div>
      </div>
  </div>
  )
}

export default WhyUs