import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurServices(){
    return(
        <section className="w-full grid gap-5 grid-cols-2 mt-20 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="flex flex-row bg-[#F6EFFF] p-6 pb-16 rounded-3xl">
                <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-4 h-[max-content] jutify-center mr-2">
                    <Image
                        src="/images/OurServices/consultanta.svg"
                        alt="Hero blue circle"
                        width={60}
                        height={60}
                        className="z-[5] h-[max-content] w-[30px] h-[30px]"
                    />
                </div>
                <div className="flex flex-col ml-2">
                    <h4 className="text-[#260056] font-bold text-2xl">
                        Consultanță fonduri
                    </h4>
                    <p className="text-[#260056] text-lg">
                        Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                    </p>
                </div>
            </div>
            <div className="flex flex-row bg-[#F6EFFF] p-6 pb-16 rounded-3xl">
                <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-4 h-[max-content] jutify-center mr-2">
                    <Image
                        src="/images/OurServices/registru.svg"
                        alt="Hero blue circle"
                        width={60}
                        height={60}
                        className="z-[5] h-[max-content] w-[30px] h-[30px]"
                    />
                </div>
                <div className="flex flex-col ml-2">
                    <h4 className="text-[#260056] font-bold text-2xl">
                        Registrul comerțului
                    </h4>
                    <p className="text-[#260056] text-lg">
                        Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                    </p>
                </div>
            </div>
            <div className="flex flex-row bg-[#F6EFFF] p-6 pb-16 rounded-3xl">
                <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-4 h-[max-content] jutify-center mr-2">
                    <Image
                        src="/images/OurServices/implementare.svg"
                        alt="Hero blue circle"
                        width={60}
                        height={60}
                        className="z-[5] h-[max-content] w-[30px] h-[30px]"
                    />
                </div>
                <div className="flex flex-col ml-2">
                    <h4 className="text-[#260056] font-bold text-2xl">
                        Implementare proiect
                    </h4>
                    <p className="text-[#260056] text-lg">
                        Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                    </p>
                </div>
            </div>
            <div className="relative flex flex-row bg-[#D5B5FF] p-6 pb-16 rounded-3xl">
                <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-[#A634FF] p-4 h-[max-content] jutify-center mr-2">
                    <Image
                        src="/images/OurServices/mentorat.svg"
                        alt="Hero blue circle"
                        width={60}
                        height={60}
                        className="z-[5] h-[max-content] w-[30px] h-[30px]"
                    />
                </div>
                <div className="flex flex-col ml-2">
                    <h4 className="text-[#260056] font-bold text-2xl">
                        Mentorat start-up
                    </h4>
                    <p className="text-[#260056] text-lg">
                        Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
                    </p>
                </div>
                <span className="text-white bg-[#260056] text-lg absolute bottom-0 right-0 py-2 px-10 rounded-tl-3xl rounded-br-2xl">Coming soon</span>
            </div>
        </section>
    )
}