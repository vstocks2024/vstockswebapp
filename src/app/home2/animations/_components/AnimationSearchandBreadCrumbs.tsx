import React from 'react'
import SearchLabel from '../../_components/SearchLabel'
import BreadCrumb from '../../_components/BreadCrumb'
import AnimationSearchInput from './AnimationSearchInput'
import VectorSearchTags from './VectorSearchTags'

export default function AnimationSearchandBreadCrumbs() {
  return (
    <div className="flex flex-col">
    <div className=" flex flex-col items-center justify-center p-1 ">
      <SearchLabel />
      <AnimationSearchInput/>
      <VectorSearchTags/>
    </div>
    <BreadCrumb/>
  </div>
  )
}
