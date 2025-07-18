import { sleep } from "@/app/utils";
import { Post as PostType } from "../types";
import Post from "./post";

async function fetchPost(id: string): Promise<PostType> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
    await sleep(400) // To demonstrate loading state
    return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = fetchPost(slug);
    
    return <Post post={post} />
}