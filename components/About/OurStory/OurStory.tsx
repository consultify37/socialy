import Image from "next/image"
import Link from "next/link"
import Item1Story from "./Item1Story"
import Item2Story from "./Item2Story"

const OurStory = () => {
    return(
        <section id='our-story' className='flex flex-col gap-5 mt-32 items-stretch justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            {/* Item1 */}
            <Item1Story />
            {/* Item2 */}
            <Item2Story />
        </section>
    )
}
export default OurStory