import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Animation_Url } from "@/lib/types";
import { z } from "zod";

export default function AnimationHomeCard({card}:{card:z.infer<typeof Animation_Url>}) {
  return (

      <Card  className="rounded-md ">
            
        <Link data-after="Edit This Animation" className=" rounded-md relative after:w-full  after:font-poppins400 hover:after:flex hover:after:flex-col hover:after:items-center after:absolute after:bottom-0 after:text-white after:left-0 after:rounded-bl-md after:rounded-br-md after:bg-black after:opacity-50 after:py-2 after:hidden after:content-[attr(data-after)]
        "  href={"/"}>
        <Image
          width={264}
          height={187.217}
          className="w-[264px] h-[187.217px] flex-shrink-0 rounded-md bg-cover bg-no-repeat  bg-[#D9D9D9]"
          src={card.thumbnail_url}
          alt=""
        />
        </Link>
        
      </Card>
    
  );
}
