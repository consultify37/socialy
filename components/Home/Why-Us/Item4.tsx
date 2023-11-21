import Image from "next/image";

type Props = {
    textColor?: string 
}

const WhyUsItem4 = ({textColor='white'}: Props) => {
    return(
        <div className={`flex flex-col gap-2 text-${textColor}`}>
            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                <Image src='/images/chart.svg' className='mx-auto' alt='Questions comment' width={24} height={24} />
            </span>
            <h3 className='font-bold text-[24px] '>Profesionalism</h3>
            <p className='font-normal text-sm md:text-[16px'>
                Profesionalismul nostru este evidențiat de abordarea noastră meticuloasă și atenția la detalii în fiecare proiect.
            </p>
        </div>
    )
}

export default WhyUsItem4