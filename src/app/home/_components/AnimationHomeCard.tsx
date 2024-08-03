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
import { Animations_Url } from "@/lib/types";
import { z } from "zod";

export default function AnimationHomeCard({card}:{card:z.infer<typeof Animations_Url>}) {
  return (
    <div>
      <Card className="rounded-md">
        <Link  href={"/"}>
        <Image
          width={264}
          height={187.217}
          className="w-[264px] h-[187.217px] flex-shrink-0 rounded-md bg-cover bg-no-repeat  bg-[#D9D9D9]"
          src={card.thumbnail_url}
          alt=""
        />
        </Link>
      </Card>
    </div>
  );
}
