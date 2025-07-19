'use client'
import { User } from "./types";
import { use } from "react";

export default function UserDetails({
  user,
}: {
  user: Promise<User>
}) {
    const thisUser = use(user);

    return <div className="flex flex-col space-y-4">
        <div className="text-xl font-semibold">User Details</div>
        <div>
            <div className="font-semibold">Name:</div> {thisUser.name}
        </div>
        <div>
            <div className="font-semibold">Email:</div> {thisUser.email}
        </div>
        <div>
            <div className="font-semibold">Phone:</div> {thisUser.phone}
        </div>
        <div>
            <div className="font-semibold">Website:</div> {thisUser.website}
        </div>
    </div>
}