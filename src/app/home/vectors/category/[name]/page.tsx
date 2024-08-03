
import { z } from "zod";
import CombineFilters from "../../_components/CombineFilters";
import Tabs from "@/app/home/_components/Tabs";
import { Vector_Url } from "@/lib/types";
import VectorsGrid from "../../_components/VectorsGrid";
import { TotalPages } from "@/lib/types";
import PaginateVectorGrid from "../../_components/PaginateVectorGrid";
import MainLayout from "../../_components/layout/MainLayout";

async function getVectorByCatgeoryName(
  currentCategoryName: string,
  currentPage: string,
  currentLicense: string,
  currentOrientation: string,
  currentFormat: string,
  currentSort: string
): Promise<z.infer<typeof Vector_Url>[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vector_category/vectorlist/${currentCategoryName}/${currentPage}/${currentLicense}/${currentOrientation}/${currentFormat}/${currentSort}`,
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

async function getTotalPages(
  currentCategoryName: string,
  currentPage: string,
  currentLicense: string,
  currentOrientation: string,
  currentFormat: string
): Promise<z.infer<typeof TotalPages>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vector_category/totalpages/${currentCategoryName}/${currentPage}/${currentLicense}/${currentOrientation}/${currentFormat}`,
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

export default async function VectorCategoryNamePage({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: {
    page: string;
    license: string;
    orientation: string;
    format: string;
    sort: string;
  };
}) {
  const currentCategoryName = params?.name || "";
  const currentPage = searchParams?.page || "1";
  const currentLicense = searchParams?.license || "all";
  const currentOrientation = searchParams?.orientation || "all";
  const currentFormat = searchParams?.format || "all";
  const currentSort = searchParams?.sort || "relevance";

  const [vectorUrlData, totalVectorPages] = await Promise.all([
    await getVectorByCatgeoryName(
      currentCategoryName,
      currentPage,
      currentLicense,
      currentOrientation,
      currentFormat,
      currentSort
    ),
    await getTotalPages(
      currentCategoryName,
      currentPage,
      currentLicense,
      currentOrientation,
      currentFormat
    ),
  ]);

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
