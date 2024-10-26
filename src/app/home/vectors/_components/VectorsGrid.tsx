"use client";
import React, { Suspense, useEffect ,useRef } from "react";
import { z } from "zod";
import VectorCard from "./VectorCard";
import { nanoid } from "nanoid";
import { Modal } from "flowbite-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useModal } from "@/context/modal";
import Link from "next/link";
import { FaArrowDownLong, FaHeart } from "react-icons/fa6";
import { PiShare, PiShareFatFill } from "react-icons/pi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import {
  ChevronLeft,
  ChevronRight,
  CircleArrowLeftIcon,
  CircleArrowRightIcon,
} from "lucide-react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import VectorFilters from "./VectorFilters";
import SortedBy from "./SortedBy";
import { useFilter } from "@/context/filter";
import { useSort } from "@/context/sort";
import { Vector_Url } from "@/lib/types";
import SimilarVectors from "./SimilarVectors";
import ModalCloseButton from "./ModalCloseButton";
import RelatedTag from "./RelatedTag";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function VectorsGrid({
  vectorUrlData,
}: {
  vectorUrlData: z.infer<typeof Vector_Url>[];
}) {
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  const modal = useModal();
  const filter = useFilter();
  const sort = useSort();
  const [likes, setLikes] = useState<boolean>(false);
  modal.setVectorItemsArray(vectorUrlData);
  


  const handlePrevVector = () => {
    const currentIndex = modal.vectorItemsArray?.findIndex(
      (element: z.infer<typeof Vector_Url>) =>
        element.vector_id === modal.vectorItem.vector_id
    );

    if (currentIndex === 0) {
      modal.setVectorItem(
        modal.vectorItemsArray[modal.vectorItemsArray.length - 1]
      );
    } else {
      modal.setVectorItem(modal.vectorItemsArray[currentIndex - 1]);
    }
  };
  const handleNextVector = () => {
    const currentIndex = modal.vectorItemsArray?.findIndex(
      (element: z.infer<typeof Vector_Url>) =>
        element.vector_id === modal.vectorItem.vector_id
    );

    if (currentIndex === modal.vectorItemsArray.length - 1) {
      modal.setVectorItem(modal.vectorItemsArray[0]);
    } else {
      modal.setVectorItem(modal.vectorItemsArray[currentIndex + 1]);
    }
  };


  const handleDownloadJPEG = async () => {
    console.log(modal.vectorItem.url);
    await axios
      .get(`${modal.vectorItem.url}`, {
        responseType: "blob",
      })
      .then(async (obj) => {
        const url = URL.createObjectURL(obj.data);
        const a = document.createElement(`a`);
        a.href = url;
        a.download = `${Date.now()}`;
        a.style.display = `none`;
        document.body.append(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const handleModalSize = () => {
    if (typeof window != "undefined") {
      if (window.innerWidth <= 640) modal.setSizeModal("md");
      else if (window.innerWidth > 640 && window.innerWidth <= 768)
        modal.setSizeModal("lg");
      else if (window.innerWidth > 768 && window.innerWidth <= 896)
        modal.setSizeModal("2xl");
      else if (window.innerWidth > 896 && window.innerWidth <= 1024)
        modal.setSizeModal("3xl");
      else if (window.innerWidth > 1024 && window.innerWidth <= 1152)
        modal.setSizeModal("4xl");
      else if (window.innerWidth > 1152 && window.innerWidth <= 1280)
        modal.setSizeModal("6xl");
      else if (window.innerWidth > 1280) modal.setSizeModal("7xl");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleModalSize, false);
    return () => {
      window.removeEventListener("resize", handleModalSize, false);
    };
  }, [modal.sizeModal]);

  
  useEffect(() => {
    if(!modal.vectorItem) return;
    sp.set("uuid", modal.vectorItem?.vector_id);
    router.push(`${pathname}?${sp.toString()}`);
  }, [modal.vectorItem]);



  return (
    <>
      <div className="items-start justify-between flex flex-row relative ">
        {filter.openFilter === true ? <VectorFilters key={nanoid()} /> : <></>}
        <div
          className={`grid grid-cols-2 w-full p-1 grid-flow-dense  place-items-center justify-evenly auto-rows-max  items-center gap-1 ${
            filter.openFilter
              ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          }`}
        >
          {vectorUrlData.map((item) => {
            return (
              <>
                <Suspense
                  fallback={<Skeleton className="w-[100px] h-[20px] rounded" />}
                >
                  <VectorCard key={nanoid()} item={item} />
                </Suspense>
              </>
            );
          })}
        </div>
        {sort.openSort ? <SortedBy /> : <></>}
      </div>

      <Modal
        show={modal.openModal}
        position={"center"}
        size={modal.sizeModal}
        onClose={() => modal.setOpenModal(false)}
        className="h-[90vh]"
      >
        <button
          onClick={handlePrevVector}
          className="absolute p-2 bg-transparent  hover:bg-white hover:bg-opacity-15 top-1/2  -left-12 cursor-pointer h-auto w-auto"
        >
          <ChevronLeft color="white" size={28} />
        </button>
        <Modal.Body>
          <div className="m-0.5  flex flex-col">
            <div className=" m-0.5  justify-start items-start flex flex-col  lg:flex-row">
              <div className="relative  m-0.5   flex flex-col items-center justify-center  w-full  lg:w-[60%] xl:w-[65%]">
                <Link className="cursor-pointer" href={"/"}>
                  <img
                    className={`h-[350px] md:h-[375px] lg:h-[400px] xl:h-[425px] 2xl:h-[450px] rounded-md  aspect-auto`}
                    alt=""
                    src={modal.vectorItem ? modal.vectorItem.url : ""}
                  />
                </Link>
                <div className="absolute inline-block -translate-x-[10%] -translate-y-[15%] top-[15%] right-[10%] items-center justify-center space-y-1 lg:hidden">
                  <FaHeart className="cursor-pointer" size={30} />
                  <PiShareFatFill size={30} />
                </div>
              </div>
              <div className="relative hidden lg:flex lg:flex-col lg:items-start lg:justify-between m-0.5 lg:h-auto lg:w-[40%] xl:w-[35%] xl:h-[425px] 2xl:h-[450px]">
                <div className=" m-0.5 p-1 flex flex-row items-center justify-start ">
                  <h3 className="text-lg font-bold">Name</h3>&nbsp;&nbsp;
                  <span className="text-sm font-normal text-wrap">
                    {modal.vectorItem ? modal.vectorItem.name : ""}
                  </span>
                </div>
                <div className=" m-0.5 p-1 ">
                  <h3 className="text-lg font-bold">Description</h3>
                  <p className="text-sm font-normal text-wrap">
                    {modal.vectorItem ? modal.vectorItem.description : ""}
                  </p>
                </div>
                <div className="m-0.5 w-full p-1 h-auto hidden lg:flex lg:flex-col items-center space-y-1">
                  <p className="text-base font-semibold  m-0.5 p-1">
                    Download or edit in your computer as
                  </p>

                  <div className="flex flex-row w-full items-center justify-around  m-0.5 p-1">
                    <Link
                    
                      className="bg-[#0BAC6F] inline-flex items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white"
                      download
                      href={"/"}
                    >
                      SVG&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>{" "}
                    <Link
                    // id="ajpeg"
                       href={modal.vectorItem ? modal.vectorItem.url :"/"}
                       download={true}
                      className="bg-[#0BAC6F] inline-flex items-center w-[30%]  justify-center p-1 rounded-full text-lg font-normal text-white"
                      // onClick={handleDownloadJPEG1}
                    >
                      JPEG&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>{" "}
                    <Link
                      className="bg-[#0BAC6F] inline-flex w-[30%] justify-center items-center p-1 rounded-full text-lg font-normal text-white"
                      href={"/"}
                    >
                      AI&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>
                  </div>
                </div>
                <div className=" hidden lg:flex lg:flex-col bg-[#F3F3F3] h-auto w-full  items-center space-y-1 px-3 py-1">
                  <p className="text-lg font-normal m-0.5">OR</p>
                  <div className=" inline-flex flex-row items-center w-full justify-around m-0.5 p-1">
                    <button className="rounded-full  p-2 text-base w-1/2 text-white   m-0.5 bg-[#0B85AC]">
                      Edit Online
                    </button>
                    <button className="rounded-full  p-2 text-base w-1/2 text-white  m-0.5 bg-[#0B85AC]">
                      Edit Animation
                    </button>
                  </div>
                </div>
                <div className="hidden lg:flex lg:flex-row w-auto items-center h-auto justify-center space-x-4 px-6 m-0.5 py-1">
                  <button
                    onClick={() => setLikes(!likes)}
                    className="p-2 flex-grow space-x-2 rounded-md  inline-flex items-center justify-center bg-[#F3F3F3]"
                  >
                    <h4 className="xl:text-lg lg:text-base font-medium">
                      Add to Likes
                    </h4>
                    <FaHeart size={20} />
                  </button>
                  <button className="p-2 flex-grow space-x-2 rounded-md  inline-flex items-center justify-center bg-[#F3F3F3]">
                    <h4 className="xl:text-lg lg:text-base font-medium">
                      Share Vector
                    </h4>
                    <PiShare size={20} />
                  </button>
                </div>
              </div>
            </div>
            <RelatedTag />

            <SimilarVectors />
          </div>
        </Modal.Body>
        <ModalCloseButton />
        <button
          onClick={handleNextVector}
          className="absolute bg-transparent hover:bg-white hover:bg-opacity-15 top-1/2 p-2 -right-12 cursor-pointer h-auto w-auto"
        >
          <ChevronRight color="white" size={28} />
        </button>
      </Modal>
    </>
  );
}
