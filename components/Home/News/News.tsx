import { backCarousel, nextCarousel } from "../../../utils/functions"
import {useState, useEffect, useRef} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import NewsContainer from "./NewsContainer"
const News = () => {
    const cardRef = useRef<HTMLElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [scrollAmount, setScrollAmount] = useState<number>(0)
    useEffect(() => {
        carouselRef.current?.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        })
    }, [scrollAmount])
    return(
        <section className='flex flex-col gap-5 items-center mt-[4rem] justify-center w-full px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <div className='flex justify-between w-full items-center'>
                <h2 className='md:text-xl lg:text-2xl xl:text-4xl text-[#8717F8] font-bold max-w-[80%] md:max-w-[60%]'>Descoperă ultimile noutăți din business si mediul online</h2>
                <div className='flex flex-row'>
                    <span className='bg-[#260056] w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2' onClick={() => backCarousel(setScrollAmount, carouselRef, cardRef)}>
                        <AiOutlineArrowLeft className='text-[#fff]' size={18} />
                    </span>
                    <span className='bg-[#260056] w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer' onClick={() => nextCarousel(setScrollAmount, carouselRef, cardRef)}>
                        <AiOutlineArrowRight className='text-[#fff]'  size={18} />
                    </span>
                </div>
            </div>
            <NewsContainer cardRef={cardRef} carouselRef={carouselRef}  />
        </section>
    )
}

export default News