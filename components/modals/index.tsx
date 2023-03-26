import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast, { Renderable, Toast, ValueFunction } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import Product from "./products";
import Cookies from "js-cookie";
import Axios from "axios";
import { useRouter } from "next/router";
import {
  CartItem,
  getAllItemFromLocalStorage,
  removeItemFromCart,
} from "../../utils/functions";

type ModalsToShow = "login" | "register" | "forgot-password";

type ModalProps = {
  handleModalClosingClick: () => void;
};

export function LoginModal({ handleModalClosingClick }: ModalProps) {
  const [whichModalToShow, setWhichModalToShow] =
    useState<ModalsToShow>("login");

  const handleSetRegisterModal = () => {
    setWhichModalToShow("register");
  };
  const handleSetLoginModal = () => {
    setWhichModalToShow("login");
  };
  const handleSetForgotPasswordModal = () => {
    setWhichModalToShow("forgot-password");
  };

  let user = Cookies.get("user");

  //LOGIN
  const [LoginEmail, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const uploadLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Axios.get("https://api.inspiredconsulting.ro/users/login", {
      params: {
        email: LoginEmail,
        parola: password,
      },
    })
      .then(function (response: {
        data: Renderable | ValueFunction<Renderable, Toast>;
      }) {
        console.log(response.data);
        if (response.data == "Email-ul sau parola sunt gresite") {
          toast.error(response.data);
        } else {
          let vkey = (response.data as string).split("success")[1];

          Cookies.set("user", vkey, { expires: 30 });
          toast.success(<p>Te-ai autentificat cu succes!</p>);
          setTimeout(() => {
            handleModalClosingClick();
          }, 1000);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  //REGISTER
  const [nume, setNume] = useState("");
  const [RegisterEmail, setRegisterEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [RegisterRePassword, setRegisterRePassword] = useState("");

  const uploadRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (RegisterPassword == RegisterRePassword) {
      Axios.get("https://api.inspiredconsulting.ro/users/create", {
        params: {
          nume: nume,
          email: RegisterEmail,
          parola: RegisterPassword,
          confirma_parola: RegisterRePassword,
        },
      })
        .then(function (response: { data: string }) {
          console.log(response.data);
          if (response.data == "success") {
            toast.success(<p>Contul tău a fost creat cu succes!</p>);
            setTimeout(() => {
              setWhichModalToShow("login");
            }, 3000);
          }
        })
        .catch(function (error: any) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    } else {
      toast.error("Parolele nu sunt la fel");
    }
  };

  //RESET PASS
  const [recmail, setRecmail] = useState("");
  const resetPass = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Axios.get("https://api.inspiredconsulting.ro/users/email_recuperare", {
      params: {
        email: recmail,
      },
    })
      .then(function (response) {
        console.log(response);
        let rec = response.data;
        console.log(rec);
        Cookies.set("recupereaza_parola", rec, { expires: 30 });

        toast.success("Mulțumim, link-ul va fi primit imediat");
        setTimeout(() => {
          handleModalClosingClick();
          window.location.href = "/reseteaza-parola";
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <div className="fixed top-[5%] left-[50%] ml-[-155px] md:ml-[-270px] px-4 md:px-8 md:min-w-[500px] min-w-[270px] rounded-[35px] z-[9999] bg-white">
      {whichModalToShow === "login" ? (
        <>
          {" "}
          <div className="flex flex-row justify-between border-b-[3px] py-5 border-[#F2F4FF]">
            <h2 className="text-lg font-semibold text-[#00103C]">
              Loghează-te
            </h2>
            <AiOutlineClose
              onClick={handleModalClosingClick}
              className="cursor-pointer text-lg"
            />
          </div>
          <div className="py-10">
            <p className="text-[#0F52FF] text-center">
              Nu ai un cont?{" "}
              <span
                onClick={handleSetRegisterModal}
                className="underline cursor-pointer"
              >
                Înregistrează-te
              </span>
            </p>
            <form
              onSubmit={uploadLogin}
              className="flex flex-col items-center justify-between"
            >
              <input
                type="email"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="email"
                required
                name="email"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="parola"
                required
                name="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <p
                onClick={handleSetForgotPasswordModal}
                className="text-[#0F52FF] text-center cursor-pointer"
              >
                Am uitat parola
              </p>
              <button className="py-4 rounded-[28.5px] w-full my-3 bg-[#0F52FF] transition-all hover:scale-[1.05] text-white">
                login
              </button>
            </form>
          </div>
        </>
      ) : whichModalToShow === "register" ? (
        <>
          {" "}
          <div className="flex flex-row justify-between border-b-[3px] py-5 border-[#F2F4FF]">
            <h2 className="text-lg font-semibold text-[#00103C]">
              Înregistrează-te
            </h2>
            <AiOutlineClose
              onClick={handleModalClosingClick}
              className="cursor-pointer text-lg"
            />
          </div>
          <div className="py-10">
            <p className="text-[#0F52FF] text-center">
              Ai deja un cont?{" "}
              <span
                onClick={handleSetLoginModal}
                className="underline cursor-pointer"
              >
                Loghează-te
              </span>
            </p>
            <form
              onSubmit={uploadRegister}
              className="flex flex-col items-center justify-between"
            >
              <input
                type="text"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="name"
                required
                name="name"
                onChange={(e) => setNume(e.target.value)}
              />
              <input
                type="email"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="email"
                required
                name="email"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <input
                type="password"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="parola"
                required
                name="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <input
                type="password"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="confirm password"
                required
                name="confirm-password"
                onChange={(e) => setRegisterRePassword(e.target.value)}
              />

              <button className="py-4 rounded-[28.5px] w-full my-3 bg-[#0F52FF] transition-all hover:scale-[1.05] text-white">
                register
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex flex-row justify-between border-b-[3px] py-5 border-[#F2F4FF]">
            <h2 className="text-lg font-semibold text-[#00103C]">
              Ai uitat parola?
            </h2>
            <AiOutlineClose
              onClick={handleModalClosingClick}
              className="cursor-pointer text-lg"
            />
          </div>
          <div className="py-10">
            <form
              onSubmit={resetPass}
              className="flex flex-col items-center justify-between"
            >
              <label
                className="md:max-w-[47ch] max-w-[30ch] text-[#0F52FF]"
                htmlFor=""
              >
                Completează câmpul de mai jos cu adresa ta de email și accesează
                link-ul primit pentru a-ți reseta parola
              </label>
              <input
                type="email"
                className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                placeholder="email"
                required
                name="email"
                onChange={(e) => setRecmail(e.target.value)}
              />
              <button className="py-4 rounded-[28.5px] w-full my-3 bg-[#0F52FF] transition-all hover:scale-[1.05] text-white">
                trimite link-ul
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
export function CartModal({ handleModalClosingClick }: ModalProps) {
  const [products, setProducts] = useState<CartItem[]>([]);
  const [triggerRender, setTriggerRender] = useState(false);
  useEffect(() => {
    const items = getAllItemFromLocalStorage();
    setProducts(items);
  }, [triggerRender]);

  const deleteCos = (item: CartItem) => {
    removeItemFromCart(item);
  };
  return (
    <div className="fixed top-[5%] left-[50%] ml-[-155px] md:ml-[10px] px-4 md:px-8 md:min-w-[500px] min-w-[270px] rounded-[35px] z-[999999] bg-white">
      <div className="flex flex-row justify-between border-b-[3px] py-5 border-[#F2F4FF]">
        <h2 className="text-lg font-semibold text-[#00103C]">Coșul tău</h2>
        <AiOutlineClose
          onClick={handleModalClosingClick}
          className="cursor-pointer text-lg"
        />
      </div>
      <div className="py-5">
        {products.map((item, i) =>
          i < 3 ? (
            <div key={item.image} className="flex min-w-full flex-row my-4">
              <Image
                className="mx-2 aspect-[3/2] object-contain mx-w-[72px]"
                src={`https://api.inspiredconsulting.ro/${item.image}`}
                width={72}
                height={92}
                alt={item.name}
              />
              <div className="flex pl-10 flex-col">
                <h2 className="lg:text-lg text-sm text-[#00103C] font-bold">
                  {item.name}
                </h2>
                <div className="flex flex-row items-center">
                  <p className="text-[#0F52FF] py-1 lg:text-base text-sm mr-2">
                    {item.price} lei
                  </p>
                  {item.initial && (
                    <p className="text-[#7C9EF8] py-1 px-1 lg:text-sm text-xs line-through opacity-60">
                      {item.initial} lei
                    </p>
                  )}
                </div>
                <div className="flex lg:flex-row flex-col">
                  <button
                    onClick={() => {
                      deleteCos(item);
                      setTriggerRender(!triggerRender);
                    }}
                    className="text-[#FF0F0F] font-semibold sm:text-base text-sm p-1 cursor-pointer underline"
                  >
                    șterge din coș
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
        {products.length > 3 && (
          <div className="font-lg font-bold">And more...</div>
        )}
      </div>
      <div className="flex flex-col border-t-[3px] py-5 border-[#F2F4FF]">
        <div className="flex flex-row justify-between">
          <p className="text-[#00103C]">Subtotal:</p>
          <p className="text-[#00103C]">
            {products.reduce((acc, item) => {
              return acc + Number(item.price);
            }, 0)}{" "}
            lei
          </p>
        </div>
        <Link href={"/check-out"} passHref onClick={handleModalClosingClick}>
          <button className="py-4 rounded-[28.5px] w-full my-3 bg-[#0F52FF] transition-all hover:scale-[1.05] text-white">
            continuă cu plata
          </button>
        </Link>
      </div>
    </div>
  );
}
