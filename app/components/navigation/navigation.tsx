import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navigation() {
    const itemClassName = `${navigationMenuTriggerStyle()} hover:text-indigo-500 hover:bg-indigo-50`;
    return <><NavigationMenu>
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
                    {/* There seems to be a bug where the 3rd navigation menu item does not appear when I deploy to vercel (but does appear locally). */}
                    {/* So I've added an empty item here as a workaround */}
                </NavigationMenuLink>               
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={itemClassName}>
                    <Link href='/user'>User Details</Link>
                </NavigationMenuLink>               
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu></>
}
