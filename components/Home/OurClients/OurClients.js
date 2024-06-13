import Image from "next/image"
import Carousel from 'react-elastic-carousel'
import Link from "next/link"
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const OurClients = ({hasTitle=false}) => {
    const Testimonials = [
        {
            id: 1,
            title: "O campanie de succes pentru o agenție de brokeraj în credite",
            subTitle: 'Popescu Ion - Broker de credite',
            description: "Am avut o colaborare de succes cu Socialy în care m-au ajutat să-mi cresc vizibilitatea și să atrag mai mulți clienți în domeniul meu. Echipa lor a înțeles nevoile mele și a creat strategii de marketing personalizate, care chiar au generat rezultate.",
            descriptionTwo: "Cu doar 2730 lei, am obținut 9716 lead-uri pentru afacerea mea, datorită campaniei eficiente realizate de agenția de marketing. Recomand cu încredere!",
            video: '/images/testimoniale/Recenzie 1.mp4'
        },
        {
            id: 2,
            title: "Creșterea afacerii datorită Socialy: Strategii eficiente pentru industria construcțiilor",
            subTitle: 'Tănase Adrian - Firmă de construcții',
            description: "Datorită campaniei de marketing realizate de echipa voastră, am reușit să generăm peste 4200 de lead-uri pentru afacerea noastră, investind doar 1000 lei. Profesionalismul și strategia bine gândită au adus rezultate impresionante. Mulțumim pentru suport și colaborare!",
            descriptionTwo: "",
            image: '/images/testimoniale/Recenzie 2.jpg'
        },
        {
            id: 3,
            title: "Socialy: Partenerul nostru de încredere pentru promovarea pensiunii",
            subTitle: 'Diaconu Ana - Proprietar de pensiune',
            description: "Cu sprijinul Socialy, am reușit să ne promovăm pensiunea și să atragem un număr mai mare de clienți. Echipa lor a creat reclame personalizate, adaptate industriei și preferințelor noastre. Am fost impresionați de creativitatea lor în conceperea campaniilor publicitare și de abordarea lor. Colaborarea cu ei a adus rezultate vizibile în creșterea vânzărilor și a vizibilității brandului nostru. Recomand cu încredere serviciile lor pentru orice proprietar de pensiune.",
            descriptionTwo: "",
            video: "/images/testimoniale/Recenzie 3.mp4",
        },
        {
            id: 4,
            title: "Strategii inovatoare de marketing imobiliar cu Socialy",
            subTitle: 'Broască Marcel - Dezvoltator imobiliar',
            description: "Cu sprijinul echipei Socialy, am reușit să promovăm și să ne dezvoltăm proiectele imobiliare cu succes. Echipa lor a creat strategii de marketing inovatoare, care au atras atenția potențialilor cumpărători și ne-au ajutat să vindem rapid și eficient. ",
            descriptionTwo: "Am apreciat implicarea și abordarea lor  în funcție de nevoile fiecărui proiect. La următorul proiect tot cu ei o să colaborez!",
            video: '/images/testimoniale/Recenzie 4.mp4'
        },
        {
            id: 5,
            title: "Campanie Super Eficientă pentru CNC Iași",
            subTitle: 'Vieriu Ciprian – Administrator firmă',
            description: "Campania de marketing a fost un real succes, am văzut o creștere mare a interesului și a cererilor pentru serviciile noastre. Profesionalismul și dedicarea voastră au fost remarcabile. Mulțumim pentru tot sprijinul și ajutorul oferit!",
            descriptionTwo: "Am apreciat munca făcută și o să colaborez cu ei de acum înainte mult timp.",
            video: '/images/testimoniale/Recenzie 5.mp4'
        },
        {
            id: 6,
            title: "Am fost super încântată de producția video, iar rezultatele au fost pe măsură.",
            subTitle: 'Miliche Ionela – CEO Tâmplărie PVC Olt',
            description: "Sunt extrem de mulțumită de colaborarea cu Socialy! Clipurile video primite au fost de o calitate excepțională, capturând perfect esența și profesionalismul afacerii noastre. Rezultatele campaniei au fost pe măsură, generând un interes crescut și numeroase proiecte noi. Mulțumesc echipei pentru dedicare și pentru un serviciu de top!",
            descriptionTwo: "",
            video: "/images/testimoniale/Recenzie 6.mp4",
        },
        {
            id: 7,
            title: "Transformând visele în realitate: O campanie de succes cu Socialy",
            subTitle: 'Ramona Georgescu – Administrator Salon de Înfrumusețare',
            description: "Colaborarea cu echipa voastră a fost fantastică! Datorită reclamei realizate de voi, am reușit să obținem 130 de programări din doar 25 de lei cheltuiți. Clipurile video au fost excelente și au captat perfect atmosfera și serviciile oferite de salonul nostru. Rezultatele au fost cu adevărat impresionante. Mulțumim pentru profesionalism și pentru rezultatele de excepție!",
            descriptionTwo: "",
            video: '/images/testimoniale/Recenzie 7.mp4'
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
                                        className="rounded-[24px] w-[208px] h-[calc(208px/1080*1920)] z-20"
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
