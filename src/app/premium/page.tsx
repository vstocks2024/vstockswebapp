"use client";
import { useState } from "react";

import PriceCard from "../../components/PriceCard";
import MainLayout from "./_components/layouts/MainLayout";

export default function PremiumPage(){
    const monthlycards=[{
        picurl:"/images/Group 8.png",
        plan:"FREE",
        desc:"We provide complete features and certainly no less competitive with other video applications",
        money:0,
        avaliability:"Try For Free",
    },
{
    picurl:"/images/Group 6.png",
    plan:"BASIC",
    desc:" We provide complete features and certainly no less competitive with other video applications",
    money:499,
    avaliability:"Try Basic",

},{
    picurl:"/images/Group 7.png",
    plan:"PRO",
    desc:"We provide complete features and certainly no less competitive with other video applications",
    money:899,
    avaliability:"Try Pro",

}]

    const yearlycards=[{
        picurl:"/images/Group 8.png",
        plan:"FREE",
        desc:"We provide complete features and certainly no less competitive with other video applications",
        money:0,
        avaliability:"Try For Free",
    },{
        picurl:"/images/Group 6.png",
        plan:"BASIC",
        desc:"We proide complete features and certoiny no less competitve with other video oppliconons",
        money:4999,
        avaliability:"Try Basic",

    },{
      picurl:"/images/Group 7.png",
      plan:"PRO",
        desc:"We proide complete features and certoiny no less competitve with other video oppliconons",
        money:6999,
        avaliability:"Try Pro",
    }]

    const [switcher,setSwitcher]=useState<string>("Monthly");
    const handleSwitcher=()=>{
        if(switcher==="Monthly"){
            setSwitcher("Yearly")
        }
        else if(switcher==="Yearly"){
            setSwitcher("Monthly")
        }
    }
    return (<>
    <MainLayout>
        <main className="container mx-auto py-16 px-8">
            <div className="m-0.5 p-0.5 flex flex-col items-center justify-between space-y-6">
                 <div className=" w-full pt-2  m-0.5 p-0.5"><h2 className="text-3xl sm:text-4xl md:text-5xl not-italic font-poppins400 leading-[48px] text-center">
              Our product Plans
            </h2></div>
                 <div className="w-full flex flex-col justify-center items-center pb-10  m-0.5">
                 
            <p className="text-[#5D5D5D] text-justify  m-0.5 p-0.5 text-[16px] w-[400px] font-poppins400 font-normal">
              All plans include video editing features, unlimited 
              storage, unlimited project files, and auto captions.
            </p>
          
                 </div>
                 <div className=" w-full m-0.5 p-0.5">
                    <div className=" m-0.5 p-0.5 flex flex-col items-center justify-center ">
                     <div className="flex-shrink-0 rounded-[66.32px] bg-[#2E67DD] gap-1 p-1 inline-flex flex-row justify-between items-center">
                        <button onClick={handleSwitcher} className={`${switcher==="Monthly" ? "bg-white text-black":"bg-[#2E67DD] text-white"} w-[150px] h-[50px] text-center rounded-[66.32px] `}>{switcher==="Monthly" ? <h2 className=" font-normal text-[16px] capitalize font-roboto500">Monthly</h2>:<h2 className=" font-normal text-[16px] capitalize font-roboto500">Monthly Plan</h2>}</button>
                        <button onClick={handleSwitcher}  className={`${switcher==="Yearly" ? "bg-white text-black":"bg-[#2E67DD] text-white"} w-[150px] h-[50px] text-center rounded-[66.32px] `}>{switcher==="Yearly" ? <h2 className="font-normal text-[16px] capitalize font-roboto500">Yearly</h2>:<h2 className=" font-normal text-[16px] capitalize font-roboto500">Yearly Plan</h2>}</button>
                     </div>
                    </div>
                 </div>
                 <div className="w-full mx-0.5 p-0.5">
                    <div className="flex flex-col lg:flex-row items-center justify-around m-0.5 p-0.5">

                        {
                           switcher==="Monthly" ? monthlycards.map((card,ind,oa)=>{
                             return (<><PriceCard  plan={card.plan} desc={card.desc} money={card.money} avaliability={card.avaliability} picurl={card.picurl} /></>);
                            }) : null}
                        {  switcher==="Yearly" ? yearlycards.map((card,ind,oa)=>{
                                return(<><PriceCard  plan={card.plan} desc={card.desc} money={card.money} avaliability={card.avaliability} picurl={card.picurl} /></>);
                            }):null
                        }
                    </div>
                    
                 </div>
            </div>
        </main>
    </MainLayout>
    </>)
}