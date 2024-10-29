import React from 'react'
import NavBar from "@/components/layouts/includes/NavBar";
export default function Header() {
  return (
    <>
    <div className={`bg-[#000] shadow-headershadow `}>
      <header className={`bg-[#000] container mx-auto`}>
        <NavBar />
      </header>
    </div>
  </>
  )
}