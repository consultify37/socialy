/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavAdmin from "../../../components/admin-nav";
import toast from "react-hot-toast";
import {
  addCupon,
  Cupon,
  deleteCupons,
  getCupons,
} from "../../../utils/handleGetRequests";

export default function Categories() {
  const [text, setText] = useState("");
  const [tip, setTip] = useState<"procent" | "suma">("procent");
  const [reducere, setReducere] = useState(0);
  const [duration, setDuration] = useState("");
  const [cupons, setCupons] = useState<Cupon[]>([]);
  useEffect(() => {
    (async () => setCupons((await getCupons()).data))();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await addCupon(text, tip, reducere, Number(duration));

      toast.success(response.data);
      (async () => setCupons((await getCupons()).data))();
      setText("");
      setTip("procent");
      setReducere(0);
      setDuration("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      console.error(err);
    }
  }
  console.log(cupons);
  //needs work
  async function removeTodo(index: number) {
    const response = await deleteCupons(index);
    if (response.data) {
      toast.success(response.data);
    }
    setCupons(cupons.filter((cupon) => cupon.id !== index));
  }
  return (
    <div className="flex p-10 pt-28">
      <NavAdmin />
      <Head>
        <title>Admin - Adauga categorie</title>
      </Head>
      <div className="max-w-4xl w-full mt-12 ml-10">
        <h2 className="text-3xl font-bold mb-10">Adaugă un cupon</h2>
        <div className="flex flex-row mb-6 w-full justify-between">
          <div className="flex w-1/3 flex-col">
            <form onSubmit={handleSubmit}>
              <span className="text-lg mb-2">Text cupon</span>
              <input
                className="rounded-xl border-[#8717F8] w-full text-ms border-2 mb-5 p-3 px-4"
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
              <span className="text-lg mb-2">Tipul cupon</span>
              <select
                className="rounded-xl border-[#8717F8] w-full text-ms border-2 mb-5 p-3 px-4"
                onChange={(event) =>
                  setTip(event.target.value as "suma" | "procent")
                }
              >
                <option selected value="suma">
                  Suma
                </option>
                <option value="procent">Procent</option>
              </select>
              <span className="text-lg mb-2">Reducerea</span>
              <input
                className="rounded-xl border-[#8717F8] w-full text-ms border-2 mb-5 p-3 px-4"
                type="text"
                placeholder="Introdu doar numarul"
                value={reducere}
                onChange={(event) => setReducere(Number(event.target.value))}
              />
              <span className="text-lg mb-2">Durata ( în zile )</span>
              <input
                className="rounded-xl border-[#8717F8] w-full text-ms border-2 mb-5 p-3 px-4"
                placeholder="Introdu nr de zile"
                type="text"
                onChange={(event) => {
                  setDuration(event.target.value);
                }}
              />
              <button
                type="submit"
                className="py-3 bg-[#8717F8] w-[fit-content] h-auto text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]"
              >
                Adaugă cupon
              </button>
            </form>
          </div>
          <ul className="w-1/2">
            {cupons.map((cupon) => (
              <li
                className="bg-[#E3E8FF] mb-5 rounded-xl flex flex-row justify-between p-3 px-5"
                key={cupon.id}
              >
                <div className="flex flex-col">
                  <p>
                    <strong>Cupon: {cupon.text}</strong>
                  </p>
                  <p>
                    {cupon.reducere} {cupon.tip === "procent" ? "%" : "lei"}{" "}
                  </p>
                  <p>{cupon.durata} zile ramase</p>
                </div>
                <button
                  className="flex items-start"
                  onClick={() => removeTodo(cupon.id)}
                >
                  <img
                    className="w-15px"
                    src="/images/x-blue.svg"
                    alt="x-blue"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
