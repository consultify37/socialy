import Image from "next/image";
import Link from "next/link";

const Item1About = () => {
  return (
    <div className="w-full mx-auto px-7 md:px-[40px] xl:px-[140px] 2xl:px-[276px] gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2]">
      <div className="w-full flex-1 z-[2] gap-5">
        <h2 className="text-xl font-bold text-white z-[2] md:text-xl lg:text-2xl xl:text-4xl">
          Despre platforma noastră
        </h2>
        <p className="text-white font-thin max-w-[650px] text-[16px] mt-5 z-[2] mb-8">
          Ai nevoie de finanțare prin fonduri europene pentru proiectul tău? Consultify te poate ajuta! Suntem specializați în accesarea fondurilor europene pentru diverse proiecte, de la turism și tehnologie la agricultură durabilă și dezvoltare rurală.
        </p>
        <p className="text-white font-thin max-w-[650px] text-[16px] mt-5 z-[2]">
          La Consultify, ne concentrăm pe nevoile tale specifice. Echipa noastră de experți îți oferă cele mai bune soluții de finanțare personalizate, indiferent de domeniul în care activezi. Accesarea fondurilor europene poate fi complicată, dar Consultify simplifică și eficientizează acest proces pentru tine!
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
        width={400}
        height={400}
      />
    </div>
  );
};
export default Item1About;
