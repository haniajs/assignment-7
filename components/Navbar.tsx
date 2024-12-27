"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  
  }

  return (
     <>
     {/*  For large screen */}
     <div className="sm:hidden md:block">
        <div className="w-full h-[80px] bg-violet-800 flex">
            <div>
                <h1 className="text-white p-8 font-medium text-[40px] leading-[20px]"><b>&quot;DATA FATCHING&quot;</b></h1>
            </div>
            <div className="pl-[380px]">
                <nav className="pt-6">
                    <Link href={"/"} className="text-white font-medium text-[18px] leading-[24px] hover:border-b"><b>Home </b> </Link>
                    <Link href={"/server"} className="text-white font-medium text-[18px] leading-[24px] hover:border-b"><b>Server-Side-Rendering </b> </Link>
                    <Link href={"/client"} className="text-white font-medium text-[18px] leading-[24px] hover:border-b"><b>Client-Side-Rendering </b> </Link>
                </nav>
            </div>
        </div>
     </div>





      {/*  For Mobile screen */}

  <nav className="h-[80px] bg-violet-800 p-6 md:hidden w-[427px]">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="flex gap-x-2">
        <h1 className="font-medium text-[35px] leading-[20px] text-white"><b>&quot;DATA FATCHING&quot;</b></h1>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex flex-grow items-center justify-center space-x-2 ${
            isMenuOpen ?  "flex flex-col space-y-4 absolute top-[90px] right-0 w-[300px] bg-white p-4" : "hidden"
          }`}
        >


<Link href="/" className="text-violet-800 font-medium border-b border-violet-800 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            <b>Home</b>
          </Link>
          <Link href="/server" className="text-violet-800 font-medium border-b border-violet-800 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
          <b>Server-Side-Rendering</b>
          </Link>
          <Link href="/client" className="text-violet-800 font-medium border-b border-violet-800 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
          <b>Client-Side-Rendering</b>
          </Link>

</div>
      </div>
    </nav>
     </>
  );
}