/* eslint-disable react/jsx-key */
import Axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

  
const Testimonials = () => {
  const Testimonial = [
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
    {
        id: 4,
        title: "Sprijin decisiv pentru agricultori: Cum am obținut finanțarea dorită cu ajutorul Consultify",
        subTitle: 'Dinu Marcel - Agricultor',
        description: 'Cu sprijinul Consultify, am avut succes în obținerea finanțării necesare pentru achiziționarea de materii prime și echipamente prin intermediul programului "Microgranturi și Granturi în Domeniul Agroalimentar". Echipa lor ne-a fost alături în fiecare pas al procesului, de la evaluarea eligibilității și elaborarea proiectului, până la depunerea acestuia.  ',
        descriptionTwo: "Comunicarea fluentă și expertiza lor ne-au ajutat în demersurile noastre, iar profesionalismul de care au dat dovadă ne-a inspirat încredere. Recomand cu încredere Consultify!",
        video: "/images/testimoniale/Recenzia 4.mp4",
    },
    {
        id: 5,
        title: "Dezvoltând cabinetul medical cu ajutorul Consultify: Succes în programul PNRR C12",
        subTitle: 'Mihailescu Diana – Medic de familie',
        description: 'Am aplicat în programul PNRR C12 și am avut norocul de a colabora cu Consultify pentru echiparea și renovarea cabinetului meu. Încă de la început, echipa lor mi-a oferit sprijin în verificarea eligibilității și înțelegerea procesului de finanțare.',
        descriptionTwo: "Au fost alături de mine în etapa de planificare bugetară, asigurându-se că includem toate echipamentele necesare pentru desfășurarea activității medicale. După obținerea finanțării, au continuat să fie disponibili pentru întrebări și îndrumare suplimentară. Nu pot decât să le mulțumesc pentru profesionalismul și devotamentul lor!",
        video: "/images/testimoniale/Recenzia 5.mp4",
    },
    {
        id: 6,
        title: "Deschiderea cu succes a propriei brutării cu sprijinul Consultify",
        subTitle: 'Maria Prodan – Afacere în domeniul panificației',
        description: 'Cu sprijinul Consultify, am reușit să deschidem cu succes propria brutărie. Echipa lor ne-a oferit întreaga asistență în fiecare etapă a procesului, de la verificarea eligibilității și elaborarea proiectului, până la depunerea acestuia și gestionarea achizițiilor necesare.',
        descriptionTwo: "Comunicarea fluentă și abordarea lor profesionistă au fost cheia succesului proiectului nostru. Suntem foarte recunoscători pentru sprijinul lor.",
        image: "/images/testimoniale/Recenzia 6.png",
    },
    {
        id: 7,
        title: "Transformarea fermelor prin Consultify: Povestea fermierului care a obținut finanțarea dorită",
        subTitle: 'Niculae Andrei – Fermă',
        description: 'Cu sprijinul Consultify, am reușit să obțin finanțarea necesară pentru dezvoltarea afacerii. Colaborarea cu echipa lor a fost esențială în fiecare etapă a procesului. Încă de la început, mi-au verificat eligibilitatea  și am construit împreună un plan bugetar detaliat.',
        descriptionTwo: "Au fost ghidul meu de încredere în toți pașii necesari pentru depunerea proiectului și mi-au oferit suport constant și răspunsuri prompte la orice întrebare sau îngrijorare pe parcursul procesului. Îi recomand cu încredere!",
        image: "/images/testimoniale/Recenzia 7.jpg",
    }
]
    return(
        <section id='our-clients' className='mt-16 md:mt-32 w-full flex items-center justify-center flex-col gap-5'>
            <div className='flex w-full justify-between items-center gap-5'>
                <Carousel
                    isRTL={false}
                    disableArrowsOnEnd={false}
                    pagination={true}
                >
                {
                    Testimonial.map(testimonial =>
                      <article key={testimonial.id} className="bg-[#36007B] h-full min-h-[920px] sm:min-h-[650px] md:min-h-[600px] lg:min-h-[460px] xl:min-h-[400px] rounded-[16px] justify-center lg:justify-between items-center mx-2 flex-col lg:flex-row flex flex-1 py-10 md:py-5">
                        <div className="w-full md:w-200px px-7 md:px-5 py-2 md:pb-8 lg:mr-8">
                            <h3 className="text-white font-bold text-base md:max-w-[90%] md:text-[24px]">
                                {testimonial.title}
                            </h3>
                            <p className="text-tertiary text-[16px] font-semibold mt-6">{testimonial.subTitle}</p>
                            <p className="text-sm text-[#fff] font-medium mt-4 text-justify">{testimonial.description}</p>
                            <p className="text-sm text-[#fff] font-medium mt-2 text-justify">{testimonial.descriptionTwo}</p>
                        </div>
                        { testimonial.video ?
                            <video 
                                className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover rounded-[24px] mt-8 lg:mt-0 lg:mr-5"
                                loop={true}
                                autoPlay={true}
                            >
                                <source src={testimonial.video} type="video/mp4" />
                            </video> :
                            <Image 
                                className="w-[250px] md:w-[300px] h-[250px] object-cover md:h-[300px] rounded-[24px] mt-8 lg:mt-0 lg:mr-5"
                                key={testimonial.title}
                                src={testimonial.image}
                                alt={testimonial.title}
                                width={1080}
                                height={1080}
                            />
                        }
                    </article>
                    )
                }
                </Carousel>
            </div>
      </section>
    )
}

export default Testimonials