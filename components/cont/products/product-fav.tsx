import Image from "next/image";

interface FavProductProps {
  id: number;
  name: string;
  price: string;
  initial?: number;
  image: string;
  removeFromFavorite: () => void;
}

export default function FavProduct({
  id,
  name,
  price,
  initial,
  image,
  removeFromFavorite,
}: FavProductProps) {
  return (
    <div className="flex min-w-full flex-row my-4">
      <Image
        className="aspect-square object-contain w-[80px] mx-2"
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
        <div onClick={removeFromFavorite} className="flex lg:flex-row flex-col">
          <p className="text-[#FF0F0F] font-bold sm:text-base text-sm p-1 cursor-pointer underline">
            elimina de la favorite
          </p>
        </div>
      </div>
    </div>
  );
}
