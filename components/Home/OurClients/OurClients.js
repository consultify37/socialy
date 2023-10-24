import Image from "next/image";
import Carousel from 'react-elastic-carousel';
import Link from "next/link";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const OurClients = () => {
    const Testimonials = [
        {
            id: 3,
            text: "O tânără studentă la Facultatea de Medicină obține o finanțare semnificativă pentru cabinetul medical al familiei",
            description: "Iulia, în vârstă de 21 de ani, studentă în anul 2 la Medicină, a avut ocazia să obțină o finanțare nerambursabilă în valoare de 60.150 euro prin intermediul programului PNRR C12 - Dotare și renovare cabinete medici de familie. Fiind pasionată de domeniul medical și urmând exemplul ambilor săi părinți, care sunt medici, Iulia și familia ei au dorit să își dezvolte cabinetul medical și să ofere servicii de calitate comunității locale.",
            descriptionTwo: "Totul a început atunci când Iulia a văzut un videoclip pe internet în care se discuta despre posibilitatea obținerii de fonduri europene pentru domeniul medical. Având un cabinet mic care necesită renovare și echipamente noi, dar fără resurse financiare suficiente pentru a realiza aceste investiții, Iulia a căutat mai multe informații despre programul PNRR și despre cum poate accesa aceste finanțări. Pentru a descoperi povestea completă, vă încurajăm să vizionați videoclipul:",
            image: "/images/ourclients.png",
            ytUrl: "https://www.youtube.com/embed/BGXhV4tjNFw?si=Gv1WtArL5Evemwvv"
        },
        {
            id: 2,
            text: "Alexandra, tânăra antreprenoare care a obținut 40.000 de euro pentru afacerea sa prin programul Femeia Antreprenor",
            description: "Alexandra, în vârstă de 22 de ani, marketer digital, a obținut o finanțare în valoare de 40.000 de euro pentru afacerea sa prin programul Femeia Antreprenor. Pasionată de marketingul digital, Alexandra și-a dorit să transforme pasiunea sa într-o afacere, dar avea nevoie de fonduri pentru a-și deschide o locație nouă, a achiziționa echipamente și a angaja personal. Aflând despre finanțările nerambursabile, Alexandra a decis să încerce și ea norocul.",
            descriptionTwo: "După căutări și discuții cu diverse firme de consultanță, Alexandra a ales să colaboreze cu Consultify. Consultantul cu care a discutat i-a oferit încredere și a realizat o simulare de punctaj, confirmându-i că are șanse mari să obțină finanțarea. Pentru a afla întreaga poveste, vă invităm să urmăriți videoclipul:",
            image: "/images/ourclients.png",
            ytUrl: "https://www.youtube.com/embed/0-qT2e_s6TE?si=EPCpLrfY-2gd0NW7"
        },
        {
            id: 1,
            text: "Stefan - Pasiunea pentru muzică și drumul către îndeplinirea visului antreprenorial",
            description: "Stefan, în vârstă de 25 de ani, și-a deschis o școală privată de muzică prin programul Start-Up Nation Diaspora. Având o pasiune pentru vioară și dorința de a combina muzica cu pedagogia și antreprenoriatul, Stefan a visat să aibă propria sa școală de muzică. A ales firma Consultify ca partener de consultanță, datorită profesionalismului și serviciilor personalizate.",
            descriptionTwo: "După o perioadă petrecută în Londra pentru a strânge bani, Stefan s-a întors în România și a început să exploreze modalități de a-și finanța afacerea. Pentru a vedea povestea completă, vă invităm să vizionați clipul urmator:",
            image: "/images/ourclients.png",
            ytUrl: "https://www.youtube.com/embed/QJ6cWRy9q1U?si=5iy4AV3oF1QxmVB9"
        },
    ]
    return(
        <section id='our-clients' className='mt-32 w-full flex items-center justify-center flex-col gap-5 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <p className="text-[#8717F8] text-xl md:text-3xl font-semibold mb-5">
                Gândurile și experiențele clienților noștri - testimoniale de succes
            </p>
            <div className='flex w-full justify-between items-center gap-5'>
                <Carousel
                    breakPoints={breakPoints}
                    isRTL={false}
                    pagination={true}
                    showArrows={true}
                >
                {
                    Testimonials.map(testimonial =>
                        <article key={testimonial.id} className="bg-[#36007B] h-full rounded-[16px] justify-center lg:justify-between items-center min-h-max mx-2 flex-col lg:flex-row flex flex-1 py-10 md:py-5">
                            <div className="w-full md:w-200px px-7 md:px-5 py-2 md:pb-8 lg:mr-8">
                                <h3 className="text-white font-bold text-base md:max-w-[90%] md:text-[24px]">
                                    {testimonial.text}
                                </h3>
                                <div className="flex-1"></div>
                                <p className="text-sm text-[#fff] font-medium mt-4 text-justify">{testimonial.description}</p>
                                <p className="text-sm text-[#fff] font-medium mt-2 text-justify">{testimonial.descriptionTwo}</p>
                            </div>
                            <iframe 
                                className="w-[250px] md:w-[400px] rounded-[24px] mt-8 lg:mt-0 lg:mr-5"
                                src={testimonial.ytUrl}
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
                                allowFullScreen={true}
                            ></iframe>
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
