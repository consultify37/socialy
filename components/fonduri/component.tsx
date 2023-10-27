import React from "react"
import Link from "next/link"
import { Program } from "../../types"

type Props = {
    program: Program
}

export default function FonduriComponent({ program }: Props) {
    return(
        <div 
            className="rounded-[35px] mb-8 mx-2 md:mx-[30px] relative w-full h-auto flex flex-col-reverse md:flex-row justify-between px-4 md:px-20 py-2 bg-cover bg-no-repeat align-center"
        >   
            <div style={{background: `url('${program.backgroundImage.image}'), rgba(0, 0, 0, 0.45)`, }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
            <div style={{background: "rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
            <div className="flex flex-col justify-center items-center rounded-2xl relative top-[30px] md:top-[100px] z-[100] bg-[#260056] py-8 px-8">
                <h5 className="text-white text-xl md:text-4xl mb-6">{program.title}</h5>
                <ul className="list-disc list-inside">
                    { program.bulletPoints.map((bulletPoint, index) => (
                        <li className="text-[#EDD7FF] text-md mb-4" key={bulletPoint+index}>{bulletPoint}</li>
                    ))}
                </ul>
                <Link className="py-3 bg-[#BA63FF] text-[#fff] font-semibold flex items-center rounded-[28.5px] px-12 transition-all hover:scale-[1.05]" href={`/Programe/${program.id}`}>Aplica acum!</Link>
            </div>
            <div className='flex flex-col items-end justify-center z-[10] pt-12'>
                <h5 className='text-white text-xs lg:text-xl mb-2'>
                    { program.text1 }
                </h5>
                <h4 className='text-white text-xl lg:text-4xl mb-2 font-bold'>
                    { program.text2 }
                </h4>
                <h6 className='text-white text-xl lg:text-4xl font-bold'>
                    { program.suma }
                </h6>
            </div>
        </div>
    )
}