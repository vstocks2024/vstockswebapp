"use client";
import { useModal } from "@/context/modal";
import React, { useEffect, useState } from "react";
import SimilarAnimationCard from "./SimilarAnimationCard";
import { Vector_Url } from "@/lib/types";
import { z } from "zod";
import { nanoid } from "nanoid";
import axios from "axios";


export default function SimilarAnimations() {
  const modal = useModal();
  const [categoryArr, setCategoryArr] = useState<z.infer<typeof Vector_Url>[]>(
    []
  );
  const handleCategoryArr = async () => {
    const resp=await axios.get(`${process.env.NEXT_PUBLIC_URL}/vector_category/categoryname/${modal.vectorItem.vector_id}`);
    setCategoryArr(resp.data);
  };

  useEffect(() => {
    handleCategoryArr();
    
  }, [modal.vectorItem]);
  return (
    <div className=" m-0.5">
      <h4 className="text-[14px] m-0.5 font-semibold">
        More like this
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 border  gap-2 m-0.5 p-0.5 ">
        {categoryArr &&
          categoryArr.map((item) => {
            return (
              <>
                <SimilarAnimationCard key={nanoid()} card={item} />
              </>
            );
          })}
      </div>
    </div>
  );
}
