import Image from "next/image"
import Link from "next/link"
import WhyUsItem1 from "../../Home/Why-Us/Item1"
import WhyUsItem2 from "../../Home/Why-Us/Item2"
import WhyUsItem3 from "../../Home/Why-Us/Item3"
import WhyUsItem4 from "../../Home/Why-Us/Item4"

const WhyUsAbout = () => {
    return(
        <section id='why-us' className='mt-[6.25rem] w-full relative pb-10'>
            {/* Frames */}
            <span className='bg-[#00103C] rounded-[200px_250px_0_0] w-[115vw] md:w-[102vw] -rotate-2 absolute -left-5 -top-20 h-32' />
            <img src='/images/circle.png' className='absolute top-[50%] translate-y-[-50%] md:translate-y-0 -right-32 md:top-4 md:right-0 z-[0] w-[200px] md:w-[300px]' width={300} height={300} alt='circle-svg' />
            {/* Content */}
            <div className='w-full bg-[#00103C] z-[2] flex items-center justify-center flex-col gap-2 mt-10 pt-14 pb-10 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                <div className='flex justify-center flex-col md:flex-row items-center gap-10 w-full -mt-10 mb-20 z-[4]'>
                    <div className='flex flex-col gap-1 items-center justify-center'>
                        <span className='font-bold text-4xl text-white'>5</span>
                        <span className='text-[#01EA88] font-semibold text-xl'>branduri partenere</span>
                    </div>
                    <div className='flex flex-col gap-1 items-center justify-center'>
                        <span className='font-bold text-4xl text-white'>7+</span>
                        <span className='text-[#FFCE00] font-semibold text-xl'>ore de activitate</span>
                    </div>
                    <div className='flex flex-col gap-1 items-center justify-center'>
                        <span className='font-bold text-4xl text-white'>4</span>
                        <span className='text-[#FB8351] font-semibold text-xl'>birouri în România</span>
                    </div>
                </div>
                <h2 className='text-white font-bold md:text-base lg:text-2xl xl:text-4xl'>De ce să alegi Inspirely?</h2>
                <div className='flex flex-wrap mt-10 justify-center items-center md:justify-between md:items-start gap-y-20'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] md:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <WhyUsItem1 />
                        <WhyUsItem2 />
                        <WhyUsItem3 />
                        <WhyUsItem4 />
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/about-home-1.png' alt='Why-Us' className='relative rounded-[35px] md:mr-10 z-[2]' width={350} height={400} placeholder='blur' blurDataURL='/images/about-home-1.png' />
                        <img src='/images/triangle.png' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                    </div>
                </div>
                <Link href='/' className='p-2 bg-[#01EA88] text-[#00103C] rounded-[28.5px] font-medium px-10 mt-5'>ce spun clienții noștri?</Link>
            </div>
        </section>
    )
}

export default WhyUsAbout