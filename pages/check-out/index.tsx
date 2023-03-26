import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Axios from "axios";
import { toast } from "react-hot-toast";
import { Cupon, getUserInfo, UserInfo } from "../../utils/handleGetRequests";
import ProductItem from "../../components/check-out/products/product";
import {
  CartItem,
  getAllItemFromLocalStorage,
  removeItemFromCart,
} from "../../utils/functions";
export default function CheckOut() {
  const promotionalCodeInputRef = useRef<HTMLInputElement | null>(null);

  const [nume, setNume] = useState<string>("");
  const [tara, setTara] = useState<string>("");
  const [adresa, setAdresa] = useState<string>("");
  const [cui, setCui] = useState<string>("");
  const [companie, setCompanie] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cupon, setCupon] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [products, setProducts] = useState<CartItem[]>([]);
  const [triggerRender, setTriggerRender] = useState(false);
  const [discount, setDiscount] = useState<number>(0);
  const price = useMemo(() => {
    return products.reduce((acc, item) => {
      return acc + Number(item.price);
    }, 0);
  }, [products]);
  useEffect(() => {
    const items = getAllItemFromLocalStorage();
    setProducts(items);
  }, [triggerRender]);

  const deleteCos = (item: CartItem) => {
    setTriggerRender(triggerRender);
    removeItemFromCart(item);
  };

  const [cupoane, setCupoane] = useState<Cupon[]>([]);
  useEffect(() => {
    Axios.get("https://api.inspiredconsulting.ro/products/afiseaza_cupon", {})
      .then(function(response) {
        setCupoane(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        console.log(cupoane);
        // always executed
      });
  }, []);

  const makeCartString = () => {
    return products.reduce((acc, product) => {
      return acc + `id:${product.id}%2Cquantity:1/`;
    }, "");
  };
  const isPromotionValid = (cupon: Cupon): boolean => {
    const expirationDate = new Date(cupon.expira).valueOf();
    const current = new Date().valueOf();
    return current <= expirationDate;
  };

  const handleDiscountClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let cuponFound = false;
    console.log(cupoane);
    cupoane.forEach((cupon) => {
      if (
        promotionalCodeInputRef.current &&
        promotionalCodeInputRef.current.value === cupon.text &&
        isPromotionValid(cupon)
      ) {
        cuponFound = true;
        setCupon(cupon.text);
        toast.success("Codul promotional a fost aplicat cu success !");
        setDiscount(
          cupon.tip.toLowerCase() === "procent"
            ? (Number(cupon.reducere) / 100) * price
            : Number(cupon.reducere)
        );
        return;
      }
    });
    if (!cuponFound) {
      toast.error("Codul promotional este invalid !");
      return;
    }
  };
  const [createAcc, setCreateAcc] = useState(true);

  useEffect(() => {
    const isLoggedIn = Cookies.get("user") ?? null;
    if (isLoggedIn) {
      setCreateAcc(false);
    }
  }, []);

  const comandaFaraCont = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userCookie = Cookies.get("user") ?? null;
    if (userCookie === null) {
      toast.error("Trebuie sa fi logat ca sa poti da o comanda.");
      return;
    }
    Axios.get("https://api.inspiredconsulting.ro/comanda", {
      params: {
        nume: nume,
        token: userCookie,
        tara: tara,
        adresa: adresa,
        cui: cui,
        companie: companie,
        email: email,
        parola: password,
        confirma_parola: confirmPassword,
        cos: makeCartString(),
        cupon: cupon,
      },
    })
      .then(function(response: { data: string }) {
        window.location.href = response.data;
      })
      .catch(function(error: unknown) {
        console.log(error);
      })
      .finally(() => void localStorage.setItem("cart_items", ""));
  };

  return (
    <form
      onSubmit={comandaFaraCont}
      className="mt-36 px-3 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex lg:flex-row flex-col justify-around"
    >
      <div className="flex flex-col">
        <div>
          {createAcc ? (
            <>
              <h2 className="text-xl text-[#260056] font-bold py-2">
                Creeză-ți contul
              </h2>
              <p className="text-[#0F52FF]">
                Ai deja un cont?{" "}
                <span className="underline cursor-pointer">Loghează-te</span>
              </p>
              <div className="flex flex-col justify-between">
                <input
                  type="email"
                  className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                  placeholder="email"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                  placeholder="parola"
                  required
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
                  placeholder="confirma parola"
                  name="confirm-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </>
          ) : null}
        </div>
        <div>
          <h2 className="text-xl text-[#260056] font-bold py-2">
            Date de facturare
          </h2>
          <div className="flex flex-col justify-between">
            <input
              type="text"
              className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
              placeholder="numele complet"
              required
              name="numele complet"
              onChange={(e) => setNume(e.target.value)}
            />
            <input
              type="text"
              className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
              placeholder="țară"
              required
              name="țară"
              onChange={(e) => setTara(e.target.value)}
            />
            <input
              type="text"
              className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
              placeholder="adresa completă"
              name="adresa completă"
              required
              onChange={(e) => setAdresa(e.target.value)}
            />
            <input
              type="text"
              className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
              placeholder="CUI (opțional)"
              name="CUI"
              onChange={(e) => setCui(e.target.value)}
            />
            <input
              type="text"
              className="border-2 my-4 border-[#0F52FF] p-3 rounded-[28.5px] sm:min-w-[450px]"
              placeholder="Nume companiei ( opțional )"
              name="Nume companiei"
              onChange={(e) => setCompanie(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="bg-transparent-white rounded-3xl h-full flex flex-col lg:items-start items-center lg:py-2 py-10 px-10">
        {!products.length
          ? "Nu exista produse in cos."
          : products.map((item) => (
            <ProductItem
              handleDeleteFromCart={() => deleteCos(item)}
              key={item.id}
              {...item}
            />
          ))}
        {products.length && (
          <>
            <div className="sm:max-w-md max-w-xs">
              <div className="flex flex-row justify-between">
                <p className="text-[#260056] font-bold text-lg">Subtotal</p>
                <p className="text-[#260056] font-bold text-lg">
                  {cupon.length > 0 ? price - discount : price} lei
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <input
                  type="text"
                  className="border-2 my-4 sm:mr-6 border-[#0F52FF] p-3 rounded-[28.5px]"
                  placeholder="cod promotional"
                  name="cod promotional"
                  onChange={(e) => setCupon(e.target.value)}
                  ref={promotionalCodeInputRef}
                />
                <button
                  onClick={handleDiscountClick}
                  className="px-10 py-4 rounded-[28.5px] w-full sm:w-32 my-3 bg-[#0F52FF] transition-all hover:scale-[1.05] text-white"
                >
                  aplică
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="px-10 py-4 rounded-[28.5px] w-full my-3 bg-[#0F52FF] transition-all hover:scale-[1.05] text-white"
            >
              Continuă către plată
            </button>
          </>
        )}
      </div>
    </form>
  );
}
