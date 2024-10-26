"use client";

import { useState } from "react";

import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";
import { useUser } from "@/context/user";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import TemplatesDropDownCard from "@/components/TemplatesDropDownCard";

export default function NavBar() {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [template, setTemplate] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [templatemenu, setTemplateMenu] = useState<boolean>(false);
  const router = useRouter();
  const user = useUser();

  // console.log(user);

  const isLoggedIn = () => {
    if (user && user?.id) {
      return (
        <button
          onClick={() => setIsMenu(!isMenu)}
          className="text-[14px] inline-flex flex-row items-center justify-between  border-none font-poppins600 font-semibold gap-x-1 px-0.5"
        >
          <span>
            <Image
              className="rounded-full"
              width={28}
              height={28}
              alt=""
              src={user.picture}
            />
          </span>

          <span>{user.name}</span>
          <span>
            {" "}
            {isMenu === true ? (
              <BsChevronUp size={15} />
            ) : (
              <BsChevronDown size={15} />
            )}
          </span>
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          router.push("/login");
          setHamburger(false);
        }}
        className="text-[20px] hover:transition-all hover:duration-200 hover:font-semibold  hover:text-white   dark:border-white dark:hover:bg-white dark:hover:text-black rounded-[44px] font-poppins400    hover:bg-white border border-white  m-1 px-8 py-1  inline-flex flex-row items-center justify-between gap-x-[15px]"
      >
        {" "}
        <span>
          <FaRegUser size={18} />
        </span>
        <span>Login</span>
      </button>
    );
  };

  return (
    <div
      className={`bg-[#2E67DD] mx-16    flex-grow  flex flex-col items-center justify-center lg:py-5`}
    >
      {hamburger ? (
        <>
          <div className="absolute text-black top-0 left-0 w-[70%] z-10  h-svh bg-[#EDEDED]  flex flex-col md:hidden">
            <div className="inline-flex flex-shrink-0 flex-row items-center justify-between border border-green-500 m-1 p-1">
              <Link href={"/"}>
                <h1 className="text-[36px] font-semibold font-poppins not-italic text-black cursor-pointer text-nowrap">
                  V&nbsp;stocks
                </h1>
              </Link>
              <MdClose
                className="cursor-pointer"
                onClick={() => setHamburger(!hamburger)}
                size={25}
              />
            </div>
            <div className="border border-black m-1">
              <nav className="border border-orange-500 m-1">
                <ul className="border border-blue-500 m-1 text-lg flex flex-col items-start  justify-around">
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/home");
                    }}
                  >
                    <li className="border  border-green-500 m-1 p-1">Home</li>
                  </button>
                  <button
                    className="border border-pink-500 m-1 w-full"
                    onClick={() => router.push("/")}
                  >
                    {" "}
                    <li className="inline-flex flex-row w-full border border-green-500 m-1 p-1  items-center justify-between">
                      <span className="border border-red-500 m-0.5 p-0.5">
                        Template
                      </span>
                      <span className="border border-red-500 m-0.5 p-0.5">
                        <MdArrowForwardIos size={15} />
                      </span>
                    </li>
                  </button>
                  <button
                    className="border border-pink-500 m-1 w-full"
                    onClick={() => {
                      router.push("/projects");
                    }}
                  >
                    <li className=" w-full items-start justify-start border border-green-500 m-1 p-1">
                      My Projects
                    </li>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/premium");
                    }}
                  >
                    <li className="border border-green-500 m-1 p-1">Premium</li>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    <li className="border border-green-500 m-1 p-1">
                      {user && user?.id ? user?.name : "Login"}
                    </li>
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </>
      ) : null}
      <div className="lg:hidden   p-1 w-full flex flex-row items-center justify-between">
        <div className="m-1 p-1 border border-green-500">
          <Link
            className="text-[22px] font-semibold font-poppins600 not-italic text-white cursor-pointer text-nowrap"
            href={"/"}
          >
            V&nbsp;stocks
          </Link>
        </div>
        <div className=" m-1 p-1 inline-block cursor-pointer ">
          <button
            onClick={() => setHamburger(!hamburger)}
            className="m-1 p-1 rounded-md border border-white"
          >
            <div className="line h-[3px] w-7 my-1 rounded-full bg-white dark:bg-white "></div>
            <div className="line h-[3px] w-7 my-1 rounded-full bg-white dark:bg-white "></div>
            <div className="line h-[3px] w-7 my-1 rounded-full bg-white dark:bg-white "></div>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:my-3  justify-between items-center ">
        <div className="lg:relative my-1">
          <nav className="flex flex-row items-center justify-center lg:gap-x-[82px] ">
            <ul className="text-white  font-light lg:gap-x-[82px]   dark:text-white inline-flex flex-row  justify-around">
              <button
                type="button"
                onClick={() => {
                  router.push("/");
                }}
              >
                <li className=" mb-6 cursor-pointer ">
                <img
            className="w-[135.75px] h-[37.5px]"
            src="/logo/vstocks2.png"
            />
                </li>
              </button>
              </ul>
              <ul className="text-white  font-light lg:gap-x-[82px]   dark:text-white inline-flex flex-row  justify-around">
              <button
                type="button"
                onClick={() => {
                  router.push("/home");
                  setHamburger(!hamburger);
                }}
              >
                <li className=" font-poppins400  text-[20px] flex items-center m-1  cursor-pointer">
                  Home
                </li>
              </button>
              <button
                onClick={()=>{
                  setTemplate(!template);
                }}
                className="relative m-0.5 p-0.5"
              >
                <li className=" m-1 font-poppins400 text-[20px] gap-x-1  cursor-pointer inline-flex flex-row  items-center  justify-center">
                  <span className=" text-nowrap">Template</span>
                  <span>
                    {template ? (
                      <MdKeyboardArrowUp
                        className="duration-200  transition-all"
                        size={25}
                      />
                    ) : (
                      <MdKeyboardArrowDown
                        className="duration-200   transition-all"
                        size={25}
                      />
                    )}
                  </span>
                </li>
                {template === true ? <TemplatesDropDownCard /> : null}
              </button>
              <button
                type="button"
                onClick={() => {
                  router.push("/projects");
                  setHamburger(!hamburger);
                }}
              >
                <li className="cursor-pointer font-poppins400 text-[20px]  text-nowrap flex items-center  m-1 ">
                  My Projects
                </li>
              </button>
              <button
                type="button"
                onClick={() => {
                  router.push("/premium");
                  setHamburger(!hamburger);
                }}
              >
                <li className="cursor-pointer font-poppins400 text-[20px]  m-1  flex items-center ">
                  Premium
                </li>
              </button>
              <li className="relative inline-flex items-center justify-between">
                {isLoggedIn()}
                <div
                  id="AuthDropdown"
                  className={`absolute bg-white w-[110px] text-[#333333] z-40 top-11 left-16 rounded-b-md border shadow-lg
                        ${isMenu ? "visible" : "hidden"}
                    `}
                >
                  <ul className="bg-white">
                    <li className="text-[11px] font-poppins600 py-1 px-2 w-full hover:underline text-[#2E67DD]  cursor-pointer">
                      <Link href="/profile">My Subscription</Link>
                    </li>
                    <li className="text-[11px] font-poppins600 py-1 px-2 w-full hover:underline text-[#2E67DD]  cursor-pointer">
                      <Link href="/orders">My Orders</Link>
                    </li>
                    <li
                      onClick={() => {
                        user.signOut();
                        setIsMenu(false);
                      }}
                      className="text-[11px] font-poppins600 py-1 px-2 w-full hover:underline text-[#2E67DD] cursor-pointer"
                    >
                      Log Out
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
