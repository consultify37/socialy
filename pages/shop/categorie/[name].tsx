import Head from "next/head";
import { useRouter } from "next/router";
import CategoryHeader from "../../../components/Shop/Category/CategoryHeader";
import CategoryItems from "../../../components/Shop/Category/CategoryItems";

const Category = () => {
  const router = useRouter();
  const { name } = router.query;
  const itemName = name?.toString().charAt(0).toUpperCase()! + name?.slice(1);
  let description =
    "Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.";
  return (
    <>
      {/* PageSettings */}
      <Head>
        <title>Consultify | {itemName ? itemName : name}</title>
      </Head>
      <CategoryHeader name={itemName} description={description} />
      <CategoryItems />
    </>
  );
};

export default Category;
