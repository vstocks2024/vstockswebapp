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
        className="absolute bg-transparent p-2  hover:bg-white hover:bg-opacity-15 top-0 -right-12 cursor-pointer h-auto w-auto"
      >
        <IoClose size={28}  color="white" />
      </Button>
    </>
  );
}
