import styles from './header.module.css';

export default function Header() {
    return <div className={styles.container}>
        <h1 className={styles.header}>Blog</h1>
        <div className={styles.subheader}>Explore your posts</div>
    </div>
}
