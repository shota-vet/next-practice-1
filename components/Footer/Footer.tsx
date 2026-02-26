import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <Link className={styles.footerNavLink} href=".">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.footerNavLink} href="/news">
                News
              </Link>
            </li>
            <li>
              <Link className={styles.footerNavLink} href="/service">
                Service
              </Link>
            </li>
            <li>
              <Link className={styles.footerNavLink} href="/works">
                Works
              </Link>
            </li>
            <li>
              <Link className={styles.footerNavLink} href="/company">
                Company
              </Link>
            </li>
            <li>
              <Link className={styles.footerNavLink} href="/recruit">
                Recruit
              </Link>
            </li>
            <li>
              <Link className={styles.footerNavLink} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footerCopyRight}>&copy;PON DESIGN</div>
      </footer>
    </>
  );
};
