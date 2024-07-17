import { useHome } from "@/context/home";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import SearchObjects from "./SearchObjects";
import { usePathname } from "next/navigation";
import HomeSearchBar from "./HomeSearchBar";
import AnimationsSearchBar from "./AnimationsSearchBar";
import PostersSearchBar from "./PostersSearchBar";
import BrochuresSearchBar from "./BrochuresSearchBar";
import VectorsSearchBar from "./VectorsSearchBar";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className={`bg-[#2E67DD] container mx-auto`}>
          <NavBar />
          {pathname === "/home" ? 
            <>
            <HomeSearchBar/> </>: null
            }

            {
            pathname === "/home/vectors" ?<><VectorsSearchBar/></>:null 
          }
            {
            pathname === "/home/vectors1" ?<><VectorsSearchBar/></>:null 
          }

          {
            pathname === "/home/animations" ?<><AnimationsSearchBar/></>:null 
          }
      
         {
          pathname === "/home/posters" ?<><PostersSearchBar/></>:null 
         }
              {
          pathname === "/home/brochures" ?<><BrochuresSearchBar/></>:null 
         }
      

 
        </header>
      </div>
    </>
  );
}
