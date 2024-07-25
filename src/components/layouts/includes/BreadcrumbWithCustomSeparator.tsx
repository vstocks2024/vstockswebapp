"use client";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { useParams } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

export function BreadcrumbWithCustomSeparator() {
  const params = useParams();
  const onType = params.type ? params.type[0].toUpperCase()+params.type.slice(1):"";
  return (
    <>  <div className="mx-1 px-1">
    <div className="mx-16 my-1 p-1 inline-flex flex-row text-white items-center justify-start gap-x-1">
      <FiHome color="#FFF" size={15}/>
      <h5 className="text-[16px] font-poppins600 font-medium not-italic">Home</h5>
      <MdKeyboardArrowRight color="#FFF" size={20}/>
      <h5 className="text-[16px] font-poppins600 font-medium not-italic">{onType}</h5>
    </div>
  </div></>
  );
}
