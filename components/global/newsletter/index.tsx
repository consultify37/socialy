import Image from "next/image";
import Axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsLetter() {
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
    <section className="my-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
      <div className="relative px-12 md:py-0 py-2 flex items-center mt-32 flex-col-reverse lg:flex-row-reverse bg-[#00103C] rounded-[16px] w-auto h-[500px] lg:h-[350px]">
        <Image
          src="/images/pexels-fauxels-3184433 1.png"
          alt="people-cheering"
          className="absolute xl:-top-5 lg:-top-3 z-20 lg:left-10 -top-16 w-[250px] lg:w-[320px] xl:w-[360px] h-auto"
          width={200}
          height={500}
        />
        <Image
          src="/images/Ellipse 23.svg"
          alt="people-cheering"
          className="absolute xl:left-[300px] lg:left-[260px] lg:translate-x-0 lg:top-auto -top-12 translate-x-24 z-10 w-[130px] lg:w-[145px] h-auto"
          width={200}
          height={500}
        />
        <Image
          src="/images/Ellipse 24.svg"
          alt="people-cheering"
          className="absolute xl:bottom-0 lg:-left-5 top-[60px] lg:translate-x-0 -translate-x-24 z-10 w-[130px] lg:w-[145px] h-auto"
          width={200}
          height={500}
        />
        <div className="self-center lg:mt-0 max-w-[470px]">
          <h2 className="text-white text-xl font-bold">
            Abonează-te la newsletter pentru informații actualizate despre afaceri
          </h2>
          <form onSubmit={upload} className="relative flex mt-10 flex-col lg:flex-row items-center">
            <input
              className="py-4 text-[#fff] xl:px-6 px-4 lg:px-5 w-full bg-[#00103C] placeholder:text-white border-2 border-[#01EA88] rounded-[22px]"
              type="email"
              placeholder={newsletter}
              required
              onChange={(e) => setNewsletter(e.target.value)}
            />
            <button type="submit" className="text-[#00103C] font-bold lg:absolute w-full mt-3 lg:mt-0 lg:right-0 z-30 transition-all hover:scale-[1.05] lg:w-44 border-4 cursor-pointer border-[#00103C] bg-[#01EA88] py-5 px-10 text-sm rounded-[22px]">
              Mă abonez
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
