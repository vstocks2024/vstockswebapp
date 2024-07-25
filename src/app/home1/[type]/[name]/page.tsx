import MainLayout from "@/components/layouts/MainLayout";
import TypeHeader from "../../_components/TypeHeader";

export default function TypeNamePage() {
  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
            <TypeHeader />
            {/* Filters and Sort */}
          </div>
        </main>
      </MainLayout>
    </>
  );
}
