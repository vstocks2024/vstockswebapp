"use client";
import { useModal } from "@/context/modal";
import React, { useEffect, useState } from "react";
import SimilarVectorCard from "./SimilarVectorCard";
import { Vector_Url } from "@/lib/types";
import { z } from "zod";
import { nanoid } from "nanoid";
async function getData(
  vectorId: string
): Promise<z.infer<typeof Vector_Url>[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vector_category/categoryname/${vectorId}}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data1 = await res.json();
  console.log(data1);
  return data1;
}

export default function SimilarVectors() {
  const modal = useModal();
  console.log("VectorItem:", modal.vectorItem.vector_id);
  const [categoryArr, setCategoryArr] = useState<z.infer<typeof Vector_Url>[]>(
    []
  );
  const handleCategoryArr = async () => {
    console.log("Inside handle Category Arr", modal.vectorItem);
    const data = await getData(modal.vectorItem.vector_id);
    console.log(data);
    setCategoryArr(data);
  };

  useEffect(() => {
    handleCategoryArr();
    // console.log(modal.vectorItem.vector_id);
  }, [modal.vectorItem]);
  return (
    <div className="border border-red-500 m-0.5">
      <h4 className="text-[10px] border border-green-500 m-0.5 font-semibold">
        More like this
      </h4>
      <div className="grid grid-cols-5 border  gap-2 m-0.5 p-0.5 border-black ">
        {categoryArr &&
          categoryArr.map((item) => {
            return (
              <>
                <SimilarVectorCard key={nanoid()} card={item} />
              </>
            );
          })}
      </div>
    </div>
  );
}
