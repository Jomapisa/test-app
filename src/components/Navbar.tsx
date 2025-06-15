"use client"

import {useTheme} from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar(){

    const theme = useTheme();

    const bgColor = theme.theme === "dark" ? "bg-gray-600": "bg-blue-400";
    
    return(
        <div className={`max-w-full sticky h-20 top-0 m-0 ${bgColor} flex justify-end`}>
            <div className="my-4 mx-2 h-12 flex items-center text-white">Toggle theme {"->"}</div>
            <ThemeToggle/>
            </div>
    )
}