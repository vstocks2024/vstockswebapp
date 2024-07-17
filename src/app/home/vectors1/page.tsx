"use client"
import AddCard from "@/components/AddCard";
import Filters from "@/components/Filters";
import SortBy from "@/components/SortedBy";
import MainLayout from "@/components/layouts/MainLayout";
import { useSort } from "@/context/sort";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function VectorsPage() {
  const router = useRouter();

  const [onVectors, setOnVectors] = useState<boolean>(true);
  const [onAnimations, setOnAnimations] = useState<boolean>(false);
  const [onPosters, setOnPosters] = useState<boolean>(false);
  const [onBrochures, setOnBrochures] = useState<boolean>(false);
  const [isFilters, setIsFilters] = useState<boolean>(false);
  const [isSortBy, setIsSortBy] = useState<boolean>(false);
  const sortBy = useSort();

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

              {/* Vectors Tab Starts Here  */}
              {onVectors === true &&
              onAnimations === false &&
              onPosters === false &&
              onBrochures === false ? (
                <div className="items-center justify-start flex flex-col  mx-0.5 my-2 p-1">
                  <div
                    className={`grid grid-cols-2 w-full  p-1   place-items-center place-content-evenly auto-rows-max justify-center items-center gap-2 ${
                      isFilters === true || isSortBy === true
                        ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                        : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    }`}
                  >
                    
                    {/* Write the code here for carousel */}


                    {/* End of code for carousel */}

                  </div>
                </div>
              ) : null}
              {/* Vectors Tab Ends Here */}

              {/* SortBy Component Conditional Rendering */}
              {isSortBy === true ? <SortBy /> : null}
              {/* End of SortBy Component Conditional Rendering */}
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
