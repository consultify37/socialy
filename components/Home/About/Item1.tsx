import Image from "next/image";
import Link from "next/link";

const Item1About = () => {
  return (
    <div className="w-full mx-auto px-7 md:px-[40px] xl:px-[140px] 2xl:px-[276px] gap-5 flex gap-y-20 justify-between flex-wrap z-[2]">
      <div className="w-full flex-1 z-[2]">
        <h2 className="text-[32px] font-bold text-white z-[2] md:text-xl lg:text-2xl xl:text-4xl">
          Despre platforma noastră
        </h2>
        <p className="text-white font-thin text-[16px] mt-5 z-[2]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          cupiditate et voluptate ipsam quia minima totam eius libero vero illum
          nobis modi doloremque, est ducimus ex facere distinctio ea eos.
        </p>
        <p className="text-white font-thin text-[16px] mt-5 z-[2]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          cupiditate et voluptate ipsam quia minima totam eius libero vero illum
          nobis modi doloremque, est ducimus ex facere distinctio ea eos.
        </p>
        <p className="text-white font-thin text-[16px] mt-5 z-[2]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          cupiditate et voluptate ipsam quia minima totam eius libero vero illum
          nobis modi doloremque, est ducimus ex facere distinctio ea eos.
        </p>
        <div className="flex gap-4 mt-4 z-[2]">
          <Link
            href="/news"
            className="p-2 bg-[#01EA88] text-[#260056] rounded-[28.5px] font-medium px-10 text-xs md:text-[16px]"
          >
            noutăți
          </Link>
          <Link
            href="/despre"
            className="p-2 bg-transparent text-white rounded-[28.5px] border-2 border-[#006CFF] font-medium px-10 text-xs md:text-[16px]"
          >
            despre noi
          </Link>
        </div>
      </div>
      <Image
        src="/images/about-home-1.png"
        alt="About home 1"
        className="relative rounded-[28.5px] w-full md:w-[400px] mx-auto z-[4]"
        width={400}
        height={400}
      />
    </div>
  );
};
export default Item1About;
