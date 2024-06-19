import { RiPencilLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

export type ProjectCardType={
    id:number,
    name:string;
    pic_url:string,
    project_type:string,

}

export default function ProjectCard({id,name,pic_url,project_type}:ProjectCardType){
    const router=useRouter();
    return (<>
    <div className=" flex-shrink-0 shadow-projectcard rounded-[12px]  bg-[rgba(0,0,0,0.03)] m-0.5 p-0.5">
       <div className=" m-0.5 px-4 py-3 flex flex-col">
        <div className=" m-0.5 p-0.5 flex flex-col items-center justify-center">
           <div className=""><img className="w-[275px] h-[275px] rounded-[12px] shadow-projectcardimage" src={pic_url}/></div>
        </div>
        <div className=" flex flex-row items-center justify-between  m-0.5 p-0.5">
            <div className="flex flex-col m-0.5 p-0.5">
           <div className="inline-flex flex-row items-center   justify-between  m-0.5 p-0.5">
            <h4 className="text-base text-black font-poppins400 font-normal">{name}</h4>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{router.push("https://vstocks-editor-client-15-git-core-part-vstockss-projects.vercel.app/editor/839a728a-6dbd-485d-b2eb-4097060f9e7d")}}><RiPencilLine size={14}/></button>
           </div>
           <div className="inline-flex flex-row font-poppins400   items-center justify-between m-0.5 p-0.5">
              <h4 className="text-[rgba(0,0,0,0.53)]  text-[12px] font-poppins400">{project_type}</h4>
           </div>
            </div>
            <div className="flex flex-col items-center  justify-center m-0.5 p-0.5">
            <button onClick={()=>{}}><PiDotsThreeVerticalBold size={30} color="#626262"/></button>
            </div>
        </div>
       </div>
    </div> 
    </>);
}