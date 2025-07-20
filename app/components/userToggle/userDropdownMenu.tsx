'use client'
import { getUserId, setUserId } from "@/app/cookieFunctions";
import { User } from "../../types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { use } from "react";
import { Button } from "@/components/ui/button";

export default function UserDropdownMenu({
  users,
}: {
  users: Promise<User[]>
}) {
    const allUsers = use(users);

    async function handleUserToggle(newUserId: number) {
      const userId = await getUserId();
      if (userId != newUserId) {
        await setUserId(newUserId);
      }
    }

    return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Switch User</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              {allUsers.map((user: User) => <DropdownMenuItem key={user.id} onClick={() => {handleUserToggle(user.id)}}>{user.name}</DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
    )
}
