
import { useHome } from "@/context/home";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

//const arr=[{"Dusshera Vectors"},{},{},{}]

export default function SearchObjects() {
  const pathname = usePathname();
  const home = useHome();

  return (
    <>
      <div className="lg:pb-10">
        <div className="hidden lg:flex lg:flex-row items-center justify-center  gap-x-[18px]">
          <form>
            <button className=" px-3 py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white   border-solid gap-x-2">
              <h3 className="text-[12px]  font-poppins text-nowrap ">
                Dusshera Vectors
              </h3>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8453 9.14217L6.74219 7.03906"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
          <form>
            <button className=" px-3  py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white   border-solid gap-x-2">
              <h3 className="text-[12px]  font-poppins text-nowrap ">
                Animations
              </h3>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8453 9.14217L6.74219 7.03906"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
          <form>
            <button className=" px-3  py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white   border-solid gap-x-2">
              <h3 className="text-[12px]  font-poppins text-nowrap ">
                instagram Posters
              </h3>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8453 9.14217L6.74219 7.03906"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
          <form>
            <button className=" px-3  py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white   border-solid gap-x-2">
              <h3 className="text-[12px]  font-poppins text-nowrap ">
                school brocuhures
              </h3>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8453 9.14217L6.74219 7.03906"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
          <form>
            <button className=" px-3  py-2 inline-flex flex-row items-center  justify-around rounded-[75.2px] bg-mycolor2 text-white border-white   border-solid gap-x-2">
              <h3 className="text-[12px]  font-poppins text-nowrap ">
                christmas
              </h3>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.59583 7.92604C6.2711 7.92604 7.62917 6.56797 7.62917 4.89271C7.62917 3.21744 6.2711 1.85938 4.59583 1.85938C2.92057 1.85938 1.5625 3.21744 1.5625 4.89271C1.5625 6.56797 2.92057 7.92604 4.59583 7.92604Z"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8453 9.14217L6.74219 7.03906"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
      {pathname === "/home/vectors" ? (
        <>
          
          <div className="m-1 p-1">
            <div className="mx-16 my-1 p-1 inline-flex flex-row text-white items-center justify-start gap-x-1">
              <FiHome color="#FFF" size={15}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">Home</h5>
              <MdKeyboardArrowRight color="#FFF" size={20}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">{home.homeTab}</h5>
            </div>
          </div>
        </>
      ) : null}
            {pathname === "/home/animations" ? (
        <>
          
          <div className="m-1 p-1">
            <div className="mx-16 my-1 p-1 inline-flex flex-row text-white items-center justify-start gap-x-1">
              <FiHome color="#FFF" size={15}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">Home</h5>
              <MdKeyboardArrowRight color="#FFF" size={20}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">{home.homeTab}</h5>
            </div>
          </div>
        </>
      ) : null}
            {pathname === "/home/posters" ? (
        <>
          
          <div className="m-1 p-1">
            <div className="mx-16 my-1 p-1 inline-flex flex-row text-white items-center justify-start gap-x-1">
              <FiHome color="#FFF" size={15}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">Home</h5>
              <MdKeyboardArrowRight color="#FFF" size={20}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">{home.homeTab}</h5>
            </div>
          </div>
        </>
      ) : null}
            {pathname === "/home/brochures" ? (
        <>
          
          <div className="m-1 p-1">
            <div className="mx-16 my-1 p-1 inline-flex flex-row text-white items-center justify-start gap-x-1">
              <FiHome color="#FFF" size={15}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">Home</h5>
              <MdKeyboardArrowRight color="#FFF" size={20}/>
              <h5 className="text-[16px] font-poppins600 font-medium not-italic">{home.homeTab}</h5>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
