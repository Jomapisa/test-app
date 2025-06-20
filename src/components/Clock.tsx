"use client"

import {useState, useEffect} from "react";
import {useTheme} from "@/context/ThemeContext";

export default function Clock() {

    const [time, setTime] = useState<string>("--:--:--"); // placeholder for a smoother transition. The time will only be rendered client-side, as the client could be in a different time zone 

    useEffect(() => {
        setTime(new Date().toLocaleTimeString()) // get the client time as soon as possible.
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return() => {
            clearInterval(intervalId); //clear on unmount
        }
    }, []);

    const theme = useTheme();

    const textColor = theme.theme === "dark" ? "text-white" : "";

    return(
        <span className={`${textColor}`}>{time}</span>
    );
}