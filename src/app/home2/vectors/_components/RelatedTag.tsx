"use client";
import { useModal } from "@/context/modal";
import React, { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { z } from "zod";
import { Tags } from "@/lib/types";
import TagButton from "./TagButton";
import { nanoid } from "nanoid";

async function getData(vectorId: string): Promise<z.infer<typeof Tags>[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/vector_tag/tagname/${vectorId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function RelatedTag() {
  const modal = useModal();
  const [tagsArr, setTagsArr] = useState<z.infer<typeof Tags>[]>([]);

  const handleTagsArr = async () => {
    setTagsArr(await getData(modal.vectorItem.vector_id));
  };

  useEffect(() => {
    handleTagsArr();
    //console.log(modal.vectorItem.vector_id);
  }, [modal.vectorItem]);
  return (
    <>
      <div className=" m-0.5 flex flex-col">
        <div className=" m-0.5 ">
          <h6 className="text-[14px] m-0.5  font-semibold ">
            Related Tags
          </h6>
          <div className="inline-flex  space-x-2 flex-row ">
            {
              tagsArr && tagsArr.map((item)=>{
                    return <TagButton key={nanoid()} tag={item}/>
                  })
                 }
          </div>
        </div>
      </div>
    </>
  );
}
