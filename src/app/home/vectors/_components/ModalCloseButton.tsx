import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function ModalCloseButton() {
  const modal = useModal();
  const router=useRouter();
  const pathname=usePathname();
  const searchParams=useSearchParams();
  const sp=new URLSearchParams(searchParams);
  const handleModalClose=()=>{
    modal.setOpenModal(false);
    sp.delete("uuid");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  }
  return (
    <>
      <Button
        onClick={handleModalClose}
        variant={"default"}
        className="absolute bg-transparent p-2  hover:bg-white hover:bg-opacity-15 top-0 -right-12 cursor-pointer h-auto w-auto"
      >
        <IoClose size={28}  color="white" />
      </Button>
    </>
  );
}
