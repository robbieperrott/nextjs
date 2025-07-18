import Link from "next/link";

export default function Navigation() {
    return <div className="font-semibold flex flex-row space-x-4 px-8 py-4 border sticky top-0 bg-white">
        <Link className="link" href='/'>Home</Link>
        <Link className="link" href='/posts'>Posts</Link>
        <Link className="link" href='/user'>User Details</Link>
    </div>
}