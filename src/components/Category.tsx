"use client ";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Category() {
  return (
    <div className="my-1 mx-[64px] p-1">
      <div className="flex flex-col m-1 ">
        <div className="flex flex-col px-10 py-6 space-y-2 justify-center items-center">
          <h1 className=" text-center text-[20px]  sm:text-[25px] md:text-[30px] lg:[35px] xl:text-[40px] font-semibold text-[#1E1E1E]  font-poppins600  tracking-[0.0375rem] text-nowrap">
            Unleash Your Creativity with V-Stocks!
          </h1>
          <h4 className="text-center   text-[11px] sm:text-[13.5px] md:text-[16px] lg:text-[18.5px] xl:text-[22px] tracking-[0.02063rem] font-normal text-[#000]  text-wrap">
            Where Ideas Come to Life - Your One Stop Destination for Stunning
            Visual Content
          </h4>
        </div>
        <div className="flex flex-col items-center justify-around p-1 space-y-4 py-6 px-32 lg:flex-row lg:space-y-0 lg:space-x-2 lg:px-0 lg:justify-between lg:items-center lg:pt-[60px]">
          <Link href={"/home/vectors"}>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <img
                width={250}
                height={142}
                className="shadow-category min-w-[250px] min-h-[142px] bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="./images/ne1.svg"
                alt="Vector Graphics"/>

              <h3 className="text-center font-normal font-poppins400  leading-normal text-[16px] md:text-[20px]">
                Vector Graphics
              </h3>
            </div>
          </Link>
          <Link href={"/home/animations"}>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <img
                width={250}
                height={142}
                className="shadow-category bg-cover min-w-[250px] min-h-[142px]  bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="./images/ne2.svg"
                alt="Video Animations"
              />
              <h3 className="text-center font-normal font-poppins400  leading-normal text-[16px] md:text-[20px] ">
                Video Animations
              </h3>
            </div>
          </Link>
          <Link href={"/home/posters"}>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <img
                width={250}
                height={142}
                className="shadow-category  min-w-[250px] min-h-[142px] bg-[#D9D9D9]  bg-cover  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="./images/ne3.svg"
                alt="Posters"
              />
              <h3 className="text-center font-normal font-poppins400   leading-normal text-[16px] md:text-[20px]">
                Posters
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
