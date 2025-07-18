'use client'
import { use } from 'react'
import { Post } from './types'
import Link from 'next/link'
import styles from './posts.module.css';
 
export default function Posts({
  posts,
}: {
  posts: Promise<Post[]>
}) {
  const allPosts = use(posts)
 
  return (
    <div className={styles.grid}>
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
      <div className={styles.card}>
        <h4 className={styles.h4}>{post.title} &rarr;</h4>
        <p className={styles.p}>{post.body.substring(0, maxCharacters)}{ellipses ? "..." : ""}</p>
      </div>
    </Link>
}