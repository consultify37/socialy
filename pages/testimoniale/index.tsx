import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import Testimonials from './carousel'
import CTA from "../../components/CTA"
import Axios from "axios"
import toast from "react-hot-toast"
import Logos from "../../components/Home/Logos"
import PageHeader from "../../components/Header/PageHeader"

const testimonials = [
  {
    title: 'Ștefan - Pasiunea pentru muzică și drumul către îndeplinirea visului antreprenorial',
    text1: 'Ștefan, în vârstă de 25 de ani, și-a deschis o școală privată de muzică prin programul Start-Up Nation Diaspora. Având o pasiune pentru vioară și dorința de a combina muzica cu pedagogia și antreprenoriatul, Stefan a visat să aibă propria sa școală de muzică. A ales firma Consultify ca partener de consultanță, datorită profesionalismului și serviciilor personalizate.',
    text2: 'După o perioadă petrecută în Londra pentru a strânge bani, Stefan s-a întors în România și a început să exploreze modalități de a-și finanța afacerea. Pentru a vedea povestea completă, vă invităm să vizionați clipul urmator:',
    ytUrl: 'https://www.youtube.com/embed/QJ6cWRy9q1U?si=h_SW0WEYk_YDvwzK' 
  },
  {
    title: 'Alexandra, tânăra antreprenoare care a obținut 40.000 de euro pentru afacerea sa prin programul Femeia Antreprenor',
    text1: 'Alexandra, în vârstă de 22 de ani, marketer digital, a obținut o finanțare în valoare de 40.000 de euro pentru afacerea sa prin programul Femeia Antreprenor. Pasionată de marketingul digital, Alexandra și-a dorit să transforme pasiunea sa într-o afacere, dar avea nevoie de fonduri pentru a-și deschide o locație nouă, a achiziționa echipamente și a angaja personal. Aflând despre finanțările nerambursabile, Alexandra a decis să încerce și ea norocul.',
    text2: 'După căutări și discuții cu diverse firme de consultanță, Alexandra a ales să colaboreze cu Consultify. Consultantul cu care a discutat i-a oferit încredere și a realizat o simulare de punctaj, confirmându-i că are șanse mari să obțină finanțarea. Pentru a afla întreaga poveste, vă invităm să urmăriți videoclipul:',
    ytUrl: 'https://www.youtube.com/embed/0-qT2e_s6TE?si=ngdL14zCZtbIM9PO'
  },
  {
    title: 'O tânără studentă la Facultatea de Medicină obține o finanțare semnificativă pentru cabinetul medical al familiei',
    text1: 'Iulia, în vârstă de 21 de ani, studentă în anul 2 la Medicină, a avut ocazia să obțină o finanțare nerambursabilă în valoare de 60.150 euro prin intermediul programului PNRR C12 - Dotare și renovare cabinete medici de familie. Fiind pasionată de domeniul medical și urmând exemplul ambilor săi părinți, care sunt medici, Iulia și familia ei au dorit să își dezvolte cabinetul medical și să ofere servicii de calitate comunității locale.',
    text2: 'Totul a început atunci când Iulia a văzut un videoclip pe internet în care se discuta despre posibilitatea obținerii de fonduri europene pentru domeniul medical. Având un cabinet mic care necesită renovare și echipamente noi, dar fără resurse financiare suficiente pentru a realiza aceste investiții, Iulia a căutat mai multe informații despre programul PNRR și despre cum poate accesa aceste finanțări. Pentru a descoperi povestea completă, vă încurajăm să vizionați videoclipul:',
    ytUrl: 'https://www.youtube.com/embed/BGXhV4tjNFw?si=Equ5uXayThElHXrK'
  }
]

export default function Testimoniale() {
  const [scrollAmount, setScrollAmount] = useState<number>(0)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [scrollAmount])
  
  const [newsletter, setNewsletter] = useState('Adresa ta de email')
  // const [buttonNews, setButtonNews] = useState('Mă abonez')
  
  const upload = (e: { preventDefault: () => void }) => {
    e.preventDefault()
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
      console.log(error)
    })
    .finally(function () {
      // always executed
    })
  }
  return (
    <>
      <Head>
        <title>Consultify | Testimoniale</title>
      </Head>
      <PageHeader
        title="Experiențe de succes prin fonduri europene"
      >
        <Image
          src="/images/Star 1.svg"
          alt="Hero blue circle"
          width={100}
          height={200}
          className="absolute right-0 top-[56px] z-[5] w-[80px] md:w-[120px]"
        />
        <Image 
          src='/images/circle-hero-left.svg' 
          width={150} 
          height={150} 
          className='absolute -left-4 -top-28 lg:-top-56 lg:left-0 lg:w-[250px]' 
          alt='Circle hero green' 
        />
      </PageHeader>
      <section
        id="feedback-firme"
        className="w-full flex flex-col items-center my-32 justify-center px-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]"
      >
        <h2 className="text-[#8717F8] font-bold text-[20px] md:text-xl lg:text-2xl xl:text-4xl text-center px-7">
            Peste 850 de companii au accesat fonduri europene cu ajutorul nostru. 
          </h2>
          <h3 className="text-[#8717F8] text-[16px] md:text-lg lg:text-xl xl:text-2xl">
            Iată câteva dintre ele:
          </h3>
        
        <Logos />
      </section>
      <section className="relative bg-[#260056] w-full pt-16 md:pt-32 mt-16 md:mt-32 pb-24 flex flex-col items-center justify-center overflow-visible px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <span className="bg-[#260056] rounded-[200px_250px_0px_0px] w-[115vw] md:w-[103vw] -rotate-[2deg] absolute -left-5 -top-16 h-32" />
        <h2 className="text-xl md:text-4xl font-bold text-white md:max-w-[80%] text-center md:pt-10 lg:pt-0">
          Gânduri și experiențe ale clienților noștri: testimoniale de succes
        </h2>
        <Testimonials />
        <section id='trust-us' className='bg-[#260056] mt-24 flex flex-col items-center w-full relative'>
            <h2 className="text-xl md:text-3xl font-bold text-white md:max-w-[80%] text-center pt-0 md:pt-20 lg:pt-0 mb-5">
              Încă nu te-am convins? Descarcă lista completă cu rezultate:
            </h2>
            <Link href='/files/Rezultate Consultify.pdf' download={true} target="_blank" className="bg-[#8717F8] mb-16 mt-4 font-semibold px-12 py-3 text-white transition-all hover:scale-[1.05] rounded-[28.5px]">
              Descarcă lista aici!
            </Link>
            <h2 className="text-xl md:text-3xl font-bold text-white px-8 md:px-0 md:max-w-[80%] text-center pt-4 md:pt-20 lg:pt-0 mb-12 md:mb-24">
              Sau vizionați următoarele studii de caz!
            </h2>
            <div className="w-full mx-auto gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2] items-center">
              <div className="w-full flex-1 z-[2]">
                <h2 className="text-xl font-bold text-white z-[2] xl:text-[24px]">
                  { testimonials[0].title }
                </h2>
                <p className="text-white font-base text-[15px] md:text-[16px] mt-5 z-[2] mb-8 max-w-[600px]">
                  { testimonials[0].text1 }
                </p>
                <p className="text-white font-base text-[15px] md:text-[16px] mt-5 z-[2] max-w-[600px]">
                  { testimonials[0].text2}
                </p>
              </div>
              <iframe 
                  className="relative rounded-[28.5px] w-full sm:h-full h-[280px] md:w-[450px] md:h-[338px] mx-auto z-[4]"
                  src={testimonials[0].ytUrl}
                  title="YouTube video player"
                  allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share" 
                  allowFullScreen={true}
              ></iframe>
            </div>
            <div className='w-full mt-16 md:mt-40 mx-auto gap-[6rem] flex gap-y-20 justify-between items-center flex-col-reverse md:flex-row flex-wrap z-[2]'>
              <div className='relative w-full md:w-auto'>
                <iframe 
                    className="relative rounded-[28.5px] sm:h-full h-[280px] w-full  md:w-[450px] md:h-[400px] mx-auto z-[0]"
                    src={testimonials[1].ytUrl}
                    title="YouTube video player"
                    allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share" 
                    allowFullScreen={true}
                ></iframe>
                  {/* <Image src='/images/patrat.svg' className='absolute left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' /> */}
              </div>
              <div className='w-full md:w-[48%]'>
                <h2 className='text-xl font-bold text-white z-[2] xl:text-[24px]'>
                  { testimonials[1].title }
                </h2>
                <p className='text-white font-base text-[16px] mt-5 max-w-[600px]'>
                  { testimonials[1].text1 } 
                </p>
                <p className="text-white font-base  text-[16px] mt-5 z-[2] max-w-[600px]">
                  { testimonials[1].text2}
                </p>
              </div>
            </div>
            <div className="w-full mt-16 md:mt-40 mx-auto gap-[6rem] flex gap-y-20 items-center justify-between flex-wrap z-[2]">
              <div className="w-full flex-1 z-[2]">
                <h2 className="text-xl font-bold text-white z-[2] xl:text-[24px]">
                  { testimonials[2].title }
                </h2>
                <p className="text-white font-base text-[16px] mt-5 z-[2] mb-8 max-w-[600px]">
                  { testimonials[2].text1 }
                </p>
                <p className="text-white font-base text-[16px] mt-5 z-[2] max-w-[600px]">
                  { testimonials[2].text2 }
                </p>
              </div>
              <iframe 
                  className="relative rounded-[28.5px] h-[280px] sm:h-full w-full md:w-[450px] md:h-[400px] mx-auto z-[0]"
                  src={testimonials[2].ytUrl}
                  title="YouTube video player"
                  allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share" 
                  allowFullScreen={true}
              ></iframe>
            </div>
        </section>
        {/* <div className="w-full mt-32">
          <div className="flex justify-start items-start">
            <h3 className="text-lg text-white font-bold">
              Consultify vine în ajutorul tău cu produse digitale pentru scalarea
              afacerii tale
            </h3>
          </div>
          <WhyUsCart />
        </div> */}
        {/* <Link href='/shop' className="bg-[#8717F8] mt-5 px-12 py-3 md:py-4 font-semibold text-white transition-all hover:scale-[1.05] rounded-[28.5px]">
          Vezi toate produsele
        </Link> */}
        <div className="flex w-full flex-col lg:flex-row mt-16 md:mt-48 justify-between items-center">
          <div className='relative flex lg:hidden justify-end my-16 lg:mb-0 lg:ml-12'>
              <Image src='/images/testimoniale/Pag - testimoniale - structura idei afacere.png' alt='Why-Us' className='relative w-[450px] rounded-[35px] z-[2]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
              {/* <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' />  */}
              <Image src='/images/proces/hexagon.svg' className="absolute -right-[50px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
              <Image src='/images/circle-litle.svg' className="absolute -left-[40px] -top-[40px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
              <Image src='/images/triangle-litle.svg' className="absolute right-[15%] -top-[50px] w-[100px] h-[100px]" alt='triangle' width={250} height={250}/>
          </div>
          <div className="flex flex-col w-full lg:mr-12 lg:max-w-[600px]">
            <h4 className="text-white text-2xl lg:text-4xl font-bold mb-2">
              Ești în pană de idei de afaceri?
            </h4>
            <p className="text-white text-[15px] md:text-xl">
              Inspiră-te din cele 10 idei de afaceri pregătite de noi cu care poți atrage o finanțare europeană. Introdu adresa ta de email și primește prezentarea gratuit!
            </p>
            <form onSubmit={upload} className="relative flex mt-10 flex-col lg:flex-row items-center">
              <input
                className="py-4 text-[#fff] xl:px-6 px-4 lg:px-5 w-full bg-[#260056] placeholder:text-white border-2 border-[#7000FF] rounded-full"
                type="email"
                placeholder={newsletter}
                required
                onChange={(e) => setNewsletter(e.target.value)}
              />
              <Link href='/files/10 Idei de afaceri.pdf' download={true} target="_blank" className="text-[#fff] font-bold lg:absolute w-full mt-3 lg:mt-0 lg:right-0 z-30 transition-all hover:scale-[1.05] lg:w-56 border-4 text-center cursor-pointer border-[#260056] bg-[#7000FF] py-5 px-10 text-sm rounded-full">
                Vreau documentul!
              </Link>
            </form>
          </div>
          <div className='relative hidden lg:flex justify-end mt-16 lg:mt-0 lg:ml-12'>
            <Image src='/images/testimoniale/Pag - testimoniale - structura idei afacere.png' alt='Why-Us' className='relative w-[450px] rounded-[35px] z-[2]' width={350} height={400} placeholder='blur' blurDataURL='/images/home-about-1.png' />
            {/* <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' />  */}
            <Image src='/images/proces/hexagon.svg' className="absolute -right-[50px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/circle-litle.svg' className="absolute -left-[40px] -top-[40px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/triangle-litle.svg' className="absolute right-[15%] -top-[50px] w-[100px] h-[100px]" alt='triangle' width={250} height={250}/>
          </div>
        </div>
      </section>
      <CTA
        title="Transformă-ți ideile în <purple>realitate<purple> prin fonduri europene!"
        linkText="Completează formularul!"
        linkHref="/contact"
      />
      {/* <News /> */}
      <NewsLetter headingText='Abonează-te și află secretele succesului în obținerea finanțăriilor europene!' />
    </>
  )
}
