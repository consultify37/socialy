import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DidYouKnow = () => {
  return (
    <div className='flex flex-col py-16 md:py-24 bg-secondary mt-16 md:mt-28 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
       <div className="w-full gap-[6rem] flex gap-y-20 justify-between flex-col lg:flex-row z-[2]">
          <div className="w-full flex-1 z-[2] gap-5 font-light">
            <h2 className="text-xl font-bold text-white z-[2] md:text-xl lg:text-2xl xl:text-3xl">
              Știai că?
            </h2>
            <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2] mb-8">
              Știai că, potrivit unui studiu realizat de Stanford University, 75% dintre utilizatorii de internet judecă credibilitatea unei afaceri pe baza designului site-ului său web? Este esențial ca aspectul și funcționalitatea unui site web să ofere o primă impresie pozitivă și profesională, influențând încrederea și deciziile clienților potențiali. 
            </p>
            <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2]">
              Site-urile web reprezintă cartea de vizită digitală a unei afaceri în era digitală, fiind mai mult decât simple prezențe online. Ele servesc ca o poartă de acces către lumea online, fiind un mijloc esențial de comunicare și interacțiune cu publicul țintă. Prin intermediul unui website bine construit și gestionat, o afacere poate să-și promoveze produsele și serviciile, să-și construiască brandul și să-și extindă prezența pe piață. Un site web oferă nu doar informații despre afacere, ci și un mediu interactiv unde clienții pot interacționa, să contacteze și să achiziționeze produse sau servicii. Este un instrument esențial în arsenalul de marketing digital al unei afaceri, oferind oportunități unice de a ajunge la o audiență vastă și de a-și promova mesajul într-un mod eficient și memorabil.
            </p>
          </div>
          <div className='relative h-fit md:w-fit'>
            <svg className='absolute -bottom-[50px] sm:-bottom-[60px] -left-[60px] sm:-left-[80px] w-[120px] h-[125px] sm:w-[193px] sm:h-[201px]' viewBox="0 0 193 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M68.2449 6.40044C74.844 0.925725 83.8625 -0.612558 91.9032 2.36503L163.814 28.9943C171.854 31.9719 177.696 39.013 179.138 47.4653L192.031 123.056C193.473 131.508 190.296 140.088 183.697 145.563L124.68 194.524C118.081 199.999 109.062 201.537 101.022 198.56L29.1112 171.93C21.0704 168.953 15.229 161.912 13.7873 153.459L0.893691 77.8684C-0.548024 69.4161 2.62903 60.8368 9.22808 55.3621L68.2449 6.40044Z" fill="#0CFF00"/>
            </svg>
            <svg className='absolute -top-[60px] -right-[80px] w-[183px] h-[184px]' viewBox="0 0 183 184" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M175 92C175 138.433 137.575 176 91.5 176C45.4253 176 8 138.433 8 92C8 45.5669 45.4253 8 91.5 8C137.575 8 175 45.5669 175 92Z" stroke="#515151" strokeWidth="16"/>
            </svg>

            <Image
              src="/images/implementare/poza 2.jpg"
              alt="About home 1"
              className="relative rounded-[28.5px] object-cover object-left w-full h-[320px] md:h-[450px] md:w-[450px] mx-auto z-[4]"
              unoptimized={true}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className='mt-16 lg:mt-32 flex flex-col lg:flex-row'>
          <Image 
            src="/images/PaginaProgram/Cui-adreseazaz.png"
            alt="About home 1"
            className="relative rounded-[28.5px] w-[250px] md:w-[300px] h-[250px] md:h-[300px]  mx-auto z-[4] lg:mr-8"
            width={400}
            height={400}
          />
          <div className="w-full flex-1 z-[2] gap-5 font-light">
            <h2 className="text-xl font-bold text-white z-[2] md:text-xl lg:text-2xl xl:text-3xl">
              Opțiunea perfectă pentru afacerile care vor să se extindă în mediul online! 
            </h2>
            
            <p className="text-white font-base text-[15px] md:text-[16px] mt-5 z-[2] mb-8">
              Crearea unui site web prin noi se adresează întreprinderilor și organizațiilor care doresc rezultate. Cu expertiza vastă și abordarea profesionistă în funcție de nevoile clientului, oferim suport și consultanță pe tot parcursul procesului. Indiferent de mărimea și complexitatea site-ului, ne asigurăm că produsul final este conform cerințelor și obiectivelor dvs.
            </p>
            <p className="text-white font-base text-[15px] md:text-[16px] mt-5 z-[2]">
              Alegând colaborarea cu noi, beneficiați de realizarea în cel mai profesional mod a site-ului mult dorit!
            </p>
            <Link
              href="/contact"
              className="py-3 md:py-4 bg-primary text-onPrimary flex items-center font-semibold rounded-[28.5px] px-16 transition-all hover:scale-[1.05] w-fit mt-6"
            >
              Contactează-ne!
            </Link>
          </div>
        </div>
    </div>
  )
}

export default DidYouKnow