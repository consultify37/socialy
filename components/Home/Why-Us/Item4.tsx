import Image from "next/image";

const WhyUsItem4 = () => {
    return(
        <div className='flex flex-col gap-2'>
            <span className='h-[51px] w-[51px] flex items-center bg-[#8717F861] rounded-md'>
                <Image src='/images/chart.png' className='mx-auto' alt='Questions comment' width={21} height={21} />
            </span>
            <h3 className='font-bold text-[24px] text-white'>Profesionalism</h3>
            <p className='font-normal text-white text-sm md:text-[16px'>
                Profesionalismul nostru este evidențiat de abordarea noastră meticuloasă și atenția la detalii în fiecare proiect.
            </p>
        </div>
    )
}

export default WhyUsItem4