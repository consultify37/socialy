import Image from "next/image"
import Link from "next/link"
import DiscoverItem1 from "./Item1"
import DiscoverItem2 from "./Item2"
import DiscoverItem3 from "./Item3"

const Discover = () => {
    return(
        <section id='discover' className='flex flex-col gap-2 mt-[6.25rem] items-center justify-center w-full'>
            <h2 className='md:text-xl lg:text-2xl xl:text-4xl text-[#006CFF] font-medium max-w-[80%] md:max-w-[50%] text-center'>Descoperă brandurile Inspirely, cei care vor face posibil succesul afacerii tale</h2>
            {/* Item1 */}
            <DiscoverItem1 />
            {/* Item2 */}
            <DiscoverItem2 />
            {/* Item3 */}
            <DiscoverItem3 />
        </section>
    )
}

export default Discover