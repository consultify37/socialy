import Image from "next/image";
import Link from "next/link";

const Item1About = () => {
  return (
    <div className="w-full mx-auto px-7 md:px-[40px] xl:px-[140px] 2xl:px-[276px] gap-5 flex gap-y-20 justify-between flex-wrap z-[2]">
      <div className="w-full flex-1 z-[2]">
        <h2 className="text-xl font-bold text-white z-[2] md:text-xl lg:text-2xl xl:text-4xl">
          Despre platforma noastră
        </h2>
        <p className="text-white font-thin text-[16px] mt-5 z-[2] mb-8">
          Ești în căutarea unei soluții de finanțare prin fonduri europene pentru proiectul tău? Consultify este aici pentru a te ajuta! Suntem o companie specializată în accesarea fondurilor europene pentru proiecte diverse, de la dezvoltarea turismului și cercetarea și dezvoltarea tehnologiei, la agricultura durabilă și dezvoltarea rurală.
        </p>
        <p className="text-white font-thin text-[16px] mt-5 z-[2]">
          La Consultify, suntem puși pe treabă și ne concentrăm pe nevoile specifice ale fiecărui client. Indiferent de domeniul în care activezi, echipa noastră de experți îți va oferi cele mai bune soluții de finanțare personalizate, astfel încât să-ți poți realiza proiectul fără griji. Accesarea fondurilor europene poate fi complicată, dar nu trebuie să fie - Consultify poate face acest proces mai ușor și mai eficient pentru tine!
        </p>
        <div className="flex gap-4 mt-4 z-[2]">
          <Link
            href="/news"
            className="py-3 bg-[#BA63FF] text-[#fff] rounded-[28.5px] font-xl px-12"
          >
            programe
          </Link>
          <Link
            href="/contact"
            className="py-3 bg-transparent text-white rounded-[28.5px] border-2 border-[#8717F8] font-xl px-12"
          >
            contact
          </Link>
        </div>
      </div>
      <Image
        src="/images/home-about-1.png"
        alt="About home 1"
        className="relative rounded-[28.5px] w-full md:w-[400px] mx-auto z-[4]"
        width={400}
        height={400}
      />
    </div>
  );
};
export default Item1About;
