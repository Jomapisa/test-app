"use client"

import {useTheme} from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar(){

    const theme = useTheme();

    const bgColor = theme.theme === "dark" ? "bg-gray-600": "bg-blue-400";
    const aBgColor = theme.theme === "dark" ? "bg-gray-600 hover:bg-gray-400": "bg-blue-400 hover:bg-blue-200";
    const textColor = theme.theme === "dark" ? "text-white": "";

    
    return(
        <nav className={`max-w-full sticky h-20 top-0 m-0 ${bgColor} flex justify-end ${textColor}`}>
            <a href="/" className={`w-24 flex items-center justify-center cursor-pointer transition-all duration-150 ${aBgColor}`}>Home</a>
            <a href="/about" className={`w-24 flex items-center justify-center cursor-pointer transition-all duration-150 ${aBgColor}`}>About</a>
            <a href="/contact" className={`w-24 flex items-center justify-center cursor-pointer transition-all duration-150 ${aBgColor}`}>Contact</a>
            <div className={`my-4 mx-2 h-12 flex items-center `}>Toggle theme {"->"}</div>
            <ThemeToggle/>
        </nav>
    )
}