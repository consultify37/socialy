import Image from "next/image";

const WhyUsItem3 = () => {
    return(
        <div className='flex flex-col gap-2'>
            <span className='h-[51px] w-[51px] flex items-center bg-[#8717F861] rounded-md'>
                <Image src='/images/heart.png' className='mx-auto' alt='Questions comment' width={25} height={24} />
            </span>
            <h3 className='font-bold text-[24px] text-white'>Suport Continuu</h3>
            <p className='font-normal text-white text-sm md:text-[16px'>
                Suportul nostru continuu asigură asistență constantă și soluții prompte pentru fiecare nevoie a clienților noștri
            </p>
        </div>
    )
}

export default WhyUsItem3 