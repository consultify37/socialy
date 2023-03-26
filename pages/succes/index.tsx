import Link from "next/link";

export default function Multumire({}) {
  return (
    <div className="my-40 flex flex-col lg:px-0 px-8 items-center">
      <h2 className="lg:text-2xl text-xl text-center text-[#260056] font-semibold my-2">
        Îți mulțumim pentru comanda făcută
      </h2>
      <h2 className="lg:text-2xl text-xl text-center text-[#260056] font-semibold my-2">
        Ți-am trimis un email de unde poți descărca produsele tale
      </h2>
      <h2 className="lg:text-2xl text-xl text-center text-[#260056] font-semibold my-2">
        De asemenea, acestea sunt disponibile și în{" "}
        <Link href={"/cont"} passHref>
          <span className="underline cursor-pointer">contul tău</span>
        </Link>
      </h2>
    </div>
  );
}
