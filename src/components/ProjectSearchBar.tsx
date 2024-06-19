import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { useHome } from "@/context/home";
export default function ProjectSearchBar() {
  const pathname = usePathname();
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const home=useHome();
  const handleSearchVectors = useDebouncedCallback(async (event) => {
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
    <div className=" flex w-full flex-row items-center justify-center p-1 ">
      <div className="relative w-full m-1 p-1  inline-flex items-center justify-center">
        <input
          type="text"
          placeholder="Search in your projects"
          onChange={handleSearchVectors}
          className="rounded-[77px] w-full bg-[rgba(0,0,0,0.06)] text-black  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  h-12 py-[16px] px-[29px]  outline-none focus:outline-none placeholder:font-poppins400   font-poppins400  font-extralight placeholder:font-extralight  placeholder:text-[rgba(0,0,0,0.69)] not-italic"
        />

        {isSearching ? (
          <BiLoaderCircle
            color="rgba(0,0,0,0.68)"
            className="absolute right-8 animate-spin"
            size={30}
          />
        ) : (
          <button className="absolute right-8">
           <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <path d="M24.5469 26.25L16.6719 18.375C16.0469 18.875 15.3281 19.2708 14.5156 19.5625C13.7031 19.8542 12.8385 20 11.9219 20C9.65104 20 7.72938 19.2133 6.15688 17.64C4.58438 16.0667 3.79771 14.145 3.79688 11.875C3.79688 9.60417 4.58354 7.6825 6.15688 6.11C7.73021 4.5375 9.65188 3.75083 11.9219 3.75C14.1927 3.75 16.1144 4.53667 17.6869 6.11C19.2594 7.68333 20.046 9.605 20.0469 11.875C20.0469 12.7917 19.901 13.6562 19.6094 14.4688C19.3177 15.2812 18.9219 16 18.4219 16.625L26.2969 24.5L24.5469 26.25ZM11.9219 17.5C13.4844 17.5 14.8127 16.9529 15.9069 15.8588C17.001 14.7646 17.5477 13.4367 17.5469 11.875C17.5469 10.3125 16.9998 8.98417 15.9056 7.89C14.8115 6.79583 13.4835 6.24917 11.9219 6.25C10.3594 6.25 9.03104 6.79708 7.93687 7.89125C6.84271 8.98542 6.29604 10.3133 6.29688 11.875C6.29688 13.4375 6.84396 14.7658 7.93813 15.86C9.03229 16.9542 10.3602 17.5008 11.9219 17.5Z" fill="black" fillOpacity="0.68"/>
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
    </div>
  );
}
