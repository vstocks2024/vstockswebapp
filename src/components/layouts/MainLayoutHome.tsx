
import Footer from "./includes/Footer";

import { z } from "zod";
import HomeHeader from "./includes/HomeHeader";

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

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader />
      {children}
      <Footer />
    </>
  );
}
