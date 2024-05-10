import Image from "next/image"
import PageHeader from "../Header/PageHeader"

const AboutHeader = () => {
    return(
        <PageHeader
            title="Fă cunoștință cu echipa noastră: Specialiști în marketing, atrași de succes!"
        >
            <Image src='/images/circle-hero-left.svg' width={150} height={150} className='absolute -left-4 -top-28 lg:-top-44 lg:left-0 lg:w-[250px]' alt='Circle hero green' />
            <Image src='/images/proces/hexagon.svg' width={100} height={100} className='absolute bottom-36 lg:bottom-5 right-0 lg:right-2 w-[120px] lg:w-[150px] z-10' alt='Yellow triangle' />
        </PageHeader>
    )
}

export default AboutHeader