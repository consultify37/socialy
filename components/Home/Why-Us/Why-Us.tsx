import Image from "next/image";
import Link from "next/link";
import WhyUsItem1 from "./Item1";
import WhyUsItem2 from "./Item2";
import WhyUsItem3 from "./Item3";
import WhyUsItem4 from "./Item4";
import OurHelp from "./OurHelp";

const WhyUs = () => {
    return(
        <section id='why-us' className='mt-[10.25rem] w-full relative pb-10'>
            {/* Frames */}
            <span className='bg-[#260056] rounded-[200px_250px_0_0] w-[115vw] md:w-[102vw] -rotate-2 absolute -left-5 -top-20 h-32' />
                        {/* Content */}
            <div className='w-full bg-[#260056] z-[2] flex items-center justify-center flex-col gap-2 mt-10 pt-14 pb-10 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                <h2 className='text-white md:mb-8 font-bold md:text-xl lg:text-2xl xl:text-4xl'>De ce să alegi Consultify?</h2>
                <div className='flex flex-wrap mt-10 gap-10 justify-center items-center md:justify-between md:items-start gap-y-20'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] flex-1 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <WhyUsItem1 />
                        <WhyUsItem2 />
                        <WhyUsItem3 />
                        <WhyUsItem4 />
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/home-about-1.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
                        <img src='/images/triangle.png' alt='triangle' width={164} height={164} className='z-[1] absolute -top-6 -left-7 lg:-top-16 mlgd:-left-16 w-[80px] lg:w-[164px]' />
                        <img src='/images/circle.png' className='absolute bottom-2 md:-bottom-2 left-60 md:left-72 z-[0] w-[350px] md:w-[400px]' width={400} height={300} alt='circle-svg' />
                    </div>
                </div>
                <Link href='/' className='py-3 bg-[#7000FF] text-[#260056] text-[16px] rounded-[28.5px] font-medium px-16 mt-5'>despre noi</Link>
                <OurHelp />
            </div>
        </section>
    )
}
export default WhyUs;
