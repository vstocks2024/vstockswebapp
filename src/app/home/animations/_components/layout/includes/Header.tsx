import NavBar from "@/components/layouts/includes/NavBar";
import AnimationSearchandBreadCrumbs from "../../AnimationSearchandBreadCrumbs";

export default function Header() {
  // const pathname = usePathname();

  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className={`bg-[#2E67DD] container mx-auto`}>
          <NavBar />
          <AnimationSearchandBreadCrumbs/>
        </header>
      </div>
    </>
  );
}
