"use client"

import { useTheme } from "@/context/ThemeContext";

export default function Contact() {

    const theme = useTheme();

    const bgColor = theme.theme === "light" ? "bg-white" : "bg-gray-800";
    const textColor = theme.theme === "light" ? "" : "text-white"; 

    return(
        <div className={`h-[85vh] w-full p-36 ${bgColor} ${textColor}`}>
            <h1 className="font-extrabold text-4xl my-8">Contact</h1>
            <p>You can contact us by phone or email</p>
            <p>+852 1234 5678</p>
            <p>enquiries@some.domain.com</p>
        </div>
    )
}