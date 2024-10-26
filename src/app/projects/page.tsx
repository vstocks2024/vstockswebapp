"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import ProjectSearchBar from "../../components/ProjectSearchBar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import MainLayout from "./_components/layouts/MainLayout";

const projects=[ {
    id: 20,
    name:"Project 1",
    url: "https://picsum.photos/id/20/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    project_type:"Vector Graphics",
  },
  {
    id: 21,
    name:"Project 2",
    url: "https://picsum.photos/id/21/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 22,
    name:"Project 3",
    url: "https://picsum.photos/id/22/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 23,
    name:"Project 4",
    url: "https://picsum.photos/id/23/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 24,
    name:"Project 5",
    url: "https://picsum.photos/id/24/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 25,
    name:"Project 6",
    url: "https://picsum.photos/id/25/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 26,
    name:"Project 7",
    url: "https://picsum.photos/id/26/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 27,
    name:"Project 8",
    url: "https://picsum.photos/id/27/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 28,
    name:"Project 9",
    url: "https://picsum.photos/id/28/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 29,
    name:"Project 10",
    url: "https://picsum.photos/id/29/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  },
  {
    id: 30,
    name:"Project 11",
    url: "https://picsum.photos/id/30/150/150",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      project_type:"Vector Graphics",
  }]

export default function ProjectPage(){
    const [isOpen,setIsOpen]=useState<boolean>(true);

    return <>
    <MainLayout>
        <main className="container bg-[#FEFAFF] mx-auto pt-5 pb-20">
            <div className=" m-0.5 p-0.5">
                <div className=" flex flex-col  m-0.5 p-0.5" >
                <div className=" m-0.5 p-0.5" >
                    <div  className=" my-0.5 px-14 flex flex-col lg:flex-row items-center justify-between">
                        <div className="hidden lg:inline-flex lg:flex-row items-center justify-between  m-0.5 p-0.5"><h4 className=" font-poppins600  font-medium text-[18px] not-italic">My Projects</h4>&nbsp;<MdKeyboardArrowRight size={24}/></div>
                        <div className=" w-[60%] min-w-[400px]  m-0.5 p-0.5">
                                 <ProjectSearchBar/>
                        </div>
                        <div className=" hidden items-center justify-between  m-0.5 p-0.5  lg:inline-flex lg:flex-row gap-x-1">
                              <h4>View All</h4>
                              <button onClick={()=>setIsOpen(!isOpen)}> {isOpen===true ? <MdKeyboardArrowUp size={20}/>:<MdKeyboardArrowDown size={20}/>}</button>
                        </div>
                         
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-20 gap-y-24  my-0.5 mx-5 p-0.5" >
                    {
                        projects.map((project,ind,oa)=>{
                          return (<>
                          <ProjectCard key={`${ind}_${project.url}_${project.name}_${project.id}`} id={project.id} name={project.name} pic_url={project.url} project_type={project.project_type}/>
                          </>);
                        })
                    }
                </div>
                </div>

                
            </div>
        </main>
    </MainLayout>
    </>
    
}