"use client";
import { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";
const Context = createContext();

const Provider = ({ children}) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [sizeModal, setSizeModal] = useState("5xl");
  const [vectorItem, setVectorItem] = useState();
  const [vectorItemsArray, setVectorItemsArray] = useState([]);
  const exposed = {
    openModal,
    vectorItem,
    sizeModal,
    vectorItemsArray,
    setVectorItemsArray,
    setOpenModal,
    setVectorItem,
    setSizeModal,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};
export const useModal = () => useContext(Context);

export default Provider;
