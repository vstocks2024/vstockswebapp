"use client"
import { useRouter } from "next/navigation";
import AddButton from "./AddButton";

export default function AddCard(){
    const router=useRouter();
   return <>
    <button
    onClick={()=>router.push("/template")}
    className="w-[200px] h-[150px] shadow-cardshadow rounded-[30px] gap-y-5 justify-center inline-flex flex-col items-center"
  >
    <AddButton/>
    <h4 className="text-center not-italic text-[#000] font-medium font-poppins600 text-[14px]">
      Create from Scratch
    </h4>
  </button></>
}