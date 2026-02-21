import Link from "next/link";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <div className={styles.button}>
      <Link className={styles.moreButton} href="#">
        MORE
      </Link>
    </div>
  );
}
