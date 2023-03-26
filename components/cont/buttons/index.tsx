type ButtonsProps = {
  handleClick: () => void;
  whichSectionToShow: string;
};

export const OrderedProductsButton = ({
  handleClick,
  whichSectionToShow,
}: ButtonsProps) => {
  return (
    <button
      onClick={handleClick}
      className={`px-10 py-4 rounded-[12px] w-60 my-3 ${
        whichSectionToShow === "comenzi"
          ? "bg-[#0F52FF] text-white"
          : "bg-slate-50 text-[#260056]"
      } transition-all hover:scale-[1.05] flex flex-row justify-start align-center`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/shopping-bag.svg"
        alt="shopping bag"
        className="text-red-500 rounded-[4px] mx-2 bg-white p-1"
        width={25}
        height={25}
      />
      Comenzile mele
    </button>
  );
};

export const FavoriteProductsButton = ({
  handleClick,
  whichSectionToShow,
}: ButtonsProps) => {
  return (
    <button
      onClick={handleClick}
      className={`px-10 py-4 rounded-[12px] w-60 my-3 ${
        whichSectionToShow === "favorite"
          ? "bg-[#0F52FF] text-white"
          : "bg-slate-50 text-[#260056]"
      } transition-all hover:scale-[1.05] flex flex-row justify-start align-center`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/VectorHeart.svg"
        alt="shopping bag"
        className="text-red-500 rounded-[4px] mx-2 bg-white p-1"
        width={25}
        height={25}
      />
      Favorite
    </button>
  );
};

export const AccountSettingButton = ({
  handleClick,
  whichSectionToShow,
}: ButtonsProps) => {
  return (
    <button
      onClick={handleClick}
      className={`px-10 py-4 rounded-[12px] w-60 my-3 ${
        whichSectionToShow === "setari"
          ? "bg-[#0F52FF] text-white"
          : "bg-slate-50 text-[#260056]"
      } transition-all hover:scale-[1.05] flex flex-row justify-start align-center`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/VectorSettings.svg"
        alt="shopping bag"
        className="text-red-500 rounded-[4px] mx-2 bg-white p-1"
        width={25}
        height={25}
      />
      Setările contului
    </button>
  );
};

export const LogOutButton = ({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  return (
    <button
      onClick={handleLogOut}
      className="px-10 py-4 rounded-[12px] w-60 my-3 bg-[#FF0F0F] transition-all hover:scale-[1.05] text-white flex flex-row justify-around align-center"
    >
      Log-Out
    </button>
  );
};
