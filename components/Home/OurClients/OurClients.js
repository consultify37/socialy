import Image from "next/image";
import Carousel from 'react-elastic-carousel';
import Link from "next/link";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const OurClients = () => {
    const Testimonials = [
        {
            id: 1,
            title: "Colaborarea cu Consultify - Un pas sigur către succes în Programul Start Up Nation",
            subTitle: 'Baloi Andrei – Fabricarea pieselor pentru roboți',
            description: "Colaborarea cu Consultify în cadrul programului Start-Up Nation a fost un pas important pentru afacerea mea. Echipa lor m-a sprijinit în fiecare etapă, de la verificarea eligibilității societății mele până la achizițiile necesare. Comunicarea clară și transparentă a fost un aspect de apreciat, iar ei au răspuns prompt la întrebările și nevoile mele.",
            descriptionTwo: "În urma aprobării proiectului, am beneficiat de ghidajul lor în identificarea și achiziționarea echipamentelor adecvate. Acum, aștept cu entuziasm începerea perioadei de monitorizare.",
            image: "/images/testimoniale/Recenzia 1.png",
        },
        {
            id: 2,
            title: "Ne-am deschis propria pensiune prin programul P.N.D.R. 6.4 cu ajutorul echipei Consultify",
            subTitle: 'Familia Branduși – Turism',
            description: "Cu ajutorul Consultify, am reușit să ne îndeplinim visul de a deschide o pensiune prin intermediul programului P.N.D.R. 6.4. Echipa lor ne-a ghidat și a oferit asistență în fiecare etapă a procesului, începând de la evaluarea eligibilității și redactarea proiectului, până la obținerea finanțării și implementarea sa. Comunicarea transparentă și suportul constant au fost de neprețuit.",
            descriptionTwo: "",
            image: "/images/testimoniale/Recenzia 2.png",
        },
        {
            id: 3,
            title: "O colaborare de succes cu Consultify: Obținerea finanțării de 40.000 Euro pentru carmangeria noastră",
            subTitle: 'Chitoiu Ioan – Carmangerie locală',
            description: "Cu ajutorul echipei Consultify, am reușit să accesăm o finanțare de 40.000 de euro pentru carmangeria noastră. Echipa lor ne-a sprijinit de la verificarea eligibilității și scrierea proiectului, până la depunerea acestuia și construirea planului de achiziții. ",
            descriptionTwo: "De asemenea, ne-au ajutat să răspundem clarificărilor primite de la finanțator și să începem perioada de implementare. Colaborarea a fost remarcabilă, iar profesionalismul și implicarea lor ne-au asigurat șanse considerabile de reușită în acest proiect. Suntem recunoscători pentru ajutorul lor și recomandăm cu încredere serviciile Consultify.",
            image: "/images/testimoniale/Recenzia 3.png",
        },
    ]
    return(
        <section id='our-clients' className='mt-16 md:mt-32 w-full flex items-center justify-center flex-col gap-5 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <p className="text-[#8717F8] text-xl md:text-3xl font-semibold mb-5">
                Gândurile și experiențele clienților noștri - testimoniale de succes
            </p>
            <div className='flex w-full justify-between items-center gap-5'>
                <Carousel
                    breakPoints={breakPoints}
                    isRTL={false}
                    pagination={true}
                    showArrows={true}
                    disableArrowsOnEnd={false}
                >
                {
                    Testimonials.map(testimonial =>
                        <article key={testimonial.id} className="bg-[#36007B] h-full rounded-[16px] justify-center lg:justify-between items-center min-h-max mx-2 flex-col lg:flex-row flex flex-1 py-10 md:py-5">
                            <div className="w-full md:w-200px px-7 md:px-5 py-2 md:pb-8 lg:mr-8">
                                <h3 className="text-white font-bold text-base md:max-w-[90%] md:text-[24px]">
                                    {testimonial.title}
                                </h3>
                                <p className="text-tertiary text-[16px] font-semibold mt-6">{testimonial.subTitle}</p>
                                <p className="text-sm text-[#fff] font-medium mt-4 text-justify">{testimonial.description}</p>
                                <p className="text-sm text-[#fff] font-medium mt-2 text-justify">{testimonial.descriptionTwo}</p>
                            </div>
                            <Image 
                                className="w-[250px] md:w-[300px] rounded-[24px] mt-8 lg:mt-0 lg:mr-5"
                                key={testimonial.title}
                                src={testimonial.image}
                                alt={testimonial.title}
                                width={1080}
                                height={1080}
                            />
                        </article>
                    )
                }
                </Carousel>
            </div>
            <Link href='/testimoniale' className="bg-[#BA63FF] flex items-center font-semibold justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 md:py-4 mb-4 text-white rounded-[28.5px] transition-all hover:scale-[1.05]">
                Vezi toate testimonialele
            </Link>
        </section>
    )
}

export default OurClients;
