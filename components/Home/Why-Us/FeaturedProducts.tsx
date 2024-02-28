/* eslint-disable react/jsx-key */
import React, { createRef, useEffect, useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Product } from '../../../types'
import { backCarousel, nextCarousel } from '../../../utils/functions'
import ProductCard from '../../shop/ProductCard'

type Props = {
  products: Product[]
  dark?: boolean
}

const FeaturedProducts = ({ products, dark=false }: Props) => {
  const [scrollAmount, setScrollAmount] = useState(0)
  const [cardRef, setCardRef] = useState< any >([])
  const carouselRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    // add or remove refs
    setCardRef((cardRefs: any) =>
      Array(products.length)
        .fill(undefined)
        .map((_, i) => cardRefs[i] || createRef())
    )
  }, [products, products.length])
  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return console.log("nu exista")
    carouselRef.current.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    })
  }, [scrollAmount])

  return(
    <div className="flex flex-col mt-16 lg:mt-32">
      <div className="flex justify-between w-full items-center">
        <h2 
          className="text-[15px] lg:text-[32px] mr-2 sm:max-w-[65%] lg:mr-32 xl:max-w-[65%] text-secondary font-bold pl-7 md:pl-[80px] xl:pl-[140px] 2xl:pl-[276px]"
          style={{color: dark ? 'white' : 'black' }}
        >
          Inspirely vine în ajutorul tău cu produse digitale pentru scalarea afacerii tale
        </h2>
        <div className="flex flex-row pr-7 md:pr-[80px] xl:pr-[140px] 2xl:pr-[276px]">
          <span
            className="bg-primary w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2 hover:scale-105 transition-all"
            onClick={() =>
              backCarousel(setScrollAmount, carouselRef, cardRef[0])
            }
          >
            <AiOutlineArrowLeft className="text-onPrimary" size={18} />
          </span>
          <span
            className="bg-primary w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2 hover:scale-105 transition-all"
            onClick={() =>
              nextCarousel(setScrollAmount, carouselRef, cardRef[0])
            }
          >
            <AiOutlineArrowRight className="text-onPrimary" size={18} />
          </span>
        </div>
      </div>
      <div
        className="flex gap-4 md:gap-5 xl:gap-6 items-stretch overflow-y-auto scrollbar-none pb-6 pt-6"
        ref={carouselRef}
      >
        { products.map((item, index) => (
          <div key={item.id!+index} className={ index == 0 ? ' ml-7 md:ml-[80px] xl:ml-[140px] 2xl:ml-[276px] ' : '' }>
            <ProductCard 
              cardRef={cardRef[index]}
              hasMargin={index == products.length - 1}
              product={item}
              className="w-[280px] min-w-[280px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts