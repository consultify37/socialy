import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import FixedLeft from "./FixedLeft";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CartModal, LoginModal } from "../modals";
import Cookies from "js-cookie";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => setToggle(false));
  }, [router.events]);

  const handleLoginModalClosing = () => void setShowLoginModal(false);
  const handleLoginModalOpening = () => void setShowLoginModal(true);
  const handleCartClosing = () => void setShowCart(false);
  const handleCartOpening = () => void setShowCart(true);
  let user = Cookies.get("user");

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (user != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);
  return (
    <>
      <header>
        {/* generalSettings */}
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FixedLeft />
        <nav
          role="main"
          className="z-[999] relative bg-[#260056] left-[50%] w-full translate-x-[-50%]"
        >
          <div className="bg-[#260056] mx-3 md:mx-[80px] xl:mx-[140px] 2xl:mx-[276px] rounded-[38.5px] flex justify-between items-center  py-3">
            <Link href="/" className="flex items-center justify-center z-[99]">
              <Image
                src="/images/logo.svg"
                width={120}
                height={38}
                className="align-middle"
                alt="Consultify logo"
              />
            </Link>
            <div className="flex items-center gap-5 lg:hidden z-[99]">
              <Link
                href="/"
                className="text-[#fff] p-[8px] bg-[#7000FF] rounded-full"
              >
                <AiOutlineShoppingCart onClick={handleCartOpening} size={20} />
              </Link>
              {toggle ? (
                <AiOutlineClose
                  className="text-white cursor-pointer lg:hidden rotate-180"
                  onClick={() => setToggle(false)}
                  size={42}
                />
              ) : (
                <HiMenuAlt1
                  className="text-white cursor-pointer lg:hidden rotate-180"
                  onClick={() => setToggle(true)}
                  size={42}
                />
              )}
            </div>
            <ul
              className={`list-none absolute lg:relative gap-2 duration-300 z-[10] items-center ${
                toggle
                  ? "-left-1 w-[102vw] rounded-[38.5px_38.5px_0_0] translate-y-0 -top-4 pt-[70px] bg-[#260056] lg:top-0 lg:w-auto lg:pt-0"
                  : "translate-y-[-200%] lg:translate-y-0"
              } lg:flex`}
            >
              <li
                className={`${
                  toggle
                    ? "border-b-2 w-full  border-b-[#C6CFFF] p-2 pl-4 lg:p-0 lg:border-0"
                    : ""
                }`}
              >
                <Link href="/" className="font-medium text-white">
                  acasă
                </Link>
              </li>
              <li
                className={`${
                  toggle
                    ? "border-b-2 w-full  border-b-[#C6CFFF] p-2 pl-4 lg:p-0 lg:border-0"
                    : ""
                }`}
              >
                <Link href="/despre" className="font-medium text-white">
                  despre
                </Link>
              </li>
              <li
                className={`${
                  toggle
                    ? "border-b-2 w-full  border-b-[#C6CFFF] p-2 pl-4 lg:p-0 lg:border-0"
                    : ""
                }`}
              >
                <Link href="/programe" className="font-medium text-white">
                  programe
                </Link>
              </li>
              <li
                className={`${
                  toggle
                    ? "border-b-2 w-full  border-b-[#C6CFFF] p-2 pl-4 lg:p-0 lg:border-0"
                    : ""
                }`}
              >
                <Link href="/blog" className="font-medium text-white">
                  blog
                </Link>
              </li>
              <li
                className={`${
                  toggle
                    ? "border-b-2 w-full  border-b-[#C6CFFF] p-2 pl-4 lg:p-0 lg:border-0"
                    : ""
                }`}
              >
                <Link href="/shop" className="font-medium text-white">
                  shop
                </Link>
              </li>
              <li
                className={`${
                  toggle
                    ? "border-b-2 w-full  border-b-[#C6CFFF] p-2 pl-4 lg:p-0 lg:border-0"
                    : ""
                }`}
              >
                <Link href="/contact" className="font-medium text-white">
                  contact
                </Link>
              </li>
              <li className="ml-4 hidden cursor-pointer lg:flex">
                {loggedIn ? (
                  <Link
                    href="/cont"
                    className="font-medium bg-[#7000FF] p-2 px-6 pr-8 rounded-[23.5px] text-[#fff] relative"
                  >
                    Cont
                  </Link>
                ) : (
                  <div
                    onClick={handleLoginModalOpening}
                    className="font-medium bg-[#7000FF] p-2 px-6 pr-8 rounded-[23.5px] text-[#fff] relative"
                  >
                    login
                  </div>
                )}
                <span
                  onClick={handleCartOpening}
                  className="text-[#fff] p-[6px] bg-[#7000FF] absolute -right-5 rounded-full border-[4px] top-[-3px] border-[#260056]"
                >
                  <AiOutlineShoppingCart size={24} />
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {showLoginModal ? (
        <LoginModal handleModalClosingClick={handleLoginModalClosing} />
      ) : null}
      {showCart ? (
        <CartModal handleModalClosingClick={handleCartClosing} />
      ) : null}
    </>
  );
};

export default Header;
