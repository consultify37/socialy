import Image from "next/image";
import Link from "next/link";

const Item1Story = () => {
  return (
    <article className="flex flex-wrap gap-x-20 gap-y-10 mt-10 md:mt-20 justify-between items-center">
      <div className="flex-1">
        <h2 className="text-[#260056] font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-4xl">
          Ne diferențiem prin:
        </h2>
        <p className="text-[#260056] font-normal text-base">
          Suntem mândri să fim un partener de încredere pentru clienții noștri, ajutându-i să obțină finanțarea necesarăpentru a-și
          realiza obiectivele. În cadrul Consultify, lucrăm strâns cu clienții noștri, oferindu-le cele mai bune soluții personalizate
          pentru fiecare proiect în parte.
        </p>
        <br />
        <p className="text-[#260056] font-normal text-base">
          Echipa noastră tânără și dinamică este dedicată în întregime clienților noștri și lucrează cu fiecare client în mod individual,
          pentru a înțelege și a aborda nevoile specifice ale fiecăruia. De la evaluarea inițială a proiectului până la prezentarea finală
          a acestuia, suntem mereu acolo pentru clienții noștri și ne asigurăm că aceștia obțin finanțarea de care au nevoie. Cu o rată de
          succes ridicată și o abordare personalizată, Consultify este partenerul ideal în accesarea fondurilor europene.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/programe"
            className="p-2 bg-[#BA63FF] text-[#FFFFFF] flex items-center rounded-[28.5px] font-medium px-10 text-xs md:text-base"
          >
            programe
          </Link>
          <Link
            href="/servicii"
            className="p-2 bg-transparent text-[#260056] flex items-center rounded-[28.5px] border-2 border-[#8717F8] font-medium px-10 text-xs md:text-base"
          >
            servicii
          </Link>
        </div>
      </div>
      <Image
        src="/images/ourstory-1.png"
        alt="Our Story 2"
        className="w-full md:max-w-[450px] rounded-[35px] md:mr-[4%]"
        width={300}
        height={300}
      />
    </article>
  );
};

export default Item1Story;
