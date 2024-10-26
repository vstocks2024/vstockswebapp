import React from 'react'
import HomeSearchInput from './HomeSearchInput'
import SearchTags from './SearchTags'

export default function HomeSearchBar() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center p-1 ">
   <HomeSearchInput/>
     <SearchTags/>
    </div>
    </>
  )
}
