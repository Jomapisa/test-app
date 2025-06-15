"use client"

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle(){

    const theme = useTheme();

    const btnBgColor = theme.theme === "dark" ? "bg-gray-500 hover:bg-gray-400": "bg-blue-200 hover:bg-white"; //maybe ill beautify later

    return(
        <button onClick={theme.toggleTheme} className={`m-4 w-24 h-12 cursor-pointer transition-all duration-150 ${btnBgColor} rounded-lg shadow-xl`}>{theme.theme}</button>
    )
}