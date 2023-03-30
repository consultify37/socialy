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
            <div className='w-full bg-[#260056] z-[2] flex items-center justify-center flex-col gap-2 mt-10 pt-14 pb-10 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                <div className="w-full flex relative flex-row justify-between items-start py-12 px-12 bg-[#F7EDFF] rounded-3xl mb-16">
                    <Image src='/images/rezultate/triangle.svg' className="absolute left-[-2rem] top-[-2rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
                    <Image src='/images/rezultate/square.svg' className="absolute right-[-2.75rem] bottom-[-2.75rem] w-[99px] h-[99px]" alt='triangle' width={146} height={146}/>

                    <Image src='/images/rezultate/circle.svg' className="absolute left-[25%] bottom-[-79px] w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
                    <Image src='/images/rezultate/hexagon.svg' className="absolute left-[5%] bottom-[-39px] w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>

                    <div className="flex items-start w-full flex-col mr-12">
                        <h2 className="text-[#8717F8] text-4xl font-semibold mb-4">Iată rezultatele noastre</h2>
                        <p className="text-sm mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor.</p>
                        <Link className="py-4 bg-[#8717F8] text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]" href="/contact">Contactează-ne</Link>
                    </div>
                    <div className="grid gap-5 w-full grid-cols-2 justify-between ml-12">
                        <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                            <h6 className="text-[#260056] text-[28px] font-bold">5000+</h6>
                            <span className="text-[#8717F8] font-semibold text-2xl mt-[-10px]">clienți fericiți</span>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                            <h6 className="text-[#260056] text-[28px] font-bold">5000+</h6>
                            <span className="text-[#BA63FF] font-semibold text-2xl mt-[-10px]">programe active</span>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                            <h6 className="text-[#260056] text-[28px] font-bold">5000+</h6>
                            <span className="text-[#6A13D8] font-semibold text-2xl mt-[-10px]">birouri în Romania</span>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col bg-[#E3CDFF] p-4 rounded-xl">
                            <h6 className="text-[#260056] text-[28px] font-bold">5000+</h6>
                            <span className="text-[#5E07A3] font-semibold text-2xl mt-[-10px]">ani de experiență</span>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-white font-bold md:text-base lg:text-2xl xl:text-4xl mb-16'>De ce să alegi Consultify?</h2>
                <div className='relative flex flex-wrap mt-10 justify-center items-center md:justify-between md:items-start gap-y-20'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] md:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <WhyUsItem1 />
                        <WhyUsItem2 />
                        <WhyUsItem3 />
                        <WhyUsItem4 />
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/About/about.png' alt='Why-Us' className='relative rounded-[35px] md:mr-10 z-[2]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
                        <img src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                    </div>
                </div>
                <Link href='/' className='p-2 bg-[#7000FF] text-[#260056] rounded-[28.5px] font-medium px-10 mt-5'>ce spun clienții noștri?</Link>
            </div>
            <Image src='/images/About/circle.svg' className='absolute bottom-[50%] translate-y-[-50%] md:translate-y-0 -right-32 md:bottom-[20%] md:right-0 z-[0] w-[200px] md:w-[300px]' width={300} height={300} alt='circle-svg' />
        </section>
    )
}

export default WhyUsAbout