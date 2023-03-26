import axios from "axios";
import Cookies from "js-cookie";
import { AxiosResponse } from "axios";

const API_URL = "https://api.inspiredconsulting.ro";

export type MyOrders = {
  nume: string;
  poza: string;
  pret: string;
  reducere?: string;
  fisier: string;
};
export type UserInfo = {
  nume: string;
  email: string;
  verify: string;
  date: string;
};

export async function getMyOrders(): Promise<AxiosResponse<
  MyOrders[] | string
> | null> {
  const user = Cookies.get("user");

  if (!user) return null;

  try {
    const response = await axios.get(
      `${API_URL}/products/comenzile-mele?user=${user}`
    );
    return response;
  } catch (err: any) {
    console.error(err);
    throw Error(err);
  }
}

export async function getUserInfo(): Promise<AxiosResponse<UserInfo[]> | null> {
  const user = Cookies.get("user");
  if (!user) return null;
  try {
    const response = await axios.get(`${API_URL}/users/user_info?user=${user}`);
    return response;
  } catch (err: any) {
    console.error(err);
    throw Error(err);
  }
}
export async function addCupon(
  text: string,
  tip: "procent" | "suma",
  reducere: number,
  durata: number
): Promise<AxiosResponse<string>> {
  if (
    !text.length ||
    !reducere.toString().length ||
    !durata.toString().length
  ) {
    throw new Error("Date introduse gresit! Verifica din nou.");
  }
  try {
    const response = await axios.get(`${API_URL}/products/aduga_cupon`, {
      params: {
        text,
        tip,
        reducere,
        durata,
      },
    });
    return response;
  } catch (err: any) {
    console.error(err);
    throw Error(err);
  }
}

export type Cupon = {
  id: number;
  durata: string;
  text: string;
  reducere: string;
  tip: string;
  expira: string;
};

export async function getCupons(): Promise<AxiosResponse<Cupon[]>> {
  try {
    const response = await axios.get(`${API_URL}/products/afiseaza_cupon`);
    return response;
  } catch (err: any) {
    console.error(err);
    throw Error(err);
  }
}
export async function deleteCupons(id: number): Promise<AxiosResponse<string>> {
  try {
    const response = await axios.get(`${API_URL}/products/sterge_cupon`, {
      params: {
        id,
      },
    });
    return response;
  } catch (err: any) {
    console.error(err);
    throw Error(err);
  }
}
