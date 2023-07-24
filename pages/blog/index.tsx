/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import { PaginationBlog } from "../../utils/functions"
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import NewsInterface from '../../components/Home/News/NewsContainer';
import { isPartiallyEmittedExpression } from "typescript";

export interface blogData {
    id: number;
    categorie: string
    image: string;
    title: string;
    data: string;
    description: string;
    link: string;
}

export default function Testimoniale() {
    const Blog: blogData[] = [
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/blog-post-1.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'marketing', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'marketing', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'marketing', image: '/images/blog-post-1.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/blog-post-test-2.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/home-about-2.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/blog-post-1.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
        {
            id: 1, categorie: 'fonduri-europene', image: '/images/news-image.png', title: 'Ghid fonduri europene', description: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', data: '20/01/2023', link: '/blog-post'
        },
    ]
    const [page, setPage] = useState(0)
    let maxPages = Math.ceil(Blog.length/9)
    const [products, setProducts] = useState(Blog);
    const [reducere, setReducere] = useState(false);
  
    const [showReduced, setShowReduced] = React.useState(false);
  
    const toggleShowReduced = () => {
      setShowReduced(!showReduced);
    };
  
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }
    
    let filteredData = selectedCategory
        ? Blog.filter(products => products.categorie === selectedCategory)
        : Blog;
    if (selectedCategory == 'toate') {
        filteredData = Blog;
    }
  return (
    <>
        <Head>
            <title>Admin | Blog</title>
        </Head>
        <section
            id="about-header"
            className="relative bg-[#260056] mb-40 w-full pt-[110px] pb-16 flex flex-col items-center justify-center overflow-visible"
        >
            <h1 className="text-xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-20 lg:pt-0">
                Află noutățile din business și nu numai
            </h1>
            <span className="bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] md:w-[103vw] -rotate-2 absolute -left-5 -bottom-[3rem] z-[-1] h-32" />
            <Image
                src="/images/Star 1.svg"
                alt="Hero blue circle"
                width={100}
                height={200}
                className="absolute right-0 top-0 z-[5] w-[80px] md:w-[120px]"
            />
            <Image
                src="/images/shop-hexagon.png"
                width={130}
                height={130}
                className="absolute top-7 -left-2 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
                alt="Yellow triangle"
            />
        </section>
        <section className="flex flex-col gap-5 pb-20 items-stretch justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <select onChange={handleCategoryChange} className="bg-[#ECECEC] rounded-full py-4 px-3 text-xl" name="categorie">
                <option value="toate">Toate</option>
                <option value="fonduri-europene">Fonduri europene</option>
                <option value="marketing">Marketing</option>
            </select>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
                {
                    PaginationBlog(filteredData, page, 9).map(item =>
                        <article className='max-w-[350px] m-auto relative bg-[#F5F5F5] rounded-[16px] snap-center'>
                            <div className="relative overflow-hidden h-64 rounded-[20px_20px_0_0] object-cover">
                                <Image src={item.image} placeholder='blur' blurDataURL={item.image} alt={item.title} width={300} height={300} className='w-full object-cover h-full'/>
                            </div>
                            <h3 className='text-[#260056] font-bold text-base p-2'>{item.description}</h3>
                            <div className='flex justify-between p-2 items-center'>
                                <p className='text-[#828282] text-sm'>{item.data}</p>
                                <Link href={item.link} className='text-[#8717F8] font-bold text-sm underline'>citește mai mult</Link>
                            </div>
                        </article>                        
                    )
                }
            </div>
            <div className='mt-4 flex items-center justify-center w-full gap-2'>
                <RiArrowLeftSLine size={24} onClick={() => setPage(0)} className={`${page === 0 ? 'text-[#CDCDCD]' : 'text-[#260056]'} cursor-pointer`} />
                {
                    maxPages > 0 &&
                        Array.from({length: maxPages}, (_, i) =>
                            <p key={i} onClick={() => setPage(i)} className={`${i === page ? 'bg-[#260056] text-white' : 'text-[#260056]'} cursor-pointer h-8 w-8 rounded-full flex items-center justify-center`}>{i+1}</p>
                        )
                }
                <RiArrowRightSLine size={24} onClick={() => setPage(maxPages-1)} className={`${page === maxPages - 1 ? 'text-[#CDCDCD]' : 'text-[#260056]'} cursor-pointer`} />
            </div>
        </section>
      <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />
    </>
  );
}
