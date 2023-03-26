import Image from "next/image"
import Link from "next/link"
import Item1About from "./Item1"
import Item2About from "./Item2"

const AboutHome = () => {
    return(
        <section id='trust-us' className='bg-[#00103C] mt-[6.25rem] w-full py-20 relative'>
            <img src='/images/eclipse.png' alt='Eclipse about' className='hidden md:block absolute right-0 top-[50%] translate-y-[45%] md:translate-y-0 md:top-20 z-[0] w-[220px] md:w-[300px]' width={300} height={300} />
            <Item1About />
            <Item2About />
        </section>
    )
}

export default AboutHome