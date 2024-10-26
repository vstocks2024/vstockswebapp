
import { z } from "zod";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { Tags } from "@/lib/types";

async function getTagsForHomePage():Promise<z.infer<typeof Tags >[]>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/tags/randomtags`,{
    method:"GET",
    cache:"no-store"
  })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async  function SearchTags(){
  const data=await getTagsForHomePage();
    return <>
     <div className="lg:pb-10">
        <div className="hidden lg:flex lg:flex-row items-center justify-center  gap-x-[18px]">
          
        {  data.map((item)=>{return (<Fragment key={nanoid()}> 
          <button className=" px-3 py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white   border-solid gap-x-2">
              <h3 className="text-[12px]  font-poppins text-nowrap ">
                {item.name}
              </h3>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8453 9.14217L6.74219 7.03906"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button></Fragment>)})
           }
  
        </div>
      </div>
    </>
}