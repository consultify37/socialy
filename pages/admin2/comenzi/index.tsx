/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useMemo, useRef, useState } from "react";
import NavAdmin from "../../../components/admin-nav";
import Axios from "axios";
import moment from "moment";
import toast from "react-hot-toast";


export default function Orders() {
    const [start, setIsStart] = useState(true);
    let OrderData: any[] | (() => any[]) = []
    const [orders, setOrders] = useState(OrderData);

    useEffect(() => {
        Axios.get("https://api.inspiredconsulting.ro/products/afiseaza-comenzi")
          .then(function (response) {
            setOrders(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }, []);
    
    let formattedOrders = orders.map((order) => ({
        ...order,
        data: new Date(order.data).toLocaleString("ro-RO", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
    }));

    let [da, setDa] = useState(orders)
    
    useEffect(()=>{
        if (orders) {
            setDa(formattedOrders)
        }
    }, [orders])
    
    console.log(orders)
    let handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortDirection = event.target.value;
        let sortedData = [...formattedOrders];
        // console.log(orders);
        if (sortDirection === 'ascending') {
          sortedData.sort((a, b) => a.pret - b.pret);
        } else if (sortDirection === 'descending') {
          sortedData.sort((a, b) => b.pret - a.pret);
        }
        console.log(sortedData)
        if(sortedData){
            setDa(sortedData)
            console.log(da)
        }
    }
    const [startf, setStartF] = useState<string | null>(null);
    const [showS, setShowS] = useState(false)
    const show = (id: string) => {
      setStartF(id);
      setShowS(!showS)
    };

    function deleteProduct(id: any) {
        Axios.get("https://api.inspiredconsulting.ro/products/sterge_produs", {
          params: {
            id: id,
          },
        })
          .then(function (response) {
            console.log(response.data);
            if (response.data == "success") {
              toast.success("success");
            } else toast.error(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }
    
    return (
        <div className="flex p-10 pt-12">
            <NavAdmin />
            <div className="container mx-auto mt-4 ml-10">
                <Head>
                    <title>Admin - comenzi</title>
                </Head>
                <div className="flex justify-between  mb-8">
                    <h2 className="text-4xl font-bold">Toate comenzile</h2>
                    <div className="flex justify-between items-center">
                        <span className="text-lg">sorteaza dupa: </span>
                        <select onChange={handleSort} name="price" id="" className="text-lg">
                            <option value="ascending">pret crescator</option>
                            <option value="descending">pret descrescator</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full bg-[#E3E8FF] text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-black uppercase bg-[#C6CFFF]">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nr. comanda
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Data
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nume client
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nr. produs
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Total
                            </th>
                            <th scope="col" className="py-3 px-6"></th>
                        </tr>
                        </thead>
                            {da.map(order => (
                                <tbody key={order.nr_comanda}>
                                    <tr className="border-b bg-[#E3E8FF]">
                                        <th scope="row" className="py-4 px-6 text-black font-medium text-black whitespace-nowrap">
                                            #{order.nr_comanda}
                                        </th>
                                        <td className="py-4 px-6 text-black">
                                            {order.data}
                                        </td>
                                        <td className="py-4 px-6 text-black">
                                            {order.nume}
                                        </td>
                                        <td className="py-4 px-6 text-black">
                                            {order.nr_produse}
                                        </td>
                                        <td className="py-4 px-6 text-black">
                                            {order.pret} lei
                                        </td>
                                        <td className="py-4 relative w-[160px] px-6 text-black">
                                            <div className="row absolute top-[50%] translate-y-[-50%] left-0 gap-4 flex justify-between">
                                                <a href="#" className="p-2 rounded-md bg-[#EAEDFF] flex">
                                                    <img src='/images/paper.svg' width='20' height='20' className="w-[20px]" alt='paper' />
                                                </a>
                                                <button 
                                                    aria-expanded={start === order.nr_comanda ? "true" : "false"}
                                                    onClick={() => show(order.nr_comanda)}
                                                    className="p-2 rounded-md bg-[#EAEDFF] flex items-center justify-items-center"
                                                >
                                                    <img src='/images/arrow.svg' width='20' height='20' className="w-[20px]" alt='arrow' />
                                                </button>
                                                {/* <button onClick={() => deleteProduct(order.nr_comanda)} className="p-2 rounded-md bg-[#EAEDFF] flex">
                                                    <img src='/images/trash.svg' width='20' height='20' className="w-[20px]" alt='delete' />
                                                </button> */}
                                            </div>
                                        </td>
                                    </tr>
                                    {startf ===  order.nr_comanda && showS && (
                                        <tr className={`order-b bg-[#E3E8FF]`}>
                                            <td className="py-4 px-6 text-black">
                                                <div className="flex min-w-full flex-col my-4">
                                                    <p>Nume complet: {order.nume}</p>
                                                    <p>Adresa: {order.adresa}</p>
                                                    <p>CUI: {order.cui}</p>
                                                    <p>Nume companie: {order.companie}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-black">
                                                {order.produse.map((products: { nr_produse: React.Key | null | undefined; poza: any; nume: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; pret: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; reducere: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                                                    <div key={products.nr_produse} className="flex min-w-full flex-row my-4">
                                                        <Image
                                                            className="mx-2 w-[80px] lg:w-[72px]"
                                                            src={`https://api.inspiredconsulting.ro/${products.poza}`}
                                                            width={72}
                                                            height={92}
                                                            alt="book-img"
                                                        />
                                                        <div className="flex justify-center flex-col">
                                                            <h2 className="lg:text-lg text-sm text-[#260056] font-bold">
                                                            {products.nume}
                                                            </h2>
                                                            <div className="flex flex-row items-center">
                                                            <p className="text-[#8717F8] py-1 lg:text-base text-sm">{products.pret} lei</p>
                                                            <p className="text-[#7C9EF8] py-1 px-1 lg:text-sm text-xs line-through opacity-60">
                                                                {products.reducere} lei
                                                            </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            ))}
                    </table>
                </div>
            </div>
        </div>
    );
}
