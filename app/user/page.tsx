import { getUserId } from "../cookieFunctions";
import UserDetails from "./userDetails";

export default async function UserPage() {
    const userId = await getUserId();
    if (userId) {
        return <UserDetails />;
    } else {
        throw new Error("Cannot display user because no user ID was found");
    }
}
