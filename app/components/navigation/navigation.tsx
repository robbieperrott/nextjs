import styles from './navigation.module.css';
import Link from "next/link";

export default function Navigation() {
    return <nav className={styles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/posts'>Posts</Link>
            </li>
            <li>
                <Link href='/user'>User Details</Link>
            </li>
        </ul>
    </nav>
}