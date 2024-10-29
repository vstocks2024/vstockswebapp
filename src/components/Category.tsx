// import React from "react";
// import "@/app/globals.css";
// import Link from "next/link";
// import Image from "next/image";
// import { z } from "zod";
// import { Animation_Url, Vector_Url } from "@/lib/types";

// async function getVectorData():Promise<z.infer<typeof Vector_Url>[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/vectors_url/randomvector`,{
//     method:"GET",
//     cache:"no-store"
//   })
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
// async function getAnimationData():Promise<z.infer<typeof Animation_Url>[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/animations_url/randomanimation`,{
//     method:"GET",
//     cache:"no-store"
//   })
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

// export default async function Category() {
//   const data1=await getVectorData();
//   const data2=await getAnimationData();
//   const [dataVector,dataAnimation]= await Promise.all([data1,data2]);
  
//   return (
//     <div className="my-1 mx-[64px] p-1">
//       <div className="flex flex-col m-1 ">
//         <div className="flex flex-col px-10 py-6 space-y-2 justify-center items-center">
//           <h1 className=" text-center text-[20px]  sm:text-[25px] md:text-[30px] lg:[35px] xl:text-[40px] font-semibold text-[#1E1E1E]  font-poppins600  tracking-[0.0375rem] text-nowrap">
//             Unleash Your Creativity with V-Stocks!
//           </h1>
//           <h4 className="text-center   text-[11px] sm:text-[13.5px] md:text-[16px] lg:text-[18.5px] xl:text-[22px] tracking-[0.02063rem] font-normal text-[#000]  text-wrap">
//             Where Ideas Come to Life - Your One Stop Destination for Stunning
//             Visual Content
//           </h4>
//         </div>
//         <div className="flex flex-col items-center justify-around p-1 space-y-4 py-6 px-32 lg:flex-row lg:space-y-0 lg:space-x-2 lg:px-0 lg:justify-between lg:items-center lg:pt-[60px]">
//           <Link href={"/home/vectors"}>
//             <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
//               <img
//                 width={250}
//                 height={142}
//                 className="shadow-category w-[250px] h-[142px] bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
//                 src={dataVector[0].url}
//                 alt="Vector Graphics"/>

//               <h3 className="text-center font-normal font-poppins400  leading-normal text-[16px] md:text-[20px]">
//                 Vector Graphics
//               </h3>
//             </div>
//           </Link>
//           <Link href={"/home/animations"}>
//             <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
//               <img
//                 width={250}
//                 height={142}
//                 className="shadow-category bg-cover w-[250px] h-[142px]  bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
//                 src={dataAnimation[0].thumbnail_url}
//                 alt="Video Animations"
//               />
//               <h3 className="text-center font-normal font-poppins400  leading-normal text-[16px] md:text-[20px] ">
//                 Video Animations
//               </h3>
//             </div>
//           </Link>
//           <Link href={"/home/posters"}>
//             <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
//               <img
//                 width={250}
//                 height={142}
//                 className="shadow-category w-[250px] h-[142px] bg-[#D9D9D9]  bg-cover  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
//                 src="./images/ne3.svg"
//                 alt="Posters"
//               />
//               <h3 className="text-center font-normal font-poppins400   leading-normal text-[16px] md:text-[20px]">
//                 Posters
//               </h3>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Category() {
  return (
    <div className="my-1 mx-[64px] p-1">
      <div className="flex flex-col m-1 ">
        <div className="flex flex-col px-10 py-6 space-y-2 justify-center items-center">
          <h1 className=" text-center text-[20px]  sm:text-[25px] md:text-[30px] lg:[35px] xl:text-[40px] font-semibold text-[#1E1E1E]  font-poppins600  tracking-[0.0375rem] text-nowrap">
            Unleash Your Creativity with V-Stocks!
          </h1>
          <h4 className="text-center  text-[11px] sm:text-[13.5px] md:text-[16px] lg:text-[18.5px] xl:text-[22px] tracking-[0.02063rem] font-normal text-[#000]  text-wrap">
            Where Ideas Come to Life - Your One Stop Destination for Stunning
            Visual Content
          </h4>
        </div>
        <div className="flex flex-col items-center justify-around p-1 space-y-4 py-6 px-32 lg:flex-row lg:space-y-0 lg:space-x-2 lg:px-0 lg:justify-between lg:items-center lg:pt-[60px]">
          <Link href={"/home/vectors"}>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <img
                width={250}
                height={142}
                className="shadow-category min-w-[250px] min-h-[142px] bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="./images/ne1.svg"
                alt="Vector Graphics"
              />

              <h3 className="text-center font-normal font-poppins400  leading-normal text-[16px] md:text-[20px]">
                Vector Graphics
              </h3>
            </div>
          </Link>
          <Link href={"/home/animations"}>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <video
                width={250}
                height={142}
                className="shadow-category min-w-[250px] min-h-[142px]  bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/animations/c416e86b-f9a7-4cba-90c2-8b26d06a4719"
                muted
                loop
                autoPlay
              />
              <h3 className="text-center font-normal font-poppins400  leading-normal text-[16px] md:text-[20px] ">
                Video Animations
              </h3>
            </div>
          </Link>
          <Link href={"/home/posters"}>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <img
                width={250}
                height={142}
                className="shadow-category  min-w-[250px] min-h-[142px] bg-[#D9D9D9]  bg-cover  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="./images/ne3.svg"
                alt="Posters"
              />
              <h3 className="text-center font-normal font-poppins400   leading-normal text-[16px] md:text-[20px]">
                Posters
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
