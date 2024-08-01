import NavBar from "@/components/layouts/includes/NavBar";
import HomeSearchBar from "./HomeSearchBar";

export default function Header() {
  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className={`bg-[#2E67DD] container mx-auto`}>
          <NavBar />
          <HomeSearchBar />
        </header>
      </div>
    </>
  );
}
