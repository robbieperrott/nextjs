import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navigation() {
    return <div className="py-2 px-4 border-b">
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href='/'>Home</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href='/posts'>Posts</Link>
                </NavigationMenuLink>         
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href='/user'>User Details</Link>
                </NavigationMenuLink>               
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu></div>
}
