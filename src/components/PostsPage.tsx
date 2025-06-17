"use client"

import { useTheme } from "@/context/ThemeContext"
import { PostsType } from "@/app/posts/page";

export default function PostsPage({posts}: {posts: PostsType[]}){

    const theme = useTheme();
    
    const bgColor = theme.theme === "light" ? "bg-white" : "bg-gray-800";
    const cardColor = theme.theme === "light" ? "bg-white" : "bg-gray-900";
    const textColor = theme.theme === "light" ? "" : "text-white";

    return(
        <div  className={`min-h-[85vh] w-full px-36 py-18 flex flex-col items-center ${bgColor}`}>
            {posts.map((post: PostsType, i: number)=>{
                return(
                    <a href={`/posts/${post.id}`} key={i} className={`rounded-2xl w-1/2 shadow-lg p-4 m-4 ${cardColor} ${textColor}`}>
                        <h2 className="text-center text-2xl">{post.title}</h2>
                        <div className="mx-16 my-4 h-0.5 bg-gradient-to-r from-blue-300/0 via-blue-500 to-blue-300/0"></div>
                        <h3 className="text-center text-lg">By {post.author}</h3>
                        <p className="text-center">{post.description}</p>
                    </a>
                );
            })
            }
        </div>
    )
}