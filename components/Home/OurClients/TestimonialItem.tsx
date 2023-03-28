import Image from "next/image"
import { OurClientsTestimonial } from "./OurClients"

const TestimonialItem = ({text, by, image}: Omit<OurClientsTestimonial, 'id'>) => {
    return(
        <article className='bg-[#260056] mx-[15px] rounded-[16px] justify-center md:justify-between items-center flex-col md:flex-row gap-y-5 flex flex-1 pt-10 md:pt-5'>
            <div className='w-full md:w-[49%] px-7 md:px-10'>
                <h3 className='text-white font-bold text-base md:max-w-[90%] md:text-[24px]'>{text}</h3>
                <p className='text-[16px] text-[#B8CCFF] font-medium mt-2'>{by}</p>
            </div>
            <Image src={image} blurDataURL='/images/ourclients.png' alt='Our clients' width={200} height={200} className='mt-auto w-[250px] md:mr-5 rounded-[18px]'/>
        </article>
    )
}

export default TestimonialItem