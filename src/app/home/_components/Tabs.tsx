"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="flex mx-20 py-[50px] flex-col gap-y-5  md:gap-y-0 md:gap-x-10 md:flex-row  justify-center items-center">
        <button
          type="button"
          onClick={() => {
            router.push("/home/vectors");
          }}
          className={`${
            pathname.startsWith("/home/vectors") === true
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
        >
          Vectors
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/home/animations");
          }}
          className={`${
            pathname.startsWith("/home/animations") === true
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
        >
          Animations
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/home/posters");
          }}
          className={`${
            pathname.startsWith("/home/posters") === true
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
        >
          Posters
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/home/brochures");
          }}
          className={`${
            pathname.startsWith("/home/brochures") === true
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border `}
        >
          Brouchers
        </button>
      </div>
    </>
  );
}
