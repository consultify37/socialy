import { link } from "fs";
import NewsItem from "./NewsItem";


export interface NewsInterface {
    id: number;
    image: string;
    title: string;
    date: string;
    link: string;
}
const NewsContainer = ({cardRef, carouselRef} : {cardRef: React.RefObject<HTMLElement>, carouselRef: React.RefObject<HTMLDivElement>}) => {
    const News: NewsInterface[] = [
        {
            id: 1, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
        {
            id: 2, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
        {
            id: 3, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
        {
            id: 4, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
        {
            id: 5, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
        {
            id: 6, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
        {
            id: 7, image: '/images/news-image.png', title: 'Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice', date: '7 noiembrie 2022', link: '/blog-post'
        },
    ]
    return(
        <div className='flex gap-4 mt-5 overflow-x-auto w-full scrollbar-none' ref={carouselRef}>
            {
                News.map((news, index) =>
                    <div 
                        key={news.id}
                        className={index == 0 ? "pl-7 md:pl-[80px] xl:pl-[140px] 2xl:pl-[276px]" : ( index == News.length - 1 ? "pr-4" : "" )}
                    >
                        <NewsItem cardRef={cardRef} image={news.image} title={news.title} date={news.date} link={news.link} /> 
                    </div>   
                )
            }
        </div>
    )
}
export default NewsContainer