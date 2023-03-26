import { NextPage } from "next";
import Head from "next/head";
import ShopItems from "../../components/Shop/Items";
import ShopHeader from "../../components/Shop/ShopHeader";

const About: NextPage = () => {
    return(
        <>
            {/* PageSettings */}
            <Head>
                <title>Inspirely | Shop</title>
            </Head>
            {/* Shop header */}
            <ShopHeader />
            {/* Shop items */}
            <ShopItems />
        </>
    )
}

export default About