"use client";
import { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";
const Context = createContext();

const Provider = ({ children}) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [sizeModal, setSizeModal] = useState("7xl");
  const [vectorItem, setVectorItem] = useState();
  const [vectorItemsArray, setVectorItemsArray] = useState([]);
  
  /////////////
  const [openAnimationModal,setOpenAnimationModal]=useState(false);
  const [sizeAnimationModal, setSizeAnimationModal] = useState("5xl");
  const [animationItem, setAnimationItem] = useState();
  const [animationItemsArray, setAnimationItemsArray]=useState([]);


  const exposed = {
    openModal,
    vectorItem,
    sizeModal,
    vectorItemsArray,
    setVectorItemsArray,
    setOpenModal,
    setVectorItem,
    setSizeModal,
    openAnimationModal,
    sizeAnimationModal,
    animationItem,
    animationItemsArray,
    setOpenAnimationModal,
    setSizeAnimationModal,
    setAnimationItem,
    setAnimationItemsArray
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};
export const useModal = () => useContext(Context);

export default Provider;
