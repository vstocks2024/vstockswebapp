"use client";
import Link from "next/link";

import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";

import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

import React from "react";

export default function HomeSearchInput() {
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleListAllThings = useDebouncedCallback(async (event) => {
    if (event.target.value === "") {
      setItems([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/images/search_vectors/${event.target.value}`
      );

      const result = response.data.data;
      console.log(result);
      if (result) {
        setItems(result);
        setIsSearching(false);
        return;
      }
      setItems([]);
      setIsSearching(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, 300);
  return (
    <>
      <div className="h-10 mx-auto" />
      <div className="relative m-1 p-1 w-[76%] max-w-[800px] inline-flex items-center justify-center">
        <input
          type="text"
          placeholder={"Search for anything"}
          onChange={handleListAllThings}
          className="rounded-[77px]  text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] flex-shrink-0  w-full h-12 py-[16px] px-[29px]  outline-none focus:outline-none placeholder:font-poppins400   font-poppins400  font-extralight placeholder:font-extralight  placeholder:text-white not-italic  bg-mycolor1"
        />

        {isSearching ? (
          <BiLoaderCircle
            color="white"
            className="absolute right-8 animate-spin"
            size={30}
          />
        ) : (
          <button className="absolute right-8">
            <svg
              className="w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M24.5078 26.25L16.6328 18.375C16.0078 18.875 15.2891 19.2708 14.4766 19.5625C13.6641 19.8542 12.7995 20 11.8828 20C9.61198 20 7.69031 19.2133 6.11781 17.64C4.54531 16.0667 3.75865 14.145 3.75781 11.875C3.75781 9.60417 4.54448 7.6825 6.11781 6.11C7.69115 4.5375 9.61281 3.75083 11.8828 3.75C14.1536 3.75 16.0753 4.53667 17.6478 6.11C19.2203 7.68333 20.007 9.605 20.0078 11.875C20.0078 12.7917 19.862 13.6562 19.5703 14.4688C19.2786 15.2812 18.8828 16 18.3828 16.625L26.2578 24.5L24.5078 26.25ZM11.8828 17.5C13.4453 17.5 14.7736 16.9529 15.8678 15.8588C16.962 14.7646 17.5086 13.4367 17.5078 11.875C17.5078 10.3125 16.9607 8.98417 15.8666 7.89C14.7724 6.79583 13.4445 6.24917 11.8828 6.25C10.3203 6.25 8.99198 6.79708 7.89781 7.89125C6.80365 8.98542 6.25698 10.3133 6.25781 11.875C6.25781 13.4375 6.8049 14.7658 7.89906 15.86C8.99323 16.9542 10.3211 17.5008 11.8828 17.5Z"
                fill="white"
                fillOpacity="0.68"
              />
            </svg>
          </button>
        )}
        {items.length > 0 ? (
          <div className="absolute bg-white w-[90%] rounded-b-md  h-auto  z-20  top-12   m-1 p-1">
            {items.map(
              (
                item: {
                  id: string;
                  image_name: string;
                  createdAt: Date;
                  updatedAt: Date;
                },
                oa,
                ind
              ) => (
                <div className="p-1" key={`${item?.id}_${ind}`}>
                  <Link
                    href={`/editor/${item?.id}`}
                    className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                  >
                    <span className="">{item?.image_name.split(".")[0]}</span>
                  </Link>
                </div>
              )
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
