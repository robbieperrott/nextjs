import Posts from "./posts";
import { sleep } from "../utils";
import { Post } from "../types";
import NoUserIdFoundAlert from "../components/errorAlerts/noUserIdFoundAlert";
import { getUserId } from "../actions";

async function fetchPosts(userId: number): Promise<Post[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    await sleep(400) // To demonstrate loading state
    return posts;
}

export default async function PostsPage() {
    const userId = await getUserId();
    if (userId) {
        const posts = fetchPosts(userId);
        return <Posts posts={posts} />
    } else {
        return <NoUserIdFoundAlert/>
    }
}