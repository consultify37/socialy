import Image from "next/image";
import Link from "next/link";
import { MyOrders } from "../../../utils/handleGetRequests";

interface ProductItemProps extends MyOrders { }

export default function ProductItem({
  nume,
  poza,
  pret,
  reducere,
  fisier,
}: ProductItemProps) {
  return (
    <div className="flex min-w-full flex-row my-4">
      <Image
        className="mx-2 lg:h-[92px] h-[100px] w-[80px] lg:w-[72px]"
        src={poza}
        width={72}
        height={92}
        alt="book-img"
      />
      <div className="flex flex-col">
        <h2 className="lg:text-lg text-sm text-[#260056] font-bold">{nume}</h2>
        <div className="flex flex-row">
          <p className="text-[#8717F8] py-1 lg:text-base text-sm">{pret} lei</p>
          {reducere && (
            <p className="text-[#7C9EF8] py-1 px-1 lg:text-sm text-xs line-through opacity-60">
              {reducere} lei
            </p>
          )}
        </div>
        <div className="flex lg:flex-row flex-col">
          <Link passHref href={fisier}>
            <p className="text-[#8717F8] sm:text-base text-sm p-1 cursor-pointer underline">
              descarcă produsul
            </p>
          </Link>
          <p className="text-[#8717F8] sm:text-base text-sm p-1 cursor-pointer underline">
            descarcă factura
          </p>
        </div>
      </div>
    </div>
  );
}
