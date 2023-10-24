/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import NavAdmin from "../../../components/admin-nav";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import FormData from "form-data";
import Axios from "axios";

export default function Categories() {
    const [todoText, setTodoText] = useState('');
    const [file, set_file] = useState<File | null>(null);
    const [todos, setTodos] = useState<{ text: string, image: File | null }[]>([]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        setTodos([...todos, { text: todoText, image: file }]);
        // setTodoText('');
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
          set_file(input.files[0]);
        }
    }
    const upload = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        let form_data = new FormData();
    
        form_data.append("categorie", file)
        
        let user = Cookies.get('user');
        Axios.post('https://api.inspiredconsulting.ro/products/adauga_categorie', form_data, {
          params: {
            nume: todoText
          },
        })
          .then(function (response) {
            if(response.data == 'success'){
                console.log(response.data)
                toast.success('Categorie adaugata cu succes'),
                    setTimeout(() => {
                    setTodos([])
                    recall()
                }, 2000);
            } else {
                toast.error(response.data)
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      };

    
    function removeTodo(index: number) {
        setTodos(todos.filter((_, i) => i !== index));
    }
    const [categorii, setCategorii] = useState<{
            id: string | undefined; nume: string, poza: File | null 
    }[]>([]);

    useEffect(() => {
        Axios.get('https://api.inspiredconsulting.ro/products/afisaza_categorie', {
        })
        .then(function (response) {
            setCategorii(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);

    function recall(){
        Axios.get('https://api.inspiredconsulting.ro/products/afisaza_categorie', {
        })
        .then(function (response) {
            setCategorii(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

    function deleteProduct(id: any) {
        Axios.get('https://api.inspiredconsulting.ro/products/sterge_categorie', {
            params: {
              id: id,
            }
          })
          .then(function (response) {
            console.log(response.data)
            if (response.data == 'Categoria a fost stearsa'){
              toast.success('Categoria a fost stearsa')
              setTimeout(() => {
                recall()
            }, 3000);
            }
            else
              toast.error(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        }

    return (
        <div className="flex p-10 pt-28">
            <NavAdmin/>
            <Head>
                <title>Admin - Adauga categorie</title>
            </Head>
            <div className="max-w-4xl w-full mt-12 ml-10">
                <h2 className="text-3xl font-bold mb-10">Adaugă categorie</h2>
                <div className="flex flex-row mb-6 w-full justify-between">
                    <div className="flex w-full w-1/3 flex-col">
                        <span className="text-lg mb-2">
                            Numele produsului
                        </span>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                value={todoText}
                                onChange={event => setTodoText(event.target.value)} 
                                className="rounded-xl border-[#8717F8] w-full text-ms border-2 mb-5 p-3 px-4" 
                                placeholder="ex: Template-uri"
                            />
                            <input
                                type="file"
                                className="w-full rounded-xl mb-5 text-ms border-2 cursor-pointer border-[#8717F8] dark:text-gray-400 focus:outline-none" 
                                onChange={handleImageChange} 
                                accept=".png, .jpg, .jpeg, .svg, .webp"
                            />
                            <button 
                                type="submit"
                                className='py-3 bg-[#8717F8] w-[fit-content] h-auto text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]'
                            >
                                Adaugă categorie
                            </button>
                        </form>
                    </div>
                    <ul className="w-1/2">
                    {todos.map((todo, index) => (
                        <li className="bg-[#E3E8FF] mb-5 rounded-xl flex flex-row justify-between p-3 px-5" key={index}>
                        <div>
                            {todo.text}
                            {todo.image && <img className="w-[50px]" src={URL.createObjectURL(todo.image)} alt="" />}
                        </div>
                        <button onClick={() => removeTodo(index)}>
                            <img className="w-15px" src="/images/x-blue.svg" alt="x-blue" />
                        </button>
                        </li>
                    ))}
                    {
                    categorii.map(categorie => (
                        <li className="bg-[#E3E8FF] mb-5 rounded-xl flex flex-row justify-between p-3 px-5" key={categorie.id}>
                        <div>
                            {categorie.nume}
                            <img className="w-[50px]" src={`https://api.inspiredconsulting.ro/${categorie.poza}`} alt="" />
                        </div>
                        <button id={categorie.id} onClick={() => deleteProduct(categorie.id)}>
                            <img className="w-15px" src="/images/x-blue.svg" alt="x-blue" />
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <button
                    type="submit"
                    onClick={upload}
                    className='py-3 bg-[#8717F8] w-[fit-content] h-auto text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]'
                >
                    save
                </button>
            </div>
        </div>
    );
}
