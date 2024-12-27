"use client"
import { useState, useEffect } from "react";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [refetchApi, setRefetchApi] = useState(false);

    useEffect(() => {
        setLoading (true);
        setTimeout (() => {
            console.log("this is running before the page load");
            setLoading(false);
        },3000);
    }, [refetchApi, setRefetchApi]);


    return (
        <div>
            {loading ? (
                "Loading ..."
            ): (
                <div>
                    <p>This is the data is needed to be fetched before the component load</p>
                </div>
            )}
        </div>
    );
};


export default Page;


