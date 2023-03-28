import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import {
  AccountSettingButton,
  FavoriteProductsButton,
  LogOutButton,
  OrderedProductsButton,
} from "../../components/cont/buttons";
import ProductItem from "../../components/cont/products/product";
import { BiChevronDown } from "react-icons/bi";
import {
  getMyOrders,
  getUserInfo,
  MyOrders,
  UserInfo,
} from "../../utils/handleGetRequests";
import {
  deleteFavoriteItem,
  FavoriteItem,
  getAllFavoriteItems,
  useDebounce,
} from "../../utils/functions";
import { postChangeAccountDetails } from "../../utils/handlePostRequest";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import Axios from "axios";
import FavProduct from "../../components/cont/products/product-fav";

export default function ContPage() {
  type whichSectionToShowOptions = "comenzi" | "favorite" | "setari";

  const [whichSectionToShow, setWhichSectionToShow] =
    useState<whichSectionToShowOptions>("comenzi");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [myOrders, setMyOrders] = useState<MyOrders[]>();
  const [myFavoriteItems, setMyFavoriteItems] = useState<FavoriteItem[]>([]);
  const [didSomethingWentWrong, setDidSomethingWentWrong] =
    useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [triggerRender, setTrigerRender] = useState<boolean>(false);
  useEffect(() => {
    setMyFavoriteItems(getAllFavoriteItems());
  }, [triggerRender]);

  const handleEmailInput = useDebounce<React.ChangeEvent<HTMLInputElement>>(
    (e) => setEmail(e.target.value),
    200
  );
  const handlePasswordInput = useDebounce<React.ChangeEvent<HTMLInputElement>>(
    (e) => setPassword(e.target.value),
    200
  );
  const handleConfirmPasswordInput = useDebounce<
    React.ChangeEvent<HTMLInputElement>
  >((e) => setConfirmPassword(e.target.value), 200);

  const sendUserSettingsInfo = async () => {
    try {
      const response = await postChangeAccountDetails(
        email,
        password,
        confirmPassword
      );
      if (
        response.status === 200 &&
        typeof response === "object" &&
        !errorMessage.length
      ) {
        toast.success("Schimbarile au fost aplicate cu succes!");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        const errMessage = err.message;
        setErrorMessage(errMessage);
        toast.error(errMessage);
      }
      console.error(err);
    }
  };

  const handleUserApiCall = async () => {
    const userApiResponse = await getUserInfo();
    if (userApiResponse === null) {
      setDidSomethingWentWrong(true);
      return;
    }
    if (
      userApiResponse.status !== 200 ||
      typeof userApiResponse.data !== "object"
    ) {
      setDidSomethingWentWrong(true);
      return;
    }
    setUserInfo(userApiResponse.data[0]);
  };

  const handleMyOrdersApiCall = async () => {
    const myOrdersApiResponse = await getMyOrders();
    if (myOrdersApiResponse === null) {
      setDidSomethingWentWrong(true);
      return;
    }

    if (myOrdersApiResponse.status !== 200) {
      setDidSomethingWentWrong(true);
      return;
    }
    if (typeof myOrdersApiResponse.data === "string") {
      setMyOrders([]);
      return;
    }
    setMyOrders(myOrdersApiResponse.data);
  };

  useEffect(() => {
    const handleApiCalls = async () => {
      await handleUserApiCall();
      await handleMyOrdersApiCall();
    };
    handleApiCalls();
  }, []);

  const handleComeziClick = () => {
    setWhichSectionToShow("comenzi");
  };

  const handleFavoriteClick = () => {
    setWhichSectionToShow("favorite");
  };

  const handleSetariClick = () => {
    setWhichSectionToShow("setari");
  };
  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    Cookies.remove("user");
    window.location.href = "/";
  };
  const removeFromFavorite = (item: FavoriteItem) => {
    deleteFavoriteItem(item);
    setTrigerRender(!triggerRender);
  };

  useEffect(() => {
    Axios.get("https://api.inspiredconsulting.ro/products/lista-produse", {
      params: {
        action: "favorite",
      },
    })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section className="mt-48 px-3 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex lg:flex-row flex-col items-center justify-around">
        <Head>
          <title>Consultify | Cont</title>
        </Head>
        <div className="flex flex-col justify-between lg:items-start items-center">
          <h2 className="text-xl text-[#260056] font-bold max-w-[12rem]">
            Bine ai venit,{" "}
            {!didSomethingWentWrong && userInfo && userInfo!.nume}!
          </h2>
          <ul
            className={`bg-[#ECECEC] lg:bg-white overflow-hidden transition-all px-3 ${isDropdownOpen ? "h-auto" : "h-[80px]"
              }`}
          >
            <li className="flex flex-row items-center">
              <OrderedProductsButton
                handleClick={handleComeziClick}
                whichSectionToShow={whichSectionToShow}
              />
              <BiChevronDown
                onClick={handleOpenDropdown}
                className={`mx-2 lg:hidden cursor-pointer transition-all ${isDropdownOpen ? "rotate-0" : "rotate-180"
                  }`}
              />
            </li>
            <li>
              <FavoriteProductsButton
                handleClick={handleFavoriteClick}
                whichSectionToShow={whichSectionToShow}
              />
            </li>
            <li>
              <AccountSettingButton
                handleClick={handleSetariClick}
                whichSectionToShow={whichSectionToShow}
              />
            </li>
            <li>
              <LogOutButton handleLogOut={handleLogout} />
            </li>
          </ul>
        </div>
        <div className="bg-transparent-white xl:w-[450px] 2xl:min-w-[500px] min-h-[400px] md:max-w-[420px] lg:min-w-[400px] my-5 lg:my-0 rounded-3xl flex flex-col lg:items-start items-center lg:py-2 py-10 px-8">
          {whichSectionToShow === "comenzi" ? (
            <>
              <h2 className="text-xl text-[#260056] font-bold py-2">
                Istoric produse
              </h2>
              {!didSomethingWentWrong && myOrders && myOrders!.length
                ? myOrders!.map((myOrder) => (
                  <ProductItem key={myOrder.nume} {...myOrder} />
                ))
                : "Nu exista comenzi"}
            </>
          ) : whichSectionToShow === "favorite" ? (
            <>
              <h2 className="text-xl text-[#260056] font-bold py-2">
                Produse favorite
              </h2>
              <div
                className={`${myFavoriteItems.length > 3 ? "overflow-y-scroll" : ""
                  } max-h-96`}
              >
                {myFavoriteItems.map((item) => (
                  <FavProduct
                    key={item.id}
                    removeFromFavorite={() => removeFromFavorite(item)}
                    {...item}
                  />
                ))}
                {myFavoriteItems.length < 1 && (
                  <p>Nici un produs favorit. Adauga produse la favorite.</p>
                )}
              </div>
            </>
          ) : whichSectionToShow === "setari" ? (
            <>
              <h2 className="text-xl text-[#260056] font-bold py-2">
                Setările contului
              </h2>
              <form className="flex flex-col justify-between w-full">
                <input
                  onChange={handleEmailInput}
                  type="email"
                  className="border-2 my-4 border-[#8717F8] p-3 rounded-[28.5px] w-full"
                  placeholder="email"
                  required
                  name="email"
                />
                <input
                  onChange={handlePasswordInput}
                  type="password"
                  className="border-2 my-4 border-[#8717F8] p-3 rounded-[28.5px] w-full"
                  placeholder="parola"
                  required
                  name="password"
                />
                <input
                  onChange={handleConfirmPasswordInput}
                  type="password"
                  required
                  className="border-2 my-4 border-[#8717F8] p-3 rounded-[28.5px] w-full"
                  placeholder="confirmă parola nouă"
                  name="confirm-password"
                />
                <button
                  onClick={sendUserSettingsInfo}
                  className="px-10 py-4 rounded-[28.5px] w-full sm:w-32 my-3 bg-[#8717F8] transition-all hover:scale-[1.05] text-white"
                >
                  aplică
                </button>
              </form>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
