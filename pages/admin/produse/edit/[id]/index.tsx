/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import NavAdmin from "../../../../../components/admin-nav";
import ToDoApp from "../../../adauga-produs/todo";
import QAApp from "../../../adauga-produs/qa";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import FormData from "form-data";
import Axios from "axios";
type QA = {
  id: number;
  question: string;
  answer: string;
};

type ToDo = {
  id: number;
  task: string;
  completed: boolean;
};
export default function AddProduct() {
  const [file, set_file] = useState('routes/img/09247175b605de810415b19519b1893d_poza_produs.jpg');
  const [file2, set_file2] = useState('routes/img/09247175b605de810415b19519b1893d_poza_produs.jpg');

  const [nume, setNume] = useState("");
  const [descriere_1, setDescriere_1] = useState("");
  const [descriere_2, setDescriere_2] = useState("");
  const [pret, setPret] = useState("");
  const [reducere, setReducere] = useState("");
  const [titlu_adreseaza, setTitlu_adreseaza] = useState("");
  const [desc_adreseaza, setDesc_adreseaza] = useState("");

  const [selectedValue, setSelectedValue] = useState("ghiduri");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  const pozaPrezentare = (e: any) => {
    if (e.target.files[0]) {
      set_file(e.target.files[0]);
    }
  };
  const fisier = (e: any) => {
    if (e.target.files[0]) {
      set_file2(e.target.files[0]);
    }
  };

  //QA
  const [questions, setQuestions] = useState<QA[]>([]);

  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleSelectQuestion = (id: number) => {
    setSelectedQuestion(id);
  };

  const handleAddQA = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = (event.target as HTMLFormElement).elements.namedItem(
      "question"
    ) as HTMLInputElement;
    const answer = (event.target as HTMLFormElement).elements.namedItem(
      "answer"
    ) as HTMLInputElement;
    if (!question.value || !answer.value) {
      return;
    }
    const newQA: QA = {
      id: questions.length + 1,
      question: question.value,
      answer: answer.value,
    };
    setQuestions([...questions, newQA]);
    question.value = "";
    answer.value = "";
  };

  const handleDeleteQA = (id: number) => {
    const updatedQuestions = questions.filter((qa) => qa.id !== id);
    setQuestions(updatedQuestions);
  };

  //TODO
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAddToDo = (taskInput: HTMLInputElement) => {
    if (taskInput.value === "") {
      return;
    }
    const newToDo: ToDo = {
      id: toDos.length + 1,
      task: taskInput.value,
      completed: false,
    };
    setToDos([...toDos, newToDo]);
    taskInput.value = "";
  };

  const handleDeleteToDo = (id: number) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  const handleToggleCompleted = (id: number) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  }; 

  const [id, setId] = useState<string | undefined>(undefined);
  useEffect(() => {
    const url = window.location.href;
    const productId = url.split("/").pop();
    setId(productId);
  }, [id]);

  type Intrebare = {
    id: string;
    question: string;
    answer: string;
  };
  
  const [intrebari, setIntrebari] = useState<Intrebare[]>([]);
  useEffect(() => {
    Axios.get("https://api.inspiredconsulting.ro/products/detalii_produs", {
      params: {
        nume: id,
      },
    })
      .then(function (response) {
        console.log(response.data);
        setNume(response.data.nume);
        setDescriere_1(response.data.descriere_1);
        setDescriere_2(response.data.descriere_2);
        set_file(response.data.poza);
        set_file2(response.data.fisier);
        setPret(response.data.pret);
        setReducere(response.data.reducere);
        setTitlu_adreseaza(response.data.titlu_adreseaza);
        setDesc_adreseaza(response.data.desc_adreseaza);
        setQuestions(response.data.intrebari)
        setToDos(response.data.motive)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [id]);
console.log(questions)

  const upload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let form_data = new FormData();

    form_data.append("poza", file);
    form_data.append("fisier", file2);

    let user = Cookies.get("user");
    Axios.post(
      "https://api.inspiredconsulting.ro/products/editeaza_produs",
      form_data,
      {
        params: {
          id: id,
          nume: nume,
          descriere_1: descriere_1,
          descriere_2: descriere_2,
          pret: pret,
          reducere: reducere,
          categorie: selectedValue,
          motive: toDos,
          intrebari: questions,
          titlu_adreseaza: "titlu_adreseaza",
          desc_adreseaza: "desc_adreseaza",
        },
      }
    )
      .then(function (response) {
        if (response.data == "success") {
          toast.success("Produs editat cu succes"),
            setTimeout(() => {
              window.location.href = "/admin/produse";
            }, 2000);
        } else {
          toast.error(response.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  //afiseaza categoriile
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.inspiredconsulting.ro/products/afisaza_categorie",
      {}
    )
      .then(function (response) {
        setCategorie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const CategorieData: any[] = categorie;

  return (
    <div className="flex p-10 pt-28">
      <NavAdmin />
      <Head>
        <title>Admin - Edit {nume}</title>
      </Head>
      <div className="max-w-4xl w-full mt-12 ml-10">
        <h2 className="text-3xl font-bold mb-10">Adaugă un produs</h2>
        <div className="flex flex-row mb-6 w-full justify-between">
          <div className="flex w-full w-2/5 flex-col">
            <span className="text-lg mb-2">Numele produsului</span>
            <input
              type="text"
              className="rounded-xl border-[#0F52FF] text-ms border-2 p-2"
              value={nume}
              onChange={(e) => setNume(e.target.value)}
              required
            />
          </div>
          <div className="flex w-full w-2/5 flex-row justify-between">
            <div className="flex flex-col w-full mr-2">
              <span className="text-lg mb-2">Preț normal</span>
              <input
                type="text"
                className="rounded-xl w-full border-[#0F52FF] text-ms border-2 p-2"
                placeholder="ex: 129.99"
                onChange={(e) => setPret(e.target.value)}
                required
                value={pret}
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="text-lg mb-2">Preț la reducere</span>
              <input
                type="text"
                className="rounded-xl w-full border-[#0F52FF] text-ms border-2 p-2"
                placeholder="ex: 159.99"
                onChange={(e) => setReducere(e.target.value)}
                required
                value={reducere}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row mb-6 w-full justify-between">
          <div className="flex flex-col w-2/5 w-full">
            <span className="text-lg mb-2">Descriere 1</span>
            <textarea
              className="rounded-xl border-[#0F52FF] text-ms border-2 p-2"
              placeholder="ex: Ghid fonduri 2022"
              onChange={(e) => setDescriere_1(e.target.value)}
              value={descriere_1}
            ></textarea>
          </div>
          <div className="flex flex-col w-2/5 w-full">
            <span className="text-lg mb-2">Categoria</span>
            <select
              name="ghiduri"
              className="rounded-xl w-full border-[#0F52FF] text-ms border-2 p-2"
              value={selectedValue}
              onChange={handleChange}
              required
            >
              {CategorieData.map((categorie) => (
                <option key={categorie.id} value={categorie.nume}>
                  {categorie.nume}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-row mb-6 w-full justify-between">
          <div className="flex flex-col w-2/5 w-full">
            <span className="text-lg mb-2">Descriere 2</span>
            <textarea
              className="rounded-xl border-[#0F52FF] text-ms border-2 p-2"
              placeholder="ex: Ghid fonduri 2022"
              onChange={(e) => setDescriere_2(e.target.value)}
              required
              value={descriere_2}
            ></textarea>
          </div>
          <div className="flex flex-col w-2/5 w-full">
            <span className="text-lg mb-2">Poza de prezentare</span>
            <input
              className="w-full rounded-xl border-[#0F52FF] text-ms border-2 cursor-pointer border-[#0F52FF] dark:text-gray-400 focus:outline-none"
              type="file"
              accept=".png, .jpg, .jpeg, .svg, .webp"
              onChange={pozaPrezentare}
              required
            />
          </div>
        </div>
        <div className="flex flex-row mb-6 w-full justify-between">
          <div className="flex flex-col w-2/5 w-full">
            <span className="text-lg mb-2">De ce să alegi produsul?</span>
            <div>
              <form
                className="flex flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleAddToDo(
                    (event.target as HTMLFormElement).elements.namedItem(
                      "task"
                    ) as HTMLInputElement
                  );
                }}
              >
                <input
                  type="text"
                  name="task"
                  className="rounded-xl border-[#0F52FF] w-full rounded-r-none text-ms border-2 p-2"
                  placeholder="Adauga motivul"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0F52FF] w-[50px] flex justify-center items-center rounded-xl rounded-l-none"
                >
                  <img
                    className="w-[20px]"
                    src="/images/plus.svg"
                    alt="plus-button"
                  />
                </button>
              </form>
              <ul>
                {toDos.map((toDo) => (
                  <li
                    key={toDo.id}
                    className="flex flex-row mt-4 justify-between"
                  >
                    {toDo.task}
                    {/* <button onClick={() => handleToggleCompleted(toDo.id)}>Toggle Completed</button> */}
                    <button onClick={() => handleDeleteToDo(toDo.id)}>
                      <img
                        className="w-[30px]"
                        src="/images/delete-icon.svg"
                        alt="delete-icon"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row mb-6 w-full justify-between">
          <div className="flex flex-col w-full">
            <span className="text-lg mb-2">Întrebări frecvente</span>
            <div className="flex flex-row justify-between w-full">
              <form
                className="w-2/5"
                onSubmit={(event) => {
                  event.preventDefault();
                  const question = (
                    event.target as HTMLFormElement
                  ).elements.namedItem("question") as HTMLInputElement;
                  const answer = (
                    event.target as HTMLFormElement
                  ).elements.namedItem("answer") as HTMLInputElement;
                  handleAddQA(event);
                  question.value = "";
                  answer.value = "";
                }}
              >
                <input
                  type="text"
                  name="question"
                  className="rounded-xl w-full border-[#0F52FF] text-ms border-2 mb-4 p-2"
                  placeholder="adaugă întrebarea"
                />
                <textarea
                  name="answer"
                  className="rounded-xl w-full border-[#0F52FF] text-ms border-2 mb-4 p-2"
                  placeholder="adaugă răspunsul"
                ></textarea>
                <button
                  type="submit"
                  className="py-3 bg-[#0F52FF] mb-5 h-auto text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]"
                >
                  Add Q&A
                </button>
              </form>
              <ul className="w-2/5">
                {questions.map((qa) => (
                  <li
                    className="flex flex-row relative justify-between w-full mb-6 p-4 px-5 rounded-xl bg-[#F2F4FF]"
                    key={qa.id}
                  >
                    <div className="flex flex-col">
                      <p className="font-bold text-sm">{qa.question}</p>
                      <p>
                        {qa.id === selectedQuestion && (
                          <p className="mt-2">{qa.answer}</p>
                        )}
                      </p>
                    </div>
                    <button onClick={() => handleSelectQuestion(qa.id)}>
                      <img
                        className={`w-[20px] absolute right-[10px] top-[23px]
                        ${
                          qa.id === selectedQuestion
                            ? "rotate-180 transition-all"
                            : "transition-all"
                          }
                        `}
                        src="/images/arrow-qa.svg"
                        alt="arrow-qa"
                      />
                    </button>
                    <button
                      className="rounded-full absolute top-[-15px] right-[-15px] bg-[#E9E9E9] w-[30px] h-[30px] flex justify-center items-center"
                      onClick={() => handleDeleteQA(qa.id)}
                    >
                      <img
                        className="w-[13px]"
                        src="/images/delete-qa.svg"
                        alt="delete"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ul>
          {intrebari.map((item: { id: string; question: string; answer: string }) => (
            <li key={item.id}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-2/5 w-full mb-6">
          <span className="text-lg mb-2">Cui i se adresează?</span>
          <input
            type="text"
            name="task"
            className="rounded-xl border-[#0F52FF] w-full text-ms border-2 p-2 mb-4"
            placeholder="adaugă titlul"
            required
            value={titlu_adreseaza}
            onChange={(e) => setTitlu_adreseaza(e.target.value)}
          />
          <textarea
            className="rounded-xl border-[#0F52FF] text-ms border-2 p-2"
            placeholder="adaugă descrierea"
            required
            value={desc_adreseaza}
            onChange={(e) => setDesc_adreseaza(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-row mb-6 w-full items-end justify-between">
          <div className="flex flex-col w-2/5 w-full">
            <span className="text-lg mb-2">Fișier</span>
            <input
              className="w-full rounded-xl border-[#0F52FF] text-ms border-2 cursor-pointer border-[#0F52FF] dark:text-gray-400 focus:outline-none"
              type="file"
              accept="pdf mp4"
              onChange={fisier}
            />
          </div>
          <button
            onClick={upload}
            type="submit"
            className="py-3 bg-[#0F52FF] h-auto text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]"
          >
            Adaugă produsul
          </button>
        </div>
      </div>
    </div>
  );
}
