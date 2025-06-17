"use client"

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {

    const theme = useTheme();

    const bgColor = theme.theme === "light" ? "bg-blue-300" : "bg-gray-600";
    const textColor = theme.theme === "light" ? "" : "text-white";

    return(
        <div className={`w-full h-40 grid grid-cols-8 ${bgColor} ${textColor} px-36 py-4`}>
            <div className="col-span-2">
                <h2 className="font-bold text-2xl my-2">This is the footer</h2>
                <p>We can put a lot of stuff here, but for now i will just write some filler text to showcase how it would look like</p>
                <h3 className="text-xl my-2">Jose's Blog | Expando</h3>
            </div>
            <div className="col-start-5 col-span-2">
                <div className="m-2"><a href="/">Home</a></div>
                <div className="m-2"><a href="/about">About</a></div>
            </div>
            <div className="col-span-2">
                <div className="m-2"><a href="/posts">Posts</a></div>
                <div className="m-2"><a href="/contact">Contact</a></div>
            </div>
        </div>
    )
}