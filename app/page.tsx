export default function Page() {
  return <div className="max-w-lg space-y-4">
    <p>This is a simple demo project built using the <a className="font-semibold hover:text-indigo-500" href="https://nextjs.org/" target="_blank">Next.js</a> framework, <a className="font-semibold hover:text-indigo-500" href="https://ui.shadcn.com/" target="_blank">Shadcn</a> components, and <a className="font-semibold hover:text-indigo-500" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.</p>
    <p>On the <a className="font-semibold hover:text-indigo-500" href="/posts">Posts</a> page you can view all posts associated with the current user. Click on a post preview to read the full post.</p>
    <p>You can switch users by clicking the user icon in the top right corner, and see more information about the current user on the <a className="font-semibold hover:text-indigo-500" href="/user">User Details</a> page.</p>
  </div>
}
