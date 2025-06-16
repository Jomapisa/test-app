// for now will stay as a server component to meet the requirement. Will change to client and apply the theme later on.
import { promises as fs } from "fs";

interface PostsType {
    title: String;
    author: String;
    description: String;
    content: String;
}

export default async function Posts(){

    const file = await fs.readFile(process.cwd() + "/data/posts.json", "utf-8");
    const data = JSON.parse(file);

    return(
        <div  className="min-h-[85vh] w-full px-36 py-18 flex flex-col items-center">
            {data.posts.map((post: PostsType, i: Number)=>{
                return(
                    <div className="rounded-2xl w-1/2 shadow-lg p-4 m-4">
                        <h2 className="text-center text-2xl">{post.title}</h2>
                        <div className="mx-16 my-4 h-0.5 bg-gradient-to-r from-blue-300/0 via-blue-500 to-blue-300/0"></div>
                        <h3 className="text-center text-lg">By {post.author}</h3>
                        <p className="text-center">{post.description}</p>
                    </div>
                );
            })
            }
        </div>
    )
}