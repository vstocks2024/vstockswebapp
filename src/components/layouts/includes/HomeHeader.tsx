// "use client"
import NavBar from "./NavBar";

import HomeSearchBar from "./HomeSearchBar";

export default function HomeHeader() {
  // const pathname = usePathname();

  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className={`bg-[#2E67DD] container mx-auto`}>
          <NavBar />
          <HomeSearchBar/>
          {/* {pathname === "/home" ? (
            <>
              <HomeSearchBar />{" "}
            </>
          ) : null}
              {pathname === "/home1" ? (
            <>
              <HomeSearchBar />{" "}
            </>
          ) : null}

          {pathname === "/home/vectors" ? (
            <>
              <VectorsSearchBar />
            </>
          ) : null}

          {pathname === "/home1/vectors" ? (
            <>
              <VectorsSearchBar />
            </>
          ) : null}

          {pathname === "/home/animations" ? (
            <>
              <AnimationsSearchBar />
            </>
          ) : null}

{pathname === "/home1/animations" ? (
            <>
              <AnimationsSearchBar />
            </>
          ) : null}

          {pathname === "/home/posters" ? (
            <>
              <PostersSearchBar />
            </>
          ) : null}

                   {pathname === "/home1/posters" ? (
            <>
              <PostersSearchBar />
            </>
          ) : null}
          {pathname === "/home/brochures" ? (
            <>
              <BrochuresSearchBar />
            </>
          ) : null}
                   {pathname === "/home1/brochures" ? (
            <>
              <BrochuresSearchBar />
            </>
          ) : null} */}
        </header>
      </div>
    </>
  );
}
