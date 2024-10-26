"use client"
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { z } from 'zod';
import { Tags } from '@/lib/types';
import { Button } from '@/components/ui/button';

export default function TagButton({tag}:{tag:z.infer<typeof Tags>}) {
  return (
    <>
     <Button variant={"outline"} className="rounded-full border-2 border-black bg-[#EDEDED] inline-flex flex-row justify-center items-center space-x-1 px-2  py-0.5">
                    <span className="text-[12px]">{tag.name}</span>
                    <HiOutlineMagnifyingGlass size={14} />
                  </Button></>
  )
}
