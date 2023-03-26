import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { OurClientsTestimonial } from "../../components/Home/OurClients/OurClients";
import TestimonialItem from "../../components/testimoniale/testimoniale-items/testimonial-item";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import toast from "react-hot-toast";
import Axios from "axios";

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
                    src="/images/Star 1.svg"
                    alt="Hero blue circle"
                    width={100}
                    height={200}
                    className="absolute right-0 top-0 z-[5] w-[80px] md:w-[120px]"
                />
                <Image
                    src="/images/shop-hexagon.png"
                    width={130}
                    height={130}
                    className="absolute top-7 -left-2 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
                    alt="Yellow triangle"
                />
            </section>
            <section className="w-full flex flex-col items-center my-32 justify-center px-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <form onSubmit={upload} className="rounded-3xl bg-[#F2F4FF] w-full max-w-[1000px] p-16 px-4 md:px-20 flex flex-col">
                    <h2 className="text-ms font-bold mb-10 md:text-4xl text-center">Completează formularul de mai jos</h2>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6">
                        <div className="flex flex-col w-full md:w-[47%] mr-2">
                            <span className="text-sm mb-2">
                                Nume
                            </span>
                            <input
                                required 
                                type="text"
                                className="rounded-xl w-full bg-[#F2F4FF] border-[#0F52FF] text-ms border-2 p-2" 
                                placeholder="ex: Popescu"
                                onChange={(e) => setNume(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%]">
                            <span className="text-sm mb-2">
                                Prenume
                            </span>
                            <input
                                required 
                                type="text"
                                className="rounded-xl w-full bg-[#F2F4FF] border-[#0F52FF] text-ms border-2 p-2" 
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
                                className="rounded-xl w-full bg-[#F2F4FF] border-[#0F52FF] text-ms border-2 p-2" 
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
                                className="rounded-xl w-full bg-[#F2F4FF] border-[#0F52FF] text-ms border-2 p-2" 
                                placeholder="ex: exemplu@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-6">
                        <span className="text-lg mb-2">
                            Cu ce te putem ajuta?
                        </span>
                        <textarea
                            className="rounded-xl w-full bg-[#F2F4FF] h-48 border-[#0F52FF] text-ms border-2 p-2" 
                            placeholder="scrie aici mesajul tău"
                            required
                            onChange={(e) => setMesaj(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center w-full">
                        <div className="flex items-center md:mb-0 mb-6 mr-6">
                            <input 
                                checked={isChecked} onChange={handleChange}
                                required id="link-checkbox" type="checkbox" value="" className="w-4 cursor-pointer h-4 text-[#260056] rounded border-[2px] bg-[#F2F4FF] border-[#0F52FF] focus:ring-blue-500" />
                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-[#260056]">Accept <a href="#" className="text-[#260056] underline">Termenii și Condițiile</a></label>
                        </div>
                        <button                      
                            className='py-4 bg-[#0F52FF] h-auto text-white rounded-[28px] font-medium px-14 text-center text-sm md:text-[16px]'>
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
                            <div className="flex items-center w-[58px] bg-[#01EA88] mr-4 p-3 rounded-xl justify-center">
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
                            <div className="flex items-center w-[58px] bg-[#0F52FF] mr-4 p-3 rounded-xl justify-center">
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
