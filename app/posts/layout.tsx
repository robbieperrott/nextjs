import styles from "./posts.module.css";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.layout}>{children}</div>
}
