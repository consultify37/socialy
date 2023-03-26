import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-full mt-[6.25rem]'>
            <div className='flex flex-wrap flex-col justify-between md:flex-row gap-10 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                <div className='flex flex-col gap-2 w-full md:w-[35%]'>
                    <Image src='/images/logo-dark.png' alt='Footer logo' width={200} height={53} className='aspect-auto w-[177px] md:w-[200px]' />
                    <p className='text-[#260056] text-[14px] md:text-[16px]'>
                        Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. 
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='font-bold text-[#260056] text-[24px]'>Navigație</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Acasă</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Despre</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Testimoniale</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Blog</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Shop</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='font-bold text-[#260056] text-[24px]'>Informații</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <p className='font-medium text-[#0F52FF] text-[16px]'>email: exemplu@gmail.com</p>
                        </li>
                        <li>
                            <p className='font-medium text-[#0F52FF] text-[16px]'>telefon: 0712 345 678</p>
                        </li>
                        <li>
                            <p className='font-medium text-[#0F52FF] text-[16px]'>SC. Consultify S.R.L.</p>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Termenii și Condițiile</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#0F52FF] text-[16px]'>Politica cookies</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src='/images/anpc.png' alt='Anpc logo' width={180} height={49} className='aspect-auto' />
                    <Image src='/images/litigii.png' alt='Litigii logo' width={180} height={49} className='aspect-auto' />
                </div>
            </div>
            <div className='w-full mt-5 text-center md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                <p className='text-[#0F52FF] text-[16px] font-medium  border-t-[3px] border-[#260056] py-4 px-16 md:px-0'>
                    Copyright 2022 Consultify | Made with love by &nbsp;
                    <Link href='https://marize.io' className="hover:underline" target='_blank'>Marize</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer