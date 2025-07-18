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
    
    return <>
        <h1>{thisPost.title}</h1>
        <p>{thisPost.body}</p>
        <Link className="link" href="/posts"><b>&larr; Back</b></Link>
    </>
}
