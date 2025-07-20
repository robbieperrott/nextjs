# Blog Demo

This is a simple demo application built using <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://ui.shadcn.com/" target="_blank">shadcn</a>, and <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>. 

It allows you to view a user's blog posts. You can click into a post preview to read the full post, and switch between users.

The intention of this demo was for me to learn a bit about nextjs and showcase some basic knowledge. This is my first next.js application I've worked on so there are likely better ways of doing much of what I have done.

## Viewing the demo

The application is publicly available at [nextjs-eta-three-35.vercel.app](https://nextjs-eta-three-35.vercel.app)

## Concepts Used

- The <a href="https://nextjs.org/docs/app" target="_blank">App Router</a>
- <a href="https://nextjs.org/docs/app/getting-started/layouts-and-pages">File-system based routing</a> (for layouts, pages, errors, and loading UIs)
- <a href="https://nextjs.org/docs/app/getting-started/server-and-client-components" target="_blank">Server and client components</a>
- <a href="https://nextjs.org/docs/app/getting-started/updating-data#what-are-server-functions" target="_blank">Server functions</a> to update data (in this case, to get and set the user ID cookie in cookieFunctions.ts)
- <a href="https://nextjs.org/docs/app/getting-started/error-handling#nested-error-boundaries">Error boundaries</a> to catch and display appropriate error UIs.
- <a href="https://nextjs.org/learn/dashboard-app/streaming" target="_blank">Streaming</a> on the User Details page. The requests for the number of posts, comments, and todos take different amounts of time to complete. As soon as there is a result of a request, it is rendered, rather than waiting for all the requests to complete.

## Areas for improvement
- Rather than switching between users in a toggle it would probably make more sense to log in / log out to change users.
- If you switch the active user while on the User Details page, the page waits for all the requests (the user request, and the requests for number of posts, comments, and photos) to complete, and there is no loading state to indicate that the new user data is being fetched. This makes the page appear to be unresponsive for a short time.

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
