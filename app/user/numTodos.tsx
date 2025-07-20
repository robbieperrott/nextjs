import { Suspense } from "react";
import { sleep } from "../utils";
import { Skeleton } from "@/components/ui/skeleton";

async function fetchNumUserTodos(userId: number): Promise<number> {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos = await response.json();
    await sleep(1500);  // To demonstrate streaming
    return todos.length;
}

export default async function NumTodos(params: {userId: number}) {
    const numTodos = fetchNumUserTodos(params.userId);
    return <Suspense fallback={<Skeleton className="h-[24px] w-full"/>}>
        {numTodos}
    </Suspense>
}