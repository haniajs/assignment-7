import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface IBook {
    id: number;
    name: string;
    type: string;
    available: boolean;
}

const Page = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");

    const parsedResponse: IBook[] = await response.json();
    console.log("book >>>", parsedResponse);


    return (
        <div>
        <Navbar />

        {/*  For large screen */}

        <div className="sm:hidden md:block">
        <h1 className="text-violet-800 text-center font-extrabold text-[40px] leading-[25px] mt-12">Server Side Rendering </h1>
        <div  className="flex flex-wrap gap-x-4 gap-y-5 pt-[40px] pr-4 pl-12 pb-[40px]">
            {parsedResponse.map ((book, index) => (
                <div key={index} className="flex flex-col rounded-[10px] p-4 h-[300px] w-[290px] shadow-xl  border">
                    <div className="pt-10">
                    <p className="font-medium text-[18px] leading-[40px]"><b>id: {book.id}</b></p>
                    <p className="font-medium text-[35px] leading-[40px] text-violet-800"><b>name: {book.name}</b></p>
                    <p className="font-medium text-[18px] leading-[40px]"><b>type: {book.type}</b></p>
                    <p className="font-medium text-[18px] leading-[40px]"><b>available: {`${book.available}`}</b></p>
                    </div>
                </div>
            ))}
        </div>
        </div>




        {/*  For mobile screen */}
        <div className="md:hidden sm:block">
        <h1 className="text-violet-800 text-center font-extrabold text-[30px] leading-[24px] mt-12">Server Side Rendering </h1>
        <div  className="flex flex-wrap gap-x-2 gap-y-5 pt-[40px] pr-4 pl-6 pb-[40px]">
            {parsedResponse.map ((book, index) => (
                <div key={index} className="flex flex-col rounded-[10px] p-4 h-[300px] w-[380px] shadow-xl  border">
                    <div className="pt-10">
                    <p className="font-medium text-[18px] leading-[40px]"><b>id: {book.id}</b></p>
                    <p className="font-medium text-[35px] leading-[40px] text-violet-800"><b>name: {book.name}</b></p>
                    <p className="font-medium text-[18px] leading-[40px]"><b>type: {book.type}</b></p>
                    <p className="font-medium text-[18px] leading-[40px]"><b>available: {`${book.available}`}</b></p>
                    </div>
                </div>
            ))}
        </div>
        </div>

        <Footer />
        </div>
    )
}

export default Page;