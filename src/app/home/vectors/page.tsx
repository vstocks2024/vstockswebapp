"use client";

import Image from "next/image";
import React, { useState, Suspense } from "react";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineStepForward,
} from "react-icons/ai";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {
  IoCaretBackCircleOutline,
  IoCaretForwardCircleOutline,
} from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Filters from "../../../components/Filters";
import SortBy from "../../../components/SortedBy";
export type VectorType = {
  id: number;
  url: string;
  description: string;
};
import { CiHeart } from "react-icons/ci";
import { PiShare, PiShareFatFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { RiLoaderFill } from "react-icons/ri";
import Pagination from "../../../components/Pagination";
import getFilteredVectors from "../../../functions/getFilteredVectors";
import { useHome } from "../../../context/home";
import AddCard from "../../../components/AddCard";
import { useSort } from "../../../context/sort";
import MainLayout from "@/components/layouts/MainLayout";


export default function VectorsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const whichVectors = getFilteredVectors({ currentPage });
  console.log(whichVectors);
  const pathname = usePathname();
  const router = useRouter();
  const [isFilters, setIsFilters] = useState<boolean>(false);
  const [isSortBy, setIsSortBy] = useState<boolean>(false);
  const [openVector, setOpenVector] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  var whichVector = whichVectors[index];
  const [likeColor, setLikeColor] = useState<boolean>(false);

  const next = () => setIndex((index + 1) % whichVectors.length);
  const prev = () =>
    setIndex(
      index === 0 ? whichVectors.length - 1 : (index - 1) % whichVectors.length
    );
  const tpages = 3;
  // whichVectors.length % 30 === 0
  //   ? (whichVectors.length % 30)-1
  //   : (whichVectors.length % 30);
  const home = useHome();
  const sortBy=useSort();
  const [onVectors, setOnVectors] = useState<boolean>(true);
  const [onAnimations, setOnAnimations] = useState<boolean>(false);
  const [onPosters, setOnPosters] = useState<boolean>(false);
  const [onBrochures, setOnBrochures] = useState<boolean>(false);

const handleVectors=()=>{
    
    router.push("/home/vectors");
  }

  const handleAnimations=()=> {
    router.push("/home/animations")
  }
const handlePosters=()=>{
    router.push("/home/posters")
  }

  const handleBrochures=()=>{
    router.push("/home/brochures")

  }

  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
          <div className="flex mx-20 py-[50px] flex-col  gap-x-10 md:flex-row  justify-center items-center">
            <button
              type="button"
              onClick={() => {
                router.push("/")
              }}
              className={`${
                onVectors === true
                  ? "bg-[#2E67DD] text-white font-medium border-white"
                  : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
              } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
            >
              Vectors
            </button>
            <button
              type="button"
              onClick={() => {
                  router.push("/home/animations");
              }}
              className={`${
                onAnimations === true
                  ? "bg-[#2E67DD] text-white font-medium border-white"
                  : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
              } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
            >
              Animations
            </button>
            <button
              type="button"
              onClick={() => {
                router.push("/home/posters");
              }}
              className={`${
                onPosters === true
                  ? "bg-[#2E67DD] text-white font-medium border-white"
                  : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
              } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
            >
              Posters
            </button>
            <button
              type="button"
              onClick={() => {
                handleBrochures();
              }}
              className={`${
                onBrochures === true
                  ? "bg-[#020202] text-white font-medium border-white"
                  : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
              } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border `}
            >
              Brouchers
            </button>
          </div>

          {/* Filter and SortBy Component Section */}

          <div className="flex mx-20 py-4  items-center   justify-between">
            <div className="inline-flex flex-row items-center justify-between m-1">
              <span className="px-1 py-2 cursor-pointer">
                <BsSliders size={20} />
              </span>
              <span className="font-semibold p-1 inline-flex flex-row items-center justify-between cursor-pointer">
                <h3 className=" text-mycolor5 font-poppins600 text-[20px] font-medium not-italic text-center">
                  Filters
                </h3>
                <button onClick={() => {setIsFilters(!isFilters);
                  setIsSortBy(false);
                }} className="">
                  {isFilters ? (
                    <MdKeyboardArrowUp size={24} />
                  ) : (
                    <MdKeyboardArrowDown size={24} />
                  )}
                </button>
              </span>
            </div>
            <div className="inline-flex flex=-row items-center justify-between">
              <span className="p-1 inline-flex">
                <h3 className="text-mycolor5 font-poppins600 text-[20px] font-normal not-italic text-center">
                  Sort By&nbsp;&nbsp;&nbsp;
                  <b className=" not-italic text-[20px] font-poppins600 font-medium">
                  {sortBy.sort}
                  </b>
                </h3>
                <button className="" onClick={() =>{setIsSortBy(!isSortBy);
                  setIsFilters(false);}
                }>
                  {isSortBy ? (
                    <MdKeyboardArrowUp size={24} />
                  ) : (
                    <MdKeyboardArrowDown size={24} />
                  )}
                </button>
              </span>
            </div>
          </div>

          {/* End of Filter and SortBy Component Section */}

          <div
            className={`md:relative mx-20   ${
              (isFilters === true || isSortBy===true) ? "flex flex-row" : null
            } `}
          >
            {isFilters ? <Filters /> : null}

            {/* Vectors Tab from here */}
            {onVectors === true &&
            onAnimations === false &&
            onPosters === false &&
            onBrochures === false ? (
            <div className="items-center justify-start flex flex-col my-2">
                <div
                  className={`grid grid-cols-2 w-full p-1  place-items-center place-content-evenly auto-rows-max justify-center items-center gap-2 ${
                    (isFilters === true || isSortBy===true)
                      ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5"
                      : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                  }`}
                >
                  
                  {whichVectors.map((vector) => {
                    return (
                      
                      <button
                        key={vector.id}
                        onClick={() => {
                          setOpenVector(true);
                          setIndex(vector.id);
                        }}
                        className="flex-shrink flex items-center  border hover:border-gray-200 hover:shadow-xl rounded mx-auto"
                      >
                        <img
                          className="object-fill rounded cursor-pointer"
                          src={vector.url}
                        />
                      </button>
                      
                    );
                  })}
                  {openVector === true ? (
                    <div className="fixed flex flex-grow items-center justify-center p-2 md:p-2  top-0 left-0 w-full h-full bg-black bg-opacity-50">
                      <div
                        className={`fixed z-20 flex flex-row rounded-md  bg-white w-full  sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:max-w-[70%]  h-[95vh]`}
                      >
                        <div className="border cursor-pointer border-red-400 m-0.5 flex items-center">
                          <button
                            className="border border-blue-500 m-0.5"
                            onClick={prev}
                          >
                            <AiFillStepBackward size={25} />
                          </button>
                        </div>
                        <div className="border border-green-500 m-0.5 w-full flex flex-col">
                          <div className="border border-blue-500 m-0.5  justify-start items-start flex flex-col  lg:flex-row">
                            <div className="relative border border-amber-500 m-0.5   flex flex-col items-center justify-center  w-full  lg:w-[50%]">
                              <Link className="cursor-pointer" href={"/"}>
                                <img
                                  className="border cursor-pointer rounded-md w-[350px] h-[350px] md:w-[375px] md:h-[375px] xl:w-[400px] xl:h-[400px] border-black"
                                  alt=""
                                  src={whichVector ? whichVector?.url : ""}
                                />
                              </Link>
                              <div
                                className="
                             absolute inline-block top-[15%] right-[10%] items-center justify-center space-y-1 lg:hidden"
                              >
                                <FaHeart
                                  className="cursor-pointer"
                                  onClick={() => setLikeColor(!likeColor)}
                                  color={
                                    likeColor === true ? "#E91E63" : "#000000"
                                  }
                                  size={30}
                                />
                                <PiShareFatFill size={30} />
                              </div>
                            </div>
                            <div className="relative hidden lg:flex lg:flex-col  border border-amber-500 m-0.5  lg:h-auto lg:w-[50%]">
                              <div className="border  border-black m-0.5 p-1 ">
                                <h3 className="text-lg font-bold">
                                  Description
                                </h3>
                                <p className="text-sm font-normal text-wrap">
                                  {whichVector
                                    ? whichVector?.description
                                    : null}
                                </p>
                              </div>
                              <div className="border border-black m-0.5 p-1 h-auto hidden lg:flex lg:flex-col items-center space-y-1">
                                <p className="text-base font-semibold border border-blue-600 m-0.5 p-1">
                                  Download or edit in your computer as
                                </p>

                                <div className="inline-flex w-full items-center justify-around border border-red-600 m-0.5 p-1">
                                  <Link
                                    className="bg-[#0BAC6F] inline-flex items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white"
                                    download
                                    href={"#"}
                                  >
                                    PNG&nbsp;
                                    <FaArrowDownLong
                                      size={15}
                                      color="#FFFFFF"
                                    />
                                  </Link>{" "}
                                  <Link
                                    className="bg-[#0BAC6F] inline-flex items-center w-[30%]  justify-center p-1 rounded-full text-lg font-normal text-white"
                                    download
                                    href={"/"}
                                  >
                                    JPEG&nbsp;
                                    <FaArrowDownLong
                                      size={15}
                                      color="#FFFFFF"
                                    />
                                  </Link>{" "}
                                  <Link
                                    className="bg-[#0BAC6F] inline-flex w-[30%] justify-center items-center p-1 rounded-full text-lg font-normal text-white"
                                    download={
                                      whichVector ? whichVector?.url : null
                                    }
                                    href={"/"}
                                  >
                                    PNG&nbsp;
                                    <FaArrowDownLong
                                      size={15}
                                      color="#FFFFFF"
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className=" hidden lg:flex lg:flex-col bg-[#F3F3F3] h-auto border border-black  items-center space-y-1 px-3 py-1">
                                <p className="text-lg font-normal border m-0.5 border-green-400">
                                  OR
                                </p>
                                <div className=" inline-flex flex-row items-center w-full justify-around border border-black m-0.5 p-1">
                                  <button
                                    className="rounded-full  p-2 text-base w-1/2 text-white border border-red-600  m-0.5 bg-[#0B85AC]"
                                    onClick={() => router.push("/")}
                                  >
                                    Edit Online
                                  </button>
                                  <button
                                    className="rounded-full  p-2 text-base w-1/2 text-white border border-red-600  m-0.5 bg-[#0B85AC]"
                                    onClick={() => router.push("/")}
                                  >
                                    Edit Animation
                                  </button>
                                </div>
                              </div>
                              <div className="hidden lg:flex lg:flex-row w-auto items-center h-auto justify-center space-x-4 px-6  border border-black m-0.5 py-1">
                                <button
                                  onClick={() => setLikeColor(!likeColor)}
                                  className="p-2 flex-grow space-x-2 rounded-md border border-black inline-flex items-center justify-center bg-[#F3F3F3]"
                                >
                                  <h4 className="xl:text-lg lg:text-base font-medium">
                                    Add to Likes
                                  </h4>
                                  <FaHeart
                                    color={
                                      likeColor === true ? "#E91E63" : "#000000"
                                    }
                                    size={20}
                                  />
                                </button>
                                <button className="p-2 flex-grow space-x-2 rounded-md border border-black inline-flex items-center justify-center bg-[#F3F3F3]">
                                  <h4 className="xl:text-lg lg:text-base font-medium">
                                    Share Vector
                                  </h4>
                                  <PiShare size={20} />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="border border-blue-500 m-0.5 flex flex-col">
                            <div className="border border-red-500 m-0.5 ">
                              <h6 className="text-[10px] m-0.5  font-semibold border border-black">
                                Related Tags
                              </h6>
                              <div className="border border-black   inline-flex  space-x-2 flex-row ">
                                <button className="rounded-full border-2 border-black bg-[#EDEDED] inline-flex flex-row justify-center items-center space-x-1 px-2  py-0.5">
                                  <span className="text-[8px]">
                                    Dusshera Vectors
                                  </span>
                                  <HiOutlineMagnifyingGlass size={10} />
                                </button>
                                <button className="rounded-full border-2 border-black bg-[#EDEDED] inline-flex flex-row justify-center items-center space-x-1 px-2 py-0.5">
                                  <span className="text-[8px]">
                                    Diwali Vectors
                                  </span>
                                  <HiOutlineMagnifyingGlass size={10} />
                                </button>
                                <button className="rounded-full border-2 border-black bg-[#EDEDED] inline-flex flex-row justify-center items-center space-x-1 px-2 py-0.5">
                                  <span className="text-[8px]">
                                    Halloween Vectors
                                  </span>
                                  <HiOutlineMagnifyingGlass size={10} />
                                </button>
                                <button className="rounded-full border-2 border-black bg-[#EDEDED] inline-flex flex-row justify-center items-center space-x-1 py-0.5 px-2">
                                  <span className="text-[8px]">
                                    Christmas Vectors
                                  </span>
                                  <HiOutlineMagnifyingGlass size={10} />
                                </button>
                              </div>
                            </div>
                            <div className="border border-red-500 m-0.5">
                              <h4 className="text-[10px] border border-green-500 m-0.5 font-semibold">
                                More like this
                              </h4>

                              <div className="flex flex-row border  gap-2 m-0.5 p-0.5 border-black ">
                                <button
                                  onClick={() => {
                                    setIndex(30);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/30/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(30);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/30/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(27);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/27/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(28);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/28/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(29);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/29/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(30);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/30/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(30);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/30/100/100"}
                                    alt=""
                                  />
                                </button>
                                <button
                                  onClick={() => {
                                    setIndex(30);
                                  }}
                                >
                                  <img
                                    className="border w-[95px] h-[95px] rounded-md aspect-auto border-teal-600"
                                    src={"https://picsum.photos/id/30/100/100"}
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative border cursor-pointer border-red-400 m-0.5 flex items-center">
                          <AiOutlineClose
                            onClick={() => {
                              setOpenVector(false);
                            }}
                            size={25}
                            className="border border-black m-0.5 p-1 absolute top-0"
                            color="#000000"
                          />
                          <button
                            className="border border-blue-500 m-0.5"
                            onClick={next}
                          >
                            <AiOutlineStepForward size={25} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* New Pagination Code */}
                <div className="my-10 flex w-full justify-center">
                  <Pagination totalPages={10} />
                </div>
              </div>
            ) : null}
            {/* Vectors Tab Ends Here */}

       
          {/* SortBy Component Conditional Rendering */}
          {isSortBy===true ? <SortBy/>:null}
          {/* End of SortBy Component Conditional Rendering */}
          </div>
     </div>
        </main>
      </MainLayout>
    </>
  );
}
