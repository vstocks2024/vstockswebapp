import Image from "next/image";

import Category from "../../components/Category";
import NewlyAdded from "../../components/NewlyAdded";
import EditOwn from "../../components/EditOwn";
import PromotionalViews from "../../components/PromotionalViews";
import RecommendedViews from "../../components/RecommendedViews";
import ClientReview from "../../components/ClientReviews";
import MainLayout from "./_components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="container mx-auto bg-[#FEFAFF]">
        <Category />
        <div className="mt-[40px] " />
        <NewlyAdded />
      </main>
      <EditOwn />
      <div className="mt-[45px]">
        <PromotionalViews />
      </div>
      <RecommendedViews />
      <main className="container mx-auto bg-[#FEFAFF]">
        <ClientReview />
      </main>
    </MainLayout>
  );
}
