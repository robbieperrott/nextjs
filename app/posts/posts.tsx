'use client'
import { use } from 'react'
import { Post } from './types'
import Link from 'next/link'
 
export default function Posts({
  posts,
}: {
  posts: Promise<Post[]>
}) {
  const allPosts = use(posts)
 
  return (
    <div className="grid grid-cols-4 gap-4">
      {allPosts.map((post) => (
        <Card key={post.id} post={post}/>
      ))}
    </div>
  )
}

function Card(params: {post: Post}) {
  const {post} = params;
  const maxCharacters = 100
  const ellipses = post.body.length > maxCharacters;

  return <Link className="link" href={`/posts/${post.id}`}>
      <div className="border rounded-md p-8 space-y-4 h-full">
        <div className="font-bold">{post.title} &rarr;</div>
        <div>{post.body.substring(0, maxCharacters)}{ellipses ? "..." : ""}</div>
      </div>
    </Link>
}