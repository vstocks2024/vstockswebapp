import NavBar from '@/components/layouts/includes/NavBar'
import React from 'react'

export default function Header() {
  return (
    <div className={`bg-[#2E67DD] shadow-headershadow `}>
    <header className={`bg-[#2E67DD] container mx-auto`}>
      <NavBar />
    </header>
  </div>
  )
}
