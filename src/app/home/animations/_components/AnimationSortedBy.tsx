"use client"

import { useSort } from "@/context/sort";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdCheck } from "react-icons/md";

export default function AnimationSortBy(){
     const [alpha,setAlpha]=useState(false);
     const [popular,setPopular]=useState(false);
     const [date,setDate]=useState(false);
     const [relevance,setRelevance]=useState(true);
     const searchParams=useSearchParams();
     const router=useRouter();
     const pathname=usePathname();
     const sp=new URLSearchParams(searchParams);
     const sortBy=useSort();
     

     const handleAlpha=()=>{
      setAlpha(true);
      setPopular(false);
      setDate(false);
      setRelevance(false);
      sortBy.setSort("Alphabetically")
      sp.set("sort","alpha")
      router.push(`${pathname}?${sp.toString()}`)

     }
     const handlePopular=()=>{
      setAlpha(false);
      setPopular(true);
      setDate(false);
      setRelevance(false);
      sortBy.setSort("Most Popular")
      sp.set("sort","popular")
      router.push(`${pathname}?${sp.toString()}`)

     }
     const  handleDate=()=>{
      setAlpha(false);
      setPopular(false);
      setDate(true);
      setRelevance(false);
      sortBy.setSort("Date")
      sp.set("sort","date")
      router.push(`${pathname}?${sp.toString()}`)

     }
const handleRelevance=()=>{
      setAlpha(false);
      setPopular(false);
      setDate(false);
      setRelevance(true);
      sortBy.setSort("Most Relevant")
      sp.set("sort","relevance")
      router.push(`${pathname}?${sp.toString()}`)

     }
     

    return (<>
    <div className=" absolute bg-white shadow-xl top-0 right-0 w-[250px] rounded-b-md flex flex-col justify-center items-start">
    <div><button className=" inline-flex flex-row items-center justify-between" onClick={handleAlpha}>{alpha===true ? <><MdCheck size={12}/>&nbsp;</>:null}<h3 className={` ${alpha===true ? "font-semibold":"font-normal"} text-[14px] font-poppins400`}>Alphabetically</h3></button></div>
      <div><button className=" inline-flex flex-row items-center justify-between"  onClick={handlePopular}>{popular===true ? <><MdCheck size={12}/>&nbsp;</>:null}<h3 className={`${popular===true ? " font-semibold":" font-normal"} text-[14px] font-poppins400`}>Most Popular</h3></button></div>
      <div><button className=" inline-flex flex-row items-center justify-between"  onClick={handleDate}>{date===true ? <><MdCheck size={12}/>&nbsp;</>:null}<h3 className={`${date===true ? "font-semibold":"font-normal"} text-[14px] font-poppins400`}>Date</h3></button></div>
      <div><button className=" inline-flex flex-row items-center justify-between"  onClick={handleRelevance}>{relevance===true ? <><MdCheck size={12}/>&nbsp;</>:null}<h3 className={`${relevance===true ? "font-semibold":" font-normal"} text-[14px] font-poppins400`}>Most Relevant</h3></button></div>
    </div>
    </>);
}