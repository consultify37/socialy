import Image from "next/image"
import Link from "next/link"

const DiscoverItem3 = () => {
    return(
        <div className='flex gap-3 flex-col px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] w-full items-center mt-5'>
            <div className='bg-[#00BF6F] rounded-[35px] p-3 w-full flex md:justify-between flex-wrap items-center justify-center'>
                <div className='w-full md:w-[48.5%] px-[19px] py-[25px] flex flex-col justify-center items-center md:justify-start md:items-start'>
                    <h3 className='text-white text-[24px] xl:text-4xl font-bold self-start'>LOGO CREDITE</h3>
                    <p className='text-white font-bold text-[20px] lg:text-2xl mt-2'>Visul tău poate fi realizat cu ajutorul nostru prin credite la băncile partenere</p>
                    <Link href='/' className='py-3 bg-[#00103C] text-white rounded-[28.5px] font-medium mr-auto mt-5 px-10 min-w-[250px] text-center text-sm md:text-[16px]'>
                        vreau un credit
                    </Link>
                </div>
                <div className='px-[19px] py-[25px]'>
                    <Image src='/images/discover-3.png' placeholder='blur' className='rounded-[28.5px] md:mr-14' blurDataURL='/images/discover-3.png' width={300} height={150} alt='Discover 3' />
                </div>
            </div>
        </div>
    )
}

export default DiscoverItem3