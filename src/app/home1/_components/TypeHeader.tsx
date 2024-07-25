"use client";
import { redirect, useParams, usePathname, useRouter } from "next/navigation";

export default function TypeHeader() {
  const router = useRouter();
  const params = useParams();
  const onType = params.type;
  if (
    onType != "vectors" &&
    onType != "animations" &&
    onType != "posters" &&
    onType != "brochures"
  )
    redirect(`/home1/${onType}/not-found`);

  return (
    <>
      <div className="flex mx-20 py-[50px] flex-col gap-y-5  md:gap-y-0 md:gap-x-10 md:flex-row  justify-center items-center">
        <button
          type="button"
          onClick={() => {
            router.push("/home1/vectors");
          }}
          className={`${
            onType === "vectors"
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
        >
          Vectors
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/home1/animations");
          }}
          className={`${
            onType === "animations"
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
        >
          Animations
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/home1/posters");
          }}
          className={`${
            onType === "posters"
              ? "bg-[#2E67DD] text-white font-medium border-white"
              : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
          } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
        >
          Posters
        </button>
        <button
          type="button"
          onClick={() => {
            router.push("/home1/brochures");
          }}
          className={`${
            onType === "brochures"
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
