import Image from "next/image"
import {useState} from 'react'

interface PartenersInterface {
    id: number;
    logo: string;
    text: string;
}

const Parteners = () => {
    const [step, setStep] = useState<number>(0)
    const PartenersList: PartenersInterface[] = [
        {
            id: 1, logo: '/images/feedback-2.png', text: 'Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.'
        },
        {
            id: 2, logo: '/images/feedback-2.png', text: 'Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.'
        },
        {
            id: 3, logo: '/images/feedback-2.png', text: 'Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.'
        },
    ]
    return(
        <section id='our-parteners' className='flex flex-col gap-5 mt-[6.25rem] items-center justify-center w-full'>
            <h2 className='md:text-xl lg:text-2xl xl:text-4xl text-[#006CFF] font-medium max-w-[80%] md:max-w-[30%] text-center'>Firmele partenere Inspirely</h2>
            <div className='px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                {
                    PartenersList.slice(step*2,(step+1)*2).map(partener =>    
                        <div key={partener.id} className='w-full bg-[#F2F4FF] rounded-[20px] px-10 py-5'>
                            <Image src={partener.logo} placeholder='blur' blurDataURL={partener.logo} width={150} height={150} alt={`Partener ${partener.id}`} />
                            <p className='text-[#00103C] font-normal text-base mt-3'>
                                {partener.text}
                            </p>
                        </div>
                    )
                }
            </div>
            <div className='flex gap-2'>
                {
                    Array.from({length: Math.ceil(PartenersList.length/2)}, (_, i) =>
                        step === i ?
                            <Image key={i} src='/images/step-checked.png' className='cursor-pointer' width={10} height={20} alt='Step checked'  />
                        :
                            <Image key={i} src='/images/step-unchecked.png' className='cursor-pointer' width={10} height={20} alt='Step unchecked' onClick={() => setStep(i)}  />
                    )
                }
            </div>


        </section>
    )
}

export default Parteners