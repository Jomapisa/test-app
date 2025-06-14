"use client"

import {useState} from "react";

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

    return(
        <div className="rounded-2xl shadow-2xl py-4 px-6">
            <h2 className="text-center text-2xl">Counter</h2>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-300/0 via-blue-500 to-blue-300/0 my-2"></div>
            <div className="w-full rounded-lg bg-gray-300 my-4 h-12 flex items-center justify-end p-2 text-2xl">{count}</div>
            <button onClick={reset} className="transition-all duration-150 hover:bg-blue-400 cursor-pointer h-12 w-12 mr-2 p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl">↺</button>
            <button onClick={increase} className="transition-all duration-150 hover:bg-blue-400 cursor-pointer h-12 w-12 mx-2 p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl font-bold">+</button>
            <button onClick={decrease} className="transition-all duration-150 hover:bg-blue-400 cursor-pointer h-12 w-12 ml-2 p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl font-bold">−</button>
        </div>
    );
}