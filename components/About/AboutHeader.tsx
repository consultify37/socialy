import Image from "next/image"

const AboutHeader = () => {
    return(
        <section id='about-header' className='relative bg-[#260056] w-full pt-32 pb-14 flex flex-col items-center justify-center overflow-visible' style={{marginBottom: `128px`}}>
            <h1 className='text-xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-20 lg:pt-0'>Avem o experiență de peste 7 ani  în consultanță în afaceri</h1>
            <span className='bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] md:w-[103vw] -rotate-2 absolute -left-5 -bottom-20 h-32' />
            <Image src='/images/circle-hero-green.png' width={150} height={150} className='absolute -left-2 -top-28 lg:-top-44 lg:left-0 lg:w-[250px]' alt='Circle hero green' />
            <Image src='/images/yellow-triangle.png' width={100} height={100} className='absolute bottom-36 lg:bottom-5 right-0 lg:right-10 w-[80px] lg:w-[100px]' alt='Yellow triangle' />
        </section>
    )
}

export default AboutHeader