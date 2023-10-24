/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import NavAdmin from "../../components/admin-nav";
import Orders from "./comenzi";
import ProductsPanel from "./produse";
import AddProduct from "./adauga-produs";

export default function Admin() {
    return (
        <>
            <Orders /> 
        </>
    );
}