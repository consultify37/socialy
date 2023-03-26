/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavAdmin from '../../../components/admin-nav';

type ProductsData = {
    titlu: string,
    categorie: string,
    keyword: string,
    data: string,
};

const ProductsData: any[] = [
  {
    titlu: 'Cum a afectat pandemia piața digitală?',
    categorie: 'Ghid fonduri europene',
    keyword: 'keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword',
    data: '12/12/2022',
  },
  {
    titlu: 'Cum a afectat pandemia piața digitală?',
    categorie: 'Ghid fonduri europene',
    keyword: 'keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword',
    data: '12/12/2022',
  },
  {
    titlu: 'Cum a afectat pandemia piața digitală?',
    categorie: 'Ghid fonduri europene',
    keyword: 'keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword',
    data: '6/11/2022',
  },
  {
    titlu: 'Cum a afectat pandemia piața digitală?',
    categorie: 'Ghid fonduri europene',
    keyword: 'keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword',
    data: '12/12/2022',
  },
  {
    titlu: 'Cum a afectat pandemia piața digitală?',
    categorie: 'Ghid fonduri europene',
    keyword: 'keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword',
    data: '12/12/2022',
  },
]

export default function ProductsPanel() {
  
  const [products, setProducts] = useState(ProductsData);
  const [reducere, setReducere] = useState(false);

  const [showReduced, setShowReduced] = React.useState(false);

  const toggleShowReduced = () => {
    setShowReduced(!showReduced);
  };

  const productsToShow = showReduced
    ? ProductsData.filter(product => product.data !== null)
    : ProductsData;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  }
  
  const filteredData = selectedCategory
      ? ProductsData.filter(products => products.categorie === selectedCategory)
      : ProductsData;
  
  return (
    <div className="flex p-10 pt-28">
      <NavAdmin />
      <div className="container mx-auto mt-12 ml-10">
          <Head>
            <title>Admin - comenzi</title>
          </Head>
          <div className="flex justify-between  mb-8">
            <h2 className="text-4xl font-bold">Toate articolele</h2>
            <Link
                href='/admin/adauga-produs'
                className='py-3 bg-[#0F52FF] text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]'
            >
                Articol nou
            </Link>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full bg-[#E3E8FF] text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-black uppercase bg-[#C6CFFF]">
                  <tr>
                    <th scope="col" className="py-3 text-lg font-lg px-6">
                      Titlu articol
                    </th>
                    <th scope="col" className="py-3 text-lg font-lg px-6">
                      Categorie
                    </th>
                    <th scope="col" className="py-3 text-lg font-lg px-6">
                      Keywords
                    </th>
                    <th scope="col" className="py-3 text-lg font-lg px-6">
                      Data
                    </th>
                    <th scope="col" className="py-3 text-lg font-lg px-6">
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                        productsToShow.map(product => (
                          <tr key={product.categorie} className="border-b bg-[#E3E8FF]">
                            <th scope="row" className="py-4 text-sm font-medium px-6 text-black">
                                {product.titlu}
                            </th>
                            <td className="py-4 text-sm font-medium px-6 text-black">
                              {product.categorie}
                            </td>
                            <td className="py-4 text-sm font-medium px-6 max-w-xs text-black">
                              {product.keyword}
                            </td>
                            <td className="py-4 text-sm font-medium px-6 text-black">
                              {product.data}
                            </td>
                            <td className="py-4 text-sm font-medium px-6 text-black">
                              <div className="row flex justify-end">
                                <button className="p-2 rounded-md bg-[#EAEDFF] flex mr-6">
                                  editeaza
                                </button>
                                <button className="p-2 rounded-md bg-[#EAEDFF] items-center flex">
                                  <img src='/images/trash.svg' width='20' height='20' className="w-[20px]" alt='delete' />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                    }
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
}
