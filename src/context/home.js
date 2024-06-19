"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();
    const [homeTab, setHomeTab] = useState("Vectors");
    const exposed = {homeTab,setHomeTab};

 return <Context.Provider value={exposed}>{children}</Context.Provider>;
}
export const useHome = () => useContext(Context);

export default Provider;