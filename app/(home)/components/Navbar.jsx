"use client";
import Link from "next/link";
import React from "react";

import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

// import

export default function Navbar() {
  // const [active ,SetActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const Navlinks = [
    {
      Title: "Home",
      NavigateLinks: "project",
    },
    {
      Title: "About",
      NavigateLinks: "project",
    },
    {
      Title: "Skills",
      NavigateLinks: "skills",
    },
   
    {
      Title: "Projects",
      NavigateLinks: "exprience",
    },
    {
      Title: "Contact",
      NavigateLinks: "exprience",
    },
  ];
  return (
    <nav className="w-full flex justify-around items-center p-5  dark:bg-neutral-950 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] border-s-fuchsia-200 shadow-lg border-cyan-100 fixed z-30 ">
      <div className="">
        <h2 className="navbar-logo1 text-2xl decoration-cyan-500 text-white ">
          <span className="text-black bg-white font-semibold md:text-3xl text-lg md:rounded-xl rounded px-2 mr-[4px] ">
            𝕾
          </span>
          Sharun Das
        </h2>
      </div>
    
      

      <div className=" items-center md:flex hidden gap-4">
        {Navlinks.map((Navlink, index) => (
          <Link
            className="text-base lg:text-lg hover:underline hover:text-blue-500 text-gray-300"
            href={Navlink.NavigateLinks}
            key={index}
          >
            {Navlink.Title}
          </Link>
        ))}
      </div>



      <div className="">
        <button className="bg-white text-black rounded md:rounded-xl  py-[7px] px-[6px] md:py-[11px] md:px-[10px] md:text-base text-sm font-bold hover:bg-blue-900 hover:text-white hover:transition">
          Download Resume
        </button>
        {/* <AiOutlineMenu /> */}
      </div>
      

      {/* {mobile view} */}
      <div className=" items-center md:hidden flex justify-center gap-4">
        <div
          className=" object-contain cursor-pointer z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div
          className={`${
            !isOpen ? "hidden" : "flex"
          } w-1/2 p-8  bg-gray-500 absolute top-16 right-3  rounded-b-xl ease-in-out `}
        >
          <ul className="">
            {Navlinks.map((Navlink, index) => (
              <li onClick={() => {
                setIsOpen(!isOpen)
              }}
              key={index}
              >
                <Link
                  className="text-base lg:text-lg hover:underline hover:text-blue-500 text-gray-300  flex flex-col gap-4 p-2 justify-center "
                  href={Navlink.NavigateLinks}
                
                >
                  {Navlink.Title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
