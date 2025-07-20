import { Suspense } from "react";
import { sleep } from "../utils";
import { Skeleton } from "@/components/ui/skeleton";

async function fetchNumUserPosts(userId: number): Promise<number> {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    await sleep(1000);   // To demonstrate streaming
    return posts.length;
}

export default async function NumPosts(params: {userId: number}) {
    const numPosts = fetchNumUserPosts(params.userId);
    return <Suspense fallback={<Skeleton className="h-[24px] w-full"/>}>
        {numPosts}
    </Suspense>
}