import { PostsType } from "@/app/posts/page";

type PostBodyProps = {
    post: PostsType;
}; 

export default async function PostBody({ post }: PostBodyProps) {

    console.log(post);
    return(
        <div>
            <h1 className="text-4xl font-bold text-center">{post.title}</h1>
            <div className="mx-16 my-4 h-0.5 bg-gradient-to-r from-blue-300/0 via-blue-500 to-blue-300/0"></div>
            <h3 className="text-xl text-center">By {post.author}</h3>
            <p className="whitespace-pre-line my-4">{post.content}</p>
        </div>
    )
}