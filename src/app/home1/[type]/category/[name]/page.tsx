import TypeHeader from "@/app/home1/_components/TypeHeader";
import MainLayout from "@/components/layouts/MainLayout";

import z from "zod";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Vector = z.object({
  name: z.string(),
  age: z.number(),
});

export default function TypeCategoryNamePage() {
  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
            <TypeHeader />
          </div>
        </main>
      </MainLayout>
    </>
  );
}
