"use client"

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {

    const theme = useTheme();

    const bgColor = theme.theme === "light" ? "bg-blue-300" : "bg-gray-600";
    const textColor = theme.theme === "light" ? "" : "text-white";

    return(
        <div className={`w-full h-40 grid grid-cols-8 ${bgColor} ${textColor} px-36 py-4`}>
            <div className="col-span-2">
                <h2 className="font-bold text-2xl">This is the footer</h2>
                <p>We can put a lot of stuff here, but for now i will just write some filler text to showcase how it would look like</p>
            </div>
            <div className="col-start-5 col-span-2">
                <a href="/about">About</a>
            </div>
            <div className="col-span-2">
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}