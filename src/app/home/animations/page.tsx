"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import React, { useState, Suspense } from "react";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import { AiOutlineClose } from "react-icons/ai";
import Filters from "../../../components/Filters";
import SortBy from "../../../components/SortedBy";

import { useHome } from "../../../context/home";
import AddCard from "../../../components/AddCard";
import { useSort } from "../../../context/sort";
import MainLayout from "@/components/layouts/MainLayout";

//////////////Shadcn UI Pagination starts/////////////

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AnimationCard from "@/components/AnimationCard";

//////////////Dummy Data for Testing things//////////////////////////////
const animations_arr=[
  {
      "id": "1",
      "title": "Big Buck Bunny",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Vlc Media Player",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "2",
      "title": "The first Blender Open Movie from 2006",
      "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      "duration": "12:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Blender Inc.",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "3",
      "title": "For Bigger Blazes",
      "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "4",
      "title": "For Bigger Escape",
      "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "subscriber": "25254545 Subscribers",
      "isLive": false
  },
  {
      "id": "5",
      "title": "Big Buck Bunny",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Vlc Media Player",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "6",
      "title": "For Bigger Blazes",
      "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": false
  },
  {
      "id": "7",
      "title": "For Bigger Escape",
      "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "subscriber": "25254545 Subscribers",
      "isLive": true
  },
  {
      "id": "8",
      "title": "The first Blender Open Movie from 2006",
      "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      "duration": "12:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Blender Inc.",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": false
  }
]
/////////////////////////////////////////// Data Ends here //////////////////////////////////////////////

//////////////////////////////////////////////////////

export default function AnimationsPage() {
  const searchParams = useSearchParams()
 
  const page=searchParams.get('page') ?? Number.parseInt("1");
  console.log(page);
  const limit=searchParams.get('limit') ?? 10;
  console.log(limit);
  const category=searchParams.get('category');
  console.log(category);
 

 
  const router = useRouter();
  const [isFilters, setIsFilters] = useState<boolean>(false);
  const [isSortBy, setIsSortBy] = useState<boolean>(false);
  const [openAnimations, setOpenAnimations] = useState<boolean>(true);
 
  const home = useHome();
  const sortBy = useSort();
  const [onVectors, setOnVectors] = useState<boolean>(false);
  const [onAnimations, setOnAnimations] = useState<boolean>(true);
  const [onPosters, setOnPosters] = useState<boolean>(false);
  const [onBrochures, setOnBrochures] = useState<boolean>(false);

  const handleVectors = () => {
    router.push("/home/vectors");
  };

  const handleAnimations = () => {
    router.push("/home/animations");
  };
  const handlePosters = () => {
    router.push("/home/posters");
  };

  const handleBrochures = () => {
    router.push("/home/brochures");
  };

  return (
    <>
      <MainLayout>
        <main className="bg-white">
          <div className="container mx-auto">
            <div className="flex mx-20 py-[50px] flex-col gap-y-5  md:gap-y-0 md:gap-x-10 md:flex-row  justify-center items-center">
              <button
                type="button"
                onClick={handleVectors}
                className={`${
                  onVectors === true
                    ? "bg-[#2E67DD] text-white font-medium border-white"
                    : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
                } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
              >
                Vectors
              </button>
              <button
                type="button"
                onClick={handleAnimations}
                className={`${
                  onAnimations === true
                    ? "bg-[#2E67DD] text-white font-medium border-white"
                    : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
                } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
              >
                Animations
              </button>
              <button
                type="button"
                onClick={handlePosters}
                className={`${
                  onPosters === true
                    ? "bg-[#2E67DD] text-white font-medium border-white"
                    : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
                } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
              >
                Posters
              </button>
              <button
                type="button"
                onClick={handleBrochures}
                className={`${
                  onBrochures === true
                    ? "bg-[#2E67DD] text-white font-medium border-white"
                    : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
                } px-[50px] py-[10px] text-center font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border `}
              >
                Brouchers
              </button>
            </div>

            {/* Filter and SortBy Component Section */}

            <div className="flex mx-20 py-4  items-center   justify-between">
              <div className="inline-flex flex-row items-center justify-between m-1">
                <span className="px-1 py-2 cursor-pointer">
                  <BsSliders size={20} />
                </span>
                <span className="font-semibold p-1 inline-flex flex-row items-center justify-between cursor-pointer">
                  <h3 className=" text-mycolor5 font-poppins600 text-[20px] font-medium not-italic text-center">
                    Filters
                  </h3>
                  <button
                    onClick={() => {
                      setIsFilters(!isFilters);
                      setIsSortBy(false);
                    }}
                    className=""
                  >
                    {isFilters ? (
                      <MdKeyboardArrowUp size={24} />
                    ) : (
                      <MdKeyboardArrowDown size={24} />
                    )}
                  </button>
                </span>
              </div>
              <div className="inline-flex flex=-row items-center justify-between">
                <span className="p-1 inline-flex">
                  <h3 className="text-mycolor5 font-poppins600 text-[20px] font-normal not-italic text-center">
                    Sort By&nbsp;&nbsp;&nbsp;
                    <b className=" not-italic text-[20px] font-poppins600 font-medium">
                      {sortBy.sort}
                    </b>
                  </h3>
                  <button
                    className=""
                    onClick={() => {
                      setIsSortBy(!isSortBy);
                      setIsFilters(false);
                    }}
                  >
                    {isSortBy ? (
                      <MdKeyboardArrowUp size={24} />
                    ) : (
                      <MdKeyboardArrowDown size={24} />
                    )}
                  </button>
                </span>
              </div>
            </div>

            {/* End of Filter and SortBy Component Section */}

            <div
              className={`md:relative mx-20 border border-pink-500   ${
                isFilters === true || isSortBy === true ? "flex flex-row" : null
              } `}
            >
              {isFilters ? <Filters /> : null}

              {/* Animations Tab Starts Here  */}
              {onVectors === false &&
              onAnimations === true &&
              onPosters === false &&
              onBrochures === false ? (
                <div className="items-center justify-start flex flex-col border border-blue-500  mx-0.5 my-2 p-1">
                  <div
                    className={`grid grid-cols-2 w-full p-1   place-items-center place-content-evenly auto-rows-max justify-center items-center gap-2 ${
                      isFilters === true || isSortBy === true
                        ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                        : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    }`}
                  >
                    {/* Do Conditional Rendering and add animations here  */}
                       {
                       animations_arr.map((item)=>{
                        return (<><AnimationCard key={item.id}
                        title={item.title}
                        thumbnailUrl={item.thumbnailUrl}
                        videoUrl={item.videoUrl}
                        description={item.description} id={item.id} /></>);
                      
                       })
                       }

                    {/* Conditional Rendering Ends here */}

                    {/* Animations Overlay page starts here  */}
                    {openAnimations === true ? (
                      <div className="fixed flex flex-grow items-center justify-center p-2 md:p-2  top-0 left-0 w-full h-full bg-black bg-opacity-50">
                        <div
                          className={`fixed z-20 flex flex-row rounded-md  bg-white w-[75%] h-[95vh]`}
                        >
                          <div className="absolute z-10 -right-1  border cursor-pointer border-red-400 m-0.5 flex items-center">
                            <AiOutlineClose
                              onClick={() => {
                                setOpenAnimations(false);
                              }}
                              size={30}
                              className="m-0.5 p-1 absolute top-0"
                              color="white"
                            />
                          </div>

                          <Carousel className="border border-red-500 m-1 p-1  w-full">
                            <CarouselContent className="basis-[100%]">
                              <CarouselItem className="border border-black w-full basis-[100%]">
                                <div className=" bg-green-500 ml-1 w-[100px] h-[100px]"></div>
                              </CarouselItem>
                              <CarouselItem className="border border-black basis-[100%]">
                                <div className=" bg-red-500 ml-1 w-[100px] h-[100px]"></div>
                              </CarouselItem>
                              <CarouselItem className="border border-black basis-[100%]">
                                <div className=" bg-pink-500 ml-1 w-[100px] h-[100px]"></div>
                              </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        </div>
                      </div>
                    ) : null}

                    {/* Animations Overlay page ends here  */}
                  </div>
                </div>
              ) : null}
              {/* Animations Tab Ends Here */}

              {/* SortBy Component Conditional Rendering */}
              {isSortBy === true ? <SortBy /> : null}
              {/* End of SortBy Component Conditional Rendering */}

        
            </div>
                  {/* Pagination Starts here */}
                  <section className=" border border-blue-500 m-1 p-1">
              <Pagination>
            <PaginationContent>
           <PaginationItem>
            <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#" >1</PaginationLink>
           </PaginationItem>
           <PaginationItem>
           <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </section>

              {/* Pagination Ends here */}
          </div>
        </main>
      </MainLayout>
    </>
  );
}
