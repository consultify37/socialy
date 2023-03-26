/* eslint-disable react/jsx-key */
import Axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react'
import WhyUsCartItem from "./CartItem";

const WhyUsCart = ({cardRef, carouselRef} : {cardRef: React.RefObject<HTMLAnchorElement>, carouselRef: React.RefObject<HTMLDivElement>}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('https://api.inspiredconsulting.ro/products/filtreaza_produse', {
          params: {
            reducere: '',
            categorie: '',
          }
        })
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);

    const ProductsData: any[] = products;
    
    return(
        <div className='flex gap-4 mt-5 overflow-x-auto scrollbar-none snap-mandatory snap-x' ref={carouselRef}>
            {
                ProductsData?.map(item =>
                    <WhyUsCartItem nume={''} pret={0} reducere={0} poza={undefined} title={''} image={''} price={0} />
                )
            }    
        </div>
    )
}

export default WhyUsCart