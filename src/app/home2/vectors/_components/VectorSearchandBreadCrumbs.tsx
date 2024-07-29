import React from 'react'
import SearchLabel from '../../_components/SearchLabel'
import BreadCrumb from '../../_components/BreadCrumb'
import VectorSearchInput from './VectorSearchInput'
import VectorSearchTags from './VectorSearchTags'

export default function VectorSearchandBreadCrumbs() {
  return (
    <div className="flex flex-col">
    <div className=" flex flex-col items-center justify-center p-1 ">
      <SearchLabel />
      <VectorSearchInput/>
      <VectorSearchTags/>
    </div>
    <BreadCrumb/>
  </div>
  )
}
