'use client'
import { use } from "react";
import { Post as PostType } from "../types";
import Link from "next/link";

export default function Post({
  post,
}: {
  post: Promise<PostType>
}) {
    const thisPost = use(post);
    
    return <div className="space-y-4">
        <div className="font-semibold text-xl">{thisPost.title}</div>
        <div>{thisPost.body}</div>
        <Link className="font-semibold" href="/posts">&larr; Back</Link>
    </div>
}
