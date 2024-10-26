import { z } from "zod";
import Tabs from "../_components/Tabs";
import AnimationsGrid from "./_components/AnimationsGrid";
import CombineFilters from "./_components/CombineFilters";
import { Animation_Url, TotalPages, SearchParams } from "@/lib/types";
import MainLayout from "./_components/layout/MainLayout";
import PaginateAnimationGrid from "./_components/PaginateAnimationGrid";

async function getAnimationUrlData(
  currentPage: string,
  currentLicense: string,
  currentOrientation: string,
  currentFormat: string,
  currentSort: string
): Promise<z.infer<typeof Animation_Url>[]> {
  console.log(currentPage);
  console.log(currentLicense);
  console.log(currentOrientation);
  console.log(currentFormat);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/animations/list_animations_url/${currentPage}/${currentLicense}/${currentOrientation}/${currentFormat}/${currentSort}`,
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

async function getTotalAnimationPages(
  currentPage: string,
  currentLicense: string,
  currentOrientation: string,
  currentFormat: string
): Promise<z.infer<typeof TotalPages>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/animations/totalpages/${currentPage}/${currentLicense}/${currentOrientation}/${currentFormat}`,
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

  const animationWithUrlData = getAnimationUrlData(
    currentPage,
    currentLicense,
    currentOrientation,
    currentFormat,
    currentSort
  );
  const animationPages = getTotalAnimationPages(
    currentPage,
    currentLicense,
    currentOrientation,
    currentFormat
  );

  const [animationUrlData, totalAnimationPages] = await Promise.all([
    animationWithUrlData,
    animationPages,
  ]);

  console.log(totalAnimationPages);

  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container">
            <div className="mx-20">
              <Tabs />
              <CombineFilters />
              <AnimationsGrid animationUrlData={animationUrlData} />
              <PaginateAnimationGrid pages={totalAnimationPages} />
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
