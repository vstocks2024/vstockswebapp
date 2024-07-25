

import Category from "../../components/Category";
import NewlyAdded from "../../components/NewlyAdded";
import EditOwn from "../../components/EditOwn";
import PromotionalViews from "../../components/PromotionalViews";
import RecommendedViews from "../../components/RecommendedViews";
import ClientReview from "../../components/ClientReviews";

import MainLayoutHome from "@/components/layouts/MainLayoutHome";

export default function Home() {
  return (
    <MainLayoutHome>
    <main className=" container mx-auto bg-[#FEFAFF]">    
         <Category/>
         <div className="mt-[40px] "/>
        <NewlyAdded />
      
      <div className="mt-[40px]"/>
        <EditOwn />
      
      <div className="mt-[45px]">
        <PromotionalViews />
      </div>
      <RecommendedViews/>
      <ClientReview/>
    </main>
    </MainLayoutHome>
  );
}
