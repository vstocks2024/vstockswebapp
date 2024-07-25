import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";

import { z } from "zod";
import Tabs from "../_components/Tabs";
import VectorsGrid from "./_components/VectorsGrid";

import PaginateVectorGrid from "./_components/PaginateVectorGrid";
import { useModal } from "@/context/modal";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import CombineFilters from "./_components/CombineFilters";
import { Vector_Url } from "@/lib/types";
import { TotalPages } from "@/lib/types";




const SearchParams = z.object({
  page: z.number().optional(),
});

async function getVectorUrlData(
  currentPage: number
): Promise<z.infer<typeof Vector_Url>[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vectors/list_vectors_url/${currentPage}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTotalVectorPages(
  currentPage: number
): Promise<z.infer<typeof TotalPages>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vectors/totalpages/${currentPage}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function VectorsPage({
  searchParams,
}: {
  searchParams: z.infer<typeof SearchParams>;
}) {
  const currentPage = searchParams?.page || 1;
  //console.log(currentPage);
  const vectorWithUrlData = getVectorUrlData(currentPage);
  const vectorPages = getTotalVectorPages(currentPage);

  const [vectorUrlData, totalVectorPages] = await Promise.all([
    vectorWithUrlData,
    vectorPages,
  ]);

  console.log(totalVectorPages);

  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container">
            <div className="mx-20">
              <Tabs />
              <CombineFilters />
              <VectorsGrid vectorUrlData={vectorUrlData} />
              <PaginateVectorGrid pages={totalVectorPages} />
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
