import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://api.inspiredconsulting.ro";

export async function postChangeAccountDetails(
  email: string = "",
  password: string = "",
  confirmPassword: string = ""
) {
  const vkey = Cookies.get("user");
  if (vkey === undefined) {
    throw new Error(
      "Ceva s-a intamplat gresit. Te rugam sa incerci mai tarziu."
    );
  }

  if (
    (password.length !== 0 && confirmPassword.length === 0) ||
    (password.length === 0 && confirmPassword.length !== 0)
  ) {
    throw new Error("Introdu parola noua in parola si confirma parola.");
  }
  if (password !== confirmPassword) {
    throw new Error("Parola si confirma parola nu coincid.");
  }
  try {
    const response = await axios.get(`${API_URL}/users/setari_cont`, {
      params: {
        email,
        parola: password,
        confirma_parola: confirmPassword,
        vkey,
      },
    });
    return response;
  } catch (err: any) {
    console.error(err);
    throw new Error(
      "Ceva s-a intamplat gresit. Te rugam sa incerci mai tarziu.",
      err
    );
  }
}
