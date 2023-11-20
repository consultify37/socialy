import Image from "next/image"

type Props = {
    textColor?: string 
}

const WhyUsItem1 = ({textColor='white'}: Props) => {
    return(
        <div className={`flex flex-col gap-2 text-${textColor}`}>
            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                <Image src='/images/questions-comment.svg' className='mx-auto' alt='Questions comment' width={25} height={10} />
            </span>
            <h3 className='font-bold text-[24px]'>Comunicare</h3>
            <p className='font-normal  text-sm md:text-[16px'>
                Comunicare excelentă! Răspuns rapid și soluții eficiente pentru succesul proiectelor tale.
            </p>
        </div>
    )
}

export default WhyUsItem1