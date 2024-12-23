import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  
  return (
    <>
    <nav className="bg-[#151515] border-gray-200 dark:bg-[#151515] dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/home"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo/vstocks2.png" width={115}  height={32} className="h-8" alt="VStock Logo" />
        </Link>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#151515] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#151515] dark:bg-[#151515] md:dark:bg-[#151515] dark:border-[#151515]">
            <li>
              <Link href={"/home"} className="block py-2 px-3 text-[#CCCCCC] dark:text-[#CCCCCC] rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-[#CCCCCC]  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-[#CCCCCC] md:dark:hover:text-blue-500 dark:focus:text-[#CCCCCC] dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Templates <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg></button>
                {/* Dropdown menu */}
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-[#CCCCCC]">Dashboard</Link>
                      </li>
                      <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-[#CCCCCC]">Settings</Link>
                      </li>
                      <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-[#CCCCCC]">Earnings</Link>
                      </li>
                    </ul>
                    <div className="py-1">
                      <Link href="#" className="block px-4 py-2 text-sm text-[#CCCCCC] hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-[#CCCCCC] dark:hover:text-[#CCCCCC]">Sign out</Link>
                    </div>
                </div>
            </li>
            <li>
              <Link href={"/projects"} className="block py-2 px-3 text-[#CCCCCC] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#CCCCCC] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#CCCCCC] md:dark:hover:bg-transparent">Projects</Link>
            </li>
            <li>
              <Link href={"/premium"} className="block py-2 px-3 text-[#CCCCCC] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#CCCCCC] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#CCCCCC] md:dark:hover:bg-transparent">Premium</Link>
            </li>
            <li>
            <Link href={"/login"} type="button"  className="text-white bg-[#2E67DD] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</Link>
              {/* <Link  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#CCCCCC] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-[#CCCCCC] md:dark:hover:bg-transparent">Login</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
