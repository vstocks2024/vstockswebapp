import MainLayout from "@/components/layouts/MainLayout";

import { z } from "zod";
import Tabs from "../_components/Tabs";

const Category = z.object({
  id: z.string(),
  name: z.string(),
});

async function getData(): Promise<z.infer<typeof Category>[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/categories/listidname`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function PostersPage() {
  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
            <Tabs />
            {/* Filter and Sorted By */}
          </div>
        </main>
      </MainLayout>
    </>
  );
}
