"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
//import Pagination from "../../../components/Pagination";
import getFilteredVectors from "../../../functions/getFilteredVectors";
import { useHome } from "../../../context/home";
import AddCard from "../../../components/AddCard";
import { useSort } from "../../../context/sort";
import MainLayout from "@/components/layouts/MainLayout";

//////////////Shadcn UI Pagination starts/////////////

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

//////////////////////////////////////////////////////

export default function AnimationsPage({
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
  const [openAnimations, setOpenAnimations] = useState<boolean>(true);
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
  const sortBy = useSort();
  const [onVectors, setOnVectors] = useState<boolean>(false);
  const [onAnimations, setOnAnimations] = useState<boolean>(true);
  const [onPosters, setOnPosters] = useState<boolean>(false);
  const [onBrochures, setOnBrochures] = useState<boolean>(false);

  const handleVectors = () => {
    router.push("/home/vectors");
  };

  const handleAnimations = () => {
    router.push("/home/animations");
  };
  const handlePosters = () => {
    router.push("/home/posters");
  };

  const handleBrochures = () => {
    router.push("/home/brochures");
  };

  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
            <div className="flex mx-20 py-[50px] flex-col gap-y-5  md:gap-y-0 md:gap-x-10 md:flex-row  justify-center items-center">
              <button
                type="button"
                onClick={handleVectors}
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
                onClick={handleAnimations}
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
                onClick={handlePosters}
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
                onClick={handleBrochures}
                className={`${
                  onBrochures === true
                    ? "bg-[#2E67DD] text-white font-medium border-white"
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
                  <button
                    onClick={() => {
                      setIsFilters(!isFilters);
                      setIsSortBy(false);
                    }}
                    className=""
                  >
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
                  <button
                    className=""
                    onClick={() => {
                      setIsSortBy(!isSortBy);
                      setIsFilters(false);
                    }}
                  >
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
                isFilters === true || isSortBy === true ? "flex flex-row" : null
              } `}
            >
              {isFilters ? <Filters /> : null}

              {/* Animations Tab Starts Here  */}
              {onVectors === false &&
              onAnimations === true &&
              onPosters === false &&
              onBrochures === false ? (
                <div className="items-center justify-start flex flex-col  mx-0.5 my-2 p-1">
                  <div
                    className={`grid grid-cols-2 w-full p-1   place-items-center place-content-evenly auto-rows-max justify-center items-center gap-2 ${
                      isFilters === true || isSortBy === true
                        ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                        : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    }`}
                  >
                    <AddCard />
                    {/* Do Conditional Rendering od animations here  */}

                    {/* Conditional Rendering Ends here */}

                    {/* Animations Overlay page starts here  */}
                    {openAnimations === true ? (
                      <div className="fixed flex flex-grow items-center justify-center p-2 md:p-2  top-0 left-0 w-full h-full bg-black bg-opacity-50">
                        <div
                          className={`fixed z-20 flex flex-row rounded-md  bg-white w-[75%] h-[95vh]`}
                        >
                          <div className="absolute z-10 -right-1  border cursor-pointer border-red-400 m-0.5 flex items-center">
                            <AiOutlineClose
                              onClick={() => {
                                setOpenAnimations(false);
                              }}
                              size={30}
                              className="m-0.5 p-1 absolute top-0"
                              color="white"
                            />
                          </div>

                          <Carousel className="border border-red-500 m-1 p-1  w-full">
                            <CarouselContent className="basis-[100%]">
                              <CarouselItem className="border border-black w-full basis-[100%]">
                                <div className=" bg-green-500 ml-1 w-[100px] h-[100px]"></div>
                              </CarouselItem>
                              <CarouselItem className="border border-black basis-[100%]">
                                <div className=" bg-red-500 ml-1 w-[100px] h-[100px]"></div>
                              </CarouselItem>
                              <CarouselItem className="border border-black basis-[100%]">
                                <div className=" bg-pink-500 ml-1 w-[100px] h-[100px]"></div>
                              </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        </div>
                      </div>
                    ) : null}

                    {/* Animations Overlay page ends here  */}
                  </div>
                </div>
              ) : null}
              {/* Animations Tab Ends Here */}

              {/* SortBy Component Conditional Rendering */}
              {isSortBy === true ? <SortBy /> : null}
              {/* End of SortBy Component Conditional Rendering */}

              {/* Pagination Starts here */}
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              {/* Pagination Ends here */}
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
