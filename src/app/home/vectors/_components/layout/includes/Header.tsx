import NavBar from "@/components/layouts/includes/NavBar";
import VectorSearchandBreadCrumbs from "../../VectorSearchandBreadCrumbs";

export default function Header() {
  // const pathname = usePathname();

  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className={`bg-[#2E67DD] container mx-auto`}>
          <NavBar />
          <VectorSearchandBreadCrumbs/>
        </header>
      </div>
    </>
  );
}
