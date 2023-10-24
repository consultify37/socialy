/* eslint-disable react/jsx-key */
import Axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react'
import WhyUsCartItem from "./CartItem";
import Carousel from 'react-elastic-carousel'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

const getWindowSize = () => {
    const {innerWidth, innerHeight} = window; // {innerWidth: 12, innerHeight: 23}
    return {innerWidth, innerHeight};
}

const WhyUsCart = () => {
    const [windowSize, setWindowSize] = useState({innerWidth: 0, innerHeight: 0});

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      
      handleWindowResize()

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('https://api.inspiredconsulting.ro/products/filtreaza_produse', {
          params: {
            reducere: '',
            categorie: '',
          }
        })
        .then(function (response) {
          setProducts(response.data)
          // console.log(products)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, [products]);
    const ProductsData = products;
    return(
      <section id='our-clients' className='w-full flex items-center justify-center flex-col gap-5'>
          <div className='w-full flex gap-4 overflow-x-auto scrollbar-none snap-mandatory snap-x mb-8 sm:mb-0' >
            <Carousel
              breakPoints={breakPoints}
              isRTL={false}
              pagination={windowSize.innerWidth > 640 ? false : true}
            >
            {
                  ProductsData?.map(item =>
                    <Link
                      key={item.id}
                      href={`/shop/view/${item.nume}`}
                      className="p-2 rounded-2xl bg-[#F6EFFF] shadow-lg min-w-[90%] md:min-w-[280px] flex flex-col gap-4 snap-center mt-12 mb-2 sm:mb-10"
                    >
                      <div className="relative h-[250px]">
                          <Image
                              src='/images/fonduri-mock.png' // https://api.inspiredconsulting.ro/${item.poza}
                              alt={item.nume}
                              width={152}
                              height={264}
                              className="mx-auto object-fit rounded-[10px] p-2 max-h-full absolute object-contain min-w-full max-w-full"
                          />
                      </div>
                      <div className="flex items-center justify-between px-2">
                          <div className="flex flex-col gap-x-2 max-w-[85%]">
                              <p className="text-[#8717F8] text-sm font-bold">
                                  {item.pret} lei{" "}
                                  {item.reducere && (
                                      <s className="text-[#C286FF] font-light">
                                          {item.reducere} lei
                                      </s>
                                  )}
                              </p>
                              <h4 className="text-[#00103C] font-bold text-base">
                                  {item.nume}
                              </h4>
                          </div>
                          <span className="w-11 h-11 bg-[#8717F8] flex items-center justify-center rounded-full text-white flex-shrink-0 transition-all hover:scale-[1.05]">
                              <AiOutlineShoppingCart />
                          </span>
                      </div>
                    </Link>
                  )
              }    
            </Carousel>
          </div>
      </section>
    )
}

export default WhyUsCart