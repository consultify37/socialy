import Image from "next/image"
import Link from "next/link"

const FixedLeft = () => {
    return(
        <div className='fixed top-[50%] hidden md:flex flex-col gap-6 translate-y-[-50%] bg-white rounded-[38.5px] p-3 py-10 shadow-lg z-[50] left-4'>
            <Link href='/' className='relative w-[30px] h-[30px]'>
                <Image src='/images/fixed-1.png' alt='Fixed 1' fill object-fit='contain' />
            </Link>
            <Link href='/' className='relative w-[30px] h-[30px]'>
                <Image src='/images/fixed-2.png'  alt='Fixed 1' fill object-fit='contain' />
            </Link>
            <Link href='/' className='relative w-[30px] h-[30px]'>
                <Image src='/images/fixed-3.png' alt='Fixed 1' fill object-fit='contain' />
            </Link>
        </div>
    )
}

export default FixedLeft