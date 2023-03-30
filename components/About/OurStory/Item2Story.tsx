import Image from "next/image";
import Link from "next/link";

const Item2Story = () => {
  return (
    <div className='w-full mt-16 mx-auto flex gap-y-20 gap-5 justify-between flex-col-reverse md:flex-row flex-wrap z-[2]'>
      <div className='relative w-full md:w-auto'>
          <Image src='/images/home-about-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[400px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/home-about-1.png' />
          <Image src='/images/patrat.svg' className='absolute left-[-4.25rem] bottom-[-2rem] rotate-2 w-[65px] md:w-[150px]' width={150} height={150} alt='Polygon img' />
      </div>
      <div className='w-full md:w-[48%]'>
        <h2 className='md:text-xl lg:text-2xl xl:text-4xl font-bold text-[#260056]'>Cum funcționează Consultify?</h2>
        <p className='text-[#260056] font-thin text-[16px] mt-5'>
            Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
        </p>
        <ul className='list-none mt-4'>
            <li className='flex gap-5 items-center'>
                <span className='text-[#260056] w-8 h-8 rounded-[50%] bg-[#BA63FF] flex items-center justify-center font-medium'>1</span>
                <p className='text-[#260056] text-[16px] font-normal'>Lorem lispum dolor sit amet</p>
            </li>
            <li className='flex gap-5 items-center mt-4'>
                <span className='text-white w-8 h-8 rounded-[50%] bg-[#8717F8] flex items-center justify-center font-medium'>2</span>
                <p className='text-[#260056] text-[16px] font-normal'>Lorem lispum dolor sit amet</p>
            </li>
            <li className='flex gap-5 items-center mt-4'>
                <span className='text-[#00103C] w-8 h-8 rounded-[50%] bg-[#CF9FFF] flex items-center justify-center font-medium'>3</span>
                <p className='text-[#260056] text-[16px] font-normal'>Lorem lispum dolor sit amet</p>
            </li>
        </ul>
        <div className='flex gap-4 mt-6'>
            <Link href='/shop' className='py-4 bg-[#8717F8] text-white rounded-[28.5px] font-medium px-14 text-xs md:text-[16px]'>shop</Link>
            <Link href='/testimoniale' className='py-4 bg-transparent text-[#260056] rounded-[28.5px] border-2 border-[#BA63FF] font-medium text-xs md:text-[16px] px-14'>testimoniale</Link>
        </div>
      </div>
    </div>
  );
};

export default Item2Story;
