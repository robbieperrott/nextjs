import { Suspense } from "react";
import { sleep } from "../utils";
import { Skeleton } from "@/components/ui/skeleton";

async function fetchNumUserComments(userId: number): Promise<number> {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?userId=${userId}`);
    const comments = await response.json();
    await sleep(3000);  // To demonstrate streaming
    return comments.length;
}

export default async function NumComments(params: {userId: number}) {
    const numComments = fetchNumUserComments(params.userId);
    return <Suspense fallback={<Skeleton className="h-[24px] w-full"/>}>
        {numComments}
    </Suspense>
}