import Image from "next/image";
import Link from "next/link";

const Item1About = () => {
  return (
    <div className="w-full mx-auto px-7 md:px-[40px] xl:px-[140px] 2xl:px-[276px] gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2]">
      <div className="w-full flex-1 z-[2] gap-5 font-light">
        <h2 className="text-xl font-bold text-primary z-[2] md:text-xl lg:text-2xl xl:text-4xl">
          Despre Socialy
        </h2>
        <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2] mb-8">
          Bine ați venit la Socialy, specializată în ads pe social media, web-design, branding, conținut organic și video marketing. Suntem printre cei mai buni în domeniu, oferind soluții personalizate și eficiente.
        </p>
        <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2]">
          Noi credem într-o abordare orientată către rezultate, concentrându-ne pe nevoile și obiectivele specifice ale fiecărui client. Colaborăm strâns cu dvs., înțelegând viziunea și valorile afacerii pentru a dezvolta strategii de marketing eficiente și creative care să atragă și să angajeze publicul țintă.
        </p>
        <div className="flex gap-4 mt-6 z-[2]">
          <Link
            href="/campanii"
            className="py-3 bg-primary text-onPrimary flex items-center font-semibold rounded-[28.5px] px-10 sm:px-12 transition-all hover:scale-[1.05]"
          >
            Campanii
          </Link>
          <Link
            href="/contact"
            className="py-3 bg-transparent text-primary flex items-center rounded-[28.5px] border-2 font-semibold border-primary px-10 sm:px-12 transition-all hover:scale-[1.05]"
          >
            Contact
          </Link>
        </div>
      </div>
      <Image
        src="/images/home-about-1.jpg"
        alt="About home 1"
        className="relative rounded-[28.5px] w-full md:w-[450px] mx-auto z-[4]"
        width={400}
        height={400}
      />
    </div>
  );
};
export default Item1About;
