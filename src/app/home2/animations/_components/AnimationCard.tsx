"use client"
import React from "react";
import { z } from "zod";
import Image from "next/image";
import { useModal } from "@/context/modal";
import { Vector_Url } from "@/lib/types";



export default function AnimationCard({
  item,
}: {
  item: z.infer<typeof Vector_Url>;
}) {
  const modal = useModal();
  const handleCardClick=()=>{
  modal.setOpenModal(true);
  modal.setVectorItem(item);
}
  return (
    <>
      <div>
        <button
          onClick={handleCardClick}
          className="flex-shrink flex items-center  border hover:border-gray-200 hover:shadow-xl rounded mx-auto"
        >
          <img
            className="rounded object-fill cursor-pointer"
            loading="lazy"
            alt=""
            src={item.url}
          />
        </button>
      </div>
    </>
  );
}
