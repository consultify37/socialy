import Image from "next/image";
import Link from "next/link";

const Item2About = () => {
    return(
        <div className='w-full mt-16 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-5 justify-between flex-col-reverse md:flex-row flex-wrap z-[2]'>
                <div className='relative w-full md:w-auto'>
                    <Image src='/images/about-home-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[400px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/about-home-1.png' />
                    <Image src='/images/polygon.png' className='absolute -left-5 -top-8 rotate-2 w-[65px] md:w-[150px]' width={150} height={150} alt='Polygon img' />
                </div>
                <div className='w-full md:w-[48%]'>
                    <h2 className='md:text-xl lg:text-2xl xl:text-4xl font-bold text-white'>Cum funcționează inspirely?</h2>
                    <p className='text-white font-thin text-[16px] mt-5'>
                        Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                    </p>
                    <ul className='list-none mt-4'>
                        <li className='flex gap-5 items-center'>
                            <span className='text-[#00103C] w-8 h-8 rounded-[50%] bg-[#01EA88] flex items-center justify-center font-medium'>1</span>
                            <p className='text-white text-[16px] font-normal'>Lorem lispum dolor sit amet</p>
                        </li>
                        <li className='flex gap-5 items-center mt-4'>
                            <span className='text-white w-8 h-8 rounded-[50%] bg-[#006CFF] flex items-center justify-center font-medium'>2</span>
                            <p className='text-white text-[16px] font-normal'>Lorem lispum dolor sit amet</p>
                        </li>
                        <li className='flex gap-5 items-center mt-4'>
                            <span className='text-[#00103C] w-8 h-8 rounded-[50%] bg-[#FFCE00] flex items-center justify-center font-medium'>3</span>
                            <p className='text-white text-[16px] font-normal'>Lorem lispum dolor sit amet</p>
                        </li>
                    </ul>
                    <div className='flex gap-4 mt-6'>
                        <Link href='' className='p-2 bg-[#006CFF] text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]'>shop</Link>
                        <Link href='' className='p-2 bg-transparent text-white rounded-[28.5px] border-2 border-[#01EA88] font-medium text-xs md:text-[16px] px-10'>testimoniale</Link>
                    </div>
                </div>
            </div>
    )
}
export default Item2About
