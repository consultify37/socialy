/* eslint-disable @next/next/no-img-element */
import Axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavAdmin from "../../../components/admin-nav";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ProductsPanel() {
  const [products, setProducts] = useState([]);
  const [reducere, setReducere] = useState(false);
  const [id, setId] = useState();
  const [showReduced, setShowReduced] = React.useState(false);

  useEffect(() => {
    Axios.get("https://api.inspiredconsulting.ro/products/filtreaza_produse", {
      params: {
        reducere: "",
        categorie: "",
      },
    })
      .then(function (response) {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const ProductsData: any[] = products;
  const toggleShowReduced = () => {
    setShowReduced(!showReduced);
  };

  const productsToShow = showReduced
    ? ProductsData.filter((product) => product.reducere !== "")
    : ProductsData;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = selectedCategory
    ? ProductsData.filter((products) => products.categorie === selectedCategory)
    : ProductsData;

  //sterge produs

  function deleteProduct(id: any) {
    console.log(`Button clicked for product with id: ${id}`);
    Axios.get("https://api.inspiredconsulting.ro/products/sterge_produs", {
      params: {
        id: id,
      },
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data == "success") {
          toast.success("success");
          setTimeout(() => {
            recall();
          }, 3000);
        } else toast.error(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

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

  //recall
  function recall() {
    Axios.get("https://api.inspiredconsulting.ro/products/filtreaza_produse", {
      params: {
        reducere: "",
        categorie: "",
      },
    })
      .then(function (response) {
        setProducts(response.data);
        console.log(response.data);
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
      <NavAdmin />
      <div className="container mx-auto mt-12 ml-10">
        <Head>
          <title>Admin - comenzi</title>
        </Head>
        <div className="flex justify-between  mb-8">
          <h2 className="text-4xl font-bold">Produsele tale</h2>
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              id="reducere"
              name="reducere"
              className="mr-2"
              checked={showReduced}
              onChange={toggleShowReduced}
            />
            <span>Doar produsele la reducere</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Categorie</span>
            <select
              name="price"
              id=""
              onChange={handleCategoryChange}
              className="text-lg"
            >
              {CategorieData.map((categorie) => (
                <option key={categorie.id} value={categorie.nume}>
                  {categorie.nume}
                </option>
              ))}
            </select>
          </div>
          <Link
            href="/admin/adauga-produs"
            className="py-3 bg-[#8717F8] text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]"
          >
            Produs nou
          </Link>
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full bg-[#E3E8FF] text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-[#C6CFFF]">
              <tr>
                <th scope="col" className="py-3 text-lg font-lg px-6">
                  Poza
                </th>
                <th scope="col" className="py-3 text-lg font-lg px-6">
                  Nume produs
                </th>
                <th scope="col" className="py-3 text-lg font-lg px-6">
                  Pret
                </th>
                <th scope="col" className="py-3 text-lg font-lg px-6">
                  Pret redus
                </th>
                <th scope="col" className="py-3 text-lg font-lg px-6">
                  Categorie
                </th>
                <th scope="col" className="py-3 text-lg font-lg px-6"></th>
              </tr>
            </thead>
            <tbody>
              {showReduced
                ? productsToShow.map((product) => (
                    <tr key={product.nume} className="border-b bg-[#E3E8FF]">
                      <th
                        scope="row"
                        className="py-4 px-6 text-black font-medium text-black whitespace-nowrap"
                      >
                        <Image
                          src={`https://api.inspiredconsulting.ro/${product.poza}`}
                          width={70}
                          height={70}
                          alt={product.nume}
                        />
                      </th>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {product.nume}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {product.pret}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {product.reducere}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {product.categorie}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        <div className="row flex justify-end">
                          <Link
                            className="p-2 rounded-md bg-[#EAEDFF] flex mr-6"
                            key={product.id}
                            href={`/view/${product.nume.replace(/\s+/g, "-").toLowerCase()}`}
                            passHref={true}
                          >
                            editeaza
                          </Link>
                          <button
                            id={product.id}
                            onClick={() => deleteProduct(product.id)}
                            className="p-2 rounded-md items-center bg-[#EAEDFF] flex"
                          >
                            <img
                              src="/images/trash.svg"
                              width="20"
                              height="20"
                              className="w-[20px]"
                              alt="delete"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : filteredData.map((productCategorie) => (
                    <tr
                      key={productCategorie.nume}
                      className="border-b bg-[#E3E8FF]"
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 text-black font-medium text-black whitespace-nowrap"
                      >
                        <Image
                          src={`https://api.inspiredconsulting.ro/${productCategorie.poza}`}
                          width={70}
                          height={70}
                          alt={productCategorie.nume}
                        />
                      </th>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {productCategorie.nume}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {productCategorie.pret}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {productCategorie.reducere}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        {productCategorie.categorie}
                      </td>
                      <td className="py-4 text-lg font-medium px-6 text-black">
                        <div className="row flex justify-end">
                          <Link
                            className="p-2 rounded-md bg-[#EAEDFF] flex mr-6"
                            key={productCategorie.id}
                            href={`/admin/produse/edit/${productCategorie.nume.replace(/\s+/g, "-").toLowerCase()}`}
                            passHref={true}
                          >
                            editeaza
                          </Link>
                          <button
                            id={productCategorie.id}
                            onClick={() => deleteProduct(productCategorie.id)}
                            className="p-2 rounded-md items-center bg-[#EAEDFF] flex"
                          >
                            <img
                              src="/images/trash.svg"
                              width="20"
                              height="20"
                              className="w-[20px]"
                              alt="delete"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
