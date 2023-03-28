import Image from "next/image"
import Link from "next/link"

const DiscoverItem2 = () => {
    return(
        <div className='flex gap-3 flex-col px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] w-full items-center mt-5'>
            <div className='bg-[#8717F8] rounded-[35px] p-3 w-full flex md:justify-between flex-wrap items-center justify-center'>
                <div className='w-full md:w-[48.5%] px-[19px] py-[25px] flex flex-col justify-center items-center md:justify-start md:items-start'>
                    <img loading='lazy' src='/images/socialy-logo-text.png' className='self-start' width={183} height={48} alt='Socialy Logo' />
                    <p className='text-white font-bold text-[20px] lg:text-xl mt-2'>Alături de Socialy, afacerea ta poate fi prezentă în online</p>
                    <Link href='/' className='py-3 bg-[#7000FF] text-[#260056] rounded-[28.5px] font-medium mr-auto mt-5 px-10 min-w-[250px] text-center text-sm md:text-[16px]'>
                        vreau prezența online
                    </Link>
                </div>
                <div className='px-[19px] py-[25px]'>
                    <Image src='/images/discover-2.png' placeholder='blur' className='rounded-[28.5px] md:mr-14' blurDataURL='/images/discover-2.png' width={300} height={150} alt='Discover 2' />
                </div>
            </div>
        </div>
    )
}

export default DiscoverItem2