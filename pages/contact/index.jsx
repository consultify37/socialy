import React, { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import toast from "react-hot-toast"
import Rezultate from "../../components/Rezultate"
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import ReCAPTCHA from "react-google-recaptcha"
 
export default function Contact() {
  
    const [nume, setNume] = useState('')
    const [prenume, setPrenume] = useState('')
    const [telefon, setTelefon] = useState('')
    const [email, setEmail] = useState('')
    const [mesaj, setMesaj] = useState('')
    const [nevoie, setNevoie] = useState('')
    const [cui, setCui] = useState('')
    const [firma, setFirma] = useState('')

    const [isChecked, setIsChecked] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(false)

    const handleSubmit = (event) => {
        setIsChecked(event.target.checked)
    }

    const upload = async (e) => {
        if (!isChecked) {
            toast.error('Acceptă termenii și condițiile mai întăi.')
            e.preventDefault()
        }

        if (!captchaVerified) {
            toast.error('Verifică Captcha mai întăi.')
            e.preventDefault()
        }
    }
  
    return (
        <>
            <Head>
                <title>Admin | Contact</title>
            </Head>
            <div className="relative">
                <section
                    id="about-header"
                    className="relative bg-secondary mb-32 md:mb-60 w-full pt-32 md:pb-14 flex flex-col items-center justify-center overflow-visible z-10"
                >
                    <h1 className="text-xl md:text-4xl xl:text-[44px] font-extrabold md:leading-[48px] text-white md:max-w-[50%] text-center pt-20 md:pt-20">
                        Suntem aici pentru tine!
                    </h1>
                    <span className='bg-[#260056] rounded-[0_0_200px_250px] w-[103vw] -rotate-2 absolute -left-5 -bottom-20 h-32 hidden md:block' />
                    <Image
                        src="/images/Polygon 3.png"
                        alt="Hero blue circle"
                        width={100}
                        height={200}
                        className="absolute right-4 md:right-28 top-32 md:top-4 z-[5] w-[80px] md:w-[160px]"
                    />
                    <Image
                        src="/images/circle-contact.svg"
                        width={130}
                        height={130}
                        className="absolute top-0 -left-32 md:left-32 md:bottom-0 w-[320px]"
                        alt="Yellow triangle"
                    />
                </section>
                <span className="md:hidden bg-secondary rounded-[0_0_164px_144px] -left-[24vw] md:left-0 w-[136vw] -rotate-[5.09deg] absolute -bottom-12 h-[700px]" />
            </div>
            <div className="bg-[#F6EFFF] w-[100vw] h-[80vh] absolute top-0 left-0 z-[-1]"></div>
            <section className="w-full flex flex-col lg:flex-row items-start my-32 justify-between px-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex flex-col w-full mr-12 bg-[#260056] rounded-3xl p-8">
                    <div className="flex flex-row mb-6">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-primary p-3 lg:p-4 h-[max-content] jutify-center mr-4">
                            <Image
                                src="/images/mail-white.svg"
                                alt="Hero blue circle"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[15px] lg:w-[30px] lg:h-[30px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="text-xl text-white font-bold">Email:</h5>
                            <Link href='mailto:fsafsa@fsa.com' className="text-lg text-white font-bold">contact@consultify.ro</Link>
                        </div>
                    </div>
                    <div className="flex flex-row mb-6">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-primary p-3 lg:p-4 h-[max-content] jutify-center mr-4">
                            <Image
                                src="/images/phone.svg" 
                                alt="Hero blue circle"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[15px] lg:w-[30px] lg:h-[30px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="text-xl text-white font-bold">Telefon:</h5>
                            <span className="text-lg text-white font-bold"><Link href='tel:0727 153 317'>0727 153 317</Link></span>
                        </div>
                    </div>
                    <h6 className="text-xl text-white mb-4 font-bold">Sau ne poți găsi și aici:</h6>
                    <div className="flex flex-row">
                        <Link href='https://instagram.com' target="_blank" className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-full bg-[#fff] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/contact/instagram.svg"
                                alt="instagram"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                            />
                        </Link>
                        <Link href='https://facebook.com' target="_blank" className="w-[-webkit-fill-available] max-w-[fit-content] ml-2 flex items-center rounded-full bg-[#fff] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/contact/facebook.svg"
                                alt="facebook"
                                width={60}
                                height={60}
                                className="z-[5] w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                            />
                        </Link>
                        <Link href='https://tiktok.com' target="_blank" className="w-[-webkit-fill-available] max-w-[fit-content] ml-2 flex items-center rounded-full bg-[#fff] p-3 lg:p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/contact/tiktok.svg"
                                alt="tiktok"
                                width={60}
                                height={60}
                                className="z-[5] w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                            />
                        </Link>
                    </div>
                </div>
                <form 
                    className="mt-12 lg:mt-0 lg:ml-12 rounded-3xl shadow-box bg-[#fff] w-full max-w-[1000px] p-8 px-4 md:px-8 flex flex-col"
                    method="POST"
                    action="https://script.google.com/macros/s/AKfycbzTZ6AzwzPd_Ol-LoBSHuHOW_xOoB0J2IG1O7FrOl0ZH2PxOCXp_qusy5w3O20aB7e7_Q/exec"
                    onSubmit={upload}
                >
                    <h2 className="text-ms font-bold mb-10 md:text-2xl text-center">Hai să lucrăm împreună!</h2>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6">
                        <div className="flex flex-col w-full md:w-[47%] mr-2 mb-6 md:mb-0">
                            <span className="text-md mb-2">
                                Nume*
                            </span>
                            <input
                                required 
                                type="text"
                                name="Nume"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="ex: Popescu"
                                onChange={(e) => setNume(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%]">
                            <span className="text-md mb-2">
                                Prenume*
                            </span>
                            <input
                                required 
                                type="text"
                                name="Prenume"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="ex: Andrei"
                                onChange={(e) => setPrenume(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-between mb-6">
                        <div className="flex flex-col w-full mr-2">
                            <span className="text-md mb-2">
                                Telefon*
                            </span>
                            <PhoneInput
                                defaultCountry="ro"
                                value={telefon}
                                name="Telefon"
                                onChange={(phone) => setTelefon(phone)}
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-2 mb-6 outline-none"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="text-md mb-2">
                                Email*
                            </span>
                            <input
                                required 
                                type="email"
                                name="Email"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="ex: exemplu@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6 outline-none">
                        <div className="flex flex-col w-full md:w-[47%] mr-2 mb-6 md:mb-0">
                            <span className="text-md mb-2">
                                Nume firmă (opțional)
                            </span>
                            <input
                                type="text"
                                name="Nume Firma"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="Nume firmă"
                                onChange={(e) => setFirma(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%] mr-2">
                            <span className="text-md mb-2">
                                CUI (opțional)
                            </span>
                            <input
                                type="text"
                                name="CUI"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="CUI"
                                onChange={(e) => setCui(e.target.value)}
                                value={cui}
                            />
                        </div>
                    </div>
                    <input className="hidden" type="text" name="Categorie" value={nevoie} onChange={() => {}} />
                    <div className="flex flex-col w-full">
                            <span className="text-md mb-2">
                                De ce anume ai nevoie?
                            </span>
                            <select 
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 h-[60px] px-[14px] p-2 outline-none" 
                                name="categorie"
                                onChange={(e) => setNevoie(e.target.value)}
                            >
                                <option value="Selectează aici" className="hidden">Selectează aici</option>
                                <option value="Consultanță Fonduri Europene">Consultanță Fonduri Europene</option>
                                <option value="Implementare proiect">Implementare proiect</option>
                                <option value="Colaborări & Angajări">Colaborări & Angajări</option>
                            </select>
                        </div>
                    <div className="flex flex-col w-full my-6">
                        <span className="text-md mb-2">
                            Oferă-ne câteva detalii*
                        </span>
                        <textarea
                            className="rounded-xl w-full bg-[#fff] h-48 border-[#8717F8] text-ms border-2 p-[14px] outline-none" 
                            placeholder="Scrie aici mesajul tău"
                            required
                            name="Detalii"
                            onChange={(e) => setMesaj(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center mb-6 self-center ml-1">
                        <input 
                            checked={isChecked} onChange={(e) => setIsChecked(!isChecked) }
                            id="link-checkbox" type="checkbox" className="w-4 cursor-pointer h-4 text-[#260056] rounded border-[2px] bg-[#F2F4FF] border-[#8717F8] outline-none" />
                        <label htmlFor="link-checkbox" className="ml-2 text-md font-bold text-[#260056]">Accept <a href="#" className="text-[#260056] underline">Termenii și Condițiile.</a></label>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center w-full items-center">
                        <ReCAPTCHA
                            sitekey="6LdWV_AoAAAAAMMdYLnmy_NUtbetbPGYWHOOhery"
                            onChange={(e) => setCaptchaVerified(!captchaVerified)}
                        />
                        <button                      
                            className='py-3 md:py-4 mt-4 md:mt-0 md:ml-4 bg-[#8717F8] h-fit text-white rounded-[28px] font-semibold px-14 text-center text-md md:text-[16px] hover:scale-[1.05] transition-all'
                            type="submit"
                        >
                            Trimite!
                        </button>
                    </div>
                </form>
            </section>
            <Rezultate />
            <section id='why-us' className='mt-[10.25rem] w-full relative px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
                <h2 className='text-[#260056] text-center font-bold md:text-base text-xl lg:text-2xl xl:text-4xl mb-12 lg:mb-32'>De ce să alegi Consultify?</h2>
                <div className='relative flex flex-wrap justify-center items-center md:justify-between md:items-start gap-y-20'>
                    {/* Left-Side */}
                    <div className='mx-auto lg:mx-0 w-full z-[2] md:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                                <Image src='/images/questions-comment.png' className='mx-auto' alt='Questions comment' width={25} height={10} />
                            </span>
                            <h3 className='font-bold text-[24px] text-[#260056]'>Comunicare</h3>
                            <p className='font-normal text-[#260056] text-md md:text-[16px'>
                                Comunicare excelentă! Răspuns rapid și soluții eficiente pentru succesul proiectelor tale.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                                <Image src='/images/flash.png' className='mx-auto' alt='Questions comment' width={17} height={10} />
                            </span>
                            <h3 className='font-bold text-[24px] text-[#260056]'>Spirit tânăr</h3>
                            <p className='font-normal text-[#260056] text-md md:text-[16px'>
                                Echipă tânără, inovatoare și dinamică, aducând idei proaspete și abordări moderne.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                                <Image src='/images/user (4) 1.png' className='mx-auto' alt='Questions comment' width={25} height={25} />
                            </span>
                            <h3 className='font-bold text-[24px] text-[#260056]'>Abordare individuală</h3>
                            <p className='font-normal text-[#260056] text-md md:text-[16px'>
                                Oferim o abordare individuală pentru a ne asigura că satisfacem nevoile și obiectivele fiecărui client.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                                <Image src='/images/chart.png' className='mx-auto' alt='Questions comment' width={21} height={21} />
                            </span>
                            <h3 className='font-bold text-[24px] text-[#260056]'>Profesionalism</h3>
                            <p className='font-normal text-[#260056] text-md md:text-[16px]'>
                                Profesionalismul nostru este evidențiat de abordarea noastră meticuloasă și atenția la detalii în fiecare proiect.
                            </p>
                        </div>
                    </div>
                    {/* Right-Side */}
                    <div className='relative mx-auto lg:mx-0'>
                        <Image src='/images/contact/pag - contact - structura calitati.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
                        <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                    </div>
                </div>
                <Link href='/contact' className="bg-[#8717F8] mt-12 flex font-semibold items-center justify-center w-[max-content] mx-auto justify-self-center px-16 py-3 md:py-4 text-white rounded-[28.5px] hover:scale-[1.05] transition-all">
                    Vreau să completez!
                </Link>
            </section>
            <NewsLetter headingText={'Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!'} />
        </>
    )
}
