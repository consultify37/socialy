import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-full mt-32'>
            <div className='flex flex-wrap flex-col justify-between md:flex-row gap-10 px-7 md:px-12'>
                <div className='flex flex-col gap-2 w-full md:w-[20%]'>
                    <Image src='/images/logo-invert.svg' alt='Footer logo' width={200} height={53} className='aspect-auto w-[177px] md:w-[200px]' />
                    <p className='text-[#260056] text-[14px] md:text-[16px]'>
                        Consultify este partenerul tău de încredere în obținerea finanțărilor nerambursabile, oferind soluții personalizate pentru dezvoltarea afacerii tale
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Image src='/images/anpc.png' alt='Anpc logo' width={180} height={49} className='aspect-auto' />
                    <Image src='/images/litigii.png' alt='Litigii logo' width={180} height={49} className='aspect-auto' />
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='font-bold text-[#260056] text-[24px]'>Navigație</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Acasă</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Despre</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Testimoniale</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Blog</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Shop</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='font-bold text-[#260056] text-[24px]'>Contact</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <p className='font-medium text-[#8717F8] text-[16px]'>Numele firmei: MHC INSPERON SRL</p>
                        </li>
                        <li>
                            <p className='font-medium text-[#8717F8] text-[16px]'>Adresa: Strada Crișul Alb, Numărul 6, Sector 4, București.</p>
                        </li>
                        <li>
                            <p className='font-medium text-[#8717F8] text-[16px]'>Număr de telefon: (0727) 153 317</p>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Email: contact@consultify.ro</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Termenii și Condițiile</Link>
                        </li>
                        <li>
                            <Link href='/' className='font-medium text-[#8717F8] text-[16px]'>Politica cookies</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className='font-bold text-[#260056] text-[24px]'>Social Media</h3>
                    <div className='flex flex-row gap-6 mt-4'>
                        <svg className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_186_198)">
                        <rect width="28" height="28" fill="white"/>
                        <path d="M14 2.52233C17.738 2.52233 18.1813 2.53633 19.6572 2.604C21.1832 2.674 22.7547 3.02167 23.8665 4.1335C24.9888 5.25583 25.326 6.81217 25.396 8.34283C25.4637 9.81867 25.4777 10.262 25.4777 14C25.4777 17.738 25.4637 18.1813 25.396 19.6572C25.3272 21.175 24.9713 22.7617 23.8665 23.8665C22.7442 24.9888 21.189 25.326 19.6572 25.396C18.1813 25.4637 17.738 25.4777 14 25.4777C10.262 25.4777 9.81867 25.4637 8.34283 25.396C6.83667 25.3272 5.229 24.9632 4.1335 23.8665C3.017 22.75 2.674 21.1785 2.604 19.6572C2.53633 18.1813 2.52233 17.738 2.52233 14C2.52233 10.262 2.53633 9.81867 2.604 8.34283C2.67283 6.83083 3.03217 5.23483 4.1335 4.1335C5.2535 3.0135 6.81567 2.674 8.34283 2.604C9.81867 2.53633 10.262 2.52233 14 2.52233ZM14 0C10.1978 0 9.72067 0.0163333 8.22733 0.084C6.06317 0.183167 3.91417 0.785167 2.34967 2.34967C0.779333 3.92 0.183167 6.06433 0.084 8.22733C0.0163333 9.72067 0 10.1978 0 14C0 17.8022 0.0163333 18.2793 0.084 19.7727C0.183167 21.9345 0.7875 24.0893 2.34967 25.6503C3.91883 27.2195 6.06667 27.8168 8.22733 27.916C9.72067 27.9837 10.1978 28 14 28C17.8022 28 18.2793 27.9837 19.7727 27.916C21.9357 27.8168 24.087 27.2137 25.6503 25.6503C27.2218 24.0788 27.8168 21.9357 27.916 19.7727C27.9837 18.2793 28 17.8022 28 14C28 10.1978 27.9837 9.72067 27.916 8.22733C27.8168 6.06317 27.2137 3.913 25.6503 2.34967C24.0835 0.782833 21.9298 0.182 19.7727 0.084C18.2793 0.0163333 17.8022 0 14 0Z" fill="#EA39C3"/>
                        <path d="M14 6.81055C10.0299 6.81055 6.81104 10.0294 6.81104 13.9995C6.81104 17.9697 10.0299 21.1885 14 21.1885C17.9702 21.1885 21.189 17.9697 21.189 13.9995C21.189 10.0294 17.9702 6.81055 14 6.81055ZM14 18.6662C11.4229 18.6662 9.33337 16.5767 9.33337 13.9995C9.33337 11.4224 11.4229 9.33288 14 9.33288C16.5772 9.33288 18.6667 11.4224 18.6667 13.9995C18.6667 16.5767 16.5772 18.6662 14 18.6662Z" fill="#EA39C3"/>
                        <path d="M21.4737 8.20668C22.4015 8.20668 23.1537 7.45452 23.1537 6.52668C23.1537 5.59884 22.4015 4.84668 21.4737 4.84668C20.5459 4.84668 19.7937 5.59884 19.7937 6.52668C19.7937 7.45452 20.5459 8.20668 21.4737 8.20668Z" fill="#EA39C3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_186_198">
                        <rect width="28" height="28" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        <svg className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_186_203)">
                        <path d="M28 14.085C28 21.0721 22.8737 26.8646 16.1817 27.9158V18.159H19.4355L20.055 14.1223H16.1817V11.5031C16.1817 10.3983 16.723 9.32263 18.4567 9.32263H20.2172V5.88563C20.2172 5.88563 18.6188 5.61263 17.0917 5.61263C13.902 5.61263 11.8183 7.54579 11.8183 11.0446V14.1211H8.27283V18.1578H11.8183V27.9146C5.1275 26.8623 0 21.071 0 14.085C0 6.35346 6.2685 0.0849609 14 0.0849609C21.7315 0.0849609 28 6.35229 28 14.085Z" fill="#0075FF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_186_203">
                        <rect width="28" height="28" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4504 20.4505H16.8939V14.8811C16.8939 13.5529 16.8703 11.8439 15.0442 11.8439C13.192 11.8439 12.9082 13.2904 12.9082 14.7853V20.4505H9.35293V8.99709H12.7674V10.5618H12.8147C13.5114 9.37202 14.8053 8.6612 16.1831 8.71206C19.788 8.71206 20.4516 11.0834 20.4516 14.1668L20.4504 20.4505ZM5.33997 7.43118C4.19983 7.43118 3.27613 6.50747 3.27613 5.36733C3.27613 4.22719 4.19983 3.30349 5.33997 3.30349C6.48011 3.30349 7.40381 4.22719 7.40381 5.36733C7.40381 6.50747 6.48011 7.43118 5.33997 7.43118ZM7.11759 20.4505H3.55761V8.99709H7.11759V20.4505ZM22.2233 0.00134427H1.77053C0.804248 -0.00930019 0.0118272 0.76538 0 1.73166V22.2684C0.0118272 23.2358 0.804248 24.0105 1.77053 23.9999H22.2233C23.1919 24.0117 23.9879 23.237 24.0009 22.2684V1.73048C23.9867 0.761831 23.1907 -0.0128484 22.2233 0.000161495" fill="#004EAA"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='w-full mt-5 text-center px-7 md:px-12'>
                <p className='text-[#8717F8] text-[16px] font-medium  border-t-[3px] border-[#260056] py-4 px-16 md:px-0'>
                    Copyright 2022 Consultify | Made with love by &nbsp;
                    <Link href='https://marize.io' className="hover:text-[#8817f89b]" target='_blank'>Marize</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer