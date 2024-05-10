import { backCarousel, nextCarousel } from "../../../utils/functions"
import {useState, useEffect, useRef} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import NewsContainer from "./NewsContainer"
import { Article } from "../../../types"

type Props = {
    articles: Article[]
}

const News = ({ articles }: Props) => {
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
        <section className='flex flex-col gap-5 items-center mt-16 md:mt-32 justify-center w-full'>
            <div className='flex justify-between w-full items-center'>
                <h2 className='md:text-xl lg:text-2xl xl:text-[32px] text-secondary font-bold pl-7 md:pl-[80px] xl:pl-[140px] 2xl:pl-[276px]'>Explorează tendințele actuale din lumea<br/> marketingului și a afacerilor:</h2>
                <div className='flex flex-row pr-7 md:pr-[80px] xl:pr-[140px] 2xl:pr-[276px]'>
                    <span className='bg-primary w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2 transition-all hover:scale-[1.05]' onClick={() => backCarousel(setScrollAmount, carouselRef, cardRef)}>
                        <AiOutlineArrowLeft className='text-onPrimary' size={18} />
                    </span>
                    <span className='bg-primary w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer transition-all hover:scale-[1.05]' onClick={() => nextCarousel(setScrollAmount, carouselRef, cardRef)}>
                        <AiOutlineArrowRight className='text-onPrimary'  size={18} />
                    </span>
                </div>
            </div>
            <NewsContainer articles={articles} cardRef={cardRef} carouselRef={carouselRef}  />
        </section>
    )
}

export default News