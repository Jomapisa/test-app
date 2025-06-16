"use client"

import {useState, useEffect} from "react";
import { PostsType } from "@/app/posts/page";

type PostBodyProps = {
    post: PostsType;
}; 

export default function PostBody({ post }: PostBodyProps) {
    const [liked, setLiked] = useState<boolean>(false);
    
    const toggleLiked = () => {
        setLiked((currentLiked) => (!currentLiked));
    };

    useEffect(() => {
        const storedValue = localStorage.getItem("liked-"+post.id);
        if (storedValue) {
            setLiked(storedValue === "true");
        }
    }, [post.id]);

    useEffect(() => {
        localStorage.setItem("liked-"+post.id, liked.toString());
    }, [liked]);

    console.log(post);
    return(
        <div>
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold text-center">{post.title}</h1>
                <button className="cursor-pointer mt-2.5 mx-2" onClick={toggleLiked}>{liked ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-pink-500"  viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-pink-500" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>}</button>
            </div>
            <div className="mx-16 my-4 h-0.5 bg-gradient-to-r from-blue-300/0 via-blue-500 to-blue-300/0"></div>
            <h3 className="text-xl text-center">By {post.author}</h3>
            <p className="whitespace-pre-line my-4">{post.content}</p>
        </div>
    )
}