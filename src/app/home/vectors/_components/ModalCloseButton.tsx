import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function ModalCloseButton() {
  const modal = useModal();
  return (
    <>
      <Button
        onClick={() => modal.setOpenModal(false)}
        variant={"default"}
        className="absolute bg-transparent p-3 rounded-full hover:bg-white hover:bg-opacity-20 top-0 -right-[68px] cursor-pointer h-auto w-auto"
      >
        <IoClose size={35} />
      </Button>
    </>
  );
}
