"use client"

import {useState} from "react";
import {useTheme} from "@/context/ThemeContext";

export default function Counter() {

    const [count, setCount] = useState<number>(0);

    function increase(): void {
        setCount(count + 1);
    }

    function decrease(): void {
        setCount(count - 1);
    }

    function reset(): void {
        setCount(0);
    }

    const theme = useTheme();

    const bgColor = theme.theme === "dark" ? "bg-gray-900": "";
    const textColor = theme.theme === "dark" ? "text-white": "";
    const countBgColor = theme.theme === "dark" ? "bg-lime-600": "bg-gray-300";

    return(
        <div className={`rounded-2xl shadow-2xl py-4 px-6 ${bgColor}`}>
            <h2 className={`text-center text-2xl ${textColor}`}>Counter</h2>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-300/0 via-blue-500 to-blue-300/0 my-2"></div>
            <div className={`w-full rounded-lg my-4 h-12 flex items-center justify-end p-2 text-2xl ${countBgColor}`}>
                {count}
            </div>
            <button onClick={reset} className="transition-all duration-150 hover:bg-blue-400 cursor-pointer h-12 w-12 mr-2 p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl">↺</button>
            <button onClick={increase} className="transition-all duration-150 hover:bg-blue-400 cursor-pointer h-12 w-12 mx-2 p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl font-bold">+</button>
            <button onClick={decrease} className="transition-all duration-150 hover:bg-blue-400 cursor-pointer h-12 w-12 ml-2 p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl font-bold">−</button>
        </div>
    );
}