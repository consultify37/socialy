import Image from "next/image"
import Link from "next/link"

const DiscoverItem1 = () => {
    return(
        <div className='flex gap-3 flex-col px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] w-full items-center mt-5'>
            <div className='bg-[#260056] rounded-[35px] p-3 w-full flex md:justify-between flex-wrap items-center justify-center'>
                <div className='w-full md:w-[48.5%] px-[19px] py-[25px] flex flex-col justify-center items-center md:justify-start md:items-start'>
                    <h3 className='text-white text-[24px] xl:text-4xl font-bold self-start'>LOGO CONSULTIFY</h3>
                    <p className='text-white font-bold text-[20px] md:text-lg lg:text-xl xl:text-2xl mt-2'>Aplică pentru fonduri europene și finanțează-ți afacerea</p>
                    <Link href='/' className='py-3 bg-[#0F52FF] text-white rounded-[28.5px] font-medium mr-auto mt-5 px-10 min-w-[250px] text-center text-sm md:text-[16px]'>
                        vreau fonduri europene
                    </Link>
                </div>
                <div className='px-[19px] py-[25px]'>
                    <Image src='/images/discover-1.png' placeholder='blur' className='rounded-[28.5px] md:mr-14' blurDataURL='/images/discover-1.png' width={300} height={150} alt='Discover 1' />
                </div>
            </div>
        </div>
    )
}

export default DiscoverItem1