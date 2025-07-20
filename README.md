# Blog Demo

This is a simple demo application built using <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://ui.shadcn.com/" target="_blank">shadcn</a>, and <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>. 

It allows you to view a user's blog posts. You can click into a post preview to read the full post, and switch between users.

## Viewing the demo

The application is publicly available at [nextjs-eta-three-35.vercel.app](https://nextjs-eta-three-35.vercel.app)

## Running locally

From the root folder, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application should then be available at [http://localhost:3000](http://localhost:3000).

## Notes

The intention of this demo was for me to learn a bit about nextjs and showcase some basic knowledge. This is my first next.js application I've worked on so there are likely better ways of doing much of what I have done.

I've used the following next.js concepts:
- The <a href="https://nextjs.org/docs/app" target="_blank">App Router</a>
- <a href="https://nextjs.org/docs/app/getting-started/layouts-and-pages">File-system based routing</a> (for layouts, pages, errors, and loading UIs)
- <a href="https://nextjs.org/docs/app/getting-started/server-and-client-components" target="_blank">Server and client components</a>
- <a href="https://nextjs.org/docs/app/getting-started/updating-data#what-are-server-functions" target="_blank">Server functions</a> to update data (in this case, to get and set the user ID cookie in cookieFunctions.ts)
- <a href="https://nextjs.org/docs/app/getting-started/error-handling#nested-error-boundaries">Error boundaries</a>