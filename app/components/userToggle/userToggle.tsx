import { getUserId } from "@/app/cookieFunctions";
import { User } from "../../types";
import UserAvatar from "./userAvatar";
import UserDropdownMenu from "./userDropdownMenu";

async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return users;
}

async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    const users = await response.json();
    return users[0];
}

export default async function UserToggle() {
    const users = fetchUsers();
    const currentUserId = await getUserId();
    const currentUser = fetchUser(currentUserId);
    
    return <div className="flex items-center gap-2">
        <UserAvatar user={currentUser}/>
        <UserDropdownMenu users={users}/>
    </div>
}
