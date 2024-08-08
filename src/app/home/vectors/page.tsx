import Image from "next/image";

import { z } from "zod";
import Tabs from "../_components/Tabs";
import VectorsGrid from "./_components/VectorsGrid";

import PaginateVectorGrid from "./_components/PaginateVectorGrid";
import { useModal } from "@/context/modal";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import CombineFilters from "./_components/CombineFilters";
import { Vector_Url, TotalPages, SearchParams } from "@/lib/types";
import MainLayout from "./_components/layout/MainLayout";

async function getVectorUrlData(
  currentPage: string,
  currentLicense: string,
  currentOrientation: string,
  currentFormat: string,
  currentSort: string
): Promise<z.infer<typeof Vector_Url>[]> {
  console.log(currentPage);
  console.log(currentLicense);
  console.log(currentOrientation);
  console.log(currentFormat);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vectors/list_vectors_url/${currentPage}/${currentLicense}/${currentOrientation}/${currentFormat}/${currentSort}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  try {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.log("Exception Raised", error);
  }

  return res.json();
}

async function getTotalVectorPages(
  currentPage: string,
  currentLicense: string,
  currentOrientation: string,
  currentFormat: string
): Promise<z.infer<typeof TotalPages>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vectors/totalpages/${currentPage}/${currentLicense}/${currentOrientation}/${currentFormat}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function VectorsPage({
  searchParams,
}: {
  searchParams: z.infer<typeof SearchParams>;
}) {
  const currentPage = searchParams?.page || "1";
  const currentLicense = searchParams?.license || "all";
  const currentOrientation = searchParams?.orientation || "all";
  const currentFormat = searchParams?.format || "all";
  const currentSort = searchParams?.sort || "relevance";

  const vectorWithUrlData = getVectorUrlData(
    currentPage,
    currentLicense,
    currentOrientation,
    currentFormat,
    currentSort
  );
  const vectorPages = getTotalVectorPages(
    currentPage,
    currentLicense,
    currentOrientation,
    currentFormat
  );

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
