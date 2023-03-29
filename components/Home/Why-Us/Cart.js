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

const WhyUsCart = () => {
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
          console.log(products)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);
    const ProductsData = products;
    return(
      <section id='our-clients' className='mt-[6.25rem] w-full flex items-center justify-center flex-col gap-5'>
          <div className='w-full flex gap-4 my-12 overflow-x-auto scrollbar-none snap-mandatory snap-x' >
            <Carousel
              breakPoints={breakPoints}
              isRTL={false}
              pagination={false}
            >
            {
                  ProductsData?.map(item =>
                    <Link
                      key={item.id}
                      href={`/shop/view/${item.nume}`}
                      className="p-2 rounded-md bg-[#F6EFFF] shadow-md min-w-[90%] md:min-w-[280px] flex flex-col gap-4 snap-center"
                    >
                      <div className="relative h-[250px]">
                          <Image
                              src={`https://api.inspiredconsulting.ro/${item.poza}`}
                              alt={item.nume}
                              width={152}
                              height={264}
                              className="mx-auto object-fit rounded-[10px] p-2 max-h-full absolute object-contain min-w-full max-w-full"
                          />
                      </div>
                      <div className="flex items-center justify-between px-2">
                          <div className="flex flex-col gap-2 max-w-[85%]">
                              <p className="text-[#8717F8] text-sm font-bold">
                                  {item.pret} lei{" "}
                                  {item.reducere && (
                                      <s className="text-[#C286FF] font-thin">
                                          {item.reducere} lei
                                      </s>
                                  )}
                              </p>
                              <h4 className="text-[#00103C] font-bold text-base">
                                  {item.nume}
                              </h4>
                          </div>
                          <span className="w-10 h-10 bg-[#8717F8] flex items-center justify-center rounded-full text-white flex-shrink-0">
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