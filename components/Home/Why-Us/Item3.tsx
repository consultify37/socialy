import Image from "next/image";

const WhyUsItem3 = () => {
    return(
        <div className='flex flex-col gap-2'>
            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                <Image src='/images/heart.png' className='mx-auto' alt='Questions comment' width={25} height={24} />
            </span>
            <h3 className='font-bold text-[24px] text-white'>Abordare individuală</h3>
            <p className='font-normal text-white text-sm md:text-[16px'>
                Oferim o abordare individuală pentru a ne asigura că satisfacem nevoile și obiectivele fiecărui client.
            </p>
        </div>
    )
}

export default WhyUsItem3 