import Image from "next/image"
import Link from "next/link"
import WhyUsItem1 from "../../Home/Why-Us/Item1"
import WhyUsItem2 from "../../Home/Why-Us/Item2"
import WhyUsItem3 from "../../Home/Why-Us/Item3"
import WhyUsItem4 from "../../Home/Why-Us/Item4"

const WhyUsAbout = () => {
    return(
        <section id='why-us' className='mt-[12rem] w-full relative pb-10'>
            {/* Frames */}
            <span className='bg-[#260056] rounded-[200px_250px_0_0] w-[115vw] md:w-[102vw] -rotate-2 absolute -left-5 -top-20 h-32' />
            <div className="w-full flex relative flex-col justify-between items-center py-6 px-6 md:py-12 md:px-12 rounded-3xl bg-[#260056] px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="w-full flex relative flex-col lg:flex-row justify-between items-start py-6 px-6 md:py-12 md:px-12 bg-[#F7EDFF] rounded-3xl">
                    <Image src='/images/rezultate/triangle.svg' className="absolute md:left-[-2rem] left-[-1.5rem] top-[-3rem] md:top-[-2rem] w-[60px] md:w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
                    <Image src='/images/rezultate/square.svg' className="absolute right-[-2.75rem] bottom-[-2.75rem] w-[99px] h-[99px]" alt='triangle' width={146} height={146}/>

                    <Image src='/images/rezultate/circle.svg' className="hidden lg:block absolute left-[25%] bottom-[-79px] w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
                    <Image src='/images/rezultate/hexagon.svg' className="hidden lg:block absolute left-[5%] bottom-[-39px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>

                    <div className="flex items-start w-full flex-col md:mr-12">
                        <h2 className="text-[#8717F8] text-2xl md:text-4xl font-semibold mb-4">DESCRIERE GENERALĂ</h2>
                        <p className="text-sm mb-4 md:mb-10">Cu ani de experiență în domeniul consultanței pentru fonduri europene, am ajutat numeroase companii să-și atingă obiectivele și să își realizeze proiectele cu succes.</p>
                        <Link className="py-3 md:py-4 bg-[#8717F8] text-white rounded-[28.5px] font-medium px-12 text-md md:text-[16px]" href="/contact">Contactează-ne!</Link>
                    </div>
                    <div className="grid gap-5 w-full grid-cols-2 justify-between mt-6 lg:mt-0 lg:ml-12">
                        <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
                            <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">850+</h6>
                            <span className="text-[#8717F8] font-semibold text-[14px] md:text-2xl mt-[-10px]">clienți fericiți</span>
                            <p className="text-xs">Peste 850 de companii din diverse domenii și-au obținut finanțarea dorită prin serviciile noastre.</p>
                        </div>
                        <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
                            <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">20+</h6>
                            <span className="text-[#BA63FF] font-semibold text-[14px] md:text-2xl mt-[-10px]">PROGRAME DIFERITE</span>
                            <p className="text-xs"> Lucrând atât cu start-up-uri, cât și cu instituții publice, ne-am specializat în proiecte din domenii variate.</p>
                        </div>
                        <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
                            <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">2</h6>
                            <span className="text-[#6A13D8] font-semibold text-[14px] md:text-2xl mt-[-10px]">BIROURI ROMANIA</span>
                            <p className="text-xs">Siguranța și confortul clienților noștri sunt prioritatea noastră, de aceea avem birouri deschise în mai multe orașe din România.</p>
                        </div>
                        <div className="flex flex-col bg-[#E3CDFF] p-2 md:p-4 rounded-xl">
                            <h6 className="text-[#260056] text-lg md:text-3xl mb-1 font-bold">5</h6>
                            <span className="text-[#5E07A3] font-semibold text-[14px] md:text-2xl mt-[-10px]">EXPERIENTA</span>
                            <p className="text-xs">Cu peste 5 ani de experiență în consultanță pentru accesarea fondurilor europene, am ajutat oameni din diverse domenii să își îndeplinească visurile.</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-white font-bold md:text-base text-center w-full mt-16 lg:text-2xl xl:text-4xl mb-4 lg:mb-8'>De ce să alegi Consultify?</h2>
                <div className='relative flex flex-wrap w-full lg:mt-10 justify-center items-center md:justify-between md:items-start gap-y-20'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <WhyUsItem1 />
                        <WhyUsItem2 />
                        <WhyUsItem3 />
                        <WhyUsItem4 />
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/About/about.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
                        <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                    </div>
                </div>
                <Link href='/' className='p-2 bg-[#8717F8] text-[#fff] rounded-[28.5px] font-medium px-10 mt-16'>ce spun clienții noștri?</Link>
            </div>
        </section>
    )
}

export default WhyUsAbout