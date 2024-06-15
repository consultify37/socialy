import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import CTA from "../../components/CTA"
import toast from "react-hot-toast"
import Logos from "../../components/Home/Logos"
import PageHeader from "../../components/Header/PageHeader"
import OurClients from "../../components/Home/OurClients/OurClients"
import { addDoc, collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import FeaturedProducts from "../../components/Home/Why-Us/FeaturedProducts"
import { formatDate } from "../../utils/formatDate"
import { Article, Product } from "../../types"
import News from "../../components/Home/News/News"

const testimonials = [
  {
    title: 'Răzvan - Platformă de cursuri online - De la idee la succes! ',
    text1: 'Răzvan, fondatorul unei platforme de cursuri online, a căutat sprijin pentru a-și promova platforma și pentru a atrage un număr mai mare de potențiali cursanți interesați. Obiectivul său era să crească vizibilitatea platformei pe social media și să atragă un public activ și interesat.',
    text2: 'Prin colaborarea cu Socialy, Răzvan a obținut rezultate remarcabile în promovarea platformei sale de cursuri online pe social media. Platforma sa a cunoscut o creștere semnificativă a numărului de urmăritori și a interacțiunilor pe canalele de socializare. Puteți urmări mai departe clipul pentru întreaga poveste:',
    ytUrl: 'https://www.youtube.com/embed/REOe7_886cE' 
  },
  {
    title: 'Robert - Web Designer - Creșterea portofoliului de clienți mulțumiți!',
    text1: 'Robert, un talentat web designer, dorea să înceapă să ofere servicii de creare a site-urilor web. Pentru a-și atinge obiectivele, Robert a colaborat cu echipa Socialy pentru a dezvolta și implementa o strategie de marketing online eficientă, concentrată pe promovarea serviciilor sale.',
    text2: 'Aceste campanii au inclus publicitate plătită pe diverse platforme online, cum ar fi Instagram Ads și Facebook Ads, pentru a atrage potențiali clienți interesați. Socialy l-a ajutat ca în câteva luni să ajungă la nivelul "zero to hero" activitatea lui schimbându-se radical odată cu parteneriatul început. Puteți vedea mai departe în clip experiența trăită:',
    ytUrl: 'https://www.youtube.com/embed/vNWfHR_2cgk'
  },
  {
    title: 'Mario - Antreprenor - Colaborare de succes, atât pentru el, cât și pentru clienții lui!',
    text1: 'Mario, în vârstă de 23 de ani, deține o agenție de producție foto-video, realizând și el la rândul său campanii de marketing pe TikTok. A început colaborarea cu Socialy pentru promovarea serviciului său inițial pe Meta Ads.',
    text2: 'În urma colaborării personale, s-a decis să înceapă un parteneriat cu Socialy, ce-l ajută în crearea unor pachete complete pentru clienții săi, astfel fiind mulțumit din toate punctele de vedere. Pentru a vedea povestea completă, vă invităm să vizionați clipul următor:',
    ytUrl: 'https://www.youtube.com/embed/Y-1PZLiBBUQ'
  }
]

type Props = {
  articles: Article[]
  products: Product[]
}

export default function Testimoniale({ articles, products }: Props) {
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
  
  const [email, setEmail] = useState('')
  
  const upload = async (e: any) => {
    e.preventDefault()
    
    try {
      const collectionRef = collection(db, 'newsletter')
      await addDoc(collectionRef, { website: process.env.SITE, email })
      
      toast.success('Verifică-ți email-ul, documentul tocmai ce a fost trimis! 🚀', { duration: 5000, style: { textAlign: 'center' } })
      setEmail('')
    } catch (e) {
      toast.error('Ceva nu a mers bine. Încearcă din nou!')
    }

  }

  return (
    <>
      <Head>
        <title>Socialy | Testimoniale</title>
      </Head>
      <PageHeader
        title="Uite poveștile de succes ale clienților noștri!"
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
        <h2 className="text-secondary font-bold text-[20px] md:text-xl lg:text-2xl xl:text-4xl text-center px-7">
          Peste 150 de firme s-au dezvoltat în mediul online cu ajutorul nostru. Iată câteva dintre ele:
          </h2>
          <h3 className="text-secondary text-[16px] md:text-lg lg:text-xl xl:text-2xl mt-4">
            Iată câteva dintre ele:
          </h3>
        
        <Logos />
      </section>
      <section className="relative bg-secondary w-full pt-16 md:pt-32 mt-16 md:mt-32 pb-24 flex flex-col items-center justify-center overflow-visible px-0 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        <span className="bg-secondary rounded-[200px_250px_0px_0px] w-[115vw] md:w-[103vw] -rotate-[2deg] absolute -left-5 -top-16 h-32" />
        <h2 className="mb-8 md:mb-12 px-4 md:px-0 text-xl md:text-4xl font-bold text-white md:max-w-[90%] text-center md:pt-11 lg:pt-1 pt-1">
          Am ajutat clienți din toată România să își dezvolte afacerea în mediul online prin intermediul strategiilor noastre!
        </h2>
        <OurClients />
        <section id='trust-us' className='bg-secondary mt-24 flex flex-col items-center w-full relative'>
            <h2 className="text-xl md:text-3xl font-bold text-white max-w-[80%] text-center pt-0 md:pt-20 lg:pt-0 mb-5">
              Încă nu te-am convins? Vezi lista cu rezultatele clienților noștri
            </h2>
            <Link href='https://www.canva.com/design/DAFwMTGz5pM/zVfz3DRpAjzmSdjqz_Cqzw/view?utm_content=DAFwMTGz5pM&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" className="bg-primary mb-16 mt-4 font-semibold px-12 py-3 text-onPrimary transition-all hover:scale-[1.05] rounded-[28.5px]">
              Vezi lista aici!
            </Link>
            <h2 className="text-xl md:text-3xl font-bold text-white px-8 md:px-0 md:max-w-[80%] text-center pt-4 md:pt-20 lg:pt-0 mb-12 md:mb-24">
              Sau vizionați următoarele studii de caz!
            </h2>
            <div className="w-full mx-auto gap-[6rem] px-7 md:px-0 flex gap-y-12 justify-between flex-wrap z-[2] items-center">
              <div className="w-full flex-1 z-[2] md:min-w-[400px]">
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
            <div className='w-full px-7 md:px-0 mt-16 md:mt-40 mx-auto gap-[6rem] flex gap-y-12 justify-between items-center flex-col-reverse lg:flex-row z-[2]'>
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
              <div className='w-full md:min-w-[400px]'>
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
            <div className="w-full px-7 md:px-0 mt-16 md:mt-40 mx-auto gap-[6rem] flex gap-y-12 items-center justify-between flex-wrap z-[2]">
              <div className="w-full flex-1 z-[2] md:min-w-[400px]">
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
        <div className="flex px-7 md:px-0 w-full flex-col lg:flex-row mt-16 md:mt-48 justify-between items-center">
          <div className='relative flex lg:hidden justify-end my-16 lg:mb-0 lg:ml-12'>
              <Image src='/images/testimoniale/poza 1 formular.jpg' alt='Why-Us' className='relative object-cover h-[280px] w-[450px] rounded-[35px] z-[2]' width={800} height={533} unoptimized={true} />
              {/* <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' />  */}
              <Image src='/images/proces/hexagon.svg' className="absolute -right-[50px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
              <Image src='/images/circle-litle.svg' className="absolute -left-[40px] -top-[40px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
              <Image src='/images/triangle-litle.svg' className="absolute right-[15%] -top-[50px] w-[100px] h-[100px]" alt='triangle' width={250} height={250}/>
          </div>
          <div className="flex flex-col w-full lg:mr-12 lg:max-w-[600px]">
            <h4 className="text-white text-2xl lg:text-4xl font-bold mb-2">
              Vrei să înveți să faci campanii de generare lead-uri pe TikTok?
            </h4>
            <p className="text-white text-[15px] md:text-xl">
              Introdu adresa ta de email și descarcă acum ghidul nostru complet pentru a învăța cum să creezi campanii eficiente de generare de lead-uri pe TikTok. Fii cu un pas înaintea concurenței și transformă-ți strategia de marketing digital!
            </p>
            <form onSubmit={upload} className="relative flex mt-10 flex-col lg:flex-row items-center">
              <input
                className="py-4 text-onSecondary xl:px-6 px-4 lg:px-5 w-full bg-secondary placeholder:text-onSecondary border-2 border-primary rounded-full"
                type="email"
                placeholder="Adresa ta de email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit' className="text-onPrimary font-bold lg:absolute w-full mt-3 lg:mt-0 lg:right-0 z-30 transition-all hover:scale-[1.05] lg:w-56 border-4 text-center cursor-pointer border-secondary bg-primary py-5 px-10 text-sm rounded-full">
                Vreau ghidul!
              </button>
            </form>
          </div>
          <div className='relative hidden lg:flex justify-end mt-16 lg:mt-0 lg:ml-12'>
            <Image src='/images/testimoniale/poza 1 formular.jpg' alt='Why-Us' unoptimized={true} className='relative object-cover object-left h-[280px] sm:h-full w-full md:w-[450px] md:h-[400px] rounded-[35px] z-[2]' width={800} height={533} />
            {/* <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' />  */}
            <Image src='/images/proces/hexagon.svg' className="absolute -right-[50px] -bottom-[50px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/circle-litle.svg' className="absolute -left-[40px] -top-[40px] w-[160px] h-[160px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/triangle-litle.svg' className="absolute right-[15%] -top-[50px] w-[100px] h-[100px]" alt='triangle' width={250} height={250}/>
          </div>
        </div>
      </section>
      <CTA
        title="Alege succesul - Demarează-ți campania de <purple>marketing<purple> cu noi acum!"
        linkText="Completează formularul!"
        linkHref="/contact"
      />
      {/* <FeaturedProducts 
        products={products}
      /> */}
      <News
        articles={articles}
      />
      <NewsLetter headingText='Alătură-te comunității noastre și fii la curent cu cele mai noi strategii de marketing și nu numai!' />
    </>
  )
}

export const getStaticProps = async () => { 
  const articlesSnap = await  getDocs(query(collection(db, 'articles'), where('active', '==', true), where('featured', '==', true), orderBy('createdAt', 'desc'), limit(8)))
  var articles = articlesSnap.docs.map((doc) => {
      const { lastUpdated, createdAt, ...data } = doc.data()
      return ({ id: doc.id, formattedCreatedAt: formatDate(new Date(createdAt.seconds*1000)), ...data }) 
  })

  const collectionRef = query(collection(db, 'products'), where('active', '==', true), where('featured', '==', true), orderBy('lastUpdated', 'desc'), limit(8))
  const collectionSnap = await getDocs(collectionRef)

  const products: Product[] = collectionSnap.docs.map((doc) => {
      const { lastUpdated, ...data } = doc.data()

      return ({ id: doc.id, ...data } as Product)
  })

  return {
      props: { articles, products },
      revalidate: Number(process.env.REVALIDATE)
  }
}
