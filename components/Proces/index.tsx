import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProcesData {
    id: number;
    title: string,
    text: string,
    textTwo: string
}

export default function Proces(){
    const Proces: ProcesData[] = [
        {
            id: 1, title: '1Text aici pentru acest pas', text: '1Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.'
        },
        {
            id: 2, title: '2fsaText aici pentru acest pas', text: '2Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.'
        },
        {
            id: 3, title: '3ffText aici pentru acest pas', text: '3Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.'
        },
        {
            id: 4, title: '41Text aici pentru acest pas', text: '4Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.'
        },
        {
            id: 5, title: '5Text aici pentru acest pas', text: '5Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.'
        },
    ]
    const [procesActive, setProcesActive] = useState(false);
    const [selectedProces, setSelectedProces] = useState(Proces[0]);

    const handleClick = (proces: ProcesData) => {
        setProcesActive(true);
        setSelectedProces(proces);
        console.log(proces)
        console.log(selectedProces)
    }
    return(
        <section className="relative w-full mt-20 py-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <Image src='/images/proces/triangle-proces.svg' className="absolute right-[1rem] bottom-[3rem] w-[110px] h-[110px]" alt='triangle' width={146} height={146}/>
            <div className="w-[120%] bg-[#260056] h-full absolute rotate-[-2.69deg] rounded-3xl left-[-10%] z-[-1] top-0"></div>

            <Image src='/images/proces/circle-proces.svg' className="hidden md:block absolute right-[-80px] top-0 w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
            <Image src='/images/proces/hexagon.svg' className="hidden md:block absolute bottom-[5%] -left-12 w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
            <h2 className="text-[#fff] text-3xl md:text-4xl text-center font-bold mb-28">Care este procesul de accesare alături de Consultify?</h2>
            <div className="w-full flex relative flex-col md:flex-row justify-between items-start">
                <div className="flex items-start w-full flex-col md:mr-12">
                    {Proces.map(proces => (
                        <button
                            key={proces.id}
                            onClick={() => handleClick(proces)}
                            className={`flex w-full max-w-[400px] flex-row items-center mb-6 py-8 px-6 justify-start ${
                                proces.id == selectedProces.id
                                    ? "bg-[#D8A6FF] rounded-2xl"
                                    : ""
                            }`}
                        >
                            <Image
                                src="/images/proces/check.svg"
                                className="mr-4"
                                width={31}
                                height={31}
                                alt="check"
                            />
                            <span
                                className={`text-xl ${
                                    proces.id === selectedProces.id
                                        ? "text-[#260056]"
                                        : "text-[#fff]"
                                }`}
                            >
                                {proces.id}. {proces.title}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex w-full md:ml-12 flex-col items-start">
                    <h4 className="text-[#fff] text-2xl lg:text-4xl text-center lg:text-left font-semibold mb-8">{selectedProces.title}</h4>
                    <p className="text-md text-[#fff] mb-8">{selectedProces.text}</p>
                    <p className="text-md text-[#fff]">{selectedProces.textTwo}</p>
                </div>
            </div>
        </section>
    )
}