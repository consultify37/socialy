import Image from "next/image";

const TrustSRL = () => {
  return (
    <section
      id="feedback-firme"
      className="w-full flex flex-col items-center mt-[6.25rem] justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]"
    >
      <h2 className="text-[#8717F8] font-medium text-base md:text-xl lg:text-2xl xl:text-4xl text-center">
        Peste 5000 de firme au accesat fonduri europene cu ajutorul nostru
      </h2>
      <h3 className="text-[#8717F8] font-medium text-base md:text-lg lg:text-xl xl:text-3xl">
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
          blurDataURL="/images/feedback-1.png"
        />
        <Image
          src="/images/feedback-2.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
        <Image
          src="/images/feedback-3.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
        <Image
          src="/images/feedback-4.png"
          width={158}
          height={49}
          className="aspect-[3/2] object-contain"
          placeholder="blur"
          alt="Feedback 1"
          blurDataURL="/images/feedback-1.png"
        />
      </div>
    </section>
  );
};

export default TrustSRL;
