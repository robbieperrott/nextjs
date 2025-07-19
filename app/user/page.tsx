import { getUserId } from "../actions";
import { User } from "./types";
import UserDetails from "./userDetails";

async function fetchUser(): Promise<User> {
    const userId = await getUserId();
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    const user = await response.json();
    return user[0];
}

export default async function UserPage() {
    const user = fetchUser();
    return <UserDetails user={user}/>
}
