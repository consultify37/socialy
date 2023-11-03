import Image from "next/image";

const WhyUsItem2 = () => {
    return(
        <div className='flex flex-col gap-2'>
            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                <Image src='/images/flash.png' className='mx-auto' alt='Questions comment' width={17} height={10} />
            </span>
            <h3 className='font-bold text-[24px] text-white'>Spirit tânăr</h3>
            <p className='font-normal text-white text-sm md:text-[16px'>
                Echipă tânără, inovatoare și dinamică, aducând idei proaspete și abordări moderne.
            </p>
        </div>
    )
}

export default WhyUsItem2