import Image from "next/image";

type Props = {
    textColor?: string 
}

const WhyUsItem2 = ({textColor='white'}: Props) => {
    return(
        <div className={`flex flex-col gap-2 text-${textColor}`}>
            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                <Image src='/images/flash.svg' className='mx-auto' alt='Questions comment' width={22} height={22} />
            </span>
            <h3 className='font-bold text-[24px]'>Spirit tânăr</h3>
            <p className='font-normal text-sm md:text-[16px'>
                Echipă tânără, inovatoare și dinamică, aducând idei proaspete și abordări moderne.
            </p>
        </div>
    )
}

export default WhyUsItem2