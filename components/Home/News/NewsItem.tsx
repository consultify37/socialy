import Image from "next/image"
import Link from "next/link"
import { NewsInterface } from "./NewsContainer"

const NewsItem = ({cardRef, image, title, date} : Omit<NewsInterface, 'id'> & {cardRef: React.RefObject<HTMLElement>}) => {
    return(
        <article className='min-w-[90%] md:min-w-[280px] bg-[#F5F5F5] rounded-[16px] snap-center' ref={cardRef}>
            <Image src={image} placeholder='blur' blurDataURL={image} alt={title} width={300} height={300} className='w-full aspect-video h-48 rounded-[20px_20px_0_0]'/>
            <h3 className='text-[#260056] font-bold text-base p-2'>Anul 2023 va veni la pachet cu una dintre cele mai mari crize economice</h3>
            <div className='flex justify-between p-2 items-center'>
                <p className='text-[#828282] text-sm'>{date}</p>
                <Link href='/' className='text-[#8717F8] font-bold text-sm underline'>citește mai mult</Link>
            </div>
        </article>
    )
}
export default NewsItem