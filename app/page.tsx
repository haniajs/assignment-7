import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

export default function Home () {
  return (
    <div>
      <Navbar />

      {/*  For large screen */}
       <div className="sm:hidden md:block">

        <div className="h-screen ">
          <div className="pt-[200px]">
            <h1 className="text-center text-violet-800 font-extrabold text-[50px] leading-[30px]">Data Fatching</h1>
            <p className="text-center text-violet-800 font-semibold text-[20px] leading-[24px] p-14">I am using data fatching in assignment no 7 by the help of server side rendering and client side rendering.</p>
          </div>
        <div className="flex gap-x-4 justify-center items-center pt-[45px]">
         <Link href={"/server"}> <button className="bg-violet-800 font-medium text-[20px] leading-[24px] h-[100px] w-[250px] text-white rounded-lg hover:bg-slate-700 hover:text-white">Server-Side-Rendering</button></Link>
         <Link href={"/client"}><button className="bg-violet-800 font-medium text-[20px] leading-[24px] h-[100px] w-[250px] text-white rounded-lg hover:bg-slate-700 hover:text-white">Client-Side-Rendering</button></Link>
        </div>
        </div>

       </div>


       {/*  For mobile screen */}
       <div className="md:hidden sm:block">
        <div  className="h-screen pt-[200px]">
          <h1 className="text-center text-violet-800 font-extrabold text-[50px] leading-[30px]">Data Fatching</h1>
          <p className="text-center text-violet-800 font-semibold text-[20px] leading-[24px] p-14">I am using data fatching in assignment no 7 by the help of server side rendering and client side rendering.</p>
          <div className="flex gap-x-4 pl-4 pr-4">
         <Link href={"/server"}><button className="bg-violet-800 font-medium text-[20px] leading-[24px] h-[100px] w-[180px] text-white rounded-lg">Server-Side-Rendering</button></Link> 
          <Link href={"/client"}><button className="bg-violet-800 font-medium text-[20px] leading-[24px] h-[100px] w-[180px] text-white rounded-lg">Client-Side-Rendering</button></Link> 
          </div>
        </div>
       </div>
      <Footer />
      </div>
  );
}