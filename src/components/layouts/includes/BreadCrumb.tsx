"use client";
import React, { Fragment } from 'react'
import { usePathname } from 'next/navigation';
import { FiHome } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CRUMB } from '@/lib/types';
import {z} from "zod";
import { nanoid } from 'nanoid';



export default function BreadCrumb() {
    const pathname=usePathname();
    const arr=pathname.split("/");
    let crumbs:z.infer<typeof CRUMB>[]=[];
    arr.forEach((ele)=>{
        crumbs=[...crumbs,{id:nanoid(),name:ele}]
    })
  return (
    <>  <div className="mx-1 px-1">
    <div className="mx-16 my-1 p-1 inline-flex flex-row text-white items-center justify-start gap-x-1">
      <FiHome color="#FFF" size={15}/>
      <h5 className="text-[16px] font-poppins600 font-medium not-italic">Home</h5>
      {
      crumbs && crumbs.map((crumb)=>{
       return (<Fragment key={crumb.id}><MdKeyboardArrowRight color="#FFF" size={20}/>
       <h5 className="text-[16px] font-poppins600 font-medium not-italic">{crumb.name}</h5></Fragment>)
       })
       }
    </div>
  </div></>
  )
}