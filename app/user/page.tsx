import { getUserId } from "../cookieFunctions";
import { User } from "../types";
import UserDetails from "./userDetails";

async function fetchUser(userId: number): Promise<User> {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    const user = await response.json();
    return user[0];
}

export default async function UserPage() {
    const userId = await getUserId();
    if (userId) {
        const user = fetchUser(userId);
        return <UserDetails user={user}/>;
    } else {
        throw new Error("Cannot display user because no user ID was found");
    }
}
