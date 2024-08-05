"use client";
import { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [sort, setSort] = useState("Most Relevant");
  const [openSort, setOpenSort] = useState(false);
  const [sortAnimation, setSortAnimation] = useState("Most Relevant");
  const [openSortAnimation, setOpenSortAnimation] = useState(false);
  const exposed = {
    sort,
    setSort,
    openSort,
    setOpenSort,
    sortAnimation,
    setSortAnimation,
    openSortAnimation,
    setOpenSortAnimation,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};
export const useSort = () => useContext(Context);

export default Provider;
