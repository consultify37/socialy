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
        <div className='flex gap-4 mt-5 overflow-x-auto snap-mandatory snap-x w-full scrollbar-none' ref={carouselRef}>
            {
                News.map(news =>
                    <NewsItem key={news.id} cardRef={cardRef} image={news.image} title={news.title} date={news.date} link={news.link} />    
                )
            }
        </div>
    )
}
export default NewsContainer