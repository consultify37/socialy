import Image from "next/image"
import Link from "next/link"

const FixedLeft = () => {
    return(
        <div>
            <div className='fixed top-[50%] hidden xl:flex flex-col gap-6 translate-y-[-50%] bg-white rounded-[38.5px] px-[19px] py-[41px] shadow-lg z-[9999] left-4'>
                <Link href='/' className='relative w-[39px] h-[39px]'>
                    <Image src='/images/inspirely-grey.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='/' className='relative w-[39px] h-[39px]'>
                    <Image src='/images/fixed-2.png'  alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='/' className='relative w-[39px] h-[39px]'>
                    <Image src='/images/consultify.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
            </div>
            <div className='fixed bottom-0 sm:hidden flex flex-row bg-white rounded-t-[40px] w-full justify-evenly -translate-x-4 py-4 pb-6 shadow-[0_25px_54px_-12px_rgba(0,0,0)] z-[9999] left-4'>
                <Link href='/' className='relative w-[34px] h-[34px]'>
                    <Image src='/images/inspirely-grey.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='/' className='relative w-[34px] h-[34px]'>
                    <Image src='/images/fixed-2.png'  alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='/' className='relative w-[34px] h-[34px]'>
                    <Image src='/images/consultify.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
            </div>
        </div>
    )
}

export default FixedLeft