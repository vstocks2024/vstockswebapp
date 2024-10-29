// import React from "react";
// import "@/app/globals.css";
// import Image from "next/image";
// import Link from "next/link";
// import { Animation_Url } from "@/lib/types";
// import { z } from "zod";
// import { nanoid } from "nanoid";
// import { Card } from "./ui/card";
// async function getDataRecommendedOne():Promise<z.infer<typeof Animation_Url>[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/animations_url/getrecommendedone`,{
//     method:"GET"
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
// async function getDataRecommendedTwo():Promise<z.infer<typeof Animation_Url>[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/animations_url/getrecommendedtwo`,{
//     method:"GET"
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
// export default async function RecommendedViews(){
//   const [DataRecommendedOne,DataRecommendedTwo]=await Promise.all([getDataRecommendedOne(),getDataRecommendedTwo()]);
//   return (
//     <div className="bg-[#F1F4FB]">
//       <div className=" mx-auto">
//         <div className="px-20">
//           <h2 className="text-center md:text-start  text-[#001A5B] font-poppins600 font-medium  not-italic text-nowrap text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
//             {" "}
//             Recommended to You
//           </h2>
//         </div>
//         <div className="flex flex-col py-8  justify-center items-center  px-8 md:flex-row md:space-x-8">
          
//           { (DataRecommendedOne && DataRecommendedOne.length>0)  ? DataRecommendedOne.map((card)=>{ 
//             return (<Card className="w-[264px] h-[188px] md:w-[557px] md:h-[395px] rounded-md" key={nanoid()}><div key={nanoid()} className="cursor-pointer"><Link href={{ pathname: "/" }}>
//               <img
//                 className="w-[264px] h-[188px] md:w-[557px] md:h-[395px] object-fill rounded-md"
//                 src={card.thumbnail_url}
//                 alt=""
//               />
//             </Link></div></Card>)}):<></>
//             }
          
//           <div className=" m-1 p-1 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
//             { (DataRecommendedTwo && DataRecommendedTwo.length>0) ? 
//             DataRecommendedTwo.map((card)=>{
//                    return (<Card  className="w-[264px] h-[187.217px] rounded-md" key={nanoid()}><div className="">
//                     <Link href={{ pathname: "/" }}>
//                       <Image
//                         width={264}
//                         height={187.217}
//                         className="w-[264px] h-[187.217px] rounded-md"
//                         src={card.thumbnail_url}
//                         alt={""}
//                       />
//                     </Link>
//                   </div></Card>)
//             }):<></>
            
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";

const RecommendedViews = () => {
  const videoRef=useRef<HTMLVideoElement>(null)
  return (
    <div className="bg-[#F1F4FB]">
        <div className=" mx-auto">
      <div className="py-8 px-20">
      <h2 className="text-center md:text-start  text-[#001A5B] font-poppins600 font-medium  not-italic text-nowrap text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]"> Recommended to You</h2>
       </div>
       <div  className="flex flex-col m-1 p-1  justify-center items-center  px-8 md:flex-row md:space-x-8">
        <div className="cursor-pointer m-1 p-1">
         {/* <Link href={{pathname:"/"}}> <img className="w-[264px] h-[188px] md:w-[557px] md:h-[395px] justify-self-center" src="./images/Navratri1.svg" alt=""/></Link> */}
         <Link href={{pathname:"/"}}> <video ref={videoRef} muted
          onMouseOver={()=>
          {
            videoRef.current?.play();
          }}
          onMouseOut={()=>
          {
            videoRef.current?.pause();
          }} className="w-[264px] h-[188px] md:w-[557px] md:h-[395px] justify-self-center" src="https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/animations/31e66a3f-34e9-4ac8-9bf4-bfd3a07ff048" /></Link>
        </div>
        <div className=" m-1 p-1 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
         
          <div className="">
            <Link href={{pathname:"/"}}>
              <Image width={264} height={187.217} className="" src="./images/r1.svg" alt={""}/>
            </Link>
          </div>
          <div className="">
            <Link href={{pathname:"/"}}>
              <Image width={264} height={187.217} className="" src="./images/r3.svg" alt={""}/>
            </Link>
          </div>
          <div className="">
            <Link href={{pathname:"/"}}>
              <Image width={264} height={187.217} className="" src="./images/r2.svg" alt={""}/>
            </Link>
            </div>
          <div className="">
            <Link href={{pathname:"/"}}>
              <Image width={264} height={187.217} className="" src="./images/r4.svg" alt={""}/>
            </Link>
          </div>
          </div>
        </div>

        </div>
    </div>
  );
};

export default RecommendedViews;
