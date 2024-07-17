"use client"

import Link from "next/link";
import { useEffect } from "react";

export default function TemplatesDropDownCard(){
    const templatedropdownarr=[{id:1,name:"Dussehra"},
        {id:2,name:"Diwali"},
        {id:3,name:"Christmas"},
        {id:4,name:"Pongal"},
        {id:5,name:"Holi"},
        {id:6,name:"Ugadhi"},
        {id:7,name:"Sankranti"},
        {id:8,name:"Education"},
        {id:9,name:"Health"},
        {id:10,name:"Jewellery"},
        {id:11,name:"Real Estate"},
        {id:12,name:"Retail"},
        {id:13,name:"Travel"},
        {id:14,name:"Others"},
        {id:15,name:"Birthday"},
        {id:16,name:"Wedding"},
        {id:17,name:"Invitation"},
        {id:18,name:"House Warming"},
        {id:19,name:"Occassion"},
        {id:20,name:"Birthday"},
        {id:21,name:"Wedding"},
        {id:22,name:"Invitation"},
        {id:23,name:"House Warming"},
        {id:24,name:"Festival"},
        {id:25,name:"Occassion"}
        ]

        useEffect(()=>{
        // Use this useEffect hook to run fetch of actual categories in future 
        },[])
    return <>
    <div className="absolute delay-200  transition  ease-in-out  top-[70px] p-8 h-[300px] z-20 bg-white w-[720px] -left-[200px] shadow-templatedropdown rounded-[25px] border-solid border border-black">
             <div className=""></div>
              <div className=" h-full grid gap-1 grid-cols-4 px-4 py-2 items-start justify-between">
                {
                 templatedropdownarr.map((item)=>{
                    return(<>
                    <div key={`${item.name}_${item.id}`} className=" hover:scale-110  duration-100 ease-in-out transition inline-flex flex-row items-center justify-start">
                        <Link href={encodeURI(`http://localhost:3000/home/animations?category=${encodeURIComponent(item.name)}&page=1&limit=2`)}>
                        <h1 className=" hover:underline text-black font-poppins400 text-[16px] font-medium">{item.name}</h1>
                        </Link>
                        </div>
                    </>);
                 })
                }
              </div>
             </div></>
}