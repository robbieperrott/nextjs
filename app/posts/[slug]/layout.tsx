import styles from "./post.module.css";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.layout}>{children}</div>
}