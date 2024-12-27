 "use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface IClient {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

const Page = () => {
    const [data, setData] = useState<IClient[]>([]);

    useEffect (() => {
        const fetchData = async () => {
            const refresh = await fetch("https://fakestoreapi.com/products");

            const parsedRefresh: IClient[] = await refresh.json();
            console.log("client >>>", parsedRefresh);
            setData(parsedRefresh);
        };
        fetchData();
    },[]);

    return (
        <div>
        <Navbar />

         {/*  For large screen */}
        <div className="sm:hidden md:block">
        <h1 className="text-violet-800 text-center font-extrabold text-[40px] leading-[25px] mt-12">Client Side Rendering </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-5 pt-[40px] pr-4 pl-6 pb-[40px]">
            {data.map ((client, index) => (
                <div key={index} className="flex flex-col rounded-[10px] p-4 h-[1100px] w-[380px] shadow-xl border">
                    <div className="pt-10">
                    <img src={client.image} alt={client.title} className="h-[200px] w-[150px] ml-[100px]" />
                    <p className="font-bold text-[20px] leading-[24px] mt-6">{client.title}</p>
                    <p className="font-medium text-[18px] leading-[24px] mt-4">{client.category}</p>
                    <p className="font-medium text-[20px] leading-[24px] mt-4">price: ${client.price}</p>
                    <p className="font-medium text-[18px] leading-[24px] mt-4">{client.description}</p>
                    <div className="flex gap-x-6 mt-4">
                    <p className="font-medium text-[18px] leading-[24px] mt-4 flex">{client.rating.rate}<FaStar className="text-violet-800"/></p>
                    <p className="font-medium text-[18px] leading-[24px] mt-4">({client.rating.count} reviews)</p>
                    </div>
                    </div>
                    <button className="mt-10 h-[60px] bg-violet-800 text-white rounded-[10px]"><b>Add to cart</b></button>
                </div>
            ))}
        </div>
        </div>






         {/*  For mobile screen */}

         <div className="md:hidden sm:block">
        <h1 className="text-violet-800 text-center font-extrabold text-[30px] leading-[24px] mt-12">Client Side Rendering </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-5 pt-[40px] pr-4 pl-6 pb-[40px]">
            {data.map ((client, index) => (
                <div key={index} className="flex flex-col rounded-[10px] p-4 h-[1100px] w-[380px] shadow-xl border">
                    <div className="pt-10">
                    <img src={client.image} alt={client.title} className="h-[200px] w-[150px] ml-[100px]" />
                    <p className="font-bold text-[20px] leading-[24px] mt-6">{client.title}</p>
                    <p className="font-medium text-[18px] leading-[24px] mt-4">{client.category}</p>
                    <p className="font-medium text-[24px] leading-[24px] mt-4">price: ${client.price}</p>
                    <p className="font-medium text-[18px] leading-[24px] mt-4">{client.description}</p>
                    <div className="flex gap-x-6 mt-4">
                    <p className="font-medium text-[18px] leading-[24px] mt-4 flex">{client.rating.rate}<FaStar className="text-violet-800"/></p>
                    <p className="font-medium text-[18px] leading-[24px] mt-4">({client.rating.count} reviews)</p>
                    </div>
                    </div>
                    <button className="mt-10 h-[60px] bg-violet-800 text-white rounded-[10px]"><b>Add to cart</b></button>
                </div>
            ))}
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default Page;