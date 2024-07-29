import React from 'react'
import SearchLabel from './SearchLabel'
import SearchInput from './SearchInput'
import BreadCrumb from './BreadCrumb'
import SearchTags from './SearchTags'

export default function SearchBar2({type}:{type:string}) {
  return (
   <>
<div className="flex flex-col">
      <div className=" flex flex-col items-center justify-center p-1 ">
        <SearchLabel />
        <SearchInput />
        <SearchTags />
      </div>
   <BreadCrumb/>
</div>
   </>
  )
}
