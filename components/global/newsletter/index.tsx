import Image from "next/image"
import Axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

interface NewsLetterProps {
  headingText: string;
}

export default function NewsLetter({ headingText }: NewsLetterProps) {
  const [newsletter, setNewsletter] = useState('Adresa ta de email');
  const [buttonNews, setButtonNews] = useState('Mă abonez')
  
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
        toast.error('Esti deja abonat la newsletter', { position: 'top-center' })
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
    <section className="my-16 md:my-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
      <div className="relative px-6 pb-20 md:px-20 md:py-0 py-2 flex items-center mt-32 justify-between flex-col lg:flex-row bg-[#260056] rounded-[16px] w-auto lg:h-[350px]">
        <Image src='/images/triangle-news.svg' className="absolute right-[-2rem] bottom-[-2rem] md:bottom-[ihnerit] md:top-[-2rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
        <div className="relative flex">
          <Image
            src="/images/news.png"
            alt="people-cheering"
            className="relative top-[-90px] lg:top-[auto] w-[280px] lg:w-[380px] h-auto z-[2] rounded-3xl"
            width={200}
            height={500}
          />
          <Image
            src="/images/Ellipse 23.svg"
            alt="people-cheering"
            className="absolute right-[-30px] -top-12 xl:left-[280px] md:left-[220px] md:top-7 w-[130px] lg:w-[145px] h-auto z-2"
            width={200}
            height={500}
          />
          <Image
            src="/images/Ellipse 24.svg"
            alt="people-cheering"
            className="absolute left-[-30p] top-[70px] xl:bottom-[80px] md:-left-10 md:bottom-[60px] z-2 w-[130px] lg:w-[145px] h-auto"
            width={200}
            height={500}
          />
        </div>
        <div className="lg:mt-0 max-w-[470px]">
          <h2 className="text-white text-[16px] md:text-[26px] font-bold">
            {headingText}
          </h2>
          <form onSubmit={upload} className="relative flex mt-10 flex-col lg:flex-row items-center">
            <input
              className="py-3 text-[#fff] xl:px-6 px-4 lg:px-5 w-full bg-[#260056] placeholder:text-white border-2 border-[#7000FF] rounded-full"
              type="email"
              placeholder={newsletter}
              required
              onChange={(e) => setNewsletter(e.target.value)}
            />
            <button type="submit" className="text-[#fff] font-bold lg:absolute w-full mt-3 lg:mt-0 lg:right-0 z-30 transition-all hover:scale-[1.05] lg:w-44 border-4 cursor-pointer border-secondary bg-[#7000FF] py-4 px-10 text-sm rounded-full">
              Mă abonez
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
