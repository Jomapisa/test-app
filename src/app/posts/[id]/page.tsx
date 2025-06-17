import { promises as fs } from "fs";
import { PostsType } from "@/app/posts/page";
import PostBody from "@/components/PostBody";
import { notFound } from "next/navigation";

export async function generateStaticParams() {

    const file = await fs.readFile(process.cwd() + "/data/posts.json", "utf-8");
    const data = JSON.parse(file);
    const posts = data.posts;

    return posts.map((post: PostsType) => ({id: String(post.id)}));
}

async function getPost(id:String){

    const file = await fs.readFile(process.cwd() + "/data/posts.json", "utf-8");
    const data = JSON.parse(file);
    const post = id && id !== undefined ? data.posts.find((p: PostsType) => p.id === Number(id)) : null;

    return post;
}

interface PostParams {
  id: string
}

export default async function Post({ params }: { params: PostParams }){

    const post = await getPost(params.id)
    if(!post){
        return notFound();
    }

    return(
        <PostBody post={post}></PostBody>
    )
}
