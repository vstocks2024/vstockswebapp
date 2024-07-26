import MainLayout from "@/components/layouts/MainLayout";
import { z } from "zod";
import CombineFilters from "../../_components/CombineFilters";
import Tabs from "@/app/home2/_components/Tabs";
import { Vector_Url } from "@/lib/types";
import VectorsGrid from "../../_components/VectorsGrid";
import { TotalPages } from "@/lib/types";
import PaginateVectorGridByCategory from "../../_components/PaginateVectorGridByCategory";

async function getVectorByCatgeoryName(
  categoryName: string,
  currentPage: number
): Promise<z.infer<typeof Vector_Url>[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vector_category/vectorlist/${categoryName}/${currentPage}`,
    {
      method: "GET",
      cache:"no-store"
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTotalPages(
  categoryName: string,
  currentPage: number
): Promise<z.infer<typeof TotalPages>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/vector_category/totalpages/${categoryName}/${currentPage}`,
    {
      method: "GET",
      cache:"no-store"
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
  searchParams: { page: number };
}) {
  const currentPage = searchParams?.page || 1;
  const categoryName= params?.name || "";

  console.log(currentPage,categoryName);

  const [vectorUrlData, totalVectorPages] = await Promise.all([await getVectorByCatgeoryName(categoryName,currentPage),await getTotalPages(categoryName,currentPage)]);


  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container">
            <div className="mx-20">
              <Tabs />
              <CombineFilters />
              <VectorsGrid vectorUrlData={vectorUrlData} />
              <PaginateVectorGridByCategory category_name={categoryName} pages={totalVectorPages}/>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
