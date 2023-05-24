import Image from "next/image";
import Link from "next/link";

const Item2About = () => {
    return(
        <div className='w-full mt-16 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-5 justify-between flex-col-reverse md:flex-row flex-wrap z-[2]'>
            <div className='relative w-full md:w-auto'>
                <Image src='/images/home-about-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[400px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/home-about-1.png' />
                <Image src='/images/patrat.svg' className='absolute left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' />
            </div>
            <div className='w-full md:w-[48%]'>
                <h2 className='text-xl font-bold text-white z-[2] md:text-xl lg:text-2xl xl:text-4xl'>Cum funcționează Consultify?</h2>
                <p className='text-white font-thin text-[16px] mt-5'>
                    Bine ai venit la Consultify - experți în accesarea fondurilor europene! Misiunea noastră este de a sprijini antreprenorii în accesarea fondurilor europene și de a-i ajuta să-și transforme proiectele în realitate. Cu o echipă tânără și dedicată, suntem gata să ne asumăm provocările și să obținem cele mai bune rezultate pentru clienții noștri. Iată câteva dintre obiectivele noastre:
                </p>
                <ul className='list-none mt-4'>
                    <li className='flex gap-5 items-center'>
                        <span className='text-[#260056] px-[15px] w-8 h-8 rounded-[50%] bg-[#BA63FF] flex items-center justify-center font-medium'>1</span>
                        <p className='text-white text-[16px] font-normal'>Să fim lideri de piață în domeniul consultanței în accesarea fondurilor europene.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-white px-[15px] w-8 h-8 rounded-[50%] bg-[#8717F8] flex items-center justify-center font-medium'>2</span>
                        <p className='text-white text-[16px] font-normal'>Să creștem gradul de satisfacție al clienților noștri la peste 90%.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-[#00103C] px-[15px] w-8 h-8 rounded-[50%] bg-[#CF9FFF] flex items-center justify-center font-medium'>3</span>
                        <p className='text-white text-[16px] font-normal'>Să dezvoltăm parteneriate solide cu companii din diverse domenii.</p>
                    </li>
                    <li className='flex gap-5 items-center mt-4'>
                        <span className='text-[#260056] px-[15px] w-8 h-8 rounded-[50%] bg-[#BA63FF] flex items-center justify-center font-medium'>4</span>
                        <p className='text-white text-[16px] font-normal'>Să fim recunoscuți ca un brand de încredere și profesionalism.</p>
                    </li>
                </ul>
                <div className='flex gap-4 mt-6'>
                    <Link href='/shop' className='py-3 bg-[#BA63FF] text-[#fff] rounded-[28.5px] font-xl px-12'>Shop</Link>
                    <Link href='/servicii' className='py-3 bg-transparent text-white rounded-[28.5px] border-2 border-[#8717F8] font-xl px-12'>Servicii</Link>
                </div>
            </div>
        </div>
    )
}
export default Item2About
