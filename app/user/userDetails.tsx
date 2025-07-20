import { User } from "../types";
import NumPosts from "./numPosts";
import { getUserId } from "../cookieFunctions";
import NumComments from "./numComments";
import NumTodos from "./numTodos";

async function fetchUser(userId: number): Promise<User> {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    const user = await response.json();
    return user[0];
}

export default async function UserDetails() {
    const userId = await getUserId();
    const thisUser = await fetchUser(userId);

    return <div className="flex flex-col space-y-4">
        <div className="text-xl font-semibold">
            User Details
        </div>
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
        <div>
            <div className="font-semibold">Number of posts:</div>
            <NumPosts userId={thisUser.id}/>
        </div>
        <div>
            <div className="font-semibold">Number of comments:</div>
            <NumComments userId={thisUser.id}/>
        </div>
        <div>
            <div className="font-semibold">Number of todos:</div>
            <NumTodos userId={thisUser.id}/>
        </div>
    </div>
}