import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { backCarousel, nextCarousel } from "../../utils/functions";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import WhyUsCart from "../../components/Home/Why-Us/Cart.js";
import Testimonials from './carousel'
import CTA from "../../components/CTA";
import News from "../../components/Home/News/News";
import Axios from "axios";
import toast from "react-hot-toast";
import Item1About from "../../components/Home/About/Item1";
import Item2About from "../../components/Home/About/Item2";

export default function Testimoniale() {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [scrollAmount]);
  
  const [newsletter, setNewsletter] = useState('Adresa ta de email');
  // const [buttonNews, setButtonNews] = useState('Mă abonez')
  
  const upload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Axios.get('https://api.inspiredconsulting.ro/newsletter', {
      params: {
        email: newsletter
      },
    })
    .then(function (response) {
      console.log(response.data)
      if (response.data == 'Esti deja abonat la newsletter') {
        toast.error('Esti deja abonat la newsletter')
      } else {
        toast.success("Te-ai abonat la newsletter cu succes")
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
        <title>Testimoniale</title>
      </Head>
      <section
        id="about-header"
        className="relative bg-[#260056] mb-60 w-full pt-32 pb-14 flex flex-col items-center justify-center overflow-visible"
      >
        <h1 className="text-xl md:text-4xl font-bold text-white md:max-w-[50%] text-center pt-20 lg:pt-0">
          Experiențe de succes prin fonduri europene
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
          src="/images/proces/hexagon.svg"
          width={130}
          height={130}
          className="absolute top-7 -left-2 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
          alt="Yellow triangle"
        />
      </section>
      <section
        id="feedback-firme"
        className="w-full flex flex-col items-center my-32 justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]"
      >
        <h2 className="text-[#8717F8] font-bold text2xl xl:text-[24px] text-center">
          Peste 850 de companii au accesat fonduri europene cu ajutorul nostru. Iată câteva dintre ele:
        </h2>
        <h3 className="text-[#8717F8] text-xl md:text-lg lg:text-xl xl:text-2xl">
          Iată câteva dintre ele
        </h3>
        <div className="flex mt-4 gap-5 flex-wrap justify-center">
          <Image
            src="/images/feedback-1.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-227 1.svg"
          />
          <Image
            src="/images/feedback-2.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-236 1.svg"
          />
          <Image
            src="/images/feedback-3.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-262 1.svg"
          />
          <Image
            src="/images/feedback-4.png"
            width={158}
            height={49}
            className="aspect-[3/2] object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL="/images/logoipsum-286 1.svg"
          />
        </div>
      </section>
      <section className="relative bg-[#260056] w-full pt-32 mt-60 pb-14 flex flex-col items-center justify-center overflow-visible px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <span className="bg-[#260056] rounded-[200px_250px_0px_0px] w-[115vw] md:w-[103vw] -rotate-[2deg] absolute -left-5 -top-16 h-32" />
        <h2 className="text-xl md:text-4xl font-bold text-white md:max-w-[80%] text-center pt-6 md:pt-20 lg:pt-0">
          Gânduri și experiențe ale clienților noștri: testimoniale de succes
        </h2>
        <Testimonials />
        <section id='trust-us' className='bg-[#260056] mt-[6.25rem] flex flex-col items-center w-full py-20 relative'>
            <h2 className="text-xl md:text-4xl font-bold text-white md:max-w-[80%] text-center pt-6 md:pt-20 lg:pt-0 mb-5">
              Încă nu te-am convins? Descarcă lista completă cu rezultate:
            </h2>
            <Link href='/shop' className="bg-[#8717F8] mb-16 px-12 py-3 text-white transition-all hover:scale-[1.05] rounded-[28.5px]">
              Descarcă lista aici!
            </Link>
            <h2 className="text-lg md:text-2xl font-bold text-white md:max-w-[80%] text-center pt-6 md:pt-20 lg:pt-0 mb-24">
              Sau vizionați următoarele studii de caz!
            </h2>
            <div className="w-full mx-auto gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2] mb-32">
              <div className="w-full flex-1 z-[2]">
                <h2 className="text-xl font-bold text-white z-[2] xl:text-[24px]">
                  Stefan - Pasiunea pentru muzică și drumul către îndeplinirea visului antreprenorial
                </h2>
                <p className="text-white font-thin text-[16px] mt-5 z-[2] mb-8 max-w-[600px]">
                  Stefan, în vârstă de 25 de ani, și-a deschis o școală privată de muzică prin programul Start-Up Nation Diaspora. Având o pasiune pentru vioară și dorința de a combina muzica cu pedagogia și antreprenoriatul, Stefan a visat să aibă propria sa școală de muzică. A ales firma Consultify ca partener de consultanță, datorită profesionalismului și serviciilor personalizate.
                </p>
                <p className="text-white font-thin text-[16px] mt-5 z-[2] max-w-[600px]">
                  După o perioadă petrecută în Londra pentru a strânge bani, Stefan s-a întors în România și a început să exploreze modalități de a-și finanța afacerea. Pentru a vedea povestea completă, vă invităm să vizionați clipul urmator:
                </p>
                <div className="flex gap-4 mt-4 z-[2]">
                  <Link
                    href="/news"
                    className="py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12"
                  >
                    programe
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 bg-transparent text-white flex items-center rounded-[28.5px] border-2 border-[#8717F8] font-xl px-12"
                  >
                    contact
                  </Link>
                </div>
              </div>
              <Image
                src="/images/home-about-1.png"
                alt="About home 1"
                className="relative rounded-[28.5px] w-full md:w-[450px] mx-auto z-[4]"
                width={450}
                height={450}
              />
            </div>
            <div className='w-full mt-16 mb-32 mx-auto gap-[6rem] flex gap-y-20 justify-between flex-col-reverse md:flex-row flex-wrap z-[2]'>
              <div className='relative w-full md:w-auto'>
                  <Image src='/images/home-about-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[450px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={450} height={450} blurDataURL='/images/home-about-1.png' />
                  <Image src='/images/patrat.svg' className='absolute left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' />
              </div>
              <div className='w-full md:w-[48%]'>
                <h2 className='text-xl font-bold text-white z-[2] xl:text-[24px]'>
                  Alexandra, tânăra antreprenoare care a obținut 40.000 de euro pentru afacerea sa prin programul Femeia Antreprenor
                </h2>
                <p className='text-white font-thin text-[16px] mt-5 max-w-[600px]'>
                  Alexandra, în vârstă de 22 de ani, marketer digital, a obținut o finanțare în valoare de 40.000 de euro pentru afacerea sa prin programul Femeia Antreprenor. Pasionată de marketingul digital, Alexandra și-a dorit să transforme pasiunea sa într-o afacere, dar avea nevoie de fonduri pentru a-și deschide o locație nouă, a achiziționa echipamente și a angaja personal. Aflând despre finanțările nerambursabile, Alexandra a decis să încerce și ea norocul.
                </p>
                <p className="text-white font-thin text-[16px] mt-5 z-[2] max-w-[600px]">
                  După căutări și discuții cu diverse firme de consultanță, Alexandra a ales să colaboreze cu Consultify. Consultantul cu care a discutat i-a oferit încredere și a realizat o simulare de punctaj, confirmându-i că are șanse mari să obțină finanțarea. Pentru a afla întreaga poveste, vă invităm să urmăriți videoclipul:
                </p>
                <div className='flex gap-4 mt-6'>
                    <Link href='/shop' className='py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12'>Shop</Link>
                    <Link href='/servicii' className='py-3 bg-transparent text-white flex items-center rounded-[28.5px] border-2 border-[#8717F8] font-xl px-12'>Servicii</Link>
                </div>
              </div>
            </div>
            <div className="w-full mt-16 mx-auto gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2]">
              <div className="w-full flex-1 z-[2]">
                <h2 className="text-xl font-bold text-white z-[2] xl:text-[24px]">
                  O tânără studentă la Facultatea de Medicină obține o finanțare semnificativă pentru cabinetul medical al familiei
                </h2>
                <p className="text-white font-thin text-[16px] mt-5 z-[2] mb-8 max-w-[600px]">
                  Iulia, în vârstă de 21 de ani, studentă în anul 2 la Medicină, a avut ocazia să obțină o finanțare nerambursabilă în valoare de 60.150 euro prin intermediul programului PNRR C12 - Dotare și renovare cabinete medici de familie. Fiind pasionată de domeniul medical și urmând exemplul ambilor săi părinți, care sunt medici, Iulia și familia ei au dorit să își dezvolte cabinetul medical și să ofere servicii de calitate comunității locale.
                </p>
                <p className="text-white font-thin text-[16px] mt-5 z-[2] max-w-[600px]">
                  Totul a început atunci când Iulia a văzut un videoclip pe internet în care se discuta despre posibilitatea obținerii de fonduri europene pentru domeniul medical. Având un cabinet mic care necesită renovare și echipamente noi, dar fără resurse financiare suficiente pentru a realiza
                </p>
                <div className="flex gap-4 mt-4 z-[2]">
                  <Link
                    href="/news"
                    className="py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12"
                  >
                    programe
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 bg-transparent text-white flex items-center rounded-[28.5px] border-2 border-[#8717F8] font-xl px-12"
                  >
                    contact
                  </Link>
                </div>
              </div>
              <Image
                src="/images/home-about-1.png"
                alt="About home 1"
                className="relative rounded-[28.5px] w-full md:w-[450px] mx-auto z-[4]"
                width={450}
                height={450}
              />
            </div>
        </section>
        <div className="w-full mt-20">
          <div className="flex justify-start items-start">
            <h3 className="text-lg text-white font-bold">
              Consultify vine în ajutorul tău cu produse digitale pentru scalarea
              afacerii tale
            </h3>
          </div>
          {/* Cart */}
          <WhyUsCart />
        </div>
        <Link href='/shop' className="bg-[#8717F8] mt-5 px-12 py-3 text-white transition-all hover:scale-[1.05] rounded-[28.5px]">
          vezi toate produsele
        </Link>
        <div className="flex w-full flex-col lg:flex-row mt-20 justify-between items-center">
          <div className="flex flex-col w-full lg:mr-12 lg:max-w-[600px]">
            <h4 className="text-white text-2xl lg:text-4xl font-bold mb-2">
              Ești în pană de idei de afaceri?
            </h4>
            <p className="text-white text-xl">
              Introdu adresa de mail, iar noi îți vom trimite un document cu peste 100 de idei de afaceri eligibile pentru fonduri nerambursabile
            </p>
            <form onSubmit={upload} className="relative flex mt-10 mb-20 lg:mb-0 lg:flex-row items-center">
              <input
                className="py-4 text-[#fff] w-full xl:px-6 px-4 lg:px-5 w-full bg-[#260056] placeholder:text-white border-2 border-[#7000FF] rounded-full"
                type="email"
                placeholder={newsletter}
                required
                onChange={(e) => setNewsletter(e.target.value)}
              />
              <button type="submit" className="text-[#fff] w-full font-bold absolute w-[max-content] flex mt-3 mt-0 right-0 z-30 transition-all hover:scale-[1.05] border-4 cursor-pointer border-[#260056] bg-[#7000FF] py-5 px-10 text-sm rounded-full">
                Vreau documentul
              </button>
            </form>
          </div>
          <div className='relative flex justify-end lg:ml-12'>
            <Image src='/images/testimonials.png' alt='Why-Us' className='relative w-[450px] rounded-[35px] z-[2]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
            {/* <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' />  */}
            <Image src='/images/proces/hexagon.svg' className="absolute -right-[50px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/circle-litle.svg' className="absolute -left-[40px] -top-[40px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/triangle-litle.svg' className="absolute right-[15%] -top-[50px] w-[100px] h-[100px]" alt='triangle' width={250} height={250}/>
          </div>
        </div>
      </section>
      <CTA
        title="Transformă-ți ideile în realitate cu fonduri europene!"
        linkText="Completează formularul de contact!"
        linkHref="/contact"
      />
      <News />
      <NewsLetter headingText='Fii la curent cu cele mai recente informații despre fonduri europene!' />
    </>
  );
}
