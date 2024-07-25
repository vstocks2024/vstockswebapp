"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();
    const [openFilter,setOpenFilter]=useState(false);
    const exposed = {openFilter,setOpenFilter};

 return <Context.Provider value={exposed}>{children}</Context.Provider>;
}
export const useFilter = () => useContext(Context);

export default Provider;