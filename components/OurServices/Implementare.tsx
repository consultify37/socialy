import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Implementare = () => {
  return (
    <section className='relative w-full mt-20 md:mt-40 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-0 justify-between flex-col md:flex-row z-[2]'>
            <div className='relative w-full md:w-full'>
                <Image 
                    src='/images/implementare/poza 1.jpg' 
                    alt='About home 2' 
                    className="w-full h-[320px] md:h-[400px] object-cover md:max-w-[450px] rounded-[35px] z-10"
                    unoptimized={true}
                    width={400} 
                    height={400} 
                />
                <Image src='/images/patrat.svg' className='absolute z-[-1] left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' />
            </div>
            <div className='w-full md:w-full'>
                <h2 className='text-xl font-bold text-secondary z-[2] mb-6 lg:text-2xl xl:text-3xl'>Acest serviciu este pentru tine dacă vrei:</h2>
                <ul className='list-none mt-4'>
                    <li className='flex'>
                        <Image src='/images/servicii/check.svg' className='mr-4 w-[24px] h-[24px] mt-1' width={28} height={28} alt='check' />
                        <p className='text-secondary text-[15px] lg:text-base font-bold'>Vizibilitate online: Un website oferă o prezență online 24/7, permițând potențialilor clienți să găsească afacerea mult mai ușor!</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4 w-[24px] h-[24px] mt-1' width={28} height={28} alt='check' />
                        <p className='text-secondary text-[15px] lg:text-base font-bold'>Credibilitate și profesionalism: Un website bine construit și actualizat transmite profesionalism și stabilitate.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4 w-[24px] h-[24px] mt-1' width={28} height={28} alt='check' />
                        <p className='text-secondary text-[15px] lg:text-base font-bold'>Extinderea pieței: Prin intermediul unui website, afacerea ta devine accesibilă nu doar local, ci și global.</p>
                    </li>
                    <li className='flex mt-4'>
                        <Image src='/images/servicii/check.svg' className='mr-4 w-[24px] h-[24px] mt-1' width={28} height={28} alt='check' />
                        <p className='text-secondary text-[15px] lg:text-base font-bold'>Promovare și marketing: Un website este o platformă excelentă pentru promovarea produselor și serviciilor tale prin intermediul conținutului relevant.</p>
                    </li>
                </ul>
                <div className='flex flex-row gap-2 md:gap-4 mt-6'>
                <Link
                    href="#" 
                    className="bg-primary py-3 text-onPrimary flex justify-center items-center font-semibold rounded-[28.5px] px-8 sm:px-12 hover:scale-[1.05] transition-all"
                >
                    Shop
                </Link>
                <Link
                    href="/contact"
                    className="py-3 bg-transparent font-semibold text-onPrimary flex items-center justify-center rounded-[28.5px] border-2 border-primary px-8 sm:px-12 hover:scale-[1.05] transition-all"
                >
                    Contactează-ne!
                </Link>
                </div>
            </div>
        </section>
  )
}

export default Implementare