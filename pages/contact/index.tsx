import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import toast from "react-hot-toast";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
 
export default function Contact() {
  
    const [nume, setNume] = useState('')
    const [prenume, setPrenume] = useState('')
    const [telefon, setTelefon] = useState('')
    const [email, setEmail] = useState('')
    const [mesaj, setMesaj] = useState('')

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const upload = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        Axios.get('https://api.inspiredconsulting.ro/contact', {
            params: {
                nume: nume,
                prenume: prenume,
                telefon: telefon,
                email: email,
                mesaj: mesaj
            },
        })
        .then(function (response) {
            console.log(response.data)
            if (response.data == 'Toate campurile sunt obligatorii') {toast.error(response.data)}
            else if (response.data == 'Introduce-ti o adresa de email valida') {toast.error(response.data)}
            else {
                toast.success(
                    <p>Îți mulțumim pentru mesaj! <br /> Echipa noastră îți va răspunde curând</p>
                )
                setTimeout(() => {
                    location.reload();
                }, 5000);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    };
  
    const recaptchaRef = React.createRef();
    return (
        <>
            <Head>
                <title>Admin | Contact</title>
            </Head>
            <section
                id="about-header"
                className="relative bg-[#260056] mb-60 w-full pt-32 pb-14 flex flex-col items-center justify-center overflow-visible"
            >
                <h1 className="text-xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-20 lg:pt-0">
                    Suntem aici pentru tine
                </h1>
                <span className="bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] md:w-[103vw] -rotate-2 absolute -left-5 -bottom-20 h-32" />
                <Image
                    src="/images/star.svg"
                    alt="Hero blue circle"
                    width={100}
                    height={200}
                    className="absolute right-0 top-0 z-[5] w-[80px] md:w-[120px]"
                />
                <Image
                    src="/images/circle-contact.svg"
                    width={130}
                    height={130}
                    className="absolute top-0 left-24 md:bottom-0 w-[100px] md:w-[180px]"
                    alt="Yellow triangle"
                />
            </section>
            <section className="w-full flex flex-row items-start my-32 justify-between px-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex flex-col w-full mr-12 bg-[#260056] rounded-3xl p-6">
                    <div className="flex flex-row mb-6">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/OurServices/consultanta.svg"
                                alt="Hero blue circle"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[30px] h-[30px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="text-xl text-white">Email</h5>
                            <Link href='mailto:fsafsa@fsa.com' className="text-lg text-white">examply@gmail.com</Link>
                        </div>
                    </div>
                    <div className="flex flex-row mb-6">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/OurServices/consultanta.svg"
                                alt="Hero blue circle"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[30px] h-[30px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="text-xl text-white">Email</h5>
                            <Link href='mailto:fsafsa@fsa.com' className="text-lg text-white">examply@gmail.com</Link>
                        </div>
                    </div>
                    <h6 className="text-xl text-white mb-4">Sau ne poți găsi și aici</h6>
                    <div className="flex flex-row">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] mr-2 flex items-center rounded-full bg-[#fff] p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/contact/instagram.svg"
                                alt="instagram"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[30px] h-[30px]"
                            />
                        </div>
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] mr-2 ml-2 flex items-center rounded-full bg-[#fff] p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/contact/facebook.svg"
                                alt="instagram"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[30px] h-[30px]"
                            />
                        </div>
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] ml-2 flex items-center rounded-full bg-[#fff] p-4 h-[max-content] jutify-center mr-2">
                            <Image
                                src="/images/contact/linkedin.svg"
                                alt="instagram"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[30px] h-[30px]"
                            />
                        </div>
                    </div>
                </div>
                <form onSubmit={upload} className="w-full ml-12 rounded-3xl shadow-box bg-[#fff] w-full max-w-[1000px] p-8 px-4 md:px-8 flex flex-col">
                    <h2 className="text-ms font-bold mb-10 md:text-2xl text-center">Hai să lucrăm împreună</h2>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6">
                        <div className="flex flex-col w-full md:w-[47%] mr-2">
                            <span className="text-sm mb-2">
                                Nume*
                            </span>
                            <input
                                required 
                                type="text"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-2" 
                                placeholder="ex: Popescu"
                                onChange={(e) => setNume(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%]">
                            <span className="text-sm mb-2">
                                Prenume*
                            </span>
                            <input
                                required 
                                type="text"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-2" 
                                placeholder="ex: Andrei"
                                onChange={(e) => setPrenume(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6">
                        <div className="flex flex-col w-full md:w-[47%] mr-2">
                            <span className="text-sm mb-2">
                                Telefon
                            </span>
                            <input
                                required 
                                type="number"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-2" 
                                placeholder="ex: 07XX XXX XXX"
                                onChange={(e) => setTelefon(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%]">
                            <span className="text-sm mb-2">
                                Email
                            </span>
                            <input
                                required 
                                type="text"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-2" 
                                placeholder="ex: exemplu@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6">
                        <div className="flex flex-col w-full md:w-[47%] mr-2">
                            <span className="text-sm mb-2">
                                Nume firmă (opțional)
                            </span>
                            <input
                                required 
                                type="string"
                                className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 p-2" 
                                placeholder="ex: Popescu"
                                onChange={(e) => setTelefon(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%]">
                            <span className="text-sm mb-2">
                                Email
                            </span>
                            <select className="rounded-xl w-full border-[#8717F8] text-ms leading-6 border-2 h-[44px] p-2 py-2" name="categorie">
                                <option value="toate">Toate</option>
                                <option value="fonduri-europene">Fonduri europene</option>
                                <option value="marketing">Marketing</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-6">
                        <span className="text-lg mb-2">
                            Oferă-ne câteva detalii*
                        </span>
                        <textarea
                            className="rounded-xl w-full bg-[#fff] h-48 border-[#8717F8] text-ms border-2 p-2" 
                            placeholder="scrie aici mesajul tău"
                            required
                            onChange={(e) => setMesaj(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                        <input 
                            checked={isChecked} onChange={handleChange}
                            required id="link-checkbox" type="checkbox" value="" className="w-4 cursor-pointer h-4 text-[#260056] rounded border-[2px] bg-[#F2F4FF] border-[#8717F8] focus:ring-blue-500" />
                        <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-[#260056]">Accept <a href="#" className="text-[#260056] underline">Termenii și Condițiile</a></label>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center w-full">
                        <ReCAPTCHA
                            size="invisible"
                            sitekey="6LfVxkYlAAAAADLaMI9tniaG9fdkNEfFyzZaARFN"
                        />
                        <button                      
                            className='py-4 bg-[#8717F8] h-auto text-white rounded-[28px] font-medium px-14 text-center text-sm md:text-[16px]'>
                            trimite
                        </button>
                    </div>
                </form>
            </section>
            <section className="w-full flex flex-col items-center my-32 justify-center px-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="rounded-3xl bg-[#260056] w-full md:max-w-[1000px] md:p-16 md:px-20 p-6 py-12 max-w-[350px] flex flex-col">
                    <h2 className="text-xl text-center mb-10 text-white">Sau ne poți găsi și aici</h2>
                    <div className="flex md:flex-row flex-col w-full">
                        <div className="flex flex-row w-full mb-5 md:mb-0 justify-center">
                            <div className="flex items-center w-[58px] bg-[#7000FF] mr-4 p-3 rounded-xl justify-center">
                                <Image width={30} height={30} src="/images/mail.svg" alt="mail" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-white">
                                    Email
                                </span>
                                <a className="text-lg text-white" href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center">
                            <div className="flex items-center w-[58px] bg-[#8717F8] mr-4 p-3 rounded-xl justify-center">
                                <Image width={30} height={30} src="/images/phone.svg" alt="mail" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-white">
                                    Email
                                </span>
                                <a className="text-lg text-white" href="tel:0735234642">0735234642</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
