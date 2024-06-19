"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();
    const [sort, setSort] = useState("Most Relevant");
    const exposed = {sort,setSort};

 return <Context.Provider value={exposed}>{children}</Context.Provider>;
}
export const useSort = () => useContext(Context);

export default Provider;