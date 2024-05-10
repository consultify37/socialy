import Image from "next/image"
import Carousel from 'react-elastic-carousel'
import Link from "next/link"
import ReactPlayer from 'react-player'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const OurClients = ({hasTitle=false}) => {
    const Testimonials = [
        {
            id: 1,
            title: "Succes în colaborarea cu Socialy: Creșterea vizibilității și generarea de lead-uri",
            subTitle: 'Popescu Ion - Broker de credite',
            description: "Am avut o colaborare de succes cu Socialy în care m-au ajutat să-mi cresc vizibilitatea și să atrag mai mulți clienți în domeniul meu. Echipa lor a înțeles nevoile mele și a creat strategii de marketing personalizate, care chiar au generat rezultate.",
            descriptionTwo: "Am fost impresionat de experiența și abordarea lor în domeniu. Recomand cu încredere Socialy tuturor celor care au nevoie de marketing.",
            video: '/images/testimoniale/1. Popescu Ion - broker credite.mp4'
        },
        {
            id: 2,
            title: "Creșterea afacerii datorită Socialy: Strategii eficiente pentru industria construcțiilor",
            subTitle: 'Tănase Adrian - Firmă de construcții',
            description: "Cu sprijinul celor de la Socialy, am reușit să-mi dezvolt afacerea în construcții. Echipa lor a creat și implementat strategii de marketing eficiente, care ne-au adus mai mulți clienți și proiecte noi.",
            descriptionTwo: "Colaborarea cu ei a fost plină de profesionalism și angajament, iar rezultatele obținute au depășit așteptările noastre. Sincer, pe lângă clienții noi aduși, au reușit cumva să-mi găsească și angajați când eram într-un impas. Recomand cu încredere!",
            video: '/images/testimoniale/2. Tanase Adrian - constructii.mp4'
        },
        {
            id: 3,
            title: "Partenerul nostru de încredere pentru promovarea restaurantului",
            subTitle: 'Diaconu Ana - Proprietar de restaurant',
            description: "Cu sprijinul Socialy, am reușit să ne promovăm pensiunea și să atragem un număr mai mare de clienți. Echipa lor a creat reclame personalizate, adaptate industriei și preferințelor noastre.",
            descriptionTwo: "Am fost impresionați de creativitatea lor în conceperea campaniilor publicitare și de abordarea lor. Colaborarea cu ei a adus rezultate vizibile în creșterea vânzărilor și a vizibilității brandului nostru. Recomand cu încredere serviciile lor pentru orice proprietar de restaurant.",
            image: "/images/testimoniale/3. Diaconu Ana - Propietar de Restaurant.jpg",
        },
        {
            id: 4,
            title: "Strategii inovatoare de marketing imobiliar cu Socialy",
            subTitle: 'Broască Marcel - Dezvoltator imobiliar',
            description: "Cu sprijinul echipei Socialy, am reușit să promovăm și să ne dezvoltăm proiectele imobiliare cu succes. Echipa lor a creat strategii de marketing inovatoare, care au atras atenția potențialilor cumpărători și ne-au ajutat să vindem rapid și eficient. ",
            descriptionTwo: "Am apreciat implicarea și abordarea lor  în funcție de nevoile fiecărui proiect. La următorul proiect tot cu ei o să colaborez!",
            video: '/images/testimoniale/4. Broasca Marcel - Dezvoltator Imobiliar.mp4'
        },
        {
            id: 5,
            title: "Strategia potrivita in cladirea succesului: Mulțumit de colaborarea noastră cu Socialy",
            subTitle: 'Gino Mihai - Constructii civile ',
            description: "Am ales să colaborez cu Socialy pentru promovarea serviciilor noastre de constructii și am fost foarte mulțumit de rezultate. Echipa lor a creat strategii de marketing eficiente, care ne-au adus mai mulți clienți decât putem face față, ținând cont că avem calendarul plin cu o lună în avans.",
            descriptionTwo: "Am apreciat munca făcută și o să colaborez cu ei de acum înainte mult timp.",
            video: '/images/testimoniale/5. Gino Mihai - constructii civile.mp4'
        },
        {
            id: 6,
            title: "Transformând visele în realitate: O colaborare de succes cu Socialy ",
            subTitle: 'Maria Popescu – Administrator Salon de Înfrumusețare',
            description: "Cu sprijinul echipei Socialy, am reușit să transformăm complet imaginea și reputația salonului nostru de coafură. Ei au creat strategii de marketing personalizate și inovatoare, care ne-au ajutat să ne conectăm cu publicul țintă și să atragem mai mulți clienți decât am visat vreodată.",
            descriptionTwo: "Prin intermediul campaniilor lor creative și promovării eficiente pe rețelele sociale, am devenit cunoscuți ca fiind un salon de referință în industria coafurii. Echipa lor a fost mereu disponibilă și promptă în răspunsuri, oferindu-ne ghidajul necesar pe tot parcursul colaborării. Recomand cu încredere serviciile lor!",
            image: "/images/testimoniale/6.Maria Popescu - salon infrumusetare.jpg",
        },
        {
            id: 7,
            title: "Zâmbetul pe fețelele tuturor: Cum ne-a ajutat Socialy să promovăm cu succes serviciile noastre",
            subTitle: 'Andrei Ionescu – Medic Stomatolog',
            description: "Colaborarea cu Socialy a avut un impact semnificativ asupra cabinetului meu stomatologic. Echipa lor a înțeles cu adevărat nevoile mele și a creat strategii personalizate care ne-au promovat serviciile într-un mod eficient.",
            descriptionTwo: "Prin intermediul campaniilor lor bine direcționate și a promovării pe platformele digitale, am reușit să ajungem la un număr mai mare de pacienți și să ne dezvoltăm baza de clienți. Suntem recunoscători pentru parteneriatul nostru și recomand cu încredere serviciile lor!",
            video: '/images/testimoniale/7. Andrei Ionescu - Medic stomatolog.mp4'
        },
    ]

    return(
        <section id='our-clients' className='w-full flex items-center justify-center flex-col gap-5 z-10'>
            {  hasTitle && 
                <p className="text-secondary text-xl md:text-3xl text-center font-bold px-7 md:px-0 mb-5">
                    Recomandări primite - Povești ale clienților noștri mulțumiți
                </p>
            }
            <div className='flex w-full justify-between items-center gap-5'>
                <Carousel
                    breakPoints={breakPoints}
                    isRTL={false}
                    pagination={true}
                    showArrows={true}
                    disableArrowsOnEnd={false}
                    className=""
                >
                {
                    Testimonials.map((testimonial, index) =>
                        <div key={testimonial.id + index} className="min-h-[840px] sm:min-h-[880px] md:min-h-[800px] lg:min-h-[500px] xl:min-h-[460px] 2xl:min-h-[440px] bg-[#202020] rounded-[16px] p-12 pb-0 lg:pb-8 px-8 lg:px-12 lg:py-8 mx-4 mb-4 flex flex-col lg:flex-row lg:justify-start items-center justify-start">
                            <div className="flex flex-col lg:w-2/3 lg:mr-24">
                                <h1 className="text-[16px] xl:text-[23px] text-onSecondary font-bold">{testimonial.title}</h1>
                                <p className="text-[14px] xl:text-[15px] text-primary font-semibold mt-4">{testimonial.subTitle}</p>
                                <p className="text-[14px] xl:text-[15px] text-onSecondary mt-4">{testimonial.description}</p>
                                <p className="text-[14px] xl:text-[15px] text-onSecondary mt-4">{testimonial.descriptionTwo}</p>
                            </div>
                            <div className="relative h-full flex flex-col justify-center items-center rounded-[24px] lg:h-auto lg:block lg:w-1/3">
                                { testimonial.image ? 
                                    <Image 
                                        className="rounded-[24px] z-20"
                                        width={512}
                                        height={512}
                                        src={testimonial.image}
                                        alt={testimonial.title}
                                    /> :
                                    <ReactPlayer 
                                        controls={true}
                                        url={testimonial.video}
                                        wrapper={({children}) => (
                                            <div className="rounded-[24px] w-[208px] h-[calc(208px/1080*1920)] overflow-hidden">
                                                { children }
                                            </div>
                                        )}
                                    />
                                }
                            </div>
                        </div>
                    )
                }
                </Carousel>
            </div>
            {hasTitle && <Link href='/testimoniale' className="bg-primary flex items-center font-semibold justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 md:py-4 mb-4 text-onPrimary rounded-[28.5px] transition-all hover:scale-[1.05]">
                Vezi toate testimonialele
            </Link>}
        </section>
    )
}

export default OurClients
