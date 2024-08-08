"use client"
import React from "react";
import { z } from "zod";
import Image from "next/image";
import { useModal } from "@/context/modal";
import { Vector_Url } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";



export default function VectorCard({
  item,
}: {
  item: z.infer<typeof Vector_Url>;
}) {
  const searchParams=useSearchParams();
const sp=new URLSearchParams(searchParams);
const router=useRouter();
  const pathname=usePathname();
  const modal = useModal();
  const handleCardClick=()=>{
  sp.set('uuid',item.vector_id);
  router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  modal.setOpenModal(true);
  modal.setVectorItem(item);
}
  return (
    <>
      <div>
        <button
          onClick={handleCardClick}
          className="flex-shrink flex flex-col items-center justify-start  border hover:border-gray-200 hover:shadow-xl rounded mx-auto"
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
