import React from "react";
import Link from "next/link";

export default function Footer () {
  return (
    <>
    {/*  For large screen */}
    <div className="sm:hidden md:block">
    <div className="h-[360px] bg-violet-800">
        <div className="flex w-full h-[260px] bg-violet-800 text-white pl-[80px] border border-b-white">
            <div className="flex-1 pt-10">
                <h1 className="font-bold text-[30px] leading-[35px]">"DATA FATCHING"</h1>
                <p className="font-normal text-[16px] leading-[24px] pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Molestiae modi cum ipsam ad, illo possimus laborum ut
                   reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                   eaque? </p>
            </div>
            <div className="flex-1 pt-10 pl-[60px]">
                <h1 className="font-bold text-[25px] leading-[35px]">Links</h1><br />
                <Link href={"/"} className="font-normal text-[16px] leading-[24px] pt-0">Home</Link><br />
                <Link href={"/server"} className="font-normal text-[16px] leading-[24px] mt-4">Server-Side-Rendering</Link><br />
                <Link href={"/client"} className="font-normal text-[16px] leading-[24px]">Client-Side-Rendering</Link>
            </div>
            <div className="flex-1 pt-10">
                <h1 className="font-bold text-[25px] leading-[35px]">Resourses</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Ask For Help</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Stay Connected</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Sign Up</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Login</h1>
            </div>
        </div>
        <div className="text-center text-white">
            <h1 className="font-medium text-[18px] leading-[35px] p-8">2024 Data Fatching | All Right Reserved</h1>
        </div>
    </div>
    </div>



    {/*  For Mobile screen */}
    <div className="md:hidden sm:block">
        <div className="h-[680px] bg-violet-800">
            <div className="text-center text-white border border-b-white">
                <h1 className="font-bold text-[30px] leading-[35px] pt-8">"DATA FATCHING"</h1>
                <p className="font-normal text-[16px] leading-[24px] pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Molestiae modi cum ipsam ad, illo possimus laborum ut
                   reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                   eaque? </p>

                   <h1 className="font-bold text-[25px] leading-[35px] pt-6">Links</h1><br />
                <Link href={"/"} className="font-normal text-[16px] leading-[24px] pt-0">Home</Link><br />
                <Link href={"/server"} className="font-normal text-[16px] leading-[24px] mt-4">Server-Side-Rendering</Link><br />
                <Link href={"/client"} className="font-normal text-[16px] leading-[24px]">Client-Side-Rendering</Link>

                <h1 className="font-bold text-[25px] leading-[35px] pt-6">Resourses</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Ask For Help</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Stay Connected</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Sign Up</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4 pb-8">Login</h1>
            </div>

            <div className="text-center text-white">
                <h1 className="font-medium text-[18px] leading-[35px] p-8">2024 Data Fatching | All Right Reserved</h1>
            </div>
        </div>
    </div>
    </>
  );
}