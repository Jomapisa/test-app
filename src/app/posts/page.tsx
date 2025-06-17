// for now will stay as a server component to meet the requirement. Will change to client and apply the theme later on.
import PostsPage from "@/components/PostsPage";
import { promises as fs } from "fs";

export interface PostsType {
    id: Number
    title: String;
    author: String;
    description: String;
    content: String;
}

export default async function Posts(){

    const file = await fs.readFile(process.cwd() + "/data/posts.json", "utf-8");
    const data = JSON.parse(file);
    console.log(data);
    return(
        <PostsPage posts={data.posts} />
    )
}