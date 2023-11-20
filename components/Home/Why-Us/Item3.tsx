import Image from "next/image";

type Props = {
    textColor?: string 
}

const WhyUsItem3 = ({textColor='white'}: Props) => {
    return(
        <div className={`flex flex-col gap-2 text-${textColor}`}>
            <span className='h-[51px] w-[51px] flex items-center bg-[#A634FF] rounded-[10px]'>
                <Image src='/images/person.svg' className='mx-auto' alt='Questions comment' width={25} height={24} />
            </span>
            <h3 className='font-bold text-[24px]'>Abordare individuală</h3>
            <p className='font-normal text-sm md:text-[16px'>
                Oferim o abordare individuală pentru a ne asigura că satisfacem nevoile și obiectivele fiecărui client.
            </p>
        </div>
    )
}

export default WhyUsItem3 