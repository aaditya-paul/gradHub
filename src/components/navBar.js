import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import Chat from "../../public/assets/chat.png";
import Bell from "../../public/assets/bell.png";
import ProfilePic from "../../public/assets/pfp.png";
import Arrow from "../../public/assets/arrow.png";
import Home from "../../public/assets/home.png";
import Applicants from "../../public/assets/applicants.png";
import Calendar from "../../public/assets/calendar.png";
import QnA from "../../public/assets/qna.png";
function NavBar({children}) {
  return (
    <div className="  shadow-lg fixed w-[100vw] h-[10vh] bg-[#01B0F1] flex items-center justify-between px-12">
      {/* Heading */}
      <Link href={"/"} className=" flex items-center gap-5 ">
        <div className=" w-[43px] h-[43px] relative">
          <Image src={Logo} alt="Logo" fill />
        </div>
        <div className=" text-3xl font-logo">
          <span className=" text-white">Grad</span>
          Hub
        </div>
      </Link>
      {/* Icons */}
      <div className=" flex gap-5">
        <div className=" h-[18px] w-[18px] p-2 text-white flex items-center justify-center  rounded-full relative left-[3.8rem] bottom-2 text-xs bg-[#0C6687]">
          1
        </div>
        <div className=" p-2 bg-white rounded-xl flex cursor-pointer ">
          <div className=" relative w-[18px] h-[18px] ">
            <Image src={Chat} alt="Logo" fill objectFit="contain" />
          </div>
        </div>
        <div className=" p-2 bg-white rounded-xl cursor-pointer">
          <div className=" relative w-[18px] h-[18px] ">
            <Image src={Bell} alt="Logo" fill objectFit="contain" />
          </div>
        </div>
        <div className=" p-2 bg-white rounded-xl cursor-pointer flex items-center gap-2">
          <div className=" relative w-[18px] h-[18px] ">
            <Image src={ProfilePic} alt="Logo" fill objectFit="contain" />
          </div>
          <div className=" relative w-[9px] h-[7px]">
            <Image src={Arrow} alt="arrow" fill />
          </div>
        </div>
      </div>
      {/* SideNav */}
      <div className=" absolute shadow-inner  left-0 top-[10vh] h-[90vh] bg-white w-[15vw] z-0">
        <div className=" flex flex-col h-full justify-between">
          {/* upper */}
          <div className=" flex flex-col mt-5 text-[#515151] ">
            <Link
              href={"/"}
              className="m-2  flex items-center gap-5  p-3 rounded-md  "
            >
              <div className="w-[31px] h-[28px] relative">
                <Image
                  src={Home}
                  alt="home"
                  fill
                  objectFit="contain"
                  className=" mx-1"
                />
              </div>
              <div className=" text-center font-inter mt-1">Home</div>
            </Link>
            <Link
              href={"/"}
              className="m-2  flex items-center gap-5 bg-[#01B0F1] bg-opacity-15 p-3 rounded-md"
            >
              <div className="w-[31px] h-[28px] relative ">
                <Image
                  src={Applicants}
                  alt="home"
                  fill
                  objectFit="contain"
                  className=" mx-1"
                />
              </div>
              <div className=" text-center font-inter mt-1 text-[#01B0F1] ">
                Applicants
              </div>
            </Link>
            <Link
              href={"/"}
              className=" m-2  flex items-center gap-5   p-3 rounded-md "
            >
              <div className="w-[31px] h-[28px] relative">
                <Image
                  src={Calendar}
                  alt="home"
                  fill
                  objectFit="contain"
                  objectPosition="center"
                  className=" mx-1"
                />
              </div>
              <div className=" text-center font-inter mt-1">Calendar</div>
            </Link>
          </div>
          {/* lower */}
          <Link
            href={"/"}
            className=" flex flex-col my-5 text-[#515151] m-2 p-3"
          >
            <div className=" flex gap-5">
              <div className="w-[24px] h-[24px] relative">
                <Image
                  src={QnA}
                  alt="home"
                  fill
                  objectFit="contain"
                  objectPosition="center"
                  className=" mx-1"
                />
              </div>
              <div>Help</div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" absolute top-[10vh] left-[15vw] w-[85vw]  h-[90vh] shadow-inner ">
        {children}
      </div>
    </div>
  );
}

export default NavBar;
