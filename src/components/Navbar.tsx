"use client"

import {useTheme} from "@/context/ThemeContext";

export default function Navbar(){

    const theme = useTheme();

    const bgColor = theme.theme === "dark" ? "bg-gray-600": "bg-blue-400"
    const btnBgColor = theme.theme === "dark" ? "bg-gray-500 hover:bg-gray-400": "bg-blue-200 hover:bg-white" //maybe ill beautify later
    
    return(
        <div className={`max-w-full sticky h-20 top-0 m-0 ${bgColor} flex justify-end`}>
            <div className="my-4 mx-2 h-12 flex items-center text-white">Toggle theme {"->"}</div>
            <button onClick={theme.toggleTheme} className={`m-4 w-24 h-12 cursor-pointer transition-all duration-150 ${btnBgColor} rounded-lg shadow-xl`}>{theme.theme}</button>
        </div>
    )
}