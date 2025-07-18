import { Suspense } from "react";
import Posts from "./posts";
import { sleep } from "../utils";
import { Post } from "./types";

async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    await sleep(200) // To demonstrate loading state
    return posts;
}

export default function PostsPage() {
    const posts = fetchPosts();

    return <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts} />
        </Suspense>
}