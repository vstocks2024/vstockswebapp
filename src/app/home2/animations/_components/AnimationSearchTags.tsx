import { Tags } from "@/lib/types";
import { z } from "zod";
import AnimationTagButton from  "./AnimationTagButton"
import { Fragment } from "react";
import { nanoid } from "nanoid";


async function getRandomVectorTagData():Promise<z.infer<typeof Tags>[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/tags/randomtags`,{
    method:"GET",
    cache:"no-store"
  });

  if (!res.ok) {
    throw new Error("");
  }

  return res.json();
}

export default async function AnimationSearchTags() {

  const tags=await getRandomVectorTagData();
  return (
    <>
      <div className="lg:pb-10">
        <div className="hidden lg:flex lg:flex-row items-center justify-center  gap-x-[18px]">
           {
            tags && tags.map((tag)=>{return<Fragment key={nanoid()}><AnimationTagButton tag={tag}/></Fragment>})
            }
        </div>
      </div>
    </>
  );
}
