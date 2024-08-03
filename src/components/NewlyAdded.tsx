import Link from "next/link";
import Image from "next/image";
import { Animations_Url } from "@/lib/types";
import { z } from "zod";
import AnimationHomeCard from "@/app/home/_components/AnimationHomeCard";
import { nanoid } from "nanoid";
import { Card } from "./ui/card";
async function getData(): Promise<z.infer<typeof Animations_Url>[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/animations_url/getnewadded`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function NewlyAdded() {
  const data = await getData();
  return (
    <div className="m-1 ">
      <div className="m-1 mx-16">
        <div className="flex flex-col items-center justify-between gap-y-[24px] m-1">
          <div className="m-1 p-1 flex flex-row items-center justify-center md:justify-between  w-full">
            <div className="">
              <h3 className="font-poppins400 not-italic leading-[47.58px] text[#000] text-[26px] font-normal">
                Newly Added
              </h3>
            </div>
            <div className="">
              <button>
                <h3 className="hidden underline md:flex font-poppins400 text-[14px] text-[#000] leading-[25.62px] not-italic">
                  View All
                </h3>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[47px]">
            {data && data.length > 0 ? (
              data.map((card) => {
                return (
                  <Card className="w-[264px] h-[187.217px]" key={nanoid()}>
                    <div className=" cursor-pointer">
                      <AnimationHomeCard key={nanoid()} card={card} />
                    </div>
                  </Card>
                );
              })
            ) : (
              <></>
            )}
          </div>

          <div className="flex justify-center  py-1 items-center">
            <Link href={"/"}>
              <h5 className=" cursor-pointer font-poppins400 text-[#000] text-[14px] font-normal not-italic leading-[25.62px] underline md:hidden">
                View All
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
