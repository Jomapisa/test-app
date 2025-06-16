"use client"

import {useState, useEffect, createContext, ReactNode, useContext} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
});

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }: {children: ReactNode}) {

    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") || "dark") as Theme; // will be ugly, as the theme stored might be different than the default one. The user's theme choice should be stored in the server if we are going to use SSR...
        }
        return "dark";
    });

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme=== "light" ? "dark" : "light"));
    };

    const value = {
        theme,
        toggleTheme,
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}