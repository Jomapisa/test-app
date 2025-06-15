import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Expando Test App",
  description: "React + Next.js learning exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
