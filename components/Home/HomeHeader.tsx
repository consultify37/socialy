import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import HomeCarousel from './carousel-home'
const HomeHeader = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [margin, setMargin] = useState<number>(0);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setMargin(document.getElementById("hero-video")!.clientHeight);
    }, 250);
    window.addEventListener("resize", editMargin);
    return () => {
      window.removeEventListener("resize", editMargin);
    };
  }, []);
  const editMargin = () => {
    setMargin(document.getElementById("hero-video")!.clientHeight);
  };
  return (
    <section
      ref={sectionRef}
      id="HeroContainer"
      className={`flex flex-col min-h-[55vh] md:min-h-[45vh] xl:min-h-[65vh] w-full items-center justify-start bg-[#260056] relative px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]`}
      style={{
        marginBottom: `${margin - 50}px`,
        paddingBottom: `${
          loaded && document.body.clientWidth < 600 ? `${margin - 80}px` : "0"
        }`,
      }}
    >
      <Image
        src="/images/circle-hero-right.svg"
        alt="Hero blue circle"
        width={200}
        height={200}
        className="absolute -right-24 xl:right-0 -top-4 xl:top-0 z-[5] w-[140px] xl:w-[250px]"
      />
      <Image
        src="/images/triangle-hero.svg"
        alt="Hero blue circle"
        width={140}
        height={140}
        className="absolute -right-8 w-24 xl:w-[140px] -bottom-2 xl:right-10 xl:bottom-2 z-[11]"
      />
      <Image
        src="/images/circle-hero-left.svg"
        alt="Hero green circle"
        width={200}
        height={200}
        className="absolute w-[100px] xl:w-[250px] left-0 -top-20 lg:-top-44 xl:top-[50%] xl:translate-y-[-50%] z-[5]"
      />
      <span className="bg-[#260056] w-[130vw] xl:w-[113vw] 2xl:w-[112vw] h-[140%] z-[4] -left-[133] -rotate-[5deg] rounded-[0_0_199px_64px] md:rounded-[0_0_164px_144px] xl:rounded-[0_0_200px_250px] 2xl:rounded-[0_0_170px_250px] xl:-left-32 2xl:-left-40 -top-[7.5rem] xl:top-[-11rem] absolute overflow-hidden" />
      <div className="z-10 w-full flex flex-col items-center gap-9 relative pt-12">
        <div className="relative flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-5xl 2xl:text-6xl font-bold text-center">
            Finanțarea potrivită <br className="block md:hidden"/> pentru firma potrivită!
          </h1>
          <Image
            id="hero-video"
            src="/images/home-header/home-line.svg"
            alt="Hero like"
            width={500}
            height={500}
            className="absolute w-[625px] right-0 -bottom-4 lg:w-[505px] lg:w-[625px] lg:-bottom-8"
          />
        </div>
        <p className="text-white text-center text-xs lg:text-xl">
          Consultify este partenerul tău de încredere în obținerea finanțărilor nerambursabile, oferind soluții personalizate pentru dezvoltarea afacerii tale.
        </p>
        {/* <p className="text-white text-lg xl:text-xl">
          Consultify este partenerul tău de încredere pentru orice tip de finanțare. Având o echipă de experți în finanțări europene, îți oferim soluțiile personalizate pentru a-ți maximiza potențialul de dezvoltare a afacerii tale.
        </p> */}
        <button
          type="button"
          className="px-10 py-4 bg-[#BA63FF] text-[#fff] rounded-[28.5px] mb-12 text-base"
        >
          cum pot accesa fonduri?
        </button>
        <div className="absolute top-[100%] w-full">
          <div className="relative w-[90%] home-carousel xl:w-[75%] flex items-center justify-center mx-auto">
            <HomeCarousel />
            <Image
              id="hero-video"
              src="/images/polygon.svg"
              alt="Hero video"
              width={120}
              height={120}
              className="absolute z-[4] w-[43px] md:w-[100px] xl:w-[120px] -top-1 -left-5 md:-top md:-top-10 xl:-left-4 xl:-top-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeHeader;
