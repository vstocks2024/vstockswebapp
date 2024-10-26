"use client";
import { MdClose } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { LuSquare } from "react-icons/lu";
import { LuRectangleVertical } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { IoColorPaletteOutline } from "react-icons/io5";

import { useFilter } from "@/context/filter";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function AnimationFilters() {
  const filter = useFilter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);

  const handleLicenseFree = () => {
    if (sp.get("license") === "free") {
      sp.set("license", "all");
    } else {
      sp.set("license", "free");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

  const handleLicensePremium = () => {
    if (sp.get("license") === "premium") {
      sp.set("license", "all");
    } else {
      sp.set("license", "premium");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handleOrientationSquare = () => {
    if (sp.get("orientation") === "square") {
      sp.set("orientation", "all");
    } else {
      sp.set("orientation", "square");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handleOrientationFacebookPost = () => {
    if (sp.get("orientation") === "horizontal") {
      sp.set("orientation", "all");
    } else {
      sp.set("orientation", "horizontal");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handleOrientationVertical = () => {
    if (sp.get("orientation") === "vertcial") {
      sp.set("orientation", "all");
    } else {
      sp.set("orientation", "vertical");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handlFileTypeAnimation = () => {
    sp.set("format", "all");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handlFileTypeWEBM = () => {
    if (sp.get("format") === "webm") {
      sp.set("format", "all");
    } else {
      sp.set("format", "webm");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

  const handlFileTypeMP4 = () => {
    if (sp.get("format") === "mp4") {
      sp.set("format", "all");
    } else {
      sp.set("format", "mp4");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

  return (
    <>
      <div
        className={`border rounded-r-xl p-1 left-0 shadow-xl mr-2 top-0 w-full h-full z-10 md:relative md:max-w-[30%] md:z-0 md:top-0 md:left-0 bg-white flex flex-col ${
          filter.openAnimationFilter === true ? "flex" : "hidden"
        } `}
      >
        <div className="flex flex-row md:hidden">
          <div className="flex items-center w-1/2">
            <button onClick={() => filter.setOpenAnimationFilter(!filter.openAnimationFilter)}>
              <MdClose size={22} />
            </button>
            &nbsp;&nbsp;
            <span className="text-lg">Fliter</span>
          </div>
          <div className="flex justify-end items-end w-1/2">
            <button className="border hover:text-white hover:border-white hover:bg-[#2E67DD] border-black p-1 rounded-lg">
              Clear All
            </button>
          </div>
        </div>
        <div className="flex justify-start w-full px-2 flex-col gap-2 py-3">
          <div className="flex p-1 items-center">
            <FaCrown size={22} />
            &nbsp;&nbsp;<span className=" text-lg font-semibold">License</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleLicenseFree}
              className={`${
                sp.get("license") === "free"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              } border  hover:text-white hover:border-white hover:bg-[#2E67DD] border-black px-2 py-1 rounded-lg`}
            >
              Free
            </button>
            <button
              onClick={handleLicensePremium}
              className={`${
                sp.get("license") === "premium"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center border-black border px-2 py-1 text-lg rounded-lg`}
            >
              <FaCrown size={18} />
              &nbsp;<span className="">Premium</span>
            </button>
          </div>
        </div>
        <div className=" flex flex-col w-full gap-2 justify-start px-2 py-3 ">
          <div className="flex items-center">
            <i className="size-5">
              <img src="../../images/orientation-icon.png" />
            </i>
            &nbsp;&nbsp;
            <span className="text-lg font-semibold">Orientation</span>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleOrientationFacebookPost}
              className={`${
                sp.get("orientation") === "horizontal"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
            >
              <h4 className="text-base">Horizontal</h4>&nbsp;
              <LuRectangleHorizontal size={18} />
            </button>
            <div className="flex flex-row gap-2">
              <button
                onClick={handleOrientationVertical}
                className={`${
                  sp.get("orientation") === "vertical"
                    ? "bg-[#2E67DD] text-white border-none"
                    : "bg-white"
                } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
              >
                <h4 className="text-base">Vertical</h4>&nbsp;
                <LuRectangleVertical size={18} />
              </button>
              <button
                onClick={handleOrientationSquare}
                className={` ${
                  sp.get("orientation") === "square"
                    ? "bg-[#2E67DD] text-white border-none"
                    : "bg-white"
                } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
              >
                <h4 className="text-base">Square</h4>&nbsp;
                <LuSquare size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <CiFileOn size={18} />
            &nbsp;&nbsp;<h4 className="text-lg font-semibold">File Type</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlFileTypeAnimation}
              className={`${
                sp.get("format") === "all"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              }  hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              All
            </button>
            <button
              onClick={handlFileTypeMP4}
              className={`${
                sp.get("format") === "mp4"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              } hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              MP4
            </button>
            <button
              onClick={handlFileTypeWEBM}
              className={`${
                sp.get("format") === "webm"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              } hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              WEBM
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <IoColorPaletteOutline size={18} />
            &nbsp;&nbsp;<h4 className="text-lg font-semibold">Colors</h4>
          </div>
          <div className="grid grid-cols-6 gap-2 justify-center items-center">
            <button className="w-6 h-6 bg-red-600 flex justify-center items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-green-800 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-gray-300 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-yellow-200 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-orange-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-yellow-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-blue-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-violet-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-amber-400 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-green-400  items-center  rounded-full"></button>
          </div>
        </div>
      </div>
    </>
  );
}
