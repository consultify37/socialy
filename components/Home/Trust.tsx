import Image from "next/image";

const TrustSRL = () => {
  return (
    <section
      id="feedback-firme"
      className="w-full flex flex-col items-center mt-40 md:mt-[72px] justify-center"
    >
      <h2 className="text-[#8717F8] font-bold text-3xl md:text-xl lg:text-2xl xl:text-4xl text-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
      Peste 850 de companii au accesat fonduri europene cu ajutorul nostru. 
      </h2>
      <h3 className="text-[#8717F8] text-xl md:text-lg lg:text-xl xl:text-2xl px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
        Iată câteva dintre ele:
      </h3>
      <div className="md:px-[56px] xl:px-[100px] 2xl:px-[180px]">
        <div className="logos mt-8">
          <div className="logos-slide">
            { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20, 21, 22, 23, 24, 25, 26, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19, 20, 21, 22, 23, 24, 25, 26].map((logo, index) => (
              <Image
                src={`/images/trust logos/${logo}.png`}
                key={index}
                width={158}
                height={158}
                className="w-20 md:w-23 lg:w-26 xl:w-29 2xl:w-32 h-auto object-contain"
                placeholder="blur"
                alt="Feedback 1"
                blurDataURL={`/images/trust logos/${logo}.png`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex mt-4 gap-5 flex-wrap justify-center">
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
      </div> */}
    </section>
  );
};

export default TrustSRL;
