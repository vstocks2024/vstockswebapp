"use client";
import React, { Suspense, useEffect } from "react";
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
import { Skeleton } from "@/components/ui/skeleton"


export default function VectorsGrid({
  vectorUrlData,
}: {
  vectorUrlData: z.infer<typeof Vector_Url>[];
}) {
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

  const handleUpdateLikes = async () => {
    const resp = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/vectors/${modal.vectorItem.vector_id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleGetSimilarVectors = async () => {};

  const handleModalSize = () => {
    if (typeof window != "undefined") {
      if (window.innerWidth <= 640) modal.setSizeModal("sm");
      else if (window.innerWidth > 640 && window.innerWidth <= 768)
        modal.setSizeModal("md");
      else if (window.innerWidth > 768 && window.innerWidth <= 896)
        modal.setSizeModal("lg");
      else if (window.innerWidth > 896 && window.innerWidth <= 1024)
        modal.setSizeModal("2xl");
      else if (window.innerWidth > 1024 && window.innerWidth <= 1152)
        modal.setSizeModal("3xl");
      else if (window.innerWidth > 1152 && window.innerWidth <= 1280)
        modal.setSizeModal("4xl");
      else if (window.innerWidth > 1280 && window.innerWidth <= 1408)
        modal.setSizeModal("5xl");
      else if (window.innerWidth > 1408 && window.innerWidth <= 1536)
        modal.setSizeModal("6xl");
      else modal.setSizeModal("7xl");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleModalSize, false);
    return () => {
      window.removeEventListener("resize", handleModalSize, false);
    };
  }, [modal.sizeModal]);

  useEffect(() => {}, [modal.vectorItem]);

  useEffect(() => {}, [likes]);

  return (
    <>
      <div className="items-start justify-between flex flex-row relative ">
        {filter.openFilter === true ? <VectorFilters key={nanoid()} /> : <></>}
        <div
          className={`grid grid-cols-2 w-full p-1  place-items-center place-content-evenly auto-rows-max justify-center items-center gap-2 ${
            filter.openFilter
              ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          }`}
        >
          {vectorUrlData.map((item) => {
            return (
              <>
              <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded" />}>
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
      >
        <Button
          onClick={handlePrevVector}
          variant={"default"}
          className="absolute  bg-white bg-opacity-15 hover:bg-white hover:bg-opacity-30 top-1/2  -left-20 cursor-pointer h-auto w-auto "
        >
          <ChevronLeft size={30} />
        </Button>
        <Modal.Body>
          <div className="m-0.5  flex flex-col">
            <div className=" m-0.5  justify-start items-start flex flex-col  lg:flex-row">
              <div className="relative  m-0.5   flex flex-col items-center justify-center  w-full  lg:w-[50%]">
                <Link className="cursor-pointer" href={"/"}>
                  <img
                    className="cursor-pointer rounded-md w-[350px] h-[350px] md:w-[375px] md:h-[375px] xl:w-[400px] xl:h-[400px]"
                    alt=""
                    src={modal.vectorItem ? modal.vectorItem.url : ""}
                  />
                </Link>
                <div
                  className="absolute inline-block -translate-x-[10%] -translate-y-[15%] top-[15%] right-[10%] items-center justify-center space-y-1 lg:hidden"
                >
                  <FaHeart className="cursor-pointer" size={30} />
                  <PiShareFatFill size={30} />
                </div>
              </div>
              <div className="relative hidden lg:flex lg:flex-col m-0.5  lg:h-auto lg:w-[50%]">
                <div className=" m-0.5 p-1 ">
                  <h3 className="text-lg font-bold">Description</h3>
                  <p className="text-sm font-normal text-wrap">
                    {modal.vectorItem ? modal.vectorItem.description : ""}
                  </p>
                </div>
                <div className="m-0.5 p-1 h-auto hidden lg:flex lg:flex-col items-center space-y-1">
                  <p className="text-base font-semibold  m-0.5 p-1">
                    Download or edit in your computer as
                  </p>

                  <div className="inline-flex w-full items-center justify-around  m-0.5 p-1">
                    <Link
                      className="bg-[#0BAC6F] inline-flex items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white"
                      download
                      href={"/"}
                    >
                      SVG&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>{" "}
                    <a
                      className="bg-[#0BAC6F] inline-flex items-center w-[30%]  justify-center p-1 rounded-full text-lg font-normal text-white"
                      download={
                        modal.vectorItem ? modal.vectorItem.vector_id : "/"
                      }
                      href={modal.vectorItem ? modal.vectorItem.url : "/"}
                    >
                      JPEG&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </a>{" "}
                    <Link
                      className="bg-[#0BAC6F] inline-flex w-[30%] justify-center items-center p-1 rounded-full text-lg font-normal text-white"
                      href={"/"}
                    >
                      AI&nbsp;
                      <FaArrowDownLong size={15} color="#FFFFFF" />
                    </Link>
                  </div>
                </div>
                <div className=" hidden lg:flex lg:flex-col bg-[#F3F3F3] h-auto   items-center space-y-1 px-3 py-1">
                  <p className="text-lg font-normal m-0.5">
                    OR
                  </p>
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
        <Button
          onClick={handleNextVector}
          variant={"default"}
          className="absolute bg-white bg-opacity-15 hover:bg-white hover:bg-opacity-30 top-1/2 -right-20 cursor-pointer h-auto w-auto"
        >
          <ChevronRight size={30} />
        </Button>
      </Modal>
    </>
  );
}
