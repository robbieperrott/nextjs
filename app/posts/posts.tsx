'use client'
import { use } from 'react'
import { Post } from './types'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
 
export default function Posts({
  posts,
}: {
  posts: Promise<Post[]>
}) {
  const allPosts = use(posts)
 
  return (
    <div className="grid grid-cols-4 gap-4">
      {allPosts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  )
}

function PostCard(params: {post: Post}) {
  const {post} = params;
  const maxCharacters = 100
  const ellipses = post.body.length > maxCharacters;

  return <Link href={`/posts/${post.id}`}>
      <Card className="h-full">
        <CardHeader className="font-semibold">
          {post.title} &rarr;
        </CardHeader>
        <CardContent>
          {post.body.substring(0, maxCharacters)}{ellipses ? "..." : ""}
        </CardContent>
      </Card>
    </Link>
}