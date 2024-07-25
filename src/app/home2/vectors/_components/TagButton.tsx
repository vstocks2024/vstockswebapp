"use client"
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { z } from 'zod';
import { Tags } from '@/lib/types';

export default function TagButton({tag}:{tag:z.infer<typeof Tags>}) {
  return (
    <>
     <button className="rounded-full border-2 border-black bg-[#EDEDED] inline-flex flex-row justify-center items-center space-x-1 px-2  py-0.5">
                    <span className="text-[8px]">{tag.name}</span>
                    <HiOutlineMagnifyingGlass size={10} />
                  </button></>
  )
}
