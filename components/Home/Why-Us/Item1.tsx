import Image from "next/image"
const WhyUsItem1 = () => {
    return(
        <div className='flex flex-col gap-2'>
            <span className='h-[51px] w-[51px] flex items-center bg-[#8717F861] rounded-md'>
                <Image src='/images/questions-comment.png' className='mx-auto' alt='Questions comment' width={25} height={10} />
            </span>
            <h3 className='font-bold text-[24px] text-white'>Comunicare</h3>
            <p className='font-normal text-white text-sm md:text-[16px'>
                Comunicare excelentă! Răspuns rapid și soluții eficiente pentru succesul proiectelor tale.
            </p>
        </div>
    )
}

export default WhyUsItem1