'use client'
import { User } from "@/app/types"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { use } from "react";

export default function UserAvatar({
  user,
}: {
  user: Promise<User>
}) {
    const currentUser = use(user);
    const userNames = currentUser.name.split(' ');
    const initials = `${userNames[0].charAt(0)}${userNames[1].charAt(0)}`
    return <Avatar className={`${userColorCss(currentUser.id)} flex items-center place-content-center`}>
            <AvatarFallback className="text-sm">{initials}</AvatarFallback> 
        </Avatar>
}

const colors = ["bg-red-200", "bg-orange-200", "bg-yellow-200", "bg-lime-200", "bg-green-200", "bg-teal-200", "bg-blue-200",  "bg-purple-200", "bg-pink-200", "bg-rose-200"];

const userColorCss = (userId: number) => {
  const index = userId % colors.length;
  return colors[index];
}