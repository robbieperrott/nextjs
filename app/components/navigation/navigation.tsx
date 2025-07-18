import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navigation() {
    const itemClassName = `${navigationMenuTriggerStyle()} hover:text-indigo-500 hover:bg-indigo-50`;
    return <div className="py-2 px-4 border-b bg-white">
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={itemClassName}>
                    <Link href='/'>Home</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={itemClassName}>
                    <Link href='/posts'>Posts</Link>
                </NavigationMenuLink>         
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={itemClassName}>
                    <Link href='/user'>User Details</Link>
                </NavigationMenuLink>               
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu></div>
}
