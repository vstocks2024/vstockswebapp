"use client";

import { supabase } from "@/utils/supabaseClient";
import axios from "axios";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useEffect, useState } from "react";
import {z} from "zod";


const cData=z.object({
    id:z.string(),
    name:z.string()
});

export default function TemplatesDropDownCard() {
  const [categoryData, setCategoryData] = useState<z.infer<typeof cData>[]>([]);

//   const categoryData = [
//     { id: 1, name: "Dussehra" },
//     { id: 2, name: "Diwali" },
//     { id: 3, name: "Christmas" },
//     { id: 4, name: "Pongal" },
//     { id: 5, name: "Holi" },
//     { id: 6, name: "Ugadhi" },
//     { id: 7, name: "Sankranti" },
//     { id: 8, name: "Education" },
//     { id: 9, name: "Health" },
//     { id: 10, name: "Jewellery" },
//     { id: 11, name: "Real Estate" },
//     { id: 12, name: "Retail" },
//     { id: 13, name: "Travel" },
//     { id: 14, name: "Others" },
//     { id: 15, name: "Birthday" },
//     { id: 16, name: "Wedding" },
//     { id: 17, name: "Invitation" },
//     { id: 18, name: "House Warming" },
//     { id: 19, name: "Occassion" },
//     { id: 20, name: "Birthday" },
//     { id: 21, name: "Wedding" },
//     { id: 22, name: "Invitation" },
//     { id: 23, name: "House Warming" },
//     { id: 24, name: "Festival" },
//     { id: 25, name: "Occassion" },
//   ];

  const handleGetCategoryIdAndName = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/categories/listidname`)
        .then((resp) => {
          if (resp.status != 200 || resp.statusText != "OK") return;
          else {
            console.log(resp.data);
            setCategoryData(resp.data);
          }
        })
        .catch((rej) => {
          console.log(rej);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetCategoryIdAndName2 =async ()=>{
   try{
   const resp= await fetch(`${process.env.NEXT_PUBLIC_URL}/categories/listidname`);
   if(!resp.ok) return [];
   const data:z.infer<typeof cData>[]=await resp.json();
   console.log(data);
   setCategoryData(data);
   }
   catch(error){
    console.log(error);
   }

  }

  useEffect(() => {
    handleGetCategoryIdAndName2();
  }, []);
  return (
    <>
      <div className="absolute delay-200  transition  ease-in-out  top-[70px] p-8 h-[360px]  z-20 bg-white w-[860px] -left-[200px] shadow-templatedropdown rounded-[25px] border-solid border border-black">
        <div className=""></div>
        <div className=" h-full grid gap-1 grid-cols-4 px-4 py-2 items-start justify-between">
          {categoryData.map((item) => {
            return (
              
                <div
                  key={nanoid()}
                  className=" hover:scale-110  duration-100 ease-in-out transition inline-flex flex-row items-center justify-start"
                >
                  <Link
                    href={`/home/vectors/category/${item.name}?page=1`}
                   scroll={false}
                  >
                    <h1 className=" hover:underline text-black font-poppins400 text-[16px] font-medium">
                      {item.name}
                    </h1>
                  </Link>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
