"use client";
import { useFilter } from "@/context/filter";
import { useSort } from "@/context/sort";
import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function CombineFilters() {
  const [isFilters, setIsFilters] = useState<boolean>(false);
  
  const sortBy = useSort();
  const filter=useFilter();
  return (
    <>
      <div className="flex flex-row  items-center  justify-between relative py-10">
        <div className="inline-flex flex-row items-center justify-between">
          <span className="px-1 py-2 cursor-pointer">
            <BsSliders size={20} />
          </span>
          <span className="font-semibold p-1 inline-flex flex-row items-center justify-between cursor-pointer">
            <h3 className=" text-mycolor5 font-poppins600 text-[20px] font-medium not-italic text-center">
              Filters
            </h3>
            <button
              onClick={() => {
                filter.setOpenAnimationFilter(!filter.openAnimationFilter)
              }}
              className=""
            >
              { filter.openAnimationFilter ? (
                <MdKeyboardArrowUp size={24} />
              ) : (
                <MdKeyboardArrowDown size={24} />
              )}
            </button>
          </span>
        </div>
        <div>
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
                  sortBy.setOpenSort(!sortBy.openSort)
                }}
              >
                {sortBy.openSort ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
