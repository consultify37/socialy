import Image from "next/image"
import Link from "next/link"
import WhyUsItem1 from "../../Home/Why-Us/Item1"
import Rezultate from "../../Rezultate"

const WhyUsAbout = () => {
    return(
        <section id='why-us' className='mt-[12rem] w-full relative'>
            {/* Frames */}
            <span className='bg-secondary rounded-[200px_250px_0px_0px] w-[115vw] md:w-[102vw] -rotate-2 absolute -left-5 -top-20 h-32' />
            <div className="w-full flex relative flex-col justify-between items-center pb-6 md:pb-12 bg-secondary">
                <div className="pb-16">
                    <Rezultate background="bg-[#1D1D1D]" contact={false} />
                </div>
                
                <h2 className='text-white font-bold text-center w-full mt-12 md:mt-24 text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-16 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>De ce să alegi Socialy?</h2>
                <div className='relative flex flex-wrap w-full lg:mt-10 justify-center items-center md:justify-between md:items-center gap-y-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-8'>
                        <WhyUsItem1 
                            src="/images/questions-comment.svg"
                            text="Expertiză în domeniul marketingului, oferind soluții strategice pentru succesul afacerii tale."
                            title="Expertiză"
                        />
                        <WhyUsItem1 
                            src="/images/rocket.svg"
                            text="O echipă creativă și inovatoare, capabilă să găsească soluții neconvenționale și să creeze campanii memorabile și atrăgătoare."
                            title="Creativitate"
                        />
                        <WhyUsItem1 
                            src="/images/chess.svg"
                            text="Suntem flexibili și adaptabili, putând aborda schimbările de situație pentru a oferi soluții eficiente."
                            title="Flexibilitate"
                        />
                        <WhyUsItem1 
                            src="/images/chart.svg"
                            text="Promovăm o comunicare deschisă și transparentă cu clienții noștri, oferind informații și rapoarte clare despre performanța campaniilor și proiectelor."
                            title="Transparență"
                        />
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/About/poza 3.jpg' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400}/>
                        <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                    </div>
                </div>
                <Link href='/testimoniale' className='py-3 md:py-4 bg-primary text-onPrimary rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all mt-16'>Ce spun clienții noștri?</Link>
            </div>
            <Image src='/images/About/circle.svg' alt='triangle' width={164} height={164} className='z-[1] w-[300px] bottom-32 lg:w-[300px] xl:w-[340px] 2xl:w-[400px] absolute lg:bottom-64 xl:bottom-56 2xl:bottom-48 -right-48 lg:right-0' /> 
        </section>
    )
}

export default WhyUsAbout