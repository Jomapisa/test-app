"use client"

import Counter from "@/components/Counter";
import Clock from "@/components/Clock";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {

  const theme = useTheme();

  const bgColor = theme.theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme.theme === "light" ? "" : "text-white"; 

  return (
    <div className={`h-[85vh] w-full grid p-36 ${bgColor}`}>
      <div className="grid grid-cols-2">
        <div className={`${textColor}`}>
          <h1 className="font-extrabold text-4xl my-8">Welcome</h1>
          <h2 className="text-2xl my-6">The current time is <Clock/></h2>
          <p>This is the home page of this React + Next.js learning miniproject. You can browse around and try out its features. Check out the counter component on the right, and the theme toggle button on the navbar! you can also verify the App routing by going to <a className="underline cursor-pointer hover:text-cyan-400" href="/about">about</a> or <a className="underline cursor-pointer hover:text-cyan-400" href="/contact">contact</a> :)</p>
          <div className="my-8"><a href="/posts" className="transition-all duration-150 hover:bg-blue-400 cursor-pointer p-2 rounded-xl shadow-lg bg-blue-500 text-white text-xl">View Posts</a></div>
        </div>
        <div className="flex justify-center">
          <Counter/>
        </div>
      </div>
    </div>
  );
}
