/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminLogin() {
  return (
    <>
        <Head>
            <title>Consultify | Admin Login</title>
        </Head>
        <div className='w-[100%] h-[80vh] flex'>
            <div id="login_container" className='max-w-[523px] m-auto flex flex-col rounded-[35px] bg-[#F2F4FF] p-10'>
                <h1 className='text-2xl font-bold mb-5'>Admin Login</h1>
                <input type="text" className='rounded-[35px] bg-[#F2F4FF] p-3 pr-7 pl-7 border-solid border-[#0F52FF] border-2 mb-5' name="username" placeholder="Username" />
                <input type="password" className='rounded-[35px] bg-[#F2F4FF] p-3 pr-7 pl-7 border-solid border-[#0F52FF] border-2 mb-5' name="password" placeholder="Parola" />
                <a href="../admin" className="submit_wrapper w-96 p-4 text-center bg-[#006CFF] text-white rounded-[28.5px] font-medium px-10 text-xs md:text-[16px] "> Login </a>
            </div>
        </div>
    </>
  )
}
