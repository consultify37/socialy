import Image from "next/image";

interface ProductItemProps {
  name: string;
  price: number;
  initial?: number;
  image: string;
  handleDeleteFromCart: () => void;
}

export default function ProductItem({
  name,
  price,
  initial,
  image,
  handleDeleteFromCart,
}: ProductItemProps) {
  return (
    <div className="flex min-w-full flex-row my-4">
      <Image
        className="mx-2 aspect-square object-contain w-[90px] lg:w-[72px]"
        src={`https://api.inspiredconsulting.ro/${image}`}
        width={72}
        height={92}
        alt="book-img"
      />
      <div className="flex flex-col">
        <h2 className="lg:text-lg text-sm text-[#260056] font-bold">{name}</h2>
        <div className="flex flex-row">
          <p className="text-[#8717F8] py-1 lg:text-base text-sm">
            {price} lei
          </p>
          {initial && (
            <p className="text-[#7C9EF8] py-1 px-1 lg:text-sm text-xs line-through opacity-60">
              {initial} lei
            </p>
          )}
        </div>
        <div className="flex lg:flex-row flex-col">
          <p
            onClick={handleDeleteFromCart}
            className="text-[#FF0F0F] font-bold sm:text-base text-sm p-1 cursor-pointer underline"
          >
            șterge din coș
          </p>
        </div>
      </div>
    </div>
  );
}
