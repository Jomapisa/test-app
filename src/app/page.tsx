"use client"

import Counter from "@/components/Counter";
import Clock from "@/components/Clock";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {

  const theme = useTheme();

  const bgColor = theme.theme === "light" ? "bg-white" : "bg-gray-800" 

  return (
    <div className={`h-screen w-full flex justify-center p-36 ${bgColor}`}>
      <div>
        <Clock></Clock>
        <Counter></Counter>
      </div>
    </div>
  );
}
