import Image from "next/image";
import Link from "next/link";

const Item1Story = () => {
  return (
    <article className="flex flex-wrap gap-y-10 gap-x-[6rem] mt-10 md:mt-32 justify-between items-center">
      <div className="flex-1">
        <h2 className="text-secondary font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-3xl">
          Descoperă cine suntem:
        </h2>
        <p className="text-secondary font-normal text-[14px] md:text-base">
          La Socialy, suntem interesati de succesul afacerii tale și suntem aici să îți fim partener în atingerea obiectivelor tale de marketing. Lucrăm strâns cu clienții noștri, oferindu-le soluții personalizate și inovatoare pentru fiecare proiect.
        </p>
        <br />
        <p className="text-secondary font-normal text-[14px] md:text-base">
          Avem o rată ridicată de succes în obținerea rezultatelor pozitive pentru clienții noștri, iar portofoliul nostru diversificat demonstrează capacitatea noastră de a răspunde provocărilor din diferite industrii. Indiferent dacă ai nevoie de strategii de promovare online, gestionarea campaniilor publicitare sau dezvoltarea prezenței tale pe rețelele sociale, noi suntem aici să te ghidăm și să te susținem pe parcursul întregului proces.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/campanii" 
            className="bg-primary py-3 text-onPrimary font-semibold rounded-[28.5px] font-xl px-12 hover:scale-[1.05] transition-all"
          >
            Campanii
          </Link>
          <Link
            href="/servicii"
            className="py-3 bg-transparent font-semibold text-secondary flex items-center rounded-[28.5px] border-2 border-primary px-12 hover:scale-[1.05] transition-all"
          >
            Servicii
          </Link>
        </div>
      </div>
      <Image
        src="/images/About/poza 1.jpg"
        alt="Our Story 2"
        unoptimized={true}
        className="w-full md:max-w-[450px] md:h-[400px] object-cover rounded-[35px]"
        width={1024}
        height={1024}
      />
    </article>
  );
};

export default Item1Story;
