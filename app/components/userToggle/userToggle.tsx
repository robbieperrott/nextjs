import { User } from "../../types";
import UserDropdownMenu from "./userDropdownMenu";

async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return users;
}

export default function UserToggle() {
    const users = fetchUsers();
    
    return <div className="flex content-center">
        <UserDropdownMenu users={users}/>
    </div>
}
