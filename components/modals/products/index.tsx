import Image from "next/image";

interface ProductProps {
  img: string
  nume: string
  pret: number
  reducere: number
}

export default function Product({img, nume, pret, reducere}: ProductProps) {
  return (
    <div className="flex min-w-full flex-row my-4">
      <Image
        className="mx-2 aspect-[3/2] object-contain"
        src={`https://api.inspiredconsulting.ro/${img}`}
        width={72}
        height={92}
        alt={nume}
      />
      <div className="flex pl-10 flex-col">
        <h2 className="lg:text-lg text-sm text-[#260056] font-bold">
          {nume}
        </h2>
        <div className="flex flex-row items-center">
          <p className="text-[#0F52FF] py-1 lg:text-base text-sm">{pret} lei</p>
          <p className="text-[#7C9EF8] py-1 px-1 lg:text-sm text-xs line-through opacity-60">
            {reducere} lei
          </p>
        </div>
        <div className="flex lg:flex-row flex-col">
          <p className="text-[#FF0F0F] font-semibold sm:text-base text-sm p-1 cursor-pointer underline">
            șterge din coș
          </p>
        </div>
      </div>
    </div>
  );
}
