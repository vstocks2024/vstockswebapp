import MainLayout from "@/components/layouts/MainLayout";
import TypeHeader from "../_components/TypeHeader";

import { z } from "zod";

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

export default function TypePage() {
  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
            {/* <TypeHeader /> */}
            {/* Filter and Sorted By */}

          </div>
        </main>
      </MainLayout>
    </>
  );
}
