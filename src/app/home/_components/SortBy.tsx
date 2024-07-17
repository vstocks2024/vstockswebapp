import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react"

  import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md"
  
export  default function SortBy(){
  const [open,setOpen]=useState<boolean>(false);
   

    return <>
    <DropdownMenu>
  <DropdownMenuTrigger onClick={()=>setOpen(!open)}>{open ? <MdKeyboardArrowUp size={24}/>:<MdKeyboardArrowDown size={24}/>}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Sort By</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Alphabetically</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</>
}