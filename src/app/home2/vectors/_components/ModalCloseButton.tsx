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
        className="absolute bg-transparent hover:bg-white hover:bg-opacity-30 top-0 -right-20 cursor-pointer h-auto w-auto"
      >
        <IoClose size={30} />
      </Button>
    </>
  );
}
