"use client"

import {useTheme} from "@/context/ThemeContext";
import Countdown from "@/components/Countdown";

export default function About() {

    const theme = useTheme();
    
    const bgColor = theme.theme === "light" ? "bg-white" : "bg-gray-800";
    const textColor = theme.theme === "light" ? "" : "text-white";

    return(
        <div  className={`h-[85vh] w-full px-36 py-18 ${bgColor} ${textColor}`}>
            <h1 className="font-extrabold text-4xl my-8">About</h1>
            <p>This is Jose's React + Next.js learning project. </p>
            <p>Read quickly! <Countdown redirect="/" seconds={10}/></p>
            <h2 className="font-bold text-3xl my-6">Placeholders</h2>
            <h3 className="font-bold text-2xl my-4">We all love placeholders</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}