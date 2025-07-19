import Posts from "./posts";
import { sleep } from "../utils";
import { Post } from "./types";
import { cookies } from "next/headers";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

async function fetchPosts(userId: number): Promise<Post[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    await sleep(400) // To demonstrate loading state
    return posts;
}

export default async function PostsPage() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId');
    if (userId?.value) {
        const posts = fetchPosts(parseInt(userId.value));
        return <Posts posts={posts} />
    } else {
        return <Alert className="size-fit" variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>No user ID found</AlertTitle>
      </Alert>
    }
}