"use client"

import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";
import {useTheme} from "@/context/ThemeContext";

interface CountdownPropsType {
    seconds: number;
    redirect: string;
}

export default function Clock(props: CountdownPropsType) {

    const [timer, setTimer] = useState<number>(props.seconds);

    const router = useRouter();

    useEffect(() => {
        const intervalId = setInterval(()=>{
            console.log('huh')
            console.log(timer)
            setTimer((prevTimer) => {
                const newTimer = prevTimer - 1;
                if (newTimer <= 0) {
                    router.push(props.redirect);
                }
                return newTimer;
            });
            
        }, 1000);

        return() => {
            clearInterval(intervalId); //clear on unmount
        }
    }, []);

    const theme = useTheme();

    const textColor = theme.theme === "dark" ? "text-white" : "";

    return(
        <span className={`${textColor}`}>Navigating to {props.redirect} in {timer} seconds!</span>
    );
}